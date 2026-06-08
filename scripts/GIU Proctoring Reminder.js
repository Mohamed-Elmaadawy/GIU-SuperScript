// ==UserScript==
// @name        GIU Proctoring Reminder
// @description Shows your next proctoring session on the portal home page and exports reminders to calendar/email
// @match       https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx
// @namespace   ramin0
// @version     1.0
// @author      Mo.Elmaadawy
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    const CACHE_KEY = 'giuProctorTimetableV1';
    const TIMETABLE_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/ViewTimeTable_m.aspx';
    const TTL_MS = 6 * 60 * 60 * 1000; // 6h

    function parseExamString(raw) {
        const stripCampus = s => s.replace(/^GIU-[^.-]*[.-]/, '').trim();
        const COURSE_CODE = /^[A-Z]{2,8}[a-z]?\d{3,4}[A-Za-z]?$/;
        const parts = raw.split(' ---> ');
        if (parts.length < 2) return { courseCode: '', examName: raw.trim(), program: '' };
        const right = parts[1].trim();
        const segs = right.split(' - ');
        const program = stripCampus(segs[0]);
        if (segs.length === 1) {
            const words = program.split(/\s+/);
            const codeIdx = words.findIndex(w => COURSE_CODE.test(w));
            if (codeIdx !== -1) return {
                program: words.slice(0, codeIdx).join(' '),
                courseCode: words[codeIdx],
                examName: words.slice(codeIdx + 1).join(' '),
            };
            return { courseCode: '', examName: right, program: '' };
        }
        const rest = segs.slice(1).join(' ').trim();
        const words = rest.split(/\s+/);
        const codeIdx = words.findIndex(w => COURSE_CODE.test(w));
        if (codeIdx !== -1) return {
            program,
            courseCode: words[codeIdx],
            examName: words.slice(codeIdx + 1).join(' ').replace(/^[-\s]+/, '').trim(),
        };
        return { courseCode: '', program, examName: rest };
    }

    function parseTable(doc, id, role) {
        const tbl = doc.getElementById(id);
        if (!tbl) return [];
        const out = [];
        const rows = Array.from(tbl.rows).slice(1); // skip header
        for (const tr of rows) {
            const c = tr.cells;
            if (c.length < 6) continue;
            const start = new Date(c[2].textContent.trim());
            const end = new Date(c[3].textContent.trim());
            if (isNaN(start.getTime()) || isNaN(end.getTime())) continue;
            const { program, courseCode, examName } = parseExamString(c[0].textContent.trim());
            out.push({
                program, courseCode, examName,
                hall: c[1].textContent.trim(),
                start, end,
                type: c[4].textContent.trim(),
                controlRoom: c[5].textContent.trim(),
                role,
            });
        }
        return out;
    }

    function parseSessions(doc) {
        const all = [
            ...parseTable(doc, 'MainContent_tmTblDg', 'own'),
            ...parseTable(doc, 'MainContent_coverDG', 'cover'),
        ];
        return all.sort((a, b) => a.start - b.start);
    }

    function pickNext(sessions, now) {
        const future = sessions.filter(s => s.start >= now).sort((a, b) => a.start - b.start);
        return future.length ? future[0] : null;
    }

    function saveCache(sessions) {
        const payload = {
            fetchedAt: Date.now(),
            sessions: sessions.map(s => ({ ...s, start: s.start.toISOString(), end: s.end.toISOString() })),
        };
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(payload)); } catch { /* quota */ }
    }

    function loadCache() {
        try {
            const raw = JSON.parse(localStorage.getItem(CACHE_KEY));
            if (!raw || !Array.isArray(raw.sessions)) return null;
            raw.sessions = raw.sessions.map(s => ({ ...s, start: new Date(s.start), end: new Date(s.end) }));
            return raw;
        } catch { return null; }
    }

    function isStale(fetchedAt) {
        return !fetchedAt || (Date.now() - fetchedAt) > TTL_MS;
    }

    // ── test hook (extended as functions are added) ──
    window.__giuProctorReminder = { parseExamString, parseSessions, pickNext, loadCache, saveCache, isStale };
})();
