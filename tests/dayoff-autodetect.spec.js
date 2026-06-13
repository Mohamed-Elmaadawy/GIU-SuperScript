// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const HOME_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx';
const fix = name => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');
const scriptSrc = fs.readFileSync(
    path.join(__dirname, '..', 'scripts', 'individual', 'GIU Staff Attendance Script.js'), 'utf8');
const homeHtml = fix('att-home.html');
const swiftHtml = fix('att-swift.html');

// Inject the script with auto-run disabled, then drive the hook by hand.
async function setup(page) {
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
    await page.route('**/Home.aspx', r => r.fulfill({ contentType: 'text/html; charset=utf-8', body: homeHtml }));
    await page.route('**/SwiftReports_m.aspx**', r => r.fulfill({ contentType: 'text/html; charset=utf-8', body: swiftHtml }));
    await page.goto(HOME_URL, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => localStorage.clear());
    await page.evaluate(() => { window.__giuAttDisableAutoRun = true; });
    await page.evaluate(scriptSrc);
}

test.describe('day-off auto-state helpers', () => {
    test('isDayOffConfigured reflects base code and schedule', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() => {
            const api = window.__giuAttHome;
            const unset = api.isDayOffConfigured();
            localStorage.setItem('selectedDay', 'Sun');
            const withBase = api.isDayOffConfigured();
            localStorage.removeItem('selectedDay');
            localStorage.setItem('giuDayOffScheduleV1', JSON.stringify([{ startDate: '2026-01-01', code: 'Sat' }]));
            const withSchedule = api.isDayOffConfigured();
            return { unset, withBase, withSchedule };
        });
        expect(r.unset).toBe(false);
        expect(r.withBase).toBe(true);
        expect(r.withSchedule).toBe(true);
    });

    test('get/setDayOffAutoState round-trips and defaults to null', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() => {
            const api = window.__giuAttHome;
            const initial = api.getDayOffAutoState();
            api.setDayOffAutoState({ status: 'applied', code: 'Sun', occ: 6, acknowledged: false });
            return { initial, stored: api.getDayOffAutoState() };
        });
        expect(r.initial).toBe(null);
        expect(r.stored).toEqual({ status: 'applied', code: 'Sun', occ: 6, acknowledged: false });
    });
});
