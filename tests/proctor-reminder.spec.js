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
const homeHtml          = fix('home.html');
const timetableHtml     = fix('timetable.html');
const timetableEmptyHtml = fix('timetable-empty.html');
const timetableSameDayHtml = fix('timetable-sameday.html');

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

    test('buildICS produces a valid VCALENDAR with one VEVENT per session and two alarms each', async ({ page }) => {
        await setup(page);
        const ics = await page.evaluate((html) => {
            const api = window.__giuProctorReminder;
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return api.buildICS(api.parseSessions(doc));
        }, timetableHtml);

        expect(ics.startsWith('BEGIN:VCALENDAR')).toBe(true);
        expect(ics.trim().endsWith('END:VCALENDAR')).toBe(true);
        expect((ics.match(/BEGIN:VEVENT/g) || []).length).toBe(5);
        expect((ics.match(/BEGIN:VALARM/g) || []).length).toBe(10); // 2 per event
        expect(ics).toContain('TRIGGER:-P1D');
        expect(ics).toContain('TRIGGER:-PT1H');
        expect(ics).toContain('SUMMARY:Supervising: BSAD409 Applied Statistics'); // type "Supervisor" → "Supervising"
        // Jun 8 2026 8:30 local Africa/Cairo (UTC+3 in summer) → 05:30Z
        expect(ics).toMatch(/DTSTART:20260608T0[0-9]{5}Z/);
    });

    test('buildICS single session', async ({ page }) => {
        await setup(page);
        const n = await page.evaluate((html) => {
            const api = window.__giuProctorReminder;
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const one = api.parseSessions(doc)[0];
            const ics = api.buildICS(one);
            return (ics.match(/BEGIN:VEVENT/g) || []).length;
        }, timetableHtml);
        expect(n).toBe(1);
    });

    test('googleCalUrl encodes the event with a date range', async ({ page }) => {
        await setup(page);
        const url = await page.evaluate((html) => {
            const api = window.__giuProctorReminder;
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return api.googleCalUrl(api.parseSessions(doc)[0]);
        }, timetableHtml);
        expect(url).toContain('https://calendar.google.com/calendar/render?action=TEMPLATE');
        expect(url).toContain('text=Supervising%3A%20BSAD409');
        expect(url).toMatch(/dates=20260608T0[0-9]{5}Z%2F20260608T0[0-9]{5}Z/);
        expect(url).toContain('location=');
    });

    test('mailtoUrl builds a reminder email', async ({ page }) => {
        await setup(page);
        const url = await page.evaluate((html) => {
            const api = window.__giuProctorReminder;
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return api.mailtoUrl(api.parseSessions(doc)[0]);
        }, timetableHtml);
        expect(url.startsWith('mailto:?')).toBe(true);
        expect(url).toContain('subject=');
        expect(url).toContain('BSAD409');
        expect(url).toContain('body=');
        expect(url).not.toContain('+'); // spaces must be %20 in mailto URIs
    });

    test('widget renders the next session after background fetch', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        await expect(page.locator('#gius-pr-next')).toContainText('Supervising', { timeout: 5000 });
        // soonest future relative to real "now" (fixture has Jun 2026 dates)
        await expect(page.locator('#gius-pr-next')).toContainText('Hall');
    });

    test('widget renders directly after the Target List block', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        // widget must be the immediate next sibling of #MainContent_div_grid (Target List)
        const isAfterTargetList = await page.evaluate(() =>
            document.getElementById('MainContent_div_grid')?.nextElementSibling?.id === 'gius-pr-widget'
        );
        expect(isAfterTargetList).toBe(true);
        // no "Own" badge is rendered (script shows only the user's own schedule)
        await expect(page.locator('#gius-pr-widget')).not.toContainText('Own');
    });

    test('next block shows all duties on the next session day, end time, and conditional control room', async ({ page }) => {
        await setup(page, { timetable: timetableSameDayHtml }); // two duties on Dec 1 2030
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        const cards = page.locator('#gius-pr-next .gius-pr-next-card');
        await expect(cards).toHaveCount(2);
        await expect(page.locator('.gius-pr-next-head')).toContainText('2 duties');
        // end time present as a range
        await expect(cards.first().locator('.gius-pr-next-time')).toContainText('–');
        // Supervisor duty (BSAD409) shows Control Room; non-supervisor (MATH203) does not. Role text itself is not shown.
        await expect(cards.filter({ hasText: 'BSAD409' })).toContainText('Control Room');
        await expect(cards.filter({ hasText: 'MATH203' })).not.toContainText('Control Room');
        await expect(page.locator('#gius-pr-next')).not.toContainText('Observer');
    });

    test('widget lists all upcoming sessions on expand', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        const toggle = page.locator('#gius-pr-toggle-all');
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        const rows = page.locator('.gius-pr-row');
        await expect(rows.first()).toBeVisible();
        // cover row carries a Covering badge
        await expect(page.locator('.gius-pr-badge-cover')).toHaveCount(1);
    });

    test('an in-progress duty is shown as ongoing', async ({ page }) => {
        const fmt = ms => new Date(ms).toLocaleString('en-US', { hour12: true }).replace(',', '');
        const row = (startMs, endMs, code, name, hall) =>
            `<tr><td>x ---&gt; GIU-Cairo.Engineering 1st - ${code} ${name}</td><td>${hall}</td><td>${fmt(startMs)}</td><td>${fmt(endMs)}</td><td>Supervisor</td><td>S.1</td></tr>`;
        const now = Date.now();
        const html = `<!DOCTYPE html><html><body><form action="./ViewTimeTable_m.aspx">
            <table id="MainContent_tmTblDg"><tbody>
            <tr><td>Exam</td><td>Hall</td><td>Start</td><td>End</td><td>Type</td><td>Control Room</td></tr>
            ${row(now - 3600000, now + 3600000, 'TEST101', 'Live Exam', 'H1')}
            ${row(now + 2 * 86400000, now + 2 * 86400000 + 3600000, 'TEST202', 'Later Exam', 'H2')}
            </tbody></table>
            <table id="MainContent_coverDG"><tbody>
            <tr><td>Exam</td><td>Hall</td><td>Start</td><td>End</td><td>Type</td><td>Control Room</td></tr>
            </tbody></table></form></body></html>`;
        await setup(page, { timetable: html });
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        await expect(page.locator('.gius-pr-next-head')).toContainText('ongoing');
        await expect(page.locator('#gius-pr-next')).toContainText('TEST101');
    });

    test('expanded "Remaining exams" survives a re-render', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        await page.locator('#gius-pr-toggle-all').click();
        await expect(page.locator('#gius-pr-all')).toHaveClass(/gius-pr-expanded/);
        // a background re-render (e.g. fetch completing) must not collapse it
        await page.evaluate(() => window.__giuProctorReminder._rerender());
        await expect(page.locator('#gius-pr-toggle-all')).toHaveAttribute('aria-expanded', 'true');
        await expect(page.locator('#gius-pr-all')).toHaveClass(/gius-pr-expanded/);
    });

    test('Download all is hidden when only one upcoming session', async ({ page }) => {
        const html = `<!DOCTYPE html><html><body><form action="./ViewTimeTable_m.aspx">
            <table id="MainContent_tmTblDg"><tbody>
            <tr><td>Exam</td><td>Hall</td><td>Start</td><td>End</td><td>Type</td><td>Control Room</td></tr>
            <tr><td>x ---&gt; GIU-Cairo.Engineering 1st - SOLO101 Only Exam</td><td>H9</td><td>12/1/2030 9:00:00 AM</td><td>12/1/2030 11:00:00 AM</td><td>Supervisor</td><td>S.9</td></tr>
            </tbody></table>
            <table id="MainContent_coverDG"><tbody>
            <tr><td>Exam</td><td>Hall</td><td>Start</td><td>End</td><td>Type</td><td>Control Room</td></tr>
            </tbody></table></form></body></html>`;
        await setup(page, { timetable: html });
        await expect(page.locator('#gius-pr-next')).toContainText('SOLO101', { timeout: 5000 });
        await expect(page.locator('#gius-pr-ics-all')).toHaveCount(0); // no "Download all"
        await expect(page.locator('#gius-pr-toggle-all')).toHaveCount(0); // nothing remaining
    });

    test('widget adapts to GIU dark mode (html.gius-dark)', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        const lightBg = await page.evaluate(() => getComputedStyle(document.getElementById('gius-pr-widget')).backgroundColor);
        expect(lightBg).toBe('rgb(255, 255, 255)'); // #ffffff
        await page.evaluate(() => document.documentElement.classList.add('gius-dark'));
        const darkBg = await page.evaluate(() => getComputedStyle(document.getElementById('gius-pr-widget')).backgroundColor);
        expect(darkBg).toBe('rgb(30, 30, 46)'); // #1e1e2e Catppuccin base
    });

    test('empty timetable shows empty state', async ({ page }) => {
        await setup(page, { timetable: timetableEmptyHtml }); // tables present, no data rows
        await expect(page.locator('.gius-pr-empty-state')).toContainText('No proctoring scheduled', { timeout: 5000 });
        await expect(page.locator('.gius-pr-empty-title')).toContainText("You're all caught up");
    });

    test('login redirect shows error and retry', async ({ page }) => {
        await setup(page, { timetable: homeHtml }); // no timetable tables → login redirect
        await expect(page.locator('#gius-pr-widget')).toContainText("Couldn't load schedule", { timeout: 5000 });
        await expect(page.locator('#gius-pr-retry')).toBeVisible();
    });

    test('next session shows three export buttons', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        const actions = page.locator('#gius-pr-next .gius-pr-actions');
        await expect(actions.locator('.gius-pr-ics')).toBeVisible();
        await expect(actions.locator('.gius-pr-gcal')).toBeVisible();
        await expect(actions.locator('.gius-pr-mail')).toBeVisible();
    });

    test('an "Add all to calendar" button exists and triggers a download', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        const btn = page.locator('#gius-pr-ics-all');
        await expect(btn).toBeVisible();
        const dl = page.waitForEvent('download');
        await btn.click();
        const download = await dl;
        expect(download.suggestedFilename()).toMatch(/proctoring.*\.ics/);
    });

    test('gcal button has the correct href target', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        const href = await page.locator('#gius-pr-next .gius-pr-gcal').getAttribute('href');
        expect(href).toContain('calendar.google.com');
    });

    test('widget injects its stylesheet', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-pr-widget')).toBeVisible({ timeout: 5000 });
        const hasStyle = await page.evaluate(() => !!document.getElementById('gius-pr-style'));
        expect(hasStyle).toBe(true);
    });
});
