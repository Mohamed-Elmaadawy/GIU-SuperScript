# Upload Validation, Grade Stats & Notification Auto-retry — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add pre-upload CSV validation (blocking), pass-rate grade statistics, and a retry-failed button to the GIU portal userscripts.

**Architecture:** Three independent additions — (1+2) pure-function enhancements to `GIU Upload Grades.js`'s stats and validation pipeline, (3) CSV preview UI wired into the existing batch toolbar, (4) retry payload passed through the notification script's existing localStorage state-machine. No new files. No new dependencies.

**Tech Stack:** Vanilla JS, Tampermonkey userscripts, browser console for pure-function verification, manual portal page testing for UI.

---

## File Map

| File | What changes |
|------|-------------|
| `scripts/GIU Upload Grades.js` | Add `getMaxGrade()`, update `computeStats` signature + `passRate`, update `renderGroupStats` + `renderBatchStats`, add `validateCsvMap()`, gate `batchUpload`, add CSV preview in `fileInput.onchange`, update per-group `computeStats` call |
| `scripts/GIU Notification Batch Send.js` | Compute `failedGroups` before `clearQueue()` in `advanceOrDone`, pass `retryPayload` to `renderSummary`, add retry button in `renderSummary` |

---

## Task 1: `getMaxGrade` helper + `computeStats` with pass rate

**Files:**
- Modify: `scripts/GIU Upload Grades.js:303` (insert `getMaxGrade` above `computeStats`)
- Modify: `scripts/GIU Upload Grades.js:305-318` (`computeStats`)

- [ ] **Step 1: Add `getMaxGrade` above `computeStats`**

Insert this function above the `// ── Stats helpers ──` comment (currently line 303):

```javascript
function getMaxGrade(evalPicker) {
    const text = evalPicker?.options[evalPicker.selectedIndex]?.text ?? '';
    const after = text.split('||')[1];
    return after != null && after !== '' ? parseFloat(after) : null;
}
```

- [ ] **Step 2: Update `computeStats` signature and add `passRate`**

Replace the existing `computeStats` function (lines 305–318):

```javascript
function computeStats(values, maxGrade = null) {
    const nums = values.filter(v => v !== '' && Number.isFinite(+v)).map(Number);
    if (!nums.length) return null;
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
    const passThreshold = maxGrade != null ? maxGrade * 0.5 : null;
    const passRate = passThreshold != null
        ? ((nums.filter(n => n >= passThreshold).length / nums.length) * 100).toFixed(0) + '%'
        : null;
    return {
        min:      min.toFixed(1),
        max:      max.toFixed(1),
        avg:      avg.toFixed(1),
        range:    (max - min).toFixed(1),
        count:    nums.length,
        passRate,
    };
}
```

- [ ] **Step 3: Verify in browser console**

Open any page, paste and run:
```javascript
function computeStats(values, maxGrade = null) {
    const nums = values.filter(v => v !== '' && Number.isFinite(+v)).map(Number);
    if (!nums.length) return null;
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
    const passThreshold = maxGrade != null ? maxGrade * 0.5 : null;
    const passRate = passThreshold != null
        ? ((nums.filter(n => n >= passThreshold).length / nums.length) * 100).toFixed(0) + '%'
        : null;
    return { min: min.toFixed(1), max: max.toFixed(1), avg: avg.toFixed(1),
             range: (max - min).toFixed(1), count: nums.length, passRate };
}

// Test 1: with maxGrade — 2 of 4 pass ≥ 12.5 (50% of 25)
const r1 = computeStats(['10', '15', '20', '5'], 25);
console.assert(r1.passRate === '50%', 'passRate wrong: ' + r1.passRate);
console.assert(r1.min === '5.0', 'min wrong');
console.assert(r1.avg === '12.5', 'avg wrong');

// Test 2: no maxGrade — passRate null
const r2 = computeStats(['10', '20'], null);
console.assert(r2.passRate === null, 'passRate should be null');

// Test 3: empty / non-numeric
const r3 = computeStats(['', 'abc', '10']);
console.assert(r3.count === 1, 'count wrong');

console.log('All assertions passed', r1, r2, r3);
```

Expected output: `All assertions passed` with no assertion errors.

- [ ] **Step 4: Commit**

