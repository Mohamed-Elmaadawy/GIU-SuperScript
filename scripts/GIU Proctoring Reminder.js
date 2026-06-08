// ==UserScript==
// @name        GIU Proctoring Reminder
// @description Shows your next proctoring session on the portal home page and exports reminders to calendar/email
// @match       https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx
// @namespace   ramin0
// @version     1.3
// @author      Mo.Elmaadawy
// @icon        data:image/png;base64,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
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    const CACHE_KEY = 'giuProctorTimetableV1';
    const TIMETABLE_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/ViewTimeTable_m.aspx';
    const TTL_MS = 6 * 60 * 60 * 1000; // 6h
    const FETCH_TIMEOUT_MS = 15000;

    let allExpanded = false; // "Remaining exams" open state, persisted across re-renders
    let lastRendered = null; // last session list rendered (for re-render after toggle)

    function parseExamString(raw) {
        const stripCampus = s => s.replace(/^GIU-[^.-]*[.-]/, '').trim();
        const COURSE_CODE = /^[A-Z]{2,8}[a-z]?\d{3,4}[A-Za-z]?$/;
        const parts = raw.split(' ---> ');
        if (parts.length < 2) return { courseCode: '', examName: raw.trim(), program: '' };
        const right = parts[1].trim();
        const segs = right.split(' - ');
        const program = stripCampus(segs[0]);
        if (segs.length === 1) {
            const words = program.split(/\s+/);
            const codeIdx = words.findIndex(w => COURSE_CODE.test(w));
            if (codeIdx !== -1) return {
                program: words.slice(0, codeIdx).join(' '),
                courseCode: words[codeIdx],
                examName: words.slice(codeIdx + 1).join(' '),
            };
            return { courseCode: '', examName: right, program: '' };
        }
        const rest = segs.slice(1).join(' ').trim();
        const words = rest.split(/\s+/);
        const codeIdx = words.findIndex(w => COURSE_CODE.test(w));
        if (codeIdx !== -1) return {
            program,
            courseCode: words[codeIdx],
            examName: words.slice(codeIdx + 1).join(' ').replace(/^[-\s]+/, '').trim(),
        };
        return { courseCode: '', program, examName: rest };
    }

    function parseTable(doc, id, role) {
        const tbl = doc.getElementById(id);
        if (!tbl) return [];
        const out = [];
        const rows = Array.from(tbl.rows).slice(1); // skip header
        for (const tr of rows) {
            const c = tr.cells;
            if (c.length < 6) continue;
            const start = new Date(c[2].textContent.trim());
            const end = new Date(c[3].textContent.trim());
            if (isNaN(start.getTime()) || isNaN(end.getTime())) continue;
            const { program, courseCode, examName } = parseExamString(c[0].textContent.trim());
            out.push({
                program, courseCode, examName,
                hall: c[1].textContent.trim(),
                start, end,
                type: c[4].textContent.trim(),
                controlRoom: c[5].textContent.trim(),
                role,
            });
        }
        return out;
    }

    function parseSessions(doc) {
        const all = [
            ...parseTable(doc, 'MainContent_tmTblDg', 'own'),
            ...parseTable(doc, 'MainContent_coverDG', 'cover'),
        ];
        return all.sort((a, b) => a.start - b.start);
    }

    function pickNext(sessions, now) {
        const future = sessions.filter(s => s.start >= now).sort((a, b) => a.start - b.start);
        return future.length ? future[0] : null;
    }

    function saveCache(sessions) {
        const payload = {
            fetchedAt: Date.now(),
            sessions: sessions.map(s => ({ ...s, start: s.start.toISOString(), end: s.end.toISOString() })),
        };
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(payload)); } catch { /* quota */ }
    }

    function loadCache() {
        try {
            const raw = JSON.parse(localStorage.getItem(CACHE_KEY));
            if (!raw || !Array.isArray(raw.sessions)) return null;
            raw.sessions = raw.sessions.map(s => ({ ...s, start: new Date(s.start), end: new Date(s.end) }));
            return raw;
        } catch { return null; }
    }

    function isStale(fetchedAt) {
        return !fetchedAt || (Date.now() - fetchedAt) > TTL_MS;
    }

    function icsDate(d) {
        // UTC basic format YYYYMMDDTHHMMSSZ
        return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
    }
    function icsEscape(s) {
        return String(s).replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
    }
    function sessionUID(s) {
        return `giu-${s.courseCode}-${icsDate(s.start)}@portal.giu-uni.de`;
    }
    function dutyLabel(s) {
        return s.type === 'Supervisor' ? 'Supervising' : 'Proctoring';
    }
    function buildVEVENT(s) {
        const summary = `${dutyLabel(s)}: ${s.courseCode} ${s.examName}`.trim();
        const loc = `Hall ${s.hall}, Control Room ${s.controlRoom}`;
        const desc = `${s.type}${s.role === 'cover' ? ' (Covering)' : ''} — ${s.program}`;
        return [
            'BEGIN:VEVENT',
            `UID:${sessionUID(s)}`,
            `DTSTAMP:${icsDate(new Date())}`,
            `DTSTART:${icsDate(s.start)}`,
            `DTEND:${icsDate(s.end)}`,
            `SUMMARY:${icsEscape(summary)}`,
            `LOCATION:${icsEscape(loc)}`,
            `DESCRIPTION:${icsEscape(desc)}`,
            'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${icsEscape(summary)}`, 'TRIGGER:-P1D', 'END:VALARM',
            'BEGIN:VALARM', 'ACTION:DISPLAY', `DESCRIPTION:${icsEscape(summary)}`, 'TRIGGER:-PT1H', 'END:VALARM',
            'END:VEVENT',
        ].join('\r\n');
    }
    function buildICS(sessionOrList) {
        const list = Array.isArray(sessionOrList) ? sessionOrList : [sessionOrList];
        return [
            'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//GIU SuperScript//Proctoring Reminder//EN',
            ...list.map(buildVEVENT),
            'END:VCALENDAR',
        ].join('\r\n');
    }

    function fmtDateOnly(d) {
        return d.toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
    }
    function fmtTimeOnly(d) {
        return d.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    }
    function fmtHuman(d) {
        return `${fmtDateOnly(d)}, ${fmtTimeOnly(d)}`;
    }
    function googleCalUrl(s) {
        const text = `${dutyLabel(s)}: ${s.courseCode} ${s.examName}`.trim();
        const dates = `${icsDate(s.start)}/${icsDate(s.end)}`;
        const details = `${s.type}${s.role === 'cover' ? ' (Covering)' : ''} — ${s.program}`;
        const location = `Hall ${s.hall}, Control Room ${s.controlRoom}`;
        const p = new URLSearchParams({ action: 'TEMPLATE', text, dates, details, location });
        return `https://calendar.google.com/calendar/render?${p.toString().replace(/\+/g, '%20')}`;
    }
    function mailtoUrl(s) {
        const subject = `${dutyLabel(s)} reminder: ${s.courseCode} ${s.examName}`.trim();
        const body = [
            `I have a proctoring duty${s.role === 'cover' ? ' (covering for a colleague)' : ''}.`,
            ``,
            `Course:  ${s.courseCode} ${s.examName}`,
            `Program: ${s.program}`,
            `When:    ${fmtHuman(s.start)} – ${fmtTimeOnly(s.end)}`,
            `Hall:    ${s.hall}`,
            `Control: ${s.controlRoom}`,
            `Role:    ${s.type}`,
        ].join('\n');
        const p = new URLSearchParams({ subject, body });
        return `mailto:?${p.toString().replace(/\+/g, '%20')}`;
    }

    function downloadICS(sessions, filename) {
        const blob = new Blob([buildICS(sessions)], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = filename;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function exportButtonsHTML(s) {
        return `
            <button type="button" class="gius-pr-act gius-btn gius-pr-ics" title="Download this event as .ics">Download event</button>
            <a class="gius-pr-act gius-pr-gcal" target="_blank" rel="noopener" href="${googleCalUrl(s)}" title="Google Calendar">Google Calendar</a>
            <a class="gius-pr-act gius-pr-mail" href="${mailtoUrl(s)}" title="Email reminder">Email</a>`;
    }

    function wireExports(host) {
        const sessions = host._sessions;

        // Per-session export buttons for the next-day cards and the all-upcoming rows.
        host.querySelectorAll('.gius-pr-next-card, .gius-pr-row').forEach(item => {
            const idx = Number(item.dataset.idx);
            const s = sessions[idx];
            const act = item.querySelector('.gius-pr-actions');
            if (!s || !act) return;
            act.innerHTML = exportButtonsHTML(s);
            act.querySelector('.gius-pr-ics').addEventListener('click', () =>
                downloadICS(s, `proctoring-${s.courseCode}.ics`));
        });

        // "Download all" → every upcoming session in one file.
        const allBtn = host.querySelector('#gius-pr-ics-all');
        if (allBtn) allBtn.addEventListener('click', () => downloadICS(sessions, 'proctoring-all.ics'));
    }

    async function fetchTimetable() {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
        try {
            const resp = await fetch(TIMETABLE_URL, { credentials: 'include', signal: ctrl.signal });
            if (!resp.ok) throw new Error('HTTP ' + resp.status);
            const html = await resp.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            if (!doc.getElementById('MainContent_tmTblDg') && !doc.getElementById('MainContent_coverDG')) {
                throw new Error('not-logged-in');
            }
            return parseSessions(doc);
        } finally {
            clearTimeout(timer);
        }
    }

    function ensureHost() {
        let host = document.getElementById('gius-pr-widget');
        if (host) return host;
        host = document.createElement('div');
        host.id = 'gius-pr-widget';
        host.className = 'gius-pr-widget';
        // Render directly under the "Target List" block, spanning the page width.
        const target = document.getElementById('MainContent_div_grid');
        if (target) {
            target.insertAdjacentElement('afterend', host);
        } else {
            (document.querySelector('.page-content') ||
             document.querySelector('[id*=MainContent]') ||
             document.body).prepend(host);
        }
        return host;
    }

    // Escape portal-derived text before putting it into innerHTML.
    function esc(s) {
        return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    // Human "when" for a session: ongoing / today / tomorrow / in N days.
    function whenLabel(s, now) {
        if (s.start <= now && s.end >= now) return 'ongoing';
        const startDay = new Date(now); startDay.setHours(0, 0, 0, 0);
        const tgtDay = new Date(s.start); tgtDay.setHours(0, 0, 0, 0);
        const d = Math.round((tgtDay - startDay) / 86400000);
        if (d <= 0) return 'today';
        if (d === 1) return 'tomorrow';
        return `in ${d} days`;
    }

    function render(sessions, opts = {}) {
        lastRendered = sessions;
        const now = new Date();
        // Keep sessions that haven't ended yet — an in-progress duty is still "next".
        const upcoming = sessions.filter(s => s.end >= now).sort((a, b) => a.start - b.start);
        const next = upcoming[0] || null;

        const host = ensureHost();

        if (!next) {
            host.innerHTML = `<div class="gius-pr-head">Proctoring</div>
                <div class="gius-pr-empty">No upcoming proctoring duties${opts.stale ? ' (offline cache)' : ''}.</div>`;
            return;
        }

        const badge = s => s.role === 'cover'
            ? '<span class="gius-pr-badge gius-pr-badge-cover">Covering</span>'
            : '';

        // All duties sharing the next session's calendar day.
        const nextDay = upcoming.filter(s => s.start.toDateString() === next.start.toDateString());

        // Exam name + (control room when supervising) — hall is in the title, role/type is omitted.
        const metaLine = s => `${esc(s.examName)}${s.type === 'Supervisor' ? ` · Control Room ${esc(s.controlRoom)}` : ''}`;

        const nextCard = s => `
            <div class="gius-pr-next-card" data-idx="${upcoming.indexOf(s)}">
                <div class="gius-pr-next-title">${dutyLabel(s)}: ${esc(s.courseCode)} · Hall ${esc(s.hall)} ${badge(s)}</div>
                <div class="gius-pr-next-time">${fmtHuman(s.start)} – ${fmtTimeOnly(s.end)}</div>
                <div class="gius-pr-meta">${metaLine(s)}</div>
                <div class="gius-pr-actions"></div>
            </div>`;

        const nextHtml = `
            <div id="gius-pr-next" class="gius-pr-next">
                <div class="gius-pr-next-head">${fmtDateOnly(next.start)} · <b>${whenLabel(next, now)}</b>${nextDay.length > 1 ? ` · ${nextDay.length} duties` : ''}</div>
                ${nextDay.map(nextCard).join('')}
                ${upcoming.length > 1 ? `<button type="button" id="gius-pr-ics-all" class="gius-pr-act gius-btn gius-pr-act-all" title="Download all upcoming as .ics">Download all</button>` : ''}
            </div>`;

        // Exams left after the next session's day (the next block already shows that day).
        const nextDaySet = new Set(nextDay);
        const remaining = upcoming.filter(s => !nextDaySet.has(s));

        const listHtml = remaining.length ? `
            <button type="button" id="gius-pr-toggle-all" class="gius-pr-toggle gius-btn${allExpanded ? ' gius-pr-toggle-open' : ''}" aria-expanded="${allExpanded}" aria-controls="gius-pr-all">Remaining exams (${remaining.length})</button>
            <div id="gius-pr-all" class="gius-pr-expand-wrapper${allExpanded ? ' gius-pr-expanded' : ''}">
                <div class="gius-pr-expand-inner">
                    <div class="gius-pr-all">
                        ${remaining.map(s => `
                            <div class="gius-pr-row" data-idx="${upcoming.indexOf(s)}">
                                <div class="gius-pr-title">${dutyLabel(s)}: ${esc(s.courseCode)} · Hall ${esc(s.hall)} ${badge(s)}</div>
                                <div class="gius-pr-row-time">${fmtHuman(s.start)} – ${fmtTimeOnly(s.end)}</div>
                                <div class="gius-pr-meta">${esc(s.examName)}</div>
                                <div class="gius-pr-actions"></div>
                            </div>`).join('')}
                    </div>
                </div>
            </div>` : '';

        host.innerHTML = `<div class="gius-pr-head">Next Proctoring${opts.stale ? ' · <span class="gius-pr-stale">offline cache</span>' : ''}</div>
            ${nextHtml}${listHtml}`;

        const toggleBtn = host.querySelector('#gius-pr-toggle-all');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const el = host.querySelector('#gius-pr-all');
                const open = el.classList.toggle('gius-pr-expanded');
                toggleBtn.classList.toggle('gius-pr-toggle-open', open);
                toggleBtn.setAttribute('aria-expanded', String(open));
                allExpanded = open;
            });
        }

        host._sessions = upcoming;
        wireExports(host);
    }

    function injectStyles() {
        if (document.getElementById('gius-pr-style')) return;
        const css = `
            .gius-pr-widget{font-family:inherit;display:block;width:100%;box-sizing:border-box;
                margin:28px 0;border-radius:12px;padding:16px 18px;
                background:#ffffff;color:#1e1e2e;box-shadow:0 2px 10px rgba(0,0,0,.12);}
            .gius-pr-widget *{box-sizing:border-box;}
            .gius-pr-head{font-weight:700;font-size:16px;margin-bottom:12px;}
            .gius-pr-stale{color:#b8860b;font-weight:600;font-size:12px;}
            .gius-pr-next{background:#f8f9fa;border:1px solid #e9ecef;border-left:4px solid #ffc107;
                border-radius:12px;padding:14px;margin-bottom:14px;}
            .gius-pr-next-head{font-size:13px;font-weight:700;color:#272c33;
                text-transform:uppercase;letter-spacing:.03em;margin-bottom:10px;}
            .gius-pr-next-card{background:#ffffff;border-radius:10px;padding:14px 16px;
                box-shadow:0 1px 4px rgba(0,0,0,.08);}
            .gius-pr-next-card + .gius-pr-next-card{margin-top:10px;}
            .gius-pr-next-title{font-size:17px;font-weight:700;line-height:1.3;margin-bottom:6px;}
            .gius-pr-next-time{font-size:14px;font-weight:600;color:#272c33;margin-bottom:4px;}
            .gius-pr-act-all{margin-top:12px;}
            .gius-pr-title{font-weight:600;margin-bottom:4px;}
            .gius-pr-meta{font-size:13px;opacity:.85;margin:2px 0;}
            .gius-pr-badge{display:inline-block;vertical-align:middle;line-height:1;font-size:11px;font-weight:700;
                padding:3px 9px;border-radius:999px;margin-left:6px;white-space:nowrap;}
            .gius-pr-badge-cover{background:#fff8e1;color:#8a6500;border:1px solid #ffc107;}
            .gius-pr-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
            .gius-pr-act{font-size:12px;font-weight:600;padding:4px 10px;border-radius:7px;cursor:pointer;
                border:1px solid #d0d3dc;background:transparent;color:inherit;text-decoration:none;}
            .gius-pr-act:hover{background:#e6e9ef;}
            .gius-pr-toggle{margin-top:6px;font-size:13px;font-weight:700;background:transparent;border:none;
                color:#272c33;cursor:pointer;padding:4px 0;}
            .gius-pr-toggle::before{content:"▸";display:inline-block;margin-right:6px;
                transition:transform .3s ease-out;}
            .gius-pr-toggle-open::before{transform:rotate(90deg);}
            .gius-pr-expand-wrapper{display:grid;grid-template-rows:0fr;
                transition:grid-template-rows .3s ease-out;}
            .gius-pr-expand-wrapper.gius-pr-expanded{grid-template-rows:1fr;}
            .gius-pr-expand-inner{overflow:hidden;}
            .gius-pr-all{margin-top:6px;display:flex;flex-direction:column;gap:8px;}
            .gius-pr-row{background:#f5f5fa;border-radius:8px;padding:10px 12px;}
            .gius-pr-row-time{font-size:14px;font-weight:700;color:#272c33;margin:2px 0 4px;}
            .gius-pr-empty{font-size:13px;opacity:.85;}

            /* Dark mode — reacts live to the GIU Dark Mode script's html.gius-dark class (Catppuccin Mocha). */
            html.gius-dark .gius-pr-widget{background:#1e1e2e;color:#cdd6f4;box-shadow:0 2px 10px rgba(0,0,0,.45);}
            html.gius-dark .gius-pr-next{background:#181825;border-color:#313244;border-left-color:#f9e2af;}
            html.gius-dark .gius-pr-next-head{color:#cdd6f4;}
            html.gius-dark .gius-pr-next-card{background:#11111b;box-shadow:none;}
            html.gius-dark .gius-pr-next-time,
            html.gius-dark .gius-pr-row-time{color:#f9e2af;}
            html.gius-dark .gius-pr-badge-cover{background:#2a2410;color:#f9e2af;border-color:#f9e2af;}
            html.gius-dark .gius-pr-row{background:#181825;}
            html.gius-dark .gius-pr-act{border-color:#45475a;color:#cdd6f4;}
            html.gius-dark .gius-pr-act:hover{background:#313244;}
            html.gius-dark .gius-pr-toggle{color:#cdd6f4;}
            html.gius-dark .gius-pr-stale{color:#f9e2af;}`;
        const style = document.createElement('style');
        style.id = 'gius-pr-style';
        style.textContent = css;
        document.head.appendChild(style);
    }

    async function boot() {
        injectStyles();
        const cache = loadCache();
        if (cache) render(cache.sessions, { stale: isStale(cache.fetchedAt) });
        try {
            const sessions = await fetchTimetable();
            saveCache(sessions);
            render(sessions);
        } catch {
            if (!cache) {
                const host = ensureHost();
                host.innerHTML = `<div class="gius-pr-head">Proctoring</div>
                    <div class="gius-pr-empty">Couldn't load schedule. <button type="button" id="gius-pr-retry" class="gius-pr-toggle gius-btn">Retry</button></div>`;
                host.querySelector('#gius-pr-retry').addEventListener('click', boot);
            }
        }
    }

    boot();

    // ── test hook (extended as functions are added) ──
    window.__giuProctorReminder = {
        parseExamString, parseSessions, pickNext, loadCache, saveCache, isStale,
        buildICS, googleCalUrl, mailtoUrl,
        _rerender: () => { if (lastRendered) render(lastRendered); },
    };
})();
