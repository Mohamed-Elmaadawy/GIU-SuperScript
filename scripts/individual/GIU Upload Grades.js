// ==UserScript==
// @name        GIU Upload Grades
// @description Upload/download grades per group + batch all groups via fetch chain.
// @match       https://portal.giu-uni.de/*
// @namespace   Cyn0
// @version     5.0.2
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Upload%20Grades.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Upload%20Grades.js
// @author      Ahmed Sherif, Mo.Elmaadawy
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAzFBMVEX////VlyYkHiAAAADTHyj36ereiIr8/vzIGSPPAAj//fziu4HTlRbnyp3x49HRHSTTkgzw8PD29vbl5eXV1NRjX2HWY2vUr2zMAADn1rfJjguzsrMfGRsaEBPltLX6+u/OmB67u7vIyMgyLC5sbGycnJypqKmLi4tYWFh9e3wWExXkoJ1HRUaUkpM3NjY+Pj4PAAe/AADIDxPYGiAnJicZGhn27df17eDXqE329uBVYF7AZ2jZjGvOWgTNlSzf0J7lw7PWozvqxcLZsl8WTjZKAAAHBElEQVR4nO2Ya3fbNhJAIWG92tJ2YwzApg6kTQDhQagkpXZlR/t03fz//7QDgo71jqQ0Pf2Ae45tipKlq8FgMAAhmUwmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMpnMqRTAENi4dXUV710xvB6979n+v3R39IcoMmGrdkyR2bgtLX/Rvfr5uzdvfvnlx7/i9fc3g8EAf27IltNtfOLuetR9A22CEWB84Cp4C2A5IbzBj3B4IRU+kEAuhCk/pXQyHibGE0rnIb4viv7tH39BkujdoONm+/9v75Jo9HcPgghFqONga/4gWWsJ8TUQTtHWU0W4v1RUVRMaJWcxoJNedkFtEn0TRb9bF73bEe0jWmC46qa7haLEVrBUfEoJr+YcP2WJomYmuL1MlFVJbjEtJee6XPaqi4OiuxF9FRVLjbacUBO4m7YOR712Tg8FKeNTnmFMXXGJp17SLoKzININYbrwDieHRG8+HMrRl4gGU8zQ15Z4oZSjllGhjawMCQAhDdW5qOWs86SvGQ6OdjQHRO+OiRJJFZhAqJe8aTl1FvNVEyorRjQV+Ju1/oKIihS9h5lYv8udRfRFooQ5dMRAKs4F4YIzgrNS8PgBmgkMB+Pne7I2xfNBHnrF+aLfgsLP0rwJB19ytqjWRMewCe20VFxJCUpiCYghBQwoaMIkJi4XcdY1Dd4W3VMkPkVA7ot3P/Dj4eF6cbaoMaSssGp6IanVikpVzLx6EAozlXmGOcyYMrXi+ELXclYHYpeYI6HAv5gmVO+xMIsuoGna/F6igYSpAVyLGJYjTVlB5g5w1s9bgaLQzHDSNwZLQ+APOgZLyHbOuSfgxxJFxa4Eo31tP5Ldl4h6MfOsFx0bA3VVKaKUWXIHQjqMd2MARTXFDwaKGVJVwhKlfdgvammfoUdWinPraBdRDFNwhA1jRPG9a7NUxOmifPBgjccSm0RFlEIzJ2CONcuHMBZ7Rcu0BtGDU36/6OALOTrCcVXUdemmqOBkaO0Dx2rH2pKVMKpC4UsojCnwS2HNLTym6NLwAKxuOFWcbTmweZpK433pe0z03fFZX2CHRJQgDNc6ERoPXkHQKk5vKTAo2oO0UDiMeeODxfmFGaAldjJEeWYavx1T0SbR+Z5gHxU91pR8C3TfJ1XHVor9ET0iyuMEwbKJ14wVHNJjJgReClGQQmsADgLXLR4H+YRlSiXRSbWdE18lGnDxEJ7ULnbJfMktvj1W/dpbUXmsnd41WtTChtrLUMaXfhE53iPK14BLRE0SbXGKSo1zOE6phruqIHyKVZ+3MVeXHLs2IHqmw7EoHREFM5x+RnyFaOmoUIIvcFNimCWytY63NjRQzhwTU+yjUZSYpfuyJ1Hj3RwFsxj3TBZfI1oRPw1RFNdMjcGtMSPn1Ri7vIa6z6JiX9XcQUzTrG/XXgym7+9jqHdEb06Y9aHGfZMj+NvQrnyzOW6YbM2At6oMOM8aG4deTYDsX4d26OvocL2OromOd0QfP4seqaPcBNsAMfG9BIulz+Pi7qrG8UrrWnvrucBB1HWMaH2KKKn6lWktT/qh3y/6cdDvmbY39ht1FAsSfo+Y9wBdlcI/8SYrGBSMxZoE2KlA9wp+0j5P0n42vb4awjyy3Cv6fpVCevfPrcp+ZsHHbfUo/Yy2x2Y/kESH64nS1SVRzfaJjq779ul+642+eYfv+/ap3LrP9ouS+37obw+LinKTf/37h03+83aT61O+Hav7LFWnib6M/erjQVFNt/j5x03+++HdBv876cxKpz3TpN5ccQ+Jkqe+I306KMrlFn/f4tf7LU47W+t751m9MfsOio6eb1Lr/HhI9CgX7JNfTYfd6NOhXlM9KEoen/uJ/7ReotZEQaUFOXW/sV/APeYI9/JYqsBz3NMzBd2k5xCnvThZXqUjnck4vNT9QtjYqe6N6Oh+kExvPt2/qI4+vh28RlSlL6yxo+O4UeYkbouJULxQTCmNs6E/k0nf6IyDKF52B47jybIKVsrG1G1X8cc7a338EuT7d32e3qze3t7fP12/XT0PXkV5atuAKx+PRyQHpwng1o4RAdxy3OVJZR0BJwFko/Q5h6UitAuKgz1ZdOeOqDmjdNF2zcqWKPL+enDXR/UuEk928erD81M8HxWNwxnkvONGWy8FY9ZK65RyMgSwTBN85J1srHLOSaf0WWeQQob5ek2ZGytF9w5XfXn5LDoixeP1qjfsFPFqdX17/9inQjxJF9jKYdQgralMq4LExZOnhMQWKh5oxzvnn5QCw3GyTdNYiW3k6zk+/JT47VU0HuY/3l9/Wq2eV6tPOP6PH7drIfZIsOYAB7rj4uIz8iNs5vzo4IM/HX9uu0wmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMplMJpPJHOP/Lb7en38r1wIAAAAASUVORK5CYII=
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

