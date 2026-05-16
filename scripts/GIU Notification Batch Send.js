// ==UserScript==
// @name        GIU Notification Batch Send
// @description Send emails to multiple tutorial groups at once on the GIU portal
// @match       https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx
// @namespace   ramin0
// @version     1.0
// @author      Mo.Elmaadawy
// @icon         data:image/png;base64,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
// @run-at      document-idle
// ==/UserScript==

(function () {
    'use strict';

    const QUEUE_KEY = 'giuBatchNotifyQueueV1';

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

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function extractCourseCode(label) {
        const parts = label.split(' - ');
        return parts.length >= 2 ? parts[1].trim() : null;
    }

    // ── Style injection ──────────────────────────────────────────────────────────

    function injectStyles() {
        if (document.getElementById('gius-notify-styles')) return;
        const style = document.createElement('style');
        style.id = 'gius-notify-styles';
        style.textContent = `
            @keyframes giusSlideDown {
                from { opacity: 0; transform: translateY(-14px); }
                to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes giusFadeIn {
                from { opacity: 0; }
                to   { opacity: 1; }
            }
            @keyframes giusSpin {
                to { transform: rotate(360deg); }
            }
            @keyframes giusBounceIn {
                0%   { opacity: 0; transform: scale(0.5); }
                65%  { transform: scale(1.12); }
                100% { opacity: 1; transform: scale(1); }
            }
            @keyframes giusProgressFill {
                from { width: 0%; }
            }
            @keyframes giusRowIn {
                from { opacity: 0; transform: translateX(-8px); }
                to   { opacity: 1; transform: translateX(0); }
            }

            .gius-card {
                background: #ffffff;
                border: 1px solid #eeeeee;
                border-radius: 6px;
                box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
                position: relative;
                overflow: hidden;
                margin-bottom: 20px;
                margin-top: 20px;
                animation: giusSlideDown 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
                font-family: 'Open Sans', Arial, Helvetica, sans-serif;
            }
            .gius-card::before {
                content: "";
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 3px;
                background: #ffc107;
                z-index: 1;
            }
            .gius-card-header {
                background: #272c33;
                color: #fff;
                padding: 10px 14px;
                border-bottom: 2px solid #ffc107;
            }
            .gius-hdr-blue, .gius-hdr-info, .gius-hdr-success, .gius-hdr-danger {}
            .gius-card-title {
                margin: 0;
                font-size: 14px;
                font-weight: 700;
                color: #fff;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .gius-card-category {
                margin: 3px 0 0;
                font-size: 12px;
                color: rgba(255,255,255,0.7);
            }
            .gius-card-body {
                padding: 14px 16px;
            }

            .gius-section-label {
                display: block;
                font-weight: 700;
                font-size: 11px;
                color: #6b7280;
                margin-bottom: 6px;
                text-transform: uppercase;
                letter-spacing: 0.6px;
            }

            .gius-group-list {
                max-height: 190px;
                overflow-y: auto;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                background: #f9fafb;
                padding: 4px;
                margin-bottom: 12px;
                scrollbar-width: thin;
                scrollbar-color: #1B59C6 #f1f2f7;
            }
            .gius-group-list::-webkit-scrollbar { width: 4px; }
            .gius-group-list::-webkit-scrollbar-track { background: #f1f2f7; }
            .gius-group-list::-webkit-scrollbar-thumb { background: #1B59C6; border-radius: 2px; }
            .gius-group-row {
                padding: 5px 8px;
                border-radius: 4px;
                transition: background 0.15s ease;
            }
            .gius-group-row:hover { background: #e5e7eb; }
            .gius-group-row label {
                display: flex !important;
                align-items: center;
                gap: 8px;
                cursor: pointer;
                font-size: 13px;
                color: #374151;
                font-weight: normal !important;
                margin: 0 !important;
                user-select: none;
                font-family: 'Open Sans', sans-serif;
            }
            .gius-group-row input[type="checkbox"] {
                accent-color: #1B59C6;
                width: 15px;
                height: 15px;
                cursor: pointer;
                flex-shrink: 0;
            }
            .gius-empty-msg {
                color: #6b7280;
                font-size: 13px;
                padding: 14px 8px;
                font-style: italic;
                text-align: center;
            }

            .gius-toolbar-row {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 12px;
            }
            .gius-toggle-label {
                display: flex !important;
                align-items: center;
                gap: 7px;
                font-size: 13px;
                color: #374151;
                cursor: pointer;
                font-weight: normal !important;
            }
            .gius-toggle-label input[type="checkbox"] {
                accent-color: #1B59C6;
                width: 14px;
                height: 14px;
            }

            .gius-divider {
                height: 1px;
                background: #d1d5db;
                margin: 12px 0;
            }

            .gius-field-label {
                display: block;
                font-weight: 700;
                font-size: 12px;
                color: #374151;
                margin-bottom: 4px;
            }
            .gius-input {
                display: block;
                width: 100%;
                max-width: 500px;
                height: 32px;
                padding: 4px 8px;
                font-size: 13px;
                color: #111827;
                background: #fff;
                border: 1px solid #9ca3af;
                border-radius: 6px;
                transition: border-color 0.2s ease;
                box-sizing: border-box;
                margin-bottom: 8px;
                font-family: 'Open Sans', sans-serif;
            }
            textarea.gius-input { height: auto; }
            .gius-input:focus {
                outline: 2px solid #60a5fa;
                outline-offset: 1px;
                border-color: #1B59C6;
            }

            .gius-btn {
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
            .gius-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                transform: none !important;
                box-shadow: none !important;
            }
            .gius-btn-primary {
                background: #1B59C6;
                border-color: #1648a8;
                color: #fff;
            }
            .gius-btn-primary:not(:disabled):hover {
                background: #1648a8;
                transform: translateY(-1px);
                box-shadow: 0 3px 10px rgba(27,89,198,0.35);
            }
            .gius-btn-outline {
                background: #fff;
                border-color: #d1d5db;
                color: #374151;
            }
            .gius-btn-outline:not(:disabled):hover {
                background: #f9fafb;
                border-color: #9ca3af;
            }
            .gius-btn-danger {
                background: #fee2e2;
                border-color: #dc2626;
                color: #991b1b;
            }
            .gius-btn-danger:not(:disabled):hover {
                background: #fecaca;
                transform: translateY(-1px);
            }
            .gius-btn-muted {
                background: #f9fafb;
                border-color: #d1d5db;
                color: #374151;
            }
            .gius-btn-muted:not(:disabled):hover { background: #e5e7eb; }

            .gius-progress-wrap {
                background: #e5e7eb;
                border-radius: 999px;
                height: 8px;
                overflow: hidden;
                margin-bottom: 6px;
            }
            .gius-progress-bar {
                height: 100%;
                border-radius: 999px;
                background: #1B59C6;
                animation: giusProgressFill 0.5s ease-out;
                transition: width 0.45s ease;
            }
            .gius-progress-label {
                font-size: 12px;
                color: #6b7280;
                margin-bottom: 12px;
            }

            .gius-spinner {
                display: inline-block;
                width: 13px;
                height: 13px;
                border: 2px solid rgba(255,255,255,0.3);
                border-top-color: #fff;
                border-radius: 50%;
                animation: giusSpin 0.7s linear infinite;
                vertical-align: middle;
            }

            .gius-result-list { margin: 6px 0 10px; }
            .gius-result-row {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 7px 10px;
                font-size: 13px;
                border-radius: 6px;
                margin-bottom: 4px;
                background: #e5e7eb;
                border: 1px solid #d1d5db;
                animation: giusRowIn 0.3s ease both;
            }
            .gius-result-icon {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 11px;
                font-weight: 700;
                flex-shrink: 0;
                animation: giusBounceIn 0.4s ease both;
            }
            .gius-icon-sent     { background: #bbf7d0; color: #065f46; }
            .gius-icon-failed   { background: #fecaca; color: #7f1d1d; }
            .gius-icon-cancelled{ background: #e5e7eb; color: #6b7280; }
            .gius-result-name { color: #374151; font-weight: 600; flex: 1; }
            .gius-result-info { color: #6b7280; font-size: 11.5px; }

            .gius-summary-header-meta {
                margin-top: 8px;
                display: flex;
                gap: 14px;
                flex-wrap: wrap;
            }
            .gius-stat-pill {
                display: flex;
                align-items: baseline;
                gap: 4px;
                color: rgba(255,255,255,0.9);
            }
            .gius-stat-pill .gius-num {
                font-size: 20px;
                font-weight: 700;
                line-height: 1;
            }
            .gius-stat-pill .gius-lbl { font-size: 12px; opacity: 0.8; }

            .gius-per-group-fields {
                margin: 6px 0 8px 24px;
                animation: giusFadeIn 0.22s ease;
            }
            .gius-per-group-fields .gius-input {
                max-width: 460px;
                margin-bottom: 5px;
            }

            .gius-filter-row {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 8px;
            }
            .gius-course-filter {
                height: 32px;
                padding: 4px 8px;
                font-size: 13px;
                border: 1px solid #9ca3af;
                border-radius: 6px;
                color: #111827;
                background: #fff;
                cursor: pointer;
                font-family: 'Open Sans', sans-serif;
                flex: 1;
                max-width: 260px;
                transition: border-color 0.2s ease;
            }
            .gius-course-filter:focus {
                outline: 2px solid #60a5fa;
                outline-offset: 1px;
                border-color: #1B59C6;
            }
        `;
        document.head.appendChild(style);
    }

    // ── Page helpers ────────────────────────────────────────────────────────────

    function getEl(id) {
        return document.getElementById(id);
    }

    function getGroupOptions() {
        const ddl = getEl('MainContent_DDL_Group');
        if (!ddl) return [];
        return Array.from(ddl.options)
            .filter(o => o.value !== '')
            .map(o => ({ value: o.value, label: o.text.trim() }));
    }

    function triggerPostBack(target) {
        const et = getEl('__EVENTTARGET');
        const ea = getEl('__EVENTARGUMENT');
        const f  = getEl('form1');
        if (!et || !ea || !f) return;
        et.value = target;
        ea.value = '';
        f.submit();
    }

    function getInjectionAnchor() {
        const ref = getEl('MainContent_lblText');
        if (ref && ref.nextElementSibling) return ref.nextElementSibling;
        return getEl('form1');
    }

    // ── State machine runner ─────────────────────────────────────────────────────

    function advanceOrDone(queue) {
        queue.currentIndex++;
        if (queue.currentIndex >= queue.groups.length) {
            clearQueue();
            const progress = getEl('giu-batch-progress');
            if (progress) progress.remove();
            renderSummary(queue.results);
            injectPanel();
            return;
        }
        const nextGroup = queue.groups[queue.currentIndex];
        const ddl = getEl('MainContent_DDL_Group');
        const option = ddl ? Array.from(ddl.options).find(o => o.value === nextGroup.value) : null;
        if (!option) {
            queue.results.push({ label: nextGroup.label, status: 'failed', info: 'Group not found in dropdown' });
            advanceOrDone(queue);
            return;
        }
        ddl.value = nextGroup.value;
        queue.step = 'send';
        saveQueue(queue);
        triggerPostBack('ctl00$MainContent$DDL_Group');
    }

    function runQueueStep(queue) {
        const { step, currentIndex, groups, sharedSubject, sharedBody } = queue;
        const group = groups[currentIndex];

        if (step === 'select') {
            const ddl = getEl('MainContent_DDL_Group');
            if (!ddl) {
                queue.results.push({ label: group.label, status: 'failed', info: 'DDL_Group not found — session may have expired' });
                advanceOrDone(queue);
                return;
            }
            const option = Array.from(ddl.options).find(o => o.value === group.value);
            if (!option) {
                queue.results.push({ label: group.label, status: 'failed', info: 'Group not found in dropdown' });
                advanceOrDone(queue);
                return;
            }
            ddl.value = group.value;
            queue.step = 'send';
            saveQueue(queue);
            triggerPostBack('ctl00$MainContent$DDL_Group');
            return;
        }

        if (step === 'send') {
            const subjectEl = getEl('MainContent_T_Subject');
            const bodyEl    = getEl('MainContent_TA_Body');
            const sendBtn   = getEl('MainContent_B_Send');
            if (!subjectEl || !bodyEl || !sendBtn) {
                queue.results.push({ label: group.label, status: 'failed', info: 'Form fields missing after group load' });
                advanceOrDone(queue);
                return;
            }
            subjectEl.value = group.subject || sharedSubject;
            bodyEl.value    = group.body    || sharedBody;
            queue.step = 'advance';
            saveQueue(queue);
            sendBtn.click();
            return;
        }

        if (step === 'advance') {
            const infoEl   = getEl('MainContent_L_SendInfo');
            const infoText = infoEl ? infoEl.textContent.trim() : '';
            const failed   = /error|fail|could not|invalid/i.test(infoText);
            queue.results.push({
                label:  group.label,
                status: failed ? 'failed' : 'sent',
                info:   infoText || 'Sent'
            });
            advanceOrDone(queue);
            return;
        }
    }

    // ── UI panel ──────────────────────────────────────────────────────────────────

    function injectPanel() {
        injectStyles();
        const groups = getGroupOptions();

        const card = document.createElement('div');
        card.id = 'giu-batch-panel';
        card.className = 'gius-card';

        card.innerHTML = `
            <div class="gius-card-header gius-hdr-blue">
                <h4 class="gius-card-title">
                    <span class="gius-spinner"></span>
                    Batch Notification
                </h4>
                <p class="gius-card-category">Send email to multiple tutorial groups at once</p>
            </div>
            <div class="gius-card-body">
                <span class="gius-section-label">Tutorial Groups</span>
                <div id="giu-group-list" class="gius-group-list">
                    ${groups.length
                        ? groups.map(g => `
                            <div class="gius-group-row">
                                <label>
                                    <input type="checkbox" class="giu-group-cb"
                                        data-value="${escapeHtml(g.value)}"
                                        data-label="${escapeHtml(g.label)}">
                                    ${escapeHtml(g.label)}
                                </label>
                            </div>`).join('')
                        : `<div class="gius-empty-msg">No groups available. Make sure groups are assigned to your account.</div>`
                    }
                </div>
                <div class="gius-toolbar-row">
                    <button type="button" id="giu-select-all" class="gius-btn gius-btn-outline">Select All</button>
                    <label class="gius-toggle-label">
                        <input type="checkbox" id="giu-same-msg" checked>
                        Same message for all groups
                    </label>
                </div>
                <div id="giu-shared-fields">
                    <div class="gius-divider"></div>
                    <label class="gius-field-label">Subject</label>
                    <input type="text" id="giu-shared-subject" class="gius-input" placeholder="Email subject…">
                    <label class="gius-field-label">Body</label>
                    <textarea id="giu-shared-body" class="gius-input" rows="4"
                        placeholder="Email body…"
                        style="resize:vertical;min-height:88px;font-family:'Open Sans',sans-serif;"></textarea>
                </div>
                <div class="gius-divider"></div>
                <button type="button" id="giu-start-btn" class="gius-btn gius-btn-primary" disabled>
                    ▶ Start Batch Send (0 groups)
                </button>
            </div>
        `;

        // hide the spinner in header once loaded
        const spinner = card.querySelector('.gius-spinner');
        if (spinner) spinner.style.display = 'none';

        // Course filter — only rendered when multiple courses are present
        const courseCodes = [...new Set(groups.map(g => extractCourseCode(g.label)).filter(Boolean))];
        if (courseCodes.length > 1) {
            const groupListEl = card.querySelector('#giu-group-list');
            const filterRow   = document.createElement('div');
            filterRow.className = 'gius-filter-row';
            filterRow.innerHTML = `
                <span class="gius-section-label" style="margin:0;white-space:nowrap;">Course</span>
                <select id="giu-course-filter" class="gius-course-filter">
                    <option value="">All courses</option>
                    ${courseCodes.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('')}
                </select>
            `;
            groupListEl.parentNode.insertBefore(filterRow, groupListEl);
        }

        card.querySelector('#giu-select-all').addEventListener('click', () => {
            card.querySelectorAll('.gius-group-row').forEach(row => {
                if (row.style.display !== 'none') {
                    const cb = row.querySelector('.giu-group-cb');
                    if (cb) cb.checked = true;
                }
            });
            updateStartBtn();
        });

        card.querySelector('#giu-same-msg').addEventListener('change', function () {
            if (this.checked) {
                card.querySelectorAll('.gius-per-group-fields').forEach(el => el.remove());
                card.querySelector('#giu-shared-fields').style.display = '';
            } else {
                card.querySelector('#giu-shared-fields').style.display = 'none';
                card.querySelectorAll('.gius-group-row').forEach(row => {
                    if (row.querySelector('.gius-per-group-fields')) return;
                    const lbl = row.querySelector('label').textContent.trim();
                    const fields = document.createElement('div');
                    fields.className = 'gius-per-group-fields';
                    fields.innerHTML = `
                        <input type="text" class="gius-input giu-pg-subject" placeholder="Subject for ${escapeHtml(lbl)}">
                        <textarea class="gius-input giu-pg-body" rows="2"
                            placeholder="Body for ${escapeHtml(lbl)}"
                            style="resize:vertical;min-height:52px;font-family:'Open Sans',sans-serif;"></textarea>
                    `;
                    row.appendChild(fields);
                });
            }
        });

        card.querySelectorAll('.giu-group-cb').forEach(cb => {
            cb.addEventListener('change', updateStartBtn);
        });

        card.querySelector('#giu-shared-subject').addEventListener('input', updateStartBtn);

        function updateStartBtn() {
            const checked = [...card.querySelectorAll('.giu-group-cb:checked')]
                .filter(cb => cb.closest('.gius-group-row').style.display !== 'none').length;
            const sameMsg = card.querySelector('#giu-same-msg').checked;
            const subject = card.querySelector('#giu-shared-subject').value.trim();
            const btn     = card.querySelector('#giu-start-btn');
            btn.disabled  = checked === 0 || (sameMsg && !subject);
            btn.textContent = `▶ Start Batch Send (${checked} group${checked !== 1 ? 's' : ''})`;
        }

        card.querySelector('#giu-start-btn').addEventListener('click', () => {
            const sameMsg       = card.querySelector('#giu-same-msg').checked;
            const sharedSubject = sameMsg ? card.querySelector('#giu-shared-subject').value.trim() : '';
            const sharedBody    = sameMsg ? card.querySelector('#giu-shared-body').value.trim()    : '';

            const selectedGroups = [];
            card.querySelectorAll('.giu-group-cb:checked').forEach(cb => {
                const row = cb.closest('.gius-group-row');
                if (row.style.display === 'none') return;
                const subject = sameMsg ? null : (row.querySelector('.giu-pg-subject')?.value.trim() || null);
                const body    = sameMsg ? null : (row.querySelector('.giu-pg-body')?.value.trim()    || null);
                selectedGroups.push({
                    value:   cb.dataset.value,
                    label:   cb.dataset.label,
                    subject: subject || null,
                    body:    body    || null
                });
            });

            saveQueue({
                step:          'select',
                currentIndex:  0,
                sharedSubject,
                sharedBody,
                groups:        selectedGroups,
                results:       []
            });

            location.reload();
        });

        // Wire course filter
        const courseFilterEl = card.querySelector('#giu-course-filter');
        if (courseFilterEl) {
            courseFilterEl.addEventListener('change', () => {
                const code = courseFilterEl.value;
                card.querySelectorAll('.gius-group-row').forEach(row => {
                    if (!code) { row.style.display = ''; return; }
                    const label   = row.querySelector('.giu-group-cb')?.dataset.label ?? '';
                    row.style.display = extractCourseCode(label) === code ? '' : 'none';
                });
                updateStartBtn();
            });
        }

        const anchor = getInjectionAnchor();
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(card, anchor);
    }

    // ── Progress view ─────────────────────────────────────────────────────────────

    function renderProgress(queue) {
        injectStyles();
        const total   = queue.groups.length;
        const done    = queue.results.length;
        const current = queue.groups[queue.currentIndex];
        const pct     = Math.round((done / total) * 100);

        const resultRows = queue.results.map((r, i) => {
            const cls  = r.status === 'sent' ? 'gius-icon-sent' : r.status === 'failed' ? 'gius-icon-failed' : 'gius-icon-cancelled';
            const icon = r.status === 'sent' ? '✓' : r.status === 'failed' ? '✕' : '–';
            return `
                <div class="gius-result-row" style="animation-delay:${i * 0.05}s">
                    <span class="gius-result-icon ${cls}">${icon}</span>
                    <span class="gius-result-name">${escapeHtml(r.label)}</span>
                    <span class="gius-result-info">${escapeHtml(r.info)}</span>
                </div>`;
        }).join('');

        const card = document.createElement('div');
        card.id = 'giu-batch-progress';
        card.className = 'gius-card';
        card.innerHTML = `
            <div class="gius-card-header gius-hdr-info">
                <h4 class="gius-card-title">
                    <span class="gius-spinner"></span>
                    Sending…
                </h4>
                <p class="gius-card-category">
                    Group ${done + 1} of ${total}:
                    <strong style="color:#fff;">${current ? escapeHtml(current.label) : ''}</strong>
                </p>
            </div>
            <div class="gius-card-body">
                <div class="gius-progress-wrap">
                    <div class="gius-progress-bar" style="width:${pct}%;"></div>
                </div>
                <div class="gius-progress-label">${pct}% complete — ${done} of ${total} processed</div>
                <div class="gius-result-list">${resultRows}</div>
                <button type="button" id="giu-cancel-btn" class="gius-btn gius-btn-danger">✕ Cancel</button>
            </div>
        `;

        card.querySelector('#giu-cancel-btn').addEventListener('click', () => {
            const remaining = queue.groups.slice(queue.currentIndex);
            remaining.forEach(g => queue.results.push({ label: g.label, status: 'cancelled', info: 'Cancelled by user' }));
            clearQueue();
            card.remove();
            renderSummary(queue.results);
            injectPanel();
        });

        const anchor = getInjectionAnchor();
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(card, anchor);
    }

    // ── Completion summary ────────────────────────────────────────────────────────

    function renderSummary(results) {
        injectStyles();
        const sent      = results.filter(r => r.status === 'sent').length;
        const failed    = results.filter(r => r.status === 'failed').length;
        const cancelled = results.filter(r => r.status === 'cancelled').length;
        const hasErrors = failed > 0;

        const rows = results.map((r, i) => {
            const cls  = r.status === 'sent' ? 'gius-icon-sent' : r.status === 'failed' ? 'gius-icon-failed' : 'gius-icon-cancelled';
            const icon = r.status === 'sent' ? '✓' : r.status === 'failed' ? '✕' : '–';
            return `
                <div class="gius-result-row" style="animation-delay:${i * 0.04}s">
                    <span class="gius-result-icon ${cls}">${icon}</span>
                    <span class="gius-result-name">${escapeHtml(r.label)}</span>
                    <span class="gius-result-info">${escapeHtml(r.info)}</span>
                </div>`;
        }).join('');

        const hdrClass = hasErrors ? 'gius-hdr-danger' : 'gius-hdr-success';
        const titleIcon = hasErrors ? '⚠' : '✓';
        const titleText = hasErrors ? 'Sent with Errors' : 'Batch Complete';

        const card = document.createElement('div');
        card.id = 'giu-batch-summary';
        card.className = 'gius-card';
        card.innerHTML = `
            <div class="gius-card-header ${hdrClass}">
                <h4 class="gius-card-title">${titleIcon} ${titleText}</h4>
                <div class="gius-summary-header-meta">
                    <div class="gius-stat-pill">
                        <span class="gius-num">${sent}</span>
                        <span class="gius-lbl">Sent</span>
                    </div>
                    ${failed > 0 ? `<div class="gius-stat-pill"><span class="gius-num">${failed}</span><span class="gius-lbl">Failed</span></div>` : ''}
                    ${cancelled > 0 ? `<div class="gius-stat-pill"><span class="gius-num">${cancelled}</span><span class="gius-lbl">Cancelled</span></div>` : ''}
                </div>
            </div>
            <div class="gius-card-body">
                <div class="gius-result-list">${rows}</div>
                <div class="gius-divider"></div>
                <button type="button" id="giu-dismiss-btn" class="gius-btn gius-btn-muted">Dismiss</button>
            </div>
        `;

        card.querySelector('#giu-dismiss-btn').addEventListener('click', () => card.remove());

        const anchor = getInjectionAnchor();
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(card, anchor);
    }

    // ── Entry point ──────────────────────────────────────────────────────────────

    function init() {
        const queue = loadQueue();

        if (!queue) {
            injectPanel();
            return;
        }

        if (queue.step === 'done') {
            renderSummary(queue.results);
            clearQueue();
            injectPanel();
            return;
        }

        renderProgress(queue);
        runQueueStep(queue);
    }

    init();

})();
