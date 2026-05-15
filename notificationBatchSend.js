// ==UserScript==
// @name        GIU Notification Batch Send
// @description Send emails to multiple tutorial groups at once on the GIU portal
// @match       https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx
// @namespace   ramin0
// @version     1.0
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
        getEl('__EVENTTARGET').value = target;
        getEl('__EVENTARGUMENT').value = '';
        getEl('form1').submit();
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
            queue.step = 'done';
            saveQueue(queue);
            // no reload — entry point renders summary immediately
        } else {
            queue.step = 'select';
            saveQueue(queue);
            location.reload();
        }
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
                                <input type="checkbox" class="giu-group-cb" data-value="${g.value}" data-label="${g.label}">
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
                getEl('giu-shared-fields').style.display = '';
            } else {
                getEl('giu-shared-fields').style.display = 'none';
                wrapper.querySelectorAll('.giu-group-row').forEach(row => {
                    if (row.querySelector('.giu-per-group-fields')) return;
                    const lbl = row.querySelector('label').textContent.trim();
                    const fields = document.createElement('div');
                    fields.className = 'giu-per-group-fields';
                    fields.style.cssText = 'margin:4px 0 8px 20px;';
                    fields.innerHTML = `
                        <input type="text" class="form-control form-control-sm giu-pg-subject" placeholder="Subject for ${lbl}" style="margin-bottom:4px;max-width:480px;">
                        <textarea class="form-control form-control-sm giu-pg-body" rows="2" placeholder="Body for ${lbl}" style="max-width:480px;"></textarea>
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

        const anchor = getInjectionAnchor();
        anchor.parentNode.insertBefore(wrapper, anchor);
    }

})();
