# Student Attendance Group Report — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a Tampermonkey userscript that auto-scrapes all session attendance for the currently selected group on the GIU Manage Student Attendances page and renders an absence-level report panel above the student table.

**Architecture:** Single-file userscript that snapshots the page's ASP.NET VIEWSTATE, fires parallel POST requests for each session in the dropdown, aggregates per-student hour-weighted absence rates, and injects a styled panel with group stats and an at-risk list. Results are cached in localStorage for 30 minutes.

**Tech Stack:** Vanilla JS (ES2020), Tampermonkey, ASP.NET WebForms postback pattern, localStorage, DOMParser, AbortController, URLSearchParams.

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `scripts/GIU Student Attendance Group Report.js` | **Create** | The complete userscript |

---

### Task 1: Script scaffold

**Files:**
- Create: `scripts/GIU Student Attendance Group Report.js`

- [ ] **Step 1: Create the file with the Tampermonkey header block and constants**

```javascript
// ==UserScript==
// @name        GIU Student Attendance Group Report
// @description Auto-scrapes all sessions for a group and shows absence level report above the student table
// @match       https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx*
// @namespace   ramin0
// @version     1.0
// @author      Mo.Elmaadawy
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    const PAGE_URL       = 'https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx';
    const CACHE_PREFIX   = 'giuAttendanceGroupV1_';
    const CACHE_TTL_MS   = 30 * 60 * 1000; // 30 minutes

    const MAX_CONCURRENT = 5;

    // Absence level thresholds (checked in descending order)
    const LEVEL_RULES = [
        { min: 0.25, exclusive: true,  level: 3, badge: '✗ DROP',    label: 'Will Be Dropped' },
        { min: 0.20, exclusive: false, level: 2, badge: '⚠ 2nd Wrn', label: 'Second Warning'  },
        { min: 0.10, exclusive: false, level: 1, badge: '⚠ 1st Wrn', label: 'First Warning'   },
        { min: 0,    exclusive: false, level: 0, badge: '✓ OK',       label: 'OK'              },
    ];

    let _abortCtrl = null; // active scrape controller

    // ── [functions go here, added task by task] ────────────────────────────────

    init();
})();
```

- [ ] **Step 2: Verify the file loads in Tampermonkey without errors**

Open Tampermonkey dashboard → add script → paste content. Navigate to the Manage Student Attendances page. Open DevTools console. Expected: no errors, script loads silently (init() will do nothing yet since functions are stubs).

- [ ] **Step 3: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: scaffold GIU Student Attendance Group Report userscript"
```

---

### Task 2: Session option parser

**Files:**
- Modify: `scripts/GIU Student Attendance Group Report.js`

Session option text format (confirmed from reference HTML):
`"Spring 2026  - S26 - INCS 406 - Distributed &Web-based Systems - 4INF P002 Practical @2026.02.14 - Regular  - Slot4 - 2h"`
`"Spring 2026  - S26 - INCS 406 - Distributed &Web-based Systems - 4INF P002 Practical @2026.04.04 - On Hold  - Slot4 - 2h"`

- [ ] **Step 1: Add `parseSessionOptions` after the constants block**

```javascript
// Returns [{id, label, date, status, durationHours}] — skips the "[Choose …]" option (value "0")
function parseSessionOptions(ddl) {
    return Array.from(ddl.options)
        .filter(opt => opt.value && opt.value !== '0')
        .map(opt => {
            const text     = opt.textContent;
            const dateM    = text.match(/@(\d{4})\.(\d{2})\.(\d{2})/);
            const durM     = text.match(/\b(\d+)h\b/i);
            const status   = /On Hold/i.test(text)    ? 'onHold'
                           : /Compensation/i.test(text) ? 'compensation'
                           : 'regular';
            return {
                id:            opt.value,
                label:         text.trim(),
                date:          dateM ? `${dateM[1]}-${dateM[2]}-${dateM[3]}` : null,
                status,
                durationHours: durM ? parseInt(durM[1], 10) : 2,
            };
        });
}