```bash
git add scripts/GIU\ Upload\ Grades.js
git commit -m "feat: add getMaxGrade helper and passRate to computeStats"
```

---

## Task 2: Update stat renderers to show pass rate

**Files:**
- Modify: `scripts/GIU Upload Grades.js:320-335` (`renderGroupStats`)
- Modify: `scripts/GIU Upload Grades.js:337-361` (`renderBatchStats`)

- [ ] **Step 1: Update `renderGroupStats` to show Pass tile**

Replace the existing `renderGroupStats` function (lines 320–335):

```javascript
function renderGroupStats(card, stats) {
    card.querySelector('.giug-stats-section')?.remove();
    if (!stats || stats.count < 2) return;
    const section = document.createElement('div');
    section.className = 'giug-stats-section';
    section.innerHTML = `
        <div class="giug-stats-label">Grade Statistics — ${stats.count} students</div>
        <div class="giug-stats-grid">
            <div class="giug-stat"><span class="giug-stat-key">Min</span><span class="giug-stat-val">${stats.min}</span></div>
            <div class="giug-stat"><span class="giug-stat-key">Max</span><span class="giug-stat-val">${stats.max}</span></div>
            <div class="giug-stat"><span class="giug-stat-key">Avg</span><span class="giug-stat-val">${stats.avg}</span></div>
            <div class="giug-stat"><span class="giug-stat-key">Range</span><span class="giug-stat-val">${stats.range}</span></div>
            ${stats.passRate != null ? `<div class="giug-stat"><span class="giug-stat-key">Pass</span><span class="giug-stat-val">${stats.passRate}</span></div>` : ''}
        </div>
    `;
    card.querySelector('.giug-card-body').appendChild(section);
}
```

- [ ] **Step 2: Update `renderBatchStats` to show Pass column**

Replace the existing `renderBatchStats` function (lines 337–361):

```javascript
function renderBatchStats(card, groupStats) {
    card.querySelector('.giug-stats-section')?.remove();
    const withStats = groupStats.filter(g => g.stats);
    if (!withStats.length) return;
    const hasPass = withStats.some(g => g.stats.passRate != null);
    const rows = withStats.map(g => `
        <tr>
            <td>${g.label}</td>
            <td class="giug-stat-num">${g.stats.min}</td>
            <td class="giug-stat-num">${g.stats.max}</td>
            <td class="giug-stat-num">${g.stats.avg}</td>
            <td class="giug-stat-num">${g.stats.range}</td>
            ${hasPass ? `<td class="giug-stat-num">${g.stats.passRate ?? '—'}</td>` : ''}
            <td style="color:#9e9e9e;font-size:11px;">${g.stats.count}</td>
        </tr>
    `).join('');
    const section = document.createElement('div');
    section.className = 'giug-stats-section';
    section.innerHTML = `
        <div class="giug-stats-label">Per-Group Statistics</div>
        <table class="giug-stats-table">
            <thead><tr>
                <th>Group</th><th>Min</th><th>Max</th><th>Avg</th><th>Range</th>
                ${hasPass ? '<th>Pass</th>' : ''}
                <th>n</th>
            </tr></thead>
            <tbody>${rows}</tbody>
        </table>
    `;
    card.querySelector('.giug-card-body').appendChild(section);
}
```

- [ ] **Step 3: Commit**

```bash
git add scripts/GIU\ Upload\ Grades.js
git commit -m "feat: show pass rate in grade stat tiles and batch stats table"
```

---

## Task 3: CSV validation gate in `batchUpload`

**Files:**
- Modify: `scripts/GIU Upload Grades.js:516` (insert `validateCsvMap` above `batchUpload`)
- Modify: `scripts/GIU Upload Grades.js:518-577` (`batchUpload` — add validation call)

- [ ] **Step 1: Add `validateCsvMap` above `batchUpload`**

Insert this function directly above `// ── Batch upload (State A) ──`:

```javascript
function validateCsvMap(csvMap, maxGrade) {
    const errors = [];
    for (const [id, raw] of Object.entries(csvMap)) {
        const v = +raw;
        if (!Number.isFinite(v))  { errors.push(`Student ${id}: invalid value "${raw}"`); continue; }
        if (v < 0)                { errors.push(`Student ${id}: negative grade ${raw}`); continue; }
        if (maxGrade != null && v > maxGrade) errors.push(`Student ${id}: ${raw} exceeds max ${maxGrade}`);
    }
    return errors;
}
```

