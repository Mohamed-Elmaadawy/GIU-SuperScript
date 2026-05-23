# Student Attendance Group Report — Design Spec
Date: 2026-05-23

## Overview

A Tampermonkey userscript that injects a group attendance report panel into the GIU portal's **Manage Student Attendances** page (`/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx`). When an instructor selects a group, the script automatically scrapes all session attendance data in the background and displays a summary panel above the student table showing overall group health and a list of at-risk students (Level 2 absence or above).

## Target Page

**URL:** `https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx`

**Page flow:**
1. Instructor selects a group from `MainContent_DDL_StudentGroup`
2. Page reloads; session dropdown `MainContent_DDL_Sessions` is populated
3. Instructor selects a session; student table `MainContent_DG_StudentAttendance` appears with checkboxes (`CB_Attended_N`) showing attendance for that session

**Script activation:** `@match` on the above URL; `@run-at document-idle`.

## Data Acquisition

### Trigger
ASP.NET does a full page postback (reload) when the group dropdown changes. So on `document-idle`:
1. Check `DDL_StudentGroup.value !== "0"` → group is selected
2. Check `DDL_Sessions` has at least one real option (value !== "0") → sessions are loaded
3. If both true → auto-trigger scrape

No `change` event listener needed; each group selection produces a fresh page load with the selection already reflected in the DOM.

### Cache check
Before scraping, check localStorage for key `giuAttendanceGroupV1_{groupId}_{seasonId}`.
- Cache hit with age < 30 min → render immediately from cache; still re-scrape in background to refresh
- Cache miss → show progress bar, scrape all sessions

### Scrape algorithm
1. Snapshot hidden ASP.NET form fields from the current DOM: `__VIEWSTATE`, `__VIEWSTATEGENERATOR`, `__EVENTVALIDATION`, and all other `<input type="hidden">` fields.
2. Read all `<option>` elements from `DDL_Sessions` → build session list: `[{id, label, date, status, durationHours}]`
   - Parse date from label: `@YYYY.MM.DD` pattern
   - Parse status: `"On Hold"` substring → `onHold: true`; `"Compensation"` → `compensation: true`; otherwise Regular
   - Parse duration: trailing `"Nh"` pattern (default 2 if absent)