// Extracts year string from first session label for cache key (e.g. "2026")
function extractSeasonYear(sessions) {
    if (!sessions.length) return 'unknown';
    const m = sessions[0].label.match(/\b(\d{4})\b/);
    return m ? m[1] : 'unknown';
}
```

- [ ] **Step 2: Manual test in browser console on the page (group selected, sessions loaded)**

Open the Manage Student Attendances page with a group selected. In DevTools console:
```javascript
const ddl = document.getElementById('MainContent_DDL_Sessions');
// Paste parseSessionOptions here then run:
const sessions = parseSessionOptions(ddl);
console.table(sessions);
```

Expected: array of 13 objects, each with `id` (e.g. `"202321"`), `date` (`"2026-02-14"`), `status` (`"regular"` or `"onHold"`), `durationHours` (2).

- [ ] **Step 3: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: add session option parser"
```

---

### Task 3: ASP.NET form snapshot and session fetcher

**Files:**
- Modify: `scripts/GIU Student Attendance Group Report.js`

The POST must include the current VIEWSTATE, group ID, and the target session ID.

- [ ] **Step 1: Add `snapshotForm` after `extractSeasonYear`**

```javascript
// Captures all hidden ASP.NET form fields from the live DOM
function snapshotForm() {
    const get = id => { const el = document.getElementById(id); return el ? el.value : ''; };
    return {
        __VIEWSTATE:          get('__VIEWSTATE'),
        __VIEWSTATEGENERATOR: get('__VIEWSTATEGENERATOR'),
        __EVENTVALIDATION:    get('__EVENTVALIDATION'),
        __SCROLLPOSITIONX:    '0',
        __SCROLLPOSITIONY:    '0',
        MainContent_H_AlertText: '',
    };
}
```

- [ ] **Step 2: Add `fetchSessionStudents` after `snapshotForm`**

```javascript
// Returns [{id, name, attended}] on success.
// Returns {error: 'expired'} if session has expired.
// Returns {error: 'network'} on fetch failure.
// Returns {error: 'aborted'} if signal was aborted.
async function fetchSessionStudents(sessionId, groupId, formState, signal) {
    const body = new URLSearchParams({
        __EVENTTARGET:                        'ctl00$MainContent$DDL_Sessions',
        __EVENTARGUMENT:                      '',
        __LASTFOCUS:                          '',
        __VIEWSTATE:                          formState.__VIEWSTATE,
        __VIEWSTATEGENERATOR:                 formState.__VIEWSTATEGENERATOR,
        __EVENTVALIDATION:                    formState.__EVENTVALIDATION,
        __SCROLLPOSITIONX:                    formState.__SCROLLPOSITIONX,
        __SCROLLPOSITIONY:                    formState.__SCROLLPOSITIONY,
        'ctl00$MainContent$H_AlertText':      '',
        'ctl00$MainContent$DDL_StudentGroup': groupId,
        'ctl00$MainContent$DDL_Sessions':     sessionId,
    });

    let resp;
    try {
        resp = await fetch(PAGE_URL, {
            method:      'POST',
            credentials: 'include',
            headers:     { 'Content-Type': 'application/x-www-form-urlencoded' },
            body:        body.toString(),
            signal,
        });
    } catch (e) {
        return { error: e.name === 'AbortError' ? 'aborted' : 'network' };
    }

    if (!resp.ok) return { error: 'network' };

    const html = await resp.text();
    if (html.includes('Login_m.aspx') || html.includes('id="LoginPage"')) {
        return { error: 'expired' };
    }

    const doc = new DOMParser().parseFromString(html, 'text/html');
    return parseStudentTable(doc); // defined in Task 4
}
```

