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
});
