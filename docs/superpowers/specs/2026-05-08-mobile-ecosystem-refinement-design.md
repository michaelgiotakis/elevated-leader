# Mobile Ecosystem Refinement — Design Spec

**Date:** 2026-05-08
**Project:** The Elevated Leader
**Scope:** Full mobile refinement pass across the editorial ecosystem

---

## Goal

Preserve the cinematic editorial atmosphere on mobile. The mobile experience should feel immersive, premium, emotionally intelligent, and atmospheric — not a compressed desktop. Every change is targeted and surgical. Nothing that works is touched.

---

## Constraints

**Do NOT:**
- Redesign layouts
- Remove atmosphere or atmospheric overlays
- Flatten spacing aggressively
- Simplify into generic mobile SaaS patterns
- Over-tighten typography
- Reduce breathing room on content-heavy sections
- Touch desktop classes (md: and above stay identical unless explicitly noted)

---

## 1. Hero Typography Scale

### Rule
Only reduce H1 font size on pages with long headlines that break into awkward 2–3-word lines at 390px viewport width (342px content width with `px-6` padding). Short 3-word lever page headings work at 48px and are left unchanged.

### Changes

**`src/app/page.tsx` — Home hero H1**
- Headline: "How Elevated Is Your Leadership for a $1–5M Business?" (long)
- Current: `text-[48px] md:text-[56px] lg:text-[60px]`
- Proposed: `text-[36px] md:text-[52px] lg:text-[60px]`

**`src/app/method/page.tsx` — Method hero H1**
- Headline: "Build a Business That Runs With Clarity, Structure, and Leverage" (long)
- Current: `text-[48px] md:text-[60px]`
- Proposed: `text-[36px] md:text-[52px] lg:text-[60px]`

**`src/app/diagnostic/page.tsx` — Diagnostic hero H1**
- Headline: "Find the Bottleneck That's Keeping Your Business Heavy" (long)
- Current: `text-[44px] md:text-[62px]`
- Proposed: `text-[34px] md:text-[54px] lg:text-[62px]`

**`src/app/courses/page.tsx` — Courses ecosystem hero H1**
- Headline: "The Architecture Behind Designed Freedom" (moderate length)
- Current: `text-[48px] md:text-[60px]`
- Proposed: `text-[38px] md:text-[52px] lg:text-[60px]`

**`src/app/courses/perception/page.tsx` — Perception module hero H1**
- Headline: "The Leader You Present and the Self You Inhabit Are Not the Same Woman." (very long)
- Current: `text-[40px] md:text-[52px] lg:text-[54px]`
- Proposed: `text-[34px] md:text-[48px] lg:text-[54px]`

**Lever pages (×3) — H1 unchanged**
- Headings: "Elevate Your Self", "Streamline Your Structure", "Unlock Your Leverage" (3 words each)
- All three: Keep existing `text-[48px] md:text-[60px]` — short headings work at full scale

### What Stays Unchanged
- All `md:` and `lg:` size values
- Subheading sizes (`text-lg md:text-xl`)
- Section H2 sizes (`text-[32px] md:text-[40px]`)
- Body text sizes

---

## 2. Hero Image Mobile Treatment

### Image Height
All hero sections currently use `h-[64vw] md:h-[52vw]` for the image container.

**Change:** `h-[64vw]` → `h-[72vw]` on mobile across all hero sections.

- On a 390px phone: 250px → 281px. More cinematic atmospheric presence.
- `md:h-[52vw]` stays unchanged.

Applies to:
- `src/app/page.tsx`
- `src/app/method/page.tsx`
- `src/app/diagnostic/page.tsx`
- `src/app/courses/page.tsx`
- `src/app/courses/elevate-your-self/page.tsx`
- `src/app/courses/streamline-your-structure/page.tsx`
- `src/app/courses/unlock-your-leverage/page.tsx`
- `src/app/courses/perception/page.tsx`

### Mobile Top Dissolve
The mobile-only atmospheric top dissolve (`lg:hidden`) fades from the hero background color into the image. Currently `h-20` (80px).

**Change:** `h-20` → `h-28` (112px) across all hero sections.

Deeper dissolve creates smoother atmospheric transition from text column into image on mobile.

### Left Atmospheric Blend
The horizontal left gradient (`linear-gradient(to right, [bg], transparent)`) is designed for the desktop split layout but also renders on mobile where the image is full-width. On mobile it creates a gentle left-edge vignette — intentional atmospheric framing. No change.