- [ ] **Step 3: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: add form snapshot and session fetch helper"
```

---

### Task 4: Student table parser and unrecorded detection

**Files:**
- Modify: `scripts/GIU Student Attendance Group Report.js`

Table `#MainContent_DG_StudentAttendance` structure (confirmed from reference HTML):
- Row 0: header (`Row# | attendance | UserId | Full Name | CardID`)
- Rows 1+: data (`td[0]`=row#, `td[1]`=checkbox span, `td[2]`=studentId, `td[3]`=name, `td[4]`=cardId)
- Checkbox: `<input type="checkbox">` in `td[1]`; `checked` attribute present = attended

- [ ] **Step 1: Add `parseStudentTable` and `isUnrecorded` before `fetchSessionStudents`**

```javascript
// Parses the student attendance DataGrid from a response document.
// Returns [{id, name, attended}] — empty array if table not found.
function parseStudentTable(doc) {
    const table = doc.getElementById('MainContent_DG_StudentAttendance');
    if (!table) return [];
    return Array.from(table.querySelectorAll('tr'))
        .slice(1) // skip header row
        .map(tr => {
            const tds = tr.querySelectorAll('td');
            if (tds.length < 4) return null;
            const cb = tds[1].querySelector('input[type="checkbox"]');
            return {
                id:       tds[2].textContent.trim(),
                name:     tds[3].textContent.trim(),
                attended: cb ? cb.checked : false,
            };
        })
        .filter(Boolean);
}

// A session where every student is unchecked most likely has no attendance entered.
// Exclude these sessions from absence calculations.
function isUnrecorded(students) {
    return students.length > 0 && students.every(s => !s.attended);
}
```

- [ ] **Step 2: Manual test in browser console (session selected so student table is visible)**

```javascript
// Paste parseStudentTable and isUnrecorded in console then:
const students = parseStudentTable(document);
console.log('Count:', students.length);
console.log('Unrecorded:', isUnrecorded(students));
console.table(students.slice(0, 5));
```

Expected: array of ~24 students with correct ids, names, and `attended` booleans. `isUnrecorded` returns false for a session where attendance was taken.

- [ ] **Step 3: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: add student table parser and unrecorded detection"
```

---

### Task 5: Concurrency pool

**Files:**
- Modify: `scripts/GIU Student Attendance Group Report.js`

Adapted from `GIU Proctor Schedule Aggregator.js` with added AbortController support.

- [ ] **Step 1: Add `runPool` after `isUnrecorded`**

```javascript
// Runs worker(task, index) for each task with at most maxConcurrent in-flight.
// Calls onProgress(completedCount, totalCount) after each task finishes.
// Respects signal: stops launching new tasks when signal.aborted is true.
// Always resolves (never rejects) — individual failures become null entries.
function runPool(tasks, worker, { maxConcurrent = 5, onProgress, signal } = {}) {
    return new Promise(resolve => {
        if (!tasks.length) { resolve([]); return; }
        let running = 0, index = 0, done = 0;
        const results = new Array(tasks.length);

        function next() {
            if (signal && signal.aborted) {
                if (running === 0) resolve(results);
                return;
            }
            while (running < maxConcurrent && index < tasks.length) {
                const i = index++;
                running++;
                worker(tasks[i], i)
                    .then(r  => { results[i] = r; })
                    .catch(() => { results[i] = null; })
                    .finally(() => {
                        running--;
                        done++;
                        if (onProgress) onProgress(done, tasks.length);
                        if (signal && signal.aborted) {
                            if (running === 0) resolve(results);
                        } else if (index < tasks.length) {
                            next();
                        } else if (running === 0) {
                            resolve(results);
                        }
                    });
            }
        }
        next();
    });
}
```

- [ ] **Step 2: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: add concurrency pool with abort support"
```

---

### Task 6: Absence aggregation

**Files:**
- Modify: `scripts/GIU Student Attendance Group Report.js`

- [ ] **Step 1: Add `classifyLevel` after `runPool`**

```javascript
// Returns absence level 0-3 based on hour-weighted absence rate.
// > 25% → 3 (Drop), >= 20% → 2 (Second Warning), >= 10% → 1 (First Warning), else 0.
function classifyLevel(rate) {
    if (rate > 0.25) return 3;
    if (rate >= 0.20) return 2;
    if (rate >= 0.10) return 1;
    return 0;
}
```

- [ ] **Step 2: Add `buildReport` after `classifyLevel`**

`sessionResults[i]` is one of:
- `[{id, name, attended}]` — successful parse
- `{error: 'network'|'aborted'|'expired'}` — fetch failed
- `'unrecorded'` — session had no attendance entered (set by caller after isUnrecorded check)

```javascript
// Aggregates per-student hour-weighted absence data across all sessions.
// Returns {students, atRisk, levelCounts, avgRate, eligibleCount, errorCount, unrecordedCount, total}.
function buildReport(sessions, sessionResults) {
    const map = new Map(); // studentId → {id, name, absentHours, totalHours}

    sessions.forEach((session, i) => {
        const result = sessionResults[i];
        // Skip unrecorded, errors, and aborted sessions
        if (!Array.isArray(result)) return;

        result.forEach(student => {
            if (!map.has(student.id)) {
                map.set(student.id, { id: student.id, name: student.name, absentHours: 0, totalHours: 0 });
            }
            const s = map.get(student.id);
            s.totalHours += session.durationHours;
            if (!student.attended) s.absentHours += session.durationHours;
        });
    });

    const students = Array.from(map.values()).map(s => {
        const rate  = s.totalHours > 0 ? s.absentHours / s.totalHours : 0;
        const level = classifyLevel(rate);
        return { ...s, absenceRate: rate, level };
    }).sort((a, b) => b.absenceRate - a.absenceRate);

    const levelCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
    students.forEach(s => levelCounts[s.level]++);

    const atRisk   = students.filter(s => s.level >= 2);
    const avgRate  = students.length > 0
        ? students.reduce((acc, s) => acc + s.absenceRate, 0) / students.length
        : 0;

    const eligibleCount   = sessionResults.filter(r => Array.isArray(r)).length;
    const errorCount      = sessionResults.filter(r => r === null).length; // null = network failure
    const unrecordedCount = sessionResults.filter(r => r === 'unrecorded').length;

    return { students, atRisk, levelCounts, avgRate, eligibleCount, errorCount, unrecordedCount, total: students.length };
}
```

- [ ] **Step 3: Verify logic with a quick console test (run on any page)**

```javascript
// Paste classifyLevel + buildReport in console, then:
const sessions = [
    { durationHours: 2 },
    { durationHours: 2 },
    { durationHours: 2 },
    { durationHours: 2 },
];
const results = [
    [{ id: '1', name: 'Alice', attended: true  }, { id: '2', name: 'Bob', attended: false }],
    [{ id: '1', name: 'Alice', attended: false }, { id: '2', name: 'Bob', attended: false }],
    [{ id: '1', name: 'Alice', attended: true  }, { id: '2', name: 'Bob', attended: false }],
    'unrecorded',
];
const report = buildReport(sessions, results);
console.log(report.students);
// Expected: Alice absenceRate=2/6≈0.333→level 3, Bob absenceRate=4/6≈0.667→level 3
// eligibleCount=3, unrecordedCount=1
```

- [ ] **Step 4: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: add absence aggregation and level classification"
```

---

### Task 7: localStorage cache

**Files:**
- Modify: `scripts/GIU Student Attendance Group Report.js`

- [ ] **Step 1: Add cache functions after `buildReport`**

```javascript
function makeCacheKey(groupId, sessions) {
    return `${CACHE_PREFIX}${groupId}_${extractSeasonYear(sessions)}`;
}

// Returns cached data object if exists and within TTL, otherwise null.
function readCache(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (!data || !data.ts) return null;
        if (Date.now() - data.ts > CACHE_TTL_MS) return null;
        return data;
    } catch { return null; }
}

