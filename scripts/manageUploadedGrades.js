// ==UserScript==
// @name        GIU Manage Uploaded Grades
// @description Adds CSV upload, download, live stats, and batch automation to Manage Uploaded Grades page.
// @match       https://portal.giu-uni.de/GIUb/EXT/ManageUploadedGrades_m.aspx
// @namespace   ramin0
// @version     1.0
// @author      Mo.Elmaadawy
// @icon        https://i.ibb.co/Q7mgLHsW/GIU-images.png
// @run-at      document-idle
// ==/UserScript==

(function () {
    'use strict';

    const QUEUE_KEY = 'giuManageGradesQueueV1';

    const BTN_STYLE = `
        padding: 8px 14px;
        background-color: #0d6efd;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 8px;
    `;

    const SEL = {
        season:  '#MainContent_dlSeason',
        course:  '#MainContent_smCrsLst',
        group:   '#MainContent_grpLst',
        eval:    '#MainContent_evalMethIdLst',
        saveBtn: '#MainContent_saveBtn',
        rows:    'tr[id^="MainContent_rptrNtt_stdRw_"]',
        nameLbl: 'span[id^="MainContent_rptrNtt_stdNmLbl_"]',
        gradeIn: 'input[id^="MainContent_rptrNtt_grd_"]',
        maxPt:   'input[id^="MainContent_rptrNtt_mxPt_"]',
    };

    function makeBtn(text) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = text;
        btn.style.cssText = BTN_STYLE;
        return btn;
    }

    function getGradeRows() {
        return Array.from(document.querySelectorAll(SEL.rows));
    }

    function extractStudentId(nameText) {
        const m = nameText.match(/^\((\d+)\)/);
        return m ? m[1] : null;
    }

    function triggerPostBack(target) {
        const et = document.getElementById('__EVENTTARGET');
        const ea = document.getElementById('__EVENTARGUMENT');
        const f  = document.getElementById('form1');
        if (!et || !ea || !f) return;
        et.value = target;
        ea.value = '';
        f.submit();
    }

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

    function parseGradesCSV(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const map = {};
                e.target.result.trim().split(/\r?\n/).forEach(line => {
                    const cols = line.split(',').map(v => v.trim());
                    const id   = extractStudentId(cols[0]);
                    const grade = cols[cols.length - 1];
                    if (id && grade !== '' && !isNaN(grade)) map[id] = grade;
                });
                resolve(map);
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }

    function computeStats(values) {
        if (!values.length) return { avg: 0, min: 0, max: 0, range: 0, count: 0 };
        const nums = values.map(Number);
        const min  = Math.min(...nums);
        const max  = Math.max(...nums);
        const avg  = +(nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2);
        return { avg, min, max, range: max - min, count: nums.length };
    }

    function downloadCSV(rows, groupLabel, evalLabel) {
        const csv = [
            'Name,Grade',
            ...rows.map(row => {
                const name  = row.querySelector(SEL.nameLbl)?.textContent?.trim() ?? '';
                const grade = row.querySelector(SEL.gradeIn)?.value ?? '';
                return `${name},${grade}`;
            }),
        ].join('\n');
        const filename = `${groupLabel}-${evalLabel}.csv`.replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_');
        const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

})();
