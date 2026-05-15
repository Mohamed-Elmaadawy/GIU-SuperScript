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

    function findOption(selectEl, value) {
        return Array.from(selectEl.options).find(o => o.value === value);
    }

    function escHtml(str) {
        const d = document.createElement('div');
        d.textContent = str;
        return d.innerHTML;
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
            const groupEl  = document.querySelector(SEL.group);
            const evalEl   = document.querySelector(SEL.eval);
            const seasonEl = document.querySelector(SEL.season);
            const courseEl = document.querySelector(SEL.course);
            const evalInvalid = !evalEl?.value;
            if (!seasonEl?.value || !courseEl?.value || !groupEl?.value || evalInvalid) {
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

    function renderProgress(queue) {
        const existing = document.getElementById('giu-batch-progress');
        if (existing) existing.remove();

        const total = queue.groups.length;
        const done  = queue.currentIndex;
        const pct   = total > 0 ? Math.round((done / total) * 100) : 0;
        const label = queue.groups[queue.currentIndex]?.label ?? '—';

        const div = document.createElement('div');
        div.id = 'giu-batch-progress';
        div.className = 'alert alert-info';
        div.style.cssText = 'margin: 10px 0;';
        div.innerHTML = `
            <strong>Batch running…</strong> Group ${done + 1} of ${total}: ${escHtml(label)}<br>
            <div style="background:#dee2e6;border-radius:4px;height:8px;margin-top:6px;">
                <div style="background:#0d6efd;width:${pct}%;height:8px;border-radius:4px;transition:width 0.3s;"></div>
            </div>`;

        const anchor = document.querySelector(SEL.season)?.closest('section')
            ?? document.querySelector(SEL.saveBtn)
            ?? document.querySelector('form');
        anchor?.insertAdjacentElement('beforebegin', div);
    }

    function advanceQueue(queue) {
        queue.currentIndex++;
        if (queue.currentIndex >= queue.groups.length) {
            queue.step = 'done';
            saveQueue(queue);
            runQueue();
            return;
        }
        queue.step = 'select-group';
        saveQueue(queue);
        location.reload();
    }

    function stepSelectGroup(queue) {
        const groupEl = document.querySelector(SEL.group);
        const target  = queue.groups[queue.currentIndex];

        if (!target) { clearQueue(); return; }

        if (!groupEl) {
            clearQueue();
            const div = document.createElement('div');
            div.className = 'alert alert-danger';
            div.textContent = 'Batch aborted: Group dropdown not found. Session may have expired.';
            document.querySelector('form')?.prepend(div);
            return;
        }

        const option = findOption(groupEl, target.value);
        if (!option) {
            queue.results.push({ label: target.label, status: 'skipped', reason: 'group not in dropdown' });
            advanceQueue(queue);
            return;
        }

        queue.step = 'select-eval';
        saveQueue(queue);
        groupEl.value = target.value;
        triggerPostBack('ctl00$MainContent$grpLst');
    }

    function stepSelectEval(queue) {
        const evalEl = document.querySelector(SEL.eval);
        const target = queue.groups[queue.currentIndex];

        if (!target) { clearQueue(); return; }

        if (!evalEl) {
            queue.results.push({ label: target.label, status: 'failed', reason: 'eval dropdown not found' });
            advanceQueue(queue);
            return;
        }

        const option = findOption(evalEl, queue.savedEvalId);
        if (!option) {
            queue.results.push({ label: target.label, status: 'failed', reason: 'eval method not in dropdown after group select' });
            advanceQueue(queue);
            return;
        }

        queue.step = 'collect';
        saveQueue(queue);
        evalEl.value = queue.savedEvalId;
        triggerPostBack('ctl00$MainContent$evalMethIdLst');
    }

    function stepCollect(queue) {
        const rows   = getGradeRows();
        const target = queue.groups[queue.currentIndex];

        if (!target) { clearQueue(); return; }

        if (rows.length === 0) {
            queue.results.push({ label: target.label, status: 'failed', reason: 'no student rows after eval select' });
            advanceQueue(queue);
            return;
        }

        const hasCsv = Object.keys(queue.csvMap).length > 0;

        if (hasCsv) {
            fillGradesFromMap(queue.csvMap, null);
        }

        const values = rows
            .map(r => r.querySelector(SEL.gradeIn)?.value?.trim())
            .filter(v => v && !isNaN(v));
        const stats = computeStats(values);
        queue.results.push({ label: target.label, status: 'done', ...stats });

        downloadCSV(rows, target.label, queue.savedEvalLabel);

        queue.currentIndex++;
        queue.step = queue.currentIndex < queue.groups.length ? 'select-group' : 'done';
        saveQueue(queue);

        if (hasCsv) {
            document.querySelector(SEL.saveBtn)?.click();
        } else if (queue.step !== 'done') {
            location.reload();
        } else {
            runQueue();
        }
    }

    function renderSummary(queue) {
        const progress = document.getElementById('giu-batch-progress');
        if (progress) progress.remove();

        const done    = queue.results.filter(r => r.status === 'done');
        const skipped = queue.results.filter(r => r.status !== 'done');

        let html = `<strong>Batch Complete</strong> — ${done.length} group(s) processed`;
        if (skipped.length) html += `, ${skipped.length} skipped/failed`;

        html += `
        <table class="table table-bordered table-sm" style="margin-top:10px;">
            <thead>
                <tr><th>Group</th><th>Avg</th><th>Min</th><th>Max</th><th>Range</th><th>Students</th></tr>
            </thead>
            <tbody>`;

        for (const r of done) {
            html += `<tr>
                <td>${escHtml(r.label)}</td>
                <td>${r.avg}</td><td>${r.min}</td><td>${r.max}</td>
                <td>${r.range}</td><td>${r.count}</td>
            </tr>`;
        }
        for (const r of skipped) {
            html += `<tr class="table-warning">
                <td>${escHtml(r.label)}</td>
                <td colspan="5">${r.status}${r.reason ? ': ' + escHtml(r.reason) : ''}</td>
            </tr>`;
        }

        html += '</tbody></table>';

        const wrapper = document.createElement('div');
        wrapper.className = 'alert alert-success';
        wrapper.style.cssText = 'margin: 10px 0;';
        wrapper.innerHTML = html;

        const anchor = document.querySelector(SEL.season)?.closest('section')
            ?? document.querySelector('form');
        anchor?.insertAdjacentElement('beforebegin', wrapper);
    }

    function runQueue() {
        const queue = loadQueue();
        if (!queue) return false;

        if (queue.step === 'done') {
            renderSummary(queue);
            clearQueue();
            return true;
        }

        renderProgress(queue);

        switch (queue.step) {
            case 'select-group': stepSelectGroup(queue); break;
            case 'select-eval':  stepSelectEval(queue);  break;
            case 'collect':      stepCollect(queue);     break;
            default:
                clearQueue();
        }
        return true;
    }

    function init() {
        if (runQueue()) return;

        const saveBtn = document.querySelector(SEL.saveBtn);
        if (!saveBtn) return;
        if (document.querySelector(SEL.rows)) {
            injectToolbar(saveBtn);
        }
    }

    init();
})();
