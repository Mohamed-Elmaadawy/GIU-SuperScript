# Manage Uploaded Grades Userscript — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Single Tampermonkey userscript that adds CSV upload, download, live stats, and batch-all-groups automation to `ManageUploadedGrades_m.aspx`.

**Architecture:** One file, two modes. UI mode (no localStorage queue) injects a toolbar above the Save button when student rows are present. Runner mode (queue in `giuManageGradesQueueV1`) drives the page through groups via a two-postback-per-group state machine, mirroring the pattern in `notificationBatchSend.js`.

**Tech Stack:** Vanilla JS, Tampermonkey, ASP.NET WebForms `form1.submit()` for postbacks, localStorage, FileReader API, Blob/URL API.

---

## File Map

| Path | Action |
| --- | --- |
| `scripts/manageUploadedGrades.js` | Create — new userscript |

---

### Task 1: Scaffold — header, constants, core utilities

**Files:**
- Create: `scripts/manageUploadedGrades.js`

- [ ] **Step 1: Write the full file skeleton**

Create `scripts/manageUploadedGrades.js`:

```js
// ==UserScript==
// @name        GIU Manage Uploaded Grades
// @description Adds CSV upload, download, live stats, and batch automation to Manage Uploaded Grades page.
// @match       https://portal.giu-uni.de/GIUb/EXT/ManageUploadedGrades_m.aspx
// @namespace   ramin0
// @version     1.0
// @author      Mo.Elmaadawy
// @icon        https://i.ibb.co/Q7mgLHsW/GIU-images.png
// @run-at      document-idle
// ==/UserScript==

(function () {
    'use strict';

    const QUEUE_KEY = 'giuManageGradesQueueV1';

    const BTN_STYLE = `
        padding: 8px 14px;
        background-color: #0d6efd;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 8px;
    `;

    const SEL = {
        season:  '#MainContent_dlSeason',
        course:  '#MainContent_smCrsLst',
        group:   '#MainContent_grpLst',
        eval:    '#MainContent_evalMethIdLst',
        saveBtn: '#MainContent_saveBtn',
        rows:    'tr[id^="MainContent_rptrNtt_stdRw_"]',
        nameLbl: 'span[id^="MainContent_rptrNtt_stdNmLbl_"]',
        gradeIn: 'input[id^="MainContent_rptrNtt_grd_"]',
        maxPt:   'input[id^="MainContent_rptrNtt_mxPt_"]',
    };

})();
```

- [ ] **Step 2: Add utility functions inside the IIFE, after the SEL constant**

```js
    function makeBtn(text) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = text;
        btn.style.cssText = BTN_STYLE;
        return btn;
    }

    function getGradeRows() {
        return Array.from(document.querySelectorAll(SEL.rows));
    }

    function extractStudentId(nameText) {
        const m = nameText.match(/^\((\d+)\)/);
        return m ? m[1] : null;
    }

    function triggerPostBack(target) {
        const et = document.getElementById('__EVENTTARGET');
        const ea = document.getElementById('__EVENTARGUMENT');
        const f  = document.getElementById('form1');
        if (!et || !ea || !f) return;
        et.value = target;
        ea.value = '';
        f.submit();
    }

    function loadQueue() {
        try { return JSON.parse(localStorage.getItem(QUEUE_KEY)); }
        catch { return null; }
    }

    function saveQueue(q) {
        localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
    }

    function clearQueue() {
        localStorage.removeItem(QUEUE_KEY);
    }
```

- [ ] **Step 3: Add CSV and stats utilities inside the IIFE**