3. For each session ID, POST to the same page URL with the captured VIEWSTATE, setting `ctl00$MainContent$DDL_Sessions = {sessionId}` and `__EVENTTARGET = ctl00$MainContent$DDL_Sessions`. Use `AbortController` for cancellation.
4. Concurrency: MAX_CONCURRENT = 5 (via pool similar to Proctor Aggregator's `runPool`).
5. Parse each response HTML:
   - Find `#MainContent_DG_StudentAttendance` rows (skip header row)
   - Extract per-row: `studentId` (hidden text column), `studentName`, `checked` state of `CB_Attended_N`
   - **Unrecorded session heuristic:** if 100% of students are unchecked → mark session as `unrecorded`; exclude from all students' absence calculations
6. If a session fetch fails → mark `fetchError: true`; exclude from calculation; count toward "N failed" in UI.

### Absence calculation
Per student, per group:

```
eligibleSessions = sessions where NOT unrecorded AND NOT fetchError
eligibleHours    = sum(session.durationHours) for eligible sessions
absentHours      = sum(session.durationHours) for sessions where student was absent AND eligible
absenceRate      = absentHours / eligibleHours
```

Hour-weighting (using duration from option text) matches the portal's approach of counting contact hours rather than raw session counts, partially compensating for the fact that this page only shows one session type (practical), while the portal's Level calculation aggregates across all session types.

**Absence level classification:**
| Rate | Level |
|------|-------|
| < 10% | 0 — None |
| ≥ 10% | 1 — First Warning |
| ≥ 20% | 2 — Second Warning |
| > 25% | 3 — Drop |

*Thresholds derived from reference data analysis (2 student snapshots). The portal's authoritative level also accounts for lecture/tutorial sessions not visible on this page, so the script's classification is an approximation.*

**Levels 2 and 3 are highlighted in the at-risk list.**

## Report Panel UI

**Placement:** Injected above `#MainContent_DG_StudentAttendance`, inside the existing content area. Visible once group + sessions are loaded.

**Panel structure:**

```
┌─────────────────────────────────────────────────────────────┐
│  Group Attendance Report — S26 INCS 406 4INF P002           │
│  13 sessions · 13/13 scraped · cached 2 min ago  [Refresh] │
├──────────────┬───────────────────────────────────────────────┤
│  Group stats │  ●  24 students                              │
│              │  ✓  19 OK (Level 0–1)                        │
│              │  ⚠  3  Level 2 — Second Warning              │
│              │  ✗  2  Level 3 — Will Be Dropped             │
│              │  Group avg absence: 8.4%                     │
├──────────────┴───────────────────────────────────────────────┤
│  AT-RISK STUDENTS (Level 2+)                                 │
│  ┌──────────┬──────────────────────────┬──────┬─────────┐   │
│  │ Level    │ Name                     │Absent│    %    │   │
│  ├──────────┼──────────────────────────┼──────┼─────────┤   │
│  │ ✗ DROP   │ Marwan Mohamed …         │ 4/13 │  30.8%  │   │
│  │ ⚠ 2nd Wrn│ Adam Yasser …            │ 3/13 │  23.1%  │   │
│  └──────────┴──────────────────────────┴──────┴─────────┘   │
└─────────────────────────────────────────────────────────────┘
```

During scrape, the stats area is replaced by a progress bar (`N/total sessions scraped`). Stats animate in when complete.

**Color coding (light mode):**
- Level 0: no highlight
- Level 1: yellow background (`#fff3cd`)
- Level 2: orange background (`#ffe0b2`)
- Level 3: red background (`#ffcccc`)

**Dark mode:** `html.gius-dark` selector; Catppuccin Mocha palette. Panel uses `background:` shorthand (not `background-color:`) for Material Dashboard compatibility. No visible borders (`border-color: transparent`).

**CSS prefix:** `.gius-att-*`

## Cache

- **Key:** `giuAttendanceGroupV1_{groupId}_{seasonYear}` where `seasonYear` is extracted from the first session option label (e.g., `"Spring 2026"` → `"S2026"`)
- **Payload:** `{ts, groupLabel, sessions[], students[{id, name, absentHours, totalHours, level}]}`
- **TTL:** 30 minutes
- **[Refresh] button:** clears cache entry for current group, triggers immediate re-scrape
- **Group change mid-scrape:** abort all in-flight fetches via `AbortController`, clear progress bar, start fresh for new group

## Error Handling

| Scenario | Behaviour |
|----------|-----------|
| Single session fetch fails | Exclude from calculation; show `"11/13 sessions scraped, 2 failed"` |
| All fetches fail | Banner: `"Session may have expired — please reload the page"` |
| VIEWSTATE stale | Same as above (symptoms identical) |
| No sessions in dropdown | Panel not shown |
| Group changed mid-scrape | Cancel in-flight, restart for new group |

## Architecture Notes

- Pattern follows `scripts/GIU Proctor Schedule Aggregator.js` (v1.9): `runPool(tasks, worker, onTaskDone)` concurrency helper, localStorage cache, no auto-fetch on page open replaced by auto-trigger on group select
- Script header: `@name GIU Student Attendance Group Report`, `@version 1.0`, `@match https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx*`
- No external dependencies beyond Tampermonkey APIs (`GM_getValue`/`GM_setValue` for localStorage fallback if needed)
- Session type filtering: all session types (Regular, On Hold, Compensation) included in calculation per reference data showing `Calc=1` for On Hold and Compensation sessions

## Out of Scope

- Modifying attendance records
- Cross-group aggregation (one panel per group, as loaded)
- Integration with the Student Attendance Report page
- Export / PDF generation
