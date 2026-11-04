// ==UserScript==
// @name        GIU Proctoring Reminder
// @description Shows your next proctoring session on the portal home page and exports reminders to calendar/email
// @match       https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx
// @namespace   Cyn0
// @version     5.0.1
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Proctoring%20Reminder.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Proctoring%20Reminder.js
// @author      Mo.Elmaadawy
// @icon        data:image/png;base64,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
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

function waitFor(selector, cb, { root = document, timeout = 15000 } = {}) {
            const existing = root.querySelector(selector);
            if (existing) { cb(existing); return () => {}; }
            const obs = new MutationObserver(() => {
                const el = root.querySelector(selector);
                if (el) { obs.disconnect(); cb(el); }
            });
            obs.observe(root.documentElement || root, { childList: true, subtree: true });
            if (timeout) setTimeout(() => obs.disconnect(), timeout);
            return () => obs.disconnect();
        }

function escapeHtml(str) {
            return String(str == null ? '' : str)
                .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }

function injectStyle(id, css) {
            let el = document.getElementById(id);
            if (!el) {
                el = document.createElement('style');
                el.id = id;
                (document.head || document.documentElement).appendChild(el);
            }
            el.textContent = css;
            return el;
        }

// The one button style every SuperScript feature uses (mock board 1), injected once: `gs-btn` (white),
// `gs-btn--primary` (yellow, the one main action), `gs-btn--danger` (solid red), `gs-btn--quiet` (blue
// text), `gs-btn--sm` (compact). Colours come from the 5.0 tokens when the portal look is on, with the
// light values as fallback, so a token theme (dark) reaches every button. Features keep their own old
// class names next to it as hooks for their code.
function uiStyles() {
            if (document.getElementById('gius-ui-styles')) return;
            const style = document.createElement('style');
            style.id = 'gius-ui-styles';
            const B = ':is(button, a, input).gs-btn.gs-btn';
            style.textContent = `
                ${B} {
                    display: inline-flex; align-items: center; justify-content: center; gap: 6px; box-sizing: border-box;
                    height: 36px; min-height: 0; padding: 0 14px; border: 1px solid var(--gs-line, #d0d7de); border-radius: 6px;
                    background: var(--gs-card, #ffffff); color: var(--gs-text, #1f2328); box-shadow: none; transform: none;
                    font: 600 13px/1 var(--gs-font, system-ui, 'Segoe UI', Roboto, Arial, sans-serif); letter-spacing: normal; text-transform: none;
                    text-decoration: none; white-space: nowrap; vertical-align: middle; cursor: pointer; opacity: 1; transition: background-color .12s, border-color .12s;
                }
                ${B}:hover:not(:disabled) { background: var(--gs-sunk, #f6f8fa); border-color: var(--gs-line-2, #afb8c1); color: var(--gs-text, #1f2328); box-shadow: none; transform: none; }
                ${B}:focus-visible { outline: 2px solid var(--gs-focus, #0969da); outline-offset: 2px; }
                ${B}.gs-btn--primary { border-color: var(--gs-accent-line, #d9a400); background: var(--gs-accent, #ffc107); color: var(--gs-accent-fg, #1a1a1a); }
                ${B}.gs-btn--primary:hover:not(:disabled) { border-color: var(--gs-accent-line, #d9a400); background: var(--gs-accent-h, #ffb300); color: var(--gs-accent-fg, #1a1a1a); }
                ${B}.gs-btn--danger { border-color: var(--gs-danger, #cf222e); background: var(--gs-danger, #cf222e); color: #ffffff; }
                ${B}.gs-btn--danger:hover:not(:disabled) { border-color: var(--gs-danger-h, #a40e26); background: var(--gs-danger-h, #a40e26); color: #ffffff; }
                ${B}.gs-btn--quiet { height: auto; padding: 2px 0; border-color: transparent; background: transparent; color: var(--gs-focus, #0969da); }
                ${B}.gs-btn--quiet:hover:not(:disabled) { border-color: transparent; background: transparent; color: var(--gs-focus, #0969da); text-decoration: underline; }
                ${B}.gs-btn--sm { height: 30px; padding: 0 10px; font-size: 12px; }
                ${B}:disabled { border-color: var(--gs-line, #d0d7de); background: var(--gs-disabled-bg, #eaeef2); color: var(--gs-disabled-fg, #6e7781); cursor: not-allowed; }`;
            (document.head || document.documentElement).appendChild(style);
        }

