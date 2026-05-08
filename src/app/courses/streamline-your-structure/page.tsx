import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LeverNav } from "@/components/ui/LeverNav";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Streamline Your Structure — Structure Lever",
  description:
    "Build the structure your business can finally run on. The Structure lever for $1M–$5M founders who are ready to stop being the interpreter of every moving part.",
};

const SIGNS: ReactNode[] = [
  <>Your team needs constant clarification<br />before moving forward.</>,
  <>Important work gets dropped, delayed,<br />or repeated.</>,
  <>You have systems, but people still rely on you<br />to interpret them.</>,
  <>The business feels busy, but not cleanly<br />organised around what matters most.</>,
];

const MODULES = [
  {
    num: "04",
    codename: "ALIGNMENT",
    framework: "The Vision Vehicle",
    descriptor: "One Destination, One Business",
    slug: "alignment",
    description:
      "The Vision Vehicle aligns every part of the business to a single clear direction so the team moves toward one destination — without constant founder redirection, reinterpretation, or course correction.",
    outcome:
      "A unified strategic direction the team operates from without requiring you to re-explain, re-prioritise, or redirect daily.",
  },
  {
    num: "05",
    codename: "PRECISION",
    framework: "The One Focus",
    descriptor: "Profit per Capacity Unit",
    slug: "precision",
    description:
      "The One Focus identifies and protects the highest-leverage profit focus so the business grows without spreading capacity across too many competing priorities and diminishing returns.",
    outcome:
      "A clear profit focus that maximises output per unit of capacity — without fragmenting team energy or founder attention.",
  },
  {
    num: "06",
    codename: "AWARENESS",
    framework: "The Altitude System",
    descriptor: "30k / 20k / 10k OS",
    slug: "awareness",
    description:
      "The Altitude System builds your ability to move fluidly between strategic vision, operational direction, and ground-level execution — without losing perspective or being pulled permanently into the weeds.",
    outcome:
      "An operating rhythm that allows clear leadership at every altitude without losing strategic clarity or descending into micro-management.",
  },
];

const OUTCOMES = [
  "Ownership is clear — your team knows what they hold.",
  "Decisions stop routing back to you.",
  "Workflows are visible, not stored in people's heads.",
  "Priorities are set. The operating rhythm holds.",
  "The business runs cleaner, without constant founder input.",
];

