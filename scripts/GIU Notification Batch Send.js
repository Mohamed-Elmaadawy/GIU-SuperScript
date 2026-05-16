// ==UserScript==
// @name        GIU Notification Batch Send
// @description Send emails to multiple tutorial groups at once on the GIU portal
// @match       https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx
// @namespace   ramin0
// @version     1.0
// @author      Mo.Elmaadawy
// @icon        data:image/png;base64,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
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
        // inject before the <table> that follows MainContent_lblText
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
        const groups = getGroupOptions();

        const wrapper = document.createElement('div');
        wrapper.id = 'giu-batch-panel';
        wrapper.style.cssText = 'background:#fff3cd;border:1px solid #ffc107;border-radius:4px;padding:12px;margin-bottom:16px;';

        wrapper.innerHTML = `
            <h5 style="margin:0 0 10px;font-size:1rem;">&#128232; Batch Send</h5>
            <div id="giu-group-list" style="max-height:180px;overflow-y:auto;border:1px solid #ddd;padding:8px;background:#fff;border-radius:4px;margin-bottom:8px;">
                ${groups.length
                    ? groups.map(g => `
                        <div class="giu-group-row" style="margin-bottom:4px;">
                            <label style="cursor:pointer;font-weight:normal;">
                                <input type="checkbox" class="giu-group-cb" data-value="${escapeHtml(g.value)}" data-label="${escapeHtml(g.label)}">
                                &nbsp;${g.label}
                            </label>
                        </div>`).join('')
                    : '<em style="color:#888">No groups available. Make sure groups are assigned to your account.</em>'
                }
            </div>
            <div style="margin-bottom:8px;">
                <button type="button" id="giu-select-all" class="btn btn-sm btn-outline-secondary">Select All</button>
                &nbsp;
                <label style="cursor:pointer;font-weight:normal;">
                    <input type="checkbox" id="giu-same-msg" checked>
                    &nbsp;Same message for all groups
                </label>
            </div>
            <div id="giu-shared-fields">
                <div style="margin-bottom:6px;">
                    <label style="display:block;font-weight:600;">Subject</label>
                    <input type="text" id="giu-shared-subject" class="form-control" placeholder="Email subject…" style="max-width:500px;">
                </div>
                <div style="margin-bottom:6px;">
                    <label style="display:block;font-weight:600;">Body</label>
                    <textarea id="giu-shared-body" class="form-control" rows="4" placeholder="Email body…" style="max-width:500px;"></textarea>
                </div>
            </div>
            <button type="button" id="giu-start-btn" class="btn btn-primary" disabled>
                Start Batch Send (0 groups)
            </button>
        `;

        // Select All
        wrapper.querySelector('#giu-select-all').addEventListener('click', () => {
            wrapper.querySelectorAll('.giu-group-cb').forEach(cb => { cb.checked = true; });
            updateStartBtn();
        });

        // Same-message toggle
        wrapper.querySelector('#giu-same-msg').addEventListener('change', function () {
            if (this.checked) {
                wrapper.querySelectorAll('.giu-per-group-fields').forEach(el => el.remove());
                wrapper.querySelector('#giu-shared-fields').style.display = '';
            } else {
                wrapper.querySelector('#giu-shared-fields').style.display = 'none';
                wrapper.querySelectorAll('.giu-group-row').forEach(row => {
                    if (row.querySelector('.giu-per-group-fields')) return;
                    const lbl = row.querySelector('label').textContent.trim();
                    const fields = document.createElement('div');
                    fields.className = 'giu-per-group-fields';
                    fields.style.cssText = 'margin:4px 0 8px 20px;';
                    fields.innerHTML = `
                        <input type="text" class="form-control form-control-sm giu-pg-subject" placeholder="Subject for ${escapeHtml(lbl)}" style="margin-bottom:4px;max-width:480px;">
                        <textarea class="form-control form-control-sm giu-pg-body" rows="2" placeholder="Body for ${escapeHtml(lbl)}" style="max-width:480px;"></textarea>
                    `;
                    row.appendChild(fields);
                });
            }
        });

        // Group checkbox changes
        wrapper.querySelectorAll('.giu-group-cb').forEach(cb => {
            cb.addEventListener('change', updateStartBtn);
        });

        // Subject input
        wrapper.querySelector('#giu-shared-subject').addEventListener('input', updateStartBtn);

        function updateStartBtn() {
            const checked  = wrapper.querySelectorAll('.giu-group-cb:checked').length;
            const sameMsg  = wrapper.querySelector('#giu-same-msg').checked;
            const subject  = wrapper.querySelector('#giu-shared-subject').value.trim();
            const btn      = wrapper.querySelector('#giu-start-btn');
            btn.disabled   = checked === 0 || (sameMsg && !subject);
            btn.textContent = `Start Batch Send (${checked} group${checked !== 1 ? 's' : ''})`;
        }

        wrapper.querySelector('#giu-start-btn').addEventListener('click', () => {
            const sameMsg       = wrapper.querySelector('#giu-same-msg').checked;
            const sharedSubject = sameMsg ? wrapper.querySelector('#giu-shared-subject').value.trim() : '';
            const sharedBody    = sameMsg ? wrapper.querySelector('#giu-shared-body').value.trim()    : '';

            const selectedGroups = [];
            wrapper.querySelectorAll('.giu-group-cb:checked').forEach(cb => {
                const row     = cb.closest('.giu-group-row');
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

        const anchor = getInjectionAnchor();
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(wrapper, anchor);
    }

    // ── Progress view ─────────────────────────────────────────────────────────────

    function renderProgress(queue) {
        const total   = queue.groups.length;
        const done    = queue.results.length;
        const current = queue.groups[queue.currentIndex];
        const pct     = Math.round((done / total) * 100);

        const resultRows = queue.results.map(r => {
            const icon  = r.status === 'sent' ? '&#10003;' : r.status === 'failed' ? '&#10007;' : '&ndash;';
            const color = r.status === 'sent' ? 'green'    : r.status === 'failed' ? 'red'      : 'gray';
            return `<div style="color:${color};font-size:0.88em;">${icon} ${escapeHtml(r.label)} &mdash; ${escapeHtml(r.info)}</div>`;
        }).join('');

        const wrapper = document.createElement('div');
        wrapper.id = 'giu-batch-progress';
        wrapper.style.cssText = 'background:#d1ecf1;border:1px solid #bee5eb;border-radius:4px;padding:12px;margin-bottom:16px;';
        wrapper.innerHTML = `
            <h5 style="margin:0 0 8px;font-size:1rem;">&#128232; Sending&hellip;</h5>
            <div style="background:#fff;border-radius:4px;overflow:hidden;height:14px;margin-bottom:8px;">
                <div style="background:#0d6efd;height:100%;width:${pct}%;"></div>
            </div>
            <div style="margin-bottom:8px;">Group ${done + 1} of ${total}: <b>${current ? current.label : ''}</b></div>
            <div>${resultRows}</div>
            <div style="margin-top:10px;">
                <button type="button" id="giu-cancel-btn" class="btn btn-sm btn-danger">Cancel</button>
            </div>
        `;

        wrapper.querySelector('#giu-cancel-btn').addEventListener('click', () => {
            const remaining = queue.groups.slice(queue.currentIndex);
            remaining.forEach(g => queue.results.push({ label: g.label, status: 'cancelled', info: 'Cancelled by user' }));
            clearQueue();
            wrapper.remove();
            renderSummary(queue.results);
            injectPanel();
        });

        const anchor = getInjectionAnchor();
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(wrapper, anchor);
    }

    // ── Completion summary ────────────────────────────────────────────────────────

    function renderSummary(results) {
        const sent      = results.filter(r => r.status === 'sent').length;
        const failed    = results.filter(r => r.status === 'failed').length;
        const cancelled = results.filter(r => r.status === 'cancelled').length;
        const hasErrors = failed > 0;

        const rows = results.map(r => {
            const icon  = r.status === 'sent' ? '&#10003;' : r.status === 'failed' ? '&#10007;' : '&ndash;';
            const color = r.status === 'sent' ? 'green'    : r.status === 'failed' ? 'red'      : 'gray';
            return `<div style="color:${color};font-size:0.88em;">${icon} ${escapeHtml(r.label)} &mdash; ${escapeHtml(r.info)}</div>`;
        }).join('');

        const bg     = hasErrors ? '#f8d7da' : '#d4edda';
        const border = hasErrors ? '#f5c6cb' : '#c3e6cb';

        const wrapper = document.createElement('div');
        wrapper.id = 'giu-batch-summary';
        wrapper.style.cssText = `background:${bg};border:1px solid ${border};border-radius:4px;padding:12px;margin-bottom:16px;`;
        wrapper.innerHTML = `
            <h5 style="margin:0 0 8px;font-size:1rem;">&#128232; Batch Send Complete</h5>
            <div style="margin-bottom:8px;">
                <span style="color:green;">&#10003; ${sent} sent</span>
                &nbsp;|&nbsp;
                <span style="color:red;">&#10007; ${failed} failed</span>
                ${cancelled > 0 ? `&nbsp;|&nbsp;<span style="color:gray;">&ndash; ${cancelled} cancelled</span>` : ''}
            </div>
            <div>${rows}</div>
            <div style="margin-top:10px;">
                <button type="button" id="giu-dismiss-btn" class="btn btn-sm btn-secondary">Dismiss</button>
            </div>
        `;

        wrapper.querySelector('#giu-dismiss-btn').addEventListener('click', () => wrapper.remove());

        const anchor = getInjectionAnchor();
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(wrapper, anchor);
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
