// @ts-check
const { test, expect } = require('@playwright/test');
const fs   = require('fs');
const path = require('path');

const HOME_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx';

const fix = name => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');
const bundleSrc = fs.readFileSync(
    path.join(__dirname, '..', 'scripts', 'GIU SuperScript.js'),
    'utf8'
);
const homeHtml = fix('home.html');
const BLANK = '<!DOCTYPE html><html><body></body></html>';

// Pre-marking the two real Home tips keeps the engine quiet so unit tests
// can drive it with synthetic ids. Pass seen:null for the integration test.
const SUPPRESS_REAL = { controlCenter: 1, staffAttendance: 1 };

async function setup(page, { seen = SUPPRESS_REAL } = {}) {
    page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
    await page.route('**/Home.aspx', r => r.fulfill({ contentType: 'text/html; charset=utf-8', body: homeHtml }));
    await page.route('**/SwiftReports_m.aspx*', r => r.fulfill({ contentType: 'text/html; charset=utf-8', body: BLANK }));
    await page.goto(HOME_URL, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => localStorage.clear());
    if (seen) {
        await page.evaluate(m => localStorage.setItem('gius-tips-v1', JSON.stringify(m)), seen);
    }
    await page.evaluate(bundleSrc);
}

// Adds a synthetic widget to the page and offers it to the engine.
const showTip = (page, id) => page.evaluate((tipId) => {
    const el = document.createElement('div');
    el.id = `synth-${tipId}`;
    el.textContent = tipId;
    document.body.appendChild(el);
    window.__giusTips.show({ id: tipId, el, title: tipId, text: `about ${tipId}` });
}, id);

