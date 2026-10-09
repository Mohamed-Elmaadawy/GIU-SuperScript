// ==UserScript==
// @name        GIU Staff Enhanced Attendance
// @description Enhances attendance system with a full summary dashboard, settings panel, and analytics.
// @author      Mo.Elmaadawy
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAzFBMVEX////VlyYkHiAAAADTHyj36ereiIr8/vzIGSPPAAj//fziu4HTlRbnyp3x49HRHSTTkgzw8PD29vbl5eXV1NRjX2HWY2vUr2zMAADn1rfJjguzsrMfGRsaEBPltLX6+u/OmB67u7vIyMgyLC5sbGycnJypqKmLi4tYWFh9e3wWExXkoJ1HRUaUkpM3NjY+Pj4PAAe/AADIDxPYGiAnJicZGhn27df17eDXqE329uBVYF7AZ2jZjGvOWgTNlSzf0J7lw7PWozvqxcLZsl8WTjZKAAAHBElEQVR4nO2Ya3fbNhJAIWG92tJ2YwzApg6kTQDhQagkpXZlR/t03fz//7QDgo71jqQ0Pf2Ae45tipKlq8FgMAAhmUwmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMpnMqRTAENi4dXUV710xvB6979n+v3R39IcoMmGrdkyR2bgtLX/Rvfr5uzdvfvnlx7/i9fc3g8EAf27IltNtfOLuetR9A22CEWB84Cp4C2A5IbzBj3B4IRU+kEAuhCk/pXQyHibGE0rnIb4viv7tH39BkujdoONm+/9v75Jo9HcPgghFqONga/4gWWsJ8TUQTtHWU0W4v1RUVRMaJWcxoJNedkFtEn0TRb9bF73bEe0jWmC46qa7haLEVrBUfEoJr+YcP2WJomYmuL1MlFVJbjEtJee6XPaqi4OiuxF9FRVLjbacUBO4m7YOR712Tg8FKeNTnmFMXXGJp17SLoKzININYbrwDieHRG8+HMrRl4gGU8zQ15Z4oZSjllGhjawMCQAhDdW5qOWs86SvGQ6OdjQHRO+OiRJJFZhAqJe8aTl1FvNVEyorRjQV+Ju1/oKIihS9h5lYv8udRfRFooQ5dMRAKs4F4YIzgrNS8PgBmgkMB+Pne7I2xfNBHnrF+aLfgsLP0rwJB19ytqjWRMewCe20VFxJCUpiCYghBQwoaMIkJi4XcdY1Dd4W3VMkPkVA7ot3P/Dj4eF6cbaoMaSssGp6IanVikpVzLx6EAozlXmGOcyYMrXi+ELXclYHYpeYI6HAv5gmVO+xMIsuoGna/F6igYSpAVyLGJYjTVlB5g5w1s9bgaLQzHDSNwZLQ+APOgZLyHbOuSfgxxJFxa4Eo31tP5Ldl4h6MfOsFx0bA3VVKaKUWXIHQjqMd2MARTXFDwaKGVJVwhKlfdgvammfoUdWinPraBdRDFNwhA1jRPG9a7NUxOmifPBgjccSm0RFlEIzJ2CONcuHMBZ7Rcu0BtGDU36/6OALOTrCcVXUdemmqOBkaO0Dx2rH2pKVMKpC4UsojCnwS2HNLTym6NLwAKxuOFWcbTmweZpK433pe0z03fFZX2CHRJQgDNc6ERoPXkHQKk5vKTAo2oO0UDiMeeODxfmFGaAldjJEeWYavx1T0SbR+Z5gHxU91pR8C3TfJ1XHVor9ET0iyuMEwbKJ14wVHNJjJgReClGQQmsADgLXLR4H+YRlSiXRSbWdE18lGnDxEJ7ULnbJfMktvj1W/dpbUXmsnd41WtTChtrLUMaXfhE53iPK14BLRE0SbXGKSo1zOE6phruqIHyKVZ+3MVeXHLs2IHqmw7EoHREFM5x+RnyFaOmoUIIvcFNimCWytY63NjRQzhwTU+yjUZSYpfuyJ1Hj3RwFsxj3TBZfI1oRPw1RFNdMjcGtMSPn1Ri7vIa6z6JiX9XcQUzTrG/XXgym7+9jqHdEb06Y9aHGfZMj+NvQrnyzOW6YbM2At6oMOM8aG4deTYDsX4d26OvocL2OromOd0QfP4seqaPcBNsAMfG9BIulz+Pi7qrG8UrrWnvrucBB1HWMaH2KKKn6lWktT/qh3y/6cdDvmbY39ht1FAsSfo+Y9wBdlcI/8SYrGBSMxZoE2KlA9wp+0j5P0n42vb4awjyy3Cv6fpVCevfPrcp+ZsHHbfUo/Yy2x2Y/kESH64nS1SVRzfaJjq779ul+642+eYfv+/ap3LrP9ouS+37obw+LinKTf/37h03+83aT61O+Hav7LFWnib6M/erjQVFNt/j5x03+++HdBv876cxKpz3TpN5ccQ+Jkqe+I306KMrlFn/f4tf7LU47W+t751m9MfsOio6eb1Lr/HhI9CgX7JNfTYfd6NOhXlM9KEoen/uJ/7ReotZEQaUFOXW/sV/APeYI9/JYqsBz3NMzBd2k5xCnvThZXqUjnck4vNT9QtjYqe6N6Oh+kExvPt2/qI4+vh28RlSlL6yxo+O4UeYkbouJULxQTCmNs6E/k0nf6IyDKF52B47jybIKVsrG1G1X8cc7a338EuT7d32e3qze3t7fP12/XT0PXkV5atuAKx+PRyQHpwng1o4RAdxy3OVJZR0BJwFko/Q5h6UitAuKgz1ZdOeOqDmjdNF2zcqWKPL+enDXR/UuEk928erD81M8HxWNwxnkvONGWy8FY9ZK65RyMgSwTBN85J1srHLOSaf0WWeQQob5ek2ZGytF9w5XfXn5LDoixeP1qjfsFPFqdX17/9inQjxJF9jKYdQgralMq4LExZOnhMQWKh5oxzvnn5QCw3GyTdNYiW3k6zk+/JT47VU0HuY/3l9/Wq2eV6tPOP6PH7drIfZIsOYAB7rj4uIz8iNs5vzo4IM/HX9uu0wmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMplMJpPJHOP/Lb7en38r1wIAAAAASUVORK5CYII=
// @include     https://portal.giu-uni.de/*
// @namespace   Cyn0
// @version     3.2.14
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Staff%20Attendance%20Script.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Staff%20Attendance%20Script.js
// @run-at      document-idle
// @noframes
// ==/UserScript==

(function () {
    'use strict';

function waitFor(selector, cb, { root = document, timeout = 15000 } = {}) {
            const existing = root.querySelector(selector);
            if (existing) { cb(existing); return () => {}; }
            const obs = new MutationObserver(() => {
                const el = root.querySelector(selector);
                if (el) { obs.disconnect(); cb(el); }
            });
            obs.observe(root.documentElement || root, { childList: true, subtree: true });
            if (timeout) setTimeout(() => obs.disconnect(), timeout);
            return () => obs.disconnect();
        }

function escapeHtml(str) {
            return String(str == null ? '' : str)
                .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }

function injectStyle(id, css) {
            let el = document.getElementById(id);
            if (!el) {
                el = document.createElement('style');
                el.id = id;
                (document.head || document.documentElement).appendChild(el);
            }
            el.textContent = css;
            return el;
        }

function warn(feature, ...args) { console.warn(`[GIU-SS:${feature}]`, ...args); }

function portalUrl(path) { return location.origin + path; }

    const S = { waitFor, escapeHtml, injectStyle, warn, portalUrl };

// The styled timesheet table, shared by Berlin's full-report view (a Cairo
// grid imported into the page) and Cairo's own report page (the portal's
// native grid, styled in place). Display only: cell text is never changed,
// since the attendance engine reads it.
//
// styleReportGrid(grid, { title }) runs once per grid: it marks the grid
// (REPORT_GRID_STYLED_ATTR) and returns early on every later call, so callers
// that re-render repeatedly (the engine's renderEnhancedUI) can call it freely.
// The grid is expected inside a REPORT_GRID_WRAP_CLASS element (the styles are
// scoped to it); wrapReportGrid(grid) provides one for a grid already on the page.

const REPORT_GRID_WRAP_CLASS = 'gius-berlin-grid';
const REPORT_GRID_STYLED_ATTR = 'data-gius-grid-styled';

// Presentational attributes (inline colours, cellpadding, ...) dropped so the
// grid's own styles apply.
const GRID_PRESENTATION_ATTRS = /^(style|bgcolor|bordercolor|border|cellpadding|cellspacing|rules|frame|width|height|align|valign|nowrap)$/i;

function gridCellText(c) {
    return String(c.textContent || '').replace(/\s+/g, ' ').trim();
}

function gridHeaderIndex(rows) {
    return rows.findIndex(r => Array.from(r.cells).some(c => /^(day|date)$/i.test(gridCellText(c))));
}

// Cairo's GIU grid carries a few columns the view has no use for: the raw
// GIU_ID, and the InOutForm/LeaveForm links. Matched case-insensitively,
// ignoring spaces/underscores, so "In Out Form" or "leave_form" also match.
// Never matches the GUC canonical grid's own headers
// (Serial/Day/FirstIn/LastOut/Duration/Sessions/Action).
const DROPPED_HEADER_KEYS = new Set(['giuid', 'inoutform', 'leaveform']);

function normalizeHeaderKey(text) {
    return String(text || '').toLowerCase().replace(/[\s_]+/g, '');
}

// Drops the matched header cell and the same-index cell from every ordinary
// row. A row whose cell count doesn't match the header (Cairo's pager rows,
// which carry a single colspan'd cell) is left alone, except its colspan is
// reduced by the number of columns actually dropped — so it doesn't overshoot
// the grid's new width — floored at 1.
function dropUnwantedColumns(grid) {
    const rows = Array.from(grid.rows);
    if (!rows.length) return;
    const headIndex = gridHeaderIndex(rows);
    if (headIndex < 0) return;
    const headerCells = Array.from(rows[headIndex].cells);
    const dropIndexes = [];
    headerCells.forEach((c, i) => { if (DROPPED_HEADER_KEYS.has(normalizeHeaderKey(gridCellText(c)))) dropIndexes.push(i); });
    if (!dropIndexes.length) return;
    rows.forEach(row => {
        const cells = Array.from(row.cells);
        if (cells.length === headerCells.length) {
            dropIndexes.slice().reverse().forEach(i => cells[i] && cells[i].remove());
        } else if (cells.length === 1) {
            const span = parseInt(cells[0].getAttribute('colspan') || '1', 10);
            if (span > 1) cells[0].setAttribute('colspan', String(Math.max(1, span - dropIndexes.length)));
        }
    });
}

// Newest day first: reverses the grid's own data rows in place. The header
// (found the same way decorateReportGrid finds it) stays first; any pager
// row — wherever Cairo puts it, since decorateReportGrid marks anything
// outside the header/data shape as a pager — keeps its original position,
// so a pager already at the bottom stays at the bottom.
// Display-only: this reorders the grid's DOM, which is also what the
// engine's getAttendanceRows() scans (renderEnhancedUI). That's safe
// because the only place those rows are consumed is
// groupRowsByPayrollPeriod(), which re-sorts every row by date itself (both
// the payroll-period order and each period's own row order) — so this
// function cannot change any engine computation, only the display order.
// Must run after decorateReportGrid, which is what assigns the
// gius-berlin-grid-row class this relies on.
function reverseDataRows(grid) {
    const dataRows = Array.from(grid.rows).filter(r => r.classList.contains('gius-berlin-grid-row'));
    if (dataRows.length < 2) return;
    const parent = dataRows[0].parentNode;
    if (!dataRows.every(r => r.parentNode === parent)) return; // unexpected structure: leave order alone
    const anchor = dataRows[dataRows.length - 1].nextSibling;
    dataRows.slice().reverse().forEach(r => parent.insertBefore(r, anchor));
}

// Header text → the display kind of its column (display only: cell text is
// left exactly as it is, since the engine reads it).
function gridColumnKind(headerText) {
    const h = headerText.toLowerCase().replace(/\s+/g, '');
    if (h === 'serial' || h === '#') return 'serial';
    if (h === 'sessions') return 'sessions';
    // Berlin only: the Cairo→Berlin offset applied to the row (src/berlin/timezone.js).
    if (h === 'timediff') return 'tzdiff';
    if (h.includes('duration')) return 'num';
    if (/^(day|date|firstin|lastout|in|out)$/.test(h)) return 'time';
    if (h.includes('action') || h.includes('leave') || h.includes('form')) return 'action';
    return '';
}

// Marks the current first/last rows (for the rounded corners) — called after
// reverseDataRows, so the corners land on the rows that are actually first
// and last once the newest-day-first reorder has happened, not on whichever
// rows held those spots beforehand.
function markGridEnds(grid) {
    const rows = grid.rows;
    if (!rows.length) return;
    rows[0].classList.add('gius-berlin-grid-first');
    rows[rows.length - 1].classList.add('gius-berlin-grid-last');
}

// Marks the header row (a <td> row on Cairo's own grid), pager rows, data
// rows and each column's kind, and wraps non-empty action cells in a pill.
// (First/last-row marking is markGridEnds's job — see there for why.)
function decorateReportGrid(grid) {
    const rows = Array.from(grid.rows);
    if (!rows.length) return;
    const headIndex = gridHeaderIndex(rows);
    if (headIndex < 0) return;
    const kinds = Array.from(rows[headIndex].cells).map(c => gridColumnKind(gridCellText(c)));
    rows.forEach((r, i) => {
        const cells = Array.from(r.cells);
        if (i === headIndex) {
            r.classList.add('gius-berlin-grid-head');
            // Header cells on Cairo's grid are sort links (__doPostBack): a
            // click reloads the page and the report is gone. Keep the text,
            // drop the link, so headers read as plain header labels.
            r.querySelectorAll('a').forEach(a => {
                const label = document.createElement('span');
                label.textContent = a.textContent;
                a.replaceWith(label);
            });
        }
        // Cairo's pager rows ("<Previous Next>"): the report fits one page,
        // so drop them rather than show a stub row.
        else if (i < headIndex || cells.length !== kinds.length) { r.remove(); return; }
        else r.classList.add('gius-berlin-grid-row');
        cells.forEach((c, j) => {
            if (kinds[j]) c.classList.add('gius-berlin-col-' + kinds[j]);
            if (i !== headIndex && kinds[j] === 'action' && gridCellText(c)) {
                const pill = document.createElement('span');
                pill.className = 'gius-berlin-action';
                while (c.firstChild) pill.appendChild(c.firstChild);
                c.appendChild(pill);
            }
        });
    });
}

// Once per grid: presentational attributes out, unwanted columns and pager
// rows out, header/data/column marking, newest day first, rounded ends, and
// `title` as a <caption>. Links, on* handlers and form controls are left
// alone (on Cairo's own page they work; Berlin neutralises its imported copy
// itself before calling this).
function styleReportGrid(grid, opts) {
    if (!grid || grid.hasAttribute(REPORT_GRID_STYLED_ATTR)) return grid;
    grid.setAttribute(REPORT_GRID_STYLED_ATTR, '');
    [grid, ...grid.querySelectorAll('*')].forEach(el => {
        Array.from(el.attributes).forEach(attr => {
            if (GRID_PRESENTATION_ATTRS.test(attr.name)) el.removeAttribute(attr.name);
        });
    });
    dropUnwantedColumns(grid);
    decorateReportGrid(grid);
    reverseDataRows(grid);
    markGridEnds(grid);
    const title = opts && opts.title;
    if (title) {
        const caption = grid.createCaption();
        caption.className = 'gius-berlin-grid-title';
        // The text is its own sticky box: it stays in view while a narrow
        // screen scrolls the grid sideways.
        const text = document.createElement('span');
        text.textContent = title;
        caption.appendChild(text);
    }
    return grid;
}

// For a grid already on the page: puts it inside a wrapper (horizontal scroll
// on narrow screens, and the scope of the styles), unless it already is.
// Returns the wrapper.
function wrapReportGrid(grid) {
    const parent = grid.parentNode;
    if (parent && parent.classList && parent.classList.contains(REPORT_GRID_WRAP_CLASS)) return parent;
    const wrap = document.createElement('div');
    wrap.className = REPORT_GRID_WRAP_CLASS;
    parent.insertBefore(wrap, grid);
    wrap.appendChild(grid);
    return wrap;
}

// Light: the report's own table look. Dark (html.gius-dark): GIU Theme's
// --gp-* tokens when present, with the Home widget's Catppuccin colours as the
// fallback. Cell colours are !important so GIU Theme's generic table rules
// (which are !important too) don't flatten the header and zebra rows on Cairo.
function injectReportGridStyles(S) {
    S.injectStyle('gius-report-grid-style', `
        .gius-berlin-grid { max-width: 1500px; margin: 0 auto; overflow-x: auto; }
        .gius-berlin-grid > #giu-attendance-container { position: sticky; left: 0; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport {
            width: 100%; margin: 0 0 8px; border-collapse: separate; border-spacing: 0;
            background: #fff; border: 1px solid #d1d5db; border-radius: 6px;
            font-family: inherit; font-size: 13px; line-height: 1.35; color: #111827;
        }
        .gius-berlin-grid caption.gius-berlin-grid-title {
            caption-side: top; padding: 0 0 12px; text-align: left;
            font-size: 16px; font-weight: 700; color: #1f2937;
        }
        .gius-berlin-grid caption.gius-berlin-grid-title > span { position: sticky; left: 0; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport :is(th, td) {
            padding: 8px 10px; border: 0; border-bottom: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb;
            background: #fff !important; color: #111827 !important; border-color: #e5e7eb !important;
            text-align: left; vertical-align: middle;
        }
        .gius-berlin-grid table#MainContent_DG_SwiftReport tr > :last-child { border-right: 0; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport tr.gius-berlin-grid-last > * { border-bottom: 0; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport tr.gius-berlin-grid-row:nth-child(even) > td { background: #f9fafb !important; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport tr.gius-berlin-grid-row:hover > td { background: #fff8e1 !important; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport :is(thead th, tr.gius-berlin-grid-head > *) {
            background: #1f2937 !important; color: #fff !important; font-weight: 700; white-space: nowrap; border-color: #374151 !important;
        }
        .gius-berlin-grid table#MainContent_DG_SwiftReport tr.gius-berlin-grid-first > :first-child { border-top-left-radius: 5px; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport tr.gius-berlin-grid-first > :last-child { border-top-right-radius: 5px; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport .gius-berlin-col-time { white-space: nowrap; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport :is(.gius-berlin-col-num, .gius-berlin-col-serial, .gius-berlin-col-sessions, .gius-berlin-col-tzdiff) {
            white-space: nowrap; font-variant-numeric: tabular-nums;
        }
        /* Serial, Sessions and Time diff stay as narrow as their content; the rest share the width. */
        .gius-berlin-grid table#MainContent_DG_SwiftReport :is(th, td):is(.gius-berlin-col-serial, .gius-berlin-col-sessions, .gius-berlin-col-tzdiff) { width: 1%; }
        .gius-berlin-grid table#MainContent_DG_SwiftReport tr.gius-berlin-grid-row > td.gius-berlin-col-serial { color: #6b7280 !important; }
        .gius-berlin-grid .gius-berlin-action {
            display: inline-block; padding: 3px 9px; border: 1px solid #d1d5db; border-radius: 999px;
            background: #f3f4f6; color: #374151; font-size: 11px; font-weight: 700; line-height: 1.3; white-space: nowrap;
        }

        html.gius-dark .gius-berlin-grid table#MainContent_DG_SwiftReport {
            background: var(--gp-card, #1e1e2e); border-color: var(--gp-border, #313244); color: var(--gp-text, #cdd6f4);
        }
        html.gius-dark .gius-berlin-grid caption.gius-berlin-grid-title { color: var(--gp-text, #cdd6f4); }
        html.gius-dark .gius-berlin-grid table#MainContent_DG_SwiftReport :is(th, td) {
            background: var(--gp-card, #1e1e2e) !important; border-color: var(--gp-border, #313244) !important; color: var(--gp-text, #cdd6f4) !important;
        }
        html.gius-dark .gius-berlin-grid table#MainContent_DG_SwiftReport tr.gius-berlin-grid-row:nth-child(even) > td { background: var(--gp-surface, #181825) !important; }
        html.gius-dark .gius-berlin-grid table#MainContent_DG_SwiftReport tr.gius-berlin-grid-row:hover > td { background: #2a2410 !important; }
        html.gius-dark .gius-berlin-grid table#MainContent_DG_SwiftReport :is(thead th, tr.gius-berlin-grid-head > *) {
            background: var(--gp-deep, #11111b) !important; color: var(--gp-text, #cdd6f4) !important; border-color: var(--gp-border, #313244) !important;
        }
        html.gius-dark .gius-berlin-grid table#MainContent_DG_SwiftReport tr.gius-berlin-grid-row > td.gius-berlin-col-serial { color: var(--gp-muted, #9399b2) !important; }
        html.gius-dark .gius-berlin-grid .gius-berlin-action {
            background: var(--gp-surface, #313244); border-color: var(--gp-border, #45475a); color: var(--gp-text, #cdd6f4);
        }
    `);
}

// ═══════════════════════════════════════════════════════════════════════════
//  Staff Attendance — first-run setup wizard.
//  A short step dialog asking what the attendance engine cannot know by
//  itself (day off, a recent day-off change, annual leave, the Berlin start
//  date). It never touches storage: the engine (staffAttendance) passes a
//  small settings API — see setupApi there. Nothing is saved until Finish,
//  except an import, which the engine applies at once. Top-level function
//  (inlined into the bundles and standalones); works in page context and in
//  the Tampermonkey sandbox (plain DOM only).
//
//  api: { isBerlin, today(), dayOptions() -> [{code, name}],
//         previousDayOptions() -> [{code, name}], dayName(code),
//         current(), berlinStartError(ymd), apply(values), importJson(text),
//         exportJson(values), markDone(), markSkipped(), onApplied(),
//         onClosed(reason), isDayOffConfigured(), focusFallback() }
//  values: { dayOffCode, previous: {code, from}|null, balance, accrualRate,
//            berlinStart }
// ═══════════════════════════════════════════════════════════════════════════
function openAttendanceSetup(S, api, opts) {
    const prefill = (opts && opts.prefill) || null;
    const esc = S.escapeHtml;
    const base = api.current();
    const days = api.dayOptions();
    const prevDays = api.previousDayOptions();   // on Berlin also Sunday (a Cairo-era day off)
    const YMD = /^\d{4}-\d{2}-\d{2}$/;

    S.injectStyle('gius-setup-style', `
        .gius-setup{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;
            z-index:2147483645;background:rgba(15,23,42,.45);padding:20px;font-family:inherit;}
        .gius-setup *{box-sizing:border-box;}
        .gius-setup [hidden]{display:none !important;}
        .gius-setup-change{display:grid;gap:10px;}
        .gius-setup-sheet{width:100%;max-width:460px;max-height:88vh;overflow:auto;background:#fff;color:#1e1e2e;
            border-radius:14px;border-left:4px solid #ffc107;padding:18px 20px;box-shadow:0 18px 50px rgba(0,0,0,.35);}
        .gius-setup-step{font-size:11px;font-weight:800;letter-spacing:.5px;text-transform:uppercase;color:#6b7280;margin-bottom:4px;}
        .gius-setup-title{font-weight:800;font-size:16px;margin-bottom:4px;}
        .gius-setup-sub{font-size:12.5px;color:#6b7280;margin-bottom:14px;line-height:1.45;}
        .gius-setup-body{display:grid;gap:10px;font-size:13px;line-height:1.45;}
        .gius-setup-field{display:grid;gap:4px;font-size:12.5px;font-weight:600;color:#374151;}
        .gius-setup-input{height:34px;padding:0 10px;border:1px solid #9ca3af;border-radius:6px;font:inherit;
            font-size:13px;font-weight:400;background:#fff;color:#1f2937;width:100%;}
        textarea.gius-setup-input{height:auto;min-height:96px;padding:8px 10px;resize:vertical;
            font-family:Consolas,Monaco,monospace;font-size:12px;}
        .gius-setup-pills{display:flex;flex-wrap:wrap;gap:8px;}
        .gius-setup-pill{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border:1px solid #cbd5e1;
            border-radius:999px;cursor:pointer;font-weight:700;font-size:12.5px;background:#f8fafc;color:#334155;}
        .gius-setup-pill input{margin:0;accent-color:#d97706;}
        .gius-setup-pill.on{background:#fff8e1;border-color:#d97706;color:#8a6500;}
        .gius-setup-hint{font-size:12px;font-weight:400;color:#6b7280;line-height:1.4;}
        .gius-setup-hint.warn{color:#8a6500;}
        .gius-setup-msg{display:none;margin-top:12px;padding:8px 10px;border-radius:8px;border-left:3px solid;
            font-size:12.5px;font-weight:600;}
        .gius-setup-msg.show{display:block;}
        .gius-setup-error{background:#fee2e2;border-left-color:#e11d48;color:#991b1b;}
        .gius-setup-ok{background:#dcfce7;border-left-color:#16a34a;color:#166534;}
        .gius-setup-summary{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;margin:0;background:#f8f9fa;
            border:1px solid #e9ecef;border-radius:10px;padding:10px 12px;font-size:12.5px;}
        .gius-setup-summary dt{font-weight:700;color:#6b7280;}
        .gius-setup-summary dd{margin:0;font-weight:700;}
        .gius-setup-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;}
        .gius-setup-actions{display:flex;align-items:center;gap:8px;margin-top:16px;flex-wrap:wrap;}
        .gius-setup-spacer{flex:1 1 auto;}
        .gius-setup .giu-settings-action-btn{height:32px;padding:0 10px;border:1px solid #64748b;background:#f8fafc;
            color:#334155;border-radius:6px;font-family:inherit;font-size:12px;font-weight:700;cursor:pointer;}
        .gius-setup .giu-settings-action-btn:hover{background:#e2e8f0;}
        .gius-setup .giu-add-holiday-btn{height:32px;padding:0 12px;border:1px solid #d97706;background:#ffc107;
            color:#111827;border-radius:6px;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;
            transition:all .2s ease;}
        .gius-setup .giu-add-holiday-btn:hover{background:#f59e0b;transform:translateY(-1px);
            box-shadow:0 3px 10px rgba(255,193,7,.4);}
        .gius-setup .gius-setup-skip{border-color:transparent;background:transparent;text-decoration:underline;}
        html.gius-dark .gius-setup-sheet{background:#1e1e2e;color:#cdd6f4;border-left-color:#f9e2af;box-shadow:0 18px 50px rgba(0,0,0,.6);}
        html.gius-dark .gius-setup-step,html.gius-dark .gius-setup-sub,html.gius-dark .gius-setup-hint{color:#9399b2;}
        html.gius-dark .gius-setup-field{color:#cdd6f4;}
        html.gius-dark .gius-setup-input{background:#181825;border-color:#45475a;color:#cdd6f4;color-scheme:dark;}
        html.gius-dark .gius-setup-pill{background:#181825;border-color:#313244;color:#cdd6f4;}
        html.gius-dark .gius-setup-pill.on{background:#2a2410;border-color:#f9e2af;color:#f9e2af;}
        html.gius-dark .gius-setup-hint.warn{color:#f9e2af;}
        html.gius-dark .gius-setup-error{background:#3a1414;border-left-color:#f38ba8;color:#f38ba8;}
        html.gius-dark .gius-setup-ok{background:#14351f;border-left-color:#a6e3a1;color:#a6e3a1;}
        html.gius-dark .gius-setup-summary{background:#181825;border-color:#313244;}
        html.gius-dark .gius-setup-summary dt{color:#9399b2;}
        html.gius-dark .gius-setup .giu-settings-action-btn{background:#181825;border-color:#45475a;color:#cdd6f4;}
        html.gius-dark .gius-setup .giu-settings-action-btn:hover{background:#313244;}
        html.gius-dark .gius-setup .gius-setup-skip{background:transparent;border-color:transparent;}
        html.gius-dark .gius-setup .giu-add-holiday-btn{background:#f9e2af;border-color:#f9e2af;color:#1e1e2e;}
        html.gius-dark .gius-setup .giu-add-holiday-btn:hover{background:#f5d38a;}`);

    // ── Answers (strings, as typed); nothing is written until Finish ──
    function fromValues(v, keepDayOff) {
        return {
            berlinStart: v.berlinStart || '',
            dayOffCode: keepDayOff ? (v.dayOffCode || '') : '',
            changed: keepDayOff ? (v.previous ? 'yes' : 'no') : '',
            prevCode: keepDayOff && v.previous ? v.previous.code : '',
            changeFrom: keepDayOff && v.previous ? v.previous.from : '',
            balance: keepDayOff && Number.isFinite(v.balance) ? String(v.balance) : '',
            accrual: String(v.accrualRate),
            // Date text typed but not (yet) a date, per field; null = none.
            // The yyyy-mm-dd fields above keep the last real date meanwhile.
            badDate: { berlin: null, from: null },
        };
    }
    // First run: nothing is guessed — only the accrual rate (and a Berlin start
    // date set by hand earlier) is pre-filled. "Run setup again": everything.
    const state = Object.assign({ choice: 'fresh', imported: false, importText: '' },
        prefill ? fromValues(prefill, true) : fromValues(base, false));

    const steps = ['welcome'].concat(api.isBerlin ? ['berlin'] : [], ['dayoff', 'change', 'balance', 'accrual', 'done']);
    let index = 0;
    let dirty = false;          // anything entered by the user (Escape then asks)
    let importedOnce = false;   // an import already saved settings
    const opener = document.activeElement;   // focus goes back here on close

    const layer = document.createElement('div');
    layer.id = 'gius-setup';
    layer.className = 'gius-setup';
    layer.innerHTML = `<div class="gius-setup-sheet" role="dialog" aria-modal="true" aria-labelledby="gius-setup-title">
        <div class="gius-setup-step"></div>
        <div class="gius-setup-title" id="gius-setup-title"></div>
        <div class="gius-setup-sub"></div>
        <div class="gius-setup-body"></div>
        <div class="gius-setup-msg" role="alert"></div>
        <div class="gius-setup-actions">
            <button type="button" class="giu-settings-action-btn gius-setup-skip gius-btn">Skip setup</button>
            <span class="gius-setup-spacer"></span>
            <button type="button" class="giu-settings-action-btn gius-setup-back gius-btn">Back</button>
            <button type="button" class="giu-add-holiday-btn gius-setup-next gius-btn">Next</button>
        </div></div>`;
    const sheet = layer.querySelector('.gius-setup-sheet');
    const $ = sel => layer.querySelector(sel);
    const body = $('.gius-setup-body');
    const msg = $('.gius-setup-msg');

    function showMsg(text, ok) {
        msg.textContent = text || '';
        msg.className = 'gius-setup-msg' + (text ? ' show ' + (ok ? 'gius-setup-ok' : 'gius-setup-error') : '');
    }

    function dayName(code) { return api.dayName(code) || code; }

    function twoMonthsAgo() {
        const d = new Date(api.today() + 'T00:00:00Z');
        d.setUTCMonth(d.getUTCMonth() - 2);
        return d.toISOString().slice(0, 10);
    }

    // Mounts the dd/mm/yyyy control in the step's placeholder span. `key` is
    // the state field (yyyy-mm-dd) and `bad` its badDate slot.
    function mountDate(id, key, bad, onChange) {
        const slot = $(`[data-gius-date="${id}"]`);
        const shown = state.badDate[bad] != null ? state.badDate[bad] : state[key];
        const field = createGiusDateField(S, {
            id, value: shown, max: api.today(), inputClass: 'gius-setup-input',
            onInput: text => {
                const ymd = giusDateParse(text);
                if (ymd === null) state.badDate[bad] = text;
                else { state.badDate[bad] = null; state[key] = ymd; }
                if (onChange) onChange();
            },
        });
        slot.replaceWith(field.element);
        return field;
    }

    function values() {
        return {
            dayOffCode: state.dayOffCode,
            previous: state.changed === 'yes' ? { code: state.prevCode, from: state.changeFrom } : null,
            balance: Number(state.balance),
            accrualRate: Number(state.accrual),
            berlinStart: state.berlinStart,
        };
    }

    // ── Step views ──
    function radio(name, value, label, checked) {
        return `<label class="gius-setup-pill${checked ? ' on' : ''}"><input type="radio" name="${name}" value="${esc(value)}"${checked ? ' checked' : ''}> ${esc(label)}</label>`;
    }

    const VIEWS = {
        welcome: {
            title: 'Set up Staff Attendance',
            sub: 'A few quick questions so your attendance is counted correctly. You can change everything later in Attendance Settings.',
            html: () => `<div class="gius-setup-field">Do you have a settings file from before?
                    <div class="gius-setup-pills">${radio('gius-setup-choice', 'fresh', 'No, set up now', state.choice === 'fresh')}${radio('gius-setup-choice', 'import', 'Yes, I have a file', state.choice === 'import')}</div></div>
                <div class="gius-setup-import"${state.choice === 'import' ? '' : ' hidden'}>
                    <div class="gius-setup-field">Choose the .json file
                        <input type="file" class="gius-setup-input" id="gius-setup-file" accept=".json,application/json,text/json"></div>
                    <div class="gius-setup-field" style="margin-top:8px;">or paste its contents
                        <textarea class="gius-setup-input" id="gius-setup-paste" spellcheck="false">${esc(state.importText)}</textarea></div>
                    <div class="gius-setup-row" style="margin-top:8px;"><button type="button" class="giu-add-holiday-btn gius-btn" id="gius-setup-import">Import</button></div>
                </div>`,
            bind() {
                layer.querySelectorAll('input[name="gius-setup-choice"]').forEach(r => r.addEventListener('change', () => {
                    state.choice = r.value;
                    render();
                }));
                const file = $('#gius-setup-file');
                const paste = $('#gius-setup-paste');
                if (file) file.addEventListener('change', () => {
                    const f = file.files && file.files[0];
                    if (!f) return;
                    const reader = new FileReader();
                    reader.onload = () => { state.importText = String(reader.result || ''); paste.value = state.importText; showMsg(''); };
                    reader.onerror = () => showMsg('Could not read that file.');
                    reader.readAsText(f);
                });
                if (paste) paste.addEventListener('input', () => { state.importText = paste.value; });
                const btn = $('#gius-setup-import');
                if (btn) btn.addEventListener('click', doImport);
            },
            validate: () => state.choice === 'import' && !state.imported
                ? 'Import your settings file first, or choose "No, set up now".' : '',
        },
        berlin: {
            title: 'When did you start at the Berlin branch?',
            sub: 'Days before this date follow the Cairo weekend (Friday off). Leave it empty if you have always worked at the Berlin branch.',
            html: () => `<label class="gius-setup-field">Started at the Berlin branch on
                <span data-gius-date="gius-setup-berlin"></span></label>`,
            bind() {
                mountDate('gius-setup-berlin', 'berlinStart', 'berlin');
            },
            validate: () => state.badDate.berlin != null ? GIUS_DATE_FORMAT_ERROR : api.berlinStartError(state.berlinStart),
        },
        dayoff: {
            title: 'Which day is your weekly day off?',
            sub: 'Your second day off each week, besides the branch weekend.',
            html: () => `<div class="gius-setup-pills" role="radiogroup" aria-label="Day off">${days.map(d => radio('gius-setup-day', d.code, d.name, state.dayOffCode === d.code)).join('')}</div>`,
            bind() {
                layer.querySelectorAll('input[name="gius-setup-day"]').forEach(r => r.addEventListener('change', () => {
                    state.dayOffCode = r.value;
                    if (state.prevCode === r.value) state.prevCode = '';
                    render();
                }));
            },
            validate: () => days.some(d => d.code === state.dayOffCode) ? '' : 'Choose your day off to continue.',
        },
        change: {
            title: 'Did your day off change in the last 2 months?',
            sub: 'If it did, days before the change are counted with your previous day off.',
            html: () => {
                const others = prevDays.filter(d => d.code !== state.dayOffCode);
                const old = state.changeFrom && state.changeFrom < twoMonthsAgo();
                return `<div class="gius-setup-pills">${radio('gius-setup-changed', 'no', 'No', state.changed === 'no')}${radio('gius-setup-changed', 'yes', 'Yes', state.changed === 'yes')}</div>
                    <div class="gius-setup-change"${state.changed === 'yes' ? '' : ' hidden'}>
                        <label class="gius-setup-field">My previous day off was
                            <select class="gius-setup-input" id="gius-setup-prev"><option value="">— choose —</option>${others.map(d => `<option value="${esc(d.code)}"${state.prevCode === d.code ? ' selected' : ''}>${esc(d.name)}</option>`).join('')}</select></label>
                        <label class="gius-setup-field">${esc(dayName(state.dayOffCode))} became my day off on
                            <span data-gius-date="gius-setup-from"></span>
                            <span class="gius-setup-hint warn" id="gius-setup-from-hint"${old ? '' : ' hidden'}>That is more than 2 months ago. Older records are not kept, so you could also answer No.</span></label>
                    </div>`;
            },
            bind() {
                layer.querySelectorAll('input[name="gius-setup-changed"]').forEach(r => r.addEventListener('change', () => {
                    state.changed = r.value;
                    render();
                }));
                const prev = $('#gius-setup-prev');
                const hint = $('#gius-setup-from-hint');
                prev.addEventListener('change', () => { state.prevCode = prev.value; });
                mountDate('gius-setup-from', 'changeFrom', 'from', () => {
                    hint.hidden = !(state.badDate.from == null && YMD.test(state.changeFrom) && state.changeFrom < twoMonthsAgo());
                });
            },
            validate: () => {
                if (state.changed !== 'yes' && state.changed !== 'no') return 'Choose Yes or No.';
                if (state.changed === 'no') return '';
                if (!state.prevCode) return 'Choose your previous day off.';
                if (state.prevCode === state.dayOffCode) return 'Your previous day off must be different from your current one.';
                if (state.badDate.from != null) return GIUS_DATE_FORMAT_ERROR;
                if (!YMD.test(state.changeFrom)) return 'Enter the date your current day off started.';
                if (state.changeFrom > api.today()) return "That date is in the future — enter the day the change started.";
                return '';
            },
        },
        balance: {
            title: 'How many annual leave days do you have left?',
            sub: 'Your remaining balance as of today. Half days are allowed.',
            html: () => `<label class="gius-setup-field">Remaining annual leave (days)
                <input type="number" class="gius-setup-input" id="gius-setup-balance" min="0" step="0.5" inputmode="decimal" value="${esc(state.balance)}" placeholder="e.g. 12.5">
                <span class="gius-setup-hint">Not sure? Enter 0 and correct it later in Attendance Settings.</span></label>`,
            bind() {
                const input = $('#gius-setup-balance');
                input.addEventListener('input', () => { state.balance = input.value; });
            },
            validate: () => {
                const raw = String(state.balance).trim();
                const n = Number(raw);
                if (raw === '' || !Number.isFinite(n) || n < 0) return 'Enter your remaining annual leave in days (0 or more).';
                if (Math.round(n * 2) !== n * 2) return 'Use whole or half days (for example 12 or 12.5).';
                return '';
            },
        },
        accrual: {
            title: 'How many leave days do you gain each month?',
            sub: 'Added to your annual leave at the start of every payroll month. Keep the default if you are not sure.',
            html: () => `<label class="gius-setup-field">Monthly accrual (days per month)
                <input type="number" class="gius-setup-input" id="gius-setup-accrual" min="0" step="0.25" inputmode="decimal" value="${esc(state.accrual)}"></label>`,
            bind() {
                const input = $('#gius-setup-accrual');
                input.addEventListener('input', () => { state.accrual = input.value; });
            },
            validate: () => {
                const raw = String(state.accrual).trim();
                const n = Number(raw);
                return raw === '' || !Number.isFinite(n) || n < 0 ? 'Enter the days you gain each month (0 or more).' : '';
            },
        },
        done: {
            title: 'All set',
            sub: 'Save a backup of your settings — you can import it later on another computer or browser.',
            html: () => {
                const v = state.imported ? api.current() : values();
                const rows = [];
                if (state.imported) rows.push(['Settings', 'Imported from your file']);
                if (api.isBerlin) rows.push(['Berlin branch since', v.berlinStart ? giusDateFormat(v.berlinStart) : 'Always']);
                rows.push(['Day off', v.dayOffCode ? dayName(v.dayOffCode) : 'Not set']);
                if (v.previous) rows.push(['Before ' + giusDateFormat(v.previous.from), dayName(v.previous.code)]);
                rows.push(['Annual leave left', String(v.balance) + ' day(s)']);
                rows.push(['Monthly accrual', String(v.accrualRate) + ' day(s)']);
                return `<dl class="gius-setup-summary">${rows.map(r => `<dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd>`).join('')}</dl>
                    <div class="gius-setup-row">
                        <button type="button" class="giu-settings-action-btn gius-btn" id="gius-setup-download">Download settings (.json)</button>
                        <button type="button" class="giu-settings-action-btn gius-btn" id="gius-setup-copy">Copy</button>
                    </div>`;
            },
            bind() {
                $('#gius-setup-download').addEventListener('click', download);
                $('#gius-setup-copy').addEventListener('click', copy);
            },
            validate: () => '',
        },
    };

    function render() {
        const id = steps[index];
        const view = VIEWS[id];
        sheet.setAttribute('data-step', id);
        $('.gius-setup-step').textContent = `Step ${index + 1} of ${steps.length}`;
        $('.gius-setup-title').textContent = view.title;
        $('.gius-setup-sub').textContent = view.sub;
        body.innerHTML = view.html();
        view.bind();
        showMsg('');
        $('.gius-setup-back').hidden = index === 0;
        $('.gius-setup-next').textContent = id === 'done' ? 'Finish' : 'Next';
        const first = body.querySelector('input:not([type="radio"]):not([type="file"]):not([hidden]):not([tabindex="-1"]), select');
        (first && first.offsetParent !== null ? first : $('.gius-setup-next')).focus();
    }

    function go(to) {
        index = Math.max(0, Math.min(steps.length - 1, to));
        render();
    }

    // ── Import / export ──
    function doImport() {
        const text = String(state.importText || '').trim();
        if (!text) { showMsg('Choose your settings file or paste its contents first.'); return; }
        const res = api.importJson(text);
        if (!res.ok) { showMsg(res.error || 'Import failed.'); return; }
        // An import is saved at once: re-render now; later steps start from it.
        importedOnce = true;
        api.onApplied();
        const report = res.report || {};
        const rejected = report.rejected || 0;
        const skipped = rejected
            ? ' ' + rejected + (rejected === 1 ? ' item' : ' items') + ' skipped'
                + (report.notes && report.notes.length ? ' (' + report.notes.join(' ') + ')' : '') + '.'
            : '';
        if (!api.isDayOffConfigured()) {
            // Nothing to finish without a day off: carry on from the day-off step
            // (Finish then saves the answers, pre-filled from the import).
            state.imported = false;
            Object.assign(state, fromValues(api.current(), true), { dayOffCode: '', changed: '', prevCode: '', changeFrom: '' });
            go(steps.indexOf('dayoff'));
            showMsg('Your settings were imported, but the file has no day off — choose it below.' + skipped, true);
            return;
        }
        api.markDone();
        state.imported = true;
        Object.assign(state, fromValues(api.current(), true));
        go(steps.indexOf('done'));
        showMsg('Your settings were imported.' + skipped, true);
    }

    function exportText() {
        return api.exportJson(state.imported ? null : values());
    }

    function download() {
        try {
            const url = URL.createObjectURL(new Blob([exportText()], { type: 'application/json' }));
            const a = document.createElement('a');
            a.href = url;
            a.download = 'giu-attendance-settings.json';
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            showMsg('Settings file downloaded.', true);
        } catch {
            showMsg('The download was blocked — use Copy instead.');
        }
    }

    async function copy() {
        const text = exportText();
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                showMsg('Settings copied — paste them into a file to keep.', true);
                return;
            }
        } catch { /* fall back below */ }
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.cssText = 'position:fixed;top:-1000px;left:0;opacity:0;';
        sheet.appendChild(ta);
        ta.select();
        let ok = false;
        try { ok = document.execCommand('copy'); } catch { ok = false; }
        ta.remove();
        showMsg(ok ? 'Settings copied — paste them into a file to keep.' : 'Copying was blocked — use Download instead.', ok);
    }

    // ── Navigation / closing ──
    let closed = false;
    function close(reason) {
        if (closed) return;
        closed = true;
        document.removeEventListener('keydown', onKey, true);
        layer.remove();
        api.onClosed(reason);
        // Finish re-renders after closing and refocuses then (see finish()).
        if (reason !== 'done') restoreFocus();
    }

    function skip() {
        api.markSkipped();
        close('skipped');
    }

    function finish() {
        if (!state.imported) {
            try {
                api.apply(values());
            } catch (e) {
                showMsg(e && e.message ? e.message : 'Could not save your settings.');
                return;
            }
        }
        api.markDone();
        close('done');
        api.onApplied();
        restoreFocus();   // after the re-render, which may have replaced the opener
    }

    function next() {
        const id = steps[index];
        const error = VIEWS[id].validate();
        if (error) { showMsg(error); return; }
        if (id === 'done') { finish(); return; }
        if (id === 'welcome') {
            // Back at the start after an import: "Yes" returns to the summary,
            // "No" walks the steps (pre-filled from the import) and saves them.
            if (state.choice === 'import') { go(steps.indexOf('done')); return; }
            state.imported = false;
        }
        go(index + 1);
    }

    function back() {
        // After an import, Back returns to the start (the steps were skipped).
        go(steps[index] === 'done' && state.imported ? 0 : index - 1);
    }

    // The dialog's tab stops, the way the browser walks them: enabled, shown
    // controls, with each radio group reduced to one stop — its checked radio,
    // or its first when none is checked.
    function tabStops() {
        const seenGroups = new Set();
        return Array.from(sheet.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])'))
            .filter(el => !el.disabled && !el.hidden && el.offsetParent !== null && el.getAttribute('tabindex') !== '-1')
            .filter(el => {
                if (el.type !== 'radio' || !el.name) return true;
                if (seenGroups.has(el.name)) return false;
                seenGroups.add(el.name);
                return true;
            })
            .map(el => {
                if (el.type !== 'radio' || !el.name) return el;
                const checked = Array.from(sheet.querySelectorAll('input[type="radio"]'))
                    .find(r => r.name === el.name && r.checked && !r.disabled);
                return checked || el;
            });
    }

    // Focus back to the opener; if a re-render replaced it, to its successor
    // (same id), else to what the engine names (api.focusFallback).
    function restoreFocus() {
        let target = opener;
        if (!target || target === document.body || !document.contains(target)) {
            target = (opener && opener.id && document.getElementById(opener.id))
                || (typeof api.focusFallback === 'function' ? api.focusFallback() : null);
        }
        try { if (target && target.focus) target.focus(); } catch { /* ignore */ }
    }

    function onKey(e) {
        if (e.key === 'Tab') {
            // Keep keyboard focus inside the dialog.
            const els = tabStops();
            if (!els.length) return;
            const first = els[0];
            const last = els[els.length - 1];
            const current = document.activeElement;
            // A radio counts as its group's stop, whichever radio has focus.
            const at = el => current === el
                || (current && el.type === 'radio' && current.type === 'radio' && current.name === el.name);
            const inside = sheet.contains(current);
            if (e.shiftKey && (!inside || at(first))) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && (!inside || at(last))) { e.preventDefault(); first.focus(); }
            return;
        }
        if (e.key !== 'Escape') return;
        // One Escape is the wizard's alone (no tip or tour under it reacts).
        e.preventDefault();
        e.stopImmediatePropagation();
        const question = importedOnce
            ? 'Leave setup? Your imported settings are kept; nothing else you entered here will be saved.'
            : 'Leave setup? Nothing you entered here will be saved.';
        if (!dirty || window.confirm(question)) skip();
    }

    body.addEventListener('input', () => { dirty = true; });
    body.addEventListener('change', () => { dirty = true; });
    $('.gius-setup-skip').addEventListener('click', skip);
    $('.gius-setup-back').addEventListener('click', back);
    $('.gius-setup-next').addEventListener('click', next);
    document.addEventListener('keydown', onKey, true);

    document.body.appendChild(layer);
    render();

    return { close: () => close('closed'), element: layer };
}

// ── dd/mm/yyyy date control ──
// A native <input type=date> shows the browser's locale format and cannot be
// told otherwise, so date fields are a text input in dd/mm/yyyy plus a
// calendar button that opens a hidden native picker. Values stay yyyy-mm-dd
// everywhere else (storage, validation, the engine). Shared by the setup
// wizard and the attendance settings (both inlined into the same scope).
const GIUS_DATE_FORMAT_ERROR = 'Enter the date as dd/mm/yyyy.';

// Text → "yyyy-mm-dd"; "" when empty; null when not a real date.
// Takes d/m/yyyy or dd/mm/yyyy with "/", "-" or "." (one separator
// throughout), and a pasted yyyy-mm-dd.
function giusDateParse(text) {
    const s = String(text == null ? '' : text).trim();
    if (!s) return '';
    let y, m, d;
    let match = /^(\d{1,2})([/.-])(\d{1,2})\2(\d{4})$/.exec(s);
    if (match) {
        d = Number(match[1]); m = Number(match[3]); y = Number(match[4]);
    } else if ((match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(s))) {
        y = Number(match[1]); m = Number(match[2]); d = Number(match[3]);
    } else {
        return null;
    }
    const dt = new Date(Date.UTC(y, m - 1, d));
    if (y < 1000 || dt.getUTCFullYear() !== y || dt.getUTCMonth() !== m - 1 || dt.getUTCDate() !== d) return null;
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

// "yyyy-mm-dd" → "dd/mm/yyyy" (anything else comes back unchanged).
function giusDateFormat(ymd) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(ymd || ''));
    return match ? `${match[3]}/${match[2]}/${match[1]}` : String(ymd || '');
}

// opts: { id, value (yyyy-mm-dd, or text to show as typed), max (yyyy-mm-dd),
//         inputClass, onInput(text) }. Returns { element, input, value(),
//         setValue(ymd) }; value() is giusDateParse of the text.
function createGiusDateField(S, opts) {
    const o = opts || {};
    S.injectStyle('gius-date-style', `
        .gius-date{position:relative;display:inline-flex;flex-wrap:wrap;align-items:stretch;gap:6px;vertical-align:middle;}
        .gius-date .gius-date-hint{flex:0 0 100%;font-size:11.5px;line-height:1.3;color:#6b7280;margin-top:-2px;}
        html.gius-dark .gius-date .gius-date-hint{color:#a6adc8;}
        .gius-date .gius-date-text{width:130px;min-width:0;}
        .gius-setup .gius-date{display:flex;}
        .gius-setup .gius-date .gius-date-text{width:auto;flex:1 1 auto;}
        .gius-date .gius-date-btn{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;
            width:34px;min-height:32px;margin:0;padding:0;border:1px solid #9ca3af;border-radius:6px;
            background:#f8fafc;color:#334155;cursor:pointer;transition:background .15s,border-color .15s;}
        .gius-date .gius-date-btn:hover{background:#e2e8f0;border-color:#64748b;}
        .gius-date .gius-date-btn:focus-visible{outline:2px solid #60a5fa;outline-offset:1px;}
        .gius-date .gius-date-btn svg{display:block;width:16px;height:16px;pointer-events:none;}
        .gius-date input.gius-date-native{position:absolute !important;right:0 !important;bottom:0 !important;
            width:1px !important;height:1px !important;min-width:0 !important;margin:0 !important;padding:0 !important;
            border:0 !important;opacity:0 !important;pointer-events:none !important;}
        html.gius-dark .gius-date .gius-date-btn{background:#181825;border-color:#45475a;color:#cdd6f4;}
        html.gius-dark .gius-date .gius-date-btn:hover{background:#313244;border-color:#6c7086;}
        html.gius-dark .gius-date .gius-date-btn:focus-visible{outline-color:#89b4fa;}`);

    const wrap = document.createElement('span');
    wrap.className = 'gius-date';
    const input = document.createElement('input');
    input.type = 'text';
    if (o.id) input.id = o.id;
    input.className = ((o.inputClass || '') + ' gius-date-text').trim();
    input.placeholder = 'dd/mm/yyyy';
    input.autocomplete = 'off';
    input.spellcheck = false;
    input.value = giusDateFormat(o.value);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gius-date-btn';
    btn.title = 'Pick a date';
    btn.setAttribute('aria-label', 'Pick a date from a calendar');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/></svg>';
    // The native picker: rendered (showPicker needs that) but invisible and
    // out of the tab order; it only ever opens from the button.
    const native = document.createElement('input');
    native.type = 'date';
    native.className = 'gius-date-native';
    native.tabIndex = -1;
    native.setAttribute('aria-hidden', 'true');
    if (o.max) native.max = o.max;
    // Always-visible format hint: the placeholder vanishes as soon as you type.
    const hint = document.createElement('span');
    hint.className = 'gius-date-hint';
    hint.id = (o.id || ('gius-date-' + Math.random().toString(36).slice(2, 8))) + '-format';
    hint.textContent = 'Format: dd/mm/yyyy, e.g. 05/09/2026 — or pick it from the calendar';
    input.setAttribute('aria-describedby', hint.id);
    wrap.append(input, btn, native, hint);

    input.addEventListener('input', () => { if (o.onInput) o.onInput(input.value); });
    btn.addEventListener('click', () => {
        native.value = giusDateParse(input.value) || '';
        try {
            if (typeof native.showPicker === 'function') { native.showPicker(); return; }
        } catch { /* not allowed here: fall back below */ }
        try { native.focus(); native.click(); } catch { /* ignore */ }
    });
    native.addEventListener('change', () => {
        if (!native.value) return;
        input.value = giusDateFormat(native.value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.focus();
    });

    return {
        element: wrap,
        input,
        value: () => giusDateParse(input.value),
        setValue(ymd) { input.value = giusDateFormat(ymd); },
    };
}

// ═══════════════════════════════════════════════════════════════════════════
//  Staff Attendance — "Plan my days".
//  When to check in and leave on each working day left in the payroll month
//  so it ends even. The engine (staffAttendance) builds the input from its
//  own rules (period stats, day off, holidays, caps) and passes a small API —
//  see createPlannerApi there. planAttendanceDays is pure; the card below is
//  plain DOM. Top-level functions (inlined into the bundles and standalones).
//
//  input: { workedSeconds, requiredSeconds  (the summary's numbers without
//           today and later rows), minDaySeconds, days: [{ ymd, isToday,
//           requiredSeconds, capSeconds, lateSeconds, inSeconds,
//           outSeconds|null, fixedSeconds|null, inBase, inEdited,
//           outEdited, inFromReport }] }
//  inBase: the day (an override) is already in worked/required; it is
//  shown, never counted again. A day under 4h counts as absent, as in the
//  summary: no required hours, its hours still count.
// ═══════════════════════════════════════════════════════════════════════════
function plannerParseTime(text) {
    const m = String(text || "").match(/^(\d{1,2}):(\d{2})$/);
    if (!m) return null;
    const h = Number(m[1]), mi = Number(m[2]);
    if (h > 23 || mi > 59) return null;
    return h * 3600 + mi * 60;
}

function plannerFormatTime(seconds) {
    const total = Math.max(0, Math.min(Math.round(seconds / 60), 24 * 60 - 1));
    return String(Math.floor(total / 60)).padStart(2, "0") + ":" + String(total % 60).padStart(2, "0");
}

function plannerFormat12(seconds) {
    const t = plannerFormatTime(seconds).split(":").map(Number);
    return ((t[0] + 11) % 12 + 1) + ":" + String(t[1]).padStart(2, "0") + " " + (t[0] >= 12 ? "PM" : "AM");
}

function plannerDuration(seconds) {
    const total = Math.round(Math.abs(seconds) / 60);
    return Math.floor(total / 60) + ":" + String(total % 60).padStart(2, "0");
}

// Splits what is still needed evenly over the days nobody pinned. Each day
// stays within [4h, room] (room = cap − check-in); a day with less than 4h
// of room counts as absent. Whatever one day cannot take is spread over the
// others.
function planAttendanceDays(input) {
    const minDay = input.minDaySeconds;
    let required = input.requiredSeconds;
    let pinnedSeconds = 0;
    const free = [];
    const days = (input.days || []).map(function (d) {
        const day = Object.assign({}, d, { hours: 0, warn: "", pinned: false, locked: false });
        if (day.inBase) {
            day.locked = true;
            day.hours = Math.max(0, day.fixedSeconds || 0);
            return day;
        }
        required += day.requiredSeconds;
        if (day.fixedSeconds != null) {
            day.locked = true;
            day.hours = Math.max(0, day.fixedSeconds);
            pinnedSeconds += day.hours;
            return day;
        }
        const room = Math.max(0, day.capSeconds - day.inSeconds);
        if (day.outSeconds != null) {
            day.pinned = true;
            day.hours = Math.max(0, Math.min(day.outSeconds, day.capSeconds) - day.inSeconds);
            if (day.outSeconds < day.inSeconds) day.warn = "order";
            else if (day.hours < minDay) day.warn = "short";
        } else if (room < minDay) {
            day.hours = room;
            day.outSeconds = day.inSeconds + room;
            day.warn = "short-cap";
        } else {
            day.room = room;
            free.push(day);
            return day;
        }
        if (day.hours < minDay) required -= day.requiredSeconds;   // absent day
        pinnedSeconds += day.hours;
        return day;
    });

    let need = required - input.workedSeconds - pinnedSeconds;
    let open = free.slice();
    while (open.length) {
        const share = need / open.length;
        // Cap first: once the full days are out, the share for the rest grows.
        const over = open.filter(function (d) { return share > d.room; });
        const under = over.length ? [] : open.filter(function (d) { return share < minDay; });
        const clamped = over.length ? over : under;
        if (!clamped.length) {
            open.forEach(function (d) { d.hours = share; });
            break;
        }
        clamped.forEach(function (d) {
            if (share > d.room) { d.hours = d.room; d.warn = "cap"; }
            else d.hours = minDay;
            need -= d.hours;
        });
        open = open.filter(function (d) { return clamped.indexOf(d) === -1; });
    }

    free.forEach(function (d) {
        // Round up to the whole minute (a leave-by of 5:23:30 reads 5:24).
        d.hours = Math.min(d.room, Math.ceil(Math.max(0, d.hours) / 60) * 60);
        d.outSeconds = d.inSeconds + d.hours;
        delete d.room;
    });
    days.forEach(function (d) {
        if (!d.locked && !d.warn && d.inSeconds > d.lateSeconds) d.warn = "late";
    });

    const planned = days.reduce(function (sum, d) { return sum + (d.inBase ? 0 : d.hours); }, 0);
    const freeExtra = free.reduce(function (sum, d) { return sum + d.hours - d.requiredSeconds; }, 0);
    return {
        days,
        balanceNowSeconds: input.workedSeconds - input.requiredSeconds,
        endBalanceSeconds: input.workedSeconds + planned - required,
        freeDays: free.length,
        perDayExtraSeconds: free.length ? freeExtra / free.length : 0,
    };
}

// The "Plan my days" card. api: createPlannerApi in staffAttendance. Every
// change goes to api, then the card re-renders from api.input().
function renderAttendancePlanner(S, api, host) {
    const esc = S.escapeHtml;
    S.injectStyle('gius-plan-style', `
        .gius-plan{background:#fff;border:1px solid #eee;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,.12);overflow:hidden;margin:16px 0;container-type:inline-size;}
        .gius-plan-head{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;padding:10px 14px;background:#272c33;color:#fff;border-bottom:2px solid #ffc107;}
        .gius-plan-head h3{margin:0;font-size:14px;font-weight:700;color:#fff;}
        .gius-plan-toggle{display:flex;align-items:center;gap:8px;flex-wrap:wrap;background:none;border:0;padding:0;margin:0;color:#fff;font:inherit;font-weight:700;cursor:pointer;text-align:left;}
        .gius-plan-toggle:focus-visible{outline:2px solid #60a5fa;outline-offset:2px;border-radius:3px;}
        .gius-plan-chev{display:inline-block;transition:transform .15s;}
        .gius-plan-toggle[aria-expanded="false"] .gius-plan-chev{transform:rotate(-90deg);}
        .gius-plan-peek{font-size:12px;font-weight:600;background:#374151;border:1px solid #4b5563;color:#f9fafb;padding:2px 8px;border-radius:999px;}
        @media (prefers-reduced-motion: reduce){.gius-plan-chev{transition:none;}}
        .gius-plan-usual{font-size:12px;color:#d1d5db;display:flex;align-items:center;gap:6px;margin:0;font-weight:400;}
        .gius-plan-body{padding:16px;display:grid;gap:14px;}
        .gius-plan-body[hidden]{display:none;}
        .gius-plan-side{display:grid;gap:14px;align-content:start;min-width:0;}
        .gius-plan-days{min-width:0;}
        @container (min-width: 760px){.gius-plan-body{grid-template-columns:minmax(260px,1fr) minmax(0,1.6fr);gap:24px;align-items:start;}}
        .gius-plan-q{font-size:13px;color:#6b7280;}
        .gius-plan-big{font-size:30px;font-weight:700;line-height:1.1;font-variant-numeric:tabular-nums;color:#111827;}
        .gius-plan-came{font-size:13px;display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:0;font-weight:400;}
        .gius-plan-sentence{margin:0;padding:10px 12px;border-radius:6px;background:#f3f4f6;line-height:1.5;}
        .gius-plan-bad{color:#b91c1c;} .gius-plan-good{color:#065f46;}
        .gius-plan input[type=time]{font:inherit;font-weight:600;font-variant-numeric:tabular-nums;color:inherit;background:transparent;border:1px dashed transparent;border-radius:4px;padding:3px 4px;cursor:pointer;height:auto;width:auto;box-shadow:none;}
        .gius-plan input[type=time]:hover{border-color:#9ca3af;background:#fff;}
        .gius-plan input[type=time]:focus-visible{outline:2px solid #60a5fa;outline-offset:1px;background:#fff;}
        .gius-plan-head input[type=time]{color:#fff;}
        .gius-plan-head input[type=time]:hover,.gius-plan-head input[type=time]:focus-visible{color:#111827;}
        .gius-plan-head input[type=time]::-webkit-calendar-picker-indicator{filter:invert(1);}
        .gius-plan-head input[type=time]:hover::-webkit-calendar-picker-indicator,.gius-plan-head input[type=time]:focus-visible::-webkit-calendar-picker-indicator{filter:none;}
        .gius-plan-edited input[type=time]{background:#e0ecff;color:#1B59C6;}
        .gius-plan-row,.gius-plan-th{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:8px;padding:6px 4px;}
        .gius-plan-row{border-top:1px solid #e5e7eb;}
        .gius-plan-th{font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;padding-bottom:4px;}
        .gius-plan-row.gius-plan-today{background:#fffbea;}
        .gius-plan-day b{font-weight:600;}
        .gius-plan-day small{display:block;color:#b91c1c;font-size:11px;}
        .gius-plan-cell{display:flex;align-items:center;gap:2px;width:128px;justify-content:flex-end;}
        .gius-plan-fixed{font-weight:600;color:#6b7280;padding:3px 4px;}
        .gius-plan-undo{border:0;background:none;color:#1B59C6;font-size:15px;line-height:1;cursor:pointer;padding:2px 4px;border-radius:4px;}
        .gius-plan-undo:hover{background:#e0ecff;}
        .gius-plan-foot{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;font-size:12px;color:#6b7280;}
        .gius-plan-foot b{color:#111827;}
        .gius-plan-link{border:0;background:none;color:#1B59C6;font:inherit;font-weight:600;cursor:pointer;padding:0;text-decoration:underline;}
        html.gius-dark .gius-plan{background:#181825;border-color:#313244;color:#cdd6f4;}
        html.gius-dark .gius-plan-big,html.gius-dark .gius-plan-foot b{color:#cdd6f4;}
        html.gius-dark .gius-plan-q,html.gius-dark .gius-plan-th,html.gius-dark .gius-plan-foot,html.gius-dark .gius-plan-fixed{color:#9399b2;}
        html.gius-dark .gius-plan-sentence{background:#313244;}
        html.gius-dark .gius-plan-row{border-top-color:#313244;}
        html.gius-dark .gius-plan-row.gius-plan-today{background:rgba(249,226,175,.08);}
        html.gius-dark .gius-plan input[type=time]:hover,html.gius-dark .gius-plan input[type=time]:focus-visible{background:#313244;border-color:#585b70;color:#cdd6f4;}
        html.gius-dark .gius-plan-edited input[type=time]{background:#1e3a5f;color:#89b4fa;}
        html.gius-dark .gius-plan input[type=time]::-webkit-calendar-picker-indicator{filter:invert(1);}
        html.gius-dark .gius-plan-bad,html.gius-dark .gius-plan-day small{color:#f38ba8;}
        html.gius-dark .gius-plan-good{color:#a6e3a1;}
        html.gius-dark .gius-plan-link,html.gius-dark .gius-plan-undo{color:#89b4fa;}
        html.gius-dark .gius-plan-undo:hover{background:#1e3a5f;}
    `);

    const dayLabel = function (ymd) {
        return new Date(ymd + "T00:00:00Z").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
    };
    const warnText = function (d) {
        if (d.warn === "cap") return "Can't stay past " + plannerFormat12(d.capSeconds);
        if (d.warn === "order") return "Out is before In";
        if (d.warn === "short") return "Under 4h: counts as absent";
        if (d.warn === "short-cap") return "Under 4h before " + plannerFormat12(d.capSeconds) + ": counts as absent";
        if (d.warn === "late") return "Late (after " + plannerFormat12(d.lateSeconds) + ")";
        return "";
    };
    const amount = function (seconds) {
        const mins = Math.round(Math.abs(seconds) / 60);
        return mins < 60 ? mins + " min" : plannerDuration(seconds) + " h";
    };

    function timeCell(d, kind, seconds, edited) {
        const today = d.isToday && kind === "in" ? ' data-today="1"' : "";
        return '<span class="gius-plan-cell' + (edited ? " gius-plan-edited" : "") + '">' +
            '<input type="time" class="gius-plan-time" data-ymd="' + esc(d.ymd) + '" data-kind="' + kind + '"' + today +
            ' value="' + plannerFormatTime(seconds) + '" aria-label="' + (kind === "in" ? "Check-in " : "Check-out ") + esc(dayLabel(d.ymd)) + '">' +
            (edited ? '<button type="button" class="gius-plan-undo" data-ymd="' + esc(d.ymd) + '" data-kind="' + kind + '" aria-label="Undo change">×</button>' : "") +
            "</span>";
    }

    function row(d) {
        const label = d.isToday ? "Today" : dayLabel(d.ymd);
        const warn = warnText(d);
        let cells;
        if (d.locked) {
            cells = '<span class="gius-plan-cell"></span><span class="gius-plan-cell"><span class="gius-plan-fixed">' +
                (d.inBase ? "Override" : "Done") + " (" + plannerDuration(d.hours) + ")</span></span>";
        } else {
            const inCell = d.isToday && d.inFromReport
                ? '<span class="gius-plan-cell"><span class="gius-plan-fixed">' + plannerFormat12(d.inSeconds) + "</span></span>"
                : timeCell(d, "in", d.inSeconds, d.inEdited);
            cells = inCell + timeCell(d, "out", d.outSeconds, d.outEdited);
        }
        return '<div class="gius-plan-row' + (d.isToday ? " gius-plan-today" : "") + '" data-ymd="' + esc(d.ymd) + '">' +
            '<span class="gius-plan-day"><b>' + esc(label) + "</b>" + (warn ? "<small>" + esc(warn) + "</small>" : "") + "</span>" +
            cells + "</div>";
    }

    function hero(plan) {
        const today = plan.days.find(function (d) { return d.isToday; });
        if (today && today.locked) {
            return '<div><div class="gius-plan-q">Today is done</div><div class="gius-plan-big" id="gius-plan-leave">' +
                plannerDuration(today.hours) + "</div></div>";
        }
        if (today) {
            const came = today.inFromReport
                ? '<p class="gius-plan-came">You came in at <b>' + plannerFormat12(today.inSeconds) + "</b></p>"
                : '<label class="gius-plan-came" for="gius-plan-today-in">You came in at <input type="time" id="gius-plan-today-in" value="' +
                    plannerFormatTime(today.inSeconds) + '"></label>';
            return '<div><div class="gius-plan-q">Leave today by</div><div class="gius-plan-big" id="gius-plan-leave">' +
                plannerFormat12(today.outSeconds) + "</div>" + came + "</div>";
        }
        const next = plan.days.find(function (d) { return !d.locked; });
        if (next) {
            return '<div><div class="gius-plan-q">No work today. ' + esc(dayLabel(next.ymd)) + ', leave by</div><div class="gius-plan-big" id="gius-plan-leave">' +
                plannerFormat12(next.outSeconds) + "</div></div>";
        }
        return '<div><div class="gius-plan-q">No working days left in this payroll month.</div></div>';
    }

    function sentence(plan) {
        const now = plan.balanceNowSeconds;
        const head = now < 0 ? 'You are <b class="gius-plan-bad">missing ' + plannerDuration(now) + "</b>."
            : now > 0 ? 'You are <b class="gius-plan-good">' + plannerDuration(now) + " ahead</b>."
            : "You are even so far.";
        if (!plan.freeDays) return head;
        const k = plan.freeDays + " working day" + (plan.freeDays === 1 ? "" : "s");
        const extra = plan.perDayExtraSeconds;
        if (Math.round(Math.abs(extra) / 60) === 0) return head + " A normal day on each of the next " + k + " keeps you even.";
        if (extra > 0) {
            return head + " Stay about <b>" + amount(extra) + "</b> longer than a normal day on each of the next " + k +
                (Math.round(plan.endBalanceSeconds / 60) >= 0 ? " and you finish the month even." : ".");
        }
        return head + " You can leave about <b>" + amount(extra) + "</b> early on each of the next " + k + ".";
    }

    function endLine(plan) {
        const mins = Math.round(plan.endBalanceSeconds / 60);
        const text = mins === 0 ? "even" : (mins > 0 ? "Extra " : "Missing ") + plannerDuration(plan.endBalanceSeconds);
        return 'Month ends: <b class="' + (mins >= 0 ? "gius-plan-good" : "gius-plan-bad") + '">' + text + "</b>";
    }

    function render(focusTarget) {
        const prefs = api.prefs();
        const input = api.input();
        const plan = input ? planAttendanceDays(input) : null;
        const expanded = api.isExpanded();
        // Folded, the header still answers the main question.
        const today = plan ? plan.days.find(function (d) { return d.isToday && !d.locked; }) : null;
        const peek = !expanded && today
            ? '<span class="gius-plan-peek">Leave today by ' + plannerFormat12(today.outSeconds) + "</span>" : "";
        const head = '<div class="gius-plan-head"><h3><button type="button" class="gius-plan-toggle" id="gius-plan-toggle" aria-expanded="' +
            expanded + '" aria-controls="gius-plan-body"><span class="gius-plan-chev" aria-hidden="true">▾</span>Plan my days' + peek + "</button></h3>" +
            '<label class="gius-plan-usual" for="gius-plan-usual">Usual check-in <input type="time" id="gius-plan-usual" value="' +
            esc(prefs.usualIn) + '"></label></div>';
        const bodyOpen = '<div class="gius-plan-body" id="gius-plan-body"' + (expanded ? "" : " hidden") + ">";
        if (!plan) {
            host.innerHTML = '<section class="gius-plan">' + head + bodyOpen + '<p class="gius-plan-sentence">Set your weekly day off to see your plan.</p></div></section>';
            return;
        }
        // Keep focus on the same field across the re-render.
        const active = focusTarget || document.activeElement;
        const focusKey = active && host.contains(active) ? (active.id || active.dataset.ymd + "|" + active.dataset.kind) : null;

        const hasEdits = Object.keys(prefs.edits).length > 0;
        // Answer on the left, day list on the right when the card is wide.
        host.innerHTML = '<section class="gius-plan">' + head + bodyOpen +
            '<div class="gius-plan-side">' +
            hero(plan) +
            '<p class="gius-plan-sentence">' + sentence(plan) + "</p>" +
            '<div class="gius-plan-foot"><span id="gius-plan-end">' + endLine(plan) + "</span>" +
            '<button type="button" class="gius-plan-link" id="gius-plan-reset"' + (hasEdits ? "" : " hidden") + ">Undo all changes</button></div>" +
            "</div>" +
            (plan.days.length
                ? '<div class="gius-plan-days"><div class="gius-plan-th"><span>Day</span><span class="gius-plan-cell">In</span><span class="gius-plan-cell">Out</span></div>' +
                    plan.days.map(row).join("") + "</div>"
                : "") +
            "</div></section>";

        if (focusKey) {
            const el = focusKey.indexOf("|") === -1
                ? host.querySelector("#" + focusKey)
                : host.querySelector('[data-ymd="' + focusKey.split("|")[0] + '"][data-kind="' + focusKey.split("|")[1] + '"]');
            if (el) el.focus();
        }
    }

    // Chrome fires change on every segment typed into a time field; rebuilding
    // then would reset the caret mid-entry. Save at once, re-render on leave.
    let pending = false;
    host.addEventListener("change", function (e) {
        const el = e.target;
        if (el.id === "gius-plan-usual") api.setUsualIn(el.value);
        else if (el.id === "gius-plan-today-in" || el.dataset.today === "1") api.setTodayIn(el.value);
        else if (el.dataset.kind) api.setEdit(el.dataset.ymd, el.dataset.kind, el.value);
        else return;
        if (el === document.activeElement) { pending = true; return; }
        render();
    });
    host.addEventListener("focusout", function (e) {
        if (!pending) return;
        pending = false;
        const next = e.relatedTarget;
        // A button click in the card re-renders by itself; rebuilding now
        // would remove the button before its click lands.
        if (next && host.contains(next) && next.tagName === "BUTTON") return;
        render(next && host.contains(next) ? next : null);
    });
    host.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && e.target.matches("input[type=time]")) e.target.blur();
    });
    host.addEventListener("click", function (e) {
        if (e.target.closest("#gius-plan-toggle")) {
            pending = false;
            api.setExpanded(!api.isExpanded());
            render();
            return;
        }
        const undo = e.target.closest(".gius-plan-undo");
        if (undo) { pending = false; api.setEdit(undo.dataset.ymd, undo.dataset.kind, null); render(); return; }
        if (e.target.closest("#gius-plan-reset")) { pending = false; api.clearEdits(); render(); }
    });

    render();
    return { render };
}

function staffAttendance(S) {

            // ═══════════════════════════════════════════════════════════════════════════
            //  Architecture Map (single-file userscript, IIFE-scoped)
            // ───────────────────────────────────────────────────────────────────────────
            //  1. Constants & storage keys           (this block)
            //  2. Utility & formatting helpers       (date, time, parsing, page detect)
            //  3. Storage repositories               (localStorage read/write per domain)
            //  4. Conflict + undo services           (cross-domain helpers)
            //  5. Holiday helpers                    (lookups, formatting, normalizers)
            //  6. Style injection                    (single CSS block + tokens)
            //  7. UI factory helpers                 (small DOM builders shared by views)
            //  8. UI section builders                (config panel sections, tables)
            //  9. DOM / table parsing                (attendance row extraction)
            // 10. Business logic services            (compensation, period stats)
            // 11. Summary card components            (period summary, stat rows)
            // 12. Onboarding guide                   (spotlight walkthrough)
            // 13. Render orchestrator                (renderEnhancedUI + entry point)
            //
            //  All exposed namespaces are facades over the existing module-scoped
            //  functions. They exist to clarify domain boundaries and make the
            //  call graph easier to navigate; they do not alter behavior.
            // ═══════════════════════════════════════════════════════════════════════════

            // ═══════════════════════════════════════════════════════════
            //  Constants & Storage Keys
            // ═══════════════════════════════════════════════════════════

            const DEFAULT_RAMADAN_START = "2026-02-19";
            const DEFAULT_RAMADAN_END = "2026-03-19";

            const PAGE_PATH = "/GIUb/EXT/SwiftReports_m.aspx";
            const HOME_PATH = "/giub/intstaff/home.aspx";
            // Pinned to Cairo on BOTH branches: Berlin's SwiftReports_m.aspx returns
            // HTTP 500 ("Incorrect syntax near '='.") — a server-side SQL defect that
            // no client change can work around.
            const REPORT_ORIGIN = "https://portal.giu-uni.de";
            const REPORT_URL = REPORT_ORIGIN + "/GIUb/EXT/SwiftReports_m.aspx";
            const SWIFT_REPORT_ID = 866; // user's "Gate Attendance ... Gates" SwiftReport id (see README target page)
            const REPORT_DATA_URL = REPORT_URL + "?swiftreportid=" + SWIFT_REPORT_ID + "&executereport=1";

            // Report source override. Absent in the Cairo bundle, which reads the
            // report same-origin through a hidden iframe. The Berlin script passes
            // one in (src/berlin/berlinSource.js): it fetches the report
            // cross-origin from Cairo and hosts the full report in its own view,
            // because Berlin has no working report page.
            const SOURCE = (S && S.attendanceSource) || null;
            const REPORT_VIEW_URL = SOURCE ? SOURCE.reportViewUrl : REPORT_DATA_URL;
            const HOME_CACHE_KEY = "giuAttendanceHomeV2"; // V2: summary gained `tier` + cache now stores rows for live recompute (drops V1)
            const HOME_IFRAME_TIMEOUT_MS = 15000;
            const HOME_REFRESH_TTL_MS = 10 * 60 * 1000;  // skip refresh if cache newer than 10 min
            const HOME_REFRESH_DELAY_MS = 2500;          // let Home paint before hidden-iframe refresh

            function isHomePage() {
                const p = (location.pathname || "").replace(/\/+$/, "").toLowerCase();
                return p === HOME_PATH;
            }

            const REQUIRED_QUERY_PARAMS = {
                swiftreportid: "866",
                executereport: "1"
            };

            const REQUIRED_SECONDS_NORMAL = (8 * 60 + 24) * 60;   // 30240s = 8h24m
            const REQUIRED_SECONDS_RAMADAN = 6 * 3600;              // 21600s = 6h
            const MIN_WORKING_DAY_SECONDS = 4 * 3600;               // 14400s = 4h minimum to count day as worked
            const SINGLE_ENTRY_MAX_PER_PERIOD = 2;                  // single-entry days credited as full days per payroll month
            const LATE_THRESHOLD_SECONDS_NORMAL = (10 * 60 + 30) * 60;  // 10:30 AM
            const LATE_THRESHOLD_SECONDS_RAMADAN = (9 * 60 + 30) * 60;  // 9:30 AM
            const LASTOUT_CAP_SECONDS_NORMAL = 19 * 3600;               // 7:00 PM
            const LASTOUT_CAP_SECONDS_RAMADAN = 18 * 3600;              // 6:00 PM

            // localStorage key registry - keep all keys in one place to avoid drift.
            const STORAGE_KEYS = {
                selectedDay: "selectedDay",
                ramadan: "giuRamadanDates",
                holidays: "giuHolidayListV2",
                overrides: "giuAttendanceOverrides",
                compensationLeaves: "giuCompensationLeavesV1",
                dayOffSchedule: "giuDayOffScheduleV1",
                examPeriod: "giuExamPeriod",
                auditMode: "giuAuditModeV1",
                singleEntryRule: "giuSingleEntryRuleV1",
                annualLeaveBalance: "giuAnnualLeaveBalanceV1",
                annualLeaveAccrualPeriod: "giuAnnualLeaveAccrualPeriodV1",
                annualLeaveAccrualRate: "giuAnnualLeaveAccrualRateV1",
                paginationState: "giuPaginationStateV1",
                tableFilters: "giuTableFiltersV1",
                sectionState: "giuSectionStateV1",
                onboardingCompleted: "giuOnboardingCompletedV1",
                onboardingState: "giuOnboardingStateV1",
                branchStart: "giuBranchStartV1",
                setup: "giuAttendanceSetupV1",
                planner: "giuAttendancePlannerV1"
            };

            // One-time cleanup of keys no version reads any more: the removed
            // day-off auto-detection state and the removed Cairo/Berlin branch
            // selector. Idempotent, so running it on every boot is harmless.
            ["giuDayOffAutoStateV1", "giuBranchV1"].forEach(function (key) {
                try { localStorage.removeItem(key); } catch { /* ignore */ }
            });

            // Cairo and Berlin differ by exactly two facts. The branch is fixed by
            // the script, not a setting: the Cairo scripts always follow the Cairo
            // rule and the Berlin scripts (which pass S.attendanceSource) always
            // follow Berlin's. Any stored "giuBranchV1" from older versions is
            // ignored.
            const BRANCH_CONFIG = {
                cairo:  { fixedOffDay: "Friday" },
                berlin: { fixedOffDay: "Sunday" },
            };

            function getBranch() {
                return SOURCE ? SOURCE.defaultBranch : "cairo";
            }

            function branchConfig() { return BRANCH_CONFIG[getBranch()]; }

            const YMD_RE = /^\d{4}-\d{2}-\d{2}$/;

            // "" means no switch: the current branch applies to all history.
            function getBranchStart() {
                const raw = localStorage.getItem(STORAGE_KEYS.branchStart) || "";
                return YMD_RE.test(raw) ? raw : "";
            }

            // The one rule for a Berlin start date, shared by the settings editor,
            // import and the setup wizard: empty (no switch), or a real date that
            // is not after today. Returns "" when valid, else the message to show.
            function branchStartError(value) {
                if (!value) return "";
                if (!YMD_RE.test(value) || normalizeYMD(value) !== value) return "Enter a valid date.";
                if (value > getTodayLocalYMD()) return "The start date can't be after today.";
                return "";
            }

            // Returns whether the value was accepted ("" clears the date).
            function setBranchStart(value) {
                if (!value) { localStorage.removeItem(STORAGE_KEYS.branchStart); return true; }
                if (branchStartError(value)) return false;   // never persist a bad date
                localStorage.setItem(STORAGE_KEYS.branchStart, value);
                return true;
            }

            // Which campus governed a given attendance date. The switch date is the
            // FIRST day under the current branch; everything before it is the other
            // campus. Normalizes first: raw row dates can be "2026-3-1", and an
            // unpadded string sorts AFTER "2026-10-01" in a plain comparison.
            // Only the Berlin scripts have a switch date ("started at the Berlin
            // branch on"); the Cairo scripts apply the Cairo rule to all history.
            function getBranchFor(ymd) {
                const b = getBranch();
                if (!SOURCE) return b;
                const start = getBranchStart();
                if (!start) return b;
                const norm = normalizeYMD(ymd);
                if (!norm || norm >= start) return b;
                return b === "berlin" ? "cairo" : "berlin";
            }

            function fixedOffDayFor(ymd) { return BRANCH_CONFIG[getBranchFor(ymd)].fixedOffDay; }

            // Index 0 = Sunday, matching Date#getUTCDay().
            const WEEKDAY_TABLE = [
                { code: "Sun", name: "Sunday" },
                { code: "Mon", name: "Monday" },
                { code: "Tue", name: "Tuesday" },
                { code: "Wed", name: "Wednesday" },
                { code: "Thu", name: "Thursday" },
                { code: "Fri", name: "Friday" },
                { code: "Sat", name: "Saturday" },
            ];

            function fixedOffDay() { return branchConfig().fixedOffDay; }

            function fixedOffIndex() {
                return WEEKDAY_TABLE.findIndex(function (w) { return w.name === fixedOffDay(); });
            }

            const PAGINATION_DEFAULT_PAGE_SIZE = 10;
            const PAGINATION_PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100];
            const UNDO_STACK_LIMIT = 5;

            const ONBOARDING_COMPLETED_KEY = STORAGE_KEYS.onboardingCompleted;
            const ONBOARDING_STATE_KEY = STORAGE_KEYS.onboardingState;
            const AUDIT_MODE_KEY = STORAGE_KEYS.auditMode;
            const ANNUAL_LEAVE_BALANCE_KEY = STORAGE_KEYS.annualLeaveBalance;
            const ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY = STORAGE_KEYS.annualLeaveAccrualPeriod;
            const ANNUAL_LEAVE_ACCRUAL_RATE_KEY = STORAGE_KEYS.annualLeaveAccrualRate;
            const ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT = 2.5;
            const LAST_ACTION_KEYS = {
                holidays: "giuLastActionHolidayV1",
                compensation: "giuLastActionCompensationV1",
                overrides: "giuLastActionOverrideV1"
            };

            // ───────────────────────────────────────────────────────────────────────────
            //  Persisted Data Contracts (canonical shapes used across the app)
            // ───────────────────────────────────────────────────────────────────────────
            //  HolidayEntry      { type: "single"|"range", category: "holiday"|"annual",
            //                      date?: "YYYY-MM-DD", start?, end? }
            //  OverrideEntry     { date: "YYYY-MM-DD", type: "full_day"|"custom_actual",
            //                      actualSeconds?: number, reason?: string, note?: string }
            //  CompensationLeave { date: "YYYY-MM-DD", reason?: string }
            //  DayOffSchedule    { startDate: "YYYY-MM-DD", code: "Sat"|"Sun"|... }
            //  RamadanRange      { start: "YYYY-MM-DD", end: "YYYY-MM-DD" }
            //  ExamPeriod        { start, end, capHour: number, capMinute: number }
            //
            //  All persisted reads MUST go through `getStored*` helpers, and all writes
            //  through `setStored*` helpers. Normalizers are the single source of truth
            //  for shape validation; never construct entries inline without normalizing.
            // ───────────────────────────────────────────────────────────────────────────

            let onboardingController = null;

            // ═══════════════════════════════════════════════════════════
            //  Utility & Formatting
            // ═══════════════════════════════════════════════════════════

            function pad2(n) {
                return String(n).padStart(2, "0");
            }

            function normalizeYMD(value) {
                if (typeof value !== "string") return "";
                const trimmed = value.trim();
                if (!trimmed) return "";

                const match = trimmed.match(/(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/);
                if (!match) return "";

                const y = Number(match[1]);
                const m = Number(match[2]);
                const d = Number(match[3]);
                if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) return "";
                if (m < 1 || m > 12 || d < 1 || d > 31) return "";

                return `${y}-${pad2(m)}-${pad2(d)}`;
            }

            function formatHMS(hours, minutes, seconds) {
                return `${hours}:${pad2(minutes)}:${pad2(seconds)}`;
            }

            function formatTime12(hours24, minutes) {
                const suffix = hours24 >= 12 ? "PM" : "AM";
                let h = hours24 % 12;
                if (h === 0) h = 12;
                return `${h}:${pad2(minutes)} ${suffix}`;
            }

            function formatDateToDayName(date) {
                const normalized = normalizeYMD(date);
                if (!normalized) return "";
                const [year, month, day] = normalized.split("-").map(Number);
                const d = new Date(Date.UTC(year, month - 1, day));
                const days = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ];
                return days[d.getUTCDay()];
            }

            function isTargetReportPage() {
                if (SOURCE) return SOURCE.isReportView();
                const normalizedPath = (location.pathname || "").replace(/\/+$/, "").toLowerCase();
                const requiredPath = PAGE_PATH.toLowerCase();
                if (normalizedPath !== requiredPath) return false;

                const params = new URLSearchParams(location.search || "");
                const getParamCaseInsensitive = function (wantedKey) {
                    const target = String(wantedKey || "").toLowerCase();
                    for (const [key, value] of params.entries()) {
                        if (String(key).toLowerCase() === target) {
                            return value;
                        }
                    }
                    return null;
                };

                for (const key in REQUIRED_QUERY_PARAMS) {
                    if (getParamCaseInsensitive(key) !== REQUIRED_QUERY_PARAMS[key]) {
                        return false;
                    }
                }
                return true;
            }

            function normalizeHeaderText(value) {
                return (value || "")
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "");
            }

            function isLikelyDateHeader(header) {
                if (!header) return false;
                if (header === "day" || header === "date" || header === "attendance" || header === "attendancedate") {
                    return true;
                }
                return header.includes("date") || header.includes("day");
            }

            function isLikelyDurationHeader(header) {
                if (!header) return false;
                if (header === "duration" || header === "hours" || header === "workhours" || header === "workedhours") {
                    return true;
                }
                return header.includes("duration") || header.includes("worked") || header.includes("hours");
            }

            function isLikelyFirstInHeader(header) {
                if (!header) return false;
                if (header === "firstin" || header === "checkin" || header === "signin" || header === "timein") {
                    return true;
                }
                return header.includes("firstin") || header.includes("checkin") || header.includes("signin") || header.includes("timein");
            }

            function isLikelyLastOutHeader(header) {
                if (!header) return false;
                if (header === "lastout" || header === "checkout" || header === "signout" || header === "timeout") {
                    return true;
                }
                return header.includes("lastout") || header.includes("checkout") || header.includes("signout") || header.includes("timeout");
            }

            function detectAttendanceColumnIndexes(rows) {
                for (const row of rows) {
                    const cells = Array.from(row.cells || []);
                    if (!cells.length) continue;

                    const headers = cells.map(function (cell) {
                        return normalizeHeaderText((cell.textContent || "").trim());
                    });

                    const dateIndex = headers.findIndex(isLikelyDateHeader);
                    const durationIndex = headers.findIndex(isLikelyDurationHeader);
                    const firstInIndex = headers.findIndex(isLikelyFirstInHeader);
                    const lastOutIndex = headers.findIndex(isLikelyLastOutHeader);

                    if (dateIndex !== -1 && durationIndex !== -1) {
                        return {
                            dateIndex,
                            durationIndex,
                            firstInIndex,
                            lastOutIndex
                        };
                    }
                }
                return null;
            }

            function isBetweenDates(lowerRange, upperRange, date) {
                const lowerDate = normalizeYMD(lowerRange);
                const upperDate = normalizeYMD(upperRange);
                const currentDate = normalizeYMD(date);
                if (!lowerDate || !upperDate || !currentDate) return false;

                const lower = Number(lowerDate.replace(/-/g, ""));
                const upper = Number(upperDate.replace(/-/g, ""));
                const current = Number(currentDate.replace(/-/g, ""));
                return current >= lower && current <= upper;
            }

            function secondsToHMS(totalSeconds) {
                const abs = Math.abs(totalSeconds);
                const hours = Math.floor(abs / 3600);
                const minutes = Math.floor((abs % 3600) / 60);
                const seconds = abs % 60;
                return { hours, minutes, seconds };
            }

            function parseDurationToSeconds(duration) {
                if (!duration || !duration.includes(":")) return 0;
                const parts = duration.split(":").map(Number);
                const h = parts[0] || 0;
                const m = parts[1] || 0;
                const s = parts[2] || 0;
                return (h * 3600) + (m * 60) + s;
            }

            function parseTimeToSeconds(timeStr) {
                if (!timeStr || !timeStr.includes(":")) return null;

                const trimmed = timeStr.trim();

                const amPmMatch = trimmed.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)$/i);
                if (amPmMatch) {
                    let hours = Number(amPmMatch[1]);
                    const minutes = Number(amPmMatch[2]);
                    const ampm = amPmMatch[4].toUpperCase();

                    if (ampm === "AM" && hours === 12) hours = 0;
                    if (ampm === "PM" && hours !== 12) hours += 12;

                    return hours * 3600 + minutes * 60;
                }

                const simpleMatch = trimmed.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
                if (simpleMatch) {
                    const hours = Number(simpleMatch[1]);
                    const minutes = Number(simpleMatch[2]);
                    return hours * 3600 + minutes * 60;
                }

                return null;
            }

            function getTodayLocalYMD() {
                const now = new Date();
                const y = now.getFullYear();
                const m = pad2(now.getMonth() + 1);
                const d = pad2(now.getDate());
                return `${y}-${m}-${d}`;
            }

            function hasValidLastOut(lastOut) {
                if (!lastOut) return false;
                const value = lastOut.trim();
                if (!value) return false;
                return value.includes(":");
            }

            // One gate punch: an In time with no valid LastOut, or the same time
            // in both columns.
            function isSingleEntryRow(row) {
                if (!row) return false;
                const inSeconds = parseTimeToSeconds(row.firstIn);
                if (inSeconds === null) return false;
                if (!hasValidLastOut(row.lastOut)) return true;
                return parseTimeToSeconds(row.lastOut) === inSeconds;
            }

            function isFixedNonWorkingDay(dayName, ymd) {
                return dayName === fixedOffDayFor(ymd);
            }

            // ═══════════════════════════════════════════════════════════
            //  Storage (localStorage)
            // ═══════════════════════════════════════════════════════════

            function getSelectedDayOffCode() {
                return localStorage.getItem(STORAGE_KEYS.selectedDay) || "";
            }

            function isDayOffConfigured() {
                return getSelectedDayOffCode() !== "" || getStoredDayOffSchedule().length > 0;
            }

            function isAuditModeEnabled() {
                return localStorage.getItem(AUDIT_MODE_KEY) !== "0";
            }

            function setAuditModeEnabled(enabled) {
                localStorage.setItem(AUDIT_MODE_KEY, enabled ? "1" : "0");
            }

            // Single-entry rule: a working day with one gate punch and no checkout
            // counts as a full day, at most SINGLE_ENTRY_MAX_PER_PERIOD times per
            // payroll month. Confirmed at GUC, pending GIU HR confirmation, hence
            // the switch. On by default.
            function isSingleEntryRuleEnabled() {
                return localStorage.getItem(STORAGE_KEYS.singleEntryRule) !== "0";
            }

            function setSingleEntryRuleEnabled(enabled) {
                localStorage.setItem(STORAGE_KEYS.singleEntryRule, enabled ? "1" : "0");
            }

            function normalizeDayOffScheduleEntry(entry) {
                if (!entry || typeof entry !== "object") return null;
                const startDate = normalizeYMD(entry.startDate || "");
                const code = typeof entry.code === "string" ? entry.code.trim() : "";
                if (!startDate) return null;
                if (!getSelectedDayOffFullName(code)) return null;
                return { startDate, code };
            }

            function getStoredDayOffSchedule() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.dayOffSchedule);
                    const parsed = raw ? JSON.parse(raw) : [];
                    if (!Array.isArray(parsed)) return [];
                    return parsed
                        .map(normalizeDayOffScheduleEntry)
                        .filter(Boolean)
                        .sort(function (a, b) { return a.startDate.localeCompare(b.startDate); });
                } catch {
                    return [];
                }
            }

            function setStoredDayOffSchedule(list) {
                const normalized = (Array.isArray(list) ? list : [])
                    .map(normalizeDayOffScheduleEntry)
                    .filter(Boolean)
                    .sort(function (a, b) { return a.startDate.localeCompare(b.startDate); });
                localStorage.setItem(STORAGE_KEYS.dayOffSchedule, JSON.stringify(normalized));
            }

            function getDayOffCodeForDate(date, fallbackCode) {
                const normalizedDate = normalizeYMD(date);
                const fallback = fallbackCode || getSelectedDayOffCode();
                if (!normalizedDate) return fallback;

                const schedule = getStoredDayOffSchedule();
                let activeCode = fallback;
                for (const item of schedule) {
                    if (item.startDate <= normalizedDate) {
                        activeCode = item.code;
                    } else {
                        break;
                    }
                }
                return activeCode;
            }

            function getDayOffFullNameForDate(date, fallbackCode) {
                return getSelectedDayOffFullName(getDayOffCodeForDate(date, fallbackCode));
            }

            function getSelectedDayOffFullName(code) {
                // Resolves ANY real weekday code, deliberately not restricted to the
                // current branch's selectable six. It used to double as a validity
                // gate, which meant a day off that became the fixed off-day after a
                // campus switch silently stopped resolving — turning every such day
                // BEFORE the switch into an absence, and destroying stored schedule
                // entries on read. Validity is "is this a weekday code", which is all
                // that check ever meant.
                const match = WEEKDAY_TABLE.find(function (wd) { return wd.code === code; });
                return match ? match.name : "";
            }

            function exportSettingsSnapshot() {
                return {
                    branch: getBranch(),
                    branchStart: getBranchStart(),
                    selectedDay: getSelectedDayOffCode(),
                    dayOffSchedule: getStoredDayOffSchedule(),
                    holidays: getStoredHolidays(),
                    annualLeaveBalance: getStoredAnnualLeaveBalance(),
                    annualLeaveAccrualRate: getStoredAnnualLeaveAccrualRate(),
                    overrides: getStoredOverrides(),
                    compensationLeaves: getStoredCompensationLeaves(),
                    ramadan: getStoredRamadan(),
                    examPeriod: getStoredExamPeriod(),
                    auditMode: isAuditModeEnabled(),
                    singleEntryRule: isSingleEntryRuleEnabled()
                };
            }

            function importSettingsSnapshot(snapshot) {
                if (!snapshot || typeof snapshot !== "object") {
                    throw new Error("Invalid settings JSON object.");
                }
                const report = {
                    accepted: 0,
                    rejected: 0,
                    notes: []
                };

                // snapshot.branch (fixed per script now) and snapshot.dayOffAutoState
                // (removed day-off auto-detection) may appear in older files; both
                // are ignored.
                if (typeof snapshot.branchStart === "string") {
                    setBranchStart(snapshot.branchStart);   // no-ops on a malformed value
                    if (getBranchStart() === snapshot.branchStart) {
                        report.accepted += 1;
                    } else {
                        report.rejected += 1;
                        report.notes.push("Campus switch date invalid.");
                    }
                }
                if (typeof snapshot.selectedDay === "string") {
                    localStorage.setItem(STORAGE_KEYS.selectedDay, snapshot.selectedDay);
                    report.accepted += 1;
                }
                if (Array.isArray(snapshot.dayOffSchedule)) {
                    const before = snapshot.dayOffSchedule.length;
                    setStoredDayOffSchedule(snapshot.dayOffSchedule);
                    const after = getStoredDayOffSchedule().length;
                    report.accepted += after;
                    report.rejected += Math.max(0, before - after);
                }
                if (Array.isArray(snapshot.holidays)) {
                    const before = snapshot.holidays.length;
                    setStoredHolidays(snapshot.holidays.map(normalizeHolidayEntry).filter(Boolean));
                    const after = getStoredHolidays().length;
                    report.accepted += after;
                    report.rejected += Math.max(0, before - after);
                }
                if (snapshot.annualLeaveBalance != null) {
                    setStoredAnnualLeaveBalance(snapshot.annualLeaveBalance);
                    report.accepted += 1;
                }
                // Older files have no accrual rate; the stored one is kept then.
                if (snapshot.annualLeaveAccrualRate != null) {
                    const rate = Number(snapshot.annualLeaveAccrualRate);
                    if (Number.isFinite(rate) && rate >= 0) {
                        setStoredAnnualLeaveAccrualRate(rate);
                        report.accepted += 1;
                    } else {
                        report.rejected += 1;
                        report.notes.push("Accrual rate invalid.");
                    }
                }
                if (Array.isArray(snapshot.overrides)) {
                    const before = snapshot.overrides.length;
                    setStoredOverrides(snapshot.overrides);
                    const after = getStoredOverrides().length;
                    report.accepted += after;
                    report.rejected += Math.max(0, before - after);
                }
                if (Array.isArray(snapshot.compensationLeaves)) {
                    const before = snapshot.compensationLeaves.length;
                    setStoredCompensationLeaves(snapshot.compensationLeaves);
                    const after = getStoredCompensationLeaves().length;
                    report.accepted += after;
                    report.rejected += Math.max(0, before - after);
                }
                if (snapshot.ramadan && typeof snapshot.ramadan === "object") {
                    const start = normalizeYMD(snapshot.ramadan.start || "");
                    const end = normalizeYMD(snapshot.ramadan.end || "");
                    if (start && end && start <= end) {
                        setStoredRamadan(start, end);
                        report.accepted += 1;
                    } else {
                        report.rejected += 1;
                        report.notes.push("Ramadan range invalid.");
                    }
                }
                if (snapshot.examPeriod && typeof snapshot.examPeriod === "object") {
                    const ep = snapshot.examPeriod;
                    const start = normalizeYMD(ep.start || "");
                    const end = normalizeYMD(ep.end || "");
                    const capHour = Number(ep.capHour);
                    const capMinute = Number(ep.capMinute);
                    if (start && end && start <= end && Number.isFinite(capHour) && Number.isFinite(capMinute)) {
                        setStoredExamPeriod(start, end, capHour, capMinute);
                        report.accepted += 1;
                    } else {
                        report.rejected += 1;
                        report.notes.push("Exam period invalid.");
                    }
                }
                if (typeof snapshot.auditMode === "boolean") {
                    setAuditModeEnabled(snapshot.auditMode);
                    report.accepted += 1;
                }
                if (typeof snapshot.singleEntryRule === "boolean") {
                    setSingleEntryRuleEnabled(snapshot.singleEntryRule);
                    report.accepted += 1;
                }
                return report;
            }

            function getStoredRamadan() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.ramadan);
                    if (!raw) return { start: DEFAULT_RAMADAN_START, end: DEFAULT_RAMADAN_END };
                    const parsed = JSON.parse(raw);
                    if (
                        parsed &&
                        /^\d{4}-\d{2}-\d{2}$/.test(parsed.start || "") &&
                        /^\d{4}-\d{2}-\d{2}$/.test(parsed.end || "") &&
                        parsed.start <= parsed.end
                    ) {
                        return { start: parsed.start, end: parsed.end };
                    }
                    return { start: DEFAULT_RAMADAN_START, end: DEFAULT_RAMADAN_END };
                } catch {
                    return { start: DEFAULT_RAMADAN_START, end: DEFAULT_RAMADAN_END };
                }
            }

            function setStoredRamadan(start, end) {
                localStorage.setItem(STORAGE_KEYS.ramadan, JSON.stringify({ start, end }));
            }

            function clearStoredRamadan() {
                localStorage.removeItem(STORAGE_KEYS.ramadan);
            }

            function getStoredHolidays() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.holidays);
                    const parsed = raw ? JSON.parse(raw) : [];
                    if (!Array.isArray(parsed)) return [];
                    return parsed
                        .map(normalizeHolidayEntry)
                        .filter(Boolean);
                } catch {
                    return [];
                }
            }

            function setStoredHolidays(list) {
                const normalized = (Array.isArray(list) ? list : [])
                    .map(normalizeHolidayEntry)
                    .filter(Boolean);
                localStorage.setItem(STORAGE_KEYS.holidays, JSON.stringify(normalized));
            }

            function getStoredAnnualLeaveBalance() {
                try {
                    const raw = localStorage.getItem(ANNUAL_LEAVE_BALANCE_KEY);
                    if (raw == null || raw === "") return 0;
                    const n = Number(raw);
                    if (!Number.isFinite(n) || n < 0) return 0;
                    return n;
                } catch {
                    return 0;
                }
            }

            function setStoredAnnualLeaveBalance(value) {
                const n = Number(value);
                const safe = Number.isFinite(n) && n >= 0 ? n : 0;
                localStorage.setItem(ANNUAL_LEAVE_BALANCE_KEY, String(safe));
            }

            // Monthly annual-leave accrual rate (days added per payroll period).
            // Defaults to 2.5 when unset or invalid; never negative.
            function getStoredAnnualLeaveAccrualRate() {
                try {
                    const raw = localStorage.getItem(ANNUAL_LEAVE_ACCRUAL_RATE_KEY);
                    if (raw == null || raw === "") return ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT;
                    const n = Number(raw);
                    if (!Number.isFinite(n) || n < 0) return ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT;
                    return n;
                } catch {
                    return ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT;
                }
            }

            function setStoredAnnualLeaveAccrualRate(value) {
                const n = Number(value);
                const safe = Number.isFinite(n) && n >= 0 ? n : ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT;
                localStorage.setItem(ANNUAL_LEAVE_ACCRUAL_RATE_KEY, String(safe));
            }

            // ───────────────────────────────────────────────────────────────────────
            //  Record retention
            //  Records older than 2 payroll months are auto-removed. The cutoff
            //  is the start date (`YYYY-MM-11`) of the period that begins 2
            //  payroll months before the current one. Records dated before that
            //  cutoff are dropped from holidays/annual leaves, overrides,
            //  compensation leaves, and the day-off schedule.
            // ───────────────────────────────────────────────────────────────────────

            const RECORD_RETENTION_MONTHS = 2;

            function getRetentionCutoffStartDate() {
                const today = getTodayLocalYMD();
                const currentKey = getPayrollPeriodKey(today);
                if (typeof currentKey !== "string" || !/^\d{4}-\d{2}$/.test(currentKey)) return "";
                const [year, month] = currentKey.split("-").map(Number);
                let m = month - RECORD_RETENTION_MONTHS;
                let y = year;
                while (m <= 0) {
                    m += 12;
                    y -= 1;
                }
                return `${y}-${pad2(m)}-11`;
            }

            function pruneOldRecords() {
                const cutoffStart = getRetentionCutoffStartDate();
                if (!cutoffStart) return;

                // Holidays / Annual leaves. Single entries before cutoff drop.
                // Range entries drop when their END is before cutoff (so a range
                // that overlaps the kept window stays in full).
                const holidays = getStoredHolidays();
                let prunedAnnualDays = 0;
                const keptHolidays = holidays.filter(function (h) {
                    if (!h) return false;
                    if (h.type === "single") {
                        const d = normalizeYMD(h.date);
                        if (!d) return false;
                        if (d < cutoffStart) {
                            if (h.category === "annual") prunedAnnualDays += 1;
                            return false;
                        }
                        return true;
                    }
                    if (h.type === "range") {
                        const start = normalizeYMD(h.start);
                        const end = normalizeYMD(h.end);
                        if (!start || !end) return false;
                        if (end < cutoffStart) {
                            if (h.category === "annual" && start <= end) {
                                eachYmdInRange(start, end, function () { prunedAnnualDays += 1; });
                            }
                            return false;
                        }
                        return true;
                    }
                    return true;
                });
                if (keptHolidays.length !== holidays.length) {
                    setStoredHolidays(keptHolidays);
                    // Pruned annual leaves shouldn't change the user's remaining
                    // balance (those days were really used). Reduce the stored
                    // total by the pruned-used count to keep Remaining stable.
                    if (prunedAnnualDays > 0) {
                        const currentTotal = getStoredAnnualLeaveBalance();
                        setStoredAnnualLeaveBalance(Math.max(0, currentTotal - prunedAnnualDays));
                    }
                }

                const overrides = getStoredOverrides();
                const keptOverrides = overrides.filter(function (o) {
                    const d = normalizeYMD(o && o.date);
                    return !!d && d >= cutoffStart;
                });
                if (keptOverrides.length !== overrides.length) {
                    setStoredOverrides(keptOverrides);
                }

                const comps = getStoredCompensationLeaves();
                const keptComps = comps.filter(function (c) {
                    const d = normalizeYMD(c && c.date);
                    return !!d && d >= cutoffStart;
                });
                if (keptComps.length !== comps.length) {
                    setStoredCompensationLeaves(keptComps);
                }

                // Day-off schedule: drop superseded entries with startDate < cutoff,
                // but keep the most recent one if all entries are pre-cutoff so
                // day-off resolution for retained dates stays correct.
                const schedule = getStoredDayOffSchedule();
                const recent = schedule.filter(function (s) { return (s.startDate || "") >= cutoffStart; });
                const old = schedule.filter(function (s) { return (s.startDate || "") < cutoffStart; });
                const keptSchedule = old.length
                    ? [old[old.length - 1]].concat(recent)
                    : recent;
                if (keptSchedule.length !== schedule.length) {
                    setStoredDayOffSchedule(keptSchedule);
                }
            }

            function countRecordsToPrune() {
                const cutoffStart = getRetentionCutoffStartDate();
                if (!cutoffStart) return 0;
                let count = 0;
                getStoredHolidays().forEach(function (h) {
                    if (!h) return;
                    if (h.type === "single") {
                        const d = normalizeYMD(h.date);
                        if (d && d < cutoffStart) count += 1;
                        return;
                    }
                    if (h.type === "range") {
                        const start = normalizeYMD(h.start);
                        const end = normalizeYMD(h.end);
                        if (start && end && end < cutoffStart) count += 1;
                    }
                });
                count += getStoredOverrides().filter(function (o) { return normalizeYMD(o.date) < cutoffStart; }).length;
                count += getStoredCompensationLeaves().filter(function (c) { return normalizeYMD(c.date) < cutoffStart; }).length;
                count += getStoredDayOffSchedule().filter(function (s) { return normalizeYMD(s.startDate) < cutoffStart; }).length;
                return count;
            }

            // ───────────────────────────────────────────────────────────────────────
            //  Pagination state
            //  Each settings table tracks its current page + page size by tableKey.
            //  State survives across re-renders so the user stays on the same page
            //  after editing a row.
            // ───────────────────────────────────────────────────────────────────────

            function getPaginationState() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.paginationState);
                    const parsed = raw ? JSON.parse(raw) : {};
                    return parsed && typeof parsed === "object" ? parsed : {};
                } catch {
                    return {};
                }
            }

            function getPaginationStateForKey(tableKey, defaults) {
                const all = getPaginationState();
                const fallback = Object.assign(
                    { page: 1, pageSize: PAGINATION_DEFAULT_PAGE_SIZE },
                    defaults || {}
                );
                const stored = all[tableKey] || {};
                return Object.assign({}, fallback, stored);
            }

            function setPaginationStateForKey(tableKey, partial) {
                const all = getPaginationState();
                all[tableKey] = Object.assign({}, all[tableKey] || {}, partial || {});
                try {
                    localStorage.setItem(STORAGE_KEYS.paginationState, JSON.stringify(all));
                } catch {
                    // localStorage quota issues are non-fatal here.
                }
            }

            function applyMonthlyAnnualLeaveAccrual() {
                const today = getTodayLocalYMD();
                const currentPeriodKey = getPayrollPeriodKey(today);
                const lastAccruedPeriodKey = localStorage.getItem(ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY) || "";

                // First-time initialization: start tracking from current period without retroactive accrual.
                if (!lastAccruedPeriodKey) {
                    localStorage.setItem(ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY, currentPeriodKey);
                    return;
                }

                if (lastAccruedPeriodKey === currentPeriodKey) {
                    return;
                }

                const parseKeyToMonthIndex = function (key) {
                    if (typeof key !== "string" || !/^\d{4}-\d{2}$/.test(key)) return NaN;
                    const parts = key.split("-");
                    const y = Number(parts[0]);
                    const m = Number(parts[1]);
                    if (!Number.isInteger(y) || !Number.isInteger(m) || m < 1 || m > 12) return NaN;
                    return y * 12 + (m - 1);
                };

                const lastIdx = parseKeyToMonthIndex(lastAccruedPeriodKey);
                const currIdx = parseKeyToMonthIndex(currentPeriodKey);

                if (!Number.isFinite(lastIdx) || !Number.isFinite(currIdx) || currIdx <= lastIdx) {
                    localStorage.setItem(ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY, currentPeriodKey);
                    return;
                }

                const periodsPassed = currIdx - lastIdx;
                const currentBalance = getStoredAnnualLeaveBalance();
                const updatedBalance = currentBalance + periodsPassed * getStoredAnnualLeaveAccrualRate();
                setStoredAnnualLeaveBalance(updatedBalance);
                localStorage.setItem(ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY, currentPeriodKey);
            }

            function getStoredOverrides() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.overrides);
                    const parsed = raw ? JSON.parse(raw) : [];
                    if (!Array.isArray(parsed)) return [];
                    return parsed.map(normalizeOverrideEntry).filter(Boolean);
                } catch {
                    return [];
                }
            }

            function setStoredOverrides(list) {
                const normalized = (Array.isArray(list) ? list : [])
                    .map(normalizeOverrideEntry)
                    .filter(Boolean)
                    .sort(function (a, b) { return a.date.localeCompare(b.date); });
                localStorage.setItem(STORAGE_KEYS.overrides, JSON.stringify(normalized));
            }

            function normalizeOverrideEntry(entry) {
                if (!entry || typeof entry !== "object") return null;
                const date = normalizeYMD(entry.date || "");
                if (!date) return null;
                const type = entry.type === "custom_actual" ? "custom_actual" : "full_day";
                const normalized = { date, type };

                const reason = typeof entry.reason === "string" ? entry.reason.trim() : "";
                const note = typeof entry.note === "string" ? entry.note.trim() : "";
                if (reason) normalized.reason = reason;
                if (note) normalized.note = note;

                if (type === "custom_actual") {
                    let actualSeconds = Number(entry.actualSeconds);
                    if (!Number.isFinite(actualSeconds) || actualSeconds <= 0) {
                        const actualMinutes = Number(entry.actualMinutes);
                        actualSeconds = Number.isFinite(actualMinutes) ? actualMinutes * 60 : 0;
                    }
                    if (!Number.isFinite(actualSeconds) || actualSeconds <= 0) return null;
                    normalized.actualSeconds = Math.max(0, Math.floor(actualSeconds));
                }

                return normalized;
            }

            function normalizeCompensationLeaveEntry(entry) {
                if (!entry || typeof entry !== "object") return null;
                const date = normalizeYMD(entry.date || "");
                if (!date) return null;

                const normalized = { date };
                const reason = typeof entry.reason === "string" ? entry.reason.trim() : "";
                if (reason) {
                    normalized.reason = reason;
                }

                return normalized;
            }

            function getStoredCompensationLeaves() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.compensationLeaves);
                    const parsed = raw ? JSON.parse(raw) : [];
                    if (!Array.isArray(parsed)) return [];

                    return parsed
                        .map(normalizeCompensationLeaveEntry)
                        .filter(Boolean)
                        .sort(function (a, b) { return a.date.localeCompare(b.date); });
                } catch {
                    return [];
                }
            }

            function setStoredCompensationLeaves(list) {
                const normalized = (Array.isArray(list) ? list : [])
                    .map(normalizeCompensationLeaveEntry)
                    .filter(Boolean)
                    .sort(function (a, b) { return a.date.localeCompare(b.date); });
                localStorage.setItem(STORAGE_KEYS.compensationLeaves, JSON.stringify(normalized));
            }

            function getUndoStorageKey(scope) {
                return LAST_ACTION_KEYS[scope] || "";
            }

            function getStoredSectionState() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.sectionState);
                    const parsed = raw ? JSON.parse(raw) : {};
                    return parsed && typeof parsed === "object" ? parsed : {};
                } catch {
                    return {};
                }
            }

            function getSectionExpanded(sectionKey, fallbackValue) {
                const map = getStoredSectionState();
                if (Object.prototype.hasOwnProperty.call(map, sectionKey)) return !!map[sectionKey];
                return !!fallbackValue;
            }

            function setSectionExpanded(sectionKey, expanded) {
                const map = getStoredSectionState();
                map[sectionKey] = !!expanded;
                try {
                    localStorage.setItem(STORAGE_KEYS.sectionState, JSON.stringify(map));
                } catch {}
            }

            function getStoredTableFilters() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.tableFilters);
                    const parsed = raw ? JSON.parse(raw) : {};
                    return parsed && typeof parsed === "object" ? parsed : {};
                } catch {
                    return {};
                }
            }

            function getTableFilterValue(tableKey, filterKey, fallbackValue) {
                const all = getStoredTableFilters();
                const table = all[tableKey] || {};
                if (Object.prototype.hasOwnProperty.call(table, filterKey)) return table[filterKey];
                return fallbackValue;
            }

            function setTableFilterValue(tableKey, filterKey, value) {
                const all = getStoredTableFilters();
                if (!all[tableKey] || typeof all[tableKey] !== "object") all[tableKey] = {};
                all[tableKey][filterKey] = value;
                try {
                    localStorage.setItem(STORAGE_KEYS.tableFilters, JSON.stringify(all));
                } catch {}
            }

            function buildManagedDataSnapshot(scope) {
                if (scope === "holidays") {
                    return { holidays: getStoredHolidays() };
                }
                if (scope === "compensation") {
                    return { compensationLeaves: getStoredCompensationLeaves() };
                }
                if (scope === "overrides") {
                    return { overrides: getStoredOverrides() };
                }
                return null;
            }

            function saveUndoSnapshot(scope, label) {
                try {
                    const key = getUndoStorageKey(scope);
                    const snapshot = buildManagedDataSnapshot(scope);
                    if (!key || !snapshot) return;
                    const payload = {
                        scope: scope,
                        label: String(label || "Update"),
                        at: new Date().toISOString(),
                        snapshot: snapshot
                    };
                    const raw = localStorage.getItem(key);
                    const stack = raw ? JSON.parse(raw) : [];
                    const normalizedStack = Array.isArray(stack) ? stack : [];
                    normalizedStack.push(payload);
                    while (normalizedStack.length > UNDO_STACK_LIMIT) normalizedStack.shift();
                    localStorage.setItem(key, JSON.stringify(normalizedStack));
                } catch {}
            }

            function getUndoSnapshotMeta(scope) {
                try {
                    const key = getUndoStorageKey(scope);
                    if (!key) return null;
                    const raw = localStorage.getItem(key);
                    if (!raw) return null;
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed)) {
                        const top = parsed[parsed.length - 1];
                        return top && top.snapshot ? top : null;
                    }
                    // Backward compatibility with old single-snapshot format.
                    if (parsed && typeof parsed === "object" && parsed.snapshot) return parsed;
                    return null;
                } catch {
                    return null;
                }
            }

            function restoreUndoSnapshot(scope) {
                const key = getUndoStorageKey(scope);
                const meta = getUndoSnapshotMeta(scope);
                if (!meta || !meta.snapshot) {
                    return { ok: false, message: "No action to undo yet." };
                }
                const snap = meta.snapshot;
                if (scope === "holidays") {
                    setStoredHolidays(Array.isArray(snap.holidays) ? snap.holidays : []);
                } else if (scope === "compensation") {
                    setStoredCompensationLeaves(Array.isArray(snap.compensationLeaves) ? snap.compensationLeaves : []);
                } else if (scope === "overrides") {
                    setStoredOverrides(Array.isArray(snap.overrides) ? snap.overrides : []);
                } else {
                    return { ok: false, message: "Unsupported undo scope." };
                }
                if (key) {
                    try {
                        const raw = localStorage.getItem(key);
                        const parsed = raw ? JSON.parse(raw) : [];
                        if (Array.isArray(parsed)) {
                            parsed.pop();
                            if (parsed.length) localStorage.setItem(key, JSON.stringify(parsed));
                            else localStorage.removeItem(key);
                        } else {
                            localStorage.removeItem(key);
                        }
                    } catch {
                        localStorage.removeItem(key);
                    }
                }
                return { ok: true, message: `Undid: ${meta.label || "last action"}` };
            }

            function createScopedUndoButton(scope, emptyLabel, readyPrefix, extraClass) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "giu-settings-action-btn giu-undo-btn";
                if (extraClass) btn.classList.add(extraClass);
                const meta = getUndoSnapshotMeta(scope);
                btn.textContent = meta ? `${readyPrefix}: ${meta.label}` : emptyLabel;
                btn.disabled = !meta;
                btn.style.opacity = meta ? "1" : "0.6";
                btn.addEventListener("click", function () {
                    const restored = restoreUndoSnapshot(scope);
                    alert(restored.message);
                    if (restored.ok) {
                        renderEnhancedUI();
                    }
                });
                return btn;
            }

            function buildConflictList() {
                const markerMap = new Map();
                const addMarker = function (date, marker) {
                    const normalizedDate = normalizeYMD(date);
                    if (!normalizedDate) return;
                    if (!markerMap.has(normalizedDate)) markerMap.set(normalizedDate, new Set());
                    markerMap.get(normalizedDate).add(marker);
                };

                const holidays = getStoredHolidays();
                const overrides = getStoredOverrides();
                const compensationLeaves = getStoredCompensationLeaves();

                overrides.forEach(function (item) {
                    addMarker(item.date, "Override");
                });
                compensationLeaves.forEach(function (item) {
                    addMarker(item.date, "Compensation");
                });
                holidays.forEach(function (item) {
                    const markerLabel = item.category === "annual" ? "Annual Leave" : "Holiday";
                    if (item.type === "single") {
                        addMarker(item.date, markerLabel);
                        return;
                    }
                    if (item.type === "range") {
                        const start = normalizeYMD(item.start || "");
                        const end = normalizeYMD(item.end || "");
                        if (!start || !end || start > end) return;
                        eachYmdInRange(start, end, function (date) {
                            addMarker(date, markerLabel);
                        });
                    }
                });

                const conflicts = [];
                markerMap.forEach(function (set, date) {
                    const tags = Array.from(set.values());
                    if (tags.length > 1) conflicts.push({ date, tags: tags.sort() });
                });
                conflicts.sort(function (a, b) { return b.date.localeCompare(a.date); });
                return conflicts;
            }

            function buildConflictTagMap() {
                const map = new Map();
                buildConflictList().forEach(function (item) {
                    map.set(item.date, item.tags || []);
                });
                return map;
            }

            function createConflictBadge(text, title) {
                const badge = document.createElement("span");
                badge.className = "giu-conflict-badge";
                badge.textContent = text;
                if (title) badge.title = title;
                return badge;
            }

            function getStoredExamPeriod() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.examPeriod);
                    if (!raw) return null;
                    const parsed = JSON.parse(raw);
                    if (
                        parsed &&
                        /^\d{4}-\d{2}-\d{2}$/.test(parsed.start || "") &&
                        /^\d{4}-\d{2}-\d{2}$/.test(parsed.end || "") &&
                        parsed.start <= parsed.end &&
                        typeof parsed.capHour === "number" &&
                        typeof parsed.capMinute === "number"
                    ) {
                        return parsed;
                    }
                    return null;
                } catch {
                    return null;
                }
            }

            function setStoredExamPeriod(start, end, capHour, capMinute) {
                localStorage.setItem(STORAGE_KEYS.examPeriod, JSON.stringify({ start, end, capHour, capMinute }));
            }

            function clearStoredExamPeriod() {
                localStorage.removeItem(STORAGE_KEYS.examPeriod);
            }

            function getLastOutCapForDate(date, ramadan, examPeriod) {
                if (examPeriod && isBetweenDates(examPeriod.start, examPeriod.end, date)) {
                    return (examPeriod.capHour * 3600) + (examPeriod.capMinute * 60);
                }
                if (isBetweenDates(ramadan.start, ramadan.end, date)) {
                    return LASTOUT_CAP_SECONDS_RAMADAN;
                }
                return LASTOUT_CAP_SECONDS_NORMAL;
            }

            function getOverrideTypeLabel(type) {
                if (type === "full_day") return "Full Day";
                if (type === "custom_actual") return "Custom Hours";
                return type;
            }

            // ═══════════════════════════════════════════════════════════
            //  Holiday Helpers
            // ═══════════════════════════════════════════════════════════

            function normalizeHolidayEntry(entry) {
                if (!entry) return null;
                const normalizeCategory = function (value) {
                    return value === "annual" ? "annual" : "holiday";
                };

                if (typeof entry === "string") {
                    const value = normalizeYMD(entry);
                    if (value) {
                        return { type: "single", category: "holiday", date: value };
                    }
                    return null;
                }

                if (entry.type === "single") {
                    const date = normalizeYMD(entry.date || "");
                    if (date) {
                        return { type: "single", category: normalizeCategory(entry.category), date };
                    }
                }

                if (entry.type === "range") {
                    const start = normalizeYMD(entry.start || "");
                    const end = normalizeYMD(entry.end || "");
                    if (start && end && start <= end) {
                        return { type: "range", category: normalizeCategory(entry.category), start, end };
                    }
                }

                return null;
            }

            function holidayEntryToKey(entry) {
                const category = entry.category === "annual" ? "annual" : "holiday";
                if (entry.type === "single") return `${category}:single:${entry.date}`;
                return `${category}:range:${entry.start}:${entry.end}`;
            }

            function isDateHoliday(date, holidays) {
                const normalizedDate = normalizeYMD(date);
                if (!normalizedDate) return false;

                for (const holiday of holidays) {
                    if (holiday.type === "single" && normalizeYMD(holiday.date) === normalizedDate) {
                        return true;
                    }

                    if (holiday.type === "range" && isBetweenDates(holiday.start, holiday.end, normalizedDate)) {
                        return true;
                    }
                }

                return false;
            }

            function formatHolidayEntry(entry) {
                if (entry.type === "single") return entry.date;
                return `${entry.start} → ${entry.end}`;
            }

            function getAnnualLeaveDateSet(holidays, periodStart, periodEnd) {
                const dates = new Set();
                const normalizedStart = normalizeYMD(periodStart);
                const normalizedEnd = normalizeYMD(periodEnd);
                if (!normalizedStart || !normalizedEnd) return dates;

                (holidays || []).forEach(function (holiday) {
                    if (!holiday || holiday.category !== "annual") return;
                    if (holiday.type === "single") {
                        const singleDate = normalizeYMD(holiday.date);
                        if (singleDate && isBetweenDates(normalizedStart, normalizedEnd, singleDate)) {
                            dates.add(singleDate);
                        }
                        return;
                    }
                    if (holiday.type === "range") {
                        const rangeStart = normalizeYMD(holiday.start || "");
                        const rangeEnd = normalizeYMD(holiday.end || "");
                        if (!rangeStart || !rangeEnd || rangeStart > rangeEnd) return;
                        const intersectStart = rangeStart > normalizedStart ? rangeStart : normalizedStart;
                        const intersectEnd = rangeEnd < normalizedEnd ? rangeEnd : normalizedEnd;
                        if (intersectStart > intersectEnd) return;
                        eachYmdInRange(intersectStart, intersectEnd, function (d) { dates.add(d); });
                    }
                });

                return dates;
            }

            // ═══════════════════════════════════════════════════════════
            //  Styles
            // ═══════════════════════════════════════════════════════════

            function injectStyles() {
                if (document.getElementById("giu-attendance-enhanced-style")) return;

                const style = document.createElement("style");
                style.id = "giu-attendance-enhanced-style";
                style.textContent = `
                    /* ----------------------------------------------------------
                    GIU UI Tokens (single source of truth for radii, control
                    sizes, color roles). Existing per-rule values are kept
                    intentionally identical to preserve behavior; tokens are
                    introduced for future consumers and documented exceptions
                    like pills/chips (radius: var(--giu-radius-pill)).
                    ---------------------------------------------------------- */
                    .giu-attendance-wrap {
                        --giu-radius-sm: 6px;
                        --giu-radius-md: 8px;
                        --giu-radius-lg: 10px;
                        --giu-radius-xl: 12px;
                        --giu-radius-pill: 999px;
                        --giu-control-h: 32px;
                        --giu-control-h-sm: 28px;
                        --giu-space-1: 4px;
                        --giu-space-2: 8px;
                        --giu-space-3: 12px;
                        --giu-space-4: 16px;
                        --giu-color-text: #111827;
                        --giu-color-muted: #6b7280;
                        --giu-color-border: #d1d5db;
                        --giu-color-surface: #f3f4f6;
                        --giu-color-accent: #ffc107;
                        --giu-color-primary: #1B59C6;
                        --giu-color-success: #16a34a;
                        --giu-color-warn: #d97706;
                        --giu-color-danger: #dc2626;
                        margin: 14px auto 18px;
                        max-width: 1500px;
                        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                        color: #111827;
                        animation: giusATSlideDown 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
                    }

                    .giu-config-panel,
                    .giu-summary-panel {
                        background: #ffffff;
                        border: 1px solid #eeeeee;
                        border-radius: 6px;
                        padding: 12px;
                        position: relative;
                        margin-bottom: 14px;
                        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
                        animation: giusATFadeIn 0.3s ease;
                    }

                    .giu-config-panel::before,
                    .giu-summary-panel::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 3px;
                        background: #ffc107;
                    }

                    .giu-config-title,
                    .giu-attendance-section-title {
                        font-size: 16px;
                        font-weight: 700;
                        color: #1f2937;
                        margin: 8px 0 12px;
                    }

                    .giu-summary-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        margin: 8px 0 12px;
                    }

                    .giu-summary-toggle-hint {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 4px 10px;
                        border: 1px solid #cbd5e1;
                        border-radius: 999px;
                        background: #f8fafc;
                        color: #334155;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        user-select: none;
                        transition: background 0.15s, border-color 0.15s;
                    }

                    .giu-summary-toggle-hint:hover {
                        background: #eef2f7;
                        border-color: #94a3b8;
                    }

                    .giu-dayoff-row {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 10px;
                        padding: 8px 10px;
                        background: transparent;
                        border: 1px solid #e5e7eb;
                        border-radius: 6px;
                    }

                    .giu-dayoff-row label {
                        font-size: 13px;
                        font-weight: 700;
                        color: #111827;
                    }

                    .giu-dayoff-row select,
                    .giu-dayoff-row input,
                    .giu-holiday-controls select,
                    .giu-holiday-controls input {
                        height: 32px;
                        padding: 4px 8px;
                        border: 1px solid #9ca3af;
                        border-radius: 6px;
                        font-size: 13px;
                        background: #ffffff;
                        color: #111827;
                    }

                    .giu-dayoff-row select {
                        min-width: 140px;
                    }

                    .giu-dayoff-badge {
                        padding: 6px 10px;
                        border-radius: 6px;
                        background: #fff3cd;
                        border: 1px solid #ffc107;
                        color: #92400e;
                        font-weight: 700;
                        font-size: 13px;
                    }

                    .giu-config-divider {
                        width: 100%;
                        height: 1px;
                        background: #d1d5db;
                        margin: 14px 0 12px;
                    }

                    .giu-holiday-section {
                        display: grid;
                        gap: 10px;
                    }

                    .giu-holiday-title {
                        font-size: 14px;
                        font-weight: 700;
                        color: #1f2937;
                    }

                    .giu-holiday-controls {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        align-items: center;
                    }

                    .giu-add-holiday-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #d97706;
                        background: #ffc107;
                        color: #111827;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }

                    .giu-add-holiday-btn:hover {
                        background: #f59e0b;
                        transform: translateY(-1px);
                        box-shadow: 0 3px 10px rgba(255,193,7,0.4);
                    }

                    .giu-table-tools {
                        margin-top: 6px;
                        margin-bottom: 8px;
                    }

                    .giu-settings-subsection {
                        display: grid;
                        gap: 6px;
                    }

                    .giu-attendance-wrap button:focus-visible,
                    .giu-attendance-wrap input:focus-visible,
                    .giu-attendance-wrap select:focus-visible {
                        outline: 2px solid #60a5fa;
                        outline-offset: 1px;
                    }

                    .giu-holiday-table-wrap {
                        width: 100%;
                        overflow-x: auto;
                    }

                    .giu-holiday-table {
                        width: 100%;
                        border-collapse: collapse;
                        background: #ffffff;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        overflow: hidden;
                    }

                    .giu-holiday-table th,
                    .giu-holiday-table td {
                        border: 1px solid #d1d5db;
                        padding: 8px 10px;
                        font-size: 13px;
                        text-align: left;
                    }

                    .giu-holiday-table th {
                        background: #1f2937;
                        color: #ffffff;
                        font-weight: 700;
                    }

                    .giu-holiday-table td {
                        background: #f9fafb;
                        color: #111827;
                    }

                    .giu-holiday-empty {
                        padding: 10px 12px;
                        background: #ffffff;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        color: #6b7280;
                        font-size: 13px;
                    }

                    .giu-dayoff-empty {
                        padding: 8px 10px;
                    }

                    .giu-pagination {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-top: 8px;
                        padding: 6px 10px;
                        background: #ffffff;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        font-size: 12px;
                        color: #374151;
                    }

                    .giu-pagination-summary {
                        color: #6b7280;
                    }

                    .giu-pagination-nav {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                    }

                    .giu-pagination-indicator {
                        min-width: 92px;
                        text-align: center;
                        font-weight: 600;
                        color: #1f2937;
                    }

                    .giu-pagination-size {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        color: #374151;
                    }

                    .giu-pagination-size select {
                        height: 28px;
                        padding: 0 6px;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        background: #ffffff;
                        color: #111827;
                        font-size: 12px;
                    }

                    .giu-pagination-btn {
                        height: 28px;
                        padding: 0 10px;
                        border: 1px solid #d1d5db;
                        background: #f9fafb;
                        color: #1f2937;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 600;
                        cursor: pointer;
                    }

                    .giu-pagination-btn:hover:not(:disabled) {
                        background: #f3f4f6;
                        border-color: #9ca3af;
                    }

                    .giu-pagination-btn:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .giu-remove-holiday-btn {
                        height: 28px;
                        padding: 0 10px;
                        border: 1px solid #dc2626;
                        background: #fee2e2;
                        color: #991b1b;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-remove-holiday-btn:hover {
                        background: #fecaca;
                    }

                    .giu-summary-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 16px;
                        align-items: stretch;
                    }

                    .giu-summary-card {
                        background: #ffffff;
                        border: 1px solid #eeeeee;
                        border-radius: 6px;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
                        transition: box-shadow 0.2s ease;
                    }

                    .giu-summary-card:hover {
                        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
                    }

                    .giu-summary-card-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px 14px;
                        background: #272c33;
                        color: white;
                        border-bottom: 2px solid #ffc107;
                    }

                    .giu-summary-card-header h3 {
                        margin: 0;
                        font-size: 14px;
                        font-weight: 700;
                    }

                    .giu-period-label {
                        font-size: 12px;
                        background: #374151;
                        padding: 4px 10px;
                        border-radius: 999px;
                        border: 1px solid #4b5563;
                        color: #f9fafb;
                    }

                    .giu-summary-body {
                        padding: 14px 16px;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                    }

                    .giu-stat-list {
                        display: grid;
                        gap: 8px;
                    }

                    .giu-stat-row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 12px;
                        padding: 9px 10px;
                        background: #e5e7eb;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                    }

                    .giu-stat-left {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        min-width: 0;
                    }

                    .giu-stat-icon {
                        width: 20px;
                        text-align: center;
                        font-size: 14px;
                        color: #f59e0b;
                        flex-shrink: 0;
                    }

                    .giu-stat-label {
                        font-size: 13px;
                        font-weight: 600;
                        color: #374151;
                    }

                    .giu-stat-value {
                        font-size: 13px;
                        font-weight: 700;
                        color: #111827;
                        white-space: nowrap;
                    }

                    .giu-balance-positive {
                        background: #e8f5e9 !important;
                        border-color: #a5d6a7 !important;
                    }

                    .giu-balance-negative {
                        background: #fde8e8 !important;
                        border-color: #fca5a5 !important;
                    }

                    .giu-balance-tag {
                        margin-left: 8px;
                        padding: 3px 8px;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        display: inline-block;
                        vertical-align: middle;
                    }

                    .giu-tag-positive {
                        background: #bbf7d0;
                        color: #065f46;
                    }

                    .giu-tag-negative {
                        background: #fecaca;
                        color: #7f1d1d;
                    }

                    .giu-progress-wrap {
                        margin-top: 10px;
                        padding: 9px 10px;
                        background: #eef2f7;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                    }

                    .giu-progress-top {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 12px;
                        font-weight: 700;
                        color: #374151;
                        margin-bottom: 6px;
                    }

                    .giu-progress-bar {
                        width: 100%;
                        height: 10px;
                        background: #d1d5db;
                        border-radius: 999px;
                        overflow: hidden;
                        border: 1px solid #c5ccd6;
                    }

                    .giu-progress-fill {
                        height: 100%;
                        border-radius: 999px;
                        transition: width 0.4s ease-out;
                    }

                    .giu-progress-fill-green {
                        background: linear-gradient(90deg, #22c55e, #16a34a);
                    }

                    .giu-progress-fill-amber {
                        background: linear-gradient(90deg, #ffc107, #e5ac00);
                    }

                    .giu-progress-fill-red {
                        background: linear-gradient(90deg, #f87171, #dc2626);
                    }

                    .giu-progress-pct-green { color: #16a34a; }
                    .giu-progress-pct-amber { color: #92400e; }
                    .giu-progress-pct-red { color: #dc2626; }

                    .giu-extra-box {
                        margin-top: 10px;
                        padding: 9px 10px;
                        background: #fff8e6;
                        border: 1px solid #f4d07a;
                        border-radius: 6px;
                        font-size: 12px;
                        color: #78350f;
                        font-weight: 700;
                    }

                    .giu-extra-box-blue {
                        background: #eff6ff;
                        border-color: #93c5fd;
                        color: #1e3a5f;
                    }

                    .giu-extra-box-absent {
                        background: #fee2e2;
                        border-color: #fca5a5;
                        color: #991b1b;
                    }

                    .giu-small-note {
                        margin-top: 10px;
                        font-size: 12px;
                        color: #1e40af;
                        background: #eff6ff;
                        border-left: 3px solid #1B59C6;
                        border-radius: 6px;
                        padding: 8px 10px;
                        line-height: 1.5;
                    }

                    .giu-rule-box {
                        margin-top: 10px;
                        padding: 8px 10px;
                        border: 1px solid #cbd5e1;
                        background: #f8fafc;
                        border-radius: 6px;
                        font-size: 12px;
                        color: #1f2937;
                        line-height: 1.5;
                    }

                    .giu-debug-box {
                        background: #fff7ed;
                        border: 1px solid #f5c68a;
                        color: #9a3412;
                        padding: 12px 14px;
                        border-radius: 6px;
                        margin-bottom: 14px;
                        font-size: 13px;
                    }

                    .giu-ramadan-section {
                        display: grid;
                        gap: 10px;
                    }

                    .giu-ramadan-title {
                        font-size: 14px;
                        font-weight: 700;
                        color: #1f2937;
                    }

                    .giu-ramadan-controls {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        align-items: center;
                    }

                    .giu-ramadan-controls input {
                        height: 32px;
                        padding: 4px 8px;
                        border: 1px solid #9ca3af;
                        border-radius: 6px;
                        font-size: 13px;
                        background: #ffffff;
                        color: #111827;
                    }

                    .giu-ramadan-controls label {
                        font-size: 13px;
                        font-weight: 600;
                        color: #374151;
                    }

                    .giu-save-ramadan-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #7c3aed;
                        background: #8b5cf6;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-save-ramadan-btn:hover {
                        background: #7c3aed;
                    }

                    .giu-reset-ramadan-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #c4b5fd;
                        background: #f5f3ff;
                        color: #6d28d9;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-reset-ramadan-btn:hover {
                        background: #ede9fe;
                    }

                    .giu-ramadan-badge {
                        padding: 6px 10px;
                        border-radius: 6px;
                        background: #ede9fe;
                        border: 1px solid #8b5cf6;
                        color: #5b21b6;
                        font-weight: 700;
                        font-size: 13px;
                    }

                    .giu-exam-section {
                        display: grid;
                        gap: 10px;
                    }

                    .giu-exam-title {
                        font-size: 14px;
                        font-weight: 700;
                        color: #1f2937;
                    }

                    .giu-exam-controls {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        align-items: center;
                    }

                    .giu-exam-controls input,
                    .giu-exam-controls select {
                        height: 32px;
                        padding: 4px 8px;
                        border: 1px solid #9ca3af;
                        border-radius: 6px;
                        font-size: 13px;
                        background: #ffffff;
                        color: #111827;
                    }

                    .giu-exam-controls label {
                        font-size: 13px;
                        font-weight: 600;
                        color: #374151;
                    }

                    .giu-save-exam-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #1648a8;
                        background: #1B59C6;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }

                    .giu-save-exam-btn:hover {
                        background: #1648a8;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 10px rgba(27,89,198,0.35);
                    }

                    .giu-clear-exam-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #93c5fd;
                        background: #eff6ff;
                        color: #1e40af;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-clear-exam-btn:hover {
                        background: #dbeafe;
                    }

                    .giu-exam-badge {
                        padding: 6px 10px;
                        border-radius: 6px;
                        background: #eff6ff;
                        border: 1px solid #60a5fa;
                        color: #1e3a8a;
                        font-weight: 700;
                        font-size: 13px;
                    }

                    .giu-collapsible-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        cursor: pointer;
                        user-select: none;
                        padding: 6px 4px;
                        border-radius: 6px;
                        transition: background 0.15s;
                    }

                    .giu-collapsible-header:hover {
                        background: rgba(0, 0, 0, 0.04);
                    }

                    .giu-collapsible-right {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .giu-restart-guide-btn {
                        height: 26px;
                        padding: 0 10px;
                        border-radius: 999px;
                        border: 1px solid #0284c7;
                        background: #e0f2fe;
                        color: #075985;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: background 0.15s, border-color 0.15s;
                    }

                    .giu-restart-guide-btn:hover {
                        background: #bae6fd;
                        border-color: #0369a1;
                    }

                    .giu-collapse-arrow {
                        font-size: 12px;
                        color: #6b7280;
                        transition: transform 0.2s;
                    }



                    .giu-late-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        cursor: pointer;
                        user-select: none;
                    }

                    .giu-late-header:hover {
                        opacity: 0.8;
                    }

                    .giu-expand-chevron {
                        font-size: 10px;
                        color: inherit;
                        transition: transform 0.2s;
                        margin-left: 6px;
                    }

                    .giu-expand-chevron.giu-chevron-open {
                        transform: rotate(180deg);
                    }

                    .giu-late-details {
                        margin-top: 8px;
                    }

                    .giu-late-detail-row {
                        display: flex;
                        justify-content: space-between;
                        padding: 4px 8px;
                        font-size: 12px;
                        color: #78350f;
                        border-bottom: 1px solid #f4d07a;
                        transition: background 0.15s;
                    }

                    .giu-late-detail-row:hover {
                        background: rgba(245, 158, 11, 0.1);
                    }

                    .giu-late-detail-row:last-child {
                        border-bottom: none;
                    }

                    .giu-detail-toggle-btn {
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                        padding: 6px 12px;
                        margin-top: 10px;
                        border: 1px solid #d1d5db;
                        background: #f3f4f6;
                        color: #4b5563;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: background 0.15s, border-color 0.15s;
                    }

                    .giu-detail-toggle-btn:hover {
                        background: #e5e7eb;
                        border-color: #9ca3af;
                    }

                    .giu-toggle-chevron {
                        display: inline-block;
                        font-size: 10px;
                        transition: transform 0.2s;
                    }

                    .giu-toggle-chevron.giu-chevron-open {
                        transform: rotate(180deg);
                    }

                    .giu-override-section {
                        display: grid;
                        gap: 10px;
                    }

                    .giu-override-title {
                        font-size: 14px;
                        font-weight: 700;
                        color: #1f2937;
                    }

                    .giu-override-controls {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        align-items: center;
                    }

                    .giu-override-controls select,
                    .giu-override-controls input {
                        height: 32px;
                        padding: 4px 8px;
                        border: 1px solid #9ca3af;
                        border-radius: 6px;
                        font-size: 13px;
                        background: #ffffff;
                        color: #111827;
                    }

                    .giu-override-controls input[type="number"] {
                        width: 80px;
                    }

                    .giu-override-controls input[type="text"] {
                        width: 150px;
                    }

                    .giu-add-override-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #1648a8;
                        background: #1B59C6;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }

                    .giu-add-override-btn:hover {
                        background: #1648a8;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 10px rgba(27,89,198,0.35);
                    }

                    .giu-comp-balance-box {
                        padding: 8px 10px;
                        border-radius: 6px;
                        border: 1px solid #99f6e4;
                        background: #f0fdfa;
                        font-size: 12px;
                        color: #0f766e;
                        line-height: 1.5;
                    }

                    .giu-comp-balance-badge {
                        display: inline-block;
                        margin-left: 6px;
                        padding: 2px 8px;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        border: 1px solid transparent;
                    }

                    .giu-comp-balance-positive {
                        background: #dcfce7;
                        border-color: #86efac;
                        color: #166534;
                    }

                    .giu-comp-balance-negative {
                        background: #fee2e2;
                        border-color: #fca5a5;
                        color: #991b1b;
                    }

                    .giu-annual-balance-badge {
                        display: inline-block;
                        margin-left: 6px;
                        padding: 2px 8px;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        border: 1px solid transparent;
                    }

                    .giu-annual-balance-positive {
                        background: #fce7f3;
                        border-color: #f9a8d4;
                        color: #9d174d;
                    }

                    .giu-annual-balance-negative {
                        background: #fee2e2;
                        border-color: #fca5a5;
                        color: #991b1b;
                    }

                    .giu-edit-annual-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #be185d;
                        background: #ec4899;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-edit-annual-btn:hover {
                        background: #db2777;
                    }

                    .giu-add-comp-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #0f766e;
                        background: #14b8a6;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-add-comp-btn:hover {
                        background: #0d9488;
                    }

                    .giu-comp-action-btn {
                        height: 28px;
                        padding: 0 8px;
                        border: 1px solid #5eead4;
                        background: #f0fdfa;
                        color: #0f766e;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 700;
                        cursor: pointer;
                        margin-right: 6px;
                    }

                    .giu-comp-action-btn:hover {
                        background: #ccfbf1;
                    }

                    /* Absent-day rows: the "Add as" actions wrap onto their own line
                    (right-aligned) when the box is narrow, instead of squeezing
                    the pills until their labels break out of them. */
                    .giu-absent-detail-row {
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 4px 8px;
                    }

                    .giu-absent-actions,
                    .giu-absent-addas {
                        display: inline-flex;
                        align-items: center;
                        justify-content: flex-end;
                        flex-wrap: wrap;
                        gap: 6px;
                        min-width: 0;
                    }

                    .giu-absent-actions {
                        margin-left: auto;
                        row-gap: 4px;
                    }

                    .giu-absent-holiday-btn {
                        flex: 0 0 auto;
                        height: 24px;
                        padding: 0 10px;
                        white-space: nowrap;
                        border: 1px solid #be123c;
                        background: #fff1f2;
                        color: #9f1239;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: background 0.15s, border-color 0.15s, color 0.15s;
                    }

                    .giu-absent-holiday-btn:hover {
                        background: #ffe4e6;
                        border-color: #9f1239;
                        color: #881337;
                    }

                    .giu-absent-holiday-btn:focus-visible {
                        outline: 2px solid #fb7185;
                        outline-offset: 1px;
                    }

                    .giu-settings-action-btn {
                        height: 32px;
                        padding: 0 10px;
                        border: 1px solid #64748b;
                        background: #f8fafc;
                        color: #334155;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-settings-action-btn:hover {
                        background: #e2e8f0;
                    }

                    .giu-undo-btn {
                        border-color: #b45309;
                        background: #fffbeb;
                        color: #92400e;
                    }

                    .giu-undo-btn:hover {
                        background: #fef3c7;
                    }

                    .giu-holiday-controls .giu-undo-btn {
                        border-color: #f59e0b;
                        background: #fffbeb;
                        color: #b45309;
                    }

                    .giu-holiday-controls .giu-undo-btn:hover {
                        background: #fef3c7;
                        border-color: #d97706;
                    }

                    .giu-undo-btn-overrides {
                        border-color: #60a5fa;
                        background: #eff6ff;
                        color: #1d4ed8;
                    }

                    .giu-undo-btn-overrides:hover {
                        background: #dbeafe;
                        border-color: #1B59C6;
                    }

                    .giu-undo-btn-compensation {
                        border-color: #5eead4;
                        background: #f0fdfa;
                        color: #0f766e;
                    }

                    .giu-undo-btn-compensation:hover {
                        background: #ccfbf1;
                        border-color: #2dd4bf;
                    }

                    .giu-conflict-box {
                        margin-top: 6px;
                        padding: 8px 10px;
                        border-radius: 6px;
                        border: 1px solid #fda4af;
                        background: #fff1f2;
                        color: #9f1239;
                        font-size: 12px;
                    }

                    .giu-conflict-empty {
                        border-color: #fecdd3;
                        background: #fff5f7;
                        color: #be123c;
                    }

                    .giu-conflict-title {
                        font-size: 12px;
                        font-weight: 800;
                        color: inherit;
                        margin-bottom: 4px;
                    }

                    .giu-conflict-subtitle {
                        font-size: 11px;
                        font-weight: 600;
                        color: #be123c;
                        margin-bottom: 6px;
                    }

                    .giu-conflict-list {
                        display: grid;
                        gap: 6px;
                    }

                    .giu-conflict-row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 8px;
                        padding: 6px 10px;
                        background: #fff;
                        border: 1px solid #fecdd3;
                        border-radius: 6px;
                        font-weight: 700;
                        color: #9f1239;
                    }

                    .giu-conflict-tags {
                        font-size: 11px;
                        color: #e11d48;
                        font-weight: 700;
                        text-align: right;
                    }

                    .giu-conflict-more {
                        font-size: 11px;
                        font-weight: 700;
                        color: #e11d48;
                        text-align: right;
                    }

                    .giu-conflict-badge {
                        display: inline-block;
                        margin-left: 6px;
                        padding: 2px 6px;
                        border-radius: 999px;
                        border: 1px solid #f97316;
                        background: #fff7ed;
                        color: #c2410c;
                        font-size: 10px;
                        font-weight: 700;
                        vertical-align: middle;
                    }

                    .giu-audit-reason {
                        font-size: 12px;
                        color: #1e3a5f;
                    }

                    .giu-override-badge {
                        display: inline-block;
                        padding: 2px 6px;
                        border-radius: 6px;
                        font-size: 10px;
                        font-weight: 700;
                        margin-left: 6px;
                        vertical-align: middle;
                    }

                    .giu-override-badge-full {
                        background: #dbeafe;
                        color: #1e40af;
                        border: 1px solid #93c5fd;
                    }

                    .giu-override-badge-custom {
                        background: #fef3c7;
                        color: #92400e;
                        border: 1px solid #fcd34d;
                    }



                    .giu-expand-wrapper {
                        display: grid;
                        grid-template-rows: 0fr;
                        transition: grid-template-rows 0.3s ease-out;
                    }

                    .giu-expand-wrapper.giu-expanded {
                        grid-template-rows: 1fr;
                    }

                    .giu-expand-inner {
                        overflow: hidden;
                    }

                    .giu-guide-layer {
                        position: fixed;
                        inset: 0;
                        z-index: 2147483646;
                        pointer-events: auto;
                    }

                    .giu-guide-spotlight {
                        position: fixed;
                        border-radius: 10px;
                        border: 2px solid #f59e0b;
                        box-shadow: 0 0 0 9999px rgba(17, 24, 39, 0.68), 0 10px 30px rgba(0, 0, 0, 0.35);
                        transition: all 0.25s ease;
                        pointer-events: none;
                    }

                    .giu-guide-tooltip {
                        position: fixed;
                        width: min(360px, calc(100vw - 24px));
                        background: #ffffff;
                        border: 1px solid #d1d5db;
                        border-radius: 12px;
                        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.30);
                        padding: 14px;
                        color: #111827;
                        transition: transform 0.2s ease, opacity 0.2s ease;
                        animation: giu-guide-fade-in 0.2s ease;
                    }

                    .giu-guide-progress {
                        font-size: 11px;
                        font-weight: 700;
                        color: #6b7280;
                        margin-bottom: 6px;
                        letter-spacing: 0.02em;
                    }

                    .giu-guide-title {
                        font-size: 16px;
                        font-weight: 800;
                        color: #0f172a;
                        margin: 0 0 8px;
                        line-height: 1.3;
                    }

                    .giu-guide-description {
                        font-size: 13px;
                        color: #374151;
                        line-height: 1.55;
                        margin: 0 0 12px;
                    }

                    .giu-guide-actions {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 8px;
                    }

                    .giu-guide-left,
                    .giu-guide-right {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .giu-guide-btn {
                        height: 32px;
                        padding: 0 12px;
                        border-radius: 8px;
                        border: 1px solid #d1d5db;
                        background: #f8fafc;
                        color: #1f2937;
                        font-size: 12px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.15s ease;
                    }

                    .giu-guide-btn:hover {
                        background: #e5e7eb;
                        border-color: #9ca3af;
                    }

                    .giu-guide-btn-primary {
                        border-color: #1648a8;
                        background: linear-gradient(60deg, #1B59C6, #2d6fe0);
                        color: #ffffff;
                    }

                    .giu-guide-btn-primary:hover {
                        background: linear-gradient(60deg, #1648a8, #1B59C6);
                        border-color: #1648a8;
                        box-shadow: 0 4px 10px rgba(27,89,198,0.35);
                    }

                    .giu-guide-btn-ghost {
                        background: #ffffff;
                    }

                    .giu-guide-target-pulse {
                        animation: giu-guide-pulse 1.5s ease-in-out infinite;
                    }

                    @keyframes giu-guide-fade-in {
                        from {
                            opacity: 0;
                            transform: translateY(6px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes giu-guide-pulse {
                        0% {
                            box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.35);
                        }
                        70% {
                            box-shadow: 0 0 0 12px rgba(14, 165, 233, 0);
                        }
                        100% {
                            box-shadow: 0 0 0 0 rgba(14, 165, 233, 0);
                        }
                    }

                    @media (max-width: 900px) {
                        .giu-summary-grid {
                            grid-template-columns: 1fr;
                        }

                        .giu-summary-card-header {
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 8px;
                        }

                        .giu-holiday-controls,
                        .giu-dayoff-row,
                        .giu-ramadan-controls,
                        .giu-override-controls {
                            flex-direction: column;
                            align-items: stretch;
                        }

                        .giu-guide-actions {
                            flex-direction: column;
                            align-items: stretch;
                        }

                        .giu-guide-left,
                        .giu-guide-right {
                            justify-content: space-between;
                        }
                    }

                    @keyframes giusATSlideDown {
                        from { opacity: 0; transform: translateY(-14px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }

                    @keyframes giusATFadeIn {
                        from { opacity: 0; transform: translateY(6px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                `;
                document.head.appendChild(style);
            }

            // ═══════════════════════════════════════════════════════════
            //  UI Factory Helpers (small, composable DOM builders)
            // ═══════════════════════════════════════════════════════════

            function createUiButton(text, className, onClick) {
                const btn = document.createElement("button");
                btn.type = "button";
                if (className) btn.className = className;
                btn.textContent = text;
                btn.setAttribute("aria-label", String(text || "action"));
                if (typeof onClick === "function") btn.addEventListener("click", onClick);
                return btn;
            }

            function createUiInput(type, id, opts) {
                const input = document.createElement("input");
                input.type = type;
                if (id) input.id = id;
                const options = opts || {};
                if (options.value !== undefined) input.value = options.value;
                if (options.placeholder !== undefined) input.placeholder = options.placeholder;
                if (options.min !== undefined) input.min = String(options.min);
                if (options.max !== undefined) input.max = String(options.max);
                if (options.step !== undefined) input.step = String(options.step);
                if (options.width) input.style.width = options.width;
                if (options.hidden) input.style.display = "none";
                if (options.className) input.className = options.className;
                return input;
            }

            function createUiSelect(id, options, value) {
                const select = document.createElement("select");
                if (id) select.id = id;
                (options || []).forEach(function (opt) {
                    const o = document.createElement("option");
                    o.value = opt.value;
                    o.textContent = opt.label;
                    select.appendChild(o);
                });
                if (value !== undefined) select.value = value;
                return select;
            }

            function createUiLabel(htmlFor, text) {
                const label = document.createElement("label");
                if (htmlFor) label.setAttribute("for", htmlFor);
                label.textContent = text;
                return label;
            }

            function createUiDivider(className) {
                const div = document.createElement("div");
                div.className = className || "giu-config-divider";
                return div;
            }

            function createUiSectionTitle(text, className) {
                const el = document.createElement("div");
                el.className = className || "";
                el.textContent = text;
                return el;
            }

            function createUiDescription(text, cssText) {
                const desc = document.createElement("div");
                desc.style.cssText = cssText || "font-size:11px;color:#6b7280;margin:0 0 8px;line-height:1.4;";
                desc.textContent = text;
                return desc;
            }

            function createInlineModalPrompt(title, initialValue, onConfirm) {
                const layer = document.createElement("div");
                if (SOURCE) layer.className = "giu-inline-modal-layer"; // Berlin: the view closes it on leave (closeReportOverlays)
                layer.style.cssText = "position:fixed;inset:0;background:rgba(15,23,42,0.45);display:flex;align-items:center;justify-content:center;z-index:2147483646;";
                const modal = document.createElement("div");
                modal.style.cssText = "width:min(420px,92vw);background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:12px;display:grid;gap:10px;";
                const h = document.createElement("div");
                h.style.cssText = "font-size:14px;font-weight:700;color:#1f2937;";
                h.textContent = title;
                const input = document.createElement("input");
                input.type = "text";
                input.value = String(initialValue == null ? "" : initialValue);
                input.style.cssText = "height:34px;padding:0 10px;border:1px solid #9ca3af;border-radius:6px;";
                const actions = document.createElement("div");
                actions.style.cssText = "display:flex;justify-content:flex-end;gap:8px;";
                const cancel = createUiButton("Cancel", "giu-settings-action-btn", function () {
                    if (layer.parentNode) layer.parentNode.removeChild(layer);
                });
                const ok = createUiButton("Save", "giu-add-holiday-btn", function () {
                    const keep = onConfirm(input.value);
                    if (keep !== false && layer.parentNode) layer.parentNode.removeChild(layer);
                });
                actions.appendChild(cancel);
                actions.appendChild(ok);
                modal.appendChild(h);
                modal.appendChild(input);
                modal.appendChild(actions);
                layer.appendChild(modal);
                document.body.appendChild(layer);
                input.focus();
                input.select();
            }

            // Multi-field sibling of createInlineModalPrompt. `fields` is an array of
            // { label, value }. onConfirm receives an array of the entered string
            // values (same order as `fields`); return false to keep the modal open.
            function createInlineModalForm(title, fields, onConfirm) {
                const layer = document.createElement("div");
                if (SOURCE) layer.className = "giu-inline-modal-layer"; // Berlin: the view closes it on leave (closeReportOverlays)
                layer.style.cssText = "position:fixed;inset:0;background:rgba(15,23,42,0.45);display:flex;align-items:center;justify-content:center;z-index:2147483646;";
                const modal = document.createElement("div");
                modal.style.cssText = "width:min(420px,92vw);background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:12px;display:grid;gap:10px;";
                const h = document.createElement("div");
                h.style.cssText = "font-size:14px;font-weight:700;color:#1f2937;";
                h.textContent = title;
                modal.appendChild(h);

                const inputs = (fields || []).map(function (field) {
                    const label = document.createElement("label");
                    label.style.cssText = "display:grid;gap:4px;font-size:12.5px;font-weight:600;color:#374151;";
                    const labelText = document.createElement("span");
                    labelText.textContent = field.label;
                    const input = document.createElement("input");
                    input.type = "text";
                    input.value = String(field.value == null ? "" : field.value);
                    input.style.cssText = "height:34px;padding:0 10px;border:1px solid #9ca3af;border-radius:6px;font-weight:400;";
                    label.appendChild(labelText);
                    label.appendChild(input);
                    modal.appendChild(label);
                    return input;
                });

                const actions = document.createElement("div");
                actions.style.cssText = "display:flex;justify-content:flex-end;gap:8px;";
                const cancel = createUiButton("Cancel", "giu-settings-action-btn", function () {
                    if (layer.parentNode) layer.parentNode.removeChild(layer);
                });
                const ok = createUiButton("Save", "giu-add-holiday-btn", function () {
                    const keep = onConfirm(inputs.map(function (i) { return i.value; }));
                    if (keep !== false && layer.parentNode) layer.parentNode.removeChild(layer);
                });
                actions.appendChild(cancel);
                actions.appendChild(ok);
                modal.appendChild(actions);
                layer.appendChild(modal);
                document.body.appendChild(layer);
                if (inputs[0]) { inputs[0].focus(); inputs[0].select(); }
            }

            function wrapSettingsSection(sectionKey, title, bodyNode, defaultExpanded) {
                const wrap = document.createElement("div");
                wrap.className = "giu-settings-subsection";
                const header = document.createElement("button");
                header.type = "button";
                header.className = "giu-detail-toggle-btn";
                header.style.marginTop = "0";
                const isOpen = getSectionExpanded(sectionKey, defaultExpanded !== false);
                const chevron = document.createElement("span");
                chevron.className = "giu-toggle-chevron";
                chevron.textContent = "▼";
                if (isOpen) chevron.classList.add("giu-chevron-open");
                const text = document.createElement("span");
                text.textContent = title;
                header.appendChild(text);
                header.appendChild(chevron);
                const content = document.createElement("div");
                content.className = "giu-expand-wrapper";
                if (isOpen) content.classList.add("giu-expanded");
                const inner = document.createElement("div");
                inner.className = "giu-expand-inner";
                inner.appendChild(bodyNode);
                content.appendChild(inner);
                header.addEventListener("click", function () {
                    const nowOpen = !content.classList.contains("giu-expanded");
                    content.classList.toggle("giu-expanded", nowOpen);
                    chevron.classList.toggle("giu-chevron-open", nowOpen);
                    setSectionExpanded(sectionKey, nowOpen);
                });
                wrap.appendChild(header);
                wrap.appendChild(content);
                return wrap;
            }

            // Pagination helper for settings tables.
            // Returns { pageItems, controls, page, pageSize, totalPages }.
            // Persists state per tableKey in localStorage; renders «‹ prev | page X / Y |
            // next › with a page-size selector. On change it re-renders the whole UI
            // (the only render path used in the rest of the file).
            function createPagination(tableKey, items, opts) {
                const options = opts || {};
                const allowedSizes = options.pageSizes || PAGINATION_PAGE_SIZE_OPTIONS;
                const defaultSize = options.defaultPageSize || PAGINATION_DEFAULT_PAGE_SIZE;
                const total = (items || []).length;

                const stored = getPaginationStateForKey(tableKey, { pageSize: defaultSize });
                let pageSize = Number(stored.pageSize);
                if (!Number.isFinite(pageSize) || pageSize <= 0) pageSize = defaultSize;
                if (allowedSizes.indexOf(pageSize) === -1) pageSize = defaultSize;

                const totalPages = Math.max(1, Math.ceil(total / pageSize));
                let page = Number(stored.page);
                if (!Number.isFinite(page) || page < 1) page = 1;
                if (page > totalPages) page = totalPages;

                const start = (page - 1) * pageSize;
                const pageItems = (items || []).slice(start, start + pageSize);

                // When everything fits on a single page, the controls add no
                // value — return them hidden so call sites can keep their
                // unconditional appendChild without leaving a visible empty bar.
                const fitsOnePage = total <= pageSize;

                const controls = document.createElement("div");
                controls.className = "giu-pagination";
                if (fitsOnePage) controls.style.display = "none";

                const summary = document.createElement("div");
                summary.className = "giu-pagination-summary";
                if (total === 0) {
                    summary.textContent = "0 items";
                } else {
                    const last = Math.min(start + pageSize, total);
                    summary.textContent = `Showing ${start + 1}–${last} of ${total}`;
                }

                const nav = document.createElement("div");
                nav.className = "giu-pagination-nav";

                const goTo = function (nextPage) {
                    const clamped = Math.max(1, Math.min(totalPages, nextPage));
                    if (clamped === page) return;
                    setPaginationStateForKey(tableKey, { page: clamped, pageSize });
                    renderEnhancedUI();
                };

                const prevBtn = createUiButton("‹ Prev", "giu-pagination-btn", function () {
                    goTo(page - 1);
                });
                prevBtn.disabled = page <= 1;

                const indicator = document.createElement("span");
                indicator.className = "giu-pagination-indicator";
                indicator.textContent = `Page ${page} / ${totalPages}`;

                const nextBtn = createUiButton("Next ›", "giu-pagination-btn", function () {
                    goTo(page + 1);
                });
                nextBtn.disabled = page >= totalPages;

                const sizeWrap = document.createElement("label");
                sizeWrap.className = "giu-pagination-size";
                sizeWrap.textContent = "Per page:";
                const sizeSelect = createUiSelect(
                    "",
                    allowedSizes.map(function (n) { return { value: String(n), label: String(n) }; }),
                    String(pageSize)
                );
                sizeSelect.addEventListener("change", function () {
                    const newSize = Number(sizeSelect.value) || defaultSize;
                    setPaginationStateForKey(tableKey, { page: 1, pageSize: newSize });
                    renderEnhancedUI();
                });
                sizeWrap.appendChild(sizeSelect);

                nav.appendChild(prevBtn);
                nav.appendChild(indicator);
                nav.appendChild(nextBtn);

                controls.appendChild(summary);
                controls.appendChild(nav);
                controls.appendChild(sizeWrap);

                return { pageItems, controls, page, pageSize, totalPages, total };
            }

            // ═══════════════════════════════════════════════════════════
            //  UI Components
            // ═══════════════════════════════════════════════════════════

            function createHolidayTable() {
                const container = document.createElement("div");
                container.className = "giu-holiday-table-wrap";

                const holidays = getStoredHolidays();
                const conflictTagMap = buildConflictTagMap();

                if (!holidays.length) {
                    const empty = document.createElement("div");
                    empty.className = "giu-holiday-empty";
                    empty.textContent = "No saved holidays or leaves.";
                    container.appendChild(empty);
                    return container;
                }

                const filterBar = document.createElement("div");
                filterBar.className = "giu-dayoff-row giu-table-tools";
                const initialTypeFilter = getTableFilterValue("holidays", "type", "");
                const initialDateFilter = getTableFilterValue("holidays", "date", "");
                const typeFilter = createUiSelect("", [
                    { value: "", label: "All categories" },
                    { value: "holiday", label: "Holiday" },
                    { value: "annual", label: "Annual Leave" }
                ], initialTypeFilter);
                const dateFilter = createUiInput("text", "", { placeholder: "Filter by date (YYYY-MM)", value: initialDateFilter });
                dateFilter.style.minWidth = "160px";

                const table = document.createElement("table");
                table.className = "giu-holiday-table";

                table.innerHTML = `
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="giu-select-all" /></th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Date / Range</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;

                const tbody = table.querySelector("tbody");
                const getFiltered = function () {
                    const tf = typeFilter.value;
                    const df = String(dateFilter.value || "").trim();
                    return holidays.filter(function (h) {
                        if (tf && h.category !== tf) return false;
                        if (!df) return true;
                        return formatHolidayEntry(h).indexOf(df) !== -1;
                    });
                };
                const pagination = createPagination("holidays", getFiltered());
                const selectAll = table.querySelector(".giu-select-all");

                const bulkBtn = createUiButton("Remove Selected", "giu-remove-holiday-btn", function () {
                    const checked = Array.from(tbody.querySelectorAll("input[type='checkbox'][data-key]:checked"));
                    if (!checked.length) return;
                    const removeKeys = new Set(checked.map(function (el) { return el.getAttribute("data-key"); }));
                    const updated = getStoredHolidays().filter(function (h) {
                        return !removeKeys.has(holidayEntryToKey(h));
                    });
                    saveUndoSnapshot("holidays", `Bulk remove ${checked.length} holiday/leave`);
                    setStoredHolidays(updated);
                    renderEnhancedUI();
                });
                bulkBtn.style.marginLeft = "auto";
                filterBar.appendChild(typeFilter);
                filterBar.appendChild(dateFilter);
                filterBar.appendChild(bulkBtn);
                container.appendChild(filterBar);

                pagination.pageItems.forEach((holiday) => {
                    const tr = document.createElement("tr");
                    const pickTd = document.createElement("td");
                    const pick = document.createElement("input");
                    pick.type = "checkbox";
                    pick.setAttribute("data-key", holidayEntryToKey(holiday));
                    pickTd.appendChild(pick);

                    const categoryTd = document.createElement("td");
                    categoryTd.textContent = holiday.category === "annual" ? "Annual Leave" : "Holiday";

                    const typeTd = document.createElement("td");
                    typeTd.textContent = holiday.type === "single" ? "Single" : "Range";

                    const valueTd = document.createElement("td");
                    valueTd.textContent = formatHolidayEntry(holiday);
                    if (holiday.type === "single") {
                        const tags = conflictTagMap.get(holiday.date);
                        if (tags && tags.length > 1) {
                            valueTd.appendChild(createConflictBadge("Conflict", tags.join(" + ")));
                        }
                    } else if (holiday.type === "range") {
                        const start = normalizeYMD(holiday.start || "");
                        const end = normalizeYMD(holiday.end || "");
                        if (start && end && start <= end) {
                            let conflictCount = 0;
                            eachYmdInRange(start, end, function (date) {
                                const tags = conflictTagMap.get(date);
                                if (tags && tags.length > 1) conflictCount += 1;
                            });
                            if (conflictCount > 0) {
                                valueTd.appendChild(createConflictBadge(`Conflict x${conflictCount}`));
                            }
                        }
                    }

                    const actionTd = document.createElement("td");
                    actionTd.appendChild(createUiButton("Remove", "giu-remove-holiday-btn", function () {
                        const targetKey = holidayEntryToKey(holiday);
                        const updated = getStoredHolidays().filter(item => holidayEntryToKey(item) !== targetKey);
                        saveUndoSnapshot("holidays", "Remove holiday");
                        setStoredHolidays(updated);
                        renderEnhancedUI();
                    }));

                    tr.appendChild(pickTd);
                    tr.appendChild(categoryTd);
                    tr.appendChild(typeTd);
                    tr.appendChild(valueTd);
                    tr.appendChild(actionTd);

                    tbody.appendChild(tr);
                });
                if (selectAll) {
                    selectAll.addEventListener("change", function () {
                        const boxes = tbody.querySelectorAll("input[type='checkbox'][data-key]");
                        boxes.forEach(function (b) { b.checked = !!selectAll.checked; });
                    });
                }
                typeFilter.addEventListener("change", function () {
                    setTableFilterValue("holidays", "type", typeFilter.value || "");
                    renderEnhancedUI();
                });
                dateFilter.addEventListener("change", function () {
                    setTableFilterValue("holidays", "date", dateFilter.value || "");
                    renderEnhancedUI();
                });

                container.appendChild(table);
                container.appendChild(pagination.controls);
                return container;
            }

            // ───────────────────────────────────────────────────────────────────────
            //  Config panel section builders
            //  Each helper returns a single DOM node and is called by createConfigPanel.
            //  Splitting these out keeps the panel orchestrator small and makes
            //  individual sections easier to evolve independently.
            // ───────────────────────────────────────────────────────────────────────

            function createConfigPanelHeader(initialExpanded) {
                const panel = document.createElement("div");
                panel.className = "giu-config-panel";

                const headerRow = document.createElement("div");
                headerRow.className = "giu-collapsible-header";

                const title = document.createElement("div");
                title.className = "giu-config-title";
                title.style.margin = "0";
                title.textContent = "\u2699\uFE0F Attendance Settings";

                const chevron = document.createElement("span");
                chevron.className = "giu-expand-chevron";
                chevron.textContent = "\u25BC";

                const rightActions = document.createElement("div");
                rightActions.className = "giu-collapsible-right";

                const restartGuideBtn = createUiButton("Restart Guide", "giu-restart-guide-btn", function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    restartOnboardingGuide();
                });

                rightActions.appendChild(restartGuideBtn);
                rightActions.appendChild(chevron);
                headerRow.appendChild(title);
                headerRow.appendChild(rightActions);
                panel.appendChild(headerRow);

                const bodyWrap = document.createElement("div");
                bodyWrap.className = "giu-expand-wrapper";

                const bodyInner = document.createElement("div");
                bodyInner.className = "giu-expand-inner";
                bodyInner.style.paddingTop = "8px";

                headerRow.addEventListener("click", function () {
                    bodyWrap.classList.toggle("giu-expanded");
                    chevron.classList.toggle("giu-chevron-open");
                });

                if (initialExpanded) {
                    bodyWrap.classList.add("giu-expanded");
                    chevron.classList.add("giu-chevron-open");
                }

                return { panel, bodyWrap, bodyInner };
            }

            function createDayOffControlsRow(selectedDayCode, selectedDayFullName, onDayChange, defaultEffectiveDate) {
                const dayRow = document.createElement("div");
                dayRow.className = "giu-dayoff-row";

                const dayLabel = createUiLabel("giu-day-select", "Day Off");

                // Options come from the branch-aware source of truth, never a literal
                // list: the six selectable candidates must match what
                // getSelectedDayOffFullName resolves for this branch.
                const select = createUiSelect("giu-day-select", [{ value: "", label: "---" }].concat(
                    dayOffWeekdays().map(function (wd) { return { value: wd.code, label: wd.name }; })
                ), selectedDayCode);

                const scheduleLabel = createUiLabel("giu-dayoff-effective-date", "Apply from");
                const defaultEffective = (!isDayOffConfigured() && defaultEffectiveDate) ? defaultEffectiveDate : getTodayLocalYMD();
                const effectiveDateInput = createUiInput("date", "giu-dayoff-effective-date", { value: defaultEffective });
                const applyFromDateBtn = createUiButton("Apply", "giu-add-holiday-btn");

                const effectiveBadge = document.createElement("div");
                effectiveBadge.className = "giu-dayoff-badge";

                const timelineBadge = document.createElement("div");
                timelineBadge.className = "giu-dayoff-badge";
                timelineBadge.style.background = "#eef2ff";
                timelineBadge.style.borderColor = "#818cf8";
                timelineBadge.style.color = "#3730a3";

                function refreshEffectiveDayOffBadge() {
                    const todayDayOff = getDayOffFullNameForDate(getTodayLocalYMD(), selectedDayCode)
                        || getSelectedDayOffFullName(select.value)
                        || selectedDayFullName;
                    if (todayDayOff) {
                        effectiveBadge.textContent = `Current effective day off: ${todayDayOff}`;
                        effectiveBadge.style.display = "";
                    } else {
                        effectiveBadge.style.display = "none";
                    }

                    const today = getTodayLocalYMD();
                    const nextChange = getStoredDayOffSchedule().find(function (item) {
                        return item.startDate > today;
                    });
                    if (nextChange) {
                        timelineBadge.textContent = `Next change: ${nextChange.startDate} -> ${getSelectedDayOffFullName(nextChange.code) || nextChange.code}`;
                    } else {
                        timelineBadge.textContent = "Next change: none";
                    }
                    timelineBadge.style.display = "";
                }

                select.addEventListener("change", function () {
                    refreshEffectiveDayOffBadge();
                    if (typeof onDayChange === "function") onDayChange();
                });

                applyFromDateBtn.addEventListener("click", function () {
                    const pickedDate = normalizeYMD(effectiveDateInput.value || "");
                    const pickedCode = select.value;
                    if (!pickedDate) {
                        alert("Please choose a valid effective date.");
                        return;
                    }
                    if (!pickedCode) {
                        alert("Please choose a day off first.");
                        return;
                    }

                    const currentSchedule = getStoredDayOffSchedule().filter(function (item) {
                        return item.startDate !== pickedDate;
                    });
                    currentSchedule.push({ startDate: pickedDate, code: pickedCode });
                    setStoredDayOffSchedule(currentSchedule);
                    renderEnhancedUI();
                });

                dayRow.appendChild(dayLabel);
                dayRow.appendChild(select);
                dayRow.appendChild(scheduleLabel);
                dayRow.appendChild(effectiveDateInput);
                dayRow.appendChild(applyFromDateBtn);
                dayRow.appendChild(effectiveBadge);
                dayRow.appendChild(timelineBadge);
                refreshEffectiveDayOffBadge();
                return dayRow;
            }

            function createSettingsExportPanel() {
                const exportPanel = document.createElement("div");
                exportPanel.style.display = "none";
                exportPanel.style.marginTop = "8px";
                exportPanel.style.padding = "8px";
                exportPanel.style.border = "1px solid #cbd5e1";
                exportPanel.style.borderRadius = "4px";
                exportPanel.style.background = "#ffffff";

                const exportInfo = document.createElement("div");
                exportInfo.style.fontSize = "12px";
                exportInfo.style.color = "#475569";
                exportInfo.style.marginBottom = "6px";
                exportInfo.textContent = "Copy this JSON and save it as a .json file.";

                const exportTextArea = document.createElement("textarea");
                exportTextArea.readOnly = true;
                exportTextArea.style.width = "100%";
                exportTextArea.style.minHeight = "120px";
                exportTextArea.style.fontFamily = "Consolas, Monaco, monospace";
                exportTextArea.style.fontSize = "12px";
                exportTextArea.style.padding = "8px";
                exportTextArea.style.border = "1px solid #cbd5e1";
                exportTextArea.style.borderRadius = "4px";
                exportTextArea.style.background = "#f8fafc";
                exportTextArea.style.color = "#0f172a";

                const copyExportBtn = createUiButton("Copy JSON", "giu-settings-action-btn", async function () {
                    const text = exportTextArea.value || "";
                    if (!text) return;
                    try {
                        if (navigator.clipboard && navigator.clipboard.writeText) {
                            await navigator.clipboard.writeText(text);
                            alert("JSON copied.");
                            return;
                        }
                    } catch {}
                    try {
                        exportTextArea.focus();
                        exportTextArea.select();
                        document.execCommand("copy");
                        alert("JSON copied.");
                    } catch {
                        alert("Copy blocked. Select text manually and copy.");
                    }
                });
                copyExportBtn.style.marginTop = "6px";

                exportPanel.appendChild(exportInfo);
                exportPanel.appendChild(exportTextArea);
                exportPanel.appendChild(copyExportBtn);
                return { panel: exportPanel, textArea: exportTextArea };
            }

            function createSettingsActionsRow() {
                const settingsActionRow = document.createElement("div");
                settingsActionRow.className = "giu-dayoff-row";
                settingsActionRow.style.marginTop = "8px";

                const exportPanelData = createSettingsExportPanel();

                const exportBtn = createUiButton("Export Settings", "giu-settings-action-btn", async function () {
                    const snapshot = exportSettingsSnapshot();
                    const text = JSON.stringify(snapshot, null, 2);
                    exportPanelData.textArea.value = text;
                    exportPanelData.panel.style.display = "";
                    try {
                        if (navigator.clipboard && navigator.clipboard.writeText) {
                            await navigator.clipboard.writeText(text);
                            alert("Settings copied to clipboard as JSON. Backup panel also opened.");
                            return;
                        }
                    } catch {
                        alert("Clipboard blocked. Export JSON shown in panel below.");
                    }
                });

                const importBtn = createUiButton("Import Settings", "giu-settings-action-btn", function () {
                    const fileInput = document.createElement("input");
                    fileInput.type = "file";
                    fileInput.accept = ".json,application/json,text/json";
                    fileInput.style.display = "none";

                    fileInput.addEventListener("change", function () {
                        const file = fileInput.files && fileInput.files[0];
                        if (!file) return;

                        const reader = new FileReader();
                        reader.onload = function () {
                            try {
                                const text = String(reader.result || "");
                                const parsed = JSON.parse(text);
                                const report = importSettingsSnapshot(parsed);
                                renderEnhancedUI();
                                const notes = report.notes && report.notes.length ? ` Notes: ${report.notes.join(" ")}` : "";
                                alert(`Settings imported. Accepted: ${report.accepted}. Rejected: ${report.rejected}.${notes}`);
                            } catch (e) {
                                alert("Invalid settings JSON file: " + (e && e.message ? e.message : "Unknown error"));
                            }
                        };
                        reader.onerror = function () {
                            alert("Could not read selected file.");
                        };
                        reader.readAsText(file);
                    });

                    document.body.appendChild(fileInput);
                    fileInput.click();
                    setTimeout(function () {
                        if (fileInput.parentNode) fileInput.parentNode.removeChild(fileInput);
                    }, 0);
                });

                const createSettingsToggle = function (text, checked, onChange, title) {
                    const label = document.createElement("label");
                    label.style.display = "inline-flex";
                    label.style.alignItems = "center";
                    label.style.gap = "6px";
                    label.style.fontWeight = "700";
                    label.style.fontSize = "12px";
                    label.style.color = "#334155";
                    if (title) label.title = title;

                    const toggle = document.createElement("input");
                    toggle.type = "checkbox";
                    toggle.checked = checked;
                    toggle.addEventListener("change", function () {
                        onChange(toggle.checked);
                        renderEnhancedUI();
                    });

                    const span = document.createElement("span");
                    span.textContent = text;

                    label.appendChild(toggle);
                    label.appendChild(span);
                    return label;
                };

                const auditLabel = createSettingsToggle("Audit log mode", isAuditModeEnabled(), setAuditModeEnabled);
                const singleEntryLabel = createSettingsToggle(
                    `Single entry counts as full day (max ${SINGLE_ENTRY_MAX_PER_PERIOD}/month)`,
                    isSingleEntryRuleEnabled(),
                    setSingleEntryRuleEnabled,
                    "A working day with one gate punch and no checkout counts as a full day, up to "
                        + `${SINGLE_ENTRY_MAX_PER_PERIOD} times per payroll month. Confirmed at GUC; still awaiting GIU HR confirmation.`
                );

                // Reopens the first-run setup wizard, pre-filled with today's settings.
                const setupBtn = createUiButton("Run setup again", "giu-settings-action-btn", function () {
                    openSetupWizard(true);
                });
                setupBtn.id = "giu-run-setup-btn";

                settingsActionRow.appendChild(exportBtn);
                settingsActionRow.appendChild(importBtn);
                settingsActionRow.appendChild(setupBtn);
                settingsActionRow.appendChild(auditLabel);
                settingsActionRow.appendChild(singleEntryLabel);

                const today = getTodayLocalYMD();
                const currentPeriodKey = getPayrollPeriodKey(today);
                const currentPeriod = getPayrollPeriodBounds(currentPeriodKey);
                let miniComp = 0;
                if (currentPeriod && currentPeriod.start && currentPeriod.end) {
                    const periods = groupRowsByPayrollPeriod(getAttendanceRows());
                    const allRows = (periods || []).flatMap(function (p) { return p.rows || []; });
                    const periodRows = allRows.filter(function (row) {
                        const d = normalizeYMD(row && row.date ? row.date : "");
                        return d && isBetweenDates(currentPeriod.start, currentPeriod.end, d);
                    });
                    const periodLeaves = getStoredCompensationLeaves().filter(function (leave) {
                        const d = normalizeYMD(leave && leave.date ? leave.date : "");
                        return d && getPayrollPeriodKey(d) === currentPeriodKey;
                    });
                    const ledger = buildCompensationLedgerForPeriod(
                        periodRows,
                        currentPeriod.start,
                        currentPeriod.end,
                        getStoredHolidays(),
                        getStoredRamadan(),
                        getStoredOverrides(),
                        getStoredExamPeriod(),
                        periodLeaves
                    );
                    miniComp = ledger.balanceDays || 0;
                }
                const annualRemaining = getStoredAnnualLeaveBalance() - computeAnnualUsedDays(getStoredHolidays());
                const mini = document.createElement("div");
                mini.className = "giu-dayoff-badge";
                mini.style.marginLeft = "auto";
                mini.textContent = `Annual: ${annualRemaining} | Comp: ${miniComp}`;
                settingsActionRow.appendChild(mini);

                const retentionPreview = document.createElement("div");
                retentionPreview.className = "giu-small-note";
                retentionPreview.style.marginTop = "6px";
                retentionPreview.textContent = `Retention preview: ${countRecordsToPrune()} old record(s) eligible for auto-cleanup.`;
                return { row: settingsActionRow, exportPanel: exportPanelData.panel, retentionPreview };
            }

            function createConflictDetectorBox() {
                const conflicts = buildConflictList();
                if (!conflicts.length) {
                    return null;
                }
                const conflictBox = document.createElement("div");
                conflictBox.className = "giu-conflict-box";

                const conflictTitle = document.createElement("div");
                conflictTitle.className = "giu-conflict-title";
                conflictTitle.textContent = "Conflict Detector";
                conflictBox.appendChild(conflictTitle);

                const subtitle = document.createElement("div");
                subtitle.className = "giu-conflict-subtitle";
                subtitle.textContent = `${conflicts.length} date(s) are marked in multiple ways.`;
                conflictBox.appendChild(subtitle);

                const list = document.createElement("div");
                list.className = "giu-conflict-list";
                const MAX_VISIBLE = 15;
                conflicts.slice(0, MAX_VISIBLE).forEach(function (item) {
                    const row = document.createElement("div");
                    row.className = "giu-conflict-row";
                    const dateSpan = document.createElement("span");
                    dateSpan.textContent = item.date;
                    const tagsSpan = document.createElement("span");
                    tagsSpan.className = "giu-conflict-tags";
                    tagsSpan.textContent = item.tags.join(" + ");
                    const actions = document.createElement("span");
                    actions.style.display = "inline-flex";
                    actions.style.gap = "4px";
                    const removeHolidayBtn = createUiButton("Drop Holiday", "giu-comp-action-btn", function () {
                        const updated = getStoredHolidays().filter(function (h) {
                            if (!h) return false;
                            if (h.type === "single") return normalizeYMD(h.date) !== item.date;
                            if (h.type === "range") {
                                const start = normalizeYMD(h.start);
                                const end = normalizeYMD(h.end);
                                if (!start || !end) return false;
                                return !(item.date >= start && item.date <= end);
                            }
                            return true;
                        });
                        saveUndoSnapshot("holidays", `Conflict quick-fix ${item.date}`);
                        setStoredHolidays(updated);
                        renderEnhancedUI();
                    });
                    const removeOverrideBtn = createUiButton("Drop Override", "giu-comp-action-btn", function () {
                        const updated = getStoredOverrides().filter(function (o) { return normalizeYMD(o.date) !== item.date; });
                        saveUndoSnapshot("overrides", `Conflict quick-fix ${item.date}`);
                        setStoredOverrides(updated);
                        renderEnhancedUI();
                    });
                    const removeCompBtn = createUiButton("Drop Comp", "giu-comp-action-btn", function () {
                        const updated = getStoredCompensationLeaves().filter(function (c) { return normalizeYMD(c.date) !== item.date; });
                        saveUndoSnapshot("compensation", `Conflict quick-fix ${item.date}`);
                        setStoredCompensationLeaves(updated);
                        renderEnhancedUI();
                    });
                    actions.appendChild(removeHolidayBtn);
                    actions.appendChild(removeOverrideBtn);
                    actions.appendChild(removeCompBtn);
                    row.appendChild(dateSpan);
                    row.appendChild(tagsSpan);
                    row.appendChild(actions);
                    list.appendChild(row);
                });
                if (conflicts.length > MAX_VISIBLE) {
                    const more = document.createElement("div");
                    more.className = "giu-conflict-more";
                    more.textContent = `...and ${conflicts.length - MAX_VISIBLE} more conflict date(s).`;
                    list.appendChild(more);
                }
                conflictBox.appendChild(list);
                return conflictBox;
            }

            // Berlin scripts only: the branch itself is fixed (Berlin), so the one
            // thing left to set is when the staff member started there. Days before
            // that date use the Cairo weekend rule.
            function createBranchControl() {
                const wrap = document.createElement("div");
                wrap.className = "giu-settings-subsection-body";

                const row = document.createElement("div");
                row.className = "giu-dayoff-row";
                const dateLabel = createUiLabel("gius-branch-start", "Started at the Berlin branch on");
                // dd/mm/yyyy text + calendar button (src/features/attendanceSetup.js),
                // the same control as the setup wizard's; stored as yyyy-mm-dd.
                const dateField = createGiusDateField(S, { id: "gius-branch-start", value: getBranchStart(), max: getTodayLocalYMD() });
                const saveBtn = createUiButton("Save", "giu-add-holiday-btn", function () {
                    const ymd = dateField.value();   // null: text that is not a date
                    if (ymd !== null) setBranchStart(ymd);
                    dateField.setValue(getBranchStart());   // a rejected value visibly reverts
                    renderEnhancedUI();
                });
                saveBtn.id = "gius-branch-start-save";
                row.appendChild(dateLabel);
                row.appendChild(dateField.element);
                row.appendChild(saveBtn);
                wrap.appendChild(row);

                const dateHint = document.createElement("div");
                dateHint.style.marginTop = "6px";
                dateHint.style.opacity = "0.75";
                dateHint.textContent = "Leave empty if you have always worked at the Berlin branch. "
                    + "Days before this date use the Cairo weekend rule (Friday off), so a "
                    + "compensation week spanning the move may be short.";
                wrap.appendChild(dateHint);

                return wrap;
            }

            function createDayOffScheduleTable() {
                const scheduleTableWrap = document.createElement("div");
                scheduleTableWrap.className = "giu-holiday-table-wrap";

                const dayOffSchedule = getStoredDayOffSchedule();
                if (!dayOffSchedule.length) {
                    return null;
                }

                const scheduleTable = document.createElement("table");
                scheduleTable.className = "giu-holiday-table";
                scheduleTable.innerHTML = `
                    <thead>
                        <tr>
                            <th>Effective From</th>
                            <th>Day Off</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;
                const scheduleBody = scheduleTable.querySelector("tbody");
                const pagination = createPagination("dayOffSchedule", dayOffSchedule);

                pagination.pageItems.forEach(function (item) {
                    const tr = document.createElement("tr");
                    const fromTd = document.createElement("td");
                    fromTd.textContent = item.startDate;
                    const dayTd = document.createElement("td");
                    dayTd.textContent = getSelectedDayOffFullName(item.code) || item.code;

                    const removeBtn = createUiButton("Remove", "giu-remove-holiday-btn", function () {
                        const updated = getStoredDayOffSchedule().filter(function (s) {
                            return !(s.startDate === item.startDate && s.code === item.code);
                        });
                        setStoredDayOffSchedule(updated);
                        renderEnhancedUI();
                    });

                    const actionTd = document.createElement("td");
                    actionTd.appendChild(removeBtn);
                    tr.appendChild(fromTd);
                    tr.appendChild(dayTd);
                    tr.appendChild(actionTd);
                    scheduleBody.appendChild(tr);
                });
                scheduleTableWrap.appendChild(scheduleTable);
                scheduleTableWrap.appendChild(pagination.controls);
                return scheduleTableWrap;
            }

            function computeAnnualUsedDays(holidayEntries) {
                const usedSet = new Set();
                (holidayEntries || []).forEach(function (entry) {
                    if (!entry || entry.category !== "annual") return;
                    if (entry.type === "single") {
                        const d = normalizeYMD(entry.date);
                        if (d) usedSet.add(d);
                        return;
                    }
                    if (entry.type === "range") {
                        const s = normalizeYMD(entry.start || "");
                        const e = normalizeYMD(entry.end || "");
                        if (!s || !e || s > e) return;
                        eachYmdInRange(s, e, function (d) { usedSet.add(d); });
                    }
                });
                return usedSet.size;
            }

            function createAnnualLeaveBalanceBox() {
                const annualBalanceBox = document.createElement("div");
                annualBalanceBox.className = "giu-comp-balance-box";
                annualBalanceBox.style.borderColor = "#fbcfe8";
                annualBalanceBox.style.background = "#fff1f2";
                annualBalanceBox.style.color = "#9f1239";
                annualBalanceBox.style.display = "grid";
                annualBalanceBox.style.gap = "8px";

                const annualUsed = computeAnnualUsedDays(getStoredHolidays());
                const annualTotal = getStoredAnnualLeaveBalance();
                const annualRemain = annualTotal - annualUsed;
                const annualRate = getStoredAnnualLeaveAccrualRate();

                const annualRow = document.createElement("div");
                annualRow.style.display = "flex";
                annualRow.style.alignItems = "center";
                annualRow.style.gap = "8px";
                annualRow.style.flexWrap = "wrap";

                const annualLeft = document.createElement("div");
                annualLeft.style.flex = "1 1 auto";
                annualLeft.innerHTML = `
                    <strong style="font-size:13px;">Annual Leave</strong>
                    <span class="giu-annual-balance-badge ${annualRemain >= 0 ? "giu-annual-balance-positive" : "giu-annual-balance-negative"}">
                        Remaining: ${annualRemain} day(s)
                    </span>
                    <span class="giu-annual-balance-badge giu-annual-balance-positive">
                        Accrual: ${annualRate} day(s)/mo
                    </span>
                `;

                const editAnnualBalanceBtn = createUiButton("Edit", "giu-edit-annual-btn", function () {
                    createInlineModalForm("Edit annual leave", [
                        { label: "Remaining balance (days)", value: String(annualRemain) },
                        { label: "Accrual rate (days / month)", value: String(annualRate) }
                    ], function (values) {
                        const parsedRemaining = Number(values[0]);
                        const parsedRate = Number(values[1]);
                        if (!Number.isFinite(parsedRemaining)) {
                            alert("Please enter a valid remaining balance.");
                            return false;
                        }
                        if (!Number.isFinite(parsedRate) || parsedRate < 0) {
                            alert("Please enter a valid accrual rate (0 or more).");
                            return false;
                        }
                        const desiredTotal = Math.max(0, parsedRemaining + annualUsed);
                        setStoredAnnualLeaveBalance(desiredTotal);
                        setStoredAnnualLeaveAccrualRate(parsedRate);
                        renderEnhancedUI();
                        return true;
                    });
                });
                editAnnualBalanceBtn.style.flex = "0 0 auto";

                annualRow.appendChild(annualLeft);
                annualRow.appendChild(editAnnualBalanceBtn);
                annualBalanceBox.appendChild(annualRow);
                return annualBalanceBox;
            }

            function createHolidayManagementSection() {
                const holidaySection = document.createElement("div");
                holidaySection.className = "giu-holiday-section";

                const holidayTitle = document.createElement("div");
                holidayTitle.className = "giu-holiday-title";
                holidayTitle.textContent = "Holidays & Annual Leaves";
                holidaySection.appendChild(holidayTitle);

                const controls = document.createElement("div");
                controls.className = "giu-holiday-controls";

                const categorySelect = createUiSelect("giu-holiday-category", [
                    { value: "holiday", label: "Holiday" },
                    { value: "annual", label: "Annual Leave" }
                ]);
                const modeSelect = createUiSelect("giu-holiday-mode", [
                    { value: "single", label: "Single Date" },
                    { value: "range", label: "Date Range" }
                ]);

                const singleDateInput = createUiInput("date", "giu-holiday-single-date");
                const rangeStartInput = createUiInput("date", "giu-holiday-range-start", { hidden: true });
                const rangeEndInput = createUiInput("date", "giu-holiday-range-end", { hidden: true });

                modeSelect.addEventListener("change", function () {
                    const isRange = modeSelect.value === "range";
                    singleDateInput.style.display = isRange ? "none" : "";
                    rangeStartInput.style.display = isRange ? "" : "none";
                    rangeEndInput.style.display = isRange ? "" : "none";
                });

                const addBtn = createUiButton("Add", "giu-add-holiday-btn", function () {
                    const current = getStoredHolidays();
                    let newEntry = null;

                    if (modeSelect.value === "single") {
                        if (!singleDateInput.value) {
                            alert("Please select a holiday date.");
                            return;
                        }
                        newEntry = normalizeHolidayEntry({
                            type: "single",
                            category: categorySelect.value,
                            date: singleDateInput.value
                        });
                    } else {
                        if (!rangeStartInput.value || !rangeEndInput.value) {
                            alert("Please select start and end dates.");
                            return;
                        }
                        if (rangeStartInput.value > rangeEndInput.value) {
                            alert("Start date cannot be after end date.");
                            return;
                        }
                        newEntry = normalizeHolidayEntry({
                            type: "range",
                            category: categorySelect.value,
                            start: rangeStartInput.value,
                            end: rangeEndInput.value
                        });
                    }

                    if (!newEntry) {
                        alert("Invalid holiday entry.");
                        return;
                    }

                    const newKey = holidayEntryToKey(newEntry);
                    if (current.some(item => holidayEntryToKey(item) === newKey)) {
                        alert("This entry is already added.");
                        return;
                    }

                    current.push(newEntry);
                    current.sort((a, b) => {
                        const aValue = a.type === "single" ? a.date : a.start;
                        const bValue = b.type === "single" ? b.date : b.start;
                        return aValue.localeCompare(bValue);
                    });

                    saveUndoSnapshot("holidays", "Add holiday");
                    setStoredHolidays(current);
                    renderEnhancedUI();
                });

                controls.appendChild(categorySelect);
                controls.appendChild(modeSelect);
                controls.appendChild(singleDateInput);
                controls.appendChild(rangeStartInput);
                controls.appendChild(rangeEndInput);
                controls.appendChild(addBtn);
                controls.appendChild(createScopedUndoButton("holidays", "Undo Holidays", "Undo Holidays", "giu-undo-btn-holidays"));

                holidaySection.appendChild(controls);
                holidaySection.appendChild(createAnnualLeaveBalanceBox());
                holidaySection.appendChild(createHolidayTable());
                return holidaySection;
            }

            function createRamadanSettingsSection() {
                const section = document.createElement("div");
                section.className = "giu-ramadan-section";

                const title = createUiSectionTitle("Ramadan Period", "giu-ramadan-title");
                section.appendChild(title);

                const ramadan = getStoredRamadan();

                const controls = document.createElement("div");
                controls.className = "giu-ramadan-controls";

                const startLabel = createUiLabel("giu-ramadan-start", "Start");
                const startInput = createUiInput("date", "giu-ramadan-start", { value: ramadan.start });

                const endLabel = createUiLabel("giu-ramadan-end", "End");
                const endInput = createUiInput("date", "giu-ramadan-end", { value: ramadan.end });

                const saveBtn = createUiButton("Save", "giu-save-ramadan-btn", function () {
                    if (!startInput.value || !endInput.value) {
                        alert("Please select both start and end dates for Ramadan.");
                        return;
                    }
                    if (startInput.value > endInput.value) {
                        alert("Start date cannot be after end date.");
                        return;
                    }
                    setStoredRamadan(startInput.value, endInput.value);
                    renderEnhancedUI();
                });

                const resetBtn = createUiButton("Reset to Default", "giu-reset-ramadan-btn", function () {
                    clearStoredRamadan();
                    renderEnhancedUI();
                });

                controls.appendChild(startLabel);
                controls.appendChild(startInput);
                controls.appendChild(endLabel);
                controls.appendChild(endInput);
                controls.appendChild(saveBtn);
                controls.appendChild(resetBtn);
                section.appendChild(controls);

                const badge = document.createElement("div");
                badge.className = "giu-ramadan-badge";
                badge.textContent = `Ramadan: ${ramadan.start} → ${ramadan.end}`;
                section.appendChild(badge);
                return section;
            }

            function createExamSettingsSection() {
                const examSection = document.createElement("div");
                examSection.className = "giu-exam-section";
                examSection.appendChild(createUiSectionTitle("Exam Period", "giu-exam-title"));
                examSection.appendChild(createUiDescription(
                    "Hours after 7:00 PM (6:00 PM in Ramadan) are not counted by HR. During exam periods the cap can be increased. Set the exam dates and the new cap time below.",
                    "font-size:11px;color:#6b7280;margin:0 0 4px;line-height:1.4;"
                ));

                const examPeriod = getStoredExamPeriod();

                const examControls = document.createElement("div");
                examControls.className = "giu-exam-controls";

                const startLabel = createUiLabel("giu-exam-start", "Start");
                const startInput = createUiInput("date", "giu-exam-start", { value: examPeriod ? examPeriod.start : "" });
                const endLabel = createUiLabel("giu-exam-end", "End");
                const endInput = createUiInput("date", "giu-exam-end", { value: examPeriod ? examPeriod.end : "" });
                const capLabel = createUiLabel("giu-exam-cap-hour", "Cap");

                const capHourInput = createUiInput("number", "giu-exam-cap-hour", {
                    placeholder: "7", min: 1, max: 12, step: 1, width: "55px"
                });
                const capMinInput = createUiInput("number", "giu-exam-cap-min", {
                    placeholder: "00", min: 0, max: 59, step: 1, width: "55px"
                });

                const capAmPm = createUiSelect("giu-exam-cap-ampm", [
                    { value: "AM", label: "AM" },
                    { value: "PM", label: "PM" }
                ]);

                if (examPeriod) {
                    let dispH = examPeriod.capHour % 12;
                    if (dispH === 0) dispH = 12;
                    capHourInput.value = String(dispH);
                    capMinInput.value = String(examPeriod.capMinute);
                    capAmPm.value = examPeriod.capHour >= 12 ? "PM" : "AM";
                } else {
                    capHourInput.value = "7";
                    capMinInput.value = "0";
                    capAmPm.value = "PM";
                }

                const saveBtn = createUiButton("Save", "giu-save-exam-btn", function () {
                    if (!startInput.value || !endInput.value) {
                        alert("Please select both start and end dates for the exam period.");
                        return;
                    }
                    if (startInput.value > endInput.value) {
                        alert("Start date cannot be after end date.");
                        return;
                    }
                    const capH12 = parseInt(capHourInput.value, 10);
                    const capM = parseInt(capMinInput.value, 10);
                    const ampm = capAmPm.value;
                    if (isNaN(capH12) || capH12 < 1 || capH12 > 12 || isNaN(capM) || capM < 0 || capM > 59) {
                        alert("Please enter a valid cap time (H: 1-12, M: 0-59).");
                        return;
                    }
                    let capH24 = capH12;
                    if (ampm === "AM" && capH12 === 12) capH24 = 0;
                    if (ampm === "PM" && capH12 !== 12) capH24 = capH12 + 12;
                    setStoredExamPeriod(startInput.value, endInput.value, capH24, capM);
                    renderEnhancedUI();
                });

                const clearBtn = createUiButton("Clear", "giu-clear-exam-btn", function () {
                    clearStoredExamPeriod();
                    renderEnhancedUI();
                });

                examControls.appendChild(startLabel);
                examControls.appendChild(startInput);
                examControls.appendChild(endLabel);
                examControls.appendChild(endInput);
                examControls.appendChild(capLabel);
                examControls.appendChild(capHourInput);
                examControls.appendChild(capMinInput);
                examControls.appendChild(capAmPm);
                examControls.appendChild(saveBtn);
                examControls.appendChild(clearBtn);
                examSection.appendChild(examControls);

                if (examPeriod) {
                    const examBadge = document.createElement("div");
                    examBadge.className = "giu-exam-badge";
                    examBadge.textContent = `Exam: ${examPeriod.start} → ${examPeriod.end} (Cap: ${formatTime12(examPeriod.capHour, examPeriod.capMinute)})`;
                    examSection.appendChild(examBadge);
                }
                return examSection;
            }

            function createConfigPanel(selectedDayCode, selectedDayFullName, periods, onDayChange, initialExpanded) {
                const { panel, bodyWrap, bodyInner } = createConfigPanelHeader(initialExpanded);

                // Berlin scripts only, mounted first: the start date decides which
                // weekend rule every earlier day uses. The Cairo scripts have no
                // Branch section — they always follow the Cairo rule.
                if (SOURCE) {
                    bodyInner.appendChild(wrapSettingsSection("branch", "Branch", createBranchControl(), true));
                }

                // Default the "Apply from" date to the earliest attendance row so a first-time
                // manual day-off set applies retroactively over the loaded data, not just today.
                let firstAttendanceDate = null;
                (periods || []).forEach(function (p) {
                    (p.rows || []).forEach(function (r) {
                        const ymd = normalizeYMD(r && r.date ? r.date : "");
                        if (ymd && (!firstAttendanceDate || ymd < firstAttendanceDate)) firstAttendanceDate = ymd;
                    });
                });

                // Day-off controls + persisted apply-from schedule
                bodyInner.appendChild(createDayOffControlsRow(selectedDayCode, selectedDayFullName, onDayChange, firstAttendanceDate));

                const dayOffScheduleTable = createDayOffScheduleTable();
                if (dayOffScheduleTable) {
                    bodyInner.appendChild(wrapSettingsSection("dayoffSchedule", "Day-Off Schedule", dayOffScheduleTable, false));
                }
                bodyInner.appendChild(createUiDivider());

                bodyInner.appendChild(wrapSettingsSection("holidays", "Holidays & Annual Leaves", createHolidayManagementSection(), false));
                bodyInner.appendChild(createUiDivider());

                bodyInner.appendChild(wrapSettingsSection("overrides", "Attendance Overrides", createOverrideSection(), false));
                bodyInner.appendChild(createUiDivider());

                bodyInner.appendChild(wrapSettingsSection("compensations", "Compensations", createCompensationSection(periods, selectedDayFullName), false));
                const conflictBox = createConflictDetectorBox();
                if (conflictBox) bodyInner.appendChild(wrapSettingsSection("conflicts", "Conflict Detector", conflictBox, false));
                bodyInner.appendChild(createUiDivider());

                const ramadanSection = createRamadanSettingsSection();
                bodyInner.appendChild(wrapSettingsSection("ramadan", "Ramadan Period", ramadanSection, false));
                bodyInner.appendChild(createUiDivider());

                bodyInner.appendChild(wrapSettingsSection("exam", "Exam Period", createExamSettingsSection(), false));
                bodyInner.appendChild(createUiDivider());

                const settingsActions = createSettingsActionsRow();
                bodyInner.appendChild(settingsActions.row);
                bodyInner.appendChild(settingsActions.retentionPreview);
                bodyInner.appendChild(settingsActions.exportPanel);

                bodyWrap.appendChild(bodyInner);
                panel.appendChild(bodyWrap);
                return panel;
            }

            function createOverrideTable() {
                const container = document.createElement("div");
                container.className = "giu-holiday-table-wrap";

                const overrides = getStoredOverrides();
                const conflictTagMap = buildConflictTagMap();

                if (!overrides.length) {
                    return null;
                }

                const filterBar = document.createElement("div");
                filterBar.className = "giu-dayoff-row giu-table-tools";
                const typeFilter = createUiSelect("", [
                    { value: "", label: "All override types" },
                    { value: "full_day", label: "Full Day" },
                    { value: "custom_actual", label: "Custom Actual" }
                ], getTableFilterValue("overrides", "type", ""));
                const dateFilter = createUiInput("text", "", {
                    placeholder: "Filter by date (YYYY-MM)",
                    value: getTableFilterValue("overrides", "date", "")
                });
                dateFilter.style.minWidth = "160px";

                const table = document.createElement("table");
                table.className = "giu-holiday-table";

                table.innerHTML = `
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="giu-select-all" /></th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Custom Hours</th>
                            <th>Reason</th>
                            <th>Note</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;

                const tbody = table.querySelector("tbody");
                const getFiltered = function () {
                    const tf = typeFilter.value;
                    const df = String(dateFilter.value || "").trim();
                    return overrides.filter(function (ov) {
                        if (tf && ov.type !== tf) return false;
                        if (df && String(ov.date || "").indexOf(df) === -1) return false;
                        return true;
                    });
                };
                const pagination = createPagination("overrides", getFiltered());
                const selectAll = table.querySelector(".giu-select-all");
                const bulkBtn = createUiButton("Remove Selected", "giu-remove-holiday-btn", function () {
                    const checked = Array.from(tbody.querySelectorAll("input[type='checkbox'][data-date]:checked"));
                    if (!checked.length) return;
                    const dates = new Set(checked.map(function (el) { return el.getAttribute("data-date"); }));
                    const updated = getStoredOverrides().filter(function (ov) { return !dates.has(normalizeYMD(ov.date)); });
                    saveUndoSnapshot("overrides", `Bulk remove ${checked.length} overrides`);
                    setStoredOverrides(updated);
                    renderEnhancedUI();
                });
                bulkBtn.style.marginLeft = "auto";
                filterBar.appendChild(typeFilter);
                filterBar.appendChild(dateFilter);
                filterBar.appendChild(bulkBtn);
                container.appendChild(filterBar);

                pagination.pageItems.forEach(function (ov) {
                    const tr = document.createElement("tr");
                    const pickTd = document.createElement("td");
                    const pick = document.createElement("input");
                    pick.type = "checkbox";
                    pick.setAttribute("data-date", ov.date);
                    pickTd.appendChild(pick);

                    const dateTd = document.createElement("td");
                    dateTd.textContent = ov.date;
                    const tags = conflictTagMap.get(ov.date);
                    if (tags && tags.length > 1) {
                        dateTd.appendChild(createConflictBadge("Conflict", tags.join(" + ")));
                    }

                    const typeTd = document.createElement("td");
                    typeTd.textContent = getOverrideTypeLabel(ov.type);

                    const hoursTd = document.createElement("td");
                    const ovSec = ov.actualSeconds != null ? ov.actualSeconds : (ov.actualMinutes != null ? ov.actualMinutes * 60 : null);
                    if (ov.type === "custom_actual" && ovSec != null) {
                        const hms = secondsToHMS(ovSec);
                        hoursTd.textContent = formatHMS(hms.hours, hms.minutes, hms.seconds);
                    } else {
                        hoursTd.textContent = "—";
                    }

                    const reasonTd = document.createElement("td");
                    reasonTd.textContent = ov.reason || "—";

                    const noteTd = document.createElement("td");
                    noteTd.textContent = ov.note || "—";

                    const actionTd = document.createElement("td");
                    actionTd.appendChild(createUiButton("Remove", "giu-remove-holiday-btn", function () {
                        const updated = getStoredOverrides().filter(item => item.date !== ov.date);
                        saveUndoSnapshot("overrides", "Remove attendance override");
                        setStoredOverrides(updated);
                        renderEnhancedUI();
                    }));

                    tr.appendChild(pickTd);
                    tr.appendChild(dateTd);
                    tr.appendChild(typeTd);
                    tr.appendChild(hoursTd);
                    tr.appendChild(reasonTd);
                    tr.appendChild(noteTd);
                    tr.appendChild(actionTd);

                    tbody.appendChild(tr);
                });
                if (selectAll) {
                    selectAll.addEventListener("change", function () {
                        const boxes = tbody.querySelectorAll("input[type='checkbox'][data-date]");
                        boxes.forEach(function (b) { b.checked = !!selectAll.checked; });
                    });
                }
                typeFilter.addEventListener("change", function () {
                    setTableFilterValue("overrides", "type", typeFilter.value || "");
                    renderEnhancedUI();
                });
                dateFilter.addEventListener("change", function () {
                    setTableFilterValue("overrides", "date", dateFilter.value || "");
                    renderEnhancedUI();
                });

                container.appendChild(table);
                container.appendChild(pagination.controls);
                return container;
            }

            function createOverrideSection() {
                const section = document.createElement("div");
                section.className = "giu-override-section";

                section.appendChild(createUiSectionTitle(
                    "Attendance Overrides (In/Out Forms, Misson Days)",
                    "giu-override-title"
                ));
                section.appendChild(createUiDescription(
                    'Manually override attendance for specific dates (e.g. IN/OUT forms or mission days). Use "Full Day Counted" to count a day as fully attended, or "Custom Actual Hours" to set exact worked hours.'
                ));

                const controls = document.createElement("div");
                controls.className = "giu-override-controls";

                const dateInput = createUiInput("date", "giu-override-date");
                const typeSelect = createUiSelect("giu-override-type", [
                    { value: "full_day", label: "Full Day Counted" },
                    { value: "custom_actual", label: "Custom Actual Hours" }
                ]);
                const hoursInput = createUiInput("number", "giu-override-hours", {
                    placeholder: "H", min: 0, max: 23, step: 1, hidden: true, width: "55px"
                });
                const minutesInput = createUiInput("number", "giu-override-minutes", {
                    placeholder: "M", min: 0, max: 59, step: 1, hidden: true, width: "55px"
                });
                const reasonInput = createUiInput("text", "giu-override-reason", { placeholder: "Reason (optional)" });
                const noteInput = createUiInput("text", "giu-override-note", { placeholder: "Note (optional)" });

                typeSelect.addEventListener("change", function () {
                    const show = typeSelect.value === "custom_actual" ? "" : "none";
                    hoursInput.style.display = show;
                    minutesInput.style.display = show;
                });

                const addBtn = createUiButton("Add", "giu-add-override-btn", function () {
                    if (!dateInput.value) {
                        alert("Please select a date for the override.");
                        return;
                    }
                    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateInput.value)) {
                        alert("Invalid date format.");
                        return;
                    }

                    const current = getStoredOverrides();
                    if (current.some(o => o.date === dateInput.value)) {
                        alert("An override for this date already exists. Remove it first.");
                        return;
                    }

                    const entry = { date: dateInput.value, type: typeSelect.value };

                    if (typeSelect.value === "custom_actual") {
                        const h = parseInt(hoursInput.value, 10) || 0;
                        const m = parseInt(minutesInput.value, 10) || 0;
                        if (h < 0 || h > 23 || m < 0 || m > 59 || (h === 0 && m === 0)) {
                            alert("Please enter valid hours (0-23) and minutes (0-59).");
                            return;
                        }
                        entry.actualSeconds = h * 3600 + m * 60;
                    }

                    const reason = reasonInput.value.trim();
                    if (reason) entry.reason = reason;
                    const note = noteInput.value.trim();
                    if (note) entry.note = note;

                    current.push(entry);
                    current.sort(function (a, b) { return a.date.localeCompare(b.date); });
                    saveUndoSnapshot("overrides", "Add attendance override");
                    setStoredOverrides(current);
                    renderEnhancedUI();
                });

                controls.appendChild(dateInput);
                controls.appendChild(typeSelect);
                controls.appendChild(hoursInput);
                controls.appendChild(minutesInput);
                controls.appendChild(reasonInput);
                controls.appendChild(noteInput);
                controls.appendChild(addBtn);
                controls.appendChild(createScopedUndoButton("overrides", "Undo Overrides", "Undo Overrides", "giu-undo-btn-overrides"));

                section.appendChild(controls);
                const overrideTable = createOverrideTable();
                if (overrideTable) section.appendChild(overrideTable);
                return section;
            }

            function validateCompensationLeaveDate(
                date,
                selectedDayOffFullName,
                periods,
                compensationLeaves,
                holidays,
                ramadan,
                overrides,
                examPeriod
            ) {
                const normalizedDate = normalizeYMD(date);
                if (!normalizedDate) {
                    return { ok: false, message: "Invalid date format." };
                }

                if (!selectedDayOffFullName) {
                    return { ok: false, message: "Please select your weekly day off first." };
                }

                const allRows = (periods || []).flatMap(function (p) { return p.rows || []; });
                if (!allRows.length) {
                    return {
                        ok: false,
                        message: "Compensation leave requires attendance rows in the report table."
                    };
                }

                const periodKey = getPayrollPeriodKey(normalizedDate);
                const periodBounds = getPayrollPeriodBounds(periodKey);
                if (!periodBounds || !periodBounds.start || !periodBounds.end) {
                    return { ok: false, message: "Invalid compensation period for selected date." };
                }

                const dayName = formatDateToDayName(normalizedDate);
                const effectiveDayOff = getDayOffFullNameForDate(normalizedDate, getSelectedDayOffCode());
                if (isFixedNonWorkingDay(dayName, normalizedDate)) {
                    return { ok: false, message: `Compensation leave cannot be applied on ${fixedOffDayFor(normalizedDate)}.` };
                }
                if (effectiveDayOff && dayName === effectiveDayOff) {
                    return { ok: false, message: "Compensation leave cannot be applied on your weekly day off." };
                }
                if (isDateHoliday(normalizedDate, holidays)) {
                    return { ok: false, message: "Compensation leave cannot be applied on a holiday/leave date." };
                }

                const periodRows = allRows.filter(function (row) {
                    const rowDate = normalizeYMD(row && row.date ? row.date : "");
                    return rowDate && isBetweenDates(periodBounds.start, periodBounds.end, rowDate);
                });
                const periodLeaves = (compensationLeaves || []).filter(function (leave) {
                    const leaveDate = normalizeYMD(leave && leave.date ? leave.date : "");
                    return leaveDate && getPayrollPeriodKey(leaveDate) === periodKey;
                });

                const ledger = buildCompensationLedgerForPeriod(
                    periodRows,
                    periodBounds.start,
                    periodBounds.end,
                    holidays,
                    ramadan,
                    overrides,
                    examPeriod,
                    periodLeaves
                );

                if ((ledger.balanceDays || 0) < 1) {
                    return {
                        ok: false,
                        message:
                            `Insufficient compensation balance for payroll period (${periodBounds.start} → ${periodBounds.end}). ` +
                            `Available: ${ledger.balanceDays || 0} day(s). ` +
                            `Required: 1 day.`
                    };
                }

                return {
                    ok: true,
                    balanceDays: ledger.balanceDays || 0
                };
            }

            function createCompensationLedgerTable(periods, selectedDayOffFullName) {
                const container = document.createElement("div");
                container.className = "giu-holiday-table-wrap";

                const holidays = getStoredHolidays();
                const ramadan = getStoredRamadan();
                const overrides = getStoredOverrides();
                const examPeriod = getStoredExamPeriod();
                const compensationLeaves = getStoredCompensationLeaves();
                const conflictTagMap = buildConflictTagMap();
                const allRows = (periods || []).flatMap(function (p) { return p.rows || []; });

                const rows = [];
                const periodKeys = new Set();
                allRows.forEach(function (row) {
                    const date = normalizeYMD(row && row.date ? row.date : "");
                    if (date) periodKeys.add(getPayrollPeriodKey(date));
                });
                compensationLeaves.forEach(function (leave) {
                    const date = normalizeYMD(leave && leave.date ? leave.date : "");
                    if (date) periodKeys.add(getPayrollPeriodKey(date));
                });

                Array.from(periodKeys).sort().forEach(function (periodKey) {
                    const period = getPayrollPeriodBounds(periodKey);
                    if (!period || !period.start || !period.end) return;
                    const periodRows = allRows.filter(function (row) {
                        const rowDate = normalizeYMD(row && row.date ? row.date : "");
                        return rowDate && isBetweenDates(period.start, period.end, rowDate);
                    });
                    const periodLeaves = compensationLeaves.filter(function (leave) {
                        const leaveDate = normalizeYMD(leave && leave.date ? leave.date : "");
                        return leaveDate && getPayrollPeriodKey(leaveDate) === periodKey;
                    });

                    const ledger = buildCompensationLedgerForPeriod(
                        periodRows,
                        period.start,
                        period.end,
                        holidays,
                        ramadan,
                        overrides,
                        examPeriod,
                        periodLeaves
                    );

                    for (const entry of ledger.entries) {
                        rows.push({
                            period: `${period.start} → ${period.end}`,
                            entry
                        });
                    }
                });

                rows.sort(function (a, b) {
                    if (a.entry.date !== b.entry.date) return b.entry.date.localeCompare(a.entry.date);
                    const weight = { earn: 0, use: 1, use_invalid: 2 };
                    return (weight[a.entry.kind] || 9) - (weight[b.entry.kind] || 9);
                });

                if (!rows.length) {
                    return null;
                }

                const filterBar = document.createElement("div");
                filterBar.className = "giu-dayoff-row giu-table-tools";
                const kindFilter = createUiSelect("", [
                    { value: "", label: "All entries" },
                    { value: "earn", label: "Earned" },
                    { value: "use", label: "Used" },
                    { value: "use_invalid", label: "Rejected" }
                ], getTableFilterValue("compensationLedger", "kind", ""));
                const dateFilter = createUiInput("text", "", {
                    placeholder: "Filter by date (YYYY-MM)",
                    value: getTableFilterValue("compensationLedger", "date", "")
                });
                dateFilter.style.minWidth = "160px";

                const table = document.createElement("table");
                table.className = "giu-holiday-table";
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="giu-select-all" /></th>
                            <th>Payroll Period (11→10)</th>
                            <th>Date</th>
                            <th>Entry</th>
                            <th>Days</th>
                            <th>Reason</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;

                const tbody = table.querySelector("tbody");
                const getFiltered = function () {
                    const kf = kindFilter.value;
                    const df = String(dateFilter.value || "").trim();
                    return rows.filter(function (r) {
                        if (kf && r.entry.kind !== kf) return false;
                        if (df && String(r.entry.date || "").indexOf(df) === -1) return false;
                        return true;
                    });
                };
                const pagination = createPagination("compensationLedger", getFiltered());
                const selectAll = table.querySelector(".giu-select-all");
                const bulkBtn = createUiButton("Remove Selected", "giu-remove-holiday-btn", function () {
                    const checked = Array.from(tbody.querySelectorAll("input[type='checkbox'][data-date]:checked"));
                    if (!checked.length) return;
                    const dates = new Set(checked.map(function (el) { return el.getAttribute("data-date"); }));
                    const updated = getStoredCompensationLeaves().filter(function (c) {
                        return !dates.has(normalizeYMD(c.date));
                    });
                    saveUndoSnapshot("compensation", `Bulk remove ${checked.length} compensation leave`);
                    setStoredCompensationLeaves(updated);
                    renderEnhancedUI();
                });
                bulkBtn.style.marginLeft = "auto";
                filterBar.appendChild(kindFilter);
                filterBar.appendChild(dateFilter);
                filterBar.appendChild(bulkBtn);
                container.appendChild(filterBar);

                pagination.pageItems.forEach(function (rowData) {
                    const tr = document.createElement("tr");
                    const entry = rowData.entry;
                    const pickTd = document.createElement("td");
                    if (entry.kind === "use" || entry.kind === "use_invalid") {
                        const pick = document.createElement("input");
                        pick.type = "checkbox";
                        pick.setAttribute("data-date", entry.date);
                        pickTd.appendChild(pick);
                    } else {
                        pickTd.textContent = "—";
                    }

                    const periodTd = document.createElement("td");
                    periodTd.textContent = rowData.period;

                    const dateTd = document.createElement("td");
                    dateTd.textContent = entry.date;
                    const tags = conflictTagMap.get(entry.date);
                    if (tags && tags.length > 1) {
                        dateTd.appendChild(createConflictBadge("Conflict", tags.join(" + ")));
                    }

                    const entryTd = document.createElement("td");
                    if (entry.kind === "earn") {
                        entryTd.textContent = "Earned";
                    } else if (entry.kind === "use") {
                        entryTd.textContent = "Used";
                    } else {
                        entryTd.textContent = "Use (Rejected target)";
                    }

                    const hoursTd = document.createElement("td");
                    hoursTd.textContent = entry.kind === "use_invalid" ? "0" : "1";

                    const reasonTd = document.createElement("td");
                    reasonTd.textContent = entry.reason || "—";

                    const actionTd = document.createElement("td");

                    if (entry.kind === "use" || entry.kind === "use_invalid") {
                        const editBtn = createUiButton("Edit", "giu-comp-action-btn", function () {
                            const currentLeaves = getStoredCompensationLeaves();
                            const target = currentLeaves.find(item => item.date === entry.date);
                            if (!target) {
                                alert("This compensation leave entry no longer exists.");
                                return;
                            }

                            const baseLeaves = currentLeaves.filter(item => item.date !== target.date);
                            createInlineModalPrompt("Edit compensation leave date (YYYY-MM-DD)", target.date, function (dateInputValue) {
                                const newDate = normalizeYMD(dateInputValue);
                                if (!newDate) {
                                    alert("Invalid date format.");
                                    return false;
                                }
                                if (baseLeaves.some(item => item.date === newDate)) {
                                    alert("A compensation leave already exists for this date.");
                                    return false;
                                }
                                createInlineModalPrompt("Edit reason (optional)", target.reason || "", function (reasonInputValue) {
                                    const newReason = String(reasonInputValue || "").trim();
                                    const validation = validateCompensationLeaveDate(
                                        newDate,
                                        selectedDayOffFullName,
                                        periods,
                                        baseLeaves,
                                        holidays,
                                        ramadan,
                                        overrides,
                                        examPeriod
                                    );
                                    if (!validation.ok) {
                                        alert(validation.message);
                                        return false;
                                    }
                                    const updatedEntry = { date: newDate };
                                    if (newReason) updatedEntry.reason = newReason;
                                    baseLeaves.push(updatedEntry);
                                    saveUndoSnapshot("compensation", "Edit compensation leave");
                                    setStoredCompensationLeaves(baseLeaves);
                                    renderEnhancedUI();
                                    return true;
                                });
                                return true;
                            });
                        });

                        const removeBtn = createUiButton("Remove", "giu-remove-holiday-btn", function () {
                            const updated = getStoredCompensationLeaves().filter(item => item.date !== entry.date);
                            saveUndoSnapshot("compensation", "Remove compensation leave");
                            setStoredCompensationLeaves(updated);
                            renderEnhancedUI();
                        });

                        actionTd.appendChild(editBtn);
                        actionTd.appendChild(removeBtn);
                    } else {
                        actionTd.textContent = "—";
                    }

                    tr.appendChild(pickTd);
                    tr.appendChild(periodTd);
                    tr.appendChild(dateTd);
                    tr.appendChild(entryTd);
                    tr.appendChild(hoursTd);
                    tr.appendChild(reasonTd);
                    tr.appendChild(actionTd);
                    tbody.appendChild(tr);
                });
                if (selectAll) {
                    selectAll.addEventListener("change", function () {
                        const boxes = tbody.querySelectorAll("input[type='checkbox'][data-date]");
                        boxes.forEach(function (b) { b.checked = !!selectAll.checked; });
                    });
                }
                kindFilter.addEventListener("change", function () {
                    setTableFilterValue("compensationLedger", "kind", kindFilter.value || "");
                    renderEnhancedUI();
                });
                dateFilter.addEventListener("change", function () {
                    setTableFilterValue("compensationLedger", "date", dateFilter.value || "");
                    renderEnhancedUI();
                });

                container.appendChild(table);
                container.appendChild(pagination.controls);
                return container;
            }

            function createCompensationSection(periods, selectedDayOffFullName) {
                const section = document.createElement("div");
                section.className = "giu-override-section";

                const title = document.createElement("div");
                title.className = "giu-override-title";
                title.textContent = "Compensation Days";
                section.appendChild(title);

                section.appendChild(createUiDescription(
                    `If you work on your selected weekly day off, or on ${fixedOffDay()} itself, you earn a replacement compensation day to take within the same payroll month (11→10). Working both in one week earns two.`,
                    "font-size:11px;color:#6b7280;margin:0 0 8px;line-height:1.4;"
                ));

                const controls = document.createElement("div");
                controls.className = "giu-override-controls";

                const leaveDateInput = createUiInput("date", "giu-comp-leave-date");
                const reasonInput = createUiInput("text", "giu-comp-leave-reason", { placeholder: "Reason (optional)" });

                const addBtn = createUiButton("Add Compensation", "giu-add-comp-btn", function () {
                    const date = normalizeYMD(leaveDateInput.value || "");
                    if (!date) {
                        alert("Please select a valid compensation leave date.");
                        return;
                    }

                    const currentLeaves = getStoredCompensationLeaves();
                    if (currentLeaves.some(item => item.date === date)) {
                        alert("A compensation leave already exists for this date.");
                        return;
                    }

                    const holidays = getStoredHolidays();
                    const ramadan = getStoredRamadan();
                    const overrides = getStoredOverrides();
                    const examPeriod = getStoredExamPeriod();

                    const validation = validateCompensationLeaveDate(
                        date,
                        selectedDayOffFullName,
                        periods,
                        currentLeaves,
                        holidays,
                        ramadan,
                        overrides,
                        examPeriod
                    );

                    if (!validation.ok) {
                        alert(validation.message);
                        return;
                    }

                    const entry = { date };
                    const reason = reasonInput.value.trim();
                    if (reason) entry.reason = reason;

                    currentLeaves.push(entry);
                    saveUndoSnapshot("compensation", "Add compensation leave");
                    setStoredCompensationLeaves(currentLeaves);
                    renderEnhancedUI();
                });

                controls.appendChild(leaveDateInput);
                controls.appendChild(reasonInput);
                controls.appendChild(addBtn);
                controls.appendChild(createScopedUndoButton("compensation", "Undo Compensation", "Undo Compensation", "giu-undo-btn-compensation"));
                section.appendChild(controls);

                const balanceBox = document.createElement("div");
                balanceBox.className = "giu-comp-balance-box";

                if (!selectedDayOffFullName) {
                    balanceBox.textContent = "Select your weekly day off to start earning and using compensation balance.";
                } else {
                    const today = getTodayLocalYMD();
                    const currentPeriodKey = getPayrollPeriodKey(today);
                    const currentPeriod = getPayrollPeriodBounds(currentPeriodKey);
                    const allRows = (periods || []).flatMap(function (p) { return p.rows || []; });

                    if (!currentPeriod || !allRows.length) {
                        balanceBox.textContent = "Current payroll period balance cannot be calculated because report rows are not loaded.";
                    } else {
                        const holidays = getStoredHolidays();
                        const ramadan = getStoredRamadan();
                        const overrides = getStoredOverrides();
                        const examPeriod = getStoredExamPeriod();
                        const periodRows = allRows.filter(function (row) {
                            const rowDate = normalizeYMD(row && row.date ? row.date : "");
                            return rowDate && isBetweenDates(currentPeriod.start, currentPeriod.end, rowDate);
                        });
                        const periodLeaves = getStoredCompensationLeaves().filter(function (leave) {
                            const leaveDate = normalizeYMD(leave && leave.date ? leave.date : "");
                            return leaveDate && getPayrollPeriodKey(leaveDate) === currentPeriodKey;
                        });

                        const ledger = buildCompensationLedgerForPeriod(
                            periodRows,
                            currentPeriod.start,
                            currentPeriod.end,
                            holidays,
                            ramadan,
                            overrides,
                            examPeriod,
                            periodLeaves
                        );

                        const earnedDays = ledger.earnedDays || 0;
                        const usedDays = ledger.usedDays || 0;
                        const balanceDays = ledger.balanceDays || 0;
                        const balanceClass = balanceDays >= 0
                            ? "giu-comp-balance-positive"
                            : "giu-comp-balance-negative";

                        balanceBox.innerHTML = `
                            <div>
                                Compensations Balance (${currentPeriod.start} → ${currentPeriod.end})
                                <span class="giu-comp-balance-badge ${balanceClass}">
                                    ${balanceDays} day(s)
                                </span>
                            </div>
                            <div>Compensations earned: ${earnedDays}</div>
                            <div>Compensations used: ${usedDays}</div>
                        `;
                    }
                }

                section.appendChild(balanceBox);
                const compensationTable = createCompensationLedgerTable(periods || [], selectedDayOffFullName);
                if (compensationTable) section.appendChild(compensationTable);

                return section;
            }

            // ═══════════════════════════════════════════════════════════
            //  DOM / Table Parsing
            // ═══════════════════════════════════════════════════════════

            function getAttendanceRows(root) {
                const scope = root || document;
                const table = scope.getElementById("MainContent_DG_SwiftReport");
                if (!table) return [];

                const rows = Array.from(table.rows || []);
                if (!rows.length) return [];

                const indexes = detectAttendanceColumnIndexes(rows);
                if (!indexes || indexes.dateIndex === -1 || indexes.durationIndex === -1) {
                    console.log("Could not detect Day/Duration columns.");
                    return [];
                }

                const result = [];

                for (const row of rows) {
                    const cells = Array.from(row.cells || []);
                    if (!cells.length) continue;

                    const dateRaw = (cells[indexes.dateIndex]?.textContent || "").trim();
                    const date = normalizeYMD(dateRaw);
                    const duration = (cells[indexes.durationIndex]?.textContent || "").trim();
                    const firstIn = indexes.firstInIndex !== -1 ? (cells[indexes.firstInIndex]?.textContent || "").trim() : "";
                    const lastOut = indexes.lastOutIndex !== -1 ? (cells[indexes.lastOutIndex]?.textContent || "").trim() : "";

                    if (!date) continue;

                    const normalizedDuration = duration.replace(/\s+/g, "");
                    result.push({
                        date,
                        duration: /^\d{1,2}:\d{2}:\d{2}$/.test(normalizedDuration) ? normalizedDuration : "00:00:00",
                        firstIn,
                        lastOut
                    });
                }

                return result;
            }

            function getPayrollPeriodKey(dateStr) {
                const [y, m, d] = dateStr.split("-").map(Number);

                if (d >= 11) {
                    return `${y}-${pad2(m)}`;
                }

                let prevMonth = m - 1;
                let year = y;

                if (prevMonth === 0) {
                    prevMonth = 12;
                    year -= 1;
                }

                return `${year}-${pad2(prevMonth)}`;
            }

            function getPayrollPeriodBounds(periodKey) {
                const [year, month] = periodKey.split("-").map(Number);
                const start = `${year}-${pad2(month)}-11`;

                let nextMonth = month + 1;
                let nextYear = year;

                if (nextMonth === 13) {
                    nextMonth = 1;
                    nextYear += 1;
                }

                const end = `${nextYear}-${pad2(nextMonth)}-10`;
                return { start, end };
            }

            function getPayrollPeriodLabel(periodKey) {
                const { start, end } = getPayrollPeriodBounds(periodKey);
                return `${start} → ${end}`;
            }

            function toYmdUtc(dateObj) {
                return `${dateObj.getUTCFullYear()}-${pad2(dateObj.getUTCMonth() + 1)}-${pad2(dateObj.getUTCDate())}`;
            }

            // Compensation week ends on the branch's fixed off-day.
            // Cairo: Sat -> Fri (identical to the previous hardcoded behaviour).
            // Berlin: Mon -> Sun.
            function getCompensationWeekBounds(dateStr) {
                const normalized = normalizeYMD(dateStr);
                if (!normalized) return null;
                const source = new Date(`${normalized}T00:00:00Z`);
                if (Number.isNaN(source.getTime())) return null;

                const weekStartIndex = (fixedOffIndex() + 1) % 7; // day after the off-day
                const day = source.getUTCDay();                    // 0=Sun ... 6=Sat
                const daysSinceStart = (day - weekStartIndex + 7) % 7;

                const startDate = new Date(source.getTime());
                startDate.setUTCDate(startDate.getUTCDate() - daysSinceStart);

                const endDate = new Date(startDate.getTime());
                endDate.setUTCDate(endDate.getUTCDate() + 6);

                const start = toYmdUtc(startDate);
                const end = toYmdUtc(endDate);
                return {
                    key: start,
                    start,
                    end,
                    label: `${start} → ${end}`
                };
            }

            function eachYmdInRange(start, end, callback) {
                const startDate = new Date(`${start}T00:00:00Z`);
                const endDate = new Date(`${end}T00:00:00Z`);
                if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return;

                const cursor = new Date(startDate.getTime());
                while (cursor <= endDate) {
                    const ymd = `${cursor.getUTCFullYear()}-${pad2(cursor.getUTCMonth() + 1)}-${pad2(cursor.getUTCDate())}`;
                    callback(ymd);
                    cursor.setUTCDate(cursor.getUTCDate() + 1);
                }
            }

            function getHolidayDatesInPeriod(holidays, periodStart, periodEnd) {
                const dates = new Set();
                const normalizedStart = normalizeYMD(periodStart);
                const normalizedEnd = normalizeYMD(periodEnd);
                if (!normalizedStart || !normalizedEnd) return dates;

                for (const holiday of holidays) {
                    if (holiday.type === "single") {
                        const singleDate = normalizeYMD(holiday.date);
                        if (singleDate && isBetweenDates(normalizedStart, normalizedEnd, singleDate)) {
                            dates.add(singleDate);
                        }
                        continue;
                    }

                    if (holiday.type === "range") {
                        const rangeStart = normalizeYMD(holiday.start);
                        const rangeEnd = normalizeYMD(holiday.end);
                        if (!rangeStart || !rangeEnd) continue;

                        const intersectStart = rangeStart > normalizedStart ? rangeStart : normalizedStart;
                        const intersectEnd = rangeEnd < normalizedEnd ? rangeEnd : normalizedEnd;
                        if (intersectStart > intersectEnd) continue;

                        eachYmdInRange(intersectStart, intersectEnd, function (d) {
                            dates.add(d);
                        });
                    }
                }

                return dates;
            }

            function groupRowsByPayrollPeriod(rows) {
                const grouped = {};

                for (const row of rows) {
                    const key = getPayrollPeriodKey(row.date);
                    if (!grouped[key]) grouped[key] = [];
                    grouped[key].push(row);
                }

                const sortedKeys = Object.keys(grouped).sort();
                return sortedKeys.map(key => ({
                    key,
                    start: getPayrollPeriodBounds(key).start,
                    end: getPayrollPeriodBounds(key).end,
                    label: getPayrollPeriodLabel(key),
                    rows: grouped[key].sort((a, b) => a.date.localeCompare(b.date))
                }));
            }

            // ═══════════════════════════════════════════════════════════
            //  Business Logic
            // ═══════════════════════════════════════════════════════════

            function getLateSeconds(date, firstIn, ramadan) {
                const firstInSeconds = parseTimeToSeconds(firstIn);
                if (firstInSeconds === null) return 0;

                const isRamadan = isBetweenDates(ramadan.start, ramadan.end, date);
                const lateThreshold = isRamadan ? LATE_THRESHOLD_SECONDS_RAMADAN : LATE_THRESHOLD_SECONDS_NORMAL;

                return firstInSeconds > lateThreshold ? firstInSeconds - lateThreshold : 0;
            }

            function getRequiredSecondsBySeason(date, ramadan) {
                return isBetweenDates(ramadan.start, ramadan.end, date)
                    ? REQUIRED_SECONDS_RAMADAN
                    : REQUIRED_SECONDS_NORMAL;
            }

            function getEffectiveRowActualSeconds(row, ramadan, examPeriod) {
                if (!row) return 0;

                let durationSeconds = parseDurationToSeconds(row.duration);

                // If no valid LastOut, this row should not contribute attended duration.
                if (!hasValidLastOut(row.lastOut)) {
                    durationSeconds = 0;
                }

                const lastOutSeconds = parseTimeToSeconds(row.lastOut);
                if (lastOutSeconds !== null) {
                    const cap = getLastOutCapForDate(row.date, ramadan, examPeriod);
                    if (lastOutSeconds > cap) {
                        const firstInSeconds = parseTimeToSeconds(row.firstIn);
                        if (firstInSeconds !== null && firstInSeconds < cap) {
                            const cappedDuration = cap - firstInSeconds;
                            durationSeconds = Math.min(durationSeconds, cappedDuration);
                        }
                    }
                }

                return Math.max(0, durationSeconds);
            }

            function getOverrideActualSecondsForDate(override, date, ramadan) {
                if (!override) return 0;

                if (override.type === "full_day") {
                    return getRequiredSecondsBySeason(date, ramadan);
                }

                if (override.type === "custom_actual") {
                    return override.actualSeconds != null
                        ? Math.max(0, override.actualSeconds)
                        : Math.max(0, (override.actualMinutes || 0) * 60);
                }

                return 0;
            }

            function buildCompensationLedgerForPeriod(
                periodRows,
                periodStart,
                periodEnd,
                holidays,
                ramadan,
                overrides,
                examPeriod,
                compensationLeaves
            ) {
                const rowByDate = new Map();
                for (const row of periodRows || []) {
                    const dateKey = normalizeYMD(row.date);
                    if (dateKey) {
                        rowByDate.set(dateKey, row);
                    }
                }

                const overrideByDate = new Map();
                for (const override of overrides || []) {
                    const dateKey = normalizeYMD(override.date);
                    if (dateKey) {
                        overrideByDate.set(dateKey, override);
                    }
                }

                const leaveByDate = new Map();
                for (const leave of compensationLeaves || []) {
                    const dateKey = normalizeYMD(leave.date);
                    if (dateKey) {
                        leaveByDate.set(dateKey, leave);
                    }
                }

                let earnedDays = 0;
                let usedDays = 0;
                const entries = [];
                const earnedByWeek = new Map();
                // The fixed weekend day earns on its own weekly track, so a week
                // where both it and the chosen day off were worked earns two.
                const fixedEarnedByWeek = new Map();

                eachYmdInRange(periodStart, periodEnd, function (date) {
                    const dayName = formatDateToDayName(date);
                    if (!dayName) return;
                    const fixedOffMatch = isFixedNonWorkingDay(dayName, date);
                    const effectiveDayOff = getDayOffFullNameForDate(date, getSelectedDayOffCode());
                    const dayOffMatch = effectiveDayOff && dayName === effectiveDayOff;
                    const holidayMatch = isDateHoliday(date, holidays);

                    const row = rowByDate.get(date);
                    const override = overrideByDate.get(date);

                    let workedSeconds = 0;
                    if (override) {
                        workedSeconds = getOverrideActualSecondsForDate(override, date, ramadan);
                    } else if (row) {
                        workedSeconds = getEffectiveRowActualSeconds(row, ramadan, examPeriod);
                    }

                    const workedEnoughForComp = override
                        ? workedSeconds >= MIN_WORKING_DAY_SECONDS
                        : !!(row && hasValidLastOut(row.lastOut) && workedSeconds >= MIN_WORKING_DAY_SECONDS);

                    const hasDayOffWorkForComp = !!(dayOffMatch && !fixedOffMatch && workedEnoughForComp);
                    // Working the branch's fixed weekend day earns a compensation
                    // day too. Tracked separately from the chosen day off so the
                    // two caps do not compete.
                    const hasFixedOffWorkForComp = !!(fixedOffMatch && !holidayMatch && workedEnoughForComp);

                    const week = getCompensationWeekBounds(date);
                    const weekKey = week ? week.key : "";
                    const weekEarned = weekKey ? (earnedByWeek.get(weekKey) || 0) : 0;

                    if (hasDayOffWorkForComp && weekKey && weekEarned < 1) {
                        earnedByWeek.set(weekKey, weekEarned + 1);
                        earnedDays += 1;
                        entries.push({
                            kind: "earn",
                            date,
                            seconds: 1,
                            reason: override && override.reason ? override.reason : ""
                        });
                    }

                    const weekFixedEarned = weekKey ? (fixedEarnedByWeek.get(weekKey) || 0) : 0;
                    if (hasFixedOffWorkForComp && weekKey && weekFixedEarned < 1) {
                        fixedEarnedByWeek.set(weekKey, weekFixedEarned + 1);
                        earnedDays += 1;
                        entries.push({
                            kind: "earn",
                            date,
                            seconds: 1,
                            reason: override && override.reason
                                ? override.reason
                                : `Worked ${dayName}, the fixed non-working day.`
                        });
                    }

                    const leave = leaveByDate.get(date);
                    if (!leave) return;

                    const invalidTarget = fixedOffMatch || dayOffMatch || holidayMatch;

                    if (!invalidTarget && (earnedDays - usedDays) >= 1) {
                        usedDays += 1;
                        entries.push({
                            kind: "use",
                            date,
                            seconds: 1,
                            reason: leave.reason || ""
                        });
                        return;
                    }

                    entries.push({
                        kind: "use_invalid",
                        date,
                        seconds: 0,
                        reason: leave.reason || ((earnedDays - usedDays) < 1
                            ? "No earned compensation balance yet in this payroll period."
                            : "")
                    });
                });

                entries.sort(function (a, b) {
                    if (a.date !== b.date) return a.date.localeCompare(b.date);
                    const weight = { earn: 0, use: 1, use_invalid: 2 };
                    return (weight[a.kind] || 9) - (weight[b.kind] || 9);
                });

                return {
                    earnedDays,
                    usedDays,
                    balanceDays: earnedDays - usedDays,
                    earnedSeconds: earnedDays,
                    usedSeconds: usedDays,
                    balanceSeconds: earnedDays - usedDays,
                    entries
                };
            }

            // Allocates the mutable accumulator used by `buildPeriodStats` during
            // its date-by-date scan. Keeping the shape in one place makes it easy
            // to reason about which fields the loop touches.
            function createPeriodStatsAccumulator() {
                return {
                    actualSeconds: 0,
                    requiredSeconds: 0,
                    presentDays: 0,
                    absentDays: 0,
                    lateDays: 0,
                    totalLateSeconds: 0,
                    overriddenDays: 0,
                    compensationEarnedSeconds: 0,
                    compensationUsedSeconds: 0,
                    absentDayDetails: [],
                    lateDayDetails: [],
                    overriddenDayDetails: [],
                    auditEntries: []
                };
            }

            // Pre-builds date->item maps for O(1) lookup during the date scan.
            function buildDateLookupMaps(periodRows, overrides, compensationLeaves) {
                const rowByDate = new Map();
                for (const row of periodRows || []) {
                    const dateKey = normalizeYMD(row.date);
                    if (dateKey) rowByDate.set(dateKey, row);
                }

                const overrideByDate = new Map();
                for (const override of overrides || []) {
                    const dateKey = normalizeYMD(override.date);
                    if (dateKey) overrideByDate.set(dateKey, override);
                }

                const compensationByDate = new Map();
                for (const leave of compensationLeaves || []) {
                    const dateKey = normalizeYMD(leave.date);
                    if (dateKey) compensationByDate.set(dateKey, leave);
                }
                return { rowByDate, overrideByDate, compensationByDate };
            }

            // Picks the correct excluded-day audit entry given exclusion flags.
            // Returns { status, reason } or null when no excluded reason applies.
            function pickExcludedAudit(flags, workedSeconds, override) {
                if (flags.compensationLeaveMatch && !flags.isBaseExcludedDay) {
                    return { status: "Compensation", reason: "Marked as compensation leave." };
                }
                if (flags.holidayMatch) {
                    return { status: "Holiday", reason: "Excluded by holiday settings." };
                }
                if (flags.fixedOffMatch) {
                    return { status: fixedOffDay(), reason: "Fixed non-working day." };
                }
                if (flags.dayOffMatch) {
                    if (workedSeconds > 0) {
                        if (override) {
                            return {
                                status: "Day Off (Worked)",
                                reason: `Worked on day off via override (${override.type}).`
                            };
                        }
                        const workedHms = secondsToHMS(workedSeconds);
                        return {
                            status: "Day Off (Worked)",
                            reason: `Worked ${formatHMS(workedHms.hours, workedHms.minutes, workedHms.seconds)} on effective weekly day off.`
                        };
                    }
                    return { status: "Day Off", reason: "Excluded by effective weekly day off." };
                }
                return null;
            }

            // Formats the accumulator + holiday counts into the public stats object
            // returned by `buildPeriodStats`.
            function finalizePeriodStats(acc, holidayDays, annualLeaveDays) {
                const balanceSeconds = acc.actualSeconds - acc.requiredSeconds;
                const compensationBalanceSeconds = acc.compensationEarnedSeconds - acc.compensationUsedSeconds;
                const balanceHMS = secondsToHMS(balanceSeconds);
                const progressPercentRaw = acc.requiredSeconds > 0
                    ? Math.floor((acc.actualSeconds / acc.requiredSeconds) * 100)
                    : 100;
                // Capped variant for the main report card (bar width + label stay ≤100%).
                const progressPercent = Math.min(100, progressPercentRaw);
                const progressGapSeconds = Math.max(0, acc.requiredSeconds - acc.actualSeconds);
                const progressColor = progressPercent >= 100
                    ? "green"
                    : progressGapSeconds <= 3 * 3600
                        ? "amber"
                        : "red";

                // Home-widget tier — computed here so the breakpoints live with the math and
                // never drift from the view (single source for Home + any future surface).
                // Below 100%: gap ≤3h → "close", ≤10h → "deduct", else "ghost". At/above
                // 100%: escalate by EXTRA hours banked (balanceSeconds), +3h/+8h/+15h.
                let tier;
                if (progressPercentRaw < 100) {
                    tier = progressGapSeconds <= 3 * 3600 ? "close"
                        : progressGapSeconds <= 10 * 3600 ? "deduct"
                        : "ghost";
                } else if (balanceSeconds < 3 * 3600) {
                    tier = "ontime";
                } else if (balanceSeconds < 8 * 3600) {
                    tier = "workaholic";
                } else if (balanceSeconds < 15 * 3600) {
                    tier = "grass";
                } else {
                    tier = "slave";
                }

                const formatSeconds = function (totalSeconds) {
                    const hms = secondsToHMS(totalSeconds);
                    return formatHMS(hms.hours, hms.minutes, hms.seconds);
                };

                return {
                    presentDays: acc.presentDays,
                    absentDays: acc.absentDays,
                    absentDayDetails: acc.absentDayDetails.slice().sort(),
                    lateDays: acc.lateDays,
                    totalLateSeconds: acc.totalLateSeconds,
                    totalLateHM: formatSeconds(acc.totalLateSeconds),
                    lateDayDetails: acc.lateDayDetails,
                    holidayDays,
                    annualLeaveDays,
                    overriddenDays: acc.overriddenDays,
                    overriddenDayDetails: acc.overriddenDayDetails,
                    compensationEarnedSeconds: acc.compensationEarnedSeconds,
                    compensationUsedSeconds: acc.compensationUsedSeconds,
                    compensationBalanceSeconds,
                    compensationEarnedHM: formatSeconds(acc.compensationEarnedSeconds),
                    compensationUsedHM: formatSeconds(acc.compensationUsedSeconds),
                    compensationBalanceHM: formatSeconds(compensationBalanceSeconds),
                    auditEntries: acc.auditEntries,
                    actualSeconds: acc.actualSeconds,
                    requiredSeconds: acc.requiredSeconds,
                    actualHM: formatSeconds(acc.actualSeconds),
                    requiredHM: formatSeconds(acc.requiredSeconds),
                    balanceHM: formatHMS(balanceHMS.hours, balanceHMS.minutes, balanceHMS.seconds),
                    isPositiveOrZero: balanceSeconds >= 0,
                    label: balanceSeconds >= 0 ? "Extra" : "Missing",
                    progressPercent,
                    progressPercentRaw,
                    progressColor,
                    tier
                };
            }

            // The six selectable weekly day-off candidates: every weekday except the
            // branch's fixed off-day, ordered starting from the day AFTER it.
            // Cairo (Friday off) -> Sat, Sun, Mon, Tue, Wed, Thu — identical to the
            // hardcoded list this replaced. Berlin (Sunday off) -> Mon .. Sat.
            function dayOffWeekdays() {
                const off = fixedOffIndex();
                const out = [];
                for (let i = 1; i <= 6; i++) out.push(WEEKDAY_TABLE[(off + i) % 7]);
                return out;
            }

            function buildPeriodStats(periodRows, periodStart, periodEnd) {
                const acc = createPeriodStatsAccumulator();
                const today = getTodayLocalYMD();
                const holidays = getStoredHolidays();
                const ramadan = getStoredRamadan();
                const overrides = getStoredOverrides();
                const compensationLeaves = getStoredCompensationLeaves();
                const examPeriod = getStoredExamPeriod();

                const holidayDateSet = getHolidayDatesInPeriod(holidays, periodStart, periodEnd);
                const annualDateSet = getAnnualLeaveDateSet(holidays, periodStart, periodEnd);
                const holidayDays = holidayDateSet.size - annualDateSet.size;
                const annualLeaveDays = annualDateSet.size;

                const { rowByDate, overrideByDate, compensationByDate } =
                    buildDateLookupMaps(periodRows, overrides, compensationLeaves);

                // Pair earned day-off-work entries with consumed compensation uses so
                // that the matched earn day is treated as a regular working day in
                // the balance (required += dayReq), while any extra unmatched earn
                // days remain pure bonus hours. Without this pairing, a Saturday
                // worked + Tuesday comp leave swap inflates the balance by one
                // day's worth of required hours.
                const ledger = buildCompensationLedgerForPeriod(
                    periodRows,
                    periodStart,
                    periodEnd,
                    holidays,
                    ramadan,
                    overrides,
                    examPeriod,
                    compensationLeaves
                );
                const earnedDatesAsc = ledger.entries
                    .filter(function (e) { return e.kind === "earn"; })
                    .map(function (e) { return e.date; })
                    .sort();
                const matchedEarnDates = new Set(earnedDatesAsc.slice(0, ledger.usedDays || 0));

                const fallbackStart = periodRows.length > 0 ? periodRows[0].date : today;
                const fallbackEnd = periodRows.length > 0 ? periodRows[periodRows.length - 1].date : today;
                const windowStart = periodStart || fallbackStart;
                const windowEnd = periodEnd || fallbackEnd;

                // Single-entry days credited as full days: past regular working
                // days with one punch and no override, the earliest
                // SINGLE_ENTRY_MAX_PER_PERIOD in the period. Later ones fall
                // through to the normal (absent) rule.
                const singleEntryCredits = new Set();
                if (isSingleEntryRuleEnabled()) {
                    eachYmdInRange(windowStart, windowEnd, function (date) {
                        if (singleEntryCredits.size >= SINGLE_ENTRY_MAX_PER_PERIOD || date >= today) return;
                        const dayName = formatDateToDayName(date);
                        if (!dayName || overrideByDate.has(date) || compensationByDate.has(date)) return;
                        if (!isSingleEntryRow(rowByDate.get(date))) return;
                        if (isFixedNonWorkingDay(dayName, date)) return;
                        const effectiveDayOff = getDayOffFullNameForDate(date, getSelectedDayOffCode());
                        if (effectiveDayOff && dayName === effectiveDayOff) return;
                        if (holidayDateSet.has(date) || isDateHoliday(date, holidays)) return;
                        singleEntryCredits.add(date);
                    });
                }

                const pushAudit = function (date, status, reason) {
                    if (date > today) return;
                    acc.auditEntries.push({
                        date,
                        dayName: formatDateToDayName(date),
                        status,
                        reason
                    });
                };

                const pushExcludedAudit = function (date, flags, workedSeconds, override) {
                    const audit = pickExcludedAudit(flags, workedSeconds, override);
                    if (audit) pushAudit(date, audit.status, audit.reason);
                };

                eachYmdInRange(windowStart, windowEnd, function (date) {
                    const dayName = formatDateToDayName(date);
                    if (!dayName) return;

                    const row = rowByDate.get(date);
                    const override = overrideByDate.get(date);
                    const compensationLeave = compensationByDate.get(date);

                    const fixedOffMatch = isFixedNonWorkingDay(dayName, date);
                    const effectiveDayOff = getDayOffFullNameForDate(date, getSelectedDayOffCode());
                    const dayOffMatch = !!(effectiveDayOff && dayName === effectiveDayOff);
                    const holidayMatch = holidayDateSet.has(date) || isDateHoliday(date, holidays);
                    const isBaseExcludedDay = fixedOffMatch || dayOffMatch || holidayMatch;
                    const compensationLeaveMatch = !!compensationLeave;
                    const isExcludedDay = isBaseExcludedDay || compensationLeaveMatch;
                    const flags = { fixedOffMatch, dayOffMatch, holidayMatch, isBaseExcludedDay, compensationLeaveMatch };

                    const dayReq = getRequiredSecondsBySeason(date, ramadan);
                    if (compensationLeaveMatch && !isBaseExcludedDay) {
                        acc.compensationUsedSeconds += dayReq;
                    }

                    if (override) {
                        acc.overriddenDays += 1;
                        const overrideActualSeconds = getOverrideActualSecondsForDate(override, date, ramadan);
                        if (dayOffMatch && overrideActualSeconds > 0) {
                            acc.compensationEarnedSeconds += overrideActualSeconds;
                        }
                        // Same rule as a real attendance row: working the fixed
                        // weekend day earns a compensation day. Kept here so a
                        // manually overridden weekend day behaves identically.
                        if (fixedOffMatch && !holidayMatch && !compensationLeaveMatch
                            && overrideActualSeconds >= MIN_WORKING_DAY_SECONDS) {
                            acc.compensationEarnedSeconds += overrideActualSeconds;
                            acc.requiredSeconds += dayReq;
                            acc.presentDays += 1;
                            acc.actualSeconds += overrideActualSeconds;
                            acc.overriddenDayDetails.push({ date, type: override.type, reason: override.reason || "" });
                            pushAudit(date, `${fixedOffDay()} (Worked)`,
                                `Counted via override (${override.type}); earns a compensation day and counts as a regular working day.`);
                            return;
                        }

                        const detail = { date, type: override.type, reason: override.reason || "" };
                        if (override.type === "custom_actual") detail.actualSeconds = overrideActualSeconds;
                        acc.overriddenDayDetails.push(detail);

                        // Hours from overrides are always added to actual time.
                        acc.actualSeconds += overrideActualSeconds;

                        if (compensationLeaveMatch || isBaseExcludedDay) {
                            const audit = pickExcludedAudit(flags, overrideActualSeconds, override);
                            pushAudit(date, audit ? audit.status : "Excluded", audit ? audit.reason : "Excluded by settings.");
                            return;
                        }

                        // Working-day override behaves like attended full/adjusted day.
                        acc.requiredSeconds += dayReq;
                        acc.presentDays += 1;
                        pushAudit(date, "Present", `Counted via override (${override.type}).`);
                        return;
                    }

                    if (row) {
                        const durationSeconds = getEffectiveRowActualSeconds(row, ramadan, examPeriod);
                        if (dayOffMatch && durationSeconds > 0) {
                            acc.compensationEarnedSeconds += durationSeconds;
                        }

                        // Working the branch's fixed weekend day (Friday in Cairo,
                        // Sunday in Berlin) earns a compensation day, and the day
                        // itself counts as a regular working day — so the earned day
                        // IS the compensation, rather than banked hours on top of it.
                        // Independent of the chosen-day-off earn above: a week where
                        // you worked both earns two. The two can never collide, since
                        // effectiveDayOff is picked from dayOffWeekdays(), which
                        // excludes the fixed off-day.
                        const isWorkedFixedOffDay = fixedOffMatch
                            && !holidayMatch
                            && !compensationLeaveMatch
                            && durationSeconds >= MIN_WORKING_DAY_SECONDS;
                        if (isWorkedFixedOffDay) {
                            acc.compensationEarnedSeconds += durationSeconds;
                            acc.requiredSeconds += dayReq;
                            acc.presentDays += 1;
                            acc.actualSeconds += durationSeconds;
                            const fWorked = secondsToHMS(durationSeconds);
                            pushAudit(date, `${fixedOffDay()} (Worked)`,
                                `Worked ${formatHMS(fWorked.hours, fWorked.minutes, fWorked.seconds)} on the fixed non-working day; earns a compensation day and counts as a regular working day.`);
                            const fixedLateBy = getLateSeconds(row.date, row.firstIn, ramadan);
                            if (fixedLateBy > 0) {
                                acc.lateDays += 1;
                                acc.totalLateSeconds += fixedLateBy;
                                acc.lateDayDetails.push({
                                    date: row.date,
                                    firstIn: row.firstIn,
                                    lateBySeconds: fixedLateBy
                                });
                            }
                            return;
                        }

                        // Day-off swap: when this earn day is paired with a consumed
                        // compensation use, treat it as a regular working day so the
                        // balance reflects the swap (Saturday worked + Tuesday off
                        // ≈ regular week, not a free bonus).
                        const isMatchedSwapDay = dayOffMatch
                            && !fixedOffMatch
                            && !holidayMatch
                            && matchedEarnDates.has(date);
                        if (isMatchedSwapDay) {
                            acc.requiredSeconds += dayReq;
                            if (durationSeconds >= MIN_WORKING_DAY_SECONDS) {
                                acc.presentDays += 1;
                                const workedHms = secondsToHMS(durationSeconds);
                                pushAudit(date, "Day Off (Swap)", `Swapped with compensation leave; counted as a regular working day. Worked ${formatHMS(workedHms.hours, workedHms.minutes, workedHms.seconds)}.`);
                                const lateBy = getLateSeconds(row.date, row.firstIn, ramadan);
                                if (lateBy > 0) {
                                    acc.lateDays += 1;
                                    acc.totalLateSeconds += lateBy;
                                    acc.lateDayDetails.push({
                                        date: row.date,
                                        firstIn: row.firstIn,
                                        lateBySeconds: lateBy
                                    });
                                }
                            } else if (row.date < today) {
                                pushAudit(date, "Day Off (Swap, Short)", `Swap day worked less than 4:00:00; still counted as required day.`);
                            }
                            acc.actualSeconds += durationSeconds;
                            return;
                        }

                        if (singleEntryCredits.has(date)) {
                            acc.requiredSeconds += dayReq;
                            acc.actualSeconds += dayReq;
                            acc.presentDays += 1;
                            pushAudit(date, "Present (Single Entry)",
                                `In at ${row.firstIn} with no checkout; counted as a full day (single entry ${[...singleEntryCredits].indexOf(date) + 1} of ${SINGLE_ENTRY_MAX_PER_PERIOD} this month).`);
                            const lateBy = getLateSeconds(row.date, row.firstIn, ramadan);
                            if (lateBy > 0) {
                                acc.lateDays += 1;
                                acc.totalLateSeconds += lateBy;
                                acc.lateDayDetails.push({
                                    date: row.date,
                                    firstIn: row.firstIn,
                                    lateBySeconds: lateBy
                                });
                            }
                            return;
                        }

                        const countRequired = !isExcludedDay && (hasValidLastOut(row.lastOut) || row.date < today);
                        const isAbsentRow = !isExcludedDay && durationSeconds < MIN_WORKING_DAY_SECONDS && row.date < today;
                        const reqSeconds = countRequired && !isAbsentRow ? dayReq : 0;

                        if (!isExcludedDay) {
                            if (durationSeconds >= MIN_WORKING_DAY_SECONDS) {
                                acc.presentDays += 1;
                                const workedHms = secondsToHMS(durationSeconds);
                                pushAudit(date, "Present", `Worked ${formatHMS(workedHms.hours, workedHms.minutes, workedHms.seconds)}.`);
                                const lateBy = getLateSeconds(row.date, row.firstIn, ramadan);
                                if (lateBy > 0) {
                                    acc.lateDays += 1;
                                    acc.totalLateSeconds += lateBy;
                                    acc.lateDayDetails.push({
                                        date: row.date,
                                        firstIn: row.firstIn,
                                        lateBySeconds: lateBy
                                    });
                                }
                            } else if (row.date < today) {
                                acc.absentDays += 1;
                                acc.absentDayDetails.push(row.date);
                                pushAudit(date, "Absent", "Worked less than 4:00:00 or invalid checkout.");
                            }
                        } else {
                            pushExcludedAudit(date, flags, durationSeconds, null);
                        }

                        acc.actualSeconds += durationSeconds;
                        acc.requiredSeconds += reqSeconds;
                        return;
                    }

                    // No row and no override.
                    if (!isExcludedDay && date < today) {
                        // Absent days do not affect required/balance hours.
                        acc.absentDays += 1;
                        acc.absentDayDetails.push(date);
                        pushAudit(date, "Absent", "No attendance row found.");
                        return;
                    }
                    pushExcludedAudit(date, flags, 0, null);
                });

                return finalizePeriodStats(acc, holidayDays, annualLeaveDays);
            }

            // ═══════════════════════════════════════════════════════════
            //  Summary Card Components
            // ═══════════════════════════════════════════════════════════

            function createStatRow(icon, label, value, extraClass) {
                const row = document.createElement("div");
                row.className = `giu-stat-row ${extraClass || ""}`.trim();

                const left = document.createElement("div");
                left.className = "giu-stat-left";

                const iconEl = document.createElement("div");
                iconEl.className = "giu-stat-icon";
                iconEl.textContent = icon;

                const labelEl = document.createElement("div");
                labelEl.className = "giu-stat-label";
                labelEl.textContent = label;

                left.appendChild(iconEl);
                left.appendChild(labelEl);

                const valueEl = document.createElement("div");
                valueEl.className = "giu-stat-value";
                valueEl.textContent = value;

                row.appendChild(left);
                row.appendChild(valueEl);

                return row;
            }

            function createBalanceRow(stats) {
                const row = document.createElement("div");
                row.className = `giu-stat-row ${stats.isPositiveOrZero ? "giu-balance-positive" : "giu-balance-negative"}`;

                const left = document.createElement("div");
                left.className = "giu-stat-left";

                const iconEl = document.createElement("div");
                iconEl.className = "giu-stat-icon";
                if (stats.absentDays > 0) {
                    iconEl.textContent = "✕";
                    iconEl.title = `${stats.absentDays} absent day(s) not counted in hours`;
                    iconEl.style.color = "#dc2626";
                } else if (!stats.isPositiveOrZero) {
                    iconEl.textContent = "⚠";
                    iconEl.title = "Negative balance (missing hours)";
                    iconEl.style.color = "#d97706";
                } else {
                    iconEl.textContent = "✔";
                    iconEl.title = "No alerts";
                    iconEl.style.color = "#16a34a";
                }

                const labelEl = document.createElement("div");
                labelEl.className = "giu-stat-label";
                labelEl.textContent = "Balance";

                left.appendChild(iconEl);
                left.appendChild(labelEl);

                const valueWrap = document.createElement("div");
                valueWrap.className = "giu-stat-value";
                valueWrap.innerHTML = `
                    ${stats.balanceHM}
                    <span class="giu-balance-tag ${stats.isPositiveOrZero ? "giu-tag-positive" : "giu-tag-negative"}">
                        ${stats.label}
                    </span>
                `;

                row.appendChild(left);
                row.appendChild(valueWrap);

                return row;
            }

            function createProgressSection(stats) {
                const wrap = document.createElement("div");
                wrap.className = "giu-progress-wrap";

                const top = document.createElement("div");
                top.className = "giu-progress-top";

                const pctClass = stats.progressColor === "green"
                    ? "giu-progress-pct-green"
                    : stats.progressColor === "amber"
                        ? "giu-progress-pct-amber"
                        : "giu-progress-pct-red";
                top.innerHTML = `
                    <span>Required Hours Completion</span>
                    <span class="${pctClass}">${stats.progressPercent}%</span>
                `;

                const bar = document.createElement("div");
                bar.className = "giu-progress-bar";

                const fillClass = stats.progressColor === "green"
                    ? "giu-progress-fill-green"
                    : stats.progressColor === "amber"
                        ? "giu-progress-fill-amber"
                        : "giu-progress-fill-red";
                const fill = document.createElement("div");
                fill.className = `giu-progress-fill ${fillClass}`;
                fill.style.width = `${stats.progressPercent}%`;

                bar.appendChild(fill);
                wrap.appendChild(top);
                wrap.appendChild(bar);

                return wrap;
            }

            // Shared primitive: a collapsible "extra" box (header + chevron + body).
            // Used by Late/Absent/Audit/Override-detail boxes.
            // - When `bodyContent` is null/undefined, the box renders without an expand area
            //   (used when there are no rows worth showing).
            function createCollapsibleDetailBox(options) {
                const opts = options || {};
                const boxClass = opts.boxClass || "giu-extra-box";
                const wrapperClass = opts.wrapperClass || "giu-expand-wrapper";
                const initialExpanded = !!opts.initialExpanded;

                const box = document.createElement("div");
                box.className = boxClass;

                const header = document.createElement("div");
                header.className = "giu-late-header";

                const label = document.createElement("span");
                if (opts.labelText) label.textContent = opts.labelText;
                else if (opts.labelHTML) label.innerHTML = opts.labelHTML;
                header.appendChild(label);

                const hasBody = !!opts.bodyContent;

                let chevron = null;
                if (hasBody) {
                    chevron = document.createElement("span");
                    chevron.className = "giu-expand-chevron";
                    chevron.textContent = "\u25BC";
                    header.appendChild(chevron);
                }
                box.appendChild(header);

                if (!hasBody) return box;

                const expandWrapper = document.createElement("div");
                expandWrapper.className = wrapperClass;

                const expandInner = document.createElement("div");
                expandInner.className = "giu-expand-inner";

                expandInner.appendChild(opts.bodyContent);
                expandWrapper.appendChild(expandInner);
                box.appendChild(expandWrapper);

                if (initialExpanded) {
                    expandWrapper.classList.add("giu-expanded");
                    if (chevron) chevron.classList.add("giu-chevron-open");
                }

                header.addEventListener("click", function () {
                    expandWrapper.classList.toggle("giu-expanded");
                    if (chevron) chevron.classList.toggle("giu-chevron-open");
                });

                return box;
            }

            function createLateBox(stats) {
                const details = Array.isArray(stats.lateDayDetails) ? stats.lateDayDetails : [];
                let bodyContent = null;

                if (details.length > 0) {
                    bodyContent = document.createElement("div");
                    bodyContent.className = "giu-late-details";

                    details.forEach(function (entry) {
                        const row = document.createElement("div");
                        row.className = "giu-late-detail-row";

                        const dateSpan = document.createElement("span");
                        dateSpan.textContent = `${entry.date} (${formatDateToDayName(entry.date)})`;

                        const lateHMS = secondsToHMS(entry.lateBySeconds);
                        const lateSpan = document.createElement("span");
                        lateSpan.textContent = `In: ${entry.firstIn} — Late by ${formatHMS(lateHMS.hours, lateHMS.minutes, lateHMS.seconds)}`;

                        row.appendChild(dateSpan);
                        row.appendChild(lateSpan);
                        bodyContent.appendChild(row);
                    });
                }

                return createCollapsibleDetailBox({
                    labelText: `Late arrivals: ${stats.lateDays} (${stats.totalLateHM} total)`,
                    bodyContent
                });
            }

            // Shared add-as-X handler for absent-day quick actions.
            // Adds a holiday entry (category-flexible) after dedup + sort + undo snapshot.
            function saveAbsentHolidayEntry(date, category, undoLabel, alertMessages) {
                const currentHolidays = getStoredHolidays();
                const newEntry = normalizeHolidayEntry({ type: "single", category, date });
                if (!newEntry) {
                    return { ok: false, message: alertMessages.invalid };
                }

                const newKey = holidayEntryToKey(newEntry);
                if (currentHolidays.some(item => holidayEntryToKey(item) === newKey)) {
                    return { ok: false, message: alertMessages.exists };
                }

                currentHolidays.push(newEntry);
                currentHolidays.sort(function (a, b) {
                    const aValue = a.type === "single" ? a.date : a.start;
                    const bValue = b.type === "single" ? b.date : b.start;
                    return aValue.localeCompare(bValue);
                });
                saveUndoSnapshot("holidays", undoLabel);
                setStoredHolidays(currentHolidays);
                return { ok: true };
            }

            function addAbsentHolidayEntry(date, category, undoLabel, alertMessages) {
                const result = saveAbsentHolidayEntry(date, category, undoLabel, alertMessages);
                if (!result.ok) {
                    alert(result.message);
                    return;
                }
                renderEnhancedUI();
            }

            function saveAbsentCompensationEntry(date, periods, selectedDayOffFullName, reason, undoLabel) {
                const normalizedDate = normalizeYMD(date);
                if (!normalizedDate) {
                    return { ok: false, message: "Invalid date format." };
                }

                const currentLeaves = getStoredCompensationLeaves();
                if (currentLeaves.some(function (item) { return normalizeYMD(item.date) === normalizedDate; })) {
                    return { ok: false, message: "A compensation leave already exists for this date." };
                }

                const validation = validateCompensationLeaveDate(
                    normalizedDate,
                    selectedDayOffFullName,
                    periods,
                    currentLeaves,
                    getStoredHolidays(),
                    getStoredRamadan(),
                    getStoredOverrides(),
                    getStoredExamPeriod()
                );
                if (!validation.ok) {
                    return validation;
                }

                const entry = { date: normalizedDate };
                const cleanReason = typeof reason === "string" ? reason.trim() : "";
                if (cleanReason) entry.reason = cleanReason;

                saveUndoSnapshot("compensation", undoLabel);
                setStoredCompensationLeaves(currentLeaves.concat([entry]));
                return { ok: true };
            }

            function createAbsentDayQuickActions(date) {
                const right = document.createElement("span");
                right.className = "giu-absent-actions";

                const note = document.createElement("span");
                note.textContent = "Missing attendance entry";

                const addAsLabel = document.createElement("span");
                addAsLabel.textContent = "Add as:";
                addAsLabel.style.fontSize = "11px";
                addAsLabel.style.fontWeight = "700";
                addAsLabel.style.color = "#64748b";
                addAsLabel.style.marginRight = "2px";

                const stopProp = function (handler) {
                    return function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        handler();
                    };
                };

                const makeHolidayBtn = createUiButton("Holiday", "giu-absent-holiday-btn", stopProp(function () {
                    addAbsentHolidayEntry(date, "holiday", "Add holiday from absent quick action", {
                        invalid: "Invalid date. Could not create holiday.",
                        exists: "This date is already saved as a holiday."
                    });
                }));

                const makeAnnualBtn = createUiButton("Annual leave", "giu-absent-holiday-btn", stopProp(function () {
                    addAbsentHolidayEntry(date, "annual", "Add annual leave from absent quick action", {
                        invalid: "Invalid date. Could not create annual leave.",
                        exists: "This date is already saved as annual leave."
                    });
                }));

                const addCompBtn = createUiButton("Compensation", "giu-absent-holiday-btn", stopProp(function () {
                    const selectedDayOffFullName = getSelectedDayOffFullName(getSelectedDayOffCode());
                    const periods = groupRowsByPayrollPeriod(getAttendanceRows());
                    const result = saveAbsentCompensationEntry(
                        date,
                        periods,
                        selectedDayOffFullName,
                        "From absent day quick action",
                        "Add compensation from absent quick action"
                    );
                    if (!result.ok) {
                        alert(result.message);
                        return;
                    }
                    renderEnhancedUI();
                }));

                // "Add as:" and its pills stay together as one group, so a narrow
                // box moves the whole group to its own line.
                const addAs = document.createElement("span");
                addAs.className = "giu-absent-addas";
                addAs.appendChild(addAsLabel);
                addAs.appendChild(makeHolidayBtn);
                addAs.appendChild(makeAnnualBtn);
                addAs.appendChild(addCompBtn);

                right.appendChild(note);
                right.appendChild(addAs);
                return right;
            }

            function createAbsentBox(stats, initialExpanded) {
                const details = Array.isArray(stats.absentDayDetails) ? stats.absentDayDetails : [];
                let bodyContent = null;

                if (details.length > 0) {
                    bodyContent = document.createElement("div");
                    bodyContent.className = "giu-late-details";

                    details.forEach(function (date) {
                        const row = document.createElement("div");
                        row.className = "giu-late-detail-row giu-absent-detail-row";

                        const left = document.createElement("span");
                        left.textContent = `${date} (${formatDateToDayName(date)})`;
                        row.appendChild(left);
                        row.appendChild(createAbsentDayQuickActions(date));
                        bodyContent.appendChild(row);
                    });
                }

                return createCollapsibleDetailBox({
                    boxClass: "giu-extra-box giu-extra-box-absent",
                    wrapperClass: "giu-expand-wrapper giu-absent-detail-wrapper",
                    labelText: `Absent days: ${stats.absentDays}`,
                    bodyContent,
                    initialExpanded
                });
            }

            function createAuditBox(stats) {
                const today = getTodayLocalYMD();
                const entries = (Array.isArray(stats.auditEntries) ? stats.auditEntries : []).filter(function (entry) {
                    const entryDate = normalizeYMD(entry && entry.date ? entry.date : "");
                    return entryDate && entryDate <= today;
                });

                const body = document.createElement("div");
                body.className = "giu-late-details";
                entries.slice().sort(function (a, b) {
                    return b.date.localeCompare(a.date);
                }).forEach(function (entry) {
                    const row = document.createElement("div");
                    row.className = "giu-late-detail-row";

                    const left = document.createElement("span");
                    left.innerHTML = `${entry.date} (${entry.dayName || "-"}) — <strong>${entry.status}</strong>`;

                    const right = document.createElement("span");
                    right.className = "giu-audit-reason";
                    right.textContent = entry.reason || "";

                    row.appendChild(left);
                    row.appendChild(right);
                    body.appendChild(row);
                });

                return createCollapsibleDetailBox({
                    boxClass: "giu-extra-box giu-extra-box-blue",
                    labelText: `Audit Log: ${entries.length} day(s)`,
                    bodyContent: body
                });
            }

            function createSummaryCard(title, periodLabel, stats, initialDetailsExpanded, initialAbsentExpanded, summaryKey) {
                const card = document.createElement("div");
                card.className = "giu-summary-card";
                card.setAttribute("data-summary-key", summaryKey || "");

                const header = document.createElement("div");
                header.className = "giu-summary-card-header";
                header.innerHTML = `
                    <h3>${title}</h3>
                    <div class="giu-period-label">${periodLabel}</div>
                `;

                const body = document.createElement("div");
                body.className = "giu-summary-body";

                // Simple view (default): balance + progress
                const simpleSection = document.createElement("div");
                simpleSection.className = "giu-simple-view";
                simpleSection.appendChild(createBalanceRow(stats));
                simpleSection.appendChild(createProgressSection(stats));

                // Full view (hidden by default, animated expand)
                const fullWrapper = document.createElement("div");
                fullWrapper.className = "giu-expand-wrapper giu-summary-detail-wrapper";

                const fullInner = document.createElement("div");
                fullInner.className = "giu-expand-inner";

                const statList = document.createElement("div");
                statList.className = "giu-stat-list";

                statList.appendChild(createStatRow("\ud83d\udcc5", "Present Days", String(stats.presentDays)));
                statList.appendChild(createStatRow("\ud83c\udf89", "Holidays", String(stats.holidayDays)));
                statList.appendChild(createStatRow("\ud83c\udf1f", "Annual Leave Days", String(stats.annualLeaveDays || 0)));
                statList.appendChild(createStatRow("\u23f0", "Actual Hours", stats.actualHM));
                statList.appendChild(createStatRow("\ud83d\udd52", "Required Hours", stats.requiredHM));
                statList.appendChild(createStatRow(stats.isPositiveOrZero ? "\u25b2" : "\u25bc", "Balance", stats.balanceHM + " (" + stats.label + ")", stats.isPositiveOrZero ? "giu-balance-positive" : "giu-balance-negative"));

                if (stats.overriddenDays > 0) {
                    statList.appendChild(createStatRow("\ud83d\udcdd", "Overridden Days", String(stats.overriddenDays)));
                }

                fullInner.appendChild(statList);

                if (stats.overriddenDayDetails && stats.overriddenDayDetails.length > 0) {
                    fullInner.appendChild(createOverrideDetailBox(stats));
                }

                if (stats.absentDays > 0) {
                    fullInner.appendChild(createAbsentBox(stats, initialAbsentExpanded));
                }

                fullInner.appendChild(createLateBox(stats));

                if (isAuditModeEnabled()) {
                    fullInner.appendChild(createAuditBox(stats));
                }

                const note = document.createElement("div");
                note.className = "giu-small-note";
                const normalH = Math.floor(LATE_THRESHOLD_SECONDS_NORMAL / 3600);
                const normalM = Math.floor((LATE_THRESHOLD_SECONDS_NORMAL % 3600) / 60);
                const ramadanH = Math.floor(LATE_THRESHOLD_SECONDS_RAMADAN / 3600);
                const ramadanM = Math.floor((LATE_THRESHOLD_SECONDS_RAMADAN % 3600) / 60);
                note.innerHTML = `Required hours count only when the day has passed or a LastOut value exists.<br>Working day is counted only if worked duration is at least 4:00:00.<br>${isSingleEntryRuleEnabled() ? `A single entry (In with no checkout) counts as a full day, up to ${SINGLE_ENTRY_MAX_PER_PERIOD} times per payroll period; later ones count as absent.<br>` : ""}Payroll period is calculated from the 11th of the month to the 10th of the following month.<br>Late arrivals are counted when First In is after the threshold: ${formatTime12(normalH, normalM)} for normal days, ${formatTime12(ramadanH, ramadanM)} for Ramadan days.`;
                fullInner.appendChild(note);

                fullWrapper.appendChild(fullInner);

                // Toggle button
                const toggleBtn = document.createElement("button");
                toggleBtn.type = "button";
                toggleBtn.className = "giu-detail-toggle-btn";
                toggleBtn.innerHTML = 'Show Details <span class="giu-toggle-chevron">\u25BC</span>';

                if (initialDetailsExpanded) {
                    fullWrapper.classList.add("giu-expanded");
                    const initialChevron = toggleBtn.querySelector(".giu-toggle-chevron");
                    toggleBtn.childNodes[0].textContent = "Hide Details ";
                    if (initialChevron) initialChevron.classList.add("giu-chevron-open");
                }

                toggleBtn.addEventListener("click", function () {
                    const isExpanded = fullWrapper.classList.toggle("giu-expanded");
                    const chevron = toggleBtn.querySelector(".giu-toggle-chevron");
                    if (isExpanded) {
                        toggleBtn.childNodes[0].textContent = "Hide Details ";
                        chevron.classList.add("giu-chevron-open");
                    } else {
                        toggleBtn.childNodes[0].textContent = "Show Details ";
                        chevron.classList.remove("giu-chevron-open");
                    }
                });

                body.appendChild(simpleSection);
                body.appendChild(toggleBtn);

                const detailSpacer = document.createElement("div");
                detailSpacer.style.height = "8px";
                fullInner.insertBefore(detailSpacer, fullInner.firstChild);

                body.appendChild(fullWrapper);

                card.appendChild(header);
                card.appendChild(body);

                return card;
            }

            function createOverrideDetailBox(stats) {
                const details = document.createElement("div");
                details.className = "giu-late-details";

                for (const entry of stats.overriddenDayDetails) {
                    const row = document.createElement("div");
                    row.className = "giu-late-detail-row";

                    const dateSpan = document.createElement("span");
                    dateSpan.textContent = `${entry.date} (${formatDateToDayName(entry.date)})`;

                    const infoSpan = document.createElement("span");
                    const badge = document.createElement("span");
                    const badgeClass = entry.type === "full_day" ? "giu-override-badge-full" : "giu-override-badge-custom";
                    badge.className = `giu-override-badge ${badgeClass}`;
                    badge.textContent = getOverrideTypeLabel(entry.type);
                    infoSpan.appendChild(badge);

                    const entrySec = entry.actualSeconds != null
                        ? entry.actualSeconds
                        : (entry.actualMinutes != null ? entry.actualMinutes * 60 : null);
                    if (entry.type === "custom_actual" && entrySec != null) {
                        const hms = secondsToHMS(entrySec);
                        infoSpan.appendChild(document.createTextNode(" " + formatHMS(hms.hours, hms.minutes, hms.seconds)));
                    }
                    if (entry.reason) {
                        infoSpan.appendChild(document.createTextNode(" \u2014 " + entry.reason));
                    }

                    row.appendChild(dateSpan);
                    row.appendChild(infoSpan);
                    details.appendChild(row);
                }

                return createCollapsibleDetailBox({
                    boxClass: "giu-extra-box giu-extra-box-blue",
                    labelText: `Overridden days: ${stats.overriddenDayDetails.length}`,
                    bodyContent: details
                });
            }

            function createDebugBox(message) {
                const box = document.createElement("div");
                box.className = "giu-debug-box";
                box.textContent = message;
                return box;
            }

            // ═══════════════════════════════════════════════════════════
            //  First-Time User Guide (Onboarding Walkthrough)
            // ═══════════════════════════════════════════════════════════

            function expandSettingsPanelForGuide() {
                const wrapper = document.querySelector("#giu-attendance-container .giu-config-panel .giu-expand-wrapper");
                if (!wrapper || wrapper.classList.contains("giu-expanded")) return;

                const header = document.querySelector("#giu-attendance-container .giu-config-panel .giu-collapsible-header");
                if (header) {
                    header.click();
                }
            }

            function expandAllSettingsSubsectionsForGuide() {
                const toggles = Array.from(document.querySelectorAll("#giu-attendance-container .giu-settings-subsection .giu-detail-toggle-btn"));
                toggles.forEach(function (btn) {
                    const section = btn.parentElement;
                    const wrap = section ? section.querySelector(".giu-expand-wrapper") : null;
                    if (wrap && !wrap.classList.contains("giu-expanded")) btn.click();
                });
            }

            // Example configuration: each step targets one selector with title and description.
            function getOnboardingSteps() {
                return [
                    {
                        selector: "#giu-attendance-container .giu-attendance-section-title",
                        title: "Attendance Summary",
                        description: "Shows payroll-month stats, progress, and balance. Working day counts from 4:00:00+, absent days listed without reducing required hours."
                    },
                    {
                        selector: "#giu-attendance-container .giu-summary-header",
                        title: "Expand / Collapse All",
                        description: "Click summary header or hint pill to expand/collapse all cards. Hint state stays synced with manual detail toggles."
                    },
                    {
                        selector: "#giu-attendance-container .giu-config-title",
                        title: "Attendance Settings",
                        description: "Settings grouped into collapsible sections. Default state is collapsed for fast scanning."
                    },
                    {
                        selector: "#giu-day-select",
                        title: "Day Off Setup",
                        description: "Choose day off, set Apply from date, then Apply. Timeline badge shows next scheduled change.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-dayoff-badge",
                        title: "Mini Summary Chip",
                        description: "Tools row shows quick chip: Annual remaining and Compensation balance.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "label input[type='checkbox']",
                        title: "Audit Log Mode",
                        description: "Audit mode toggle in Tools section. ON by default; shows per-day reasons and hides future dates.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "#giu-holiday-mode",
                        title: "Holidays & Annual Leaves",
                        description: "Add single/range Holiday or Annual Leave. Annual Remaining editable inline; monthly accrual +3 per payroll month.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-table-tools .giu-remove-holiday-btn",
                        title: "Table Filters & Bulk Actions",
                        description: "Holidays / Overrides / Compensation tables support quick filters, row selection, and Remove Selected bulk action.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "#giu-override-date",
                        title: "Attendance Overrides",
                        description: "Add Full Day / Custom Actual with reason+note. Section has scoped Undo and pagination.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "#giu-comp-leave-date",
                        title: "Compensations",
                        description: `Earn by working your effective day off (cap 1/week) or ${fixedOffDay()} itself — these are separate, so a week with both earns two. Use allowed multiple/week if payroll-month balance supports.`,
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-conflict-box",
                        title: "Conflict Detector",
                        description: "Shown only when conflicts exist. Each row has quick-fix buttons: Drop Holiday / Drop Override / Drop Comp.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "#giu-ramadan-start",
                        title: "Ramadan & Exam Rules",
                        description: "Advanced sections control seasonal required hours, late thresholds, and cap rules.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-small-note",
                        title: "Retention Preview",
                        description: "Tools area shows dry-run count for records eligible for auto-cleanup (>2 payroll months old).",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-restart-guide-btn",
                        title: "Guide Controls",
                        description: "Restart Guide button relaunches walkthrough anytime.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-settings-action-btn",
                        title: "Backup & Restore",
                        description: "Export/Import full settings JSON. Import now reports accepted/rejected counts with reasons.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    }
                ];
            }

            function isOnboardingCompleted() {
                return localStorage.getItem(ONBOARDING_COMPLETED_KEY) === "1";
            }

            function setOnboardingCompleted() {
                localStorage.setItem(ONBOARDING_COMPLETED_KEY, "1");
                localStorage.removeItem(ONBOARDING_STATE_KEY);
            }

            function getOnboardingState() {
                try {
                    const raw = localStorage.getItem(ONBOARDING_STATE_KEY);
                    if (!raw) return null;
                    const parsed = JSON.parse(raw);
                    if (!parsed || parsed.active !== true || typeof parsed.index !== "number") return null;
                    return parsed;
                } catch {
                    return null;
                }
            }

            function setOnboardingState(index) {
                localStorage.setItem(ONBOARDING_STATE_KEY, JSON.stringify({ active: true, index }));
            }

            function clearOnboardingState() {
                localStorage.removeItem(ONBOARDING_STATE_KEY);
            }

            function createOnboardingController(steps) {
                let currentIndex = -1;
                let currentTarget = null;
                let isActive = false;

                const layer = document.createElement("div");
                layer.className = "giu-guide-layer";

                const spotlight = document.createElement("div");
                spotlight.className = "giu-guide-spotlight";

                const tooltip = document.createElement("div");
                tooltip.className = "giu-guide-tooltip";

                const progressEl = document.createElement("div");
                progressEl.className = "giu-guide-progress";

                const titleEl = document.createElement("h4");
                titleEl.className = "giu-guide-title";

                const descEl = document.createElement("p");
                descEl.className = "giu-guide-description";

                const actions = document.createElement("div");
                actions.className = "giu-guide-actions";

                const left = document.createElement("div");
                left.className = "giu-guide-left";

                const right = document.createElement("div");
                right.className = "giu-guide-right";

                const skipBtn = document.createElement("button");
                skipBtn.type = "button";
                skipBtn.className = "giu-guide-btn giu-guide-btn-ghost";
                skipBtn.textContent = "Skip";

                const prevBtn = document.createElement("button");
                prevBtn.type = "button";
                prevBtn.className = "giu-guide-btn";
                prevBtn.textContent = "Previous";

                const nextBtn = document.createElement("button");
                nextBtn.type = "button";
                nextBtn.className = "giu-guide-btn giu-guide-btn-primary";
                nextBtn.textContent = "Next";

                left.appendChild(skipBtn);
                right.appendChild(prevBtn);
                right.appendChild(nextBtn);
                actions.appendChild(left);
                actions.appendChild(right);

                tooltip.appendChild(progressEl);
                tooltip.appendChild(titleEl);
                tooltip.appendChild(descEl);
                tooltip.appendChild(actions);

                layer.appendChild(spotlight);
                layer.appendChild(tooltip);

                function isRenderableElement(el) {
                    if (!el) return false;
                    const rect = el.getBoundingClientRect();
                    return rect.width > 2 && rect.height > 2;
                }

                function findValidIndex(startIndex, direction) {
                    let idx = startIndex;
                    while (idx >= 0 && idx < steps.length) {
                        const step = steps[idx];
                        if (step && typeof step.beforeShow === "function") {
                            try {
                                step.beforeShow();
                            } catch (e) {
                                console.log("Onboarding beforeShow error:", e.message);
                            }
                        }

                        const target = document.querySelector(step.selector);
                        if (isRenderableElement(target)) {
                            return { index: idx, target };
                        }

                        idx += direction;
                    }
                    return null;
                }

                function findPreviousAvailable(index) {
                    for (let i = index - 1; i >= 0; i -= 1) {
                        if (isRenderableElement(document.querySelector(steps[i].selector))) {
                            return i;
                        }
                    }
                    return -1;
                }

                function findNextAvailable(index) {
                    for (let i = index + 1; i < steps.length; i += 1) {
                        if (isRenderableElement(document.querySelector(steps[i].selector))) {
                            return i;
                        }
                    }
                    return -1;
                }

                function clearTargetPulse() {
                    if (currentTarget) {
                        currentTarget.classList.remove("giu-guide-target-pulse");
                    }
                }

                function clamp(value, min, max) {
                    return Math.max(min, Math.min(max, value));
                }

                function positionUI(target) {
                    if (!target || !isActive) return;

                    const rect = target.getBoundingClientRect();
                    const pad = 8;
                    const spotlightTop = clamp(rect.top - pad, 6, Math.max(6, window.innerHeight - 20));
                    const spotlightLeft = clamp(rect.left - pad, 6, Math.max(6, window.innerWidth - 20));
                    const spotlightWidth = Math.max(14, Math.min(window.innerWidth - 12, rect.width + pad * 2));
                    const spotlightHeight = Math.max(14, Math.min(window.innerHeight - 12, rect.height + pad * 2));

                    spotlight.style.top = `${spotlightTop}px`;
                    spotlight.style.left = `${spotlightLeft}px`;
                    spotlight.style.width = `${spotlightWidth}px`;
                    spotlight.style.height = `${spotlightHeight}px`;

                    const tooltipWidth = tooltip.offsetWidth || 340;
                    const tooltipHeight = tooltip.offsetHeight || 190;
                    const margin = 12;

                    const belowTop = rect.bottom + margin;
                    const aboveTop = rect.top - tooltipHeight - margin;
                    const prefersBelow = belowTop + tooltipHeight <= window.innerHeight - 8;
                    const tooltipTop = prefersBelow
                        ? belowTop
                        : clamp(aboveTop, 8, Math.max(8, window.innerHeight - tooltipHeight - 8));

                    const centeredLeft = rect.left + (rect.width / 2) - (tooltipWidth / 2);
                    const tooltipLeft = clamp(centeredLeft, 8, Math.max(8, window.innerWidth - tooltipWidth - 8));

                    tooltip.style.top = `${tooltipTop}px`;
                    tooltip.style.left = `${tooltipLeft}px`;
                }

                function finishGuide(markCompleted) {
                    clearTargetPulse();
                    isActive = false;

                    window.removeEventListener("resize", onViewportChange, true);
                    window.removeEventListener("scroll", onViewportChange, true);
                    window.removeEventListener("keydown", onKeyDown, true);

                    if (layer.parentNode) {
                        layer.parentNode.removeChild(layer);
                    }

                    if (markCompleted) {
                        setOnboardingCompleted();
                    } else {
                        clearOnboardingState();
                    }

                    onboardingController = null;
                }

                function showStep(requestedIndex, direction) {
                    if (!isActive) return;
                    const stepDirection = direction < 0 ? -1 : 1;

                    const initial = findValidIndex(requestedIndex, stepDirection);
                    if (!initial) {
                        if (stepDirection > 0) {
                            finishGuide(false);
                        }
                        return;
                    }

                    currentIndex = initial.index;
                    setOnboardingState(currentIndex);

                    clearTargetPulse();
                    currentTarget = initial.target;
                    currentTarget.classList.add("giu-guide-target-pulse");
                    currentTarget.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

                    const step = steps[currentIndex];
                    progressEl.textContent = `Step ${currentIndex + 1} of ${steps.length}`;
                    titleEl.textContent = step.title;
                    descEl.textContent = step.description;

                    const prevIndex = findPreviousAvailable(currentIndex);
                    const nextIndex = findNextAvailable(currentIndex);
                    prevBtn.disabled = prevIndex === -1;
                    nextBtn.textContent = nextIndex === -1 ? "Finish" : "Next";

                    window.requestAnimationFrame(function () {
                        positionUI(currentTarget);
                    });
                    setTimeout(function () {
                        positionUI(currentTarget);
                    }, 220);
                }

                function onViewportChange() {
                    if (!isActive || !currentTarget) return;
                    positionUI(currentTarget);
                }

                function onKeyDown(event) {
                    if (!isActive) return;

                    if (event.key === "Escape") {
                        event.preventDefault();
                        finishGuide(true);
                        return;
                    }

                    if (event.key === "ArrowRight") {
                        event.preventDefault();
                        const nextIndex = findNextAvailable(currentIndex);
                        if (nextIndex === -1) {
                            finishGuide(true);
                        } else {
                            showStep(nextIndex, 1);
                        }
                        return;
                    }

                    if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        const prevIndex = findPreviousAvailable(currentIndex);
                        if (prevIndex !== -1) {
                            showStep(prevIndex, -1);
                        }
                    }
                }

                prevBtn.addEventListener("click", function () {
                    const prevIndex = findPreviousAvailable(currentIndex);
                    if (prevIndex !== -1) {
                        showStep(prevIndex, -1);
                    }
                });

                nextBtn.addEventListener("click", function () {
                    const nextIndex = findNextAvailable(currentIndex);
                    if (nextIndex === -1) {
                        finishGuide(true);
                    } else {
                        showStep(nextIndex, 1);
                    }
                });

                skipBtn.addEventListener("click", function () {
                    finishGuide(true);
                });

                return {
                    start: function (initialIndex) {
                        if (isActive) return;
                        isActive = true;
                        document.body.appendChild(layer);

                        window.addEventListener("resize", onViewportChange, true);
                        window.addEventListener("scroll", onViewportChange, true);
                        window.addEventListener("keydown", onKeyDown, true);

                        const safeIndex = Number.isInteger(initialIndex) ? initialIndex : 0;
                        showStep(safeIndex, 1);
                    },
                    refresh: function () {
                        if (!isActive) return;
                        const currentStep = steps[currentIndex];
                        if (!currentStep) return;

                        const newTarget = document.querySelector(currentStep.selector);
                        if (!isRenderableElement(newTarget)) {
                            const nextIndex = findNextAvailable(currentIndex);
                            if (nextIndex !== -1) {
                                showStep(nextIndex, 1);
                            } else {
                                finishGuide(true);
                            }
                            return;
                        }

                        clearTargetPulse();
                        currentTarget = newTarget;
                        currentTarget.classList.add("giu-guide-target-pulse");
                        positionUI(currentTarget);
                    },
                    stop: function (markCompleted) {
                        if (!isActive) return;
                        finishGuide(!!markCompleted);
                    },
                    isActive: function () {
                        return isActive;
                    }
                };
            }

            function restartOnboardingGuide() {
                if (onboardingController && onboardingController.isActive()) {
                    onboardingController.stop(false);
                }

                localStorage.removeItem(ONBOARDING_COMPLETED_KEY);
                clearOnboardingState();
                renderEnhancedUI();
            }

            function maybeStartOnboardingGuide() {
                if (isOnboardingCompleted()) return;
                // The setup wizard comes first: no tour while it is open or while
                // setup is still needed. After Finish/Skip the tour runs as usual.
                if (setupWizard || needsSetup()) return;

                const steps = getOnboardingSteps();
                if (!steps.length) return;

                if (onboardingController && onboardingController.isActive()) {
                    onboardingController.refresh();
                    return;
                }

                onboardingController = createOnboardingController(steps);

                const state = getOnboardingState();
                let startIndex = 0;
                if (state && Number.isInteger(state.index) && state.index >= 0 && state.index < steps.length) {
                    startIndex = state.index;
                } else {
                    clearOnboardingState();
                }

                onboardingController.start(startIndex);
            }

            // ═══════════════════════════════════════════════════════════
            //  Main Entry Point
            // ═══════════════════════════════════════════════════════════

            function captureRenderState(existingContainer) {
                if (!existingContainer) {
                    return {
                        configExpanded: false,
                        summaryDetailsExpandedByKey: {},
                        absentDetailsExpandedByKey: {},
                        scrollY: window.scrollY
                    };
                }

                const configExpanded = !!existingContainer.querySelector(".giu-config-panel .giu-expand-wrapper.giu-expanded");
                const summaryDetailsExpandedByKey = {};
                const absentDetailsExpandedByKey = {};
                const cards = Array.from(existingContainer.querySelectorAll(".giu-summary-card[data-summary-key]"));
                cards.forEach(function (card) {
                    const key = card.getAttribute("data-summary-key") || "";
                    if (!key) return;
                    const summaryWrapper = card.querySelector(".giu-summary-detail-wrapper");
                    const absentWrapper = card.querySelector(".giu-absent-detail-wrapper");
                    summaryDetailsExpandedByKey[key] = !!(summaryWrapper && summaryWrapper.classList.contains("giu-expanded"));
                    absentDetailsExpandedByKey[key] = !!(absentWrapper && absentWrapper.classList.contains("giu-expanded"));
                });

                return {
                    configExpanded,
                    summaryDetailsExpandedByKey,
                    absentDetailsExpandedByKey,
                    scrollY: window.scrollY
                };
            }

            // ───────────────────────────────────────────────────────────────────────
            //  Summary Panel Composition
            // ───────────────────────────────────────────────────────────────────────

            function appendPeriodSummaryCards(grid, periods, selectedDayOffFullName, renderState) {
                const lastTwo = periods.slice(-2);
                if (!lastTwo.length) return;

                if (lastTwo.length === 1) {
                    const current = lastTwo[0];
                    const currentStats = buildPeriodStats(current.rows, current.start, current.end);
                    const key = `Current Payroll Month|${current.label}`;
                    grid.appendChild(createSummaryCard(
                        "Current Payroll Month",
                        current.label,
                        currentStats,
                        !!renderState.summaryDetailsExpandedByKey[key],
                        !!renderState.absentDetailsExpandedByKey[key],
                        key
                    ));
                    return;
                }

                const previous = lastTwo[lastTwo.length - 2];
                const current = lastTwo[lastTwo.length - 1];
                const previousKey = `Last Payroll Month|${previous.label}`;
                const currentKey = `This Payroll Month|${current.label}`;

                const previousStats = buildPeriodStats(previous.rows, previous.start, previous.end);
                const currentStats = buildPeriodStats(current.rows, current.start, current.end);

                grid.appendChild(createSummaryCard(
                    "Last Payroll Month",
                    previous.label,
                    previousStats,
                    !!renderState.summaryDetailsExpandedByKey[previousKey],
                    !!renderState.absentDetailsExpandedByKey[previousKey],
                    previousKey
                ));
                grid.appendChild(createSummaryCard(
                    "This Payroll Month",
                    current.label,
                    currentStats,
                    !!renderState.summaryDetailsExpandedByKey[currentKey],
                    !!renderState.absentDetailsExpandedByKey[currentKey],
                    currentKey
                ));
            }

            function attachSummaryToggleHandlers(grid, summaryTitle, summaryToggleHint) {
                const collectWrappers = function () {
                    return Array.from(grid.querySelectorAll(".giu-summary-detail-wrapper"));
                };

                const updateSummaryToggleHint = function () {
                    const wrappers = collectWrappers();
                    if (!wrappers.length) {
                        summaryToggleHint.textContent = "▾ Expand all";
                        return;
                    }
                    const allExpanded = wrappers.every(function (w) {
                        return w.classList.contains("giu-expanded");
                    });
                    summaryToggleHint.textContent = allExpanded ? "▴ Collapse all" : "▾ Expand all";
                };

                const toggleAllSummaryDetails = function () {
                    const wrappers = collectWrappers();
                    if (!wrappers.length) return;

                    const shouldExpandAll = wrappers.some(function (w) {
                        return !w.classList.contains("giu-expanded");
                    });

                    wrappers.forEach(function (wrapper) {
                        const cardBody = wrapper.closest(".giu-summary-body");
                        const toggleBtn = cardBody ? cardBody.querySelector(".giu-detail-toggle-btn") : null;
                        const chevron = toggleBtn ? toggleBtn.querySelector(".giu-toggle-chevron") : null;

                        if (shouldExpandAll) {
                            wrapper.classList.add("giu-expanded");
                            if (toggleBtn) toggleBtn.childNodes[0].textContent = "Hide Details ";
                            if (chevron) chevron.classList.add("giu-chevron-open");
                        } else {
                            wrapper.classList.remove("giu-expanded");
                            if (toggleBtn) toggleBtn.childNodes[0].textContent = "Show Details ";
                            if (chevron) chevron.classList.remove("giu-chevron-open");
                        }
                    });
                    updateSummaryToggleHint();
                };

                summaryToggleHint.addEventListener("click", toggleAllSummaryDetails);
                summaryTitle.addEventListener("click", toggleAllSummaryDetails);
                grid.addEventListener("click", function (event) {
                    const target = event.target;
                    if (!(target instanceof Element)) return;
                    if (target.closest(".giu-detail-toggle-btn")) {
                        updateSummaryToggleHint();
                    }
                });
                updateSummaryToggleHint();
            }

            function createSummaryPanel(periods, selectedDayOffFullName, renderState) {
                const panel = document.createElement("div");
                panel.className = "giu-summary-panel";

                const summaryHeader = document.createElement("div");
                summaryHeader.className = "giu-summary-header";

                const summaryTitle = document.createElement("div");
                summaryTitle.className = "giu-attendance-section-title";
                summaryTitle.style.margin = "0";
                summaryTitle.textContent = "Attendance Summary";

                const summaryToggleHint = document.createElement("div");
                summaryToggleHint.className = "giu-summary-toggle-hint";
                summaryToggleHint.textContent = "▾ Expand all";
                summaryToggleHint.title = "Show or hide all details";

                summaryHeader.appendChild(summaryTitle);
                summaryHeader.appendChild(summaryToggleHint);
                panel.appendChild(summaryHeader);

                const grid = document.createElement("div");
                grid.className = "giu-summary-grid";

                appendPeriodSummaryCards(grid, periods, selectedDayOffFullName, renderState);
                attachSummaryToggleHandlers(grid, summaryTitle, summaryToggleHint);

                panel.appendChild(grid);
                return panel;
            }

            // ═══════════════════════════════════════════════════════════
            //  First-run setup wizard (src/features/attendanceSetup.js)
            //  The wizard never touches storage: it reads and writes through
            //  setupApi below, which uses the same setters as the settings panel.
            // ═══════════════════════════════════════════════════════════

            // "done" (finished or imported) or "skipped"; "" = never asked.
            function getSetupFlag() {
                try {
                    const v = localStorage.getItem(STORAGE_KEYS.setup);
                    return v === "done" || v === "skipped" ? v : "";
                } catch {
                    return "";
                }
            }

            function setSetupFlag(value) {
                try { localStorage.setItem(STORAGE_KEYS.setup, value); } catch { /* ignore */ }
            }

            function needsSetup() {
                return !isDayOffConfigured() && !getSetupFlag();
            }

            // Choices for the wizard's "previous day off". On Berlin a previous
            // day off may predate the Berlin start, when the Cairo week applied
            // and Sunday was an ordinary selectable day — so Berlin offers the
            // union of both branches' six (all seven weekdays): Berlin's week
            // order, then the days only Cairo could pick (Sunday, at the end).
            // Cairo offers its own six, as the day-off step does.
            function previousDayOffWeekdays() {
                const own = dayOffWeekdays();
                if (!SOURCE) return own;
                const otherOff = BRANCH_CONFIG[getBranch() === "berlin" ? "cairo" : "berlin"].fixedOffDay;
                const extra = WEEKDAY_TABLE.filter(function (wd) {
                    return wd.name !== otherOff && !own.some(function (o) { return o.code === wd.code; });
                });
                return own.concat(extra);
            }

            function setupDayBefore(ymd) {
                const d = new Date(ymd + "T00:00:00Z");
                d.setUTCDate(d.getUTCDate() - 1);
                return d.toISOString().slice(0, 10);
            }

            // What "Run setup again" pre-fills: the day off in effect today, the
            // latest change (the day in effect just before the most recent schedule
            // entry, when it differs), the REMAINING annual leave (as the settings
            // "Edit" shows it), the accrual rate and the Berlin start date.
            function currentSetupValues() {
                const today = getTodayLocalYMD();
                const dayOffCode = getDayOffCodeForDate(today);
                const past = getStoredDayOffSchedule().filter(function (e) { return e.startDate <= today; });
                let previous = null;
                const last = past[past.length - 1];
                if (last && last.code === dayOffCode) {
                    const before = getDayOffCodeForDate(setupDayBefore(last.startDate));
                    if (before && before !== last.code) previous = { code: before, from: last.startDate };
                }
                return {
                    dayOffCode,
                    previous,
                    balance: getStoredAnnualLeaveBalance() - computeAnnualUsedDays(getStoredHolidays()),
                    accrualRate: getStoredAnnualLeaveAccrualRate(),
                    berlinStart: getBranchStart(),
                };
            }

            // The storage the wizard's answers turn into — what doing it by hand in
            // the settings produces: each "Day Off" + "Apply from" writes one
            // schedule entry { startDate, code }. The first entry goes on the
            // retention cutoff (the oldest date records are kept for; earlier still
            // when the change date is older), so it covers all kept history:
            //   no change:  [{ cutoff, current }]
            //   change:     [{ cutoff, previous }, { changeDate, current }]
            // Entries up to today are replaced (the answers describe the past);
            // changes already scheduled for later days are kept. selectedDay (the
            // fallback before the first entry, and the settings dropdown's value)
            // becomes the current day. The balance entered is what REMAINS; it is
            // stored as a total the way the settings "Edit" stores it.
            //
            // Answers equal to what is stored ("Run setup again" clicked through)
            // leave the schedule untouched. Otherwise only the stretch the answers
            // describe is replaced; older entries are kept:
            //   change:    entries before the change date are kept, except that the
            //              latest of them becomes the previous day (dropped when the
            //              day before it already was that day); with none left, the
            //              previous day starts on the cutoff as above.
            //   no change: entries before the cutoff are kept.
            // selectedDay only changes when no older entry is kept (it is the
            // fallback for the dates before them).
            function sameSetupDayOff(values, cur) {
                const a = values.previous || null;
                const b = cur.previous || null;
                return values.dayOffCode === cur.dayOffCode
                    && (!a && !b || !!a && !!b && a.code === b.code && a.from === b.from);
            }

            function planSetupDayOff(values) {
                const today = getTodayLocalYMD();
                const code = values.dayOffCode;
                const schedule = getStoredDayOffSchedule();
                if (sameSetupDayOff(values, currentSetupValues())) {
                    return { selectedDay: getSelectedDayOffCode(), dayOffSchedule: schedule };
                }
                const previous = values.previous && values.previous.code && values.previous.from
                    ? values.previous : null;
                const later = schedule.filter(function (e) { return e.startDate > today; });
                let cutoff = getRetentionCutoffStartDate() || today;
                if (cutoff > today) cutoff = today;
                let kept;
                let entries;
                if (previous) {
                    kept = schedule.filter(function (e) { return e.startDate < previous.from; });
                    const last = kept.pop();
                    if (last) {
                        const before = getDayOffCodeForDate(setupDayBefore(last.startDate));
                        const merged = kept.length && before === previous.code;
                        entries = (merged ? [] : [{ startDate: last.startDate, code: previous.code }])
                            .concat([{ startDate: previous.from, code }]);
                    } else {
                        const dayBefore = setupDayBefore(previous.from);
                        const anchor = dayBefore < cutoff ? dayBefore : cutoff;
                        entries = [{ startDate: anchor, code: previous.code }, { startDate: previous.from, code }];
                    }
                } else {
                    kept = schedule.filter(function (e) { return e.startDate < cutoff; });
                    entries = [{ startDate: cutoff, code }];
                }
                return {
                    selectedDay: kept.length ? getSelectedDayOffCode() : code,
                    dayOffSchedule: kept.concat(entries, later),
                };
            }

            function planSetupValues(values) {
                const dayOff = planSetupDayOff(values);
                const plan = {
                    selectedDay: dayOff.selectedDay,
                    dayOffSchedule: dayOff.dayOffSchedule,
                    annualLeaveBalance: Math.max(0, Number(values.balance) + computeAnnualUsedDays(getStoredHolidays())),
                    annualLeaveAccrualRate: Number(values.accrualRate),
                };
                if (SOURCE) plan.branchStart = values.berlinStart || "";
                return plan;
            }

            function applySetupValues(values) {
                if (!values || !getSelectedDayOffFullName(values.dayOffCode)) {
                    throw new Error("A day off is required.");
                }
                const prev = values.previous;
                const prevOk = prev && previousDayOffWeekdays().some(function (wd) { return wd.code === prev.code; });
                if (prev && (!prevOk || prev.code === values.dayOffCode
                    || !YMD_RE.test(prev.from || "") || prev.from > getTodayLocalYMD())) {
                    throw new Error("The day-off change is invalid.");
                }
                const plan = planSetupValues(values);
                if ("branchStart" in plan && !setBranchStart(plan.branchStart)) {
                    throw new Error(branchStartError(plan.branchStart));
                }
                if (plan.selectedDay) localStorage.setItem(STORAGE_KEYS.selectedDay, plan.selectedDay);
                setStoredDayOffSchedule(plan.dayOffSchedule);
                setStoredAnnualLeaveBalance(plan.annualLeaveBalance);
                setStoredAnnualLeaveAccrualRate(plan.annualLeaveAccrualRate);
                // The balance entered is today's: accrue from the next period on.
                localStorage.setItem(ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY, getPayrollPeriodKey(getTodayLocalYMD()));
            }

            // Re-render whatever is on screen with the new settings.
            function refreshAfterSetup() {
                if (isTargetReportPage() && document.getElementById("giu-attendance-container")) renderEnhancedUI();
                if (isHomePage()) homeRerender();
            }

            // ═══════════════════════════════════════════════════════════
            //  Plan my days (src/features/attendancePlanner.js)
            //  The planner's input comes from the same rules as the summary;
            //  its UI only sees createPlannerApi below.
            // ═══════════════════════════════════════════════════════════

            const PLANNER_DEFAULT_IN = "09:00";

            // Stored { usualIn, today: {date, in}, edits: {ymd: {in?, out?}} }.
            // Edits before today and a "today" from another day are dropped here.
            function getPlannerPrefs() {
                const today = getTodayLocalYMD();
                let raw = null;
                try { raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.planner)); } catch { raw = null; }
                if (!raw || typeof raw !== "object") raw = {};
                const usualIn = plannerParseTime(raw.usualIn) !== null ? raw.usualIn : PLANNER_DEFAULT_IN;
                const todayIn = raw.today && raw.today.date === today && plannerParseTime(raw.today.in) !== null
                    ? raw.today.in : "";
                const edits = {};
                Object.keys(raw.edits || {}).forEach(function (ymd) {
                    if (!YMD_RE.test(ymd) || ymd < today) return;
                    const e = raw.edits[ymd] || {};
                    const clean = {};
                    if (plannerParseTime(e.in) !== null) clean.in = e.in;
                    if (plannerParseTime(e.out) !== null) clean.out = e.out;
                    if (clean.in || clean.out) edits[ymd] = clean;
                });
                return { usualIn, todayIn, edits };
            }

            function setPlannerPrefs(prefs) {
                try {
                    localStorage.setItem(STORAGE_KEYS.planner, JSON.stringify({
                        usualIn: prefs.usualIn,
                        today: prefs.todayIn ? { date: getTodayLocalYMD(), in: prefs.todayIn } : null,
                        edits: prefs.edits
                    }));
                } catch { /* quota */ }
            }

            // Worked/required as the summary counts them, minus today's and later
            // rows; plus every working day from today to the period end. The full
            // period window keeps the summary's compensation pairing (a comp leave
            // booked later pairs with the day-off work it uses) and its overrides.
            // Null until a day off is set (the planner never guesses one).
            function buildPlannerInput(rows) {
                if (!isDayOffConfigured()) return null;
                const today = getTodayLocalYMD();
                const bounds = getPayrollPeriodBounds(getPayrollPeriodKey(today));
                const periodRows = (rows || []).filter(function (r) {
                    return r.date >= bounds.start && r.date <= bounds.end;
                });
                const past = buildPeriodStats(periodRows.filter(function (r) { return r.date < today; }), bounds.start, bounds.end);
                const prefs = getPlannerPrefs();
                const holidays = getStoredHolidays();
                const ramadan = getStoredRamadan();
                const examPeriod = getStoredExamPeriod();
                const overrideByDate = new Map(getStoredOverrides().map(function (o) { return [normalizeYMD(o.date), o]; }));
                const compDates = new Set(getStoredCompensationLeaves().map(function (c) { return normalizeYMD(c.date); }));
                const todayRow = periodRows.find(function (r) { return r.date === today; }) || null;

                const days = [];
                eachYmdInRange(today, bounds.end, function (date) {
                    const dayName = formatDateToDayName(date);
                    if (!dayName) return;
                    if (isFixedNonWorkingDay(dayName, date)) return;
                    const effectiveDayOff = getDayOffFullNameForDate(date, getSelectedDayOffCode());
                    if (effectiveDayOff && dayName === effectiveDayOff) return;
                    if (isDateHoliday(date, holidays) || compDates.has(date)) return;   // holidays include annual leave

                    const isToday = date === today;
                    const edit = prefs.edits[date] || {};
                    const day = {
                        ymd: date,
                        dayName,
                        isToday,
                        requiredSeconds: getRequiredSecondsBySeason(date, ramadan),
                        capSeconds: getLastOutCapForDate(date, ramadan, examPeriod),
                        lateSeconds: isBetweenDates(ramadan.start, ramadan.end, date)
                            ? LATE_THRESHOLD_SECONDS_RAMADAN : LATE_THRESHOLD_SECONDS_NORMAL,
                        inSeconds: plannerParseTime(edit.in || prefs.usualIn),
                        outSeconds: edit.out ? plannerParseTime(edit.out) : null,
                        fixedSeconds: null,
                        inBase: false,
                        inEdited: !!edit.in,
                        outEdited: !!edit.out,
                        inFromReport: false
                    };
                    const override = overrideByDate.get(date);
                    if (override) {
                        // Already counted by buildPeriodStats above.
                        day.fixedSeconds = getOverrideActualSecondsForDate(override, date, ramadan);
                        day.inBase = true;
                    } else if (isToday) {
                        // The gate report lags; use today's row when it is there.
                        const reportIn = todayRow ? parseTimeToSeconds(todayRow.firstIn) : null;
                        if (todayRow && hasValidLastOut(todayRow.lastOut)) {
                            day.fixedSeconds = getEffectiveRowActualSeconds(todayRow, ramadan, examPeriod);
                        } else if (reportIn !== null) {
                            day.inSeconds = reportIn;
                            day.inFromReport = true;
                        } else if (prefs.todayIn) {
                            day.inSeconds = plannerParseTime(prefs.todayIn);
                        }
                        day.inEdited = false;
                    }
                    days.push(day);
                });

                return {
                    periodStart: bounds.start,
                    periodEnd: bounds.end,
                    workedSeconds: past.actualSeconds,
                    requiredSeconds: past.requiredSeconds,
                    minDaySeconds: MIN_WORKING_DAY_SECONDS,
                    days
                };
            }

            function createPlannerApi(getRows) {
                return {
                    input: function () { return buildPlannerInput(getRows()); },
                    prefs: getPlannerPrefs,
                    isExpanded: function () { return getSectionExpanded("planner", true); },
                    setExpanded: function (expanded) { setSectionExpanded("planner", expanded); },
                    setUsualIn: function (hhmm) {
                        if (plannerParseTime(hhmm) === null) return;
                        const p = getPlannerPrefs();
                        p.usualIn = hhmm;
                        setPlannerPrefs(p);
                    },
                    setTodayIn: function (hhmm) {
                        const p = getPlannerPrefs();
                        p.todayIn = plannerParseTime(hhmm) !== null ? hhmm : "";
                        setPlannerPrefs(p);
                    },
                    // hhmm "" / null removes that edit.
                    setEdit: function (ymd, kind, hhmm) {
                        const p = getPlannerPrefs();
                        const e = Object.assign({}, p.edits[ymd]);
                        if (plannerParseTime(hhmm) !== null) e[kind] = hhmm;
                        else delete e[kind];
                        if (e.in || e.out) p.edits[ymd] = e;
                        else delete p.edits[ymd];
                        setPlannerPrefs(p);
                    },
                    clearEdits: function () {
                        const p = getPlannerPrefs();
                        p.edits = {};
                        setPlannerPrefs(p);
                    }
                };
            }

            // The Home widget's one line, or null (today off, or already done).
            function plannerTodayLeaveBy(rows) {
                const input = buildPlannerInput(rows);
                if (!input) return null;
                const today = planAttendanceDays(input).days.find(function (d) { return d.isToday; });
                if (!today || today.locked) return null;
                return plannerFormat12(today.outSeconds);
            }

            let setupWizard = null;        // the open wizard's handle, or null
            let setupAutoOpened = false;   // auto-open at most once per page load

            const setupApi = {
                isBerlin: !!SOURCE,
                today: getTodayLocalYMD,
                dayOptions: function () {
                    return dayOffWeekdays().map(function (wd) { return { code: wd.code, name: wd.name }; });
                },
                previousDayOptions: function () {
                    return previousDayOffWeekdays().map(function (wd) { return { code: wd.code, name: wd.name }; });
                },
                dayName: getSelectedDayOffFullName,
                current: currentSetupValues,
                berlinStartError: branchStartError,
                apply: applySetupValues,
                importJson: function (text) {
                    try {
                        const report = importSettingsSnapshot(JSON.parse(String(text || "")));
                        if (!report.accepted) return { ok: false, error: "This file has no attendance settings in it." };
                        return { ok: true, report };
                    } catch (e) {
                        return { ok: false, error: "That is not a valid settings file (" + (e && e.message ? e.message : "unknown error") + ")." };
                    }
                },
                // Given the wizard's answers, the backup already contains them
                // (the wizard offers the download before Finish writes them).
                exportJson: function (values) {
                    const snapshot = exportSettingsSnapshot();
                    if (values) Object.assign(snapshot, planSetupValues(values));
                    return JSON.stringify(snapshot, null, 2);
                },
                markDone: function () { setSetupFlag("done"); },
                markSkipped: function () { if (getSetupFlag() !== "done") setSetupFlag("skipped"); },
                onApplied: refreshAfterSetup,
                onClosed: function (reason) {
                    setupWizard = null;
                    if (typeof Tips.release === "function") Tips.release();
                    // Skipped on the report: the tour it held back may start now.
                    if (reason === "skipped" && isTargetReportPage() && document.getElementById("giu-attendance-container")) {
                        maybeStartOnboardingGuide();
                    }
                },
                needsSetup,
                isDayOffConfigured,
                // Where focus goes on close when the opener was re-rendered away.
                focusFallback: function () {
                    return document.getElementById("giu-run-setup-btn")
                        || document.querySelector("#gius-att-widget .gius-att-dayoff-btn")
                        || document.querySelector("#gius-att-widget button, #gius-att-widget a[href]");
                },
            };

            // withPrefill: "Run setup again" / the Home prompt pre-fill the stored
            // answers — but only once a day off exists (a first run guesses nothing).
            function openSetupWizard(withPrefill) {
                if (setupWizard) return setupWizard;
                // A due monthly accrual first, so the balance shown (and saved) is today's.
                applyMonthlyAnnualLeaveAccrual();
                const prefill = withPrefill && isDayOffConfigured() ? currentSetupValues() : null;
                // The tour would sit on top of the dialog; stop it (not completed).
                if (onboardingController && onboardingController.isActive()) onboardingController.stop(false);
                // Tips (bundle) wait until the wizard closes; the stub has no hold.
                if (typeof Tips.hold === "function") Tips.hold();
                setupWizard = openAttendanceSetup(S, setupApi, { prefill });
                return setupWizard;
            }

            // Home boot and report render: open the wizard when setup is needed,
            // once per page load.
            function maybeAutoOpenSetup() {
                if (setupAutoOpened || setupWizard || !needsSetup()) return;
                setupAutoOpened = true;
                openSetupWizard(false);
            }

            // The Home "Set your day off" prompt: the wizard, in place (no navigation).
            function openSetup() {
                return openSetupWizard(true);
            }

            // Cairo only (Berlin styles its imported copy itself): the portal's own
            // report grid becomes the styled, newest-first table, inside a scroll
            // wrapper, so the summary inserted before the grid lands in that
            // wrapper too. styleReportGrid marks the grid and does nothing on later
            // calls, so this is safe on every render. Display only: the rows it
            // reorders and the columns it drops never feed a number (rows are
            // re-sorted by date; Day/Duration/FirstIn/LastOut are found by header).
            function styleCairoReportGrid(table) {
                try {
                    injectReportGridStyles(S);
                    wrapReportGrid(table);
                    styleReportGrid(table, { title: "Timesheet — GIU Cairo" });
                } catch (err) {
                    console.log("Report grid styling failed:", err && err.message);
                }
            }

            function renderEnhancedUI() {
                if (!isTargetReportPage()) return;
                applyMonthlyAnnualLeaveAccrual();
                pruneOldRecords();

                const reportTable = document.getElementById("MainContent_DG_SwiftReport");
                if (!reportTable) return;
                // Berlin only: the view's grid in Berlin time for the current start
                // date (SOURCE converts from the raw Cairo text, so this is a no-op
                // unless the start date changed). Before any row is read below.
                if (SOURCE && SOURCE.localizeGrid) SOURCE.localizeGrid(reportTable);

                injectStyles();
                if (!SOURCE) styleCairoReportGrid(reportTable);

                const selectedDayCode = getSelectedDayOffCode();
                const selectedDayOffFullName = getSelectedDayOffFullName(selectedDayCode);

                const existing = document.getElementById("giu-attendance-container");
                const renderState = captureRenderState(existing);
                if (existing) existing.remove();

                const container = document.createElement("div");
                container.id = "giu-attendance-container";
                container.className = "giu-attendance-wrap";

                const periods = groupRowsByPayrollPeriod(getAttendanceRows());

                // Day-off dropdown changes are staged; only "Apply from" persists schedule changes.
                const noopDayChange = function () {};
                const configPanel = createConfigPanel(
                    selectedDayCode,
                    selectedDayOffFullName,
                    periods,
                    noopDayChange,
                    renderState.configExpanded
                );

                if (periods.length > 0) {
                    container.appendChild(createSummaryPanel(periods, selectedDayOffFullName, renderState));
                    const plannerHost = document.createElement("div");
                    plannerHost.id = "giu-att-planner";
                    container.appendChild(plannerHost);
                    renderAttendancePlanner(S, createPlannerApi(function () { return getAttendanceRows(); }), plannerHost);
                } else {
                    container.appendChild(createDebugBox(
                        "Attendance summary could not be generated because valid Day/Duration rows were not detected from the report table."
                    ));
                }

                container.appendChild(configPanel);

                reportTable.parentNode.insertBefore(container, reportTable);
                window.scrollTo({ top: renderState.scrollY, behavior: "auto" });

                // First run: the setup wizard (it holds the guide back until it closes).
                maybeAutoOpenSetup();

                // Run first-time guide after UI is in the DOM so step selectors can resolve.
                maybeStartOnboardingGuide();
            }

            function computeCurrentMonthSummary(rows, todayYmd) {
                const periods = groupRowsByPayrollPeriod(rows || []);
                if (!periods.length) return { empty: true };
                // Pick the period containing TODAY, not the latest period with data:
                // the gate report lags ~a day, so right after a period flip (the 11th)
                // the newest rows still belong to the previous payroll month and the
                // widget would show last month's absences.
                const todayKey = getPayrollPeriodKey(todayYmd || getTodayLocalYMD());
                const current = periods.find(function (p) { return p.key === todayKey; });
                if (current) {
                    return { label: current.label, stats: buildPeriodStats(current.rows, current.start, current.end) };
                }
                const bounds = getPayrollPeriodBounds(todayKey);
                return {
                    label: getPayrollPeriodLabel(todayKey),
                    stats: buildPeriodStats([], bounds.start, bounds.end),
                };
            }

            let homeLastRows = [];
            let homeFetchInFlight = false; // guards the manual refresh button and the auto-refresh path from overlapping
            // Berlin only: the failure shown as an inline notice over the stale widget,
            // until a fetch succeeds. homeRerender puts it back after repainting.
            let homeLastError = null;

            // Berlin only: SOURCE rejects with kind "superseded" when the university
            // changed while its request was in flight. The switch already reset and
            // rebooted the widget (homeReset), so a superseded result renders nothing
            // and leaves the widget state alone. Never true on Cairo (SOURCE is null).
            function isSupersededFetch(err) {
                return !!(SOURCE && err && err.kind === "superseded");
            }

            // Berlin only (handed to SOURCE.start): forget everything the widget
            // holds for the university being left, so it cannot re-render or re-save
            // the old university's rows.
            function homeReset() {
                homeLastRows = [];
                homeFetchInFlight = false;
                homeLastError = null;
                try { localStorage.removeItem(HOME_CACHE_KEY); } catch { /* ignore */ }
            }

            function loadHomeCache() {
                try {
                    const raw = JSON.parse(localStorage.getItem(HOME_CACHE_KEY));
                    if (!raw || !raw.summary) return null;
                    return raw;
                } catch { return null; }
            }
            function saveHomeCache(summary, rows) {
                try {
                    localStorage.setItem(HOME_CACHE_KEY, JSON.stringify({
                        summary: summary,
                        rows: Array.isArray(rows) ? rows : null, // kept so Home can recompute when settings change
                        fetchedAt: Date.now()
                    }));
                } catch { /* quota */ }
            }

            function fetchReportViaIframe(timeoutMs) {
                const limit = timeoutMs || HOME_IFRAME_TIMEOUT_MS;
                return new Promise(function (resolve, reject) {
                    const iframe = document.createElement("iframe");
                    iframe.setAttribute("data-gius-att", "1");
                    iframe.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:0;height:0;border:0;";
                    iframe.src = REPORT_DATA_URL;

                    let done = false;
                    let lastCount = -1;
                    const started = Date.now();
                    const cleanup = function () { try { iframe.remove(); } catch {} };
                    const finish = function (fn, arg) { if (done) return; done = true; clearInterval(poll); cleanup(); fn(arg); };

                    const poll = setInterval(function () {
                        if (Date.now() - started > limit) { finish(reject, new Error("home-iframe-timeout")); return; }
                        let doc;
                        try { doc = iframe.contentDocument; } catch { return; }
                        if (!doc) return;
                        // Don't read while the document is still PARSING ("loading"): a mid-parse
                        // read can grab a half-built grid (e.g. the first 13 of 31 rows) and render
                        // wrong numbers on Home while the full Report page is correct — the
                        // Home/Report mismatch users reported. "interactive" (DOMContentLoaded) is
                        // enough: the full table is in the DOM. We do NOT wait for "complete" —
                        // that blocks on slow subresources (images/css) and can hang the widget.
                        if (doc.readyState === "loading") return;
                        const table = doc.getElementById("MainContent_DG_SwiftReport");
                        if (!table) return;
                        const rows = getAttendanceRows(doc);
                        if (!rows.length) return;
                        // Insurance: only trust a row count that holds steady across two
                        // consecutive polls, so any late append can't be read half-finished.
                        if (rows.length !== lastCount) { lastCount = rows.length; return; }
                        finish(resolve, rows);
                    }, 250);

                    iframe.addEventListener("error", function () { finish(reject, new Error("home-iframe-error")); });
                    document.body.appendChild(iframe);
                });
            }

            // One entry point for "get the report rows", whichever source is active.
            // Only the Berlin source honours opts.force (skips its short memo).
            function fetchReportRows(opts) {
                if (!SOURCE) return fetchReportViaIframe();
                return SOURCE.fetchReportDoc(opts).then(function (doc) {
                    const layoutError = reportDocLayoutError(doc);
                    if (layoutError) throw layoutError;
                    return getAttendanceRows(doc);
                });
            }

            function homeMountPoint() {
                const target = document.getElementById("MainContent_div_grid");
                if (target) return { mode: "after", node: target };
                const fb = document.querySelector(".page-content") ||
                           document.querySelector("[id*=MainContent]") || document.body;
                return { mode: "prepend", node: fb };
            }

            function homeEnsureHost() {
                let host = document.getElementById("gius-att-widget");
                if (host) return host;
                host = document.createElement("div");
                host.id = "gius-att-widget";
                host.className = "gius-att-widget";
                const mp = homeMountPoint();
                if (mp.mode === "after") mp.node.insertAdjacentElement("afterend", host);
                else mp.node.prepend(host);
                return host;
            }

            function homeEsc(s) {
                return String(s).replace(/[&<>"]/g, function (c) {
                    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
                });
            }

            function homeFmtDate(ymd) {
                const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(ymd));
                if (!m) return homeEsc(ymd);
                const d = new Date(+m[1], +m[2] - 1, +m[3]);
                return d.toLocaleString("en-GB", { weekday: "short", day: "numeric", month: "short" });
            }

            // Reads the logged-in user's first name off the Home page's account label
            // (id ends in "lbl_Account", text like "firstname.lastname") for the tier
            // popup's "current tier" badge. Falls back to "YOU" if the label is missing
            // or unparseable (e.g. modal opened on a non-Home page).
            function homeGetUserFirstName() {
                try {
                    const el = document.querySelector('[id*="lbl_Account"]');
                    const raw = el && el.textContent && el.textContent.trim();
                    const first = raw && raw.split(".")[0];
                    if (!first) return null;
                    return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
                } catch {
                    return null;
                }
            }

            // Picks a stable-per-day item from `list`: hash today's date + `keySuffix" →
            // index. Same date ⟹ same pick (no per-reload flicker); different suffixes
            // (e.g. tier name vs tier+"-cond") diverge so two lists don't sync up.
            function homeDailyPick(list, keySuffix) {
                const key = String(getTodayLocalYMD()) + "|" + keySuffix;
                let hash = 0;
                for (let i = 0; i < key.length; i++) {
                    hash = (Math.imul(hash, 31) + key.charCodeAt(i)) | 0;
                }
                return list[Math.abs(hash) % list.length];
            }

            function homeBalanceText(stats) {
                const balance = String((stats && stats.balanceHM) || "0:00:00");
                if (/^0+:00(?::00)?$/.test(balance)) return "On track";
                return balance + (stats && stats.isPositiveOrZero ? " Extra" : " Missing");
            }

            // Berlin only: a failure over a stale widget, kept until a fetch succeeds.
            function homeShowInlineError(err) {
                homeLastError = err;
                SOURCE.renderError(homeEnsureHost(), err, homeRetry, { inline: true });
            }

            function homeRenderFromRows(rows) {
                homeLastError = null;
                homeLastRows = Array.isArray(rows) ? rows : [];
                const summary = computeCurrentMonthSummary(homeLastRows);
                saveHomeCache(summary, homeLastRows);
                renderHomeWidget(summary);
            }

            function homeRefreshAfterQuickAction() {
                if (homeLastRows.length) {
                    homeRenderFromRows(homeLastRows);
                    return;
                }

                fetchReportRows().then(homeRenderFromRows).catch(function (err) {
                    if (isSupersededFetch(err)) return;
                    const cache = loadHomeCache();
                    if (cache && cache.summary) {
                        renderHomeWidget(cache.summary, { stale: true });
                        if (SOURCE) homeShowInlineError(err);
                    } else {
                        homeShowError(homeEnsureHost(), err);
                    }
                });
            }

            function homeAddAbsentHolidayEntry(date, category) {
                const isAnnual = category === "annual";
                const result = saveAbsentHolidayEntry(
                    date,
                    isAnnual ? "annual" : "holiday",
                    isAnnual ? "Add annual leave from home absent quick action" : "Add holiday from home absent quick action",
                    {
                        invalid: isAnnual ? "Invalid date. Could not create annual leave." : "Invalid date. Could not create holiday.",
                        exists: isAnnual ? "This date is already saved as annual leave." : "This date is already saved as a holiday."
                    }
                );
                if (!result.ok) {
                    alert(result.message);
                    return;
                }
                homeRefreshAfterQuickAction();
            }

            function homeAddAbsentCompensationEntry(date) {
                const periods = groupRowsByPayrollPeriod(homeLastRows);
                const selectedDayOffFullName = getSelectedDayOffFullName(getSelectedDayOffCode());
                const result = saveAbsentCompensationEntry(
                    date,
                    periods,
                    selectedDayOffFullName,
                    "From home absent day quick action",
                    "Add compensation from home absent quick action"
                );
                if (!result.ok) {
                    alert(result.message);
                    return;
                }
                homeRefreshAfterQuickAction();
            }

            function homeAttachAbsentActions(host) {
                Array.from(host.querySelectorAll("[data-gius-home-absent-action]")).forEach(function (button) {
                    button.addEventListener("click", function (event) {
                        event.preventDefault();
                        event.stopPropagation();

                        const action = button.getAttribute("data-gius-home-absent-action") || "";
                        const date = button.getAttribute("data-date") || "";
                        if (action === "holiday") {
                            homeAddAbsentHolidayEntry(date, "holiday");
                        } else if (action === "annual") {
                            homeAddAbsentHolidayEntry(date, "annual");
                        } else if (action === "compensation") {
                            homeAddAbsentCompensationEntry(date);
                        }
                    });
                });
            }

            function homeInjectStyles() {
                if (document.getElementById("gius-att-style")) return;
                const css = `
                    .gius-att-widget{font-family:inherit;display:block;width:100%;box-sizing:border-box;
                        margin:28px 0;border-radius:12px;padding:16px 18px;background:#fff;color:#1e1e2e;
                        box-shadow:0 2px 10px rgba(0,0,0,.12);}
                    .gius-att-widget *{box-sizing:border-box;}
                    .gius-att-head{font-weight:700;font-size:16px;margin-bottom:12px;}
                    .gius-att-stale{color:#b8860b;font-weight:600;font-size:12px;}
                    .gius-att-refresh{float:right;border:none;background:transparent;cursor:pointer;
                        font-size:15px;line-height:1;color:inherit;opacity:.55;padding:2px 4px;}
                    .gius-att-refresh:hover{opacity:1;}
                    .gius-att-refresh:disabled{opacity:.3;cursor:wait;}
                    .gius-att-card{background:#f8f9fa;border:1px solid #e9ecef;border-left:4px solid #ffc107;
                        border-radius:12px;padding:14px;margin-bottom:12px;}
                    .gius-att-status{display:flex;align-items:center;gap:8px;flex-wrap:wrap;
                        font-size:17px;font-weight:700;margin-bottom:8px;}
                    .gius-att-balance{display:inline-block;font-size:13px;font-weight:700;padding:3px 10px;
                        border-radius:999px;}
                    .gius-att-bal-green{background:#dcfce7;color:#166534;}
                    .gius-att-bal-amber{background:#fff8e1;color:#8a6500;}
                    .gius-att-bal-red{background:#fee2e2;color:#991b1b;}
                    .gius-att-bar{height:8px;border-radius:6px;background:#e9ecef;overflow:hidden;margin:10px 0 8px;}
                    .gius-att-bar-fill{height:100%;border-radius:6px;}
                    .gius-att-bar-ghost{background:#64748b;} .gius-att-bar-deduct{background:#e11d48;} .gius-att-bar-close{background:#f59e0b;} .gius-att-bar-ontime{background:#16a34a;}
                    .gius-att-bar-workaholic{background:#ea580c;} .gius-att-bar-grass{background:#65a30d;} .gius-att-bar-slave{background:#a21caf;}
                    .gius-att-tierwrap{margin-top:10px;}
                    .gius-att-quip{margin-top:6px;font-size:12.5px;font-style:italic;color:#6b7280;}
                    html.gius-dark .gius-att-quip{color:#9399b2;}
                    .gius-att-plan{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:8px;padding:7px 10px;border-radius:6px;background:#f3f4f6;font-size:12px;font-weight:600;}
                    .gius-att-plan b{font-variant-numeric:tabular-nums;}
                    html.gius-dark .gius-att-plan{background:#313244;color:#cdd6f4;}
                    .gius-att-tier{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:800;padding:3px 9px;border-radius:999px;}
                    .gius-att-tier-btn{cursor:pointer;border:none;font-family:inherit;transition:filter .12s,transform .12s;}
                    .gius-att-tier-btn:hover{filter:brightness(.96);transform:translateY(-1px);}
                    .gius-att-tier-btn::after{content:"i";font-size:9px;font-weight:900;line-height:1;width:13px;height:13px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;border:1.5px solid currentColor;opacity:.7;}
                    .gius-att-tier-seen::after{display:none;}
                    .gius-att-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;z-index:2147483600;background:rgba(0,0,0,.45);padding:20px;opacity:0;transition:opacity .15s;}
                    .gius-att-modal.open{display:flex;opacity:1;}
                    .gius-att-sheet{width:100%;max-width:420px;max-height:85vh;overflow:auto;background:#fff;color:#1e1e2e;border-radius:14px;padding:18px;box-shadow:0 18px 50px rgba(0,0,0,.35);}
                    .gius-att-sheet-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;}
                    .gius-att-sheet-title{font-weight:800;font-size:16px;}
                    .gius-att-sheet-sub{font-size:12.5px;color:#6b7280;margin-bottom:14px;}
                    .gius-att-x{border:none;background:transparent;font-size:20px;line-height:1;cursor:pointer;color:inherit;padding:4px;}
                    .gius-att-trow{display:flex;align-items:flex-start;gap:11px;padding:11px;border-radius:10px;margin-bottom:8px;border:1px solid #eef0f3;}
                    .gius-att-trow.cur{background:#f6f8fa;border-color:#d0d7de;}
                    .gius-att-dot{flex:0 0 auto;width:14px;height:14px;border-radius:50%;margin-top:3px;}
                    .gius-att-dot-ghost{background:#64748b;} .gius-att-dot-deduct{background:#e11d48;} .gius-att-dot-close{background:#f59e0b;} .gius-att-dot-ontime{background:#16a34a;}
                    .gius-att-dot-workaholic{background:#ea580c;} .gius-att-dot-grass{background:#65a30d;} .gius-att-dot-slave{background:#a21caf;}
                    .gius-att-trow-main{flex:1 1 auto;min-width:0;}
                    .gius-att-trow-name{font-weight:800;font-size:13.5px;display:flex;align-items:center;gap:7px;flex-wrap:wrap;}
                    .gius-att-trow-cur{font-size:10.5px;font-weight:800;letter-spacing:.4px;padding:1px 6px;border-radius:999px;background:#1e1e2e;color:#fff;}
                    .gius-att-trow-cond{font-size:12px;color:#6b7280;margin-top:2px;}
                    html.gius-dark .gius-att-sheet{background:#1e1e2e;color:#cdd6f4;}
                    html.gius-dark .gius-att-sheet-sub,html.gius-dark .gius-att-trow-cond{color:#9399b2;}
                    html.gius-dark .gius-att-trow{border-color:#2a2a3a;}
                    html.gius-dark .gius-att-trow.cur{background:#181825;border-color:#3a3a4d;}
                    html.gius-dark .gius-att-trow-cur{background:#cdd6f4;color:#1e1e2e;}
                    .gius-att-tier-ghost{background:#e2e8f0;color:#334155;} .gius-att-tier-deduct{background:#ffe4e6;color:#9f1239;} .gius-att-tier-close{background:#fff3da;color:#92600a;}
                    .gius-att-tier-ontime{background:#dcfce7;color:#166534;} .gius-att-tier-workaholic{background:#ffedd5;color:#9a3412;}
                    .gius-att-tier-grass{background:#ecfccb;color:#3f6212;} .gius-att-tier-slave{background:#fae8ff;color:#86198f;}
                    html.gius-dark .gius-att-tier-ghost{background:#2a3040;color:#b6c2d9;} html.gius-dark .gius-att-tier-deduct{background:#3a1220;color:#f7a8c0;} html.gius-dark .gius-att-tier-close{background:#3a2c10;color:#f9d77e;}
                    html.gius-dark .gius-att-tier-ontime{background:#14351f;color:#a6e3a1;} html.gius-dark .gius-att-tier-workaholic{background:#3a1f10;color:#fdba74;}
                    html.gius-dark .gius-att-tier-grass{background:#1f2d0a;color:#bef264;} html.gius-dark .gius-att-tier-slave{background:#2e1230;color:#f0abfc;}
                    .gius-att-meta{font-size:13px;color:#272c33;}
                    .gius-att-toggle{margin-top:6px;font-size:13px;font-weight:700;background:transparent;border:none;
                        color:#272c33;cursor:pointer;padding:4px 0;}
                    .gius-att-toggle::before{content:"\\25B8";display:inline-block;margin-right:6px;transition:transform .3s ease-out;}
                    .gius-att-toggle-open::before{transform:rotate(90deg);}
                    .gius-att-expand{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease-out;}
                    .gius-att-expand.gius-att-expanded{grid-template-rows:1fr;}
                    .gius-att-expand-inner{overflow:hidden;}
                    .gius-att-absent-list{margin-top:6px;display:flex;flex-direction:column;gap:6px;font-size:13px;}
                    .gius-att-absent-row{background:#f5f5fa;border-radius:6px;padding:6px 8px;
                        display:flex;align-items:center;justify-content:space-between;gap:8px;}
                    .gius-att-absent-date{font-weight:700;}
                    .gius-att-actions{display:inline-flex;align-items:center;justify-content:flex-end;
                        flex-wrap:wrap;gap:5px;}
                    .gius-att-action{font:inherit;font-size:12px;font-weight:700;line-height:1;
                        border:1px solid #d7dce2;background:#fff;color:#272c33;border-radius:6px;
                        padding:5px 7px;cursor:pointer;}
                    .gius-att-action:hover{background:#fff8e1;border-color:#f0c247;}
                    .gius-att-link{display:inline-block;margin-top:10px;font-size:13px;font-weight:600;color:#272c33;}
                    .gius-att-empty{font-size:13px;opacity:.85;}
                    html.gius-dark .gius-att-widget{background:#1e1e2e;color:#cdd6f4;box-shadow:0 2px 10px rgba(0,0,0,.45);}
                    html.gius-dark .gius-att-card{background:#181825;border-color:#313244;border-left-color:#f9e2af;}
                    html.gius-dark .gius-att-bar{background:#313244;}
                    html.gius-dark .gius-att-meta,html.gius-dark .gius-att-toggle,html.gius-dark .gius-att-link{color:#cdd6f4;}
                    html.gius-dark .gius-att-absent-row{background:#11111b;}
                    html.gius-dark .gius-att-action{background:#181825;border-color:#313244;color:#cdd6f4;}
                    html.gius-dark .gius-att-action:hover{background:#2a2410;border-color:#f9e2af;}
                    html.gius-dark .gius-att-bal-green{background:#14351f;color:#a6e3a1;}
                    html.gius-dark .gius-att-bal-amber{background:#2a2410;color:#f9e2af;}
                    html.gius-dark .gius-att-bal-red{background:#3a1414;color:#f38ba8;}
                    .gius-att-dayoff{display:flex;align-items:center;gap:9px;flex-wrap:wrap;
                        border-radius:8px;padding:9px 12px;margin:0 0 12px;font-size:13.5px;
                        line-height:1.45;border-left:3px solid;}
                    .gius-att-dayoff .ico{font-size:16px;flex:0 0 auto;}
                    .gius-att-dayoff .txt{flex:1 1 auto;min-width:140px;}
                    .gius-att-dayoff .txt strong{font-weight:800;}
                    .gius-att-dayoff-btn{font:inherit;font-size:12.5px;font-weight:700;line-height:1;
                        cursor:pointer;border-radius:6px;padding:7px 11px;border:1px solid transparent;
                        flex:0 0 auto;}
                    .gius-att-dayoff.warn{background:#fff8e1;border-left-color:#f59e0b;color:#8a6500;}
                    .gius-att-dayoff.warn .gius-att-dayoff-btn{background:#b45309;color:#fff;}
                    html.gius-dark .gius-att-dayoff.warn{background:#2a2410;border-left-color:#f9e2af;color:#f9e2af;}
                    html.gius-dark .gius-att-dayoff.warn .gius-att-dayoff-btn{background:#f9e2af;color:#2a2410;}
                    .gius-att-card.gius-att-muted{opacity:.45;filter:grayscale(.6);}`;
                const style = document.createElement("style");
                style.id = "gius-att-style";
                style.textContent = css;
                document.head.appendChild(style);
            }

            // The Home "Set your day off" prompt, or null once a day off is set.
            // Gated purely on LIVE config (never a cached summary flag), so it tracks
            // set/remove immediately. Nothing is guessed: until the staff member picks
            // a day off the numbers stay greyed and this prompt stays. The button
            // carries gius-btn so GIU Dark Mode leaves it styled.
            function buildDayOffPromptForHome() {
                if (isDayOffConfigured()) return null;
                const el = document.createElement("div");
                el.className = "gius-att-dayoff warn";
                el.innerHTML = `<span class="ico">&#9888;</span>
                    <span class="txt"><strong>Set your day off</strong> to see correct attendance.</span>
                    <button type="button" class="gius-att-dayoff-btn gius-btn">Set your day off &rarr;</button>`;
                el.querySelector(".gius-att-dayoff-btn").addEventListener("click", function () {
                    openSetup();
                });
                return el;
            }

            function renderHomeWidget(summary, opts) {
                opts = opts || {};
                homeInjectStyles();
                const host = homeEnsureHost();

                if (!summary || summary.empty) {
                    host.innerHTML = `<div class="gius-att-head">Attendance</div>
                        <div class="gius-att-empty">No attendance records yet. <a class="gius-att-link" href="${REPORT_VIEW_URL}">View full report</a></div>`;
                    return;
                }

                const st = summary.stats;
                // Uncapped % for the label; bar width still clamps to 100% so it never overflows.
                const pctRaw = Math.max(0, typeof st.progressPercentRaw === "number"
                    ? st.progressPercentRaw : st.progressPercent);
                const barWidth = Math.min(100, pctRaw);
                // Tier key computed once in finalizePeriodStats (single source — breakpoints live
                // with the math, not the view, so Home never drifts from the stats engine).
                // Fallback for summaries cached by an older version (no `tier` field): a missing
                // tier must NOT reach TIER_QUIPS[tier]/.length below — that threw and left the
                // widget blank. The fresh iframe fetch overwrites this with the real tier.
                const tier = st.tier || "ontime";
                const TIER_NAMES = {
                    ghost: "👻 Ghosting GIU", deduct: "💸 Paycheck Hit",
                    close: "😅 Cutting It Close",
                    ontime: "✅ Perfectly Mid", workaholic: "💪 Workaholic",
                    grass: "🌱 Get a Life", slave: "⛏️ Officially a Slave"
                };
                const TIER_ORDER = ["ghost", "deduct", "close", "ontime", "workaholic", "grass", "slave"];
                const TIER_CONDS = {
                    ghost: "Behind by more than 10 hours",
                    deduct: "Behind by 3 to 10 hours",
                    close: "Behind by up to 3 hours",
                    ontime: "100% covered, under +3h extra",
                    workaholic: "+3 to +8 hours extra",
                    grass: "+8 to +15 hours extra",
                    slave: "+15 hours extra or more"
                };
                const TIER_QUIPS = {
                    ghost: [
                        "The gate scanner forgot what you look like.",
                        "Attendance: purely theoretical.",
                        "Clocking in is apparently optional for you.",
                        "Payroll wants a word. Several, actually."
                    ],
                    deduct: [
                        "That paycheck is about to shrink.",
                        "Payroll is sharpening the red pen.",
                        "Your salary filed a missing-hours report.",
                        "Deduction letter loading…"
                    ],
                    close: [
                        "One decent day and you're square.",
                        "Almost balanced — finish the job.",
                        "Just shy of safe. Keep going.",
                        "A short shift from peace of mind."
                    ],
                    ontime: [
                        "Balanced. Zen master of the clock-in.",
                        "Exactly enough. Chef's kiss attendance.",
                        "Right on the money — no more, no less."
                    ],
                    workaholic: [
                        "Banking hours like it's a personality.",
                        "Someone tell you weekends exist?",
                        "The overtime is overtiming."
                    ],
                    grass: [
                        "Sunlight: theoretical concept for you.",
                        "You've banked a small vacation.",
                        "Nobody asked for this much dedication.",
                        "Diminishing returns on effort."
                    ],
                    slave: [
                        "GIU should be paying rent in your life.",
                        "At this point, bring a sleeping bag.",
                        "Officially married to the gate scanner."
                    ]
                };
                const barClass = "gius-att-bar-" + tier;
                const tierClass = "gius-att-tier-" + tier;
                const tierName = TIER_NAMES[tier];
                // Hide the "i" hint once the user has opened the tier popup at least once.
                let tierHintSeen = false;
                try { tierHintSeen = localStorage.getItem("giuAttTierHintSeen") === "1"; } catch {}
                // One quip per day, pseudo-random but STABLE all day (not per reload).
                const tierQuip = homeDailyPick(TIER_QUIPS[tier], tier);

                const absentBlock = st.absentDays > 0 ? `
                    <button type="button" id="gius-att-toggle-absent" class="gius-att-toggle gius-btn">Absent days (${st.absentDays})</button>
                    <div id="gius-att-absent" class="gius-att-expand">
                        <div class="gius-att-expand-inner">
                            <div class="gius-att-absent-list">
                                ${(st.absentDayDetails || []).map(function (d) {
                                    const date = homeEsc(d);
                                    return `<div class="gius-att-absent-row">
                                        <span class="gius-att-absent-date">${homeFmtDate(d)}</span>
                                        <span class="gius-att-actions">
                                            <button type="button" class="gius-att-action gius-btn" data-date="${date}" data-gius-home-absent-action="holiday">Holiday</button>
                                            <button type="button" class="gius-att-action gius-btn" data-date="${date}" data-gius-home-absent-action="annual">Annual</button>
                                            <button type="button" class="gius-att-action gius-btn" data-date="${date}" data-gius-home-absent-action="compensation">Comp</button>
                                        </span>
                                    </div>`;
                                }).join("")}
                            </div>
                        </div>
                    </div>` : "";
                const leaveBy = plannerTodayLeaveBy(homeLastRows);

                host.innerHTML = `
                    <div class="gius-att-head">This Payroll Month${opts.stale ? ' · <span class="gius-att-stale">offline</span>' : ""}
                        <button type="button" class="gius-att-refresh gius-btn" title="Refresh now"${homeFetchInFlight ? " disabled" : ""}>⟳</button></div>
                    <div class="gius-att-card">
                        <div class="gius-att-status">Current balance
                            <span class="gius-att-balance ${tierClass}">${homeEsc(homeBalanceText(st))}</span></div>
                        <div class="gius-att-bar"><div class="gius-att-bar-fill ${barClass}" style="width:${barWidth}%"></div></div>
                        <div class="gius-att-meta">${pctRaw}% covered &middot; Present ${st.presentDays} &middot; Absent ${st.absentDays} &middot; ${homeEsc(summary.label || "")}</div>
                        <div class="gius-att-tierwrap"><button type="button" class="gius-att-tier gius-att-tier-btn ${tierClass} gius-btn${tierHintSeen ? " gius-att-tier-seen" : ""}" id="gius-att-tier-btn" title="See all tiers">${tierName}</button></div>
                        <div class="gius-att-quip">${homeEsc(tierQuip)}</div>
                        ${leaveBy ? `<div class="gius-att-plan"><span>Leave today by</span><b>${homeEsc(leaveBy)}</b></div>` : ""}
                    </div>
                    ${absentBlock}
                    <a class="gius-att-link" href="${REPORT_VIEW_URL}">View full report →</a>`;

                const dayOffNote = buildDayOffPromptForHome();
                if (dayOffNote) {
                    const head = host.querySelector(".gius-att-head");
                    if (head && head.nextSibling) head.parentNode.insertBefore(dayOffNote, head.nextSibling);
                    else host.insertBefore(dayOffNote, host.firstChild);
                }
                // Grey the (wrong) numbers whenever the day off is unset — live check, so the
                // greying tracks set/remove immediately regardless of the cached summary flag.
                if (!isDayOffConfigured()) {
                    const card = host.querySelector(".gius-att-card");
                    if (card) card.classList.add("gius-att-muted");
                }

                const toggle = host.querySelector("#gius-att-toggle-absent");
                if (toggle) {
                    toggle.addEventListener("click", function () {
                        const el = host.querySelector("#gius-att-absent");
                        const open = el.classList.toggle("gius-att-expanded");
                        toggle.classList.toggle("gius-att-toggle-open", open);
                    });
                }
                const tierBtn = host.querySelector("#gius-att-tier-btn");
                if (tierBtn) {
                    tierBtn.addEventListener("click", function () {
                        try { localStorage.setItem("giuAttTierHintSeen", "1"); } catch {}
                        tierBtn.classList.add("gius-att-tier-seen");
                        homeOpenTierModal(tier, TIER_NAMES, TIER_CONDS, TIER_ORDER);
                    });
                }
                const refreshBtn = host.querySelector(".gius-att-refresh");
                if (refreshBtn) {
                    refreshBtn.addEventListener("click", function () {
                        if (homeFetchInFlight) return;
                        homeFetchInFlight = true;
                        refreshBtn.disabled = true;
                        fetchReportRows({ force: true }).then(function (rows) {
                            homeFetchInFlight = false;
                            homeRenderFromRows(rows);
                        }).catch(function (err) {
                            if (isSupersededFetch(err)) return;
                            homeFetchInFlight = false;
                            refreshBtn.disabled = false;
                            if (SOURCE) homeShowInlineError(err);
                        });
                    });
                }
                homeAttachAbsentActions(host);
                Tips.show({ id: 'staffAttendance', el: host, title: 'Attendance — This Payroll Month',
                    text: 'Your live attendance balance for the current payroll month. Expand absent days to file holiday, annual or compensation requests, or open the full report below.' });
            }

            // Tier legend popup: lists every tier with its colour + condition, current one flagged.
            function homeOpenTierModal(currentTier, names, conds, order) {
                const existing = document.getElementById("gius-att-modal");
                if (existing) existing.remove();
                const modal = document.createElement("div");
                modal.id = "gius-att-modal";
                modal.className = "gius-att-modal";
                const userLabel = homeEsc(homeGetUserFirstName() || "YOU");
                const rows = order.map(function (t) {
                    const cur = t === currentTier;
                    return `<div class="gius-att-trow${cur ? " cur" : ""}">
                        <span class="gius-att-dot gius-att-dot-${t}"></span>
                        <div class="gius-att-trow-main">
                            <div class="gius-att-trow-name"><span class="gius-att-tier gius-att-tier-${t}">${names[t]}</span>${cur ? `<span class="gius-att-trow-cur">${userLabel}</span>` : ""}</div>
                            <div class="gius-att-trow-cond">${homeEsc(conds[t])}</div>
                        </div></div>`;
                }).join("");
                modal.innerHTML = `<div class="gius-att-sheet" role="dialog" aria-modal="true">
                    <div class="gius-att-sheet-head">
                        <div class="gius-att-sheet-title">Attendance tiers</div>
                        <button type="button" class="gius-att-x gius-btn" aria-label="Close">&times;</button>
                    </div>
                    ${rows}</div>`;
                document.body.appendChild(modal);
                requestAnimationFrame(function () { modal.classList.add("open"); });
                const onKey = function (e) { if (e.key === "Escape") close(); };
                function close() {
                    modal.classList.remove("open");
                    document.removeEventListener("keydown", onKey);
                    setTimeout(function () { try { modal.remove(); } catch {} }, 160);
                }
                modal.querySelector(".gius-att-x").addEventListener("click", close);
                modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
                document.addEventListener("keydown", onKey);
            }

            function homeShowError(host, err) {
                if (SOURCE) { SOURCE.renderError(host, err, homeRetry); return; }
                host.innerHTML = `<div class="gius-att-head">Attendance</div>
                    <div class="gius-att-empty">Couldn't load attendance. <button type="button" id="gius-att-retry" class="gius-att-toggle gius-btn">Retry</button></div>`;
                const r = host.querySelector("#gius-att-retry");
                if (r) r.addEventListener("click", bootHome);
            }

            function homeShowLoading(host) {
                host.innerHTML = `<div class="gius-att-head">This Payroll Month</div>
                    <div class="gius-att-empty">Loading attendance…</div>`;
            }

            // On Berlin, SOURCE supplies the report cross-origin from Cairo
            // (src/berlin/); on Cairo the hidden same-origin iframe does.
            // Berlin only: opts.force (a user's Retry, see homeRetry) skips the
            // fresh-cache early return and the paint delay, and asks the source
            // to bypass its memo. Never set on Cairo, where bootHome is also a
            // click listener and receives an Event.
            function bootHome(opts) {
                if (!isHomePage()) return;
                const force = !!(SOURCE && opts && opts.force === true);
                homeInjectStyles();
                maybeAutoOpenSetup();

                const cache = loadHomeCache();
                const fresh = !!(cache && cache.fetchedAt &&
                    (Date.now() - cache.fetchedAt) < HOME_REFRESH_TTL_MS);
                if (cache) {
                    // Recompute from the cached rows so settings changed on the report page
                    // (compensation, overrides, holidays, day-off, ramadan, exam) reflect
                    // immediately — the stored summary alone goes stale against localStorage
                    // even when the rows are current. Falls back to the summary for old caches.
                    const summary = Array.isArray(cache.rows)
                        ? computeCurrentMonthSummary(cache.rows)
                        : cache.summary;
                    renderHomeWidget(summary, { stale: !fresh });
                } else {
                    homeShowLoading(homeEnsureHost()); // no cache → show a spinner, not a blank card
                }
                if (fresh && !force) return; // gate rows recent enough — skip the report iframe entirely

                const refresh = function () {
                    if (homeFetchInFlight) return;
                    homeFetchInFlight = true;
                    fetchReportRows(force ? { force: true } : undefined).then(function (rows) {
                        homeFetchInFlight = false;
                        homeRenderFromRows(rows);
                    }).catch(function (err) {
                        if (isSupersededFetch(err)) return;
                        homeFetchInFlight = false;
                        if (cache && !SOURCE) return; // keep the stale render
                        if (cache) { homeShowInlineError(err); return; }
                        homeShowError(homeEnsureHost(), err);
                    });
                };
                // With a cached render on screen, let Home finish loading before
                // spawning the hidden report iframe (it executes the full report).
                if (cache && !force) setTimeout(refresh, HOME_REFRESH_DELAY_MS);
                else refresh();
            }

            // Berlin only: the widget's Retry. Every click is exactly one attempt,
            // even when the cache is fresh (e.g. after a failed refresh button).
            function homeRetry() {
                bootHome({ force: true });
            }

            // Berlin only (handed to SOURCE.start): recompute the widget from the
            // rows it already holds, so settings edited in the report view show on
            // Home at once. Never fetches.
            function homeRerender() {
                if (!isHomePage()) return;
                const cache = loadHomeCache();
                const rows = cache && Array.isArray(cache.rows) ? cache.rows : homeLastRows;
                if (!rows.length) return; // nothing rendered from rows yet (loading, error, chooser)
                const fresh = !!(cache && cache.fetchedAt &&
                    (Date.now() - cache.fetchedAt) < HOME_REFRESH_TTL_MS);
                // A failure still current keeps the widget marked stale, with its notice on top.
                renderHomeWidget(computeCurrentMonthSummary(rows), { stale: !fresh || !!homeLastError });
                if (homeLastError) SOURCE.renderError(homeEnsureHost(), homeLastError, homeRetry, { inline: true });
            }

            // Berlin only (handed to SOURCE.start): a report the view loaded also
            // refreshes the widget and its cache. Never fetches.
            function homeRenderFromDoc(doc) {
                if (!isHomePage()) return;
                homeRenderFromRows(getAttendanceRows(doc));
            }

            // Berlin only (handed to SOURCE.start): the layout error for a report
            // document whose grid lacks the Day/Duration columns, else null.
            function reportDocLayoutError(doc) {
                const table = doc.getElementById("MainContent_DG_SwiftReport");
                if (!table || getAttendanceRows(doc).length) return null;
                if (detectAttendanceColumnIndexes(Array.from(table.rows || []))) return null;
                return SOURCE.error("layout", { missing: ["Day", "Duration"] });
            }

            // Berlin only (handed to SOURCE.start): tear down what the report UI
            // put on <body> (onboarding tour, inline edit modals) when the view
            // closes. The tour is stopped, not completed, so it can run again.
            function closeReportOverlays() {
                if (onboardingController && onboardingController.isActive()) {
                    onboardingController.stop(false);
                }
                document.querySelectorAll(".giu-inline-modal-layer").forEach(function (el) {
                    el.remove();
                });
            }

            window.__giuAttHome = {
                isHomePage,
                bootHome,
                homeRefreshAfterQuickAction,
                getAttendanceRows,
                computeCurrentMonthSummary,
                fetchReportViaIframe,
                loadHomeCache,
                saveHomeCache,
                renderHomeWidget,
                setHomeRowsForTest: function (rows) { homeLastRows = Array.isArray(rows) ? rows : []; },
                isDayOffConfigured,
                groupRowsByPayrollPeriod,
                openSetup,
                // Setup wizard test hooks.
                setupApi,
                needsSetup,
                openSetupWizard,
                isSetupOpen: function () { return !!setupWizard; },
                renderEnhancedUI,
                getStoredAnnualLeaveBalance,
                setStoredAnnualLeaveBalance,
                getStoredAnnualLeaveAccrualRate,
                setStoredAnnualLeaveAccrualRate,
                applyMonthlyAnnualLeaveAccrual,
                // Planner test hooks.
                buildPlannerInput,
                createPlannerApi,
                plannerTodayLeaveBy,
            };

            try {
                window.__giuBranch = {
                    get: getBranch,
                    fixedOffDay: () => branchConfig().fixedOffDay,
                    reportOrigin: () => REPORT_ORIGIN,
                    exportSnapshot: exportSettingsSnapshot,
                    importSnapshot: importSettingsSnapshot,
                    dayOffWeekdays: dayOffWeekdays,
                    dayOffFullName: getSelectedDayOffFullName,
                    dayOffSchedule: getStoredDayOffSchedule,
                    isFixedNonWorking: isFixedNonWorkingDay,
                    getStart: getBranchStart,
                    setStart: setBranchStart,
                    branchFor: getBranchFor,
                    fixedOffDayFor: fixedOffDayFor,
                    // Builds the compensation ledger for the payroll period containing
                    // `todayYmd`, from parsed attendance rows — the ledger is what the
                    // Compensations table and the usable balance are derived from, so
                    // it needs to be reachable to test that a worked weekend earns.
                    compLedger: function (rows, todayYmd) {
                        const key = getPayrollPeriodKey(todayYmd);
                        const bounds = getPayrollPeriodBounds(key);
                        const inPeriod = (rows || []).filter(function (r) {
                            const d = normalizeYMD(r && r.date ? r.date : "");
                            return d && d >= bounds.start && d <= bounds.end;
                        });
                        const leaves = getStoredCompensationLeaves().filter(function (leave) {
                            const d = normalizeYMD(leave && leave.date ? leave.date : "");
                            return d && getPayrollPeriodKey(d) === key;
                        });
                        return buildCompensationLedgerForPeriod(
                            inPeriod, bounds.start, bounds.end,
                            getStoredHolidays(), getStoredRamadan(), getStoredOverrides(),
                            getStoredExamPeriod(), leaves
                        );
                    },
                    compWeek: getCompensationWeekBounds,
                };
            } catch { /* ignore */ }

            try {
                // window.__giuAttDisableAutoRun lets tests inject the script and drive
                // functions manually without the page-detection auto-run firing.
                if (!window.__giuAttDisableAutoRun) {
                    if (SOURCE) {
                        SOURCE.start({
                            renderEnhancedUI,
                            bootHome,
                            resetHome: homeReset,
                            rerenderHome: homeRerender,
                            renderHomeFromDoc: homeRenderFromDoc,
                            checkReportDoc: reportDocLayoutError,
                            closeOverlays: closeReportOverlays,
                        });
                    } else {
                        renderEnhancedUI();
                        bootHome();
                    }
                }
            } catch (err) {
                console.log("Enhanced attendance script error:", err.message);
            }
        }

    // Tips is the bundle's first-run tooltip system; this script ships without it.
    const Tips = { show() {} };
    staffAttendance(S);
})();
