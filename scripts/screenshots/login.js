const { chromium } = require('playwright');
const path = require('path');

const AUTH_FILE = path.join(__dirname, '../../auth.json');
const PORTAL_URL = 'https://portal.giu-uni.de';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    httpCredentials: process.env.GIU_USER && process.env.GIU_PASS
      ? { username: process.env.GIU_USER, password: process.env.GIU_PASS }
      : undefined,
  });
  const page = await context.newPage();

  await page.goto(PORTAL_URL);
  console.log('Log in to the portal, then press Enter here...');

  await new Promise(resolve => process.stdin.once('data', resolve));

  await context.storageState({ path: AUTH_FILE });
  console.log(`Auth saved to ${AUTH_FILE}`);
  await browser.close();
})();
