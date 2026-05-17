const { chromium } = require('playwright');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const AUTH_FILE = path.join(__dirname, '../../auth.json');
const SCREENSHOTS_DIR = path.join(__dirname, '../../screenshots');
const TMP_DIR = path.join(SCREENSHOTS_DIR, 'tmp');
const SCRIPTS_DIR = path.join(__dirname, '../../scripts');

const PORTAL = 'https://portal.giu-uni.de/GIUb';

const targets = [
  {
    name: 'attendance',
    url: `${PORTAL}/EXT/SwiftReports_m.aspx?swiftreportid=866&executereport=1`,
    script: 'GIU Attandance Script.js',
    selector: '#giu-attendance-container',
    useAuth: true,
  },
  {
    name: 'notification-batch-send',
    url: `${PORTAL}/INTStaff/NotificationSystem_SendEmail_m.aspx`,
    script: 'GIU Notification Batch Send.js',
    selector: '#giu-batch-panel',
    useAuth: true,
  },
  {
    name: 'upload-grades-before',
    url: `${PORTAL}/EXT/ManageUploadedGrades_m.aspx`,
    script: 'GIU Upload Grades.js',
    selector: '#giu-toolbar',
    useAuth: true,
  },
  {
    name: 'upload-grades-after',
    url: `file://${path.join(__dirname, '../../reference/Manage Uploaded Grades after selection/GIU-PortalAdmin.html').replace(/\\/g, '/')}`,
    script: 'GIU Upload Grades.js',
    selector: '#giu-toolbar',
    useAuth: false,
  },
  {
    name: 'manage-group-grades',
    url: `${PORTAL}/INTStaff/ManageGroupGrade_m.aspx`,
    script: 'GIU Manage Group Grades.js',
    selector: '.gmgg-panel',
    useAuth: true,
    requiresInteraction: true,
  },
];

function webmToGif(webmPath, gifPath) {
  const cmd = [
    'ffmpeg', '-y',
    '-i', `"${webmPath}"`,
    '-vf', '"fps=10,scale=1280:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse"',
    '-loop', '0',
    `"${gifPath}"`,
  ].join(' ');
  execSync(cmd, { stdio: 'inherit' });
}

(async () => {
  if (!fs.existsSync(AUTH_FILE)) {
    console.error('auth.json not found. Run: node scripts/screenshots/login.js');
    process.exit(1);
  }
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  fs.mkdirSync(TMP_DIR, { recursive: true });

  const HTTP_CREDS = process.env.GIU_USER && process.env.GIU_PASS
    ? { username: process.env.GIU_USER, password: process.env.GIU_PASS }
    : undefined;

  const browser = await chromium.launch({ headless: false });

  for (const target of targets) {
    console.log(`\nRecording: ${target.name}`);

    if (target.requiresInteraction) {
      const setupCtx = await browser.newContext({
        storageState: AUTH_FILE,
        httpCredentials: HTTP_CREDS,
        viewport: { width: 1280, height: 900 },
      });
      const setupPage = await setupCtx.newPage();
      await setupPage.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      console.log('  -> Select dropdowns to load the grade table, then press Enter to start recording...');
      await new Promise(resolve => process.stdin.once('data', resolve));
      target.url = setupPage.url();
      await setupCtx.storageState({ path: AUTH_FILE });
      await setupCtx.close();
    }

    const contextOptions = target.useAuth ? { storageState: AUTH_FILE } : {};
    const context = await browser.newContext({
      ...contextOptions,
      httpCredentials: HTTP_CREDS,
      viewport: { width: 1280, height: 900 },
      recordVideo: { dir: TMP_DIR, size: { width: 1280, height: 900 } },
    });
    const page = await context.newPage();

    await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 30000 });

    const scriptContent = fs.readFileSync(path.join(SCRIPTS_DIR, target.script), 'utf8');
    const cleanScript = scriptContent.replace(/\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==/m, '');
    await page.addScriptTag({ content: cleanScript });

    try {
      await page.waitForSelector(target.selector, { timeout: 15000 });
    } catch {
      console.warn(`  WARNING: ${target.selector} not found for ${target.name}`);
    }

    await page.waitForTimeout(2000);

    const videoPath = await page.video().path();
    await context.close();

    const gifPath = path.join(SCREENSHOTS_DIR, `${target.name}.gif`);
    console.log('  Converting to GIF...');
    webmToGif(videoPath, gifPath);
    console.log(`  Saved: ${gifPath}`);
  }

  await browser.close();
  console.log('\nDone. All GIFs saved to screenshots/');
})();
