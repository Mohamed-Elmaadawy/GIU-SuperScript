# Batch Grades Upgrade — uploadGradesGIU_sherif.js Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `uploadGradesGIU_sherif.js` to add batch download (collect all groups → one CSV) and batch upload (fill+save all groups from CSV) using a background fetch chain — no page reloads.

**Architecture:** Three chained POSTs per group (select group → select eval → extract/save rows), each using hidden-field extraction to carry the ViewState chain correctly. State is kept in memory (no localStorage). A unified toolbar replaces the three dead functions in the current script.

**Tech Stack:** Tampermonkey userscript, Vanilla JS ES2020+, Fetch API, DOMParser, FileReader, FormData

---

## File Structure

| Action  | Path                                        | Responsibility                                   |
|---------|---------------------------------------------|--------------------------------------------------|
| Rewrite | `scripts/uploadGradesGIU_sherif.js`         | Complete script — all logic lives here           |

No new files. The entire rewrite is a single-file replacement.

---

## Task 1: Scaffold + constants

**Files:**
- Rewrite: `scripts/uploadGradesGIU_sherif.js`

- [ ] **Step 1: Replace entire file with the scaffold**

```js
// ==UserScript==
// @name        GIU upload grades script
// @description Upload/download grades per group + batch all groups via fetch chain.
// @include     https://portal.giu-uni.de/*
// @namespace   ramin0
// @version     2.0
// @icon        https://i.ibb.co/Q7mgLHsW/GIU-images.png
// @run-at      document-idle
// ==/UserScript==

(function () {
    'use strict';

    const SEL = {
        group:   '#MainContent_grpLst',
        eval:    '#MainContent_evalMethIdLst',
        evalId:  'input[id^="MainContent_rptrNtt_evalMethId_"]',
        crntLbl: '#MainContent_crntLbl',
        saveBtn: '#MainContent_saveBtn',
        rows:    '#data tbody tr',
    };

    const BTN_BASE = 'padding:8px 14px;background:#0d6efd;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-right:8px;';
    const BTN_OFF  = BTN_BASE + 'opacity:0.5;cursor:not-allowed;';

})();
```

- [ ] **Step 2: Verify file saved — open browser console on the GIU page and confirm no errors on load**

- [ ] **Step 3: Commit**

```bash
git add scripts/uploadGradesGIU_sherif.js
git commit -m "refactor: scaffold sherif script — IIFE wrapper, SEL constants, remove dead code"
```

---

## Task 2: DOM + fetch helpers

**Files:**
- Modify: `scripts/uploadGradesGIU_sherif.js` — add helpers inside the IIFE, before the closing `})();`

- [ ] **Step 1: Add DOM helpers**

Paste inside the IIFE after the constants:

```js
    // ── DOM helpers ──────────────────────────────────────────────────────────

    function makeBtn(text, disabled = false) {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = text;
        b.style.cssText = disabled ? BTN_OFF : BTN_BASE;
        b.disabled = disabled;
        return b;
    }

    function showError(container, msg) {
        const d = document.createElement('div');
        d.style.cssText = 'margin:6px 0;padding:8px 12px;background:#f8d7da;border:1px solid #f5c2c7;border-radius:4px;color:#842029;';
        d.textContent = '⚠ ' + msg;
        container.insertAdjacentElement('afterbegin', d);
    }

    function showInfo(container, msg) {
        let el = container.querySelector('.giu-progress');
        if (!el) {
            el = document.createElement('div');
            el.className = 'giu-progress';
            el.style.cssText = 'margin:6px 0;padding:8px 12px;background:#cff4fc;border:1px solid #b6effb;border-radius:4px;color:#055160;';
            container.appendChild(el);
        }
        el.textContent = msg;
    }

    function clearProgress(container) {
        container.querySelector('.giu-progress')?.remove();
    }
```

- [ ] **Step 2: Add row helpers**

```js
    // ── Row helpers ──────────────────────────────────────────────────────────

    function getRows(doc = document) {
        return Array.from(doc.querySelectorAll(SEL.rows)).slice(1);
    }

    function extractId(nameText) {
        const m = (nameText ?? '').trim().match(/^\((\d+)\)/);
        return m ? m[1] : null;
    }

    function downloadCSV(lines, filename) {
        const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url;
        a.download = filename.replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_');
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
```

- [ ] **Step 3: Add fetch helpers**

