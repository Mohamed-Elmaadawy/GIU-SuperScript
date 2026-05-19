// ==UserScript==
// @name        GIU Proctor Schedule Aggregator
// @description Aggregates all proctor exam assignments across departments into a live dashboard
// @match       https://portal.giu-uni.de/GIUb/INTStaff/ProctorExchange_m.aspx
// @namespace   ramin0
// @version     1.1
// @author      Mo.Elmaadawy
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAzFBMVEX////VlyYkHiAAAADTHyj36ereiIr8/vzIGSPPAAj//fziu4HTlRbnyp3x49HRHSTTkgzw8PD29vbl5eXV1NRjX2HWY2vUr2zMAADn1rfJjguzsrMfGRsaEBPltLX6+u/OmB67u7vIyMgyLC5sbGycnJypqKmLi4tYWFh9e3wWExXkoJ1HRUaUkpM3NjY+Pj4PAAe/AADIDxPYGiAnJicZGhn27df17eDXqE329uBVYF7AZ2jZjGvOWgTNlSzf0J7lw7PWozvqxcLZsl8WTjZKAAAHBElEQVR4nO2Ya3fbNhJAIWG92tJ2YwzApg6kTQDhQagkpXZlR/t03fz//7QDgo71jqQ0Pf2Ae45tipKlq8FgMAAhmUwmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMpnMqRTAENi4dXUV710xvB6979n+v3R39IcoMmGrdkyR2bgtLX/Rvfr5uzdvfvnlx7/i9fc3g8EAf27IltNtfOLuetR9A22CEWB84Cp4C2A5IbzBj3B4IRU+kEAuhCk/pXQyHibGE0rnIb4viv7tH39BkujdoONm+/9v75Jo9HcPgghFqONga/4gWWsJ8TUQTtHWU0W4v1RUVRMaJWcxoJNedkFtEn0TRb9bF73bEe0jWmC46qa7haLEVrBUfEoJr+YcP2WJomYmuL1MlFVJbjEtJee6XPaqi4OiuxF9FRVLjbacUBO4m7YOR712Tg8FKeNTnmFMXXGJp17SLoKzININYbrwDieHRG8+HMrRl4gGU8zQ15Z4oZSjllGhjawMCQAhDdW5qOWs86SvGQ6OdjQHRO+OiRJJFZhAqJe8aTl1FvNVEyorRjQV+Ju1/oKIihS9h5lYv8udRfRFooQ5dMRAKs4F4YIzgrNS8PgBmgkMB+Pne7I2xfNBHnrF+aLfgsLP0rwJB19ytqjWRMewCe20VFxJCUpiCYghBQwoaMIkJi4XcdY1Dd4W3VMkPkVA7ot3P/Dj4eF6cbaoMaSssGp6IanVikpVzLx6EAozlXmGOcyYMrXi+ELXclYHYpeYI6HAv5gmVO+xMIsuoGna/F6igYSpAVyLGJYjTVlB5g5w1s9bgaLQzHDSNwZLQ+APOgZLyHbOuSfgxxJFxa4Eo31tP5Ldl4h6MfOsFx0bA3VVKaKUWXIHQjqMd2MARTXFDwaKGVJVwhKlfdgvammfoUdWinPraBdRDFNwhA1jRPG9a7NUxOmifPBgjccSm0RFlEIzJ2CONcuHMBZ7Rcu0BtGDU36/6OALOTrCcVXUdemmqOBkaO0Dx2rH2pKVMKpC4UsojCnwS2HNLTym6NLwAKxuOFWcbTmweZpK433pe0z03fFZX2CHRJQgDNc6ERoPXkHQKk5vKTAo2oO0UDiMeeODxfmFGaAldjJEeWYavx1T0SbR+Z5gHxU91pR8C3TfJ1XHVor9ET0iyuMEwbKJ14wVHNJjJgReClGQQmsADgLXLR4H+YRlSiXRSbWdE18lGnDxEJ7ULnbJfMktvj1W/dpbUXmsnd41WtTChtrLUMaXfhE53iPK14BLRE0SbXGKSo1zOE6phruqIHyKVZ+3MVeXHLs2IHqmw7EoHREFM5x+RnyFaOmoUIIvcFNimCWytY63NjRQzhwTU+yjUZSYpfuyJ1Hj3RwFsxj3TBZfI1oRPw1RFNdMjcGtMSPn1Ri7vIa6z6JiX9XcQUzTrG/XXgym7+9jqHdEb06Y9aHGfZMj+NvQrnyzOW6YbM2At6oMOM8aG4deTYDsX4d26OvocL2OromOd0QfP4seqaPcBNsAMfG9BIulz+Pi7qrG8UrrWnvrucBB1HWMaH2KKKn6lWktT/qh3y/6cdDvmbY39ht1FAsSfo+Y9wBdlcI/8SYrGBSMxZoE2KlA9wp+0j5P0n42vb4awjyy3Cv6fpVCevfPrcp+ZsHHbfUo/Yy2x2Y/kESH64nS1SVRzfaJjq779ul+642+eYfv+/ap3LrP9ouS+37obw+LinKTf/37h03+83aT61O+Hav7LFWnib6M/erjQVFNt/j5x03+++HdBv876cxKpz3TpN5ccQ+Jkqe+I306KMrlFn/f4tf7LU47W+t751m9MfsOio6eb1Lr/HhI9CgX7JNfTYfd6NOhXlM9KEoen/uJ/7ReotZEQaUFOXW/sV/APeYI9/JYqsBz3NMzBd2k5xCnvThZXqUjnck4vNT9QtjYqe6N6Oh+kExvPt2/qI4+vh28RlSlL6yxo+O4UeYkbouJULxQTCmNs6E/k0nf6IyDKF52B47jybIKVsrG1G1X8cc7a338EuT7d32e3qze3t7fP12/XT0PXkV5atuAKx+PRyQHpwng1o4RAdxy3OVJZR0BJwFko/Q5h6UitAuKgz1ZdOeOqDmjdNF2zcqWKPL+enDXR/UuEk928erD81M8HxWNwxnkvONGWy8FY9ZK65RyMgSwTBN85J1srHLOSaf0WWeQQob5ek2ZGytF9w5XfXn5LDoixeP1qjfsFPFqdX17/9inQjxJF9jKYdQgralMq4LExZOnhMQWKh5oxzvnn5QCw3GyTdNYiW3k6zk+/JT47VU0HuY/3l9/Wq2eV6tPOP6PH7drIfZIsOYAB7rj4uIz8iNs5vzo4IM/HX9uu0wmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMplMJpPJHOP/Lb7en38r1wIAAAAASUVORK5CYII=
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
        const scraped  = new Date(isoStr);
        const today    = new Date();
        const scrapedD = new Date(scraped.getFullYear(), scraped.getMonth(), scraped.getDate());
        const todayD   = new Date(today.getFullYear(),   today.getMonth(),   today.getDate());
        const days     = Math.round((todayD - scrapedD) / 86400000);
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
        // Campus prefix may use "." or "-" as separator (e.g. GIU-Cairo.Dept or GIU-Cairo-Dept)
        const stripCampus = s => s.replace(/^GIU-[^.-]*[.-]/, '').trim();
        // Course codes: 2-8 uppercase letters followed by 3-4 digits, optional trailing letter
        const COURSE_CODE = /^[A-Z]{2,8}\d{3,4}[A-Z]?$/;

        const parts = raw.split(' ---> ');
        if (parts.length < 2) return { courseCode: '', examName: raw.trim(), program: '' };

        const right = parts[1].trim();
        const segs  = right.split(' - ');
        const program = stripCampus(segs[0]);

        if (segs.length === 1) {
            // No " - " separator — try to find course code inside the segment
            const words   = program.split(/\s+/);
            const codeIdx = words.findIndex(w => COURSE_CODE.test(w));
            if (codeIdx !== -1) {
                return {
                    program:    words.slice(0, codeIdx).join(' '),
                    courseCode: words[codeIdx],
                    examName:   words.slice(codeIdx + 1).join(' '),
                };
            }
            return { courseCode: '', examName: right, program: '' };
        }

        // Join remaining segs (handles exam names that contain " - ")
        const rest    = segs.slice(1).join(' ').trim();
        const words   = rest.split(/\s+/);
        const codeIdx = words.findIndex(w => COURSE_CODE.test(w));

        if (codeIdx !== -1) {
            return {
                program,
                courseCode: words[codeIdx],
                examName:   words.slice(codeIdx + 1).join(' ').replace(/^[-\s]+/, '').trim(),
            };
        }
        return { courseCode: '', program, examName: rest };
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
                if (_paused) return;
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
            _resumeFn = next;
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
            const { courseCode, examName, program } = parseExamString(examRaw);
            rows.push({
                proctor:    proctor.name,
                department: proctor.deptLabel,
                examName,
                courseCode,
                program,
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

            .gius-proctor-hdr { cursor: pointer; }
            .gius-proctor-hdr:hover { opacity: 0.92; }
            .gius-proctor-hdr button { cursor: pointer; }

            .gius-empty-state {
                text-align: center; padding: 32px 16px;
            }
            .gius-empty-state p {
                color: #6b7280; margin: 0 0 14px; font-size: 14px;
            }

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

            .gius-table-section {
                border: 1px solid #e5e7eb; border-radius: 4px;
            }
            .gius-proctor-table-wrap {
                overflow-x: auto; border-radius: 4px 4px 0 0;
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
            .gius-data-row { cursor: pointer; }
            .gius-coproctor-row td {
                background: #f0f4ff !important; color: #374151;
                font-size: 0.85em; padding: 6px 16px !important;
                border-top: 1px dashed #c7d2fe;
                animation: giusSlideDown 0.2s ease;
            }

            .gius-table-footer { border-top: 1px solid #e5e7eb; padding: 6px 10px; }
            .gius-pagination {
                display: flex; align-items: center; justify-content: space-between;
                flex-wrap: wrap; gap: 8px;
            }
            .gius-page-info { font-size: 12px; color: #6b7280; }
            .gius-page-controls { display: flex; align-items: center; gap: 6px; }
            .gius-page-size-label { font-size: 12px; color: #6b7280; }
            .gius-page-size-select {
                height: 26px; padding: 0 6px; font-size: 12px;
                border: 1px solid #d1d5db; border-radius: 4px;
                background: #fff; color: #374151; cursor: pointer;
                font-family: 'Open Sans', sans-serif;
            }
            .gius-page-btn {
                height: 26px; min-width: 26px; padding: 0 7px;
                border: 1px solid #d1d5db; border-radius: 4px;
                background: #fff; color: #374151; font-size: 14px; cursor: pointer;
                display: inline-flex; align-items: center; justify-content: center;
                font-family: 'Open Sans', sans-serif;
            }
            .gius-page-btn:hover:not(:disabled) { background: #f3f4f6; }
            .gius-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
            .gius-page-num { font-size: 12px; color: #374151; white-space: nowrap; }

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
            html.gius-dark .gius-proctor-hdr { background: #11111b !important; }
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
            html.gius-dark .gius-page-info  { color: #a6adc8 !important; }
            html.gius-dark .gius-page-num   { color: #cdd6f4 !important; }
            html.gius-dark .gius-page-size-label { color: #a6adc8 !important; }
            html.gius-dark .gius-page-size-select {
                background: #313244 !important; color: #cdd6f4 !important; border-color: #45475a !important;
            }
            html.gius-dark .gius-page-btn {
                background: #313244 !important; color: #cdd6f4 !important; border-color: #45475a !important;
            }
            html.gius-dark .gius-page-btn:hover:not(:disabled) { background: #45475a !important; }
            html.gius-dark .gius-table-section { border-color: #45475a !important; }
            html.gius-dark .gius-table-footer { border-top-color: #45475a !important; }
            html.gius-dark .gius-empty-state p { color: #a6adc8 !important; }
            html.gius-dark .gius-chip {
                background: #1a2a4a !important; color: #89b4fa !important;
                border-color: #1e3a6e !important;
            }
            html.gius-dark .gius-warn-pill {
                background: #2d1f00 !important; color: #fbbf24 !important;
                border-color: #78350f !important;
            }
            html.gius-dark .gius-coproctor-row td {
                background: #1e1e2e !important; color: #a6adc8 !important;
                border-top-color: #313244 !important;
            }
        `;
        document.head.appendChild(s);
    }

    // ── UI state ──────────────────────────────────────────────────────────────

    let _allRows       = [];
    let _filteredRows  = [];
    let _renderedRows  = [];
    let _filters  = { search: '', day: '', exam: '', proctor: '', room: '', department: '' };
    let _sortCol  = 'dateKey';
    let _sortAsc  = true;
    let _pageSize    = 20;
    let _currentPage = 1;
    let _paused   = false;
    let _resumeFn = null;
    let _panelEl  = null;
    let _scraping = false;

    function uniqueSorted(rows, key) {
        return [...new Set(rows.map(r => r[key]).filter(Boolean))].sort();
    }

    function repopulateSelect(id, values, placeholder) {
        const sel = document.getElementById(id);
        if (!sel) return;
        const cur = sel.value;
        sel.innerHTML = `<option value="">${placeholder}</option>` +
            values.map(v => `<option value="${escHtml(v)}"${v === cur ? ' selected' : ''}>${escHtml(v)}</option>`).join('');
    }

    function repopulateDatalist(id, values) {
        const dl = document.getElementById(id);
        if (!dl) return;
        dl.innerHTML = values.map(v => `<option value="${escHtml(v)}"></option>`).join('');
    }

    function escHtml(s) {
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // ── Panel skeleton ────────────────────────────────────────────────────────

    function buildPanel() {
        const div = document.createElement('div');
        div.id = 'gius-proctor-panel';
        div.className = 'gius-proctor-card';
        div.innerHTML = `
            <div class="gius-proctor-hdr" id="gius-proctor-hdr">
                <div class="gius-proctor-hdr-left" id="gius-proctor-hdr-toggle">
                    <div>
                        <h3 class="gius-proctor-title">
                            <i class="fa fa-laptop"></i> Proctor Schedule Aggregator
                        </h3>
                        <div class="gius-proctor-meta" id="gius-proctor-meta"></div>
                    </div>
                </div>
                <div class="gius-proctor-hdr-btns">
                    <span id="gius-proctor-warn" style="display:none"></span>
                    <button type="button" class="gius-btn gius-btn-outline gius-btn-sm" id="gius-proctor-upload" title="Load rows from a previously exported CSV">
                        <i class="fa fa-upload"></i> Upload CSV
                    </button>
                    <input type="file" id="gius-file-input" accept=".csv" style="display:none">
                    <button type="button" class="gius-btn gius-btn-outline gius-btn-sm" id="gius-proctor-csv" title="Export filtered rows as CSV">
                        <i class="fa fa-download"></i> Export CSV
                    </button>
                    <button type="button" class="gius-btn gius-btn-outline gius-btn-sm" id="gius-proctor-refresh" title="Re-scrape all departments">
                        <i class="fa fa-refresh"></i> Refresh
                    </button>
                    <button type="button" class="gius-btn gius-btn-outline gius-btn-sm" id="gius-proctor-pause" style="display:none" title="Pause or resume fetching">&#x23F8; Pause</button>
                    <button type="button" class="gius-btn gius-btn-muted gius-btn-sm" id="gius-proctor-close">&#x2715;</button>
                </div>
            </div>
            <div class="gius-proctor-body" id="gius-proctor-body">
                <div id="gius-progress-section" style="display:none">
                    <div class="gius-progress-wrap">
                        <div class="gius-progress-bar" id="gius-progress-bar" style="width:0%"></div>
                    </div>
                    <div class="gius-progress-label" id="gius-progress-label">Starting&hellip;</div>
                </div>
                <div class="gius-filter-bar" id="gius-filter-bar" style="display:none">
                    <input class="gius-filter-input" id="gius-f-search"     type="text" placeholder="Search all columns&hellip;" />
                    <input class="gius-filter-input" id="gius-f-day"        type="text" placeholder="All Days"        list="gius-dl-day" />
                    <datalist id="gius-dl-day"></datalist>
                    <input class="gius-filter-input" id="gius-f-exam"       type="text" placeholder="All Exams"       list="gius-dl-exam" />
                    <datalist id="gius-dl-exam"></datalist>
                    <input class="gius-filter-input" id="gius-f-proctor"    type="text" placeholder="All Proctors"    list="gius-dl-proctor" />
                    <datalist id="gius-dl-proctor"></datalist>
                    <input class="gius-filter-input" id="gius-f-room"       type="text" placeholder="All Rooms"       list="gius-dl-room" />
                    <datalist id="gius-dl-room"></datalist>
                    <input class="gius-filter-input" id="gius-f-department" type="text" placeholder="All Departments" list="gius-dl-department" />
                    <datalist id="gius-dl-department"></datalist>
                    <button type="button" class="gius-btn gius-btn-muted gius-btn-sm" id="gius-f-clear" style="display:none">&#x2715; Clear all</button>
                </div>
                <div class="gius-chip-row" id="gius-chip-row"></div>
                <div id="gius-empty-state" class="gius-empty-state" style="display:none">
                    <p>No schedule data loaded yet.</p>
                    <button type="button" class="gius-btn gius-btn-primary" id="gius-start-fetch">
                        <i class="fa fa-play"></i> Fetch Schedules
                    </button>
                </div>
                <div class="gius-table-section" id="gius-table-section" style="display:none">
                    <div class="gius-proctor-table-wrap" id="gius-table-wrap">
                        <table class="gius-proctor-table">
                            <thead>
                                <tr>
                                    <th data-col="proctor">Proctor <span class="gius-sort-icon" data-col="proctor">&#x25B2;</span></th>
                                    <th data-col="exam">Exam <span class="gius-sort-icon" data-col="exam">&#x25B2;</span></th>
                                    <th data-col="hall">Room <span class="gius-sort-icon" data-col="hall">&#x25B2;</span></th>
                                    <th data-col="dateKey">Date <span class="gius-sort-icon active" data-col="dateKey">&#x25B2;</span></th>
                                    <th data-col="time">Time <span class="gius-sort-icon" data-col="time">&#x25B2;</span></th>
                                    <th data-col="department">Department <span class="gius-sort-icon" data-col="department">&#x25B2;</span></th>
                                    <th data-col="coverName">Cover <span class="gius-sort-icon" data-col="coverName">&#x25B2;</span></th>
                                </tr>
                            </thead>
                            <tbody id="gius-tbody"></tbody>
                        </table>
                    </div>
                    <div class="gius-table-footer" id="gius-table-footer"></div>
                </div>
            </div>
        `;
        return div;
    }

    // ── Filter / sort / render ────────────────────────────────────────────────

    function applyFiltersAndSort() {
        const f        = _filters;
        const search   = f.search.toLowerCase();
        const dayQ     = f.day.toLowerCase();
        const examQ    = f.exam.toLowerCase();
        const proctorQ = f.proctor.toLowerCase();
        const roomQ    = f.room.toLowerCase();
        const deptQ    = f.department.toLowerCase();

        let rows = _allRows.filter(r => {
            if (dayQ     && !r.date.toLowerCase().includes(dayQ))           return false;
            if (examQ    && !r.examName.toLowerCase().includes(examQ))      return false;
            if (proctorQ && !r.proctor.toLowerCase().includes(proctorQ))    return false;
            if (roomQ    && !r.hall.toLowerCase().includes(roomQ))          return false;
            if (deptQ    && !r.department.toLowerCase().includes(deptQ))    return false;
            if (search) {
                const hay = [r.proctor, r.examName, r.courseCode, r.program, r.hall, r.date, r.department, r.coverName]
                    .join(' ').toLowerCase();
                if (!hay.includes(search)) return false;
            }
            return true;
        });

        rows.sort((a, b) => {
            const col = _sortCol;
            const va = col === 'exam' ? ((a.program || a.courseCode) + ' ' + a.examName) :
                       col === 'time' ? (a.dateKey + a.startTime) : (a[col] || '');
            const vb = col === 'exam' ? ((b.program || b.courseCode) + ' ' + b.examName) :
                       col === 'time' ? (b.dateKey + b.startTime) : (b[col] || '');
            const cmp = va.localeCompare(vb, undefined, { numeric: true });
            return _sortAsc ? cmp : -cmp;
        });

        _filteredRows = rows;
        _currentPage  = 1;
        renderTable(_filteredRows);
        renderChips();
        updateFilterOptions();
    }

    function renderTable(rows) {
        const tbody   = document.getElementById('gius-tbody');
        const section = document.getElementById('gius-table-section');
        if (!tbody) return;

        _renderedRows = rows;
        if (section) section.style.display = (_allRows.length || rows.length) ? '' : 'none';

        const total      = rows.length;
        const totalPages = Math.max(1, Math.ceil(total / _pageSize));
        _currentPage     = Math.min(_currentPage, totalPages);
        const start      = (_currentPage - 1) * _pageSize;
        const end        = Math.min(start + _pageSize, total);
        const pageRows   = rows.slice(start, end);

        tbody.innerHTML = pageRows.map((r, i) => `
            <tr class="gius-row-in gius-data-row" data-idx="${start + i}" style="animation-delay:${Math.min(i, 30) * 12}ms">
                <td>${escHtml(r.proctor)}</td>
                <td>${escHtml(r.program || r.courseCode)} &ndash; ${escHtml(r.examName)}</td>
                <td>${escHtml(r.hall)}</td>
                <td>${escHtml(r.date)}</td>
                <td>${escHtml(r.startTime)} &ndash; ${escHtml(r.endTime)}</td>
                <td>${escHtml(r.department)}</td>
                <td class="${r.coverName ? '' : 'muted'}">${escHtml(r.coverName || '—')}</td>
            </tr>
        `).join('');

        renderPagination(total, totalPages, start, end);
    }

    function renderPagination(total, totalPages, start, end) {
        const foot = document.getElementById('gius-table-footer');
        if (!foot) return;
        if (!_allRows.length) { foot.innerHTML = ''; return; }

        const from    = total === 0 ? 0 : start + 1;
        const filtered = total !== _allRows.length ? ` (filtered from ${_allRows.length.toLocaleString()})` : '';
        foot.innerHTML = `
            <div class="gius-pagination">
                <span class="gius-page-info">Showing ${from}–${end} of ${total.toLocaleString()} exams${filtered}</span>
                <div class="gius-page-controls">
                    <label class="gius-page-size-label">Rows:
                        <select class="gius-page-size-select" id="gius-page-size">
                            ${[5, 10, 20, 50].map(n =>
                                `<option value="${n}"${_pageSize === n ? ' selected' : ''}>${n}</option>`
                            ).join('')}
                        </select>
                    </label>
                    <button type="button" class="gius-page-btn" id="gius-page-prev"${_currentPage <= 1 ? ' disabled' : ''}>&#x2039;</button>
                    <span class="gius-page-num" id="gius-page-num">Page ${_currentPage} / ${totalPages}</span>
                    <button type="button" class="gius-page-btn" id="gius-page-next"${_currentPage >= totalPages ? ' disabled' : ''}>&#x203A;</button>
                </div>
            </div>
        `;

        document.getElementById('gius-page-size')?.addEventListener('change', e => {
            _pageSize    = parseInt(e.target.value, 10);
            _currentPage = 1;
            renderTable(_filteredRows);
        });
        document.getElementById('gius-page-prev')?.addEventListener('click', () => {
            if (_currentPage > 1) { _currentPage--; renderTable(_filteredRows); }
        });
        document.getElementById('gius-page-next')?.addEventListener('click', () => {
            if (_currentPage < totalPages) { _currentPage++; renderTable(_filteredRows); }
        });
    }

    function renderChips() {
        const row     = document.getElementById('gius-chip-row');
        const clearEl = document.getElementById('gius-f-clear');
        if (!row) return;
        const labels = { day: 'Day', exam: 'Exam', proctor: 'Proctor', room: 'Room', department: 'Dept', search: 'Search' };
        const active = Object.entries(_filters).filter(([, v]) => v);
        row.innerHTML = active.map(([k, v]) =>
            `<span class="gius-chip">${labels[k] || k}: ${escHtml(v)}<span class="gius-chip-x" data-filter="${k}" title="Remove">&#x2715;</span></span>`
        ).join('');
        if (clearEl) clearEl.style.display = active.length ? '' : 'none';
        row.querySelectorAll('.gius-chip-x').forEach(x => {
            x.addEventListener('click', () => {
                const key = x.dataset.filter;
                _filters[key] = '';
                const el = document.getElementById('gius-f-' + key);
                if (el) el.value = '';
                applyFiltersAndSort();
            });
        });
    }

    function updateFilterOptions() {
        repopulateDatalist('gius-dl-day',        uniqueSorted(_allRows, 'date'));
        repopulateDatalist('gius-dl-exam',       uniqueSorted(_allRows, 'examName'));
        repopulateDatalist('gius-dl-proctor',    uniqueSorted(_allRows, 'proctor'));
        repopulateDatalist('gius-dl-room',       uniqueSorted(_allRows, 'hall'));
        repopulateDatalist('gius-dl-department', uniqueSorted(_allRows, 'department'));
    }

    function updateSortIcons() {
        document.querySelectorAll('.gius-sort-icon').forEach(el => {
            const col    = el.dataset.col;
            const active = col === _sortCol;
            el.classList.toggle('active', active);
            el.textContent = active ? (_sortAsc ? '▲' : '▼') : '▲';
        });
    }

    // ── CSV export ────────────────────────────────────────────────────────────

    function exportCSV() {
        const f        = _filters;
        const search   = f.search.toLowerCase();
        const dayQ     = f.day.toLowerCase();
        const examQ    = f.exam.toLowerCase();
        const proctorQ = f.proctor.toLowerCase();
        const roomQ    = f.room.toLowerCase();
        const deptQ    = f.department.toLowerCase();
        const rows = _allRows.filter(r => {
            if (dayQ     && !r.date.toLowerCase().includes(dayQ))           return false;
            if (examQ    && !r.examName.toLowerCase().includes(examQ))      return false;
            if (proctorQ && !r.proctor.toLowerCase().includes(proctorQ))    return false;
            if (roomQ    && !r.hall.toLowerCase().includes(roomQ))          return false;
            if (deptQ    && !r.department.toLowerCase().includes(deptQ))    return false;
            if (search) {
                const h = [r.proctor, r.examName, r.courseCode, r.program, r.hall, r.date, r.department, r.coverName]
                    .join(' ').toLowerCase();
                if (!h.includes(search)) return false;
            }
            return true;
        });

        const esc    = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
        const header = ['Proctor', 'Course Code', 'Exam Name', 'Room', 'Date', 'Start Time', 'End Time', 'Department', 'Cover', 'Program', 'Date Key'];
        const lines  = rows.map(r => [
            r.proctor, r.courseCode, r.examName, r.hall, r.date,
            r.startTime, r.endTime, r.department, r.coverName, r.program, r.dateKey,
        ].map(esc).join(','));

        const csv  = '﻿' + [header.join(','), ...lines].join('\r\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href     = url;
        a.download = `proctor-schedule-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // ── CSV upload ────────────────────────────────────────────────────────────

    function parseCsvLine(line) {
        const fields = [];
        let i = 0, field = '';
        while (i < line.length) {
            if (line[i] === '"') {
                i++;
                while (i < line.length) {
                    if (line[i] === '"' && line[i + 1] === '"') { field += '"'; i += 2; }
                    else if (line[i] === '"') { i++; break; }
                    else { field += line[i++]; }
                }
                if (i < line.length && line[i] === ',') i++;
            } else {
                while (i < line.length && line[i] !== ',') field += line[i++];
                if (i < line.length) i++;
            }
            fields.push(field);
            field = '';
        }
        return fields;
    }

    function parseUploadedCSV(text) {
        const cleaned = text.replace(/^﻿/, '');
        const lines = cleaned.split(/\r?\n/).filter(l => l.trim());
        if (lines.length < 2) return [];
        const headers = parseCsvLine(lines[0]).map(h => h.toLowerCase().trim());
        const idx = {};
        headers.forEach((h, i) => { idx[h] = i; });
        const get = (fields, col, fallback = '') => (fields[idx[col]] ?? fallback).trim();

        return lines.slice(1).map(line => {
            const f = parseCsvLine(line);
            return {
                proctor:    get(f, 'proctor'),
                department: get(f, 'department'),
                examName:   get(f, 'exam name'),
                courseCode: get(f, 'course code'),
                program:    get(f, 'program'),
                hall:       get(f, 'room'),
                dateKey:    get(f, 'date key') || get(f, 'date'),
                date:       get(f, 'date'),
                startTime:  get(f, 'start time'),
                endTime:    get(f, 'end time'),
                coverName:  get(f, 'cover'),
            };
        }).filter(r => r.proctor || r.examName);
    }

    // ── Co-proctor toggle ─────────────────────────────────────────────────────

    function toggleCoProctors(tbody, tr, row) {
        const existing = tr.nextElementSibling;
        if (existing && existing.classList.contains('gius-coproctor-row')) {
            existing.remove();
            return;
        }
        const coProctors = _allRows.filter(r =>
            r !== row &&
            r.hall     === row.hall &&
            r.dateKey  === row.dateKey &&
            r.examName === row.examName
        );
        if (!coProctors.length) return;
        const cpRow = document.createElement('tr');
        cpRow.className = 'gius-coproctor-row';
        cpRow.innerHTML = `<td colspan="7">Co-proctors: ${coProctors.map(r => escHtml(r.proctor)).join(', ')}</td>`;
        tr.insertAdjacentElement('afterend', cpRow);
    }

    // ── Panel wiring ──────────────────────────────────────────────────────────

    function wirePanel(panel) {
        // Sort headers
        panel.querySelectorAll('thead th[data-col]').forEach(th => {
            th.addEventListener('click', () => {
                const col = th.dataset.col;
                if (_sortCol === col) _sortAsc = !_sortAsc;
                else { _sortCol = col; _sortAsc = true; }
                updateSortIcons();
                applyFiltersAndSort();
            });
        });

        // Filter inputs
        function bindFilter(id, key) {
            const el = document.getElementById(id);
            if (!el) return;
            el.addEventListener('change', () => { _filters[key] = el.value; applyFiltersAndSort(); });
            if (el.tagName === 'INPUT') {
                el.addEventListener('input', () => { _filters[key] = el.value; applyFiltersAndSort(); });
            }
        }
        bindFilter('gius-f-search',     'search');
        bindFilter('gius-f-day',        'day');
        bindFilter('gius-f-exam',       'exam');
        bindFilter('gius-f-proctor',    'proctor');
        bindFilter('gius-f-room',       'room');
        bindFilter('gius-f-department', 'department');

        // Clear all
        document.getElementById('gius-f-clear')?.addEventListener('click', () => {
            _filters = { search: '', day: '', exam: '', proctor: '', room: '', department: '' };
            ['gius-f-search', 'gius-f-day', 'gius-f-exam', 'gius-f-proctor', 'gius-f-room', 'gius-f-department']
                .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
            applyFiltersAndSort();
        });

        // CSV
        document.getElementById('gius-proctor-csv')?.addEventListener('click', exportCSV);

        // Toggle panel body on header click (but not when clicking buttons)
        document.getElementById('gius-proctor-hdr')?.addEventListener('click', e => {
            if (e.target.closest('button') || e.target.closest('input')) return;
            const body = document.getElementById('gius-proctor-body');
            if (body) body.classList.toggle('collapsed');
        });

        // First-run fetch button
        document.getElementById('gius-start-fetch')?.addEventListener('click', () => {
            const emptyState = document.getElementById('gius-empty-state');
            if (emptyState) emptyState.style.display = 'none';
            startScrape();
        });

        // Close
        document.getElementById('gius-proctor-close')?.addEventListener('click', () => {
            panel.remove();
            _panelEl = null;
        });

        // Refresh
        document.getElementById('gius-proctor-refresh')?.addEventListener('click', () => {
            if (_scraping) return;
            _paused = false;
            clearCache();
            _allRows = [];
            _filters = { search: '', day: '', exam: '', proctor: '', room: '', department: '' };
            startScrape();
        });

        // Co-proctor row expansion (event delegation on tbody)
        const tbody = panel.querySelector('#gius-tbody');
        tbody?.addEventListener('click', e => {
            const tr = e.target.closest('tr.gius-data-row');
            if (!tr) return;
            const idx = parseInt(tr.dataset.idx, 10);
            if (!isNaN(idx) && _renderedRows[idx]) toggleCoProctors(tbody, tr, _renderedRows[idx]);
        });

        // Upload CSV
        const uploadBtn = document.getElementById('gius-proctor-upload');
        const fileInput = document.getElementById('gius-file-input');
        uploadBtn?.addEventListener('click', () => fileInput?.click());
        fileInput?.addEventListener('change', () => {
            const file = fileInput.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ev => {
                const rows = parseUploadedCSV(ev.target.result);
                if (!rows.length) return;
                _scraping = false;
                _paused   = true;
                _allRows  = rows;
                saveCache(rows);
                const metaEl     = document.getElementById('gius-proctor-meta');
                if (metaEl) metaEl.textContent = `Loaded from CSV · ${rows.length.toLocaleString()} exams`;
                const filterBr   = document.getElementById('gius-filter-bar');
                if (filterBr) filterBr.style.display = '';
                const progSec    = document.getElementById('gius-progress-section');
                if (progSec) progSec.style.display = 'none';
                const pauseBtn   = document.getElementById('gius-proctor-pause');
                if (pauseBtn)  { pauseBtn.style.display = 'none'; pauseBtn.innerHTML = '&#x23F8; Pause'; }
                const refreshBtn = document.getElementById('gius-proctor-refresh');
                if (refreshBtn) refreshBtn.disabled = false;
                const emptyState = document.getElementById('gius-empty-state');
                if (emptyState) emptyState.style.display = 'none';
                applyFiltersAndSort();
            };
            reader.readAsText(file);
            fileInput.value = '';
        });
    }

    function startScrape() {
        _scraping = true;
        _paused   = false;
        const emptyState = document.getElementById('gius-empty-state');
        if (emptyState) emptyState.style.display = 'none';
        const progSec    = document.getElementById('gius-progress-section');
        const progBar    = document.getElementById('gius-progress-bar');
        const progLbl    = document.getElementById('gius-progress-label');
        const filterBr   = document.getElementById('gius-filter-bar');
        const metaEl     = document.getElementById('gius-proctor-meta');
        const warnEl     = document.getElementById('gius-proctor-warn');
        const refreshBtn = document.getElementById('gius-proctor-refresh');
        const pauseBtn   = document.getElementById('gius-proctor-pause');
        if (refreshBtn) refreshBtn.disabled = true;
        if (pauseBtn) {
            pauseBtn.style.display = '';
            pauseBtn.innerHTML = '&#x23F8; Pause';
            pauseBtn.onclick = () => {
                if (_paused) {
                    _paused = false;
                    pauseBtn.innerHTML = '&#x23F8; Pause';
                    if (_resumeFn) _resumeFn();
                } else {
                    _paused = true;
                    pauseBtn.innerHTML = '&#x25B6; Resume';
                }
            };
        }
        if (progSec)  progSec.style.display = '';
        if (filterBr) filterBr.style.display = '';

        scrapeAll({
            onProgress(stats) {
                const pct = stats.totalProctors
                    ? Math.round((stats.proctorsDone / stats.totalProctors) * 100)
                    : Math.round((stats.depts / stats.totalDepts) * 50);
                if (progBar) progBar.style.width = pct + '%';
                if (progLbl) {
                    if (stats.totalProctors) {
                        progLbl.textContent =
                            `Scraped ${stats.proctorsDone} / ${stats.totalProctors} entities · ${stats.exams.toLocaleString()} exams`;
                    } else {
                        progLbl.textContent =
                            `Fetching departments ${stats.depts} / ${stats.totalDepts}…`;
                    }
                }
            },
            onRows(rows) {
                if (!_scraping) return;
                _allRows = rows;
                applyFiltersAndSort();
            },
            onError(type) {
                if (type === 'SESSION_EXPIRED') {
                    if (warnEl) {
                        warnEl.style.display = '';
                        warnEl.innerHTML = '<span class="gius-warn-pill">⚠ Session expired — reload page</span>';
                    }
                }
            },
            onComplete(rows) {
                if (!_scraping) return;
                _scraping = false;
                _paused   = false;
                _allRows  = rows;
                if (progSec)    progSec.style.display = 'none';
                if (refreshBtn) refreshBtn.disabled = false;
                if (pauseBtn)   { pauseBtn.style.display = 'none'; pauseBtn.innerHTML = '&#x23F8; Pause'; }
                const now = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                if (metaEl) metaEl.textContent = `Last updated: ${now} · ${rows.length.toLocaleString()} exams`;
                applyFiltersAndSort();
            },
        });
    }

    function openPanel() {
        if (_panelEl) { _panelEl.style.display = ''; return; }

        const panel = buildPanel();
        _panelEl = panel;

        const anchor = document.getElementById('mainTbl') || document.getElementById('form1');
        anchor.parentNode.insertBefore(panel, anchor);
        wirePanel(panel);

        const cached = loadCache();
        if (cached && cached.rows && cached.rows.length) {
            _allRows = cached.rows;
            const age     = formatCacheAge(cached.scrapedAt);
            const dateStr = new Date(cached.scrapedAt).toLocaleDateString('en-GB',
                { day: 'numeric', month: 'short', year: 'numeric' });
            const metaEl   = document.getElementById('gius-proctor-meta');
            if (metaEl) metaEl.textContent = `Last updated: ${dateStr} (${age}) · ${cached.rows.length.toLocaleString()} exams`;
            const filterBr = document.getElementById('gius-filter-bar');
            if (filterBr) filterBr.style.display = '';
            applyFiltersAndSort();
        } else {
            const metaEl     = document.getElementById('gius-proctor-meta');
            if (metaEl) metaEl.textContent = 'No data — click Fetch to load schedules';
            const emptyState = document.getElementById('gius-empty-state');
            if (emptyState) emptyState.style.display = '';
        }
    }

    // ── Entry point ───────────────────────────────────────────────────────────

    function injectTrigger() {
        if (document.getElementById('gius-proctor-trigger')) return;
        const row = document.getElementById('MainContent_lstTR');
        if (!row) return;
        const btn = document.createElement('button');
        btn.id        = 'gius-proctor-trigger';
        btn.type      = 'button';
        btn.className = 'gius-btn gius-btn-primary';
        btn.style.cssText = 'margin-top:8px;';
        btn.innerHTML = '<i class="fa fa-laptop"></i> View All Proctor Schedules';
        btn.addEventListener('click', openPanel);
        const td = row.querySelector('td') || row;
        td.appendChild(btn);
    }

    function init() {
        injectStyles();
        injectTrigger();
    }

    init();

})();
