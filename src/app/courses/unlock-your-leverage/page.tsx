import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  title: "Unlock Your Leverage — Leverage Lever",
  description:
    "Scale without becoming the bottleneck again. The Leverage lever for $1M–$5M founders ready to grow without pulling themselves back into the centre of everything.",
};

const SIGNS: ReactNode[] = [
  <>You are still the final decision-maker<br />on too many things.</>,
  <>Delegation happens, but you still need to check,<br />fix, or follow up constantly.</>,
  <>Growth increases pressure<br />instead of reducing your involvement.</>,
  <>Your team executes, but does not<br />fully own outcomes.</>,
];

const MODULES = [
  {
    num: "07",
    codename: "FLOW",
    framework: "The Cruise Control",
    descriptor: "Self-Sustaining Client Journeys",
    slug: "flow",
    description:
      "The Cruise Control builds client journeys that run with consistency and quality without requiring your direct involvement at every stage of delivery — so the business produces results without you managing each touchpoint.",
    outcome:
      "Delivery that flows reliably at standard without you rescuing, redirecting, or holding the process together.",
  },
  {
    num: "08",
    codename: "EMPOWER",
    framework: "The Autonomy Blueprint",
    descriptor: "Seats, Owners & Rhythm",
    slug: "empower",
    description:
      "The Autonomy Blueprint places the right people in the right seats with real ownership, clear accountability, and an operating rhythm that keeps the business moving — without your constant presence to make it function.",
    outcome:
      "A team structure where accountability is clear, execution continues independently, and you are genuinely not needed to hold it together.",
  },
  {
    num: "09",
    codename: "HARMONISE",
    framework: "The Progressive Edge",
    descriptor: "Calm, Integrated Tech",
    slug: "harmonise",
    description:
      "The Progressive Edge builds a clean, integrated technology architecture that supports growth quietly — without creating new dependencies, operational noise, or bottlenecks that route back to the founder.",
    outcome:
      "Technology that serves the business without becoming a new source of complexity, fragility, or founder reliance.",
  },
];

const OUTCOMES = [
  "Decisions stop routing back to you by default.",
  "Your team owns outcomes without constant checking.",
  "Growth no longer increases your personal workload.",
  "Execution continues without your direct involvement.",
  "The business becomes lighter, not heavier, as it scales.",
];

export default function UnlockYourLeveragePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-28 md:py-40">
        <Container>
          <div className="max-w-2xl">
            <div className="mb-8">
              <div className="w-10 h-px bg-eucalyptus mb-5" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-eucalyptus">
                Leverage Lever
              </p>
            </div>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.06] text-ivory mb-5 tracking-tight">
              Unlock Your Leverage
            </h1>
            <p className="font-sans text-lg md:text-xl text-warm-stone font-medium mb-6 leading-snug">
              Scale without becoming the bottleneck again.
            </p>
            <p className="font-sans text-base md:text-lg text-ivory/70 leading-relaxed mb-12">
              This lever shows you how to multiply your time, output, and
              impact. It builds the systems of delegation, ownership, and scale
              so the business can grow without pulling you back into the centre
              of everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button href="/courses" variant="primary">
                Choose Leverage Modules
              </Button>
              <Button href={CTA_LINKS.diagnostic} variant="ghost" external>
                Take the Diagnostic
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── LEVER NAV ───────────────────────────────────────────────────── */}
      <LeverNav activeLever="leverage" />

      {/* ── 2. WHY THIS LEVER MATTERS ────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Why This Lever Matters</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              Growth Breaks When Everything Still Runs Through You
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Most founders reach a point where the business is working, but
                only because they are holding too much of it together.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                If delegation is partial, you stay the safety net. If ownership
                is unclear, decisions keep routing back to you. If scale is
                layered on top of weak foundations, complexity increases faster
                than results.
              </p>
              <p className="font-sans text-base md:text-lg font-semibold text-obsidian leading-snug border-l-2 border-eucalyptus pl-5">
                This lever helps you move from involved operator to leveraged
                leader.
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
                <div className="w-6 h-0.5 bg-eucalyptus mb-5" />
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
              Inside Unlock Your Leverage
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              This lever contains three modules that allow the business to scale
              without pulling you back in.
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
                  <div className="w-6 h-0.5 bg-eucalyptus" />
                </div>

                {/* Row 2 — Number + codename */}
                <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-eucalyptus pb-3">
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
              Choose Leverage Modules
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
              What Changes When You Are No Longer the Bottleneck
            </h2>
          </div>
          <ul className="max-w-2xl space-y-5">
            {OUTCOMES.map((outcome, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="font-sans text-eucalyptus shrink-0 mt-1 select-none">
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
              Leverage Turns Structure Into Scale
            </h2>
            <div className="space-y-5 mb-10">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Identity gives you the clarity to lead.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Structure gives the business a way to run.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Leverage allows it to grow without pulling you back into the
                centre.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Without leverage, growth increases pressure. With leverage,
                growth increases freedom.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Unlock Your Leverage is what allows the business to run without
                you.
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
        heading="Ready to Scale Without Becoming the Bottleneck Again?"
        subheading="Start with the Leverage lever, or take the diagnostic to confirm where your business is really bottlenecked."
        primaryLabel="Choose Leverage Modules"
        primaryHref="/courses"
        secondaryLabel="Take the Diagnostic"
        secondaryHref="/diagnostic"
      />
    </>
  );
}