```js
    function parseGradesCSV(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const map = {};
                e.target.result.trim().split(/\r?\n/).forEach(line => {
                    const cols = line.split(',').map(v => v.trim());
                    const id   = extractStudentId(cols[0]);
                    const grade = cols[cols.length - 1];
                    if (id && grade !== '' && !isNaN(grade)) map[id] = grade;
                });
                resolve(map);
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }

    function computeStats(values) {
        if (!values.length) return { avg: 0, min: 0, max: 0, range: 0, count: 0 };
        const nums = values.map(Number);
        const min  = Math.min(...nums);
        const max  = Math.max(...nums);
        const avg  = +(nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2);
        return { avg, min, max, range: max - min, count: nums.length };
    }

    function downloadCSV(rows, groupLabel, evalLabel) {
        const csv = [
            'Name,Grade',
            ...rows.map(row => {
                const name  = row.querySelector(SEL.nameLbl)?.textContent?.trim() ?? '';
                const grade = row.querySelector(SEL.gradeIn)?.value ?? '';
                return `${name},${grade}`;
            }),
        ].join('\n');
        const filename = `${groupLabel}-${evalLabel}.csv`.replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_');
        const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
```

- [ ] **Step 4: Install in Tampermonkey and verify utilities load**

Open the page in browser, open DevTools console, run:

```js
// These should all be undefined outside the IIFE, confirming IIFE scope is intact:
console.log(typeof makeBtn);           // "undefined" — scoped inside IIFE
console.log(typeof QUEUE_KEY);         // "undefined" — scoped inside IIFE
console.log(localStorage.getItem('giuManageGradesQueueV1')); // null
```

No errors in the console on page load = scaffold is clean.

- [ ] **Step 5: Commit**

```bash
git add scripts/manageUploadedGrades.js
git commit -m "feat: scaffold manageUploadedGrades userscript with constants and utilities"
```

---

### Task 2: Single-group toolbar — download CSV + live stats

**Files:**
- Modify: `scripts/manageUploadedGrades.js`

- [ ] **Step 1: Add `fillGradesFromMap` function inside the IIFE**

Append before the closing `})();`:

```js
    function fillGradesFromMap(csvMap, statsBar) {
        getGradeRows().forEach(row => {
            const nameEl  = row.querySelector(SEL.nameLbl);
            const gradeEl = row.querySelector(SEL.gradeIn);
            const maxEl   = row.querySelector(SEL.maxPt);
            if (!nameEl || !gradeEl) return;
            const id = extractStudentId(nameEl.textContent.trim());
            if (!id || !(id in csvMap)) return;
            const maxPt = maxEl ? Number(maxEl.value) : Infinity;
            const grade = Number(csvMap[id]);
            if (isNaN(grade) || grade > maxPt) return;
            gradeEl.value = grade;
        });
        if (statsBar) refreshStats(statsBar);
    }
```

- [ ] **Step 2: Add `refreshStats` and `buildStatsBar` inside the IIFE**

Append before the closing `})();`:

```js
    function refreshStats(bar) {
        const values = Array.from(document.querySelectorAll(SEL.gradeIn))
            .map(inp => inp.value.trim())
            .filter(v => v !== '' && !isNaN(v));
        if (!values.length) { bar.textContent = 'No grades loaded'; return; }
        const { avg, min, max, range, count } = computeStats(values);
        bar.textContent = `Avg: ${avg}  |  Min: ${min}  |  Max: ${max}  |  Range: ${range}  |  Students: ${count}`;
    }

    function buildStatsBar() {
        const bar = document.createElement('div');
        bar.id = 'giu-stats-bar';
        bar.style.cssText = 'margin-top: 8px; font-weight: bold; color: #495057; font-size: 0.95em;';
        bar.textContent = 'No grades loaded';
        return bar;
    }
```

- [ ] **Step 3: Add `injectToolbar` inside the IIFE**

Append before the closing `})();`:

