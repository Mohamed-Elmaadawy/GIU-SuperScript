// @ts-check
const { test, expect } = require('@playwright/test');
const fs   = require('fs');
const path = require('path');

const PORTAL_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/ProctorExchange_m.aspx';

const fix  = name => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');
const scriptSrc = fs.readFileSync(
    path.join(__dirname, '..', 'scripts', 'GIU Proctor Schedule Aggregator.js'),
    'utf8'
);

// Fixture HTML loaded once
const exchangeHtml = fix('exchange-page.html');
const deptHtml     = fix('dept-response.html');
const proctorHtml  = fix('proctor-response.html');

// 3 depts × 2 proctors × 2 exams = 12 total rows (each dept returns same mock)
const EXPECTED_ROWS = 3 * 2 * 2;

async function setup(page) {
    // Route all requests to the portal URL
    await page.route('**/ProctorExchange_m.aspx', async (route, request) => {
        if (request.method() === 'GET') {
            await route.fulfill({ contentType: 'text/html; charset=utf-8', body: exchangeHtml });
        } else {
            const body = request.postData() || '';
            // Phase 1: department selection → return dept page with proctor links
            // Phase 2: proctor selection → return proctor schedule page
            const html = body.includes('acdmcDpLst') ? deptHtml : proctorHtml;
            await route.fulfill({ contentType: 'text/html; charset=utf-8', body: html });
        }
    });

    await page.goto(PORTAL_URL, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => localStorage.clear());
    await page.evaluate(scriptSrc);  // inject and run the userscript
}

async function openAndScrape(page) {
    // Capture JS errors to aid debugging
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
    page.on('console', msg => {
        if (msg.type() === 'error') console.error('CONSOLE ERROR:', msg.text());
    });

    await page.locator('#gius-proctor-trigger').click();
    await page.locator('#gius-start-fetch').click();
    // Wait for scraping to START (progress section becomes visible)
    await expect(page.locator('#gius-progress-section')).toBeVisible({ timeout: 5_000 });
    // Then wait for scraping to FINISH (progress section disappears)
    await expect(page.locator('#gius-progress-section')).toBeHidden({ timeout: 25_000 });
    // Wait for at least one table row
    await expect(page.locator('#gius-tbody tr').first()).toBeVisible({ timeout: 5_000 });
}

// ── Tests ─────────────────────────────────────────────────────────────────────

