    // ==UserScript==
    // @name        GIU Student Attendance Levels
    // @description Fast local absence calc + optional portal sync to verify levels
    // @match       https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx*
    // @namespace   ramin0
    // @version     1.1
    // @author      Mo.Elmaadawy
    // @run-at      document-idle
    // @grant       none
    // ==/UserScript==

    (function () {
        'use strict';

        const PAGE_URL    = 'https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx';
        const REPORT_URL  = 'https://portal.giu-uni.de/GIUb/INTStaff/StudentAttendanceReport_m.aspx';
        const CACHE_PFX   = 'giuAttLvlV1_';
        const SYNC_PFX    = 'giuAttLvlSync_';
        const MAX_LOCAL   = 5;   // concurrent session fetches (same-page ASP.NET — keep low)
        const MAX_SYNC    = 20;  // concurrent portal fetches (different page)

        const LEVEL_RULES = [
            { min: 0.25, exclusive: true,  level: 3 },
            { min: 0.20, exclusive: false, level: 2 },
            { min: 0.10, exclusive: false, level: 1 },
            { min: 0,    exclusive: false, level: 0 },
        ];
        const LEVEL_BADGE = [
            { label: 'OK',          bg: '#dcfce7', color: '#166534', border: '#86efac', darkBg: '#052e16', darkColor: '#4ade80', darkBorder: '#166534' },
            { label: '1st Warning', bg: '#fef3c7', color: '#92400e', border: '#fcd34d', darkBg: '#2d1f00', darkColor: '#fbbf24', darkBorder: '#78350f' },
            { label: '2nd Warning', bg: '#fef3c7', color: '#92400e', border: '#fcd34d', darkBg: '#2d1f00', darkColor: '#fbbf24', darkBorder: '#78350f' },
            { label: 'DROP',        bg: '#fee2e2', color: '#b91c1c', border: '#fca5a5', darkBg: '#3d1218', darkColor: '#f38ba8', darkBorder: '#7f1d1d' },
        ];

        // ── Helpers ────────────────────────────────────────────────────────────

        function classifyLevel(rate) {
            for (const r of LEVEL_RULES) {
                if (r.exclusive ? rate > r.min : rate >= r.min) return r.level;
            }
            return 0;
        }

        function parseSessionOptions(ddl) {
            return Array.from(ddl.options)
                .filter(o => o.value && o.value !== '0')
                .map(o => {
                    const t    = o.textContent;
                    const dateM = t.match(/@(\d{4})\.(\d{2})\.(\d{2})/);
                    const durM  = t.match(/\b(\d+)h\b/i);
                    const status = /On Hold/i.test(t)     ? 'onHold'
                                 : /Compensation/i.test(t) ? 'compensation'
                                 : 'regular';
                    return {
                        id:    o.value,
                        label: t.trim(),
                        date:  dateM ? `${dateM[1]}-${dateM[2]}-${dateM[3]}` : null,
                        status,
                        durationHours: durM ? parseInt(durM[1], 10) : 2,
                    };
                });
        }

        function extractSeasonYear(sessions) {
            if (!sessions.length) return 'unknown';
            const m = sessions[0].label.match(/([A-Za-z]+)\s+(\d{4})/);
            return m ? `${m[1][0].toUpperCase()}${m[2]}` : 'unknown';
        }

        function extractCourseCode(sessions) {
            for (const s of sessions) {
                const m = s.label.match(/- ([A-Z]{2,8}\s\d{3,4}[A-Za-z]?) -/);
                if (m) return m[1];
            }
            return null;
        }

        function snapshotForm() {
            const v = id => document.getElementById(id)?.value ?? '';
            return {
                __VIEWSTATE:          v('__VIEWSTATE'),
                __VIEWSTATEGENERATOR: v('__VIEWSTATEGENERATOR'),
                __EVENTVALIDATION:    v('__EVENTVALIDATION'),
                __SCROLLPOSITIONX:    '0',
                __SCROLLPOSITIONY:    '0',
            };
        }

        function parseStudentTable(doc) {
            const tbl = doc.getElementById('MainContent_DG_StudentAttendance');
            if (!tbl) return [];
            return Array.from(tbl.querySelectorAll('tr')).slice(1).map(tr => {
                const tds = tr.querySelectorAll('td');
                if (tds.length < 4) return null;
                const cb = tds[1].querySelector('input[type="checkbox"]');
                return { id: tds[2].textContent.trim(), name: tds[3].textContent.trim(), attended: cb?.checked ?? false };
            }).filter(Boolean);
        }

        // ── Session fetch ──────────────────────────────────────────────────────

        async function fetchSessionStudents(sessionId, groupId, form, signal) {
            const body = new URLSearchParams({
                __EVENTTARGET:                         'ctl00$MainContent$DDL_Sessions',
                __EVENTARGUMENT:                       '',
                __LASTFOCUS:                           '',
                __VIEWSTATE:                           form.__VIEWSTATE,
                __VIEWSTATEGENERATOR:                  form.__VIEWSTATEGENERATOR,
                __EVENTVALIDATION:                     form.__EVENTVALIDATION,
                __SCROLLPOSITIONX:                     form.__SCROLLPOSITIONX,
                __SCROLLPOSITIONY:                     form.__SCROLLPOSITIONY,
                'ctl00$MainContent$H_AlertText':       '',
                'ctl00$MainContent$DDL_StudentGroup':  groupId,
                'ctl00$MainContent$DDL_Sessions':      sessionId,
            });
            let resp;
            try {
                resp = await fetch(PAGE_URL, {
                    method: 'POST', credentials: 'include',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: body.toString(), signal,
                });
            } catch (e) {
                return { error: e.name === 'AbortError' ? 'aborted' : 'network' };
            }
            if (!resp.ok) return { error: 'network' };
            const html = await resp.text();
            if (html.includes('Login_m.aspx') || html.includes('id="LoginPage"')) return { error: 'expired' };
            return parseStudentTable(new DOMParser().parseFromString(html, 'text/html'));
        }

        // ── Pool ───────────────────────────────────────────────────────────────

        function runPool(tasks, worker, { maxConcurrent = 5, onProgress, signal } = {}) {
            return new Promise(resolve => {
                if (!tasks.length) { resolve([]); return; }
                let running = 0, index = 0, done = 0;
                const results = new Array(tasks.length);
                function next() {
                    if (signal?.aborted) { if (running === 0) resolve(results); return; }
                    while (running < maxConcurrent && index < tasks.length) {
                        const i = index++;
                        running++;
                        worker(tasks[i], i)
                            .then(r => { results[i] = r; })
                            .catch(() => { results[i] = null; })
                            .finally(() => {
                                running--; done++;
                                if (onProgress) onProgress(done, tasks.length);
                                if (signal?.aborted) { if (running === 0) resolve(results); }
                                else if (index < tasks.length) next();
                                else if (running === 0) resolve(results);
                            });
                    }
                }
                next();
            });
        }

        // ── Local report builder ───────────────────────────────────────────────

        function buildReport(sessions, sessionResults) {
            const map = new Map();
            const eligible = sessions.filter((_, i) => Array.isArray(sessionResults[i]));

            sessions.forEach((sess, i) => {
                const result = sessionResults[i];
                if (!Array.isArray(result)) return;

                // On Hold / Compensation — count as attended for everyone
                const isExcluded = sess.status === 'onHold' || sess.status === 'compensation';
                const list = isExcluded
                    ? result.map(s => ({ ...s, attended: true }))
                    : result;

                // Skip fully unrecorded sessions (all absent)
                if (!isExcluded && result.length > 0 && result.every(s => !s.attended)) return;

                list.forEach(student => {
                    if (!map.has(student.id)) {
                        map.set(student.id, { id: student.id, name: student.name, absentSess: 0, totalSess: 0 });
                    }
                    const s = map.get(student.id);
                    s.totalSess++;
                    if (!student.attended) s.absentSess++;
                });
            });

            return Array.from(map.values()).map(s => {
                const rate  = s.totalSess > 0 ? s.absentSess / s.totalSess : 0;
                const level = classifyLevel(rate);
                return { ...s, rate, level, portalLevel: null };
            }).sort((a, b) => b.rate - a.rate);
        }

        // ── Portal sync ────────────────────────────────────────────────────────

        async function getReportAspFields() {
            const res = await fetch(REPORT_URL, { credentials: 'include' });
            if (!res.ok) throw new Error(`${res.status}`);
            const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
            const v   = id => doc.getElementById(id)?.value ?? '';
            return {
                __VIEWSTATE:          v('__VIEWSTATE'),
                __VIEWSTATEGENERATOR: v('__VIEWSTATEGENERATOR'),
                __EVENTVALIDATION:    v('__EVENTVALIDATION'),
                season:               v('MainContent_DDL_Season_id'),
            };
        }

        async function fetchPortalLevel(studentId, asp, courseCode) {
            const body = new URLSearchParams({
                '__VIEWSTATE':                              asp.__VIEWSTATE,
                '__VIEWSTATEGENERATOR':                     asp.__VIEWSTATEGENERATOR,
                '__EVENTVALIDATION':                        asp.__EVENTVALIDATION,
                'ctl00$MainContent$TB_GIUAS_StudentId':     studentId,
                'ctl00$MainContent$DDL_Season_id':          asp.season,
                'ctl00$MainContent$BTN_View':               'View',
                'ctl00$MainContent$SECURITYCODE':           '',
            });
            const res = await fetch(REPORT_URL, {
                method: 'POST', credentials: 'include',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body.toString(),
            });
            if (!res.ok) return null;
            const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
            for (const tr of doc.querySelectorAll('table tr')) {
                const tds = tr.querySelectorAll('td');
                if (tds.length < 4) continue;
                if (tds[1].textContent.trim() === courseCode) {
                    const lvl = parseInt(tds[3].textContent.trim(), 10);
                    return isNaN(lvl) ? null : lvl;
                }
            }
            return null;
        }

        // ── Cache ──────────────────────────────────────────────────────────────

        function cacheKey(groupId, seasonYear)      { return `${CACHE_PFX}${groupId}_${seasonYear}`; }
        function syncCacheKey(groupId, seasonYear)  { return `${SYNC_PFX}${groupId}_${seasonYear}`; }
        function readCache(key)   { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } }
        function writeCache(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }
        function clearCache(key)  { try { localStorage.removeItem(key); } catch {} }

        // ── UI ─────────────────────────────────────────────────────────────────

        function giusSlideDown(el) {
            el.style.cssText += ';overflow:hidden;max-height:0;transition:max-height .35s ease';
            requestAnimationFrame(() => { el.style.maxHeight = el.scrollHeight + 1000 + 'px'; });
        }

        function badge(level) {
            if (level === null) return `<span style="color:#6b7280;font-size:12px">—</span>`;
            const m   = LEVEL_BADGE[level] ?? { label: `L${level}`, bg: '#e5e7eb', color: '#374151', border: '#d1d5db', darkBg: '#1f2937', darkColor: '#9ca3af', darkBorder: '#374151' };
            const dark = document.documentElement.classList.contains('gius-dark');
            const bg     = dark ? m.darkBg     : m.bg;
            const color  = dark ? m.darkColor  : m.color;
            const border = dark ? m.darkBorder : m.border;
            return `<span style="background:${bg};color:${color};border:1px solid ${border};padding:2px 10px;border-radius:999px;font-size:11px;font-weight:600;white-space:nowrap">${m.label}</span>`;
        }

        function renderTable(students, syncDone) {
            const isDark = document.documentElement.classList.contains('gius-dark');
            const thBg   = isDark ? '#1a1f2b' : '#f3f4f6';
            const rowA   = isDark ? '#1a1f2b' : '#f9fafb';
            const rowB   = isDark ? '#252b38' : '#fff';
            const th     = `padding:6px 10px;background:${thBg};font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:#6b7280`;

            const atRisk = students.filter(s => s.level > 0).length;
            const stat   = atRisk
                ? `<p style="margin:0 0 8px;color:#dc2626;font-weight:600">${atRisk} student${atRisk !== 1 ? 's' : ''} at risk (local)</p>`
                : `<p style="margin:0 0 8px;color:#16a34a;font-weight:600">All clear (local)</p>`;

            const portalCol = syncDone
                ? `<th style="${th};text-align:center">Portal</th>`
                : `<th style="${th};text-align:center;color:#94a3b8">Portal</th>`;

            const rows = students.map((s, i) => {
                const bg      = i % 2 === 0 ? rowA : rowB;
                const pct     = (s.rate * 100).toFixed(1);
                const mismatch = syncDone && s.portalLevel !== null && s.portalLevel !== s.level;
                const rowStyle = mismatch ? `background:${isDark ? '#3b1f00' : '#fffbeb'}` : `background:${bg}`;

                let portalCell;
                if (!syncDone) {
                    portalCell = `<td id="gius-portal-${s.id}" style="padding:6px 10px;text-align:center;color:#94a3b8">—</td>`;
                } else if (mismatch) {
                    portalCell = `<td style="padding:6px 10px;text-align:center" title="Local: ${LEVEL_BADGE[s.level]?.label} · Portal: ${LEVEL_BADGE[s.portalLevel]?.label}">${badge(s.portalLevel)} ⚠</td>`;
                } else {
                    portalCell = `<td style="padding:6px 10px;text-align:center">${badge(s.portalLevel)}</td>`;
                }

                return `<tr style="${rowStyle}" data-student-id="${s.id}">
                    <td style="padding:6px 10px;text-align:center">${badge(s.level)}</td>
                    <td style="padding:6px 10px">${s.name}</td>
                    <td style="padding:6px 10px;color:#6b7280">${s.id}</td>
                    <td style="padding:6px 10px;text-align:center">${s.absentSess}/${s.totalSess}</td>
                    <td style="padding:6px 10px;text-align:right">${pct}%</td>
                    ${portalCell}
                </tr>`;
            }).join('');

            return `${stat}<table style="width:100%;border-collapse:collapse;font-size:13px">
                <thead><tr>
                    <th style="${th};text-align:center;width:100px">Local Level</th>
                    <th style="${th}">Name</th>
                    <th style="${th}">ID</th>
                    <th style="${th};text-align:center">Absent</th>
                    <th style="${th};text-align:right">%</th>
                    ${portalCol}
                </tr></thead>
                <tbody>${rows}</tbody>
            </table>`;
        }

        function buildCard() {
            const isDark  = document.documentElement.classList.contains('gius-dark');
            const cardBg  = isDark ? '#1e2329' : '#fff';
            const textCol = isDark ? '#e0e7ff' : '#1f2937';

            const wrap = document.createElement('div');
            wrap.id = 'gius-levels-card';
            wrap.style.cssText = `font-family:'Open Sans',sans-serif;font-size:14px;margin:16px 0;border-radius:6px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.18)`;

            wrap.innerHTML = `
<div id="gius-levels-hdr" style="background:#272c33;color:#f1f5f9;padding:10px 16px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;border-bottom:3px solid #ffc107;user-select:none">
  <span style="font-weight:600;font-size:15px">Student Absence Levels</span>
  <div style="display:flex;align-items:center;gap:8px">
    <span id="gius-levels-status" style="font-size:12px;color:#94a3b8"></span>
    <button id="gius-levels-sync"    type="button" style="background:#3b82f6;color:#fff;border:none;border-radius:4px;padding:4px 10px;font-size:12px;font-weight:600;cursor:pointer;display:none">Sync Portal</button>
    <button id="gius-levels-refresh" type="button" style="background:#ffc107;color:#1f2937;border:none;border-radius:4px;padding:4px 10px;font-size:12px;font-weight:600;cursor:pointer">Refresh</button>
    <span id="gius-levels-chevron" style="transition:transform .25s;font-size:16px;display:inline-block">▾</span>
  </div>
</div>
<div id="gius-levels-body" style="background:${cardBg};color:${textCol};padding:12px 16px">
  <div id="gius-levels-content" style="color:#6b7280">Select a group to load absence levels.</div>
</div>`;

            const hdr  = wrap.querySelector('#gius-levels-hdr');
            const body = wrap.querySelector('#gius-levels-body');
            const chev = wrap.querySelector('#gius-levels-chevron');
            hdr.addEventListener('click', e => {
                if (e.target.closest('button')) return;
                const collapsed = body.style.display === 'none';
                body.style.display = collapsed ? '' : 'none';
                chev.style.transform = collapsed ? '' : 'rotate(-90deg)';
            });

            return wrap;
        }

        // ── State ──────────────────────────────────────────────────────────────

        let _running  = false;
        let _syncing  = false;
        let _abort    = null;
        let _students = [];   // current report students (for sync to update)
        let _groupId  = null;
        let _seasonY  = null;
        let _courseCode = null;

        // ── Main: local calc ───────────────────────────────────────────────────

        async function runLocal(forceRefresh) {
            if (_running) return;
            _running = true;

            const groupSel   = document.getElementById('MainContent_DDL_StudentGroup');
            const sessionSel = document.getElementById('MainContent_DDL_Sessions');
            const content    = document.getElementById('gius-levels-content');
            const status     = document.getElementById('gius-levels-status');
            const syncBtn    = document.getElementById('gius-levels-sync');

            _groupId = groupSel?.value;
            const sessions = sessionSel ? parseSessionOptions(sessionSel) : [];
            _seasonY    = extractSeasonYear(sessions);
            _courseCode = extractCourseCode(sessions);

            if (!_groupId || _groupId === '0' || !sessions.length) {
                content.innerHTML = '<span style="color:#6b7280">Select a group with sessions to load.</span>';
                status.textContent = '';
                if (syncBtn) syncBtn.style.display = 'none';
                _running = false;
                return;
            }

            const key = cacheKey(_groupId, _seasonY);

            if (!forceRefresh) {
                const cached = readCache(key);
                const sessionCountChanged = cached && cached.sessionCount !== sessions.length;
                if (sessionCountChanged) {
                    clearCache(key);
                    clearCache(syncCacheKey(_groupId, _seasonY));
                } else if (cached?.students) {
                    _students = cached.students;
                    // Restore any cached sync results
                    const syncCached = readCache(syncCacheKey(_groupId, _seasonY));
                    if (syncCached) {
                        const syncMap = new Map(Object.entries(syncCached));
                        _students.forEach(s => { s.portalLevel = syncMap.get(s.id) ?? null; });
                    }
                    const hasSyncData = _students.some(s => s.portalLevel !== null);
                    content.innerHTML = renderTable(_students, hasSyncData);
                    status.textContent = 'cached';
                    if (syncBtn) syncBtn.style.display = '';
                    _running = false;
                    return;
                }
            }

            // Fetch all sessions
            status.textContent = 'fetching…';
            content.innerHTML  = `<span style="color:#6b7280">Fetching ${sessions.length} sessions…</span>`;
            if (syncBtn) syncBtn.style.display = 'none';

            if (_abort) _abort.abort();
            _abort = new AbortController();
            const { signal } = _abort;

            const form = snapshotForm();
            let done   = 0;

            const sessionResults = await runPool(sessions, (sess) =>
                fetchSessionStudents(sess.id, _groupId, form, signal),
            {
                maxConcurrent: MAX_LOCAL,
                signal,
                onProgress: (d, t) => { done = d; status.textContent = `${d}/${t} sessions`; },
            });

            if (signal.aborted) { _running = false; return; }

            _students = buildReport(sessions, sessionResults);
            writeCache(key, { students: _students, sessionCount: sessions.length });
            content.innerHTML  = renderTable(_students, false);
            status.textContent = `${_students.length} students`;
            if (syncBtn) syncBtn.style.display = _courseCode ? '' : 'none';
            _running = false;
        }

        // ── Portal sync ────────────────────────────────────────────────────────

        async function runSync() {
            if (_syncing || !_students.length || !_courseCode) return;
            _syncing = true;

            const content = document.getElementById('gius-levels-content');
            const status  = document.getElementById('gius-levels-status');
            const syncBtn = document.getElementById('gius-levels-sync');
            if (syncBtn) { syncBtn.disabled = true; syncBtn.textContent = 'Syncing…'; }

            let asp;
            try {
                asp = await getReportAspFields();
            } catch (e) {
                status.textContent = `Sync failed: ${e.message}`;
                if (syncBtn) { syncBtn.disabled = false; syncBtn.textContent = 'Sync Portal'; }
                _syncing = false;
                return;
            }

            let done = 0;
            const total = _students.length;
            const syncMap = new Map();

            await runPool(_students, async (student, idx) => {
                const lvl = await fetchPortalLevel(student.id, asp, _courseCode);
                _students[idx].portalLevel = lvl;
                syncMap.set(student.id, lvl);

                // Update just this row's portal cell in-place
                const cell = document.getElementById(`gius-portal-${student.id}`);
                if (cell) {
                    cell.removeAttribute('id');
                    cell.style.textAlign = 'center';
                    cell.style.padding   = '6px 10px';
                    cell.innerHTML       = badge(lvl);
                }
            }, {
                maxConcurrent: MAX_SYNC,
                onProgress: (d) => { done = d; status.textContent = `sync ${d}/${total}`; },
            });

            // Cache sync results
            if (_groupId && _seasonY) {
                writeCache(syncCacheKey(_groupId, _seasonY), Object.fromEntries(syncMap));
            }

            // Re-render to apply mismatch highlights
            content.innerHTML = renderTable(_students, true);
            status.textContent = `${total} students · portal synced`;
            if (syncBtn) { syncBtn.disabled = false; syncBtn.textContent = 'Sync Portal'; }
            _syncing = false;
        }

        // ── Init ───────────────────────────────────────────────────────────────

        function inject() {
            if (document.getElementById('gius-levels-card')) return;

            const anchor      = document.getElementById('MainContent_L_SessionStart');
            const insertAfter = anchor?.closest('table')?.nextSibling;
            if (!insertAfter) return;

            const card = buildCard();
            giusSlideDown(card);
            insertAfter.parentNode.insertBefore(card, insertAfter.nextSibling);

            document.getElementById('gius-levels-refresh').addEventListener('click', () => {
                if (_groupId && _seasonY) {
                    clearCache(cacheKey(_groupId, _seasonY));
                    clearCache(syncCacheKey(_groupId, _seasonY));
                }
                runLocal(true);
            });

            document.getElementById('gius-levels-sync').addEventListener('click', runSync);

            const groupSel = document.getElementById('MainContent_DDL_StudentGroup');
            if (groupSel?.value && groupSel.value !== '0') {
                const sessionSel = document.getElementById('MainContent_DDL_Sessions');
                if (parseSessionOptions(sessionSel ?? {options: []}).length) runLocal(false);
            }
        }

        inject();
    })();
