# Motion & Interaction Refinement — Design Spec

**Date:** 2026-05-08  
**Project:** The Elevated Leader  
**Scope:** Desktop motion and interaction refinement pass across the editorial ecosystem

---

## Goal

Introduce subtle editorial aliveness without animation noise. The site should feel calm, premium, cinematic, and emotionally intelligent — not animated.

---

## Constraints

**Never introduce:**
- Fly-in / slide-in effects
- Scale transforms
- Bounce or spring effects
- Exaggerated hover states
- Visible parallax
- Stagger overload
- Any translate values larger than 0 (opacity-only reveals)
- Glossy or SaaS motion patterns
- Shadow explosions on hover

---

## 1. RevealBlock Component

### File
`src/components/ui/RevealBlock.tsx`

### Behaviour
- Client component (`"use client"`)
- Uses `IntersectionObserver` to detect when the element enters the viewport
- Once visible, sets `revealed = true` and disconnects the observer (one-shot — never un-reveals)
- Opacity transition only: `0 → 1`
- Zero translate, zero scale, zero transform

### Motion Values
- **Duration:** `680ms`
- **Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (gentle ease-out)
- **Threshold:** `0.08` (fires as the element just enters the viewport)
- **Root margin:** `0px 0px -32px 0px` (slight offset so reveals happen just before the element fully enters)

### Props
```typescript
interface RevealBlockProps {
  children: React.ReactNode;
  delay?: number;        // CSS transition-delay in ms (default: 0)
  className?: string;
  as?: React.ElementType;            // element type override, default "div"
}
```

### Where Applied
Applied in page files to wrap specific content blocks below the fold:
- Section `<Eyebrow>` + `<h2>` heading groups (treated as one unit, delay: 0ms)
- First body paragraph / paragraph cluster per section (delay: 80ms — the max stagger)
- Lever cards grid containers (delay: 0ms)
- Framework / callout blocks (delay: 0ms)

**Intentionally NOT applied to:**
- Hero sections and anything in the initial viewport
- CTAs and buttons (interactive elements should not be obscured by state)
- Images (handled separately via CSS animation)
- Dark atmospheric sections with their own cinematic hierarchy

### Within-Section Stagger
Maximum delay between heading and body within one section: **80ms**.
This is felt as reading rhythm, not as visible animation.

---

## 2. Hover Timing Refinements

### Nav links (`src/components/layout/Header.tsx`)
- Main nav links: `duration-150 → duration-200`
- Dropdown panel opacity: `duration-150 → duration-200`
- Dropdown items: `duration-150 → duration-200`
- Dropdown chevron rotation: keep at `duration-150` (secondary indicator, fast is fine)

### Module / Lever inline links (page files)
All inline text links using pattern `transition-opacity duration-150` or `transition-colors duration-150`:
- Nudge to `duration-200` across all pages

### What stays unchanged
- Button `duration-200` — already calibrated correctly
- Card border hover `duration-300` — atmospheric, correct
- All hover color/opacity target values — brand-correct, no changes

---

## 3. Atmospheric Image Behaviour

### Implementation
A single CSS keyframe added to `src/app/globals.css`:

```css
@keyframes editorialFade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

Applied as an inline style or Tailwind arbitrary animation to the editorial hero image container `div` (the right-column atmospheric image panel) in each page's hero section.

### Motion Values
- **Duration:** `900ms`
- **Easing:** `ease-out`
- **Fill mode:** `forwards`
- **Delay:** `0ms` — begins immediately on page load

### Intent
Creates the feeling of the cinematic atmosphere gradually emerging rather than appearing instantly. Felt as atmospheric arrival, not loading animation.

### Applied to
The `<div>` wrapping the `<Image>` in each page's hero right-column:
- `src/app/page.tsx` — homepage hero
- `src/app/method/page.tsx` — method hero
- `src/app/diagnostic/page.tsx` — diagnostic hero
- `src/app/courses/page.tsx` — courses ecosystem hero
- `src/app/courses/elevate-your-self/page.tsx`
- `src/app/courses/streamline-your-structure/page.tsx`
- `src/app/courses/unlock-your-leverage/page.tsx`

---

## 4. Motion Hierarchy

Unified durations across the ecosystem:

| Type | Duration | Easing | Used for |
|---|---|---|---|
| Micro interaction | `200ms` | `ease` | Button/link color, nav hover, dropdown items |
| Atmospheric hover | `300ms` | `ease` | Card border shifts |
| Scroll reveal | `680ms` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | RevealBlock opacity |
| Image atmosphere | `900ms` | `ease-out` | Hero editorial image fade-in |

---

## 5. Pages In Scope

Full pass:
- `src/app/page.tsx` — Home
- `src/app/method/page.tsx` — Method
- `src/app/diagnostic/page.tsx` — Diagnostic
- `src/app/courses/page.tsx` — Courses ecosystem
- `src/app/courses/elevate-your-self/page.tsx`
- `src/app/courses/streamline-your-structure/page.tsx`
- `src/app/courses/unlock-your-leverage/page.tsx`

Components:
- `src/components/layout/Header.tsx` — nav timing
- `src/components/ui/RevealBlock.tsx` — new component

---

## 6. What Is Intentionally Left Restrained

- Hero content — immediately visible, no reveals
- CTAs — no opacity reveals on action elements
- Dark atmospheric section stacking — atmospheric presence without motion
- Card content — no per-card stagger (too theatrical for this brand)
- Footer — static, no reveals
- Mobile — no motion changes in this pass (mobile refinement is a separate future pass)

---

## 7. Success Criteria

After implementation, the site should:
- Feel like you are reading through a calm editorial publication
- Have no visible "animation" moments that break immersion
- Have consistent, unified timing across all pages
- Feel more atmospherically alive than before without any single motion being noticeable in isolation
