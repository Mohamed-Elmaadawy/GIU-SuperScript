# Notification Batch Send — Design Spec
Date: 2026-05-15

## Problem

GIU staff can only send email notifications one tutorial group at a time via
`NotificationSystem_SendEmail_m.aspx`. Sending the same (or similar) message to
multiple groups requires manually repeating the full flow for each group.

## Scope

New Tampermonkey userscript: `notificationBatchSend.js`
Matches: `https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx`
Target users: GIU staff (faculty)

## Architecture

Single-file userscript. Two modes on every page load, determined by localStorage state:

1. **UI mode** — no active queue → inject Batch Send panel, user builds queue and launches it.
2. **Runner mode** — active queue found → read current step, drive the page automatically.

State persists in localStorage key `giuBatchNotifyQueueV1` (JSON).

### Why localStorage queue (not fetch/iframe)

The portal is ASP.NET WebForms. Group selection triggers `__doPostBack`, which is a
full server-side page reload updating `__VIEWSTATE` and the student list. Replaying
this via `fetch()` requires parsing and forwarding ViewState across requests — fragile.
A hidden iframe may be blocked by `X-Frame-Options`. The queue approach uses the
page's own postback flow, so it is maximally reliable.

## Queue State Shape

```json
{
  "step": "select" | "send" | "advance" | "done",
  "currentIndex": 0,
  "sharedSubject": "string",
  "sharedBody": "string",
  "groups": [
    {
      "value": "GRP001",
      "label": "CS-T01",
      "subject": null,
      "body": null
    }
  ],
  "results": [
    { "label": "CS-T01", "status": "sent" | "failed" | "cancelled", "info": "..." }
  ]
}
```

`subject` / `body` per group: `null` means fall back to `sharedSubject` / `sharedBody`.

## State Machine

```
page loads
    │
    ▼
queue present?
    │ no  → render UI panel, exit
    │ yes
    ▼
switch(step)
    ├─ "select"  → set DDL_Group.value = groups[currentIndex].value
    │              trigger __doPostBack("ctl00$MainContent$DDL_Group", "")
    │              (page reloads; server loads student list for group)
    │
    ├─ "send"    → fill #MainContent_T_Subject
    │              fill #MainContent_TA_Body
    │              set step = "advance"  ← written before click so reload lands on "advance"
    │              click #MainContent_B_Send
    │              (page reloads)
    │
    ├─ "advance" → read #MainContent_L_SendInfo text
    │              push result {label, status, info} into results[]
    │              currentIndex++
    │              if currentIndex < groups.length: set step = "select"
    │              else: set step = "done"
    │              if not "done": trigger next select immediately
    │
    └─ "done"    → render completion summary
                   clear localStorage key
```

Step is always written to localStorage **before** any action that causes a page reload,
so a reload can never land in an ambiguous state.

## UI Panel (injected above main form fieldset)

Rendered when no queue is active.

```
┌─ Batch Send ──────────────────────────────────────────────┐
│ Groups:  [✓] CS-T01  [✓] CS-T02  [ ] CS-T03  [Select All] │
│                                                            │
│ [✓] Same message for all groups                           │
│                                                            │
│ Subject: [________________________________]               │
│ Body:    [________________________________]               │
│          [________________________________]               │
│          [________________________________]               │
│                                                            │
│          [ Start Batch Send (2 groups) ]                  │
└────────────────────────────────────────────────────────────┘
```

- Group list populated from `#MainContent_DDL_Group` options (already server-rendered).
- "Same message for all" checked by default.
- When unchecked: each group row expands inline subject + body fields.
- "Start Batch Send" disabled until ≥1 group selected and subject non-empty.

## Progress View (replaces panel while queue is running)

```
┌─ Sending… ─────────────────────────────────────────────────┐
│ ████████░░░░░░░  Group 2 of 5: CS-T02                      │
│ ✓ CS-T01 — sent    ⟳ CS-T02 — in progress                 │
│                       [ Cancel ]                           │
└────────────────────────────────────────────────────────────┘
```

Rendered in runner mode (any step other than "done").

Cancel: sets step = "done", marks remaining groups as "cancelled", clears queue on next load.

## Completion Summary

Shown when step = "done" before clearing localStorage:
- Count of sent / failed / cancelled
- Per-group result rows with portal's own `L_SendInfo` message

## Error Handling

- `#MainContent_L_SendInfo` text checked after each send reload to detect portal-reported errors.
- If DDL_Group does not contain the queued group value (group removed/renamed), mark as failed and advance.
- If page loads without expected elements (wrong URL, session expired), abort and show error.

## Styling

Uses existing portal Bootstrap classes (`btn btn-primary`, `form-control`, `alert`) so
panel blends with portal theme. No external CSS dependencies.

## Files

| File | Purpose |
|------|---------|
| `notificationBatchSend.js` | New userscript (this spec) |
| `uploadGradesGIU.js` | Existing — grade upload, unchanged |
| `GIU Attandance Script.js` | Existing — attendance tracker, unchanged |
