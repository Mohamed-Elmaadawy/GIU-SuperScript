    if (/\/Home\.aspx$/i.test(location.pathname)) {
        unenteredSessions(S);
    }

    // ═══ Deep-link: auto-select session when arriving from a widget click
    //     (?gius_session={id}). Sessions dropdown isn't group-filtered
    //     (confirmed live), so selecting it alone and letting its native
    //     onchange fire the portal's own __doPostBack is enough. ──
    try {
        if (/\/ClassAttendance_ManageStudentAttendancesH003\.aspx/i.test(location.pathname)) {
            const sessionId = new URLSearchParams(location.search).get('gius_session');
            const sel = document.getElementById('MainContent_DDL_Sessions');
            if (sessionId && sel && sel.value !== sessionId) {
                const opt = Array.from(sel.options).find(o => o.value === sessionId);
                if (opt) {
                    sel.value = sessionId;
                    sel.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        }
    } catch (e) {
        S.warn('sessionDeepLink', 'crashed:', e);
    }