- [ ] **Step 2: Verify `validateCsvMap` in browser console**

Paste and run:
```javascript
function validateCsvMap(csvMap, maxGrade) {
    const errors = [];
    for (const [id, raw] of Object.entries(csvMap)) {
        const v = +raw;
        if (!Number.isFinite(v))  { errors.push(`Student ${id}: invalid value "${raw}"`); continue; }
        if (v < 0)                { errors.push(`Student ${id}: negative grade ${raw}`); continue; }
        if (maxGrade != null && v > maxGrade) errors.push(`Student ${id}: ${raw} exceeds max ${maxGrade}`);
    }
    return errors;
}

// Test 1: all valid
console.assert(validateCsvMap({'1': '20', '2': '15'}, 25).length === 0, 'should pass');

// Test 2: non-numeric
const e2 = validateCsvMap({'1': 'abc'}, 25);
console.assert(e2.length === 1 && e2[0].includes('invalid'), 'non-numeric: ' + e2);

// Test 3: negative
const e3 = validateCsvMap({'1': '-5'}, 25);
console.assert(e3.length === 1 && e3[0].includes('negative'), 'negative: ' + e3);

// Test 4: exceeds max
const e4 = validateCsvMap({'1': '30'}, 25);
console.assert(e4.length === 1 && e4[0].includes('exceeds'), 'exceeds: ' + e4);

// Test 5: no maxGrade — only numeric+negative checked
console.assert(validateCsvMap({'1': '999'}, null).length === 0, 'no max — should pass 999');

console.log('All validateCsvMap assertions passed');
```

Expected: `All validateCsvMap assertions passed`

- [ ] **Step 3: Add validation call at the top of `batchUpload`**

Find the start of `batchUpload` (line 518). After the `if (!groups.length)` guard, insert the validation block:

```javascript
async function batchUpload(evalId, csvMap, toolbar, evalPicker) {
    const { groups, hidden, season, course } = readPageState();

    if (!groups.length) { showError(toolbar, 'No groups found.'); return; }

    const maxGrade = getMaxGrade(evalPicker);
    const validationErrors = validateCsvMap(csvMap, maxGrade);
    if (validationErrors.length) {
        showError(toolbar, `${validationErrors.length} grade(s) failed validation: ${validationErrors.slice(0, 5).join('; ')}${validationErrors.length > 5 ? ` … and ${validationErrors.length - 5} more` : ''}`);
        return;
    }

    const groupStats = [];
    // ... rest of function unchanged
```

Note: `batchUpload` now takes `evalPicker` as a 4th argument.

- [ ] **Step 4: Update the `batchUpload` call site**

In `injectBatchToolbar`, find (line ~651):

```javascript
        batchUpBtn.onclick = async () => {
            if (!csvMap || !isValidId(getEvalId())) return;
            batchUpBtn.disabled = true;
            await batchUpload(getEvalId(), csvMap, card);
            batchUpBtn.disabled = false;
        };
```

Replace with:

```javascript
        batchUpBtn.onclick = async () => {
            if (!csvMap || !isValidId(getEvalId())) return;
            batchUpBtn.disabled = true;
            await batchUpload(getEvalId(), csvMap, card, evalPicker);
            batchUpBtn.disabled = false;
        };
```

- [ ] **Step 5: Update `computeStats` call inside `batchUpload`**

In `batchUpload`, find (line ~566):

```javascript
                groupStats.push({ label: group.label, stats: computeStats(Object.values(gradeOverrides)) });
```

Replace with:

```javascript
                groupStats.push({ label: group.label, stats: computeStats(Object.values(gradeOverrides), maxGrade) });
```

- [ ] **Step 6: Commit**

```bash
git add scripts/GIU\ Upload\ Grades.js
git commit -m "feat: block batch upload when CSV grades fail validation"
```

---

## Task 4: CSV preview stats after loading file

**Files:**
- Modify: `scripts/GIU Upload Grades.js:633-639` (`fileInput.onchange` in batch toolbar)
- Modify: `scripts/GIU Upload Grades.js:692-715` (per-group toolbar `computeStats` call)

- [ ] **Step 1: Update `fileInput.onchange` to show preview stats**

