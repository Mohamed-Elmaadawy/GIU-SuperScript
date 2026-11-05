// ==UserScript==
// @name        GIU Manage Group Grades
// @description Upload and download grades CSV on the Manage Group Grade page.
// @match       https://portal.giu-uni.de/GIUb/INTStaff/ManageGroupGrade_m.aspx
// @namespace   Cyn0
// @version     5.0.3
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Manage%20Group%20Grades.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Manage%20Group%20Grades.js
// @author      Mo.Elmaadawy
// @icon         data:image/png;base64,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
// @grant       none
// @run-at      document-idle
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

function manageGroupGrades(S) {
            function injectGradeStyles() {
                S.uiStyles();
                S.injectStyle('gius-mgg-styles', `
                    @keyframes gmggSlide {
                        from { opacity: 0; transform: translateY(-14px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes gmggFadeIn {
                        from { opacity: 0; }
                        to   { opacity: 1; }
                    }

                    .gmgg-panel {
                        background: #ffffff;
                        border: 1px solid #eeeeee;
                        border-radius: 6px;
                        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
                        position: relative;
                        overflow: hidden;
                        margin: 20px 0 14px;
                        animation: gmggSlide 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
                        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    }
                    .gmgg-panel::before {
                        content: "";
                        position: absolute;
                        top: 0; left: 0;
                        width: 100%; height: 3px;
                        background: #ffc107;
                        z-index: 1;
                    }
                    .gmgg-panel-header {
                        background: #272c33;
                        color: #fff;
                        padding: 10px 14px;
                        border-bottom: 2px solid #ffc107;
                    }
                    .gmgg-panel-title {
                        margin: 0;
                        font-size: 14px;
                        font-weight: 700;
                        color: #fff;
                    }
                    .gmgg-panel-subtitle {
                        margin: 3px 0 0;
                        font-size: 12px;
                        color: rgba(255,255,255,0.7);
                    }
                    .gmgg-panel-body {
                        padding: 14px 16px;
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }
                    .gmgg-btn-row {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 8px;
                    }
                    .gmgg-feedback {
                        font-size: 13px;
                        font-family: 'Open Sans', sans-serif;
                        padding: 8px 10px;
                        border-radius: 6px;
                        animation: gmggFadeIn 0.25s ease;
                    }
                    .gmgg-feedback-success {
                        background: #e8f5e9;
                        color: #15803d;
                        border: 1px solid #a5d6a7;
                    }
                    .gmgg-feedback-error {
                        background: #fee2e2;
                        color: #991b1b;
                        border: 1px solid #fca5a5;
                    }
                    .gmgg-stats {
                        animation: gmggFadeIn 0.35s ease;
                    }
                    .gmgg-stats-title {
                        font-size: 11px;
                        font-weight: 700;
                        color: #6b7280;
                        text-transform: uppercase;
                        letter-spacing: 0.6px;
                        margin-bottom: 8px;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .gmgg-stats-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 6px;
                    }
                    .gmgg-stat-row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 8px 10px;
                        background: #e5e7eb;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        font-size: 13px;
                    }
                    .gmgg-stat-label {
                        font-weight: 600;
                        color: #374151;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .gmgg-stat-val {
                        font-weight: 700;
                        color: #111827;
                        font-family: 'Open Sans', sans-serif;
                    }
                `);
            }

            function computeStats(values) {
                const nums = values.filter(v => v !== '' && Number.isFinite(+v)).map(Number);
                if (!nums.length) return null;
                const min = Math.min(...nums);
                const max = Math.max(...nums);
                const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
                return {
                    min:   min.toFixed(1),
                    max:   max.toFixed(1),
                    avg:   avg.toFixed(1),
                    range: (max - min).toFixed(1),
                    count: nums.length
                };
            }

            function getTableGrades() {
                const grades = [];
                document.querySelectorAll('#Table1 tbody tr').forEach((row, i) => {
                    if (i === 0) return;
                    const val = row.cells[2]?.querySelector('input')?.value;
                    if (val !== undefined && val !== '') grades.push(val);
                });
                return grades;
            }

            function renderStats(body) {
                body.querySelector('.gmgg-stats')?.remove();
                const stats = computeStats(getTableGrades());
                if (!stats || stats.count < 2) return;

                const el = document.createElement('div');
                el.className = 'gmgg-stats';
                el.innerHTML = `
                    <div class="gmgg-stats-title">Grade Statistics — ${stats.count} students</div>
                    <div class="gmgg-stats-grid">
                        <div class="gmgg-stat-row">
                            <span class="gmgg-stat-label">Min</span>
                            <span class="gmgg-stat-val">${stats.min}</span>
                        </div>
                        <div class="gmgg-stat-row">
                            <span class="gmgg-stat-label">Max</span>
                            <span class="gmgg-stat-val">${stats.max}</span>
                        </div>
                        <div class="gmgg-stat-row">
                            <span class="gmgg-stat-label">Avg</span>
                            <span class="gmgg-stat-val">${stats.avg}</span>
                        </div>
                        <div class="gmgg-stat-row">
                            <span class="gmgg-stat-label">Range</span>
                            <span class="gmgg-stat-val">${stats.range}</span>
                        </div>
                    </div>
                `;
                body.appendChild(el);
            }

            // Grade CSV → { map: { studentId: grade }, skipped: [row labels] }.
            // Handles a BOM, ";" files (Excel in Arabic/German locales), quoted fields
            // with commas or line breaks, and decimal commas ("8,5"). The grade is the
            // last column; rows with an ID but no numeric grade are reported as skipped.
            function parseGradeCsvText(text) {
                const src = String(text ?? '').replace(/^\uFEFF/, '');
                const firstLine = src.split(/\r?\n/, 1)[0] || '';
                const delim = firstLine.split(';').length > firstLine.split(',').length ? ';' : ',';
                const rows = [];
                let row = [], field = '', quoted = false;
                for (let i = 0; i < src.length; i++) {
                    const c = src[i];
                    if (quoted) {
                        if (c === '"') {
                            if (src[i + 1] === '"') { field += '"'; i++; } else quoted = false;
                        } else field += c;
                    } else if (c === '"') quoted = true;
                    else if (c === delim) { row.push(field); field = ''; }
                    else if (c === '\n' || c === '\r') {
                        if (c === '\r' && src[i + 1] === '\n') i++;
                        row.push(field); rows.push(row); row = []; field = '';
                    } else field += c;
                }
                if (field !== '' || row.length) { row.push(field); rows.push(row); }

                const headerLen = rows.length ? rows[0].length : 0;
                const map = {};
                const skipped = [];
                rows.forEach(cols => {
                    const label = (cols[0] || '').trim();
                    const m = label.match(/\((\d+)\)/);
                    if (!m) return; // header or a non-student row
                    let raw = (cols[cols.length - 1] || '').trim();
                    // An unquoted "8,5" in a comma file splits into one extra column.
                    if (delim === ',' && cols.length === headerLen + 1 && /^\d+$/.test(raw) && /^-?\d+$/.test((cols[cols.length - 2] || '').trim())) {
                        raw = cols[cols.length - 2].trim() + '.' + raw;
                    }
                    raw = raw.replace(/^(-?\d+),(\d+)$/, '$1.$2');
                    if (raw === '' || !Number.isFinite(+raw)) { skipped.push(label); return; }
                    map[m[1]] = raw;
                });
                return { map, skipped };
            }

            function createGradeButtons(table) {
                injectGradeStyles();

                const panel = document.createElement('div');
                panel.className = 'gmgg-panel';

                const fileInput    = document.createElement('input');
                fileInput.type     = 'file';
                fileInput.accept   = '.csv';
                fileInput.style.display = 'none';

                const uploadBtn       = document.createElement('button');
                uploadBtn.type        = 'button';
                uploadBtn.textContent = 'Upload Grades CSV';
                uploadBtn.className   = 'gmgg-btn gmgg-btn-upload gs-btn';

                const downloadBtn       = document.createElement('button');
                downloadBtn.type        = 'button';
                downloadBtn.textContent = 'Download Grades CSV';
                downloadBtn.className   = 'gmgg-btn gmgg-btn-download gs-btn';

                let feedbackEl = null;

                function showFeedback(msg, type = 'success') {
                    if (feedbackEl) feedbackEl.remove();
                    feedbackEl = document.createElement('div');
                    feedbackEl.className = `gmgg-feedback gmgg-feedback-${type}`;
                    feedbackEl.textContent = msg;
                    body.appendChild(feedbackEl);
                    setTimeout(() => { if (feedbackEl) { feedbackEl.remove(); feedbackEl = null; } }, 4000);
                }

                uploadBtn.onclick = () => fileInput.click();

                downloadBtn.onclick = () => {
                    const rows = document.querySelectorAll('#Table1 tbody tr');
                    const csv  = [['Name', 'Grade']];

                    rows.forEach((row, index) => {
                        if (index === 0) return;
                        const name = row.cells[0]?.querySelector('span')?.textContent || '';
                        const grade = row.cells[2]?.querySelector('input')?.value;
                        csv.push([name, grade]);
                    });

                    // Every field quoted (names contain commas); BOM so Excel reads Arabic names.
                    const field = v => '"' + String(v ?? '').replace(/"/g, '""') + '"';
                    const text  = '\uFEFF' + csv.map(r => r.map(field).join(',')).join('\r\n');
                    const blob  = new Blob([text], { type: 'text/csv;charset=utf-8' });
                    const url   = URL.createObjectURL(blob);

                    const csvTitleId = document.getElementById('MainContent_crntLbl');
                    const csvTitle   = (csvTitleId?.textContent ?? '')
                        .split('||')[0].replace(/\s+/g, '').replace(/[/\\?%*:|"<>]/g, '_').trim() || 'grades';

                    const a    = document.createElement('a');
                    a.href     = url;
                    a.download = csvTitle + '.csv';
                    a.click();
                    URL.revokeObjectURL(url);
                    showFeedback('✓ CSV downloaded successfully');
                    renderStats(body);
                };

                fileInput.addEventListener('change', async () => {
                    const file = fileInput.files[0];
                    if (!file) return;
                    fileInput.value = '';

                    const parsed  = parseGradeCsvText(await file.text());
                    const grades  = parsed.map;
                    let applied   = 0;
                    let missing   = 0;

                    document.querySelectorAll('#Table1 tbody tr').forEach((row, index) => {
                        if (index === 0) return;
                        const input    = row.cells[2]?.querySelector('input');
                        const nameText = row.cells[0]?.querySelector('span')?.textContent || '';
                        const m        = nameText.match(/\((\d+)\)/);
                        if (!input || !m) return;
                        if (grades[m[1]] !== undefined) {
                            input.value = grades[m[1]];
                            applied++;
                        } else {
                            missing++;
                        }
                    });

                    const skippedMsg = parsed.skipped.length
                        ? ` — ${parsed.skipped.length} CSV row(s) had no numeric grade`
                        : '';
                    const msg = missing > 0
                        ? `✓ Applied ${applied} grade(s) — ${missing} student(s) not in CSV${skippedMsg}`
                        : `✓ Grades applied to ${applied} student(s)${skippedMsg}`;
                    showFeedback(msg, missing > 0 || parsed.skipped.length ? 'error' : 'success');
                    renderStats(body);
                });

                panel.innerHTML = `
                    <div class="gmgg-panel-header">
                        <h4 class="gmgg-panel-title">Group Grades</h4>
                        <p class="gmgg-panel-subtitle">Upload or download grades for this tutorial group</p>
                    </div>
                `;

                const btnRow = document.createElement('div');
                btnRow.className = 'gmgg-btn-row';
                btnRow.append(uploadBtn, fileInput, downloadBtn);

                const body = document.createElement('div');
                body.className = 'gmgg-panel-body';
                body.appendChild(btnRow);
                panel.appendChild(body);

                const labelEl = document.getElementById('MainContent_crntLbl');
                (labelEl ?? table).insertAdjacentElement('afterend', panel);

                renderStats(body);
                Tips.show({ id: 'manageGroupGrades', el: panel, title: 'Group Grades Tools',
                    text: 'CSV upload and download plus live statistics for the visible grade table.' });

                return panel;
            }

            // Entry: watch grade-table visibility, mount/unmount the panel.
            let activeCard = null;

            function checkTableVisibility() {
                const gradeTable = document.querySelector('#MainContent_nttTb');
                const visible    = gradeTable !== null && gradeTable.offsetParent !== null;

                if (visible && !activeCard) {
                    activeCard = createGradeButtons(document.querySelector('#Table1'));
                } else if (!visible && activeCard) {
                    activeCard.remove();
                    activeCard = null;
                }
            }

            let visibilityRaf = null;
            const observer = new MutationObserver(() => {
                if (visibilityRaf !== null) return;
                visibilityRaf = requestAnimationFrame(() => {
                    visibilityRaf = null;
                    checkTableVisibility();
                });
            });
            observer.observe(document.body, {
                childList:       true,
                subtree:         true,
                attributes:      true,
                attributeFilter: ['style', 'class', 'hidden']
            });

            checkTableVisibility();
        }

    // Tips is the bundle's first-run tooltip system; this script ships without it.
    const Tips = { show() {} };
    if (/\/ManageGroupGrade_m\.aspx$/i.test(location.pathname)) {
        manageGroupGrades(S);
    }
})();