// The one dialog every feature uses, in the 5.0 look (mock: Feedback board): a title, an optional ✕,
// a body (a line of text, HTML or a node) and a row of actions, the primary one yellow. Escape, the ✕
// and a click outside dismiss it; Tab stays inside. Options:
//   title; text (one muted line) or html / node (the body); actions: [{ label, value, primary, danger,
//   id, disabled }]; wide; closeX (default true); id (layer id); layerClass; dialogClass; focus (a
//   selector, else the primary action); onAction(value, dlg): return false (or a promise of false) to
//   keep it open.
// Returns { el, body, result, setBody(html | node), setActions(list), button(value), close(value) };
// `result` resolves with the value it closed with (null when dismissed).
function openDialog(opts) {
            const o = Object.assign({ actions: [], closeX: true }, opts);
            uiStyles();
            if (!document.getElementById('gius-dialog-style')) {
                const style = document.createElement('style');
                style.id = 'gius-dialog-style';
                const font = "system-ui, 'Segoe UI', Roboto, Arial, sans-serif";
                style.textContent = `
                    .gius-dialog-layer { position: fixed; inset: 0; z-index: 2147483647; display: flex; align-items: center; justify-content: center; padding: 16px; background: rgba(31, 35, 40, .45); font-family: ${font}; }
                    .gius-dialog { display: flex; flex-direction: column; box-sizing: border-box; width: 100%; max-width: 420px; max-height: calc(100vh - 32px); background: #ffffff; border-radius: 10px; box-shadow: 0 16px 40px rgba(31, 35, 40, .3); color: #1f2328; text-align: left; font: 400 14px/1.5 ${font}; }
                    .gius-dialog.gius-dialog--wide { max-width: 560px; }
                    .gius-dialog-hdr { display: flex; align-items: flex-start; gap: 12px; padding: 18px 20px 0; }
                    .gius-dialog-title { flex: 1; margin: 0; font: 700 16px/1.35 ${font}; color: #1f2328; }
                    .gius-dialog-x { flex: none; width: 28px; height: 28px; margin: -4px -6px 0 0; padding: 0; border: 0; border-radius: 6px; background: transparent; color: #59636e; font: 400 15px/28px ${font}; cursor: pointer; }
                    .gius-dialog-x:hover { background: #f6f8fa; color: #1f2328; }
                    .gius-dialog-body { display: flex; flex-direction: column; gap: 12px; padding: 8px 20px 4px; overflow-y: auto; overflow-wrap: anywhere; }
                    .gius-dialog-body:empty { display: none; }
                    .gius-dialog-text { margin: 0; color: #59636e; font-size: 13px; white-space: pre-line; }
                    .gius-dialog-field { display: grid; gap: 4px; font: 600 13px ${font}; color: #59636e; }
                    .gius-dialog-field input { box-sizing: border-box; height: 36px; padding: 0 10px; border: 1px solid #d0d7de; border-radius: 6px; font: 400 14px ${font}; color: #1f2328; }
                    .gius-dialog-field input:focus { border-color: #0969da; box-shadow: 0 0 0 3px rgba(9, 105, 218, .25); outline: 0; }
                    .gius-dialog-actions { display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 10px; padding: 16px 20px 20px; }
                    .gius-dialog-actions:empty { display: none; }
                    .gius-dialog input:is([type="checkbox"], [type="radio"]) { width: 18px; height: 18px; margin: 0; accent-color: #272c33; vertical-align: -4px; }
                    html:is(.gius-dark, [data-gius-dark]) .gius-dialog { background: var(--gs-dk-card, #1e1e2e); color: var(--gs-dk-text, #cdd6f4); }
                    html:is(.gius-dark, [data-gius-dark]) .gius-dialog-title { color: var(--gs-dk-text, #cdd6f4); }
                    html:is(.gius-dark, [data-gius-dark]) :is(.gius-dialog-text, .gius-dialog-field, .gius-dialog-x) { color: var(--gs-dk-muted, #a6adc8); }
                    html:is(.gius-dark, [data-gius-dark]) .gius-dialog-x:hover { background: var(--gs-dk-line, #313244); }
                    html:is(.gius-dark, [data-gius-dark]) .gius-dialog-field input { background: var(--gs-dk-card, #1e1e2e); border-color: var(--gs-dk-line-2, #45475a); color: var(--gs-dk-text, #cdd6f4); }
                    /* 5.0 dark mode (portal look): the same parts in its tokens. */
                    html[data-gius-dark] .gius-dialog { background: var(--gs-card); color: var(--gs-text); }
                    html[data-gius-dark] .gius-dialog-title { color: var(--gs-text); }
                    html[data-gius-dark] :is(.gius-dialog-text, .gius-dialog-field, .gius-dialog-x) { color: var(--gs-muted); }
                    html[data-gius-dark] .gius-dialog-x:hover { background: var(--gs-sunk); }
                    html[data-gius-dark] .gius-dialog-field input { background: var(--gs-sunk); border-color: var(--gs-line); color: var(--gs-text); }
                    html[data-gius-dark] .gius-dialog input:is([type="checkbox"], [type="radio"]) { accent-color: var(--gs-accent); }`;
                (document.head || document.documentElement).appendChild(style);
            }
            const layer = document.createElement('div');
            layer.className = 'gius-dialog-layer' + (o.layerClass ? ' ' + o.layerClass : '');
            if (o.id) layer.id = o.id;
            layer.innerHTML = '<div class="gius-dialog" role="dialog" aria-modal="true"><div class="gius-dialog-hdr"><h2 class="gius-dialog-title"></h2></div>'
                + '<div class="gius-dialog-body"></div><div class="gius-dialog-actions"></div></div>';
            const box = layer.firstElementChild;
            if (o.wide) box.classList.add('gius-dialog--wide');
            if (o.dialogClass) box.className += ' ' + o.dialogClass;
            const titleEl = box.querySelector('.gius-dialog-title');
            titleEl.id = 'gius-dialog-title-' + Math.random().toString(36).slice(2, 8);
            titleEl.textContent = o.title || '';
            box.setAttribute('aria-labelledby', titleEl.id);
            if (o.closeX) {
                const x = document.createElement('button');
                x.type = 'button';
                x.className = 'gius-dialog-x';
                x.setAttribute('aria-label', 'Close');
                x.textContent = '✕';
                box.querySelector('.gius-dialog-hdr').appendChild(x);
            }
            const body = box.querySelector('.gius-dialog-body');
            const actionsEl = box.querySelector('.gius-dialog-actions');
            let settle;
            const result = new Promise(resolve => { settle = resolve; });
            const before = document.activeElement;
            let closed = false;
            // Only the topmost dialog answers the keyboard.
            const onKey = e => {
                const layers = document.querySelectorAll('.gius-dialog-layer');
                if (layers[layers.length - 1] !== layer) return;
                if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); dlg.close(null); return; }
                if (e.key !== 'Tab') return;
                const stops = Array.from(box.querySelectorAll('button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'))
                    .filter(el => !el.disabled && el.offsetParent !== null);
                if (!stops.length) return;
                e.preventDefault();
                e.stopImmediatePropagation();
                const i = stops.indexOf(document.activeElement);
                stops[(i + (e.shiftKey ? -1 : 1) + stops.length) % stops.length].focus();
            };
            const dlg = {
                el: box,
                body,
                result,
                setBody(content) {
                    if (content == null) body.textContent = '';
                    else if (typeof content === 'string') body.innerHTML = content;
                    else body.replaceChildren(content);
                },
                setActions(list) {
                    actionsEl.textContent = '';
                    (list || []).forEach(a => {
                        const b = document.createElement('button');
                        b.type = 'button';
                        b.className = 'gius-dialog-btn gs-btn' + (a.primary ? ' gius-dialog-btn--primary gs-btn--primary' : '') + (a.danger ? ' gius-dialog-btn--danger gs-btn--danger' : '');
                        b.dataset.act = String(a.value);
                        if (a.id) b.id = a.id;
                        if (a.disabled) b.disabled = true;
                        b.textContent = a.label;
                        b.addEventListener('click', async () => {
                            const keep = o.onAction ? await o.onAction(a.value, dlg) : undefined;
                            if (keep !== false) dlg.close(a.value);
                        });
                        actionsEl.appendChild(b);
                    });
                },
                button(value) { return actionsEl.querySelector(`[data-act="${String(value)}"]`); },
                close(value = null) {
                    if (closed) return;
                    closed = true;
                    document.removeEventListener('keydown', onKey, true);
                    layer.remove();
                    if (before && typeof before.focus === 'function' && document.contains(before)) before.focus();
                    settle(value);
                },
            };
            if (o.node) dlg.setBody(o.node);
            else if (o.html != null) dlg.setBody(o.html);
            else if (o.text) {
                const p = document.createElement('p');
                p.className = 'gius-dialog-text';
                p.textContent = o.text;
                body.appendChild(p);
            }
            dlg.setActions(o.actions);
            layer.addEventListener('click', e => {
                if (e.target === layer || e.target.closest('.gius-dialog-x')) dlg.close(null);
            });
            document.addEventListener('keydown', onKey, true);
            document.body.appendChild(layer);
            const first = (o.focus && box.querySelector(o.focus)) || actionsEl.querySelector('.gius-dialog-btn--primary:not(:disabled)')
                || actionsEl.querySelector('.gius-dialog-btn:not(:disabled)');
            if (first) first.focus();
            return dlg;
        }

