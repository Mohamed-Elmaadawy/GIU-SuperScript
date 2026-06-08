// @ts-check
const { test, expect } = require('@playwright/test');
const fs   = require('fs');
const path = require('path');

const HOME_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx';

const fix = name => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');
const scriptSrc = fs.readFileSync(
    path.join(__dirname, '..', 'scripts', 'GIU Proctoring Reminder.js'),
    'utf8'
);
const homeHtml      = fix('home.html');
const timetableHtml = fix('timetable.html');

// Route Home + timetable to fixtures, inject script, return the API hook.
async function setup(page, { timetable = timetableHtml } = {}) {
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
    await page.route('**/Home.aspx', route => route.fulfill({ contentType: 'text/html; charset=utf-8', body: homeHtml }));
    await page.route('**/ViewTimeTable_m.aspx', route => route.fulfill({ contentType: 'text/html; charset=utf-8', body: timetable }));
    await page.goto(HOME_URL, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => localStorage.clear());
    await page.evaluate(scriptSrc);
}

test.describe('GIU Proctoring Reminder', () => {
    test('script injects the test hook', async ({ page }) => {
        await setup(page);
        const ok = await page.evaluate(() => typeof window.__giuProctorReminder === 'object');
        expect(ok).toBe(true);
    });

    test('parseSessions extracts 4 own + 1 cover session, sorted, typed', async ({ page }) => {
        await setup(page);
        const sessions = await page.evaluate((html) => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return window.__giuProctorReminder.parseSessions(doc).map(s => ({
                courseCode: s.courseCode, examName: s.examName, hall: s.hall,
                start: s.start.toISOString(), end: s.end.toISOString(),
                type: s.type, controlRoom: s.controlRoom, role: s.role,
            }));
        }, timetableHtml);

        expect(sessions).toHaveLength(5);
        // sorted ascending by start
        expect(sessions[0].courseCode).toBe('BSAD409');
        expect(sessions[0].hall).toBe('S1.107');
        expect(sessions[0].type).toBe('Supervisor');
        expect(sessions[0].controlRoom).toBe('S.104');
        expect(sessions[0].role).toBe('own');
        // the cover row (Jun 23) is sorted between Jun 21 and Jun 25
        const cover = sessions.find(s => s.role === 'cover');
        expect(cover.courseCode).toBe('ENMR604');
        expect(cover.hall).toBe('Reserved Area');
    });

    test('parseExamString splits campus/program/code/exam', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() =>
            window.__giuProctorReminder.parseExamString(
                'Jun 8 2026 8:30AM ---> GIU-Cairo.Business Administration 4th - BSAD409 Applied Statistics'
            )
        );
        expect(r.program).toBe('Business Administration 4th');
        expect(r.courseCode).toBe('BSAD409');
        expect(r.examName).toBe('Applied Statistics');
    });

    test('pickNext returns the soonest future session', async ({ page }) => {
        await setup(page);
        const code = await page.evaluate((html) => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const sessions = window.__giuProctorReminder.parseSessions(doc);
            const now = new Date('2026-06-10T00:00:00');
            return window.__giuProctorReminder.pickNext(sessions, now).courseCode;
        }, timetableHtml);
        expect(code).toBe('MATH203'); // Jun 16 — first after Jun 10
    });

    test('pickNext returns null when all sessions are past', async ({ page }) => {
        await setup(page);
        const res = await page.evaluate((html) => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const sessions = window.__giuProctorReminder.parseSessions(doc);
            return window.__giuProctorReminder.pickNext(sessions, new Date('2027-01-01T00:00:00'));
        }, timetableHtml);
        expect(res).toBeNull();
    });

    test('saveCache then loadCache round-trips sessions with Date rehydration', async ({ page }) => {
        await setup(page);
        const res = await page.evaluate((html) => {
            const api = window.__giuProctorReminder;
            const doc = new DOMParser().parseFromString(html, 'text/html');
            api.saveCache(api.parseSessions(doc));
            const c = api.loadCache();
            return {
                n: c.sessions.length,
                isDate: c.sessions[0].start instanceof Date,
                firstCode: c.sessions[0].courseCode,
                hasTs: typeof c.fetchedAt === 'number',
            };
        }, timetableHtml);
        expect(res.n).toBe(5);
        expect(res.isDate).toBe(true);
        expect(res.firstCode).toBe('BSAD409');
        expect(res.hasTs).toBe(true);
    });

    test('isStale is false for fresh and true for old timestamps', async ({ page }) => {
        await setup(page);
        const res = await page.evaluate(() => {
            const api = window.__giuProctorReminder;
            const now = Date.now();
            return { fresh: api.isStale(now), old: api.isStale(now - 7 * 60 * 60 * 1000) };
        });
        expect(res.fresh).toBe(false);
        expect(res.old).toBe(true);
    });
});
