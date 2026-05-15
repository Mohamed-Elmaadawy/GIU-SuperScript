// ==UserScript==
// @name        GIU upload grades script
// @description Upload/download grades per group + batch all groups via fetch chain.
// @include     https://portal.giu-uni.de/*
// @namespace   ramin0
// @version     2.0
// @icon        https://i.ibb.co/Q7mgLHsW/GIU-images.png
// @run-at      document-idle
// ==/UserScript==

(function () {
    'use strict';

    const SEL = {
        group:   '#MainContent_grpLst',
        eval:    '#MainContent_evalMethIdLst',
        evalId:  'input[id^="MainContent_rptrNtt_evalMethId_"]',
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

    function extractHiddenFields(doc) {
        const fields = {};
        doc.querySelectorAll('input[type="hidden"]').forEach(inp => {
            if (inp.name) fields[inp.name] = inp.value;
        });
        return fields;
    }

    async function doPostBack(baseFields, eventTarget, overrides = {}) {
        const data = new FormData();
        for (const [k, v] of Object.entries(baseFields)) data.set(k, v);
        data.set('__EVENTTARGET',   eventTarget);
        data.set('__EVENTARGUMENT', '');
        for (const [k, v] of Object.entries(overrides)) data.set(k, v);
        const resp = await fetch(location.href, { method: 'POST', body: data });
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        return new DOMParser().parseFromString(await resp.text(), 'text/html');
    }

    // ── Group/Eval helpers ───────────────────────────────────────────────────

    function getGroupOptions() {
        const el = document.querySelector(SEL.group);
        if (!el) return null;
        return Array.from(el.options)
            .filter(o => o.value && o.value !== '')
            .map(o => ({ value: o.value, label: o.text.trim() }));
    }

    function resolveEvalId() {
        const evalEl = document.querySelector(SEL.eval);
        if (evalEl?.value) return evalEl.value;
        const hidden = document.querySelector(SEL.evalId);
        return hidden?.value ?? null;
    }

    function getEvalLabel() {
        const crnt = document.querySelector(SEL.crntLbl)?.textContent ?? '';
        return crnt.split(' - ').pop()?.split('||')[0]?.trim() ?? 'eval';
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

})();
