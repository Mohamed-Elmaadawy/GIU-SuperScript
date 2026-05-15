# Sherif Script — Batch Grades Upgrade

**Date:** 2026-05-15
**File:** `scripts/uploadGradesGIU_sherif.js`
**Status:** Approved for implementation

## Context

`manageUploadedGrades.js` has full batch logic but broken row selectors — it fails in production.
`uploadGradesGIU_sherif.js` works (uses `#data tbody tr` / `cells[2]` selectors) but has no batch.
Goal: add batch download + batch upload to the working script.

## Selectors

```js
const SEL = {
    group:   '#MainContent_grpLst',
    eval:    '#MainContent_evalMethIdLst',
    evalId:  'input[id^="MainContent_rptrNtt_evalMethId_"]', // hidden input when eval dropdown absent
    crntLbl: '#MainContent_crntLbl',
    saveBtn: '#MainContent_saveBtn',
    rows:    '#data tbody tr',   // sherif's working selector — row 0 is header, skip it
    // name   → row.cells[0]?.querySelector("span").textContent
    // grade  → row.cells[2]?.querySelector("input")
    // maxPt  → row.cells[3]?.querySelector("input") or similar — read at runtime, optional
};
```

### Eval ID resolution

When starting a batch, read eval ID in priority order:

1. `SEL.eval` dropdown selected value (if dropdown present)
2. First `SEL.evalId` hidden input value (if dropdown absent)
3. Abort with error banner if neither found

Group/eval/save use standard ASP.NET IDs (same as main script — those work).
Row/name/grade use sherif's cell-index approach (repeater ID-based selectors were broken).

## Toolbar UI

Single unified toolbar injected after `#data`:

```text
[ 📄 Upload CSV ] [ 📥 Download CSV ] [ ▶ Batch Download ] [ ▶ Batch Upload* ]
Avg: --  |  Min: --  |  Max: --  |  Students: --

* grayed out until CSV loaded
```

Error banners (red `.alert`) injected inline above toolbar with specific messages.

## Fetch Chain Architecture

No page reloads. Per group, 3 chained POSTs:

```text
Current page ViewState
       │
       ▼
POST: select group  →  parse response  →  new ViewState + doc₁
       │
       ▼
POST: select eval   →  parse response  →  new ViewState + doc₂ (student rows present)
       │
       ├─ [Download mode]  extract rows → append to allRows → next group
       │
       └─ [Upload mode]    match grades by student ID → POST save → next group
```

### Key helpers

- `postBackFetch(viewState, eventTarget, overrides)` — POSTs the form with a fresh ViewState, returns parsed `Document`
- `extractViewState(doc)` — pulls `__VIEWSTATE`, `__VIEWSTATEGENERATOR`, `__EVENTVALIDATION` from any response doc
- `extractRows(doc)` — applies `#data tbody tr` on fetched doc, skips row 0

### Error handling

If any fetch in the chain fails for a group:

- Append inline banner: `"Group [label]: [reason]"` (red alert)
- Skip to next group
- Continue batch

Fatal errors (no group dropdown, no form element):

- Show blocking red banner, abort batch

### Progress

Live counter updated each iteration: `"Processing group 3 of 8…"`
No page flash. Counter replaced by summary when done.

## CSV Format

### Download output

```csv
Name,Group,Grade
(12345678) Ahmed Mohamed,G01,
(87654321) Sara Ali,G01,
(11223344) Omar Hassan,G02,
```

- Group column included for reference
- Grade column empty — user fills it

### Upload input

Same format. Script:

1. Parses CSV into `Map<studentId, grade>`
2. Per group page, extracts student ID from `(XXXXXXXX)` prefix in name span
3. Looks up grade in map, validates against max points if available
4. POSTs save

Matching by student ID (not row index) — safe against reordering across page loads.

## Dead Code Removal

`createUploadGradeButton`, `createDownloadGradeButton`, `createGradeButtons` — all removed.
Replaced by single `injectToolbar()`.

## Out of Scope

- Stats bar (avg/min/max) — not in sherif script, not adding
- Parallel fetch (fetch all groups simultaneously) — risks server rate-limiting, sequential is safe
