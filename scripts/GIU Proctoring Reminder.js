// ==UserScript==
// @name        GIU Proctoring Reminder
// @description Shows your next proctoring session on the portal home page and exports reminders to calendar/email
// @match       https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx
// @namespace   ramin0
// @version     1.0
// @author      Mo.Elmaadawy
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    const CACHE_KEY = 'giuProctorTimetableV1';
    const TIMETABLE_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/ViewTimeTable_m.aspx';
    const TTL_MS = 6 * 60 * 60 * 1000; // 6h

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
    function buildVEVENT(s) {
        const summary = `Proctoring: ${s.courseCode} ${s.examName}`.trim();
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

    function fmtHuman(d) {
        return d.toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    }
    function googleCalUrl(s) {
        const text = `Proctoring: ${s.courseCode} ${s.examName}`.trim();
        const dates = `${icsDate(s.start)}/${icsDate(s.end)}`;
        const details = `${s.type}${s.role === 'cover' ? ' (Covering)' : ''} — ${s.program}\nReminders: 1 day and 1 hour before.`;
        const location = `Hall ${s.hall}, Control Room ${s.controlRoom}`;
        const p = new URLSearchParams({ action: 'TEMPLATE', text, dates, details, location });
        return `https://calendar.google.com/calendar/render?${p.toString().replace(/\+/g, '%20')}`;
    }
    function mailtoUrl(s) {
        const subject = `Proctoring reminder: ${s.courseCode} ${s.examName}`.trim();
        const body = [
            `You have a proctoring duty${s.role === 'cover' ? ' (covering for a colleague)' : ''}.`,
            ``,
            `Course:  ${s.courseCode} ${s.examName}`,
            `Program: ${s.program}`,
            `When:    ${fmtHuman(s.start)} – ${fmtHuman(s.end)}`,
            `Hall:    ${s.hall}`,
            `Control: ${s.controlRoom}`,
            `Role:    ${s.type}`,
            ``,
            `Set reminders 1 day and 1 hour before.`,
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
            <button class="gius-pr-act gius-pr-ics" title="Download .ics">📅 .ics</button>
            <a class="gius-pr-act gius-pr-gcal" target="_blank" rel="noopener" href="${googleCalUrl(s)}" title="Google Calendar">G Cal</a>
            <a class="gius-pr-act gius-pr-mail" href="${mailtoUrl(s)}" title="Email reminder">✉ Email</a>`;
    }

    function wireExports(host) {
        const next = host._next;
        const sessions = host._sessions;

        const nextActions = host.querySelector('#gius-pr-next .gius-pr-actions');
        if (nextActions && next) {
            nextActions.innerHTML = exportButtonsHTML(next) +
                `<button id="gius-pr-ics-all" class="gius-pr-act" title="Download all upcoming">⬇ All (.ics)</button>`;
            nextActions.querySelector('.gius-pr-ics').addEventListener('click', () =>
                downloadICS(next, `proctoring-${next.courseCode}.ics`));
            nextActions.querySelector('#gius-pr-ics-all').addEventListener('click', () =>
                downloadICS(sessions, 'proctoring-all.ics'));
        }

        host.querySelectorAll('.gius-pr-row').forEach(row => {
            const idx = Number(row.dataset.idx);
            const s = sessions[idx];
            const act = row.querySelector('.gius-pr-actions');
            if (!s || !act) return;
            act.innerHTML = exportButtonsHTML(s);
            act.querySelector('.gius-pr-ics').addEventListener('click', () =>
                downloadICS(s, `proctoring-${s.courseCode}.ics`));
        });
    }

    async function fetchTimetable() {
        const resp = await fetch(TIMETABLE_URL, { credentials: 'include' });
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        const html = await resp.text();
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return parseSessions(doc);
    }

    function mountPoint() {
        return document.querySelector('.page-content') ||
               document.querySelector('[id*=MainContent]') ||
               document.body;
    }

    function relTime(d, now) {
        const ms = d - now;
        if (ms < 0) return 'now';
        const day = 86400000, hr = 3600000;
        if (ms >= day) { const n = Math.round(ms / day); return `in ${n} day${n > 1 ? 's' : ''}`; }
        const n = Math.max(1, Math.round(ms / hr)); return `in ${n} hour${n > 1 ? 's' : ''}`;
    }

    function render(sessions, opts = {}) {
        const now = new Date();
        const upcoming = sessions.filter(s => s.start >= now).sort((a, b) => a.start - b.start);
        const next = upcoming[0] || null;

        let host = document.getElementById('gius-pr-widget');
        if (!host) {
            host = document.createElement('div');
            host.id = 'gius-pr-widget';
            host.className = 'gius-pr-widget';
            mountPoint().prepend(host);
        }

        if (!next) {
            host.innerHTML = `<div class="gius-pr-head">📋 Proctoring</div>
                <div class="gius-pr-empty">No upcoming proctoring duties${opts.stale ? ' (offline cache)' : ''}.</div>`;
            return;
        }

        const badge = s => s.role === 'cover'
            ? '<span class="gius-pr-badge gius-pr-badge-cover">Covering</span>'
            : '<span class="gius-pr-badge gius-pr-badge-own">Own</span>';

        const nextHtml = `
            <div id="gius-pr-next" class="gius-pr-next">
                <div class="gius-pr-title">Proctoring: ${next.courseCode} ${next.examName} ${badge(next)}</div>
                <div class="gius-pr-meta">${fmtHuman(next.start)} · <b>${relTime(next.start, now)}</b></div>
                <div class="gius-pr-meta">Hall ${next.hall} · Control Room ${next.controlRoom} · ${next.type}</div>
                <div class="gius-pr-actions" data-idx="next"></div>
            </div>`;

        const listHtml = `
            <button type="button" id="gius-pr-toggle-all" class="gius-pr-toggle">All upcoming (${upcoming.length})</button>
            <div id="gius-pr-all" class="gius-pr-all" hidden>
                ${upcoming.map((s, i) => `
                    <div class="gius-pr-row" data-idx="${i}">
                        <div class="gius-pr-title">${s.courseCode} ${s.examName} ${badge(s)}</div>
                        <div class="gius-pr-meta">${fmtHuman(s.start)} · Hall ${s.hall}</div>
                        <div class="gius-pr-actions" data-idx="${i}"></div>
                    </div>`).join('')}
            </div>`;

        host.innerHTML = `<div class="gius-pr-head">📋 Next Proctoring${opts.stale ? ' · <span class="gius-pr-stale">offline cache</span>' : ''}</div>
            ${nextHtml}${listHtml}`;

        host.querySelector('#gius-pr-toggle-all').addEventListener('click', () => {
            const el = host.querySelector('#gius-pr-all');
            el.hidden = !el.hidden;
        });

        // export buttons wired in Task 8
        host._sessions = upcoming;
        host._next = next;
        if (typeof wireExports === 'function') wireExports(host);
    }

    function injectStyles() {
        if (document.getElementById('gius-pr-style')) return;
        const dark = matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
        const css = `
            .gius-pr-widget{font-family:inherit;margin:0 0 16px;border-radius:12px;padding:14px 16px;
                background:${dark ? '#1e1e2e' : '#ffffff'};color:${dark ? '#cdd6f4' : '#1e1e2e'};
                box-shadow:0 2px 10px rgba(0,0,0,.12);}
            .gius-pr-head{font-weight:700;font-size:15px;margin-bottom:10px;}
            .gius-pr-stale{color:#f9e2af;font-weight:600;font-size:12px;}
            .gius-pr-next{background:${dark ? '#181825' : '#f5f5fa'};border-radius:10px;padding:10px 12px;margin-bottom:8px;}
            .gius-pr-title{font-weight:600;margin-bottom:4px;}
            .gius-pr-meta{font-size:13px;opacity:.85;margin:2px 0;}
            .gius-pr-badge{font-size:11px;font-weight:700;padding:1px 7px;border-radius:9px;margin-left:6px;}
            .gius-pr-badge-own{background:${dark ? '#313244' : '#e6e9ef'};color:${dark ? '#cdd6f4' : '#4c4f69'};}
            .gius-pr-badge-cover{background:${dark ? '#1e1e38' : '#eef2ff'};color:#6366f1;border:1px solid #6366f1;}
            .gius-pr-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
            .gius-pr-act{font-size:12px;font-weight:600;padding:4px 10px;border-radius:7px;cursor:pointer;
                border:1px solid ${dark ? '#45475a' : '#d0d3dc'};background:transparent;color:inherit;text-decoration:none;}
            .gius-pr-act:hover{background:${dark ? '#313244' : '#e6e9ef'};}
            .gius-pr-toggle{margin-top:6px;font-size:13px;font-weight:600;background:transparent;border:none;
                color:#6366f1;cursor:pointer;padding:4px 0;}
            .gius-pr-all{margin-top:6px;display:flex;flex-direction:column;gap:8px;}
            .gius-pr-row{background:${dark ? '#181825' : '#f5f5fa'};border-radius:8px;padding:8px 10px;}
            .gius-pr-empty{font-size:13px;opacity:.85;}`;
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
        } catch (e) {
            if (!cache) {
                const host = document.getElementById('gius-pr-widget') || (() => {
                    const d = document.createElement('div');
                    d.id = 'gius-pr-widget'; d.className = 'gius-pr-widget';
                    mountPoint().prepend(d); return d;
                })();
                host.innerHTML = `<div class="gius-pr-head">📋 Proctoring</div>
                    <div class="gius-pr-empty">Couldn't load schedule. <button type="button" id="gius-pr-retry" class="gius-pr-toggle">Retry</button></div>`;
                host.querySelector('#gius-pr-retry').addEventListener('click', boot);
            }
        }
    }

    boot();

    // ── test hook (extended as functions are added) ──
    window.__giuProctorReminder = { parseExamString, parseSessions, pickNext, loadCache, saveCache, isStale, buildICS, googleCalUrl, mailtoUrl };
})();
