    // ==UserScript==
    // @name        GIU Student Attendance Report
    // @description Auto-scrapes all sessions for a group and shows absence level report above the student table
    // @match       https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx*
    // @namespace   ramin0
    // @version     1.2
    // @icon        data:image/png;base64,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
    // @author      Mo.Elmaadawy
    // @run-at      document-idle
    // @grant       none
    // ==/UserScript==

    (function () {
        'use strict';

        const PAGE_URL       = 'https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx';
        const CACHE_PREFIX   = 'giuAttendanceGroupV1_';
        const CACHE_TTL_MS   = 30 * 60 * 1000;
        const MAX_CONCURRENT = 5;
        const LEVEL_RULES = [
            { min: 0.25, exclusive: true,  level: 3, badge: 'DROP',        label: 'Will Be Dropped' },
            { min: 0.20, exclusive: false, level: 2, badge: '2nd Warning', label: 'Second Warning'  },
            { min: 0.10, exclusive: false, level: 1, badge: '1st Warning', label: 'First Warning'   },
            { min: 0,    exclusive: false, level: 0, badge: 'OK',          label: 'OK'              },
        ];
        let _abortCtrl = null;

        // Returns [{id, label, date, status, durationHours}] — skips the "[Choose …]" option (value "0")
        function parseSessionOptions(ddl) {
            return Array.from(ddl.options)
                .filter(opt => opt.value && opt.value !== '0')
                .map(opt => {
                    const text     = opt.textContent;
                    const dateM    = text.match(/@(\d{4})\.(\d{2})\.(\d{2})/);
                    const durM     = text.match(/\b(\d+)h\b/i);
                    const status   = /On Hold/i.test(text)    ? 'onHold'
                                : /Compensation/i.test(text) ? 'compensation'
                                : 'regular';
                    return {
                        id:            opt.value,
                        label:         text.trim(),
                        date:          dateM ? `${dateM[1]}-${dateM[2]}-${dateM[3]}` : null,
                        status,
                        durationHours: durM ? parseInt(durM[1], 10) : 2,
                    };
                });
        }

        // Extracts season+year from first session label for cache key (e.g. "Spring 2026" → "S2026")
        function extractSeasonYear(sessions) {
            if (!sessions.length) return 'unknown';
            const m = sessions[0].label.match(/([A-Za-z]+)\s+(\d{4})/);
            return m ? `${m[1][0].toUpperCase()}${m[2]}` : 'unknown';
        }

        // Captures all hidden ASP.NET form fields from the live DOM
        function snapshotForm() {
            const get = id => { const el = document.getElementById(id); return el ? el.value : ''; };
            return {
                __VIEWSTATE:          get('__VIEWSTATE'),
                __VIEWSTATEGENERATOR: get('__VIEWSTATEGENERATOR'),
                __EVENTVALIDATION:    get('__EVENTVALIDATION'),
                __SCROLLPOSITIONX:    '0',
                __SCROLLPOSITIONY:    '0',
                MainContent_H_AlertText: '',
            };
        }

        // Parses the student attendance DataGrid from a response document.
        // Returns [{id, name, attended}] — empty array if table not found.
        function parseStudentTable(doc) {
            const table = doc.getElementById('MainContent_DG_StudentAttendance');
            if (!table) return [];
            return Array.from(table.querySelectorAll('tr'))
                .slice(1) // skip header row
                .map(tr => {
                    const tds = tr.querySelectorAll('td');
                    if (tds.length < 4) return null;
                    const cb = tds[1].querySelector('input[type="checkbox"]');
                    return {
                        id:       tds[2].textContent.trim(),
                        name:     tds[3].textContent.trim(),
                        attended: cb ? cb.checked : false,
                    };
                })
                .filter(Boolean);
        }

        // A session where every student is unchecked most likely has no attendance entered.
        // Exclude these sessions from absence calculations.
        function isUnrecorded(students) {
            return students.length > 0 && students.every(s => !s.attended);
        }

        // Returns [{id, name, attended}] on success.
        // Returns {error: 'expired'} if session has expired.
        // Returns {error: 'network'} on fetch failure.
        // Returns {error: 'aborted'} if signal was aborted.
        async function fetchSessionStudents(sessionId, groupId, formState, signal) {
            const body = new URLSearchParams({
                __EVENTTARGET:                        'ctl00$MainContent$DDL_Sessions',
                __EVENTARGUMENT:                      '',
                __LASTFOCUS:                          '',
                __VIEWSTATE:                          formState.__VIEWSTATE,
                __VIEWSTATEGENERATOR:                 formState.__VIEWSTATEGENERATOR,
                __EVENTVALIDATION:                    formState.__EVENTVALIDATION,
                __SCROLLPOSITIONX:                    formState.__SCROLLPOSITIONX,
                __SCROLLPOSITIONY:                    formState.__SCROLLPOSITIONY,
                'ctl00$MainContent$H_AlertText':      '',
                'ctl00$MainContent$DDL_StudentGroup': groupId,
                'ctl00$MainContent$DDL_Sessions':     sessionId,
            });

            let resp;
            try {
                resp = await fetch(PAGE_URL, {
                    method:      'POST',
                    credentials: 'include',
                    headers:     { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body:        body.toString(),
                    signal,
                });
            } catch (e) {
                return { error: e.name === 'AbortError' ? 'aborted' : 'network' };
            }

            if (!resp.ok) return { error: 'network' };

            const html = await resp.text();
            if (html.includes('Login_m.aspx') || html.includes('id="LoginPage"')) {
                return { error: 'expired' };
            }

            const doc = new DOMParser().parseFromString(html, 'text/html');
            return parseStudentTable(doc);
        }

        // Runs worker(task, index) for each task with at most maxConcurrent in-flight.
        // Calls onProgress(completedCount, totalCount) after each task finishes.
        // Respects signal: stops launching new tasks when signal.aborted is true.
        // Always resolves (never rejects) — individual failures become null entries.
        function runPool(tasks, worker, { maxConcurrent = 5, onProgress, signal } = {}) {
            return new Promise(resolve => {
                if (!tasks.length) { resolve([]); return; }
                let running = 0, index = 0, done = 0;
                const results = new Array(tasks.length);

                function next() {
                    if (signal && signal.aborted) {
                        if (running === 0) resolve(results);
                        return;
                    }
                    while (running < maxConcurrent && index < tasks.length) {
                        const i = index++;
                        running++;
                        worker(tasks[i], i)
                            .then(r  => { results[i] = r; })
                            .catch(() => { results[i] = null; })
                            .finally(() => {
                                running--;
                                done++;
                                if (onProgress) onProgress(done, tasks.length);
                                if (signal && signal.aborted) {
                                    if (running === 0) resolve(results);
                                } else if (index < tasks.length) {
                                    next();
                                } else if (running === 0) {
                                    resolve(results);
                                }
                            });
                    }
                }
                next();
            });
        }

        // Returns absence level 0-3 based on hour-weighted absence rate.
        // > 25% → 3 (Drop), >= 20% → 2 (Second Warning), >= 10% → 1 (First Warning), else 0.
        function classifyLevel(rate) {
            if (rate > 0.25) return 3;
            if (rate >= 0.20) return 2;
            if (rate >= 0.10) return 1;
            return 0;
        }

        // Aggregates per-student hour-weighted absence data across all sessions.
        // Returns {students, atRisk, levelCounts, avgRate, eligibleCount, errorCount, unrecordedCount, total}.
        function buildReport(sessions, sessionResults) {
            const map = new Map(); // studentId → {id, name, absentHours, totalHours, sessionCount, appearedIn, absentSessions}

            const eligibleSessions = sessions.filter((_, i) => Array.isArray(sessionResults[i]));
            const eligibleCount    = eligibleSessions.length;

            sessions.forEach((session, i) => {
                const result = sessionResults[i];
                if (!Array.isArray(result)) return;

                result.forEach(student => {
                    if (!map.has(student.id)) {
                        map.set(student.id, { id: student.id, name: student.name, absentHours: 0, totalHours: 0, sessionCount: 0, appearedIn: new Set(), absentSessions: [] });
                    }
                    const s = map.get(student.id);
                    s.totalHours += session.durationHours;
                    s.sessionCount++;
                    s.appearedIn.add(session.id);
                    if (!student.attended) {
                        s.absentHours += session.durationHours;
                        s.absentSessions.push({ date: session.date, durationHours: session.durationHours, status: session.status });
                    }
                });
            });

            const students = Array.from(map.values()).map(s => {
                const { appearedIn, ...rest } = s;
                const missingSessions = eligibleSessions.filter(sess => !appearedIn.has(sess.id))
                    .map(sess => ({ id: sess.id, date: sess.date, durationHours: sess.durationHours }));
                const partialData = missingSessions.length > 0;
                const rate  = rest.totalHours > 0 ? rest.absentHours / rest.totalHours : 0;
                const level = classifyLevel(rate);
                return { ...rest, missingSessions, absenceRate: rate, level, partialData };
            }).sort((a, b) => b.absenceRate - a.absenceRate);

            const levelCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
            students.forEach(s => levelCounts[s.level]++);

            const atRisk   = students.filter(s => s.level >= 2);
            const avgRate  = students.length > 0
                ? students.reduce((acc, s) => acc + s.absenceRate, 0) / students.length
                : 0;

            const errorCount      = sessionResults.filter(r => r === null).length;
            const unrecordedCount = sessionResults.filter(r => r === 'unrecorded').length;

            return { students, atRisk, levelCounts, avgRate, eligibleCount, errorCount, unrecordedCount, total: students.length };
        }

        function makeCacheKey(groupId, sessions) {
            return `${CACHE_PREFIX}${groupId}_${extractSeasonYear(sessions)}`;
        }

        function makeOverridesKey(groupId, sessions) {
            return `giuAttOverridesV1_${groupId}_${extractSeasonYear(sessions)}`;
        }

        // Loads persisted overrides. Returns empty Map if session count changed (new week added).
        function loadOverrides(key, sessions) {
            try {
                const raw = localStorage.getItem(key);
                if (!raw) return new Map();
                const data = JSON.parse(raw);
                if (!data || data.sessionCount !== sessions.length) return new Map();
                return new Map(Object.entries(data.overrides || {}));
            } catch { return new Map(); }
        }

        function saveOverrides(key, overridesMap, sessions) {
            try {
                localStorage.setItem(key, JSON.stringify({
                    overrides:    Object.fromEntries(overridesMap),
                    sessionCount: sessions.length,
                }));
            } catch { /* quota */ }
        }

        function clearOverrides(key) {
            try { localStorage.removeItem(key); } catch { /* ignore */ }
        }

        // Returns cached data object if exists and within TTL, otherwise null.
        function readCache(key) {
            try {
                const raw = localStorage.getItem(key);
                if (!raw) return null;
                const data = JSON.parse(raw);
                if (!data || !data.ts) return null;
                if (Date.now() - data.ts > CACHE_TTL_MS) return null;
                return data;
            } catch { return null; }
        }

        // Stores payload with a timestamp. Silently ignores quota errors.
        function writeCache(key, payload) {
            try {
                localStorage.setItem(key, JSON.stringify({ ...payload, ts: Date.now() }));
            } catch { /* storage quota exceeded */ }
        }

        function clearCacheEntry(key) {
            try { localStorage.removeItem(key); } catch { /* ignore */ }
        }

        // Returns human-readable cache age string.
        function formatCacheAge(ts) {
            const sec = Math.floor((Date.now() - ts) / 1000);
            if (sec < 60)   return `${sec}s ago`;
            if (sec < 3600) return `${Math.floor(sec / 60)}m ago`;
            return `${Math.floor(sec / 3600)}h ago`;
        }

        // "2026-02-14" → "Feb 14"
        function fmtSessionDate(dateStr) {
            if (!dateStr) return '?';
            const d = new Date(dateStr + 'T00:00:00');
            return isNaN(d) ? dateStr : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }

        function injectStyles() {
            if (document.getElementById('gius-att-styles')) return;
            const style = document.createElement('style');
            style.id = 'gius-att-styles';
            style.textContent = `
    @keyframes giusAttSlideDown {
        from { opacity: 0; transform: translateY(-14px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    /* ── Panel container ─────────────────────────────────────────── */
    .gius-att-panel {
        background: #fff;
        border: 1px solid #eeeeee;
        border-radius: 6px;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
        margin-bottom: 20px;
        margin-top: 10px;
        animation: giusAttSlideDown 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        font-size: 13px;
        overflow: hidden;
        position: relative;
    }
    .gius-att-panel::before {
        content: "";
        position: absolute; top: 0; left: 0;
        width: 100%; height: 3px;
        background: #ffc107;
    }
    /* ── Header bar ──────────────────────────────────────────────── */
    .gius-att-header {
        background: #272c33;
        color: #fff;
        padding: 10px 14px;
        border-bottom: 2px solid #ffc107;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
        cursor: pointer;
    }
    .gius-att-title { font-size: 14px; font-weight: 700; flex: 1; }
    .gius-att-chevron { transition: transform 0.25s ease; margin-right: 5px; font-size: 11px; }
    .gius-att-panel.gius-att-collapsed .gius-att-body { display: none; }
    .gius-att-panel.gius-att-collapsed .gius-att-chevron { transform: rotate(-90deg); }
    .gius-att-meta  { font-size: 12px; color: rgba(255,255,255,0.65); }
    .gius-att-refresh {
        height: 26px; padding: 0 10px; border-radius: 6px;
        font-size: 12px; font-weight: 700; cursor: pointer;
        border: 1px solid rgba(255,255,255,0.3);
        background: rgba(255,255,255,0.1);
        color: #fff;
        transition: all 0.2s ease;
        display: inline-flex; align-items: center; gap: 4px;
        font-family: 'Open Sans', Arial, sans-serif;
    }
    .gius-att-refresh:hover { background: rgba(255,255,255,0.22); }
    /* ── Body ────────────────────────────────────────────────────── */
    .gius-att-body { padding: 14px 16px; }
    /* ── Progress bar ────────────────────────────────────────────── */
    .gius-att-progress { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
    .gius-att-progress-bar  { flex: 1; height: 8px; background: #e5e7eb; border-radius: 999px; overflow: hidden; }
    .gius-att-progress-fill { height: 100%; background: #1B59C6; border-radius: 999px; width: 0%; transition: width 0.45s ease; }
    .gius-att-progress-text { font-size: 12px; color: #6b7280; white-space: nowrap; min-width: 150px; }
    /* ── Error banner ────────────────────────────────────────────── */
    .gius-att-error {
        background: #fef3c7; color: #92400e; border: 1px solid #fde68a;
        border-radius: 6px; padding: 8px 12px; font-size: 12px; font-weight: 600;
    }
    /* ── Stats grid ──────────────────────────────────────────────── */
    .gius-att-stats { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 10px; }
    .gius-att-stat  { font-size: 12px; color: #374151; }
    .gius-att-stat-val { font-weight: 700; }
    /* ── At-risk table ───────────────────────────────────────────── */
    .gius-att-atrisk-title { font-size: 12px; font-weight: 700; color: #374151; margin: 6px 0 6px; }
    .gius-att-atrisk-table { border-collapse: collapse; font-size: 13px; width: 100%; max-width: 680px; }
    .gius-att-atrisk-table thead th {
        background: #272c33; color: #fff;
        padding: 7px 10px; text-align: left;
        font-size: 12px; font-weight: 700; letter-spacing: 0.4px;
    }
    .gius-att-atrisk-table tbody tr { border-bottom: 1px solid #f3f4f6; }
    .gius-att-atrisk-table tbody tr:nth-child(even) { background: #f9fafb; }
    .gius-att-atrisk-table tbody tr:hover { background: #eff6ff; }
    .gius-att-atrisk-table td { padding: 6px 10px; color: #374151; }
    /* ── Level badge pills ───────────────────────────────────────── */
    .gius-att-badge {
        display: inline-flex; align-items: center;
        border-radius: 999px; padding: 2px 10px;
        font-size: 11px; font-weight: 700; white-space: nowrap;
    }
    .gius-att-badge-red   { background: #fee2e2; color: #b91c1c; border: 1px solid #fca5a5; }
    .gius-att-badge-amber { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
    /* ── Partial-data warning ───────────────────────────────────── */
    .gius-att-partial {
        display: inline-flex; align-items: center; gap: 3px;
        color: #d97706; font-size: 11px; font-weight: 700;
        cursor: help; margin-left: 4px;
    }
    html.gius-dark .gius-att-partial { color: #fbbf24 !important; }
    /* ── Absent detail row ───────────────────────────────────────── */
    .gius-att-data-row { cursor: pointer; }
    .gius-att-detail-row td {
        font-size: 12px;
        padding: 6px 10px 6px 20px !important;
        border-top: 1px solid #a5b4fc !important;
        border-left: 4px solid #6366f1 !important;
        background: #eef2ff !important;
        color: #1e3a8a !important;
    }
    .gius-att-detail-label { font-weight: 700; display: block; margin-bottom: 3px; color: #4338ca; }
    .gius-att-detail-list { margin: 0; padding: 0 0 0 16px; list-style: disc; }
    .gius-att-detail-list li { margin: 1px 0; }
    /* ── Missing-session override controls ──────────────────────── */
    .gius-att-missing-section { margin-top: 8px; border-top: 1px dashed #a5b4fc; padding-top: 6px; }
    .gius-att-missing-item { display: flex; align-items: center; gap: 10px; padding: 3px 0; }
    .gius-att-missing-date { font-size: 12px; min-width: 90px; }
    .gius-att-miss-grp {
        display: inline-flex; border-radius: 5px; overflow: hidden;
        border: 1px solid #d1d5db; flex-shrink: 0;
    }
    .gius-att-miss-btn {
        padding: 3px 10px; font-size: 11px; font-weight: 600; cursor: pointer;
        border: none; border-left: 1px solid #d1d5db;
        background: transparent; color: #9ca3af;
        font-family: 'Open Sans', Arial, sans-serif;
        transition: background 0.15s, color 0.15s; white-space: nowrap;
    }
    .gius-att-miss-btn:first-child { border-left: none; }
    .gius-att-miss-btn:not(.active):hover { background: #f3f4f6; color: #374151; }
    .gius-att-miss-btn.active[data-val="attended"] { background: #d1fae5; color: #065f46; }
    .gius-att-miss-btn.active[data-val="absent"]   { background: #fee2e2; color: #991b1b; }
    .gius-att-miss-btn.active[data-val="onHold"]   { background: #fef3c7; color: #92400e; }
    .gius-att-adjusted { font-size: 12px; margin-top: 6px; font-weight: 700; color: #4338ca; }
    html.gius-dark .gius-att-missing-section { border-top-color: #4338ca !important; }
    html.gius-dark .gius-att-miss-grp { border-color: #45475a !important; }
    html.gius-dark tr.gius-att-detail-row td button.gius-att-miss-btn { border-left-color: #45475a !important; color: #6c7086 !important; background: transparent !important; }
    html.gius-dark tr.gius-att-detail-row td button.gius-att-miss-btn:not(.active):hover { background: #313244 !important; color: #cdd6f4 !important; }
    html.gius-dark tr.gius-att-detail-row td button.gius-att-miss-btn.active[data-val="attended"] { background: #166534 !important; color: #86efac !important; }
    html.gius-dark tr.gius-att-detail-row td button.gius-att-miss-btn.active[data-val="absent"]   { background: #7f1d1d !important; color: #fca5a5 !important; }
    html.gius-dark tr.gius-att-detail-row td button.gius-att-miss-btn.active[data-val="onHold"]   { background: #78350f !important; color: #fcd34d !important; }
    html.gius-dark .gius-att-adjusted { color: #a5b4fc !important; }
    /* ── Dark mode ───────────────────────────────────────────────── */
    html.gius-dark .gius-att-panel { background: #181825 !important; border-color: transparent !important; }
    html.gius-dark .gius-att-header { background: #11111b !important; }
    html.gius-dark .gius-att-body   { color: #cdd6f4 !important; }
    html.gius-dark .gius-att-progress-bar  { background: #313244 !important; }
    html.gius-dark .gius-att-progress-fill { background: #89b4fa !important; }
    html.gius-dark .gius-att-progress-text { color: #a6adc8 !important; }
    html.gius-dark .gius-att-error { background: #45475a !important; color: #f38ba8 !important; border-color: transparent !important; }
    html.gius-dark .gius-att-stat  { color: #cdd6f4 !important; }
    html.gius-dark .gius-att-atrisk-title { color: #cdd6f4 !important; }
    html.gius-dark .gius-att-atrisk-table tbody tr { border-bottom-color: #313244 !important; }
    html.gius-dark .gius-att-atrisk-table tbody tr:nth-child(even) { background: #181825 !important; }
    html.gius-dark .gius-att-atrisk-table tbody tr:hover { background: #1e3a6e !important; }
    html.gius-dark .gius-att-atrisk-table td { color: #cdd6f4 !important; }
    html.gius-dark .gius-att-badge-red   { background: #3d1218 !important; color: #f38ba8 !important; border-color: #7f1d1d !important; }
    html.gius-dark .gius-att-badge-amber { background: #2d1f00 !important; color: #fbbf24 !important; border-color: #78350f !important; }
    html.gius-dark .gius-att-detail-row td { background: #1e2050 !important; color: #e0e7ff !important; border-top-color: #4338ca !important; border-left-color: #818cf8 !important; }
    html.gius-dark .gius-att-detail-label { color: #a5b4fc !important; }
    /* ── Idle / fetch state ─────────────────────────────────────────── */
    .gius-att-idle { display: flex; align-items: center; gap: 10px; padding: 4px 0; }
    .gius-att-idle-text { font-size: 12px; color: #6b7280; }
    .gius-att-fetch-btn {
        height: 28px; padding: 0 14px; border-radius: 6px;
        font-size: 12px; font-weight: 700; cursor: pointer;
        border: none; background: #ffc107; color: #272c33;
        display: inline-flex; align-items: center; gap: 4px;
    }
    .gius-att-fetch-btn:hover { background: #e6ac00; }
    html.gius-dark .gius-att-idle-text { color: #a6adc8 !important; }
    `;
            document.head.appendChild(style);
        }

        // Creates and returns the panel DOM element (not yet inserted into the page).
        function buildPanel(groupLabel) {
            const panel = document.createElement('div');
            panel.className = 'gius-att-panel';
            panel.innerHTML = `
            <div class="gius-att-header">
                <span class="gius-att-title"><i class="fa fa-chevron-down gius-att-chevron"></i>Group Attendance Report — <strong>${groupLabel}</strong></span>
                <span class="gius-att-meta"></span>
                <button class="gius-att-refresh" type="button"><i class="fa fa-refresh"></i> Refresh</button>
            </div>
            <div class="gius-att-body">
                <div class="gius-att-progress" hidden>
                    <div class="gius-att-progress-bar">
                        <div class="gius-att-progress-fill"></div>
                    </div>
                    <span class="gius-att-progress-text">Preparing…</span>
                </div>
                <div class="gius-att-idle" hidden>
                    <span class="gius-att-idle-text">Attendance data not loaded.</span>
                    <button class="gius-att-fetch-btn" type="button">Fetch</button>
                </div>
                <div class="gius-att-error" hidden></div>
                <div class="gius-att-report" hidden>
                    <div class="gius-att-stats"></div>
                    <div class="gius-att-atrisk" hidden>
                        <div class="gius-att-atrisk-title">AT-RISK STUDENTS (Level 2+)</div>
                        <table class="gius-att-atrisk-table">
                            <thead><tr>
                                <th>Level</th><th>Name</th><th>ID</th><th>Absent</th><th>%</th>
                            </tr></thead>
                            <tbody class="gius-att-atrisk-body"></tbody>
                        </table>
                    </div>
                </div>
            </div>`;
            return panel;
        }

        function showIdle(panel) {
            panel.querySelector('.gius-att-idle').hidden     = false;
            panel.querySelector('.gius-att-progress').hidden = true;
            panel.querySelector('.gius-att-error').hidden    = true;
            panel.querySelector('.gius-att-report').hidden   = true;
            panel.querySelector('.gius-att-meta').textContent = '';
        }

        function showProgress(panel, done, total) {
            panel.querySelector('.gius-att-idle').hidden     = true;
            panel.querySelector('.gius-att-progress').hidden = false;
            panel.querySelector('.gius-att-error').hidden    = true;
            panel.querySelector('.gius-att-report').hidden   = true;

            const pct  = total > 0 ? Math.round((done / total) * 100) : 0;
            panel.querySelector('.gius-att-progress-fill').style.width = `${pct}%`;
            panel.querySelector('.gius-att-progress-text').textContent =
                `${done} / ${total} sessions scraped…`;
            panel.querySelector('.gius-att-meta').textContent = '';
        }

        function showError(panel, message) {
            panel.querySelector('.gius-att-idle').hidden     = true;
            panel.querySelector('.gius-att-progress').hidden = true;
            panel.querySelector('.gius-att-error').hidden    = false;
            panel.querySelector('.gius-att-report').hidden   = true;

            panel.querySelector('.gius-att-error').textContent = message;
            panel.querySelector('.gius-att-meta').textContent  = '';
        }

        function renderReport(panel, report, { ts, sessions, overridesKey }) {
            panel.querySelector('.gius-att-idle').hidden     = true;
            panel.querySelector('.gius-att-progress').hidden = true;
            panel.querySelector('.gius-att-error').hidden    = true;
            panel.querySelector('.gius-att-report').hidden   = false;

            // Header meta line
            const scrapedNote = report.errorCount > 0
                ? `${report.eligibleCount}/${sessions.length} sessions (${report.errorCount} failed)`
                : `${sessions.length} sessions`;
            panel.querySelector('.gius-att-meta').textContent =
                `${scrapedNote} · cached ${formatCacheAge(ts)}`;

            // Stats
            const pct = n => `${(n * 100).toFixed(1)}%`;
            panel.querySelector('.gius-att-stats').innerHTML = `
            <span class="gius-att-stat"><span class="gius-att-stat-val">${report.total}</span> students</span>
            <span class="gius-att-stat"><span class="gius-att-stat-val">${report.levelCounts[0] + report.levelCounts[1]}</span> OK / Level 1</span>
            <span class="gius-att-stat"><span class="gius-att-stat-val">${report.levelCounts[2]}</span> Second Warning</span>
            <span class="gius-att-stat"><span class="gius-att-stat-val">${report.levelCounts[3]}</span> Drop</span>
            <span class="gius-att-stat">Group avg: <span class="gius-att-stat-val">${pct(report.avgRate)}</span> absent</span>
            ${report.unrecordedCount > 0 ? `<span class="gius-att-stat" style="opacity:.7">(${report.unrecordedCount} unrecorded sessions excluded)</span>` : ''}
        `;

            // At-risk table
            const atRiskEl = panel.querySelector('.gius-att-atrisk');
            if (report.atRisk.length === 0) {
                atRiskEl.hidden = true;
                return;
            }
            atRiskEl.hidden = false;
            const tbody = panel.querySelector('.gius-att-atrisk-body');
            tbody.innerHTML = report.atRisk.map((s, idx) => {
                const rule      = LEVEL_RULES.find(r => r.level === s.level);
                const pillCls   = s.level === 3 ? 'gius-att-badge-red' : 'gius-att-badge-amber';
                const absentSess = `${s.absentSessions.length}/${s.sessionCount}`;
                const partial    = s.partialData
                    ? `<span class="gius-att-partial" title="Only ${s.sessionCount} of ${report.eligibleCount} sessions found in this group — student may have attended another group's session(s). Actual absence rate could be lower.">⚠ ${s.sessionCount}/${report.eligibleCount}</span>`
                    : '';
                return `<tr class="gius-att-data-row" data-idx="${idx}">
                <td><span class="gius-att-badge ${pillCls}">${rule.badge}</span></td>
                <td>${s.name}${partial}</td>
                <td>${s.id}</td>
                <td>${absentSess}</td>
                <td>${pct(s.absenceRate)}</td>
            </tr>`;
            }).join('');

            // overrides: studentId:sessionId → 'attended' | 'absent' | 'onHold' — persisted in localStorage
            const overrides = overridesKey ? loadOverrides(overridesKey, sessions) : new Map();

            function computeAdjusted(student) {
                let extraTotal = 0, extraAbsent = 0, extraTotalSess = 0, extraAbsentSess = 0;
                (student.missingSessions || []).forEach(sess => {
                    const state = overrides.get(`${student.id}:${sess.id}`) ?? null;
                    if (state === null || state === 'onHold') return;
                    extraTotal += sess.durationHours;
                    extraTotalSess++;
                    if (state === 'absent') { extraAbsent += sess.durationHours; extraAbsentSess++; }
                });
                const adjTotal      = student.totalHours + extraTotal;
                const adjAbsent     = student.absentHours + extraAbsent;
                const adjRate       = adjTotal > 0 ? adjAbsent / adjTotal : 0;
                const adjTotalSess  = student.sessionCount + extraTotalSess;
                const adjAbsentSess = student.absentSessions.length + extraAbsentSess;
                return { adjTotal, adjAbsent, adjRate, adjLevel: classifyLevel(adjRate), adjTotalSess, adjAbsentSess };
            }

            function refreshDataRow(dataTr, student) {
                const adj     = computeAdjusted(student);
                const rule    = LEVEL_RULES.find(r => r.level === adj.adjLevel);
                const pillCls = adj.adjLevel === 3 ? 'gius-att-badge-red' : 'gius-att-badge-amber';
                const tds     = dataTr.querySelectorAll('td');
                tds[0].innerHTML = `<span class="gius-att-badge ${pillCls}">${rule.badge}</span>`;
                tds[3].textContent = `${adj.adjAbsentSess}/${adj.adjTotalSess}`;
                tds[4].textContent = pct(adj.adjRate);
                const adjEl = dataTr.nextElementSibling && dataTr.nextElementSibling.querySelector('[data-adjusted]');
                if (adjEl) adjEl.textContent = `Adjusted: ${adj.adjAbsentSess}/${adj.adjTotalSess} sessions = ${pct(adj.adjRate)} → ${rule.label}`;
            }

            function buildDetailHtml(student) {
                const items = (student.absentSessions || [])
                    .map(s => `<li>${fmtSessionDate(s.date)} · ${s.durationHours}h</li>`)
                    .join('');
                const absentHtml = student.absentSessions.length
                    ? `<span class="gius-att-detail-label">Absent sessions (${student.absentSessions.length}):</span>
                       <ul class="gius-att-detail-list">${items}</ul>`
                    : '';

                let missingHtml = '';
                if (student.partialData && (student.missingSessions || []).length) {
                    const adj  = computeAdjusted(student);
                    const rule = LEVEL_RULES.find(r => r.level === adj.adjLevel);
                    const missItems = student.missingSessions.map(sess => {
                        const state = overrides.get(`${student.id}:${sess.id}`) ?? null;
                        return `<div class="gius-att-missing-item"
                                     data-sid="${student.id}" data-session-id="${sess.id}" data-hours="${sess.durationHours}">
                            <span class="gius-att-missing-date">${fmtSessionDate(sess.date)} · ${sess.durationHours}h</span>
                            <div class="gius-att-miss-grp">
                                <button type="button" class="gius-att-miss-btn${state === 'attended' ? ' active' : ''}" data-val="attended">✓ Attended</button>
                                <button type="button" class="gius-att-miss-btn${state === 'absent'   ? ' active' : ''}" data-val="absent">✗ Absent</button>
                                <button type="button" class="gius-att-miss-btn${state === 'onHold'   ? ' active' : ''}" data-val="onHold">⏸ On Hold</button>
                            </div>
                        </div>`;
                    }).join('');
                    missingHtml = `<div class="gius-att-missing-section">
                        <span class="gius-att-detail-label" style="color:#d97706">Missing sessions — mark attendance:</span>
                        ${missItems}
                        <div class="gius-att-adjusted" data-adjusted>Adjusted: ${adj.adjAbsentSess}/${adj.adjTotalSess} sessions = ${pct(adj.adjRate)} → ${rule.label}</div>
                    </div>`;
                }
                return `<td colspan="5">${absentHtml}${missingHtml}</td>`;
            }

            tbody.onclick = e => {
                // Toggle button inside missing-session section
                const btn = e.target.closest('.gius-att-miss-btn');
                if (btn) {
                    const item      = btn.closest('.gius-att-missing-item');
                    const studentId = item.dataset.sid;
                    const sessId    = item.dataset.sessionId;
                    overrides.set(`${studentId}:${sessId}`, btn.dataset.val);
                    if (overridesKey) saveOverrides(overridesKey, overrides, sessions);
                    item.querySelectorAll('.gius-att-miss-btn').forEach(b =>
                        b.classList.toggle('active', b.dataset.val === btn.dataset.val));
                    const dataTr  = item.closest('tr.gius-att-detail-row').previousElementSibling;
                    const idx     = parseInt(dataTr.dataset.idx, 10);
                    refreshDataRow(dataTr, report.atRisk[idx]);
                    return;
                }

                // Expand / collapse row
                const tr = e.target.closest('tr.gius-att-data-row');
                if (!tr) return;
                const idx     = parseInt(tr.dataset.idx, 10);
                const student = report.atRisk[idx];
                if (!student) return;
                const existing = tr.nextElementSibling;
                if (existing && existing.classList.contains('gius-att-detail-row')) {
                    existing.remove();
                    return;
                }
                const detailTr = document.createElement('tr');
                detailTr.className = 'gius-att-detail-row';
                detailTr.innerHTML = buildDetailHtml(student);
                tr.insertAdjacentElement('afterend', detailTr);
            };

            // Apply any saved overrides to the already-rendered rows immediately
            report.atRisk.forEach((student, idx) => {
                if (!student.partialData) return;
                const hasOverride = (student.missingSessions || []).some(sess =>
                    overrides.has(`${student.id}:${sess.id}`));
                if (!hasOverride) return;
                const dataTr = tbody.querySelector(`tr[data-idx="${idx}"]`);
                if (dataTr) refreshDataRow(dataTr, student);
            });
        }

        // Finds the best insertion point and inserts panel. Returns panel element or null.
        function mountPanel(groupLabel) {
            const studentTable = document.getElementById('MainContent_DG_StudentAttendance');
            const sessionInfoEl = document.getElementById('MainContent_L_SessionStart');

            const anchor = studentTable
                || sessionInfoEl?.closest('table')?.nextSibling
                || null;

            if (!anchor || !anchor.parentElement) return null;

            injectStyles();
            const panel = buildPanel(groupLabel);
            anchor.parentElement.insertBefore(panel, anchor);
            return panel;
        }

        async function runScrape(signal, panel, sessions, groupId, formState, cacheKey, groupLabel, preloadedSessionId, overridesKey) {
            const worker = async (session) => {
                let result;
                if (session.id === preloadedSessionId) {
                    // This session is already rendered on the page — read DOM directly.
                    // Re-fetching it would send no-change postback → ASP.NET returns empty table.
                    result = parseStudentTable(document);
                } else {
                    result = await fetchSessionStudents(session.id, groupId, formState, signal);
                }
                if (Array.isArray(result)) {
                    // On Hold / Compensation: portal counts hours in denominator but no absences
                    if (session.status === 'onHold' || session.status === 'compensation') {
                        return result.map(s => ({ ...s, attended: true }));
                    }
                    return isUnrecorded(result) ? 'unrecorded' : result;
                }
                if (result && result.error === 'expired') return { error: 'expired' };
                return null;
            };

            const rawResults = await runPool(sessions, worker, {
                maxConcurrent: MAX_CONCURRENT,
                signal,
                onProgress: (done, total) => {
                    if (!signal.aborted) showProgress(panel, done, total);
                },
            });

            if (signal.aborted) return;

            if (rawResults.some(r => r && r.error === 'expired')) {
                showError(panel, 'Session may have expired — please reload the page.');
                return;
            }

            const report = buildReport(sessions, rawResults);
            writeCache(cacheKey, { report, sessions, groupLabel });
            renderReport(panel, report, { ts: Date.now(), sessions, overridesKey });
        }

        function init() {
            const groupDdl   = document.getElementById('MainContent_DDL_StudentGroup');
            const sessionDdl = document.getElementById('MainContent_DDL_Sessions');
            if (!groupDdl || !sessionDdl) return;

            const groupId    = groupDdl.value;
            const groupLabel = groupDdl.options[groupDdl.selectedIndex]?.textContent?.trim() ?? '';
            if (!groupId || groupId === '0') return;

            const sessions = parseSessionOptions(sessionDdl);
            if (!sessions.length) return;

            const panel = mountPanel(groupLabel);
            if (!panel) return;

            const cacheKey          = makeCacheKey(groupId, sessions);
            const overridesKey      = makeOverridesKey(groupId, sessions);
            const formState         = snapshotForm();
            const selectedSessionId = sessionDdl.value !== '0' ? sessionDdl.value : null;

            function startScrape() {
                if (_abortCtrl) _abortCtrl.abort();
                _abortCtrl = new AbortController();
                showProgress(panel, 0, sessions.length);
                runScrape(_abortCtrl.signal, panel, sessions, groupId, formState, cacheKey, groupLabel, selectedSessionId, overridesKey);
            }

            panel.querySelector('.gius-att-header').addEventListener('click', e => {
                if (e.target.closest('button, input, a')) return;
                panel.classList.toggle('gius-att-collapsed');
            });

            panel.querySelector('.gius-att-refresh').addEventListener('click', () => {
                clearCacheEntry(cacheKey);
                clearOverrides(overridesKey);
                startScrape();
            });

            panel.querySelector('.gius-att-fetch-btn').addEventListener('click', startScrape);

            const cached = readCache(cacheKey);
            if (cached && cached.report && cached.sessions) {
                renderReport(panel, cached.report, { ts: cached.ts, sessions: cached.sessions, overridesKey });
            } else {
                showIdle(panel);
            }
        }

        init();
    })();
