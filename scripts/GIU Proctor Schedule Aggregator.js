// ==UserScript==
// @name        GIU Proctor Schedule Aggregator
// @description Aggregates all proctor exam assignments across departments into a live dashboard
// @match       https://portal.giu-uni.de/GIUb/INTStaff/ProctorExchange_m.aspx
// @namespace   ramin0
// @version     1.0
// @author      Mo.Elmaadawy
// @icon        data:image/png;base64,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
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    const CACHE_KEY      = 'giuProctorScheduleV1';
    const MAX_CONCURRENT = 5;
    const PAGE_URL       = 'https://portal.giu-uni.de/GIUb/INTStaff/ProctorExchange_m.aspx';

    // ── Cache ─────────────────────────────────────────────────────────────────

    function loadCache() {
        try { return JSON.parse(localStorage.getItem(CACHE_KEY)); }
        catch { return null; }
    }

    function saveCache(rows) {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ rows, scrapedAt: new Date().toISOString() }));
    }

    function clearCache() {
        localStorage.removeItem(CACHE_KEY);
    }

    function formatCacheAge(isoStr) {
        const diff = Date.now() - new Date(isoStr).getTime();
        const days = Math.floor(diff / 86400000);
        if (days === 0) return 'today';
        if (days === 1) return '1 day ago';
        return `${days} days ago`;
    }

    // ── ASP.NET helpers ───────────────────────────────────────────────────────

    function extractFormState(doc) {
        const get = id => (doc.getElementById(id) || {}).value || '';
        return {
            __VIEWSTATE:            get('__VIEWSTATE'),
            __VIEWSTATEGENERATOR:   get('__VIEWSTATEGENERATOR'),
            __EVENTVALIDATION:      get('__EVENTVALIDATION'),
        };
    }

    async function doPostback(eventTarget, extraFields, baseState) {
        const state = baseState || extractFormState(document);
        const body = new URLSearchParams({
            __EVENTTARGET:          eventTarget,
            __EVENTARGUMENT:        '',
            __LASTFOCUS:            '',
            __VIEWSTATE:            state.__VIEWSTATE,
            __VIEWSTATEGENERATOR:   state.__VIEWSTATEGENERATOR,
            __EVENTVALIDATION:      state.__EVENTVALIDATION,
            ...extraFields,
        });
        const resp = await fetch(PAGE_URL, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: body.toString(),
        });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const html = await resp.text();
        if (html.includes('Login_m.aspx') || html.includes('id="LoginPage"')) {
            throw new Error('SESSION_EXPIRED');
        }
        return new DOMParser().parseFromString(html, 'text/html');
    }

    // ── Parsers ───────────────────────────────────────────────────────────────

    function parseExamString(raw) {
        // "Mar 28 2026  1:30PM ---> GIU-Cairo.Informatics 4th - MATH403 Mathematics IV"
        const parts = raw.split(' ---> ');
        if (parts.length < 2) return { courseCode: '', examName: raw.trim() };
        const right = parts[1].trim();
        const segs = right.split(' - ');
        if (segs.length >= 3) {
            const codeAndName = segs.slice(-2);
            const codePart    = codeAndName[0].trim().split(/\s+/);
            const courseCode  = codePart[codePart.length - 1];
            const examName    = codeAndName[1].trim();
            return { courseCode, examName };
        }
        return { courseCode: '', examName: right };
    }

    function formatTime(str) {
        // "3/28/2026 1:30:00 PM" → "1:30 PM"
        const d = new Date(str);
        if (isNaN(d.getTime())) return str;
        return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    }

    function formatDate(str) {
        // "3/28/2026 1:30:00 PM" → "Sat Mar 28"
        const d = new Date(str);
        if (isNaN(d.getTime())) return str;
        return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    }

    function parseDateKey(str) {
        // "3/28/2026 1:30:00 PM" → "2026-03-28" for sorting
        const d = new Date(str);
        if (isNaN(d.getTime())) return str;
        return d.toISOString().slice(0, 10);
    }

    // ── Concurrency pool ──────────────────────────────────────────────────────

    function runPool(tasks, worker, onTaskDone) {
        return new Promise(resolve => {
            if (!tasks.length) { resolve([]); return; }
            let running = 0, index = 0;
            const results = new Array(tasks.length);

            function next() {
                while (running < MAX_CONCURRENT && index < tasks.length) {
                    const i = index++;
                    running++;
                    worker(tasks[i], i)
                        .then(r  => { results[i] = r; })
                        .catch(() => { results[i] = null; })
                        .finally(() => {
                            running--;
                            if (onTaskDone) onTaskDone();
                            if (index < tasks.length) next();
                            else if (running === 0) resolve(results);
                        });
                }
            }
            next();
        });
    }

    // ── Scrape: Phase 1 — departments ─────────────────────────────────────────

    async function fetchDepartment(dept, baseState) {
        const doc = await doPostback(
            'ctl00$MainContent$acdmcDpLst',
            { 'ctl00$MainContent$acdmcDpLst': dept.value },
            baseState
        );
        const deptState = extractFormState(doc);
        const table = doc.getElementById('MainContent_dprtmntDg');
        if (!table) return [];
        return Array.from(table.querySelectorAll('a')).map(a => {
            const href  = a.getAttribute('href') || '';
            const match = href.match(/__doPostBack\('([^']+)'/);
            return match ? { name: a.textContent.trim(), target: match[1], deptLabel: dept.label, state: deptState } : null;
        }).filter(Boolean);
    }

    // ── Scrape: Phase 2 — proctor schedules ───────────────────────────────────

    async function fetchProctorSchedule(proctor) {
        const doc = await doPostback(proctor.target, {}, proctor.state);
        const table = doc.getElementById('MainContent_schdlDg');
        if (!table) return [];
        const rows = [];
        Array.from(table.querySelectorAll('tr')).forEach((tr, i) => {
            if (i === 0) return; // skip header
            const tds = tr.querySelectorAll('td');
            if (tds.length < 5) return;
            const examRaw   = tds[0].textContent.trim();
            const hall      = tds[1].textContent.trim();
            const startRaw  = tds[2].textContent.trim();
            const endRaw    = tds[3].textContent.trim();
            const coverName = tds[4].textContent.replace(/ /g, '').trim();
            const { courseCode, examName } = parseExamString(examRaw);
            rows.push({
                proctor:    proctor.name,
                department: proctor.deptLabel,
                examName,
                courseCode,
                hall,
                dateKey:    parseDateKey(startRaw),
                date:       formatDate(startRaw),
                startTime:  formatTime(startRaw),
                endTime:    formatTime(endRaw),
                coverName,
            });
        });
        return rows;
    }

    // ── Scrape orchestrator ───────────────────────────────────────────────────

    async function scrapeAll(cb) {
        // cb: { onProgress(stats), onRows(rows), onError(type), onComplete(rows) }
        const baseState = extractFormState(document);
        const deptEl    = document.getElementById('MainContent_acdmcDpLst');
        const depts     = Array.from(deptEl.options)
            .filter(o => o.value !== '')
            .map(o => ({ value: o.value, label: o.text.trim() }));

        const stats = { depts: 0, totalDepts: depts.length, proctors: 0, exams: 0, failed: 0,
                        proctorsDone: 0, totalProctors: 0 };
        const allProctors = [];
        const allRows     = [];

        // Phase 1 — departments
        await runPool(depts, async dept => {
            try {
                const proctors = await fetchDepartment(dept, baseState);
                allProctors.push(...proctors);
                stats.depts++;
                stats.proctors = allProctors.length;
            } catch (e) {
                if (e.message === 'SESSION_EXPIRED') { cb.onError('SESSION_EXPIRED'); throw e; }
                stats.failed++;
            }
            cb.onProgress({ ...stats });
        }, null);

        stats.totalProctors = allProctors.length;

        // Phase 2 — proctor schedules
        await runPool(allProctors, async proctor => {
            try {
                const rows = await fetchProctorSchedule(proctor);
                allRows.push(...rows);
                stats.exams += rows.length;
            } catch (e) {
                if (e.message === 'SESSION_EXPIRED') { cb.onError('SESSION_EXPIRED'); throw e; }
                stats.failed++;
            }
            stats.proctorsDone++;
            cb.onProgress({ ...stats });
            cb.onRows([...allRows]);
        }, null);

        saveCache(allRows);
        cb.onComplete(allRows);
    }

    // ── Styles ────────────────────────────────────────────────────────────────

    function injectStyles() {
        if (document.getElementById('gius-proctor-styles')) return;
        const s = document.createElement('style');
        s.id = 'gius-proctor-styles';
        s.textContent = `
            @keyframes giusSlideDown {
                from { opacity: 0; transform: translateY(-14px); }
                to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes giusRowIn {
                from { opacity: 0; transform: translateX(-8px); }
                to   { opacity: 1; transform: translateX(0); }
            }
            @keyframes giusSpin {
                to { transform: rotate(360deg); }
            }

            .gius-proctor-card {
                background: #fff;
                border: 1px solid #eeeeee;
                border-radius: 6px;
                box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
                margin-bottom: 20px;
                margin-top: 10px;
                animation: giusSlideDown 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
                font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                overflow: hidden;
                position: relative;
            }
            .gius-proctor-card::before {
                content: "";
                position: absolute; top: 0; left: 0;
                width: 100%; height: 3px;
                background: #ffc107;
            }
            .gius-proctor-hdr {
                background: #272c33;
                color: #fff;
                padding: 10px 14px;
                border-bottom: 2px solid #ffc107;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                flex-wrap: wrap;
            }
            .gius-proctor-hdr-left {
                display: flex; align-items: center; gap: 10px;
            }
            .gius-proctor-title {
                margin: 0;
                font-size: 14px; font-weight: 700; color: #fff;
                display: flex; align-items: center; gap: 8px;
            }
            .gius-proctor-meta {
                font-size: 12px; color: rgba(255,255,255,0.65);
                margin-top: 2px;
            }
            .gius-proctor-hdr-btns {
                display: flex; gap: 6px; align-items: center;
            }
            .gius-proctor-body {
                padding: 14px 16px;
            }
            .gius-proctor-body.collapsed { display: none; }

            .gius-btn {
                height: 32px; padding: 0 14px; border-radius: 6px;
                font-size: 13px; font-weight: 700; cursor: pointer;
                border: 1px solid transparent;
                transition: all 0.2s ease;
                display: inline-flex; align-items: center; gap: 5px;
                white-space: nowrap;
                font-family: 'Open Sans', Arial, sans-serif;
            }
            .gius-btn:disabled { opacity: 0.5; cursor: not-allowed; }
            .gius-btn-primary  { background: #1B59C6; border-color: #1648a8; color: #fff; }
            .gius-btn-primary:not(:disabled):hover  { background: #1648a8; }
            .gius-btn-outline  { background: #fff; border-color: #d1d5db; color: #374151; }
            .gius-btn-outline:not(:disabled):hover  { background: #f9fafb; }
            .gius-btn-muted    { background: #f9fafb; border-color: #d1d5db; color: #374151; }
            .gius-btn-muted:not(:disabled):hover    { background: #e5e7eb; }
            .gius-btn-sm { height: 26px; padding: 0 10px; font-size: 12px; }

            .gius-progress-wrap {
                background: #e5e7eb; border-radius: 999px; height: 8px; overflow: hidden; margin-bottom: 6px;
            }
            .gius-progress-bar {
                height: 100%; border-radius: 999px; background: #1B59C6;
                transition: width 0.45s ease;
            }
            .gius-progress-label { font-size: 12px; color: #6b7280; margin-bottom: 12px; }

            .gius-filter-bar {
                display: flex; flex-wrap: wrap; gap: 8px; align-items: center;
                margin-bottom: 10px;
            }
            .gius-filter-select, .gius-filter-input {
                height: 32px; padding: 4px 8px; font-size: 13px;
                border: 1px solid #9ca3af; border-radius: 6px;
                color: #111827; background: #fff;
                font-family: 'Open Sans', sans-serif;
                cursor: pointer;
                transition: border-color 0.2s ease;
            }
            .gius-filter-input { min-width: 180px; }
            .gius-filter-select:focus, .gius-filter-input:focus {
                outline: 2px solid #60a5fa; outline-offset: 1px; border-color: #1B59C6;
            }

            .gius-chip-row {
                display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-bottom: 10px;
            }
            .gius-chip {
                display: inline-flex; align-items: center; gap: 4px;
                background: #dbeafe; color: #1e40af;
                border: 1px solid #bfdbfe; border-radius: 999px;
                padding: 2px 10px; font-size: 12px; font-weight: 600;
                font-family: 'Open Sans', sans-serif;
            }
            .gius-chip-x {
                cursor: pointer; font-size: 13px; line-height: 1;
                margin-left: 2px; opacity: 0.7;
            }
            .gius-chip-x:hover { opacity: 1; }

            .gius-proctor-table-wrap {
                overflow-x: auto; border-radius: 4px; border: 1px solid #e5e7eb;
            }
            .gius-proctor-table {
                width: 100%; border-collapse: collapse;
                font-size: 13px; font-family: 'Open Sans', sans-serif;
            }
            .gius-proctor-table thead th {
                background: #272c33; color: #fff;
                padding: 8px 10px; text-align: left; white-space: nowrap;
                font-size: 12px; font-weight: 700; letter-spacing: 0.4px;
                cursor: pointer; user-select: none;
                position: sticky; top: 0; z-index: 2;
            }
            .gius-proctor-table thead th:hover { background: #363d47; }
            .gius-sort-icon { margin-left: 4px; opacity: 0.5; }
            .gius-sort-icon.active { opacity: 1; }
            .gius-proctor-table tbody tr { border-bottom: 1px solid #f3f4f6; }
            .gius-proctor-table tbody tr:nth-child(even) { background: #f9fafb; }
            .gius-proctor-table tbody tr:hover { background: #eff6ff; }
            .gius-proctor-table td {
                padding: 7px 10px; color: #374151; vertical-align: middle;
            }
            .gius-proctor-table td.muted { color: #9ca3af; font-style: italic; }
            .gius-row-in { animation: giusRowIn 0.25s ease both; }

            .gius-table-footer {
                font-size: 12px; color: #6b7280; margin-top: 8px; text-align: right;
            }

            .gius-spinner {
                display: inline-block; width: 13px; height: 13px;
                border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff;
                border-radius: 50%; animation: giusSpin 0.7s linear infinite;
                vertical-align: middle;
            }

            .gius-warn-pill {
                display: inline-flex; align-items: center; gap: 5px;
                background: #fef3c7; color: #92400e; border: 1px solid #fde68a;
                border-radius: 999px; padding: 2px 12px; font-size: 12px; font-weight: 600;
            }

            /* ── Dark mode overrides ── */
            html.gius-dark .gius-proctor-card {
                background: #181825 !important; border-color: transparent !important;
            }
            html.gius-dark .gius-proctor-body { color: #cdd6f4 !important; }
            html.gius-dark .gius-proctor-table tbody tr { border-color: #313244 !important; }
            html.gius-dark .gius-proctor-table tbody tr:nth-child(even) { background: #181825 !important; }
            html.gius-dark .gius-proctor-table tbody tr:hover { background: #1e3a6e !important; }
            html.gius-dark .gius-proctor-table td { color: #cdd6f4 !important; }
            html.gius-dark .gius-proctor-table td.muted { color: #585b70 !important; }
            html.gius-dark .gius-progress-wrap { background: #313244 !important; }
            html.gius-dark .gius-progress-label { color: #a6adc8 !important; }
            html.gius-dark .gius-filter-select, html.gius-dark .gius-filter-input {
                background: #313244 !important; color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .gius-btn-outline {
                background: #313244 !important; border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .gius-btn-muted {
                background: #313244 !important; border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .gius-table-footer { color: #a6adc8 !important; }
            html.gius-dark .gius-proctor-table-wrap { border-color: #45475a !important; }
            html.gius-dark .gius-chip {
                background: #1a2a4a !important; color: #89b4fa !important;
                border-color: #1e3a6e !important;
            }
            html.gius-dark .gius-warn-pill {
                background: #2d1f00 !important; color: #fbbf24 !important;
                border-color: #78350f !important;
            }
        `;
        document.head.appendChild(s);
    }

})();