test.describe('Tips engine', () => {
    test('bundle exposes the __giusTips hook', async ({ page }) => {
        await setup(page);
        const ok = await page.evaluate(() => typeof window.__giusTips === 'object');
        expect(ok).toBe(true);
    });

    test('markSeen persists to gius-tips-v1 and isSeen reads it', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() => {
            const T = window.__giusTips;
            const before = T.isSeen('x1');
            T.markSeen('x1');
            return { before, after: T.isSeen('x1'), raw: localStorage.getItem('gius-tips-v1') };
        });
        expect(r.before).toBe(false);
        expect(r.after).toBe(true);
        expect(JSON.parse(r.raw).x1).toBe(1);
    });

    test('markAllSeen wildcard makes every id seen', async ({ page }) => {
        await setup(page);
        const r = await page.evaluate(() => {
            window.__giusTips.markAllSeen();
            return {
                any: window.__giusTips.isSeen('never-shown'),
                raw: localStorage.getItem('gius-tips-v1'),
            };
        });
        expect(r.any).toBe(true);
        expect(JSON.parse(r.raw)['*']).toBe(1);
    });

    test('show() spotlights an unseen widget', async ({ page }) => {
        await setup(page);
        await showTip(page, 'tipA');
        await expect.poll(() => page.evaluate(() => !!document.querySelector('.gius-tips-cutout'))).toBe(true);
        const r = await page.evaluate(() => ({
            active: window.__giusTips._activeId(),
            bubble: document.querySelector('.gius-tips-bubble .gius-tips-title')?.textContent,
        }));
        expect(r.active).toBe('tipA');
        expect(r.bubble).toBe('tipA');
    });

    test('show() no-ops for a seen id', async ({ page }) => {
        await setup(page);
        await page.evaluate(() => window.__giusTips.markSeen('tipA'));
        await showTip(page, 'tipA');
        const r = await page.evaluate(() => ({
            active: window.__giusTips._activeId(),
            cutout: !!document.querySelector('.gius-tips-cutout'),
        }));
        expect(r.active).toBe(null);
        expect(r.cutout).toBe(false);
    });

    test('Got it marks current seen and advances to next queued tip', async ({ page }) => {
        await setup(page);
        await showTip(page, 'tipA');
        await showTip(page, 'tipB');
        await page.click('.gius-tips-got');
        await expect.poll(() => page.evaluate(() => window.__giusTips._activeId())).toBe('tipB');
        const seen = await page.evaluate(() => JSON.parse(localStorage.getItem('gius-tips-v1')));
        expect(seen.tipA).toBe(1);
        expect(seen.tipB).toBeUndefined();
    });

    test('Esc dismisses like Got it', async ({ page }) => {
        await setup(page);
        await showTip(page, 'tipA');
        await page.keyboard.press('Escape');
        await expect.poll(() => page.evaluate(() => window.__giusTips.isSeen('tipA'))).toBe(true);
        const cutout = await page.evaluate(() => !!document.querySelector('.gius-tips-cutout'));
        expect(cutout).toBe(false);
    });

    test('overlay click dismisses the current tip only', async ({ page }) => {
        await setup(page);
        await showTip(page, 'tipA');
        await showTip(page, 'tipB');
        await page.click('.gius-tips-click', { position: { x: 5, y: 5 }, force: true });
        await expect.poll(() => page.evaluate(() => window.__giusTips._activeId())).toBe('tipB');
    });

    test('controlCenter is promoted to the front of the queue', async ({ page }) => {
        await setup(page);
        // Free the controlCenter id again (it was suppressed by the seed).
        await page.evaluate(() => window.__giusTips._resetSeen());
        await showTip(page, 'tipA');     // becomes active
        await showTip(page, 'tipB');     // queued
        await showTip(page, 'controlCenter'); // must jump the queue
        const q = await page.evaluate(() => window.__giusTips._queueIds());
        expect(q).toEqual(['controlCenter', 'tipB']);
    });

    test('queued tip whose element left the DOM is skipped without being marked seen', async ({ page }) => {
        await setup(page);
        await showTip(page, 'tipA');
        await showTip(page, 'tipB');
        await page.evaluate(() => document.getElementById('synth-tipB').remove());
        await page.click('.gius-tips-got');
        await expect.poll(() => page.evaluate(() => !!document.querySelector('.gius-tips-cutout'))).toBe(false);
        const r = await page.evaluate(() => ({
            a: window.__giusTips.isSeen('tipA'),
            b: window.__giusTips.isSeen('tipB'),
        }));
        expect(r.a).toBe(true);
        expect(r.b).toBe(false);
    });

    test('Skip all tips tears down and sets the wildcard', async ({ page }) => {
        await setup(page);
        await showTip(page, 'tipA');
        await showTip(page, 'tipB');
        await page.click('.gius-tips-skip');
        const r = await page.evaluate(() => ({
            cutout: !!document.querySelector('.gius-tips-cutout'),
            wildcard: JSON.parse(localStorage.getItem('gius-tips-v1'))['*'],
        }));
        expect(r.cutout).toBe(false);
        expect(r.wildcard).toBe(1);
    });

    test('stale gius-onboarded-v1 key is removed on load', async ({ page }) => {
        page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
        await page.route('**/Home.aspx', r => r.fulfill({ contentType: 'text/html; charset=utf-8', body: homeHtml }));
        await page.route('**/SwiftReports_m.aspx*', r => r.fulfill({ contentType: 'text/html; charset=utf-8', body: BLANK }));
        await page.goto(HOME_URL, { waitUntil: 'domcontentloaded' });
        await page.evaluate(() => {
            localStorage.clear();
            localStorage.setItem('gius-onboarded-v1', '1');
            localStorage.setItem('gius-tips-v1', JSON.stringify({ controlCenter: 1, staffAttendance: 1 }));
        });
        await page.evaluate(bundleSrc);
        const r = await page.evaluate(() => localStorage.getItem('gius-onboarded-v1'));
        expect(r).toBe(null);
    });
});

test.describe('Tips integration (fresh install)', () => {
    test('first Home visit spotlights the Control Center; Got it persists', async ({ page }) => {
        await setup(page, { seen: null });
        await expect.poll(() => page.evaluate(() => window.__giusTips && window.__giusTips._activeId()))
            .toBe('controlCenter');
        const target = await page.evaluate(() => !!document.querySelector('.gius-tips-cutout'));
        expect(target).toBe(true);
        await page.click('.gius-tips-got');
        const seen = await page.evaluate(() => JSON.parse(localStorage.getItem('gius-tips-v1') || '{}'));
        expect(seen.controlCenter).toBe(1);
    });
});
