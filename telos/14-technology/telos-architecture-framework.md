| Document | TELOS Architecture Framework |
|---|---|
| TELOS section | [14 — Technology](README.md) |
| Version | 1.0 |
| Status | Locked |
| Owner | Operations and Technology and AI |
| Last updated | 2026-08-05 |

---

# TELOS Architecture Framework

This document defines the full architectural hierarchy of TELOS: The Elevated Leader Operating System. It establishes the canonical layers of the operating system, defines each layer, and maps the current technology stack that implements it.

The architecture is tool-agnostic. Platforms come and go. The business architecture documented here persists.

---

## The TELOS Hierarchy

Every department in the business is documented through this full hierarchy. Each layer builds on the one above it.

```
Department
└── Intent
└── Circle of Responsibility
└── Key Responsibilities
    └── Sub-Tasks
        └── Processes
└── Business Assets
└── Business Objects
    └── Lifecycles
    └── Events
    └── Data
└── Workflows and Automations
└── Communications
└── Reporting
└── SOPs
└── Technology and Integrations
└── Governance
└── Implementation Roadmap
```

---

## Layer Definitions

### Department

The organisational owner. Every element of TELOS belongs to a department. Departments are defined in [Section 02 — Organisation](../02-organisation/department-structure.md) and blueprinted individually in [Section 03 — Departments](../03-departments/README.md).

---

### Intent

Why the department or system exists. The single sentence that justifies its presence in the business. If the intent cannot be stated clearly, the department or system is not yet sufficiently understood.

---

### Circle of Responsibility

The complete boundary of ownership. Everything inside the circle belongs to this department. Everything outside it belongs elsewhere. Ownership does not overlap. When a boundary is unclear, the department-structure document is the authority.

---

### Key Responsibility

A permanent category of work that must be done, created, managed, or maintained. Key responsibilities do not change with individual projects or campaigns. They describe what the department must always be doing.

Examples: Copywriting, CRM Architecture, Revenue Reconciliation, Coaching Delivery.

---

### Sub-Task

A recurring category of work beneath a key responsibility. Sub-tasks are the standard types of output a key responsibility produces.

Examples beneath Copywriting: Website Copy, Sales Page Copy, Email Copy, Ad Copy.

Sub-tasks are not individual execution tasks. A specific email draft is an execution task and belongs in the project-management system, not in TELOS.

---

### Process

The repeatable method used to complete a sub-task or manage a key responsibility. Processes are described at the category level in TELOS and documented in detail in SOPs.

---

### Business Asset

Reusable intellectual property or customer-facing material owned by the business. Assets are long-lived and belong to the company, not to a project.

Examples: the website, the diagnostic, sales pages, course modules, email sequences, brand guidelines, SOPs, templates, presentations, community spaces.

Business assets are inventoried per department and governed by the department that owns them.

---

### Business Object

A structured entity stored or managed by a system. Business objects are the nouns of the operating system — the things the business acts upon.

Canonical definitions for all business objects live in [Section 05 — Business Objects](../05-business-objects/README.md).

Examples: Contact, Opportunity, Product, Order, Payment, Diagnostic Result, Membership, Session, Tag.

---

### Lifecycle

The states a business object moves through from creation to completion or retirement. Lifecycles are mapped in [Section 06 — Lifecycles](../06-lifecycles/README.md).

Examples: the contact lifecycle (lead → qualified → client → alumni), the offer lifecycle (concept → development → live → retired).

---

### Event

Something that happened. Events may require tracking, reporting, or a system response. Events are defined canonically in the [Event Dictionary](../07-event-dictionary/README.md) before any automation references them.

Examples: `contact.created`, `payment.received`, `diagnostic.submitted`, `session.attended`, `opportunity.won`.

---

### Data

The information stored, created, or updated by a department or system. Canonical field-level definitions live in the [Data Dictionary](../08-data-dictionary/README.md).

Data must serve a decision. Fields, tags, and properties without a clear operational, automation, or reporting purpose are not created.

---

### Workflow

The business logic governing what happens next. A workflow defines the rules: if this event occurs, and these conditions are met, these actions follow. Workflows are documented before being built.

Workflow specifications live in [Section 11 — Automations](../11-automations/README.md).

---

### Automation

System-executed actions that implement a workflow. An automation is the platform-level expression of business logic. Automations are built only after their workflow specification is approved in TELOS.

If the platform changes, the automation is rebuilt. The workflow specification remains.

---

### Communication

Customer-facing or internal messaging generated by a workflow or process. Communications are documented in [Section 12 — Communications](../12-communications/README.md).

This includes email sequences, SMS, community messages, and internal notifications. Each communication has an owner, a trigger, and a defined purpose.

---

### Reporting

The visibility required to make decisions. Reporting is designed to serve specific decisions at the current stage of the business. Reports and dashboards are documented in [Section 13 — Reporting](../13-reporting/README.md).

---

### SOP

Documented instructions for human execution. SOPs describe how a person performs a repeatable task. They sit at the execution layer — below the workflow architecture, within the process structure.

SOPs are stored within the relevant department's directory.

---

### Technology

The tools and infrastructure implementing TELOS. Technology serves the business architecture — it does not define it. The current stack is provisional and documented below.

Full technology documentation lives in [Section 14 — Technology](README.md).

---

### Governance

The standards controlling naming conventions, ownership, change management, testing protocols, permissions, and documentation requirements. Governance is documented in [Section 15 — Governance](../15-governance/README.md).

Governance ensures TELOS remains coherent as the business grows and team members change.

---

### Implementation Roadmap

The transition plan from the lean launch state to the $10M target state. Each major system or area of responsibility has three documented states:

- **$10M target state** — the full-scale, ideal implementation
- **Lean launch state** — the minimum responsible implementation for the current team
- **Upgrade trigger** — the condition that justifies moving from lean to the next level

Implementation roadmaps live in [Section 16 — Implementation Roadmap](../16-implementation-roadmap/README.md) and within each department blueprint.

---

## Current Technology Stack

The following stack is the current provisional implementation of TELOS. These tool decisions are under active governance and may change. If a tool is replaced, the TELOS business architecture remains intact and is re-implemented in the new platform.

| Layer | Tool | Status |
|---|---|---|
| Website | Next.js on Vercel | Locked |
| DNS and Security | Cloudflare | Locked |
| CRM, Email, SMS, Pipelines, Automations | HighLevel | Locked |
| Payments | Stripe | Locked |
| Diagnostic | ScoreApp (potentially custom later) | Provisional |
| Webinar | Zoom (likely) | Provisional |
| Community | HighLevel Community (further research required) | Under review |
| Code and Version Control | GitHub | Locked |
| Development | Claude Code | Locked |

Tools marked **Provisional** or **Under review** are in use but not yet locked. They may be replaced without a formal change process. Tools marked **Locked** require a documented rationale and version increment to change.

---

## Architecture Principle

> Tools can change without changing the TELOS business architecture.

The business defines how it operates. The technology implements that definition. When a platform is retired, only the implementation changes — not the workflow logic, data definitions, event taxonomy, or operating principles that govern the business.

---

## Related Documents

- [TELOS Overview](../README.md)
- [TELOS Operating Principles](../01-principles/telos-operating-principles.md)
- [Department Structure](../02-organisation/department-structure.md)
- [Department Blueprint Template](../03-departments/department-blueprint-template.md)
- [Event Dictionary](../07-event-dictionary/README.md)
- [Data Dictionary](../08-data-dictionary/README.md)
- [Governance](../15-governance/README.md)
- [Implementation Roadmap](../16-implementation-roadmap/README.md)