export default function StreamlineYourStructurePage() {
  return (
    <>
      {/* ── 1. CINEMATIC EDITORIAL HERO ──────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#1E1C19" }}>
        <div className="flex flex-col lg:flex-row lg:min-h-[820px] xl:min-h-[860px]">

          {/* Left — typography */}
          <div className="relative z-10 flex items-center lg:w-[46%] px-6 md:px-10 lg:px-16 pt-16 pb-12 lg:py-20">
            <div className="w-full max-w-[520px]">

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-12" aria-label="Breadcrumb">
                <Link
                  href="/courses"
                  className="font-sans text-[10px] text-ivory/35 hover:text-ivory/65 transition-colors duration-150"
                >
                  Courses
                </Link>
                <span className="font-sans text-[10px] text-ivory/20" aria-hidden="true">→</span>
                <span className="font-sans text-[10px] text-ivory/45">Streamline Your Structure</span>
              </nav>

              {/* Lever eyebrow */}
              <div className="mb-10">
                <div className="w-10 h-px bg-warm-stone/40 mb-5" />
                <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-warm-stone">
                  Structure Lever
                </p>
              </div>

              <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.06] text-ivory mb-8 tracking-tight">
                Streamline Your Structure
              </h1>

              <p className="font-sans text-lg md:text-xl text-warm-stone font-medium mb-5 leading-snug">
                Build the structure your business can finally run on.
              </p>

              <p className="font-sans text-base md:text-lg text-ivory/70 leading-relaxed mb-12">
                This lever clarifies how your business runs day to day. It
                strengthens roles, responsibilities, workflows, and operational
                clarity so the business stops depending on you to interpret,
                decide, and redirect every moving part.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button href="/courses" variant="primary">
                  Choose Structure Modules
                </Button>
                <Button href={CTA_LINKS.diagnostic} variant="ghost" external>
                  Take the Diagnostic
                </Button>
              </div>

            </div>
          </div>

          {/* Right — editorial atmosphere */}
          <div
            className="relative h-[64vw] md:h-[52vw] overflow-hidden lg:absolute lg:right-0 lg:inset-y-0 lg:h-auto lg:w-[60%]"
            style={{ backgroundColor: "#1E1C19" }}
          >
            <Image
              src="/images/editorial/streamline-hero-editorial.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-[50%_15%] lg:object-top"
              priority
            />

            {/* Left atmospheric blend — warm graphite into text column */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to right, #1E1C19 0%, transparent 24%)" }}
              aria-hidden="true"
            />

            {/* Mobile top dissolve — image emerges from atmosphere */}
            <div
              className="absolute top-0 left-0 right-0 h-20 pointer-events-none lg:hidden"
              style={{ background: "linear-gradient(to bottom, #1E1C19 0%, transparent 100%)" }}
              aria-hidden="true"
            />

            {/* Bottom dissolve — mobile only: image fades back into atmosphere */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none lg:hidden"
              style={{ background: "linear-gradient(to top, #1E1C19 0%, transparent 100%)" }}
              aria-hidden="true"
            />
          </div>

        </div>

        {/* Section-level atmospheric bridge — editorial hero-to-section continuity */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(212,199,183,0.12) 0%, transparent 100%)", zIndex: 5 }}
          aria-hidden="true"
        />
      </section>

      {/* ── LEVER NAV ───────────────────────────────────────────────────── */}
      <LeverNav activeLever="structure" />

      {/* ── LEVER MOTIF ACCENT ───────────────────────────────────────────── */}
      <div className="flex justify-center py-10 md:py-12 border-t border-warm-stone/20 bg-ivory" aria-hidden="true">
        <Image
          src="/images/motifs/lever-motifs.png"
          alt=""
          width={320}
          height={160}
          className="h-10 w-auto opacity-[0.15]"
        />
      </div>

      {/* ── 2. WHY THIS LEVER MATTERS ────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Why This Lever Matters</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              Complexity Compounds When Structure Is Unclear
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                At $1M–$5M, growth creates more moving parts, more people, more
                decisions, and more operational drag.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                If roles are unclear, your team will keep circling back to you.
                If workflows are undocumented, every outcome depends on memory
                and effort. If the operating rhythm is loose, the business keeps
                leaking time, energy, and focus.
              </p>
              <p className="font-sans text-base md:text-lg font-semibold text-obsidian leading-snug border-l-2 border-slate pl-5">
                This lever helps you move from scattered operations to a clean
                business spine.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. SIGNS THIS IS YOUR LEVER ──────────────────────────────────── */}
      <Section className="bg-warm-stone/20 border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>Is This Your Lever?</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian">
              This Is the Lever to Start With If&hellip;
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SIGNS.map((sign, i) => (
              <Card key={i} className="p-10 md:p-12">
                <div className="w-6 h-0.5 bg-slate mb-5" />
                <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                  {sign}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 4. THE 3 MODULES ─────────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>What&apos;s Inside</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              Inside Streamline Your Structure
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              This lever contains three modules that clean up how your business
              operates.
            </p>
          </div>

          {/*
           * Subgrid layout — parent defines 7 explicit row tracks.
           * Each module column spans all 7 rows and inherits those tracks via
           * grid-template-rows: subgrid. CSS grid sizes every row to the tallest
           * item across all three columns, giving exact horizontal alignment of
           * accent lines, numbers, titles, descriptions, dividers, and outcomes.
           * On mobile the md: classes are absent and modules stack as blocks.
           */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-x-14 md:gap-y-0 md:[grid-template-rows:repeat(8,auto)]">
            {MODULES.map((mod) => (
              <div
                key={mod.num}
                className="md:grid md:[grid-template-rows:subgrid] md:[grid-row:1/span_8]"
              >
                {/* Row 1 — Accent line */}
                <div className="pb-5">
                  <div className="w-6 h-0.5 bg-slate" />
                </div>

                {/* Row 2 — Number + codename */}
                <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-slate pb-3">
                  {mod.num} — {mod.codename}
                </p>

                {/* Row 3 — Framework + descriptor */}
                <div className="pb-8">
                  <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-obsidian leading-snug tracking-tight mb-2">
                    {mod.framework}
                  </h3>
                  <p className="font-sans text-[11px] text-obsidian/50 leading-snug">
                    {mod.descriptor}
                  </p>
                </div>

                {/* Row 4 — Description */}
                <p className="font-sans text-sm md:text-base text-obsidian/65 leading-relaxed pb-4">
                  {mod.description}
                </p>

                {/* Row 5 — Divider */}
                <div className="h-px bg-warm-stone w-full" />

                {/* Row 6 — Outcome label */}
                <p className="font-sans text-[9px] font-semibold tracking-[0.25em] uppercase text-rosewood pt-5 pb-2">
                  Outcome
                </p>

                {/* Row 7 — Outcome text */}
                <p className="font-sans text-sm text-obsidian/70 leading-relaxed">
                  {mod.outcome}
                </p>

                {/* Row 8 — Module actions */}
                <div className="pt-6 flex items-center justify-between gap-3">
                  <Link
                    href={`/courses/${mod.slug}`}
                    className="font-sans text-[11px] font-semibold text-obsidian hover:text-bronze transition-colors duration-150 flex items-center gap-1.5"
                  >
                    View Module
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1 4H9M6.5 1.5L9 4L6.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link
                    href="/courses"
                    className="flex items-center gap-1.5 font-sans text-[10px] text-obsidian/40 hover:text-obsidian/60 transition-colors duration-150"
                  >
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                      <path d="M1 1H3L4.68 8.39A1 1 0 0 0 5.66 9H11A1 1 0 0 0 11.97 8.27L13 4H4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="5.5" cy="11.5" r="0.75" fill="currentColor" />
                      <circle cx="10.5" cy="11.5" r="0.75" fill="currentColor" />
                    </svg>
                    Quick Add
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 md:mt-20 pt-10 border-t border-warm-stone">
            <Button href="/courses" variant="primary">
              Choose Structure Modules
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── 5. WHAT CHANGES ──────────────────────────────────────────────── */}
      <Section className="bg-warm-stone/20 border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>After This Lever</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian">
              What Changes When Structure Is No Longer the Bottleneck
            </h2>
          </div>
          <ul className="max-w-2xl space-y-5">
            {OUTCOMES.map((outcome, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="font-sans text-slate shrink-0 mt-1 select-none">
                  —
                </span>
                <span className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── 6. HOW THIS FITS INTO THE FULL SYSTEM ───────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The Full System</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              Structure Turns Leadership Into an Operating Rhythm
            </h2>
            <div className="space-y-5 mb-10">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Identity gives you the clarity to lead.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Structure turns that clarity into the way the business actually
                runs.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Without structure, every standard depends on constant
                reinforcement. With structure, the business starts carrying the
                standard without you having to personally hold every detail.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Streamline Your Structure creates the operating spine the rest
                of the system depends on.
              </p>
            </div>
            <Link
              href="/courses"
              className="font-sans text-sm font-semibold text-bronze underline underline-offset-4 decoration-1 hover:text-obsidian transition-colors duration-150"
            >
              Explore the Full System →
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────────── */}
      <CTASection
        heading="Ready to Build a Business That Holds Without You?"
        subheading="Start with the Structure lever, or take the diagnostic to confirm where your business is really bottlenecked."
        primaryLabel="Choose Structure Modules"
        primaryHref="/courses"
        secondaryLabel="Take the Diagnostic"
        secondaryHref="/diagnostic"
      />
    </>
  );
}
