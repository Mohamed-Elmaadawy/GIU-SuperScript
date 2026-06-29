// ==UserScript==
// @name        GIU Staff Enhanced Attendance
// @description Enhances attendance system with a full summary dashboard, settings panel, and analytics.
// @author      Mo.Elmaadawy
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAzFBMVEX////VlyYkHiAAAADTHyj36ereiIr8/vzIGSPPAAj//fziu4HTlRbnyp3x49HRHSTTkgzw8PD29vbl5eXV1NRjX2HWY2vUr2zMAADn1rfJjguzsrMfGRsaEBPltLX6+u/OmB67u7vIyMgyLC5sbGycnJypqKmLi4tYWFh9e3wWExXkoJ1HRUaUkpM3NjY+Pj4PAAe/AADIDxPYGiAnJicZGhn27df17eDXqE329uBVYF7AZ2jZjGvOWgTNlSzf0J7lw7PWozvqxcLZsl8WTjZKAAAHBElEQVR4nO2Ya3fbNhJAIWG92tJ2YwzApg6kTQDhQagkpXZlR/t03fz//7QDgo71jqQ0Pf2Ae45tipKlq8FgMAAhmUwmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMpnMqRTAENi4dXUV710xvB6979n+v3R39IcoMmGrdkyR2bgtLX/Rvfr5uzdvfvnlx7/i9fc3g8EAf27IltNtfOLuetR9A22CEWB84Cp4C2A5IbzBj3B4IRU+kEAuhCk/pXQyHibGE0rnIb4viv7tH39BkujdoONm+/9v75Jo9HcPgghFqONga/4gWWsJ8TUQTtHWU0W4v1RUVRMaJWcxoJNedkFtEn0TRb9bF73bEe0jWmC46qa7haLEVrBUfEoJr+YcP2WJomYmuL1MlFVJbjEtJee6XPaqi4OiuxF9FRVLjbacUBO4m7YOR712Tg8FKeNTnmFMXXGJp17SLoKzININYbrwDieHRG8+HMrRl4gGU8zQ15Z4oZSjllGhjawMCQAhDdW5qOWs86SvGQ6OdjQHRO+OiRJJFZhAqJe8aTl1FvNVEyorRjQV+Ju1/oKIihS9h5lYv8udRfRFooQ5dMRAKs4F4YIzgrNS8PgBmgkMB+Pne7I2xfNBHnrF+aLfgsLP0rwJB19ytqjWRMewCe20VFxJCUpiCYghBQwoaMIkJi4XcdY1Dd4W3VMkPkVA7ot3P/Dj4eF6cbaoMaSssGp6IanVikpVzLx6EAozlXmGOcyYMrXi+ELXclYHYpeYI6HAv5gmVO+xMIsuoGna/F6igYSpAVyLGJYjTVlB5g5w1s9bgaLQzHDSNwZLQ+APOgZLyHbOuSfgxxJFxa4Eo31tP5Ldl4h6MfOsFx0bA3VVKaKUWXIHQjqMd2MARTXFDwaKGVJVwhKlfdgvammfoUdWinPraBdRDFNwhA1jRPG9a7NUxOmifPBgjccSm0RFlEIzJ2CONcuHMBZ7Rcu0BtGDU36/6OALOTrCcVXUdemmqOBkaO0Dx2rH2pKVMKpC4UsojCnwS2HNLTym6NLwAKxuOFWcbTmweZpK433pe0z03fFZX2CHRJQgDNc6ERoPXkHQKk5vKTAo2oO0UDiMeeODxfmFGaAldjJEeWYavx1T0SbR+Z5gHxU91pR8C3TfJ1XHVor9ET0iyuMEwbKJ14wVHNJjJgReClGQQmsADgLXLR4H+YRlSiXRSbWdE18lGnDxEJ7ULnbJfMktvj1W/dpbUXmsnd41WtTChtrLUMaXfhE53iPK14BLRE0SbXGKSo1zOE6phruqIHyKVZ+3MVeXHLs2IHqmw7EoHREFM5x+RnyFaOmoUIIvcFNimCWytY63NjRQzhwTU+yjUZSYpfuyJ1Hj3RwFsxj3TBZfI1oRPw1RFNdMjcGtMSPn1Ri7vIa6z6JiX9XcQUzTrG/XXgym7+9jqHdEb06Y9aHGfZMj+NvQrnyzOW6YbM2At6oMOM8aG4deTYDsX4d26OvocL2OromOd0QfP4seqaPcBNsAMfG9BIulz+Pi7qrG8UrrWnvrucBB1HWMaH2KKKn6lWktT/qh3y/6cdDvmbY39ht1FAsSfo+Y9wBdlcI/8SYrGBSMxZoE2KlA9wp+0j5P0n42vb4awjyy3Cv6fpVCevfPrcp+ZsHHbfUo/Yy2x2Y/kESH64nS1SVRzfaJjq779ul+642+eYfv+/ap3LrP9ouS+37obw+LinKTf/37h03+83aT61O+Hav7LFWnib6M/erjQVFNt/j5x03+++HdBv876cxKpz3TpN5ccQ+Jkqe+I306KMrlFn/f4tf7LU47W+t751m9MfsOio6eb1Lr/HhI9CgX7JNfTYfd6NOhXlM9KEoen/uJ/7ReotZEQaUFOXW/sV/APeYI9/JYqsBz3NMzBd2k5xCnvThZXqUjnck4vNT9QtjYqe6N6Oh+kExvPt2/qI4+vh28RlSlL6yxo+O4UeYkbouJULxQTCmNs6E/k0nf6IyDKF52B47jybIKVsrG1G1X8cc7a338EuT7d32e3qze3t7fP12/XT0PXkV5atuAKx+PRyQHpwng1o4RAdxy3OVJZR0BJwFko/Q5h6UitAuKgz1ZdOeOqDmjdNF2zcqWKPL+enDXR/UuEk928erD81M8HxWNwxnkvONGWy8FY9ZK65RyMgSwTBN85J1srHLOSaf0WWeQQob5ek2ZGytF9w5XfXn5LDoixeP1qjfsFPFqdX17/9inQjxJF9jKYdQgralMq4LExZOnhMQWKh5oxzvnn5QCw3GyTdNYiW3k6zk+/JT47VU0HuY/3l9/Wq2eV6tPOP6PH7drIfZIsOYAB7rj4uIz8iNs5vzo4IM/HX9uu0wmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMplMJpPJHOP/Lb7en38r1wIAAAAASUVORK5CYII=
// @include     https://portal.giu-uni.de/*
// @namespace   Cyn0
// @version     3.1.14
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Staff%20Attendance%20Script.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Staff%20Attendance%20Script.js
// @run-at      document-idle
// @noframes
// ==/UserScript==

        (function () {
            "use strict";

            // ═══════════════════════════════════════════════════════════════════════════
            //  Architecture Map (single-file userscript, IIFE-scoped)
            // ───────────────────────────────────────────────────────────────────────────
            //  1. Constants & storage keys           (this block)
            //  2. Utility & formatting helpers       (date, time, parsing, page detect)
            //  3. Storage repositories               (localStorage read/write per domain)
            //  4. Conflict + undo services           (cross-domain helpers)
            //  5. Holiday helpers                    (lookups, formatting, normalizers)
            //  6. Style injection                    (single CSS block + tokens)
            //  7. UI factory helpers                 (small DOM builders shared by views)
            //  8. UI section builders                (config panel sections, tables)
            //  9. DOM / table parsing                (attendance row extraction)
            // 10. Business logic services            (compensation, period stats)
            // 11. Summary card components            (period summary, stat rows)
            // 12. Onboarding guide                   (spotlight walkthrough)
            // 13. Render orchestrator                (renderEnhancedUI + entry point)
            //
            //  All exposed namespaces are facades over the existing module-scoped
            //  functions. They exist to clarify domain boundaries and make the
            //  call graph easier to navigate; they do not alter behavior.
            // ═══════════════════════════════════════════════════════════════════════════

            // ═══════════════════════════════════════════════════════════
            //  Constants & Storage Keys
            // ═══════════════════════════════════════════════════════════

            const DEFAULT_RAMADAN_START = "2026-02-19";
            const DEFAULT_RAMADAN_END = "2026-03-19";

            const PAGE_PATH = "/GIUb/EXT/SwiftReports_m.aspx";
            const HOME_PATH = "/giub/intstaff/home.aspx";
            const REPORT_URL = "https://portal.giu-uni.de/GIUb/EXT/SwiftReports_m.aspx";
            const SWIFT_REPORT_ID = 866; // user's "Gate Attendance ... Gates" SwiftReport id (see README target page)
            const REPORT_DATA_URL = REPORT_URL + "?swiftreportid=" + SWIFT_REPORT_ID + "&executereport=1";
            const HOME_CACHE_KEY = "giuAttendanceHomeV1";
            const HOME_IFRAME_TIMEOUT_MS = 15000;
            const HOME_REFRESH_TTL_MS = 10 * 60 * 1000;  // skip refresh if cache newer than 10 min
            const HOME_REFRESH_DELAY_MS = 2500;          // let Home paint before hidden-iframe refresh

            function isHomePage() {
                const p = (location.pathname || "").replace(/\/+$/, "").toLowerCase();
                return p === HOME_PATH;
            }

            const REQUIRED_QUERY_PARAMS = {
                swiftreportid: "866",
                executereport: "1"
            };

            const REQUIRED_SECONDS_NORMAL = (8 * 60 + 24) * 60;   // 30240s = 8h24m
            const REQUIRED_SECONDS_RAMADAN = 6 * 3600;              // 21600s = 6h
            const MIN_WORKING_DAY_SECONDS = 4 * 3600;               // 14400s = 4h minimum to count day as worked
            const LATE_THRESHOLD_SECONDS_NORMAL = (10 * 60 + 30) * 60;  // 10:30 AM
            const LATE_THRESHOLD_SECONDS_RAMADAN = (9 * 60 + 30) * 60;  // 9:30 AM
            const LASTOUT_CAP_SECONDS_NORMAL = 19 * 3600;               // 7:00 PM
            const LASTOUT_CAP_SECONDS_RAMADAN = 18 * 3600;              // 6:00 PM

            // localStorage key registry - keep all keys in one place to avoid drift.
            const STORAGE_KEYS = {
                selectedDay: "selectedDay",
                ramadan: "giuRamadanDates",
                holidays: "giuHolidayListV2",
                overrides: "giuAttendanceOverrides",
                compensationLeaves: "giuCompensationLeavesV1",
                dayOffSchedule: "giuDayOffScheduleV1",
                examPeriod: "giuExamPeriod",
                auditMode: "giuAuditModeV1",
                annualLeaveBalance: "giuAnnualLeaveBalanceV1",
                annualLeaveAccrualPeriod: "giuAnnualLeaveAccrualPeriodV1",
                annualLeaveAccrualRate: "giuAnnualLeaveAccrualRateV1",
                paginationState: "giuPaginationStateV1",
                tableFilters: "giuTableFiltersV1",
                sectionState: "giuSectionStateV1",
                onboardingCompleted: "giuOnboardingCompletedV1",
                onboardingState: "giuOnboardingStateV1",
                dayOffAutoState: "giuDayOffAutoStateV1"
            };

            const PAGINATION_DEFAULT_PAGE_SIZE = 10;
            const PAGINATION_PAGE_SIZE_OPTIONS = [5, 10, 25, 50, 100];
            const UNDO_STACK_LIMIT = 5;

            const ONBOARDING_COMPLETED_KEY = STORAGE_KEYS.onboardingCompleted;
            const ONBOARDING_STATE_KEY = STORAGE_KEYS.onboardingState;
            const AUDIT_MODE_KEY = STORAGE_KEYS.auditMode;
            const ANNUAL_LEAVE_BALANCE_KEY = STORAGE_KEYS.annualLeaveBalance;
            const ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY = STORAGE_KEYS.annualLeaveAccrualPeriod;
            const ANNUAL_LEAVE_ACCRUAL_RATE_KEY = STORAGE_KEYS.annualLeaveAccrualRate;
            const ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT = 2.5;
            const LAST_ACTION_KEYS = {
                holidays: "giuLastActionHolidayV1",
                compensation: "giuLastActionCompensationV1",
                overrides: "giuLastActionOverrideV1"
            };

            // ───────────────────────────────────────────────────────────────────────────
            //  Persisted Data Contracts (canonical shapes used across the app)
            // ───────────────────────────────────────────────────────────────────────────
            //  HolidayEntry      { type: "single"|"range", category: "holiday"|"annual",
            //                      date?: "YYYY-MM-DD", start?, end? }
            //  OverrideEntry     { date: "YYYY-MM-DD", type: "full_day"|"custom_actual",
            //                      actualSeconds?: number, reason?: string, note?: string }
            //  CompensationLeave { date: "YYYY-MM-DD", reason?: string }
            //  DayOffSchedule    { startDate: "YYYY-MM-DD", code: "Sat"|"Sun"|... }
            //  RamadanRange      { start: "YYYY-MM-DD", end: "YYYY-MM-DD" }
            //  ExamPeriod        { start, end, capHour: number, capMinute: number }
            //
            //  All persisted reads MUST go through `getStored*` helpers, and all writes
            //  through `setStored*` helpers. Normalizers are the single source of truth
            //  for shape validation; never construct entries inline without normalizing.
            // ───────────────────────────────────────────────────────────────────────────

            let onboardingController = null;

            // ═══════════════════════════════════════════════════════════
            //  Utility & Formatting
            // ═══════════════════════════════════════════════════════════

            function pad2(n) {
                return String(n).padStart(2, "0");
            }

            function normalizeYMD(value) {
                if (typeof value !== "string") return "";
                const trimmed = value.trim();
                if (!trimmed) return "";

                const match = trimmed.match(/(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/);
                if (!match) return "";

                const y = Number(match[1]);
                const m = Number(match[2]);
                const d = Number(match[3]);
                if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) return "";
                if (m < 1 || m > 12 || d < 1 || d > 31) return "";

                return `${y}-${pad2(m)}-${pad2(d)}`;
            }

            function formatHMS(hours, minutes, seconds) {
                return `${hours}:${pad2(minutes)}:${pad2(seconds)}`;
            }

            function formatTime12(hours24, minutes) {
                const suffix = hours24 >= 12 ? "PM" : "AM";
                let h = hours24 % 12;
                if (h === 0) h = 12;
                return `${h}:${pad2(minutes)} ${suffix}`;
            }

            function formatDateToDayName(date) {
                const normalized = normalizeYMD(date);
                if (!normalized) return "";
                const [year, month, day] = normalized.split("-").map(Number);
                const d = new Date(Date.UTC(year, month - 1, day));
                const days = [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                ];
                return days[d.getUTCDay()];
            }

            function isTargetReportPage() {
                const normalizedPath = (location.pathname || "").replace(/\/+$/, "").toLowerCase();
                const requiredPath = PAGE_PATH.toLowerCase();
                if (normalizedPath !== requiredPath) return false;

                const params = new URLSearchParams(location.search || "");
                const getParamCaseInsensitive = function (wantedKey) {
                    const target = String(wantedKey || "").toLowerCase();
                    for (const [key, value] of params.entries()) {
                        if (String(key).toLowerCase() === target) {
                            return value;
                        }
                    }
                    return null;
                };

                for (const key in REQUIRED_QUERY_PARAMS) {
                    if (getParamCaseInsensitive(key) !== REQUIRED_QUERY_PARAMS[key]) {
                        return false;
                    }
                }
                return true;
            }

            function normalizeHeaderText(value) {
                return (value || "")
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "");
            }

            function isLikelyDateHeader(header) {
                if (!header) return false;
                if (header === "day" || header === "date" || header === "attendance" || header === "attendancedate") {
                    return true;
                }
                return header.includes("date") || header.includes("day");
            }

            function isLikelyDurationHeader(header) {
                if (!header) return false;
                if (header === "duration" || header === "hours" || header === "workhours" || header === "workedhours") {
                    return true;
                }
                return header.includes("duration") || header.includes("worked") || header.includes("hours");
            }

            function isLikelyFirstInHeader(header) {
                if (!header) return false;
                if (header === "firstin" || header === "checkin" || header === "signin" || header === "timein") {
                    return true;
                }
                return header.includes("firstin") || header.includes("checkin") || header.includes("signin") || header.includes("timein");
            }

            function isLikelyLastOutHeader(header) {
                if (!header) return false;
                if (header === "lastout" || header === "checkout" || header === "signout" || header === "timeout") {
                    return true;
                }
                return header.includes("lastout") || header.includes("checkout") || header.includes("signout") || header.includes("timeout");
            }

            function detectAttendanceColumnIndexes(rows) {
                for (const row of rows) {
                    const cells = Array.from(row.cells || []);
                    if (!cells.length) continue;

                    const headers = cells.map(function (cell) {
                        return normalizeHeaderText((cell.textContent || "").trim());
                    });

                    const dateIndex = headers.findIndex(isLikelyDateHeader);
                    const durationIndex = headers.findIndex(isLikelyDurationHeader);
                    const firstInIndex = headers.findIndex(isLikelyFirstInHeader);
                    const lastOutIndex = headers.findIndex(isLikelyLastOutHeader);

                    if (dateIndex !== -1 && durationIndex !== -1) {
                        return {
                            dateIndex,
                            durationIndex,
                            firstInIndex,
                            lastOutIndex
                        };
                    }
                }
                return null;
            }

            function isBetweenDates(lowerRange, upperRange, date) {
                const lowerDate = normalizeYMD(lowerRange);
                const upperDate = normalizeYMD(upperRange);
                const currentDate = normalizeYMD(date);
                if (!lowerDate || !upperDate || !currentDate) return false;

                const lower = Number(lowerDate.replace(/-/g, ""));
                const upper = Number(upperDate.replace(/-/g, ""));
                const current = Number(currentDate.replace(/-/g, ""));
                return current >= lower && current <= upper;
            }

            function secondsToHMS(totalSeconds) {
                const abs = Math.abs(totalSeconds);
                const hours = Math.floor(abs / 3600);
                const minutes = Math.floor((abs % 3600) / 60);
                const seconds = abs % 60;
                return { hours, minutes, seconds };
            }

            function parseDurationToSeconds(duration) {
                if (!duration || !duration.includes(":")) return 0;
                const parts = duration.split(":").map(Number);
                const h = parts[0] || 0;
                const m = parts[1] || 0;
                const s = parts[2] || 0;
                return (h * 3600) + (m * 60) + s;
            }

            function parseTimeToSeconds(timeStr) {
                if (!timeStr || !timeStr.includes(":")) return null;

                const trimmed = timeStr.trim();

                const amPmMatch = trimmed.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(AM|PM)$/i);
                if (amPmMatch) {
                    let hours = Number(amPmMatch[1]);
                    const minutes = Number(amPmMatch[2]);
                    const ampm = amPmMatch[4].toUpperCase();

                    if (ampm === "AM" && hours === 12) hours = 0;
                    if (ampm === "PM" && hours !== 12) hours += 12;

                    return hours * 3600 + minutes * 60;
                }

                const simpleMatch = trimmed.match(/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/);
                if (simpleMatch) {
                    const hours = Number(simpleMatch[1]);
                    const minutes = Number(simpleMatch[2]);
                    return hours * 3600 + minutes * 60;
                }

                return null;
            }

            function getTodayLocalYMD() {
                const now = new Date();
                const y = now.getFullYear();
                const m = pad2(now.getMonth() + 1);
                const d = pad2(now.getDate());
                return `${y}-${m}-${d}`;
            }

            function hasValidLastOut(lastOut) {
                if (!lastOut) return false;
                const value = lastOut.trim();
                if (!value) return false;
                return value.includes(":");
            }

            function isFixedNonWorkingDay(dayName) {
                return dayName === "Friday";
            }

            // ═══════════════════════════════════════════════════════════
            //  Storage (localStorage)
            // ═══════════════════════════════════════════════════════════

            function getSelectedDayOffCode() {
                return localStorage.getItem(STORAGE_KEYS.selectedDay) || "";
            }

            function isDayOffConfigured() {
                return getSelectedDayOffCode() !== "" || getStoredDayOffSchedule().length > 0;
            }

            // Ephemeral auto-detect UI state (like getOnboardingState, not stored domain data).
            function getDayOffAutoState() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.dayOffAutoState);
                    const parsed = raw ? JSON.parse(raw) : null;
                    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
                    return parsed;
                } catch {
                    return null;
                }
            }

            function setDayOffAutoState(state) {
                if (!state || typeof state !== "object") {
                    localStorage.removeItem(STORAGE_KEYS.dayOffAutoState);
                    return;
                }
                localStorage.setItem(STORAGE_KEYS.dayOffAutoState, JSON.stringify(state));
            }

            function isAuditModeEnabled() {
                return localStorage.getItem(AUDIT_MODE_KEY) !== "0";
            }

            function setAuditModeEnabled(enabled) {
                localStorage.setItem(AUDIT_MODE_KEY, enabled ? "1" : "0");
            }

            function normalizeDayOffScheduleEntry(entry) {
                if (!entry || typeof entry !== "object") return null;
                const startDate = normalizeYMD(entry.startDate || "");
                const code = typeof entry.code === "string" ? entry.code.trim() : "";
                if (!startDate) return null;
                if (!getSelectedDayOffFullName(code)) return null;
                return { startDate, code };
            }

            function getStoredDayOffSchedule() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.dayOffSchedule);
                    const parsed = raw ? JSON.parse(raw) : [];
                    if (!Array.isArray(parsed)) return [];
                    return parsed
                        .map(normalizeDayOffScheduleEntry)
                        .filter(Boolean)
                        .sort(function (a, b) { return a.startDate.localeCompare(b.startDate); });
                } catch {
                    return [];
                }
            }

            function setStoredDayOffSchedule(list) {
                const normalized = (Array.isArray(list) ? list : [])
                    .map(normalizeDayOffScheduleEntry)
                    .filter(Boolean)
                    .sort(function (a, b) { return a.startDate.localeCompare(b.startDate); });
                localStorage.setItem(STORAGE_KEYS.dayOffSchedule, JSON.stringify(normalized));
            }

            function getDayOffCodeForDate(date, fallbackCode) {
                const normalizedDate = normalizeYMD(date);
                const fallback = fallbackCode || getSelectedDayOffCode();
                if (!normalizedDate) return fallback;

                const schedule = getStoredDayOffSchedule();
                let activeCode = fallback;
                for (const item of schedule) {
                    if (item.startDate <= normalizedDate) {
                        activeCode = item.code;
                    } else {
                        break;
                    }
                }
                return activeCode;
            }

            function getDayOffFullNameForDate(date, fallbackCode) {
                return getSelectedDayOffFullName(getDayOffCodeForDate(date, fallbackCode));
            }

            function getSelectedDayOffFullName(code) {
                const map = {
                    Sat: "Saturday",
                    Sun: "Sunday",
                    Mon: "Monday",
                    Tue: "Tuesday",
                    Wed: "Wednesday",
                    Thu: "Thursday"
                };
                return map[code] || "";
            }

            function exportSettingsSnapshot() {
                return {
                    selectedDay: getSelectedDayOffCode(),
                    dayOffSchedule: getStoredDayOffSchedule(),
                    holidays: getStoredHolidays(),
                    annualLeaveBalance: getStoredAnnualLeaveBalance(),
                    overrides: getStoredOverrides(),
                    compensationLeaves: getStoredCompensationLeaves(),
                    ramadan: getStoredRamadan(),
                    examPeriod: getStoredExamPeriod(),
                    auditMode: isAuditModeEnabled()
                };
            }

            function importSettingsSnapshot(snapshot) {
                if (!snapshot || typeof snapshot !== "object") {
                    throw new Error("Invalid settings JSON object.");
                }
                const report = {
                    accepted: 0,
                    rejected: 0,
                    notes: []
                };

                if (typeof snapshot.selectedDay === "string") {
                    localStorage.setItem(STORAGE_KEYS.selectedDay, snapshot.selectedDay);
                    report.accepted += 1;
                }
                if (Array.isArray(snapshot.dayOffSchedule)) {
                    const before = snapshot.dayOffSchedule.length;
                    setStoredDayOffSchedule(snapshot.dayOffSchedule);
                    const after = getStoredDayOffSchedule().length;
                    report.accepted += after;
                    report.rejected += Math.max(0, before - after);
                }
                if (Array.isArray(snapshot.holidays)) {
                    const before = snapshot.holidays.length;
                    setStoredHolidays(snapshot.holidays.map(normalizeHolidayEntry).filter(Boolean));
                    const after = getStoredHolidays().length;
                    report.accepted += after;
                    report.rejected += Math.max(0, before - after);
                }
                if (snapshot.annualLeaveBalance != null) {
                    setStoredAnnualLeaveBalance(snapshot.annualLeaveBalance);
                    report.accepted += 1;
                }
                if (Array.isArray(snapshot.overrides)) {
                    const before = snapshot.overrides.length;
                    setStoredOverrides(snapshot.overrides);
                    const after = getStoredOverrides().length;
                    report.accepted += after;
                    report.rejected += Math.max(0, before - after);
                }
                if (Array.isArray(snapshot.compensationLeaves)) {
                    const before = snapshot.compensationLeaves.length;
                    setStoredCompensationLeaves(snapshot.compensationLeaves);
                    const after = getStoredCompensationLeaves().length;
                    report.accepted += after;
                    report.rejected += Math.max(0, before - after);
                }
                if (snapshot.ramadan && typeof snapshot.ramadan === "object") {
                    const start = normalizeYMD(snapshot.ramadan.start || "");
                    const end = normalizeYMD(snapshot.ramadan.end || "");
                    if (start && end && start <= end) {
                        setStoredRamadan(start, end);
                        report.accepted += 1;
                    } else {
                        report.rejected += 1;
                        report.notes.push("Ramadan range invalid.");
                    }
                }
                if (snapshot.examPeriod && typeof snapshot.examPeriod === "object") {
                    const ep = snapshot.examPeriod;
                    const start = normalizeYMD(ep.start || "");
                    const end = normalizeYMD(ep.end || "");
                    const capHour = Number(ep.capHour);
                    const capMinute = Number(ep.capMinute);
                    if (start && end && start <= end && Number.isFinite(capHour) && Number.isFinite(capMinute)) {
                        setStoredExamPeriod(start, end, capHour, capMinute);
                        report.accepted += 1;
                    } else {
                        report.rejected += 1;
                        report.notes.push("Exam period invalid.");
                    }
                }
                if (typeof snapshot.auditMode === "boolean") {
                    setAuditModeEnabled(snapshot.auditMode);
                    report.accepted += 1;
                }
                return report;
            }

            function getStoredRamadan() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.ramadan);
                    if (!raw) return { start: DEFAULT_RAMADAN_START, end: DEFAULT_RAMADAN_END };
                    const parsed = JSON.parse(raw);
                    if (
                        parsed &&
                        /^\d{4}-\d{2}-\d{2}$/.test(parsed.start || "") &&
                        /^\d{4}-\d{2}-\d{2}$/.test(parsed.end || "") &&
                        parsed.start <= parsed.end
                    ) {
                        return { start: parsed.start, end: parsed.end };
                    }
                    return { start: DEFAULT_RAMADAN_START, end: DEFAULT_RAMADAN_END };
                } catch {
                    return { start: DEFAULT_RAMADAN_START, end: DEFAULT_RAMADAN_END };
                }
            }

            function setStoredRamadan(start, end) {
                localStorage.setItem(STORAGE_KEYS.ramadan, JSON.stringify({ start, end }));
            }

            function clearStoredRamadan() {
                localStorage.removeItem(STORAGE_KEYS.ramadan);
            }

            function getStoredHolidays() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.holidays);
                    const parsed = raw ? JSON.parse(raw) : [];
                    if (!Array.isArray(parsed)) return [];
                    return parsed
                        .map(normalizeHolidayEntry)
                        .filter(Boolean);
                } catch {
                    return [];
                }
            }

            function setStoredHolidays(list) {
                const normalized = (Array.isArray(list) ? list : [])
                    .map(normalizeHolidayEntry)
                    .filter(Boolean);
                localStorage.setItem(STORAGE_KEYS.holidays, JSON.stringify(normalized));
            }

            function getStoredAnnualLeaveBalance() {
                try {
                    const raw = localStorage.getItem(ANNUAL_LEAVE_BALANCE_KEY);
                    if (raw == null || raw === "") return 0;
                    const n = Number(raw);
                    if (!Number.isFinite(n) || n < 0) return 0;
                    return n;
                } catch {
                    return 0;
                }
            }

            function setStoredAnnualLeaveBalance(value) {
                const n = Number(value);
                const safe = Number.isFinite(n) && n >= 0 ? n : 0;
                localStorage.setItem(ANNUAL_LEAVE_BALANCE_KEY, String(safe));
            }

            // Monthly annual-leave accrual rate (days added per payroll period).
            // Defaults to 2.5 when unset or invalid; never negative.
            function getStoredAnnualLeaveAccrualRate() {
                try {
                    const raw = localStorage.getItem(ANNUAL_LEAVE_ACCRUAL_RATE_KEY);
                    if (raw == null || raw === "") return ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT;
                    const n = Number(raw);
                    if (!Number.isFinite(n) || n < 0) return ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT;
                    return n;
                } catch {
                    return ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT;
                }
            }

            function setStoredAnnualLeaveAccrualRate(value) {
                const n = Number(value);
                const safe = Number.isFinite(n) && n >= 0 ? n : ANNUAL_LEAVE_ACCRUAL_RATE_DEFAULT;
                localStorage.setItem(ANNUAL_LEAVE_ACCRUAL_RATE_KEY, String(safe));
            }

            // ───────────────────────────────────────────────────────────────────────
            //  Record retention
            //  Records older than 2 payroll months are auto-removed. The cutoff
            //  is the start date (`YYYY-MM-11`) of the period that begins 2
            //  payroll months before the current one. Records dated before that
            //  cutoff are dropped from holidays/annual leaves, overrides,
            //  compensation leaves, and the day-off schedule.
            // ───────────────────────────────────────────────────────────────────────

            const RECORD_RETENTION_MONTHS = 2;

            function getRetentionCutoffStartDate() {
                const today = getTodayLocalYMD();
                const currentKey = getPayrollPeriodKey(today);
                if (typeof currentKey !== "string" || !/^\d{4}-\d{2}$/.test(currentKey)) return "";
                const [year, month] = currentKey.split("-").map(Number);
                let m = month - RECORD_RETENTION_MONTHS;
                let y = year;
                while (m <= 0) {
                    m += 12;
                    y -= 1;
                }
                return `${y}-${pad2(m)}-11`;
            }

            function pruneOldRecords() {
                const cutoffStart = getRetentionCutoffStartDate();
                if (!cutoffStart) return;

                // Holidays / Annual leaves. Single entries before cutoff drop.
                // Range entries drop when their END is before cutoff (so a range
                // that overlaps the kept window stays in full).
                const holidays = getStoredHolidays();
                let prunedAnnualDays = 0;
                const keptHolidays = holidays.filter(function (h) {
                    if (!h) return false;
                    if (h.type === "single") {
                        const d = normalizeYMD(h.date);
                        if (!d) return false;
                        if (d < cutoffStart) {
                            if (h.category === "annual") prunedAnnualDays += 1;
                            return false;
                        }
                        return true;
                    }
                    if (h.type === "range") {
                        const start = normalizeYMD(h.start);
                        const end = normalizeYMD(h.end);
                        if (!start || !end) return false;
                        if (end < cutoffStart) {
                            if (h.category === "annual" && start <= end) {
                                eachYmdInRange(start, end, function () { prunedAnnualDays += 1; });
                            }
                            return false;
                        }
                        return true;
                    }
                    return true;
                });
                if (keptHolidays.length !== holidays.length) {
                    setStoredHolidays(keptHolidays);
                    // Pruned annual leaves shouldn't change the user's remaining
                    // balance (those days were really used). Reduce the stored
                    // total by the pruned-used count to keep Remaining stable.
                    if (prunedAnnualDays > 0) {
                        const currentTotal = getStoredAnnualLeaveBalance();
                        setStoredAnnualLeaveBalance(Math.max(0, currentTotal - prunedAnnualDays));
                    }
                }

                const overrides = getStoredOverrides();
                const keptOverrides = overrides.filter(function (o) {
                    const d = normalizeYMD(o && o.date);
                    return !!d && d >= cutoffStart;
                });
                if (keptOverrides.length !== overrides.length) {
                    setStoredOverrides(keptOverrides);
                }

                const comps = getStoredCompensationLeaves();
                const keptComps = comps.filter(function (c) {
                    const d = normalizeYMD(c && c.date);
                    return !!d && d >= cutoffStart;
                });
                if (keptComps.length !== comps.length) {
                    setStoredCompensationLeaves(keptComps);
                }

                // Day-off schedule: drop superseded entries with startDate < cutoff,
                // but keep the most recent one if all entries are pre-cutoff so
                // day-off resolution for retained dates stays correct.
                const schedule = getStoredDayOffSchedule();
                const recent = schedule.filter(function (s) { return (s.startDate || "") >= cutoffStart; });
                const old = schedule.filter(function (s) { return (s.startDate || "") < cutoffStart; });
                const keptSchedule = old.length
                    ? [old[old.length - 1]].concat(recent)
                    : recent;
                if (keptSchedule.length !== schedule.length) {
                    setStoredDayOffSchedule(keptSchedule);
                }
            }

            function countRecordsToPrune() {
                const cutoffStart = getRetentionCutoffStartDate();
                if (!cutoffStart) return 0;
                let count = 0;
                getStoredHolidays().forEach(function (h) {
                    if (!h) return;
                    if (h.type === "single") {
                        const d = normalizeYMD(h.date);
                        if (d && d < cutoffStart) count += 1;
                        return;
                    }
                    if (h.type === "range") {
                        const start = normalizeYMD(h.start);
                        const end = normalizeYMD(h.end);
                        if (start && end && end < cutoffStart) count += 1;
                    }
                });
                count += getStoredOverrides().filter(function (o) { return normalizeYMD(o.date) < cutoffStart; }).length;
                count += getStoredCompensationLeaves().filter(function (c) { return normalizeYMD(c.date) < cutoffStart; }).length;
                count += getStoredDayOffSchedule().filter(function (s) { return normalizeYMD(s.startDate) < cutoffStart; }).length;
                return count;
            }

            // ───────────────────────────────────────────────────────────────────────
            //  Pagination state
            //  Each settings table tracks its current page + page size by tableKey.
            //  State survives across re-renders so the user stays on the same page
            //  after editing a row.
            // ───────────────────────────────────────────────────────────────────────

            function getPaginationState() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.paginationState);
                    const parsed = raw ? JSON.parse(raw) : {};
                    return parsed && typeof parsed === "object" ? parsed : {};
                } catch {
                    return {};
                }
            }

            function getPaginationStateForKey(tableKey, defaults) {
                const all = getPaginationState();
                const fallback = Object.assign(
                    { page: 1, pageSize: PAGINATION_DEFAULT_PAGE_SIZE },
                    defaults || {}
                );
                const stored = all[tableKey] || {};
                return Object.assign({}, fallback, stored);
            }

            function setPaginationStateForKey(tableKey, partial) {
                const all = getPaginationState();
                all[tableKey] = Object.assign({}, all[tableKey] || {}, partial || {});
                try {
                    localStorage.setItem(STORAGE_KEYS.paginationState, JSON.stringify(all));
                } catch {
                    // localStorage quota issues are non-fatal here.
                }
            }

            function applyMonthlyAnnualLeaveAccrual() {
                const today = getTodayLocalYMD();
                const currentPeriodKey = getPayrollPeriodKey(today);
                const lastAccruedPeriodKey = localStorage.getItem(ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY) || "";

                // First-time initialization: start tracking from current period without retroactive accrual.
                if (!lastAccruedPeriodKey) {
                    localStorage.setItem(ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY, currentPeriodKey);
                    return;
                }

                if (lastAccruedPeriodKey === currentPeriodKey) {
                    return;
                }

                const parseKeyToMonthIndex = function (key) {
                    if (typeof key !== "string" || !/^\d{4}-\d{2}$/.test(key)) return NaN;
                    const parts = key.split("-");
                    const y = Number(parts[0]);
                    const m = Number(parts[1]);
                    if (!Number.isInteger(y) || !Number.isInteger(m) || m < 1 || m > 12) return NaN;
                    return y * 12 + (m - 1);
                };

                const lastIdx = parseKeyToMonthIndex(lastAccruedPeriodKey);
                const currIdx = parseKeyToMonthIndex(currentPeriodKey);

                if (!Number.isFinite(lastIdx) || !Number.isFinite(currIdx) || currIdx <= lastIdx) {
                    localStorage.setItem(ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY, currentPeriodKey);
                    return;
                }

                const periodsPassed = currIdx - lastIdx;
                const currentBalance = getStoredAnnualLeaveBalance();
                const updatedBalance = currentBalance + periodsPassed * getStoredAnnualLeaveAccrualRate();
                setStoredAnnualLeaveBalance(updatedBalance);
                localStorage.setItem(ANNUAL_LEAVE_ACCRUAL_PERIOD_KEY, currentPeriodKey);
            }

            function getStoredOverrides() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.overrides);
                    const parsed = raw ? JSON.parse(raw) : [];
                    if (!Array.isArray(parsed)) return [];
                    return parsed.map(normalizeOverrideEntry).filter(Boolean);
                } catch {
                    return [];
                }
            }

            function setStoredOverrides(list) {
                const normalized = (Array.isArray(list) ? list : [])
                    .map(normalizeOverrideEntry)
                    .filter(Boolean)
                    .sort(function (a, b) { return a.date.localeCompare(b.date); });
                localStorage.setItem(STORAGE_KEYS.overrides, JSON.stringify(normalized));
            }

            function normalizeOverrideEntry(entry) {
                if (!entry || typeof entry !== "object") return null;
                const date = normalizeYMD(entry.date || "");
                if (!date) return null;
                const type = entry.type === "custom_actual" ? "custom_actual" : "full_day";
                const normalized = { date, type };

                const reason = typeof entry.reason === "string" ? entry.reason.trim() : "";
                const note = typeof entry.note === "string" ? entry.note.trim() : "";
                if (reason) normalized.reason = reason;
                if (note) normalized.note = note;

                if (type === "custom_actual") {
                    let actualSeconds = Number(entry.actualSeconds);
                    if (!Number.isFinite(actualSeconds) || actualSeconds <= 0) {
                        const actualMinutes = Number(entry.actualMinutes);
                        actualSeconds = Number.isFinite(actualMinutes) ? actualMinutes * 60 : 0;
                    }
                    if (!Number.isFinite(actualSeconds) || actualSeconds <= 0) return null;
                    normalized.actualSeconds = Math.max(0, Math.floor(actualSeconds));
                }

                return normalized;
            }

            function normalizeCompensationLeaveEntry(entry) {
                if (!entry || typeof entry !== "object") return null;
                const date = normalizeYMD(entry.date || "");
                if (!date) return null;

                const normalized = { date };
                const reason = typeof entry.reason === "string" ? entry.reason.trim() : "";
                if (reason) {
                    normalized.reason = reason;
                }

                return normalized;
            }

            function getStoredCompensationLeaves() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.compensationLeaves);
                    const parsed = raw ? JSON.parse(raw) : [];
                    if (!Array.isArray(parsed)) return [];

                    return parsed
                        .map(normalizeCompensationLeaveEntry)
                        .filter(Boolean)
                        .sort(function (a, b) { return a.date.localeCompare(b.date); });
                } catch {
                    return [];
                }
            }

            function setStoredCompensationLeaves(list) {
                const normalized = (Array.isArray(list) ? list : [])
                    .map(normalizeCompensationLeaveEntry)
                    .filter(Boolean)
                    .sort(function (a, b) { return a.date.localeCompare(b.date); });
                localStorage.setItem(STORAGE_KEYS.compensationLeaves, JSON.stringify(normalized));
            }

            function getUndoStorageKey(scope) {
                return LAST_ACTION_KEYS[scope] || "";
            }

            function getStoredSectionState() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.sectionState);
                    const parsed = raw ? JSON.parse(raw) : {};
                    return parsed && typeof parsed === "object" ? parsed : {};
                } catch {
                    return {};
                }
            }

            function getSectionExpanded(sectionKey, fallbackValue) {
                const map = getStoredSectionState();
                if (Object.prototype.hasOwnProperty.call(map, sectionKey)) return !!map[sectionKey];
                return !!fallbackValue;
            }

            function setSectionExpanded(sectionKey, expanded) {
                const map = getStoredSectionState();
                map[sectionKey] = !!expanded;
                try {
                    localStorage.setItem(STORAGE_KEYS.sectionState, JSON.stringify(map));
                } catch {}
            }

            function getStoredTableFilters() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.tableFilters);
                    const parsed = raw ? JSON.parse(raw) : {};
                    return parsed && typeof parsed === "object" ? parsed : {};
                } catch {
                    return {};
                }
            }

            function getTableFilterValue(tableKey, filterKey, fallbackValue) {
                const all = getStoredTableFilters();
                const table = all[tableKey] || {};
                if (Object.prototype.hasOwnProperty.call(table, filterKey)) return table[filterKey];
                return fallbackValue;
            }

            function setTableFilterValue(tableKey, filterKey, value) {
                const all = getStoredTableFilters();
                if (!all[tableKey] || typeof all[tableKey] !== "object") all[tableKey] = {};
                all[tableKey][filterKey] = value;
                try {
                    localStorage.setItem(STORAGE_KEYS.tableFilters, JSON.stringify(all));
                } catch {}
            }

            function buildManagedDataSnapshot(scope) {
                if (scope === "holidays") {
                    return { holidays: getStoredHolidays() };
                }
                if (scope === "compensation") {
                    return { compensationLeaves: getStoredCompensationLeaves() };
                }
                if (scope === "overrides") {
                    return { overrides: getStoredOverrides() };
                }
                return null;
            }

            function saveUndoSnapshot(scope, label) {
                try {
                    const key = getUndoStorageKey(scope);
                    const snapshot = buildManagedDataSnapshot(scope);
                    if (!key || !snapshot) return;
                    const payload = {
                        scope: scope,
                        label: String(label || "Update"),
                        at: new Date().toISOString(),
                        snapshot: snapshot
                    };
                    const raw = localStorage.getItem(key);
                    const stack = raw ? JSON.parse(raw) : [];
                    const normalizedStack = Array.isArray(stack) ? stack : [];
                    normalizedStack.push(payload);
                    while (normalizedStack.length > UNDO_STACK_LIMIT) normalizedStack.shift();
                    localStorage.setItem(key, JSON.stringify(normalizedStack));
                } catch {}
            }

            function getUndoSnapshotMeta(scope) {
                try {
                    const key = getUndoStorageKey(scope);
                    if (!key) return null;
                    const raw = localStorage.getItem(key);
                    if (!raw) return null;
                    const parsed = JSON.parse(raw);
                    if (Array.isArray(parsed)) {
                        const top = parsed[parsed.length - 1];
                        return top && top.snapshot ? top : null;
                    }
                    // Backward compatibility with old single-snapshot format.
                    if (parsed && typeof parsed === "object" && parsed.snapshot) return parsed;
                    return null;
                } catch {
                    return null;
                }
            }

            function restoreUndoSnapshot(scope) {
                const key = getUndoStorageKey(scope);
                const meta = getUndoSnapshotMeta(scope);
                if (!meta || !meta.snapshot) {
                    return { ok: false, message: "No action to undo yet." };
                }
                const snap = meta.snapshot;
                if (scope === "holidays") {
                    setStoredHolidays(Array.isArray(snap.holidays) ? snap.holidays : []);
                } else if (scope === "compensation") {
                    setStoredCompensationLeaves(Array.isArray(snap.compensationLeaves) ? snap.compensationLeaves : []);
                } else if (scope === "overrides") {
                    setStoredOverrides(Array.isArray(snap.overrides) ? snap.overrides : []);
                } else {
                    return { ok: false, message: "Unsupported undo scope." };
                }
                if (key) {
                    try {
                        const raw = localStorage.getItem(key);
                        const parsed = raw ? JSON.parse(raw) : [];
                        if (Array.isArray(parsed)) {
                            parsed.pop();
                            if (parsed.length) localStorage.setItem(key, JSON.stringify(parsed));
                            else localStorage.removeItem(key);
                        } else {
                            localStorage.removeItem(key);
                        }
                    } catch {
                        localStorage.removeItem(key);
                    }
                }
                return { ok: true, message: `Undid: ${meta.label || "last action"}` };
            }

            function createScopedUndoButton(scope, emptyLabel, readyPrefix, extraClass) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "giu-settings-action-btn giu-undo-btn";
                if (extraClass) btn.classList.add(extraClass);
                const meta = getUndoSnapshotMeta(scope);
                btn.textContent = meta ? `${readyPrefix}: ${meta.label}` : emptyLabel;
                btn.disabled = !meta;
                btn.style.opacity = meta ? "1" : "0.6";
                btn.addEventListener("click", function () {
                    const restored = restoreUndoSnapshot(scope);
                    alert(restored.message);
                    if (restored.ok) {
                        renderEnhancedUI();
                    }
                });
                return btn;
            }

            function buildConflictList() {
                const markerMap = new Map();
                const addMarker = function (date, marker) {
                    const normalizedDate = normalizeYMD(date);
                    if (!normalizedDate) return;
                    if (!markerMap.has(normalizedDate)) markerMap.set(normalizedDate, new Set());
                    markerMap.get(normalizedDate).add(marker);
                };

                const holidays = getStoredHolidays();
                const overrides = getStoredOverrides();
                const compensationLeaves = getStoredCompensationLeaves();

                overrides.forEach(function (item) {
                    addMarker(item.date, "Override");
                });
                compensationLeaves.forEach(function (item) {
                    addMarker(item.date, "Compensation");
                });
                holidays.forEach(function (item) {
                    const markerLabel = item.category === "annual" ? "Annual Leave" : "Holiday";
                    if (item.type === "single") {
                        addMarker(item.date, markerLabel);
                        return;
                    }
                    if (item.type === "range") {
                        const start = normalizeYMD(item.start || "");
                        const end = normalizeYMD(item.end || "");
                        if (!start || !end || start > end) return;
                        eachYmdInRange(start, end, function (date) {
                            addMarker(date, markerLabel);
                        });
                    }
                });

                const conflicts = [];
                markerMap.forEach(function (set, date) {
                    const tags = Array.from(set.values());
                    if (tags.length > 1) conflicts.push({ date, tags: tags.sort() });
                });
                conflicts.sort(function (a, b) { return b.date.localeCompare(a.date); });
                return conflicts;
            }

            function buildConflictTagMap() {
                const map = new Map();
                buildConflictList().forEach(function (item) {
                    map.set(item.date, item.tags || []);
                });
                return map;
            }

            function createConflictBadge(text, title) {
                const badge = document.createElement("span");
                badge.className = "giu-conflict-badge";
                badge.textContent = text;
                if (title) badge.title = title;
                return badge;
            }

            function getStoredExamPeriod() {
                try {
                    const raw = localStorage.getItem(STORAGE_KEYS.examPeriod);
                    if (!raw) return null;
                    const parsed = JSON.parse(raw);
                    if (
                        parsed &&
                        /^\d{4}-\d{2}-\d{2}$/.test(parsed.start || "") &&
                        /^\d{4}-\d{2}-\d{2}$/.test(parsed.end || "") &&
                        parsed.start <= parsed.end &&
                        typeof parsed.capHour === "number" &&
                        typeof parsed.capMinute === "number"
                    ) {
                        return parsed;
                    }
                    return null;
                } catch {
                    return null;
                }
            }

            function setStoredExamPeriod(start, end, capHour, capMinute) {
                localStorage.setItem(STORAGE_KEYS.examPeriod, JSON.stringify({ start, end, capHour, capMinute }));
            }

            function clearStoredExamPeriod() {
                localStorage.removeItem(STORAGE_KEYS.examPeriod);
            }

            function getLastOutCapForDate(date, ramadan, examPeriod) {
                if (examPeriod && isBetweenDates(examPeriod.start, examPeriod.end, date)) {
                    return (examPeriod.capHour * 3600) + (examPeriod.capMinute * 60);
                }
                if (isBetweenDates(ramadan.start, ramadan.end, date)) {
                    return LASTOUT_CAP_SECONDS_RAMADAN;
                }
                return LASTOUT_CAP_SECONDS_NORMAL;
            }

            function getOverrideTypeLabel(type) {
                if (type === "full_day") return "Full Day";
                if (type === "custom_actual") return "Custom Hours";
                return type;
            }

            // ═══════════════════════════════════════════════════════════
            //  Holiday Helpers
            // ═══════════════════════════════════════════════════════════

            function normalizeHolidayEntry(entry) {
                if (!entry) return null;
                const normalizeCategory = function (value) {
                    return value === "annual" ? "annual" : "holiday";
                };

                if (typeof entry === "string") {
                    const value = normalizeYMD(entry);
                    if (value) {
                        return { type: "single", category: "holiday", date: value };
                    }
                    return null;
                }

                if (entry.type === "single") {
                    const date = normalizeYMD(entry.date || "");
                    if (date) {
                        return { type: "single", category: normalizeCategory(entry.category), date };
                    }
                }

                if (entry.type === "range") {
                    const start = normalizeYMD(entry.start || "");
                    const end = normalizeYMD(entry.end || "");
                    if (start && end && start <= end) {
                        return { type: "range", category: normalizeCategory(entry.category), start, end };
                    }
                }

                return null;
            }

            function holidayEntryToKey(entry) {
                const category = entry.category === "annual" ? "annual" : "holiday";
                if (entry.type === "single") return `${category}:single:${entry.date}`;
                return `${category}:range:${entry.start}:${entry.end}`;
            }

            function isDateHoliday(date, holidays) {
                const normalizedDate = normalizeYMD(date);
                if (!normalizedDate) return false;

                for (const holiday of holidays) {
                    if (holiday.type === "single" && normalizeYMD(holiday.date) === normalizedDate) {
                        return true;
                    }

                    if (holiday.type === "range" && isBetweenDates(holiday.start, holiday.end, normalizedDate)) {
                        return true;
                    }
                }

                return false;
            }

            function formatHolidayEntry(entry) {
                if (entry.type === "single") return entry.date;
                return `${entry.start} → ${entry.end}`;
            }

            function getAnnualLeaveDateSet(holidays, periodStart, periodEnd) {
                const dates = new Set();
                const normalizedStart = normalizeYMD(periodStart);
                const normalizedEnd = normalizeYMD(periodEnd);
                if (!normalizedStart || !normalizedEnd) return dates;

                (holidays || []).forEach(function (holiday) {
                    if (!holiday || holiday.category !== "annual") return;
                    if (holiday.type === "single") {
                        const singleDate = normalizeYMD(holiday.date);
                        if (singleDate && isBetweenDates(normalizedStart, normalizedEnd, singleDate)) {
                            dates.add(singleDate);
                        }
                        return;
                    }
                    if (holiday.type === "range") {
                        const rangeStart = normalizeYMD(holiday.start || "");
                        const rangeEnd = normalizeYMD(holiday.end || "");
                        if (!rangeStart || !rangeEnd || rangeStart > rangeEnd) return;
                        const intersectStart = rangeStart > normalizedStart ? rangeStart : normalizedStart;
                        const intersectEnd = rangeEnd < normalizedEnd ? rangeEnd : normalizedEnd;
                        if (intersectStart > intersectEnd) return;
                        eachYmdInRange(intersectStart, intersectEnd, function (d) { dates.add(d); });
                    }
                });

                return dates;
            }

            // ═══════════════════════════════════════════════════════════
            //  Styles
            // ═══════════════════════════════════════════════════════════

            function injectStyles() {
                if (document.getElementById("giu-attendance-enhanced-style")) return;

                const style = document.createElement("style");
                style.id = "giu-attendance-enhanced-style";
                style.textContent = `
                    /* ----------------------------------------------------------
                    GIU UI Tokens (single source of truth for radii, control
                    sizes, color roles). Existing per-rule values are kept
                    intentionally identical to preserve behavior; tokens are
                    introduced for future consumers and documented exceptions
                    like pills/chips (radius: var(--giu-radius-pill)).
                    ---------------------------------------------------------- */
                    .giu-attendance-wrap {
                        --giu-radius-sm: 6px;
                        --giu-radius-md: 8px;
                        --giu-radius-lg: 10px;
                        --giu-radius-xl: 12px;
                        --giu-radius-pill: 999px;
                        --giu-control-h: 32px;
                        --giu-control-h-sm: 28px;
                        --giu-space-1: 4px;
                        --giu-space-2: 8px;
                        --giu-space-3: 12px;
                        --giu-space-4: 16px;
                        --giu-color-text: #111827;
                        --giu-color-muted: #6b7280;
                        --giu-color-border: #d1d5db;
                        --giu-color-surface: #f3f4f6;
                        --giu-color-accent: #ffc107;
                        --giu-color-primary: #1B59C6;
                        --giu-color-success: #16a34a;
                        --giu-color-warn: #d97706;
                        --giu-color-danger: #dc2626;
                        margin: 14px auto 18px;
                        max-width: 1500px;
                        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                        color: #111827;
                        animation: giusATSlideDown 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
                    }

                    .giu-config-panel,
                    .giu-summary-panel {
                        background: #ffffff;
                        border: 1px solid #eeeeee;
                        border-radius: 6px;
                        padding: 12px;
                        position: relative;
                        margin-bottom: 14px;
                        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
                        animation: giusATFadeIn 0.3s ease;
                    }

                    .giu-config-panel::before,
                    .giu-summary-panel::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 3px;
                        background: #ffc107;
                    }

                    .giu-dayoff-notice {
                        display: flex; align-items: flex-start; gap: 10px; flex-wrap: wrap;
                        border-radius: 8px; padding: 11px 12px; margin: 0 0 14px;
                        border-left: 4px solid; font-size: 13.5px; line-height: 1.45;
                    }
                    .giu-dayoff-notice .ico { font-size: 16px; line-height: 1.3; flex: 0 0 auto; }
                    .giu-dayoff-notice .body { flex: 1 1 240px; min-width: 200px; }
                    .giu-dayoff-notice .body strong { font-weight: 800; }
                    .giu-dayoff-notice .sub { display: block; font-size: 12px; opacity: .85; margin-top: 2px; }
                    .giu-dayoff-notice .acts { display: inline-flex; gap: 7px; flex-wrap: wrap; align-items: center; }
                    .giu-dayoff-notice .gius-btn {
                        font: inherit; font-size: 12.5px; font-weight: 700; line-height: 1; cursor: pointer;
                        border-radius: 6px; padding: 7px 11px; border: 1px solid transparent;
                    }
                    .giu-dayoff-notice .dn-primary { background: #272c33; color: #fff; }
                    .giu-dayoff-notice .dn-ghost { background: transparent; }
                    .giu-dayoff-notice .dn-x {
                        font: inherit; font-size: 15px; font-weight: 700; line-height: 1; cursor: pointer;
                        background: transparent; border: none; opacity: .6; padding: 2px 4px;
                    }
                    .giu-dayoff-notice .dn-x:hover { opacity: 1; }
                    .giu-dayoff-notice.applied { background: #ecfdf5; border-left-color: #16a34a; color: #065f46; }
                    .giu-dayoff-notice.applied .dn-ghost { color: #065f46; border-color: #a7d8c1; }
                    .giu-dayoff-notice.warn { background: #fff8e1; border-left-color: #f59e0b; color: #8a6500; }
                    .giu-dayoff-notice.warn .dn-primary { background: #b45309; }
                    html.gius-dark .giu-dayoff-notice.applied { background: #14351f; border-left-color: #a6e3a1; color: #a6e3a1; }
                    html.gius-dark .giu-dayoff-notice.applied .dn-primary { background: #a6e3a1; color: #11271a; }
                    html.gius-dark .giu-dayoff-notice.applied .dn-ghost { color: #a6e3a1; border-color: #3a6b4d; }
                    html.gius-dark .giu-dayoff-notice.warn { background: #2a2410; border-left-color: #f9e2af; color: #f9e2af; }
                    html.gius-dark .giu-dayoff-notice.warn .dn-primary { background: #f9e2af; color: #2a2410; }

                    .giu-config-title,
                    .giu-attendance-section-title {
                        font-size: 16px;
                        font-weight: 700;
                        color: #1f2937;
                        margin: 8px 0 12px;
                    }

                    .giu-summary-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        margin: 8px 0 12px;
                    }

                    .giu-summary-toggle-hint {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 4px 10px;
                        border: 1px solid #cbd5e1;
                        border-radius: 999px;
                        background: #f8fafc;
                        color: #334155;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        user-select: none;
                        transition: background 0.15s, border-color 0.15s;
                    }

                    .giu-summary-toggle-hint:hover {
                        background: #eef2f7;
                        border-color: #94a3b8;
                    }

                    .giu-dayoff-row {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 10px;
                        padding: 8px 10px;
                        background: transparent;
                        border: 1px solid #e5e7eb;
                        border-radius: 6px;
                    }

                    .giu-dayoff-row label {
                        font-size: 13px;
                        font-weight: 700;
                        color: #111827;
                    }

                    .giu-dayoff-row select,
                    .giu-dayoff-row input,
                    .giu-holiday-controls select,
                    .giu-holiday-controls input {
                        height: 32px;
                        padding: 4px 8px;
                        border: 1px solid #9ca3af;
                        border-radius: 6px;
                        font-size: 13px;
                        background: #ffffff;
                        color: #111827;
                    }

                    .giu-dayoff-row select {
                        min-width: 140px;
                    }

                    .giu-dayoff-badge {
                        padding: 6px 10px;
                        border-radius: 6px;
                        background: #fff3cd;
                        border: 1px solid #ffc107;
                        color: #92400e;
                        font-weight: 700;
                        font-size: 13px;
                    }

                    .giu-config-divider {
                        width: 100%;
                        height: 1px;
                        background: #d1d5db;
                        margin: 14px 0 12px;
                    }

                    .giu-holiday-section {
                        display: grid;
                        gap: 10px;
                    }

                    .giu-holiday-title {
                        font-size: 14px;
                        font-weight: 700;
                        color: #1f2937;
                    }

                    .giu-holiday-controls {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        align-items: center;
                    }

                    .giu-add-holiday-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #d97706;
                        background: #ffc107;
                        color: #111827;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }

                    .giu-add-holiday-btn:hover {
                        background: #f59e0b;
                        transform: translateY(-1px);
                        box-shadow: 0 3px 10px rgba(255,193,7,0.4);
                    }

                    .giu-table-tools {
                        margin-top: 6px;
                        margin-bottom: 8px;
                    }

                    .giu-settings-subsection {
                        display: grid;
                        gap: 6px;
                    }

                    .giu-attendance-wrap button:focus-visible,
                    .giu-attendance-wrap input:focus-visible,
                    .giu-attendance-wrap select:focus-visible {
                        outline: 2px solid #60a5fa;
                        outline-offset: 1px;
                    }

                    .giu-holiday-table-wrap {
                        width: 100%;
                        overflow-x: auto;
                    }

                    .giu-holiday-table {
                        width: 100%;
                        border-collapse: collapse;
                        background: #ffffff;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        overflow: hidden;
                    }

                    .giu-holiday-table th,
                    .giu-holiday-table td {
                        border: 1px solid #d1d5db;
                        padding: 8px 10px;
                        font-size: 13px;
                        text-align: left;
                    }

                    .giu-holiday-table th {
                        background: #1f2937;
                        color: #ffffff;
                        font-weight: 700;
                    }

                    .giu-holiday-table td {
                        background: #f9fafb;
                        color: #111827;
                    }

                    .giu-holiday-empty {
                        padding: 10px 12px;
                        background: #ffffff;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        color: #6b7280;
                        font-size: 13px;
                    }

                    .giu-dayoff-empty {
                        padding: 8px 10px;
                    }

                    .giu-pagination {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        gap: 8px;
                        margin-top: 8px;
                        padding: 6px 10px;
                        background: #ffffff;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        font-size: 12px;
                        color: #374151;
                    }

                    .giu-pagination-summary {
                        color: #6b7280;
                    }

                    .giu-pagination-nav {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                    }

                    .giu-pagination-indicator {
                        min-width: 92px;
                        text-align: center;
                        font-weight: 600;
                        color: #1f2937;
                    }

                    .giu-pagination-size {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        color: #374151;
                    }

                    .giu-pagination-size select {
                        height: 28px;
                        padding: 0 6px;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                        background: #ffffff;
                        color: #111827;
                        font-size: 12px;
                    }

                    .giu-pagination-btn {
                        height: 28px;
                        padding: 0 10px;
                        border: 1px solid #d1d5db;
                        background: #f9fafb;
                        color: #1f2937;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 600;
                        cursor: pointer;
                    }

                    .giu-pagination-btn:hover:not(:disabled) {
                        background: #f3f4f6;
                        border-color: #9ca3af;
                    }

                    .giu-pagination-btn:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .giu-remove-holiday-btn {
                        height: 28px;
                        padding: 0 10px;
                        border: 1px solid #dc2626;
                        background: #fee2e2;
                        color: #991b1b;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-remove-holiday-btn:hover {
                        background: #fecaca;
                    }

                    .giu-summary-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 16px;
                        align-items: stretch;
                    }

                    .giu-summary-card {
                        background: #ffffff;
                        border: 1px solid #eeeeee;
                        border-radius: 6px;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
                        transition: box-shadow 0.2s ease;
                    }

                    .giu-summary-card:hover {
                        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
                    }

                    .giu-summary-card-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px 14px;
                        background: #272c33;
                        color: white;
                        border-bottom: 2px solid #ffc107;
                    }

                    .giu-summary-card-header h3 {
                        margin: 0;
                        font-size: 14px;
                        font-weight: 700;
                    }

                    .giu-period-label {
                        font-size: 12px;
                        background: #374151;
                        padding: 4px 10px;
                        border-radius: 999px;
                        border: 1px solid #4b5563;
                        color: #f9fafb;
                    }

                    .giu-summary-body {
                        padding: 14px 16px;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                    }

                    .giu-stat-list {
                        display: grid;
                        gap: 8px;
                    }

                    .giu-stat-row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 12px;
                        padding: 9px 10px;
                        background: #e5e7eb;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                    }

                    .giu-stat-left {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        min-width: 0;
                    }

                    .giu-stat-icon {
                        width: 20px;
                        text-align: center;
                        font-size: 14px;
                        color: #f59e0b;
                        flex-shrink: 0;
                    }

                    .giu-stat-label {
                        font-size: 13px;
                        font-weight: 600;
                        color: #374151;
                    }

                    .giu-stat-value {
                        font-size: 13px;
                        font-weight: 700;
                        color: #111827;
                        white-space: nowrap;
                    }

                    .giu-balance-positive {
                        background: #e8f5e9 !important;
                        border-color: #a5d6a7 !important;
                    }

                    .giu-balance-negative {
                        background: #fde8e8 !important;
                        border-color: #fca5a5 !important;
                    }

                    .giu-balance-tag {
                        margin-left: 8px;
                        padding: 3px 8px;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        display: inline-block;
                        vertical-align: middle;
                    }

                    .giu-tag-positive {
                        background: #bbf7d0;
                        color: #065f46;
                    }

                    .giu-tag-negative {
                        background: #fecaca;
                        color: #7f1d1d;
                    }

                    .giu-progress-wrap {
                        margin-top: 10px;
                        padding: 9px 10px;
                        background: #eef2f7;
                        border: 1px solid #d1d5db;
                        border-radius: 6px;
                    }

                    .giu-progress-top {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 12px;
                        font-weight: 700;
                        color: #374151;
                        margin-bottom: 6px;
                    }

                    .giu-progress-bar {
                        width: 100%;
                        height: 10px;
                        background: #d1d5db;
                        border-radius: 999px;
                        overflow: hidden;
                        border: 1px solid #c5ccd6;
                    }

                    .giu-progress-fill {
                        height: 100%;
                        border-radius: 999px;
                        transition: width 0.4s ease-out;
                    }

                    .giu-progress-fill-green {
                        background: linear-gradient(90deg, #22c55e, #16a34a);
                    }

                    .giu-progress-fill-amber {
                        background: linear-gradient(90deg, #ffc107, #e5ac00);
                    }

                    .giu-progress-fill-red {
                        background: linear-gradient(90deg, #f87171, #dc2626);
                    }

                    .giu-progress-pct-green { color: #16a34a; }
                    .giu-progress-pct-amber { color: #92400e; }
                    .giu-progress-pct-red { color: #dc2626; }

                    .giu-extra-box {
                        margin-top: 10px;
                        padding: 9px 10px;
                        background: #fff8e6;
                        border: 1px solid #f4d07a;
                        border-radius: 6px;
                        font-size: 12px;
                        color: #78350f;
                        font-weight: 700;
                    }

                    .giu-extra-box-blue {
                        background: #eff6ff;
                        border-color: #93c5fd;
                        color: #1e3a5f;
                    }

                    .giu-extra-box-absent {
                        background: #fee2e2;
                        border-color: #fca5a5;
                        color: #991b1b;
                    }

                    .giu-small-note {
                        margin-top: 10px;
                        font-size: 12px;
                        color: #1e40af;
                        background: #eff6ff;
                        border-left: 3px solid #1B59C6;
                        border-radius: 6px;
                        padding: 8px 10px;
                        line-height: 1.5;
                    }

                    .giu-rule-box {
                        margin-top: 10px;
                        padding: 8px 10px;
                        border: 1px solid #cbd5e1;
                        background: #f8fafc;
                        border-radius: 6px;
                        font-size: 12px;
                        color: #1f2937;
                        line-height: 1.5;
                    }

                    .giu-debug-box {
                        background: #fff7ed;
                        border: 1px solid #f5c68a;
                        color: #9a3412;
                        padding: 12px 14px;
                        border-radius: 6px;
                        margin-bottom: 14px;
                        font-size: 13px;
                    }

                    .giu-ramadan-section {
                        display: grid;
                        gap: 10px;
                    }

                    .giu-ramadan-title {
                        font-size: 14px;
                        font-weight: 700;
                        color: #1f2937;
                    }

                    .giu-ramadan-controls {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        align-items: center;
                    }

                    .giu-ramadan-controls input {
                        height: 32px;
                        padding: 4px 8px;
                        border: 1px solid #9ca3af;
                        border-radius: 6px;
                        font-size: 13px;
                        background: #ffffff;
                        color: #111827;
                    }

                    .giu-ramadan-controls label {
                        font-size: 13px;
                        font-weight: 600;
                        color: #374151;
                    }

                    .giu-save-ramadan-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #7c3aed;
                        background: #8b5cf6;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-save-ramadan-btn:hover {
                        background: #7c3aed;
                    }

                    .giu-reset-ramadan-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #c4b5fd;
                        background: #f5f3ff;
                        color: #6d28d9;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-reset-ramadan-btn:hover {
                        background: #ede9fe;
                    }

                    .giu-ramadan-badge {
                        padding: 6px 10px;
                        border-radius: 6px;
                        background: #ede9fe;
                        border: 1px solid #8b5cf6;
                        color: #5b21b6;
                        font-weight: 700;
                        font-size: 13px;
                    }

                    .giu-exam-section {
                        display: grid;
                        gap: 10px;
                    }

                    .giu-exam-title {
                        font-size: 14px;
                        font-weight: 700;
                        color: #1f2937;
                    }

                    .giu-exam-controls {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        align-items: center;
                    }

                    .giu-exam-controls input,
                    .giu-exam-controls select {
                        height: 32px;
                        padding: 4px 8px;
                        border: 1px solid #9ca3af;
                        border-radius: 6px;
                        font-size: 13px;
                        background: #ffffff;
                        color: #111827;
                    }

                    .giu-exam-controls label {
                        font-size: 13px;
                        font-weight: 600;
                        color: #374151;
                    }

                    .giu-save-exam-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #1648a8;
                        background: #1B59C6;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }

                    .giu-save-exam-btn:hover {
                        background: #1648a8;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 10px rgba(27,89,198,0.35);
                    }

                    .giu-clear-exam-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #93c5fd;
                        background: #eff6ff;
                        color: #1e40af;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-clear-exam-btn:hover {
                        background: #dbeafe;
                    }

                    .giu-exam-badge {
                        padding: 6px 10px;
                        border-radius: 6px;
                        background: #eff6ff;
                        border: 1px solid #60a5fa;
                        color: #1e3a8a;
                        font-weight: 700;
                        font-size: 13px;
                    }

                    .giu-collapsible-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        cursor: pointer;
                        user-select: none;
                        padding: 6px 4px;
                        border-radius: 6px;
                        transition: background 0.15s;
                    }

                    .giu-collapsible-header:hover {
                        background: rgba(0, 0, 0, 0.04);
                    }

                    .giu-collapsible-right {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .giu-restart-guide-btn {
                        height: 26px;
                        padding: 0 10px;
                        border-radius: 999px;
                        border: 1px solid #0284c7;
                        background: #e0f2fe;
                        color: #075985;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: background 0.15s, border-color 0.15s;
                    }

                    .giu-restart-guide-btn:hover {
                        background: #bae6fd;
                        border-color: #0369a1;
                    }

                    .giu-collapse-arrow {
                        font-size: 12px;
                        color: #6b7280;
                        transition: transform 0.2s;
                    }



                    .giu-late-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        cursor: pointer;
                        user-select: none;
                    }

                    .giu-late-header:hover {
                        opacity: 0.8;
                    }

                    .giu-expand-chevron {
                        font-size: 10px;
                        color: inherit;
                        transition: transform 0.2s;
                        margin-left: 6px;
                    }

                    .giu-expand-chevron.giu-chevron-open {
                        transform: rotate(180deg);
                    }

                    .giu-late-details {
                        margin-top: 8px;
                    }

                    .giu-late-detail-row {
                        display: flex;
                        justify-content: space-between;
                        padding: 4px 8px;
                        font-size: 12px;
                        color: #78350f;
                        border-bottom: 1px solid #f4d07a;
                        transition: background 0.15s;
                    }

                    .giu-late-detail-row:hover {
                        background: rgba(245, 158, 11, 0.1);
                    }

                    .giu-late-detail-row:last-child {
                        border-bottom: none;
                    }

                    .giu-detail-toggle-btn {
                        display: inline-flex;
                        align-items: center;
                        gap: 4px;
                        padding: 6px 12px;
                        margin-top: 10px;
                        border: 1px solid #d1d5db;
                        background: #f3f4f6;
                        color: #4b5563;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: background 0.15s, border-color 0.15s;
                    }

                    .giu-detail-toggle-btn:hover {
                        background: #e5e7eb;
                        border-color: #9ca3af;
                    }

                    .giu-toggle-chevron {
                        display: inline-block;
                        font-size: 10px;
                        transition: transform 0.2s;
                    }

                    .giu-toggle-chevron.giu-chevron-open {
                        transform: rotate(180deg);
                    }

                    .giu-override-section {
                        display: grid;
                        gap: 10px;
                    }

                    .giu-override-title {
                        font-size: 14px;
                        font-weight: 700;
                        color: #1f2937;
                    }

                    .giu-override-controls {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        align-items: center;
                    }

                    .giu-override-controls select,
                    .giu-override-controls input {
                        height: 32px;
                        padding: 4px 8px;
                        border: 1px solid #9ca3af;
                        border-radius: 6px;
                        font-size: 13px;
                        background: #ffffff;
                        color: #111827;
                    }

                    .giu-override-controls input[type="number"] {
                        width: 80px;
                    }

                    .giu-override-controls input[type="text"] {
                        width: 150px;
                    }

                    .giu-add-override-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #1648a8;
                        background: #1B59C6;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }

                    .giu-add-override-btn:hover {
                        background: #1648a8;
                        transform: translateY(-1px);
                        box-shadow: 0 4px 10px rgba(27,89,198,0.35);
                    }

                    .giu-comp-balance-box {
                        padding: 8px 10px;
                        border-radius: 6px;
                        border: 1px solid #99f6e4;
                        background: #f0fdfa;
                        font-size: 12px;
                        color: #0f766e;
                        line-height: 1.5;
                    }

                    .giu-comp-balance-badge {
                        display: inline-block;
                        margin-left: 6px;
                        padding: 2px 8px;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        border: 1px solid transparent;
                    }

                    .giu-comp-balance-positive {
                        background: #dcfce7;
                        border-color: #86efac;
                        color: #166534;
                    }

                    .giu-comp-balance-negative {
                        background: #fee2e2;
                        border-color: #fca5a5;
                        color: #991b1b;
                    }

                    .giu-annual-balance-badge {
                        display: inline-block;
                        margin-left: 6px;
                        padding: 2px 8px;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        border: 1px solid transparent;
                    }

                    .giu-annual-balance-positive {
                        background: #fce7f3;
                        border-color: #f9a8d4;
                        color: #9d174d;
                    }

                    .giu-annual-balance-negative {
                        background: #fee2e2;
                        border-color: #fca5a5;
                        color: #991b1b;
                    }

                    .giu-edit-annual-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #be185d;
                        background: #ec4899;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-edit-annual-btn:hover {
                        background: #db2777;
                    }

                    .giu-add-comp-btn {
                        height: 32px;
                        padding: 0 12px;
                        border: 1px solid #0f766e;
                        background: #14b8a6;
                        color: #ffffff;
                        border-radius: 6px;
                        font-size: 13px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-add-comp-btn:hover {
                        background: #0d9488;
                    }

                    .giu-comp-action-btn {
                        height: 28px;
                        padding: 0 8px;
                        border: 1px solid #5eead4;
                        background: #f0fdfa;
                        color: #0f766e;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 700;
                        cursor: pointer;
                        margin-right: 6px;
                    }

                    .giu-comp-action-btn:hover {
                        background: #ccfbf1;
                    }

                    .giu-absent-holiday-btn {
                        height: 24px;
                        padding: 0 10px;
                        border: 1px solid #be123c;
                        background: #fff1f2;
                        color: #9f1239;
                        border-radius: 999px;
                        font-size: 11px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: background 0.15s, border-color 0.15s, color 0.15s;
                    }

                    .giu-absent-holiday-btn:hover {
                        background: #ffe4e6;
                        border-color: #9f1239;
                        color: #881337;
                    }

                    .giu-absent-holiday-btn:focus-visible {
                        outline: 2px solid #fb7185;
                        outline-offset: 1px;
                    }

                    .giu-settings-action-btn {
                        height: 32px;
                        padding: 0 10px;
                        border: 1px solid #64748b;
                        background: #f8fafc;
                        color: #334155;
                        border-radius: 6px;
                        font-size: 12px;
                        font-weight: 700;
                        cursor: pointer;
                    }

                    .giu-settings-action-btn:hover {
                        background: #e2e8f0;
                    }

                    .giu-undo-btn {
                        border-color: #b45309;
                        background: #fffbeb;
                        color: #92400e;
                    }

                    .giu-undo-btn:hover {
                        background: #fef3c7;
                    }

                    .giu-holiday-controls .giu-undo-btn {
                        border-color: #f59e0b;
                        background: #fffbeb;
                        color: #b45309;
                    }

                    .giu-holiday-controls .giu-undo-btn:hover {
                        background: #fef3c7;
                        border-color: #d97706;
                    }

                    .giu-undo-btn-overrides {
                        border-color: #60a5fa;
                        background: #eff6ff;
                        color: #1d4ed8;
                    }

                    .giu-undo-btn-overrides:hover {
                        background: #dbeafe;
                        border-color: #1B59C6;
                    }

                    .giu-undo-btn-compensation {
                        border-color: #5eead4;
                        background: #f0fdfa;
                        color: #0f766e;
                    }

                    .giu-undo-btn-compensation:hover {
                        background: #ccfbf1;
                        border-color: #2dd4bf;
                    }

                    .giu-conflict-box {
                        margin-top: 6px;
                        padding: 8px 10px;
                        border-radius: 6px;
                        border: 1px solid #fda4af;
                        background: #fff1f2;
                        color: #9f1239;
                        font-size: 12px;
                    }

                    .giu-conflict-empty {
                        border-color: #fecdd3;
                        background: #fff5f7;
                        color: #be123c;
                    }

                    .giu-conflict-title {
                        font-size: 12px;
                        font-weight: 800;
                        color: inherit;
                        margin-bottom: 4px;
                    }

                    .giu-conflict-subtitle {
                        font-size: 11px;
                        font-weight: 600;
                        color: #be123c;
                        margin-bottom: 6px;
                    }

                    .giu-conflict-list {
                        display: grid;
                        gap: 6px;
                    }

                    .giu-conflict-row {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 8px;
                        padding: 6px 10px;
                        background: #fff;
                        border: 1px solid #fecdd3;
                        border-radius: 6px;
                        font-weight: 700;
                        color: #9f1239;
                    }

                    .giu-conflict-tags {
                        font-size: 11px;
                        color: #e11d48;
                        font-weight: 700;
                        text-align: right;
                    }

                    .giu-conflict-more {
                        font-size: 11px;
                        font-weight: 700;
                        color: #e11d48;
                        text-align: right;
                    }

                    .giu-conflict-badge {
                        display: inline-block;
                        margin-left: 6px;
                        padding: 2px 6px;
                        border-radius: 999px;
                        border: 1px solid #f97316;
                        background: #fff7ed;
                        color: #c2410c;
                        font-size: 10px;
                        font-weight: 700;
                        vertical-align: middle;
                    }

                    .giu-audit-reason {
                        font-size: 12px;
                        color: #1e3a5f;
                    }

                    .giu-override-badge {
                        display: inline-block;
                        padding: 2px 6px;
                        border-radius: 6px;
                        font-size: 10px;
                        font-weight: 700;
                        margin-left: 6px;
                        vertical-align: middle;
                    }

                    .giu-override-badge-full {
                        background: #dbeafe;
                        color: #1e40af;
                        border: 1px solid #93c5fd;
                    }

                    .giu-override-badge-custom {
                        background: #fef3c7;
                        color: #92400e;
                        border: 1px solid #fcd34d;
                    }



                    .giu-expand-wrapper {
                        display: grid;
                        grid-template-rows: 0fr;
                        transition: grid-template-rows 0.3s ease-out;
                    }

                    .giu-expand-wrapper.giu-expanded {
                        grid-template-rows: 1fr;
                    }

                    .giu-expand-inner {
                        overflow: hidden;
                    }

                    .giu-guide-layer {
                        position: fixed;
                        inset: 0;
                        z-index: 2147483646;
                        pointer-events: auto;
                    }

                    .giu-guide-spotlight {
                        position: fixed;
                        border-radius: 10px;
                        border: 2px solid #f59e0b;
                        box-shadow: 0 0 0 9999px rgba(17, 24, 39, 0.68), 0 10px 30px rgba(0, 0, 0, 0.35);
                        transition: all 0.25s ease;
                        pointer-events: none;
                    }

                    .giu-guide-tooltip {
                        position: fixed;
                        width: min(360px, calc(100vw - 24px));
                        background: #ffffff;
                        border: 1px solid #d1d5db;
                        border-radius: 12px;
                        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.30);
                        padding: 14px;
                        color: #111827;
                        transition: transform 0.2s ease, opacity 0.2s ease;
                        animation: giu-guide-fade-in 0.2s ease;
                    }

                    .giu-guide-progress {
                        font-size: 11px;
                        font-weight: 700;
                        color: #6b7280;
                        margin-bottom: 6px;
                        letter-spacing: 0.02em;
                    }

                    .giu-guide-title {
                        font-size: 16px;
                        font-weight: 800;
                        color: #0f172a;
                        margin: 0 0 8px;
                        line-height: 1.3;
                    }

                    .giu-guide-description {
                        font-size: 13px;
                        color: #374151;
                        line-height: 1.55;
                        margin: 0 0 12px;
                    }

                    .giu-guide-actions {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 8px;
                    }

                    .giu-guide-left,
                    .giu-guide-right {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .giu-guide-btn {
                        height: 32px;
                        padding: 0 12px;
                        border-radius: 8px;
                        border: 1px solid #d1d5db;
                        background: #f8fafc;
                        color: #1f2937;
                        font-size: 12px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: all 0.15s ease;
                    }

                    .giu-guide-btn:hover {
                        background: #e5e7eb;
                        border-color: #9ca3af;
                    }

                    .giu-guide-btn-primary {
                        border-color: #1648a8;
                        background: linear-gradient(60deg, #1B59C6, #2d6fe0);
                        color: #ffffff;
                    }

                    .giu-guide-btn-primary:hover {
                        background: linear-gradient(60deg, #1648a8, #1B59C6);
                        border-color: #1648a8;
                        box-shadow: 0 4px 10px rgba(27,89,198,0.35);
                    }

                    .giu-guide-btn-ghost {
                        background: #ffffff;
                    }

                    .giu-guide-target-pulse {
                        animation: giu-guide-pulse 1.5s ease-in-out infinite;
                    }

                    @keyframes giu-guide-fade-in {
                        from {
                            opacity: 0;
                            transform: translateY(6px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes giu-guide-pulse {
                        0% {
                            box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.35);
                        }
                        70% {
                            box-shadow: 0 0 0 12px rgba(14, 165, 233, 0);
                        }
                        100% {
                            box-shadow: 0 0 0 0 rgba(14, 165, 233, 0);
                        }
                    }

                    @media (max-width: 900px) {
                        .giu-summary-grid {
                            grid-template-columns: 1fr;
                        }

                        .giu-summary-card-header {
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 8px;
                        }

                        .giu-holiday-controls,
                        .giu-dayoff-row,
                        .giu-ramadan-controls,
                        .giu-override-controls {
                            flex-direction: column;
                            align-items: stretch;
                        }

                        .giu-guide-actions {
                            flex-direction: column;
                            align-items: stretch;
                        }

                        .giu-guide-left,
                        .giu-guide-right {
                            justify-content: space-between;
                        }
                    }

                    @keyframes giusATSlideDown {
                        from { opacity: 0; transform: translateY(-14px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }

                    @keyframes giusATFadeIn {
                        from { opacity: 0; transform: translateY(6px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                `;
                document.head.appendChild(style);
            }

            // ═══════════════════════════════════════════════════════════
            //  UI Factory Helpers (small, composable DOM builders)
            // ═══════════════════════════════════════════════════════════

            function createUiButton(text, className, onClick) {
                const btn = document.createElement("button");
                btn.type = "button";
                if (className) btn.className = className;
                btn.textContent = text;
                btn.setAttribute("aria-label", String(text || "action"));
                if (typeof onClick === "function") btn.addEventListener("click", onClick);
                return btn;
            }

            function createUiInput(type, id, opts) {
                const input = document.createElement("input");
                input.type = type;
                if (id) input.id = id;
                const options = opts || {};
                if (options.value !== undefined) input.value = options.value;
                if (options.placeholder !== undefined) input.placeholder = options.placeholder;
                if (options.min !== undefined) input.min = String(options.min);
                if (options.max !== undefined) input.max = String(options.max);
                if (options.step !== undefined) input.step = String(options.step);
                if (options.width) input.style.width = options.width;
                if (options.hidden) input.style.display = "none";
                if (options.className) input.className = options.className;
                return input;
            }

            function createUiSelect(id, options, value) {
                const select = document.createElement("select");
                if (id) select.id = id;
                (options || []).forEach(function (opt) {
                    const o = document.createElement("option");
                    o.value = opt.value;
                    o.textContent = opt.label;
                    select.appendChild(o);
                });
                if (value !== undefined) select.value = value;
                return select;
            }

            function createUiLabel(htmlFor, text) {
                const label = document.createElement("label");
                if (htmlFor) label.setAttribute("for", htmlFor);
                label.textContent = text;
                return label;
            }

            function createUiDivider(className) {
                const div = document.createElement("div");
                div.className = className || "giu-config-divider";
                return div;
            }

            function createUiSectionTitle(text, className) {
                const el = document.createElement("div");
                el.className = className || "";
                el.textContent = text;
                return el;
            }

            function createUiDescription(text, cssText) {
                const desc = document.createElement("div");
                desc.style.cssText = cssText || "font-size:11px;color:#6b7280;margin:0 0 8px;line-height:1.4;";
                desc.textContent = text;
                return desc;
            }

            function createInlineModalPrompt(title, initialValue, onConfirm) {
                const layer = document.createElement("div");
                layer.style.cssText = "position:fixed;inset:0;background:rgba(15,23,42,0.45);display:flex;align-items:center;justify-content:center;z-index:2147483646;";
                const modal = document.createElement("div");
                modal.style.cssText = "width:min(420px,92vw);background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:12px;display:grid;gap:10px;";
                const h = document.createElement("div");
                h.style.cssText = "font-size:14px;font-weight:700;color:#1f2937;";
                h.textContent = title;
                const input = document.createElement("input");
                input.type = "text";
                input.value = String(initialValue == null ? "" : initialValue);
                input.style.cssText = "height:34px;padding:0 10px;border:1px solid #9ca3af;border-radius:6px;";
                const actions = document.createElement("div");
                actions.style.cssText = "display:flex;justify-content:flex-end;gap:8px;";
                const cancel = createUiButton("Cancel", "giu-settings-action-btn", function () {
                    if (layer.parentNode) layer.parentNode.removeChild(layer);
                });
                const ok = createUiButton("Save", "giu-add-holiday-btn", function () {
                    const keep = onConfirm(input.value);
                    if (keep !== false && layer.parentNode) layer.parentNode.removeChild(layer);
                });
                actions.appendChild(cancel);
                actions.appendChild(ok);
                modal.appendChild(h);
                modal.appendChild(input);
                modal.appendChild(actions);
                layer.appendChild(modal);
                document.body.appendChild(layer);
                input.focus();
                input.select();
            }

            // Multi-field sibling of createInlineModalPrompt. `fields` is an array of
            // { label, value }. onConfirm receives an array of the entered string
            // values (same order as `fields`); return false to keep the modal open.
            function createInlineModalForm(title, fields, onConfirm) {
                const layer = document.createElement("div");
                layer.style.cssText = "position:fixed;inset:0;background:rgba(15,23,42,0.45);display:flex;align-items:center;justify-content:center;z-index:2147483646;";
                const modal = document.createElement("div");
                modal.style.cssText = "width:min(420px,92vw);background:#fff;border:1px solid #d1d5db;border-radius:8px;padding:12px;display:grid;gap:10px;";
                const h = document.createElement("div");
                h.style.cssText = "font-size:14px;font-weight:700;color:#1f2937;";
                h.textContent = title;
                modal.appendChild(h);

                const inputs = (fields || []).map(function (field) {
                    const label = document.createElement("label");
                    label.style.cssText = "display:grid;gap:4px;font-size:12.5px;font-weight:600;color:#374151;";
                    const labelText = document.createElement("span");
                    labelText.textContent = field.label;
                    const input = document.createElement("input");
                    input.type = "text";
                    input.value = String(field.value == null ? "" : field.value);
                    input.style.cssText = "height:34px;padding:0 10px;border:1px solid #9ca3af;border-radius:6px;font-weight:400;";
                    label.appendChild(labelText);
                    label.appendChild(input);
                    modal.appendChild(label);
                    return input;
                });

                const actions = document.createElement("div");
                actions.style.cssText = "display:flex;justify-content:flex-end;gap:8px;";
                const cancel = createUiButton("Cancel", "giu-settings-action-btn", function () {
                    if (layer.parentNode) layer.parentNode.removeChild(layer);
                });
                const ok = createUiButton("Save", "giu-add-holiday-btn", function () {
                    const keep = onConfirm(inputs.map(function (i) { return i.value; }));
                    if (keep !== false && layer.parentNode) layer.parentNode.removeChild(layer);
                });
                actions.appendChild(cancel);
                actions.appendChild(ok);
                modal.appendChild(actions);
                layer.appendChild(modal);
                document.body.appendChild(layer);
                if (inputs[0]) { inputs[0].focus(); inputs[0].select(); }
            }

            function wrapSettingsSection(sectionKey, title, bodyNode, defaultExpanded) {
                const wrap = document.createElement("div");
                wrap.className = "giu-settings-subsection";
                const header = document.createElement("button");
                header.type = "button";
                header.className = "giu-detail-toggle-btn";
                header.style.marginTop = "0";
                const isOpen = getSectionExpanded(sectionKey, defaultExpanded !== false);
                const chevron = document.createElement("span");
                chevron.className = "giu-toggle-chevron";
                chevron.textContent = "▼";
                if (isOpen) chevron.classList.add("giu-chevron-open");
                const text = document.createElement("span");
                text.textContent = title;
                header.appendChild(text);
                header.appendChild(chevron);
                const content = document.createElement("div");
                content.className = "giu-expand-wrapper";
                if (isOpen) content.classList.add("giu-expanded");
                const inner = document.createElement("div");
                inner.className = "giu-expand-inner";
                inner.appendChild(bodyNode);
                content.appendChild(inner);
                header.addEventListener("click", function () {
                    const nowOpen = !content.classList.contains("giu-expanded");
                    content.classList.toggle("giu-expanded", nowOpen);
                    chevron.classList.toggle("giu-chevron-open", nowOpen);
                    setSectionExpanded(sectionKey, nowOpen);
                });
                wrap.appendChild(header);
                wrap.appendChild(content);
                return wrap;
            }

            // Pagination helper for settings tables.
            // Returns { pageItems, controls, page, pageSize, totalPages }.
            // Persists state per tableKey in localStorage; renders «‹ prev | page X / Y |
            // next › with a page-size selector. On change it re-renders the whole UI
            // (the only render path used in the rest of the file).
            function createPagination(tableKey, items, opts) {
                const options = opts || {};
                const allowedSizes = options.pageSizes || PAGINATION_PAGE_SIZE_OPTIONS;
                const defaultSize = options.defaultPageSize || PAGINATION_DEFAULT_PAGE_SIZE;
                const total = (items || []).length;

                const stored = getPaginationStateForKey(tableKey, { pageSize: defaultSize });
                let pageSize = Number(stored.pageSize);
                if (!Number.isFinite(pageSize) || pageSize <= 0) pageSize = defaultSize;
                if (allowedSizes.indexOf(pageSize) === -1) pageSize = defaultSize;

                const totalPages = Math.max(1, Math.ceil(total / pageSize));
                let page = Number(stored.page);
                if (!Number.isFinite(page) || page < 1) page = 1;
                if (page > totalPages) page = totalPages;

                const start = (page - 1) * pageSize;
                const pageItems = (items || []).slice(start, start + pageSize);

                // When everything fits on a single page, the controls add no
                // value — return them hidden so call sites can keep their
                // unconditional appendChild without leaving a visible empty bar.
                const fitsOnePage = total <= pageSize;

                const controls = document.createElement("div");
                controls.className = "giu-pagination";
                if (fitsOnePage) controls.style.display = "none";

                const summary = document.createElement("div");
                summary.className = "giu-pagination-summary";
                if (total === 0) {
                    summary.textContent = "0 items";
                } else {
                    const last = Math.min(start + pageSize, total);
                    summary.textContent = `Showing ${start + 1}–${last} of ${total}`;
                }

                const nav = document.createElement("div");
                nav.className = "giu-pagination-nav";

                const goTo = function (nextPage) {
                    const clamped = Math.max(1, Math.min(totalPages, nextPage));
                    if (clamped === page) return;
                    setPaginationStateForKey(tableKey, { page: clamped, pageSize });
                    renderEnhancedUI();
                };

                const prevBtn = createUiButton("‹ Prev", "giu-pagination-btn", function () {
                    goTo(page - 1);
                });
                prevBtn.disabled = page <= 1;

                const indicator = document.createElement("span");
                indicator.className = "giu-pagination-indicator";
                indicator.textContent = `Page ${page} / ${totalPages}`;

                const nextBtn = createUiButton("Next ›", "giu-pagination-btn", function () {
                    goTo(page + 1);
                });
                nextBtn.disabled = page >= totalPages;

                const sizeWrap = document.createElement("label");
                sizeWrap.className = "giu-pagination-size";
                sizeWrap.textContent = "Per page:";
                const sizeSelect = createUiSelect(
                    "",
                    allowedSizes.map(function (n) { return { value: String(n), label: String(n) }; }),
                    String(pageSize)
                );
                sizeSelect.addEventListener("change", function () {
                    const newSize = Number(sizeSelect.value) || defaultSize;
                    setPaginationStateForKey(tableKey, { page: 1, pageSize: newSize });
                    renderEnhancedUI();
                });
                sizeWrap.appendChild(sizeSelect);

                nav.appendChild(prevBtn);
                nav.appendChild(indicator);
                nav.appendChild(nextBtn);

                controls.appendChild(summary);
                controls.appendChild(nav);
                controls.appendChild(sizeWrap);

                return { pageItems, controls, page, pageSize, totalPages, total };
            }

            // ═══════════════════════════════════════════════════════════
            //  UI Components
            // ═══════════════════════════════════════════════════════════

            function createHolidayTable() {
                const container = document.createElement("div");
                container.className = "giu-holiday-table-wrap";

                const holidays = getStoredHolidays();
                const conflictTagMap = buildConflictTagMap();

                if (!holidays.length) {
                    const empty = document.createElement("div");
                    empty.className = "giu-holiday-empty";
                    empty.textContent = "No saved holidays or leaves.";
                    container.appendChild(empty);
                    return container;
                }

                const filterBar = document.createElement("div");
                filterBar.className = "giu-dayoff-row giu-table-tools";
                const initialTypeFilter = getTableFilterValue("holidays", "type", "");
                const initialDateFilter = getTableFilterValue("holidays", "date", "");
                const typeFilter = createUiSelect("", [
                    { value: "", label: "All categories" },
                    { value: "holiday", label: "Holiday" },
                    { value: "annual", label: "Annual Leave" }
                ], initialTypeFilter);
                const dateFilter = createUiInput("text", "", { placeholder: "Filter by date (YYYY-MM)", value: initialDateFilter });
                dateFilter.style.minWidth = "160px";

                const table = document.createElement("table");
                table.className = "giu-holiday-table";

                table.innerHTML = `
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="giu-select-all" /></th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Date / Range</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;

                const tbody = table.querySelector("tbody");
                const getFiltered = function () {
                    const tf = typeFilter.value;
                    const df = String(dateFilter.value || "").trim();
                    return holidays.filter(function (h) {
                        if (tf && h.category !== tf) return false;
                        if (!df) return true;
                        return formatHolidayEntry(h).indexOf(df) !== -1;
                    });
                };
                const pagination = createPagination("holidays", getFiltered());
                const selectAll = table.querySelector(".giu-select-all");

                const bulkBtn = createUiButton("Remove Selected", "giu-remove-holiday-btn", function () {
                    const checked = Array.from(tbody.querySelectorAll("input[type='checkbox'][data-key]:checked"));
                    if (!checked.length) return;
                    const removeKeys = new Set(checked.map(function (el) { return el.getAttribute("data-key"); }));
                    const updated = getStoredHolidays().filter(function (h) {
                        return !removeKeys.has(holidayEntryToKey(h));
                    });
                    saveUndoSnapshot("holidays", `Bulk remove ${checked.length} holiday/leave`);
                    setStoredHolidays(updated);
                    renderEnhancedUI();
                });
                bulkBtn.style.marginLeft = "auto";
                filterBar.appendChild(typeFilter);
                filterBar.appendChild(dateFilter);
                filterBar.appendChild(bulkBtn);
                container.appendChild(filterBar);

                pagination.pageItems.forEach((holiday) => {
                    const tr = document.createElement("tr");
                    const pickTd = document.createElement("td");
                    const pick = document.createElement("input");
                    pick.type = "checkbox";
                    pick.setAttribute("data-key", holidayEntryToKey(holiday));
                    pickTd.appendChild(pick);

                    const categoryTd = document.createElement("td");
                    categoryTd.textContent = holiday.category === "annual" ? "Annual Leave" : "Holiday";

                    const typeTd = document.createElement("td");
                    typeTd.textContent = holiday.type === "single" ? "Single" : "Range";

                    const valueTd = document.createElement("td");
                    valueTd.textContent = formatHolidayEntry(holiday);
                    if (holiday.type === "single") {
                        const tags = conflictTagMap.get(holiday.date);
                        if (tags && tags.length > 1) {
                            valueTd.appendChild(createConflictBadge("Conflict", tags.join(" + ")));
                        }
                    } else if (holiday.type === "range") {
                        const start = normalizeYMD(holiday.start || "");
                        const end = normalizeYMD(holiday.end || "");
                        if (start && end && start <= end) {
                            let conflictCount = 0;
                            eachYmdInRange(start, end, function (date) {
                                const tags = conflictTagMap.get(date);
                                if (tags && tags.length > 1) conflictCount += 1;
                            });
                            if (conflictCount > 0) {
                                valueTd.appendChild(createConflictBadge(`Conflict x${conflictCount}`));
                            }
                        }
                    }

                    const actionTd = document.createElement("td");
                    actionTd.appendChild(createUiButton("Remove", "giu-remove-holiday-btn", function () {
                        const targetKey = holidayEntryToKey(holiday);
                        const updated = getStoredHolidays().filter(item => holidayEntryToKey(item) !== targetKey);
                        saveUndoSnapshot("holidays", "Remove holiday");
                        setStoredHolidays(updated);
                        renderEnhancedUI();
                    }));

                    tr.appendChild(pickTd);
                    tr.appendChild(categoryTd);
                    tr.appendChild(typeTd);
                    tr.appendChild(valueTd);
                    tr.appendChild(actionTd);

                    tbody.appendChild(tr);
                });
                if (selectAll) {
                    selectAll.addEventListener("change", function () {
                        const boxes = tbody.querySelectorAll("input[type='checkbox'][data-key]");
                        boxes.forEach(function (b) { b.checked = !!selectAll.checked; });
                    });
                }
                typeFilter.addEventListener("change", function () {
                    setTableFilterValue("holidays", "type", typeFilter.value || "");
                    renderEnhancedUI();
                });
                dateFilter.addEventListener("change", function () {
                    setTableFilterValue("holidays", "date", dateFilter.value || "");
                    renderEnhancedUI();
                });

                container.appendChild(table);
                container.appendChild(pagination.controls);
                return container;
            }

            // ───────────────────────────────────────────────────────────────────────
            //  Config panel section builders
            //  Each helper returns a single DOM node and is called by createConfigPanel.
            //  Splitting these out keeps the panel orchestrator small and makes
            //  individual sections easier to evolve independently.
            // ───────────────────────────────────────────────────────────────────────

            function createConfigPanelHeader(initialExpanded) {
                const panel = document.createElement("div");
                panel.className = "giu-config-panel";

                const headerRow = document.createElement("div");
                headerRow.className = "giu-collapsible-header";

                const title = document.createElement("div");
                title.className = "giu-config-title";
                title.style.margin = "0";
                title.textContent = "\u2699\uFE0F Attendance Settings";

                const chevron = document.createElement("span");
                chevron.className = "giu-expand-chevron";
                chevron.textContent = "\u25BC";

                const rightActions = document.createElement("div");
                rightActions.className = "giu-collapsible-right";

                const restartGuideBtn = createUiButton("Restart Guide", "giu-restart-guide-btn", function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    restartOnboardingGuide();
                });

                rightActions.appendChild(restartGuideBtn);
                rightActions.appendChild(chevron);
                headerRow.appendChild(title);
                headerRow.appendChild(rightActions);
                panel.appendChild(headerRow);

                const bodyWrap = document.createElement("div");
                bodyWrap.className = "giu-expand-wrapper";

                const bodyInner = document.createElement("div");
                bodyInner.className = "giu-expand-inner";
                bodyInner.style.paddingTop = "8px";

                headerRow.addEventListener("click", function () {
                    bodyWrap.classList.toggle("giu-expanded");
                    chevron.classList.toggle("giu-chevron-open");
                });

                if (initialExpanded) {
                    bodyWrap.classList.add("giu-expanded");
                    chevron.classList.add("giu-chevron-open");
                }

                return { panel, bodyWrap, bodyInner };
            }

            function createDayOffControlsRow(selectedDayCode, selectedDayFullName, onDayChange, defaultEffectiveDate) {
                const dayRow = document.createElement("div");
                dayRow.className = "giu-dayoff-row";

                const dayLabel = createUiLabel("giu-day-select", "Day Off");

                const select = createUiSelect("giu-day-select", [
                    { value: "", label: "---" },
                    { value: "Sat", label: "Saturday" },
                    { value: "Sun", label: "Sunday" },
                    { value: "Mon", label: "Monday" },
                    { value: "Tue", label: "Tuesday" },
                    { value: "Wed", label: "Wednesday" },
                    { value: "Thu", label: "Thursday" }
                ], selectedDayCode);

                const scheduleLabel = createUiLabel("giu-dayoff-effective-date", "Apply from");
                const defaultEffective = (!isDayOffConfigured() && defaultEffectiveDate) ? defaultEffectiveDate : getTodayLocalYMD();
                const effectiveDateInput = createUiInput("date", "giu-dayoff-effective-date", { value: defaultEffective });
                const applyFromDateBtn = createUiButton("Apply", "giu-add-holiday-btn");

                const effectiveBadge = document.createElement("div");
                effectiveBadge.className = "giu-dayoff-badge";

                const timelineBadge = document.createElement("div");
                timelineBadge.className = "giu-dayoff-badge";
                timelineBadge.style.background = "#eef2ff";
                timelineBadge.style.borderColor = "#818cf8";
                timelineBadge.style.color = "#3730a3";

                function refreshEffectiveDayOffBadge() {
                    const todayDayOff = getDayOffFullNameForDate(getTodayLocalYMD(), selectedDayCode)
                        || getSelectedDayOffFullName(select.value)
                        || selectedDayFullName;
                    if (todayDayOff) {
                        effectiveBadge.textContent = `Current effective day off: ${todayDayOff}`;
                        effectiveBadge.style.display = "";
                    } else {
                        effectiveBadge.style.display = "none";
                    }

                    const today = getTodayLocalYMD();
                    const nextChange = getStoredDayOffSchedule().find(function (item) {
                        return item.startDate > today;
                    });
                    if (nextChange) {
                        timelineBadge.textContent = `Next change: ${nextChange.startDate} -> ${getSelectedDayOffFullName(nextChange.code) || nextChange.code}`;
                    } else {
                        timelineBadge.textContent = "Next change: none";
                    }
                    timelineBadge.style.display = "";
                }

                select.addEventListener("change", function () {
                    refreshEffectiveDayOffBadge();
                    if (typeof onDayChange === "function") onDayChange();
                });

                applyFromDateBtn.addEventListener("click", function () {
                    const pickedDate = normalizeYMD(effectiveDateInput.value || "");
                    const pickedCode = select.value;
                    if (!pickedDate) {
                        alert("Please choose a valid effective date.");
                        return;
                    }
                    if (!pickedCode) {
                        alert("Please choose a day off first.");
                        return;
                    }

                    const currentSchedule = getStoredDayOffSchedule().filter(function (item) {
                        return item.startDate !== pickedDate;
                    });
                    currentSchedule.push({ startDate: pickedDate, code: pickedCode });
                    setStoredDayOffSchedule(currentSchedule);
                    renderEnhancedUI();
                });

                dayRow.appendChild(dayLabel);
                dayRow.appendChild(select);
                dayRow.appendChild(scheduleLabel);
                dayRow.appendChild(effectiveDateInput);
                dayRow.appendChild(applyFromDateBtn);
                dayRow.appendChild(effectiveBadge);
                dayRow.appendChild(timelineBadge);
                refreshEffectiveDayOffBadge();
                return dayRow;
            }

            function createSettingsExportPanel() {
                const exportPanel = document.createElement("div");
                exportPanel.style.display = "none";
                exportPanel.style.marginTop = "8px";
                exportPanel.style.padding = "8px";
                exportPanel.style.border = "1px solid #cbd5e1";
                exportPanel.style.borderRadius = "4px";
                exportPanel.style.background = "#ffffff";

                const exportInfo = document.createElement("div");
                exportInfo.style.fontSize = "12px";
                exportInfo.style.color = "#475569";
                exportInfo.style.marginBottom = "6px";
                exportInfo.textContent = "Copy this JSON and save it as a .json file.";

                const exportTextArea = document.createElement("textarea");
                exportTextArea.readOnly = true;
                exportTextArea.style.width = "100%";
                exportTextArea.style.minHeight = "120px";
                exportTextArea.style.fontFamily = "Consolas, Monaco, monospace";
                exportTextArea.style.fontSize = "12px";
                exportTextArea.style.padding = "8px";
                exportTextArea.style.border = "1px solid #cbd5e1";
                exportTextArea.style.borderRadius = "4px";
                exportTextArea.style.background = "#f8fafc";
                exportTextArea.style.color = "#0f172a";

                const copyExportBtn = createUiButton("Copy JSON", "giu-settings-action-btn", async function () {
                    const text = exportTextArea.value || "";
                    if (!text) return;
                    try {
                        if (navigator.clipboard && navigator.clipboard.writeText) {
                            await navigator.clipboard.writeText(text);
                            alert("JSON copied.");
                            return;
                        }
                    } catch {}
                    try {
                        exportTextArea.focus();
                        exportTextArea.select();
                        document.execCommand("copy");
                        alert("JSON copied.");
                    } catch {
                        alert("Copy blocked. Select text manually and copy.");
                    }
                });
                copyExportBtn.style.marginTop = "6px";

                exportPanel.appendChild(exportInfo);
                exportPanel.appendChild(exportTextArea);
                exportPanel.appendChild(copyExportBtn);
                return { panel: exportPanel, textArea: exportTextArea };
            }

            function createSettingsActionsRow() {
                const settingsActionRow = document.createElement("div");
                settingsActionRow.className = "giu-dayoff-row";
                settingsActionRow.style.marginTop = "8px";

                const exportPanelData = createSettingsExportPanel();

                const exportBtn = createUiButton("Export Settings", "giu-settings-action-btn", async function () {
                    const snapshot = exportSettingsSnapshot();
                    const text = JSON.stringify(snapshot, null, 2);
                    exportPanelData.textArea.value = text;
                    exportPanelData.panel.style.display = "";
                    try {
                        if (navigator.clipboard && navigator.clipboard.writeText) {
                            await navigator.clipboard.writeText(text);
                            alert("Settings copied to clipboard as JSON. Backup panel also opened.");
                            return;
                        }
                    } catch {
                        alert("Clipboard blocked. Export JSON shown in panel below.");
                    }
                });

                const importBtn = createUiButton("Import Settings", "giu-settings-action-btn", function () {
                    const fileInput = document.createElement("input");
                    fileInput.type = "file";
                    fileInput.accept = ".json,application/json,text/json";
                    fileInput.style.display = "none";

                    fileInput.addEventListener("change", function () {
                        const file = fileInput.files && fileInput.files[0];
                        if (!file) return;

                        const reader = new FileReader();
                        reader.onload = function () {
                            try {
                                const text = String(reader.result || "");
                                const parsed = JSON.parse(text);
                                const report = importSettingsSnapshot(parsed);
                                renderEnhancedUI();
                                const notes = report.notes && report.notes.length ? ` Notes: ${report.notes.join(" ")}` : "";
                                alert(`Settings imported. Accepted: ${report.accepted}. Rejected: ${report.rejected}.${notes}`);
                            } catch (e) {
                                alert("Invalid settings JSON file: " + (e && e.message ? e.message : "Unknown error"));
                            }
                        };
                        reader.onerror = function () {
                            alert("Could not read selected file.");
                        };
                        reader.readAsText(file);
                    });

                    document.body.appendChild(fileInput);
                    fileInput.click();
                    setTimeout(function () {
                        if (fileInput.parentNode) fileInput.parentNode.removeChild(fileInput);
                    }, 0);
                });

                const auditLabel = document.createElement("label");
                auditLabel.style.display = "inline-flex";
                auditLabel.style.alignItems = "center";
                auditLabel.style.gap = "6px";
                auditLabel.style.fontWeight = "700";
                auditLabel.style.fontSize = "12px";
                auditLabel.style.color = "#334155";

                const auditToggle = document.createElement("input");
                auditToggle.type = "checkbox";
                auditToggle.checked = isAuditModeEnabled();
                auditToggle.addEventListener("change", function () {
                    setAuditModeEnabled(auditToggle.checked);
                    renderEnhancedUI();
                });

                const auditText = document.createElement("span");
                auditText.textContent = "Audit log mode";

                auditLabel.appendChild(auditToggle);
                auditLabel.appendChild(auditText);

                settingsActionRow.appendChild(exportBtn);
                settingsActionRow.appendChild(importBtn);
                settingsActionRow.appendChild(auditLabel);

                const today = getTodayLocalYMD();
                const currentPeriodKey = getPayrollPeriodKey(today);
                const currentPeriod = getPayrollPeriodBounds(currentPeriodKey);
                let miniComp = 0;
                if (currentPeriod && currentPeriod.start && currentPeriod.end) {
                    const periods = groupRowsByPayrollPeriod(getAttendanceRows());
                    const allRows = (periods || []).flatMap(function (p) { return p.rows || []; });
                    const periodRows = allRows.filter(function (row) {
                        const d = normalizeYMD(row && row.date ? row.date : "");
                        return d && isBetweenDates(currentPeriod.start, currentPeriod.end, d);
                    });
                    const periodLeaves = getStoredCompensationLeaves().filter(function (leave) {
                        const d = normalizeYMD(leave && leave.date ? leave.date : "");
                        return d && getPayrollPeriodKey(d) === currentPeriodKey;
                    });
                    const ledger = buildCompensationLedgerForPeriod(
                        periodRows,
                        currentPeriod.start,
                        currentPeriod.end,
                        getStoredHolidays(),
                        getStoredRamadan(),
                        getStoredOverrides(),
                        getStoredExamPeriod(),
                        periodLeaves
                    );
                    miniComp = ledger.balanceDays || 0;
                }
                const annualRemaining = getStoredAnnualLeaveBalance() - computeAnnualUsedDays(getStoredHolidays());
                const mini = document.createElement("div");
                mini.className = "giu-dayoff-badge";
                mini.style.marginLeft = "auto";
                mini.textContent = `Annual: ${annualRemaining} | Comp: ${miniComp}`;
                settingsActionRow.appendChild(mini);

                const retentionPreview = document.createElement("div");
                retentionPreview.className = "giu-small-note";
                retentionPreview.style.marginTop = "6px";
                retentionPreview.textContent = `Retention preview: ${countRecordsToPrune()} old record(s) eligible for auto-cleanup.`;
                return { row: settingsActionRow, exportPanel: exportPanelData.panel, retentionPreview };
            }

            function createConflictDetectorBox() {
                const conflicts = buildConflictList();
                if (!conflicts.length) {
                    return null;
                }
                const conflictBox = document.createElement("div");
                conflictBox.className = "giu-conflict-box";

                const conflictTitle = document.createElement("div");
                conflictTitle.className = "giu-conflict-title";
                conflictTitle.textContent = "Conflict Detector";
                conflictBox.appendChild(conflictTitle);

                const subtitle = document.createElement("div");
                subtitle.className = "giu-conflict-subtitle";
                subtitle.textContent = `${conflicts.length} date(s) are marked in multiple ways.`;
                conflictBox.appendChild(subtitle);

                const list = document.createElement("div");
                list.className = "giu-conflict-list";
                const MAX_VISIBLE = 15;
                conflicts.slice(0, MAX_VISIBLE).forEach(function (item) {
                    const row = document.createElement("div");
                    row.className = "giu-conflict-row";
                    const dateSpan = document.createElement("span");
                    dateSpan.textContent = item.date;
                    const tagsSpan = document.createElement("span");
                    tagsSpan.className = "giu-conflict-tags";
                    tagsSpan.textContent = item.tags.join(" + ");
                    const actions = document.createElement("span");
                    actions.style.display = "inline-flex";
                    actions.style.gap = "4px";
                    const removeHolidayBtn = createUiButton("Drop Holiday", "giu-comp-action-btn", function () {
                        const updated = getStoredHolidays().filter(function (h) {
                            if (!h) return false;
                            if (h.type === "single") return normalizeYMD(h.date) !== item.date;
                            if (h.type === "range") {
                                const start = normalizeYMD(h.start);
                                const end = normalizeYMD(h.end);
                                if (!start || !end) return false;
                                return !(item.date >= start && item.date <= end);
                            }
                            return true;
                        });
                        saveUndoSnapshot("holidays", `Conflict quick-fix ${item.date}`);
                        setStoredHolidays(updated);
                        renderEnhancedUI();
                    });
                    const removeOverrideBtn = createUiButton("Drop Override", "giu-comp-action-btn", function () {
                        const updated = getStoredOverrides().filter(function (o) { return normalizeYMD(o.date) !== item.date; });
                        saveUndoSnapshot("overrides", `Conflict quick-fix ${item.date}`);
                        setStoredOverrides(updated);
                        renderEnhancedUI();
                    });
                    const removeCompBtn = createUiButton("Drop Comp", "giu-comp-action-btn", function () {
                        const updated = getStoredCompensationLeaves().filter(function (c) { return normalizeYMD(c.date) !== item.date; });
                        saveUndoSnapshot("compensation", `Conflict quick-fix ${item.date}`);
                        setStoredCompensationLeaves(updated);
                        renderEnhancedUI();
                    });
                    actions.appendChild(removeHolidayBtn);
                    actions.appendChild(removeOverrideBtn);
                    actions.appendChild(removeCompBtn);
                    row.appendChild(dateSpan);
                    row.appendChild(tagsSpan);
                    row.appendChild(actions);
                    list.appendChild(row);
                });
                if (conflicts.length > MAX_VISIBLE) {
                    const more = document.createElement("div");
                    more.className = "giu-conflict-more";
                    more.textContent = `...and ${conflicts.length - MAX_VISIBLE} more conflict date(s).`;
                    list.appendChild(more);
                }
                conflictBox.appendChild(list);
                return conflictBox;
            }

            function createDayOffScheduleTable() {
                const scheduleTableWrap = document.createElement("div");
                scheduleTableWrap.className = "giu-holiday-table-wrap";

                const dayOffSchedule = getStoredDayOffSchedule();
                if (!dayOffSchedule.length) {
                    return null;
                }

                const scheduleTable = document.createElement("table");
                scheduleTable.className = "giu-holiday-table";
                scheduleTable.innerHTML = `
                    <thead>
                        <tr>
                            <th>Effective From</th>
                            <th>Day Off</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;
                const scheduleBody = scheduleTable.querySelector("tbody");
                const pagination = createPagination("dayOffSchedule", dayOffSchedule);

                pagination.pageItems.forEach(function (item) {
                    const tr = document.createElement("tr");
                    const fromTd = document.createElement("td");
                    fromTd.textContent = item.startDate;
                    const dayTd = document.createElement("td");
                    dayTd.textContent = getSelectedDayOffFullName(item.code) || item.code;

                    const removeBtn = createUiButton("Remove", "giu-remove-holiday-btn", function () {
                        const updated = getStoredDayOffSchedule().filter(function (s) {
                            return !(s.startDate === item.startDate && s.code === item.code);
                        });
                        setStoredDayOffSchedule(updated);
                        renderEnhancedUI();
                    });

                    const actionTd = document.createElement("td");
                    actionTd.appendChild(removeBtn);
                    tr.appendChild(fromTd);
                    tr.appendChild(dayTd);
                    tr.appendChild(actionTd);
                    scheduleBody.appendChild(tr);
                });
                scheduleTableWrap.appendChild(scheduleTable);
                scheduleTableWrap.appendChild(pagination.controls);
                return scheduleTableWrap;
            }

            function computeAnnualUsedDays(holidayEntries) {
                const usedSet = new Set();
                (holidayEntries || []).forEach(function (entry) {
                    if (!entry || entry.category !== "annual") return;
                    if (entry.type === "single") {
                        const d = normalizeYMD(entry.date);
                        if (d) usedSet.add(d);
                        return;
                    }
                    if (entry.type === "range") {
                        const s = normalizeYMD(entry.start || "");
                        const e = normalizeYMD(entry.end || "");
                        if (!s || !e || s > e) return;
                        eachYmdInRange(s, e, function (d) { usedSet.add(d); });
                    }
                });
                return usedSet.size;
            }

            function createAnnualLeaveBalanceBox() {
                const annualBalanceBox = document.createElement("div");
                annualBalanceBox.className = "giu-comp-balance-box";
                annualBalanceBox.style.borderColor = "#fbcfe8";
                annualBalanceBox.style.background = "#fff1f2";
                annualBalanceBox.style.color = "#9f1239";
                annualBalanceBox.style.display = "grid";
                annualBalanceBox.style.gap = "8px";

                const annualUsed = computeAnnualUsedDays(getStoredHolidays());
                const annualTotal = getStoredAnnualLeaveBalance();
                const annualRemain = annualTotal - annualUsed;
                const annualRate = getStoredAnnualLeaveAccrualRate();

                const annualRow = document.createElement("div");
                annualRow.style.display = "flex";
                annualRow.style.alignItems = "center";
                annualRow.style.gap = "8px";
                annualRow.style.flexWrap = "wrap";

                const annualLeft = document.createElement("div");
                annualLeft.style.flex = "1 1 auto";
                annualLeft.innerHTML = `
                    <strong style="font-size:13px;">Annual Leave</strong>
                    <span class="giu-annual-balance-badge ${annualRemain >= 0 ? "giu-annual-balance-positive" : "giu-annual-balance-negative"}">
                        Remaining: ${annualRemain} day(s)
                    </span>
                    <span class="giu-annual-balance-badge giu-annual-balance-positive">
                        Accrual: ${annualRate} day(s)/mo
                    </span>
                `;

                const editAnnualBalanceBtn = createUiButton("Edit", "giu-edit-annual-btn", function () {
                    createInlineModalForm("Edit annual leave", [
                        { label: "Remaining balance (days)", value: String(annualRemain) },
                        { label: "Accrual rate (days / month)", value: String(annualRate) }
                    ], function (values) {
                        const parsedRemaining = Number(values[0]);
                        const parsedRate = Number(values[1]);
                        if (!Number.isFinite(parsedRemaining)) {
                            alert("Please enter a valid remaining balance.");
                            return false;
                        }
                        if (!Number.isFinite(parsedRate) || parsedRate < 0) {
                            alert("Please enter a valid accrual rate (0 or more).");
                            return false;
                        }
                        const desiredTotal = Math.max(0, parsedRemaining + annualUsed);
                        setStoredAnnualLeaveBalance(desiredTotal);
                        setStoredAnnualLeaveAccrualRate(parsedRate);
                        renderEnhancedUI();
                        return true;
                    });
                });
                editAnnualBalanceBtn.style.flex = "0 0 auto";

                annualRow.appendChild(annualLeft);
                annualRow.appendChild(editAnnualBalanceBtn);
                annualBalanceBox.appendChild(annualRow);
                return annualBalanceBox;
            }

            function createHolidayManagementSection() {
                const holidaySection = document.createElement("div");
                holidaySection.className = "giu-holiday-section";

                const holidayTitle = document.createElement("div");
                holidayTitle.className = "giu-holiday-title";
                holidayTitle.textContent = "Holidays & Annual Leaves";
                holidaySection.appendChild(holidayTitle);

                const controls = document.createElement("div");
                controls.className = "giu-holiday-controls";

                const categorySelect = createUiSelect("giu-holiday-category", [
                    { value: "holiday", label: "Holiday" },
                    { value: "annual", label: "Annual Leave" }
                ]);
                const modeSelect = createUiSelect("giu-holiday-mode", [
                    { value: "single", label: "Single Date" },
                    { value: "range", label: "Date Range" }
                ]);

                const singleDateInput = createUiInput("date", "giu-holiday-single-date");
                const rangeStartInput = createUiInput("date", "giu-holiday-range-start", { hidden: true });
                const rangeEndInput = createUiInput("date", "giu-holiday-range-end", { hidden: true });

                modeSelect.addEventListener("change", function () {
                    const isRange = modeSelect.value === "range";
                    singleDateInput.style.display = isRange ? "none" : "";
                    rangeStartInput.style.display = isRange ? "" : "none";
                    rangeEndInput.style.display = isRange ? "" : "none";
                });

                const addBtn = createUiButton("Add", "giu-add-holiday-btn", function () {
                    const current = getStoredHolidays();
                    let newEntry = null;

                    if (modeSelect.value === "single") {
                        if (!singleDateInput.value) {
                            alert("Please select a holiday date.");
                            return;
                        }
                        newEntry = normalizeHolidayEntry({
                            type: "single",
                            category: categorySelect.value,
                            date: singleDateInput.value
                        });
                    } else {
                        if (!rangeStartInput.value || !rangeEndInput.value) {
                            alert("Please select start and end dates.");
                            return;
                        }
                        if (rangeStartInput.value > rangeEndInput.value) {
                            alert("Start date cannot be after end date.");
                            return;
                        }
                        newEntry = normalizeHolidayEntry({
                            type: "range",
                            category: categorySelect.value,
                            start: rangeStartInput.value,
                            end: rangeEndInput.value
                        });
                    }

                    if (!newEntry) {
                        alert("Invalid holiday entry.");
                        return;
                    }

                    const newKey = holidayEntryToKey(newEntry);
                    if (current.some(item => holidayEntryToKey(item) === newKey)) {
                        alert("This entry is already added.");
                        return;
                    }

                    current.push(newEntry);
                    current.sort((a, b) => {
                        const aValue = a.type === "single" ? a.date : a.start;
                        const bValue = b.type === "single" ? b.date : b.start;
                        return aValue.localeCompare(bValue);
                    });

                    saveUndoSnapshot("holidays", "Add holiday");
                    setStoredHolidays(current);
                    renderEnhancedUI();
                });

                controls.appendChild(categorySelect);
                controls.appendChild(modeSelect);
                controls.appendChild(singleDateInput);
                controls.appendChild(rangeStartInput);
                controls.appendChild(rangeEndInput);
                controls.appendChild(addBtn);
                controls.appendChild(createScopedUndoButton("holidays", "Undo Holidays", "Undo Holidays", "giu-undo-btn-holidays"));

                holidaySection.appendChild(controls);
                holidaySection.appendChild(createAnnualLeaveBalanceBox());
                holidaySection.appendChild(createHolidayTable());
                return holidaySection;
            }

            function createRamadanSettingsSection() {
                const section = document.createElement("div");
                section.className = "giu-ramadan-section";

                const title = createUiSectionTitle("Ramadan Period", "giu-ramadan-title");
                section.appendChild(title);

                const ramadan = getStoredRamadan();

                const controls = document.createElement("div");
                controls.className = "giu-ramadan-controls";

                const startLabel = createUiLabel("giu-ramadan-start", "Start");
                const startInput = createUiInput("date", "giu-ramadan-start", { value: ramadan.start });

                const endLabel = createUiLabel("giu-ramadan-end", "End");
                const endInput = createUiInput("date", "giu-ramadan-end", { value: ramadan.end });

                const saveBtn = createUiButton("Save", "giu-save-ramadan-btn", function () {
                    if (!startInput.value || !endInput.value) {
                        alert("Please select both start and end dates for Ramadan.");
                        return;
                    }
                    if (startInput.value > endInput.value) {
                        alert("Start date cannot be after end date.");
                        return;
                    }
                    setStoredRamadan(startInput.value, endInput.value);
                    renderEnhancedUI();
                });

                const resetBtn = createUiButton("Reset to Default", "giu-reset-ramadan-btn", function () {
                    clearStoredRamadan();
                    renderEnhancedUI();
                });

                controls.appendChild(startLabel);
                controls.appendChild(startInput);
                controls.appendChild(endLabel);
                controls.appendChild(endInput);
                controls.appendChild(saveBtn);
                controls.appendChild(resetBtn);
                section.appendChild(controls);

                const badge = document.createElement("div");
                badge.className = "giu-ramadan-badge";
                badge.textContent = `Ramadan: ${ramadan.start} → ${ramadan.end}`;
                section.appendChild(badge);
                return section;
            }

            function createExamSettingsSection() {
                const examSection = document.createElement("div");
                examSection.className = "giu-exam-section";
                examSection.appendChild(createUiSectionTitle("Exam Period", "giu-exam-title"));
                examSection.appendChild(createUiDescription(
                    "Hours after 7:00 PM (6:00 PM in Ramadan) are not counted by HR. During exam periods the cap can be increased. Set the exam dates and the new cap time below.",
                    "font-size:11px;color:#6b7280;margin:0 0 4px;line-height:1.4;"
                ));

                const examPeriod = getStoredExamPeriod();

                const examControls = document.createElement("div");
                examControls.className = "giu-exam-controls";

                const startLabel = createUiLabel("giu-exam-start", "Start");
                const startInput = createUiInput("date", "giu-exam-start", { value: examPeriod ? examPeriod.start : "" });
                const endLabel = createUiLabel("giu-exam-end", "End");
                const endInput = createUiInput("date", "giu-exam-end", { value: examPeriod ? examPeriod.end : "" });
                const capLabel = createUiLabel("giu-exam-cap-hour", "Cap");

                const capHourInput = createUiInput("number", "giu-exam-cap-hour", {
                    placeholder: "7", min: 1, max: 12, step: 1, width: "55px"
                });
                const capMinInput = createUiInput("number", "giu-exam-cap-min", {
                    placeholder: "00", min: 0, max: 59, step: 1, width: "55px"
                });

                const capAmPm = createUiSelect("giu-exam-cap-ampm", [
                    { value: "AM", label: "AM" },
                    { value: "PM", label: "PM" }
                ]);

                if (examPeriod) {
                    let dispH = examPeriod.capHour % 12;
                    if (dispH === 0) dispH = 12;
                    capHourInput.value = String(dispH);
                    capMinInput.value = String(examPeriod.capMinute);
                    capAmPm.value = examPeriod.capHour >= 12 ? "PM" : "AM";
                } else {
                    capHourInput.value = "7";
                    capMinInput.value = "0";
                    capAmPm.value = "PM";
                }

                const saveBtn = createUiButton("Save", "giu-save-exam-btn", function () {
                    if (!startInput.value || !endInput.value) {
                        alert("Please select both start and end dates for the exam period.");
                        return;
                    }
                    if (startInput.value > endInput.value) {
                        alert("Start date cannot be after end date.");
                        return;
                    }
                    const capH12 = parseInt(capHourInput.value, 10);
                    const capM = parseInt(capMinInput.value, 10);
                    const ampm = capAmPm.value;
                    if (isNaN(capH12) || capH12 < 1 || capH12 > 12 || isNaN(capM) || capM < 0 || capM > 59) {
                        alert("Please enter a valid cap time (H: 1-12, M: 0-59).");
                        return;
                    }
                    let capH24 = capH12;
                    if (ampm === "AM" && capH12 === 12) capH24 = 0;
                    if (ampm === "PM" && capH12 !== 12) capH24 = capH12 + 12;
                    setStoredExamPeriod(startInput.value, endInput.value, capH24, capM);
                    renderEnhancedUI();
                });

                const clearBtn = createUiButton("Clear", "giu-clear-exam-btn", function () {
                    clearStoredExamPeriod();
                    renderEnhancedUI();
                });

                examControls.appendChild(startLabel);
                examControls.appendChild(startInput);
                examControls.appendChild(endLabel);
                examControls.appendChild(endInput);
                examControls.appendChild(capLabel);
                examControls.appendChild(capHourInput);
                examControls.appendChild(capMinInput);
                examControls.appendChild(capAmPm);
                examControls.appendChild(saveBtn);
                examControls.appendChild(clearBtn);
                examSection.appendChild(examControls);

                if (examPeriod) {
                    const examBadge = document.createElement("div");
                    examBadge.className = "giu-exam-badge";
                    examBadge.textContent = `Exam: ${examPeriod.start} → ${examPeriod.end} (Cap: ${formatTime12(examPeriod.capHour, examPeriod.capMinute)})`;
                    examSection.appendChild(examBadge);
                }
                return examSection;
            }

            function createConfigPanel(selectedDayCode, selectedDayFullName, periods, onDayChange, initialExpanded) {
                const { panel, bodyWrap, bodyInner } = createConfigPanelHeader(initialExpanded);

                // Default the "Apply from" date to the earliest attendance row so a first-time
                // manual day-off set applies retroactively over the loaded data, not just today.
                let firstAttendanceDate = null;
                (periods || []).forEach(function (p) {
                    (p.rows || []).forEach(function (r) {
                        const ymd = normalizeYMD(r && r.date ? r.date : "");
                        if (ymd && (!firstAttendanceDate || ymd < firstAttendanceDate)) firstAttendanceDate = ymd;
                    });
                });

                // Day-off controls + persisted apply-from schedule
                bodyInner.appendChild(createDayOffControlsRow(selectedDayCode, selectedDayFullName, onDayChange, firstAttendanceDate));

                const dayOffScheduleTable = createDayOffScheduleTable();
                if (dayOffScheduleTable) {
                    bodyInner.appendChild(wrapSettingsSection("dayoffSchedule", "Day-Off Schedule", dayOffScheduleTable, false));
                }
                bodyInner.appendChild(createUiDivider());

                bodyInner.appendChild(wrapSettingsSection("holidays", "Holidays & Annual Leaves", createHolidayManagementSection(), false));
                bodyInner.appendChild(createUiDivider());

                bodyInner.appendChild(wrapSettingsSection("overrides", "Attendance Overrides", createOverrideSection(), false));
                bodyInner.appendChild(createUiDivider());

                bodyInner.appendChild(wrapSettingsSection("compensations", "Compensations", createCompensationSection(periods, selectedDayFullName), false));
                const conflictBox = createConflictDetectorBox();
                if (conflictBox) bodyInner.appendChild(wrapSettingsSection("conflicts", "Conflict Detector", conflictBox, false));
                bodyInner.appendChild(createUiDivider());

                const ramadanSection = createRamadanSettingsSection();
                bodyInner.appendChild(wrapSettingsSection("ramadan", "Ramadan Period", ramadanSection, false));
                bodyInner.appendChild(createUiDivider());

                bodyInner.appendChild(wrapSettingsSection("exam", "Exam Period", createExamSettingsSection(), false));
                bodyInner.appendChild(createUiDivider());

                const settingsActions = createSettingsActionsRow();
                bodyInner.appendChild(settingsActions.row);
                bodyInner.appendChild(settingsActions.retentionPreview);
                bodyInner.appendChild(settingsActions.exportPanel);

                bodyWrap.appendChild(bodyInner);
                panel.appendChild(bodyWrap);
                return panel;
            }

            function createOverrideTable() {
                const container = document.createElement("div");
                container.className = "giu-holiday-table-wrap";

                const overrides = getStoredOverrides();
                const conflictTagMap = buildConflictTagMap();

                if (!overrides.length) {
                    return null;
                }

                const filterBar = document.createElement("div");
                filterBar.className = "giu-dayoff-row giu-table-tools";
                const typeFilter = createUiSelect("", [
                    { value: "", label: "All override types" },
                    { value: "full_day", label: "Full Day" },
                    { value: "custom_actual", label: "Custom Actual" }
                ], getTableFilterValue("overrides", "type", ""));
                const dateFilter = createUiInput("text", "", {
                    placeholder: "Filter by date (YYYY-MM)",
                    value: getTableFilterValue("overrides", "date", "")
                });
                dateFilter.style.minWidth = "160px";

                const table = document.createElement("table");
                table.className = "giu-holiday-table";

                table.innerHTML = `
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="giu-select-all" /></th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Custom Hours</th>
                            <th>Reason</th>
                            <th>Note</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;

                const tbody = table.querySelector("tbody");
                const getFiltered = function () {
                    const tf = typeFilter.value;
                    const df = String(dateFilter.value || "").trim();
                    return overrides.filter(function (ov) {
                        if (tf && ov.type !== tf) return false;
                        if (df && String(ov.date || "").indexOf(df) === -1) return false;
                        return true;
                    });
                };
                const pagination = createPagination("overrides", getFiltered());
                const selectAll = table.querySelector(".giu-select-all");
                const bulkBtn = createUiButton("Remove Selected", "giu-remove-holiday-btn", function () {
                    const checked = Array.from(tbody.querySelectorAll("input[type='checkbox'][data-date]:checked"));
                    if (!checked.length) return;
                    const dates = new Set(checked.map(function (el) { return el.getAttribute("data-date"); }));
                    const updated = getStoredOverrides().filter(function (ov) { return !dates.has(normalizeYMD(ov.date)); });
                    saveUndoSnapshot("overrides", `Bulk remove ${checked.length} overrides`);
                    setStoredOverrides(updated);
                    renderEnhancedUI();
                });
                bulkBtn.style.marginLeft = "auto";
                filterBar.appendChild(typeFilter);
                filterBar.appendChild(dateFilter);
                filterBar.appendChild(bulkBtn);
                container.appendChild(filterBar);

                pagination.pageItems.forEach(function (ov) {
                    const tr = document.createElement("tr");
                    const pickTd = document.createElement("td");
                    const pick = document.createElement("input");
                    pick.type = "checkbox";
                    pick.setAttribute("data-date", ov.date);
                    pickTd.appendChild(pick);

                    const dateTd = document.createElement("td");
                    dateTd.textContent = ov.date;
                    const tags = conflictTagMap.get(ov.date);
                    if (tags && tags.length > 1) {
                        dateTd.appendChild(createConflictBadge("Conflict", tags.join(" + ")));
                    }

                    const typeTd = document.createElement("td");
                    typeTd.textContent = getOverrideTypeLabel(ov.type);

                    const hoursTd = document.createElement("td");
                    const ovSec = ov.actualSeconds != null ? ov.actualSeconds : (ov.actualMinutes != null ? ov.actualMinutes * 60 : null);
                    if (ov.type === "custom_actual" && ovSec != null) {
                        const hms = secondsToHMS(ovSec);
                        hoursTd.textContent = formatHMS(hms.hours, hms.minutes, hms.seconds);
                    } else {
                        hoursTd.textContent = "—";
                    }

                    const reasonTd = document.createElement("td");
                    reasonTd.textContent = ov.reason || "—";

                    const noteTd = document.createElement("td");
                    noteTd.textContent = ov.note || "—";

                    const actionTd = document.createElement("td");
                    actionTd.appendChild(createUiButton("Remove", "giu-remove-holiday-btn", function () {
                        const updated = getStoredOverrides().filter(item => item.date !== ov.date);
                        saveUndoSnapshot("overrides", "Remove attendance override");
                        setStoredOverrides(updated);
                        renderEnhancedUI();
                    }));

                    tr.appendChild(pickTd);
                    tr.appendChild(dateTd);
                    tr.appendChild(typeTd);
                    tr.appendChild(hoursTd);
                    tr.appendChild(reasonTd);
                    tr.appendChild(noteTd);
                    tr.appendChild(actionTd);

                    tbody.appendChild(tr);
                });
                if (selectAll) {
                    selectAll.addEventListener("change", function () {
                        const boxes = tbody.querySelectorAll("input[type='checkbox'][data-date]");
                        boxes.forEach(function (b) { b.checked = !!selectAll.checked; });
                    });
                }
                typeFilter.addEventListener("change", function () {
                    setTableFilterValue("overrides", "type", typeFilter.value || "");
                    renderEnhancedUI();
                });
                dateFilter.addEventListener("change", function () {
                    setTableFilterValue("overrides", "date", dateFilter.value || "");
                    renderEnhancedUI();
                });

                container.appendChild(table);
                container.appendChild(pagination.controls);
                return container;
            }

            function createOverrideSection() {
                const section = document.createElement("div");
                section.className = "giu-override-section";

                section.appendChild(createUiSectionTitle(
                    "Attendance Overrides (In/Out Forms, Misson Days)",
                    "giu-override-title"
                ));
                section.appendChild(createUiDescription(
                    'Manually override attendance for specific dates (e.g. IN/OUT forms or mission days). Use "Full Day Counted" to count a day as fully attended, or "Custom Actual Hours" to set exact worked hours.'
                ));

                const controls = document.createElement("div");
                controls.className = "giu-override-controls";

                const dateInput = createUiInput("date", "giu-override-date");
                const typeSelect = createUiSelect("giu-override-type", [
                    { value: "full_day", label: "Full Day Counted" },
                    { value: "custom_actual", label: "Custom Actual Hours" }
                ]);
                const hoursInput = createUiInput("number", "giu-override-hours", {
                    placeholder: "H", min: 0, max: 23, step: 1, hidden: true, width: "55px"
                });
                const minutesInput = createUiInput("number", "giu-override-minutes", {
                    placeholder: "M", min: 0, max: 59, step: 1, hidden: true, width: "55px"
                });
                const reasonInput = createUiInput("text", "giu-override-reason", { placeholder: "Reason (optional)" });
                const noteInput = createUiInput("text", "giu-override-note", { placeholder: "Note (optional)" });

                typeSelect.addEventListener("change", function () {
                    const show = typeSelect.value === "custom_actual" ? "" : "none";
                    hoursInput.style.display = show;
                    minutesInput.style.display = show;
                });

                const addBtn = createUiButton("Add", "giu-add-override-btn", function () {
                    if (!dateInput.value) {
                        alert("Please select a date for the override.");
                        return;
                    }
                    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateInput.value)) {
                        alert("Invalid date format.");
                        return;
                    }

                    const current = getStoredOverrides();
                    if (current.some(o => o.date === dateInput.value)) {
                        alert("An override for this date already exists. Remove it first.");
                        return;
                    }

                    const entry = { date: dateInput.value, type: typeSelect.value };

                    if (typeSelect.value === "custom_actual") {
                        const h = parseInt(hoursInput.value, 10) || 0;
                        const m = parseInt(minutesInput.value, 10) || 0;
                        if (h < 0 || h > 23 || m < 0 || m > 59 || (h === 0 && m === 0)) {
                            alert("Please enter valid hours (0-23) and minutes (0-59).");
                            return;
                        }
                        entry.actualSeconds = h * 3600 + m * 60;
                    }

                    const reason = reasonInput.value.trim();
                    if (reason) entry.reason = reason;
                    const note = noteInput.value.trim();
                    if (note) entry.note = note;

                    current.push(entry);
                    current.sort(function (a, b) { return a.date.localeCompare(b.date); });
                    saveUndoSnapshot("overrides", "Add attendance override");
                    setStoredOverrides(current);
                    renderEnhancedUI();
                });

                controls.appendChild(dateInput);
                controls.appendChild(typeSelect);
                controls.appendChild(hoursInput);
                controls.appendChild(minutesInput);
                controls.appendChild(reasonInput);
                controls.appendChild(noteInput);
                controls.appendChild(addBtn);
                controls.appendChild(createScopedUndoButton("overrides", "Undo Overrides", "Undo Overrides", "giu-undo-btn-overrides"));

                section.appendChild(controls);
                const overrideTable = createOverrideTable();
                if (overrideTable) section.appendChild(overrideTable);
                return section;
            }

            function validateCompensationLeaveDate(
                date,
                selectedDayOffFullName,
                periods,
                compensationLeaves,
                holidays,
                ramadan,
                overrides,
                examPeriod
            ) {
                const normalizedDate = normalizeYMD(date);
                if (!normalizedDate) {
                    return { ok: false, message: "Invalid date format." };
                }

                if (!selectedDayOffFullName) {
                    return { ok: false, message: "Please select your weekly day off first." };
                }

                const allRows = (periods || []).flatMap(function (p) { return p.rows || []; });
                if (!allRows.length) {
                    return {
                        ok: false,
                        message: "Compensation leave requires attendance rows in the report table."
                    };
                }

                const periodKey = getPayrollPeriodKey(normalizedDate);
                const periodBounds = getPayrollPeriodBounds(periodKey);
                if (!periodBounds || !periodBounds.start || !periodBounds.end) {
                    return { ok: false, message: "Invalid compensation period for selected date." };
                }

                const dayName = formatDateToDayName(normalizedDate);
                const effectiveDayOff = getDayOffFullNameForDate(normalizedDate, getSelectedDayOffCode());
                if (isFixedNonWorkingDay(dayName)) {
                    return { ok: false, message: "Compensation leave cannot be applied on Friday." };
                }
                if (effectiveDayOff && dayName === effectiveDayOff) {
                    return { ok: false, message: "Compensation leave cannot be applied on your weekly day off." };
                }
                if (isDateHoliday(normalizedDate, holidays)) {
                    return { ok: false, message: "Compensation leave cannot be applied on a holiday/leave date." };
                }

                const periodRows = allRows.filter(function (row) {
                    const rowDate = normalizeYMD(row && row.date ? row.date : "");
                    return rowDate && isBetweenDates(periodBounds.start, periodBounds.end, rowDate);
                });
                const periodLeaves = (compensationLeaves || []).filter(function (leave) {
                    const leaveDate = normalizeYMD(leave && leave.date ? leave.date : "");
                    return leaveDate && getPayrollPeriodKey(leaveDate) === periodKey;
                });

                const ledger = buildCompensationLedgerForPeriod(
                    periodRows,
                    periodBounds.start,
                    periodBounds.end,
                    holidays,
                    ramadan,
                    overrides,
                    examPeriod,
                    periodLeaves
                );

                if ((ledger.balanceDays || 0) < 1) {
                    return {
                        ok: false,
                        message:
                            `Insufficient compensation balance for payroll period (${periodBounds.start} → ${periodBounds.end}). ` +
                            `Available: ${ledger.balanceDays || 0} day(s). ` +
                            `Required: 1 day.`
                    };
                }

                return {
                    ok: true,
                    balanceDays: ledger.balanceDays || 0
                };
            }

            function createCompensationLedgerTable(periods, selectedDayOffFullName) {
                const container = document.createElement("div");
                container.className = "giu-holiday-table-wrap";

                const holidays = getStoredHolidays();
                const ramadan = getStoredRamadan();
                const overrides = getStoredOverrides();
                const examPeriod = getStoredExamPeriod();
                const compensationLeaves = getStoredCompensationLeaves();
                const conflictTagMap = buildConflictTagMap();
                const allRows = (periods || []).flatMap(function (p) { return p.rows || []; });

                const rows = [];
                const periodKeys = new Set();
                allRows.forEach(function (row) {
                    const date = normalizeYMD(row && row.date ? row.date : "");
                    if (date) periodKeys.add(getPayrollPeriodKey(date));
                });
                compensationLeaves.forEach(function (leave) {
                    const date = normalizeYMD(leave && leave.date ? leave.date : "");
                    if (date) periodKeys.add(getPayrollPeriodKey(date));
                });

                Array.from(periodKeys).sort().forEach(function (periodKey) {
                    const period = getPayrollPeriodBounds(periodKey);
                    if (!period || !period.start || !period.end) return;
                    const periodRows = allRows.filter(function (row) {
                        const rowDate = normalizeYMD(row && row.date ? row.date : "");
                        return rowDate && isBetweenDates(period.start, period.end, rowDate);
                    });
                    const periodLeaves = compensationLeaves.filter(function (leave) {
                        const leaveDate = normalizeYMD(leave && leave.date ? leave.date : "");
                        return leaveDate && getPayrollPeriodKey(leaveDate) === periodKey;
                    });

                    const ledger = buildCompensationLedgerForPeriod(
                        periodRows,
                        period.start,
                        period.end,
                        holidays,
                        ramadan,
                        overrides,
                        examPeriod,
                        periodLeaves
                    );

                    for (const entry of ledger.entries) {
                        rows.push({
                            period: `${period.start} → ${period.end}`,
                            entry
                        });
                    }
                });

                rows.sort(function (a, b) {
                    if (a.entry.date !== b.entry.date) return b.entry.date.localeCompare(a.entry.date);
                    const weight = { earn: 0, use: 1, use_invalid: 2 };
                    return (weight[a.entry.kind] || 9) - (weight[b.entry.kind] || 9);
                });

                if (!rows.length) {
                    return null;
                }

                const filterBar = document.createElement("div");
                filterBar.className = "giu-dayoff-row giu-table-tools";
                const kindFilter = createUiSelect("", [
                    { value: "", label: "All entries" },
                    { value: "earn", label: "Earned" },
                    { value: "use", label: "Used" },
                    { value: "use_invalid", label: "Rejected" }
                ], getTableFilterValue("compensationLedger", "kind", ""));
                const dateFilter = createUiInput("text", "", {
                    placeholder: "Filter by date (YYYY-MM)",
                    value: getTableFilterValue("compensationLedger", "date", "")
                });
                dateFilter.style.minWidth = "160px";

                const table = document.createElement("table");
                table.className = "giu-holiday-table";
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="giu-select-all" /></th>
                            <th>Payroll Period (11→10)</th>
                            <th>Date</th>
                            <th>Entry</th>
                            <th>Days</th>
                            <th>Reason</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;

                const tbody = table.querySelector("tbody");
                const getFiltered = function () {
                    const kf = kindFilter.value;
                    const df = String(dateFilter.value || "").trim();
                    return rows.filter(function (r) {
                        if (kf && r.entry.kind !== kf) return false;
                        if (df && String(r.entry.date || "").indexOf(df) === -1) return false;
                        return true;
                    });
                };
                const pagination = createPagination("compensationLedger", getFiltered());
                const selectAll = table.querySelector(".giu-select-all");
                const bulkBtn = createUiButton("Remove Selected", "giu-remove-holiday-btn", function () {
                    const checked = Array.from(tbody.querySelectorAll("input[type='checkbox'][data-date]:checked"));
                    if (!checked.length) return;
                    const dates = new Set(checked.map(function (el) { return el.getAttribute("data-date"); }));
                    const updated = getStoredCompensationLeaves().filter(function (c) {
                        return !dates.has(normalizeYMD(c.date));
                    });
                    saveUndoSnapshot("compensation", `Bulk remove ${checked.length} compensation leave`);
                    setStoredCompensationLeaves(updated);
                    renderEnhancedUI();
                });
                bulkBtn.style.marginLeft = "auto";
                filterBar.appendChild(kindFilter);
                filterBar.appendChild(dateFilter);
                filterBar.appendChild(bulkBtn);
                container.appendChild(filterBar);

                pagination.pageItems.forEach(function (rowData) {
                    const tr = document.createElement("tr");
                    const entry = rowData.entry;
                    const pickTd = document.createElement("td");
                    if (entry.kind === "use" || entry.kind === "use_invalid") {
                        const pick = document.createElement("input");
                        pick.type = "checkbox";
                        pick.setAttribute("data-date", entry.date);
                        pickTd.appendChild(pick);
                    } else {
                        pickTd.textContent = "—";
                    }

                    const periodTd = document.createElement("td");
                    periodTd.textContent = rowData.period;

                    const dateTd = document.createElement("td");
                    dateTd.textContent = entry.date;
                    const tags = conflictTagMap.get(entry.date);
                    if (tags && tags.length > 1) {
                        dateTd.appendChild(createConflictBadge("Conflict", tags.join(" + ")));
                    }

                    const entryTd = document.createElement("td");
                    if (entry.kind === "earn") {
                        entryTd.textContent = "Earned";
                    } else if (entry.kind === "use") {
                        entryTd.textContent = "Used";
                    } else {
                        entryTd.textContent = "Use (Rejected target)";
                    }

                    const hoursTd = document.createElement("td");
                    hoursTd.textContent = entry.kind === "use_invalid" ? "0" : "1";

                    const reasonTd = document.createElement("td");
                    reasonTd.textContent = entry.reason || "—";

                    const actionTd = document.createElement("td");

                    if (entry.kind === "use" || entry.kind === "use_invalid") {
                        const editBtn = createUiButton("Edit", "giu-comp-action-btn", function () {
                            const currentLeaves = getStoredCompensationLeaves();
                            const target = currentLeaves.find(item => item.date === entry.date);
                            if (!target) {
                                alert("This compensation leave entry no longer exists.");
                                return;
                            }

                            const baseLeaves = currentLeaves.filter(item => item.date !== target.date);
                            createInlineModalPrompt("Edit compensation leave date (YYYY-MM-DD)", target.date, function (dateInputValue) {
                                const newDate = normalizeYMD(dateInputValue);
                                if (!newDate) {
                                    alert("Invalid date format.");
                                    return false;
                                }
                                if (baseLeaves.some(item => item.date === newDate)) {
                                    alert("A compensation leave already exists for this date.");
                                    return false;
                                }
                                createInlineModalPrompt("Edit reason (optional)", target.reason || "", function (reasonInputValue) {
                                    const newReason = String(reasonInputValue || "").trim();
                                    const validation = validateCompensationLeaveDate(
                                        newDate,
                                        selectedDayOffFullName,
                                        periods,
                                        baseLeaves,
                                        holidays,
                                        ramadan,
                                        overrides,
                                        examPeriod
                                    );
                                    if (!validation.ok) {
                                        alert(validation.message);
                                        return false;
                                    }
                                    const updatedEntry = { date: newDate };
                                    if (newReason) updatedEntry.reason = newReason;
                                    baseLeaves.push(updatedEntry);
                                    saveUndoSnapshot("compensation", "Edit compensation leave");
                                    setStoredCompensationLeaves(baseLeaves);
                                    renderEnhancedUI();
                                    return true;
                                });
                                return true;
                            });
                        });

                        const removeBtn = createUiButton("Remove", "giu-remove-holiday-btn", function () {
                            const updated = getStoredCompensationLeaves().filter(item => item.date !== entry.date);
                            saveUndoSnapshot("compensation", "Remove compensation leave");
                            setStoredCompensationLeaves(updated);
                            renderEnhancedUI();
                        });

                        actionTd.appendChild(editBtn);
                        actionTd.appendChild(removeBtn);
                    } else {
                        actionTd.textContent = "—";
                    }

                    tr.appendChild(pickTd);
                    tr.appendChild(periodTd);
                    tr.appendChild(dateTd);
                    tr.appendChild(entryTd);
                    tr.appendChild(hoursTd);
                    tr.appendChild(reasonTd);
                    tr.appendChild(actionTd);
                    tbody.appendChild(tr);
                });
                if (selectAll) {
                    selectAll.addEventListener("change", function () {
                        const boxes = tbody.querySelectorAll("input[type='checkbox'][data-date]");
                        boxes.forEach(function (b) { b.checked = !!selectAll.checked; });
                    });
                }
                kindFilter.addEventListener("change", function () {
                    setTableFilterValue("compensationLedger", "kind", kindFilter.value || "");
                    renderEnhancedUI();
                });
                dateFilter.addEventListener("change", function () {
                    setTableFilterValue("compensationLedger", "date", dateFilter.value || "");
                    renderEnhancedUI();
                });

                container.appendChild(table);
                container.appendChild(pagination.controls);
                return container;
            }

            function createCompensationSection(periods, selectedDayOffFullName) {
                const section = document.createElement("div");
                section.className = "giu-override-section";

                const title = document.createElement("div");
                title.className = "giu-override-title";
                title.textContent = "Compensation Days";
                section.appendChild(title);

                section.appendChild(createUiDescription(
                    "If you work on your selected weekly day off (not Friday), you can take replacement compensation days within the same payroll month (11→10).",
                    "font-size:11px;color:#6b7280;margin:0 0 8px;line-height:1.4;"
                ));

                const controls = document.createElement("div");
                controls.className = "giu-override-controls";

                const leaveDateInput = createUiInput("date", "giu-comp-leave-date");
                const reasonInput = createUiInput("text", "giu-comp-leave-reason", { placeholder: "Reason (optional)" });

                const addBtn = createUiButton("Add Compensation", "giu-add-comp-btn", function () {
                    const date = normalizeYMD(leaveDateInput.value || "");
                    if (!date) {
                        alert("Please select a valid compensation leave date.");
                        return;
                    }

                    const currentLeaves = getStoredCompensationLeaves();
                    if (currentLeaves.some(item => item.date === date)) {
                        alert("A compensation leave already exists for this date.");
                        return;
                    }

                    const holidays = getStoredHolidays();
                    const ramadan = getStoredRamadan();
                    const overrides = getStoredOverrides();
                    const examPeriod = getStoredExamPeriod();

                    const validation = validateCompensationLeaveDate(
                        date,
                        selectedDayOffFullName,
                        periods,
                        currentLeaves,
                        holidays,
                        ramadan,
                        overrides,
                        examPeriod
                    );

                    if (!validation.ok) {
                        alert(validation.message);
                        return;
                    }

                    const entry = { date };
                    const reason = reasonInput.value.trim();
                    if (reason) entry.reason = reason;

                    currentLeaves.push(entry);
                    saveUndoSnapshot("compensation", "Add compensation leave");
                    setStoredCompensationLeaves(currentLeaves);
                    renderEnhancedUI();
                });

                controls.appendChild(leaveDateInput);
                controls.appendChild(reasonInput);
                controls.appendChild(addBtn);
                controls.appendChild(createScopedUndoButton("compensation", "Undo Compensation", "Undo Compensation", "giu-undo-btn-compensation"));
                section.appendChild(controls);

                const balanceBox = document.createElement("div");
                balanceBox.className = "giu-comp-balance-box";

                if (!selectedDayOffFullName) {
                    balanceBox.textContent = "Select your weekly day off to start earning and using compensation balance.";
                } else {
                    const today = getTodayLocalYMD();
                    const currentPeriodKey = getPayrollPeriodKey(today);
                    const currentPeriod = getPayrollPeriodBounds(currentPeriodKey);
                    const allRows = (periods || []).flatMap(function (p) { return p.rows || []; });

                    if (!currentPeriod || !allRows.length) {
                        balanceBox.textContent = "Current payroll period balance cannot be calculated because report rows are not loaded.";
                    } else {
                        const holidays = getStoredHolidays();
                        const ramadan = getStoredRamadan();
                        const overrides = getStoredOverrides();
                        const examPeriod = getStoredExamPeriod();
                        const periodRows = allRows.filter(function (row) {
                            const rowDate = normalizeYMD(row && row.date ? row.date : "");
                            return rowDate && isBetweenDates(currentPeriod.start, currentPeriod.end, rowDate);
                        });
                        const periodLeaves = getStoredCompensationLeaves().filter(function (leave) {
                            const leaveDate = normalizeYMD(leave && leave.date ? leave.date : "");
                            return leaveDate && getPayrollPeriodKey(leaveDate) === currentPeriodKey;
                        });

                        const ledger = buildCompensationLedgerForPeriod(
                            periodRows,
                            currentPeriod.start,
                            currentPeriod.end,
                            holidays,
                            ramadan,
                            overrides,
                            examPeriod,
                            periodLeaves
                        );

                        const earnedDays = ledger.earnedDays || 0;
                        const usedDays = ledger.usedDays || 0;
                        const balanceDays = ledger.balanceDays || 0;
                        const balanceClass = balanceDays >= 0
                            ? "giu-comp-balance-positive"
                            : "giu-comp-balance-negative";

                        balanceBox.innerHTML = `
                            <div>
                                Compensations Balance (${currentPeriod.start} → ${currentPeriod.end})
                                <span class="giu-comp-balance-badge ${balanceClass}">
                                    ${balanceDays} day(s)
                                </span>
                            </div>
                            <div>Compensations earned: ${earnedDays}</div>
                            <div>Compensations used: ${usedDays}</div>
                        `;
                    }
                }

                section.appendChild(balanceBox);
                const compensationTable = createCompensationLedgerTable(periods || [], selectedDayOffFullName);
                if (compensationTable) section.appendChild(compensationTable);

                return section;
            }

            // ═══════════════════════════════════════════════════════════
            //  DOM / Table Parsing
            // ═══════════════════════════════════════════════════════════

            function getAttendanceRows(root) {
                const scope = root || document;
                const table = scope.getElementById("MainContent_DG_SwiftReport");
                if (!table) return [];

                const rows = Array.from(table.rows || []);
                if (!rows.length) return [];

                const indexes = detectAttendanceColumnIndexes(rows);
                if (!indexes || indexes.dateIndex === -1 || indexes.durationIndex === -1) {
                    console.log("Could not detect Day/Duration columns.");
                    return [];
                }

                const result = [];

                for (const row of rows) {
                    const cells = Array.from(row.cells || []);
                    if (!cells.length) continue;

                    const dateRaw = (cells[indexes.dateIndex]?.textContent || "").trim();
                    const date = normalizeYMD(dateRaw);
                    const duration = (cells[indexes.durationIndex]?.textContent || "").trim();
                    const firstIn = indexes.firstInIndex !== -1 ? (cells[indexes.firstInIndex]?.textContent || "").trim() : "";
                    const lastOut = indexes.lastOutIndex !== -1 ? (cells[indexes.lastOutIndex]?.textContent || "").trim() : "";

                    if (!date) continue;

                    const normalizedDuration = duration.replace(/\s+/g, "");
                    result.push({
                        date,
                        duration: /^\d{1,2}:\d{2}:\d{2}$/.test(normalizedDuration) ? normalizedDuration : "00:00:00",
                        firstIn,
                        lastOut
                    });
                }

                return result;
            }

            function getPayrollPeriodKey(dateStr) {
                const [y, m, d] = dateStr.split("-").map(Number);

                if (d >= 11) {
                    return `${y}-${pad2(m)}`;
                }

                let prevMonth = m - 1;
                let year = y;

                if (prevMonth === 0) {
                    prevMonth = 12;
                    year -= 1;
                }

                return `${year}-${pad2(prevMonth)}`;
            }

            function getPayrollPeriodBounds(periodKey) {
                const [year, month] = periodKey.split("-").map(Number);
                const start = `${year}-${pad2(month)}-11`;

                let nextMonth = month + 1;
                let nextYear = year;

                if (nextMonth === 13) {
                    nextMonth = 1;
                    nextYear += 1;
                }

                const end = `${nextYear}-${pad2(nextMonth)}-10`;
                return { start, end };
            }

            function getPayrollPeriodLabel(periodKey) {
                const { start, end } = getPayrollPeriodBounds(periodKey);
                return `${start} → ${end}`;
            }

            function toYmdUtc(dateObj) {
                return `${dateObj.getUTCFullYear()}-${pad2(dateObj.getUTCMonth() + 1)}-${pad2(dateObj.getUTCDate())}`;
            }

            // Compensation week is Saturday -> Friday.
            function getCompensationWeekBounds(dateStr) {
                const normalized = normalizeYMD(dateStr);
                if (!normalized) return null;
                const source = new Date(`${normalized}T00:00:00Z`);
                if (Number.isNaN(source.getTime())) return null;

                const day = source.getUTCDay(); // 0=Sun ... 6=Sat
                const daysSinceSaturday = (day + 1) % 7; // Sat=0, Sun=1, ..., Fri=6

                const startDate = new Date(source.getTime());
                startDate.setUTCDate(startDate.getUTCDate() - daysSinceSaturday);

                const endDate = new Date(startDate.getTime());
                endDate.setUTCDate(endDate.getUTCDate() + 6);

                const start = toYmdUtc(startDate);
                const end = toYmdUtc(endDate);
                return {
                    key: start,
                    start,
                    end,
                    label: `${start} → ${end}`
                };
            }

            function eachYmdInRange(start, end, callback) {
                const startDate = new Date(`${start}T00:00:00Z`);
                const endDate = new Date(`${end}T00:00:00Z`);
                if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) return;

                const cursor = new Date(startDate.getTime());
                while (cursor <= endDate) {
                    const ymd = `${cursor.getUTCFullYear()}-${pad2(cursor.getUTCMonth() + 1)}-${pad2(cursor.getUTCDate())}`;
                    callback(ymd);
                    cursor.setUTCDate(cursor.getUTCDate() + 1);
                }
            }

            function getHolidayDatesInPeriod(holidays, periodStart, periodEnd) {
                const dates = new Set();
                const normalizedStart = normalizeYMD(periodStart);
                const normalizedEnd = normalizeYMD(periodEnd);
                if (!normalizedStart || !normalizedEnd) return dates;

                for (const holiday of holidays) {
                    if (holiday.type === "single") {
                        const singleDate = normalizeYMD(holiday.date);
                        if (singleDate && isBetweenDates(normalizedStart, normalizedEnd, singleDate)) {
                            dates.add(singleDate);
                        }
                        continue;
                    }

                    if (holiday.type === "range") {
                        const rangeStart = normalizeYMD(holiday.start);
                        const rangeEnd = normalizeYMD(holiday.end);
                        if (!rangeStart || !rangeEnd) continue;

                        const intersectStart = rangeStart > normalizedStart ? rangeStart : normalizedStart;
                        const intersectEnd = rangeEnd < normalizedEnd ? rangeEnd : normalizedEnd;
                        if (intersectStart > intersectEnd) continue;

                        eachYmdInRange(intersectStart, intersectEnd, function (d) {
                            dates.add(d);
                        });
                    }
                }

                return dates;
            }

            function groupRowsByPayrollPeriod(rows) {
                const grouped = {};

                for (const row of rows) {
                    const key = getPayrollPeriodKey(row.date);
                    if (!grouped[key]) grouped[key] = [];
                    grouped[key].push(row);
                }

                const sortedKeys = Object.keys(grouped).sort();
                return sortedKeys.map(key => ({
                    key,
                    start: getPayrollPeriodBounds(key).start,
                    end: getPayrollPeriodBounds(key).end,
                    label: getPayrollPeriodLabel(key),
                    rows: grouped[key].sort((a, b) => a.date.localeCompare(b.date))
                }));
            }

            // ═══════════════════════════════════════════════════════════
            //  Business Logic
            // ═══════════════════════════════════════════════════════════

            function getLateSeconds(date, firstIn, ramadan) {
                const firstInSeconds = parseTimeToSeconds(firstIn);
                if (firstInSeconds === null) return 0;

                const isRamadan = isBetweenDates(ramadan.start, ramadan.end, date);
                const lateThreshold = isRamadan ? LATE_THRESHOLD_SECONDS_RAMADAN : LATE_THRESHOLD_SECONDS_NORMAL;

                return firstInSeconds > lateThreshold ? firstInSeconds - lateThreshold : 0;
            }

            function getRequiredSecondsBySeason(date, ramadan) {
                return isBetweenDates(ramadan.start, ramadan.end, date)
                    ? REQUIRED_SECONDS_RAMADAN
                    : REQUIRED_SECONDS_NORMAL;
            }

            function getEffectiveRowActualSeconds(row, ramadan, examPeriod) {
                if (!row) return 0;

                let durationSeconds = parseDurationToSeconds(row.duration);

                // If no valid LastOut, this row should not contribute attended duration.
                if (!hasValidLastOut(row.lastOut)) {
                    durationSeconds = 0;
                }

                const lastOutSeconds = parseTimeToSeconds(row.lastOut);
                if (lastOutSeconds !== null) {
                    const cap = getLastOutCapForDate(row.date, ramadan, examPeriod);
                    if (lastOutSeconds > cap) {
                        const firstInSeconds = parseTimeToSeconds(row.firstIn);
                        if (firstInSeconds !== null && firstInSeconds < cap) {
                            const cappedDuration = cap - firstInSeconds;
                            durationSeconds = Math.min(durationSeconds, cappedDuration);
                        }
                    }
                }

                return Math.max(0, durationSeconds);
            }

            function getOverrideActualSecondsForDate(override, date, ramadan) {
                if (!override) return 0;

                if (override.type === "full_day") {
                    return getRequiredSecondsBySeason(date, ramadan);
                }

                if (override.type === "custom_actual") {
                    return override.actualSeconds != null
                        ? Math.max(0, override.actualSeconds)
                        : Math.max(0, (override.actualMinutes || 0) * 60);
                }

                return 0;
            }

            function buildCompensationLedgerForPeriod(
                periodRows,
                periodStart,
                periodEnd,
                holidays,
                ramadan,
                overrides,
                examPeriod,
                compensationLeaves
            ) {
                const rowByDate = new Map();
                for (const row of periodRows || []) {
                    const dateKey = normalizeYMD(row.date);
                    if (dateKey) {
                        rowByDate.set(dateKey, row);
                    }
                }

                const overrideByDate = new Map();
                for (const override of overrides || []) {
                    const dateKey = normalizeYMD(override.date);
                    if (dateKey) {
                        overrideByDate.set(dateKey, override);
                    }
                }

                const leaveByDate = new Map();
                for (const leave of compensationLeaves || []) {
                    const dateKey = normalizeYMD(leave.date);
                    if (dateKey) {
                        leaveByDate.set(dateKey, leave);
                    }
                }

                let earnedDays = 0;
                let usedDays = 0;
                const entries = [];
                const earnedByWeek = new Map();

                eachYmdInRange(periodStart, periodEnd, function (date) {
                    const dayName = formatDateToDayName(date);
                    if (!dayName) return;
                    const fixedOffMatch = isFixedNonWorkingDay(dayName);
                    const effectiveDayOff = getDayOffFullNameForDate(date, getSelectedDayOffCode());
                    const dayOffMatch = effectiveDayOff && dayName === effectiveDayOff;
                    const holidayMatch = isDateHoliday(date, holidays);

                    const row = rowByDate.get(date);
                    const override = overrideByDate.get(date);

                    let workedSeconds = 0;
                    if (override) {
                        workedSeconds = getOverrideActualSecondsForDate(override, date, ramadan);
                    } else if (row) {
                        workedSeconds = getEffectiveRowActualSeconds(row, ramadan, examPeriod);
                    }

                    let hasDayOffWorkForComp = false;
                    if (dayOffMatch && !fixedOffMatch) {
                        if (override) {
                            hasDayOffWorkForComp = workedSeconds >= MIN_WORKING_DAY_SECONDS;
                        } else if (row) {
                            hasDayOffWorkForComp = hasValidLastOut(row.lastOut) && workedSeconds >= MIN_WORKING_DAY_SECONDS;
                        }
                    }

                    const week = getCompensationWeekBounds(date);
                    const weekKey = week ? week.key : "";
                    const weekEarned = weekKey ? (earnedByWeek.get(weekKey) || 0) : 0;

                    if (hasDayOffWorkForComp && weekKey && weekEarned < 1) {
                        earnedByWeek.set(weekKey, weekEarned + 1);
                        earnedDays += 1;
                        entries.push({
                            kind: "earn",
                            date,
                            seconds: 1,
                            reason: override && override.reason ? override.reason : ""
                        });
                    }

                    const leave = leaveByDate.get(date);
                    if (!leave) return;

                    const invalidTarget = fixedOffMatch || dayOffMatch || holidayMatch;

                    if (!invalidTarget && (earnedDays - usedDays) >= 1) {
                        usedDays += 1;
                        entries.push({
                            kind: "use",
                            date,
                            seconds: 1,
                            reason: leave.reason || ""
                        });
                        return;
                    }

                    entries.push({
                        kind: "use_invalid",
                        date,
                        seconds: 0,
                        reason: leave.reason || ((earnedDays - usedDays) < 1
                            ? "No earned compensation balance yet in this payroll period."
                            : "")
                    });
                });

                entries.sort(function (a, b) {
                    if (a.date !== b.date) return a.date.localeCompare(b.date);
                    const weight = { earn: 0, use: 1, use_invalid: 2 };
                    return (weight[a.kind] || 9) - (weight[b.kind] || 9);
                });

                return {
                    earnedDays,
                    usedDays,
                    balanceDays: earnedDays - usedDays,
                    earnedSeconds: earnedDays,
                    usedSeconds: usedDays,
                    balanceSeconds: earnedDays - usedDays,
                    entries
                };
            }

            // Allocates the mutable accumulator used by `buildPeriodStats` during
            // its date-by-date scan. Keeping the shape in one place makes it easy
            // to reason about which fields the loop touches.
            function createPeriodStatsAccumulator() {
                return {
                    actualSeconds: 0,
                    requiredSeconds: 0,
                    presentDays: 0,
                    absentDays: 0,
                    lateDays: 0,
                    totalLateSeconds: 0,
                    overriddenDays: 0,
                    compensationEarnedSeconds: 0,
                    compensationUsedSeconds: 0,
                    absentDayDetails: [],
                    lateDayDetails: [],
                    overriddenDayDetails: [],
                    auditEntries: []
                };
            }

            // Pre-builds date->item maps for O(1) lookup during the date scan.
            function buildDateLookupMaps(periodRows, overrides, compensationLeaves) {
                const rowByDate = new Map();
                for (const row of periodRows || []) {
                    const dateKey = normalizeYMD(row.date);
                    if (dateKey) rowByDate.set(dateKey, row);
                }

                const overrideByDate = new Map();
                for (const override of overrides || []) {
                    const dateKey = normalizeYMD(override.date);
                    if (dateKey) overrideByDate.set(dateKey, override);
                }

                const compensationByDate = new Map();
                for (const leave of compensationLeaves || []) {
                    const dateKey = normalizeYMD(leave.date);
                    if (dateKey) compensationByDate.set(dateKey, leave);
                }
                return { rowByDate, overrideByDate, compensationByDate };
            }

            // Picks the correct excluded-day audit entry given exclusion flags.
            // Returns { status, reason } or null when no excluded reason applies.
            function pickExcludedAudit(flags, workedSeconds, override) {
                if (flags.compensationLeaveMatch && !flags.isBaseExcludedDay) {
                    return { status: "Compensation", reason: "Marked as compensation leave." };
                }
                if (flags.holidayMatch) {
                    return { status: "Holiday", reason: "Excluded by holiday settings." };
                }
                if (flags.fixedOffMatch) {
                    return { status: "Friday", reason: "Fixed non-working day." };
                }
                if (flags.dayOffMatch) {
                    if (workedSeconds > 0) {
                        if (override) {
                            return {
                                status: "Day Off (Worked)",
                                reason: `Worked on day off via override (${override.type}).`
                            };
                        }
                        const workedHms = secondsToHMS(workedSeconds);
                        return {
                            status: "Day Off (Worked)",
                            reason: `Worked ${formatHMS(workedHms.hours, workedHms.minutes, workedHms.seconds)} on effective weekly day off.`
                        };
                    }
                    return { status: "Day Off", reason: "Excluded by effective weekly day off." };
                }
                return null;
            }

            // Formats the accumulator + holiday counts into the public stats object
            // returned by `buildPeriodStats`.
            function finalizePeriodStats(acc, holidayDays, annualLeaveDays) {
                const balanceSeconds = acc.actualSeconds - acc.requiredSeconds;
                const compensationBalanceSeconds = acc.compensationEarnedSeconds - acc.compensationUsedSeconds;
                const balanceHMS = secondsToHMS(balanceSeconds);
                const progressPercentRaw = acc.requiredSeconds > 0
                    ? Math.floor((acc.actualSeconds / acc.requiredSeconds) * 100)
                    : 100;
                // Capped variant for the main report card (bar width + label stay ≤100%).
                const progressPercent = Math.min(100, progressPercentRaw);
                const progressGapSeconds = Math.max(0, acc.requiredSeconds - acc.actualSeconds);
                const progressColor = progressPercent >= 100
                    ? "green"
                    : progressGapSeconds <= 3 * 3600
                        ? "amber"
                        : "red";

                const formatSeconds = function (totalSeconds) {
                    const hms = secondsToHMS(totalSeconds);
                    return formatHMS(hms.hours, hms.minutes, hms.seconds);
                };

                return {
                    presentDays: acc.presentDays,
                    absentDays: acc.absentDays,
                    absentDayDetails: acc.absentDayDetails.slice().sort(),
                    lateDays: acc.lateDays,
                    totalLateSeconds: acc.totalLateSeconds,
                    totalLateHM: formatSeconds(acc.totalLateSeconds),
                    lateDayDetails: acc.lateDayDetails,
                    holidayDays,
                    annualLeaveDays,
                    overriddenDays: acc.overriddenDays,
                    overriddenDayDetails: acc.overriddenDayDetails,
                    compensationEarnedSeconds: acc.compensationEarnedSeconds,
                    compensationUsedSeconds: acc.compensationUsedSeconds,
                    compensationBalanceSeconds,
                    compensationEarnedHM: formatSeconds(acc.compensationEarnedSeconds),
                    compensationUsedHM: formatSeconds(acc.compensationUsedSeconds),
                    compensationBalanceHM: formatSeconds(compensationBalanceSeconds),
                    auditEntries: acc.auditEntries,
                    actualSeconds: acc.actualSeconds,
                    requiredSeconds: acc.requiredSeconds,
                    actualHM: formatSeconds(acc.actualSeconds),
                    requiredHM: formatSeconds(acc.requiredSeconds),
                    balanceHM: formatHMS(balanceHMS.hours, balanceHMS.minutes, balanceHMS.seconds),
                    balanceShort: balanceHMS.hours + ":" + String(balanceHMS.minutes).padStart(2, "0"),
                    isPositiveOrZero: balanceSeconds >= 0,
                    label: balanceSeconds >= 0 ? "Extra" : "Missing",
                    progressPercent,
                    progressPercentRaw,
                    progressColor
                };
            }

            // Detect the staff member's weekly day off: the weekday (Sat–Thu; Friday is the
            // fixed off-day, holidays excluded) with the MOST absences (days with no check-in)
            // across the whole loaded table. Returns { code, fullName, occ } where occ = that
            // weekday's absence count, or null when there are no rows or no absences at all.
            // Ties resolve to the earliest weekday (Sat→Thu).
            const DAYOFF_WEEKDAYS = [
                { code: "Sat", name: "Saturday" },
                { code: "Sun", name: "Sunday" },
                { code: "Mon", name: "Monday" },
                { code: "Tue", name: "Tuesday" },
                { code: "Wed", name: "Wednesday" },
                { code: "Thu", name: "Thursday" }
            ];

            function detectDayOffCode(periods) {
                const rows = (periods || []).flatMap(function (p) { return (p && p.rows) || []; });
                const attendedByDate = new Map();
                let minDate = null;
                let maxDate = null;
                rows.forEach(function (row) {
                    const ymd = normalizeYMD(row && row.date ? row.date : "");
                    if (!ymd) return;
                    if (!minDate || ymd < minDate) minDate = ymd;
                    if (!maxDate || ymd > maxDate) maxDate = ymd;
                    if (hasValidLastOut(row.lastOut)) attendedByDate.set(ymd, true);
                });
                if (!minDate || !maxDate) return null;

                const holidays = getStoredHolidays();
                const absentByName = new Map(); // dayName -> absence count
                eachYmdInRange(minDate, maxDate, function (ymd) {
                    const dayName = formatDateToDayName(ymd);
                    if (!dayName || isFixedNonWorkingDay(dayName)) return; // skip Friday
                    if (isDateHoliday(ymd, holidays)) return;              // skip holidays
                    if (attendedByDate.get(ymd)) return;                   // attended → not absent
                    absentByName.set(dayName, (absentByName.get(dayName) || 0) + 1);
                });

                // Day off = weekday with the most absences (>= 1). Strict ">" keeps the first
                // weekday in week order on ties (Sat→Thu).
                let best = null;
                DAYOFF_WEEKDAYS.forEach(function (wd) {
                    const absent = absentByName.get(wd.name) || 0;
                    if (absent >= 1 && (!best || absent > best.occ)) {
                        best = { code: wd.code, fullName: wd.name, occ: absent };
                    }
                });
                return best;
            }

            // Decide what to do about an unconfigured day off, given the loaded periods.
            // Returns one of:
            //   { status: 'applied', code, fullName, occ }  — auto-filled selectedDay
            //   { status: 'warn' }                          — unset and not confidently detectable
            //   null                                         — already configured / previously undone
            // Must run BEFORE buildPeriodStats so rendered numbers use the new day off.
            function maybeAutoFillDayOff(periods) {
                if (isDayOffConfigured()) return null;
                const state = getDayOffAutoState();
                if (state && state.status === "undone") return { status: "warn" };

                const detected = detectDayOffCode(periods);
                if (!detected) return { status: "warn" };

                localStorage.setItem(STORAGE_KEYS.selectedDay, detected.code);
                setDayOffAutoState({
                    status: "applied",
                    code: detected.code,
                    occ: detected.occ,
                    acknowledged: false
                });
                return {
                    status: "applied",
                    code: detected.code,
                    fullName: detected.fullName,
                    occ: detected.occ
                };
            }

            function buildPeriodStats(periodRows, periodStart, periodEnd) {
                const acc = createPeriodStatsAccumulator();
                const today = getTodayLocalYMD();
                const holidays = getStoredHolidays();
                const ramadan = getStoredRamadan();
                const overrides = getStoredOverrides();
                const compensationLeaves = getStoredCompensationLeaves();
                const examPeriod = getStoredExamPeriod();

                const holidayDateSet = getHolidayDatesInPeriod(holidays, periodStart, periodEnd);
                const annualDateSet = getAnnualLeaveDateSet(holidays, periodStart, periodEnd);
                const holidayDays = holidayDateSet.size - annualDateSet.size;
                const annualLeaveDays = annualDateSet.size;

                const { rowByDate, overrideByDate, compensationByDate } =
                    buildDateLookupMaps(periodRows, overrides, compensationLeaves);

                // Pair earned day-off-work entries with consumed compensation uses so
                // that the matched earn day is treated as a regular working day in
                // the balance (required += dayReq), while any extra unmatched earn
                // days remain pure bonus hours. Without this pairing, a Saturday
                // worked + Tuesday comp leave swap inflates the balance by one
                // day's worth of required hours.
                const ledger = buildCompensationLedgerForPeriod(
                    periodRows,
                    periodStart,
                    periodEnd,
                    holidays,
                    ramadan,
                    overrides,
                    examPeriod,
                    compensationLeaves
                );
                const earnedDatesAsc = ledger.entries
                    .filter(function (e) { return e.kind === "earn"; })
                    .map(function (e) { return e.date; })
                    .sort();
                const matchedEarnDates = new Set(earnedDatesAsc.slice(0, ledger.usedDays || 0));

                const fallbackStart = periodRows.length > 0 ? periodRows[0].date : today;
                const fallbackEnd = periodRows.length > 0 ? periodRows[periodRows.length - 1].date : today;
                const windowStart = periodStart || fallbackStart;
                const windowEnd = periodEnd || fallbackEnd;

                const pushAudit = function (date, status, reason) {
                    if (date > today) return;
                    acc.auditEntries.push({
                        date,
                        dayName: formatDateToDayName(date),
                        status,
                        reason
                    });
                };

                const pushExcludedAudit = function (date, flags, workedSeconds, override) {
                    const audit = pickExcludedAudit(flags, workedSeconds, override);
                    if (audit) pushAudit(date, audit.status, audit.reason);
                };

                eachYmdInRange(windowStart, windowEnd, function (date) {
                    const dayName = formatDateToDayName(date);
                    if (!dayName) return;

                    const row = rowByDate.get(date);
                    const override = overrideByDate.get(date);
                    const compensationLeave = compensationByDate.get(date);

                    const fixedOffMatch = isFixedNonWorkingDay(dayName);
                    const effectiveDayOff = getDayOffFullNameForDate(date, getSelectedDayOffCode());
                    const dayOffMatch = !!(effectiveDayOff && dayName === effectiveDayOff);
                    const holidayMatch = holidayDateSet.has(date) || isDateHoliday(date, holidays);
                    const isBaseExcludedDay = fixedOffMatch || dayOffMatch || holidayMatch;
                    const compensationLeaveMatch = !!compensationLeave;
                    const isExcludedDay = isBaseExcludedDay || compensationLeaveMatch;
                    const flags = { fixedOffMatch, dayOffMatch, holidayMatch, isBaseExcludedDay, compensationLeaveMatch };

                    const dayReq = getRequiredSecondsBySeason(date, ramadan);
                    if (compensationLeaveMatch && !isBaseExcludedDay) {
                        acc.compensationUsedSeconds += dayReq;
                    }

                    if (override) {
                        acc.overriddenDays += 1;
                        const overrideActualSeconds = getOverrideActualSecondsForDate(override, date, ramadan);
                        if (dayOffMatch && overrideActualSeconds > 0) {
                            acc.compensationEarnedSeconds += overrideActualSeconds;
                        }

                        const detail = { date, type: override.type, reason: override.reason || "" };
                        if (override.type === "custom_actual") detail.actualSeconds = overrideActualSeconds;
                        acc.overriddenDayDetails.push(detail);

                        // Hours from overrides are always added to actual time.
                        acc.actualSeconds += overrideActualSeconds;

                        if (compensationLeaveMatch || isBaseExcludedDay) {
                            const audit = pickExcludedAudit(flags, overrideActualSeconds, override);
                            pushAudit(date, audit ? audit.status : "Excluded", audit ? audit.reason : "Excluded by settings.");
                            return;
                        }

                        // Working-day override behaves like attended full/adjusted day.
                        acc.requiredSeconds += dayReq;
                        acc.presentDays += 1;
                        pushAudit(date, "Present", `Counted via override (${override.type}).`);
                        return;
                    }

                    if (row) {
                        const durationSeconds = getEffectiveRowActualSeconds(row, ramadan, examPeriod);
                        if (dayOffMatch && durationSeconds > 0) {
                            acc.compensationEarnedSeconds += durationSeconds;
                        }

                        // Day-off swap: when this earn day is paired with a consumed
                        // compensation use, treat it as a regular working day so the
                        // balance reflects the swap (Saturday worked + Tuesday off
                        // ≈ regular week, not a free bonus).
                        const isMatchedSwapDay = dayOffMatch
                            && !fixedOffMatch
                            && !holidayMatch
                            && matchedEarnDates.has(date);
                        if (isMatchedSwapDay) {
                            acc.requiredSeconds += dayReq;
                            if (durationSeconds >= MIN_WORKING_DAY_SECONDS) {
                                acc.presentDays += 1;
                                const workedHms = secondsToHMS(durationSeconds);
                                pushAudit(date, "Day Off (Swap)", `Swapped with compensation leave; counted as a regular working day. Worked ${formatHMS(workedHms.hours, workedHms.minutes, workedHms.seconds)}.`);
                                const lateBy = getLateSeconds(row.date, row.firstIn, ramadan);
                                if (lateBy > 0) {
                                    acc.lateDays += 1;
                                    acc.totalLateSeconds += lateBy;
                                    acc.lateDayDetails.push({
                                        date: row.date,
                                        firstIn: row.firstIn,
                                        lateBySeconds: lateBy
                                    });
                                }
                            } else if (row.date < today) {
                                pushAudit(date, "Day Off (Swap, Short)", `Swap day worked less than 4:00:00; still counted as required day.`);
                            }
                            acc.actualSeconds += durationSeconds;
                            return;
                        }

                        const countRequired = !isExcludedDay && (hasValidLastOut(row.lastOut) || row.date < today);
                        const isAbsentRow = !isExcludedDay && durationSeconds < MIN_WORKING_DAY_SECONDS && row.date < today;
                        const reqSeconds = countRequired && !isAbsentRow ? dayReq : 0;

                        if (!isExcludedDay) {
                            if (durationSeconds >= MIN_WORKING_DAY_SECONDS) {
                                acc.presentDays += 1;
                                const workedHms = secondsToHMS(durationSeconds);
                                pushAudit(date, "Present", `Worked ${formatHMS(workedHms.hours, workedHms.minutes, workedHms.seconds)}.`);
                                const lateBy = getLateSeconds(row.date, row.firstIn, ramadan);
                                if (lateBy > 0) {
                                    acc.lateDays += 1;
                                    acc.totalLateSeconds += lateBy;
                                    acc.lateDayDetails.push({
                                        date: row.date,
                                        firstIn: row.firstIn,
                                        lateBySeconds: lateBy
                                    });
                                }
                            } else if (row.date < today) {
                                acc.absentDays += 1;
                                acc.absentDayDetails.push(row.date);
                                pushAudit(date, "Absent", "Worked less than 4:00:00 or invalid checkout.");
                            }
                        } else {
                            pushExcludedAudit(date, flags, durationSeconds, null);
                        }

                        acc.actualSeconds += durationSeconds;
                        acc.requiredSeconds += reqSeconds;
                        return;
                    }

                    // No row and no override.
                    if (!isExcludedDay && date < today) {
                        // Absent days do not affect required/balance hours.
                        acc.absentDays += 1;
                        acc.absentDayDetails.push(date);
                        pushAudit(date, "Absent", "No attendance row found.");
                        return;
                    }
                    pushExcludedAudit(date, flags, 0, null);
                });

                return finalizePeriodStats(acc, holidayDays, annualLeaveDays);
            }

            // ═══════════════════════════════════════════════════════════
            //  Summary Card Components
            // ═══════════════════════════════════════════════════════════

            function createStatRow(icon, label, value, extraClass) {
                const row = document.createElement("div");
                row.className = `giu-stat-row ${extraClass || ""}`.trim();

                const left = document.createElement("div");
                left.className = "giu-stat-left";

                const iconEl = document.createElement("div");
                iconEl.className = "giu-stat-icon";
                iconEl.textContent = icon;

                const labelEl = document.createElement("div");
                labelEl.className = "giu-stat-label";
                labelEl.textContent = label;

                left.appendChild(iconEl);
                left.appendChild(labelEl);

                const valueEl = document.createElement("div");
                valueEl.className = "giu-stat-value";
                valueEl.textContent = value;

                row.appendChild(left);
                row.appendChild(valueEl);

                return row;
            }

            function createBalanceRow(stats) {
                const row = document.createElement("div");
                row.className = `giu-stat-row ${stats.isPositiveOrZero ? "giu-balance-positive" : "giu-balance-negative"}`;

                const left = document.createElement("div");
                left.className = "giu-stat-left";

                const iconEl = document.createElement("div");
                iconEl.className = "giu-stat-icon";
                if (stats.absentDays > 0) {
                    iconEl.textContent = "✕";
                    iconEl.title = `${stats.absentDays} absent day(s) not counted in hours`;
                    iconEl.style.color = "#dc2626";
                } else if (!stats.isPositiveOrZero) {
                    iconEl.textContent = "⚠";
                    iconEl.title = "Negative balance (missing hours)";
                    iconEl.style.color = "#d97706";
                } else {
                    iconEl.textContent = "✔";
                    iconEl.title = "No alerts";
                    iconEl.style.color = "#16a34a";
                }

                const labelEl = document.createElement("div");
                labelEl.className = "giu-stat-label";
                labelEl.textContent = "Balance";

                left.appendChild(iconEl);
                left.appendChild(labelEl);

                const valueWrap = document.createElement("div");
                valueWrap.className = "giu-stat-value";
                valueWrap.innerHTML = `
                    ${stats.balanceShort}
                    <span class="giu-balance-tag ${stats.isPositiveOrZero ? "giu-tag-positive" : "giu-tag-negative"}">
                        ${stats.label}
                    </span>
                `;

                row.appendChild(left);
                row.appendChild(valueWrap);

                return row;
            }

            function createProgressSection(stats) {
                const wrap = document.createElement("div");
                wrap.className = "giu-progress-wrap";

                const top = document.createElement("div");
                top.className = "giu-progress-top";

                const pctClass = stats.progressColor === "green"
                    ? "giu-progress-pct-green"
                    : stats.progressColor === "amber"
                        ? "giu-progress-pct-amber"
                        : "giu-progress-pct-red";
                top.innerHTML = `
                    <span>Required Hours Completion</span>
                    <span class="${pctClass}">${stats.progressPercent}%</span>
                `;

                const bar = document.createElement("div");
                bar.className = "giu-progress-bar";

                const fillClass = stats.progressColor === "green"
                    ? "giu-progress-fill-green"
                    : stats.progressColor === "amber"
                        ? "giu-progress-fill-amber"
                        : "giu-progress-fill-red";
                const fill = document.createElement("div");
                fill.className = `giu-progress-fill ${fillClass}`;
                fill.style.width = `${stats.progressPercent}%`;

                bar.appendChild(fill);
                wrap.appendChild(top);
                wrap.appendChild(bar);

                return wrap;
            }

            // Shared primitive: a collapsible "extra" box (header + chevron + body).
            // Used by Late/Absent/Audit/Override-detail boxes.
            // - When `bodyContent` is null/undefined, the box renders without an expand area
            //   (used when there are no rows worth showing).
            function createCollapsibleDetailBox(options) {
                const opts = options || {};
                const boxClass = opts.boxClass || "giu-extra-box";
                const wrapperClass = opts.wrapperClass || "giu-expand-wrapper";
                const initialExpanded = !!opts.initialExpanded;

                const box = document.createElement("div");
                box.className = boxClass;

                const header = document.createElement("div");
                header.className = "giu-late-header";

                const label = document.createElement("span");
                if (opts.labelText) label.textContent = opts.labelText;
                else if (opts.labelHTML) label.innerHTML = opts.labelHTML;
                header.appendChild(label);

                const hasBody = !!opts.bodyContent;

                let chevron = null;
                if (hasBody) {
                    chevron = document.createElement("span");
                    chevron.className = "giu-expand-chevron";
                    chevron.textContent = "\u25BC";
                    header.appendChild(chevron);
                }
                box.appendChild(header);

                if (!hasBody) return box;

                const expandWrapper = document.createElement("div");
                expandWrapper.className = wrapperClass;

                const expandInner = document.createElement("div");
                expandInner.className = "giu-expand-inner";

                expandInner.appendChild(opts.bodyContent);
                expandWrapper.appendChild(expandInner);
                box.appendChild(expandWrapper);

                if (initialExpanded) {
                    expandWrapper.classList.add("giu-expanded");
                    if (chevron) chevron.classList.add("giu-chevron-open");
                }

                header.addEventListener("click", function () {
                    expandWrapper.classList.toggle("giu-expanded");
                    if (chevron) chevron.classList.toggle("giu-chevron-open");
                });

                return box;
            }

            function createLateBox(stats) {
                const details = Array.isArray(stats.lateDayDetails) ? stats.lateDayDetails : [];
                let bodyContent = null;

                if (details.length > 0) {
                    bodyContent = document.createElement("div");
                    bodyContent.className = "giu-late-details";

                    details.forEach(function (entry) {
                        const row = document.createElement("div");
                        row.className = "giu-late-detail-row";

                        const dateSpan = document.createElement("span");
                        dateSpan.textContent = `${entry.date} (${formatDateToDayName(entry.date)})`;

                        const lateHMS = secondsToHMS(entry.lateBySeconds);
                        const lateSpan = document.createElement("span");
                        lateSpan.textContent = `In: ${entry.firstIn} — Late by ${formatHMS(lateHMS.hours, lateHMS.minutes, lateHMS.seconds)}`;

                        row.appendChild(dateSpan);
                        row.appendChild(lateSpan);
                        bodyContent.appendChild(row);
                    });
                }

                return createCollapsibleDetailBox({
                    labelText: `Late arrivals: ${stats.lateDays} (${stats.totalLateHM} total)`,
                    bodyContent
                });
            }

            // Shared add-as-X handler for absent-day quick actions.
            // Adds a holiday entry (category-flexible) after dedup + sort + undo snapshot.
            function saveAbsentHolidayEntry(date, category, undoLabel, alertMessages) {
                const currentHolidays = getStoredHolidays();
                const newEntry = normalizeHolidayEntry({ type: "single", category, date });
                if (!newEntry) {
                    return { ok: false, message: alertMessages.invalid };
                }

                const newKey = holidayEntryToKey(newEntry);
                if (currentHolidays.some(item => holidayEntryToKey(item) === newKey)) {
                    return { ok: false, message: alertMessages.exists };
                }

                currentHolidays.push(newEntry);
                currentHolidays.sort(function (a, b) {
                    const aValue = a.type === "single" ? a.date : a.start;
                    const bValue = b.type === "single" ? b.date : b.start;
                    return aValue.localeCompare(bValue);
                });
                saveUndoSnapshot("holidays", undoLabel);
                setStoredHolidays(currentHolidays);
                return { ok: true };
            }

            function addAbsentHolidayEntry(date, category, undoLabel, alertMessages) {
                const result = saveAbsentHolidayEntry(date, category, undoLabel, alertMessages);
                if (!result.ok) {
                    alert(result.message);
                    return;
                }
                renderEnhancedUI();
            }

            function saveAbsentCompensationEntry(date, periods, selectedDayOffFullName, reason, undoLabel) {
                const normalizedDate = normalizeYMD(date);
                if (!normalizedDate) {
                    return { ok: false, message: "Invalid date format." };
                }

                const currentLeaves = getStoredCompensationLeaves();
                if (currentLeaves.some(function (item) { return normalizeYMD(item.date) === normalizedDate; })) {
                    return { ok: false, message: "A compensation leave already exists for this date." };
                }

                const validation = validateCompensationLeaveDate(
                    normalizedDate,
                    selectedDayOffFullName,
                    periods,
                    currentLeaves,
                    getStoredHolidays(),
                    getStoredRamadan(),
                    getStoredOverrides(),
                    getStoredExamPeriod()
                );
                if (!validation.ok) {
                    return validation;
                }

                const entry = { date: normalizedDate };
                const cleanReason = typeof reason === "string" ? reason.trim() : "";
                if (cleanReason) entry.reason = cleanReason;

                saveUndoSnapshot("compensation", undoLabel);
                setStoredCompensationLeaves(currentLeaves.concat([entry]));
                return { ok: true };
            }

            function createAbsentDayQuickActions(date) {
                const right = document.createElement("span");
                right.style.display = "inline-flex";
                right.style.alignItems = "center";
                right.style.gap = "6px";

                const note = document.createElement("span");
                note.textContent = "Missing attendance entry";

                const addAsLabel = document.createElement("span");
                addAsLabel.textContent = "Add as:";
                addAsLabel.style.fontSize = "11px";
                addAsLabel.style.fontWeight = "700";
                addAsLabel.style.color = "#64748b";
                addAsLabel.style.marginRight = "2px";

                const stopProp = function (handler) {
                    return function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        handler();
                    };
                };

                const makeHolidayBtn = createUiButton("Holiday", "giu-absent-holiday-btn", stopProp(function () {
                    addAbsentHolidayEntry(date, "holiday", "Add holiday from absent quick action", {
                        invalid: "Invalid date. Could not create holiday.",
                        exists: "This date is already saved as a holiday."
                    });
                }));

                const makeAnnualBtn = createUiButton("Annual leave", "giu-absent-holiday-btn", stopProp(function () {
                    addAbsentHolidayEntry(date, "annual", "Add annual leave from absent quick action", {
                        invalid: "Invalid date. Could not create annual leave.",
                        exists: "This date is already saved as annual leave."
                    });
                }));

                const addCompBtn = createUiButton("Compensation", "giu-absent-holiday-btn", stopProp(function () {
                    const selectedDayOffFullName = getSelectedDayOffFullName(getSelectedDayOffCode());
                    const periods = groupRowsByPayrollPeriod(getAttendanceRows());
                    const result = saveAbsentCompensationEntry(
                        date,
                        periods,
                        selectedDayOffFullName,
                        "From absent day quick action",
                        "Add compensation from absent quick action"
                    );
                    if (!result.ok) {
                        alert(result.message);
                        return;
                    }
                    renderEnhancedUI();
                }));

                right.appendChild(note);
                right.appendChild(addAsLabel);
                right.appendChild(makeHolidayBtn);
                right.appendChild(makeAnnualBtn);
                right.appendChild(addCompBtn);
                return right;
            }

            function createAbsentBox(stats, initialExpanded) {
                const details = Array.isArray(stats.absentDayDetails) ? stats.absentDayDetails : [];
                let bodyContent = null;

                if (details.length > 0) {
                    bodyContent = document.createElement("div");
                    bodyContent.className = "giu-late-details";

                    details.forEach(function (date) {
                        const row = document.createElement("div");
                        row.className = "giu-late-detail-row";

                        const left = document.createElement("span");
                        left.textContent = `${date} (${formatDateToDayName(date)})`;
                        row.appendChild(left);
                        row.appendChild(createAbsentDayQuickActions(date));
                        bodyContent.appendChild(row);
                    });
                }

                return createCollapsibleDetailBox({
                    boxClass: "giu-extra-box giu-extra-box-absent",
                    wrapperClass: "giu-expand-wrapper giu-absent-detail-wrapper",
                    labelText: `Absent days: ${stats.absentDays}`,
                    bodyContent,
                    initialExpanded
                });
            }

            function createAuditBox(stats) {
                const today = getTodayLocalYMD();
                const entries = (Array.isArray(stats.auditEntries) ? stats.auditEntries : []).filter(function (entry) {
                    const entryDate = normalizeYMD(entry && entry.date ? entry.date : "");
                    return entryDate && entryDate <= today;
                });

                const body = document.createElement("div");
                body.className = "giu-late-details";
                entries.slice().sort(function (a, b) {
                    return b.date.localeCompare(a.date);
                }).forEach(function (entry) {
                    const row = document.createElement("div");
                    row.className = "giu-late-detail-row";

                    const left = document.createElement("span");
                    left.innerHTML = `${entry.date} (${entry.dayName || "-"}) — <strong>${entry.status}</strong>`;

                    const right = document.createElement("span");
                    right.className = "giu-audit-reason";
                    right.textContent = entry.reason || "";

                    row.appendChild(left);
                    row.appendChild(right);
                    body.appendChild(row);
                });

                return createCollapsibleDetailBox({
                    boxClass: "giu-extra-box giu-extra-box-blue",
                    labelText: `Audit Log: ${entries.length} day(s)`,
                    bodyContent: body
                });
            }

            function createSummaryCard(title, periodLabel, stats, initialDetailsExpanded, initialAbsentExpanded, summaryKey) {
                const card = document.createElement("div");
                card.className = "giu-summary-card";
                card.setAttribute("data-summary-key", summaryKey || "");

                const header = document.createElement("div");
                header.className = "giu-summary-card-header";
                header.innerHTML = `
                    <h3>${title}</h3>
                    <div class="giu-period-label">${periodLabel}</div>
                `;

                const body = document.createElement("div");
                body.className = "giu-summary-body";

                // Simple view (default): balance + progress
                const simpleSection = document.createElement("div");
                simpleSection.className = "giu-simple-view";
                simpleSection.appendChild(createBalanceRow(stats));
                simpleSection.appendChild(createProgressSection(stats));

                // Full view (hidden by default, animated expand)
                const fullWrapper = document.createElement("div");
                fullWrapper.className = "giu-expand-wrapper giu-summary-detail-wrapper";

                const fullInner = document.createElement("div");
                fullInner.className = "giu-expand-inner";

                const statList = document.createElement("div");
                statList.className = "giu-stat-list";

                statList.appendChild(createStatRow("\ud83d\udcc5", "Present Days", String(stats.presentDays)));
                statList.appendChild(createStatRow("\ud83c\udf89", "Holidays", String(stats.holidayDays)));
                statList.appendChild(createStatRow("\ud83c\udf1f", "Annual Leave Days", String(stats.annualLeaveDays || 0)));
                statList.appendChild(createStatRow("\u23f0", "Actual Hours", stats.actualHM));
                statList.appendChild(createStatRow("\ud83d\udd52", "Required Hours", stats.requiredHM));
                statList.appendChild(createStatRow(stats.isPositiveOrZero ? "\u25b2" : "\u25bc", "Balance", stats.balanceHM + " (" + stats.label + ")", stats.isPositiveOrZero ? "giu-balance-positive" : "giu-balance-negative"));

                if (stats.overriddenDays > 0) {
                    statList.appendChild(createStatRow("\ud83d\udcdd", "Overridden Days", String(stats.overriddenDays)));
                }

                fullInner.appendChild(statList);

                if (stats.overriddenDayDetails && stats.overriddenDayDetails.length > 0) {
                    fullInner.appendChild(createOverrideDetailBox(stats));
                }

                if (stats.absentDays > 0) {
                    fullInner.appendChild(createAbsentBox(stats, initialAbsentExpanded));
                }

                fullInner.appendChild(createLateBox(stats));

                if (isAuditModeEnabled()) {
                    fullInner.appendChild(createAuditBox(stats));
                }

                const note = document.createElement("div");
                note.className = "giu-small-note";
                const normalH = Math.floor(LATE_THRESHOLD_SECONDS_NORMAL / 3600);
                const normalM = Math.floor((LATE_THRESHOLD_SECONDS_NORMAL % 3600) / 60);
                const ramadanH = Math.floor(LATE_THRESHOLD_SECONDS_RAMADAN / 3600);
                const ramadanM = Math.floor((LATE_THRESHOLD_SECONDS_RAMADAN % 3600) / 60);
                note.innerHTML = `Required hours count only when the day has passed or a LastOut value exists.<br>Working day is counted only if worked duration is at least 4:00:00.<br>Payroll period is calculated from the 11th of the month to the 10th of the following month.<br>Late arrivals are counted when First In is after the threshold: ${formatTime12(normalH, normalM)} for normal days, ${formatTime12(ramadanH, ramadanM)} for Ramadan days.`;
                fullInner.appendChild(note);

                fullWrapper.appendChild(fullInner);

                // Toggle button
                const toggleBtn = document.createElement("button");
                toggleBtn.type = "button";
                toggleBtn.className = "giu-detail-toggle-btn";
                toggleBtn.innerHTML = 'Show Details <span class="giu-toggle-chevron">\u25BC</span>';

                if (initialDetailsExpanded) {
                    fullWrapper.classList.add("giu-expanded");
                    const initialChevron = toggleBtn.querySelector(".giu-toggle-chevron");
                    toggleBtn.childNodes[0].textContent = "Hide Details ";
                    if (initialChevron) initialChevron.classList.add("giu-chevron-open");
                }

                toggleBtn.addEventListener("click", function () {
                    const isExpanded = fullWrapper.classList.toggle("giu-expanded");
                    const chevron = toggleBtn.querySelector(".giu-toggle-chevron");
                    if (isExpanded) {
                        toggleBtn.childNodes[0].textContent = "Hide Details ";
                        chevron.classList.add("giu-chevron-open");
                    } else {
                        toggleBtn.childNodes[0].textContent = "Show Details ";
                        chevron.classList.remove("giu-chevron-open");
                    }
                });

                body.appendChild(simpleSection);
                body.appendChild(toggleBtn);

                const detailSpacer = document.createElement("div");
                detailSpacer.style.height = "8px";
                fullInner.insertBefore(detailSpacer, fullInner.firstChild);

                body.appendChild(fullWrapper);

                card.appendChild(header);
                card.appendChild(body);

                return card;
            }

            function createOverrideDetailBox(stats) {
                const details = document.createElement("div");
                details.className = "giu-late-details";

                for (const entry of stats.overriddenDayDetails) {
                    const row = document.createElement("div");
                    row.className = "giu-late-detail-row";

                    const dateSpan = document.createElement("span");
                    dateSpan.textContent = `${entry.date} (${formatDateToDayName(entry.date)})`;

                    const infoSpan = document.createElement("span");
                    const badge = document.createElement("span");
                    const badgeClass = entry.type === "full_day" ? "giu-override-badge-full" : "giu-override-badge-custom";
                    badge.className = `giu-override-badge ${badgeClass}`;
                    badge.textContent = getOverrideTypeLabel(entry.type);
                    infoSpan.appendChild(badge);

                    const entrySec = entry.actualSeconds != null
                        ? entry.actualSeconds
                        : (entry.actualMinutes != null ? entry.actualMinutes * 60 : null);
                    if (entry.type === "custom_actual" && entrySec != null) {
                        const hms = secondsToHMS(entrySec);
                        infoSpan.appendChild(document.createTextNode(" " + formatHMS(hms.hours, hms.minutes, hms.seconds)));
                    }
                    if (entry.reason) {
                        infoSpan.appendChild(document.createTextNode(" \u2014 " + entry.reason));
                    }

                    row.appendChild(dateSpan);
                    row.appendChild(infoSpan);
                    details.appendChild(row);
                }

                return createCollapsibleDetailBox({
                    boxClass: "giu-extra-box giu-extra-box-blue",
                    labelText: `Overridden days: ${stats.overriddenDayDetails.length}`,
                    bodyContent: details
                });
            }

            function createDebugBox(message) {
                const box = document.createElement("div");
                box.className = "giu-debug-box";
                box.textContent = message;
                return box;
            }

            // ═══════════════════════════════════════════════════════════
            //  First-Time User Guide (Onboarding Walkthrough)
            // ═══════════════════════════════════════════════════════════

            function expandSettingsPanelForGuide() {
                const wrapper = document.querySelector("#giu-attendance-container .giu-config-panel .giu-expand-wrapper");
                if (!wrapper || wrapper.classList.contains("giu-expanded")) return;

                const header = document.querySelector("#giu-attendance-container .giu-config-panel .giu-collapsible-header");
                if (header) {
                    header.click();
                }
            }

            function expandAllSettingsSubsectionsForGuide() {
                const toggles = Array.from(document.querySelectorAll("#giu-attendance-container .giu-settings-subsection .giu-detail-toggle-btn"));
                toggles.forEach(function (btn) {
                    const section = btn.parentElement;
                    const wrap = section ? section.querySelector(".giu-expand-wrapper") : null;
                    if (wrap && !wrap.classList.contains("giu-expanded")) btn.click();
                });
            }

            // Example configuration: each step targets one selector with title and description.
            function getOnboardingSteps() {
                return [
                    {
                        selector: "#giu-attendance-container .giu-attendance-section-title",
                        title: "Attendance Summary",
                        description: "Shows payroll-month stats, progress, and balance. Working day counts from 4:00:00+, absent days listed without reducing required hours."
                    },
                    {
                        selector: "#giu-attendance-container .giu-summary-header",
                        title: "Expand / Collapse All",
                        description: "Click summary header or hint pill to expand/collapse all cards. Hint state stays synced with manual detail toggles."
                    },
                    {
                        selector: "#giu-attendance-container .giu-config-title",
                        title: "Attendance Settings",
                        description: "Settings grouped into collapsible sections. Default state is collapsed for fast scanning."
                    },
                    {
                        selector: "#giu-day-select",
                        title: "Day Off Setup",
                        description: "Choose day off, set Apply from date, then Apply. Timeline badge shows next scheduled change.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-dayoff-badge",
                        title: "Mini Summary Chip",
                        description: "Tools row shows quick chip: Annual remaining and Compensation balance.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "label input[type='checkbox']",
                        title: "Audit Log Mode",
                        description: "Audit mode toggle in Tools section. ON by default; shows per-day reasons and hides future dates.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "#giu-holiday-mode",
                        title: "Holidays & Annual Leaves",
                        description: "Add single/range Holiday or Annual Leave. Annual Remaining editable inline; monthly accrual +3 per payroll month.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-table-tools .giu-remove-holiday-btn",
                        title: "Table Filters & Bulk Actions",
                        description: "Holidays / Overrides / Compensation tables support quick filters, row selection, and Remove Selected bulk action.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "#giu-override-date",
                        title: "Attendance Overrides",
                        description: "Add Full Day / Custom Actual with reason+note. Section has scoped Undo and pagination.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "#giu-comp-leave-date",
                        title: "Compensations",
                        description: "Earn by working effective day off (not Friday), earn cap = 1/week. Use allowed multiple/week if payroll-month balance supports.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-conflict-box",
                        title: "Conflict Detector",
                        description: "Shown only when conflicts exist. Each row has quick-fix buttons: Drop Holiday / Drop Override / Drop Comp.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: "#giu-ramadan-start",
                        title: "Ramadan & Exam Rules",
                        description: "Advanced sections control seasonal required hours, late thresholds, and cap rules.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-small-note",
                        title: "Retention Preview",
                        description: "Tools area shows dry-run count for records eligible for auto-cleanup (>2 payroll months old).",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-restart-guide-btn",
                        title: "Guide Controls",
                        description: "Restart Guide button relaunches walkthrough anytime.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    },
                    {
                        selector: ".giu-settings-action-btn",
                        title: "Backup & Restore",
                        description: "Export/Import full settings JSON. Import now reports accepted/rejected counts with reasons.",
                        beforeShow: function () { expandSettingsPanelForGuide(); expandAllSettingsSubsectionsForGuide(); }
                    }
                ];
            }

            function isOnboardingCompleted() {
                return localStorage.getItem(ONBOARDING_COMPLETED_KEY) === "1";
            }

            function setOnboardingCompleted() {
                localStorage.setItem(ONBOARDING_COMPLETED_KEY, "1");
                localStorage.removeItem(ONBOARDING_STATE_KEY);
            }

            function getOnboardingState() {
                try {
                    const raw = localStorage.getItem(ONBOARDING_STATE_KEY);
                    if (!raw) return null;
                    const parsed = JSON.parse(raw);
                    if (!parsed || parsed.active !== true || typeof parsed.index !== "number") return null;
                    return parsed;
                } catch {
                    return null;
                }
            }

            function setOnboardingState(index) {
                localStorage.setItem(ONBOARDING_STATE_KEY, JSON.stringify({ active: true, index }));
            }

            function clearOnboardingState() {
                localStorage.removeItem(ONBOARDING_STATE_KEY);
            }

            function createOnboardingController(steps) {
                let currentIndex = -1;
                let currentTarget = null;
                let isActive = false;

                const layer = document.createElement("div");
                layer.className = "giu-guide-layer";

                const spotlight = document.createElement("div");
                spotlight.className = "giu-guide-spotlight";

                const tooltip = document.createElement("div");
                tooltip.className = "giu-guide-tooltip";

                const progressEl = document.createElement("div");
                progressEl.className = "giu-guide-progress";

                const titleEl = document.createElement("h4");
                titleEl.className = "giu-guide-title";

                const descEl = document.createElement("p");
                descEl.className = "giu-guide-description";

                const actions = document.createElement("div");
                actions.className = "giu-guide-actions";

                const left = document.createElement("div");
                left.className = "giu-guide-left";

                const right = document.createElement("div");
                right.className = "giu-guide-right";

                const skipBtn = document.createElement("button");
                skipBtn.type = "button";
                skipBtn.className = "giu-guide-btn giu-guide-btn-ghost";
                skipBtn.textContent = "Skip";

                const prevBtn = document.createElement("button");
                prevBtn.type = "button";
                prevBtn.className = "giu-guide-btn";
                prevBtn.textContent = "Previous";

                const nextBtn = document.createElement("button");
                nextBtn.type = "button";
                nextBtn.className = "giu-guide-btn giu-guide-btn-primary";
                nextBtn.textContent = "Next";

                left.appendChild(skipBtn);
                right.appendChild(prevBtn);
                right.appendChild(nextBtn);
                actions.appendChild(left);
                actions.appendChild(right);

                tooltip.appendChild(progressEl);
                tooltip.appendChild(titleEl);
                tooltip.appendChild(descEl);
                tooltip.appendChild(actions);

                layer.appendChild(spotlight);
                layer.appendChild(tooltip);

                function isRenderableElement(el) {
                    if (!el) return false;
                    const rect = el.getBoundingClientRect();
                    return rect.width > 2 && rect.height > 2;
                }

                function findValidIndex(startIndex, direction) {
                    let idx = startIndex;
                    while (idx >= 0 && idx < steps.length) {
                        const step = steps[idx];
                        if (step && typeof step.beforeShow === "function") {
                            try {
                                step.beforeShow();
                            } catch (e) {
                                console.log("Onboarding beforeShow error:", e.message);
                            }
                        }

                        const target = document.querySelector(step.selector);
                        if (isRenderableElement(target)) {
                            return { index: idx, target };
                        }

                        idx += direction;
                    }
                    return null;
                }

                function findPreviousAvailable(index) {
                    for (let i = index - 1; i >= 0; i -= 1) {
                        if (isRenderableElement(document.querySelector(steps[i].selector))) {
                            return i;
                        }
                    }
                    return -1;
                }

                function findNextAvailable(index) {
                    for (let i = index + 1; i < steps.length; i += 1) {
                        if (isRenderableElement(document.querySelector(steps[i].selector))) {
                            return i;
                        }
                    }
                    return -1;
                }

                function clearTargetPulse() {
                    if (currentTarget) {
                        currentTarget.classList.remove("giu-guide-target-pulse");
                    }
                }

                function clamp(value, min, max) {
                    return Math.max(min, Math.min(max, value));
                }

                function positionUI(target) {
                    if (!target || !isActive) return;

                    const rect = target.getBoundingClientRect();
                    const pad = 8;
                    const spotlightTop = clamp(rect.top - pad, 6, Math.max(6, window.innerHeight - 20));
                    const spotlightLeft = clamp(rect.left - pad, 6, Math.max(6, window.innerWidth - 20));
                    const spotlightWidth = Math.max(14, Math.min(window.innerWidth - 12, rect.width + pad * 2));
                    const spotlightHeight = Math.max(14, Math.min(window.innerHeight - 12, rect.height + pad * 2));

                    spotlight.style.top = `${spotlightTop}px`;
                    spotlight.style.left = `${spotlightLeft}px`;
                    spotlight.style.width = `${spotlightWidth}px`;
                    spotlight.style.height = `${spotlightHeight}px`;

                    const tooltipWidth = tooltip.offsetWidth || 340;
                    const tooltipHeight = tooltip.offsetHeight || 190;
                    const margin = 12;

                    const belowTop = rect.bottom + margin;
                    const aboveTop = rect.top - tooltipHeight - margin;
                    const prefersBelow = belowTop + tooltipHeight <= window.innerHeight - 8;
                    const tooltipTop = prefersBelow
                        ? belowTop
                        : clamp(aboveTop, 8, Math.max(8, window.innerHeight - tooltipHeight - 8));

                    const centeredLeft = rect.left + (rect.width / 2) - (tooltipWidth / 2);
                    const tooltipLeft = clamp(centeredLeft, 8, Math.max(8, window.innerWidth - tooltipWidth - 8));

                    tooltip.style.top = `${tooltipTop}px`;
                    tooltip.style.left = `${tooltipLeft}px`;
                }

                function finishGuide(markCompleted) {
                    clearTargetPulse();
                    isActive = false;

                    window.removeEventListener("resize", onViewportChange, true);
                    window.removeEventListener("scroll", onViewportChange, true);
                    window.removeEventListener("keydown", onKeyDown, true);

                    if (layer.parentNode) {
                        layer.parentNode.removeChild(layer);
                    }

                    if (markCompleted) {
                        setOnboardingCompleted();
                    } else {
                        clearOnboardingState();
                    }

                    onboardingController = null;
                }

                function showStep(requestedIndex, direction) {
                    if (!isActive) return;
                    const stepDirection = direction < 0 ? -1 : 1;

                    const initial = findValidIndex(requestedIndex, stepDirection);
                    if (!initial) {
                        if (stepDirection > 0) {
                            finishGuide(false);
                        }
                        return;
                    }

                    currentIndex = initial.index;
                    setOnboardingState(currentIndex);

                    clearTargetPulse();
                    currentTarget = initial.target;
                    currentTarget.classList.add("giu-guide-target-pulse");
                    currentTarget.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

                    const step = steps[currentIndex];
                    progressEl.textContent = `Step ${currentIndex + 1} of ${steps.length}`;
                    titleEl.textContent = step.title;
                    descEl.textContent = step.description;

                    const prevIndex = findPreviousAvailable(currentIndex);
                    const nextIndex = findNextAvailable(currentIndex);
                    prevBtn.disabled = prevIndex === -1;
                    nextBtn.textContent = nextIndex === -1 ? "Finish" : "Next";

                    window.requestAnimationFrame(function () {
                        positionUI(currentTarget);
                    });
                    setTimeout(function () {
                        positionUI(currentTarget);
                    }, 220);
                }

                function onViewportChange() {
                    if (!isActive || !currentTarget) return;
                    positionUI(currentTarget);
                }

                function onKeyDown(event) {
                    if (!isActive) return;

                    if (event.key === "Escape") {
                        event.preventDefault();
                        finishGuide(true);
                        return;
                    }

                    if (event.key === "ArrowRight") {
                        event.preventDefault();
                        const nextIndex = findNextAvailable(currentIndex);
                        if (nextIndex === -1) {
                            finishGuide(true);
                        } else {
                            showStep(nextIndex, 1);
                        }
                        return;
                    }

                    if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        const prevIndex = findPreviousAvailable(currentIndex);
                        if (prevIndex !== -1) {
                            showStep(prevIndex, -1);
                        }
                    }
                }

                prevBtn.addEventListener("click", function () {
                    const prevIndex = findPreviousAvailable(currentIndex);
                    if (prevIndex !== -1) {
                        showStep(prevIndex, -1);
                    }
                });

                nextBtn.addEventListener("click", function () {
                    const nextIndex = findNextAvailable(currentIndex);
                    if (nextIndex === -1) {
                        finishGuide(true);
                    } else {
                        showStep(nextIndex, 1);
                    }
                });

                skipBtn.addEventListener("click", function () {
                    finishGuide(true);
                });

                return {
                    start: function (initialIndex) {
                        if (isActive) return;
                        isActive = true;
                        document.body.appendChild(layer);

                        window.addEventListener("resize", onViewportChange, true);
                        window.addEventListener("scroll", onViewportChange, true);
                        window.addEventListener("keydown", onKeyDown, true);

                        const safeIndex = Number.isInteger(initialIndex) ? initialIndex : 0;
                        showStep(safeIndex, 1);
                    },
                    refresh: function () {
                        if (!isActive) return;
                        const currentStep = steps[currentIndex];
                        if (!currentStep) return;

                        const newTarget = document.querySelector(currentStep.selector);
                        if (!isRenderableElement(newTarget)) {
                            const nextIndex = findNextAvailable(currentIndex);
                            if (nextIndex !== -1) {
                                showStep(nextIndex, 1);
                            } else {
                                finishGuide(true);
                            }
                            return;
                        }

                        clearTargetPulse();
                        currentTarget = newTarget;
                        currentTarget.classList.add("giu-guide-target-pulse");
                        positionUI(currentTarget);
                    },
                    stop: function (markCompleted) {
                        if (!isActive) return;
                        finishGuide(!!markCompleted);
                    },
                    isActive: function () {
                        return isActive;
                    }
                };
            }

            function restartOnboardingGuide() {
                if (onboardingController && onboardingController.isActive()) {
                    onboardingController.stop(false);
                }

                localStorage.removeItem(ONBOARDING_COMPLETED_KEY);
                clearOnboardingState();
                renderEnhancedUI();
            }

            function maybeStartOnboardingGuide() {
                if (isOnboardingCompleted()) return;

                const steps = getOnboardingSteps();
                if (!steps.length) return;

                if (onboardingController && onboardingController.isActive()) {
                    onboardingController.refresh();
                    return;
                }

                onboardingController = createOnboardingController(steps);

                const state = getOnboardingState();
                let startIndex = 0;
                if (state && Number.isInteger(state.index) && state.index >= 0 && state.index < steps.length) {
                    startIndex = state.index;
                } else {
                    clearOnboardingState();
                }

                onboardingController.start(startIndex);
            }

            // ═══════════════════════════════════════════════════════════
            //  Main Entry Point
            // ═══════════════════════════════════════════════════════════

            function captureRenderState(existingContainer) {
                if (!existingContainer) {
                    return {
                        configExpanded: false,
                        summaryDetailsExpandedByKey: {},
                        absentDetailsExpandedByKey: {},
                        scrollY: window.scrollY
                    };
                }

                const configExpanded = !!existingContainer.querySelector(".giu-config-panel .giu-expand-wrapper.giu-expanded");
                const summaryDetailsExpandedByKey = {};
                const absentDetailsExpandedByKey = {};
                const cards = Array.from(existingContainer.querySelectorAll(".giu-summary-card[data-summary-key]"));
                cards.forEach(function (card) {
                    const key = card.getAttribute("data-summary-key") || "";
                    if (!key) return;
                    const summaryWrapper = card.querySelector(".giu-summary-detail-wrapper");
                    const absentWrapper = card.querySelector(".giu-absent-detail-wrapper");
                    summaryDetailsExpandedByKey[key] = !!(summaryWrapper && summaryWrapper.classList.contains("giu-expanded"));
                    absentDetailsExpandedByKey[key] = !!(absentWrapper && absentWrapper.classList.contains("giu-expanded"));
                });

                return {
                    configExpanded,
                    summaryDetailsExpandedByKey,
                    absentDetailsExpandedByKey,
                    scrollY: window.scrollY
                };
            }

            // ───────────────────────────────────────────────────────────────────────
            //  Summary Panel Composition
            // ───────────────────────────────────────────────────────────────────────

            function appendPeriodSummaryCards(grid, periods, selectedDayOffFullName, renderState) {
                const lastTwo = periods.slice(-2);
                if (!lastTwo.length) return;

                if (lastTwo.length === 1) {
                    const current = lastTwo[0];
                    const currentStats = buildPeriodStats(current.rows, current.start, current.end);
                    const key = `Current Payroll Month|${current.label}`;
                    grid.appendChild(createSummaryCard(
                        "Current Payroll Month",
                        current.label,
                        currentStats,
                        !!renderState.summaryDetailsExpandedByKey[key],
                        !!renderState.absentDetailsExpandedByKey[key],
                        key
                    ));
                    return;
                }

                const previous = lastTwo[lastTwo.length - 2];
                const current = lastTwo[lastTwo.length - 1];
                const previousKey = `Last Payroll Month|${previous.label}`;
                const currentKey = `This Payroll Month|${current.label}`;

                const previousStats = buildPeriodStats(previous.rows, previous.start, previous.end);
                const currentStats = buildPeriodStats(current.rows, current.start, current.end);

                grid.appendChild(createSummaryCard(
                    "Last Payroll Month",
                    previous.label,
                    previousStats,
                    !!renderState.summaryDetailsExpandedByKey[previousKey],
                    !!renderState.absentDetailsExpandedByKey[previousKey],
                    previousKey
                ));
                grid.appendChild(createSummaryCard(
                    "This Payroll Month",
                    current.label,
                    currentStats,
                    !!renderState.summaryDetailsExpandedByKey[currentKey],
                    !!renderState.absentDetailsExpandedByKey[currentKey],
                    currentKey
                ));
            }

            function attachSummaryToggleHandlers(grid, summaryTitle, summaryToggleHint) {
                const collectWrappers = function () {
                    return Array.from(grid.querySelectorAll(".giu-summary-detail-wrapper"));
                };

                const updateSummaryToggleHint = function () {
                    const wrappers = collectWrappers();
                    if (!wrappers.length) {
                        summaryToggleHint.textContent = "▾ Expand all";
                        return;
                    }
                    const allExpanded = wrappers.every(function (w) {
                        return w.classList.contains("giu-expanded");
                    });
                    summaryToggleHint.textContent = allExpanded ? "▴ Collapse all" : "▾ Expand all";
                };

                const toggleAllSummaryDetails = function () {
                    const wrappers = collectWrappers();
                    if (!wrappers.length) return;

                    const shouldExpandAll = wrappers.some(function (w) {
                        return !w.classList.contains("giu-expanded");
                    });

                    wrappers.forEach(function (wrapper) {
                        const cardBody = wrapper.closest(".giu-summary-body");
                        const toggleBtn = cardBody ? cardBody.querySelector(".giu-detail-toggle-btn") : null;
                        const chevron = toggleBtn ? toggleBtn.querySelector(".giu-toggle-chevron") : null;

                        if (shouldExpandAll) {
                            wrapper.classList.add("giu-expanded");
                            if (toggleBtn) toggleBtn.childNodes[0].textContent = "Hide Details ";
                            if (chevron) chevron.classList.add("giu-chevron-open");
                        } else {
                            wrapper.classList.remove("giu-expanded");
                            if (toggleBtn) toggleBtn.childNodes[0].textContent = "Show Details ";
                            if (chevron) chevron.classList.remove("giu-chevron-open");
                        }
                    });
                    updateSummaryToggleHint();
                };

                summaryToggleHint.addEventListener("click", toggleAllSummaryDetails);
                summaryTitle.addEventListener("click", toggleAllSummaryDetails);
                grid.addEventListener("click", function (event) {
                    const target = event.target;
                    if (!(target instanceof Element)) return;
                    if (target.closest(".giu-detail-toggle-btn")) {
                        updateSummaryToggleHint();
                    }
                });
                updateSummaryToggleHint();
            }

            function createSummaryPanel(periods, selectedDayOffFullName, renderState) {
                const panel = document.createElement("div");
                panel.className = "giu-summary-panel";

                const summaryHeader = document.createElement("div");
                summaryHeader.className = "giu-summary-header";

                const summaryTitle = document.createElement("div");
                summaryTitle.className = "giu-attendance-section-title";
                summaryTitle.style.margin = "0";
                summaryTitle.textContent = "Attendance Summary";

                const summaryToggleHint = document.createElement("div");
                summaryToggleHint.className = "giu-summary-toggle-hint";
                summaryToggleHint.textContent = "▾ Expand all";
                summaryToggleHint.title = "Show or hide all details";

                summaryHeader.appendChild(summaryTitle);
                summaryHeader.appendChild(summaryToggleHint);
                panel.appendChild(summaryHeader);

                const grid = document.createElement("div");
                grid.className = "giu-summary-grid";

                appendPeriodSummaryCards(grid, periods, selectedDayOffFullName, renderState);
                attachSummaryToggleHandlers(grid, summaryTitle, summaryToggleHint);

                panel.appendChild(grid);
                return panel;
            }

            // Build the report-page day-off banner, or null if none is due.
            // Mirrors the Home note but with full controls (Change / Undo / ×).
            // `autoResult` is the return of maybeAutoFillDayOff for this render.
            function buildDayOffNoticeForReport(autoResult, onRerender) {
                const state = getDayOffAutoState();
                const notice = document.createElement("div");

                if (autoResult && autoResult.status === "warn") {
                    notice.className = "giu-dayoff-notice warn";
                    notice.innerHTML = `<span class="ico">&#9888;</span>
                        <span class="body">Set your weekly <strong>day off</strong> — attendance is being miscalculated until you do.
                            <span class="sub">Couldn't auto-detect it from your records.</span></span>
                        <span class="acts"><button type="button" class="gius-btn dn-primary dn-set">Set day off</button></span>`;
                    notice.querySelector(".dn-set").addEventListener("click", function () {
                        expandConfigAndScrollToDayOff();
                    });
                    return notice;
                }

                if (state && state.status === "applied" && !state.acknowledged) {
                    notice.className = "giu-dayoff-notice applied";
                    const full = getSelectedDayOffFullName(state.code) || state.code;
                    const occ = state.occ || 0;
                    notice.innerHTML = `<span class="ico">&#10003;</span>
                        <span class="body">Day off set to <strong>${escapeHtmlAttr(full)}</strong> — detected from your attendance.
                            <span class="sub">${escapeHtmlAttr(full)} has the most absences in your records — ${occ} with no check-in.</span></span>
                        <span class="acts">
                            <button type="button" class="gius-btn dn-primary dn-change">Change</button>
                            <button type="button" class="gius-btn dn-ghost dn-undo">Undo</button>
                        </span>
                        <button type="button" class="dn-x" title="Dismiss">&times;</button>`;
                    notice.querySelector(".dn-change").addEventListener("click", function () {
                        expandConfigAndScrollToDayOff();
                    });
                    notice.querySelector(".dn-undo").addEventListener("click", function () {
                        localStorage.removeItem(STORAGE_KEYS.selectedDay);
                        setDayOffAutoState({ status: "undone" });
                        if (typeof onRerender === "function") onRerender();
                    });
                    notice.querySelector(".dn-x").addEventListener("click", function () {
                        setDayOffAutoState(Object.assign({}, getDayOffAutoState(), { acknowledged: true }));
                        notice.remove();
                    });
                    return notice;
                }

                return null;
            }

            // Expand the config panel (reusing the existing onboarding helper, which knows the
            // real .giu-collapsible-header selector) and bring the Day Off selector into view.
            function expandConfigAndScrollToDayOff() {
                expandSettingsPanelForGuide();
                const sel = document.getElementById("giu-day-select");
                if (sel) sel.scrollIntoView({ behavior: "smooth", block: "center" });
            }

            // Minimal attribute-safe escaper for day names (a-z only in practice).
            function escapeHtmlAttr(s) {
                return String(s).replace(/[&<>"']/g, function (c) {
                    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
                });
            }

            function renderEnhancedUI() {
                if (!isTargetReportPage()) return;
                applyMonthlyAnnualLeaveAccrual();
                pruneOldRecords();

                const reportTable = document.getElementById("MainContent_DG_SwiftReport");
                if (!reportTable) return;

                injectStyles();

                const selectedDayCode = getSelectedDayOffCode();
                const selectedDayOffFullName = getSelectedDayOffFullName(selectedDayCode);

                const existing = document.getElementById("giu-attendance-container");
                const renderState = captureRenderState(existing);
                if (existing) existing.remove();

                const container = document.createElement("div");
                container.id = "giu-attendance-container";
                container.className = "giu-attendance-wrap";

                const periods = groupRowsByPayrollPeriod(getAttendanceRows());

                const dayOffAuto = maybeAutoFillDayOff(periods);

                // Day-off dropdown changes are staged; only "Apply from" persists schedule changes.
                const noopDayChange = function () {};
                const configPanel = createConfigPanel(
                    selectedDayCode,
                    selectedDayOffFullName,
                    periods,
                    noopDayChange,
                    renderState.configExpanded
                );

                if (periods.length > 0) {
                    container.appendChild(createSummaryPanel(periods, selectedDayOffFullName, renderState));
                } else {
                    container.appendChild(createDebugBox(
                        "Attendance summary could not be generated because valid Day/Duration rows were not detected from the report table."
                    ));
                }

                container.appendChild(configPanel);

                const dayOffNotice = buildDayOffNoticeForReport(dayOffAuto, renderEnhancedUI);
                if (dayOffNotice) container.insertBefore(dayOffNotice, container.firstChild);

                reportTable.parentNode.insertBefore(container, reportTable);
                window.scrollTo({ top: renderState.scrollY, behavior: "auto" });

                // Run first-time guide after UI is in the DOM so step selectors can resolve.
                maybeStartOnboardingGuide();
            }

            function computeCurrentMonthSummary(rows, todayYmd) {
                const periods = groupRowsByPayrollPeriod(rows || []);
                if (!periods.length) return { empty: true };
                const auto = maybeAutoFillDayOff(periods);
                const dayOffWarn = !!(auto && auto.status === "warn");
                // Pick the period containing TODAY, not the latest period with data:
                // the gate report lags ~a day, so right after a period flip (the 11th)
                // the newest rows still belong to the previous payroll month and the
                // widget would show last month's absences.
                const todayKey = getPayrollPeriodKey(todayYmd || getTodayLocalYMD());
                const current = periods.find(function (p) { return p.key === todayKey; });
                if (current) {
                    return { label: current.label, dayOffWarn: dayOffWarn, stats: buildPeriodStats(current.rows, current.start, current.end) };
                }
                const bounds = getPayrollPeriodBounds(todayKey);
                return {
                    label: getPayrollPeriodLabel(todayKey),
                    dayOffWarn: dayOffWarn,
                    stats: buildPeriodStats([], bounds.start, bounds.end),
                };
            }

            let homeLastRows = [];

            function loadHomeCache() {
                try {
                    const raw = JSON.parse(localStorage.getItem(HOME_CACHE_KEY));
                    if (!raw || !raw.summary) return null;
                    return raw;
                } catch { return null; }
            }
            function saveHomeCache(summary) {
                try {
                    localStorage.setItem(HOME_CACHE_KEY, JSON.stringify({ summary: summary, fetchedAt: Date.now() }));
                } catch { /* quota */ }
            }

            function fetchReportViaIframe(timeoutMs) {
                const limit = timeoutMs || HOME_IFRAME_TIMEOUT_MS;
                return new Promise(function (resolve, reject) {
                    const iframe = document.createElement("iframe");
                    iframe.setAttribute("data-gius-att", "1");
                    iframe.style.cssText = "position:absolute;left:-9999px;top:-9999px;width:0;height:0;border:0;";
                    iframe.src = REPORT_DATA_URL;

                    let done = false;
                    const started = Date.now();
                    const cleanup = function () { try { iframe.remove(); } catch {} };
                    const finish = function (fn, arg) { if (done) return; done = true; clearInterval(poll); cleanup(); fn(arg); };

                    const poll = setInterval(function () {
                        if (Date.now() - started > limit) { finish(reject, new Error("home-iframe-timeout")); return; }
                        let doc;
                        try { doc = iframe.contentDocument; } catch { return; }
                        if (!doc) return;
                        const table = doc.getElementById("MainContent_DG_SwiftReport");
                        if (!table) return;
                        const rows = getAttendanceRows(doc);
                        if (!rows.length) return;
                        finish(resolve, rows);
                    }, 250);

                    iframe.addEventListener("error", function () { finish(reject, new Error("home-iframe-error")); });
                    document.body.appendChild(iframe);
                });
            }

            function homeMountPoint() {
                const target = document.getElementById("MainContent_div_grid");
                if (target) return { mode: "after", node: target };
                const fb = document.querySelector(".page-content") ||
                           document.querySelector("[id*=MainContent]") || document.body;
                return { mode: "prepend", node: fb };
            }

            function homeEnsureHost() {
                let host = document.getElementById("gius-att-widget");
                if (host) return host;
                host = document.createElement("div");
                host.id = "gius-att-widget";
                host.className = "gius-att-widget";
                const mp = homeMountPoint();
                if (mp.mode === "after") mp.node.insertAdjacentElement("afterend", host);
                else mp.node.prepend(host);
                return host;
            }

            function homeEsc(s) {
                return String(s).replace(/[&<>"]/g, function (c) {
                    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
                });
            }

            function homeFmtDate(ymd) {
                const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(ymd));
                if (!m) return homeEsc(ymd);
                const d = new Date(+m[1], +m[2] - 1, +m[3]);
                return d.toLocaleString("en-GB", { weekday: "short", day: "numeric", month: "short" });
            }

            function homeBalanceText(stats) {
                const balance = String((stats && stats.balanceHM) || "0:00:00");
                if (/^0+:00(?::00)?$/.test(balance)) return "On track";
                return balance + (stats && stats.isPositiveOrZero ? " Extra" : " Missing");
            }

            function homeRenderFromRows(rows) {
                homeLastRows = Array.isArray(rows) ? rows : [];
                const summary = computeCurrentMonthSummary(homeLastRows);
                saveHomeCache(summary);
                renderHomeWidget(summary);
            }

            function homeRefreshAfterQuickAction() {
                if (homeLastRows.length) {
                    homeRenderFromRows(homeLastRows);
                    return;
                }

                fetchReportViaIframe().then(homeRenderFromRows).catch(function () {
                    const cache = loadHomeCache();
                    if (cache && cache.summary) {
                        renderHomeWidget(cache.summary, { stale: true });
                    } else {
                        homeShowError(homeEnsureHost());
                    }
                });
            }

            function homeAddAbsentHolidayEntry(date, category) {
                const isAnnual = category === "annual";
                const result = saveAbsentHolidayEntry(
                    date,
                    isAnnual ? "annual" : "holiday",
                    isAnnual ? "Add annual leave from home absent quick action" : "Add holiday from home absent quick action",
                    {
                        invalid: isAnnual ? "Invalid date. Could not create annual leave." : "Invalid date. Could not create holiday.",
                        exists: isAnnual ? "This date is already saved as annual leave." : "This date is already saved as a holiday."
                    }
                );
                if (!result.ok) {
                    alert(result.message);
                    return;
                }
                homeRefreshAfterQuickAction();
            }

            function homeAddAbsentCompensationEntry(date) {
                const periods = groupRowsByPayrollPeriod(homeLastRows);
                const selectedDayOffFullName = getSelectedDayOffFullName(getSelectedDayOffCode());
                const result = saveAbsentCompensationEntry(
                    date,
                    periods,
                    selectedDayOffFullName,
                    "From home absent day quick action",
                    "Add compensation from home absent quick action"
                );
                if (!result.ok) {
                    alert(result.message);
                    return;
                }
                homeRefreshAfterQuickAction();
            }

            function homeAttachAbsentActions(host) {
                Array.from(host.querySelectorAll("[data-gius-home-absent-action]")).forEach(function (button) {
                    button.addEventListener("click", function (event) {
                        event.preventDefault();
                        event.stopPropagation();

                        const action = button.getAttribute("data-gius-home-absent-action") || "";
                        const date = button.getAttribute("data-date") || "";
                        if (action === "holiday") {
                            homeAddAbsentHolidayEntry(date, "holiday");
                        } else if (action === "annual") {
                            homeAddAbsentHolidayEntry(date, "annual");
                        } else if (action === "compensation") {
                            homeAddAbsentCompensationEntry(date);
                        }
                    });
                });
            }

            function homeInjectStyles() {
                if (document.getElementById("gius-att-style")) return;
                const css = `
                    .gius-att-widget{font-family:inherit;display:block;width:100%;box-sizing:border-box;
                        margin:28px 0;border-radius:12px;padding:16px 18px;background:#fff;color:#1e1e2e;
                        box-shadow:0 2px 10px rgba(0,0,0,.12);}
                    .gius-att-widget *{box-sizing:border-box;}
                    .gius-att-head{font-weight:700;font-size:16px;margin-bottom:12px;}
                    .gius-att-stale{color:#b8860b;font-weight:600;font-size:12px;}
                    .gius-att-card{background:#f8f9fa;border:1px solid #e9ecef;border-left:4px solid #ffc107;
                        border-radius:12px;padding:14px;margin-bottom:12px;}
                    .gius-att-status{display:flex;align-items:center;gap:8px;flex-wrap:wrap;
                        font-size:17px;font-weight:700;margin-bottom:8px;}
                    .gius-att-balance{display:inline-block;font-size:13px;font-weight:700;padding:3px 10px;
                        border-radius:999px;}
                    .gius-att-bal-green{background:#dcfce7;color:#166534;}
                    .gius-att-bal-amber{background:#fff8e1;color:#8a6500;}
                    .gius-att-bal-red{background:#fee2e2;color:#991b1b;}
                    .gius-att-bar{height:8px;border-radius:6px;background:#e9ecef;overflow:hidden;margin:10px 0 8px;}
                    .gius-att-bar-fill{height:100%;border-radius:6px;}
                    .gius-att-bar-ghost{background:#dc2626;} .gius-att-bar-close{background:#f59e0b;} .gius-att-bar-ontime{background:#16a34a;}
                    .gius-att-bar-workaholic{background:#ea580c;} .gius-att-bar-grass{background:#65a30d;} .gius-att-bar-slave{background:#a21caf;}
                    .gius-att-tierwrap{margin-top:10px;}
                    .gius-att-quip{margin-top:6px;font-size:12.5px;font-style:italic;color:#6b7280;}
                    html.gius-dark .gius-att-quip{color:#9399b2;}
                    .gius-att-tier{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:800;padding:3px 9px;border-radius:999px;}
                    .gius-att-tier-btn{cursor:pointer;border:none;font-family:inherit;transition:filter .12s,transform .12s;}
                    .gius-att-tier-btn:hover{filter:brightness(.96);transform:translateY(-1px);}
                    .gius-att-tier-btn::after{content:"i";font-size:9px;font-weight:900;line-height:1;width:13px;height:13px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;border:1.5px solid currentColor;opacity:.7;}
                    .gius-att-tier-seen::after{display:none;}
                    .gius-att-modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;z-index:2147483600;background:rgba(0,0,0,.45);padding:20px;opacity:0;transition:opacity .15s;}
                    .gius-att-modal.open{display:flex;opacity:1;}
                    .gius-att-sheet{width:100%;max-width:420px;max-height:85vh;overflow:auto;background:#fff;color:#1e1e2e;border-radius:14px;padding:18px;box-shadow:0 18px 50px rgba(0,0,0,.35);}
                    .gius-att-sheet-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;}
                    .gius-att-sheet-title{font-weight:800;font-size:16px;}
                    .gius-att-sheet-sub{font-size:12.5px;color:#6b7280;margin-bottom:14px;}
                    .gius-att-x{border:none;background:transparent;font-size:20px;line-height:1;cursor:pointer;color:inherit;padding:4px;}
                    .gius-att-trow{display:flex;align-items:flex-start;gap:11px;padding:11px;border-radius:10px;margin-bottom:8px;border:1px solid #eef0f3;}
                    .gius-att-trow.cur{background:#f6f8fa;border-color:#d0d7de;}
                    .gius-att-dot{flex:0 0 auto;width:14px;height:14px;border-radius:50%;margin-top:3px;}
                    .gius-att-dot-ghost{background:#dc2626;} .gius-att-dot-close{background:#f59e0b;} .gius-att-dot-ontime{background:#16a34a;}
                    .gius-att-dot-workaholic{background:#ea580c;} .gius-att-dot-grass{background:#65a30d;} .gius-att-dot-slave{background:#a21caf;}
                    .gius-att-trow-main{flex:1 1 auto;min-width:0;}
                    .gius-att-trow-name{font-weight:800;font-size:13.5px;display:flex;align-items:center;gap:7px;flex-wrap:wrap;}
                    .gius-att-trow-cur{font-size:10.5px;font-weight:800;letter-spacing:.4px;padding:1px 6px;border-radius:999px;background:#1e1e2e;color:#fff;}
                    .gius-att-trow-cond{font-size:12px;color:#6b7280;margin-top:2px;}
                    html.gius-dark .gius-att-sheet{background:#1e1e2e;color:#cdd6f4;}
                    html.gius-dark .gius-att-sheet-sub,html.gius-dark .gius-att-trow-cond{color:#9399b2;}
                    html.gius-dark .gius-att-trow{border-color:#2a2a3a;}
                    html.gius-dark .gius-att-trow.cur{background:#181825;border-color:#3a3a4d;}
                    html.gius-dark .gius-att-trow-cur{background:#cdd6f4;color:#1e1e2e;}
                    .gius-att-tier-ghost{background:#fee2e2;color:#991b1b;} .gius-att-tier-close{background:#fff3da;color:#92600a;}
                    .gius-att-tier-ontime{background:#dcfce7;color:#166534;} .gius-att-tier-workaholic{background:#ffedd5;color:#9a3412;}
                    .gius-att-tier-grass{background:#ecfccb;color:#3f6212;} .gius-att-tier-slave{background:#fae8ff;color:#86198f;}
                    html.gius-dark .gius-att-tier-ghost{background:#3a1414;color:#f38ba8;} html.gius-dark .gius-att-tier-close{background:#3a2c10;color:#f9d77e;}
                    html.gius-dark .gius-att-tier-ontime{background:#14351f;color:#a6e3a1;} html.gius-dark .gius-att-tier-workaholic{background:#3a1f10;color:#fdba74;}
                    html.gius-dark .gius-att-tier-grass{background:#1f2d0a;color:#bef264;} html.gius-dark .gius-att-tier-slave{background:#2e1230;color:#f0abfc;}
                    .gius-att-meta{font-size:13px;color:#272c33;}
                    .gius-att-toggle{margin-top:6px;font-size:13px;font-weight:700;background:transparent;border:none;
                        color:#272c33;cursor:pointer;padding:4px 0;}
                    .gius-att-toggle::before{content:"\\25B8";display:inline-block;margin-right:6px;transition:transform .3s ease-out;}
                    .gius-att-toggle-open::before{transform:rotate(90deg);}
                    .gius-att-expand{display:grid;grid-template-rows:0fr;transition:grid-template-rows .3s ease-out;}
                    .gius-att-expand.gius-att-expanded{grid-template-rows:1fr;}
                    .gius-att-expand-inner{overflow:hidden;}
                    .gius-att-absent-list{margin-top:6px;display:flex;flex-direction:column;gap:6px;font-size:13px;}
                    .gius-att-absent-row{background:#f5f5fa;border-radius:6px;padding:6px 8px;
                        display:flex;align-items:center;justify-content:space-between;gap:8px;}
                    .gius-att-absent-date{font-weight:700;}
                    .gius-att-actions{display:inline-flex;align-items:center;justify-content:flex-end;
                        flex-wrap:wrap;gap:5px;}
                    .gius-att-action{font:inherit;font-size:12px;font-weight:700;line-height:1;
                        border:1px solid #d7dce2;background:#fff;color:#272c33;border-radius:6px;
                        padding:5px 7px;cursor:pointer;}
                    .gius-att-action:hover{background:#fff8e1;border-color:#f0c247;}
                    .gius-att-link{display:inline-block;margin-top:10px;font-size:13px;font-weight:600;color:#272c33;}
                    .gius-att-empty{font-size:13px;opacity:.85;}
                    html.gius-dark .gius-att-widget{background:#1e1e2e;color:#cdd6f4;box-shadow:0 2px 10px rgba(0,0,0,.45);}
                    html.gius-dark .gius-att-card{background:#181825;border-color:#313244;border-left-color:#f9e2af;}
                    html.gius-dark .gius-att-bar{background:#313244;}
                    html.gius-dark .gius-att-meta,html.gius-dark .gius-att-toggle,html.gius-dark .gius-att-link{color:#cdd6f4;}
                    html.gius-dark .gius-att-absent-row{background:#11111b;}
                    html.gius-dark .gius-att-action{background:#181825;border-color:#313244;color:#cdd6f4;}
                    html.gius-dark .gius-att-action:hover{background:#2a2410;border-color:#f9e2af;}
                    html.gius-dark .gius-att-bal-green{background:#14351f;color:#a6e3a1;}
                    html.gius-dark .gius-att-bal-amber{background:#2a2410;color:#f9e2af;}
                    html.gius-dark .gius-att-bal-red{background:#3a1414;color:#f38ba8;}
                    .gius-att-dayoff{display:flex;align-items:center;gap:9px;flex-wrap:wrap;
                        border-radius:8px;padding:9px 12px;margin:0 0 12px;font-size:13.5px;
                        line-height:1.45;border-left:3px solid;}
                    .gius-att-dayoff .ico{font-size:16px;flex:0 0 auto;}
                    .gius-att-dayoff .txt{flex:1 1 auto;min-width:140px;}
                    .gius-att-dayoff .txt strong{font-weight:800;}
                    .gius-att-dayoff-btn{font:inherit;font-size:12.5px;font-weight:700;line-height:1;
                        cursor:pointer;border-radius:6px;padding:7px 11px;border:1px solid transparent;
                        flex:0 0 auto;}
                    .gius-att-dayoff.applied{background:#ecfdf5;border-left-color:#16a34a;color:#065f46;}
                    .gius-att-dayoff.applied .gius-att-dayoff-btn{background:#16a34a;color:#fff;}
                    .gius-att-dayoff.warn{background:#fff8e1;border-left-color:#f59e0b;color:#8a6500;}
                    .gius-att-dayoff.warn .gius-att-dayoff-btn{background:#b45309;color:#fff;}
                    html.gius-dark .gius-att-dayoff.applied{background:#14351f;border-left-color:#a6e3a1;color:#a6e3a1;}
                    html.gius-dark .gius-att-dayoff.applied .gius-att-dayoff-btn{background:#a6e3a1;color:#11271a;}
                    html.gius-dark .gius-att-dayoff.warn{background:#2a2410;border-left-color:#f9e2af;color:#f9e2af;}
                    html.gius-dark .gius-att-dayoff.warn .gius-att-dayoff-btn{background:#f9e2af;color:#2a2410;}
                    .gius-att-card.gius-att-muted{opacity:.45;filter:grayscale(.6);}`;
                const style = document.createElement("style");
                style.id = "gius-att-style";
                style.textContent = css;
                document.head.appendChild(style);
            }

            // Build the day-off note element for the Home widget, or null if none is due.
            // applied (not acknowledged) → green note + "Adjust in report"; warn → amber note
            // + "Open report". Both buttons carry gius-btn so GIU Dark Mode leaves them styled.
            function buildDayOffNoteForHome(summary) {
                const state = getDayOffAutoState();
                let cls = "";
                let html = "";
                // Warn purely from LIVE config — not the cached summary.dayOffWarn, which is
                // baked at compute time and wrong in both directions (lingers after a set,
                // missing after a removal). Unconfigured ⟹ numbers wrong ⟹ warn.
                if (!isDayOffConfigured()) {
                    cls = "warn";
                    html = `<span class="ico">&#9888;</span>
                        <span class="txt">Set your weekly day off to see correct attendance.</span>
                        <button type="button" class="gius-att-dayoff-btn gius-btn">Open report &rarr;</button>`;
                } else if (state && state.status === "applied" && !state.acknowledged) {
                    cls = "applied";
                    const full = getSelectedDayOffFullName(state.code) || state.code;
                    html = `<span class="ico">&#10003;</span>
                        <span class="txt">Day off auto-set to <strong>${homeEsc(full)}</strong>.</span>
                        <button type="button" class="gius-att-dayoff-btn gius-btn">Adjust in report &rarr;</button>`;
                } else {
                    return null;
                }
                const el = document.createElement("div");
                el.className = "gius-att-dayoff " + cls;
                el.innerHTML = html;
                el.querySelector(".gius-att-dayoff-btn").addEventListener("click", function () {
                    window.location.href = REPORT_DATA_URL;
                });
                return el;
            }

            function renderHomeWidget(summary, opts) {
                opts = opts || {};
                homeInjectStyles();
                const host = homeEnsureHost();

                if (!summary || summary.empty) {
                    host.innerHTML = `<div class="gius-att-head">Attendance</div>
                        <div class="gius-att-empty">No attendance records yet. <a class="gius-att-link" href="${REPORT_DATA_URL}">View full report</a></div>`;
                    return;
                }

                const st = summary.stats;
                // Uncapped % for the label; bar width still clamps to 100% so it never overflows.
                const pctRaw = Math.max(0, typeof st.progressPercentRaw === "number"
                    ? st.progressPercentRaw : st.progressPercent);
                const barWidth = Math.min(100, pctRaw);
                // Below 100%: amber/red by gap. At/above 100%: escalate by EXTRA hours
                // banked (actual − required), not by %. green → teal(+2h) → blue(+5h) → purple(+10h).
                const extraSeconds = (st.actualSeconds || 0) - (st.requiredSeconds || 0);
                let tier;
                if (pctRaw < 100) tier = st.progressColor === "amber" ? "close" : "ghost";
                else if (extraSeconds < 2 * 3600) tier = "ontime";
                else if (extraSeconds < 5 * 3600) tier = "workaholic";
                else if (extraSeconds < 10 * 3600) tier = "grass";
                else tier = "slave";
                const TIER_NAMES = {
                    ghost: "👻 Ghosting GIU", close: "😅 Cutting It Close",
                    ontime: "✅ Right On Time", workaholic: "💪 Workaholic",
                    grass: "🌱 Touch Grass", slave: "⛏️ Officially a Slave"
                };
                const TIER_ORDER = ["ghost", "close", "ontime", "workaholic", "grass", "slave"];
                const TIER_CONDS = {
                    ghost: "Behind by more than 3 hours",
                    close: "Behind by up to 3 hours",
                    ontime: "100% covered, under +2h extra",
                    workaholic: "+2 to +5 hours extra",
                    grass: "+5 to +10 hours extra",
                    slave: "+10 hours extra or more"
                };
                const TIER_QUIPS = {
                    ghost: [
                        "The gate scanner forgot what you look like.",
                        "Attendance: purely theoretical.",
                        "Clocking in is apparently optional for you.",
                        "Payroll wants a word. Several, actually."
                    ],
                    close: [
                        "One decent day and you're square.",
                        "Almost balanced — finish the job.",
                        "Just shy of safe. Keep going.",
                        "A short shift from peace of mind."
                    ],
                    ontime: [
                        "Balanced. Zen master of the clock-in.",
                        "Exactly enough. Chef's kiss attendance.",
                        "Right on the money — no more, no less."
                    ],
                    workaholic: [
                        "Banking hours like it's a personality.",
                        "Someone tell you weekends exist?",
                        "The overtime is overtiming."
                    ],
                    grass: [
                        "You've earned a sunset. Go look at one.",
                        "Touch grass — the real kind, outdoors.",
                        "Hours: surplus. Vitamin D: deficit."
                    ],
                    slave: [
                        "GIU should be paying rent in your life.",
                        "At this point, bring a sleeping bag.",
                        "Officially married to the gate scanner."
                    ]
                };
                const barClass = "gius-att-bar-" + tier;
                const tierClass = "gius-att-tier-" + tier;
                const tierName = TIER_NAMES[tier];
                // Hide the "i" hint once the user has opened the tier popup at least once.
                let tierHintSeen = false;
                try { tierHintSeen = localStorage.getItem("giuAttTierHintSeen") === "1"; } catch (e) {}
                // One quip per day, pseudo-random but STABLE all day (not per reload):
                // hash today's date (+ tier) → index. Same date ⟹ same quip; tiers differ.
                const quipList = TIER_QUIPS[tier];
                const quipKey = String(getTodayLocalYMD()) + "|" + tier;
                let quipHash = 0;
                for (let i = 0; i < quipKey.length; i++) {
                    quipHash = (Math.imul(quipHash, 31) + quipKey.charCodeAt(i)) | 0;
                }
                const tierQuip = quipList[Math.abs(quipHash) % quipList.length];

                const absentBlock = st.absentDays > 0 ? `
                    <button type="button" id="gius-att-toggle-absent" class="gius-att-toggle gius-btn">Absent days (${st.absentDays})</button>
                    <div id="gius-att-absent" class="gius-att-expand">
                        <div class="gius-att-expand-inner">
                            <div class="gius-att-absent-list">
                                ${(st.absentDayDetails || []).map(function (d) {
                                    const date = homeEsc(d);
                                    return `<div class="gius-att-absent-row">
                                        <span class="gius-att-absent-date">${homeFmtDate(d)}</span>
                                        <span class="gius-att-actions">
                                            <button type="button" class="gius-att-action gius-btn" data-date="${date}" data-gius-home-absent-action="holiday">Holiday</button>
                                            <button type="button" class="gius-att-action gius-btn" data-date="${date}" data-gius-home-absent-action="annual">Annual</button>
                                            <button type="button" class="gius-att-action gius-btn" data-date="${date}" data-gius-home-absent-action="compensation">Comp</button>
                                        </span>
                                    </div>`;
                                }).join("")}
                            </div>
                        </div>
                    </div>` : "";

                host.innerHTML = `
                    <div class="gius-att-head">This Payroll Month${opts.stale ? ' · <span class="gius-att-stale">offline</span>' : ""}</div>
                    <div class="gius-att-card">
                        <div class="gius-att-status">Current balance
                            <span class="gius-att-balance ${tierClass}">${homeEsc(homeBalanceText(st))}</span></div>
                        <div class="gius-att-bar"><div class="gius-att-bar-fill ${barClass}" style="width:${barWidth}%"></div></div>
                        <div class="gius-att-meta">${pctRaw}% covered &middot; Present ${st.presentDays} &middot; Absent ${st.absentDays} &middot; ${homeEsc(summary.label || "")}</div>
                        <div class="gius-att-tierwrap"><button type="button" class="gius-att-tier gius-att-tier-btn ${tierClass} gius-btn${tierHintSeen ? " gius-att-tier-seen" : ""}" id="gius-att-tier-btn" title="See all tiers">${tierName}</button></div>
                        <div class="gius-att-quip">${homeEsc(tierQuip)}</div>
                    </div>
                    ${absentBlock}
                    <a class="gius-att-link" href="${REPORT_DATA_URL}">View full report →</a>`;

                const dayOffNote = buildDayOffNoteForHome(summary);
                if (dayOffNote) {
                    const head = host.querySelector(".gius-att-head");
                    if (head && head.nextSibling) head.parentNode.insertBefore(dayOffNote, head.nextSibling);
                    else host.insertBefore(dayOffNote, host.firstChild);
                }
                // Grey the (wrong) numbers whenever the day off is unset — live check, so the
                // greying tracks set/remove immediately regardless of the cached summary flag.
                if (!isDayOffConfigured()) {
                    const card = host.querySelector(".gius-att-card");
                    if (card) card.classList.add("gius-att-muted");
                }

                const toggle = host.querySelector("#gius-att-toggle-absent");
                if (toggle) {
                    toggle.addEventListener("click", function () {
                        const el = host.querySelector("#gius-att-absent");
                        const open = el.classList.toggle("gius-att-expanded");
                        toggle.classList.toggle("gius-att-toggle-open", open);
                    });
                }
                const tierBtn = host.querySelector("#gius-att-tier-btn");
                if (tierBtn) {
                    tierBtn.addEventListener("click", function () {
                        try { localStorage.setItem("giuAttTierHintSeen", "1"); } catch (e) {}
                        tierBtn.classList.add("gius-att-tier-seen");
                        homeOpenTierModal(tier, TIER_NAMES, TIER_CONDS, TIER_ORDER);
                    });
                }
                homeAttachAbsentActions(host);
            }

            // Tier legend popup: lists every tier with its colour + condition, current one flagged.
            function homeOpenTierModal(currentTier, names, conds, order) {
                const existing = document.getElementById("gius-att-modal");
                if (existing) existing.remove();
                const modal = document.createElement("div");
                modal.id = "gius-att-modal";
                modal.className = "gius-att-modal";
                const rows = order.map(function (t) {
                    const cur = t === currentTier;
                    return `<div class="gius-att-trow${cur ? " cur" : ""}">
                        <span class="gius-att-dot gius-att-dot-${t}"></span>
                        <div class="gius-att-trow-main">
                            <div class="gius-att-trow-name"><span class="gius-att-tier gius-att-tier-${t}">${names[t]}</span>${cur ? '<span class="gius-att-trow-cur">YOU</span>' : ""}</div>
                            <div class="gius-att-trow-cond">${homeEsc(conds[t])}</div>
                        </div></div>`;
                }).join("");
                modal.innerHTML = `<div class="gius-att-sheet" role="dialog" aria-modal="true">
                    <div class="gius-att-sheet-head">
                        <div class="gius-att-sheet-title">Attendance tiers</div>
                        <button type="button" class="gius-att-x gius-btn" aria-label="Close">&times;</button>
                    </div>
                    ${rows}</div>`;
                document.body.appendChild(modal);
                requestAnimationFrame(function () { modal.classList.add("open"); });
                const onKey = function (e) { if (e.key === "Escape") close(); };
                function close() {
                    modal.classList.remove("open");
                    document.removeEventListener("keydown", onKey);
                    setTimeout(function () { try { modal.remove(); } catch (e) {} }, 160);
                }
                modal.querySelector(".gius-att-x").addEventListener("click", close);
                modal.addEventListener("click", function (e) { if (e.target === modal) close(); });
                document.addEventListener("keydown", onKey);
            }

            function homeShowError(host) {
                host.innerHTML = `<div class="gius-att-head">Attendance</div>
                    <div class="gius-att-empty">Couldn't load attendance. <button type="button" id="gius-att-retry" class="gius-att-toggle gius-btn">Retry</button></div>`;
                const r = host.querySelector("#gius-att-retry");
                if (r) r.addEventListener("click", bootHome);
            }

            function bootHome() {
                if (!isHomePage()) return;
                homeInjectStyles();

                const cache = loadHomeCache();
                const fresh = !!(cache && cache.fetchedAt &&
                    (Date.now() - cache.fetchedAt) < HOME_REFRESH_TTL_MS);
                if (cache) renderHomeWidget(cache.summary, { stale: !fresh });
                if (fresh) return; // recent enough — skip the report iframe entirely

                const refresh = function () {
                    fetchReportViaIframe().then(homeRenderFromRows).catch(function () {
                        if (cache) return; // keep the stale render
                        homeShowError(homeEnsureHost());
                    });
                };
                // With a cached render on screen, let Home finish loading before
                // spawning the hidden report iframe (it executes the full report).
                if (cache) setTimeout(refresh, HOME_REFRESH_DELAY_MS);
                else refresh();
            }

            window.__giuAttHome = {
                isHomePage,
                getAttendanceRows,
                computeCurrentMonthSummary,
                fetchReportViaIframe,
                loadHomeCache,
                saveHomeCache,
                renderHomeWidget,
                setHomeRowsForTest: function (rows) { homeLastRows = Array.isArray(rows) ? rows : []; },
                isDayOffConfigured,
                getDayOffAutoState,
                setDayOffAutoState,
                groupRowsByPayrollPeriod,
                detectDayOffCode,
                maybeAutoFillDayOff,
                renderEnhancedUI,
                getStoredAnnualLeaveBalance,
                setStoredAnnualLeaveBalance,
                getStoredAnnualLeaveAccrualRate,
                setStoredAnnualLeaveAccrualRate,
                applyMonthlyAnnualLeaveAccrual,
            };

            try {
                // window.__giuAttDisableAutoRun lets tests inject the script and drive
                // functions manually without the page-detection auto-run firing.
                if (!window.__giuAttDisableAutoRun) {
                    renderEnhancedUI();
                    bootHome();
                }
            } catch (err) {
                console.log("Enhanced attendance script error:", err.message);
            }
        })();
