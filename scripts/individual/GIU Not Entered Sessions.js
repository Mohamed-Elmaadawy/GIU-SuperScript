// ==UserScript==
// @name        GIU Not Entered Sessions
// @description Shows a Home-page widget listing Regular attendance sessions 1-21 days overdue with no attendance entered yet
// @match       https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx
// @namespace   Cyn0
// @version     1.0.0
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Not%20Entered%20Sessions.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Not%20Entered%20Sessions.js
// @author      Mo.Elmaadawy
// @icon        data:image/png;base64,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
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    const SOURCE_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/ClassAttendance_ManageStudentAttendancesH003.aspx';
    const CACHE_KEY = 'giuUnenteredSessionsV1';
    const MAX_CHECKS_PER_LOAD = 8;
    const HOME_BOOT_DELAY_MS = 1000;

    function warn(...args) {
        console.warn('[GIU-Unentered-Sessions]', ...args);
    }

    // ── Option-text parser ────────────────────────────────────────────
    // Dropdown text format (verbatim from the live portal):
    //   "{Season} {Year}  - {Term} - {CourseCode} - {CourseName} - {Group} @{YYYY.MM.DD} - {Type}  - Slot{N} - {Duration}"
    // Quirks: DOUBLE space between the year and the following dash, and
    // DOUBLE space between the session type and the following dash;
    // single spaces around every other dash. CourseCode is two tokens
    // ("INCS 406"), hence (\S+\s\S+) — a single \S+ would grab only "INCS".
    const OPTION_RE = /^(.+?)\s{2}-\s(\S+)\s-\s(\S+\s\S+)\s-\s(.+?)\s-\s(.+?)\s@(\d{4})\.(\d{2})\.(\d{2})\s-\s(Regular|On Hold)\s{2}-\sSlot(\d+)\s-\s(.+)$/;

    function parseSessionOption(text, value) {
        if (!value || value === '0') return null; // "[Choose Attendance Session]" placeholder
        const m = OPTION_RE.exec(String(text || '').trim());
        if (!m) return null; // unknown format → skip, never crash
        return {
            sessionId: String(value),
            seasonYear: m[1],
            termCode: m[2],
            courseCode: m[3],
            courseName: m[4],
            groupCode: m[5],
            date: `${m[6]}-${m[7]}-${m[8]}`,
            type: m[9],
            slot: m[10],
            duration: m[11],
        };
    }

    function parseSessionOptions(doc) {
        const sel = doc.getElementById('MainContent_DDL_Sessions');
        if (!sel) return [];
        const out = [];
        for (const opt of sel.querySelectorAll('option')) {
            const parsed = parseSessionOption(opt.textContent, opt.getAttribute('value'));
            if (parsed) out.push(parsed);
        }
        return out;
    }

    // ── Local-date helpers ────────────────────────────────────────────
    function localDateStr(d = new Date()) {
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    // ISO timestamps are stored in UTC; comparisons are on the LOCAL day.
    function isSameLocalDay(iso, todayStr) {
        if (!iso) return false;
        const d = new Date(iso);
        return !isNaN(d.getTime()) && localDateStr(d) === todayStr;
    }

    // Whole local days between a session date and now (midnight-to-midnight).
    // Both midnights are diffed as UTC instants (Date.UTC), NOT via the local
    // Date constructor — a local-Date diff assumes every calendar day is exactly
    // 86,400,000ms, which is false across a DST transition (e.g. Egypt's
    // spring-forward) and would silently under/over-count by a day.
    function daysAgoOf(dateYmd, now = new Date()) {
        const [y, m, d] = dateYmd.split('-').map(Number);
        const sessionMidnight = Date.UTC(y, m - 1, d);
        const todayMidnight = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
        return Math.floor((todayMidnight - sessionMidnight) / 86400000);
    }

    // Candidates = Regular sessions dated 1–21 days strictly in the past.
    function filterCandidates(sessions, now = new Date()) {
        return sessions.filter(s => {
            if (s.type !== 'Regular') return false;
            const ago = daysAgoOf(s.date, now);
            return ago >= 1 && ago <= 21;
        });
    }

    // ── ASP.NET WebForms helpers (same proven pattern as proctorAggregator;
    //    doPostback closes over SOURCE_URL, matching codebase convention) ──
    function extractFormState(doc) {
        const get = id => (doc.getElementById(id) || {}).value || '';
        return {
            __VIEWSTATE: get('__VIEWSTATE'),
            __VIEWSTATEGENERATOR: get('__VIEWSTATEGENERATOR'),
            __EVENTVALIDATION: get('__EVENTVALIDATION'),
        };
    }

    async function doPostback(eventTarget, extraFields, baseState) {
        const body = new URLSearchParams({
            __EVENTTARGET: eventTarget,
            __EVENTARGUMENT: '',
            __LASTFOCUS: '',
            __VIEWSTATE: baseState.__VIEWSTATE,
            __VIEWSTATEGENERATOR: baseState.__VIEWSTATEGENERATOR,
            __EVENTVALIDATION: baseState.__EVENTVALIDATION,
            ...extraFields,
        });
        const resp = await fetch(SOURCE_URL, {
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

    // Phase 1 — one GET of the source page; returns its parsed document
    // (the dropdown is already fully populated across all groups).
    async function fetchSourcePage() {
        const resp = await fetch(SOURCE_URL, { credentials: 'include' });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const html = await resp.text();
        if (html.includes('Login_m.aspx') || html.includes('id="LoginPage"')) {
            throw new Error('SESSION_EXPIRED');
        }
        return new DOMParser().parseFromString(html, 'text/html');
    }

    // Currently selected group value — must ride along on every postback
    // so the server-side group filter isn't accidentally reset. The doc
    // comes from DOMParser, so read the markup's selected attribute.
    function extractGroupValue(doc) {
        const sel = doc.getElementById('MainContent_DDL_StudentGroup');
        if (!sel) return '';
        const chosen = sel.querySelector('option[selected]') || sel.querySelector('option');
        return chosen ? (chosen.getAttribute('value') || '') : '';
    }

    // ── Cache (localStorage, key giuUnenteredSessionsV1) ──────────────
    function loadCache() {
        try {
            const raw = JSON.parse(localStorage.getItem(CACHE_KEY));
            if (raw && typeof raw === 'object' && raw.candidates && typeof raw.candidates === 'object') {
                return { candidates: raw.candidates, lastEnumeratedISO: raw.lastEnumeratedISO || null };
            }
        } catch { /* corrupt JSON → fresh cache */ }
        return { candidates: {}, lastEnumeratedISO: null };
    }

    function saveCache(cache) {
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    }

    // Rebuild the candidate map from a fresh enumeration: refresh metadata,
    // keep prior status/lastCheckedISO for sessions still offered, drop the
    // rest. Brand-new candidates start unknown / never-checked.
    function mergeCandidates(cache, freshCandidates, nowISO) {
        const next = { candidates: {}, lastEnumeratedISO: nowISO };
        for (const c of freshCandidates) {
            const prev = cache.candidates[c.sessionId];
            next.candidates[c.sessionId] = {
                courseCode: c.courseCode,
                courseName: c.courseName,
                groupCode: c.groupCode,
                date: c.date,
                slot: c.slot,
                status: prev ? prev.status : 'unknown',
                lastCheckedISO: prev ? prev.lastCheckedISO : null,
            };
        }
        return next;
    }

    // Which sessionIds get a Phase-2 postback this load: never-checked
    // first (oldest date first), then stale unentered/unknown rechecks
    // (oldest first), capped at MAX_CHECKS_PER_LOAD. "entered" is final —
    // never rechecked, force or not. Leftovers stay queued for a future
    // load. force=true (manual refresh) ignores the same-day gate so an
    // outstanding candidate can be rechecked immediately instead of
    // waiting until tomorrow.
    function selectChecksToRun(cache, todayStr, force = false) {
        const entries = Object.entries(cache.candidates);
        const byDate = (a, b) => (a[1].date < b[1].date ? -1 : a[1].date > b[1].date ? 1 : 0);
        const neverChecked = entries
            .filter(([, c]) => !c.lastCheckedISO)
            .sort(byDate);
        const staleRecheck = entries
            .filter(([, c]) => c.lastCheckedISO &&
                (c.status === 'unentered' || c.status === 'unknown') &&
                (force || !isSameLocalDay(c.lastCheckedISO, todayStr)))
            .sort(byDate);
        return neverChecked.concat(staleRecheck)
            .slice(0, MAX_CHECKS_PER_LOAD)
            .map(([id]) => id);
    }

    // ── Attendance-grid status ────────────────────────────────────────
    // The doc comes from DOMParser over raw response HTML: a checkbox is
    // "checked" iff the markup carries the checked ATTRIBUTE — use
    // hasAttribute('checked'), never the live .checked property (that
    // reflects user interaction, not server-rendered markup).
    function readAttendanceStatus(doc) {
        const grid = doc.getElementById('MainContent_DG_StudentAttendance');
        if (!grid) return 'unknown';
        const boxes = grid.querySelectorAll(
            'input[type="checkbox"][id^="MainContent_DG_StudentAttendance_CB_Attended_"]');
        if (!boxes.length) return 'unknown'; // grid present but no rows → can't judge
        for (const box of boxes) {
            if (box.hasAttribute('checked')) return 'entered';
        }
        return 'unentered';
    }

    // ── Phase 2 — chained verification postbacks (sequential: each POST
    //    needs the PREVIOUS response's fresh viewstate). Error policy:
    //    SESSION_EXPIRED → rethrow, aborting the whole chain (remaining
    //    ids keep lastCheckedISO null so they stay queued); any other
    //    error → mark that one candidate "unknown" and keep going. ──
    async function runChecks(cache, sessionIds, baseState, groupValue) {
        let state = baseState;
        for (const sessionId of sessionIds) {
            const cand = cache.candidates[sessionId];
            if (!cand) continue;
            try {
                const doc = await doPostback('ctl00$MainContent$DDL_Sessions', {
                    'ctl00$MainContent$DDL_Sessions': sessionId,
                    'ctl00$MainContent$DDL_StudentGroup': groupValue,
                }, state);
                state = extractFormState(doc); // thread fresh viewstate forward
                cand.status = readAttendanceStatus(doc);
                cand.lastCheckedISO = new Date().toISOString();
            } catch (e) {
                if (e && e.message === 'SESSION_EXPIRED') throw e;
                cand.status = 'unknown';
                cand.lastCheckedISO = new Date().toISOString();
            }
            saveCache(cache); // persist progress after every candidate
        }
    }

    // ── UI ────────────────────────────────────────────────────────────
    // Escape portal-derived text before putting it into innerHTML.
    function esc(s) {
        return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    function fmtDate(ymd) {
        const [y, m, d] = ymd.split('-').map(Number);
        return new Date(y, m - 1, d).toLocaleDateString('en-GB',
            { weekday: 'short', day: 'numeric', month: 'short' });
    }

    // Display-only: drop the trailing session-type word portal group
    // codes always carry ("4INF P002 Practical" -> "4INF P002") — the
    // type is redundant with the slot chip and just adds noise.
    function stripGroupType(groupCode) {
        return String(groupCode).replace(/\s+(Practical|Tutorial|Lecture)$/i, '');
    }

    function injectStyles() {
        if (document.getElementById('gius-us-style')) return;
        const css = `
            .gius-us-widget{font-family:inherit;display:block;width:100%;box-sizing:border-box;
                margin:28px 0;border-radius:12px;padding:16px 18px;
                background:#ffffff;color:#1e1e2e;box-shadow:0 2px 10px rgba(0,0,0,.12);}
            .gius-us-widget *{box-sizing:border-box;}
            .gius-us-head{font-weight:700;font-size:16px;margin-bottom:4px;
                display:flex;align-items:center;gap:8px;}
            .gius-us-badge{display:inline-block;vertical-align:middle;line-height:1;font-size:11px;font-weight:700;
                padding:3px 9px;border-radius:999px;white-space:nowrap;
                background:#fff8e1;color:#8a6500;border:1px solid #ffc107;}
            .gius-us-refresh{margin-left:auto;border:none;background:transparent;cursor:pointer;
                font-size:15px;line-height:1;color:inherit;opacity:.55;padding:2px 4px;}
            .gius-us-refresh:hover{opacity:1;}
            .gius-us-refresh:disabled{opacity:.3;cursor:wait;}
            .gius-us-refresh.gius-us-spinning{animation:gius-us-spin .8s linear infinite;}
            @keyframes gius-us-spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
            .gius-us-sub{font-size:13px;opacity:.75;margin-bottom:12px;}
            .gius-us-list{display:flex;flex-direction:column;gap:8px;}
            .gius-us-row{display:flex;align-items:center;justify-content:space-between;gap:12px;
                background:#f5f5fa;border:1px solid #e9ecef;border-left:4px solid #ffc107;
                border-radius:8px;padding:10px 12px;color:inherit;text-decoration:none;}
            .gius-us-row:hover{background:#eceef5;}
            .gius-us-primary{display:flex;align-items:center;gap:8px;margin-bottom:3px;}
            .gius-us-slot{display:inline-block;font-size:12.5px;font-weight:800;letter-spacing:.02em;
                color:#7a5b00;background:#fff3cd;border-radius:6px;padding:3px 8px;flex:0 0 auto;}
            .gius-us-when{font-size:14px;font-weight:700;color:#272c33;
                white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
            .gius-us-course{font-size:12.5px;opacity:.72;color:#3a3f47;
                white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
            .gius-us-ago{font-size:12px;font-weight:700;color:#8a6500;white-space:nowrap;opacity:.8;flex-shrink:0;}

            /* Dark mode — reacts live to the GIU Theme script's html.gius-dark class. */
            html.gius-dark .gius-us-widget{background:#1e1e2e;color:#cdd6f4;box-shadow:0 2px 10px rgba(0,0,0,.45);}
            html.gius-dark .gius-us-badge{background:#2a2410;color:#f9e2af;border-color:#f9e2af;}
            html.gius-dark .gius-us-row{background:#181825;border-color:#313244;border-left-color:#f9e2af;}
            html.gius-dark .gius-us-row:hover{background:#232334;}
            html.gius-dark .gius-us-slot{color:#f9e2af;background:#2a2410;}
            html.gius-dark .gius-us-when{color:#cdd6f4;}
            html.gius-dark .gius-us-course{color:#a6adc8;}
            html.gius-dark .gius-us-ago{color:#f9e2af;}`;
        const style = document.createElement('style');
        style.id = 'gius-us-style';
        style.textContent = css;
        document.head.appendChild(style);
    }

    // Insertion priority: after Next Proctoring, else Teaching Load, else
    // the attendance widget, else the Target List grid, else page top.
    function ensureHost() {
        let host = document.getElementById('gius-us-widget');
        if (!host) {
            host = document.createElement('div');
            host.id = 'gius-us-widget';
            host.className = 'gius-us-widget';
        }
        const proctorReminder = document.getElementById('gius-pr-widget');
        if (proctorReminder) {
            if (proctorReminder.nextElementSibling !== host) proctorReminder.insertAdjacentElement('afterend', host);
            return host;
        }
        const teachingLoad = document.getElementById('gius-tl-widget');
        if (teachingLoad) {
            if (teachingLoad.nextElementSibling !== host) teachingLoad.insertAdjacentElement('afterend', host);
            return host;
        }
        const attendance = document.getElementById('gius-att-widget');
        if (attendance) {
            if (attendance.nextElementSibling !== host) attendance.insertAdjacentElement('afterend', host);
            return host;
        }
        const target = document.getElementById('MainContent_div_grid');
        if (target) {
            if (target.nextElementSibling !== host) target.insertAdjacentElement('afterend', host);
        } else {
            const fallback = document.querySelector('.page-content') ||
                document.querySelector('[id*=MainContent]') ||
                document.body;
            if (fallback.firstElementChild !== host) fallback.prepend(host);
        }
        return host;
    }

    // True while a manual (force) refresh triggered via the ⟳ button is
    // in flight — read by render() on every rebuild so the button stays
    // disabled/spinning through boot()'s own internal re-renders, not
    // just the one that fires immediately on click.
    let refreshing = false;

    function render(cache) {
        const now = new Date();
        const rows = Object.values(cache.candidates)
            .filter(c => c.status === 'unentered')
            .sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));
        const existing = document.getElementById('gius-us-widget');
        if (!rows.length) {
            // Empty state: the widget does not exist in the DOM at all.
            if (existing) existing.remove();
            return;
        }
        const queued = Object.values(cache.candidates)
            .filter(c => c.status === 'unknown').length;
        const queuedText = !queued ? '' :
            ` · ${queued === 1 ? '1 more queued' : queued + ' more queued'}`;
        injectStyles();
        const host = ensureHost();
        host.innerHTML = `
            <div class="gius-us-head">Not Entered Sessions
                <span class="gius-us-badge">${rows.length}</span>
                <button type="button" id="gius-us-refresh-btn"
                    class="gius-us-refresh${refreshing ? ' gius-us-spinning' : ''}"
                    title="Recheck now"${refreshing ? ' disabled' : ''}>⟳</button></div>
            <div class="gius-us-sub">Regular sessions, 1–21 days past, attendance not yet entered${queuedText}.</div>
            <div class="gius-us-list">
                ${rows.map(c => `
                    <a class="gius-us-row" href="${SOURCE_URL}" target="_blank" rel="noopener">
                        <div class="gius-us-main">
                            <div class="gius-us-primary">
                                <span class="gius-us-slot">Slot ${esc(c.slot)}</span>
                                <span class="gius-us-when">${esc(stripGroupType(c.groupCode))} · ${esc(fmtDate(c.date))}</span>
                            </div>
                            <div class="gius-us-course">${esc(c.courseName)}</div>
                        </div>
                        <div class="gius-us-ago">${daysAgoOf(c.date, now)} days ago</div>
                    </a>`).join('')}
            </div>`;
        const refreshBtn = host.querySelector('#gius-us-refresh-btn');
        if (refreshBtn) refreshBtn.addEventListener('click', triggerRefresh);
    }

    // Manual refresh: repaint immediately so the spinner shows without
    // waiting on the network, force a full recheck (bypassing the
    // same-day gate), then repaint again once settled either way.
    async function triggerRefresh() {
        if (refreshing) return;
        refreshing = true;
        render(loadCache());
        try {
            await boot({ force: true });
        } finally {
            refreshing = false;
            render(loadCache());
        }
    }

    // ── Boot ──────────────────────────────────────────────────────────
    // opts.force (manual refresh, see triggerRefresh above) always
    // re-enumerates and ignores the same-day recheck gate, but never
    // touches the "entered is final" rule — that stays true either way.
    async function boot(opts = {}) {
        const force = !!opts.force;
        const todayStr = localDateStr();
        let cache = loadCache();
        render(cache); // paint whatever was cached before touching the network

        let checkIds = selectChecksToRun(cache, todayStr, force);
        const needEnumeration = force || !isSameLocalDay(cache.lastEnumeratedISO, todayStr);
        if (!needEnumeration && !checkIds.length) return; // nothing to do today

        // One GET serves both phases: enumeration (when stale) and the
        // fresh viewstate + group value every postback chain starts from.
        let doc;
        try {
            doc = await fetchSourcePage();
        } catch (e) {
            // Unreachable / expired session: keep showing the cached view,
            // surface nothing new this load.
            warn('source page fetch failed:', e && e.message);
            return;
        }

        if (needEnumeration) {
            const fresh = filterCandidates(parseSessionOptions(doc));
            cache = mergeCandidates(cache, fresh, new Date().toISOString());
            saveCache(cache);
            checkIds = selectChecksToRun(cache, todayStr, force);
            render(cache);
        }

        if (checkIds.length) {
            try {
                await runChecks(cache, checkIds, extractFormState(doc), extractGroupValue(doc));
            } catch (e) {
                // SESSION_EXPIRED mid-chain (or any other propagated error):
                // stop and log — unchecked candidates keep lastCheckedISO
                // null and stay queued for the next load's chain.
                warn('verification chain failed:', e && e.message);
            }
            render(cache);
        }
    }

    setTimeout(boot, HOME_BOOT_DELAY_MS);

    // ── test hook (extended as functions are added) ──
    window.__giuUnenteredSessions = { SOURCE_URL, CACHE_KEY, MAX_CHECKS_PER_LOAD,
        parseSessionOption, parseSessionOptions,
        localDateStr, isSameLocalDay, daysAgoOf, filterCandidates,
        extractFormState, doPostback, fetchSourcePage, extractGroupValue,
        loadCache, saveCache, mergeCandidates, selectChecksToRun,
        readAttendanceStatus, runChecks,
        esc, fmtDate, stripGroupType, injectStyles, ensureHost, render, boot, triggerRefresh };
})();