### Object-Position Mobile Review
The `object-[x%_y%]` values are currently set for the desktop `lg:object-contain lg:object-top` target. On mobile the images use `object-cover` with the same position value, which determines the crop center.

**Rule:** If an image's existing `object-[x%_y%]` centers on the editorial subject at mobile widths, leave it. Only add a mobile-specific `object-position` override (via separate sm/md breakpoint class) if the crop is clearly wrong — for example, the subject is clipped or the frame is empty sky/background.

**Default stance:** Leave all existing `object-[...]` values unchanged unless the implementation phase reveals a clearly broken crop on a 390px viewport. Document any changes made with a comment noting the mobile crop target.

No changes are prescribed for object-position in this spec. This is an implementation-phase observation step.

---

## 3. Page-Specific and Component Refinements

### 3a. Diagnostic Pressure Visualization

**Location:** `src/app/diagnostic/page.tsx` — Section 2, right column of `grid-cols-1 lg:grid-cols-[1fr_540px]`

**Current:** `min-h-[560px]` — renders on mobile as a stacked visualization below the editorial copy.

**Change:** `min-h-[560px]` → `min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]`

The absolute-positioned nodes use percentage-based coordinates and will compress proportionally. The visualization remains as an atmospheric cinematic element on mobile — just proportionally scaled to the viewport.

### 3b. LeverNav Pill Tags

**Location:** `src/components/ui/LeverNav.tsx`

**Current:** Pill links use `text-[13px] px-4 py-2` — three pills with long names ("Streamline Your Structure" ≈ 190px wide) wrap unpredictably on mobile.

**Change:**
- Font size: `text-[13px]` → `text-[11px] sm:text-[13px]`
- Padding: `px-4 py-2` → `px-3 py-1.5 sm:px-4 sm:py-2`

This allows the three pills to fit in at most two rows, looking intentional. Active state colors and border styles unchanged.

### 3c. Module and Lever Card Padding

**Location:** Lever pages (×3) and method page lever cards.

**Current:** Module cards use `p-10 md:p-14`. On 342px content width, 40px internal padding on each side leaves 262px for content.

**Change:** `p-10 md:p-14` → `p-8 md:p-14` on module cards within lever pages.

This applies to:
- Module cards inside `src/app/courses/elevate-your-self/page.tsx`
- Module cards inside `src/app/courses/streamline-your-structure/page.tsx`
- Module cards inside `src/app/courses/unlock-your-leverage/page.tsx`
- Lever cards inside `src/app/method/page.tsx` (`p-10 md:p-12` → `p-8 md:p-12`)

Does NOT apply to:
- Home page cards (already use `p-12 md:p-14` — different layout)
- Diagnostic deliverable cards (`p-8 md:p-10` — already appropriate)

### 3d. Breadcrumb Overflow

**Location:** Hero section `<nav>` elements on:
- `src/app/courses/elevate-your-self/page.tsx`
- `src/app/courses/streamline-your-structure/page.tsx`
- `src/app/courses/unlock-your-leverage/page.tsx`
- `src/app/courses/perception/page.tsx`

**Current:** `flex items-center gap-2` — no wrapping. Multi-level breadcrumbs can overflow on 360px viewports.

**Change:** Add `flex-wrap` to the breadcrumb `<nav>` container.

Text remains `text-[10px]` — wrapping rather than overflowing.

### 3e. Method Page Monolith Image
No change needed. The Operating System Monolith image uses `w-full h-auto` and stacks correctly below the copy on mobile. The `lg:scale-[1.17]` only applies at desktop. Leave as-is.

---

## 4. Mobile Vertical Rhythm Audit

### Principle
This is a targeted audit — not global spacing compression. A section is a candidate only if its mobile scroll height is dominated by padding rather than content. The test: does removing 24–32px of mobile padding still leave clear editorial breathing room? If yes, it's a candidate.

Desktop padding (`md:` values and above) is untouched in all cases.

### Targeted Adjustments

**Home page — "The Pathway" section**
- Section: 4 brief transformation stages (`STAGES` grid)
- Current: `py-20` (via `Section` component) + inner content
- Issue: 4 short cards in a single column with 80px outer vertical padding — scroll feels diluted between heavier adjacent sections
- Change: Override Section padding to `py-16 md:py-28`