function warn(feature, ...args) { console.warn(`[GIU-SS:${feature}]`, ...args); }

function portalUrl(path) { return location.origin + path; }

// IIS's own error page (e.g. "401 - Unauthorized" after a failed sign-in):
// no portal markup at all, so nothing may be injected into it. Every real
// portal page is an ASP.NET WebForm, so it always has a <form>.
function isServerErrorPage() {
    if (document.querySelector('form')) return false;
    const h1 = document.querySelector('h1');
    return /^\s*[45]\d\d\s*-/.test(document.title) || (!!h1 && /server error/i.test(h1.textContent));
}

    // Server error page (e.g. IIS 401): no portal markup — inject nothing.
    if (isServerErrorPage()) return;

    const S = { waitFor, escapeHtml, injectStyle, warn, portalUrl, openDialog, uiStyles };

function proctorReminder(S) {
            const CACHE_KEY = 'giuProctorTimetableV1';
            const TIMETABLE_URL = S.portalUrl('/GIUb/INTStaff/ViewTimeTable_m.aspx');
            const TTL_MS = 6 * 60 * 60 * 1000; // 6h
            const FETCH_TIMEOUT_MS = 15000;
            const HOME_BOOT_DELAY_MS = 800;

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

            // Parse the portal's "M/D/YYYY h:mm:ss AM/PM" timestamps deterministically (don't trust
            // engine-specific `new Date(string)` for non-ISO formats — Firefox treats it as undefined).
            function parseDate(str) {
                const m = String(str).trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?\s*([AaPp][Mm])?$/);
                if (m) {
                    let hh = +m[4];
                    const ap = m[7];
                    if (ap) {
                        const pm = /p/i.test(ap);
                        if (pm && hh < 12) hh += 12;
                        if (!pm && hh === 12) hh = 0;
                    }
                    const d = new Date(+m[3], +m[1] - 1, +m[2], hh, +m[5], +(m[6] || 0));
                    return isNaN(d.getTime()) ? null : d;
                }
                const d = new Date(str); // ISO / other fallback
                return isNaN(d.getTime()) ? null : d;
            }

            function parseTable(doc, id, role) {
                const tbl = doc.getElementById(id);
                if (!tbl) return [];
                const out = [];
                const rows = Array.from(tbl.rows).slice(1); // skip header
                for (const tr of rows) {
                    const c = tr.cells;
                    if (c.length < 6) continue;
                    const start = parseDate(c[2].textContent);
                    const end = parseDate(c[3].textContent);
                    if (!start || !end) continue;
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

            // The signed-in account ("first.last", from the page's account label), or ""
            // on pages without one. Personal caches carry it, so a shared PC never shows
            // the previous user's data.
            function currentAccount() {
                try {
                    const el = document.querySelector('[id*="lbl_Account"]');
                    return el && el.textContent ? el.textContent.trim().toLowerCase() : '';
                } catch { return ''; }
            }
            // A cache saved for another account is not ours (unknown on either side: keep).
            function ownedByOther(owner) {
                const me = currentAccount();
                return !!(me && owner && owner !== me);
            }

            function saveCache(sessions) {
                const payload = {
                    fetchedAt: Date.now(),
                    owner: currentAccount(),
                    sessions: sessions.map(s => ({ ...s, start: s.start.toISOString(), end: s.end.toISOString() })),
                };
                try { localStorage.setItem(CACHE_KEY, JSON.stringify(payload)); } catch { /* quota */ }
            }

            function loadCache() {
                try {
                    const raw = JSON.parse(localStorage.getItem(CACHE_KEY));
                    if (!raw || !Array.isArray(raw.sessions) || ownedByOther(raw.owner)) return null;
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
            // RFC 5545 §3.1 content-line folding at 75 octets (continuation lines start with a space).
            function foldLine(line) {
                const enc = new TextEncoder();
                if (enc.encode(line).length <= 75) return line;
                let out = '', cur = '', curBytes = 0, started = false;
                for (const ch of line) {
                    const b = enc.encode(ch).length;
                    const limit = started ? 74 : 75;
                    if (curBytes + b > limit) {
                        out += (started ? '\r\n ' : '') + cur;
                        started = true;
                        cur = ch; curBytes = b;
                    } else {
                        cur += ch; curBytes += b;
                    }
                }
                return out + (started ? '\r\n ' : '') + cur;
            }
            function sessionCode(s) { return s.courseCode || 'session'; }
            function sessionTitle(s) { return [s.courseCode, s.examName].filter(Boolean).join(' '); }
            // Hall included: two duties for the same course and start (two halls, or
            // your own plus a cover) must stay two calendar events.
            function sessionUID(s) {
                const hall = String(s.hall || '').replace(/[^A-Za-z0-9]+/g, '');
                return `giu-${sessionCode(s)}-${icsDate(s.start)}${hall ? '-' + hall : ''}@portal.giu-uni.de`;
            }
            function dutyLabel(s) {
                return s.type === 'Supervisor' ? 'Supervising' : 'Proctoring';
            }
            function buildVEVENT(s) {
                const summary = `${dutyLabel(s)}: ${sessionTitle(s)}`.trim();
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
                ].map(foldLine).join('\r\n');
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
                const text = `${dutyLabel(s)}: ${sessionTitle(s)}`.trim();
                const dates = `${icsDate(s.start)}/${icsDate(s.end)}`;
                const details = `${s.type}${s.role === 'cover' ? ' (Covering)' : ''} — ${s.program}`;
                const location = `Hall ${s.hall}, Control Room ${s.controlRoom}`;
                const p = new URLSearchParams({ action: 'TEMPLATE', text, dates, details, location });
                return `https://calendar.google.com/calendar/render?${p.toString().replace(/\+/g, '%20')}`;
            }
            function mailtoUrl(s) {
                const subject = `${dutyLabel(s)} reminder: ${sessionTitle(s)}`.trim();
                const body = [
                    `I have a proctoring duty${s.role === 'cover' ? ' (covering for a colleague)' : ''}.`,
                    ``,
                    `Course:  ${sessionTitle(s)}`,
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
                    <button type="button" class="gius-pr-act gius-btn gius-pr-ics gs-btn gs-btn--sm" title="Download this event as .ics">Download event</button>
                    <a class="gius-pr-act gius-pr-gcal gs-btn gs-btn--sm" target="_blank" rel="noopener" href="${googleCalUrl(s)}" title="Google Calendar">Google Calendar</a>
                    <a class="gius-pr-act gius-pr-mail gs-btn gs-btn--sm" href="${mailtoUrl(s)}" title="Email reminder">Email</a>`;
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
                        downloadICS(s, `proctoring-${sessionCode(s)}.ics`));
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
                if (!host) {
                    host = document.createElement('div');
                    host.id = 'gius-pr-widget';
                    host.className = 'gius-pr-widget';
                }

                // Prefer the attendance widget when present so Next Proctoring stays below it.
                const attendance = document.getElementById('gius-att-widget');
                if (attendance) {
                    if (attendance.nextElementSibling !== host) {
                        attendance.insertAdjacentElement('afterend', host);
                    }
                    return host;
                }

                // Anchor below the Teaching Load widget so the two Home widgets keep a
                // deterministic order (grid → Teaching Load → Next Proctoring) regardless
                // of which feature's async schedule fetch resolves last.
                const teachingLoad = document.getElementById('gius-tl-widget');
                if (teachingLoad) {
                    if (teachingLoad.nextElementSibling !== host) {
                        teachingLoad.insertAdjacentElement('afterend', host);
                    }
                    return host;
                }

                // Render directly under the "Target List" block, spanning the page width.
                const target = document.getElementById('MainContent_div_grid');
                if (target) {
                    if (target.nextElementSibling !== host) {
                        target.insertAdjacentElement('afterend', host);
                    }
                } else {
                    const fallback = document.querySelector('.page-content') ||
                        document.querySelector('[id*=MainContent]') ||
                        document.body;
                    if (fallback.firstElementChild !== host) {
                        fallback.prepend(host);
                    }
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
                        <div class="gius-pr-empty-state">
                            <svg class="gius-pr-empty-icon" viewBox="0 0 24 24" width="44" height="44" fill="none"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <rect x="3" y="4" width="18" height="18" rx="2"/>
                                <path d="M3 10h18M8 2v4M16 2v4"/>
                                <path d="m8.5 15 2 2 4-4"/>
                            </svg>
                            <div class="gius-pr-empty-title">You're all caught up</div>
                            <div class="gius-pr-empty-sub">No proctoring scheduled${opts.stale ? ' · offline cache' : ''}.</div>
                        </div>`;
                    Tips.show({ id: 'proctorReminder', el: host, title: 'Next Proctoring',
                        text: 'Shows your upcoming proctoring duties from the timetable. Export any duty as .ics, Google Calendar, or an email reminder.' });
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
                        ${upcoming.length > 1 ? `<button type="button" id="gius-pr-ics-all" class="gius-pr-act gius-btn gius-pr-act-all gs-btn gs-btn--sm" title="Download all upcoming as .ics">Download all</button>` : ''}
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
                Tips.show({ id: 'proctorReminder', el: host, title: 'Next Proctoring',
                    text: 'Shows your upcoming proctoring duties from the timetable. Export any duty as .ics, Google Calendar, or an email reminder.' });
            }

            function injectStyles() {
                S.uiStyles();
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
                    .gius-pr-empty-state{display:flex;flex-direction:column;align-items:center;text-align:center;
                        gap:4px;padding:26px 12px;}
                    .gius-pr-empty-icon{color:#ffc107;opacity:.95;margin-bottom:4px;}
                    .gius-pr-empty-title{font-size:15px;font-weight:700;}
                    .gius-pr-empty-sub{font-size:13px;opacity:.7;}

                    /* Dark mode — reacts live to the GIU Dark Mode script's html:is(.gius-dark, [data-gius-dark]) class (Catppuccin Mocha). */
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-widget{background:var(--gs-dk-card, #1e1e2e);color:var(--gs-dk-text, #cdd6f4);box-shadow:0 2px 10px rgba(0,0,0,.45);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-next{background:var(--gs-dk-sunk, #181825);border-color:var(--gs-dk-line, #313244);border-left-color:var(--gs-dk-warn, #f9e2af);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-next-head{color:var(--gs-dk-text, #cdd6f4);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-next-card{background:var(--gs-dk-bg, #11111b);box-shadow:none;}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-next-time,
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-row-time{color:var(--gs-dk-warn, #f9e2af);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-badge-cover{background:#2a2410;color:var(--gs-dk-warn, #f9e2af);border-color:var(--gs-dk-warn, #f9e2af);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-row{background:var(--gs-dk-sunk, #181825);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-act{border-color:var(--gs-dk-line-2, #45475a);color:var(--gs-dk-text, #cdd6f4);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-act:hover{background:var(--gs-dk-line, #313244);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-toggle{color:var(--gs-dk-text, #cdd6f4);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-stale{color:var(--gs-dk-warn, #f9e2af);}
                    html:is(.gius-dark, [data-gius-dark]) .gius-pr-empty-icon{color:var(--gs-dk-warn, #f9e2af);}`;
                const style = document.createElement('style');
                style.id = 'gius-pr-style';
                style.textContent = css;
                document.head.appendChild(style);
            }

            async function boot() {
                injectStyles();
                const cache = loadCache();
                const fresh = !!(cache && !isStale(cache.fetchedAt));
                if (cache) render(cache.sessions, { stale: !fresh });
                if (fresh) return; // TTL gates the timetable download, not just the badge
                try {
                    const sessions = await fetchTimetable();
                    saveCache(sessions);
                    render(sessions);
                } catch {
                    if (!cache) {
                        const host = ensureHost();
                        host.innerHTML = `<div class="gius-pr-head">Proctoring</div>
                            <div class="gius-pr-empty">Couldn't load schedule. <button type="button" id="gius-pr-retry" class="gius-pr-toggle gius-btn gs-btn gs-btn--sm">Retry</button></div>`;
                        host.querySelector('#gius-pr-retry').addEventListener('click', boot);
                    }
                }
            }

            // Boot as soon as the Home grid anchor exists (was a fixed setTimeout(boot, 800),
            // the "slow to appear" lag). waitFor fires immediately when the grid is present.
            let booted = false;
            const bootOnce = () => { if (!booted) { booted = true; boot(); } };
            S.waitFor('#MainContent_div_grid', bootOnce, { timeout: HOME_BOOT_DELAY_MS * 4 });
            // Fallback: if the anchor never shows, still boot so the page-content placement runs.
            setTimeout(bootOnce, HOME_BOOT_DELAY_MS * 4);

            // ── test hook (extended as functions are added) ──
            window.__giuProctorReminder = {
                parseExamString, parseSessions, pickNext, loadCache, saveCache, isStale,
                buildICS, googleCalUrl, mailtoUrl,
                _rerender: () => { if (lastRendered) render(lastRendered); },
            };
        }

    // Tips is the bundle's first-run tooltip system; this script ships without it.
    const Tips = { show() {} };
    if (/\/Home\.aspx$/i.test(location.pathname)) {
        proctorReminder(S);
    }
})();
