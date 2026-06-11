// @ts-check
const { test, expect } = require('@playwright/test');
const fs   = require('fs');
const path = require('path');

const HOME_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx';

const fix = name => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');
const scriptSrc = fs.readFileSync(
    path.join(__dirname, '..', 'scripts', 'individual', 'GIU Teaching Load.js'),
    'utf8'
);
const homeHtml         = fix('home.html');
const scheduleHtml     = fix('schedule.html');
const scheduleEmptyHtml = fix('schedule-empty.html');
const notificationHtml = fix('notification.html');

// Route Home + the schedule + notification pages to fixtures, inject script.
async function setup(page, { schedule = scheduleHtml, notification = notificationHtml, beforeScript } = {}) {
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
    await page.route('**/Home.aspx', route => route.fulfill({ contentType: 'text/html; charset=utf-8', body: homeHtml }));
    await page.route('**/SearchAcademicScheduled_001_m.aspx', route => route.fulfill({ contentType: 'text/html; charset=utf-8', body: schedule }));
    await page.route('**/NotificationSystem_SendEmail_m.aspx', route => route.fulfill({ contentType: 'text/html; charset=utf-8', body: notification }));
    await page.goto(HOME_URL, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => localStorage.clear());
    if (beforeScript) await page.evaluate(beforeScript);
    await page.evaluate(scriptSrc);
}

