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

    // Apply class immediately before paint to avoid light flash
    if (isDarkEnabled()) {
        document.documentElement.classList.add('gius-dark');
    }

})();
