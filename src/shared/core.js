function waitFor(selector, cb, { root = document, timeout = 15000 } = {}) {
            const existing = root.querySelector(selector);
            if (existing) { cb(existing); return () => {}; }
            const obs = new MutationObserver(() => {
                const el = root.querySelector(selector);
                if (el) { obs.disconnect(); cb(el); }
            });
            obs.observe(root.documentElement || root, { childList: true, subtree: true });
            if (timeout) setTimeout(() => obs.disconnect(), timeout);
            return () => obs.disconnect();
        }

function escapeHtml(str) {
            return String(str == null ? '' : str)
                .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }

function injectStyle(id, css) {
            let el = document.getElementById(id);
            if (!el) {
                el = document.createElement('style');
                el.id = id;
                (document.head || document.documentElement).appendChild(el);
            }
            el.textContent = css;
            return el;
        }

function warn(feature, ...args) { console.warn(`[GIU-SS:${feature}]`, ...args); }

module.exports = { waitFor, escapeHtml, injectStyle, warn };
