// ==UserScript==
// @name        GIU Teaching Load
// @description Shows your teaching schedule on the portal home page — today first, rest of the week expandable
// @match       https://portal.giu-uni.de/GIUb/INTStaff/Home.aspx
// @namespace   Cyn0
// @version     1.1.1
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Teaching%20Load.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Teaching%20Load.js
// @icon        data:image/png;base64,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
// @author      Mo.Elmaadawy
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    // ── Selectors / structure — PINNED from the Task 1 captures (real values) ──
    const SEL = {
        nameSelect: '#MainContent_DDL_FromStaff',        // notification.html: single option "Mr. <Full Name>"
        scheduleTable: '#MainContent_schedule',          // rendered grid: row0=period headers, col0=day name
        showScheduleBtn: '#MainContent_B_ShowSchedule',  // submit (postback) that renders the schedule
        staffFieldName: 'ta[]',                          // POST field carrying the selected staff id
        staffContainer: '#teaching_assistants',          // empty div the staff control mounts into
        // window.tas = [{ id, value:<fullName> }, ...] — all 546 staff — is read directly to map name -> id.
    };

    const NOTIFICATION_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx';
    const SCHEDULE_URL = 'https://portal.giu-uni.de/GIUb/INTStaff/SearchAcademicScheduled_001_m.aspx';
    const CACHE_KEY = 'giuTeachingLoadV1';
    // TODO: name cache has no TTL; clear it if a fresh schedule fetch starts failing to find the staff id.
    const NAME_CACHE_KEY = 'giuTeachingLoadNameV1';
    const TTL_MS = 7 * 24 * 60 * 60 * 1000;  // 7d — schedule changes ~once per semester; ⟳ button forces refresh
    const IFRAME_TIMEOUT_MS = 20000;
    const FETCH_TIMEOUT_MS = 15000;
    const HOME_BOOT_DELAY_MS = 800;

    let restExpanded = false; // expandable "rest of week" open state, persisted across re-renders
    let lastRendered = null;  // last view rendered (for re-render after toggle)

    function esc(s) {
        return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    }

    /* BEGIN:COURSE_NAMES */const COURSE_NAMES = {"AD 1001":"Elective - Theme: Smart Architecture","AD 1090":"Advanced Architectural Design Studio II","AD 1099":"Research proposal and Seminar","AD 601":"Architectural Design Studio VI","AD 602":"Architectural Design Working Drawings II","AD 603":"Conservation and Restoration","AD 604":"Housing","AD 605":"Project Management and Building Economics","AE 101":"Introduction to Academic English","ARCH 202":"Design Studio II","ARCH 203":"Descriptive Geometry","ARCH 204":"Architectonics II","ARCH 205":"3D Modeling","ARCH 206":"History II","ARCH 213":"Design Studio IV","ARCH 214":"Theories of Architecture II","ARCH 215":"Ecology and Environmental Design","ARCH 216":"Architectonics IV","ARCH 217":"CAD II","ARCH 218":"Structure II","ARCH 601":"CAD IV","ARCH 609":"Cairo Waterfronts","ARCH 610":"BIM and Beyond : Digital Delivery in Building Technology","ARCH 611":"Pixels & Places: Reimagining Urban Spaces through Gamification and VR","ARCH 613":"Design with Nature: Crafting outdoor Living Spaces","ARCH 700":"Bachelor Thesis","ARCH 802":"Professional Practice:Legislations and Contracts","ARCH 803":"Business Ethics and Workplace Readiness","AS 101":"English for Academic Purposes","BINF 1001":"Advanced Data Management & Mining","BINF 1002":"Digital Innovation and Entrepreneurship","BINF 1003":"Advanced IT Project Management","BINF 1004":"Advanced Research Methodology for BI","BINF 401":"Digital Marketing","BINF 402":"Digital Transformation","BINF 601":"IT Project Management","BINF 602":"Business Intelligence and Analytics","BIOM 601":"Ergonomics","BIOT 801":"Intellectual Property Management and IP Contract Law","BIOT 1001":"Bioethics and Biotechnology","BIOT 1002":"Biosafety","BIOT 1003":"Vaccine and Sera Process Technology","BIOT 1004":"Nutrigenomics","BIOT 1005":"Systems Biology","BIOT 1006":"Master Thesis Preparatory Courses","BIOT 305":"Statistics","BIOT 601":"Bioinformatics","BIOT 602":"Industrial Biotechnology & Bioprocess Technology","BIOT 603":"Downstream Processing","BIOT 700":"Bachelor Thesis","BSAD 406":"Macroeconomics","BSAD 407":"Principles of Corporate Finance","BSAD 408":"Innovation Management","BSAD 409":"Applied Statistics","BSAD 410":"Managing Organizations","BSAD 601":"Company Taxation","BSAD 602":"Information Management","BSAD 603":"Project management","BSAD 604":"Project management","BSAD 700":"Bachelor Thesis","BSAD 701":"Business Simulation","BSDM 601":"Market Research","BSDM 602":"Communication Strategies and Consumer Behavior","BSDM 603":"Product and Distribution Management","BSEN 601":"Managing SMEs","BSEN 602":"Business Management and Entrepreneurship","BSEN 603":"SMEs Production Management and Marketing","BSFA 601":"Financial Markets, Institutions and Investments","BSFA 602":"Financial Analysis and Evaluation","BSFA 603":"Corporate Finance","BSIB 601":"Strategic Management","BSIB 602":"Applied International Sustainability Management","BSIB 603":"International Marketing","BSIN 102":"Programming I for Business Informatics","BSIN 103":"Business Process Management","BSIN 104":"Math II for Business Informatics","BSIN 105":"Programming II for Business Informatics","BSSC 601":"Auditing and Accountability","BSSC 602":"Distribution and Transportation Management","BSSC 603":"Production and Supply Chain Management","BTGN 601":"Research Methodology","BUAD 1001":"Advanced Research Methodology","BUAD 1002":"Industry Global Competitiveness","BUAD 1003":"Advanced Sustainability Management","BUAD 1004":"Current Issues in Marketing","BUAD 1005":"Brand Management","BUAD 1006":"Financial Modeling","BUAD 1007":"Digital Accounting","BUAD 405":"Applied Econometrics","BUAD 406":"Human Resources Management for BI","BUAD 407":"Innovation Management for BI","BUAD 524":"Business Law and Technology Governance","BUAD 618":"Real Estate Finance & Investments","BUAD 619":"Digital Transformation of Real Estate Management","BUAD 620":"Marketing and Sales in Real Estate","BUAD 624":"Financial Derivatives","BUAD 625":"Fixed Income Securities","BUAD 626":"Investment Banking","BUAD 627":"Intermediate Macroeconomics","BUAD 705":"Business Simulation","BUAD 912":"Supply Chain Finance","CNET 101":"Computer Networks","CPS 402":"Communication & Presentation Skills (A2)","CSBA 201":"Computer Science II","CSEN 204":"Computer Science II","CSEN 406":"Software  Engineering","CSIS 101":"Introduction to Computer Science I","CSIS 102":"Theoretical Computer Science","CSIS 201":"Programming II","CSMR 101":"Computer Organization","DE 101":"German 1","DE 202":"German 2","DE 303":"German 3","DE 404":"German 4","DESN 1001":"General Design Project Review","DESN 1002":"Master Thesis Preparatory Courses","DMES 201":"Digital Media Design Essentials","DMES 202":"Digital Storytelling","DMES 203":"Creative Coding","DMES 204":"Basic Typography and Layout","DMES 206":"Basics of 2D Animation","DRAW 101":"Technical Drawing","DSFD 201":"Jewelry Design Workshop I","DSFD 401":"Jewelry Design Workshop III","DSFD 601":"Jewelry Design Workshop V","DSGN 601":"General Studies: Ethic and Law","DSGN 700":"Bachelor Thesis","DSGN 701":"Design Concept","DSTH 101":"Design Theory I (Art & Design History)","ECON 201":"Principles of Economics","ELCT 101":"Electrical Engineering I","ELCT 403":"Electric Machines and Drives","ELEC 1001":"AI-Based Intelligent Control Systems","ELEC 1002":"Power System Operation and Planning","ELEC 1005":"Computational Intelligence","ELEC 905":"Advanced Electrical Energy Systems","ENAU 601":"Automation/Control Engineering Project","ENAU 602":"Computer-Controlled Systems","ENAU 603":"Special Electric Machines","ENEP 601":"Electric Power Systems Project","ENEP 602":"Electric Power Systems II","ENEP 604":"Power Electronics II","ENGN 1001":"Smart Sensors and Actuators","ENGN 109":"Engineering Design I","ENGN 1099":"Master Thesis Preparatory Project","ENGN 401":"Electronics II","ENGN 415":"Microcontroller","ENGN 601":"Introduction to AI","ENGN 700":"Bachelor Thesis","ENGN 701":"Research Methodology","ENME 405":"Mechanics II","ENME 406":"Mechanics of materials","ENME 407":"Classic Control Engineering","ENME 408":"Control System Lab","ENME 601":"Mechatronics Engineering Project","ENMF 601":"Quality Control","ENMF 602":"Production Operations Management","ENMR 601":"Vehicle Dynamics","ENMR 602":"Signal and Image Processing","ENMR 603":"Vehicle Powertrain","ENMR 604":"Fluid Mechanics and Thermodynamics","ENRB 601":"Industrial Robots","ENRB 602":"Parallel Kinematics & Kinetics","ENRB 603":"Industrial Automation & PLC Programming","ENRB 604":"Facility Design","FAPR 406":"Design Short Term Project I","FASD 405":"Main Collection Project I (Concept, Prototyping)","FASD 407":"Fashion Technology III: CAD/Fashion II, Portfolio, Technical Drawing","FASD 408":"CAD-Pattern I, 3D Prototyping","FASD 601":"Fashion Management and Marketing","FASD 602":"Design Short Term Project II","FASD 603":"Main Collection Project III","FDDS 101":"Design Basics I (Fashion Design)","FDFT 101":"Fashion Technology I","FINA 201":"Financial Accounting II","FJDS 1001":"Design Project- FD","HRMG 101":"Human Resources Management","HUMA 801":"Business Ethics","IA 1001":"Elective - Theme: Smart Interior Architecture","IA 1090":"Advanced Interior Architecture Studio II","IA 1099":"Research proposal and Seminar","IA 601":"Interior Architecture Studio VI","IA 602":"Interior Architecture Working Drawings II","IA 603":"Furniture Design","IA 604":"Light Design","IA 605":"Project Management and Interior Design Economics","ICS 602":"Big Data and NoSQL","ICS 603":"Advanced Machine Learning","ICS 604":"Introduction to Image Processing and Computer Vision","ICS 605":"Network Security","ICS 606":"Business Continuity and Risk Management","ICS 607":"Ethical Hacking and Penetration Testing","ICS 608":"Software Cloud Computing","ICS 609":"Software Mobile Development","ICS 610":"Software Project II","ICS 611":"3D Design","ICS 612":"Mobile Development","ICS 613":"Media Informatics Project","IDDS 101":"Design Basics I (Industrial Design)","IDDS 201":"Design Basics II (Industrial Design)","IDDS 403":"Design Main Project I: Design, Presentation & Documentation","IDDS 405":"Material/Sustainable Manufacturing","IDDS 406":"CAD 3D Modeling","IDDS 601":"Universal Design Thinking and Intercultural Competence","IDDS 602":"Design Short Term Project II","IDDS 603":"Design Main Project III: Business Management","IDES 1001":"Design Project- ID","IDPR 404":"Design Short Term Project I","INCS 1001":"Seminar - Selected Major-specific Topics","INCS 1002":"Research Project II","INCS 1003":"Analytics in the Cloud","INCS 1004":"Statistical Modeling for Data Science Applications","INCS 1005":"Social-Legal & Ethical issues in IT Security","INCS 1006":"Secure Systems Engineering","INCS 1007":"Software Game Development","INCS 1008":"Software Engineering Studio","INCS 1009":"Advanced Game Development and AI in Gaming","INCS 1010":"Digital Video and Sound Processing","INCS 402":"Analysis & Design of Algorithms","INCS 406":"Distributed &Web-based Systems","INCS 407":"Information Security","INCS 408":"Introduction to Data Science","INCS 409":"Introduction to Media Informatics","INCS 410":"Cloud Computing","INCS 614":"Cybersecurity","INCS 615":"Big Data and NoSQL","INCS 616":"Business Continuity and Risk Management","INCS 617":"Software Engineering","INCS 700":"Bachelor Thesis","INCS 902":"Research Project I","INGN 601":"Research Methodology","LAWS 101":"Introduction to Law","MATH 101":"Mathematics & Statistics I","MATH 103":"Mathematics I","MATH 108":"Math I for Business Informatics","MATH 109":"Mathematics I","MATH 203":"Mathematics II","MATH 204":"Mathematics II","MATH 205":"Mathematics II Business & Economics","MATH 302":"Mathematics II","MATH 401":"Biostatistics","MATH 403":"Mathematics IV","MECH 1001":"Automotive Electronics","MECH 1002":"Industrial Robots II","MECH 1003":"Robotics in manufacturing","MECH 1005":"Manufacturing Ergonomics","MECH 613":"CAD/CAM/CAE in Mechanical Engineering","MECH 907":"Autonomous Vehicle Systems","MGMT 401":"Introduction to Management and Economics","NETW 401":"Signals and Systems","NETW 402":"Modelling & Simulation of dynamic systems","PHEN 1001":"Sustainability and Environmental Impact in the Pharmaceutical Industry","PHEN 1002":"Quality by Design and Advanced Quality Management","PHEN 1007":"Special Topics in Pharmaceutical Engineering II","PHEN 1099":"Master Thesis Preparatory Project","PHEN 303":"Fundamentals of Electrical Engineering","PHEN 401":"Fluid Mechanics","PHEN 402":"Chemical Reaction Engineering","PHEN 403":"Introduction to Process Engineering","PHEN 405":"Sensors,Metrology and Instrumentation Systems","PHEN 601":"Pharmaceutical Process Validation","PHEN 602":"Industrial Automation & PLC Programming","PHEN 603":"Water & Air Systems","PHEN 604":"Digitalization in Pharmaceutical Industry","PHEN 605":"Industrial Planning & Project Management","PHEN 606":"Pharmaceutical Processing Technology II","PHEN 608":"Cosmetics Technology","PHEN 700":"Bachelor Thesis","PHGN 601":"Research Methodology","PHTH 213":"Anatomy II","PHTH 214":"Physiology II","PHTH 217":"Tests & Measurements I","PHTH 218":"Ethics & Law","PHTH 219":"kinesiology","PHTH 221":"First Aid in Hygienic Issue for PT","PHTH 222":"Psychology and Therapeutic Communication","PHTH 401":"Neuroanatomy","PHTH 402":"Neurophysiology","PHTH 403":"Biomechanics II","PHTH 404":"Therapeutic exercise II","PHTH 405":"Electrotherapy II","PHTH 406":"Hydrotherapy","PHTH 408":"Exercise physiology","PHYS 101":"Physics","PHYS 102":"Physics Lab","PTOR 601":"Traumatology","PTOR 602":"Physical Therapy for Traumatology","PTOR 603":"Orthopedic diseases and Surgeries","PTOR 604":"Physical Therapy for Orthopedic diseases and Surgeries","PTOR 605":"Physical Therapy for Sport Injury","PTSR 601":"General Surgery & Oncology","PTSR 602":"Physical Therapy for General Surgery & Oncology","RPW 401":"Research Paper Writing (A2)","SM 101":"Scientific Methods"};/* END:COURSE_NAMES */

    // Replace the leading course code in a tutorial label ("INCS 406 - 4INF20 (Practical)")
    // with the full course name, keeping the group/section suffix. Unknown codes pass through.
    function displayTutorial(tutorial) {
        const parts = String(tutorial).split(' - ');
        const code = parts[0].trim();
        const name = COURSE_NAMES[code];
        if (!name || parts.length < 2) return tutorial;
        return [name, ...parts.slice(1)].join(' - ');
    }

    function injectStyles() {
        if (document.getElementById('gius-tl-style')) return;
        const css = `
            .gius-tl-widget{font-family:inherit;display:block;width:100%;box-sizing:border-box;
                margin:28px 0;border-radius:12px;padding:16px 18px;
                background:#ffffff;color:#1e1e2e;box-shadow:0 2px 10px rgba(0,0,0,.12);}
            .gius-tl-widget *{box-sizing:border-box;}
            .gius-tl-head{font-weight:700;font-size:16px;margin-bottom:12px;}
            .gius-tl-refresh{float:right;border:none;background:transparent;cursor:pointer;
                font-size:15px;line-height:1;color:inherit;opacity:.55;padding:2px 4px;}
            .gius-tl-refresh:hover{opacity:1;}
            .gius-tl-refresh:disabled{opacity:.3;cursor:wait;}
            .gius-tl-stale{color:#b8860b;font-weight:600;font-size:12px;}
            .gius-tl-today{background:#f8f9fa;border:1px solid #e9ecef;border-left:4px solid #ffc107;
                border-radius:12px;padding:14px;margin-bottom:14px;}
            .gius-tl-today-head{font-size:13px;font-weight:700;color:#272c33;
                text-transform:uppercase;letter-spacing:.03em;margin-bottom:10px;}
            .gius-tl-card{background:#ffffff;border-radius:10px;padding:12px 16px;
                box-shadow:0 1px 4px rgba(0,0,0,.08);}
            .gius-tl-card + .gius-tl-card{margin-top:10px;}
            .gius-tl-items{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;}
            .gius-tl-item{flex:1 1 180px;min-width:150px;background:#f5f5fa;border-radius:8px;padding:10px 12px;}
            .gius-tl-slot{display:inline-block;font-size:13px;font-weight:800;letter-spacing:.02em;
                color:#7a5b00;background:#fff3cd;border-radius:6px;padding:3px 9px;margin-bottom:7px;}
            .gius-tl-tutorial{font-size:14px;font-weight:600;line-height:1.3;margin-bottom:7px;color:#3a3f47;}
            .gius-tl-loc{display:inline-flex;align-items:center;gap:5px;font-size:16px;font-weight:800;color:#9a6b00;}
            .gius-tl-loc svg{width:16px;height:16px;flex:0 0 auto;}
            .gius-tl-toggle{margin-top:6px;font-size:13px;font-weight:700;background:transparent;border:none;
                color:#272c33;cursor:pointer;padding:4px 0;}
            .gius-tl-toggle::before{content:"▸";display:inline-block;margin-right:6px;
                transition:transform .3s ease-out;}
            .gius-tl-toggle-open::before{transform:rotate(90deg);}
            .gius-tl-expand-wrapper{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease-out;}
            .gius-tl-expand-wrapper.gius-tl-expanded{grid-template-rows:1fr;}
            .gius-tl-expand-inner{overflow:hidden;}
            .gius-tl-day{margin-top:10px;}
            .gius-tl-day-head{font-size:13px;font-weight:700;margin:8px 0 4px;}
            .gius-tl-row{background:#f5f5fa;border-radius:8px;padding:10px 12px;}
            .gius-tl-row + .gius-tl-row{margin-top:6px;}
            .gius-tl-empty{font-size:13px;opacity:.85;padding:6px 0;}

            /* Dark mode — reacts to GIU Dark Mode (html.gius-dark, Catppuccin Mocha). */
            html.gius-dark .gius-tl-widget{background:#1e1e2e;color:#cdd6f4;box-shadow:0 2px 10px rgba(0,0,0,.45);}
            html.gius-dark .gius-tl-today{background:#181825;border-color:#313244;border-left-color:#f9e2af;}
            html.gius-dark .gius-tl-today-head{color:#cdd6f4;}
            html.gius-dark .gius-tl-card{background:#11111b;box-shadow:none;}
            html.gius-dark .gius-tl-slot{color:#f9e2af;background:#2a2410;}
            html.gius-dark .gius-tl-tutorial{color:#bac2de;}
            html.gius-dark .gius-tl-loc{color:#f9e2af;}
            html.gius-dark .gius-tl-item{background:#181825;}
            html.gius-dark .gius-tl-day-head{color:#cdd6f4;}
            html.gius-dark .gius-tl-toggle{color:#cdd6f4;}
            html.gius-dark .gius-tl-stale{color:#f9e2af;}`;
        const style = document.createElement('style');
        style.id = 'gius-tl-style';
        style.textContent = css;
        document.head.appendChild(style);
    }

    // Strip an honorific title ("Mr.", "Miss.", "Dr.", "Prof.", etc.) and collapse whitespace.
    function parseFullName(raw) {
        return String(raw)
            .replace(/^\s*(mr|mrs|miss|ms|dr|prof|eng)\.?\s+/i, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function readNameFromDoc(doc) {
        const sel = doc.querySelector(SEL.nameSelect);
        if (!sel) return '';
        // Prefer the selected option; fall back to the first non-placeholder option.
        const opts = Array.from(sel.options || []);
        const opt = opts.find(o => o.selected && o.value) || opts.find(o => o.text && o.value) || opts[0];
        return opt ? parseFullName(opt.text) : '';
    }

    async function fetchFullName() {
        const cached = (() => { try { return localStorage.getItem(NAME_CACHE_KEY) || ''; } catch { return ''; } })();
        if (cached) return cached;
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
        try {
            const resp = await fetch(NOTIFICATION_URL, { credentials: 'include', signal: ctrl.signal });
            if (!resp.ok) throw new Error('HTTP ' + resp.status);
            const doc = new DOMParser().parseFromString(await resp.text(), 'text/html');
            const name = readNameFromDoc(doc);
            if (!name) throw new Error('name-not-found');
            try { localStorage.setItem(NAME_CACHE_KEY, name); } catch { /* quota */ }
            return name;
        } finally {
            clearTimeout(timer);
        }
    }

    // Teaching week order (GIU runs Saturday→Thursday; Friday is the weekend).
    const WEEK = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    function todayWeekdayName() {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
    }

    // Clean a period header like "1st First" / "2nd Second" down to "1st" / "2nd".
    function periodLabel(raw) {
        const m = String(raw).trim().match(/^(\d+)\s*(st|nd|rd|th)/i);
        return m ? (m[1] + m[2].toLowerCase()) : String(raw).replace(/\s+/g, ' ').trim();
    }

    // Read the <dd> text following the <dt> whose label matches (e.g. "Group", "Location").
    function ddByLabel(slotEl, label) {
        const dts = slotEl.querySelectorAll('dt');
        for (const dt of dts) {
            if (dt.textContent.trim().toLowerCase() === label.toLowerCase()) {
                const dd = dt.nextElementSibling;
                if (dd && dd.tagName === 'DD') return dd.textContent.replace(/\s+/g, ' ').trim();
            }
        }
        return '';
    }

    // Transposed grid parser: row0 = period headers (col0 blank); each later row = a day
    // (col0 = day name); each populated cell holds one or more `.slot` divs.
    function parseScheduleDoc(doc) {
        const table = doc.querySelector(SEL.scheduleTable);
        if (!table || !table.rows || table.rows.length < 2) return [];
        const header = Array.from(table.rows[0].cells).map(c => periodLabel(c.textContent));
        const out = [];
        for (let r = 1; r < table.rows.length; r++) {
            const cells = table.rows[r].cells;
            if (!cells.length) continue;
            const day = cells[0].textContent.replace(/\s+/g, ' ').trim();
            if (!WEEK.includes(day)) continue;
            for (let c = 1; c < cells.length; c++) {
                const slotEls = cells[c].querySelectorAll('.slot');
                for (const slotEl of slotEls) {
                    const tutorial = ddByLabel(slotEl, 'Group');
                    const location = ddByLabel(slotEl, 'Location');
                    if (!tutorial && !location) continue;
                    out.push({ day, slot: header[c] || String(c), tutorial, location });
                }
            }
        }
        return out;
    }

    // Split into today's sessions + the full week's sessions grouped by day
    // (the rest list covers every teaching day so the whole schedule is visible).
    function splitByDay(sessions, todayName) {
        const today = todayName || todayWeekdayName();
        const todaySessions = sessions.filter(s => s.day === today);
        const rest = [];
        for (let i = 0; i < WEEK.length; i++) {
            const day = WEEK[i];
            const daySessions = sessions.filter(s => s.day === day);
            if (daySessions.length) rest.push({ day, sessions: daySessions });
        }
        return { today: todaySessions, rest };
    }

    function saveCache(sessions) {
        const payload = { fetchedAt: Date.now(), sessions };
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(payload)); } catch { /* quota */ }
    }

    function loadCache() {
        try {
            const raw = JSON.parse(localStorage.getItem(CACHE_KEY));
            if (!raw || !Array.isArray(raw.sessions)) return null;
            return raw;
        } catch { return null; }
    }

    function isStale(fetchedAt) {
        return !fetchedAt || (Date.now() - fetchedAt) > TTL_MS;
    }

    // Look up a staff id by full name in the page's `tas` array (read from the iframe window).
    function findStaffId(win, fullName) {
        const tas = win.tas;
        if (!Array.isArray(tas)) return null;
        const norm = s => String(s).replace(/\s+/g, ' ').trim().toLowerCase();
        const want = norm(fullName);
        const m = tas.find(x => norm(x.value) === want)
            || tas.find(x => norm(x.value).includes(want))
            || tas.find(x => want.includes(norm(x.value)));
        return m ? m.id : null;
    }

    // Inject the staff id as the `ta[]` form field the server expects, then submit.
    function submitStaff(win, staffId) {
        const doc = win.document;
        const btn = doc.querySelector(SEL.showScheduleBtn);
        if (!btn) return false;
        const form = btn.form || doc.forms[0];
        if (!form) return false;
        let inp = form.querySelector('input[name="' + SEL.staffFieldName + '"]');
        if (!inp) {
            inp = doc.createElement('input');
            inp.type = 'hidden';
            inp.name = SEL.staffFieldName;
            (doc.querySelector(SEL.staffContainer) || form).appendChild(inp);
        }
        inp.value = staffId;
        btn.click();
        return true;
    }

    function fetchScheduleViaIframe(fullName, timeoutMs) {
        const limit = timeoutMs || IFRAME_TIMEOUT_MS;
        return new Promise((resolve, reject) => {
            const iframe = document.createElement('iframe');
            iframe.setAttribute('data-gius-tl', '1');
            iframe.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:0;height:0;border:0;';
            iframe.src = SCHEDULE_URL;

            let done = false, submitted = false;
            const started = Date.now();
            const cleanup = () => { try { iframe.remove(); } catch {} };
            const finish = (fn, arg) => { if (done) return; done = true; clearInterval(poll); cleanup(); fn(arg); };

            const poll = setInterval(() => {
                if (Date.now() - started > limit) { finish(reject, new Error('teaching-load-iframe-timeout')); return; }
                let win;
                try { win = iframe.contentWindow; if (!win || !win.document) return; } catch { return; }
                // If a populated schedule is already present, parse and resolve.
                const sessions = parseScheduleDoc(win.document);
                if (sessions.length) { finish(resolve, sessions); return; }
                // Otherwise, once `tas` is available, submit our staff id exactly once.
                if (!submitted) {
                    const id = findStaffId(win, fullName);
                    if (id) { try { if (submitStaff(win, id)) submitted = true; } catch { /* retry next tick */ } }
                }
            }, 300);

            iframe.addEventListener('error', () => finish(reject, new Error('teaching-load-iframe-error')));
            document.body.appendChild(iframe);
        });
    }

    function ensureHost() {
        let host = document.getElementById('gius-tl-widget');
        if (!host) {
            host = document.createElement('div');
            host.id = 'gius-tl-widget';
            host.className = 'gius-tl-widget';
        }
        // Placement: TOP of Home — directly after the Target List block, before other widgets.
        const target = document.getElementById('MainContent_div_grid');
        if (target) {
            if (target.nextElementSibling !== host) target.insertAdjacentElement('afterend', host);
        } else {
            const fb = document.querySelector('.page-content') ||
                document.querySelector('[id*=MainContent]') || document.body;
            if (fb.firstElementChild !== host) fb.prepend(host);
        }
        return host;
    }

    // One session line inside a day card.
    function sessionLineHTML(s) {
        return `<div class="gius-tl-item">
            <div class="gius-tl-slot">${esc(s.slot)}</div>
            <div class="gius-tl-tutorial">${esc(displayTutorial(s.tutorial))}</div>
            ${s.location ? `<div class="gius-tl-loc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z"/><circle cx="12" cy="11" r="2"/></svg>${esc(s.location)}</div>` : ''}
        </div>`;
    }
    // One card holding every session for a single day (header + side-by-side items).
    function dayCardHTML(label, sessions) {
        return `<div class="gius-tl-card">
            <div class="gius-tl-day-head">${esc(label)}</div>
            <div class="gius-tl-items">${sessions.map(sessionLineHTML).join('')}</div>
        </div>`;
    }

    function renderView(view, opts) {
        if (!opts) opts = {};
        lastRendered = view;
        const host = ensureHost();
        const todayHTML = view.today.length
            ? `<div class="gius-tl-items">${view.today.map(sessionLineHTML).join('')}</div>`
            : `<div class="gius-tl-empty">No teaching sessions today.</div>`;

        const restCount = view.rest.reduce((n, d) => n + d.sessions.length, 0);
        const restHTML = view.rest.length ? `
            <button type="button" class="gius-tl-toggle${restExpanded ? ' gius-tl-toggle-open' : ''}"
                aria-expanded="${restExpanded}" aria-controls="gius-tl-rest">All sessions (${restCount})</button>
            <div id="gius-tl-rest" class="gius-tl-expand-wrapper${restExpanded ? ' gius-tl-expanded' : ''}">
                <div class="gius-tl-expand-inner">
                    ${view.rest.map(d => dayCardHTML(d.day, d.sessions)).join('')}
                </div>
            </div>` : '';

        host.innerHTML = `<div class="gius-tl-head">Teaching Load${opts.stale ? ' · <span class="gius-tl-stale">offline cache</span>' : ''}
                <button type="button" class="gius-tl-refresh" title="Refresh schedule (cached up to 7 days)">⟳</button></div>
            <div class="gius-tl-today">
                <div class="gius-tl-today-head">Today</div>
                ${todayHTML}
            </div>
            ${restHTML}`;

        const toggle = host.querySelector('.gius-tl-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                const el = host.querySelector('#gius-tl-rest');
                const open = el.classList.toggle('gius-tl-expanded');
                toggle.classList.toggle('gius-tl-toggle-open', open);
                toggle.setAttribute('aria-expanded', String(open));
                restExpanded = open;
            });
        }

        const refreshBtn = host.querySelector('.gius-tl-refresh');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', async () => {
                refreshBtn.disabled = true;
                try {
                    const name = await fetchFullName();
                    const sessions = await fetchScheduleViaIframe(name);
                    saveCache(sessions);
                    renderFromSessions(sessions);
                } catch {
                    refreshBtn.disabled = false; // fetch failed; keep current render
                }
            });
        }
    }

    function showError(host) {
        host.innerHTML = `<div class="gius-tl-head">Teaching Load</div>
            <div class="gius-tl-empty">Couldn't load schedule.
                <button type="button" id="gius-tl-retry" class="gius-tl-toggle">Retry</button></div>`;
        const btn = host.querySelector('#gius-tl-retry');
        if (btn) btn.addEventListener('click', boot);
    }

    function renderFromSessions(sessions, opts) {
        const view = splitByDay(sessions);
        renderView(view, opts);
    }

    async function boot() {
        injectStyles();
        const cache = loadCache();
        const fresh = !!(cache && !isStale(cache.fetchedAt));
        if (cache) renderFromSessions(cache.sessions, { stale: !fresh });
        // Fresh cache: skip the schedule iframe entirely — it costs two full
        // page loads (initial + postback) inside a hidden frame.
        if (fresh) return;
        try {
            const name = await fetchFullName();
            const sessions = await fetchScheduleViaIframe(name);
            saveCache(sessions);
            renderFromSessions(sessions);
        } catch {
            if (!cache) showError(ensureHost());
            // else: keep the stale cache already painted above.
        }
    }

    setTimeout(boot, HOME_BOOT_DELAY_MS);

    // ── test hook (extended as functions are added) ──
    window.__giuTeachingLoad = {
        SEL, parseFullName, readNameFromDoc, fetchFullName,
        parseScheduleDoc, splitByDay, todayWeekdayName, WEEK, displayTutorial,
        saveCache, loadCache, isStale,
        fetchScheduleViaIframe, findStaffId, submitStaff,
        renderView, ensureHost,
        renderFromSessions, boot,
        _renderView: renderView,
        _rerender: () => { if (lastRendered) renderView(lastRendered); },
    };
})();