```js
    // ── Fetch helpers ────────────────────────────────────────────────────────

    function extractHiddenFields(doc) {
        const fields = {};
        doc.querySelectorAll('input[type="hidden"]').forEach(inp => {
            if (inp.name) fields[inp.name] = inp.value;
        });
        return fields;
    }

    async function doPostBack(baseFields, eventTarget, overrides = {}) {
        const data = new FormData();
        for (const [k, v] of Object.entries(baseFields)) data.set(k, v);
        data.set('__EVENTTARGET',   eventTarget);
        data.set('__EVENTARGUMENT', '');
        for (const [k, v] of Object.entries(overrides)) data.set(k, v);
        const resp = await fetch(location.href, { method: 'POST', body: data });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        return new DOMParser().parseFromString(await resp.text(), 'text/html');
    }
```

- [ ] **Step 4: Add group/eval helpers**

```js
    // ── Group/Eval helpers ───────────────────────────────────────────────────

    function getGroupOptions() {
        const el = document.querySelector(SEL.group);
        if (!el) return null;
        return Array.from(el.options)
            .filter(o => o.value && o.value !== '')
            .map(o => ({ value: o.value, label: o.text.trim() }));
    }

    function resolveEvalId() {
        const evalEl = document.querySelector(SEL.eval);
        if (evalEl?.value) return evalEl.value;
        const hidden = document.querySelector(SEL.evalId);
        return hidden?.value ?? null;
    }

    function getEvalLabel() {
        const crnt = document.querySelector(SEL.crntLbl)?.textContent ?? '';
        return crnt.split(' - ').pop()?.split('||')[0]?.trim() ?? 'eval';
    }
```

- [ ] **Step 5: Verify in browser console — paste these checks on the GIU page:**

```js
// Should log student ID string or null
console.assert(extractId('(12345678) Ahmed Mohamed') === '12345678', 'extractId ok');
console.assert(extractId('No ID here') === null, 'extractId null ok');
console.assert(extractId(null) === null, 'extractId null-safe ok');

// Should return array of {value, label} or null
console.log('Groups:', getGroupOptions());
console.log('EvalId:', resolveEvalId());
console.log('EvalLabel:', getEvalLabel());
```

- [ ] **Step 6: Commit**

```bash
git add scripts/uploadGradesGIU_sherif.js
git commit -m "feat: add DOM, fetch, and group helpers to sherif script"
```

---

## Task 3: CSV helpers

**Files:**
- Modify: `scripts/uploadGradesGIU_sherif.js` — add inside IIFE after group/eval helpers

- [ ] **Step 1: Add `rowsToCsvLines` and `parseCSV`**

```js
    // ── CSV helpers ──────────────────────────────────────────────────────────

    function rowsToCsvLines(rows, groupLabel) {
        return rows.map(row => {
            const name  = row.cells[0]?.querySelector('span')?.textContent?.trim() ?? '';
            const grade = row.cells[2]?.querySelector('input')?.value ?? '';
            return `"${name.replace(/"/g, '""')}",${groupLabel},${grade}`;
        });
    }

    function parseCSV(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => {
                const map = {};
                e.target.result.trim().split(/\r?\n/).forEach((line, i) => {
                    if (i === 0 || !line.trim()) return;
                    const cols  = line.split(',').map(v => v.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));
                    const id    = extractId(cols[0]);
                    const grade = cols[cols.length - 1];
                    if (id && grade !== '' && Number.isFinite(+grade)) map[id] = grade;
                });
                resolve(map);
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }
```

- [ ] **Step 2: Verify in browser console — create a mock CSV Blob and test parseCSV:**

```js
// Paste in browser console on GIU page
const csv = `Name,Group,Grade\n"(12345678) Ahmed Mohamed",G01,85\n"(87654321) Sara Ali",G01,90\n"(11111111) Bad Row",G01,`;
const blob = new Blob([csv], { type: 'text/csv' });
const file = new File([blob], 'test.csv');
parseCSV(file).then(map => {
    console.assert(map['12345678'] === '85', 'grade 85 parsed');
    console.assert(map['87654321'] === '90', 'grade 90 parsed');
    console.assert(!('11111111' in map), 'empty grade excluded');
    console.log('parseCSV OK:', map);
});
```

- [ ] **Step 3: Commit**

```bash
git add scripts/uploadGradesGIU_sherif.js
git commit -m "feat: add CSV helpers (rowsToCsvLines, parseCSV) to sherif script"
```

---

## Task 4: Batch download

**Files:**
- Modify: `scripts/uploadGradesGIU_sherif.js` — add inside IIFE after CSV helpers

- [ ] **Step 1: Add `batchDownload`**

```js
    // ── Batch download ───────────────────────────────────────────────────────

    async function batchDownload(groups, evalId, evalLabel, toolbar) {
        const allLines = ['Name,Group,Grade'];
        let errors = 0;

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            showInfo(toolbar, `Downloading group ${i + 1} of ${groups.length}: ${group.label}…`);

            try {
                const liveHidden = extractHiddenFields(document);
                const doc1 = await doPostBack(liveHidden, 'ctl00$MainContent$grpLst', {
                    'ctl00$MainContent$grpLst': group.value,
                });

                const doc1Hidden = extractHiddenFields(doc1);
                const doc2 = await doPostBack(doc1Hidden, 'ctl00$MainContent$evalMethIdLst', {
                    'ctl00$MainContent$grpLst':        group.value,
                    'ctl00$MainContent$evalMethIdLst': evalId,
                });

                const rows = getRows(doc2);
                if (!rows.length) throw new Error('no student rows found');
                rowsToCsvLines(rows, group.label).forEach(l => allLines.push(l));

            } catch (err) {
                errors++;
                showError(toolbar, `Group "${group.label}": ${err.message}`);
            }
        }

        clearProgress(toolbar);

        if (allLines.length > 1) {
            downloadCSV(allLines, `All-Groups-${evalLabel}.csv`);
            showInfo(toolbar, `Done — ${groups.length - errors} group(s) collected${errors ? `, ${errors} failed` : ''}.`);
        } else {
            showError(toolbar, 'No rows collected. All groups failed — check errors above.');
        }
    }
