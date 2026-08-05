# 07 — Event Dictionary

This section is the canonical record of every named event that occurs in the business and what each event triggers.

## What belongs here

- Event name (e.g. `lead.created`, `client.enrolled`, `payment.received`, `session.completed`)
- Event definition and what it means in business terms
- What triggers the event
- What the event triggers downstream (automations, notifications, status changes, pipeline movements)
- Which system records or emits the event
- Event ownership (who is responsible for it being correct)

## Why this exists

Events are the connective tissue of the operating system. Without a shared event dictionary, automations break silently and pipelines drift from reality. Every named event must be defined here before it is wired into any tool.
