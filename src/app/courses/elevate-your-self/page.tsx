import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
    title: "Leadership Identity",
    description:
      "Clarify who you are as a leader, what standards you hold, and how your identity shapes every decision inside the business.",
    outcome:
      "You stop leading from reaction and start leading from a clear internal standard.",
  },
  {
    num: "02",
    title: "Decision Standards",
    description:
      "Build a clean decision-making framework so you stop second-guessing, over-explaining, or changing direction under pressure.",
    outcome:
      "You make faster, cleaner decisions without needing constant external validation.",
  },
  {
    num: "03",
    title: "Personal Operating System",
    description:
      "Design the rhythms, boundaries, and personal structures that protect your focus, energy, and leadership capacity.",
    outcome:
      "You stop running the business from depletion and create a leadership rhythm that can actually hold growth.",
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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-x-14 md:gap-y-0 md:[grid-template-rows:repeat(7,auto)]">
            {MODULES.map((mod) => (
              <div
                key={mod.num}
                className="md:grid md:[grid-template-rows:subgrid] md:[grid-row:1/span_7]"
              >
                {/* Row 1 — Accent line */}
                <div className="pb-5">
                  <div className="w-6 h-0.5 bg-muted-rose" />
                </div>

                {/* Row 2 — Module number */}
                <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-rose pb-3">
                  {mod.num}
                </p>

                {/* Row 3 — Title */}
                <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-obsidian leading-snug pb-8">
                  {mod.title}
                </h3>

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