test.describe('GIU Teaching Load', () => {
    test('script injects the test hook', async ({ page }) => {
        await setup(page);
        const ok = await page.evaluate(() => typeof window.__giuTeachingLoad === 'object');
        expect(ok).toBe(true);
    });

    test('widget injects its stylesheet', async ({ page }) => {
        await setup(page);
        await expect.poll(() => page.evaluate(() => !!document.getElementById('gius-tl-style'))).toBe(true);
    });

    test('parseFullName strips Mr./Miss. title and trims', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() => {
            const api = window.__giuTeachingLoad;
            return [
                api.parseFullName('Mr. Mohamed Elmaadawy'),
                api.parseFullName('Miss.  Sara  Ali '),
                api.parseFullName('Dr. Ahmed Sherif'),
            ];
        });
        expect(r[0]).toBe('Mohamed Elmaadawy');
        expect(r[1]).toBe('Sara Ali');
        expect(r[2]).toBe('Ahmed Sherif');
    });

    test('readNameFromDoc reads the single dropdown option', async ({ page }) => {
        await setup(page);
        const name = await page.evaluate((html) => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return window.__giuTeachingLoad.readNameFromDoc(doc);
        }, notificationHtml);
        expect(typeof name).toBe('string');
        expect(name.length).toBeGreaterThan(0);
        expect(name).not.toMatch(/^(Mr|Miss|Dr)\b/i); // title already stripped
    });

    test('parseScheduleDoc extracts sessions from the transposed grid', async ({ page }) => {
        await setup(page);
        const sessions = await page.evaluate((html) => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return window.__giuTeachingLoad.parseScheduleDoc(doc);
        }, scheduleHtml);
        expect(Array.isArray(sessions)).toBe(true);
        expect(sessions.length).toBeGreaterThan(0);
        for (const s of sessions) {
            expect(typeof s.day).toBe('string');      // weekday from col0, e.g. "Saturday"
            expect(typeof s.slot).toBe('string');      // period label, e.g. "1st"
            expect(typeof s.tutorial).toBe('string');  // Group dd, e.g. "INCS 406 - 4INF20 (Practical)"
            expect('location' in s).toBe(true);        // Location dd, e.g. "A2.215"
        }
        // Known fixture row: Saturday, 1st period, group 4INF20, room A2.215.
        const sat20 = sessions.find(s => s.tutorial.includes('4INF20'));
        expect(sat20.day).toBe('Saturday');
        expect(sat20.slot).toMatch(/^1st/);
        expect(sat20.location).toBe('A2.215');
    });

    test('parseScheduleDoc on empty schedule yields no records', async ({ page }) => {
        await setup(page);
        const n = await page.evaluate((html) => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            return window.__giuTeachingLoad.parseScheduleDoc(doc).length;
        }, scheduleEmptyHtml);
        expect(n).toBe(0);
    });

    test('splitByDay returns today + the whole week grouped by day', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() => {
            const api = window.__giuTeachingLoad;
            const sessions = [
                { day: 'Saturday', slot: 'a', tutorial: 't1', location: 'l1' },
                { day: 'Sunday',   slot: 'b', tutorial: 't2', location: 'l2' },
                { day: 'Monday',   slot: 'c', tutorial: 't3', location: 'l3' },
            ];
            // Force "today" = Sunday (WEEK index 1 — Saturday is index 0).
            return api.splitByDay(sessions, 'Sunday');
        });
        expect(r.today.map(s => s.tutorial)).toEqual(['t2']);
        // rest = every teaching day with sessions, in WEEK order (incl. past days + today).
        expect(r.rest.map(d => d.day)).toEqual(['Saturday', 'Sunday', 'Monday']);
        expect(r.rest.flatMap(d => d.sessions.map(s => s.tutorial))).toEqual(['t1', 't2', 't3']);
    });

    test('displayTutorial swaps the course code for its full name, keeps the group', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() => {
            const api = window.__giuTeachingLoad;
            return [
                api.displayTutorial('INCS 406 - 4INF20 (Practical)'),
                api.displayTutorial('MATH 203 - 4CSE1'),
                api.displayTutorial('ZZZ 999 - 1ABC'),   // unknown code passes through
                api.displayTutorial('No Dashes Here'),    // no group suffix passes through
            ];
        });
        expect(r[0]).toBe('Distributed &Web-based Systems - 4INF20 (Practical)');
        expect(r[1]).toBe('Mathematics II - 4CSE1');
        expect(r[2]).toBe('ZZZ 999 - 1ABC');
        expect(r[3]).toBe('No Dashes Here');
    });

    test('saveCache then loadCache round-trips sessions + timestamp', async ({ page }) => {
        await setup(page);
        const res = await page.evaluate(() => {
            const api = window.__giuTeachingLoad;
            api.saveCache([{ day: 'Sunday', slot: '8:30 - 10:00', tutorial: 'CSEN102 4CSE2', location: 'C7.01' }]);
            const c = api.loadCache();
            return { n: c.sessions.length, first: c.sessions[0].tutorial, hasTs: typeof c.fetchedAt === 'number' };
        });
        expect(res.n).toBe(1);
        expect(res.first).toBe('CSEN102 4CSE2');
        expect(res.hasTs).toBe(true);
    });

    test('isStale false for fresh, true for >6h old', async ({ page }) => {
        await setup(page);
        const res = await page.evaluate(() => {
            const api = window.__giuTeachingLoad;
            const now = Date.now();
            return { fresh: api.isStale(now), old: api.isStale(now - 7 * 60 * 60 * 1000) };
        });
        expect(res.fresh).toBe(false);
        expect(res.old).toBe(true);
    });

    test('fetchScheduleViaIframe resolves session records from the rendered page', async ({ page }) => {
        await setup(page);
        const n = await page.evaluate(async () => {
            const sessions = await window.__giuTeachingLoad.fetchScheduleViaIframe('Mohamed Elmaadawy', 8000);
            return sessions.length;
        });
        expect(n).toBeGreaterThan(0);
    });

    test('fetchScheduleViaIframe rejects on timeout when table never appears', async ({ page }) => {
        await setup(page, { schedule: homeHtml }); // Home page has no schedule table
        const err = await page.evaluate(async () => {
            try { await window.__giuTeachingLoad.fetchScheduleViaIframe('Nobody', 1500); return 'resolved'; }
            catch (e) { return String(e.message || e); }
        });
        expect(err).toContain('timeout');
    });

    test('widget renders at the TOP of Home, above other widgets', async ({ page }) => {
        await setup(page, {
            beforeScript: () => {
                const target = document.getElementById('MainContent_div_grid');
                const other = document.createElement('div');
                other.id = 'gius-att-widget';
                other.textContent = 'Attendance';
                target.insertAdjacentElement('afterend', other);
            },
        });
        await expect(page.locator('#gius-tl-widget')).toBeVisible({ timeout: 6000 });
        // teaching-load widget must come before the attendance widget in document order
        const order = await page.evaluate(() => {
            const tl = document.getElementById('gius-tl-widget');
            const att = document.getElementById('gius-att-widget');
            return tl.compareDocumentPosition(att) & Node.DOCUMENT_POSITION_FOLLOWING ? 'tl-first' : 'att-first';
        });
        expect(order).toBe('tl-first');
    });

    test('today block shows slot, tutorial and location; rest-of-week expands', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-tl-widget')).toBeVisible({ timeout: 6000 });
        // Render a known view deterministically via the hook (independent of real "today").
        await page.evaluate(() => {
            window.__giuTeachingLoad._renderView({
                today: [{ day: 'Sunday', slot: '08:30 - 10:00', tutorial: 'CSEN102 4CSE2 Tutorial', location: 'C7.01' }],
                rest: [{ day: 'Monday', sessions: [{ day: 'Monday', slot: '10:15 - 11:45', tutorial: 'MATH203 4CSE1', location: 'C6.02' }] }],
            });
        });
        await expect(page.locator('.gius-tl-today')).toContainText('08:30 - 10:00');
        await expect(page.locator('.gius-tl-today')).toContainText('CSEN102 4CSE2 Tutorial');
        await expect(page.locator('.gius-tl-today')).toContainText('C7.01');
        const toggle = page.locator('.gius-tl-toggle');
        await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        await toggle.click();
        await expect(toggle).toHaveAttribute('aria-expanded', 'true');
        await expect(page.locator('.gius-tl-expand-wrapper')).toContainText('MATH203 4CSE1');
    });

    test('empty today shows a no-sessions message but still lists the week', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-tl-widget')).toBeVisible({ timeout: 6000 });
        await page.evaluate(() => {
            window.__giuTeachingLoad._renderView({
                today: [],
                rest: [{ day: 'Wednesday', sessions: [{ day: 'Wednesday', slot: '8:30 - 10:00', tutorial: 'X', location: 'Y' }] }],
            });
        });
        await expect(page.locator('.gius-tl-today')).toContainText('No teaching sessions today');
        await expect(page.locator('.gius-tl-toggle')).toBeVisible();
    });

    test('widget adapts to GIU dark mode', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-tl-widget')).toBeVisible({ timeout: 6000 });
        const light = await page.evaluate(() => getComputedStyle(document.getElementById('gius-tl-widget')).backgroundColor);
        expect(light).toBe('rgb(255, 255, 255)');
        await page.evaluate(() => document.documentElement.classList.add('gius-dark'));
        const dark = await page.evaluate(() => getComputedStyle(document.getElementById('gius-tl-widget')).backgroundColor);
        expect(dark).toBe('rgb(30, 30, 46)');
    });

    test('boot renders the widget end-to-end from the fixtures', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-tl-widget')).toBeVisible({ timeout: 8000 });
        await expect(page.locator('.gius-tl-today-head')).toContainText('Today', { timeout: 8000 });
    });

    test('expanded "Rest of week" survives a background re-render', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-tl-widget')).toBeVisible({ timeout: 8000 });
        await page.evaluate(() => {
            window.__giuTeachingLoad._renderView({
                today: [{ day: 'X', slot: 's', tutorial: 't', location: 'l' }],
                rest: [{ day: 'Monday', sessions: [{ day: 'Monday', slot: 's2', tutorial: 't2', location: 'l2' }] }],
            });
        });
        await page.locator('.gius-tl-toggle').click();
        await expect(page.locator('#gius-tl-rest')).toHaveClass(/gius-tl-expanded/);
        await page.evaluate(() => window.__giuTeachingLoad._rerender());
        await expect(page.locator('.gius-tl-toggle')).toHaveAttribute('aria-expanded', 'true');
        await expect(page.locator('#gius-tl-rest')).toHaveClass(/gius-tl-expanded/);
    });

    test('shows an error + retry when fetch fails and no cache exists', async ({ page }) => {
        await setup(page, { notification: homeHtml }); // name resolve fails (no dropdown)
        await expect(page.locator('#gius-tl-widget')).toContainText("Couldn't load schedule", { timeout: 8000 });
        await expect(page.locator('#gius-tl-retry')).toBeVisible();
    });

    test('renderView escapes portal-derived HTML in tutorial and location', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-tl-widget')).toBeVisible({ timeout: 6000 });
        await page.evaluate(() => {
            window.__giuTeachingLoad._renderView({
                today: [{ day: 'X', slot: '<b>', tutorial: '<img onerror=x>', location: '"&' }],
                rest: [],
            });
        });
        const html = await page.evaluate(() => document.querySelector('.gius-tl-item').innerHTML);
        expect(html).not.toContain('<img');
        expect(html).toContain('&lt;img');
        expect(html).toContain('&amp;');
    });
});

module.exports = { setup, scheduleHtml, scheduleEmptyHtml, notificationHtml };
