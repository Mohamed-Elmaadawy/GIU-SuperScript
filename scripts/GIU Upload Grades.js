// ==UserScript==
// @name        GIU Upload Grades
// @description Upload/download grades per group + batch all groups via fetch chain.
// @include     https://portal.giu-uni.de/*
// @namespace   ramin0
// @version     2.2
// @author      Ahmed Sherif, Mo.Elmaadawy
// @icon         data:image/png;base64,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
// @run-at      document-idle
// ==/UserScript==

(function () {
    'use strict';

    const SEL = {
        season:  '#MainContent_dlSeason',
        course:  '#MainContent_smCrsLst',
        group:   '#MainContent_grpLst',
        eval:    '#MainContent_evalMethIdLst',
        crntLbl: '#MainContent_crntLbl',
        saveBtn: '#MainContent_saveBtn',
        rows:    '#data tbody tr',
    };

    // ── Style injection ──────────────────────────────────────────────────────────

    function injectStyles() {
        if (document.getElementById('gius-upload-styles')) return;
        const style = document.createElement('style');
        style.id = 'gius-upload-styles';
        style.textContent = `
            @keyframes giusUGSlideDown {
                from { opacity: 0; transform: translateY(-14px); }
                to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes giusUGFadeIn {
                from { opacity: 0; }
                to   { opacity: 1; }
            }
            @keyframes giusUGSpin {
                to { transform: rotate(360deg); }
            }

            .giug-card {
                background: #ffffff;
                border: 1px solid #eeeeee;
                border-radius: 6px;
                box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
                position: relative;
                overflow: hidden;
                margin-bottom: 16px;
                margin-top: 20px;
                animation: giusUGSlideDown 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
                font-family: 'Open Sans', Arial, Helvetica, sans-serif;
            }
            .giug-card::before {
                content: "";
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 3px;
                background: #ffc107;
                z-index: 1;
            }
            .giug-card-header {
                background: #272c33;
                color: #fff;
                padding: 10px 14px;
                border-bottom: 2px solid #ffc107;
            }
            .giug-hdr-blue, .giug-hdr-green {}
            .giug-card-title {
                margin: 0;
                font-size: 14px;
                font-weight: 700;
                color: #fff;
            }
            .giug-card-category {
                margin: 3px 0 0;
                font-size: 12px;
                color: rgba(255,255,255,0.7);
            }
            .giug-card-body {
                padding: 14px 16px;
            }
            .giug-btn-row {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 8px;
            }
            .giug-select {
                height: 32px;
                padding: 4px 8px;
                font-size: 13px;
                font-family: 'Open Sans', sans-serif;
                color: #111827;
                background: #fff;
                border: 1px solid #9ca3af;
                border-radius: 6px;
                cursor: pointer;
                max-width: 320px;
                outline: none;
                transition: border-color 0.2s ease;
            }
            .giug-select:focus {
                outline: 2px solid #60a5fa;
                outline-offset: 1px;
                border-color: #1B59C6;
            }
            .giug-btn {
                height: 32px;
                padding: 0 14px;
                border-radius: 6px;
                font-size: 13px;
                font-weight: 700;
                cursor: pointer;
                border: 1px solid transparent;
                transition: all 0.2s ease;
                display: inline-flex;
                align-items: center;
                gap: 5px;
                white-space: nowrap;
                font-family: 'Open Sans', Arial, sans-serif;
            }
            .giug-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                transform: none !important;
                box-shadow: none !important;
            }
            .giug-btn-primary {
                background: #1B59C6;
                border-color: #1648a8;
                color: #fff;
            }
            .giug-btn-primary:not(:disabled):hover {
                background: #1648a8;
                transform: translateY(-1px);
                box-shadow: 0 3px 10px rgba(27,89,198,0.35);
            }
            .giug-btn-success {
                background: #fff;
                border-color: #d1d5db;
                color: #374151;
            }
            .giug-btn-success:not(:disabled):hover {
                background: #f9fafb;
                border-color: #9ca3af;
            }
            .giug-btn-outline {
                background: #fff;
                border-color: #d1d5db;
                color: #374151;
            }
            .giug-btn-outline:not(:disabled):hover {
                background: #f9fafb;
                border-color: #9ca3af;
            }
            .giug-alert {
                padding: 8px 10px;
                border-radius: 6px;
                font-size: 13px;
                font-family: 'Open Sans', sans-serif;
                margin: 8px 0 0;
                animation: giusUGFadeIn 0.25s ease;
                display: flex;
                align-items: flex-start;
                gap: 8px;
                border: 1px solid #d1d5db;
            }
            .giug-alert-error {
                background: #fee2e2;
                border-color: #fca5a5;
                color: #991b1b;
            }
            .giug-alert-info {
                background: #e5e7eb;
                border-color: #d1d5db;
                color: #374151;
            }
            .giug-spinner {
                display: inline-block;
                width: 12px;
                height: 12px;
                border: 2px solid rgba(55,65,81,0.25);
                border-top-color: #1B59C6;
                border-radius: 50%;
                animation: giusUGSpin 0.7s linear infinite;
                flex-shrink: 0;
                margin-top: 2px;
            }
            .giug-stats-section {
                margin-top: 14px;
                border-top: 1px solid #d1d5db;
                padding-top: 12px;
                animation: giusUGFadeIn 0.3s ease;
            }
            .giug-stats-label {
                font-size: 11px;
                font-weight: 700;
                color: #6b7280;
                text-transform: uppercase;
                letter-spacing: 0.6px;
                margin-bottom: 8px;
                font-family: 'Open Sans', sans-serif;
            }
            .giug-stats-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 6px;
                margin-bottom: 6px;
            }
            .giug-stat {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 8px 10px;
                background: #e5e7eb;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                font-size: 13px;
            }
            .giug-stat-val {
                font-weight: 700;
                color: #111827;
                font-family: 'Open Sans', sans-serif;
            }
            .giug-stat-key {
                font-weight: 600;
                color: #374151;
                font-family: 'Open Sans', sans-serif;
            }
            .giug-stats-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 13px;
                font-family: 'Open Sans', sans-serif;
            }
            .giug-stats-table th {
                text-align: left;
                padding: 8px 10px;
                background: #1f2937;
                color: #ffffff;
                font-weight: 700;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            .giug-stats-table td {
                padding: 7px 10px;
                border-bottom: 1px solid #d1d5db;
                background: #f9fafb;
                color: #374151;
            }
            .giug-stats-table tr:last-child td { border-bottom: none; }
            .giug-stat-num {
                font-weight: 700;
                color: #111827;
            }
        `;
        document.head.appendChild(style);
    }

    // ── DOM helpers ──────────────────────────────────────────────────────────

    function makeBtn(text, style = 'primary', disabled = false) {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = text;
        b.className = `giug-btn giug-btn-${style}`;
        b.disabled = disabled;
        return b;
    }

    function showError(container, msg) {
        const d = document.createElement('div');
        d.className = 'giug-alert giug-alert-error';
        d.innerHTML = `<span>⚠</span><span>${msg}</span>`;
        container.appendChild(d);
    }

    function showInfo(container, msg, spinning = true) {
        let el = container.querySelector('.gius-progress-info');
        if (!el) {
            el = document.createElement('div');
            el.className = 'giug-alert giug-alert-info gius-progress-info';
            const spinner = document.createElement('span');
            spinner.className = 'giug-spinner';
            el.appendChild(spinner);
            const text = document.createElement('span');
            el.appendChild(text);
            container.appendChild(el);
        }
        const spinnerEl = el.querySelector('.giug-spinner');
        if (spinnerEl) spinnerEl.style.display = spinning ? '' : 'none';
        el.querySelector('span:last-child').textContent = msg;
    }

    function clearProgress(container) {
        container.querySelector('.gius-progress-info')?.remove();
    }

    // ── Stats helpers ────────────────────────────────────────────────────────

    function computeStats(values) {
        const nums = values.filter(v => v !== '' && Number.isFinite(+v)).map(Number);
        if (!nums.length) return null;
        const min = Math.min(...nums);
        const max = Math.max(...nums);
        const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
        return {
            min:   min.toFixed(1),
            max:   max.toFixed(1),
            avg:   avg.toFixed(1),
            range: (max - min).toFixed(1),
            count: nums.length
        };
    }

    function renderGroupStats(card, stats) {
        card.querySelector('.giug-stats-section')?.remove();
        if (!stats || stats.count < 2) return;
        const section = document.createElement('div');
        section.className = 'giug-stats-section';
        section.innerHTML = `
            <div class="giug-stats-label">Grade Statistics — ${stats.count} students</div>
            <div class="giug-stats-grid">
                <div class="giug-stat"><span class="giug-stat-key">Min</span><span class="giug-stat-val">${stats.min}</span></div>
                <div class="giug-stat"><span class="giug-stat-key">Max</span><span class="giug-stat-val">${stats.max}</span></div>
                <div class="giug-stat"><span class="giug-stat-key">Avg</span><span class="giug-stat-val">${stats.avg}</span></div>
                <div class="giug-stat"><span class="giug-stat-key">Range</span><span class="giug-stat-val">${stats.range}</span></div>
            </div>
        `;
        card.querySelector('.giug-card-body').appendChild(section);
    }

    function renderBatchStats(card, groupStats) {
        card.querySelector('.giug-stats-section')?.remove();
        const withStats = groupStats.filter(g => g.stats);
        if (!withStats.length) return;
        const rows = withStats.map(g => `
            <tr>
                <td>${g.label}</td>
                <td class="giug-stat-num">${g.stats.min}</td>
                <td class="giug-stat-num">${g.stats.max}</td>
                <td class="giug-stat-num">${g.stats.avg}</td>
                <td class="giug-stat-num">${g.stats.range}</td>
                <td style="color:#9e9e9e;font-size:11px;">${g.stats.count}</td>
            </tr>
        `).join('');
        const section = document.createElement('div');
        section.className = 'giug-stats-section';
        section.innerHTML = `
            <div class="giug-stats-label">Per-Group Statistics</div>
            <table class="giug-stats-table">
                <thead><tr><th>Group</th><th>Min</th><th>Max</th><th>Avg</th><th>Range</th><th>n</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        `;
        card.querySelector('.giug-card-body').appendChild(section);
    }

    // ── Row helpers ──────────────────────────────────────────────────────────

    function getRows(doc = document) {
        return Array.from(doc.querySelectorAll(SEL.rows)).slice(1);
    }

    function extractId(nameText) {
        const m = (nameText ?? '').trim().match(/^\((\d+)\)/);
        return m ? m[1] : null;
    }

    function downloadCSV(lines, filename) {
        const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url;
        a.download = filename.replace(/[/\\?%*:|"<>]/g, '_').replace(/\s+/g, '_');
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    // ── Fetch helpers ────────────────────────────────────────────────────────

    function extractFormFields(doc) {
        const fields = {};
        doc.querySelectorAll('input[type="hidden"], select').forEach(el => {
            if (el.name) fields[el.name] = el.value;
        });
        return fields;
    }

    async function doPostBack(baseFields, eventTarget, overrides = {}) {
        const data = new FormData();
        for (const [k, v] of Object.entries(baseFields)) data.set(k, v);
        data.set('__EVENTTARGET',   eventTarget);
        data.set('__EVENTARGUMENT', '');
        for (const [k, v] of Object.entries(overrides)) data.set(k, v);
        console.log('[GIU] POST __EVENTTARGET=', eventTarget, 'keys=', [...data.keys()].join(','));
        const resp = await fetch(location.href, { method: 'POST', body: data });
        if (!resp.ok) {
            const body = await resp.text();
            const doc  = new DOMParser().parseFromString(body, 'text/html');
            const msg  = doc.querySelector('#ctl00_lblError, .error, h2, h1, [id*="Error"]')?.textContent?.trim()
                      ?? body.substring(0, 600);
            console.error('[GIU] HTTP', resp.status, 'EVENTTARGET=', eventTarget, '\n', msg);
            throw new Error(`HTTP ${resp.status}: ${msg.substring(0, 120)}`);
        }
        return new DOMParser().parseFromString(await resp.text(), 'text/html');
    }

    function isValidId(val) {
        return /^\d+$/.test(String(val)) && +val > 0;
    }

    // ── State A: read groups/viewstate from current DOM ───────────────────────

    function readPageState() {
        const groupEl = document.querySelector(SEL.group);
        return {
            groups:  Array.from(groupEl.options)
                         .filter(o => o.value && o.value !== '')
                         .map(o => ({ value: o.value, label: o.text.trim() })),
            hidden:  extractFormFields(document),
            season:  document.querySelector(SEL.season)?.value ?? '',
            course:  document.querySelector(SEL.course)?.value ?? '',
        };
    }

    // ── CSV helpers ──────────────────────────────────────────────────────────

    function rowsToCsvLines(rows, groupLabel) {
        return rows.map(row => {
            const name  = row.cells[0]?.querySelector('span')?.textContent?.trim() ?? '';
            const grade = row.cells[2]?.querySelector('input')?.value ?? '';
            return `"${name.replace(/"/g, '""')}",${groupLabel},${grade}`;
        });
    }

    function parseCSV(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => {
                const map = {};
                e.target.result.trim().split(/\r?\n/).forEach((line, i) => {
                    if (i === 0 || !line.trim()) return;
                    const cols  = line.split(',').map(v => v.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));
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

    // ── Batch download (State A) ─────────────────────────────────────────────

    async function batchDownload(evalId, evalLabel, toolbar) {
        const { groups, hidden, season, course } = readPageState();

        if (!groups.length) { showError(toolbar, 'No groups found.'); return; }

        const allLines  = ['Name,Group,Grade'];
        const groupStats = [];
        let errors = 0;

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            showInfo(toolbar, `Downloading group ${i + 1} of ${groups.length}: ${group.label}…`);

            try {
                const doc1 = await doPostBack(hidden, 'ctl00$MainContent$grpLst', {
                    'ctl00$MainContent$dlSeason': season,
                    'ctl00$MainContent$smCrsLst': course,
                    'ctl00$MainContent$grpLst':   group.value,
                });

                const doc1Hidden = extractFormFields(doc1);
                const doc2 = await doPostBack(doc1Hidden, 'ctl00$MainContent$evalMethIdLst', {
                    'ctl00$MainContent$dlSeason':       season,
                    'ctl00$MainContent$smCrsLst':       course,
                    'ctl00$MainContent$grpLst':         group.value,
                    'ctl00$MainContent$evalMethIdLst':  evalId,
                });

                const rows = getRows(doc2);
                if (!rows.length) throw new Error('no student rows found');
                rowsToCsvLines(rows, group.label).forEach(l => allLines.push(l));

                const grades = rows.map(row => row.cells[2]?.querySelector('input')?.value ?? '');
                groupStats.push({ label: group.label, stats: computeStats(grades) });

            } catch (err) {
                errors++;
                groupStats.push({ label: group.label, stats: null });
                showError(toolbar, `Group "${group.label}": ${err.message}`);
            }
        }

        if (allLines.length > 1) {
            downloadCSV(allLines, `All-Groups-${evalLabel}.csv`);
            showInfo(toolbar, `Done — ${groups.length - errors} group(s) collected${errors ? `, ${errors} failed` : ''}.`, false);
            renderBatchStats(toolbar, groupStats);
        } else {
            clearProgress(toolbar);
            showError(toolbar, 'No rows collected. All groups failed — check errors above.');
        }
    }

    // ── Batch upload (State A) ───────────────────────────────────────────────

    async function batchUpload(evalId, csvMap, toolbar) {
        const { groups, hidden, season, course } = readPageState();

        if (!groups.length) { showError(toolbar, 'No groups found.'); return; }

        const groupStats = [];
        let saved  = 0;
        let errors = 0;

        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            showInfo(toolbar, `Uploading group ${i + 1} of ${groups.length}: ${group.label}…`);

            try {
                const doc1 = await doPostBack(hidden, 'ctl00$MainContent$grpLst', {
                    'ctl00$MainContent$dlSeason': season,
                    'ctl00$MainContent$smCrsLst': course,
                    'ctl00$MainContent$grpLst':   group.value,
                });

                const doc1Hidden = extractFormFields(doc1);
                const doc2 = await doPostBack(doc1Hidden, 'ctl00$MainContent$evalMethIdLst', {
                    'ctl00$MainContent$dlSeason':       season,
                    'ctl00$MainContent$smCrsLst':       course,
                    'ctl00$MainContent$grpLst':         group.value,
                    'ctl00$MainContent$evalMethIdLst':  evalId,
                });

                const rows = getRows(doc2);
                if (!rows.length) throw new Error('no student rows found');

                const saveBtnEl = doc2.querySelector(SEL.saveBtn);
                if (!saveBtnEl) throw new Error('save button not found in fetched page');

                const doc2Hidden     = extractFormFields(doc2);
                const gradeOverrides = {};
                rows.forEach(row => {
                    const nameEl  = row.cells[0]?.querySelector('span');
                    const gradeEl = row.cells[2]?.querySelector('input');
                    if (!gradeEl?.name) return;
                    const id = extractId(nameEl?.textContent ?? '');
                    gradeOverrides[gradeEl.name] = (id && csvMap[id] !== undefined)
                        ? csvMap[id]
                        : gradeEl.value;
                });

                await doPostBack(doc2Hidden, saveBtnEl.name, gradeOverrides);

                groupStats.push({ label: group.label, stats: computeStats(Object.values(gradeOverrides)) });
                saved++;
            } catch (err) {
                errors++;
                groupStats.push({ label: group.label, stats: null });
                showError(toolbar, `Group "${group.label}": ${err.message}`);
            }
        }

        showInfo(toolbar, `Done — ${saved} group(s) saved${errors ? `, ${errors} failed` : ''}.`, false);
        renderBatchStats(toolbar, groupStats);
    }

    // ── State A toolbar: intercept eval dropdown + batch buttons ─────────────

    function injectBatchToolbar() {
        injectStyles();
        if (document.getElementById('giu-toolbar')) return;

        const card = document.createElement('div');
        card.id = 'giu-toolbar';
        card.className = 'giug-card';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.style.display = 'none';

        const pageEvalEl  = document.querySelector(SEL.eval);
        const evalOptions = pageEvalEl
            ? Array.from(pageEvalEl.options).filter(o => isValidId(o.value))
            : [];

        const evalPicker = document.createElement('select');
        evalPicker.className = 'giug-select';

        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = evalOptions.length
            ? '— Select evaluation method —'
            : '— No evaluations found (select a group first) —';
        evalPicker.appendChild(placeholder);

        evalOptions.forEach(o => {
            const opt = document.createElement('option');
            opt.value = o.value;
            opt.textContent = o.text.split('||')[0].trim();
            evalPicker.appendChild(opt);
        });

        const loadCsvBtn = makeBtn('📄 Load CSV', 'outline');
        const batchDlBtn = makeBtn('⬇ Batch Download', 'primary', true);
        const batchUpBtn = makeBtn('⬆ Batch Upload', 'success', true);

        let csvMap = null;

        const getEvalId    = () => evalPicker.value;
        const getEvalLabel = () => evalPicker.options[evalPicker.selectedIndex]?.text ?? evalPicker.value;

        evalPicker.onchange = () => {
            const valid = isValidId(evalPicker.value);
            batchDlBtn.disabled = !valid;
            batchUpBtn.disabled = !(valid && csvMap);
        };

        loadCsvBtn.onclick = () => fileInput.click();

        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            if (!file) return;
            csvMap = await parseCSV(file);
            showInfo(card, `CSV loaded — ${Object.keys(csvMap).length} student grade(s) ready.`);
            batchUpBtn.disabled = !isValidId(evalPicker.value);
        };

        batchDlBtn.onclick = async () => {
            if (!isValidId(getEvalId())) { showError(card, 'Pick an evaluation method first.'); return; }
            batchDlBtn.disabled = true;
            await batchDownload(getEvalId(), getEvalLabel(), card);
            batchDlBtn.disabled = false;
        };

        batchUpBtn.onclick = async () => {
            if (!csvMap || !isValidId(getEvalId())) return;
            batchUpBtn.disabled = true;
            await batchUpload(getEvalId(), csvMap, card);
            batchUpBtn.disabled = false;
        };

        card.innerHTML = `
            <div class="giug-card-header giug-hdr-blue">
                <h4 class="giug-card-title">📊 Batch Grades</h4>
                <p class="giug-card-category">Download or upload grades across all groups at once</p>
            </div>
            <div class="giug-card-body">
                <div class="giug-btn-row" id="giug-btn-row"></div>
            </div>
        `;

        const btnRow = card.querySelector('#giug-btn-row');
        btnRow.append(evalPicker, loadCsvBtn, fileInput, batchDlBtn, batchUpBtn);

        const anchor = pageEvalEl?.closest('tr') ?? pageEvalEl?.closest('div') ?? document.querySelector(SEL.group);
        anchor?.insertAdjacentElement('afterend', card);
    }

    // ── State B toolbar: per-group upload/download ────────────────────────────

    function injectPerGroupToolbar(table) {
        injectStyles();
        if (document.getElementById('giu-toolbar')) return;

        const card = document.createElement('div');
        card.id = 'giu-toolbar';
        card.className = 'giug-card';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.style.display = 'none';

        const uploadBtn   = makeBtn('📄 Upload CSV', 'outline');
        const downloadBtn = makeBtn('⬇ Download CSV', 'primary');

        uploadBtn.onclick = () => fileInput.click();

        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            if (!file) return;
            const csvMap = await parseCSV(file);
            getRows().forEach(row => {
                const id      = extractId(row.cells[0]?.querySelector('span')?.textContent ?? '');
                const gradeEl = row.cells[2]?.querySelector('input');
                if (id && gradeEl && id in csvMap) gradeEl.value = csvMap[id];
            });
            const grades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
            renderGroupStats(card, computeStats(grades));
        };

        downloadBtn.onclick = () => {
            const crnt   = document.querySelector(SEL.crntLbl)?.textContent ?? '';
            const parts  = crnt.split(' - ');
            const gLabel = parts[0]?.trim() ?? 'group';
            const eLabel = parts.pop()?.split('||')[0]?.trim() ?? 'eval';
            downloadCSV(
                ['Name,Group,Grade', ...rowsToCsvLines(getRows(), gLabel)],
                `${gLabel}-${eLabel}.csv`
            );
            const grades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
            renderGroupStats(card, computeStats(grades));
        };

        card.innerHTML = `
            <div class="giug-card-header giug-hdr-green">
                <h4 class="giug-card-title">📋 Group Grades</h4>
                <p class="giug-card-category">Upload or download grades for this group</p>
            </div>
            <div class="giug-card-body">
                <div class="giug-btn-row" id="giug-per-btn-row"></div>
            </div>
        `;

        const btnRow = card.querySelector('#giug-per-btn-row');
        btnRow.append(uploadBtn, fileInput, downloadBtn);

        const crntEl = document.querySelector(SEL.crntLbl);
        (crntEl ?? table).insertAdjacentElement('afterend', card);

        const initialGrades = getRows().map(row => row.cells[2]?.querySelector('input')?.value ?? '');
        renderGroupStats(card, computeStats(initialGrades));
    }

    // ── Entry point ──────────────────────────────────────────────────────────

    function init() {
        if (location.pathname !== '/GIUb/EXT/ManageUploadedGrades_m.aspx') return;

        const groupEl = document.querySelector(SEL.group);
        if (groupEl) {
            injectBatchToolbar();
            return;
        }

        const table = document.getElementById('data');
        if (table?.tagName === 'TABLE') {
            injectPerGroupToolbar(table);
        }
    }

    init();

})();
