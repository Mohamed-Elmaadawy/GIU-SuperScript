// ==UserScript==
// @name        GIU Dark Mode
// @description Dark mode toggle for the entire GIU portal
// @include     https://portal.giu-uni.de/*
// @namespace   ramin0
// @version     1.7
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

            /* ── Bootstrap 3 panels + Bootstrap 4 cards ── */
            html.gius-dark .panel,
            html.gius-dark .panel-default,
            html.gius-dark .panel-body,
            html.gius-dark .card,
            html.gius-dark .card-body {
                background-color: #26263a !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .panel-heading,
            html.gius-dark .card-header {
                background-color: #181825 !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
            }
            html.gius-dark .card-footer {
                background-color: #181825 !important;
                border-color: #45475a !important;
                color: #cdd6f4 !important;
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
                background-color: #181825 !important;
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
                background-color: #26263a !important;
                border-color: #45475a !important;
            }
            html.gius-dark .giug-card-body, html.gius-dark .gius-card-body {
                background-color: #26263a !important;
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