function uploadGrades(S) {
            const SEL = {
                season:  '#MainContent_dlSeason',
                course:  '#MainContent_smCrsLst',
                group:   '#MainContent_grpLst',
                eval:    '#MainContent_evalMethIdLst',
                crntLbl: '#MainContent_crntLbl',
                saveBtn: '#MainContent_saveBtn',
                startOver: '#MainContent_strOvrBtn',
                rows:    '#data tbody tr',
            };
        
            // ── Style injection ──────────────────────────────────────────────────────────
        
            function injectStyles() {
                S.uiStyles();
                if (document.getElementById('gius-upload-styles')) return;
                const style = document.createElement('style');
                style.id = 'gius-upload-styles';
                style.textContent = `
                    @keyframes giusUGSlideDown {
                        from { opacity: 0; transform: translateY(-14px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes giusUGFadeIn {
                        from { opacity: 0; }
                        to   { opacity: 1; }
                    }
                    @keyframes giusUGSpin {
                        to { transform: rotate(360deg); }
                    }
        
                    .giug-card {
                        background: #ffffff;
                        border: 1px solid #eeeeee;
                        border-radius: 6px;
                        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
                        position: relative;
                        overflow: hidden;
                        margin-bottom: 16px;
                        margin-top: 20px;
                        animation: giusUGSlideDown 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
                        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                    }
                    .giug-card::before {
                        content: "";
                        position: absolute;
                        top: 0; left: 0;
                        width: 100%; height: 3px;
                        background: #ffc107;
                        z-index: 1;
                    }
                    .giug-card-header {
                        background: #272c33;
                        color: #fff;
                        padding: 10px 14px;
                        border-bottom: 2px solid #ffc107;
                    }
                    .giug-hdr-blue, .giug-hdr-green {}
                    .giug-card-title {
                        margin: 0;
                        font-size: 14px;
                        font-weight: 700;
                        color: #fff;
                    }
                    .giug-card-category {
                        margin: 3px 0 0;
                        font-size: 12px;
                        color: rgba(255,255,255,0.7);
                    }
                    .giug-card-body {
                        padding: 14px 16px;
                    }
                    .giug-btn-row {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 8px;
                    }
                    .giug-group-pick {
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 6px 16px;
                        margin-top: 10px;
                        font-size: 13px;
                    }
                    .giug-group-pick-title { font-weight: 600; }
                    .giug-group-pick label { display: inline-flex; align-items: center; gap: 6px; margin: 0; font-weight: 400; cursor: pointer; }
                    .giug-group-pick input { margin: 0; }
                    .giug-select {
                        height: 32px;
                        padding: 4px 8px;
                        font-size: 13px;
                        font-family: 'Open Sans', sans-serif;
                        color: #111827;
                        background: #fff;
                        border: 1px solid #9ca3af;
                        border-radius: 6px;
                        cursor: pointer;
                        max-width: 320px;
                        outline: none;
                        transition: border-color 0.2s ease;
                    }
                    .giug-select:focus {
                        outline: 2px solid #60a5fa;
                        outline-offset: 1px;
                        border-color: #1B59C6;
                    }
                    .giug-alert {
                        padding: 8px 10px;
                        border-radius: 6px;
                        font-size: 13px;
                        font-family: 'Open Sans', sans-serif;
                        margin: 8px 0 0;
                        animation: giusUGFadeIn 0.25s ease;
                        display: flex;
                        align-items: flex-start;
                        gap: 8px;
                        border: 1px solid #d1d5db;
                    }
                    .giug-alert-error {
                        background: #fee2e2;
                        border-color: #fca5a5;
                        color: #991b1b;
                    }
                    .giug-alert-info {
                        background: #e5e7eb;
                        border-color: #d1d5db;
                        color: #374151;
                    }
                    .giug-spinner {
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        border: 2px solid rgba(55,65,81,0.25);
                        border-top-color: #1B59C6;
                        border-radius: 50%;
                        animation: giusUGSpin 0.7s linear infinite;
                        flex-shrink: 0;
                        margin-top: 2px;
                    }
                    .giug-stats-section {
                        margin-top: 14px;
                        border-top: 1px solid #d1d5db;
                        padding-top: 12px;
                        animation: giusUGFadeIn 0.3s ease;
                    }
                    .giug-stats-label {
                        font-size: 11px;
                        font-weight: 700;
                        color: #6b7280;
                        text-transform: uppercase;
                        letter-spacing: 0.6px;
                        margin-bottom: 8px;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .giug-stats-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 6px;
                        margin-bottom: 6px;
                    }
                    .giug-stat {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 8px 10px;
                        background: #e5e7eb;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        font-size: 13px;
                    }
                    .giug-stat-val {
                        font-weight: 700;
                        color: #111827;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .giug-stat-key {
                        font-weight: 600;
                        color: #374151;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .giug-stats-table {
                        width: 100%;
                        border-collapse: collapse;
                        font-size: 13px;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .giug-stats-table th {
                        text-align: left;
                        padding: 8px 10px;
                        background: #1f2937;
                        color: #ffffff;
                        font-weight: 700;
                        font-size: 11px;
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                    .giug-stats-table td {
                        padding: 7px 10px;
                        border-bottom: 1px solid #d1d5db;
                        background: #f9fafb;
                        color: #374151;
                    }
                    .giug-stats-table tr:last-child td { border-bottom: none; }
                    .giug-stat-num {
                        font-weight: 700;
                        color: #111827;
                    }
                    #data input.giug-grade-bad {
                        border-color: var(--gs-err, #cf222e) !important;
                        box-shadow: 0 0 0 2px rgba(207, 34, 46, .2) !important;
                    }
                `;
                document.head.appendChild(style);
            }
        
            // ── DOM helpers ──────────────────────────────────────────────────────────
        
            function makeBtn(text, style = 'primary', disabled = false) {
                const b = document.createElement('button');
                b.type = 'button';
                b.textContent = text;
                b.className = `giug-btn giug-btn-${style} gs-btn`;
                b.disabled = disabled;
                return b;
            }
        
            function showError(container, msg) {
                const d = document.createElement('div');
                d.className = 'giug-alert giug-alert-error';
                d.innerHTML = '<span>⚠</span><span></span>';
                d.lastElementChild.textContent = msg;   // may hold portal error text
                container.appendChild(d);
            }
        
            function showInfo(container, msg, spinning = true) {
                let el = container.querySelector('.gius-progress-info');
                if (!el) {
                    el = document.createElement('div');
                    el.className = 'giug-alert giug-alert-info gius-progress-info';
                    const spinner = document.createElement('span');
                    spinner.className = 'giug-spinner';
                    el.appendChild(spinner);
                    const text = document.createElement('span');
                    el.appendChild(text);
                    container.appendChild(el);
                }
                const spinnerEl = el.querySelector('.giug-spinner');
                if (spinnerEl) spinnerEl.style.display = spinning ? '' : 'none';
                el.querySelector('span:last-child').textContent = msg;
            }
        
            function clearProgress(container) {
                container.querySelector('.gius-progress-info')?.remove();
            }
        
            function getMaxGrade(evalPicker) {
                const opt = evalPicker?.options[evalPicker.selectedIndex];
                const kept = opt?.dataset?.max;
                if (kept != null && kept !== '' && Number.isFinite(parseFloat(kept))) return parseFloat(kept);
                const text = opt?.text ?? '';
                const after = text.split('||')[1];
                return after != null && after !== '' ? parseFloat(after) : null;
            }
        
            // ── Stats helpers ────────────────────────────────────────────────────────
        
            function computeStats(values, maxGrade = null) {
                const nums = values.filter(v => v !== '' && Number.isFinite(+v)).map(Number);
                if (!nums.length) return null;
                const min = Math.min(...nums);
                const max = Math.max(...nums);
                const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
                const passThreshold = maxGrade != null ? maxGrade * 0.5 : null;
                const passRate = passThreshold != null
                    ? ((nums.filter(n => n >= passThreshold).length / nums.length) * 100).toFixed(0) + '%'
                    : null;
                return {
                    min:      min.toFixed(1),
                    max:      max.toFixed(1),
                    avg:      avg.toFixed(1),
                    range:    (max - min).toFixed(1),
                    count:    nums.length,
                    passRate,
                };
            }
        
            function renderGroupStats(card, stats) {
                card.querySelector('.giug-stats-section')?.remove();
                if (!stats || stats.count < 2) return;
                const section = document.createElement('div');
                section.className = 'giug-stats-section';
                section.innerHTML = `
                    <div class="giug-stats-label">Grade Statistics — ${stats.count} students</div>
                    <div class="giug-stats-grid">
                        <div class="giug-stat"><span class="giug-stat-key">Min</span><span class="giug-stat-val">${stats.min}</span></div>
                        <div class="giug-stat"><span class="giug-stat-key">Max</span><span class="giug-stat-val">${stats.max}</span></div>
                        <div class="giug-stat"><span class="giug-stat-key">Avg</span><span class="giug-stat-val">${stats.avg}</span></div>
                        <div class="giug-stat"><span class="giug-stat-key">Range</span><span class="giug-stat-val">${stats.range}</span></div>
                        ${stats.passRate != null ? `<div class="giug-stat"><span class="giug-stat-key">Pass</span><span class="giug-stat-val">${stats.passRate}</span></div>` : ''}
                    </div>
                `;
                card.querySelector('.giug-card-body').appendChild(section);
            }
        
            function renderBatchStats(card, groupStats) {
                card.querySelector('.giug-stats-section')?.remove();
                const withStats = groupStats.filter(g => g.stats);
                if (!withStats.length) return;
                const hasPass = withStats.some(g => g.stats.passRate != null);
                const rows = withStats.map(g => `
                    <tr>
                        <td>${S.escapeHtml(g.label)}</td>
                        <td class="giug-stat-num">${g.stats.min}</td>
                        <td class="giug-stat-num">${g.stats.max}</td>
                        <td class="giug-stat-num">${g.stats.avg}</td>
                        <td class="giug-stat-num">${g.stats.range}</td>
                        ${hasPass ? `<td class="giug-stat-num">${g.stats.passRate ?? '—'}</td>` : ''}
                        <td style="color:#9e9e9e;font-size:11px;">${g.stats.count}</td>
                    </tr>
                `).join('');
                const section = document.createElement('div');
                section.className = 'giug-stats-section';
                section.innerHTML = `
                    <div class="giug-stats-label">Per-Group Statistics</div>
                    <table class="giug-stats-table">
                        <thead><tr>
                            <th>Group</th><th>Min</th><th>Max</th><th>Avg</th><th>Range</th>
                            ${hasPass ? '<th>Pass</th>' : ''}
                            <th>n</th>
                        </tr></thead>
                        <tbody>${rows}</tbody>
                    </table>
                `;
                card.querySelector('.giug-card-body').appendChild(section);
            }
        
            // ── Row helpers ──────────────────────────────────────────────────────────
        
            function getRows(doc = document) {
                return Array.from(doc.querySelectorAll(SEL.rows)).slice(1);
            }
        
            function extractId(nameText) {
                const m = (nameText ?? '').trim().match(/^\((\d+)\)/);
                return m ? m[1] : null;
            }
        
            // One CSV field, always quoted (names contain commas).
            function csvField(value) {
                return '"' + String(value ?? '').replace(/"/g, '""') + '"';
            }

            // BOM so Excel reads Arabic names as UTF-8.
            function downloadCSV(lines, filename) {
                const blob = new Blob(['\uFEFF' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
                const url  = URL.createObjectURL(blob);
                const a    = document.createElement('a');
                a.href = url;
                const base = filename.replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_');
                a.download = /\.csv$/i.test(base) ? base : base + '.csv';
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
            }
        
            // ── Fetch helpers ────────────────────────────────────────────────────────
        
            function extractFormFields(doc) {
                const fields = {};
                doc.querySelectorAll('input[type="hidden"], select').forEach(el => {
                    if (el.name) fields[el.name] = el.value;
                });
                return fields;
            }
        
            async function doPostBack(baseFields, eventTarget, overrides = {}) {
                const data = new FormData();
                for (const [k, v] of Object.entries(baseFields)) data.set(k, v);
                data.set('__EVENTTARGET',   eventTarget);
                data.set('__EVENTARGUMENT', '');
                for (const [k, v] of Object.entries(overrides)) data.set(k, v);
                console.log('[GIU] POST __EVENTTARGET=', eventTarget, 'keys=', [...data.keys()].join(','));
                const resp = await fetch(location.href, { method: 'POST', body: data });
                if (!resp.ok) {
                    const body = await resp.text();
                    const doc  = new DOMParser().parseFromString(body, 'text/html');
                    const msg  = doc.querySelector('#ctl00_lblError, .error, h2, h1, [id*="Error"]')?.textContent?.trim()
                              ?? body.substring(0, 600);
                    console.error('[GIU] HTTP', resp.status, 'EVENTTARGET=', eventTarget, '\n', msg);
                    throw new Error(`HTTP ${resp.status}: ${msg.substring(0, 120)}`);
                }
                    const doc = new DOMParser().parseFromString(await resp.text(), 'text/html');
                    // A sign-in page (redirect or login form) means the session ended.
                    if ((resp.redirected && /login/i.test(resp.url)) || doc.querySelector('#LoginPage, input[type="password"]')) {
                        throw new Error('SESSION_EXPIRED');
                    }
                    return doc;
                }
        
            function isValidId(val) {
                return /^\d+$/.test(String(val)) && +val > 0;
            }
        
            // ── State A: read groups/viewstate from current DOM ───────────────────────
        
            function readPageState() {
                const groupEl = document.querySelector(SEL.group);
                return {
                    groups:  Array.from(groupEl.options)
                                 .filter(o => o.value && o.value !== '')
                                 .map(o => ({ value: o.value, label: o.text.trim() })),
                    hidden:  extractFormFields(document),
                    season:  document.querySelector(SEL.season)?.value ?? '',
                    course:  document.querySelector(SEL.course)?.value ?? '',
                };
            }
        
            // ── CSV helpers ──────────────────────────────────────────────────────────
        
            function rowsToCsvLines(rows, groupLabel) {
                return rows.map(row => {
                    const name  = row.cells[0]?.querySelector('span')?.textContent?.trim() ?? '';
                    const grade = row.cells[2]?.querySelector('input')?.value ?? '';
                    return [name, groupLabel, grade].map(csvField).join(',');
                });
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
                // A "Group" column (Batch Download writes one) ties each grade to its group.
                const groupCol = rows.length ? rows[0].findIndex(h => /^\s*group\s*$/i.test(h)) : -1;
                const map = {};
                const entries = [];
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
                    entries.push({ id: m[1], grade: raw, group: groupCol > 0 ? (cols[groupCol] || '').trim() : '' });
                });
                return { map, entries, skipped };
            }

            // Which grade a student gets in a group. Once a row's Group names one of the page's groups
            // (its full label, or its end: "L001" for "ICS 509 5SE L001"), the column counts: a row
            // with a Group only fills that group, and a student listed with groups is left alone in
            // the others. Rows with an empty Group fill every group the student is in. When no Group
            // in the file matches any of the page's groups, the column is ignored (byGroup false).
            function gradePlan(parsed, groupLabels) {
                const norm = v => String(v ?? '').toLowerCase().replace(/\s+/g, ' ').trim();
                const matches = (csvGroup, label) => {
                    const g = norm(csvGroup), l = norm(label);
                    return !!g && (l === g || l.endsWith(' ' + g));
                };
                const known = e => e.group && groupLabels.some(l => matches(e.group, l));
                const byGroup = parsed.entries.some(known);
                const grouped = {};
                const loose = {};
                parsed.entries.forEach(e => {
                    if (byGroup && e.group) (grouped[e.id] = grouped[e.id] || []).push(e);
                    else loose[e.id] = e.grade;
                });
                return {
                    byGroup,
                    // undefined: leave this student's grade as it is.
                    gradeFor(id, label) {
                        if (grouped[id]) {
                            const hit = grouped[id].filter(e => matches(e.group, label)).pop();
                            return hit ? hit.grade : undefined;
                        }
                        return loose[id];
                    },
                    // The grade comes from a row without a group, so it goes to every group.
                    loose: id => !grouped[id] && loose[id] !== undefined,
                };
            }

            function parseCSV(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = e => resolve(parseGradeCsvText(e.target.result));
                    reader.onerror = reject;
                    reader.readAsText(file);
                });
            }
        
            // ── Batch download (State A) ─────────────────────────────────────────────
        
            async function batchDownload(evalId, evalLabel, toolbar) {
                const { groups, hidden, season, course } = readPageState();
        
                if (!groups.length) { showError(toolbar, 'No groups found.'); return; }
        
                const allLines  = ['Name,Group,Grade'];
                const groupStats = [];
                let errors = 0;
        
                for (let i = 0; i < groups.length; i++) {
                    const group = groups[i];
                    showInfo(toolbar, `Downloading group ${i + 1} of ${groups.length}: ${group.label}…`);
        
                    try {
                        const doc1 = await doPostBack(hidden, 'ctl00$MainContent$grpLst', {
                            'ctl00$MainContent$dlSeason': season,
                            'ctl00$MainContent$smCrsLst': course,
                            'ctl00$MainContent$grpLst':   group.value,
                        });
        
                        const doc1Hidden = extractFormFields(doc1);
                        const doc2 = await doPostBack(doc1Hidden, 'ctl00$MainContent$evalMethIdLst', {
                            'ctl00$MainContent$dlSeason':       season,
                            'ctl00$MainContent$smCrsLst':       course,
                            'ctl00$MainContent$grpLst':         group.value,
                            'ctl00$MainContent$evalMethIdLst':  evalId,
                        });
        
                        const rows = getRows(doc2);
                        if (!rows.length) throw new Error('no student rows found');
                        rowsToCsvLines(rows, group.label).forEach(l => allLines.push(l));
        
                        const grades = rows.map(row => row.cells[2]?.querySelector('input')?.value ?? '');
                        groupStats.push({ label: group.label, stats: computeStats(grades) });
        
                        } catch (err) {
                            if (err.message === 'SESSION_EXPIRED') {
                                showError(toolbar, `Your session expired at group ${i + 1} of ${groups.length}. Sign in again and retry.`);
                                return;
                            }
                            errors++;
                            groupStats.push({ label: group.label, stats: null });
                            showError(toolbar, `Group "${group.label}": ${err.message}`);
                        }
                    }

                    if (allLines.length > 1) {
                    downloadCSV(allLines, `All-Groups-${evalLabel}.csv`);
                    showInfo(toolbar, `Done — ${groups.length - errors} group(s) collected${errors ? `, ${errors} failed` : ''}.`, false);
                    renderBatchStats(toolbar, groupStats);
                } else {
                    clearProgress(toolbar);
                    showError(toolbar, 'No rows collected. All groups failed — check errors above.');
                }
            }
        
            // " N row(s) skipped (no numeric grade): a, b, …" or "".
            function skippedNote(skipped) {
                if (!skipped.length) return '';
                return ` ${skipped.length} row(s) skipped (no numeric grade): ${skipped.slice(0, 5).join(', ')}${skipped.length > 5 ? ', …' : ''}`;
            }

            function validateCsvMap(csvMap, maxGrade) {
                const errors = [];
                for (const [id, raw] of Object.entries(csvMap)) {
                    const v = +raw;
                    if (!Number.isFinite(v))  { errors.push(`Student ${id}: invalid value "${raw}"`); continue; }
                    if (v < 0)                { errors.push(`Student ${id}: negative grade ${raw}`); continue; }
                    if (maxGrade != null && v > maxGrade) { errors.push(`Student ${id}: ${raw} exceeds max ${maxGrade}`); continue; }
                }
                return errors;
            }
        
            // ── Batch upload (State A) ───────────────────────────────────────────────
        
            async function batchUpload(evalId, parsed, toolbar, evalPicker, pickedGroups) {
                const { groups: allGroups, hidden, season, course } = readPageState();
                const groups = allGroups.filter(g => pickedGroups.includes(g.value));

                if (!allGroups.length) { showError(toolbar, 'No groups found.'); return; }
                if (!groups.length) { showError(toolbar, 'Tick at least one group to upload to.'); return; }

                const maxGrade = getMaxGrade(evalPicker);
                const validationErrors = validateCsvMap(parsed.map, maxGrade);
                if (validationErrors.length) {
                    showError(toolbar, `${validationErrors.length} grade(s) failed validation: ${validationErrors.slice(0, 5).join('; ')}${validationErrors.length > 5 ? ` … and ${validationErrors.length - 5} more` : ''}`);
                    return;
                }
                const plan = gradePlan(parsed, allGroups.map(g => g.label));

                const groupStats = [];
                let saved  = 0;
                let errors = 0;

                // Step 1: read every ticked group's grade sheet; nothing is saved yet.
                const sheets = [];
                for (let i = 0; i < groups.length; i++) {
                    const group = groups[i];
                    showInfo(toolbar, `Reading group ${i + 1} of ${groups.length}: ${group.label}…`);
                    try {
                        const doc1 = await doPostBack(hidden, 'ctl00$MainContent$grpLst', {
                            'ctl00$MainContent$dlSeason': season,
                            'ctl00$MainContent$smCrsLst': course,
                            'ctl00$MainContent$grpLst':   group.value,
                        });

                        const doc1Hidden = extractFormFields(doc1);
                        const doc2 = await doPostBack(doc1Hidden, 'ctl00$MainContent$evalMethIdLst', {
                            'ctl00$MainContent$dlSeason':       season,
                            'ctl00$MainContent$smCrsLst':       course,
                            'ctl00$MainContent$grpLst':         group.value,
                            'ctl00$MainContent$evalMethIdLst':  evalId,
                        });

                        const rows = getRows(doc2);
                        if (!rows.length) throw new Error('no student rows found');
                        const saveBtnEl = doc2.querySelector(SEL.saveBtn);
                        if (!saveBtnEl) throw new Error('save button not found in fetched page');
                        sheets.push({ group, doc2, rows, saveName: saveBtnEl.name });
                    } catch (err) {
                        if (err.message === 'SESSION_EXPIRED') {
                            showError(toolbar, `Your session expired at group ${i + 1} of ${groups.length}: ${saved} group(s) were saved, the rest were not touched. Sign in again and retry.`);
                            return;
                        }
                        errors++;
                        groupStats.push({ label: group.label, stats: null });
                        showError(toolbar, `Group "${group.label}": ${err.message}`);
                    }
                }

                // A student in two ticked groups whose grade has no group would get it in both.
                const seen = {};
                sheets.forEach(sh => sh.rows.forEach(row => {
                    const id = extractId(row.cells[0]?.querySelector('span')?.textContent ?? '');
                    if (id && plan.loose(id)) (seen[id] = seen[id] || []).push(sh.group.label);
                }));
                const twice = Object.keys(seen).filter(id => seen[id].length > 1);
                if (twice.length) {
                    const names = [...new Set(twice.flatMap(id => seen[id]))];
                    const answer = await S.openDialog({
                        id: 'giug-twice',
                        title: 'Students in more than one group',
                        html: `<p class="gius-dialog-text">${twice.length} student(s) are in more than one of the ticked groups (${S.escapeHtml(names.join(', '))}). Their grade would be saved in each of them.\n\nUntick the groups this grade isn't for, or add a Group column to the CSV (Batch Download writes one).</p>`,
                        actions: [{ label: 'Cancel', value: 'cancel' }, { label: 'Save in every group', value: 'all', primary: true }],
                    }).result;
                    if (answer !== 'all') {
                        showInfo(toolbar, 'Upload cancelled: nothing was saved.', false);
                        return;
                    }
                }

                // Step 2: save each group.
                for (let i = 0; i < sheets.length; i++) {
                    const { group, doc2, rows, saveName } = sheets[i];
                    showInfo(toolbar, `Uploading group ${i + 1} of ${sheets.length}: ${group.label}…`);
                    try {
                        const doc2Hidden     = extractFormFields(doc2);
                        const gradeOverrides = {};
                        rows.forEach(row => {
                            const nameEl  = row.cells[0]?.querySelector('span');
                            const gradeEl = row.cells[2]?.querySelector('input');
                            if (!gradeEl?.name) return;
                            const id = extractId(nameEl?.textContent ?? '');
                            const grade = id ? plan.gradeFor(id, group.label) : undefined;
                            gradeOverrides[gradeEl.name] = grade !== undefined ? grade : gradeEl.value;
                        });

                        const savedDoc = await doPostBack(doc2Hidden, saveName, gradeOverrides);
                        // The portal re-shows the grade grid after a save; anything else
                        // (an error page) means this group's grades may not be saved.
                        if (!getRows(savedDoc).length) throw new Error('the portal did not confirm the save — check this group');

                        groupStats.push({ label: group.label, stats: computeStats(Object.values(gradeOverrides), maxGrade) });
                        saved++;
                    } catch (err) {
                        if (err.message === 'SESSION_EXPIRED') {
                            showError(toolbar, `Your session expired at group ${i + 1} of ${sheets.length}: ${saved} group(s) were saved, the rest were not touched. Sign in again and retry.`);
                            renderBatchStats(toolbar, groupStats);
                            return;
                        }
                        errors++;
                        groupStats.push({ label: group.label, stats: null });
                        showError(toolbar, `Group "${group.label}": ${err.message}`);
                    }
                }

                showInfo(toolbar, `Done — ${saved} group(s) saved${errors ? `, ${errors} failed` : ''}.`, false);
                renderBatchStats(toolbar, groupStats);
            }

            // ── State A toolbar: intercept eval dropdown + batch buttons ─────────────
        
            function injectBatchToolbar() {
                injectStyles();
                if (document.getElementById('giu-toolbar')) return;
        
                const card = document.createElement('div');
                card.id = 'giu-toolbar';
                card.className = 'giug-card';
        
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = '.csv';
                fileInput.style.display = 'none';
        
                const pageEvalEl  = document.querySelector(SEL.eval);
                const evalOptions = pageEvalEl
                    ? Array.from(pageEvalEl.options).filter(o => isValidId(o.value))
                    : [];
        
                const evalPicker = document.createElement('select');
                evalPicker.className = 'giug-select';
        
                const placeholder = document.createElement('option');
                placeholder.value = '';
                placeholder.textContent = evalOptions.length
                    ? '— Select evaluation method —'
                    : '— No evaluations found (select a group first) —';
                evalPicker.appendChild(placeholder);
        
                evalOptions.forEach(o => {
                    const opt = document.createElement('option');
                    opt.value = o.value;
                    opt.textContent = o.text.split('||')[0].trim();
                    // The page shows the max after "||"; keep it for validation and pass %.
                    const max = (o.text.split('||')[1] ?? '').trim();
                    if (max !== '') opt.dataset.max = max;
                    evalPicker.appendChild(opt);
                });
        
                const loadCsvBtn = makeBtn('Load CSV', 'outline');
                const batchDlBtn = makeBtn('Batch Download', 'primary', true);
                const batchUpBtn = makeBtn('Batch Upload', 'success', true);
        
                let parsedCsv = null;

                // The groups Batch Upload writes to (all ticked to start with).
                const groupPick = document.createElement('div');
                groupPick.className = 'giug-group-pick';
                const groupEl = document.querySelector(SEL.group);
                const groupOptions = groupEl ? Array.from(groupEl.options).filter(o => o.value) : [];
                if (groupOptions.length) {
                    const title = document.createElement('span');
                    title.className = 'giug-group-pick-title';
                    title.textContent = 'Upload to:';
                    groupPick.appendChild(title);
                    groupOptions.forEach(o => {
                        const label = document.createElement('label');
                        const box = document.createElement('input');
                        box.type = 'checkbox';
                        box.checked = true;
                        box.value = o.value;
                        label.append(box, ' ' + o.text.trim());
                        groupPick.appendChild(label);
                    });
                }
                const pickedGroups = () => Array.from(groupPick.querySelectorAll('input:checked')).map(b => b.value);
        
                const getEvalId    = () => evalPicker.value;
                const getEvalLabel = () => evalPicker.options[evalPicker.selectedIndex]?.text ?? evalPicker.value;
        
                evalPicker.onchange = () => {
                    const valid = isValidId(evalPicker.value);
                    batchDlBtn.disabled = !valid;
                    batchUpBtn.disabled = !(valid && parsedCsv);
                };
        
                loadCsvBtn.onclick = () => fileInput.click();
        
                fileInput.onchange = async () => {
                    const file = fileInput.files[0];
                    if (!file) return;
                    fileInput.value = ''; // the same file can be picked again after editing it
                    const parsed = await parseCSV(file);
                    parsedCsv = parsed;
                    const csvMap = parsed.map;
                    const plan = gradePlan(parsed, groupOptions.map(o => o.text.trim()));
                    const groupNote = parsed.entries.some(e => e.group)
                        ? (plan.byGroup ? ' Each grade goes to the group in its Group column.' : " The Group column names none of this course's groups, so it is ignored.")
                        : '';
                    showInfo(card, `CSV loaded — ${Object.keys(csvMap).length} student grade(s) ready.${groupNote}${skippedNote(parsed.skipped)}`, false);
                    batchUpBtn.disabled = !isValidId(evalPicker.value);
                    const maxGrade = getMaxGrade(evalPicker);
                    const previewStats = computeStats(Object.values(csvMap), maxGrade);
                    renderGroupStats(card, previewStats);
                };
        
                batchDlBtn.onclick = async () => {
                    if (!isValidId(getEvalId())) { showError(card, 'Pick an evaluation method first.'); return; }
                    batchDlBtn.disabled = true;
                    await batchDownload(getEvalId(), getEvalLabel(), card);
                    batchDlBtn.disabled = false;
                };
        
                batchUpBtn.onclick = async () => {
                    if (!parsedCsv || !isValidId(getEvalId())) return;
                    batchUpBtn.disabled = true;
                    await batchUpload(getEvalId(), parsedCsv, card, evalPicker, pickedGroups());
                    batchUpBtn.disabled = false;
                };
        
                card.innerHTML = `
                    <div class="giug-card-header giug-hdr-blue">
                        <h4 class="giug-card-title">Batch Grades</h4>
                        <p class="giug-card-category">Download or upload grades across all groups at once</p>
                    </div>
                    <div class="giug-card-body">
                        <div class="giug-btn-row" id="giug-btn-row"></div>
                    </div>
                `;
        
                const btnRow = card.querySelector('#giug-btn-row');
                btnRow.append(evalPicker, loadCsvBtn, fileInput, batchDlBtn, batchUpBtn);
                if (groupOptions.length) btnRow.after(groupPick);
        
                const anchor = pageEvalEl?.closest('tr') ?? pageEvalEl?.closest('div') ?? document.querySelector(SEL.group);
                anchor?.insertAdjacentElement('afterend', card);
                Tips.show({ id: 'uploadGrades', el: card, title: 'Grades Toolbar',
                    text: 'Upload grades from a CSV or download the current sheet, with instant grade statistics.' });
            }
        
            // ── State B toolbar: per-group upload/download ────────────────────────────
        
            function injectPerGroupToolbar(table) {
                injectStyles();
                if (document.getElementById('giu-toolbar')) return;
        
                const card = document.createElement('div');
                card.id = 'giu-toolbar';
                card.className = 'giug-card';
        
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = '.csv';
                fileInput.style.display = 'none';
        
                const uploadBtn   = makeBtn('Upload CSV', 'outline');
                const downloadBtn = makeBtn('Download CSV', 'primary');
        
                uploadBtn.onclick = () => fileInput.click();
        
                fileInput.onchange = async () => {
                    const file = fileInput.files[0];
                    if (!file) return;
                    fileInput.value = ''; // the same file can be picked again after editing it
                    const parsed = await parseCSV(file);
                    const thisGroup = (document.querySelector(SEL.crntLbl)?.textContent ?? '').split(' - ')[0].trim();
                    const plan = gradePlan(parsed, [thisGroup]);
                    if (parsed.skipped.length) showInfo(card, `Grades applied.${skippedNote(parsed.skipped)}`, false);
                    getRows().forEach(row => {
                        const id      = extractId(row.cells[0]?.querySelector('span')?.textContent ?? '');
                        const gradeEl = row.cells[2]?.querySelector('input');
                        const grade   = id ? plan.gradeFor(id, thisGroup) : undefined;
                        if (gradeEl && grade !== undefined) gradeEl.value = grade;
                    });
                    const grades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
                    const crntText = document.querySelector(SEL.crntLbl)?.textContent ?? '';
                    const _afterPipe = crntText.split('||')[1];
                    const maxGradePerGroup = (_afterPipe != null && _afterPipe !== '') ? parseFloat(_afterPipe) : null;
                    renderGroupStats(card, computeStats(grades, maxGradePerGroup));
                };
        
                downloadBtn.onclick = () => {
                    const crnt   = document.querySelector(SEL.crntLbl)?.textContent ?? '';
                    const parts  = crnt.split(' - ');
                    const gLabel = parts[0]?.trim() ?? 'group';
                    const eLabel = parts.pop()?.split('||')[0]?.trim() ?? 'eval';
                    downloadCSV(
                        ['Name,Group,Grade', ...rowsToCsvLines(getRows(), gLabel)],
                        `${gLabel}-${eLabel}.csv`
                    );
                    const grades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
                    const crntText = document.querySelector(SEL.crntLbl)?.textContent ?? '';
                    const _afterPipe = crntText.split('||')[1];
                    const maxGradePerGroup = (_afterPipe != null && _afterPipe !== '') ? parseFloat(_afterPipe) : null;
                    renderGroupStats(card, computeStats(grades, maxGradePerGroup));
                };
        
                card.innerHTML = `
                    <div class="giug-card-header giug-hdr-green">
                        <h4 class="giug-card-title">Group Grades</h4>
                        <p class="giug-card-category">Upload or download grades for this group</p>
                    </div>
                    <div class="giug-card-body">
                        <div class="giug-btn-row" id="giug-per-btn-row"></div>
                    </div>
                `;
        
                const btnRow = card.querySelector('#giug-per-btn-row');
                btnRow.append(uploadBtn, fileInput, downloadBtn);
        
                const crntEl = document.querySelector(SEL.crntLbl);
                (crntEl ?? table).insertAdjacentElement('afterend', card);
        
                const initialGrades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
                const crntText = document.querySelector(SEL.crntLbl)?.textContent ?? '';
                const _afterPipe = crntText.split('||')[1];
                const maxGradePerGroup = (_afterPipe != null && _afterPipe !== '') ? parseFloat(_afterPipe) : null;
                renderGroupStats(card, computeStats(initialGrades, maxGradePerGroup));
                Tips.show({ id: 'uploadGrades', el: card, title: 'Grades Toolbar',
                    text: 'Upload grades from a CSV or download the current sheet, with instant grade statistics.' });
            }
        
            // ── Start Over ───────────────────────────────────────────────────────────
            // The portal's Start Over posts back with validation on, so a single grade
            // the validators reject (out of range, not a number) makes it silently do
            // nothing — and it is the only way back to the filters from the table view.
            // Reload the page fresh instead, as the sidebar's Manage Uploaded Grades
            // link does: same result, no validation in the way.
            function fixStartOver() {
                const link = document.querySelector(SEL.startOver);
                if (!link) return;
                link.addEventListener('click', e => {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    location.href = location.pathname;
                }, true);
            }

            // ── Live grade checks ────────────────────────────────────────────────────
            // The portal checks a grade box only when you leave it, and its maximum
            // message always reads "Must Be Less Than 20" whatever the element's
            // maximum (the row's hidden mxPt field). Each box is checked as you type
            // instead, against its own maximum, showing the portal's own three messages
            // (Required, Not Valid Number, the maximum, now with the right number), so
            // what shows is what Save would reject.
            function liveGradeChecks(table) {
                table.querySelectorAll('input[type="text"][id*="_grd_"]').forEach(input => {
                    const near = part => document.getElementById(input.id.replace('_grd_', `_${part}_`));
                    const max = parseFloat(near('mxPt')?.value);
                    const required = near('rqrdGrd');
                    const notNumber = near('rgexGrd');
                    const tooBig = near('cmprGrdLMxPt');
                    if (tooBig && Number.isFinite(max)) tooBig.textContent = `Must be at most ${max}`;
                    input.addEventListener('input', () => {
                        const v = input.value.trim();
                        const empty = v === '';
                        const bad = !empty && !/^((\.[0-9]+)|([0-9]+(\.[0-9]*)?))$/.test(v);
                        const over = !empty && !bad && Number.isFinite(max) && parseFloat(v) > max;
                        [[required, empty], [notNumber, bad], [tooBig, over]].forEach(([el, on]) => {
                            if (el) el.style.visibility = on ? 'visible' : 'hidden';
                        });
                        input.classList.toggle('giug-grade-bad', empty || bad || over);
                    });
                });
            }

            // ── Entry point ──────────────────────────────────────────────────────────

            function init() {
        
                const groupEl = document.querySelector(SEL.group);
                if (groupEl) {
                    injectBatchToolbar();
                    return;
                }
        
                const table = document.getElementById('data');
                if (table?.tagName === 'TABLE') {
                    injectPerGroupToolbar(table);
                    fixStartOver();
                    liveGradeChecks(table);
                }
            }
        
            init();
        }

    // Tips is the bundle's first-run tooltip system; this script ships without it.
    const Tips = { show() {} };
    if (/\/ManageUploadedGrades_m\.aspx$/i.test(location.pathname)) {
        uploadGrades(S);
    }
})();
