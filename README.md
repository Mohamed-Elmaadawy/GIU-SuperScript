# GIU SuperScript

A collection of Tampermonkey userscripts that enhance the GIU staff portal at [portal.giu-uni.de](https://portal.giu-uni.de).

## Scripts

### 1. GIU Staff Enhanced Attendance (`GIU Attandance Script.js`)

**Version:** 3.0.7 | **Author:** Mo.Elmaadawy

Enhances the attendance Swift Report page with a full summary dashboard, settings panel, and analytics.

**Target page:**
```
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

### 2. GIU Upload Grades (`uploadGradesGIU.js`)

**Version:** 2.2 | **Authors:** Ahmed Sherif, Mo.Elmaadawy

Adds batch grade download and upload across all student groups on the Manage Uploaded Grades page. No page reloads — uses background fetch requests.

**Target page:**
```
https://portal.giu-uni.de/GIUb/EXT/ManageUploadedGrades_m.aspx
```

**Two operating states:**

**State A — Dropdowns page (course + group + eval visible):**
- Toolbar injected with a custom evaluation method picker (selecting from it does not trigger page navigation)
- **▶ Batch Download** — iterates all groups, downloads a combined CSV with Name, Group, Grade columns
- **▶ Batch Upload** — load a CSV, then upload grades to every group in sequence
- Eval picker populates from the page's existing eval dropdown options

**State B — Grade table page (after group + eval selected):**
- **📄 Upload CSV** — fill current group's grade inputs from a CSV file
- **📥 Download CSV** — download current group's grades as CSV

**CSV format:**
```csv
Name,Group,Grade
(12345678) Ahmed Mohamed,INCS 406 - 4INF2 (Practical),85
(87654321) Sara Ali,INCS 406 - 4INF2 (Practical),90
```
Grades are matched by student ID `(XXXXXXXX)` prefix — safe against row reordering.

---

### 3. GIU Manage Uploaded Grades (`manageUploadedGrades.js`)

**Version:** 2.0 | **Author:** Mo.Elmaadawy

An earlier batch grade script that uses localStorage queuing and full page reloads to iterate groups. Kept for reference.

> **Note:** This script uses repeater-based row selectors (`tr[id^="MainContent_rptrNtt_stdRw_"]`) that do not match the actual page HTML. Use `uploadGradesGIU.js` instead.

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
4. Configure your **Day Off** in Settings — it applies from a chosen date forward
5. Add holidays, overrides, and compensation days as needed
6. Use **Export Settings** to back up your configuration

### Grade Upload Script

**Batch Download (get all grades):**
1. Navigate to the Manage Uploaded Grades page
2. Select your **course** and **group** from the dropdowns (page reloads to show eval options)
3. In the toolbar's eval picker, select the evaluation method — page stays put
4. Click **▶ Batch Download** — a combined CSV downloads when complete

**Batch Upload (push grades to all groups):**
1. Complete steps 1–3 above
2. Click **📄 Load CSV for Upload** and select your filled-in grades CSV
3. Click **▶ Batch Upload** — grades are saved group by group

**Single-group (State B):**
1. Select course → group → eval via the page dropdowns (navigates to grade table)
2. Use **📄 Upload CSV** to fill grades from file, or **📥 Download CSV** to export current group

---

## Requirements

- Tampermonkey v4.x or later
- Chromium-based browser or Firefox
- Active GIU staff portal session

---

## Authors

| Script | Authors |
|--------|---------|
| GIU Staff Enhanced Attendance | Mo.Elmaadawy |
| GIU Upload Grades | Ahmed Sherif, Mo.Elmaadawy |
| GIU Manage Uploaded Grades | Mo.Elmaadawy |
