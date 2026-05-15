// ==UserScript==
// @name        GIU upload grades script
// @description Upload/download grades per group + batch all groups via fetch chain.
// @include     https://portal.giu-uni.de/*
// @namespace   ramin0
// @version     2.2
// @author      Ahmed Sherif, Mo.Elmaadawy
// @icon        https://i.ibb.co/Q7mgLHsW/GIU-images.png
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

    const BTN_BASE = 'padding:8px 14px;background:#0d6efd;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-right:8px;';
    const BTN_OFF  = BTN_BASE + 'opacity:0.5;cursor:not-allowed;';

    // ── DOM helpers ──────────────────────────────────────────────────────────

    function makeBtn(text, disabled = false) {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = text;
        b.style.cssText = disabled ? BTN_OFF : BTN_BASE;
        b.disabled = disabled;
        return b;
    }

    function showError(container, msg) {
        const d = document.createElement('div');
        d.style.cssText = 'margin:6px 0;padding:8px 12px;background:#f8d7da;border:1px solid #f5c2c7;border-radius:4px;color:#842029;';
        d.textContent = '⚠ ' + msg;
        container.insertAdjacentElement('afterbegin', d);
    }

    function showInfo(container, msg) {
        let el = container.querySelector('.giu-progress');
        if (!el) {
            el = document.createElement('div');
            el.className = 'giu-progress';
            el.style.cssText = 'margin:6px 0;padding:8px 12px;background:#cff4fc;border:1px solid #b6effb;border-radius:4px;color:#055160;';
            container.appendChild(el);
        }
        el.textContent = msg;
    }

    function clearProgress(container) {
        container.querySelector('.giu-progress')?.remove();
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

        const allLines = ['Name,Group,Grade'];
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

            } catch (err) {
                errors++;
                showError(toolbar, `Group "${group.label}": ${err.message}`);
            }
        }

        clearProgress(toolbar);

        if (allLines.length > 1) {
            downloadCSV(allLines, `All-Groups-${evalLabel}.csv`);
            showInfo(toolbar, `Done — ${groups.length - errors} group(s) collected${errors ? `, ${errors} failed` : ''}.`);
        } else {
            showError(toolbar, 'No rows collected. All groups failed — check errors above.');
        }
    }

    // ── Batch upload (State A) ───────────────────────────────────────────────

    async function batchUpload(evalId, csvMap, toolbar) {
        const { groups, hidden, season, course } = readPageState();

        if (!groups.length) { showError(toolbar, 'No groups found.'); return; }

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

                saved++;
            } catch (err) {
                errors++;
                showError(toolbar, `Group "${group.label}": ${err.message}`);
            }
        }

        clearProgress(toolbar);
        showInfo(toolbar, `Done — ${saved} group(s) saved${errors ? `, ${errors} failed` : ''}.`);
    }

    // ── State A toolbar: intercept eval dropdown + batch buttons ─────────────

    function injectBatchToolbar() {
        if (document.getElementById('giu-toolbar')) return;

        const toolbar = document.createElement('div');
        toolbar.id = 'giu-toolbar';
        toolbar.style.cssText = 'margin-top:15px;padding:10px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:4px;';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.style.display = 'none';

        // Build custom eval picker from the page's eval dropdown options (no postback)
        const pageEvalEl   = document.querySelector(SEL.eval);
        const evalOptions  = pageEvalEl
            ? Array.from(pageEvalEl.options).filter(o => isValidId(o.value))
            : [];

        const evalPicker = document.createElement('select');
        evalPicker.style.cssText = 'padding:6px 10px;border:1px solid #ced4da;border-radius:4px;background:#fff;cursor:pointer;max-width:320px;';

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

        const loadCsvBtn = makeBtn('📄 Load CSV for Upload');
        const batchDlBtn = makeBtn('▶ Batch Download', true);
        const batchUpBtn = makeBtn('▶ Batch Upload', true);

        let csvMap = null;

        const getEvalId    = () => evalPicker.value;
        const getEvalLabel = () => evalPicker.options[evalPicker.selectedIndex]?.text ?? evalPicker.value;

        evalPicker.onchange = () => {
            const valid = isValidId(evalPicker.value);
            batchDlBtn.disabled = !valid;
            batchDlBtn.style.cssText = valid ? BTN_BASE : BTN_OFF;
            batchUpBtn.disabled = !(valid && csvMap);
            batchUpBtn.style.cssText = (valid && csvMap) ? BTN_BASE : BTN_OFF;
        };

        loadCsvBtn.onclick = () => fileInput.click();

        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            if (!file) return;
            csvMap = await parseCSV(file);
            showInfo(toolbar, `CSV loaded — ${Object.keys(csvMap).length} student grade(s) ready.`);
            batchUpBtn.disabled = !isValidId(evalPicker.value);
            batchUpBtn.style.cssText = (!isValidId(evalPicker.value)) ? BTN_OFF : BTN_BASE;
        };

        batchDlBtn.onclick = async () => {
            if (!isValidId(getEvalId())) { showError(toolbar, 'Pick an evaluation method first.'); return; }
            batchDlBtn.disabled = true;
            batchDlBtn.style.cssText = BTN_OFF;
            await batchDownload(getEvalId(), getEvalLabel(), toolbar);
            batchDlBtn.disabled = false;
            batchDlBtn.style.cssText = BTN_BASE;
        };

        batchUpBtn.onclick = async () => {
            if (!csvMap || !isValidId(getEvalId())) return;
            batchUpBtn.disabled = true;
            batchUpBtn.style.cssText = BTN_OFF;
            await batchUpload(getEvalId(), csvMap, toolbar);
            batchUpBtn.disabled = false;
            batchUpBtn.style.cssText = BTN_BASE;
        };

        const btnRow = document.createElement('div');
        btnRow.style.cssText = 'display:flex;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:6px;';
        btnRow.append(evalPicker, loadCsvBtn, fileInput, batchDlBtn, batchUpBtn);
        toolbar.appendChild(btnRow);

        // Insert after eval dropdown's containing row, fallback to group dropdown
        const anchor = pageEvalEl?.closest('tr') ?? pageEvalEl?.closest('div') ?? document.querySelector(SEL.group);
        anchor?.insertAdjacentElement('afterend', toolbar);
    }

    // ── State B toolbar: per-group upload/download ────────────────────────────

    function injectPerGroupToolbar(table) {
        if (document.getElementById('giu-toolbar')) return;

        const toolbar = document.createElement('div');
        toolbar.id = 'giu-toolbar';
        toolbar.style.cssText = 'margin-top:15px;padding:10px;background:#f8f9fa;border:1px solid #dee2e6;border-radius:4px;';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.style.display = 'none';

        const uploadBtn   = makeBtn('📄 Upload CSV');
        const downloadBtn = makeBtn('📥 Download CSV');

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
        };

        const btnRow = document.createElement('div');
        btnRow.style.cssText = 'display:flex;align-items:center;flex-wrap:wrap;gap:8px;';
        btnRow.append(uploadBtn, fileInput, downloadBtn);
        toolbar.appendChild(btnRow);

        table.insertAdjacentElement('afterend', toolbar);
    }

    // ── Entry point ──────────────────────────────────────────────────────────

    function init() {
        if (location.pathname !== '/GIUb/EXT/ManageUploadedGrades_m.aspx') return;

        // State A: dropdowns visible — intercept eval, batch all groups
        const groupEl = document.querySelector(SEL.group);
        if (groupEl) {
            injectBatchToolbar();
            return;
        }

        // State B: grade table visible — per-group upload/download
        const table = document.getElementById('data');
        if (table?.tagName === 'TABLE') {
            injectPerGroupToolbar(table);
        }
    }

    init();

})();