**Method page — "The Arc" section (Transformation Stages)**
- Section: 3 brief transformation stages
- Current: `py-20 md:py-28`
- Issue: 3 short-content blocks, each with `p-10 md:p-12`, flanked by large padding. Feels floaty between the denser Lever System section and the Diagnostic section.
- Change: `py-14 md:py-28`

**Method page — "Where to Start" (Diagnostic Prompt) section**
- Section: Heading + 2 short paragraphs + 2 CTAs
- Current: `py-20 md:py-28` (via `Section` component)
- Issue: Content is brief on mobile. 80px top + 80px bottom = 160px of padding around relatively sparse content.
- Change: `py-14 md:py-28`

**Diagnostic page — "Emotional Recognition" quotes section**
- Section: 5 quote items in `max-w-2xl space-y-0`
- Current: `py-20 md:py-28` inline style section
- Issue: Deep dark section (bg `#110F0D`) — the cinematic quality works, but 80px padding at mobile can feel slightly overstretched for the content volume
- Change: `py-16 md:py-28`

### What Stays Unchanged
All of the following preserve their full spacing regardless of content volume:
- All content-heavy sections (lever cards, module grids, diagnostic reveals grid, etc.)
- CTA sections — breathing room is intentional
- All dark atmospheric "interlude" sections (hero sections, Founding Cohort, etc.)
- Home "Why This Exists" and "System Breakdown" — dense enough to earn the spacing
- Section component default `py-20 md:py-28` — unchanged globally; only specific instances overridden

---

## 5. Motion on Mobile

### RevealBlock (from motion system spec — when implemented)
- Same 680ms duration and easing as desktop
- Add `prefers-reduced-motion` media query: if enabled, skip transition entirely (set opacity to 1 immediately on mount, no transition applied)

Use a `useEffect` to read the media query after hydration, avoiding SSR mismatch:

```typescript
// Inside RevealBlock — prefers-reduced-motion safe pattern
const [revealed, setRevealed] = useState(false);

useEffect(() => {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches) {
    setRevealed(true); // skip animation entirely
    return;
  }
  // ... existing IntersectionObserver setup
}, []);
```

- If reduced motion is preferred: revealed = true immediately, no transition applied, observer never set up.

### Existing Ambient Animations
The diagnostic page ambient pressure animations (`pressureDrift`, `pressureGlow`, `pressurePulse`) are opacity-based and use tiny Y-translate values (max 3px). These are appropriate on mobile and are left unchanged.

---

## 6. Pages and Files In Scope

### Pages
- `src/app/page.tsx` — Home
- `src/app/method/page.tsx` — Method
- `src/app/diagnostic/page.tsx` — Diagnostic
- `src/app/courses/page.tsx` — Courses ecosystem
- `src/app/courses/elevate-your-self/page.tsx`
- `src/app/courses/streamline-your-structure/page.tsx`
- `src/app/courses/unlock-your-leverage/page.tsx`
- `src/app/courses/perception/page.tsx`

### Components
- `src/components/ui/LeverNav.tsx` — pill tag sizing

---

## 7. Intentional Mobile-Specific Compromises

These design decisions are deliberately simplified on mobile and are not mistakes:

- **Hero image object-position**: Desktop uses `lg:object-contain lg:object-top` to show the full editorial composition. Mobile uses `object-cover` with a cropped position. This is intentional — showing a cinematic crop on mobile rather than a shrunk full image.
- **Operating system monolith image**: Does not scale on mobile (no `lg:scale-[1.17]`). Renders at natural size in single column. Intentional.
- **Left atmospheric gradient on mobile**: Designed for desktop split but creates incidental left-edge vignette on mobile. This atmospheric artifact is acceptable.
- **Breadcrumb line-wrapping**: On very narrow screens breadcrumbs may wrap to two lines. This is preferred over overflow.
- **RevealBlock**: No mobile-specific timing reduction — same calm editorial pacing applies.

---

## 8. Success Criteria

After implementation, mobile should:
- Feel like the same brand world as desktop — not a simplified fallback
- Have hero headings that read in natural editorial groupings (3–6 words per line maximum)
- Have hero images that feel cinematic and atmospherically framed, not cropped randomly
- Scroll with calm editorial rhythm — no dead-space gaps, no crowding
- Maintain all cinematic atmospheric overlays and transitions
- Have LeverNav that wraps cleanly without looking broken
- Have the diagnostic pressure visualization as a contained cinematic element rather than sprawling across a tall white canvas
- Preserve luxury emotional pacing throughout
