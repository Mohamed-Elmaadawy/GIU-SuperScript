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
                e.target.result.trim().split(/\r?\n/).filter(l => l.trim()).forEach(line => {
                    const cols = line.split(',').map(v => v.trim());
                    const id   = extractStudentId(cols[0]);
                    const grade = cols[cols.length - 1];
                    if (id && grade !== '' && Number.isFinite(+grade)) map[id] = grade;
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
                return `"${name.replace(/"/g, '""')}",${grade}`;
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

    function fillGradesFromMap(csvMap, statsBar) {
        getGradeRows().forEach(row => {
            const nameEl  = row.querySelector(SEL.nameLbl);
            const gradeEl = row.querySelector(SEL.gradeIn);
            const maxEl   = row.querySelector(SEL.maxPt);
            if (!nameEl || !gradeEl) return;
            const id = extractStudentId(nameEl.textContent.trim());
            if (!id || !(id in csvMap)) return;
            const maxPt = maxEl ? Number(maxEl.value) : Infinity;
            const grade = Number(csvMap[id]);
            if (isNaN(grade) || grade > maxPt) return;
            gradeEl.value = grade;
        });
        if (statsBar) refreshStats(statsBar);
    }

    function refreshStats(bar) {
        const values = Array.from(document.querySelectorAll(SEL.gradeIn))
            .map(inp => inp.value.trim())
            .filter(v => v !== '' && !isNaN(v));
        if (!values.length) { bar.textContent = 'No grades loaded'; return; }
        const { avg, min, max, range, count } = computeStats(values);
        bar.textContent = `Avg: ${avg}  |  Min: ${min}  |  Max: ${max}  |  Range: ${range}  |  Students: ${count}`;
    }

    function buildStatsBar() {
        const bar = document.createElement('div');
        bar.id = 'giu-stats-bar';
        bar.style.cssText = 'margin-top: 8px; font-weight: bold; color: #495057; font-size: 0.95em;';
        bar.textContent = 'No grades loaded';
        return bar;
    }

    function injectToolbar(saveBtn) {
        if (document.getElementById('giu-toolbar')) return;

        const container = document.createElement('div');
        container.id = 'giu-toolbar';
        container.style.cssText = 'margin-bottom: 12px; padding: 10px; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 4px;';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.style.display = 'none';

        const uploadBtn   = makeBtn('📄 Upload Grades CSV');
        const downloadBtn = makeBtn('📥 Download Grades CSV');
        const batchBtn    = makeBtn('▶ Batch All Groups');
        const statsBar    = buildStatsBar();

        let parsedCsvMap = null;

        uploadBtn.onclick = () => fileInput.click();

        downloadBtn.onclick = () => {
            const groupEl = document.querySelector(SEL.group);
            const evalEl  = document.querySelector(SEL.eval);
            const groupLabel = groupEl?.options[groupEl.selectedIndex]?.text?.trim() ?? 'group';
            const evalLabel  = evalEl?.options[evalEl.selectedIndex]?.text?.split('||')[0]?.trim() ?? 'eval';
            downloadCSV(getGradeRows(), groupLabel, evalLabel);
        };

        fileInput.addEventListener('change', async () => {
            const file = fileInput.files[0];
            if (!file) return;
            parsedCsvMap = await parseGradesCSV(file);
            fillGradesFromMap(parsedCsvMap, statsBar);
        });

        batchBtn.onclick = () => {
            const groupEl = document.querySelector(SEL.group);
            const evalEl  = document.querySelector(SEL.eval);
            if (!groupEl || !evalEl || !evalEl.value || evalEl.value === 'Please Choose an Evaluation') {
                alert('Select all four dropdowns first (Season, Course, Group, Evaluation Method).');
                return;
            }
            const queue = buildQueueState(parsedCsvMap);
            if (queue.groups.length === 0) { alert('No groups found in dropdown.'); return; }
            saveQueue(queue);
            location.reload();
        };

        document.addEventListener('input', (e) => {
            if (e.target.matches(SEL.gradeIn)) refreshStats(statsBar);
        });

        container.append(uploadBtn, fileInput, downloadBtn, batchBtn, statsBar);
        saveBtn.insertAdjacentElement('beforebegin', container);

        refreshStats(statsBar);
    }

    function buildQueueState(csvMap) {
        const groupEl  = document.querySelector(SEL.group);
        const evalEl   = document.querySelector(SEL.eval);
        const seasonEl = document.querySelector(SEL.season);
        const courseEl = document.querySelector(SEL.course);

        const groups = Array.from(groupEl.options)
            .filter(o => o.value !== '')
            .map(o => ({ value: o.value, label: o.text.trim() }));

        const evalOpt = evalEl.options[evalEl.selectedIndex];

        return {
            step:           'select-group',
            currentIndex:   0,
            savedSeasonId:  seasonEl?.value ?? '',
            savedCourseId:  courseEl?.value ?? '',
            savedEvalId:    evalEl.value,
            savedEvalLabel: evalOpt?.text?.split('||')[0]?.trim() ?? '',
            groups,
            csvMap:   csvMap ?? {},
            results:  [],
        };
    }

    function init() {
        const saveBtn = document.querySelector(SEL.saveBtn);
        if (!saveBtn) return;
        if (document.querySelector(SEL.rows)) {
            injectToolbar(saveBtn);
        }
    }

    init();
})();
