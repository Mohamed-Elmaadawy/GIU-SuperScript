// ==UserScript==
// @name        GIU Teaching Load
// @description Shows your teaching schedule on the portal home page — today first, rest of the week expandable
// @match       https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx
// @namespace   ramin0
// @version     1.0
// @author      Mo.Elmaadawy
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    // ── Selectors / structure — PINNED from the Task 1 captures (real values) ──
    const SEL = {
        nameSelect: '#MainContent_DDL_FromStaff',        // notification.html: single option "Mr. <Full Name>"
        scheduleTable: '#MainContent_schedule',          // rendered grid: row0=period headers, col0=day name
        showScheduleBtn: '#MainContent_B_ShowSchedule',  // submit (postback) that renders the schedule
        staffFieldName: 'ta[]',                          // POST field carrying the selected staff id
        staffContainer: '#teaching_assistants',          // empty div the staff control mounts into
        // window.tas = [{ id, value:<fullName> }, ...] — all 546 staff — is read directly to map name -> id.
    };

    const NOTIFICATION_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx';
    const SCHEDULE_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/SearchAcademicScheduled_001_m.aspx';
    const CACHE_KEY = 'giuTeachingLoadV1';
    const NAME_CACHE_KEY = 'giuTeachingLoadNameV1';
    const TTL_MS = 6 * 60 * 60 * 1000;       // 6h
    const IFRAME_TIMEOUT_MS = 20000;
    const FETCH_TIMEOUT_MS = 15000;
    const HOME_BOOT_DELAY_MS = 800;

    let restExpanded = false; // expandable "rest of week" open state, persisted across re-renders
    let lastRendered = null;  // last view rendered (for re-render after toggle)

    function esc(s) {
        return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    function injectStyles() {
        if (document.getElementById('gius-tl-style')) return;
        const css = `
            .gius-tl-widget{font-family:inherit;display:block;width:100%;box-sizing:border-box;
                margin:28px 0;border-radius:12px;padding:16px 18px;
                background:#ffffff;color:#1e1e2e;box-shadow:0 2px 10px rgba(0,0,0,.12);}
            .gius-tl-widget *{box-sizing:border-box;}
            .gius-tl-head{font-weight:700;font-size:16px;margin-bottom:12px;}
            .gius-tl-stale{color:#b8860b;font-weight:600;font-size:12px;}
            .gius-tl-today{background:#f8f9fa;border:1px solid #e9ecef;border-left:4px solid #ffc107;
                border-radius:12px;padding:14px;margin-bottom:14px;}
            .gius-tl-today-head{font-size:13px;font-weight:700;color:#272c33;
                text-transform:uppercase;letter-spacing:.03em;margin-bottom:10px;}
            .gius-tl-card{background:#ffffff;border-radius:10px;padding:14px 16px;
                box-shadow:0 1px 4px rgba(0,0,0,.08);}
            .gius-tl-card + .gius-tl-card{margin-top:10px;}
            .gius-tl-slot{font-size:14px;font-weight:700;color:#272c33;margin-bottom:4px;}
            .gius-tl-tutorial{font-size:16px;font-weight:700;line-height:1.3;margin-bottom:4px;}
            .gius-tl-loc{font-size:13px;opacity:.85;}
            .gius-tl-toggle{margin-top:6px;font-size:13px;font-weight:700;background:transparent;border:none;
                color:#272c33;cursor:pointer;padding:4px 0;}
            .gius-tl-toggle::before{content:"▸";display:inline-block;margin-right:6px;
                transition:transform .3s ease-out;}
            .gius-tl-toggle-open::before{transform:rotate(90deg);}
            .gius-tl-expand-wrapper{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease-out;}
            .gius-tl-expand-wrapper.gius-tl-expanded{grid-template-rows:1fr;}
            .gius-tl-expand-inner{overflow:hidden;}
            .gius-tl-day{margin-top:10px;}
            .gius-tl-day-head{font-size:13px;font-weight:700;margin:8px 0 4px;}
            .gius-tl-row{background:#f5f5fa;border-radius:8px;padding:10px 12px;}
            .gius-tl-row + .gius-tl-row{margin-top:6px;}
            .gius-tl-empty{font-size:13px;opacity:.85;padding:6px 0;}

            /* Dark mode — reacts to GIU Dark Mode (html.gius-dark, Catppuccin Mocha). */
            html.gius-dark .gius-tl-widget{background:#1e1e2e;color:#cdd6f4;box-shadow:0 2px 10px rgba(0,0,0,.45);}
            html.gius-dark .gius-tl-today{background:#181825;border-color:#313244;border-left-color:#f9e2af;}
            html.gius-dark .gius-tl-today-head{color:#cdd6f4;}
            html.gius-dark .gius-tl-card{background:#11111b;box-shadow:none;}
            html.gius-dark .gius-tl-slot{color:#f9e2af;}
            html.gius-dark .gius-tl-row{background:#181825;}
            html.gius-dark .gius-tl-toggle{color:#cdd6f4;}
            html.gius-dark .gius-tl-stale{color:#f9e2af;}`;
        const style = document.createElement('style');
        style.id = 'gius-tl-style';
        style.textContent = css;
        document.head.appendChild(style);
    }

    // Strip an honorific title ("Mr.", "Miss.", "Dr.", "Prof.", etc.) and collapse whitespace.
    function parseFullName(raw) {
        return String(raw)
            .replace(/^\s*(mr|mrs|miss|ms|dr|prof|eng)\.?\s+/i, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function readNameFromDoc(doc) {
        const sel = doc.querySelector(SEL.nameSelect);
        if (!sel) return '';
        // Prefer the selected option; fall back to the first non-placeholder option.
        const opts = Array.from(sel.options || []);
        const opt = opts.find(o => o.selected && o.value) || opts.find(o => o.text && o.value) || opts[0];
        return opt ? parseFullName(opt.text) : '';
    }

    async function fetchFullName() {
        const cached = (() => { try { return localStorage.getItem(NAME_CACHE_KEY) || ''; } catch { return ''; } })();
        if (cached) return cached;
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
        try {
            const resp = await fetch(NOTIFICATION_URL, { credentials: 'include', signal: ctrl.signal });
            if (!resp.ok) throw new Error('HTTP ' + resp.status);
            const doc = new DOMParser().parseFromString(await resp.text(), 'text/html');
            const name = readNameFromDoc(doc);
            if (!name) throw new Error('name-not-found');
            try { localStorage.setItem(NAME_CACHE_KEY, name); } catch { /* quota */ }
            return name;
        } finally {
            clearTimeout(timer);
        }
    }

    // Teaching week order (GIU runs Saturday→Thursday; Friday is the weekend).
    const WEEK = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    function todayWeekdayName() {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
    }

    // Clean a period header like "1st First" / "2nd Second" down to "1st" / "2nd".
    function periodLabel(raw) {
        const m = String(raw).trim().match(/^(\d+)\s*(st|nd|rd|th)/i);
        return m ? (m[1] + m[2].toLowerCase()) : String(raw).replace(/\s+/g, ' ').trim();
    }

    // Read the <dd> text following the <dt> whose label matches (e.g. "Group", "Location").
    function ddByLabel(slotEl, label) {
        const dts = slotEl.querySelectorAll('dt');
        for (const dt of dts) {
            if (dt.textContent.trim().toLowerCase() === label.toLowerCase()) {
                const dd = dt.nextElementSibling;
                if (dd && dd.tagName === 'DD') return dd.textContent.replace(/\s+/g, ' ').trim();
            }
        }
        return '';
    }

    // Transposed grid parser: row0 = period headers (col0 blank); each later row = a day
    // (col0 = day name); each populated cell holds one or more `.slot` divs.
    function parseScheduleDoc(doc) {
        const table = doc.querySelector(SEL.scheduleTable);
        if (!table || !table.rows || table.rows.length < 2) return [];
        const header = Array.from(table.rows[0].cells).map(c => periodLabel(c.textContent));
        const out = [];
        for (let r = 1; r < table.rows.length; r++) {
            const cells = table.rows[r].cells;
            if (!cells.length) continue;
            const day = cells[0].textContent.replace(/\s+/g, ' ').trim();
            if (!WEEK.includes(day)) continue;
            for (let c = 1; c < cells.length; c++) {
                const slotEls = cells[c].querySelectorAll('.slot');
                for (const slotEl of slotEls) {
                    const tutorial = ddByLabel(slotEl, 'Group');
                    const location = ddByLabel(slotEl, 'Location');
                    if (!tutorial && !location) continue;
                    out.push({ day, slot: header[c] || String(c), tutorial, location });
                }
            }
        }
        return out;
    }

    // Split into today's sessions + the remaining teaching days strictly after today.
    function splitByDay(sessions, todayName) {
        const today = todayName || todayWeekdayName();
        const todayIdx = WEEK.indexOf(today);
        const todaySessions = sessions.filter(s => s.day === today);
        const rest = [];
        for (let i = todayIdx + 1; i < WEEK.length; i++) {
            const day = WEEK[i];
            const daySessions = sessions.filter(s => s.day === day);
            if (daySessions.length) rest.push({ day, sessions: daySessions });
        }
        return { today: todaySessions, rest };
    }

    function saveCache(sessions) {
        const payload = { fetchedAt: Date.now(), sessions };
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(payload)); } catch { /* quota */ }
    }

    function loadCache() {
        try {
            const raw = JSON.parse(localStorage.getItem(CACHE_KEY));
            if (!raw || !Array.isArray(raw.sessions)) return null;
            return raw;
        } catch { return null; }
    }

    function isStale(fetchedAt) {
        return !fetchedAt || (Date.now() - fetchedAt) > TTL_MS;
    }

    // Look up a staff id by full name in the page's `tas` array (read from the iframe window).
    function findStaffId(win, fullName) {
        const tas = win.tas;
        if (!Array.isArray(tas)) return null;
        const norm = s => String(s).replace(/\s+/g, ' ').trim().toLowerCase();
        const want = norm(fullName);
        const m = tas.find(x => norm(x.value) === want)
            || tas.find(x => norm(x.value).includes(want))
            || tas.find(x => want.includes(norm(x.value)));
        return m ? m.id : null;
    }

    // Inject the staff id as the `ta[]` form field the server expects, then submit.
    function submitStaff(win, staffId) {
        const doc = win.document;
        const btn = doc.querySelector(SEL.showScheduleBtn);
        if (!btn) return false;
        const form = btn.form || doc.forms[0];
        if (!form) return false;
        let inp = form.querySelector('input[name="' + SEL.staffFieldName + '"]');
        if (!inp) {
            inp = doc.createElement('input');
            inp.type = 'hidden';
            inp.name = SEL.staffFieldName;
            (doc.querySelector(SEL.staffContainer) || form).appendChild(inp);
        }
        inp.value = staffId;
        btn.click();
        return true;
    }

    function fetchScheduleViaIframe(fullName, timeoutMs) {
        const limit = timeoutMs || IFRAME_TIMEOUT_MS;
        return new Promise((resolve, reject) => {
            const iframe = document.createElement('iframe');
            iframe.setAttribute('data-gius-tl', '1');
            iframe.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:0;height:0;border:0;';
            iframe.src = SCHEDULE_URL;

            let done = false, submitted = false;
            const started = Date.now();
            const cleanup = () => { try { iframe.remove(); } catch {} };
            const finish = (fn, arg) => { if (done) return; done = true; clearInterval(poll); cleanup(); fn(arg); };

            const poll = setInterval(() => {
                if (Date.now() - started > limit) { finish(reject, new Error('teaching-load-iframe-timeout')); return; }
                let win;
                try { win = iframe.contentWindow; if (!win || !win.document) return; } catch { return; }
                // If a populated schedule is already present, parse and resolve.
                const sessions = parseScheduleDoc(win.document);
                if (sessions.length) { finish(resolve, sessions); return; }
                // Otherwise, once `tas` is available, submit our staff id exactly once.
                if (!submitted) {
                    const id = findStaffId(win, fullName);
                    if (id) { try { if (submitStaff(win, id)) submitted = true; } catch { /* retry next tick */ } }
                }
            }, 300);

            iframe.addEventListener('error', () => finish(reject, new Error('teaching-load-iframe-error')));
            document.body.appendChild(iframe);
        });
    }

    function ensureHost() {
        let host = document.getElementById('gius-tl-widget');
        if (!host) {
            host = document.createElement('div');
            host.id = 'gius-tl-widget';
            host.className = 'gius-tl-widget';
        }
        // Placement: TOP of Home — directly after the Target List block, before other widgets.
        const target = document.getElementById('MainContent_div_grid');
        if (target) {
            if (target.nextElementSibling !== host) target.insertAdjacentElement('afterend', host);
        } else {
            const fb = document.querySelector('.page-content') ||
                document.querySelector('[id*=MainContent]') || document.body;
            if (fb.firstElementChild !== host) fb.prepend(host);
        }
        return host;
    }

    function sessionCardHTML(s) {
        return `<div class="gius-tl-card">
            <div class="gius-tl-slot">${esc(s.slot)}</div>
            <div class="gius-tl-tutorial">${esc(s.tutorial)}</div>
            ${s.location ? `<div class="gius-tl-loc">${esc(s.location)}</div>` : ''}
        </div>`;
    }

    function sessionRowHTML(s) {
        return `<div class="gius-tl-row">
            <div class="gius-tl-slot">${esc(s.slot)}</div>
            <div class="gius-tl-tutorial">${esc(s.tutorial)}</div>
            ${s.location ? `<div class="gius-tl-loc">${esc(s.location)}</div>` : ''}
        </div>`;
    }

    function renderView(view, opts) {
        if (!opts) opts = {};
        lastRendered = view;
        const host = ensureHost();
        const todayHTML = view.today.length
            ? view.today.map(sessionCardHTML).join('')
            : `<div class="gius-tl-empty">No teaching sessions today.</div>`;

        const restCount = view.rest.reduce((n, d) => n + d.sessions.length, 0);
        const restHTML = view.rest.length ? `
            <button type="button" class="gius-tl-toggle${restExpanded ? ' gius-tl-toggle-open' : ''}"
                aria-expanded="${restExpanded}" aria-controls="gius-tl-rest">Rest of week (${restCount})</button>
            <div id="gius-tl-rest" class="gius-tl-expand-wrapper${restExpanded ? ' gius-tl-expanded' : ''}">
                <div class="gius-tl-expand-inner">
                    ${view.rest.map(d => `
                        <div class="gius-tl-day">
                            <div class="gius-tl-day-head">${esc(d.day)}</div>
                            ${d.sessions.map(sessionRowHTML).join('')}
                        </div>`).join('')}
                </div>
            </div>` : '';

        host.innerHTML = `<div class="gius-tl-head">Teaching Load${opts.stale ? ' · <span class="gius-tl-stale">offline cache</span>' : ''}</div>
            <div class="gius-tl-today">
                <div class="gius-tl-today-head">Today</div>
                ${todayHTML}
            </div>
            ${restHTML}`;

        const toggle = host.querySelector('.gius-tl-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                const el = host.querySelector('#gius-tl-rest');
                const open = el.classList.toggle('gius-tl-expanded');
                toggle.classList.toggle('gius-tl-toggle-open', open);
                toggle.setAttribute('aria-expanded', String(open));
                restExpanded = open;
            });
        }
    }

    function showError(host) {
        host.innerHTML = `<div class="gius-tl-head">Teaching Load</div>
            <div class="gius-tl-empty">Couldn't load schedule.
                <button type="button" id="gius-tl-retry" class="gius-tl-toggle">Retry</button></div>`;
        const btn = host.querySelector('#gius-tl-retry');
        if (btn) btn.addEventListener('click', boot);
    }

    function renderFromSessions(sessions, opts) {
        const view = splitByDay(sessions);
        renderView(view, opts);
    }

    async function boot() {
        injectStyles();
        const cache = loadCache();
        if (cache) renderFromSessions(cache.sessions, { stale: isStale(cache.fetchedAt) });
        try {
            const name = await fetchFullName();
            const sessions = await fetchScheduleViaIframe(name);
            saveCache(sessions);
            renderFromSessions(sessions);
        } catch {
            if (!cache) showError(ensureHost());
            // else: keep the stale cache already painted above.
        }
    }

    setTimeout(boot, HOME_BOOT_DELAY_MS);

    // ── test hook (extended as functions are added) ──
    window.__giuTeachingLoad = {
        SEL, parseFullName, readNameFromDoc, fetchFullName,
        parseScheduleDoc, splitByDay, todayWeekdayName, WEEK,
        saveCache, loadCache, isStale,
        fetchScheduleViaIframe, findStaffId, submitStaff,
        renderView, ensureHost,
        renderFromSessions, boot,
        _renderView: renderView,
        _rerender: () => { if (lastRendered) renderView(lastRendered); },
    };
})();
