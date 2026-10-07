// ==UserScript==
// @name        GIU Berlin Session Form Filler
// @description Fills the GIU Berlin session attendance Microsoft Form (name, course, session type, group) from your saved presets
// @match       https://forms.cloud.microsoft/Pages/ResponsePage.aspx*
// @match       https://forms.office.com/Pages/ResponsePage.aspx*
// @namespace   Cyn0
// @version     1.0.0
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Berlin%20Session%20Form%20Filler.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Berlin%20Session%20Form%20Filler.js
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAADAFBMVEX///////0DAwP7+/z+/v0BAQH8/fwAAAD+//7//v///f/9//////7///v+///+/v/8/////vzcjxvejhr///kFBQXdjR7ckBX4////+//7+vvajxv9//v//P/Zjh/ZjBjcjhn5+fn8//7//f4UExP+//1wcHD6//81NTX//P76//7YkBr9//4iIiIxMTHcjBe8vLwZGRknJyeioqL+/P8eHh04ODhrbGtTU1NkZGNgX1/39/e2traurq4PDw/bjxf//+0qKSnYkRR3dneys7LQmEX6//ucnJx8e3ympqY7Ojr579IKCgr8/P7z8/P19fW5ubnp6Oj//vM9PT3/++nCwsKfn5/fjxTGx8f//PxZWVlBQD/w8PBDQ0SXmJhHR0guLS3t7e2/v78FAQHm5eXPz8/T09L///bk5OTj4eHb3NyKior/+/jsKTPExMTV1db++f3TnEnWnUn89NKpqarUjB736MXgjB3hjRn6/fx/gYDwKS38/vjr6+uHh4ff397Nzc1cXFuDg4OQkJDUkR3LysrTiiX+/PzUlDvciRvlKi/VjBTY2Nj0/v7PjSJKSkrAwb71/vuTk5P+2Nz89db578rfjSH6/f/++N7/++LZiRDirF796eXmxo3x8vP02ab84+T++fHhbXROT07OjCvet3lXVlbfJC7TjTH55b7NJjLzxc6MjI3+xsjVZGn8z8/st7T/9evxw8L/9PX/4d/WT1fJjiHYrGLtz5vr06n5/PXowH/3/fjUbW/htGz/+fn31dTspqbYqVXeXWPfhhPhmZvdoVDYWF7+6u/JbHLiv77NWl/bMEHTkiv1+frQih7eq3P77djzz4/QNULdplDgpFr1uLv/0NjXdXnar6nYoKP3p6rCWVzRlUbhihjhiSXOkjPXjSfQoE/z48H89vr44bL34s7UmUDUoGHa29jvlJbIRUKvWFncQFLJkT3HvsPdyZzw+ff2zce5cnvitrPNgIXLiIfyeHjNl0fIhCTa2dzTqZ7Uinq0RkvGfnriNDiK2Tf2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAPLElEQVR42u2Zd1xT5/7Hv4HDOSYhCYEEQkgC5GRDgLD3vqwSdoBAGCIiq4KKIpSNGFERhVbUKm7r3tat1bbW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
// @author      Mo.Elmaadawy
// @run-at      document-idle
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

