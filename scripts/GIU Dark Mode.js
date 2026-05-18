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

    // Apply class immediately before paint to avoid light flash
    if (isDarkEnabled()) {
        document.documentElement.classList.add('gius-dark');
    }

    document.addEventListener('DOMContentLoaded', function () {
        injectStyles();
    });

})();
