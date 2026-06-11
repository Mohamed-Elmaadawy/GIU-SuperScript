// Interactive capture for the Teaching Load fixtures + fresh auth.json.
//
//   node scripts/capture-teaching-load.js
//
// Opens a real browser. You log in once and drive your schedule; the script saves
// tests/fixtures/notification.html, tests/fixtures/schedule.html, a fresh auth.json,
// and scripts/capture-report.json (the real selector IDs to pin in SEL).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const ROOT = path.join(__dirname, '..');
const FIX = path.join(ROOT, 'tests', 'fixtures');
const NOTIF = 'https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx';
const SCHED = 'https://portal.giu-uni.de/GIUb/INTStaff/SearchAcademicScheduled_001_m.aspx';

const ask = q => new Promise(res => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(q, a => { rl.close(); res(a); });
});

const is401 = html => /401 - Unauthorized|invalid credentials/i.test(html);

(async () => {
    const browser = await chromium.launch({ headless: false });
    const ctx = await browser.newContext({ ignoreHTTPSErrors: true });
    const page = await ctx.newPage();

    // ── Step 1: log in, land on the Send Email page ──
    await page.goto(NOTIF, { waitUntil: 'domcontentloaded' }).catch(() => {});
    console.log('\n>>> A browser window opened.');
    console.log('>>> Log in to the portal. Make sure you reach the SEND EMAIL page.');
    await ask('>>> When the Send Email page is fully loaded, press Enter here... ');

    let notifHtml = await page.content();
    if (is401(notifHtml)) {
        console.log('Still unauthorized — navigate to the Send Email page in the browser, then re-run.');
        await browser.close(); process.exit(2);
    }
    fs.writeFileSync(path.join(FIX, 'notification.html'), notifHtml);
    await ctx.storageState({ path: path.join(ROOT, 'auth.json') });
    console.log('saved notification.html + refreshed auth.json');

    const notifSelects = await page.$$eval('select', els => els.map(s => ({
        id: s.id, name: s.name, optionCount: s.options.length,
        sampleOptions: Array.from(s.options).map(o => o.text.trim()).slice(0, 4),
    })));

    // ── Step 2: schedule page — you drive it ──
    await page.goto(SCHED, { waitUntil: 'domcontentloaded' });
    console.log('\n>>> Now on the schedule search page.');
    console.log('>>> Click the + beside "Staff:", type YOUR name, pick yourself, click "Show Schedule".');
    await ask('>>> When the SCHEDULE TABLE is visible, press Enter here... ');

    const schedHtml = await page.content();
    if (is401(schedHtml)) { console.log('Unauthorized on schedule page.'); await browser.close(); process.exit(2); }
    fs.writeFileSync(path.join(FIX, 'schedule.html'), schedHtml);
    console.log('saved schedule.html');

    const schedControls = await page.evaluate(() => {
        const map = (sel, n = 15) => Array.from(document.querySelectorAll(sel)).slice(0, n)
            .map(e => ({ tag: e.tagName, id: e.id, name: e.getAttribute('name'), type: e.type || null }));
        return {
            textInputs: map('input[type=text]'),
            buttons: map('input[type=submit], input[type=button], button'),
            imgsWithId: map('img[id]'),
            anchorsWithId: map('a[id]'),
            selects: map('select'),
            // Biggest tables by row count — the schedule grid is usually among the largest.
            tables: Array.from(document.querySelectorAll('table[id]'))
                .map(t => ({ id: t.id, rows: t.rows.length, cols: t.rows[0] ? t.rows[0].cells.length : 0 }))
                .sort((a, b) => b.rows - a.rows).slice(0, 15),
        };
    });

    const report = { capturedAt: new Date().toISOString(), notifSelects, schedControls };
    fs.writeFileSync(path.join(__dirname, 'capture-report.json'), JSON.stringify(report, null, 2));
    console.log('\nsaved scripts/capture-report.json');
    console.log('\n=== SELECTOR REPORT (paste back to the assistant if asked) ===');
    console.log(JSON.stringify(report, null, 2));

    await ask('\n>>> Done. Press Enter to close the browser... ');
    await browser.close();
    console.log('CAPTURE_OK');
})().catch(e => { console.error('CAPTURE_ERR', e.message); process.exit(1); });
