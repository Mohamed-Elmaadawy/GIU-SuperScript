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

    test('setDayOffAutoState clears the key when passed a non-object', async ({ page }) => {
        await setup(page);
        const after = await page.evaluate(() => {
            const api = window.__giuAttHome;
            api.setDayOffAutoState({ status: 'applied', code: 'Sun', occ: 6, acknowledged: false });
            api.setDayOffAutoState(null);
            return { state: api.getDayOffAutoState(), raw: localStorage.getItem('giuDayOffAutoStateV1') };
        });
        expect(after.state).toBe(null);
        expect(after.raw).toBe(null);
    });
});

test.describe('detectDayOffCode', () => {
    // Helper: build periods from flat rows the way the script does.
    const detect = (page, rows, holidays = []) => page.evaluate((args) => {
        if (args.holidays.length) localStorage.setItem('giuHolidayListV2', JSON.stringify(args.holidays));
        const periods = window.__giuAttHome.groupRowsByPayrollPeriod(args.rows);
        return window.__giuAttHome.detectDayOffCode(periods);
    }, { rows, holidays });

    // Build 6 full weeks of attendance with one weekday always absent.
    // 2026-06-06 is a Saturday. Weekdays present: Sat,Mon,Tue,Wed,Thu; Sun always off; Fri skipped.
    function weeksWithSundayOff() {
        const rows = [];
        const starts = ['2026-06-06', '2026-06-13', '2026-06-20', '2026-06-27', '2026-07-04', '2026-07-11'];
        const present = { 0: false, 1: true, 2: true, 3: true, 4: true, 6: true }; // 0=Sun off, 5=Fri skip
        starts.forEach(sat => {
            const base = new Date(sat + 'T00:00:00Z');
            for (let i = 0; i < 7; i++) {
                const d = new Date(base.getTime()); d.setUTCDate(d.getUTCDate() - 1 + i); // Fri..Thu around Sat
                const dow = d.getUTCDay();
                if (dow === 5) continue;           // skip Friday (fixed off)
                if (!present[dow]) continue;       // Sunday absent
                const ymd = d.toISOString().slice(0, 10);
                rows.push({ date: ymd, firstIn: '8:00:00 AM', lastOut: '4:00:00 PM', duration: '08:00:00' });
            }
        });
        return rows;
    }

    test('confident: one zero-attendance weekday across 6 weeks', async ({ page }) => {
        await setup(page);
        const r = await detect(page, weeksWithSundayOff());
        expect(r).not.toBe(null);
        expect(r.code).toBe('Sun');
        expect(r.fullName).toBe('Sunday');
        expect(r.occ).toBeGreaterThanOrEqual(3);
    });

    test('not confident: two zero-attendance weekdays', async ({ page }) => {
        await setup(page);
        const rows = weeksWithSundayOff().filter(row => new Date(row.date + 'T00:00:00Z').getUTCDay() !== 1);
        const r = await detect(page, rows);
        expect(r).toBe(null);
    });

    test('not confident: only one week of data', async ({ page }) => {
        await setup(page);
        const rows = weeksWithSundayOff().filter(row => row.date < '2026-06-13');
        const r = await detect(page, rows);
        expect(r).toBe(null);
    });

    test('not confident: works every weekday', async ({ page }) => {
        await setup(page);
        const rows = weeksWithSundayOff();
        ['2026-06-07', '2026-06-14', '2026-06-21', '2026-06-28', '2026-07-05', '2026-07-12'].forEach(sun => {
            rows.push({ date: sun, firstIn: '8:00:00 AM', lastOut: '4:00:00 PM', duration: '08:00:00' });
        });
        const r = await detect(page, rows);
        expect(r).toBe(null);
    });

    test('holiday on the off-day does not break detection', async ({ page }) => {
        await setup(page);
        const r = await detect(page, weeksWithSundayOff(), [{ type: 'single', category: 'holiday', date: '2026-06-21' }]);
        expect(r && r.code).toBe('Sun');
    });
});

test.describe('maybeAutoFillDayOff', () => {
    function weeksWithSundayOff() {
        const rows = [];
        const starts = ['2026-06-06', '2026-06-13', '2026-06-20', '2026-06-27', '2026-07-04', '2026-07-11'];
        const present = { 0: false, 1: true, 2: true, 3: true, 4: true, 6: true };
        starts.forEach(sat => {
            const base = new Date(sat + 'T00:00:00Z');
            for (let i = 0; i < 7; i++) {
                const d = new Date(base.getTime()); d.setUTCDate(d.getUTCDate() - 1 + i);
                const dow = d.getUTCDay();
                if (dow === 5 || !present[dow]) continue;
                rows.push({ date: d.toISOString().slice(0, 10), firstIn: '8:00:00 AM', lastOut: '4:00:00 PM', duration: '08:00:00' });
            }
        });
        return rows;
    }
    const run = (page, rows) => page.evaluate((rs) => {
        const periods = window.__giuAttHome.groupRowsByPayrollPeriod(rs);
        const result = window.__giuAttHome.maybeAutoFillDayOff(periods);
        return {
            result,
            selectedDay: localStorage.getItem('selectedDay'),
            state: window.__giuAttHome.getDayOffAutoState(),
        };
    }, rows);

    test('confident -> persists selectedDay and applied state', async ({ page }) => {
        await setup(page);
        const r = await run(page, weeksWithSundayOff());
        expect(r.result).toEqual({ status: 'applied', code: 'Sun', fullName: 'Sunday', occ: expect.any(Number) });
        expect(r.selectedDay).toBe('Sun');
        expect(r.state).toMatchObject({ status: 'applied', code: 'Sun', acknowledged: false });
    });

    test('does nothing when day off already configured', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => localStorage.setItem('selectedDay', 'Fri'));
        const r = await run(page, weeksWithSundayOff());
        expect(r.result).toBe(null);
        expect(r.selectedDay).toBe('Fri');
    });

    test('undone state blocks re-fill but still warns', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => window.__giuAttHome.setDayOffAutoState({ status: 'undone' }));
        const r = await run(page, weeksWithSundayOff());
        expect(r.result).toEqual({ status: 'warn' });
        expect(r.selectedDay).toBe(null);
    });

    test('not confident -> returns warn, no persist', async ({ page }) => {
        await setup(page);
        const oneWeek = weeksWithSundayOff().filter(row => row.date < '2026-06-13');
        const r = await run(page, oneWeek);
        expect(r.result).toEqual({ status: 'warn' });
        expect(r.selectedDay).toBe(null);
    });
});