test.describe('GIU Proctor Schedule Aggregator', () => {

    test('trigger button is injected into the page', async ({ page }) => {
        await setup(page);
        await expect(page.locator('#gius-proctor-trigger')).toBeVisible();
        await expect(page.locator('#gius-proctor-trigger')).toContainText('View All Proctor Schedules');
    });

    test('clicking trigger opens panel and scrapes all rows', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        const rows = page.locator('#gius-tbody tr');
        await expect(rows).toHaveCount(EXPECTED_ROWS);

        // Verify row content: program – exam name format
        const firstRow = rows.first();
        await expect(firstRow).toContainText('Business Informatics 6th');
        await expect(firstRow).toContainText('Business Continuity');
    });

    test('meta shows "Last updated" after scrape completes', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);
        await expect(page.locator('#gius-proctor-meta')).toContainText('Last updated:');
        await expect(page.locator('#gius-proctor-meta')).toContainText(`${EXPECTED_ROWS} exams`);
    });

    test('filter by department narrows rows and shows chip', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        // Datalist input — type exact dept name to trigger substring filter
        await page.locator('#gius-f-department').fill('Applied Computer Science');

        const rows = page.locator('#gius-tbody tr');
        const count = await rows.count();
        expect(count).toBeGreaterThan(0);
        expect(count).toBeLessThan(EXPECTED_ROWS);

        // Chip appears
        await expect(page.locator('.gius-chip')).toContainText('Dept: Applied Computer Science');
    });

    test('search box filters across all columns', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        await page.locator('#gius-f-search').fill('Computer Programming');
        const rows = page.locator('#gius-tbody tr');
        await expect(rows.first()).toContainText('Computer Programming');
        const count = await rows.count();
        expect(count).toBeLessThan(EXPECTED_ROWS);
    });

    test('clear-all button resets all filters', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        await page.locator('#gius-f-search').fill('INCS616');
        await expect(page.locator('#gius-tbody tr')).toHaveCount(EXPECTED_ROWS / 2);

        await page.locator('#gius-f-clear').click();
        await expect(page.locator('#gius-tbody tr')).toHaveCount(EXPECTED_ROWS);
        await expect(page.locator('.gius-chip')).toHaveCount(0);
    });

    test('clicking column header sorts rows', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        // Click Proctor header to sort by proctor name
        await page.locator('thead th[data-col="proctor"]').click();
        const icon = page.locator('.gius-sort-icon[data-col="proctor"]');
        await expect(icon).toHaveClass(/active/);
        await expect(icon).toContainText('▲');

        // Click again → descending
        await page.locator('thead th[data-col="proctor"]').click();
        await expect(icon).toContainText('▼');
    });

    test('CSV button triggers download of filtered rows', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('#gius-proctor-csv').click(),
        ]);
        expect(download.suggestedFilename()).toMatch(/^proctor-schedule-\d{4}-\d{2}-\d{2}\.csv$/);
    });

    test('clicking header collapses and expands panel body', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        await page.locator('#gius-proctor-hdr').click();
        const body = page.locator('#gius-proctor-body');
        await expect(body).toHaveClass(/collapsed/);

        await page.locator('#gius-proctor-hdr').click();
        await expect(body).not.toHaveClass(/collapsed/);
    });

    test('close button removes panel from DOM', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        await page.locator('#gius-proctor-close').click();
        await expect(page.locator('#gius-proctor-panel')).toHaveCount(0);
    });

    test('second open uses cache — no re-scrape', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        // Close panel
        await page.locator('#gius-proctor-close').click();

        // Count fetch calls — re-open should hit localStorage only
        let fetchCount = 0;
        await page.route('**/ProctorExchange_m.aspx', async route => {
            if (route.request().method() !== 'GET') fetchCount++;
            await route.continue();
        });

        await page.locator('#gius-proctor-trigger').click();
        // Panel should appear with data instantly (no progress section)
        await expect(page.locator('#gius-tbody tr').first()).toBeVisible();
        expect(fetchCount).toBe(0);  // no new fetches
        // "today" when cache was just saved; "X days ago" on subsequent days
        await expect(page.locator('#gius-proctor-meta')).toContainText(/today|ago/);
    });

    test('refresh button clears cache and re-scrapes', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        // Verify cache exists
        const cached = await page.evaluate(key => localStorage.getItem(key), 'giuProctorScheduleV1');
        expect(cached).not.toBeNull();

        await page.locator('#gius-proctor-refresh').click();

        // Progress section visible again
        await expect(page.locator('#gius-progress-section')).toBeVisible();
        // Wait for completion
        await expect(page.locator('#gius-progress-section')).toBeHidden({ timeout: 25_000 });
        await expect(page.locator('#gius-tbody tr')).toHaveCount(EXPECTED_ROWS);
    });

    test('dark mode — panel uses dark palette', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        // Apply dark mode class
        await page.evaluate(() => document.documentElement.classList.add('gius-dark'));

        const hdrBg = await page.locator('.gius-proctor-hdr').evaluate(
            el => window.getComputedStyle(el).backgroundColor
        );
        // #11111b = rgb(17, 17, 27)
        expect(hdrBg).toBe('rgb(17, 17, 27)');
    });

    test('exam column shows Program – ExamName format', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        const firstRow = page.locator('#gius-tbody tr').first();
        // Should show program name, not course code
        await expect(firstRow).toContainText('Business Informatics 6th');
        await expect(firstRow).not.toContainText('INCS616');
    });

    test('clicking data row expands co-proctors, clicking again collapses', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        // First data row is an INCS616 exam shared across all 3 depts × 2 proctors
        const firstRow = page.locator('#gius-tbody tr.gius-data-row').first();
        await firstRow.click();

        const coRow = page.locator('#gius-tbody tr.gius-coproctor-row').first();
        await expect(coRow).toBeVisible();
        await expect(coRow).toContainText('Co-proctors:');

        // Click again — collapses
        await firstRow.click();
        await expect(page.locator('#gius-tbody tr.gius-coproctor-row')).toHaveCount(0);
    });

    test('upload CSV populates table without scraping', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        const csvContent =
            'Proctor,Course Code,Exam Name,Room,Date,Start Time,End Time,Department,Cover,Program,Date Key\r\n' +
            '"Uploaded Proctor","TST101","Sample Exam","A1.001","Mon Jan 01","9:00 AM","11:00 AM","Test Dept","","Test Program","2026-01-01"\r\n';

        await page.locator('#gius-file-input').setInputFiles({
            name: 'test.csv',
            mimeType: 'text/csv',
            buffer: Buffer.from(csvContent),
        });

        await expect(page.locator('#gius-tbody tr')).toHaveCount(1);
        await expect(page.locator('#gius-tbody tr').first()).toContainText('Uploaded Proctor');
        await expect(page.locator('#gius-tbody tr').first()).toContainText('Sample Exam');
        await expect(page.locator('#gius-proctor-meta')).toContainText('Loaded from CSV');
    });

    test('uploading CSV during paused scrape hides progress section', async ({ page }) => {
        await setup(page);

        await page.route('**/ProctorExchange_m.aspx', async (route, request) => {
            if (request.method() !== 'GET') {
                await new Promise(r => setTimeout(r, 300));
            }
            if (request.method() === 'GET') {
                await route.fulfill({ contentType: 'text/html; charset=utf-8', body: exchangeHtml });
            } else {
                const body = request.postData() || '';
                const html = body.includes('acdmcDpLst') ? deptHtml : proctorHtml;
                await route.fulfill({ contentType: 'text/html; charset=utf-8', body: html });
            }
        });

        await page.locator('#gius-proctor-trigger').click();
        await page.locator('#gius-start-fetch').click();
        await expect(page.locator('#gius-progress-section')).toBeVisible({ timeout: 5_000 });
        await page.waitForTimeout(450);
        await page.locator('#gius-proctor-pause').click();
        await expect(page.locator('#gius-proctor-pause')).toContainText('Resume');

        const csvContent =
            'Proctor,Course Code,Exam Name,Room,Date,Start Time,End Time,Department,Cover,Program,Date Key\r\n' +
            '"Uploaded Proctor","TST101","Sample Exam","A1.001","Mon Jan 01","9:00 AM","11:00 AM","Test Dept","","Test Program","2026-01-01"\r\n';

        await page.locator('#gius-file-input').setInputFiles({
            name: 'test.csv',
            mimeType: 'text/csv',
            buffer: Buffer.from(csvContent),
        });

        await expect(page.locator('#gius-progress-section')).toBeHidden();
        await expect(page.locator('#gius-proctor-pause')).toBeHidden();
        await expect(page.locator('#gius-tbody tr')).toHaveCount(1);
        await expect(page.locator('#gius-tbody tr').first()).toContainText('Uploaded Proctor');
    });

    test('pause button appears during scrape, hides on complete', async ({ page }) => {
        await setup(page);

        await page.locator('#gius-proctor-trigger').click();
        await page.locator('#gius-start-fetch').click();
        await expect(page.locator('#gius-progress-section')).toBeVisible({ timeout: 5_000 });

        // Button visible and shows Pause while scraping
        await expect(page.locator('#gius-proctor-pause')).toBeVisible();
        await expect(page.locator('#gius-proctor-pause')).toContainText('Pause');

        // Wait for scraping to finish — button should hide
        await expect(page.locator('#gius-progress-section')).toBeHidden({ timeout: 25_000 });
        await expect(page.locator('#gius-proctor-pause')).toBeHidden();
    });

    test('pause/resume toggles button label and suspends new fetches', async ({ page }) => {
        await setup(page);

        // Override the mock with a slow version (LIFO — this handler runs first).
        // 200ms delay per POST → Phase1 ~200ms + Phase2 ~400ms = ~600ms total,
        // comfortably longer than the panel's slide-down animation (380ms).
        await page.route('**/ProctorExchange_m.aspx', async (route, request) => {
            if (request.method() !== 'GET') {
                await new Promise(r => setTimeout(r, 300));
            }
            if (request.method() === 'GET') {
                await route.fulfill({ contentType: 'text/html; charset=utf-8', body: exchangeHtml });
            } else {
                const body = request.postData() || '';
                const html = body.includes('acdmcDpLst') ? deptHtml : proctorHtml;
                await route.fulfill({ contentType: 'text/html; charset=utf-8', body: html });
            }
        });

        await page.locator('#gius-proctor-trigger').click();
        await page.locator('#gius-start-fetch').click();
        await expect(page.locator('#gius-progress-section')).toBeVisible({ timeout: 5_000 });

        // Wait past the panel's slide-down animation (~380ms) so the button is stable
        await page.waitForTimeout(450);

        // Scraping is still in progress (~600ms total) — button should be visible
        await expect(page.locator('#gius-proctor-pause')).toBeVisible();
        await page.locator('#gius-proctor-pause').click();
        await expect(page.locator('#gius-proctor-pause')).toContainText('Resume');

        // Resume
        await page.locator('#gius-proctor-pause').click();
        await expect(page.locator('#gius-proctor-pause')).toContainText('Pause');

        // Scraping completes after resume
        await expect(page.locator('#gius-progress-section')).toBeHidden({ timeout: 25_000 });
        await expect(page.locator('#gius-tbody tr')).toHaveCount(EXPECTED_ROWS);
    });

    test('pagination — page size and prev/next controls work', async ({ page }) => {
        await setup(page);
        await openAndScrape(page);

        // Default page size 20 → all 12 rows visible on one page
        await expect(page.locator('#gius-tbody tr')).toHaveCount(EXPECTED_ROWS);
        await expect(page.locator('#gius-page-num')).toContainText('Page 1 / 1');

        // Switch to 5 per page → only 5 rows visible
        await page.locator('#gius-page-size').selectOption('5');
        await expect(page.locator('#gius-tbody tr')).toHaveCount(5);
        await expect(page.locator('#gius-page-num')).toContainText('Page 1 /');

        // Next page → next 5
        await page.locator('#gius-page-next').click();
        await expect(page.locator('#gius-tbody tr')).toHaveCount(5);
        await expect(page.locator('#gius-page-num')).toContainText('Page 2 /');

        // Prev page → back to page 1
        await page.locator('#gius-page-prev').click();
        await expect(page.locator('#gius-page-num')).toContainText('Page 1 /');
        await expect(page.locator('#gius-page-btn:disabled, #gius-page-prev:disabled')).toHaveCount(1);
    });

});
