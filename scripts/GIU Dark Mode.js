// ==UserScript==
// @name        GIU Dark Mode
// @description Dark mode toggle for the entire GIU portal
// @match       https://portal.giu-uni.de/*
// @namespace   ramin0
// @version     1.0
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
            html.gius-dark {
                filter: invert(1) hue-rotate(180deg);
            }

            /* Restore images, video, iframes — double-invert = original colors */
            html.gius-dark img,
            html.gius-dark video,
            html.gius-dark iframe {
                filter: invert(1) hue-rotate(180deg);
            }

            /* Restore GIUS panel headers — already dark (#272c33), would go light without this */
            html.gius-dark [class*="giug-card-header"],
            html.gius-dark [class*="gius-card-header"] {
                filter: invert(1) hue-rotate(180deg);
            }
        `;
        document.head.appendChild(style);
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
            transition: background 0.2s ease, padding 0.2s ease;
            user-select: none;
        `;

        updateTabLabel(tab, isDarkEnabled());

        tab.addEventListener('mouseenter', function () {
            tab.style.background = '#e6ac00';
        });
        tab.addEventListener('mouseleave', function () {
            tab.style.background = '#ffc107';
        });
        tab.addEventListener('click', function () {
            toggleDark(tab);
        });

        document.body.appendChild(tab);
    }

    // Apply class immediately before paint to avoid light flash
    if (isDarkEnabled()) {
        document.documentElement.classList.add('gius-dark');
    }

    document.addEventListener('DOMContentLoaded', function () {
        injectStyles();
        injectToggle();
    });

})();
