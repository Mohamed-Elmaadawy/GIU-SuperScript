// Live verify: day-off auto-detect on report page + Home, with day-off keys cleared
// so detection/auto-fill actually fires against the real attendance data.
// Run: set -a; . ./.env; set +a; node scripts/dayoff-verify-shot.js
const { chromium } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const REPORT = 'https://portal.giu-uni.de/GIUb/EXT/SwiftReports_m.aspx?swiftreportid=866&executereport=1';
const HOME = 'https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx';
const SUPER = fs.readFileSync(path.join(__dirname, 'GIU SuperScript.js'), 'utf8');
const OUT = path.join(__dirname, '..', 'captures');

// Wipe day-off config so the feature is in its "unset" state on this isolated context.
const CLEAR = () => { try {
    localStorage.removeItem('selectedDay');
    localStorage.removeItem('giuDayOffScheduleV1');
    localStorage.removeItem('giuDayOffAutoStateV1');
} catch {} };

(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        storageState: path.join(__dirname, '../auth.json'),
        httpCredentials: { username: process.env.GIU_USER, password: process.env.GIU_PASS },
        viewport: { width: 1500, height: 1100 },
    });
    const page = await context.newPage();
    page.on('pageerror', e => console.log('PAGE ERROR:', e.message));
    await page.addInitScript(CLEAR);

    // ── Report page ───────────────────────────────────────────────
    await page.goto(REPORT, { waitUntil: 'domcontentloaded', timeout: 0 });
    await page.waitForSelector('#MainContent_DG_SwiftReport', { timeout: 180000 }).catch(() => {});
    await page.addScriptTag({ content: SUPER });
    await page.waitForSelector('.giu-dayoff-notice', { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(1200);

    const reportState = await page.evaluate(() => {
        const n = document.querySelector('.giu-dayoff-notice');
        return {
            present: !!n,
            cls: n ? n.className : null,
            text: n ? n.textContent.replace(/\s+/g, ' ').trim().slice(0, 200) : null,
            selectedDay: localStorage.getItem('selectedDay'),
            autoState: localStorage.getItem('giuDayOffAutoStateV1'),
        };
    });
    console.log('REPORT:', JSON.stringify(reportState, null, 2));
    const rn = page.locator('.giu-dayoff-notice').first();
    if (await rn.count()) await rn.screenshot({ path: path.join(OUT, 'dayoff-report-notice.png') }).catch(e => console.log(e.message));
    await page.screenshot({ path: path.join(OUT, 'dayoff-report-full.png') }).catch(() => {});

    // ── Home page ─────────────────────────────────────────────────
    // Fresh wipe so Home recomputes from scratch (clears any auto-fill from the report run).
    await page.goto(HOME, { waitUntil: 'domcontentloaded', timeout: 0 });
    await page.evaluate(CLEAR);
    await page.waitForSelector('#MainContent_div_grid', { timeout: 180000 }).catch(() => {});
    await page.addScriptTag({ content: SUPER });
    await page.waitForSelector('.gius-att-card', { timeout: 60000 }).catch(() => {});
    await page.waitForSelector('.gius-att-dayoff', { timeout: 60000 }).catch(() => {});
    await page.waitForTimeout(1500);

    const homeState = await page.evaluate(() => {
        const n = document.querySelector('.gius-att-dayoff');
        const card = document.querySelector('.gius-att-card');
        return {
            notePresent: !!n,
            cls: n ? n.className : null,
            text: n ? n.textContent.replace(/\s+/g, ' ').trim().slice(0, 160) : null,
            cardMuted: card ? card.classList.contains('gius-att-muted') : null,
            selectedDay: localStorage.getItem('selectedDay'),
        };
    });
    console.log('HOME:', JSON.stringify(homeState, null, 2));
    const hw = page.locator('#gius-att-widget').first();
    if (await hw.count()) await hw.screenshot({ path: path.join(OUT, 'dayoff-home-widget.png') }).catch(e => console.log(e.message));

    await browser.close();
    console.log('DONE');
})().catch(e => { console.error(e); process.exit(1); });
