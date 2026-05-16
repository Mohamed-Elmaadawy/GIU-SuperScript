# GIU SuperScript

A collection of Tampermonkey userscripts that enhance the GIU staff portal at [portal.giu-uni.de](https://portal.giu-uni.de).

## Scripts

### 1. GIU Staff Enhanced Attendance (`GIU Attandance Script.js`)

**Version:** 3.0.7 | **Author:** Mo.Elmaadawy

Enhances the attendance Swift Report page with a full summary dashboard, settings panel, and analytics.

**Target page:**

```text
https://portal.giu-uni.de/GIUb/EXT/SwiftReports_m.aspx?swiftreportid=866&executereport=1
```

**Features:**

- **Payroll period tracking** — automatically groups attendance rows into monthly periods (11th → 10th)
- **Balance summary** — actual vs. required hours, progress bar, balance (extra/missing)
- **Present / Absent / Late tracking** — late threshold: 10:30 AM normal, 9:30 AM Ramadan
- **Holiday & Annual Leave management** — single dates or date ranges, deduplication, bulk remove
- **Annual leave balance** — editable remaining balance, monthly accrual (+3 days/payroll month)
- **Attendance Overrides** — full-day or custom actual hours for mission days, IN/OUT forms, etc.
- **Compensation Days** — earn by working your day off (capped 1/week), use within same payroll period
- **Ramadan mode** — reduced required hours (6h), adjusted late threshold and last-out cap
- **Exam Period** — configurable last-out cap override for exam seasons
- **Conflict Detector** — flags dates marked as both holiday and override/compensation
- **Audit Log Mode** — per-day status and reason (Present, Absent, Holiday, Day Off, etc.)
- **Import / Export** — full settings backup and restore as JSON
- **Onboarding Guide** — first-time spotlight walkthrough for all features
- **Record Retention** — auto-prunes records older than 2 payroll months

---

### 2. GIU Upload Grades (`GIU Upload GradesGIU.js`)

**Version:** 2.2 | **Authors:** Ahmed Sherif, Mo.Elmaadawy

Batch grade download and upload across all student groups on the Manage Uploaded Grades page. No page reloads — uses background fetch requests.

**Target page:**

```text
https://portal.giu-uni.de/GIUb/EXT/ManageUploadedGrades_m.aspx
```

**Two operating states:**

**State A — Dropdowns page (course + group + eval visible):**

- Toolbar injected with a custom evaluation method picker (selecting from it does not trigger page navigation)
- **▶ Batch Download** — iterates all groups, downloads a combined CSV with Name, Group, Grade columns
- **▶ Batch Upload** — load a CSV, then upload grades to every group in sequence

**State B — Grade table page (after group + eval selected):**

- **📄 Upload CSV** — fill current group's grade inputs from a CSV file
- **📥 Download CSV** — download current group's grades as CSV

**CSV format:**

```csv
Name,Group,Grade
(12345678) Ahmed Mohamed,INCS 406 - 4INF2 (Practical),85
(87654321) Sara Ali,INCS 406 - 4INF2 (Practical),90
```

Grades matched by student ID `(XXXXXXXX)` prefix — safe against row reordering.

---

### 3. GIU Manage Grades (`GIU Manage Grades.js`)

**Version:** 2.0 | **Authors:** Ahmed Sherif, Mo.Elmaadawy

Earlier batch grade script using localStorage queuing and full page reloads to iterate groups on the Manage Uploaded Grades page.

**Target page:**

```text
https://portal.giu-uni.de/GIUb/EXT/ManageUploadedGrades_m.aspx
```

> **Note:** Uses repeater-based row selectors (`tr[id^="MainContent_rptrNtt_stdRw_"]`) that do not match the actual page HTML. Use `GIU Upload GradesGIU.js` instead.

---

### 4. GIU Manage Group Grades (`GIU Manage Group Grades.js`)

**Version:** 1.1

Simple upload/download CSV buttons on the Manage Group Grade page (per-group grade entry, separate from the uploaded grades flow).

**Target page:**

```text
https://portal.giu-uni.de/GIUb/INTStaff/ManageGroupGrade_m.aspx
```

**Features:**

- **📄 Upload Grades CSV** — reads a CSV and fills grade inputs in `#Table1` by row order
- **📄 Download Grades CSV** — exports student names and current grade values to CSV

> **Note:** Upload matches by row position, not student ID. Row order must match between CSV and page.

---

### 5. GIU Notification Batch Send (`GIU Notification Batch Send.js`)

**Version:** 1.0 | **Author:** Mo.Elmaadawy

Sends the same email notification to multiple tutorial groups in sequence. Uses localStorage queue and page reloads to step through each group.

**Target page:**

```text
https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx
```

**Features:**

- **Batch Send** — select all groups or a subset, write subject + body once, send to all
- Progress banner updates after each group send
- Summary table on completion showing sent / failed per group
- Per-group subject/body override supported

---

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser
2. Open Tampermonkey dashboard → **Create new script**
3. Paste the contents of the desired script file
4. Save — the script activates automatically on matching pages

Or use Tampermonkey's **Install from file** option.

---

## Usage

### Attendance Script

1. Navigate to the Swift Report attendance page (link above)
2. The enhanced dashboard appears above the report table
3. On first visit, a guided walkthrough launches automatically
4. Configure your **Day Off** in Settings — applies from a chosen date forward
5. Add holidays, overrides, and compensation days as needed
6. Use **Export Settings** to back up your configuration

### GIU Upload Grades (Batch)

**Batch Download:**

1. Navigate to the Manage Uploaded Grades page
2. Select course and group from the dropdowns (page reloads to show eval options)
3. Select the evaluation method from the toolbar's eval picker — page stays put
4. Click **▶ Batch Download** — combined CSV downloads when complete

**Batch Upload:**

1. Complete steps 1–3 above
2. Click **📄 Load CSV for Upload** and select your filled-in grades CSV
3. Click **▶ Batch Upload** — grades are saved group by group

**Single group:**

1. Select course → group → eval via the page dropdowns (navigates to grade table)
2. Use **📄 Upload CSV** to fill grades, or **📥 Download CSV** to export

### GIU Manage Group Grades

1. Navigate to the Manage Group Grade page
2. Upload/Download buttons appear below the grade table
3. CSV column order: Name, Grade

### Notification Batch Send

1. Navigate to the Send Email page
2. The batch panel appears above the form
3. Write subject and body, select target groups, click **Send to All Groups**

---

## Requirements

- Tampermonkey v4.x or later
- Chromium-based browser or Firefox
- Active GIU staff portal session

---

## Authors

| Script | Authors |
| --- | --- |
| GIU Staff Enhanced Attendance | Mo.Elmaadawy |
| GIU Upload Grades | Ahmed Sherif, Mo.Elmaadawy |
| GIU Manage Grades | Ahmed Sherif, Mo.Elmaadawy |
| GIU Manage Group Grades | — |
| GIU Notification Batch Send | Mo.Elmaadawy |
