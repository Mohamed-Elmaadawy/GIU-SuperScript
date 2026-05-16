# GIU SuperScript

A collection of Tampermonkey userscripts that enhance the GIU staff portal at [portal.giu-uni.de](https://portal.giu-uni.de). Each script injects UI directly into the portal page and feels native to the original design.

---

## Suggestions & Feedback

For suggestions, bug reports, or feature requests, send an email to [mohamed.elmaadawy@giu-uni.de](mailto:mohamed.elmaadawy@giu-uni.de).

---

## Installation

### Step 1 — Install Tampermonkey

| Browser | Link |
|---|---|
| Chrome / Edge / Brave | [Tampermonkey on Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) |
| Firefox | [Tampermonkey on Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) |
| Safari | [Tampermonkey on App Store](https://apps.apple.com/us/app/tampermonkey/id1482490089) |

### Step 2 — Install a Script

**Option A — Paste the script manually:**

1. Open Tampermonkey → click the extension icon → **Dashboard**
2. Click **+** (Create a new script)
3. Delete the placeholder code
4. Open the `.js` file from this repo, copy all contents, paste into the editor
5. Press **Ctrl + S** (or **File → Save**) — the script is now active

**Option B — Install from file:**

1. Open Tampermonkey → **Dashboard** → **Utilities** tab
2. Under **Import**, click **Choose File** and select the `.js` file
3. Click **Install** on the confirmation page

### Step 3 — Verify

After saving, go to the target page listed for each script below. A new panel or toolbar should appear automatically. No page refresh needed if you were already on the page — navigate away and back once.

---

## Scripts

### 1. GIU Staff Enhanced Attendance

**File:** `GIU Attandance Script.js` | **Version:** 3.0.7 | **Author:** Mo.Elmaadawy

A full attendance management dashboard injected above the Swift Report attendance table. Tracks your hours, leave balance, and exceptions — all stored locally in your browser.

**Target page:**
```
https://portal.giu-uni.de/GIUb/EXT/SwiftReports_m.aspx?swiftreportid=866&executereport=1
```

**Features:**

- **Payroll period tracking** — groups rows into monthly periods (11th → 10th of next month)
- **Balance summary** — actual vs. required hours, progress bar, extra/missing balance
- **Present / Absent / Late tracking** — late threshold: 10:30 AM normal, 9:30 AM Ramadan
- **Holiday & Annual Leave** — add single dates or ranges, bulk remove, deduplication
- **Annual leave balance** — editable remaining days, auto-accrues +3 days per payroll month
- **Attendance overrides** — custom hours for mission days, IN/OUT anomalies, etc.
- **Compensation days** — earn by working your day off (capped 1/week), use within same period
- **Ramadan mode** — reduced required hours (6h), adjusted thresholds
- **Exam period** — configurable last-out time cap override
- **Conflict detector** — flags dates marked as both holiday and override/compensation
- **Audit log** — per-day status and reason (Present, Absent, Holiday, Day Off, etc.)
- **Import / Export** — full settings backup and restore as JSON
- **Onboarding guide** — first-time spotlight walkthrough for all features
- **Auto record pruning** — cleans records older than 2 payroll months

**Usage:**

1. Navigate to the Swift Report page (link above)
2. The attendance dashboard appears above the report table
3. On first visit, a guided walkthrough launches automatically
4. Set your **Day Off** in Settings — applies from a chosen start date forward
5. Add holidays, overrides, and compensation days as needed
6. Use **Export Settings** to back up your configuration before clearing browser data

---

### 2. GIU Notification Batch Send

**File:** `GIU Notification Batch Send.js` | **Version:** 1.0 | **Author:** Mo.Elmaadawy

Sends the same email notification to multiple tutorial groups in sequence. Write subject and body once — the script steps through each selected group using a localStorage queue and page reloads.

**Target page:**
```
https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx
```

**Features:**

- **Batch send** — select all groups or a specific subset, then send to all in one click
- **Course filter** — filter the group list by course code (e.g. "INCS 406") when you teach multiple courses
- **Select All** — respects the active course filter, only selects visible groups
- **Progress tracking** — live banner updates after each group is processed
- **Summary table** — shows sent / failed status per group when the batch completes

**Usage:**

1. Navigate to the Send Email page (link above)
2. The batch panel loads above the standard email form
3. *(Optional)* Use the course filter dropdown to narrow the group list to one course
4. Select the groups you want to notify (or click **Select All**)
5. Write your subject and body in the fields provided
6. Click **Send to Selected Groups** — the script sends group by group and reports results

> **Note:** The script uses page reloads to submit each group's form. Keep the tab open until the batch completes.

---

### 3. GIU Upload Grades

**File:** `GIU Upload Grades.js` | **Version:** 2.2 | **Authors:** Ahmed Sherif, Mo.Elmaadawy

Batch grade download and upload across all student groups on the Manage Uploaded Grades page. Runs entirely in the background via fetch — no page reloads between groups.

**Target page:**
```
https://portal.giu-uni.de/GIUb/EXT/ManageUploadedGrades_m.aspx
```

**The script works in two states depending on where you are on the page:**

**State A — Dropdowns visible (before grade table):**

A toolbar is injected with a custom evaluation method picker. Selecting from it keeps you on the same page.

- **Batch Download** — iterates every group, downloads one combined CSV (Name, Group, Grade)
- **Batch Upload** — load a CSV file, then push grades to every group automatically
- **Grade statistics** per group — Min, Max, Average, Range displayed after each operation

**State B — Grade table visible (after selecting group + eval):**

- **Upload CSV** — fills current group's grade inputs from a CSV file
- **Download CSV** — exports current group's grades as a CSV file

**CSV format:**
```csv
Name,Group,Grade
(12345678) Ahmed Mohamed,INCS 406 - 4INF2 (Practical),85
(87654321) Sara Ali,INCS 406 - 4INF2 (Practical),90
```

Grades are matched by student ID `(XXXXXXXX)` prefix — safe against row reordering.

**Usage:**

*Batch Download:*
1. Navigate to the Manage Uploaded Grades page
2. Select course and group from the dropdowns
3. Pick the evaluation method from the toolbar's eval picker
4. Click **Batch Download** — a combined CSV downloads when all groups finish

*Batch Upload:*
1. Complete steps 1–3 above
2. Click **Load CSV** and pick your filled-in grades file
3. Click **Batch Upload** — grades upload group by group; progress shown in the toolbar

*Single group:*
1. Navigate to the grade table for your group (via the page dropdowns)
2. Use **Upload CSV** to fill grades from a file, or **Download CSV** to export

---

### 4. GIU Manage Group Grades

**File:** `GIU Manage Group Grades.js` | **Version:** 1.4 | **Author:** Mo.Elmaadawy

CSV upload/download buttons on the Manage Group Grade page (per-group grade entry, separate from the uploaded grades flow). The panel only appears after you have selected a season, course, group, and evaluation method — i.e., when the student grade table is actually visible.

**Target page:**
```
https://portal.giu-uni.de/GIUb/INTStaff/ManageGroupGrade_m.aspx
```

**Features:**

- **Upload Grades CSV** — fills grade inputs by matching student ID — safe against row reordering
- **Download Grades CSV** — exports student names and current grade values to CSV
- **Grade statistics** — Min, Max, Average, and Range computed from current grade inputs
- **Auto-hide** — panel is hidden until the grade table is present; disappears if you change selection

**Usage:**

1. Navigate to the Manage Group Grade page
2. Select Season → Course → Group → Evaluation Method from the page dropdowns
3. The grade panel appears above the table once student data loads
4. Click **Download CSV** to export current grades, or **Upload CSV** to fill grades from a file
5. Statistics update automatically based on the values in the table

> **Note:** Upload matches by student ID `(XXXXXXXX)` prefix in the Name column — safe against row reordering. Students missing from the CSV keep their current grade value.

---

## Requirements

- Tampermonkey v4.x or later
- Chrome, Edge, Brave, or Firefox
- Active GIU staff portal session (must be logged in)

---

## Authors

| Script | Authors |
|---|---|
| GIU Staff Enhanced Attendance | Mo.Elmaadawy |
| GIU Notification Batch Send | Mo.Elmaadawy |
| GIU Upload Grades | Ahmed Sherif, Mo.Elmaadawy |
| GIU Manage Group Grades | Mo.Elmaadawy |
