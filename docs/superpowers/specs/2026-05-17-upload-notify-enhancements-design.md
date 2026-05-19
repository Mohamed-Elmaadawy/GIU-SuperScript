# Design: Upload Validation, Grade Stats & Notification Auto-retry

**Date:** 2026-05-17
**Scope:** `scripts/GIU Upload Grades.js`, `scripts/GIU Notification Batch Send.js`

---

## 1. Pre-upload Validation

### Goal
Block batch upload when the CSV contains invalid grades, preventing bad data from reaching the portal.

### Max grade extraction
Eval method options store max grade after `||` in their text content (e.g. `"Midterm Exam||25"`). A helper reads it:

```javascript
function getMaxGrade(evalPicker) {
    const text = evalPicker.options[evalPicker.selectedIndex]?.text ?? '';
    const after = text.split('||')[1];
    return after ? parseFloat(after) : null;
}
```

For the per-group view (State B), max grade comes from `crntLbl` text: `"GroupName - EvalMethod||MaxGrade"` → `crntLbl.split('||')[1]`.

### Validation rules
Applied to all values in `csvMap` before the upload loop starts:

| Rule | Condition | Error text |
|------|-----------|------------|
| Non-numeric | `!Number.isFinite(+v)` | `invalid: <value>` |
| Negative | `+v < 0` | `negative: <value>` |
| Exceeds max | `+v > maxGrade` (only when max available) | `<value> > max <maxGrade>` |

### Behaviour
- Collect all failing entries (student ID + reason).
- If any failures: call `showError(card, "N grade(s) failed validation: ...")` and `return` — upload never starts.
- If max grade unavailable (no `||` in option): skip exceed-check, run the other two rules.
- Upload resumes normally once user loads a corrected CSV.

---

## 2. Grade Statistics

### Goal
Add pass rate to existing stats and show a CSV preview immediately after loading the file.

### `computeStats` signature change
```javascript
function computeStats(values, maxGrade = null)
```

New field added to return value:
```javascript
const passThreshold = maxGrade != null ? maxGrade * 0.5 : null;
const passRate = passThreshold != null
    ? ((nums.filter(n => n >= passThreshold).length / nums.length) * 100).toFixed(0) + '%'
    : null;
// returned as: { min, max, avg, range, count, passRate }
```

Pass threshold: 50% of max grade (GIU convention).

### Render changes
`renderGroupStats` and `renderBatchStats`: add "Pass" stat tile/column when `passRate` is non-null.

### CSV preview (new)
In `fileInput.onchange` (batch toolbar), after `csvMap` is built:
- Extract grade values from `csvMap`
- Call `computeStats(values, getMaxGrade(evalPicker))`
- Render inline below the "CSV loaded — N student grade(s) ready" message using a stat tiles layout (same as `renderGroupStats`)

### Call-site updates
All existing `computeStats(grades)` calls updated to pass max grade:
- Batch toolbar: `computeStats(grades, getMaxGrade(evalPicker))`
- Per-group toolbar: `computeStats(grades, parseFloat(document.querySelector(SEL.crntLbl)?.textContent.split('||')[1]) || null)`

---

## 3. Auto-retry Failed Notifications

### Goal
After a batch send in `GIU Notification Batch Send.js`, let the user retry only the failed groups without re-entering subject/body.

### State captured at send time
Local variables already in scope in the send handler:
- `subject` — string
- `body` — string  
- `failedGroups` — array of `{ value, label }` objects (same shape as original group list)

### Behaviour
- During the send loop: on failure, push group object to `failedGroups`.
- After loop ends: if `failedGroups.length > 0`, inject "Retry Failed (N)" button into the summary card.
- Button click: re-run the send loop with `failedGroups` as the queue, using the captured `subject` and `body` — no re-prompt.
- Retry results update existing summary rows: match row by `group.value`, replace status cell text/colour in place.
- After retry: if all succeed, button removed; if some still fail, button re-renders with new count.

### No new state persistence
Subject/body are closed over in the retry handler — no localStorage or global state needed.

---

## Files Changed

| File | Changes |
|------|---------|
| `scripts/GIU Upload Grades.js` | `getMaxGrade()`, validation in `batchUpload`, `computeStats` signature + `passRate`, stats render updates, CSV preview on load |
| `scripts/GIU Notification Batch Send.js` | `failedGroups` collection in send loop, retry button in summary |

## Out of scope
- Per-student validation feedback (beyond listing bad entries)
- Configurable pass threshold (50% of max is hardcoded)
- Retry persistence across page reloads
