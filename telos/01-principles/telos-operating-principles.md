| Document | TELOS Operating Principles |
|---|---|
| TELOS section | [01 — Principles](README.md) |
| Version | 1.0 |
| Status | Locked |
| Owner | Executive and Operations |
| Last updated | 2026-08-05 |

---

# TELOS Operating Principles

These principles govern every decision made within The Elevated Leader Operating System. They apply to business design, systems architecture, automation, data management, and implementation sequencing.

When a decision feels unclear, return to these principles first.

---

## 1. Business Before Software

The business determines the operating requirements. Software does not dictate how the business must work.

Before selecting or configuring any tool, the business process, ownership, and expected outcome must be defined. Tools implement decisions. They do not make them.

---

## 2. Design for Scale, Implement Lean

Design the ideal $10M operating system, then identify the minimum responsible launch implementation.

Every major system, pipeline, and workflow is designed at the level required for a $10M business. The launch implementation uses the simplest responsible version of that design. The gap between the two is closed incrementally as the business grows and as scale justifies investment.

For each area, TELOS documents:
- The $10M target state
- The lean launch state
- The trigger that justifies upgrading

---

## 3. Single Source of Truth

Every important piece of data, rule, process, and definition has one authoritative home.

Duplication creates inconsistency. If a contact property is defined in two places, one definition will eventually drift. TELOS establishes where every entity lives and which system owns it. The [Data Dictionary](../08-data-dictionary/README.md) and [Event Dictionary](../07-event-dictionary/README.md) enforce this.

---

## 4. Architecture Before Automation

Do not build an automation until its trigger, required data, owner, purpose, exit conditions, and failure path are understood.

An automation built without a defined architecture creates technical debt. Before any workflow is built in HighLevel or any other platform, its specification must exist in [Section 11 — Automations](../11-automations/README.md).

---

## 5. Events Drive Workflows

Automations and reporting are based on clearly defined business events.

An event is something that happened — a contact was created, a purchase was completed, a diagnostic was submitted, a session was attended. Events are the connective tissue of the operating system. They are defined in the [Event Dictionary](../07-event-dictionary/README.md) before any automation references them.

---

## 6. Clear Ownership

Every department, responsibility, system, workflow, field, tag, pipeline, report, and SOP has an owner.

Shared ownership is no ownership. For every element of TELOS, one department or role is accountable. Other departments may use or contribute to a system, but only the owner may change its design.

Department ownership is documented in [Section 02 — Organisation](../02-organisation/README.md) and [Section 03 — Departments](../03-departments/README.md).

---

## 7. Visibility When Needed

The system must provide complete operational and reporting visibility without forcing the initial team to maintain unnecessary complexity.

Reporting should surface what matters for decisions at the current stage of the business. Visibility is not maximised by default — it is designed to serve specific decisions. What gets measured gets managed; what gets over-measured creates noise.

Reporting requirements are defined in [Section 13 — Reporting](../13-reporting/README.md).

---

## 8. Platform Flexibility

TELOS must remain valid if HighLevel, ScoreApp, Zoom, Stripe, the community platform, or any other tool is replaced.

The business architecture lives in TELOS. Platform-specific implementation details live in the relevant department or technology documents. If a platform is replaced, the TELOS architecture remains intact and is re-implemented in the new platform. See [Section 14 — Technology](../14-technology/README.md).

---

## 9. Build Once, Improve Continuously

Systems should be designed to evolve without requiring major reconstruction.

The architecture established in TELOS creates a stable foundation. As the business learns, individual components are refined. The goal is progressive improvement, not periodic rebuilding. Version control in GitHub tracks every meaningful change.

---

## 10. Simplicity Over Unnecessary Complexity

Future scalability does not justify expensive or burdensome implementation before it is needed.

Complexity has a real cost: maintenance time, cognitive load, failure surface, and onboarding difficulty. Every system must justify its complexity relative to its current value. The lean launch state is not a compromise — it is the appropriate implementation for the current stage.

---

## 11. Data Must Serve a Decision

Do not collect, tag, or report data without a clear operational, customer, automation, or reporting purpose.

Before any field, tag, or custom property is created, the question must be answered: what decision does this data serve? Data that serves no decision creates noise and maintenance burden. All data requirements are defined in the [Data Dictionary](../08-data-dictionary/README.md).

---

## 12. Approved Documentation Becomes the Source of Truth

Brainstorming happens outside the repository. Locked decisions are written into TELOS and version controlled.

GitHub contains approved decisions and specifications. Draft thinking, exploration, and options analysis may happen in other tools. Once a decision is reviewed and locked, it is written into the appropriate TELOS document, assigned a version, and committed. From that point, the document is the authoritative reference.

---

## Related Documents

- [TELOS Overview](../README.md)
- [Department Structure](../02-organisation/department-structure.md)
- [TELOS Architecture Framework](../14-technology/telos-architecture-framework.md)
- [Governance](../15-governance/README.md)
