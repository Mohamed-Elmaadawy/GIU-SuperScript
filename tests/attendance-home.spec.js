// @ts-check
const { test, expect } = require('@playwright/test');
const fs   = require('fs');
const path = require('path');

const HOME_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx';

const fix = name => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');
const scriptSrc = fs.readFileSync(
    path.join(__dirname, '..', 'scripts', 'individual', 'GIU Staff Attendance Script.js'),
    'utf8'
);
const homeHtml  = fix('att-home.html');
const swiftHtml = fix('att-swift.html');

async function routeAndGoto(page, swift) {
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
    await page.route('**/Home.aspx', route => route.fulfill({ contentType: 'text/html; charset=utf-8', body: homeHtml }));
    await page.route('**/SwiftReports_m.aspx**', route => route.fulfill({ contentType: 'text/html; charset=utf-8', body: swift }));
    await page.goto(HOME_URL, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => localStorage.clear());
}

// Manual mode: inject the script with auto-run disabled, then drive the hook by hand.
async function setup(page, { swift = swiftHtml } = {}) {
    await routeAndGoto(page, swift);
    await page.evaluate(() => { window.__giuAttDisableAutoRun = true; });
    await page.evaluate(scriptSrc);
}

// Auto mode: let the script's Home auto-run fire (iframe fetch → render).
async function setupAuto(page, { swift = swiftHtml } = {}) {
    await routeAndGoto(page, swift);
    await page.evaluate(scriptSrc);
}

