// ==UserScript==
// @name        GIU Manage Uploaded Grades
// @description Batch-automates grade upload across all groups: download combined CSV, fill in grades, re-upload to save all groups.
// @match       https://portal.giu-uni.de/GIUb/EXT/ManageUploadedGrades_m.aspx
// @namespace   ramin0
// @version     2.0
// @author      Mo.Elmaadawy
// @icon        https://i.ibb.co/Q7mgLHsW/GIU-images.png
// @run-at      document-idle
// ==/UserScript==

(function () {
    'use strict';

    // ── Constants ────────────────────────────────────────────────────────────

    const QUEUE_KEY = 'giuManageGradesQueueV2';

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

    const BTN_STYLE = 'padding:8px 14px;background:#0d6efd;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-right:8px;';

    // ── DOM helpers ──────────────────────────────────────────────────────────

    function makeBtn(text) {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = text;
        b.style.cssText = BTN_STYLE;
        return b;
    }

    function escHtml(s) {
        const d = document.createElement('div');
        d.textContent = s;
        return d.innerHTML;
    }

    function getRows() {
        return Array.from(document.querySelectorAll(SEL.rows));
    }

    // ── Student ID extraction ────────────────────────────────────────────────

    function extractId(text) {
        // strip CSV quotes then match (XXXXXXXX) prefix
        const clean = text.replace(/^"|"$/g, '').replace(/""/g, '"').trim();
        const m = clean.match(/^\((\d+)\)/);
        return m ? m[1] : null;
    }

    // ── Postback helper ──────────────────────────────────────────────────────

    function postBack(target) {
        const et = document.getElementById('__EVENTTARGET');
        const ea = document.getElementById('__EVENTARGUMENT');
        const f  = document.getElementById('form1');
        if (!et || !ea || !f) return;
        et.value = target;
        ea.value = '';
        f.submit();
    }

    // ── Queue persistence ────────────────────────────────────────────────────

    function loadQueue() {
        try { return JSON.parse(localStorage.getItem(QUEUE_KEY)); }
        catch { return null; }
    }
    function saveQueue(q)  { localStorage.setItem(QUEUE_KEY, JSON.stringify(q)); }
    function clearQueue()  { localStorage.removeItem(QUEUE_KEY); }

    // ── CSV helpers ──────────────────────────────────────────────────────────

    function parseCSV(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => {
                const map = {};
                e.target.result.trim().split(/\r?\n/).filter(l => l.trim()).forEach(line => {
                    const cols  = line.split(',').map(v => v.trim());
                    const id    = extractId(cols[0]);
                    const grade = cols[cols.length - 1];
                    if (id && grade !== '' && Number.isFinite(+grade)) map[id] = grade;
                });
                resolve(map);
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    }

    function downloadCSV(csvText, filename) {
        const url = URL.createObjectURL(new Blob([csvText], { type: 'text/csv' }));
        const a = document.createElement('a');
        a.href = url;
        a.download = filename.replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_');
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    function rowsToCsvLines(rows) {
        return rows.map(row => {
            const name  = row.querySelector(SEL.nameLbl)?.textContent?.trim() ?? '';
            const grade = row.querySelector(SEL.gradeIn)?.value ?? '';
            return `"${name.replace(/"/g, '""')}",${grade}`;
        });
    }

    // ── Stats ────────────────────────────────────────────────────────────────

    function computeStats(rows) {
        const nums = rows
            .map(r => r.querySelector(SEL.gradeIn)?.value?.trim())
            .filter(v => v && !isNaN(v))
            .map(Number);
        if (!nums.length) return { avg: 0, min: 0, max: 0, range: 0, count: 0 };
        const min = Math.min(...nums);
        const max = Math.max(...nums);
        return { avg: +(nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(2), min, max, range: max - min, count: nums.length };
    }

    function refreshStats(bar) {
        const rows = getRows();
        if (!rows.length) { bar.textContent = 'No grades loaded'; return; }
        const { avg, min, max, range, count } = computeStats(rows);
        bar.textContent = `Avg: ${avg}  |  Min: ${min}  |  Max: ${max}  |  Range: ${range}  |  Students: ${count}`;
    }

    // ── Fill grades from uploaded CSV ────────────────────────────────────────

    function fillGrades(csvMap) {
        getRows().forEach(row => {
            const nameEl  = row.querySelector(SEL.nameLbl);
            const gradeEl = row.querySelector(SEL.gradeIn);
            const maxEl   = row.querySelector(SEL.maxPt);
            if (!nameEl || !gradeEl) return;
            const id = extractId(nameEl.textContent);
            if (!id || !(id in csvMap)) return;
            const maxPt = maxEl ? Number(maxEl.value) : Infinity;
            const grade = Number(csvMap[id]);
            if (isNaN(grade) || grade > maxPt) return;
            gradeEl.value = grade;
        });
    }

    // ── Toolbar (injected in State 3 only) ──────────────────────────────────

    function injectToolbar(saveBtn) {
        if (document.getElementById('giu-toolbar')) return;

        const bar = document.createElement('div');
        bar.id = 'giu-stats-bar';
        bar.style.cssText = 'margin-top:8px;font-weight:bold;color:#495057;font-size:.95em;';
        bar.textContent = 'No grades loaded';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.style.display = 'none';

        const uploadBtn   = makeBtn('📄 Upload Grades CSV');
        const downloadBtn = makeBtn('📥 Download CSV');
        const batchBtn    = makeBtn('▶ Batch All Groups');

        let csvMap = null;

        uploadBtn.onclick = () => fileInput.click();

        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            if (!file) return;
            csvMap = await parseCSV(file);
            fillGrades(csvMap);
            refreshStats(bar);
        };

        downloadBtn.onclick = () => {
            const groupEl = document.querySelector(SEL.group);
            const evalEl  = document.querySelector(SEL.eval);
            const gLabel  = groupEl?.options[groupEl.selectedIndex]?.text?.trim() ?? 'group';
            const eLabel  = evalEl?.options[evalEl.selectedIndex]?.text?.split('||')[0]?.trim() ?? 'eval';
            const csv = ['Name,Grade', ...rowsToCsvLines(getRows())].join('\n');
            downloadCSV(csv, `${gLabel}-${eLabel}.csv`);
        };

        batchBtn.onclick = () => {
            const groupEl = document.querySelector(SEL.group);
            const evalEl  = document.querySelector(SEL.eval);

            const evalVal = evalEl?.value;
            if (!evalVal || evalVal === 'Please Choose an Evaluation') {
                alert('Select an Evaluation Method first.');
                return;
            }

            const groups = Array.from(groupEl.options)
                .filter(o => o.value && o.value !== '')
                .map(o => ({ value: o.value, label: o.text.trim() }));

            if (!groups.length) { alert('No groups found.'); return; }

            const evalOpt   = evalEl.options[evalEl.selectedIndex];
            const evalLabel = evalOpt?.text?.split('||')[0]?.trim() ?? '';

            const queue = {
                step:          'select-group',
                currentIndex:  0,
                savedEvalId:   evalVal,
                savedEvalLabel: evalLabel,
                groups,
                csvMap:        csvMap ?? {},
                collectedRows: [],
                results:       [],
            };
            saveQueue(queue);
            location.reload();
        };

        document.addEventListener('input', e => {
            if (e.target.matches(SEL.gradeIn)) refreshStats(bar);
        });

        const wrap = document.createElement('div');
        wrap.id = 'giu-toolbar';
        wrap.style.cssText = 'margin-bottom:12px;padding:10px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:4px;';
        wrap.append(uploadBtn, fileInput, downloadBtn, batchBtn, bar);
        saveBtn.insertAdjacentElement('beforebegin', wrap);

        refreshStats(bar);
    }

    // ── Batch runner ─────────────────────────────────────────────────────────

    function showProgress(queue) {
        document.getElementById('giu-batch-progress')?.remove();
        const total = queue.groups.length;
        const done  = queue.currentIndex;
        const pct   = total ? Math.round((done / total) * 100) : 0;
        const label = queue.groups[done]?.label ?? '—';
        const div = document.createElement('div');
        div.id = 'giu-batch-progress';
        div.className = 'alert alert-info';
        div.style.cssText = 'margin:10px 0;';
        div.innerHTML = `
            <strong>Batch running…</strong> Group ${done + 1} of ${total}: ${escHtml(label)}<br>
            <div style="background:#dee2e6;border-radius:4px;height:8px;margin-top:6px;">
                <div style="background:#0d6efd;width:${pct}%;height:8px;border-radius:4px;"></div>
            </div>`;
        (document.querySelector(SEL.season)?.closest('section') ?? document.querySelector('form'))
            ?.insertAdjacentElement('beforebegin', div);
    }

    function advanceOnError(queue) {
        queue.currentIndex++;
        if (queue.currentIndex >= queue.groups.length) {
            queue.step = 'done';
            saveQueue(queue);
            runBatch();
            return;
        }
        queue.step = 'select-group';
        saveQueue(queue);
        location.reload();
    }

    function stepSelectGroup(queue) {
        const target  = queue.groups[queue.currentIndex];
        if (!target) { clearQueue(); return; }

        const groupEl = document.querySelector(SEL.group);
        if (!groupEl) {
            clearQueue();
            const d = document.createElement('div');
            d.className = 'alert alert-danger';
            d.textContent = 'Batch aborted: group dropdown not found. Session may have expired.';
            document.querySelector('form')?.prepend(d);
            return;
        }

        const opt = Array.from(groupEl.options).find(o => o.value === target.value);
        if (!opt) {
            queue.results.push({ label: target.label, status: 'skipped', reason: 'group not in dropdown' });
            advanceOnError(queue);
            return;
        }

        queue.step = 'select-eval';
        saveQueue(queue);
        groupEl.value = target.value;
        postBack('ctl00$MainContent$grpLst');
    }

    function stepSelectEval(queue) {
        const target = queue.groups[queue.currentIndex];
        if (!target) { clearQueue(); return; }

        const evalEl = document.querySelector(SEL.eval);
        if (!evalEl) {
            queue.results.push({ label: target.label, status: 'failed', reason: 'eval dropdown not found' });
            advanceOnError(queue);
            return;
        }

        const opt = Array.from(evalEl.options).find(o => o.value === queue.savedEvalId);
        if (!opt) {
            queue.results.push({ label: target.label, status: 'failed', reason: 'eval not in dropdown after group select' });
            advanceOnError(queue);
            return;
        }

        queue.step = 'collect';
        saveQueue(queue);
        evalEl.value = queue.savedEvalId;
        postBack('ctl00$MainContent$evalMethIdLst');
    }

    function stepCollect(queue) {
        const target = queue.groups[queue.currentIndex];
        if (!target) { clearQueue(); return; }

        const rows = getRows();
        if (!rows.length) {
            queue.results.push({ label: target.label, status: 'failed', reason: 'no student rows loaded' });
            advanceOnError(queue);
            return;
        }

        const hasCsv = Object.keys(queue.csvMap).length > 0;

        if (hasCsv) {
            fillGrades(queue.csvMap);
        } else {
            // Pass 1: accumulate rows for combined CSV download
            rowsToCsvLines(rows).forEach(line => queue.collectedRows.push(line));
        }

        queue.results.push({ label: target.label, status: 'done', ...computeStats(rows) });

        queue.currentIndex++;
        queue.step = queue.currentIndex < queue.groups.length ? 'select-group' : 'done';
        saveQueue(queue);

        if (hasCsv) {
            document.querySelector(SEL.saveBtn)?.click();
        } else if (queue.step !== 'done') {
            location.reload();
        } else {
            runBatch();
        }
    }

    function showSummary(queue) {
        document.getElementById('giu-batch-progress')?.remove();

        // Pass 1 complete: download combined CSV
        if (!Object.keys(queue.csvMap).length && queue.collectedRows.length) {
            const csv = ['Name,Grade', ...queue.collectedRows].join('\n');
            downloadCSV(csv, `All-Groups-${queue.savedEvalLabel}.csv`);
        }

        const done    = queue.results.filter(r => r.status === 'done');
        const skipped = queue.results.filter(r => r.status !== 'done');

        let html = `<strong>Batch Complete</strong> — ${done.length} group(s) processed`;
        if (skipped.length) html += `, ${skipped.length} skipped/failed`;
        html += `
        <table class="table table-bordered table-sm" style="margin-top:10px;">
            <thead><tr><th>Group</th><th>Avg</th><th>Min</th><th>Max</th><th>Range</th><th>Students</th></tr></thead>
            <tbody>`;
        for (const r of done) {
            html += `<tr><td>${escHtml(r.label)}</td><td>${r.avg}</td><td>${r.min}</td><td>${r.max}</td><td>${r.range}</td><td>${r.count}</td></tr>`;
        }
        for (const r of skipped) {
            html += `<tr class="table-warning"><td>${escHtml(r.label)}</td><td colspan="5">${r.status}${r.reason ? ': ' + escHtml(r.reason) : ''}</td></tr>`;
        }
        html += '</tbody></table>';

        const wrap = document.createElement('div');
        wrap.className = 'alert alert-success';
        wrap.style.cssText = 'margin:10px 0;';
        wrap.innerHTML = html;
        (document.querySelector(SEL.season)?.closest('section') ?? document.querySelector('form'))
            ?.insertAdjacentElement('beforebegin', wrap);
    }

    function runBatch() {
        const queue = loadQueue();
        if (!queue) return false;

        if (queue.step === 'done') {
            showSummary(queue);
            clearQueue();
            return true;
        }

        showProgress(queue);

        switch (queue.step) {
            case 'select-group': stepSelectGroup(queue); break;
            case 'select-eval':  stepSelectEval(queue);  break;
            case 'collect':      stepCollect(queue);      break;
            default: clearQueue();
        }
        return true;
    }

    // ── Entry point ──────────────────────────────────────────────────────────

    function init() {
        if (runBatch()) return;

        // Only inject toolbar in State 3: grade rows AND save button both present
        const saveBtn = document.querySelector(SEL.saveBtn);
        if (saveBtn && document.querySelector(SEL.rows)) {
            injectToolbar(saveBtn);
        }
    }

    init();
})();
