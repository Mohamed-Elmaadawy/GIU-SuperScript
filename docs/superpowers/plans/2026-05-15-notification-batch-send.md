# Notification Batch Send Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Batch Send panel to the GIU notification page that lets staff send one email (or per-group emails) to multiple tutorial groups automatically, using a localStorage queue that survives the ASP.NET WebForms page reloads required between groups.

**Architecture:** Single Tampermonkey userscript (`notificationBatchSend.js`). On each page load, checks localStorage for an active queue. If found, drives the page through a state machine (select group → fill + send → record result → next group). If no queue, injects a UI panel above the existing form.

**Tech Stack:** Vanilla JS (ES6+), Tampermonkey userscript API, localStorage, Bootstrap 3/4 classes (already on portal page).

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `notificationBatchSend.js` | Create | Entire script: queue manager, state machine, UI panel, progress view, summary |

---

## Task 1: Scaffold + Queue Manager

**Files:**
- Create: `notificationBatchSend.js`

The queue shape:
```json
{
  "step": "select" | "send" | "advance" | "done",
  "currentIndex": 0,
  "sharedSubject": "string",
  "sharedBody": "string",
  "groups": [{ "value": "GRP001", "label": "CS-T01", "subject": null, "body": null }],
  "results": [{ "label": "CS-T01", "status": "sent" | "failed" | "cancelled", "info": "string" }]
}
```

- [ ] **Step 1: Create the file with userscript header and queue manager**

```javascript
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

})();
```

- [ ] **Step 2: Verify queue manager in browser console**

Install script in Tampermonkey, open the notification page, then in browser console run:
```javascript
localStorage.setItem('giuBatchNotifyQueueV1', JSON.stringify({ step: 'select', currentIndex: 0, sharedSubject: 'test', sharedBody: 'test', groups: [], results: [] }));
// Reload page — confirm no JS errors in console
// Then:
localStorage.removeItem('giuBatchNotifyQueueV1');
```
Expected: no errors, localStorage round-trips correctly.

- [ ] **Step 3: Commit**

```bash
git add notificationBatchSend.js
git commit -m "feat: add notification batch send scaffold and queue manager"
```

---

## Task 2: Page Helpers

**Files:**
- Modify: `notificationBatchSend.js`

These helpers abstract all DOM access. Adding them before the entry point ensures state machine and UI code never query the DOM directly with raw IDs.

- [ ] **Step 1: Add helpers inside the IIFE, after the queue manager**

```javascript
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
```

- [ ] **Step 2: Verify helpers in browser console**

In browser console on the notification page:
```javascript
// Check getGroupOptions works (call it after the script loads)
// Expected: array of {value, label} for each tutorial listed in the dropdown
```
If the dropdown shows tutorials, you should see them. If the dropdown shows `[SELECT CLASS GROUP]` only, `getGroupOptions()` returns `[]` — this is correct (the staff may need to be linked to groups; check by manually selecting the dropdown).

- [ ] **Step 3: Commit**

```bash
git add notificationBatchSend.js
git commit -m "feat: add DOM helpers and group options scraper"
```

---

## Task 3: State Machine Runner

**Files:**
- Modify: `notificationBatchSend.js`

The runner handles four steps. Step is always written to localStorage **before** any action that causes a page reload, so a reload never lands in an ambiguous state.

- [ ] **Step 1: Add `advanceOrDone` and `runQueueStep` inside the IIFE**

```javascript
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
```

- [ ] **Step 2: Manually test state machine with a single-group queue**

In browser console, set up a one-group queue and reload:
```javascript
localStorage.setItem('giuBatchNotifyQueueV1', JSON.stringify({
    step: 'select',
    currentIndex: 0,
    sharedSubject: 'Test subject',
    sharedBody: 'Test body',
    groups: [{ value: 'PASTE_A_REAL_GROUP_VALUE_HERE', label: 'Test Group', subject: null, body: null }],
    results: []
}));
location.reload();
```