```

- [ ] **Step 2: Commit**

```bash
git add scripts/uploadGradesGIU_sherif.js
git commit -m "feat: add batchDownload to sherif script"
```

---

## Task 5: Batch upload

**Files:**
- Modify: `scripts/uploadGradesGIU_sherif.js` — add inside IIFE after batchDownload

- [ ] **Step 1: Add `batchUpload`**

```js
    // ── Batch upload ─────────────────────────────────────────────────────────

    async function batchUpload(groups, evalId, csvMap, toolbar) {
        let saved  = 0;
        let errors = 0;

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            showInfo(toolbar, `Uploading group ${i + 1} of ${groups.length}: ${group.label}…`);

            try {
                const liveHidden = extractHiddenFields(document);
                const doc1 = await doPostBack(liveHidden, 'ctl00$MainContent$grpLst', {
                    'ctl00$MainContent$grpLst': group.value,
                });

                const doc1Hidden = extractHiddenFields(doc1);
                const doc2 = await doPostBack(doc1Hidden, 'ctl00$MainContent$evalMethIdLst', {
                    'ctl00$MainContent$grpLst':        group.value,
                    'ctl00$MainContent$evalMethIdLst': evalId,
                });

                const rows = getRows(doc2);
                if (!rows.length) throw new Error('no student rows found');

                const saveBtnEl = doc2.querySelector(SEL.saveBtn);
                if (!saveBtnEl) throw new Error('save button not found in fetched page');

                const doc2Hidden     = extractHiddenFields(doc2);
                const gradeOverrides = {};
                rows.forEach(row => {
                    const nameEl  = row.cells[0]?.querySelector('span');
                    const gradeEl = row.cells[2]?.querySelector('input');
                    if (!gradeEl?.name) return;
                    const id = extractId(nameEl?.textContent ?? '');
                    gradeOverrides[gradeEl.name] = (id && csvMap[id] !== undefined)
                        ? csvMap[id]
                        : gradeEl.value;
                });

                await doPostBack(doc2Hidden, '', {
                    'ctl00$MainContent$grpLst':        group.value,
                    'ctl00$MainContent$evalMethIdLst': evalId,
                    [saveBtnEl.name]: saveBtnEl.value,
                    ...gradeOverrides,
                });

                saved++;
            } catch (err) {
                errors++;
                showError(toolbar, `Group "${group.label}": ${err.message}`);
            }
        }

        clearProgress(toolbar);
        showInfo(toolbar, `Done — ${saved} group(s) saved${errors ? `, ${errors} failed` : ''}.`);
    }
