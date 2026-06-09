// @ts-check
const { test, expect } = require('@playwright/test');
const fs   = require('fs');
const path = require('path');

const HOME_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx';

const fix = name => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');
const scriptSrc = fs.readFileSync(
    path.join(__dirname, '..', 'scripts', 'GIU Staff Attendance Script.js'),
    'utf8'
);
const homeHtml  = fix('att-home.html');
const swiftHtml = fix('att-swift.html');

async function routeAndGoto(page, swift) {
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
    await page.route('**/Home.aspx', route => route.fulfill({ contentType: 'text/html; charset=utf-8', body: homeHtml }));
    await page.route('**/SwiftReports_m.aspx', route => route.fulfill({ contentType: 'text/html; charset=utf-8', body: swift }));
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

    test('pickGateOption picks "Gates", not "HRSystem"', async ({ page }) => {
        await setup(page);
        const val = await page.evaluate(() => {
            const sel = document.createElement('select');
            sel.innerHTML = `
                <option value="">[Select]</option>
                <option value="5">SR-00005.Gate Attendance:My User: x - HRSystem</option>
                <option value="866">SR-00866.Gate Attendance:My User: x - Gates</option>`;
            const opt = window.__giuAttHome.pickGateOption(sel);
            return opt ? opt.value : null;
        });
        expect(val).toBe('866');
    });

    test('pickGateOption returns null when no gate report exists', async ({ page }) => {
        await setup(page);
        const res = await page.evaluate(() => {
            const sel = document.createElement('select');
            sel.innerHTML = `<option value="">[Select]</option><option value="1">SR-1.Advising:Semester Hours</option>`;
            return window.__giuAttHome.pickGateOption(sel);
        });
        expect(res).toBeNull();
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
            const s = window.__giuAttHome.computeCurrentMonthSummary(rows);
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
});