Expected sequence:
1. Page reloads → step=`select` → DDL set → postback → page reloads with students
2. step=`send` → fields filled, send clicked → page reloads
3. step=`advance` → result recorded → step set to `done`

Check `localStorage.getItem('giuBatchNotifyQueueV1')` after each reload to confirm step progression.

- [ ] **Step 3: Commit**

```bash
git add notificationBatchSend.js
git commit -m "feat: add queue state machine runner (select/send/advance/done)"
```

---

## Task 4: UI Panel — Group Selector + Message Fields

**Files:**
- Modify: `notificationBatchSend.js`

Injected when no queue is active. Reads available groups from `#MainContent_DDL_Group` (already rendered by the server).

- [ ] **Step 1: Add `injectPanel` inside the IIFE**

```javascript
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
```

- [ ] **Step 2: Add a temporary entry point call and verify panel renders**

Temporarily add at the bottom of the IIFE (before closing `})()`):
```javascript
    injectPanel();
```

Reload the notification page. Expected:
- Yellow panel appears above the existing form
- Groups from the portal dropdown are listed as checkboxes
- "Select All" button checks all
- Unchecking "Same message" shows per-group subject/body fields under each group row
- "Start Batch Send" button disabled until ≥1 group checked and subject filled (in same-message mode)

- [ ] **Step 3: Remove the temporary `injectPanel()` call** (entry point added in Task 6)

- [ ] **Step 4: Commit**

```bash
git add notificationBatchSend.js
git commit -m "feat: add batch send UI panel with group selector and message fields"
```

---

## Task 5: Progress View + Completion Summary

**Files:**
- Modify: `notificationBatchSend.js`

Progress view is shown while a queue is running (replaces the panel). Summary is shown when queue finishes.

- [ ] **Step 1: Add `renderProgress` inside the IIFE**

```javascript
    // ── Progress view ─────────────────────────────────────────────────────────────

    function renderProgress(queue) {
        const total   = queue.groups.length;
        const done    = queue.results.length;
        const current = queue.groups[queue.currentIndex];
        const pct     = Math.round((done / total) * 100);

        const resultRows = queue.results.map(r => {
            const icon  = r.status === 'sent' ? '&#10003;' : r.status === 'failed' ? '&#10007;' : '&ndash;';
            const color = r.status === 'sent' ? 'green'    : r.status === 'failed' ? 'red'      : 'gray';
            return `<div style="color:${color};font-size:0.88em;">${icon} ${r.label} &mdash; ${r.info}</div>`;
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
            queue.step = 'done';
            saveQueue(queue);
            location.reload();
        });

        const anchor = getInjectionAnchor();
        anchor.parentNode.insertBefore(wrapper, anchor);
    }
```

- [ ] **Step 2: Add `renderSummary` inside the IIFE**

```javascript
    // ── Completion summary ────────────────────────────────────────────────────────

    function renderSummary(results) {
        const sent      = results.filter(r => r.status === 'sent').length;
        const failed    = results.filter(r => r.status === 'failed').length;
        const cancelled = results.filter(r => r.status === 'cancelled').length;
        const hasErrors = failed > 0;

        const rows = results.map(r => {
            const icon  = r.status === 'sent' ? '&#10003;' : r.status === 'failed' ? '&#10007;' : '&ndash;';
            const color = r.status === 'sent' ? 'green'    : r.status === 'failed' ? 'red'      : 'gray';
            return `<div style="color:${color};font-size:0.88em;">${icon} ${r.label} &mdash; ${r.info}</div>`;
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
        anchor.parentNode.insertBefore(wrapper, anchor);
    }
```

- [ ] **Step 3: Manually verify renderProgress**

