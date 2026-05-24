    // ==UserScript==
    // @name        GIU Student Attendance Levels
    // @description Fetches portal-computed absence levels for every student in the selected group
    // @match       https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx*
    // @namespace   ramin0
    // @version     1.0
    // @author      Mo.Elmaadawy
    // @run-at      document-idle
    // @grant       none
    // ==/UserScript==

    (function () {
        'use strict';

        const REPORT_URL     = 'https://portal.giu-uni.de/GIUb/INTStaff/StudentAttendanceReport_m.aspx';
        const CACHE_PREFIX   = 'giuAttLevelsV1_';
        const MAX_CONCURRENT = 5;

        const LEVEL_META = [
            { badge: 'OK',          bg: '#16a34a', text: '#fff' },
            { badge: '1st Warning', bg: '#d97706', text: '#fff' },
            { badge: '2nd Warning', bg: '#b45309', text: '#fff' },
            { badge: 'DROP',        bg: '#dc2626', text: '#fff' },
        ];

        // ── Helpers ────────────────────────────────────────────────────────────

        function parseCourseCode(sessionLabel) {
            // "Spring 2026  - S26 - INCS 406 - ..." → "INCS 406"
            const m = sessionLabel.match(/- ([A-Z]{2,8}\s\d{3,4}[A-Za-z]?) -/);
            return m ? m[1] : null;
        }

        function getStudents() {
            const tbl = document.getElementById('MainContent_DG_StudentAttendance');
            if (!tbl) return [];
            return Array.from(tbl.querySelectorAll('tr'))
                .slice(1)
                .map(tr => {
                    const tds = tr.querySelectorAll('td');
                    if (tds.length < 4) return null;
                    return { id: tds[2].textContent.trim(), name: tds[3].textContent.trim() };
                })
                .filter(s => s && s.id);
        }

        function getCourseCode() {
            const sel = document.getElementById('MainContent_DDL_Sessions');
            if (!sel) return null;
            for (const opt of sel.options) {
                const code = parseCourseCode(opt.textContent);
                if (code) return code;
            }
            return null;
        }

        function extractAspFields(html) {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const val = id => doc.getElementById(id)?.value ?? '';
            return {
                __VIEWSTATE:          val('__VIEWSTATE'),
                __VIEWSTATEGENERATOR: val('__VIEWSTATEGENERATOR'),
                __EVENTVALIDATION:    val('__EVENTVALIDATION'),
                season:               val('MainContent_DDL_Season_id'),
            };
        }

        function parseLevel(html, courseCode) {
            const doc = new DOMParser().parseFromString(html, 'text/html');
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

        // ── Fetch ──────────────────────────────────────────────────────────────

        async function getAspFields() {
            const res = await fetch(REPORT_URL, { credentials: 'include' });
            if (!res.ok) throw new Error(`Report page ${res.status}`);
            return extractAspFields(await res.text());
        }

        async function fetchLevel(studentId, asp, courseCode) {
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
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body.toString(),
            });
            if (!res.ok) throw new Error(`${res.status}`);
            return parseLevel(await res.text(), courseCode);
        }

        // ── Pool ───────────────────────────────────────────────────────────────

        async function runPool(items, worker, onProgress) {
            let idx = 0;
            async function next() {
                while (idx < items.length) {
                    const i = idx++;
                    await worker(items[i], i);
                    onProgress(i, items.length);
                }
            }
            await Promise.all(Array.from({ length: Math.min(MAX_CONCURRENT, items.length) }, next));
        }

        // ── Cache ──────────────────────────────────────────────────────────────

        function cacheKey(groupId, courseCode) {
            return `${CACHE_PREFIX}${groupId}_${courseCode.replace(' ', '')}`;
        }

        function loadCache(key) {
            try { return JSON.parse(localStorage.getItem(key)); } catch { return null; }
        }

        function saveCache(key, data) {
            try { localStorage.setItem(key, JSON.stringify(data)); } catch {}
        }

        // ── UI ─────────────────────────────────────────────────────────────────

        function giusSlideDown(el) {
            el.style.cssText += ';overflow:hidden;max-height:0;transition:max-height .35s ease';
            requestAnimationFrame(() => { el.style.maxHeight = el.scrollHeight + 'px'; });
            el.addEventListener('transitionend', () => { el.style.maxHeight = ''; el.style.overflow = ''; }, { once: true });
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

        function levelBadge(level) {
            if (level === null) return '<span style="color:#6b7280;font-size:12px">—</span>';
            const m = LEVEL_META[level] ?? { badge: `L${level}`, bg: '#6b7280', text: '#fff' };
            if (level === 0) return `<span style="color:#16a34a;font-size:12px;font-weight:600">OK</span>`;
            return `<span style="background:${m.bg};color:${m.text};padding:2px 9px;border-radius:12px;font-size:11px;font-weight:700">${m.badge}</span>`;
        }

        function renderTable(students) {
            const isDark = document.documentElement.classList.contains('gius-dark');
            const thBg   = isDark ? '#1a1f2b' : '#f3f4f6';
            const rowA   = isDark ? '#1a1f2b' : '#f9fafb';
            const rowB   = isDark ? '#252b38' : '#fff';
            const th     = `padding:6px 10px;background:${thBg};font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:#6b7280`;

            const sorted = [...students].sort((a, b) => (b.level ?? -1) - (a.level ?? -1));
            const atRisk = students.filter(s => s.level > 0).length;

            const stat = atRisk
                ? `<p style="margin:0 0 8px;color:#dc2626;font-weight:600">${atRisk} student${atRisk > 1 ? 's' : ''} at risk</p>`
                : `<p style="margin:0 0 8px;color:#16a34a;font-weight:600">All clear</p>`;

            const rows = sorted.map((s, i) => {
                const bg = i % 2 === 0 ? rowA : rowB;
                return `<tr style="background:${bg}">
                    <td style="padding:6px 10px;text-align:center">${levelBadge(s.level)}</td>
                    <td style="padding:6px 10px">${s.name}</td>
                    <td style="padding:6px 10px;color:#6b7280">${s.id}</td>
                </tr>`;
            }).join('');

            return `${stat}<table style="width:100%;border-collapse:collapse;font-size:13px">
                <thead><tr>
                    <th style="${th};text-align:center;width:110px">Level</th>
                    <th style="${th}">Name</th>
                    <th style="${th}">ID</th>
                </tr></thead>
                <tbody>${rows}</tbody>
            </table>`;
        }

        // ── Main ───────────────────────────────────────────────────────────────

        let _running = false;

        async function run(forceRefresh) {
            if (_running) return;
            _running = true;

            const groupSel  = document.getElementById('MainContent_DDL_StudentGroup');
            const content   = document.getElementById('gius-levels-content');
            const status    = document.getElementById('gius-levels-status');

            const groupId   = groupSel?.value;
            const courseCode = getCourseCode();

            if (!groupId || groupId === '0' || !courseCode) {
                content.innerHTML = '<span style="color:#6b7280">Select a group with sessions to load levels.</span>';
                status.textContent = '';
                _running = false;
                return;
            }

            const students = getStudents();
            if (!students.length) {
                content.innerHTML = '<span style="color:#6b7280">No students found — select a session first.</span>';
                _running = false;
                return;
            }

            const key = cacheKey(groupId, courseCode);
            if (!forceRefresh) {
                const cached = loadCache(key);
                if (cached) {
                    content.innerHTML = renderTable(cached);
                    status.textContent = 'cached';
                    _running = false;
                    return;
                }
            }

            status.textContent = 'loading…';
            content.innerHTML  = `<span style="color:#6b7280">Fetching levels for ${students.length} students (course: ${courseCode})…</span>`;

            let asp;
            try {
                asp = await getAspFields();
            } catch (e) {
                content.innerHTML = `<span style="color:#dc2626">Failed to load report page: ${e.message}</span>`;
                _running = false;
                return;
            }

            if (!asp.season) {
                content.innerHTML = '<span style="color:#dc2626">Could not read season from report page.</span>';
                _running = false;
                return;
            }

            const results = students.map(s => ({ ...s, level: null }));
            let done = 0;

            await runPool(students, async (student, idx) => {
                try {
                    results[idx].level = await fetchLevel(student.id, asp, courseCode);
                } catch {
                    results[idx].level = null;
                }
            }, () => {
                done++;
                status.textContent = `${done}/${students.length}`;
            });

            saveCache(key, results);
            content.innerHTML  = renderTable(results);
            status.textContent = `${students.length} students · ${courseCode}`;
            _running = false;
        }

        // ── Init ───────────────────────────────────────────────────────────────

        function inject() {
            if (document.getElementById('gius-levels-card')) return;

            const anchor = document.getElementById('MainContent_L_SessionStart');
            const insertAfter = anchor?.closest('table')?.nextSibling;
            if (!insertAfter) return;

            const card = buildCard();
            giusSlideDown(card);
            insertAfter.parentNode.insertBefore(card, insertAfter.nextSibling);

            document.getElementById('gius-levels-refresh').addEventListener('click', () => {
                const groupId    = document.getElementById('MainContent_DDL_StudentGroup')?.value;
                const courseCode = getCourseCode();
                if (groupId && courseCode) localStorage.removeItem(cacheKey(groupId, courseCode));
                run(true);
            });

            // Auto-run if group + sessions already populated
            const groupSel = document.getElementById('MainContent_DDL_StudentGroup');
            if (groupSel?.value && groupSel.value !== '0' && getCourseCode()) {
                run(false);
            }
        }

        inject();
    })();
