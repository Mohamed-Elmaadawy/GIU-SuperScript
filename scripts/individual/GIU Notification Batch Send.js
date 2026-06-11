// ==UserScript==
// @name        GIU Notification Batch Send
// @description Send emails to multiple tutorial groups at once on the GIU portal
// @match       https://portal.giu-uni.de/GIUb/INTStaff/NotificationSystem_SendEmail_m.aspx
// @namespace   Cyn0
// @version     1.4
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Notification%20Batch%20Send.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Notification%20Batch%20Send.js
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

    function extractCourseCode(label) {
        const parts = label.split(' - ');
        return parts.length >= 2 ? parts[1].trim() : null;
    }

    /* BEGIN:COURSE_NAMES */const COURSE_NAMES = {"AD 1001":"Elective - Theme: Smart Architecture","AD 1090":"Advanced Architectural Design Studio II","AD 1099":"Research proposal and Seminar","AD 601":"Architectural Design Studio VI","AD 602":"Architectural Design Working Drawings II","AD 603":"Conservation and Restoration","AD 604":"Housing","AD 605":"Project Management and Building Economics","AE 101":"Introduction to Academic English","ARCH 202":"Design Studio II","ARCH 203":"Descriptive Geometry","ARCH 204":"Architectonics II","ARCH 205":"3D Modeling","ARCH 206":"History II","ARCH 213":"Design Studio IV","ARCH 214":"Theories of Architecture II","ARCH 215":"Ecology and Environmental Design","ARCH 216":"Architectonics IV","ARCH 217":"CAD II","ARCH 218":"Structure II","ARCH 601":"CAD IV","ARCH 609":"Cairo Waterfronts","ARCH 610":"BIM and Beyond : Digital Delivery in Building Technology","ARCH 611":"Pixels & Places: Reimagining Urban Spaces through Gamification and VR","ARCH 613":"Design with Nature: Crafting outdoor Living Spaces","ARCH 700":"Bachelor Thesis","ARCH 802":"Professional Practice:Legislations and Contracts","ARCH 803":"Business Ethics and Workplace Readiness","AS 101":"English for Academic Purposes","BINF 1001":"Advanced Data Management & Mining","BINF 1002":"Digital Innovation and Entrepreneurship","BINF 1003":"Advanced IT Project Management","BINF 1004":"Advanced Research Methodology for BI","BINF 401":"Digital Marketing","BINF 402":"Digital Transformation","BINF 601":"IT Project Management","BINF 602":"Business Intelligence and Analytics","BIOM 601":"Ergonomics","BIOT 801":"Intellectual Property Management and IP Contract Law","BIOT 1001":"Bioethics and Biotechnology","BIOT 1002":"Biosafety","BIOT 1003":"Vaccine and Sera Process Technology","BIOT 1004":"Nutrigenomics","BIOT 1005":"Systems Biology","BIOT 1006":"Master Thesis Preparatory Courses","BIOT 305":"Statistics","BIOT 601":"Bioinformatics","BIOT 602":"Industrial Biotechnology & Bioprocess Technology","BIOT 603":"Downstream Processing","BIOT 700":"Bachelor Thesis","BSAD 406":"Macroeconomics","BSAD 407":"Principles of Corporate Finance","BSAD 408":"Innovation Management","BSAD 409":"Applied Statistics","BSAD 410":"Managing Organizations","BSAD 601":"Company Taxation","BSAD 602":"Information Management","BSAD 603":"Project management","BSAD 604":"Project management","BSAD 700":"Bachelor Thesis","BSAD 701":"Business Simulation","BSDM 601":"Market Research","BSDM 602":"Communication Strategies and Consumer Behavior","BSDM 603":"Product and Distribution Management","BSEN 601":"Managing SMEs","BSEN 602":"Business Management and Entrepreneurship","BSEN 603":"SMEs Production Management and Marketing","BSFA 601":"Financial Markets, Institutions and Investments","BSFA 602":"Financial Analysis and Evaluation","BSFA 603":"Corporate Finance","BSIB 601":"Strategic Management","BSIB 602":"Applied International Sustainability Management","BSIB 603":"International Marketing","BSIN 102":"Programming I for Business Informatics","BSIN 103":"Business Process Management","BSIN 104":"Math II for Business Informatics","BSIN 105":"Programming II for Business Informatics","BSSC 601":"Auditing and Accountability","BSSC 602":"Distribution and Transportation Management","BSSC 603":"Production and Supply Chain Management","BTGN 601":"Research Methodology","BUAD 1001":"Advanced Research Methodology","BUAD 1002":"Industry Global Competitiveness","BUAD 1003":"Advanced Sustainability Management","BUAD 1004":"Current Issues in Marketing","BUAD 1005":"Brand Management","BUAD 1006":"Financial Modeling","BUAD 1007":"Digital Accounting","BUAD 405":"Applied Econometrics","BUAD 406":"Human Resources Management for BI","BUAD 407":"Innovation Management for BI","BUAD 524":"Business Law and Technology Governance","BUAD 618":"Real Estate Finance & Investments","BUAD 619":"Digital Transformation of Real Estate Management","BUAD 620":"Marketing and Sales in Real Estate","BUAD 624":"Financial Derivatives","BUAD 625":"Fixed Income Securities","BUAD 626":"Investment Banking","BUAD 627":"Intermediate Macroeconomics","BUAD 705":"Business Simulation","BUAD 912":"Supply Chain Finance","CNET 101":"Computer Networks","CPS 402":"Communication & Presentation Skills (A2)","CSBA 201":"Computer Science II","CSEN 204":"Computer Science II","CSEN 406":"Software  Engineering","CSIS 101":"Introduction to Computer Science I","CSIS 102":"Theoretical Computer Science","CSIS 201":"Programming II","CSMR 101":"Computer Organization","DE 101":"German 1","DE 202":"German 2","DE 303":"German 3","DE 404":"German 4","DESN 1001":"General Design Project Review","DESN 1002":"Master Thesis Preparatory Courses","DMES 201":"Digital Media Design Essentials","DMES 202":"Digital Storytelling","DMES 203":"Creative Coding","DMES 204":"Basic Typography and Layout","DMES 206":"Basics of 2D Animation","DRAW 101":"Technical Drawing","DSFD 201":"Jewelry Design Workshop I","DSFD 401":"Jewelry Design Workshop III","DSFD 601":"Jewelry Design Workshop V","DSGN 601":"General Studies: Ethic and Law","DSGN 700":"Bachelor Thesis","DSGN 701":"Design Concept","DSTH 101":"Design Theory I (Art & Design History)","ECON 201":"Principles of Economics","ELCT 101":"Electrical Engineering I","ELCT 403":"Electric Machines and Drives","ELEC 1001":"AI-Based Intelligent Control Systems","ELEC 1002":"Power System Operation and Planning","ELEC 1005":"Computational Intelligence","ELEC 905":"Advanced Electrical Energy Systems","ENAU 601":"Automation/Control Engineering Project","ENAU 602":"Computer-Controlled Systems","ENAU 603":"Special Electric Machines","ENEP 601":"Electric Power Systems Project","ENEP 602":"Electric Power Systems II","ENEP 604":"Power Electronics II","ENGN 1001":"Smart Sensors and Actuators","ENGN 109":"Engineering Design I","ENGN 1099":"Master Thesis Preparatory Project","ENGN 401":"Electronics II","ENGN 415":"Microcontroller","ENGN 601":"Introduction to AI","ENGN 700":"Bachelor Thesis","ENGN 701":"Research Methodology","ENME 405":"Mechanics II","ENME 406":"Mechanics of materials","ENME 407":"Classic Control Engineering","ENME 408":"Control System Lab","ENME 601":"Mechatronics Engineering Project","ENMF 601":"Quality Control","ENMF 602":"Production Operations Management","ENMR 601":"Vehicle Dynamics","ENMR 602":"Signal and Image Processing","ENMR 603":"Vehicle Powertrain","ENMR 604":"Fluid Mechanics and Thermodynamics","ENRB 601":"Industrial Robots","ENRB 602":"Parallel Kinematics & Kinetics","ENRB 603":"Industrial Automation & PLC Programming","ENRB 604":"Facility Design","FAPR 406":"Design Short Term Project I","FASD 405":"Main Collection Project I (Concept, Prototyping)","FASD 407":"Fashion Technology III: CAD/Fashion II, Portfolio, Technical Drawing","FASD 408":"CAD-Pattern I, 3D Prototyping","FASD 601":"Fashion Management and Marketing","FASD 602":"Design Short Term Project II","FASD 603":"Main Collection Project III","FDDS 101":"Design Basics I (Fashion Design)","FDFT 101":"Fashion Technology I","FINA 201":"Financial Accounting II","FJDS 1001":"Design Project- FD","HRMG 101":"Human Resources Management","HUMA 801":"Business Ethics","IA 1001":"Elective - Theme: Smart Interior Architecture","IA 1090":"Advanced Interior Architecture Studio II","IA 1099":"Research proposal and Seminar","IA 601":"Interior Architecture Studio VI","IA 602":"Interior Architecture Working Drawings II","IA 603":"Furniture Design","IA 604":"Light Design","IA 605":"Project Management and Interior Design Economics","ICS 602":"Big Data and NoSQL","ICS 603":"Advanced Machine Learning","ICS 604":"Introduction to Image Processing and Computer Vision","ICS 605":"Network Security","ICS 606":"Business Continuity and Risk Management","ICS 607":"Ethical Hacking and Penetration Testing","ICS 608":"Software Cloud Computing","ICS 609":"Software Mobile Development","ICS 610":"Software Project II","ICS 611":"3D Design","ICS 612":"Mobile Development","ICS 613":"Media Informatics Project","IDDS 101":"Design Basics I (Industrial Design)","IDDS 201":"Design Basics II (Industrial Design)","IDDS 403":"Design Main Project I: Design, Presentation & Documentation","IDDS 405":"Material/Sustainable Manufacturing","IDDS 406":"CAD 3D Modeling","IDDS 601":"Universal Design Thinking and Intercultural Competence","IDDS 602":"Design Short Term Project II","IDDS 603":"Design Main Project III: Business Management","IDES 1001":"Design Project- ID","IDPR 404":"Design Short Term Project I","INCS 1001":"Seminar - Selected Major-specific Topics","INCS 1002":"Research Project II","INCS 1003":"Analytics in the Cloud","INCS 1004":"Statistical Modeling for Data Science Applications","INCS 1005":"Social-Legal & Ethical issues in IT Security","INCS 1006":"Secure Systems Engineering","INCS 1007":"Software Game Development","INCS 1008":"Software Engineering Studio","INCS 1009":"Advanced Game Development and AI in Gaming","INCS 1010":"Digital Video and Sound Processing","INCS 402":"Analysis & Design of Algorithms","INCS 406":"Distributed &Web-based Systems","INCS 407":"Information Security","INCS 408":"Introduction to Data Science","INCS 409":"Introduction to Media Informatics","INCS 410":"Cloud Computing","INCS 614":"Cybersecurity","INCS 615":"Big Data and NoSQL","INCS 616":"Business Continuity and Risk Management","INCS 617":"Software Engineering","INCS 700":"Bachelor Thesis","INCS 902":"Research Project I","INGN 601":"Research Methodology","LAWS 101":"Introduction to Law","MATH 101":"Mathematics & Statistics I","MATH 103":"Mathematics I","MATH 108":"Math I for Business Informatics","MATH 109":"Mathematics I","MATH 203":"Mathematics II","MATH 204":"Mathematics II","MATH 205":"Mathematics II Business & Economics","MATH 302":"Mathematics II","MATH 401":"Biostatistics","MATH 403":"Mathematics IV","MECH 1001":"Automotive Electronics","MECH 1002":"Industrial Robots II","MECH 1003":"Robotics in manufacturing","MECH 1005":"Manufacturing Ergonomics","MECH 613":"CAD/CAM/CAE in Mechanical Engineering","MECH 907":"Autonomous Vehicle Systems","MGMT 401":"Introduction to Management and Economics","NETW 401":"Signals and Systems","NETW 402":"Modelling & Simulation of dynamic systems","PHEN 1001":"Sustainability and Environmental Impact in the Pharmaceutical Industry","PHEN 1002":"Quality by Design and Advanced Quality Management","PHEN 1007":"Special Topics in Pharmaceutical Engineering II","PHEN 1099":"Master Thesis Preparatory Project","PHEN 303":"Fundamentals of Electrical Engineering","PHEN 401":"Fluid Mechanics","PHEN 402":"Chemical Reaction Engineering","PHEN 403":"Introduction to Process Engineering","PHEN 405":"Sensors,Metrology and Instrumentation Systems","PHEN 601":"Pharmaceutical Process Validation","PHEN 602":"Industrial Automation & PLC Programming","PHEN 603":"Water & Air Systems","PHEN 604":"Digitalization in Pharmaceutical Industry","PHEN 605":"Industrial Planning & Project Management","PHEN 606":"Pharmaceutical Processing Technology II","PHEN 608":"Cosmetics Technology","PHEN 700":"Bachelor Thesis","PHGN 601":"Research Methodology","PHTH 213":"Anatomy II","PHTH 214":"Physiology II","PHTH 217":"Tests & Measurements I","PHTH 218":"Ethics & Law","PHTH 219":"kinesiology","PHTH 221":"First Aid in Hygienic Issue for PT","PHTH 222":"Psychology and Therapeutic Communication","PHTH 401":"Neuroanatomy","PHTH 402":"Neurophysiology","PHTH 403":"Biomechanics II","PHTH 404":"Therapeutic exercise II","PHTH 405":"Electrotherapy II","PHTH 406":"Hydrotherapy","PHTH 408":"Exercise physiology","PHYS 101":"Physics","PHYS 102":"Physics Lab","PTOR 601":"Traumatology","PTOR 602":"Physical Therapy for Traumatology","PTOR 603":"Orthopedic diseases and Surgeries","PTOR 604":"Physical Therapy for Orthopedic diseases and Surgeries","PTOR 605":"Physical Therapy for Sport Injury","PTSR 601":"General Surgery & Oncology","PTSR 602":"Physical Therapy for General Surgery & Oncology","RPW 401":"Research Paper Writing (A2)","SM 101":"Scientific Methods"};/* END:COURSE_NAMES */

    function getCourseLabel(code) {
        const name = COURSE_NAMES[code];
        if (!name) return code;
        const short = name.length > 20 ? name.slice(0, 19) + '…' : name;
        return `${code} – ${short}`;
    }

    function formatGroupLabel(label) {
        const code = extractCourseCode(label);
        const parts = label.split(' - ');
        if (parts.length < 3) return label;
        const name = (code && COURSE_NAMES[code]) || parts[1];
        // Drop season (parts[0]), replace code with course name: "Course Name - Group..."
        return [name, ...parts.slice(2)].join(' - ');
    }

    function getCourseTitle(label) {
        const code = extractCourseCode(label);
        return (code && COURSE_NAMES[code]) ? `${COURSE_NAMES[code]} (${code})` : '';
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
            .gius-btn-muted {
                background: #f9fafb;
                border-color: #d1d5db;
                color: #374151;
            }
            .gius-btn-muted:not(:disabled):hover { background: #e5e7eb; }
            .gius-btn-danger {
                background: #dc2626;
                color: #fff;
                border: none;
            }
            .gius-btn-danger:hover { background: #b91c1c; }

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
            const failedGroups = queue.groups.filter((_, i) => queue.results[i]?.status === 'failed');
            const retryPayload = failedGroups.length > 0
                ? { groups: failedGroups, sharedSubject: queue.sharedSubject, sharedBody: queue.sharedBody }
                : null;
            clearQueue();
            const progress = getEl('giu-batch-progress');
            if (progress) progress.remove();
            renderSummary(queue.results, retryPayload);
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
        const groups = getGroupOptions().sort((a, b) =>
            formatGroupLabel(a.label).localeCompare(formatGroupLabel(b.label))
        );

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
                                <label title="${escapeHtml(getCourseTitle(g.label))}">
                                    <input type="checkbox" class="giu-group-cb"
                                        data-value="${escapeHtml(g.value)}"
                                        data-label="${escapeHtml(g.label)}">
                                    ${escapeHtml(formatGroupLabel(g.label))}
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
                    ${courseCodes.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(getCourseLabel(c))}</option>`).join('')}
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
                    <span class="gius-result-name">${escapeHtml(formatGroupLabel(r.label))}</span>
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

    function renderSummary(results, retryPayload = null) {
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
                    <span class="gius-result-name">${escapeHtml(formatGroupLabel(r.label))}</span>
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
                ${retryPayload ? `<button type="button" id="giu-retry-btn" class="gius-btn gius-btn-danger">Retry Failed (${retryPayload.groups.length})</button>` : ''}
            </div>
        `;

        card.querySelector('#giu-dismiss-btn').addEventListener('click', () => card.remove());

        if (retryPayload) {
            const retryBtn = card.querySelector('#giu-retry-btn');
            retryBtn?.addEventListener('click', () => {
                saveQueue({
                    step:          'select',
                    currentIndex:  0,
                    sharedSubject: retryPayload.sharedSubject,
                    sharedBody:    retryPayload.sharedBody,
                    groups:        retryPayload.groups,
                    results:       [],
                });
                location.reload();
            });
        }

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
