# Manage Uploaded Grades Script — Design Spec

Date: 2026-05-15

## Problem

GIU staff on `ManageUploadedGrades_m.aspx` must upload grades group-by-group manually:
select Season → Course → Group → Evaluation Method, fill inputs, save. Repeating for
every group is slow and error-prone. There is no CSV import, no stats, and no batch flow.

## Scope

New Tampermonkey userscript: `manageUploadedGrades.js`
Matches: `https://portal.giu-uni.de/GIUb/EXT/ManageUploadedGrades_m.aspx`
Target users: GIU staff (faculty)

## Architecture

Single-file userscript. Two modes on every page load, determined by localStorage key
`giuManageGradesQueueV1`:

1. **UI mode** — no active queue → if grade rows are present, inject toolbar above the
   native Save button. If no rows (dropdowns not fully selected), do nothing.
2. **Runner mode** — active queue → auto-drive the page through groups.

### Why localStorage queue

Same reasoning as `notificationBatchSend.js`. Each dropdown change triggers a full
ASP.NET WebForms postback (`__doPostBack`), reloading the page and regenerating
`__VIEWSTATE`. Intercepting AJAX or replaying via `fetch` requires forwarding ViewState
— fragile. The queue approach rides the page's own postback flow.

## Queue State Shape

```json
{
  "step": "select-group | select-eval | collect | done",
  "currentIndex": 0,
  "savedSeasonId": "68",
  "savedCourseId": "4676",
  "savedEvalId": "59125",
  "savedEvalLabel": "Quiz 1",
  "groups": [
    { "value": "131833", "label": "INCS 406 - 4INF2 (Practical)" }
  ],
  "csvMap": { "16001391": "8", "16001781": "10" },
  "results": [
    { "label": "INCS 406 - 4INF2", "avg": 7.4, "min": 5, "max": 10, "range": 5, "count": 15 }
  ]
}
```

`csvMap`: keyed by numeric student ID (extracted from `(XXXXXXXX)` prefix).
Empty object when batch is download-only (no CSV uploaded).
Step is always written to localStorage **before** any action that causes a page reload.

## State Machine

```text
page loads
    │
    ▼
queue present?
    │ no  → grade rows present? → inject toolbar; exit
    │ yes
    ▼
switch(step)
    ├─ "select-group"  → set grpLst.value = groups[currentIndex].value
    │                    __doPostBack("ctl00$MainContent$grpLst", "")
    │                    (page reloads)
    │
    ├─ "select-eval"   → set evalMethIdLst.value = savedEvalId
    │                    __doPostBack("ctl00$MainContent$evalMethIdLst", "")
    │                    (page reloads)
    │
    ├─ "collect"       → if csvMap non-empty: fill grade inputs by student ID
    │                       validate each value ≤ mxPt_{i}; skip invalid entries
    │                    record { label, avg, min, max, range, count } from current inputs
    │                    download CSV for this group
    │                    currentIndex++
    │                    step = (currentIndex < groups.length) ? "select-group" : "done"
    │                    write queue to localStorage   ← before clicking Save
    │                    if csvMap non-empty: click MainContent_saveBtn (page reloads)
    │                    if csvMap empty: trigger next step immediately (no reload)
    │
    └─ "done"          → render aggregate stats table
                         clear localStorage key
```

On "collect": step is set to the next step and written to localStorage **before** clicking
Save, so the reload always lands in a known state.

## Toolbar (UI mode)

Injected as a `<div>` immediately above `#MainContent_saveBtn`. Uses existing Bootstrap
classes so it blends with portal theme.

```text
┌─ CSV Tools ─────────────────────────────────────────────────────┐
│  [📄 Upload Grades CSV]  [📥 Download Grades CSV]               │
│                                                                  │
│  Avg: 7.4  Min: 5  Max: 10  Range: 5   (live, updates on input) │
│                                                                  │
│  [▶ Batch All Groups]                                            │
└──────────────────────────────────────────────────────────────────┘
```

- **Upload CSV**: file input (hidden), reads combined CSV, matches students by ID,
  fills `grd_*` inputs. Leaves unmatched students unchanged. User then clicks the
  native Save button themselves (single-group flow).
- **Download CSV**: reads all `stdNmLbl_*` + `grd_*` inputs, exports
  `(ID) Name,grade` CSV named `{groupLabel}-{evalLabel}.csv`.
- **Stats bar**: computed live from all current `grd_*` input values. Updates on
  every `input` event.
- **Batch All Groups**: saves Season/Course/Eval/groups from current DDLs + parsed
  csvMap into localStorage, starts queue at `step = "select-group", currentIndex = 0`.
  CSV is optional — without one, batch is download-only (stats + CSV per group, no fill/save).

## CSV Format

```text
(16001391) Gamila Yasser Mohamed,8
(16001781) Hagar Osama Baher,10
(16002072) Ahmed Mohamed Ismail,6
```

- One row per student across all groups (combined file).
- First field: student name with `(ID)` prefix — ID extracted via `/^\((\d+)\)/`.
- Second field: numeric grade. Empty or non-numeric → skip (leave input as-is).
- Header row optional; rows without `(ID)` prefix are ignored.

## Element Selectors

| Element | Selector |
| --- | --- |
| Season DDL | `#MainContent_dlSeason` |
| Course DDL | `#MainContent_smCrsLst` |
| Group DDL | `#MainContent_grpLst` |
| Eval Method DDL | `#MainContent_evalMethIdLst` |
| Student rows | `tr[id^="MainContent_rptrNtt_stdRw_"]` |
| Student name span | `span[id^="MainContent_rptrNtt_stdNmLbl_"]` |
| Grade input | `input[id^="MainContent_rptrNtt_grd_"]` |
| Max points | `input[id^="MainContent_rptrNtt_mxPt_"]` (hidden) |
| Save button | `#MainContent_saveBtn` |
| Download All (native) | `#MainContent_btnDownLoadall` |

Grade rows are present when
`document.querySelector('tr[id^="MainContent_rptrNtt_stdRw_"]')` is non-null.

## Completion Summary (step = "done")

Rendered inline above the DDL section before clearing localStorage:

```text
┌─ Batch Complete ────────────────────────────────────────────────┐
│ Group              Avg    Min  Max  Range  Count                 │
│ INCS 406 - 4INF2   7.4    5    10   5      15                   │
│ INCS 406 - 4INF3   8.1    4    10   6      14                   │
│ ...                                                              │
└──────────────────────────────────────────────────────────────────┘
```

## Error Handling

- If `grpLst` does not contain queued group value (group removed): mark as skipped, advance.
- If `evalMethIdLst` does not contain saved eval ID after group select: mark as failed, advance.
- If grade rows are absent after both selects: mark as failed, advance.
- If page loads without expected DDLs (session expired / wrong URL): abort, show error,
  clear queue.
- Grade values exceeding `mxPt` for a student are skipped (not written to that input).

## Styling

Bootstrap portal classes: `btn btn-primary`, `alert alert-info`, `table table-bordered`.
No external CSS. Matches `uploadGradesGIU.js` button style for consistency
(`padding: 8px 14px; background-color: #0d6efd; ...`).

## Files

| File | Purpose |
| --- | --- |
| `scripts/manageUploadedGrades.js` | New userscript (this spec) |
| `scripts/uploadGradesGIU.js` | Existing — grade entry page, unchanged |
| `scripts/notificationBatchSend.js` | Existing — queue pattern reference |