```js
    function injectToolbar(saveBtn) {
        if (document.getElementById('giu-toolbar')) return;

        const container = document.createElement('div');
        container.id = 'giu-toolbar';
        container.style.cssText = 'margin-bottom: 12px; padding: 10px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 4px;';

        // File input (hidden) — shared by upload and batch
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.style.display = 'none';

        const uploadBtn   = makeBtn('📄 Upload Grades CSV');
        const downloadBtn = makeBtn('📥 Download Grades CSV');
        const batchBtn    = makeBtn('▶ Batch All Groups');
        const statsBar    = buildStatsBar();

        let parsedCsvMap = null;

        uploadBtn.onclick = () => fileInput.click();

        downloadBtn.onclick = () => {
            const groupEl = document.querySelector(SEL.group);
            const evalEl  = document.querySelector(SEL.eval);
            const groupLabel = groupEl?.options[groupEl.selectedIndex]?.text?.trim() ?? 'group';
            const evalLabel  = evalEl?.options[evalEl.selectedIndex]?.text?.split('||')[0]?.trim() ?? 'eval';
            downloadCSV(getGradeRows(), groupLabel, evalLabel);
        };

        fileInput.addEventListener('change', async () => {
            const file = fileInput.files[0];
            if (!file) return;
            parsedCsvMap = await parseGradesCSV(file);
            fillGradesFromMap(parsedCsvMap, statsBar);
        });

        // batchBtn wired in Task 4
        batchBtn.onclick = () => alert('Select all dropdowns and optionally upload a CSV first.');

        document.addEventListener('input', (e) => {
            if (e.target.matches(SEL.gradeIn)) refreshStats(statsBar);
        });

        container.append(uploadBtn, fileInput, downloadBtn, batchBtn, statsBar);
        saveBtn.insertAdjacentElement('beforebegin', container);

        refreshStats(statsBar);

        return { fileInput, batchBtn, parsedCsvMap: () => parsedCsvMap };
    }
```

- [ ] **Step 4: Add `init` entry point inside the IIFE**

Append before the closing `})();`:

```js
    function init() {
        const saveBtn = document.querySelector(SEL.saveBtn);
        if (!saveBtn) return;
        if (document.querySelector(SEL.rows)) {
            injectToolbar(saveBtn);
        }
    }

    init();
```

- [ ] **Step 5: Manual verify — toolbar, download, stats**

1. Open `ManageUploadedGrades_m.aspx`.
2. Select Season → Course → Group → Eval Method so student rows load.
3. Confirm toolbar appears above the "Save Group Grades" button with 3 buttons + stats bar.
4. Confirm stats bar shows correct Avg / Min / Max / Range.
5. Change a grade input manually — confirm stats update instantly.
6. Click "📥 Download Grades CSV" — confirm a `.csv` file downloads with `Name,Grade` header and one row per student.
7. Open the CSV in a text editor — confirm format is `(ID) Name,grade` per row.

- [ ] **Step 6: Commit**

```bash
git add scripts/manageUploadedGrades.js
git commit -m "feat: add toolbar with download CSV and live stats to manage uploaded grades"
```

---

### Task 3: Upload CSV (single-group flow)

**Files:**
- Modify: `scripts/manageUploadedGrades.js`

The `fillGradesFromMap` and `fileInput` change handler were added in Task 2. This task verifies the upload path end-to-end with a real CSV.

- [ ] **Step 1: Manual verify — upload fills inputs**

1. Download the current grades CSV (Task 2 download button).
2. Edit 3–4 grade values in the file. Save.
3. Click "📄 Upload Grades CSV", select the edited file.
4. Confirm edited grades appear in the correct student rows.
5. Confirm students not in the CSV keep their original values.
6. Confirm a student with a grade exceeding their `mxPt` is skipped (value unchanged).
7. Confirm stats bar updates to reflect the uploaded grades.
8. Click the native "Save Group Grades" button — confirm portal saves without error.

- [ ] **Step 2: Commit** (no code changes — upload was wired in Task 2)

```bash
git commit --allow-empty -m "test: verify single-group CSV upload flow"
```

---

### Task 4: Batch queue builder

**Files:**
- Modify: `scripts/manageUploadedGrades.js`

- [ ] **Step 1: Add `buildQueueState` inside the IIFE (before `injectToolbar`)**

Append before `injectToolbar`:

```js
    function buildQueueState(csvMap) {
        const groupEl  = document.querySelector(SEL.group);
        const evalEl   = document.querySelector(SEL.eval);
        const seasonEl = document.querySelector(SEL.season);
        const courseEl = document.querySelector(SEL.course);

        const groups = Array.from(groupEl.options)
            .filter(o => o.value !== '')
            .map(o => ({ value: o.value, label: o.text.trim() }));

        const evalOpt = evalEl.options[evalEl.selectedIndex];

        return {
            step:           'select-group',
            currentIndex:   0,
            savedSeasonId:  seasonEl?.value ?? '',
            savedCourseId:  courseEl?.value ?? '',
            savedEvalId:    evalEl.value,
            savedEvalLabel: evalOpt?.text?.split('||')[0]?.trim() ?? '',
            groups,
            csvMap:   csvMap ?? {},
            results:  [],
        };
    }
```