```

- [ ] **Step 2: Commit**

```bash
git add scripts/uploadGradesGIU_sherif.js
git commit -m "feat: add batchUpload to sherif script"
```

---

## Task 6: Toolbar + entry point

**Files:**
- Modify: `scripts/uploadGradesGIU_sherif.js` — add `injectToolbar` and `init` at end of IIFE

- [ ] **Step 1: Add `injectToolbar`**

```js
    // ── Toolbar ──────────────────────────────────────────────────────────────

    function injectToolbar(table) {
        if (document.getElementById('giu-toolbar')) return;

        const toolbar = document.createElement('div');
        toolbar.id = 'giu-toolbar';
        toolbar.style.cssText = 'margin-top:15px;padding:10px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:4px;';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.style.display = 'none';

        const uploadBtn   = makeBtn('📄 Upload CSV');
        const downloadBtn = makeBtn('📥 Download CSV');
        const batchDlBtn  = makeBtn('▶ Batch Download');
        const batchUpBtn  = makeBtn('▶ Batch Upload', true);

        let csvMap = null;

        uploadBtn.onclick = () => fileInput.click();

        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            if (!file) return;
            csvMap = await parseCSV(file);
            getRows().forEach(row => {
                const id      = extractId(row.cells[0]?.querySelector('span')?.textContent ?? '');
                const gradeEl = row.cells[2]?.querySelector('input');
                if (id && gradeEl && id in csvMap) gradeEl.value = csvMap[id];
            });
            batchUpBtn.disabled = false;
            batchUpBtn.style.cssText = BTN_BASE;
        };

        downloadBtn.onclick = () => {
            const groupEl   = document.querySelector(SEL.group);
            const gLabel    = groupEl?.options[groupEl.selectedIndex]?.text?.trim() ?? 'group';
            downloadCSV(
                ['Name,Group,Grade', ...rowsToCsvLines(getRows(), gLabel)],
                `${gLabel}-${getEvalLabel()}.csv`
            );
        };

        batchDlBtn.onclick = async () => {
            const groups = getGroupOptions();
            if (!groups?.length) { showError(toolbar, 'Group dropdown not found or empty.'); return; }
            const evalId = resolveEvalId();
            if (!evalId) { showError(toolbar, 'Could not determine Evaluation Method. Select an eval first.'); return; }
            batchDlBtn.disabled = true;
            await batchDownload(groups, evalId, getEvalLabel(), toolbar);
            batchDlBtn.disabled = false;
        };

        batchUpBtn.onclick = async () => {
            if (!csvMap) return;
            const groups = getGroupOptions();
            if (!groups?.length) { showError(toolbar, 'Group dropdown not found or empty.'); return; }
            const evalId = resolveEvalId();
            if (!evalId) { showError(toolbar, 'Could not determine Evaluation Method. Select an eval first.'); return; }
            batchUpBtn.disabled = true;
            await batchUpload(groups, evalId, csvMap, toolbar);
            batchUpBtn.disabled = false;
        };

        const btnRow = document.createElement('div');
        btnRow.style.cssText = 'display:flex;align-items:center;flex-wrap:wrap;gap:8px;';
        btnRow.append(uploadBtn, fileInput, downloadBtn, batchDlBtn, batchUpBtn);
        toolbar.appendChild(btnRow);

        table.insertAdjacentElement('afterend', toolbar);
    }
```

- [ ] **Step 2: Add entry point**

```js
    // ── Entry point ──────────────────────────────────────────────────────────

    function init() {
        if (location.pathname !== '/GIUb/EXT/ManageUploadedGrades_m.aspx') return;
        const table = document.getElementById('data');
        if (table?.tagName === 'TABLE') injectToolbar(table);
    }

    init();
```

- [ ] **Step 3: Verify toolbar renders — navigate to the GIU grade page and confirm:**

```
✓ Four buttons appear after the #data table
✓ "▶ Batch Upload" is grayed out initially
✓ Upload CSV → picks file, fills current page grades, enables Batch Upload
✓ Download CSV → downloads single-group CSV with Name/Group/Grade columns
✓ Browser console shows no errors
```

- [ ] **Step 4: Test batch download — select a course/eval, click "▶ Batch Download":**

```
✓ Progress banner appears: "Downloading group 1 of N: [label]…"
✓ Banner updates for each group
✓ "All-Groups-[evalLabel].csv" downloads when complete
✓ CSV has Name, Group, Grade columns with all groups' students
✓ Any failed group shows a red error banner with specific reason
```

- [ ] **Step 5: Test batch upload — fill grades in downloaded CSV, load it, click "▶ Batch Upload":**

```
✓ Progress banner appears: "Uploading group 1 of N: [label]…"
✓ Banner updates for each group
✓ Summary shows N group(s) saved
✓ Reload the page and spot-check a group — grades should be saved
✓ Any failed group shows red error banner
```

- [ ] **Step 6: Final commit**

```bash
git add scripts/uploadGradesGIU_sherif.js
git commit -m "feat: add toolbar, injectToolbar, and init — batch grades upgrade complete"
```

---

## Troubleshooting guide

**"no student rows found" on a group** — The eval dropdown value changed after postback. Check `resolveEvalId()` returns the right value before starting a batch.

**HTTP 500 on save POST** — The save button's `name` attribute may differ. Open DevTools → Network → find a manual save request → check which field represents the button. Update `saveBtnEl.name` expectation if needed.

**HTTP 500 on group/eval select** — ViewState mismatch. The server may be enforcing `__EVENTVALIDATION`. If so, the fetch chain approach will fail and a localStorage+postback fallback (like `manageUploadedGrades.js`) will be needed.

**"Group dropdown not found"** — Session expired. Reload the page and log in again.
