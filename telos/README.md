# TELOS — The Elevated Leader Operating System

**TELOS** is the single source of truth for how The Elevated Leader is designed, operated, automated, measured, and scaled.

TELOS governs the entire business — not only the CRM, not only the website, not only the delivery systems. Every department, process, workflow, automation, and data definition exists within TELOS.

---

## Core Design Principle

> Design for a $10M business. Implement for a two-person launch team.

Every system, structure, and decision in TELOS is designed at the architecture level for a scalable, high-performing business. Implementation is kept lean and responsible until scale justifies additional investment. For each major area, TELOS documents the $10M target state, the lean launch state, and the trigger that justifies upgrading.

---

## What TELOS Is

TELOS is the business architecture layer. It sits above all software and platforms.

Supporting systems inside TELOS include:

- **HighLevel** — CRM, email, SMS, pipelines, automations, community (provisionally)
- **Stripe** — payment processing
- **ScoreApp** — diagnostic delivery
- **Zoom** — webinar delivery
- **The website** — editorial ecosystem (Next.js on Vercel)
- **Community platforms** — client delivery and engagement

None of these platforms define how the business works. TELOS defines how the business works. The platforms implement it.

---

## The CRM in Context

The CRM is governed by **Operations** and used by Marketing, Sales, Delivery, Finance, and other departments. It is one system within TELOS — not the operating system itself.

Operations designs and maintains the CRM architecture. Other departments use it to execute their responsibilities.

---

## What This Repository Contains

GitHub contains approved decisions and specifications. Brainstorming, exploration, and drafting happen outside the repository. Once a decision is reviewed and locked, it is written into TELOS and version controlled here.

Every document carries a status:

| Status | Meaning |
|---|---|
| **Draft** | Being written. Not yet reviewed. May change significantly. |
| **Reviewed** | Reviewed and substantially agreed. Minor changes possible. |
| **Locked** | Approved. Changes require a new version and a documented rationale. |
| **Implemented** | Locked and live in the relevant systems. |

---

## TELOS Sections

| Section | Description |
|---|---|
| [01 — Principles](01-principles/README.md) | The founding logic, values, and design philosophy governing every decision |
| [02 — Organisation](02-organisation/README.md) | Business structure, departments, roles, and operating model |
| [03 — Departments](03-departments/README.md) | Department blueprints: intent, responsibilities, systems, KPIs, and implementation states |
| [04 — Capabilities](04-capabilities/README.md) | Core competencies, capability maps, and proprietary IP |
| [05 — Business Objects](05-business-objects/README.md) | Canonical definitions of every entity the business operates with |
| [06 — Lifecycles](06-lifecycles/README.md) | Lifecycle maps for clients, offers, leads, and content |
| [07 — Event Dictionary](07-event-dictionary/README.md) | Every named business event, its trigger, and its downstream effects |
| [08 — Data Dictionary](08-data-dictionary/README.md) | Canonical definitions for every data field, metric, and property |
| [09 — CRM](09-crm/README.md) | CRM architecture, contact model, pipeline design, and governance |
| [10 — Pipelines](10-pipelines/README.md) | All pipeline definitions, stage logic, and entry and exit criteria |
| [11 — Automations](11-automations/README.md) | All automation workflows: triggers, actions, conditions, and failure paths |
| [12 — Communications](12-communications/README.md) | Communication architecture, sequences, templates, and channel strategy |
| [13 — Reporting](13-reporting/README.md) | Metrics, KPIs, dashboards, and reporting cadences |
| [14 — Technology](14-technology/README.md) | Technology stack, architecture framework, integrations, and infrastructure |
| [15 — Governance](15-governance/README.md) | Naming standards, ownership, change management, and documentation protocols |
| [16 — Implementation Roadmap](16-implementation-roadmap/README.md) | Phased plan from lean launch to the $10M target state |

---

## Changes

All significant additions and revisions are recorded in [CHANGELOG.md](CHANGELOG.md).
