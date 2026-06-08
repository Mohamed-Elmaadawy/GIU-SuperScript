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
});
