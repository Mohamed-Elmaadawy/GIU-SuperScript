/**
 * Scrape course codes + names from the GIU Academic Schedule page.
 * Usage:  node scripts/scrape-courses.js
 * Output: data/courses.json  +  COURSE_NAMES updated in GIU Notification Batch Send.js
 *
 * Requires a valid session in auth.json. If expired, run: node scripts/screenshots/login.js
 */

const { chromium } = require('playwright');
const path = require('path');
const fs   = require('fs');

const AUTH_FILE    = path.join(__dirname, '../auth.json');
const OUTPUT_FILE  = path.join(__dirname, '../data/courses.json');
const NOTIF_SCRIPT = path.join(__dirname, 'GIU Notification Batch Send.js');
const PAGE_URL     = 'https://portal.giu-uni.de/GIUb/INTStaff/SearchAcademicScheduled_001_m.aspx';
const DEBUG_PNG    = path.join(__dirname, '../screenshots/tmp/courses-debug.png');

// "INCS406" → "INCS 406"  (already-spaced codes pass through unchanged)
function normalizeCode(raw) {
    return raw.trim().replace(/^([A-Za-z]+)(\d+)$/, '$1 $2');
}

function parseCourseText(text) {
    text = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();
    if (!text) return null;

    // Format on schedule page: "AD 1001: Course Name" or "CSEN 202: Course Name"
    // Code may have optional letter suffix: "CSEN 401A: ..."
    const colonMatch = text.match(/^([A-Z]{1,6}\s+\d{3,4}[A-Z]?)\s*:\s*(.+)$/);
    if (colonMatch) {
        return { code: colonMatch[1].trim(), name: colonMatch[2].trim() };
    }

    // Compact code at end: "GIU-Cairo.Faculty - Course Name INCS406"
    const endMatch = text.match(/\b([A-Z]{2,}\d{2,})\s*$/);
    if (endMatch) {
        const code   = normalizeCode(endMatch[1]);
        const before = text.slice(0, text.length - endMatch[0].length).trim();
        const lastDash = before.lastIndexOf(' - ');
        let name = lastDash >= 0 ? before.slice(lastDash + 3) : before;
        name = name.replace(/[-–]\s*$/, '').trim() || before.trim();
        return { code, name };
    }

    // Compact code at start: "INCS406 - Course Name"
    const startMatch = text.match(/^([A-Z]{2,}\d{2,})\s*[-–]\s*(.+)$/);
    if (startMatch) {
        return { code: normalizeCode(startMatch[1]), name: startMatch[2].trim() };
    }

    return null;
}

async function takeDebugShot(page, label) {
    fs.mkdirSync(path.dirname(DEBUG_PNG), { recursive: true });
    await page.screenshot({ path: DEBUG_PNG, fullPage: true });
    console.log(`Debug screenshot (${label}): screenshots/tmp/courses-debug.png`);
}

async function embedInScript(courses) {
    const content = fs.readFileSync(NOTIF_SCRIPT, 'utf8');
    const json    = JSON.stringify(courses);
    const updated = content.replace(
        /\/\* BEGIN:COURSE_NAMES \*\/[\s\S]*?\/\* END:COURSE_NAMES \*\//,
        `/* BEGIN:COURSE_NAMES */const COURSE_NAMES = ${json};/* END:COURSE_NAMES */`
    );
    if (updated === content) {
        console.warn('WARNING: COURSE_NAMES marker not found in notification script.');
        console.warn('Manually update the COURSE_NAMES constant with data/courses.json.');
        return;
    }
    fs.writeFileSync(NOTIF_SCRIPT, updated);
    console.log(`Embedded course names into ${path.basename(NOTIF_SCRIPT)}`);
}

