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
});