// Stores payload with a timestamp. Silently ignores quota errors.
function writeCache(key, payload) {
    try {
        localStorage.setItem(key, JSON.stringify({ ...payload, ts: Date.now() }));
    } catch { /* storage quota exceeded */ }
}

function clearCacheEntry(key) {
    try { localStorage.removeItem(key); } catch { /* ignore */ }
}

// Returns human-readable cache age string.
function formatCacheAge(ts) {
    const sec = Math.floor((Date.now() - ts) / 1000);
    if (sec < 60)   return `${sec}s ago`;
    if (sec < 3600) return `${Math.floor(sec / 60)}m ago`;
    return `${Math.floor(sec / 3600)}h ago`;
}
```

- [ ] **Step 2: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: add localStorage cache layer"
```

---

### Task 8: CSS injection

**Files:**
- Modify: `scripts/GIU Student Attendance Group Report.js`

Light mode uses Bootstrap-compatible neutrals. Dark mode targets `html.gius-dark` with Catppuccin Mocha palette, using `background:` shorthand (not `background-color:`) for Material Dashboard compatibility, and `border-color: transparent` for no visible borders.

- [ ] **Step 1: Add `injectStyles` after `formatCacheAge`**

```javascript
function injectStyles() {
    if (document.getElementById('gius-att-styles')) return;
    const style = document.createElement('style');
    style.id = 'gius-att-styles';
    style.textContent = `
