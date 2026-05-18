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

})();
