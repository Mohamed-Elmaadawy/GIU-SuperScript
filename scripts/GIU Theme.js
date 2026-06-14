// ==UserScript==
// @name        GIU Theme
// @description Theming + UI reskin for the GIU portal — Off / Light / Slate / Plum modes
// @include     https://portal.giu-uni.de/*
// @icon         data:image/png;base64,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
// @namespace   Cyn0
// @version     1.0
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/GIU%20Theme.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/GIU%20Theme.js
// @author      Mo.Elmaadawy
// @run-at      document-start
// ==/UserScript==

(function () {
    'use strict';

    const STORAGE_KEY = 'gius-theme';
    const LEGACY_KEY  = 'gius-dark-mode';
    const MODES = ['off', 'light', 'slate', 'plum'];
    const DARK_MODES = ['slate', 'plum'];

    let currentMode = 'off';

    function readStoredMode() {
        try {
            const v = localStorage.getItem(STORAGE_KEY);
            if (MODES.includes(v)) return v;
            const legacy = localStorage.getItem(LEGACY_KEY);
            const migrated = legacy === '1' ? 'slate' : 'off';
            if (legacy !== null) {
                try { localStorage.setItem(STORAGE_KEY, migrated); } catch { /* ignore */ }
            }
            return migrated;
        } catch { return 'off'; }
    }

    function saveMode(mode) {
        try { localStorage.setItem(STORAGE_KEY, mode); } catch { /* ignore */ }
    }

    function applyMode(mode) {
        const root = document.documentElement;
        if (mode === 'off') {
            root.removeAttribute('data-gius-theme');
            root.classList.remove('gius-dark');
            const s = document.getElementById('gius-dm-styles');
            if (s) s.remove();
            return;
        }
        injectStyles();
        root.setAttribute('data-gius-theme', mode);
        root.classList.toggle('gius-dark', DARK_MODES.includes(mode));
    }

    const MODE_META = {
        off:   { label: 'Off',   icon: '⊘', swatch: 'transparent' },
        light: { label: 'Light', icon: '☀',  swatch: '#f6f8fa' },
        slate: { label: 'Slate', icon: '◐',  swatch: '#0d1117' },
        plum:  { label: 'Plum',  icon: '❀',  swatch: '#1a1320' },
    };

    function updatePicker() {
        const tab = document.getElementById('gius-dm-toggle');
        if (tab) tab.textContent = MODE_META[currentMode].icon + ' ' + MODE_META[currentMode].label.toUpperCase();
        const pop = document.getElementById('gius-theme-pop');
        if (pop) pop.querySelectorAll('[data-mode]').forEach(row => {
            row.setAttribute('aria-checked', row.getAttribute('data-mode') === currentMode ? 'true' : 'false');
        });
    }

    function buildPicker() {
        if (document.getElementById('gius-dm-toggle')) return;
        if (!document.body) return;

        const tab = document.createElement('button');
        tab.id = 'gius-dm-toggle';
        tab.setAttribute('title', 'Theme');
        tab.style.cssText = `
            position:fixed; right:0; top:50%; transform:translateY(-50%); z-index:2147483647;
            background:#ffc107; color:#1a1a1a; border:none; border-radius:6px 0 0 6px;
            padding:10px 5px; cursor:pointer; writing-mode:vertical-rl; text-orientation:mixed;
            font-family:'Open Sans',Arial,sans-serif; font-size:11px; font-weight:700; letter-spacing:1px;
            box-shadow:-2px 0 8px rgba(0,0,0,0.2); user-select:none;`;

        const pop = document.createElement('div');
        pop.id = 'gius-theme-pop';
        pop.setAttribute('role', 'radiogroup');
        pop.setAttribute('aria-label', 'Theme');
        pop.style.cssText = `
            position:fixed; right:34px; top:50%; transform:translateY(-50%); z-index:2147483647;
            display:none; flex-direction:column; gap:2px; padding:6px;
            background:#161b22; border:1px solid #30363d; border-radius:8px;
            box-shadow:-4px 0 16px rgba(0,0,0,0.35); font-family:'Open Sans',Arial,sans-serif;`;

        MODES.forEach(mode => {
            const m = MODE_META[mode];
            const row = document.createElement('button');
            row.className = 'gius-btn';
            row.setAttribute('data-mode', mode);
            row.setAttribute('role', 'radio');
            row.style.cssText = `
                display:flex; align-items:center; gap:8px; padding:7px 10px; min-width:120px;
                background:transparent; border:none; border-radius:5px; cursor:pointer;
                color:#e6edf3; font-size:12px; text-align:left;`;
            row.innerHTML =
                `<span style="width:14px;height:14px;border-radius:3px;border:1px solid #30363d;background:${m.swatch};"></span>` +
                `<span>${m.label}</span>`;
            row.addEventListener('mouseenter', () => { row.style.background = '#21262d'; });
            row.addEventListener('mouseleave', () => {
                row.style.background = row.getAttribute('aria-checked') === 'true' ? '#21262d' : 'transparent';
            });
            row.addEventListener('click', (e) => { e.stopPropagation(); setMode(mode); closePop(); });
            pop.appendChild(row);
        });

        function openPop() { pop.style.display = 'flex'; updatePicker(); }
        function closePop() { pop.style.display = 'none'; }
        tab.addEventListener('click', e => {
            e.stopPropagation();
            pop.style.display === 'flex' ? closePop() : openPop();
        });
        document.addEventListener('click', e => {
            if (!pop.contains(e.target) && e.target !== tab) closePop();
        });

        document.body.appendChild(tab);
        document.body.appendChild(pop);
        updatePicker();
    }

    function setMode(mode) {
        if (!MODES.includes(mode)) mode = 'off';
        currentMode = mode;
        saveMode(mode);
        applyMode(mode);
        updatePicker();
    }

    function injectStyles() {
        if (document.getElementById('gius-dm-styles')) return;
        const style = document.createElement('style');
        style.id = 'gius-dm-styles';
        style.textContent = `
            /* ── Shared tokens (all on-modes) ── */
            html[data-gius-theme] {
              --gp-radius: 6px;
              --gp-font: system-ui, 'Segoe UI', Roboto, Arial, sans-serif;
              --gp-pad: 12px;
            }
            /* ── Slate (default dark) ── */
            html[data-gius-theme="slate"] {
              --gp-bg:#0d1117; --gp-card:#161b22; --gp-deep:#010409; --gp-surface:#21262d;
              --gp-border:#30363d; --gp-text:#e6edf3; --gp-muted:#8b949e;
              --gp-accent:#ffc107; --gp-accent-fg:#1a1a1a; --gp-focus:#58a6ff;
              --gp-success-bg:#0d3321; --gp-success-fg:#a6e3a1; --gp-error-bg:#3d0000; --gp-error-fg:#f38ba8;
              --gp-info-bg:#1a2a4a; --gp-info-fg:#89b4fa;
              --gp-info-border:#1e3a6e; --gp-error-border:#5a0000; --gp-success-border:#1e4d33;
              --gp-warning-bg:#3d2a00; --gp-warning-fg:#ffc107;
            }
            /* ── Plum (Girls) ── */
            html[data-gius-theme="plum"] {
              --gp-bg:#1a1320; --gp-card:#241829; --gp-deep:#0f0b14; --gp-surface:#2d1f34;
              --gp-border:#3a2942; --gp-text:#f3e4f0; --gp-muted:#b596ad;
              --gp-accent:#ff6fae; --gp-accent-fg:#1a1320; --gp-focus:#ff6fae;
              --gp-success-bg:#16331f; --gp-success-fg:#9fe6b4; --gp-error-bg:#4a0d22; --gp-error-fg:#ff9db5;
              --gp-info-bg:#2a1f4a; --gp-info-fg:#c4a9ff;
              --gp-info-border:#3a2a5e; --gp-error-border:#6a2235; --gp-success-border:#1f5a33;
              --gp-warning-bg:#3a2a12; --gp-warning-fg:#ffc107;
            }
            /* ── Light ── */
            html[data-gius-theme="light"] {
              --gp-bg:#f6f8fa; --gp-card:#ffffff; --gp-deep:#eaeef2; --gp-surface:#ffffff;
              --gp-border:#d0d7de; --gp-text:#1f2328; --gp-muted:#656d76;
              --gp-accent:#ffc107; --gp-accent-fg:#1a1a1a; --gp-focus:#0969da;
              --gp-success-bg:#dafbe1; --gp-success-fg:#1a7f37; --gp-error-bg:#ffebe9; --gp-error-fg:#cf222e;
              --gp-info-bg:#ddf4ff; --gp-info-fg:#0969da;
              --gp-info-border:#54aeff; --gp-error-border:#ff8182; --gp-success-border:#4ac26b;
              --gp-warning-bg:#fff8c5; --gp-warning-fg:#9a6700;
            }

            html[data-gius-theme] body,
            html[data-gius-theme] #page-wrapper,
            html[data-gius-theme] .right-panel,
            html[data-gius-theme] .container,
            html[data-gius-theme] .container-fluid,
            html[data-gius-theme] .content {
              background-color: var(--gp-bg) !important; color: var(--gp-text) !important;
            }
            html[data-gius-theme] .page-header,
            html[data-gius-theme] .page-title,
            html[data-gius-theme] .header,
            html[data-gius-theme] .breadcrumbs,
            html[data-gius-theme] .alert-secondary {
              background-color: var(--gp-card) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important;
            }
            html[data-gius-theme] h1, html[data-gius-theme] h2, html[data-gius-theme] h3,
            html[data-gius-theme] h4, html[data-gius-theme] h5, html[data-gius-theme] h6 { color: var(--gp-text) !important; }
            html[data-gius-theme] .right-panel p,
            html[data-gius-theme] .right-panel label,
            html[data-gius-theme] .right-panel li,
            html[data-gius-theme] .right-panel span:not([class*="badge"]) { color: var(--gp-text) !important; }
            html[data-gius-theme] ::placeholder { color: var(--gp-muted) !important; opacity: 1 !important; }

            html[data-gius-theme] table { border-color: var(--gp-border) !important; }
            html[data-gius-theme] thead, html[data-gius-theme] tbody, html[data-gius-theme] tfoot,
            html[data-gius-theme] tr { background-color: var(--gp-bg) !important; }
            html[data-gius-theme] tbody tr:nth-child(even) { background-color: var(--gp-card) !important; }
            html[data-gius-theme] thead tr { background-color: var(--gp-deep) !important; }
            html[data-gius-theme] td, html[data-gius-theme] th {
              background-color: inherit !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important;
            }

            html[data-gius-theme] .form-control,
            html[data-gius-theme] input[type="text"], html[data-gius-theme] input[type="email"],
            html[data-gius-theme] input[type="password"], html[data-gius-theme] input[type="search"],
            html[data-gius-theme] input[type="number"], html[data-gius-theme] input[type="date"],
            html[data-gius-theme] textarea {
              background-color: var(--gp-surface) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important;
            }
            html[data-gius-theme] select:not([class*="giug-"]):not([class*="gius-"]) {
              background-color: var(--gp-surface) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important;
            }
            html[data-gius-theme] .form-control:focus, html[data-gius-theme] input:focus,
            html[data-gius-theme] select:focus, html[data-gius-theme] textarea:focus {
              border-color: var(--gp-focus) !important; outline-color: var(--gp-focus) !important;
            }

            html[data-gius-theme] input[type="submit"], html[data-gius-theme] input[type="button"],
            html[data-gius-theme] button:not(#gius-dm-toggle):not([class*="giug-btn"]):not([class*="gius-btn"]) {
              background-color: var(--gp-surface) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important;
            }

            html[data-gius-theme] .panel, html[data-gius-theme] .panel-default, html[data-gius-theme] .panel-body,
            html[data-gius-theme] .card, html[data-gius-theme] .card-body, html[data-gius-theme] .thumbnail,
            html[data-gius-theme] a.thumbnail {
              background-color: var(--gp-card) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important;
            }
            html[data-gius-theme] .panel-heading, html[data-gius-theme] .card-header,
            html[data-gius-theme] .card-footer {
              background-color: var(--gp-deep) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important;
            }

            html[data-gius-theme] .card-stats, html[data-gius-theme] .card-header-icon, html[data-gius-theme] .card-header-dark {
              background: var(--gp-card) !important; color: var(--gp-text) !important;
            }
            html[data-gius-theme] .card-icon { background: var(--gp-deep) !important; }

            html[data-gius-theme] .navbar-nav > li > a, html[data-gius-theme] .navbar-text { color: var(--gp-text) !important; }

            html[data-gius-theme] .nav-tabs { border-color: var(--gp-border) !important; }
            html[data-gius-theme] .nav-tabs .nav-link, html[data-gius-theme] .nav-tabs > li > a { color: var(--gp-text) !important; }
            html[data-gius-theme] .nav-tabs .nav-link.active, html[data-gius-theme] .nav-tabs > li.active > a,
            html[data-gius-theme] .nav-tabs > li.active > a:focus, html[data-gius-theme] .nav-tabs > li.active > a:hover {
              background-color: var(--gp-bg) !important; border-color: var(--gp-border) var(--gp-border) var(--gp-bg) !important; color: var(--gp-text) !important;
            }

            html[data-gius-theme] .right-panel .dropdown-menu, html[data-gius-theme] .content .dropdown-menu {
              background-color: var(--gp-surface) !important; border-color: var(--gp-border) !important;
            }
            html[data-gius-theme] .right-panel .dropdown-menu > li > a { color: var(--gp-text) !important; }
            html[data-gius-theme] .right-panel .dropdown-menu > li > a:hover,
            html[data-gius-theme] .right-panel .dropdown-menu > .active > a {
              background-color: var(--gp-border) !important; color: var(--gp-text) !important;
            }

            html[data-gius-theme] .well { background-color: var(--gp-deep) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important; }
            html[data-gius-theme] .modal-content { background-color: var(--gp-bg) !important; border-color: var(--gp-border) !important; }
            html[data-gius-theme] .modal-header { background-color: var(--gp-card) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important; }
            html[data-gius-theme] .modal-body { color: var(--gp-text) !important; }
            html[data-gius-theme] .modal-footer { background-color: var(--gp-card) !important; border-color: var(--gp-border) !important; }
            html[data-gius-theme] .breadcrumb { background-color: var(--gp-card) !important; border-color: var(--gp-border) !important; }
            html[data-gius-theme] .breadcrumb > li { color: var(--gp-text) !important; }
            html[data-gius-theme] .chosen-container .chosen-single, html[data-gius-theme] .chosen-container-multi .chosen-choices { background: var(--gp-surface) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important; }
            html[data-gius-theme] .chosen-container .chosen-drop { background: var(--gp-surface) !important; border-color: var(--gp-border) !important; }
            html[data-gius-theme] .chosen-results li { color: var(--gp-text) !important; background: var(--gp-surface) !important; }
            html[data-gius-theme] .chosen-results li.highlighted { background: var(--gp-border) !important; }

            /* ── GIUS notification panel: group list + labels + inputs ── */
            html.gius-dark .gius-group-list { background: var(--gp-card) !important; border-color: var(--gp-border) !important; scrollbar-color: var(--gp-muted) var(--gp-card) !important; }
            html.gius-dark .gius-group-list::-webkit-scrollbar-track { background: var(--gp-card) !important; }
            html.gius-dark .gius-group-list::-webkit-scrollbar-thumb { background: var(--gp-muted) !important; }
            html.gius-dark .gius-group-row:hover { background: var(--gp-surface) !important; }
            html.gius-dark .gius-group-row label, html.gius-dark .gius-toggle-label { color: var(--gp-text) !important; }
            html.gius-dark .gius-section-label, html.gius-dark .gius-field-label, html.gius-dark .gius-empty-msg { color: var(--gp-muted) !important; }
            html.gius-dark .gius-divider { background: var(--gp-border) !important; }
            html.gius-dark .gius-input { background: var(--gp-surface) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .gius-card-category { color: var(--gp-muted) !important; }

            /* ── GIUS injected cards (white bg in light mode) ── */
            html.gius-dark .giug-card, html.gius-dark .gius-card { background-color: var(--gp-card) !important; border-color: transparent !important; }
            html.gius-dark .giug-card-body, html.gius-dark .gius-card-body { background-color: var(--gp-card) !important; color: var(--gp-text) !important; }
            html.gius-dark .giug-select, html.gius-dark .gius-select { background-color: var(--gp-surface) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giug-btn-success, html.gius-dark .giug-btn-outline, html.gius-dark .gius-btn-success, html.gius-dark .gius-btn-outline { background-color: var(--gp-surface) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important; }
            html.gius-dark .giug-btn-success:not(:disabled):hover, html.gius-dark .giug-btn-outline:not(:disabled):hover { background-color: var(--gp-border) !important; }
            html.gius-dark .giug-alert, html.gius-dark .gius-alert { background-color: var(--gp-card) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important; }
            html.gius-dark .giug-alert-info, html.gius-dark .gius-alert-info { background-color: var(--gp-info-bg) !important; color: var(--gp-info-fg) !important; border-color: var(--gp-info-border) !important; }
            html.gius-dark .giug-alert-error, html.gius-dark .gius-alert-error { background-color: var(--gp-error-bg) !important; color: var(--gp-error-fg) !important; border-color: var(--gp-error-border) !important; }

            /* ── GIU Upload Grades: stats table (not covered by generic rules) ── */
            html.gius-dark .giug-stats-table td { background: var(--gp-card) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giug-stats-table th { background: var(--gp-deep) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giug-stat-num, html.gius-dark .giug-stats-label { color: var(--gp-text) !important; }
            html.gius-dark .giug-stats-section { border-color: var(--gp-border) !important; }
            html.gius-dark .giug-stat { background: var(--gp-deep) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giug-stat-key { color: var(--gp-muted) !important; }
            html.gius-dark .giug-stat-val { color: var(--gp-text) !important; }

            /* ── GIU Manage Group Grades (.gmgg-*) ── */
            html.gius-dark .gmgg-panel { background: var(--gp-card) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .gmgg-panel-body { color: var(--gp-text) !important; }
            html.gius-dark .gmgg-btn-upload, html.gius-dark .gmgg-btn-download { background: var(--gp-surface) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important; }
            html.gius-dark .gmgg-btn-upload:not(:disabled):hover, html.gius-dark .gmgg-btn-download:not(:disabled):hover { background: var(--gp-border) !important; }
            html.gius-dark .gmgg-feedback-success { background: var(--gp-success-bg) !important; color: var(--gp-success-fg) !important; border-color: var(--gp-success-border) !important; }
            html.gius-dark .gmgg-feedback-error { background: var(--gp-error-bg) !important; color: var(--gp-error-fg) !important; border-color: var(--gp-error-border) !important; }
            html.gius-dark .gmgg-stats, html.gius-dark .gmgg-stat-row { background: var(--gp-deep) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .gmgg-stats-title, html.gius-dark .gmgg-stat-val { color: var(--gp-text) !important; }
            html.gius-dark .gmgg-stat-label { color: var(--gp-muted) !important; }

            /* ── GIU Attendance Script (.giu-*) ── */
            html.gius-dark .giu-attendance-wrap { --giu-color-text: var(--gp-text); --giu-color-muted: var(--gp-muted); --giu-color-border: var(--gp-border); --giu-color-surface: var(--gp-surface); color: var(--gp-text) !important; }
            html.gius-dark .giu-config-panel, html.gius-dark .giu-summary-panel, html.gius-dark .giu-summary-card { background: var(--gp-card) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giu-summary-body { background: var(--gp-card) !important; }
            html.gius-dark .giu-config-title, html.gius-dark .giu-attendance-section-title, html.gius-dark .giu-holiday-title { color: var(--gp-text) !important; }
            html.gius-dark .giu-holiday-table { background: var(--gp-card) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giu-holiday-table th { background: var(--gp-deep) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giu-holiday-table td { background: var(--gp-card) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giu-holiday-empty, html.gius-dark .giu-pagination { background: var(--gp-card) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important; }
            html.gius-dark .giu-pagination-btn { background: var(--gp-surface) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important; }
            html.gius-dark .giu-pagination-btn:hover:not(:disabled) { background: var(--gp-border) !important; }
            html.gius-dark .giu-pagination-size select, html.gius-dark .giu-dayoff-row select, html.gius-dark .giu-dayoff-row input, html.gius-dark .giu-holiday-controls select, html.gius-dark .giu-holiday-controls input { background: var(--gp-surface) !important; color: var(--gp-text) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giu-stat-row { background: var(--gp-deep) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giu-stat-label { color: var(--gp-muted) !important; }
            html.gius-dark .giu-stat-value { color: var(--gp-text) !important; }
            html.gius-dark .giu-progress-wrap { background: var(--gp-deep) !important; border-color: var(--gp-border) !important; }
            html.gius-dark .giu-summary-toggle-hint { background: var(--gp-surface) !important; border-color: var(--gp-border) !important; color: var(--gp-text) !important; }
            html.gius-dark .giu-dayoff-row { border-color: var(--gp-border) !important; }
            html.gius-dark .giu-dayoff-row label { color: var(--gp-text) !important; }
            html.gius-dark .giu-config-divider { background: var(--gp-border) !important; }
            html.gius-dark .giu-balance-positive { background: var(--gp-success-bg) !important; border-color: var(--gp-success-border) !important; }
            html.gius-dark .giu-balance-negative { background: var(--gp-error-bg) !important; border-color: var(--gp-error-border) !important; }
            html.gius-dark .giu-tag-positive { background: var(--gp-success-border) !important; color: var(--gp-success-fg) !important; }
            html.gius-dark .giu-tag-negative { background: var(--gp-error-border) !important; color: var(--gp-error-fg) !important; }
            html.gius-dark .giu-remove-holiday-btn { background: var(--gp-error-bg) !important; border-color: var(--gp-error-border) !important; color: var(--gp-error-fg) !important; }
            html.gius-dark .giu-dayoff-badge { background: var(--gp-warning-bg) !important; border-color: var(--gp-warning-fg) !important; color: var(--gp-warning-fg) !important; }

            /* ── Sidebar sub-menus: keep native portal color (Phase 1 reskin deferred) ── */
            html[data-gius-theme] aside.left-panel .sub-menu, html[data-gius-theme] aside.left-panel .dropdown-menu,
            html[data-gius-theme] #left-panel .sub-menu, html[data-gius-theme] #left-panel .dropdown-menu {
              background-color: #272c33 !important; background: #272c33 !important;
            }
        `;
        document.documentElement.appendChild(style);
    }

    // Resolve current mode from storage and apply pre-paint (no FOUC)
    currentMode = readStoredMode();
    applyMode(currentMode);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildPicker, { once: true });
    } else {
        buildPicker();
    }

    window.__giuTheme = {
        MODES,
        getMode: () => currentMode,
        readStoredMode,
        setMode,
        applyMode,
    };

})();