/* ── Panel container ─────────────────────────────────────────── */
.gius-att-panel {
    font-family: Arial, sans-serif;
    font-size: 13px;
    margin-bottom: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
}
/* ── Header bar ──────────────────────────────────────────────── */
.gius-att-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    background: #006699;
    color: #fff;
}
.gius-att-title    { font-weight: bold; flex: 1; }
.gius-att-meta     { font-size: 11px; opacity: .85; }
.gius-att-refresh  {
    font-size: 11px;
    padding: 2px 8px;
    cursor: pointer;
    background: rgba(255,255,255,.15);
    color: #fff;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 3px;
}
.gius-att-refresh:hover { background: rgba(255,255,255,.3); }
/* ── Body ────────────────────────────────────────────────────── */
.gius-att-body { padding: 8px 10px; background: #fff; }
/* ── Progress bar ────────────────────────────────────────────── */
.gius-att-progress { display: flex; align-items: center; gap: 10px; }
.gius-att-progress-bar  { flex: 1; height: 10px; background: #e0e0e0; border-radius: 5px; overflow: hidden; }
.gius-att-progress-fill { height: 100%; background: #006699; width: 0%; transition: width .2s; }
.gius-att-progress-text { font-size: 12px; white-space: nowrap; min-width: 140px; }
/* ── Error banner ────────────────────────────────────────────── */
.gius-att-error { color: #c0392b; background: #fdf; padding: 6px 10px; border-radius: 3px; }
/* ── Stats grid ──────────────────────────────────────────────── */
.gius-att-stats { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 8px; }
.gius-att-stat  { font-size: 12px; }
.gius-att-stat-val { font-weight: bold; }
/* ── At-risk table ───────────────────────────────────────────── */
.gius-att-atrisk-title { font-size: 12px; font-weight: bold; margin: 6px 0 4px; }
.gius-att-atrisk-table { border-collapse: collapse; font-size: 12px; width: 100%; max-width: 680px; }
.gius-att-atrisk-table th,
.gius-att-atrisk-table td { padding: 3px 8px; text-align: left; border-bottom: 1px solid #eee; }
.gius-att-atrisk-table th  { background: #f5f5f5; font-weight: bold; }
/* ── Level row colours ───────────────────────────────────────── */
.gius-att-lvl-3 { background: #ffcccc; }
.gius-att-lvl-2 { background: #ffe0b2; }
/* ── Dark mode ───────────────────────────────────────────────── */
html.gius-dark .gius-att-panel    { border-color: transparent; }
html.gius-dark .gius-att-body     { background: #1e1e2e; color: #cdd6f4; }
html.gius-dark .gius-att-progress-bar  { background: #313244; }
html.gius-dark .gius-att-progress-fill { background: #89b4fa; }
html.gius-dark .gius-att-error    { background: #45475a; color: #f38ba8; }
html.gius-dark .gius-att-atrisk-table th { background: #313244; color: #cdd6f4; }
html.gius-dark .gius-att-atrisk-table td { border-bottom-color: #313244; }
html.gius-dark .gius-att-atrisk-table th,
html.gius-dark .gius-att-atrisk-table td { color: #cdd6f4; }
html.gius-dark .gius-att-lvl-3 { background: #3d1f1f; color: #f38ba8; }
html.gius-dark .gius-att-lvl-2 { background: #3d2e1a; color: #fab387; }
`;
    document.head.appendChild(style);
}
```

- [ ] **Step 2: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: add CSS for attendance report panel (light + dark mode)"
```

---

### Task 9: Panel HTML and render functions

**Files:**
- Modify: `scripts/GIU Student Attendance Group Report.js`

- [ ] **Step 1: Add `buildPanel` after `injectStyles`**

`buildPanel` creates the DOM skeleton; other functions mutate it.

```javascript
// Creates and returns the panel DOM element (not yet inserted into the page).
function buildPanel(groupLabel) {
    const panel = document.createElement('div');
    panel.className = 'gius-att-panel';
    panel.innerHTML = `
        <div class="gius-att-header">
            <span class="gius-att-title">Group Attendance Report — <strong>${groupLabel}</strong></span>
            <span class="gius-att-meta"></span>
            <button class="gius-att-refresh" type="button">↻ Refresh</button>
        </div>
        <div class="gius-att-body">
            <div class="gius-att-progress" hidden>
                <div class="gius-att-progress-bar">
                    <div class="gius-att-progress-fill"></div>
                </div>
                <span class="gius-att-progress-text">Preparing…</span>
            </div>
            <div class="gius-att-error" hidden></div>
            <div class="gius-att-report" hidden>
                <div class="gius-att-stats"></div>
                <div class="gius-att-atrisk" hidden>
                    <div class="gius-att-atrisk-title">AT-RISK STUDENTS (Level 2+)</div>
                    <table class="gius-att-atrisk-table">
                        <thead><tr>
                            <th>Level</th><th>Name</th><th>ID</th><th>Absent hrs</th><th>%</th>
                        </tr></thead>
                        <tbody class="gius-att-atrisk-body"></tbody>
                    </table>
                </div>
            </div>
        </div>`;
    return panel;
}
```

- [ ] **Step 2: Add `showProgress`, `showError`, and `renderReport` after `buildPanel`**

```javascript
function showProgress(panel, done, total) {
    panel.querySelector('.gius-att-progress').hidden = false;
    panel.querySelector('.gius-att-error').hidden    = true;
    panel.querySelector('.gius-att-report').hidden   = true;

    const pct  = total > 0 ? Math.round((done / total) * 100) : 0;
    panel.querySelector('.gius-att-progress-fill').style.width = `${pct}%`;
    panel.querySelector('.gius-att-progress-text').textContent =
        `${done} / ${total} sessions scraped…`;
    panel.querySelector('.gius-att-meta').textContent = '';
}

function showError(panel, message) {
    panel.querySelector('.gius-att-progress').hidden = true;
    panel.querySelector('.gius-att-error').hidden    = false;
    panel.querySelector('.gius-att-report').hidden   = true;

    panel.querySelector('.gius-att-error').textContent = message;
    panel.querySelector('.gius-att-meta').textContent  = '';
}

function renderReport(panel, report, { ts, sessions }) {
    panel.querySelector('.gius-att-progress').hidden = true;
    panel.querySelector('.gius-att-error').hidden    = true;
    panel.querySelector('.gius-att-report').hidden   = false;

    // Header meta line
    const scrapedNote = report.errorCount > 0
        ? `${report.eligibleCount}/${sessions.length} sessions (${report.errorCount} failed)`
        : `${sessions.length} sessions`;
    panel.querySelector('.gius-att-meta').textContent =
        `${scrapedNote} · cached ${formatCacheAge(ts)}`;

    // Stats
    const pct = n => `${(n * 100).toFixed(1)}%`;
    panel.querySelector('.gius-att-stats').innerHTML = `
        <span class="gius-att-stat">● <span class="gius-att-stat-val">${report.total}</span> students</span>
        <span class="gius-att-stat">✓ <span class="gius-att-stat-val">${report.levelCounts[0] + report.levelCounts[1]}</span> OK / Level 1</span>
        <span class="gius-att-stat">⚠ <span class="gius-att-stat-val">${report.levelCounts[2]}</span> Second Warning</span>
        <span class="gius-att-stat">✗ <span class="gius-att-stat-val">${report.levelCounts[3]}</span> Drop</span>
        <span class="gius-att-stat">Group avg: <span class="gius-att-stat-val">${pct(report.avgRate)}</span> absent</span>
        ${report.unrecordedCount > 0 ? `<span class="gius-att-stat" style="opacity:.7">(${report.unrecordedCount} unrecorded sessions excluded)</span>` : ''}
    `;

    // At-risk table
    const atRiskEl = panel.querySelector('.gius-att-atrisk');
    if (report.atRisk.length === 0) {
        atRiskEl.hidden = true;
        return;
    }
    atRiskEl.hidden = false;
    const tbody = panel.querySelector('.gius-att-atrisk-body');
    tbody.innerHTML = report.atRisk.map(s => {
        const rule   = LEVEL_RULES.find(r => r.level === s.level);
        const rowCls = s.level === 3 ? 'gius-att-lvl-3' : 'gius-att-lvl-2';
        const absentSessions = s.totalHours > 0
            ? `${s.absentHours}/${s.totalHours}h`
            : '—';
        return `<tr class="${rowCls}">
            <td>${rule.badge}</td>
            <td>${s.name}</td>
            <td>${s.id}</td>
            <td>${absentSessions}</td>
            <td>${pct(s.absenceRate)}</td>
        </tr>`;
    }).join('');
}
```

- [ ] **Step 3: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: add panel HTML builder and render functions"
```

---

### Task 10: Main orchestrator

**Files:**
- Modify: `scripts/GIU Student Attendance Group Report.js`

This is the entry point that wires everything together. Called once on `document-idle`.

- [ ] **Step 1: Add `mountPanel` after `renderReport`**

Inserts the panel before the student table (Step C state) or after the session info table (Step B state — group selected but no session yet).

```javascript
// Finds the best insertion point and inserts panel. Returns panel element or null.
function mountPanel(groupLabel) {
    const studentTable = document.getElementById('MainContent_DG_StudentAttendance');
    const sessionInfoEl = document.getElementById('MainContent_L_SessionStart');

    const anchor = studentTable
        || sessionInfoEl?.closest('table')?.nextSibling
        || null;

    if (!anchor || !anchor.parentElement) return null;

    injectStyles();
    const panel = buildPanel(groupLabel);
    anchor.parentElement.insertBefore(panel, anchor);
    return panel;
}
```

- [ ] **Step 2: Add `runScrape` after `mountPanel`**

```javascript
async function runScrape(signal, panel, sessions, groupId, formState, cacheKey, groupLabel) {
    const worker = async (session) => {
        const result = await fetchSessionStudents(session.id, groupId, formState, signal);
        // result is [{id,name,attended}] or {error:…}
        if (Array.isArray(result)) {
            return isUnrecorded(result) ? 'unrecorded' : result;
        }
        if (result.error === 'expired') return { error: 'expired' };
        return null; // network / aborted errors → null (pool already handles throw)
    };

    const rawResults = await runPool(sessions, worker, {
        maxConcurrent: MAX_CONCURRENT,
        signal,
        onProgress: (done, total) => {
            if (!signal.aborted) showProgress(panel, done, total);
        },
    });

    if (signal.aborted) return;

    // Check if any session indicated expiry
    if (rawResults.some(r => r && r.error === 'expired')) {
        showError(panel, 'Session may have expired — please reload the page.');
        return;
    }

    const report = buildReport(sessions, rawResults);
    writeCache(cacheKey, { report, sessions, groupLabel });
    renderReport(panel, report, { ts: Date.now(), sessions });
}
```

- [ ] **Step 3: Add `init` after `runScrape`**

```javascript
function init() {
    const groupDdl   = document.getElementById('MainContent_DDL_StudentGroup');
    const sessionDdl = document.getElementById('MainContent_DDL_Sessions');
    if (!groupDdl || !sessionDdl) return;

    const groupId    = groupDdl.value;
    const groupLabel = groupDdl.options[groupDdl.selectedIndex]?.textContent?.trim() ?? '';
    if (!groupId || groupId === '0') return; // no group selected yet

    const sessions = parseSessionOptions(sessionDdl);
    if (!sessions.length) return; // sessions not loaded yet

    const panel = mountPanel(groupLabel);
    if (!panel) return;

    const cacheKey  = makeCacheKey(groupId, sessions);
    const formState = snapshotForm();

    // Wire the Refresh button
    panel.querySelector('.gius-att-refresh').addEventListener('click', () => {
        if (_abortCtrl) _abortCtrl.abort();
        clearCacheEntry(cacheKey);
        _abortCtrl = new AbortController();
        showProgress(panel, 0, sessions.length);
        runScrape(_abortCtrl.signal, panel, sessions, groupId, formState, cacheKey, groupLabel);
    });

    // Check cache first
    const cached = readCache(cacheKey);
    if (cached && cached.report && cached.sessions) {
        // Render cached data immediately
        renderReport(panel, cached.report, { ts: cached.ts, sessions: cached.sessions });
    } else {
        // Show progress bar while scraping
        showProgress(panel, 0, sessions.length);
    }

    // Always scrape to refresh (background if cache hit, foreground if miss)
    if (_abortCtrl) _abortCtrl.abort();
    _abortCtrl = new AbortController();
    runScrape(_abortCtrl.signal, panel, sessions, groupId, formState, cacheKey, groupLabel);
}
```

- [ ] **Step 4: Verify end-to-end in browser**

1. Install/update the script in Tampermonkey.
2. Navigate to `https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx`.
3. Select any group from the dropdown → page reloads.
4. Expected: panel appears above the session dropdown area immediately, shows "0 / N sessions scraped…" progress bar.
5. Wait for scrape to complete (~5–15s depending on session count). Expected: stats appear showing student count, level distribution, group avg absence %.
6. If any students are Level 2 or 3, they appear in the at-risk table with badge, name, ID, hours, and %.
7. Refresh the page → panel loads instantly from cache (no progress bar), shows "cached Xs ago".
8. Click [↻ Refresh] → clears cache, scrape re-runs.
9. Toggle dark mode (if GIU dark mode script is installed) → panel uses Catppuccin Mocha colours.

- [ ] **Step 5: Test unrecorded session handling**

Select a group that has future/unrecorded sessions (sessions where no attendance was entered). Expected: "N unrecorded sessions excluded" note appears in stats.

- [ ] **Step 6: Test session-expired handling**

Log out of the portal in another tab, then click [↻ Refresh] in the script panel. Expected: banner shows "Session may have expired — please reload the page."

- [ ] **Step 7: Commit**

```bash
git add "scripts/GIU Student Attendance Group Report.js"
git commit -m "feat: add main orchestrator — GIU Student Attendance Group Report v1.0 complete"
```
