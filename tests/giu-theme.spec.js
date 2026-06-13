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
