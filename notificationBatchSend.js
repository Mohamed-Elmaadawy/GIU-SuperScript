// ==UserScript==
// @name        GIU Notification Batch Send
// @description Send emails to multiple tutorial groups at once on the GIU portal
// @match       https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx
// @namespace   ramin0
// @version     1.0
// @run-at      document-idle
// ==/UserScript==

(function () {
    'use strict';

    const QUEUE_KEY = 'giuBatchNotifyQueueV1';

    function loadQueue() {
        try { return JSON.parse(localStorage.getItem(QUEUE_KEY)); }
        catch { return null; }
    }

    function saveQueue(q) {
        localStorage.setItem(QUEUE_KEY, JSON.stringify(q));
    }

    function clearQueue() {
        localStorage.removeItem(QUEUE_KEY);
    }

    // ── Page helpers ────────────────────────────────────────────────────────────

    function getEl(id) {
        return document.getElementById(id);
    }

    function getGroupOptions() {
        const ddl = getEl('MainContent_DDL_Group');
        if (!ddl) return [];
        return Array.from(ddl.options)
            .filter(o => o.value !== '')
            .map(o => ({ value: o.value, label: o.text.trim() }));
    }

    function triggerPostBack(target) {
        getEl('__EVENTTARGET').value = target;
        getEl('__EVENTARGUMENT').value = '';
        getEl('form1').submit();
    }

    function getInjectionAnchor() {
        // inject before the <table> that follows MainContent_lblText
        const ref = getEl('MainContent_lblText');
        if (ref && ref.nextElementSibling) return ref.nextElementSibling;
        return getEl('form1');
    }

})();