(async () => {
    if (!fs.existsSync(AUTH_FILE)) {
        console.error('auth.json not found. Run: node scripts/screenshots/login.js');
        process.exit(1);
    }

    const GIU_USER = process.env.GIU_USER;
    const GIU_PASS = process.env.GIU_PASS;
    if (!GIU_USER || !GIU_PASS) {
        console.error('Set credentials first:');
        console.error('  PowerShell:  $env:GIU_USER="your@giu-uni.de"; $env:GIU_PASS="yourpassword"');
        console.error('  CMD:         set GIU_USER=your@giu-uni.de && set GIU_PASS=yourpassword');
        process.exit(1);
    }

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        storageState:    AUTH_FILE,
        httpCredentials: { username: GIU_USER, password: GIU_PASS },
    });
    const page = await context.newPage();

    console.log('Navigating to schedule page...');
    await page.goto(PAGE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });

    if (/login|signin/i.test(page.url())) {
        console.error('Session expired. Run: node scripts/screenshots/login.js');
        await browser.close();
        process.exit(1);
    }

    console.log(`Loaded: ${page.url()}`);

    // ── Click the "+" next to "Courses" ──────────────────────────────────────
    console.log('Clicking "+" next to Courses...');
    const clicked = await page.evaluate(() => {
        // Find a link/button with text "+" whose parent text contains "Courses"
        for (const el of document.querySelectorAll('a, button, span, input[type="button"]')) {
            if (el.textContent.trim() !== '+') continue;
            const container = el.closest('tr, td, div, p, li, span') ?? el.parentElement;
            if (container && /courses?/i.test(container.textContent)) {
                el.click();
                return el.outerHTML;
            }
        }
        // Broader fallback: any element with "+" near "Courses:" text node
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
            if (/courses?\s*:/i.test(node.nodeValue)) {
                // Find next sibling or parent's child with "+"
                let sibling = node.nextSibling;
                while (sibling) {
                    if (sibling.nodeType === 1 && sibling.textContent.trim() === '+') {
                        sibling.click();
                        return sibling.outerHTML;
                    }
                    sibling = sibling.nextSibling;
                }
            }
        }
        return null;
    });

    if (clicked) {
        console.log(`Clicked: ${clicked}`);
    } else {
        console.log('Auto-click failed. Please click the "+" next to Courses in the browser, then press Enter...');
        await new Promise(resolve => process.stdin.once('data', resolve));
    }

    // Wait for filter input to appear
    await page.waitForTimeout(1500);

    // ── Type wildcard to show all courses ────────────────────────────────────
    // Find the filter input that appeared after clicking "+"
    const inputSel = await page.evaluate(() => {
        // Common patterns: a new text input that appeared
        const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
        for (const inp of inputs) {
            if (inp.offsetParent !== null) { // visible
                return inp.id || inp.name || null;
            }
        }
        return null;
    });

    if (inputSel) {
        console.log(`Found filter input: ${inputSel}. Typing wildcard...`);
        await page.fill(`input[id="${inputSel}"], input[name="${inputSel}"]`, '.*');
        await page.waitForTimeout(2000);
    } else {
        console.log('No filter input found — checking for course list directly...');
        await page.waitForTimeout(1000);
    }

    await takeDebugShot(page, 'after-click');

    // ── Extract course lines from full page text ──────────────────────────────
    // Format: "AD 1001: Course Name" — one per line in the rendered innerText
    const pageLines = await page.evaluate(() =>
        document.body.innerText.split('\n').map(l => l.trim()).filter(Boolean)
    );

    // Filter to lines that look like course entries
    const courseLineRe = /^[A-Z]{1,6}\s+\d{3,4}[A-Z]?\s*:/;
    const rawTexts = pageLines.filter(l => courseLineRe.test(l));

    console.log(`Course lines found: ${rawTexts.length}`);
    if (rawTexts.length > 0) {
        console.log('Samples:', rawTexts.slice(0, 5));
    }

    if (rawTexts.length === 0) {
        const pageText = pageLines.join('\n').slice(0, 3000);
        console.log('\n--- Page text (first 3000 chars) ---\n', pageText);
        console.log('\nCould not find course list. Check courses-debug.png.');
        await browser.close();
        process.exit(1);
    }

    // ── Parse and deduplicate ─────────────────────────────────────────────────
    const courses = {};
    for (const text of rawTexts) {
        const parsed = parseCourseText(text);
        if (parsed && !courses[parsed.code]) {
            courses[parsed.code] = parsed.name;
        }
    }

    const count = Object.keys(courses).length;
    console.log(`Unique courses parsed: ${count}`);

    // ── Save JSON ─────────────────────────────────────────────────────────────
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(courses, null, 2));
    console.log(`Saved to ${OUTPUT_FILE}`);

    // ── Embed into userscript ─────────────────────────────────────────────────
    await embedInScript(courses);

    await browser.close();
    console.log('\nDone. Reload Tampermonkey scripts to apply course names.');
})();
