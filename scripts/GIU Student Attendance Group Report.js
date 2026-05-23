    // ==UserScript==
    // @name        GIU Student Attendance Group Report
    // @description Auto-scrapes all sessions for a group and shows absence level report above the student table
    // @match       https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx*
    // @namespace   ramin0
    // @version     1.0
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
            const map = new Map(); // studentId → {id, name, absentHours, totalHours, absentSessions}

            sessions.forEach((session, i) => {
                const result = sessionResults[i];
                // Skip unrecorded, errors, and aborted sessions
                if (!Array.isArray(result)) return;

                result.forEach(student => {
                    if (!map.has(student.id)) {
                        map.set(student.id, { id: student.id, name: student.name, absentHours: 0, totalHours: 0, absentSessions: [] });
                    }
                    const s = map.get(student.id);
                    s.totalHours += session.durationHours;
                    if (!student.attended) {
                        s.absentHours += session.durationHours;
                        s.absentSessions.push({ date: session.date, durationHours: session.durationHours, status: session.status });
                    }
                });
            });

            const students = Array.from(map.values()).map(s => {
                const rate  = s.totalHours > 0 ? s.absentHours / s.totalHours : 0;
                const level = classifyLevel(rate);
                return { ...s, absenceRate: rate, level };
            }).sort((a, b) => b.absenceRate - a.absenceRate);

            const levelCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
            students.forEach(s => levelCounts[s.level]++);

            const atRisk   = students.filter(s => s.level >= 2);
            const avgRate  = students.length > 0
                ? students.reduce((acc, s) => acc + s.absenceRate, 0) / students.length
                : 0;

            const eligibleCount   = sessionResults.filter(r => Array.isArray(r)).length;
            const errorCount      = sessionResults.filter(r => r === null).length;
            const unrecordedCount = sessionResults.filter(r => r === 'unrecorded').length;

            return { students, atRisk, levelCounts, avgRate, eligibleCount, errorCount, unrecordedCount, total: students.length };
        }

        function makeCacheKey(groupId, sessions) {
            return `${CACHE_PREFIX}${groupId}_${extractSeasonYear(sessions)}`;
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
    }
    .gius-att-title { font-size: 14px; font-weight: 700; flex: 1; }
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
    `;
            document.head.appendChild(style);
        }

        // Creates and returns the panel DOM element (not yet inserted into the page).
        function buildPanel(groupLabel) {
            const panel = document.createElement('div');
            panel.className = 'gius-att-panel';
            panel.innerHTML = `
            <div class="gius-att-header">
                <span class="gius-att-title">Group Attendance Report — <strong>${groupLabel}</strong></span>
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
                <div class="gius-att-error" hidden></div>
                <div class="gius-att-report" hidden>
                    <div class="gius-att-stats"></div>
                    <div class="gius-att-atrisk" hidden>
                        <div class="gius-att-atrisk-title">AT-RISK STUDENTS (Level 2+)</div>
                        <table class="gius-att-atrisk-table">
                            <thead><tr>
                                <th>Level</th><th>Name</th><th>ID</th><th>Absent hrs</th><th>%</th>
                            </tr></thead>
                            <tbody class="gius-att-atrisk-body"></tbody>
                        </table>
                    </div>
                </div>
            </div>`;
            return panel;
        }

        function showProgress(panel, done, total) {
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
            panel.querySelector('.gius-att-progress').hidden = true;
            panel.querySelector('.gius-att-error').hidden    = false;
            panel.querySelector('.gius-att-report').hidden   = true;

            panel.querySelector('.gius-att-error').textContent = message;
            panel.querySelector('.gius-att-meta').textContent  = '';
        }

        function renderReport(panel, report, { ts, sessions }) {
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
            <span class="gius-att-stat">● <span class="gius-att-stat-val">${report.total}</span> students</span>
            <span class="gius-att-stat">✓ <span class="gius-att-stat-val">${report.levelCounts[0] + report.levelCounts[1]}</span> OK / Level 1</span>
            <span class="gius-att-stat">⚠ <span class="gius-att-stat-val">${report.levelCounts[2]}</span> Second Warning</span>
            <span class="gius-att-stat">✗ <span class="gius-att-stat-val">${report.levelCounts[3]}</span> Drop</span>
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
                const rule       = LEVEL_RULES.find(r => r.level === s.level);
                const pillCls    = s.level === 3 ? 'gius-att-badge-red' : 'gius-att-badge-amber';
                const absentHrs  = s.totalHours > 0 ? `${s.absentHours}/${s.totalHours}h` : '—';
                return `<tr class="gius-att-data-row" data-idx="${idx}">
                <td><span class="gius-att-badge ${pillCls}">${rule.badge}</span></td>
                <td>${s.name}</td>
                <td>${s.id}</td>
                <td>${absentHrs}</td>
                <td>${pct(s.absenceRate)}</td>
            </tr>`;
            }).join('');

            tbody.onclick = e => {
                const tr = e.target.closest('tr.gius-att-data-row');
                if (!tr) return;
                const idx = parseInt(tr.dataset.idx, 10);
                const student = report.atRisk[idx];
                if (!student) return;
                const existing = tr.nextElementSibling;
                if (existing && existing.classList.contains('gius-att-detail-row')) {
                    existing.remove();
                    return;
                }
                const items = (student.absentSessions || [])
                    .map(s => `<li>${fmtSessionDate(s.date)} · ${s.durationHours}h</li>`)
                    .join('');
                const detailTr = document.createElement('tr');
                detailTr.className = 'gius-att-detail-row';
                detailTr.innerHTML = `<td colspan="5">
                    <span class="gius-att-detail-label">Absent sessions (${student.absentSessions.length}):</span>
                    <ul class="gius-att-detail-list">${items}</ul>
                </td>`;
                tr.insertAdjacentElement('afterend', detailTr);
            };
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

        async function runScrape(signal, panel, sessions, groupId, formState, cacheKey, groupLabel, preloadedSessionId) {
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
            renderReport(panel, report, { ts: Date.now(), sessions });
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
            const formState         = snapshotForm();
            const selectedSessionId = sessionDdl.value !== '0' ? sessionDdl.value : null;

            panel.querySelector('.gius-att-refresh').addEventListener('click', () => {
                if (_abortCtrl) _abortCtrl.abort();
                clearCacheEntry(cacheKey);
                _abortCtrl = new AbortController();
                showProgress(panel, 0, sessions.length);
                runScrape(_abortCtrl.signal, panel, sessions, groupId, formState, cacheKey, groupLabel, selectedSessionId);
            });

            const cached = readCache(cacheKey);
            if (cached && cached.report && cached.sessions) {
                renderReport(panel, cached.report, { ts: cached.ts, sessions: cached.sessions });
            } else {
                showProgress(panel, 0, sessions.length);
            }

            if (_abortCtrl) _abortCtrl.abort();
            _abortCtrl = new AbortController();
            runScrape(_abortCtrl.signal, panel, sessions, groupId, formState, cacheKey, groupLabel, selectedSessionId);
        }

        init();
    })();
