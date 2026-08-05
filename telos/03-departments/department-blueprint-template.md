| Document | Department Blueprint Template |
|---|---|
| TELOS section | [03 — Departments](README.md) |
| Version | 1.0 |
| Status | Locked |
| Owner | Operations |
| Last updated | 2026-08-05 |

---

# Department Blueprint Template

This is the standard template every department document within TELOS must follow. Copy this file, rename it for the relevant department, and populate each section.

The template defines the complete architecture of a department: what it exists to do, what it owns, how it works, what it produces, and how it performs.

---

## Terminology

Before using this template, understand the distinction between these levels:

| Level | Definition | Example |
|---|---|---|
| **Key Responsibility** | A permanent category of work that must be done, created, managed, or maintained | Copywriting |
| **Sub-Task** | A recurring category of work beneath a key responsibility | Website Copy, Sales Page Copy, Ad Copy |
| **Execution Task** | A specific temporary action | Draft the sales page for the October launch |

Execution tasks belong in the project-management system, not in TELOS. TELOS documents the architecture — the permanent structure and the recurring categories. Individual actions flow from that structure.

---

## Template

---

# [Department Name]

| Document | [Department Name] Blueprint |
|---|---|
| TELOS section | [03 — Departments](README.md) |
| Version | 1.0 |
| Status | Draft |
| Owner | [Owner name or role] |
| Last updated | [YYYY-MM-DD] |

---

## 1. Intent

Why this department exists. The single sentence that justifies its place in the business.

---

## 2. Circle of Responsibility

The complete boundary of what this department owns and is accountable for. List every major area of ownership clearly. If something is not listed here, this department does not own it.

---

## 3. Key Responsibilities

The permanent categories of work that must be done, created, maintained, or managed by this department. These do not change with individual projects or campaigns.

- [Key Responsibility 1]
- [Key Responsibility 2]
- [Key Responsibility 3]

---

## 4. Sub-Tasks

The recurring categories of work beneath each key responsibility.

**[Key Responsibility 1]**
- [Sub-Task 1.1]
- [Sub-Task 1.2]

**[Key Responsibility 2]**
- [Sub-Task 2.1]
- [Sub-Task 2.2]

---

## 5. Processes

The repeatable methods and procedures used to complete or manage the work. Each process should reference or link to its SOP where one exists.

- [Process Name] — [brief description]
- [Process Name] — [brief description]

---

## 6. Business Assets

Reusable assets owned by the business and managed or produced by this department. These are long-lived and belong to the business, not to an individual project.

Examples: websites, funnels, sales pages, diagnostic tests, course modules, email sequences, brand guidelines, templates, SOPs, videos, presentations.

- [Asset name] — [brief description]
- [Asset name] — [brief description]

---

## 7. Business Objects

Structured entities stored or managed by systems that this department interacts with.

Examples: contacts, opportunities, products, orders, payments, diagnostic results, memberships, sessions, tags.

- [Object name] — [which system owns it] — [what this department does with it]
- [Object name] — [which system owns it] — [what this department does with it]

---

## 8. Events

Important occurrences that this department tracks, reports on, or reacts to. Events are defined canonically in the [Event Dictionary](../07-event-dictionary/README.md).

- [Event name] — [what it means for this department]
- [Event name] — [what it means for this department]

---

## 9. Data

Information created, stored, or updated by this department. Full definitions belong in the [Data Dictionary](../08-data-dictionary/README.md).

- [Field or data point] — [system that owns it] — [how this department uses it]
- [Field or data point] — [system that owns it] — [how this department uses it]

---

## 10. Workflows and Automations

Business logic and system-executed actions that support this department. Full specifications belong in [Section 11 — Automations](../11-automations/README.md).

- [Workflow name] — [brief description of trigger and outcome]
- [Workflow name] — [brief description of trigger and outcome]

---

## 11. Communications

Email, SMS, calls, community messages, or internal communications generated or managed by this department. Full specifications belong in [Section 12 — Communications](../12-communications/README.md).

- [Communication name or type] — [channel] — [trigger or purpose]
- [Communication name or type] — [channel] — [trigger or purpose]

---

## 12. Reporting

Reports and dashboards required by this department to make decisions and assess performance. Full specifications belong in [Section 13 — Reporting](../13-reporting/README.md).

- [Report or dashboard name] — [what it shows] — [cadence]
- [Report or dashboard name] — [what it shows] — [cadence]

---

## 13. SOPs

Documented instructions for repeatable human execution. Each SOP is stored in this department's directory.

- [SOP name] — [link]
- [SOP name] — [link]

---

## 14. Success Measures

Qualitative indicators that the department is healthy and performing well. These are descriptive, not numeric.

- [What good looks like]
- [What good looks like]

---

## 15. KPIs

Quantitative measures used to evaluate the department's performance. Definitions for all metrics belong in the [Data Dictionary](../08-data-dictionary/README.md).

| KPI | Definition | Target | Reporting cadence |
|---|---|---|---|
| [KPI name] | [Definition reference] | [Target or range] | [Weekly / Monthly / etc.] |

---

## 16. Systems

Platforms and tools used or governed by this department.

| System | Role | Owner |
|---|---|---|
| [System name] | [What it does for this department] | [Department or role that owns it] |

---

## 17. Inputs

What this department requires from other departments in order to function.

| Input | Provided by | Description |
|---|---|---|
| [Input name] | [Department] | [What it is and why it is needed] |

---

## 18. Outputs

What this department delivers to customers or other departments.

| Output | Delivered to | Description |
|---|---|---|
| [Output name] | [Customer / Department] | [What it is] |

---

## 19. Internal Customers

Which departments depend on this department's work in order to perform their own function.

- [Department name] — depends on [specific output]
- [Department name] — depends on [specific output]

---

## 20. Risks

What could fail or create harm if this department underperforms, is under-resourced, or produces poor-quality work.

- [Risk description]
- [Risk description]

---

## 21. AI Opportunities

Future opportunities to use AI responsibly to increase leverage, insight, or quality within this department. These are not current commitments — they are documented possibilities for evaluation as the business scales.

- [Opportunity description]
- [Opportunity description]

---

## 22. Implementation States

For each major system, tool, or area of responsibility within this department, document the three implementation states.

| Area | $10M Target State | Lean Launch State | Upgrade Trigger |
|---|---|---|---|
| [Area name] | [What the full-scale implementation looks like] | [What the lean launch version looks like] | [The condition that justifies upgrading] |

---

## Related Documents

- [TELOS Overview](../README.md)
- [Department Structure](../02-organisation/department-structure.md)
- [TELOS Operating Principles](../01-principles/telos-operating-principles.md)