Find the existing `fileInput.onchange` handler in `injectBatchToolbar` (lines 633–639):

```javascript
        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            if (!file) return;
            csvMap = await parseCSV(file);
            showInfo(card, `CSV loaded — ${Object.keys(csvMap).length} student grade(s) ready.`);
            batchUpBtn.disabled = !isValidId(evalPicker.value);
        };
```

Replace with:

```javascript
        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            if (!file) return;
            csvMap = await parseCSV(file);
            showInfo(card, `CSV loaded — ${Object.keys(csvMap).length} student grade(s) ready.`);
            batchUpBtn.disabled = !isValidId(evalPicker.value);
            const maxGrade = getMaxGrade(evalPicker);
            const previewStats = computeStats(Object.values(csvMap), maxGrade);
            renderGroupStats(card, previewStats);
        };
```

- [ ] **Step 2: Update per-group `computeStats` call to pass max grade**

In `injectPerGroupToolbar`, find both `computeStats(grades)` calls (lines ~702 and ~714–715 area). Each looks like:

```javascript
            const grades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
            renderGroupStats(card, computeStats(grades));
```

Replace each with:

```javascript
            const grades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
            const crntText = document.querySelector(SEL.crntLbl)?.textContent ?? '';
            const maxGradePerGroup = parseFloat(crntText.split('||')[1]) || null;
            renderGroupStats(card, computeStats(grades, maxGradePerGroup));
```

There are two such calls — one in `uploadBtn`'s `fileInput.onchange` and one in `downloadBtn.onclick`. Update both.

Also update the `initialGrades` call at the bottom of `injectPerGroupToolbar` (line ~734):

```javascript
        const initialGrades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
        renderGroupStats(card, computeStats(initialGrades));
```

Replace with:

```javascript
        const initialGrades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
        const crntText = document.querySelector(SEL.crntLbl)?.textContent ?? '';
        const maxGradePerGroup = parseFloat(crntText.split('||')[1]) || null;
        renderGroupStats(card, computeStats(initialGrades, maxGradePerGroup));
```

- [ ] **Step 3: Manual verification on portal**

1. Go to `https://portal.giu-uni.de/GIUb/EXT/ManageUploadedGrades_m.aspx`
2. Select a season, course — the Batch Grades card appears
3. Select an eval method that has a max grade (check by inspecting the hidden `evalMethIdLst` option text for `||`)
4. Load a valid CSV → stat tiles should appear below "CSV loaded" message, including "Pass" tile if max grade was parsed
5. Load a CSV with a grade exceeding max → clicking Batch Upload should show red error and NOT proceed
6. Load a CSV with `abc` as a grade → same blocking error

- [ ] **Step 4: Commit**

```bash
git add scripts/GIU\ Upload\ Grades.js
git commit -m "feat: show CSV preview stats after load; pass rate in per-group stats"
```

---

## Task 5: Auto-retry failed notifications

**Files:**
- Modify: `scripts/GIU Notification Batch Send.js:465-487` (`advanceOrDone`)
- Modify: `scripts/GIU Notification Batch Send.js:779-827` (`renderSummary`)

- [ ] **Step 1: Compute `failedGroups` in `advanceOrDone` before clearing queue**

Find `advanceOrDone` (lines 465–487). Replace the completion branch:

```javascript
    function advanceOrDone(queue) {
        queue.currentIndex++;
        if (queue.currentIndex >= queue.groups.length) {
            clearQueue();
            const progress = getEl('giu-batch-progress');
            if (progress) progress.remove();
            renderSummary(queue.results);
            injectPanel();
            return;
        }
```

Replace with:

```javascript
    function advanceOrDone(queue) {
        queue.currentIndex++;
        if (queue.currentIndex >= queue.groups.length) {
            const failedGroups = queue.groups.filter((_, i) => queue.results[i]?.status === 'failed');
            const retryPayload = failedGroups.length > 0
                ? { groups: failedGroups, sharedSubject: queue.sharedSubject, sharedBody: queue.sharedBody }
                : null;
            clearQueue();
            const progress = getEl('giu-batch-progress');
            if (progress) progress.remove();
            renderSummary(queue.results, retryPayload);
            injectPanel();
            return;
        }
```

