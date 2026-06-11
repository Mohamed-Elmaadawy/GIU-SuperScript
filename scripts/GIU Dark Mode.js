// ==UserScript==
// @name        GIU Dark Mode
// @description Dark mode toggle for the entire GIU portal
// @include     https://portal.giu-uni.de/*
// @icon         data:image/png;base64,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
// @namespace   Cyn0
// @version     2.8.1
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/GIU%20Dark%20Mode.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/GIU%20Dark%20Mode.js
// @author      Mo.Elmaadawy
// @run-at      document-start
// ==/UserScript==

(function () {
    'use strict';

    const STORAGE_KEY = 'gius-dark-mode';

    function isDarkEnabled() {
        try { return localStorage.getItem(STORAGE_KEY) === '1'; }
        catch { return false; }
    }

    function saveDark(on) {
        try { localStorage.setItem(STORAGE_KEY, on ? '1' : '0'); }
        catch { /* ignore */ }
    }

    function injectStyles() {
        if (document.getElementById('gius-dm-styles')) return;
        const style = document.createElement('style');
        style.id = 'gius-dm-styles';
        style.textContent = `
            /* ── Main layout (Sufee-Admin Bootstrap template) ── */
            html.gius-dark body,
            html.gius-dark #page-wrapper,
            html.gius-dark .right-panel,
            html.gius-dark .container,
            html.gius-dark .container-fluid,
            html.gius-dark .content {
                background-color: #1e1e2e !important;
                color: #cdd6f4 !important;
            }

            /* ── Page title bar (light gray strip at top of content) ── */
            html.gius-dark .page-header,
            html.gius-dark .page-title,
            html.gius-dark .header,
            html.gius-dark .breadcrumbs,
            html.gius-dark .alert-secondary {
                background-color: #181825 !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }

            /* ── General text (scoped to content area — keeps sidebar native colors) ── */
            html.gius-dark h1, html.gius-dark h2, html.gius-dark h3,
            html.gius-dark h4, html.gius-dark h5, html.gius-dark h6 {
                color: #cdd6f4 !important;
            }
            html.gius-dark .right-panel p,
            html.gius-dark .right-panel label,
            html.gius-dark .right-panel li,
            html.gius-dark .right-panel span:not([class*="badge"]) {
                color: #cdd6f4 !important;
            }

            /* ── Input placeholder text ── */
            html.gius-dark ::placeholder {
                color: #6c7086 !important;
                opacity: 1 !important;
            }

            /* ── Tables ── */
            html.gius-dark table { border-color: #45475a !important; }
            html.gius-dark thead, html.gius-dark tbody, html.gius-dark tfoot,
            html.gius-dark tr { background-color: #1e1e2e !important; }
            html.gius-dark tbody tr:nth-child(even) { background-color: #181825 !important; }
            html.gius-dark thead tr { background-color: #11111b !important; }
            html.gius-dark td, html.gius-dark th {
                background-color: inherit !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }

            /* ── Form inputs ── */
            html.gius-dark .form-control,
            html.gius-dark input[type="text"],
            html.gius-dark input[type="email"],
            html.gius-dark input[type="password"],
            html.gius-dark input[type="search"],
            html.gius-dark input[type="number"],
            html.gius-dark input[type="date"],
            html.gius-dark textarea {
                background-color: #313244 !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark select:not([class*="giug-"]):not([class*="gius-"]) {
                background-color: #313244 !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .form-control:focus,
            html.gius-dark input:focus,
            html.gius-dark select:focus,
            html.gius-dark textarea:focus {
                border-color: #89b4fa !important;
                outline-color: #89b4fa !important;
            }

            /* ── Native portal buttons (not GIUS custom buttons) ── */
            html.gius-dark input[type="submit"],
            html.gius-dark input[type="button"],
            html.gius-dark button:not(#gius-dm-toggle):not([class*="giug-btn"]):not([class*="gius-btn"]) {
                background-color: #45475a !important;
                color: #cdd6f4 !important;
                border-color: #585b70 !important;
            }

            /* ── Bootstrap 3 panels + Bootstrap 4 cards + thumbnails ── */
            html.gius-dark .panel,
            html.gius-dark .panel-default,
            html.gius-dark .panel-body,
            html.gius-dark .card,
            html.gius-dark .card-body,
            html.gius-dark .thumbnail,
            html.gius-dark a.thumbnail {
                background-color: #181825 !important;
                border-color: transparent !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .panel-heading,
            html.gius-dark .card-header {
                background-color: #11111b !important;
                border-color: transparent !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .card-footer {
                background-color: #11111b !important;
                border-color: transparent !important;
                color: #cdd6f4 !important;
            }

            /* ── Material Dashboard card-stats (no card-body — header IS the card) ── */
            html.gius-dark .card-stats,
            html.gius-dark .card-header-icon,
            html.gius-dark .card-header-dark {
                background: #181825 !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .card-icon {
                background: #11111b !important;
            }

            /* ── Top info bar (role/username strip above content) ── */
            html.gius-dark .navbar-nav > li > a,
            html.gius-dark .navbar-text {
                color: #cdd6f4 !important;
            }

            /* ── Nav tabs ── */
            html.gius-dark .nav-tabs {
                border-color: #45475a !important;
            }
            html.gius-dark .nav-tabs .nav-link,
            html.gius-dark .nav-tabs > li > a {
                color: #cdd6f4 !important;
            }
            html.gius-dark .nav-tabs .nav-link.active,
            html.gius-dark .nav-tabs > li.active > a,
            html.gius-dark .nav-tabs > li.active > a:focus,
            html.gius-dark .nav-tabs > li.active > a:hover {
                background-color: #1e1e2e !important;
                border-color: #45475a #45475a #1e1e2e !important;
                color: #cdd6f4 !important;
            }

            /* ── Bootstrap dropdowns (content area only — sidebar excluded) ── */
            html.gius-dark .right-panel .dropdown-menu,
            html.gius-dark .content .dropdown-menu {
                background-color: #313244 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .right-panel .dropdown-menu > li > a { color: #cdd6f4 !important; }
            html.gius-dark .right-panel .dropdown-menu > li > a:hover,
            html.gius-dark .right-panel .dropdown-menu > .active > a {
                background-color: #45475a !important;
                color: #cdd6f4 !important;
            }

            /* ── Sidebar sub-menus: lock to native sidebar color ── */
            html.gius-dark aside.left-panel .sub-menu,
            html.gius-dark aside.left-panel .dropdown-menu,
            html.gius-dark #left-panel .sub-menu,
            html.gius-dark #left-panel .dropdown-menu {
                background-color: #272c33 !important;
                background: #272c33 !important;
            }

            /* ── Wells ── */
            html.gius-dark .well {
                background-color: #11111b !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }

            /* ── Modals ── */
            html.gius-dark .modal-content {
                background-color: #1e1e2e !important;
                border-color: #45475a !important;
            }
            html.gius-dark .modal-header {
                background-color: #181825 !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .modal-body { color: #cdd6f4 !important; }
            html.gius-dark .modal-footer {
                background-color: #181825 !important;
                border-color: #45475a !important;
            }

            /* ── Breadcrumbs ── */
            html.gius-dark .breadcrumb {
                background-color: #181825 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .breadcrumb > li { color: #cdd6f4 !important; }

            /* ── Chosen.js select widget (used in portal dropdowns) ── */
            html.gius-dark .chosen-container .chosen-single,
            html.gius-dark .chosen-container-multi .chosen-choices {
                background: #313244 !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .chosen-container .chosen-drop {
                background: #313244 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .chosen-results li {
                color: #cdd6f4 !important;
                background: #313244 !important;
            }
            html.gius-dark .chosen-results li.highlighted { background: #45475a !important; }

            /* ── GIUS notification panel: group list + labels + inputs ── */
            html.gius-dark .gius-group-list {
                background: #181825 !important;
                border-color: #45475a !important;
                scrollbar-color: #585b70 #181825 !important;
            }
            html.gius-dark .gius-group-list::-webkit-scrollbar-track { background: #181825 !important; }
            html.gius-dark .gius-group-list::-webkit-scrollbar-thumb { background: #585b70 !important; }
            html.gius-dark .gius-group-row:hover { background: #313244 !important; }
            html.gius-dark .gius-group-row label,
            html.gius-dark .gius-toggle-label { color: #cdd6f4 !important; }
            html.gius-dark .gius-section-label,
            html.gius-dark .gius-field-label,
            html.gius-dark .gius-empty-msg { color: #a6adc8 !important; }
            html.gius-dark .gius-divider { background: #45475a !important; }
            html.gius-dark .gius-input {
                background: #313244 !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .gius-card-category { color: rgba(205,214,244,0.7) !important; }

            /* ── GIUS injected cards (white bg in light mode) ── */
            html.gius-dark .giug-card, html.gius-dark .gius-card {
                background-color: #181825 !important;
                border-color: transparent !important;
            }
            html.gius-dark .giug-card-body, html.gius-dark .gius-card-body {
                background-color: #181825 !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .giug-select, html.gius-dark .gius-select {
                background-color: #313244 !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giug-btn-success, html.gius-dark .giug-btn-outline,
            html.gius-dark .gius-btn-success, html.gius-dark .gius-btn-outline {
                background-color: #313244 !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .giug-btn-success:not(:disabled):hover,
            html.gius-dark .giug-btn-outline:not(:disabled):hover {
                background-color: #45475a !important;
            }
            html.gius-dark .giug-alert, html.gius-dark .gius-alert {
                background-color: #181825 !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .giug-alert-info, html.gius-dark .gius-alert-info {
                background-color: #1a2a4a !important;
                color: #89b4fa !important;
                border-color: #1e3a6e !important;
            }
            html.gius-dark .giug-alert-error, html.gius-dark .gius-alert-error {
                background-color: #3d0000 !important;
                color: #f38ba8 !important;
                border-color: #5a0000 !important;
            }

            /* ── GIU Upload Grades: stats table (not covered by generic rules) ── */
            html.gius-dark .giug-stats-table td {
                background: #181825 !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giug-stats-table th {
                background: #11111b !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giug-stat-num,
            html.gius-dark .giug-stats-label { color: #cdd6f4 !important; }
            html.gius-dark .giug-stats-section { border-color: #45475a !important; }
            html.gius-dark .giug-stat {
                background: #11111b !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giug-stat-key { color: #a6adc8 !important; }
            html.gius-dark .giug-stat-val { color: #cdd6f4 !important; }

            /* ── GIU Manage Group Grades (.gmgg-*) ── */
            html.gius-dark .gmgg-panel {
                background: #181825 !important;
                border-color: transparent !important;
            }
            html.gius-dark .gmgg-panel-body { color: #cdd6f4 !important; }
            html.gius-dark .gmgg-btn-upload,
            html.gius-dark .gmgg-btn-download {
                background: #313244 !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .gmgg-btn-upload:not(:disabled):hover,
            html.gius-dark .gmgg-btn-download:not(:disabled):hover {
                background: #45475a !important;
            }
            html.gius-dark .gmgg-feedback-success {
                background: #0d3321 !important;
                color: #a6e3a1 !important;
                border-color: #1e4d33 !important;
            }
            html.gius-dark .gmgg-feedback-error {
                background: #3d0000 !important;
                color: #f38ba8 !important;
                border-color: #5a0000 !important;
            }
            html.gius-dark .gmgg-stats {
                background: #11111b !important;
                border-color: #45475a !important;
            }
            html.gius-dark .gmgg-stat-row {
                background: #11111b !important;
                border-color: #45475a !important;
            }
            html.gius-dark .gmgg-stats-title,
            html.gius-dark .gmgg-stat-val { color: #cdd6f4 !important; }
            html.gius-dark .gmgg-stat-label { color: #a6adc8 !important; }

            /* ── GIU Attendance Script (.giu-*) ── */
            html.gius-dark .giu-attendance-wrap {
                --giu-color-text: #cdd6f4;
                --giu-color-muted: #a6adc8;
                --giu-color-border: #45475a;
                --giu-color-surface: #313244;
                color: #cdd6f4 !important;
            }
            html.gius-dark .giu-config-panel,
            html.gius-dark .giu-summary-panel,
            html.gius-dark .giu-summary-card {
                background: #181825 !important;
                border-color: transparent !important;
            }
            html.gius-dark .giu-summary-body { background: #181825 !important; }
            html.gius-dark .giu-config-title,
            html.gius-dark .giu-attendance-section-title,
            html.gius-dark .giu-holiday-title { color: #cdd6f4 !important; }
            html.gius-dark .giu-holiday-table {
                background: #181825 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giu-holiday-table th {
                background: #11111b !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giu-holiday-table td {
                background: #181825 !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giu-holiday-empty,
            html.gius-dark .giu-pagination {
                background: #181825 !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .giu-pagination-btn {
                background: #313244 !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .giu-pagination-btn:hover:not(:disabled) {
                background: #45475a !important;
            }
            html.gius-dark .giu-pagination-size select,
            html.gius-dark .giu-dayoff-row select,
            html.gius-dark .giu-dayoff-row input,
            html.gius-dark .giu-holiday-controls select,
            html.gius-dark .giu-holiday-controls input {
                background: #313244 !important;
                color: #cdd6f4 !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giu-stat-row {
                background: #11111b !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giu-stat-label { color: #a6adc8 !important; }
            html.gius-dark .giu-stat-value { color: #cdd6f4 !important; }
            html.gius-dark .giu-progress-wrap {
                background: #11111b !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giu-summary-toggle-hint {
                background: #313244 !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .giu-dayoff-row { border-color: #45475a !important; }
            html.gius-dark .giu-dayoff-row label { color: #cdd6f4 !important; }
            html.gius-dark .giu-config-divider { background: #45475a !important; }
            html.gius-dark .giu-balance-positive { background: #0d3321 !important; border-color: #1e4d33 !important; }
            html.gius-dark .giu-balance-negative { background: #3d0000 !important; border-color: #5a0000 !important; }
            html.gius-dark .giu-tag-positive { background: #1e4d33 !important; color: #a6e3a1 !important; }
            html.gius-dark .giu-tag-negative { background: #5a0000 !important; color: #f38ba8 !important; }
            html.gius-dark .giu-remove-holiday-btn {
                background: #3d0000 !important;
                border-color: #5a0000 !important;
                color: #f38ba8 !important;
            }
            html.gius-dark .giu-dayoff-badge {
                background: #3d2a00 !important;
                border-color: #ffc107 !important;
                color: #ffc107 !important;
            }
        `;
        document.documentElement.appendChild(style);
    }

    function updateTabLabel(tab, on) {
        tab.textContent = on ? '☀️ LIGHT' : '🌙 DARK';
    }

    function toggleDark(tab) {
        const on = document.documentElement.classList.toggle('gius-dark');
        saveDark(on);
        injectStyles();
        updateTabLabel(tab, on);
    }

    function injectToggle() {
        if (document.getElementById('gius-dm-toggle')) return;
        if (!document.body) return;

        const tab = document.createElement('button');
        tab.id = 'gius-dm-toggle';
        tab.setAttribute('title', 'Toggle dark mode');
        tab.style.cssText = `
            position: fixed;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2147483647;
            background: #ffc107;
            color: #1a1a1a;
            border: none;
            border-radius: 6px 0 0 6px;
            padding: 10px 5px;
            cursor: pointer;
            writing-mode: vertical-rl;
            text-orientation: mixed;
            font-family: 'Open Sans', Arial, sans-serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 4px;
            box-shadow: -2px 0 8px rgba(0,0,0,0.2);
            transition: background 0.2s ease;
            user-select: none;
        `;

        updateTabLabel(tab, isDarkEnabled());

        tab.addEventListener('mouseenter', function () { tab.style.background = '#e6ac00'; });
        tab.addEventListener('mouseleave', function () { tab.style.background = '#ffc107'; });
        tab.addEventListener('click', function () { toggleDark(tab); });

        document.body.appendChild(tab);
    }

    // Apply class + styles immediately before first paint (document-start)
    if (isDarkEnabled()) {
        document.documentElement.classList.add('gius-dark');
    }
    injectStyles();

    document.addEventListener('DOMContentLoaded', injectToggle);
    // Fallback for pages where DOMContentLoaded fires differently (ASP.NET postbacks, home page)
    window.addEventListener('load', injectToggle);

})();