In browser console:
```javascript
// simulate a mid-run queue to preview the progress view
const fakeQueue = {
    step: 'send', currentIndex: 1,
    sharedSubject: 'x', sharedBody: 'y',
    groups: [
        { value: 'A', label: 'CS-T01', subject: null, body: null },
        { value: 'B', label: 'CS-T02', subject: null, body: null },
        { value: 'C', label: 'CS-T03', subject: null, body: null }
    ],
    results: [{ label: 'CS-T01', status: 'sent', info: 'Sent' }]
};
// Call renderProgress(fakeQueue) via console after the script loads
// Expected: blue progress bar ~33%, "Group 2 of 3: CS-T02", CS-T01 shown as sent
```

- [ ] **Step 4: Commit**

```bash
git add notificationBatchSend.js
git commit -m "feat: add progress view and completion summary components"
```

---

## Task 6: Start Button Logic + Entry Point

**Files:**
- Modify: `notificationBatchSend.js`

Wires the "Start Batch Send" button to build and save the initial queue, then hands off to the state machine via `location.reload()`. Entry point ties everything together.

- [ ] **Step 1: Add the Start button handler to `injectPanel`**

Inside `injectPanel`, after the `updateStartBtn` function definition, add:

```javascript
        wrapper.querySelector('#giu-start-btn').addEventListener('click', () => {
            const sameMsg      = wrapper.querySelector('#giu-same-msg').checked;
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
```

- [ ] **Step 2: Add the `init` entry point at the bottom of the IIFE**

```javascript
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
```

- [ ] **Step 3: End-to-end manual test**

1. Navigate to `https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx`
2. Confirm Batch Send panel appears above the existing form.
3. Select 2 tutorial groups.
4. Enter a subject and body.
5. Click "Start Batch Send (2 groups)".
6. Watch the page cycle through: group 1 select → students load → send → group 2 select → students load → send → summary.
7. Confirm summary shows both groups as "sent" and portal's `L_SendInfo` message is captured.
8. Click "Dismiss" — panel resets to the Batch Send UI.

- [ ] **Step 4: Test Cancel mid-run**

1. Start a 3-group batch.
2. After first send completes (group 2 loading), click "Cancel".
3. Expected: summary shows group 1 as sent, groups 2 and 3 as cancelled. localStorage cleared.

- [ ] **Step 5: Test per-group message mode**

1. Uncheck "Same message for all groups".
2. Enter different subjects/bodies per group.
3. Start batch. Verify each group's email uses its own subject/body (check sent emails or `T_Subject` value during the send step via console).

- [ ] **Step 6: Commit**

```bash
git add notificationBatchSend.js
git commit -m "feat: wire start button and entry point — batch send end-to-end complete"
```

---

## Self-Review Checklist (completed inline)

**Spec coverage:**
- [x] localStorage queue with select/send/advance/done steps → Tasks 1, 3
- [x] Group list from DDL_Group → Task 2 (`getGroupOptions`)
- [x] Same message for all / per-group override toggle → Task 4
- [x] Progress view with Cancel → Task 5
- [x] Completion summary → Task 5
- [x] Error detection via L_SendInfo → Task 3 (`advance` step, `/error|fail|could not|invalid/i`)
- [x] Missing group value → Task 3 (`select` step, option not found guard)
- [x] Session expired / missing elements → Task 3 (`select` step, `!ddl` guard; `send` step, missing fields guard)
- [x] step written before page reload → Task 3 (explicitly noted in every branch)
- [x] Bootstrap styling → Tasks 4, 5 (uses `btn`, `form-control`, `btn-primary` etc.)

**Type consistency:**
- `queue.groups[i].subject` / `.body` — `null` throughout, not `undefined` or `""`
- `queue.results[i].status` — `"sent" | "failed" | "cancelled"` used consistently in runner (Task 3) and renderers (Task 5)
- `advanceOrDone(queue)` signature consistent: Tasks 3 uses it, no other callers
- `getInjectionAnchor()` used in `injectPanel`, `renderProgress`, `renderSummary` — consistent

**Placeholder scan:** None found.