- [ ] **Step 2: Replace the placeholder `batchBtn.onclick` in `injectToolbar`**

Inside `injectToolbar`, find:

```js
        // batchBtn wired in Task 4
        batchBtn.onclick = () => alert('Select all dropdowns and optionally upload a CSV first.');
```

Replace with:

```js
        batchBtn.onclick = () => {
            const groupEl = document.querySelector(SEL.group);
            const evalEl  = document.querySelector(SEL.eval);
            if (!groupEl || !evalEl || !evalEl.value || evalEl.value === 'Please Choose an Evaluation') {
                alert('Select all four dropdowns first (Season, Course, Group, Evaluation Method).');
                return;
            }
            const queue = buildQueueState(parsedCsvMap);
            if (queue.groups.length === 0) { alert('No groups found in dropdown.'); return; }
            saveQueue(queue);
            location.reload();
        };
```

- [ ] **Step 3: Manual verify — queue is built correctly**

1. Select all 4 dropdowns so student rows load.
2. Click "▶ Batch All Groups" (no CSV uploaded).
3. Before page reloads, run in DevTools console:

```js
JSON.parse(localStorage.getItem('giuManageGradesQueueV1'))
// Expected: { step: "select-group", currentIndex: 0, groups: [...], csvMap: {}, results: [] }
```

4. Confirm `groups` array contains all options from the Group dropdown.
5. Confirm `savedEvalId` matches the selected Eval Method value.

- [ ] **Step 4: Commit**

```bash
git add scripts/manageUploadedGrades.js
git commit -m "feat: add batch queue builder to manage uploaded grades"
```

---

### Task 5: Runner — state machine

**Files:**
- Modify: `scripts/manageUploadedGrades.js`

- [ ] **Step 1: Add `renderProgress` inside the IIFE (before `init`)**

Append before `init`:

```js
    function renderProgress(queue) {
        const existing = document.getElementById('giu-batch-progress');
        if (existing) existing.remove();

        const total = queue.groups.length;
        const done  = queue.currentIndex;
        const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
        const label = queue.groups[queue.currentIndex]?.label ?? '—';

        const div = document.createElement('div');
        div.id = 'giu-batch-progress';
        div.className = 'alert alert-info';
        div.style.cssText = 'margin: 10px 0;';
        div.innerHTML = `
            <strong>Batch running…</strong> Group ${done + 1} of ${total}: ${label}<br>
            <div style="background:#dee2e6;border-radius:4px;height:8px;margin-top:6px;">
                <div style="background:#0d6efd;width:${pct}%;height:8px;border-radius:4px;transition:width 0.3s;"></div>
            </div>`;

        const anchor = document.querySelector(SEL.season)?.closest('section')
            ?? document.querySelector(SEL.saveBtn)
            ?? document.querySelector('form');
        anchor?.insertAdjacentElement('beforebegin', div);
    }
```

- [ ] **Step 2: Add `advanceQueue` helper inside the IIFE (before `init`)**

Append before `init`:

```js
    function advanceQueue(queue) {
        queue.currentIndex++;
        if (queue.currentIndex >= queue.groups.length) {
            queue.step = 'done';
            saveQueue(queue);
            runQueue();
            return;
        }
        queue.step = 'select-group';
        saveQueue(queue);
        location.reload();
    }
```

- [ ] **Step 3: Add `stepSelectGroup` inside the IIFE (before `init`)**

Append before `init`:

```js
    function stepSelectGroup(queue) {
        const groupEl = document.querySelector(SEL.group);
        const target  = queue.groups[queue.currentIndex];

        if (!groupEl) {
            clearQueue();
            const div = document.createElement('div');
            div.className = 'alert alert-danger';
            div.textContent = 'Batch aborted: Group dropdown not found. Session may have expired.';
            document.querySelector('form')?.prepend(div);
            return;
        }

        const option = Array.from(groupEl.options).find(o => o.value === target.value);
        if (!option) {
            queue.results.push({ label: target.label, status: 'skipped', reason: 'group not in dropdown' });
            advanceQueue(queue);
            return;
        }

        queue.step = 'select-eval';
        saveQueue(queue);
        groupEl.value = target.value;
        triggerPostBack('ctl00$MainContent$grpLst');
    }
```

- [ ] **Step 4: Add `stepSelectEval` inside the IIFE (before `init`)**

Append before `init`:

```js
    function stepSelectEval(queue) {
        const evalEl = document.querySelector(SEL.eval);
        const target = queue.groups[queue.currentIndex];

        if (!evalEl) {
            queue.results.push({ label: target.label, status: 'failed', reason: 'eval dropdown not found' });
            advanceQueue(queue);
            return;
        }

        const option = Array.from(evalEl.options).find(o => o.value === queue.savedEvalId);
        if (!option) {
            queue.results.push({ label: target.label, status: 'failed', reason: 'eval method not in dropdown after group select' });
            advanceQueue(queue);
            return;
        }

        queue.step = 'collect';
        saveQueue(queue);
        evalEl.value = queue.savedEvalId;
        triggerPostBack('ctl00$MainContent$evalMethIdLst');
    }
```

- [ ] **Step 5: Add `stepCollect` inside the IIFE (before `init`)**

Append before `init`:

```js
    function stepCollect(queue) {
        const rows   = getGradeRows();
        const target = queue.groups[queue.currentIndex];

        if (rows.length === 0) {
            queue.results.push({ label: target.label, status: 'failed', reason: 'no student rows after eval select' });
            advanceQueue(queue);
            return;
        }

        // Fill grades from csvMap if provided
        if (Object.keys(queue.csvMap).length > 0) {
            fillGradesFromMap(queue.csvMap, null);
        }

        // Record stats from inputs (after fill)
        const values = rows
            .map(r => r.querySelector(SEL.gradeIn)?.value?.trim())
            .filter(v => v && !isNaN(v));
        const stats = computeStats(values);
        queue.results.push({ label: target.label, status: 'done', ...stats });

        // Download CSV for this group
        downloadCSV(rows, target.label, queue.savedEvalLabel);

        // Advance index and write step to localStorage BEFORE any navigation.
        // Do NOT use advanceQueue() here — that would call location.reload() and then
        // saveBtn.click() would cause a second navigation.
        queue.currentIndex++;
        queue.step = queue.currentIndex < queue.groups.length ? 'select-group' : 'done';
        saveQueue(queue);

        if (Object.keys(queue.csvMap).length > 0) {
            // Save triggers the postback/reload that drives the next step
            document.querySelector(SEL.saveBtn)?.click();
        } else if (queue.step !== 'done') {
            location.reload();
        } else {
            // Last group, download-only — no reload needed
            runQueue();
        }
    }
```

- [ ] **Step 6: Add `runQueue` dispatcher inside the IIFE (before `init`)**

Append before `init`:

```js
    function runQueue() {
        const queue = loadQueue();
        if (!queue) return false;

        if (queue.step === 'done') {
            renderSummary(queue);
            clearQueue();
            return true;
        }

        renderProgress(queue);

        switch (queue.step) {
            case 'select-group': stepSelectGroup(queue); break;
            case 'select-eval':  stepSelectEval(queue);  break;
            case 'collect':      stepCollect(queue);     break;
            default:
                clearQueue();
        }
        return true;
    }
```

- [ ] **Step 7: Update `init` to check runner mode first**

Replace the existing `init` function with:

```js
    function init() {
        // Runner mode takes priority over UI mode
        if (runQueue()) return;

        // UI mode: only inject toolbar when student rows are visible
        const saveBtn = document.querySelector(SEL.saveBtn);
        if (!saveBtn) return;
        if (document.querySelector(SEL.rows)) {
            injectToolbar(saveBtn);
        }
    }
```

- [ ] **Step 8: Manual verify — batch download-only**