test.describe('GIU Attendance Home Summary', () => {
    test('exposes the test hook and detects the Home page', async ({ page }) => {
        await setup(page);
        const ok = await page.evaluate(() => window.__giuAttHome && window.__giuAttHome.isHomePage());
        expect(ok).toBe(true);
    });

    test('computeCurrentMonthSummary returns the latest period with present-day count', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() => {
            const doc = new DOMParser().parseFromString(`
                <table id="MainContent_DG_SwiftReport">
                  <tr><td>Serial</td><td>Day</td><td>FirstIn</td><td>LastOut</td><td>Duration</td></tr>
                  <tr><td>1</td><td>2030-12-11</td><td>8:05:00 AM</td><td>4:05:00 PM</td><td>08:00:00</td></tr>
                  <tr><td>2</td><td>2030-12-14</td><td>8:00:00 AM</td><td>4:00:00 PM</td><td>08:00:00</td></tr>
                  <tr><td>3</td><td>2030-12-15</td><td>8:10:00 AM</td><td>4:10:00 PM</td><td>08:00:00</td></tr>
                  <tr><td>4</td><td>2030-12-16</td><td>8:00:00 AM</td><td>4:00:00 PM</td><td>08:00:00</td></tr>
                </table>`, 'text/html');
            const rows = window.__giuAttHome.getAttendanceRows(doc);
            // todayYmd inside the fixture's payroll period (2030-12-11 → 2031-01-10)
            const s = window.__giuAttHome.computeCurrentMonthSummary(rows, '2030-12-20');
            return {
                empty: !!s.empty,
                label: s.label,
                presentDays: s.stats && s.stats.presentDays,
                hasActual: !!(s.stats && s.stats.actualHM),
                hasBalance: !!(s.stats && s.stats.balanceHM),
                absentIsArray: Array.isArray(s.stats && s.stats.absentDayDetails),
            };
        });
        expect(r.empty).toBe(false);
        expect(typeof r.label).toBe('string');
        expect(r.presentDays).toBe(4);
        expect(r.hasActual).toBe(true);
        expect(r.hasBalance).toBe(true);
        expect(r.absentIsArray).toBe(true);
    });

    test('computeCurrentMonthSummary returns empty for no rows', async ({ page }) => {
        await setup(page);
        const empty = await page.evaluate(() => window.__giuAttHome.computeCurrentMonthSummary([]).empty);
        expect(empty).toBe(true);
    });

    test('computeCurrentMonthSummary falls back to today\'s period when data lags a period flip', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() => {
            // Rows only in the 2030-12 period, but "today" is in the next period:
            // must NOT show last month — must return the (empty) current period.
            const rows = [
                { date: '2030-12-14', firstIn: '8:00:00 AM', lastOut: '4:00:00 PM', duration: '08:00:00' },
            ];
            const s = window.__giuAttHome.computeCurrentMonthSummary(rows, '2031-01-12');
            return { label: s.label, presentDays: s.stats.presentDays };
        });
        expect(r.label).toBe('2031-01-11 → 2031-02-10');
        expect(r.presentDays).toBe(0);
    });

    test('fetchReportViaIframe loads, executes, and returns rows', async ({ page }) => {
        await setup(page);
        const n = await page.evaluate(async () => {
            const rows = await window.__giuAttHome.fetchReportViaIframe();
            return rows.length;
        });
        expect(n).toBe(4);
        // iframe is cleaned up
        const iframes = await page.evaluate(() => document.querySelectorAll('iframe[data-gius-att]').length);
        expect(iframes).toBe(0);
    });

    test('renderHomeWidget shows balance, coverage, and present/absent', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => {
            const api = window.__giuAttHome;
            const doc = new DOMParser().parseFromString(`
                <table id="MainContent_DG_SwiftReport">
                  <tr><td>Serial</td><td>Day</td><td>FirstIn</td><td>LastOut</td><td>Duration</td></tr>
                  <tr><td>1</td><td>2030-12-11</td><td>8:00:00 AM</td><td>4:00:00 PM</td><td>08:00:00</td></tr>
                  <tr><td>2</td><td>2030-12-14</td><td>8:00:00 AM</td><td>4:00:00 PM</td><td>08:00:00</td></tr>
                </table>`, 'text/html');
            const s = api.computeCurrentMonthSummary(api.getAttendanceRows(doc), '2030-12-20');
            api.renderHomeWidget(s);
        });
        await expect(page.locator('#gius-att-widget')).toBeVisible();
        await expect(page.locator('#gius-att-widget')).toContainText('Current balance');
        await expect(page.locator('#gius-att-widget')).toContainText('covered');
        await expect(page.locator('#gius-att-widget')).toContainText('Present');
        await expect(page.locator('.gius-att-balance')).toBeVisible();
        // mounted under the Target List
        const after = await page.evaluate(() =>
            document.getElementById('MainContent_div_grid').nextElementSibling?.id === 'gius-att-widget');
        expect(after).toBe(true);
    });

    test('renderHomeWidget empty state', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => window.__giuAttHome.renderHomeWidget({ empty: true }));
        await expect(page.locator('#gius-att-widget')).toContainText('No attendance records');
    });

    test('"View full report" link opens the executed report (auto-execute URL)', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => window.__giuAttHome.renderHomeWidget({ empty: true }));
        const href = await page.locator('#gius-att-widget .gius-att-link').getAttribute('href');
        expect(href).toContain('swiftreportid=866');
        expect(href).toContain('executereport=1');
    });

    test('absent days toggle expands the list', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => {
            const api = window.__giuAttHome;
            api.renderHomeWidget({
                label: 'Dec 2030',
                stats: {
                    actualHM: '16:00:00', requiredHM: '40:00:00', balanceHM: '24:00:00',
                    isPositiveOrZero: false, label: 'Missing', progressPercent: 40, progressColor: 'red',
                    presentDays: 2, absentDays: 2, absentDayDetails: ['2030-12-17', '2030-12-18'],
                },
            });
        });
        await expect(page.locator('#gius-att-toggle-absent')).toBeVisible();
        await page.locator('#gius-att-toggle-absent').click();
        await expect(page.locator('#gius-att-absent')).toHaveClass(/gius-att-expanded/);
        await expect(page.locator('#gius-att-absent')).toContainText('17 Dec');
        await expect(page.locator('[data-gius-home-absent-action="holiday"]').first()).toBeVisible();
        await expect(page.locator('[data-gius-home-absent-action="annual"]').first()).toBeVisible();
        await expect(page.locator('[data-gius-home-absent-action="compensation"]').first()).toBeVisible();
    });

    test('home absent actions save holiday and annual leave entries', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => {
            const api = window.__giuAttHome;
            api.setHomeRowsForTest([
                { date: '2030-12-11', firstIn: '8:00:00 AM', lastOut: '4:00:00 PM', duration: '08:00:00' },
            ]);
            api.renderHomeWidget({
                label: 'Dec 2030',
                stats: {
                    balanceHM: '24:00:00',
                    isPositiveOrZero: false,
                    progressPercent: 40,
                    progressColor: 'red',
                    presentDays: 2,
                    absentDays: 2,
                    absentDayDetails: ['2030-12-17', '2030-12-18'],
                },
            });
        });

        await page.locator('#gius-att-toggle-absent').click();
        await page.locator('[data-date="2030-12-17"][data-gius-home-absent-action="holiday"]').click();

        await page.evaluate(() => {
            window.__giuAttHome.renderHomeWidget({
                label: 'Dec 2030',
                stats: {
                    balanceHM: '24:00:00',
                    isPositiveOrZero: false,
                    progressPercent: 40,
                    progressColor: 'red',
                    presentDays: 2,
                    absentDays: 2,
                    absentDayDetails: ['2030-12-17', '2030-12-18'],
                },
            });
        });
        await page.locator('#gius-att-toggle-absent').click();
        await page.locator('[data-date="2030-12-18"][data-gius-home-absent-action="annual"]').click();

        const holidays = await page.evaluate(() => JSON.parse(localStorage.getItem('giuHolidayListV2') || '[]'));
        expect(holidays).toContainEqual({ type: 'single', category: 'holiday', date: '2030-12-17' });
        expect(holidays).toContainEqual({ type: 'single', category: 'annual', date: '2030-12-18' });
    });

    test('home absent compensation action saves a valid compensation leave', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => {
            localStorage.setItem('selectedDay', 'Sat');
            const api = window.__giuAttHome;
            api.setHomeRowsForTest([
                { date: '2026-05-16', firstIn: '8:00:00 AM', lastOut: '4:00:00 PM', duration: '08:00:00' },
            ]);
            api.renderHomeWidget({
                label: '2026-05-11 -> 2026-06-10',
                stats: {
                    balanceHM: '8:24:00',
                    isPositiveOrZero: false,
                    progressPercent: 80,
                    progressColor: 'amber',
                    presentDays: 1,
                    absentDays: 1,
                    absentDayDetails: ['2026-05-18'],
                },
            });
        });

        await page.locator('#gius-att-toggle-absent').click();
        await page.locator('[data-date="2026-05-18"][data-gius-home-absent-action="compensation"]').click();

        const leaves = await page.evaluate(() => JSON.parse(localStorage.getItem('giuCompensationLeavesV1') || '[]'));
        expect(leaves).toContainEqual({
            date: '2026-05-18',
            reason: 'From home absent day quick action',
        });
    });

    test('end-to-end: widget renders after the iframe fetch', async ({ page }) => {
        await setupAuto(page);
        await expect(page.locator('#gius-att-widget')).toBeVisible({ timeout: 10000 });
        await expect(page.locator('#gius-att-widget')).toContainText('Current balance', { timeout: 10000 });
    });

    test('error state when the report never loads', async ({ page }) => {
        const noGrid = '<!DOCTYPE html><html><body><form action="./SwiftReports_m.aspx"></form></body></html>';
        await setupAuto(page, { swift: noGrid });
        await expect(page.locator('#gius-att-widget')).toContainText("Couldn't load attendance", { timeout: 20000 });
        await expect(page.locator('#gius-att-retry')).toBeVisible();
    });

    test('widget adapts to GIU dark mode', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => window.__giuAttHome.renderHomeWidget({ empty: true }));
        await expect(page.locator('#gius-att-widget')).toBeVisible();
        const light = await page.evaluate(() => getComputedStyle(document.getElementById('gius-att-widget')).backgroundColor);
        expect(light).toBe('rgb(255, 255, 255)');
        await page.evaluate(() => document.documentElement.classList.add('gius-dark'));
        const dark = await page.evaluate(() => getComputedStyle(document.getElementById('gius-att-widget')).backgroundColor);
        expect(dark).toBe('rgb(30, 30, 46)');
    });
});
