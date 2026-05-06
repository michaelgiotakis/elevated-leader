import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
    title: "Roles & Responsibilities",
    description:
      "Define who owns what so your team stops waiting for you to make every call.",
    outcome:
      "People know what they own, where decisions sit, and what no longer needs to come back to you.",
  },
  {
    num: "05",
    title: "Systems & Workflows",
    description:
      "Document the processes that keep the business running without relying on memory, heroics, or constant founder input.",
    outcome:
      "Work moves with less friction because the path is visible, repeatable, and easier to improve.",
  },
  {
    num: "06",
    title: "Operational Clarity",
    description:
      "Create a clear operating picture so priorities, meetings, responsibilities, and execution rhythm stop competing with each other.",
    outcome:
      "The business becomes easier to run because the important work has a clear place to live.",
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
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-28 md:py-40">
        <Container>
          <div className="max-w-2xl">
            <div className="mb-8">
              <div className="w-10 h-px bg-slate mb-5" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-slate">
                Structure Lever
              </p>
            </div>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.06] text-ivory mb-5 tracking-tight">
              Streamline Your Structure
            </h1>
            <p className="font-sans text-lg md:text-xl text-warm-stone font-medium mb-6 leading-snug">
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
        </Container>
      </section>

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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-x-14 md:gap-y-0 md:[grid-template-rows:repeat(7,auto)]">
            {MODULES.map((mod) => (
              <div
                key={mod.num}
                className="md:grid md:[grid-template-rows:subgrid] md:[grid-row:1/span_7]"
              >
                {/* Row 1 — Accent line */}
                <div className="pb-5">
                  <div className="w-6 h-0.5 bg-slate" />
                </div>

                {/* Row 2 — Module number */}
                <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-slate pb-3">
                  {mod.num}
                </p>

                {/* Row 3 — Title */}
                <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-obsidian leading-snug tracking-tight pb-8">
                  {mod.title}
                </h3>

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