- [ ] **Step 2: Update `renderSummary` signature and add retry button**

Find `renderSummary` (lines 779–827). Change its signature and add retry button after dismiss:

```javascript
    function renderSummary(results, retryPayload = null) {
```

After the dismiss button is wired (line ~823), insert retry button wiring. Find:

```javascript
        card.querySelector('#giu-dismiss-btn').addEventListener('click', () => card.remove());
```

Replace with:

```javascript
        card.querySelector('#giu-dismiss-btn').addEventListener('click', () => card.remove());

        if (retryPayload) {
            const retryBtn = card.querySelector('#giu-retry-btn');
            retryBtn?.addEventListener('click', () => {
                saveQueue({
                    step:         'select',
                    currentIndex: 0,
                    sharedSubject: retryPayload.sharedSubject,
                    sharedBody:    retryPayload.sharedBody,
                    groups:        retryPayload.groups,
                    results:       [],
                });
                location.reload();
            });
        }
```

And in the card HTML template (inside `card.innerHTML`), after the dismiss button, add the retry button conditionally. Find:

```javascript
                <button type="button" id="giu-dismiss-btn" class="gius-btn gius-btn-muted">Dismiss</button>
```

Replace with:

```javascript
                <button type="button" id="giu-dismiss-btn" class="gius-btn gius-btn-muted">Dismiss</button>
                ${retryPayload ? `<button type="button" id="giu-retry-btn" class="gius-btn gius-btn-danger">Retry Failed (${retryPayload.groups.length})</button>` : ''}
```

- [ ] **Step 3: Add `.gius-btn-danger` style**

In `injectStyles()`, find the block where `.gius-btn-muted` is defined and add after it:

```css
            .gius-btn-danger {
                background: #dc2626;
                color: #fff;
                border: none;
            }
            .gius-btn-danger:hover { background: #b91c1c; }
```

- [ ] **Step 4: Manual verification on portal**

1. Go to `https://portal.giu-uni.de/GIUb/Staff/SendNotification.aspx` (or wherever the batch notify panel loads)
2. Select 2–3 groups, send
3. If any fail (or to test: use a group that doesn't exist in dropdown to force a failure), the summary should show "Retry Failed (N)" button
4. Click it — page reloads and starts a new batch with only the failed groups, same subject/body
5. On full success the retry button does not appear

- [ ] **Step 5: Commit**

```bash
git add scripts/GIU\ Notification\ Batch\ Send.js
git commit -m "feat: add retry-failed button to notification batch summary"
```

---

## Task 6: Version bump and push

- [ ] **Step 1: Bump version in both scripts**

In `GIU Upload Grades.js` line 6:
```
// @version     2.3
```

In `GIU Notification Batch Send.js` (find `@version` line):
```
// @version     <current + 0.1>
```

- [ ] **Step 2: Commit and push**

```bash
git add scripts/GIU\ Upload\ Grades.js scripts/GIU\ Notification\ Batch\ Send.js
git commit -m "chore: bump versions after validation/stats/retry features"
git push origin Beta
```

---

## Self-Review

**Spec coverage:**
- Pre-upload validation (blocking, non-numeric, negative, exceeds max) → Task 3 ✓
- Max grade from `||` in eval option text → Task 1 (`getMaxGrade`) ✓
- Pass rate in stats (50% threshold) → Task 1 (`computeStats`) ✓
- Render pass tile/column → Task 2 ✓
- CSV preview stats after load → Task 4 ✓
- Per-group stats pass max grade → Task 4 ✓
- Auto-retry failed groups → Task 5 ✓
- Same subject/body on retry → Task 5 (`retryPayload`) ✓
- Retry button disappears on full success → Task 5 (`retryPayload = null` when no failures) ✓

**Placeholder scan:** None found.

**Type consistency:**
- `computeStats(values, maxGrade = null)` defined Task 1, called with `maxGrade` in Tasks 3 and 4 ✓
- `getMaxGrade(evalPicker)` defined Task 1, called in Tasks 3 and 4 ✓
- `validateCsvMap(csvMap, maxGrade)` defined Task 3, called in Task 3 ✓
- `retryPayload = { groups, sharedSubject, sharedBody }` shape defined Task 5 step 1, used in step 2 ✓
- `renderSummary(results, retryPayload = null)` updated in step 2 ✓
