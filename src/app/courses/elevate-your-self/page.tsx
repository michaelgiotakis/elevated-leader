import type { Metadata } from "next";
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
  title: "Elevate Your Self — Identity Lever",
  description:
    "Strengthen how you think, decide, and lead. The Identity lever for $1M–$5M founders who are ready to stop being the bottleneck.",
};

const SIGNS = [
  "You make too many decisions from urgency or emotional pressure.",
  "Your team still looks to you as the final safety net.",
  "You know what needs to change, but struggle to hold the standard consistently.",
  "Your calendar, energy, and focus are being shaped by everyone else's needs.",
];

const MODULES = [
  {
    num: "01",
    codename: "PERCEPTION",
    framework: "The Evolution Model",
    descriptor: "Identity & Self-Concept",
    slug: "perception",
    description:
      "The Evolution Model reframes how you see yourself as a leader. You clarify your self-concept, identify the patterns driving your current leadership, and build the internal identity that holds under pressure and scale.",
    outcome:
      "A clear self-concept that allows you to lead from who you are becoming rather than reacting from who you have been.",
  },
  {
    num: "02",
    codename: "PRESENCE",
    framework: "The Optimisation Cycle",
    descriptor: "Bandwidth & Regulation",
    slug: "presence",
    description:
      "The Optimisation Cycle builds the internal regulation and personal bandwidth that allows you to lead consistently from your best state — rather than from depletion, reactivity, or accumulated noise.",
    outcome:
      "Optimised personal capacity that protects your leadership quality regardless of external pressure or pace.",
  },
  {
    num: "03",
    codename: "INTELLIGENCE",
    framework: "The Leadership Codes",
    descriptor: "Clarity & Decision Intelligence",
    slug: "intelligence",
    description:
      "The Leadership Codes develop the decision intelligence and leadership clarity that turns reactive choices into deliberate, high-quality standards — made fast, and held consistently across the business.",
    outcome:
      "Decisions made from a clear internal code rather than urgency, approval-seeking, or external pressure.",
  },
];

const OUTCOMES = [
  "You make decisions faster and with less emotional noise.",
  "You stop rescuing what your team should own.",
  "You hold standards without over-explaining them.",
  "You protect your focus instead of donating it to every urgency.",
  "You lead the business from clarity instead of constant pressure.",
];

export default function ElevateYourSelfPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-28 md:py-40">
        <Container>
          <div className="max-w-2xl">
            <div className="mb-8">
              <div className="w-10 h-px bg-muted-rose mb-5" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-muted-rose">
                Identity Lever
              </p>
            </div>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.06] text-ivory mb-5 tracking-tight">
              Elevate Your Self
            </h1>
            <p className="font-sans text-lg md:text-xl text-warm-stone font-medium mb-6 leading-snug">
              Lead from clarity instead of pressure.
            </p>
            <p className="font-sans text-base md:text-lg text-ivory/70 leading-relaxed mb-12">
              This lever strengthens how you think, decide, regulate, and show
              up as the leader of a $1M–$5M business. Because if your internal
              operating system is unclear, every decision, hire, offer, and
              system downstream becomes heavier than it needs to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button href="/courses" variant="primary">
                Choose Identity Modules
              </Button>
              <Button href={CTA_LINKS.diagnostic} variant="ghost" external>
                Take the Diagnostic
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── LEVER NAV ───────────────────────────────────────────────────── */}
      <LeverNav activeLever="identity" />

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
              Your Business Can Only Scale as Cleanly as You Lead
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                At this stage, the bottleneck is rarely just the team, the
                offer, or the systems.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                It is often the founder&apos;s internal operating pattern.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                If you are still leading from urgency, over-responsibility,
                approval-seeking, or constant context switching, the business
                will keep organising itself around your pressure instead of your
                standards.
              </p>
              <p className="font-sans text-base md:text-lg font-semibold text-obsidian leading-snug border-l-2 border-muted-rose pl-5">
                This lever helps you shift from reactive founder to grounded CEO.
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
                <div className="w-6 h-0.5 bg-muted-rose mb-5" />
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
              Inside Elevate Your Self
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              This lever contains three modules that rebuild how you lead from
              the inside out.
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
                  <div className="w-6 h-0.5 bg-muted-rose" />
                </div>

                {/* Row 2 — Number + codename */}
                <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-muted-rose pb-3">
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
                <p className="font-sans text-sm md:text-base text-obsidian/65 leading-relaxed pb-6">
                  {mod.description}
                </p>

                {/* Row 5 — Divider */}
                <div className="h-px bg-warm-stone/60 w-full" />

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
              Choose Identity Modules
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
              What Changes When Your Identity Is No Longer the Bottleneck
            </h2>
          </div>
          <ul className="max-w-2xl space-y-5">
            {OUTCOMES.map((outcome, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="font-sans text-muted-rose shrink-0 mt-1 select-none">
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
              Identity Is the First Layer of Leverage
            </h2>
            <div className="space-y-5 mb-10">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Structure and leverage only work when the leader can hold them.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                If your identity is reactive, your systems will be reactive. If
                your standards are unclear, your team will inherit that
                ambiguity. If your focus is constantly fragmented, every lever
                becomes harder to pull.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Elevate Your Self gives the rest of the system somewhere stable
                to land.
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
        heading="Ready to Lead From a Clearer Standard?"
        subheading="Start with the Identity lever, or take the diagnostic to confirm where your business is really bottlenecked."
        primaryLabel="Choose Identity Modules"
        primaryHref="/courses"
        secondaryLabel="Take the Diagnostic"
        secondaryHref="/diagnostic"
      />
    </>
  );
}