(function () {
    'use strict';

    // Only this form — every other Microsoft Form is left alone.
    const FORM_ID = 'q_XvHIA6NEeGVNUcXoIh7xGLEfW607hLu1E4n2oAQmZUNkFSQTJQUTEyQU8yVVUzVTVZUlBRVzJFUS4u';
    if (new URLSearchParams(location.search).get('id') !== FORM_ID) return;

    const STORE_KEY = 'giuSessionFormV1';
    const SESSION_TYPES = ['Tutorial', 'Practical/Lab', 'Lecture'];
    const FORM_WAIT_MS = 30000;
    const OPTION_WAIT_MS = 4000;

    // ── Questions — matched by title, not position, so a reordered form still works ──
    const Q = {
        name: /^name\b/i,
        course: /course/i,
        type: /session type/i,
        group: /group number/i,
    };
    // Left for the TA — highlighted after a fill so they're easy to spot.
    const MANUAL = [
        { label: 'Session date', re: /session date/i },
        { label: 'Session Ref. ID', re: /ref\.?\s*id/i },
        { label: 'Attendance sheet', re: /attendance sheet|upload/i },
    ];
    const SEL = {
        question: '[data-automation-id="questionItem"]',
        title: '[data-automation-id="questionTitle"]',
        textInput: 'input[data-automation-id="textInput"], input[type="text"]',
        dropdown: '[role="button"][aria-haspopup="listbox"]',
        option: '[role="listbox"] [role="option"], [role="option"]',
    };

    // ── Storage ──
    function load() {
        const d = GM_getValue(STORE_KEY, null) || {};
        return {
            name: d.name || '',
            presets: Array.isArray(d.presets) ? d.presets : [],
            courses: Array.isArray(d.courses) ? d.courses : [],
            collapsed: !!d.collapsed,
            last: d.last || '',
        };
    }
    const state = load();
    function save() { GM_setValue(STORE_KEY, state); }

    // ── Helpers ──
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const norm = (s) => String(s || '').replace(/\s+/g, ' ').trim().toLowerCase();

    async function waitFor(fn, timeout) {
        const end = Date.now() + timeout;
        while (Date.now() < end) {
            const v = fn();
            if (v) return v;
            await sleep(150);
        }
        return null;
    }

    function el(tag, props, ...kids) {
        const n = document.createElement(tag);
        Object.assign(n, props || {});
        for (const k of kids) if (k != null) n.append(k);
        return n;
    }

    function findQuestion(re) {
        for (const q of document.querySelectorAll(SEL.question)) {
            const t = q.querySelector(SEL.title);
            // Title text is "1.\nName (Full name)" — drop the ordinal line.
            const title = t ? t.innerText.replace(/^\s*\d+\.\s*/, '') : '';
            if (re.test(title.trim())) return q;
        }
        return null;
    }

    function bestMatch(items, wanted, textOf) {
        const w = norm(wanted);
        if (!w) return null;
        return items.find((i) => norm(textOf(i)) === w)
            || items.find((i) => norm(textOf(i)).startsWith(w))
            || items.find((i) => norm(textOf(i)).includes(w))
            || null;
    }

    // React owns these inputs: set through the native setter, then fire the events it listens to.
    function setReactValue(input, value) {
        const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
        input.focus();
        setter.call(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        input.dispatchEvent(new FocusEvent('blur', { bubbles: true }));
        input.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
    }

    function fillText(re, value) {
        const q = findQuestion(re);
        const input = q && q.querySelector(SEL.textInput);
        if (!input) return false;
        setReactValue(input, value);
        return true;
    }

    function fillRadio(re, value) {
        const q = findQuestion(re);
        if (!q) return false;
        const radios = [...q.querySelectorAll('input[type="radio"]')];
        const labelOf = (r) => r.value || r.getAttribute('aria-label') || (r.closest('label, [data-automation-id="choiceItem"]') || r.parentElement).innerText;
        const hit = bestMatch(radios, value, labelOf);
        if (!hit) return false;
        hit.click();
        return true;
    }

    async function openDropdown(q) {
        const btn = q.querySelector(SEL.dropdown);
        if (!btn) return null;
        if (btn.getAttribute('aria-expanded') !== 'true') btn.click();
        const opts = await waitFor(() => {
            const list = [...document.querySelectorAll(SEL.option)];
            return list.length ? list : null;
        }, OPTION_WAIT_MS);
        return opts ? { btn, opts } : null;
    }

    function closeDropdown(btn) {
        if (btn.getAttribute('aria-expanded') !== 'true') return;
        btn.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27, bubbles: true }));
        if (btn.getAttribute('aria-expanded') === 'true') btn.click();
    }

    async function fillDropdown(re, value) {
        const q = findQuestion(re);
        if (!q) return false;
        const open = await openDropdown(q);
        if (!open) return false;
        const hit = bestMatch(open.opts, value, (o) => o.innerText);
        if (!hit) { closeDropdown(open.btn); return false; }
        hit.click();
        return true;
    }

    // Reads the course list straight from the form so presets always use real option text.
    async function readCourses() {
        const q = findQuestion(Q.course);
        if (!q) return [];
        const open = await openDropdown(q);
        if (!open) return [];
        const list = open.opts.map((o) => o.innerText.trim()).filter(Boolean);
        closeDropdown(open.btn);
        return list;
    }

    // ── Fill ──
    async function fill(preset) {
        const failed = [];
        if (!state.name || !fillText(Q.name, state.name)) failed.push('Name');
        await sleep(100);
        if (!(await fillDropdown(Q.course, preset.course))) failed.push('Course');
        await sleep(200);
        if (!fillRadio(Q.type, preset.type)) failed.push('Session type');
        await sleep(100);
        if (!fillText(Q.group, preset.group)) failed.push('Group');
        return failed;
    }

    // ── Panel ──
    const RED = '#b5121b';
    addStyle(`
        #gsf-panel { position: fixed; right: 20px; bottom: 20px; z-index: 2147483000; width: 340px;
            max-width: calc(100vw - 40px); max-height: calc(100vh - 40px); display: flex; flex-direction: column;
            background: #fff; color: #242424; border-radius: 12px; overflow: hidden;
            box-shadow: 0 8px 32px rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.06);
            font: 14px/1.45 "Segoe UI", system-ui, sans-serif; }
        #gsf-panel *, #gsf-panel *::before { box-sizing: border-box; font-family: inherit; min-width: 0; }
        #gsf-panel button { font: inherit; cursor: pointer; }

        #gsf-panel .gsf-head { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: ${RED};
            color: #fff; border: 0; width: 100%; text-align: left; font-weight: 600 !important; }
        #gsf-panel .gsf-head span:first-child { flex: 1; }
        #gsf-panel .gsf-chev { transition: transform .15s; opacity: .85; }
        #gsf-panel.gsf-collapsed { width: auto; }
        #gsf-panel.gsf-collapsed .gsf-body { display: none; }
        #gsf-panel.gsf-collapsed .gsf-chev { transform: rotate(180deg); }

        #gsf-panel .gsf-body { padding: 14px; display: flex; flex-direction: column; gap: 14px; overflow-y: auto; overflow-x: hidden; }
        #gsf-panel .gsf-label { font-size: 12px; font-weight: 600; color: #616161; text-transform: uppercase; letter-spacing: .04em; margin: 0 0 6px; }

        #gsf-panel .gsf-me { display: flex; align-items: center; gap: 8px; }
        #gsf-panel .gsf-me strong { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        #gsf-panel .gsf-link { background: none; border: 0; padding: 0; color: ${RED}; font-size: 13px; }
        #gsf-panel .gsf-link:hover { text-decoration: underline; }

        #gsf-panel .gsf-input, #gsf-panel .gsf-select { width: 100%; padding: 7px 9px; border: 1px solid #c7c7c7; border-radius: 6px;
            background: #fff; color: #242424; font-size: 14px; }
        #gsf-panel .gsf-input:focus, #gsf-panel .gsf-select:focus { outline: 2px solid ${RED}33; border-color: ${RED}; }

        #gsf-panel .gsf-list { display: flex; flex-direction: column; gap: 8px; }
        #gsf-panel .gsf-card { display: flex; align-items: stretch; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; }
        #gsf-panel .gsf-card:hover { border-color: ${RED}; }
        #gsf-panel .gsf-card.gsf-last { border-color: ${RED}66; background: #fdf6f6; }
        #gsf-panel .gsf-fill { flex: 1; display: flex; flex-direction: column; gap: 4px; padding: 9px 10px; background: none;
            border: 0; text-align: left; color: inherit; }
        #gsf-panel .gsf-course { font-weight: 600; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        #gsf-panel .gsf-tags { display: flex; flex-wrap: wrap; gap: 4px; align-items: center; }
        #gsf-panel .gsf-tag { font-size: 12px; padding: 1px 8px; border-radius: 10px; background: #f0f0f0; color: #424242; }
        #gsf-panel .gsf-tag.gsf-hint { background: none; color: ${RED}; padding: 1px 0; }
        #gsf-panel .gsf-tools { display: flex; flex-direction: column; border-left: 1px solid #eee; }
        #gsf-panel .gsf-icon { flex: 1; width: 34px; background: none; border: 0; color: #757575; font-size: 14px; }
        #gsf-panel .gsf-icon:hover { background: #f5f5f5; color: ${RED}; }
        #gsf-panel .gsf-empty { margin: 0; color: #757575; font-size: 13px; }

        #gsf-panel .gsf-btn { padding: 8px 12px; border-radius: 6px; border: 1px solid #c7c7c7; background: #fff; color: #242424; font-weight: 600; }
        #gsf-panel .gsf-btn:hover { background: #f5f5f5; }
        #gsf-panel .gsf-btn.gsf-primary { background: ${RED}; border-color: ${RED}; color: #fff; }
        #gsf-panel .gsf-btn.gsf-primary:hover { background: #941016; }
        #gsf-panel .gsf-btn.gsf-dashed { border-style: dashed; color: ${RED}; background: none; }
        #gsf-panel .gsf-btn:disabled { opacity: .5; cursor: default; }

        #gsf-panel .gsf-editor { display: flex; flex-direction: column; gap: 10px; padding: 12px; border-radius: 8px; background: #f7f7f7; }
        #gsf-panel .gsf-field { display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: #424242; }
        #gsf-panel .gsf-field-row { display: flex; justify-content: space-between; align-items: baseline; }
        #gsf-panel .gsf-seg { display: flex; border: 1px solid #c7c7c7; border-radius: 6px; overflow: hidden; background: #fff; }
        #gsf-panel .gsf-seg button { flex: 1; padding: 6px 4px; border: 0; background: none; color: #424242; font-size: 13px; }
        #gsf-panel .gsf-seg button + button { border-left: 1px solid #c7c7c7; }
        #gsf-panel .gsf-seg button.gsf-on { background: ${RED}; color: #fff; }
        #gsf-panel .gsf-actions { display: flex; gap: 8px; justify-content: flex-end; }

        #gsf-panel .gsf-msg { margin: 0; font-size: 13px; color: ${RED}; }

        #gsf-panel .gsf-foot { margin: 0; font-size: 12px; color: #8a8a8a; }

        [data-automation-id="questionItem"].gsf-todo { outline: 2px dashed ${RED}; outline-offset: 6px; border-radius: 4px; }
    `);

    function addStyle(css) {
        document.head.append(el('style', { textContent: css }));
    }

    const ui = { editing: null, editingName: !state.name, msg: '' };
    const panel = el('div', { id: 'gsf-panel' });
    const presetKey = (p) => `${p.course}|${p.type}|${p.group}`;

    // Outline the questions the TA still has to answer; each clears once touched.
    function markManual() {
        let first = null;
        for (const m of MANUAL) {
            const q = findQuestion(m.re);
            if (!q) continue;
            first = first || q;
            q.classList.add('gsf-todo');
            const clear = () => q.classList.remove('gsf-todo');
            q.addEventListener('input', clear, { once: true });
            q.addEventListener('change', clear, { once: true });
        }
        if (first) {
            first.scrollIntoView({ behavior: 'smooth', block: 'center' });
            const input = first.querySelector('input');
            if (input) setTimeout(() => input.focus({ preventScroll: true }), 400);
        }
    }

    async function runFill(p) {
        const failed = await fill(p);
        state.last = presetKey(p); save();
        if (failed.length) ui.msg = 'Could not fill: ' + failed.join(', ') + '. Fill those by hand.';
        render();
        markManual();
    }

    function renderName() {
        const wrap = el('div', null, el('p', { className: 'gsf-label', textContent: 'Your name' }));
        if (!ui.editingName) {
            const change = el('button', { className: 'gsf-link', textContent: 'Change' });
            change.addEventListener('click', () => { ui.editingName = true; render(); });
            wrap.append(el('div', { className: 'gsf-me' }, el('strong', { textContent: state.name, title: state.name }), change));
            return wrap;
        }
        const input = el('input', { className: 'gsf-input', value: state.name, placeholder: 'Full name, as on the portal' });
        const ok = el('button', { className: 'gsf-btn gsf-primary', textContent: 'Save' });
        const commit = () => {
            const v = input.value.replace(/\s+/g, ' ').trim();
            if (!v) { input.focus(); return; }
            state.name = v; save(); ui.editingName = false; render();
        };
        ok.addEventListener('click', commit);
        input.addEventListener('keydown', (e) => { if (e.key === 'Enter') commit(); });
        wrap.append(el('div', { className: 'gsf-me' }, input, ok));
        setTimeout(() => input.focus(), 0);
        return wrap;
    }

    function renderCard(p, i) {
        const fillBtn = el('button', { className: 'gsf-fill', title: 'Fill the form with this class' },
            el('span', { className: 'gsf-course', textContent: p.course }),
            el('span', { className: 'gsf-tags' },
                el('span', { className: 'gsf-tag', textContent: p.type }),
                el('span', { className: 'gsf-tag', textContent: 'Group ' + p.group }),
                state.last === presetKey(p) ? el('span', { className: 'gsf-tag gsf-hint', textContent: '· last used' }) : null));
        fillBtn.addEventListener('click', () => {
            if (!state.name) { ui.editingName = true; ui.msg = 'Enter your name first.'; render(); return; }
            runFill(p);
        });
        const edit = el('button', { className: 'gsf-icon', textContent: '✎', title: 'Edit' });
        edit.addEventListener('click', () => { ui.editing = { index: i, ...p }; render(); });
        const del = el('button', { className: 'gsf-icon', textContent: '✕', title: 'Delete' });
        del.addEventListener('click', () => {
            if (!confirm('Delete "' + p.course + ' · ' + p.type + ' · Group ' + p.group + '"?')) return;
            state.presets.splice(i, 1); save(); render();
        });
        return el('div', { className: 'gsf-card' + (state.last === presetKey(p) ? ' gsf-last' : '') },
            fillBtn, el('div', { className: 'gsf-tools' }, edit, del));
    }

    function renderEditor() {
        const d = ui.editing;

        const courseSel = el('select', { className: 'gsf-select' });
        const options = state.courses.includes(d.course) || !d.course ? state.courses : [d.course, ...state.courses];
        courseSel.append(el('option', { value: '', textContent: options.length ? 'Choose a course…' : 'Loading courses…' }));
        for (const c of options) courseSel.append(el('option', { value: c, textContent: c, selected: c === d.course }));
        courseSel.addEventListener('change', () => { d.course = courseSel.value; });
        const reload = el('button', { className: 'gsf-link', textContent: 'Reload list' });
        reload.addEventListener('click', () => loadCourses(true));

        const seg = el('div', { className: 'gsf-seg' });
        for (const t of SESSION_TYPES) {
            const b = el('button', { textContent: t, className: d.type === t ? 'gsf-on' : '' });
            b.addEventListener('click', () => { d.type = t; render(); });
            seg.append(b);
        }

        const group = el('input', { className: 'gsf-input', value: d.group || '', placeholder: 'e.g. T12' });
        group.addEventListener('input', () => { d.group = group.value; });

        const cancel = el('button', { className: 'gsf-btn', textContent: 'Cancel' });
        cancel.addEventListener('click', () => { ui.editing = null; ui.msg = ''; render(); });
        const saveBtn = el('button', { className: 'gsf-btn gsf-primary', textContent: d.index == null ? 'Add class' : 'Save' });
        saveBtn.addEventListener('click', () => {
            const p = { course: d.course, type: d.type, group: (d.group || '').trim() };
            if (!p.course) { ui.msg = 'Choose a course.'; render(); return; }
            if (!p.group) { ui.msg = 'Enter the group number.'; render(); group.focus(); return; }
            const dup = state.presets.findIndex((x) => presetKey(x) === presetKey(p));
            if (dup !== -1 && dup !== d.index) { ui.msg = 'You already have this class.'; render(); return; }
            if (d.index == null) state.presets.push(p); else state.presets[d.index] = p;
            save(); ui.editing = null; ui.msg = ''; render();
        });
        group.addEventListener('keydown', (e) => { if (e.key === 'Enter') saveBtn.click(); });

        return el('div', { className: 'gsf-editor' },
            el('label', { className: 'gsf-field' },
                el('span', { className: 'gsf-field-row' }, el('span', { textContent: 'Course' }), reload), courseSel),
            el('div', { className: 'gsf-field' }, el('span', { textContent: 'Session type' }), seg),
            el('label', { className: 'gsf-field' }, el('span', { textContent: 'Group number' }), group),
            ui.msg ? el('p', { className: 'gsf-msg', textContent: ui.msg }) : null,
            el('div', { className: 'gsf-actions' }, cancel, saveBtn));
    }

    let loadingCourses = false;
    async function loadCourses(force) {
        if (loadingCourses || (state.courses.length && !force)) return;
        loadingCourses = true;
        const list = await readCourses();
        loadingCourses = false;
        if (list.length) { state.courses = list; save(); }
        else ui.msg = 'Could not read the course list from the form. Try "Reload list".';
        render();
    }

    function render() {
        panel.className = state.collapsed ? 'gsf-collapsed' : '';
        const head = el('button', { className: 'gsf-head', title: state.collapsed ? 'Show' : 'Hide' },
            el('span', { textContent: 'Session Form Filler' }),
            el('span', { className: 'gsf-chev', textContent: '▾' }));
        head.addEventListener('click', () => { state.collapsed = !state.collapsed; save(); render(); });

        const body = el('div', { className: 'gsf-body' });
        body.append(renderName());
        if (!ui.editingName && ui.msg && !ui.editing) { body.append(el('p', { className: 'gsf-msg', textContent: ui.msg })); ui.msg = ''; }

        const list = el('div', { className: 'gsf-list' });
        if (!state.presets.length && !ui.editing) {
            list.append(el('p', { className: 'gsf-empty', textContent: 'Add the classes you teach once. Then one click fills the form.' }));
        }
        state.presets.forEach((p, i) => { if (!ui.editing || ui.editing.index !== i) list.append(renderCard(p, i)); });
        body.append(el('div', null, el('p', { className: 'gsf-label', textContent: 'Your classes — click one to fill' }), list));

        if (ui.editing) {
            body.append(renderEditor());
        } else {
            const add = el('button', { className: 'gsf-btn gsf-dashed', textContent: '+ Add a class' });
            add.addEventListener('click', () => {
                ui.editing = { index: null, course: '', type: SESSION_TYPES[0], group: '' };
                render(); loadCourses(false);
            });
            body.append(add);
        }

        body.append(el('p', { className: 'gsf-foot', textContent: 'Nothing is submitted for you.' }));

        panel.replaceChildren(head, body);
    }

    (async () => {
        const ready = await waitFor(() => findQuestion(Q.group), FORM_WAIT_MS);
        if (!ready) return;
        render();
        document.body.append(panel);
    })();
})();
