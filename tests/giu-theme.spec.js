// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const PORTAL_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx';
const fix = name => fs.readFileSync(path.join(__dirname, 'fixtures', name), 'utf8');
const src = fs.readFileSync(path.join(__dirname, '..', 'scripts', 'GIU Theme.js'), 'utf8');
const portalHtml = fix('theme-portal.html');

async function setup(page, { storage = {} } = {}) {
  page.on('pageerror', err => console.error('PAGE ERROR:', err.message));
  await page.route('**/Home.aspx', r => r.fulfill({ contentType: 'text/html; charset=utf-8', body: portalHtml }));
  await page.goto(PORTAL_URL, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => localStorage.clear());
  await page.evaluate(s => { for (const k in s) localStorage.setItem(k, s[k]); }, storage);
  await page.evaluate(src);
}

test.describe('theme state + migration', () => {
  test('exposes __giuTheme hook with MODES', async ({ page }) => {
    await setup(page);
    const modes = await page.evaluate(() => window.__giuTheme.MODES);
    expect(modes).toEqual(['off', 'light', 'slate', 'plum']);
  });

  test('migrates legacy gius-dark-mode=1 to slate', async ({ page }) => {
    await setup(page, { storage: { 'gius-dark-mode': '1' } });
    const r = await page.evaluate(() => ({
      mode: window.__giuTheme.getMode(),
      stored: localStorage.getItem('gius-theme'),
    }));
    expect(r.mode).toBe('slate');
    expect(r.stored).toBe('slate');
  });

  test('migrates legacy gius-dark-mode=0 to off', async ({ page }) => {
    await setup(page, { storage: { 'gius-dark-mode': '0' } });
    const r = await page.evaluate(() => ({
      mode: window.__giuTheme.getMode(),
      stored: localStorage.getItem('gius-theme'),
    }));
    expect(r.mode).toBe('off');
    expect(r.stored).toBe('off');
  });

  test('no storage at all defaults to off', async ({ page }) => {
    await setup(page);
    expect(await page.evaluate(() => window.__giuTheme.getMode())).toBe('off');
  });

  test('existing gius-theme value wins over legacy key', async ({ page }) => {
    await setup(page, { storage: { 'gius-theme': 'plum', 'gius-dark-mode': '1' } });
    expect(await page.evaluate(() => window.__giuTheme.getMode())).toBe('plum');
  });
});

test.describe('applyMode side effects', () => {
  test('slate sets data-gius-theme + gius-dark class + injects style', async ({ page }) => {
    await setup(page, { storage: { 'gius-theme': 'slate' } });
    const r = await page.evaluate(() => ({
      attr: document.documentElement.getAttribute('data-gius-theme'),
      dark: document.documentElement.classList.contains('gius-dark'),
      style: !!document.getElementById('gius-dm-styles'),
    }));
    expect(r).toEqual({ attr: 'slate', dark: true, style: true });
  });

  test('light sets attr but NOT gius-dark (co-scripts stay light)', async ({ page }) => {
    await setup(page, { storage: { 'gius-theme': 'light' } });
    const r = await page.evaluate(() => ({
      attr: document.documentElement.getAttribute('data-gius-theme'),
      dark: document.documentElement.classList.contains('gius-dark'),
    }));
    expect(r).toEqual({ attr: 'light', dark: false });
  });

  test('off removes attr, class, and the style element', async ({ page }) => {
    await setup(page, { storage: { 'gius-theme': 'slate' } });
    await page.evaluate(() => window.__giuTheme.setMode('off'));
    const r = await page.evaluate(() => ({
      attr: document.documentElement.getAttribute('data-gius-theme'),
      dark: document.documentElement.classList.contains('gius-dark'),
      style: !!document.getElementById('gius-dm-styles'),
      stored: localStorage.getItem('gius-theme'),
    }));
    expect(r).toEqual({ attr: null, dark: false, style: false, stored: 'off' });
  });

  test('setMode plum applies hot-pink accent variable', async ({ page }) => {
    await setup(page, { storage: { 'gius-theme': 'slate' } });
    await page.evaluate(() => window.__giuTheme.setMode('plum'));
    const accent = await page.evaluate(() =>
      getComputedStyle(document.documentElement).getPropertyValue('--gp-accent').trim());
    expect(accent).toBe('#ff6fae');
  });
});

test.describe('picker UI', () => {
  test('tab exists and popover hidden until clicked', async ({ page }) => {
    await setup(page, { storage: { 'gius-theme': 'slate' } });
    await page.waitForSelector('#gius-dm-toggle');
    expect(await page.isVisible('#gius-theme-pop')).toBe(false);
    await page.click('#gius-dm-toggle');
    expect(await page.isVisible('#gius-theme-pop')).toBe(true);
  });

  test('popover has all four mode rows', async ({ page }) => {
    await setup(page, { storage: { 'gius-theme': 'slate' } });
    await page.click('#gius-dm-toggle');
    const modes = await page.$$eval('#gius-theme-pop [data-mode]', els => els.map(e => e.getAttribute('data-mode')));
    expect(modes).toEqual(['off', 'light', 'slate', 'plum']);
  });

  test('clicking a row applies + persists that mode', async ({ page }) => {
    await setup(page, { storage: { 'gius-theme': 'slate' } });
    await page.click('#gius-dm-toggle');
    await page.click('#gius-theme-pop [data-mode="plum"]');
    const r = await page.evaluate(() => ({
      mode: window.__giuTheme.getMode(),
      attr: document.documentElement.getAttribute('data-gius-theme'),
      stored: localStorage.getItem('gius-theme'),
    }));
    expect(r).toEqual({ mode: 'plum', attr: 'plum', stored: 'plum' });
  });

  test('active row marked aria-checked', async ({ page }) => {
    await setup(page, { storage: { 'gius-theme': 'light' } });
    await page.click('#gius-dm-toggle');
    const checked = await page.getAttribute('#gius-theme-pop [data-mode="light"]', 'aria-checked');
    expect(checked).toBe('true');
  });
});
