import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

// ─── Placeholder data ────────────────────────────────────────────────────────



const STEPS = [
  {
    number: "01",
    title: "Take the Diagnostic",
    body: "Placeholder step description — what the diagnostic reveals and why it matters as a starting point.",
  },
  {
    number: "02",
    title: "Identify Your Focus Area",
    body: "Placeholder step description — how the diagnostic results map to specific courses and pillars.",
  },
  {
    number: "03",
    title: "Work Through the System",
    body: "Placeholder step description — how the nine courses build on each other in sequence.",
  },
  {
    number: "04",
    title: "Build the Business That Runs Itself",
    body: "Placeholder step description — the outcome and transformation after completing the system.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Who is The Elevated Leader for?",
    answer:
      "Placeholder answer describing the ideal client — business owners, founders, or senior leaders at a specific stage of growth.",
  },
  {
    question: "How does the 9-course system work?",
    answer:
      "Placeholder answer explaining the structure of the system — how the courses are sequenced and how they build on each other.",
  },
  {
    question: "What is the Founding Cohort?",
    answer:
      "Placeholder answer explaining the founding cohort offer — the exclusive early-access pricing, bonuses, and what makes it different.",
  },
  {
    question: "How long does it take to complete?",
    answer:
      "Placeholder answer about time commitment — the expected pace, the minimum viable progress per week, and typical timelines.",
  },
  {
    question: "What if I'm not sure where to start?",
    answer:
      "Placeholder answer pointing to the diagnostic as the entry point and clarifying how it removes the guesswork.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-36 md:py-52">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

            {/* Copy */}
            <div>
              {/* Eyebrow with bronze accent line */}
              <div className="mb-9">
                <div className="w-10 h-px bg-bronze mb-5" />
                <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-ivory">
                  For $1–5M Female Founders
                </p>
              </div>

              <h1 className="font-heading text-[48px] md:text-[56px] lg:text-[64px] leading-[1.02] text-ivory mb-8 tracking-[-0.02em]">
                How Elevated Is Your Leadership for a $1–5M Business?
              </h1>
              <p className="font-sans text-base md:text-lg text-ivory/75 mb-6 leading-relaxed">
                In just 7 minutes, the Elevated Leader Diagnostic scores your
                identity, structure, and leverage across 9 dimensions so you can
                see exactly what&apos;s stopping your business from running
                without you.
              </p>
              <p className="font-sans text-sm text-warm-stone mb-12 leading-relaxed">
                Designed specifically for female founders leading $1–5M
                companies who are done with generic advice and ready for clear,
                grounded direction.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <Button href="/diagnostic" variant="primary" className="px-10 py-5">
                  Take the Diagnostic
                </Button>
                <Button href="/courses" variant="ghost" className="px-10 py-5">
                  Browse the 9-Course System
                </Button>
              </div>
              <p className="font-sans text-[11px] text-ivory/35 leading-relaxed">
                No sales calls. Instant results. Built by a private strategy
                studio behind The Elevated Leader method.
              </p>
            </div>

            {/* Scorecard Visual */}
            <div className="bg-ivory border border-warm-stone rounded p-10 lg:p-14">
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-bronze mb-1.5">
                Elevated Leader
              </p>
              <p className="font-sans text-base font-semibold text-obsidian mb-10">
                Leadership Diagnostic
              </p>

              <div className="space-y-8 mb-10">
                {[
                  { label: "Identity", note: "Who you are as a leader" },
                  { label: "Structure", note: "How your business operates" },
                  { label: "Leverage", note: "How you multiply your time" },
                ].map((dim) => (
                  <div key={dim.label} className="space-y-2.5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-sans text-sm font-semibold text-obsidian">
                        {dim.label}
                      </span>
                      <span className="font-sans text-xs tabular-nums text-obsidian/40 shrink-0">
                        — /10
                      </span>
                    </div>
                    <div className="h-px bg-warm-stone w-full" />
                    <p className="font-sans text-[11px] text-warm-stone leading-snug">
                      {dim.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-warm-stone pt-7 space-y-5 mb-7">
                <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-bronze pt-0.5">
                    9 Dimensions
                  </span>
                  <p className="font-sans text-xs text-obsidian/60 leading-relaxed">
                    Scored across identity, structure, and leverage
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
                  <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-bronze pt-0.5">
                    30–90 Day Focus
                  </span>
                  <p className="font-sans text-xs text-obsidian/60 leading-relaxed">
                    Your personalised priority action area
                  </p>
                </div>
              </div>

              <div className="border-t border-warm-stone pt-7">
                <p className="font-sans text-[11px] text-obsidian/50 leading-relaxed">
                  Take the diagnostic to reveal your scores and see where to
                  focus first.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 2. WHY THIS EXISTS ──────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone py-24 md:py-36">
        <Container>

          {/* Heading + body */}
          <div className="max-w-2xl mb-16 md:mb-20">
            <Eyebrow>Why This Exists</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              What Got You to 7 Figures Won&apos;t Get You to a Self-Running
              Business
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed max-w-xl">
              Most of the business advice aimed at women is built for getting to
              six figures or crossing the first million. Almost none of it speaks
              to what happens next—when you&apos;re leading a real company, with
              real people, real complexity, and a calendar that never seems to
              let up.
            </p>
          </div>

          {/* Intro line */}
          <p className="font-sans text-sm font-semibold text-obsidian tracking-wider border-l-2 border-bronze pl-4 mb-10">
            At $1–5M, your problems are different:
          </p>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 md:mb-24">
            <Card className="bg-warm-stone/10 rounded border-2 shadow-sm hover:shadow transition-shadow duration-200 p-12 md:p-14">
              <div className="w-10 h-0.5 bg-bronze mb-8" />
              <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                You&apos;ve outgrown &ldquo;hustle harder&rdquo; and vague
                &ldquo;CEO mindset&rdquo; platitudes.
              </p>
            </Card>
            <Card className="bg-warm-stone/10 rounded border-2 shadow-sm hover:shadow transition-shadow duration-200 p-12 md:p-14">
              <div className="w-10 h-0.5 bg-bronze mb-8" />
              <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                You&apos;ve hired a team… but you&apos;re still the brain,
                bottleneck, and safety net.
              </p>
            </Card>
            <Card className="bg-warm-stone/10 rounded border-2 shadow-sm hover:shadow transition-shadow duration-200 p-12 md:p-14">
              <div className="w-10 h-0.5 bg-bronze mb-8" />
              <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                You&apos;ve tried adding tools, offers, and tactics—and somehow
                it all feels heavier.
              </p>
            </Card>
          </div>

          {/* Closing copy */}
          <div className="max-w-2xl border-t-2 border-warm-stone pt-12 md:pt-14">
            <p className="font-sans text-xl md:text-2xl font-semibold text-obsidian mb-4 leading-snug">
              The Elevated Leader exists for this stage.
            </p>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed mb-8">
              Not for beginners, not for hobby businesses—but for the women
              already in the arena, ready for a business that runs without them.
            </p>
            <Link
              href="/method"
              className="font-sans text-sm font-semibold text-bronze underline underline-offset-4 decoration-1 hover:text-obsidian transition-colors duration-150"
            >
              See how the method works →
            </Link>
          </div>

        </Container>
      </Section>

      {/* ── 3. DIAGNOSTIC OVERVIEW ──────────────────────────────────────── */}
      <Section className="bg-warm-stone/20 border-t border-warm-stone">
        <Container>

          {/* Header */}
          <div className="max-w-2xl mb-16 md:mb-20">
            <Eyebrow>The Elevated Leader Method</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              Diagnose Before You Decide What to Fix
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed mb-5">
              Most founders try to solve what feels urgent. The problem is,
              urgency rarely equals importance.
            </p>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              The Elevated Leader Diagnostic shows you exactly where your
              business is breaking down across three core levers:
            </p>
          </div>

          {/* Three lever blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 md:mb-24">
            <Card className="rounded p-12 md:p-14 shadow hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-0.5 bg-muted-rose mb-8" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-rose mb-6">
                Identity
              </p>
              <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian mb-5 leading-snug">
                Elevate Your Self
              </h3>
              <p className="font-sans text-sm md:text-base text-obsidian/65 leading-relaxed">
                How you think, decide, and show up as a leader. This is where
                clarity, standards, and self-leadership either expand your
                business—or quietly cap it.
              </p>
            </Card>

            <Card className="rounded p-12 md:p-14 shadow hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-0.5 bg-slate mb-8" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-slate mb-6">
                Structure
              </p>
              <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian mb-5 leading-snug">
                Streamline Your Structure
              </h3>
              <p className="font-sans text-sm md:text-base text-obsidian/65 leading-relaxed">
                How your business operates day-to-day. Systems, roles,
                workflows, and decision paths—this is where complexity either
                compounds or collapses.
              </p>
            </Card>

            <Card className="rounded p-12 md:p-14 shadow hover:shadow-md transition-shadow duration-200">
              <div className="w-10 h-0.5 bg-eucalyptus mb-8" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-eucalyptus mb-6">
                Leverage
              </p>
              <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian mb-5 leading-snug">
                Unlock Your Leverage
              </h3>
              <p className="font-sans text-sm md:text-base text-obsidian/65 leading-relaxed">
                How you multiply your time and impact. This is where delegation,
                ownership, and scale either free you—or keep everything
                dependent on you.
              </p>
            </Card>
          </div>

          {/* Supporting line */}
          <p className="font-sans text-base md:text-lg font-medium text-obsidian/70 border-l-2 border-bronze pl-5 max-w-xl mb-16 md:mb-20">
            Each lever is broken into three dimensions—giving you a 9-point
            diagnostic across your entire business.
          </p>

          {/* CTA */}
          <div className="border-t border-warm-stone pt-12 md:pt-16">
            <p className="font-sans text-base md:text-lg font-semibold text-obsidian mb-8 leading-snug">
              Start with the diagnostic. Then build what actually matters.
            </p>
            <Button href="/diagnostic" variant="primary">
              Take the Diagnostic
            </Button>
          </div>

        </Container>
      </Section>

      {/* ── 4. SYSTEM BREAKDOWN ──────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>

          {/* Header */}
          <div className="max-w-2xl mb-16 md:mb-20">
            <Eyebrow>The 9-Course System</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              Build a Business That Runs Without You
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              Each lever is broken into three focused modules. Together, they
              form a complete system designed to remove you as the bottleneck
              and build a business that operates with clarity, structure, and
              leverage.
            </p>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 md:mb-24">

            {/* Identity */}
            <Card className="rounded p-12 md:p-14 shadow-sm hover:shadow transition-shadow duration-200">
              <div className="w-10 h-0.5 bg-muted-rose mb-8" />
              <div className="min-h-[5.5rem]">
                <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-rose mb-4">
                  Identity
                </p>
                <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian leading-snug">
                  Elevate Your Self
                </h3>
              </div>
              <div className="mt-6 pt-6 border-t border-warm-stone space-y-3.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[9px] font-normal tabular-nums text-warm-stone shrink-0 w-5">01</span>
                  <p className="font-sans text-sm font-medium text-obsidian/80 leading-snug">Leadership Identity</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[9px] font-normal tabular-nums text-warm-stone shrink-0 w-5">02</span>
                  <p className="font-sans text-sm font-medium text-obsidian/80 leading-snug">Decision Standards</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[9px] font-normal tabular-nums text-warm-stone shrink-0 w-5">03</span>
                  <p className="font-sans text-sm font-medium text-obsidian/80 leading-snug">Personal Operating System</p>
                </div>
              </div>
            </Card>

            {/* Structure */}
            <Card className="rounded p-12 md:p-14 shadow-sm hover:shadow transition-shadow duration-200">
              <div className="w-10 h-0.5 bg-slate mb-8" />
              <div className="min-h-[5.5rem]">
                <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-slate mb-4">
                  Structure
                </p>
                <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian leading-snug">
                  Streamline Your Structure
                </h3>
              </div>
              <div className="mt-6 pt-6 border-t border-warm-stone space-y-3.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[9px] font-normal tabular-nums text-warm-stone shrink-0 w-5">04</span>
                  <p className="font-sans text-sm font-medium text-obsidian/80 leading-snug">Roles &amp; Responsibilities</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[9px] font-normal tabular-nums text-warm-stone shrink-0 w-5">05</span>
                  <p className="font-sans text-sm font-medium text-obsidian/80 leading-snug">Systems &amp; Workflows</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[9px] font-normal tabular-nums text-warm-stone shrink-0 w-5">06</span>
                  <p className="font-sans text-sm font-medium text-obsidian/80 leading-snug">Operational Clarity</p>
                </div>
              </div>
            </Card>

            {/* Leverage */}
            <Card className="rounded p-12 md:p-14 shadow-sm hover:shadow transition-shadow duration-200">
              <div className="w-10 h-0.5 bg-eucalyptus mb-8" />
              <div className="min-h-[5.5rem]">
                <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-eucalyptus mb-4">
                  Leverage
                </p>
                <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian leading-snug">
                  Unlock Your Leverage
                </h3>
              </div>
              <div className="mt-6 pt-6 border-t border-warm-stone space-y-3.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[9px] font-normal tabular-nums text-warm-stone shrink-0 w-5">07</span>
                  <p className="font-sans text-sm font-medium text-obsidian/80 leading-snug">Delegation &amp; Ownership</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[9px] font-normal tabular-nums text-warm-stone shrink-0 w-5">08</span>
                  <p className="font-sans text-sm font-medium text-obsidian/80 leading-snug">Team Leverage</p>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-sans text-[9px] font-normal tabular-nums text-warm-stone shrink-0 w-5">09</span>
                  <p className="font-sans text-sm font-medium text-obsidian/80 leading-snug">Scale Architecture</p>
                </div>
              </div>
            </Card>

          </div>

          {/* Supporting line */}
          <p className="font-sans text-base md:text-lg font-medium text-obsidian/70 border-l-2 border-bronze pl-5 max-w-xl mb-12 md:mb-14">
            Take what you need—or build the full system.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Button href="/courses" variant="primary">
              Explore the Full System
            </Button>
            <Button href="/diagnostic" variant="secondary">
              Take the Diagnostic
            </Button>
          </div>

        </Container>
      </Section>

      {/* ── 5. FOUNDING COHORT ──────────────────────────────────────────── */}
      <section className="bg-obsidian py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-bronze mb-4">
              Limited Availability
            </p>
            <h2 className="font-heading text-[32px] md:text-[44px] leading-tight text-ivory mb-5">
              Join the Founding Cohort
            </h2>
            <p className="font-sans text-base md:text-lg text-warm-stone mb-10 leading-relaxed">
              Placeholder description of the Founding Cohort offer — the
              exclusive early-access pricing, what is included, how many spaces
              are available, and why now is the moment to act.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={CTA_LINKS.checkout} variant="primary" external>
                Secure Your Place
              </Button>
              <Button href="/flagship" variant="ghost">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. HOW IT WORKS ─────────────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-xl mb-14">
            <Eyebrow>The Process</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              How It Works
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/60 leading-relaxed">
              Placeholder intro — a simple overview of the journey from first
              touch to transformation, in four clear steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-6">
                <span className="font-sans text-xs font-semibold tracking-widest text-bronze shrink-0 pt-1.5">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-obsidian mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14 lg:gap-20">
            <div>
              <Eyebrow>Common Questions</Eyebrow>
              <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
                Frequently Asked Questions
              </h2>
              <Button href="/faq" variant="secondary">
                View All FAQs
              </Button>
            </div>

            <div className="space-y-10">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="border-b border-warm-stone pb-10 last:border-b-0 last:pb-0">
                  <h3 className="font-sans font-semibold text-base md:text-lg text-obsidian mb-3">
                    {item.question}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────── */}
      <CTASection
        heading="Ready to lead differently?"
        subheading="Take the free diagnostic and discover exactly where to focus first."
        primaryLabel="Take the Diagnostic"
        primaryHref={CTA_LINKS.diagnostic}
        primaryExternal
        secondaryLabel="Explore the System"
        secondaryHref="/courses"
      />
    </>
  );
}