1. Select all 4 dropdowns so student rows load.
2. Click "▶ Batch All Groups" (no CSV uploaded — `csvMap` will be `{}`).
3. Confirm page reloads and progress bar appears ("Group 1 of N").
4. Confirm each group's state machine runs: select-group → select-eval → collect.
5. Confirm one CSV file downloads per group, named `{group}-{eval}.csv`.
6. After last group: confirm `localStorage.getItem('giuManageGradesQueueV1')` is `null`.

- [ ] **Step 9: Commit**

```bash
git add scripts/manageUploadedGrades.js
git commit -m "feat: add batch runner state machine to manage uploaded grades"
```

---

### Task 6: Completion summary

**Files:**
- Modify: `scripts/manageUploadedGrades.js`

- [ ] **Step 1: Add `renderSummary` inside the IIFE (before `runQueue`)**

Append before `runQueue`:

```js
    function renderSummary(queue) {
        const progress = document.getElementById('giu-batch-progress');
        if (progress) progress.remove();

        const done    = queue.results.filter(r => r.status === 'done');
        const skipped = queue.results.filter(r => r.status !== 'done');

        let html = `<strong>Batch Complete</strong> — ${done.length} group(s) processed`;
        if (skipped.length) html += `, ${skipped.length} skipped/failed`;

        html += `
        <table class="table table-bordered table-sm" style="margin-top:10px;">
            <thead>
                <tr><th>Group</th><th>Avg</th><th>Min</th><th>Max</th><th>Range</th><th>Students</th></tr>
            </thead>
            <tbody>`;

        for (const r of done) {
            html += `<tr>
                <td>${r.label}</td>
                <td>${r.avg}</td><td>${r.min}</td><td>${r.max}</td>
                <td>${r.range}</td><td>${r.count}</td>
            </tr>`;
        }
        for (const r of skipped) {
            html += `<tr class="table-warning">
                <td>${r.label}</td>
                <td colspan="5">${r.status}${r.reason ? ': ' + r.reason : ''}</td>
            </tr>`;
        }

        html += '</tbody></table>';

        const wrapper = document.createElement('div');
        wrapper.className = 'alert alert-success';
        wrapper.style.cssText = 'margin: 10px 0;';
        wrapper.innerHTML = html;

        const anchor = document.querySelector(SEL.season)?.closest('section')
            ?? document.querySelector('form');
        anchor?.insertAdjacentElement('beforebegin', wrapper);
    }
```

- [ ] **Step 2: Manual verify — summary renders correctly**

After a full batch run (download-only, all groups):
1. Confirm green summary box appears.
2. Confirm table has one row per group with correct Avg/Min/Max/Range/Students.
3. If any group was skipped, confirm yellow row appears with reason.
4. Confirm `localStorage.getItem('giuManageGradesQueueV1')` returns `null`.

- [ ] **Step 3: Commit**

```bash
git add scripts/manageUploadedGrades.js
git commit -m "feat: add batch completion summary to manage uploaded grades"
```

---

### Task 7: End-to-end batch upload verification

**Files:**
- No code changes.

- [ ] **Step 1: Full batch upload test**

Run this complete scenario:

1. Open `ManageUploadedGrades_m.aspx`. Select Season → Course → any Group → Eval Method.
2. Click "▶ Batch All Groups" (no CSV) — let it complete. You now have one CSV per group.
3. Combine all downloaded CSVs into one file: open each in a text editor, paste all rows (skip duplicate headers). Save as `combined.csv`.
4. Edit 2–3 grade values per group in `combined.csv`. Save.
5. Open the page again. Select Season → Course → same Group → same Eval Method.
6. Click "📄 Upload Grades CSV", select `combined.csv`. Confirm grades fill for the current group.
7. Click "▶ Batch All Groups" — confirm batch runs through all groups, filling grades and saving each.
8. After batch completes, manually open each group in the portal and confirm modified grades persisted.
9. Confirm summary table shows updated stats reflecting the new grades.

- [ ] **Step 2: Final commit**

```bash
git add scripts/manageUploadedGrades.js
git commit -m "feat: complete manageUploadedGrades userscript v1.0 — CSV upload/download, stats, batch"
```
