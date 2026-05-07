import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

// ─── Placeholder data ────────────────────────────────────────────────────────



const STEPS = [
  {
    number: "01",
    title: "Diagnose the Real Bottleneck",
    body: "See exactly where your business is breaking across identity, structure, and leverage.",
  },
  {
    number: "02",
    title: "Focus on What Moves the Business",
    body: "Stop reacting to urgency. Work on the one area that actually unlocks growth.",
  },
  {
    number: "03",
    title: "Build Systems That Remove You",
    body: "Put the right structure in place so the business stops relying on you day to day.",
  },
  {
    number: "04",
    title: "Scale Without Adding Complexity",
    body: "Grow without increasing chaos, dependency, or decision load.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Who is The Elevated Leader for?",
    answer:
      "This is for founders already running a real business, typically in the $1M–$5M range, who feel like they've become the bottleneck. If you're still early-stage or figuring things out, this won't be the right fit.",
  },
  {
    question: "How does the diagnostic work?",
    answer:
      "The diagnostic takes around 7 minutes. It scores your business across identity, structure, and leverage, then shows where things are breaking down and what to focus on next.",
  },
  {
    question: "Do I need to go through everything?",
    answer:
      "No. You can start with the lever that matters most. The system is designed so you can go deep where needed without wasting time elsewhere.",
  },
  {
    question: "Why is this priced this way?",
    answer:
      "Pricing will increase as the system becomes more widely available.",
  },
  {
    question: "What happens after I purchase?",
    answer:
      "You'll get immediate access to your selected modules, along with clear direction on how to work through them based on your diagnostic results.",
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
              <p className="font-sans text-base md:text-lg text-ivory/75 mb-5 leading-relaxed">
                In just 7 minutes, the Elevated Leader Diagnostic scores your
                identity, structure, and leverage across 9 dimensions. You&apos;ll
                see exactly what&apos;s stopping your business from running
                without you.
              </p>
              <p className="font-sans text-base md:text-lg text-warm-stone mb-5 leading-relaxed">
                Most businesses at this level don&apos;t break because of
                strategy. They break because the founder becomes the bottleneck.
              </p>
              <p className="font-sans text-sm text-warm-stone mb-12 leading-relaxed">
                Designed for female founders leading $1–5M companies who are
                done with generic advice and ready for clear, grounded direction.
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
              Most business advice for women is built for getting to six figures
              or crossing the first million. Almost none of it addresses what
              comes next, when you&apos;re running a real company with real
              people, real complexity, and a calendar that never seems to let up.
            </p>
          </div>

          {/* Intro line */}
          <p className="font-sans text-sm font-semibold text-obsidian tracking-wider border-l-2 border-bronze pl-4 mb-10">
            At $1–5M, your problems are different:
          </p>

          {/* Problem cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 md:mb-24">
            <Card className="bg-warm-stone/15 rounded border-2 shadow-sm hover:shadow transition-shadow duration-200 p-12 md:p-14">
              <div className="w-10 h-0.5 bg-bronze mb-8" />
              <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                You&apos;ve outgrown &ldquo;hustle harder&rdquo; and vague
                &ldquo;CEO mindset&rdquo; platitudes.
              </p>
            </Card>
            <Card className="bg-warm-stone/15 rounded border-2 shadow-sm hover:shadow transition-shadow duration-200 p-12 md:p-14">
              <div className="w-10 h-0.5 bg-bronze mb-8" />
              <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                You&apos;ve hired a team… but you&apos;re still the brain,
                bottleneck, and safety net.
              </p>
            </Card>
            <Card className="bg-warm-stone/15 rounded border-2 shadow-sm hover:shadow transition-shadow duration-200 p-12 md:p-14">
              <div className="w-10 h-0.5 bg-bronze mb-8" />
              <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                You&apos;ve tried adding tools, offers, and tactics. And somehow
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
              Not for beginners, not for hobby businesses. Built for the women
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
            <Card className="rounded p-12 md:p-14 shadow hover:shadow-md transition-shadow duration-200 flex flex-col">
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
                business, or quietly cap it.
              </p>
              <div className="mt-6 md:mt-auto pt-5 border-t border-warm-stone/40">
                <Link
                  href="/courses/elevate-your-self"
                  className="font-sans text-sm font-medium text-bronze/75 hover:text-bronze hover:underline underline-offset-2 decoration-1 transition-colors duration-150"
                >
                  Explore Identity →
                </Link>
              </div>
            </Card>

            <Card className="rounded p-12 md:p-14 shadow hover:shadow-md transition-shadow duration-200 flex flex-col">
              <div className="w-10 h-0.5 bg-slate mb-8" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-slate mb-6">
                Structure
              </p>
              <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian mb-5 leading-snug">
                Streamline Your Structure
              </h3>
              <p className="font-sans text-sm md:text-base text-obsidian/65 leading-relaxed">
                How your business operates day-to-day. Systems, roles,
                workflows, and decision paths. This is where complexity either
                compounds or collapses.
              </p>
              <div className="mt-6 md:mt-auto pt-5 border-t border-warm-stone/40">
                <Link
                  href="/courses/streamline-your-structure"
                  className="font-sans text-sm font-medium text-bronze/75 hover:text-bronze hover:underline underline-offset-2 decoration-1 transition-colors duration-150"
                >
                  Explore Structure →
                </Link>
              </div>
            </Card>

            <Card className="rounded p-12 md:p-14 shadow hover:shadow-md transition-shadow duration-200 flex flex-col">
              <div className="w-10 h-0.5 bg-eucalyptus mb-8" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-eucalyptus mb-6">
                Leverage
              </p>
              <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian mb-5 leading-snug">
                Unlock Your Leverage
              </h3>
              <p className="font-sans text-sm md:text-base text-obsidian/65 leading-relaxed">
                How you multiply your time and impact. This is where delegation,
                ownership, and scale either free you, or keep everything
                dependent on you.
              </p>
              <div className="mt-6 md:mt-auto pt-5 border-t border-warm-stone/40">
                <Link
                  href="/courses/unlock-your-leverage"
                  className="font-sans text-sm font-medium text-bronze/75 hover:text-bronze hover:underline underline-offset-2 decoration-1 transition-colors duration-150"
                >
                  Explore Leverage →
                </Link>
              </div>
            </Card>
          </div>

          {/* Supporting line */}
          <p className="font-sans text-base md:text-lg font-medium text-obsidian/70 border-l-2 border-bronze pl-5 max-w-xl mb-16 md:mb-20">
            Each lever is broken into three dimensions, giving you a 9-point
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
              Each lever is broken into three focused modules. Together they
              form a complete system, built to remove you as the bottleneck and
              create a business that runs without you.
            </p>
          </div>

          {/* Progression layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5rem_1fr_2.5rem_1fr] gap-12 md:gap-0 mb-20 md:mb-24">

            {/* Lever 1: Identity */}
            <div className="flex flex-col">
              <div className="w-8 h-0.5 bg-muted-rose mb-6" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-rose mb-3">
                Identity
              </p>
              <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-obsidian mb-3 leading-snug">
                Elevate Your Self
              </h3>
              <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
                How you think, decide, and show up as a leader.
              </p>
              <div className="mt-8 md:mt-auto border-t border-warm-stone pt-5 space-y-3.5">
                {[
                  { num: "01", codename: "PERCEPTION", framework: "The Evolution Model" },
                  { num: "02", codename: "PRESENCE", framework: "The Optimisation Cycle" },
                  { num: "03", codename: "INTELLIGENCE", framework: "The Leadership Codes" },
                ].map((m) => (
                  <div key={m.num} className="flex items-baseline gap-3">
                    <span className="font-sans text-[9px] tabular-nums text-warm-stone shrink-0 w-4">{m.num}</span>
                    <div>
                      <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-obsidian leading-tight">{m.codename}</p>
                      <p className="font-sans text-xs text-obsidian/55 leading-snug">{m.framework}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-start justify-center pt-12 text-warm-stone/40 text-sm">
              →
            </div>

            {/* Lever 2: Structure */}
            <div className="flex flex-col">
              <div className="w-8 h-0.5 bg-slate mb-6" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-slate mb-3">
                Structure
              </p>
              <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-obsidian mb-3 leading-snug">
                Streamline Your Structure
              </h3>
              <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
                How your business runs day-to-day without depending on you.
              </p>
              <div className="mt-8 md:mt-auto border-t border-warm-stone pt-5 space-y-3.5">
                {[
                  { num: "04", codename: "ALIGNMENT", framework: "The Vision Vehicle" },
                  { num: "05", codename: "PRECISION", framework: "The One Focus" },
                  { num: "06", codename: "AWARENESS", framework: "The Altitude System" },
                ].map((m) => (
                  <div key={m.num} className="flex items-baseline gap-3">
                    <span className="font-sans text-[9px] tabular-nums text-warm-stone shrink-0 w-4">{m.num}</span>
                    <div>
                      <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-obsidian leading-tight">{m.codename}</p>
                      <p className="font-sans text-xs text-obsidian/55 leading-snug">{m.framework}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector */}
            <div className="hidden md:flex items-start justify-center pt-12 text-warm-stone/40 text-sm">
              →
            </div>

            {/* Lever 3: Leverage */}
            <div className="flex flex-col">
              <div className="w-8 h-0.5 bg-eucalyptus mb-6" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-eucalyptus mb-3">
                Leverage
              </p>
              <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-obsidian mb-3 leading-snug">
                Unlock Your Leverage
              </h3>
              <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
                How you multiply your time and scale without growing complexity.
              </p>
              <div className="mt-8 md:mt-auto border-t border-warm-stone pt-5 space-y-3.5">
                {[
                  { num: "07", codename: "FLOW", framework: "The Cruise Control" },
                  { num: "08", codename: "EMPOWER", framework: "The Autonomy Blueprint" },
                  { num: "09", codename: "HARMONISE", framework: "The Progressive Edge" },
                ].map((m) => (
                  <div key={m.num} className="flex items-baseline gap-3">
                    <span className="font-sans text-[9px] tabular-nums text-warm-stone shrink-0 w-4">{m.num}</span>
                    <div>
                      <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-obsidian leading-tight">{m.codename}</p>
                      <p className="font-sans text-xs text-obsidian/55 leading-snug">{m.framework}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Supporting line */}
          <p className="font-sans text-base md:text-lg font-medium text-obsidian/70 border-l-2 border-bronze pl-5 max-w-xl mb-12 md:mb-14">
            Take what you need, or build the full system.
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
      <section className="bg-obsidian py-24 md:py-36">
        <Container>

          {/* Header */}
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-bronze mb-6">
              Founding Access
            </p>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-ivory mb-8">
              This Isn&apos;t Built for Everyone
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-warm-stone leading-relaxed">
                The Elevated Leader isn&apos;t a mass-market program.
              </p>
              <p className="font-sans text-base md:text-lg text-warm-stone leading-relaxed">
                It&apos;s being built deliberately, with a small group of founders
                ready to lead at a higher level and build businesses that
                don&apos;t depend on them.
              </p>
              <p className="font-sans text-base md:text-lg text-warm-stone leading-relaxed">
                Right now, access is intentionally limited.
              </p>
            </div>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-16 md:mb-20">
            {/* Left */}
            <div className="border-t border-warm-stone/30 pt-10 md:pr-16 lg:pr-20">
              <h3 className="font-sans font-semibold text-lg md:text-xl text-ivory mb-6">
                Why this exists
              </h3>
              <p className="font-sans text-base text-warm-stone leading-relaxed mb-5">
                Most programs are built for reach.
                This is built for precision.
              </p>
              <p className="font-sans text-base text-warm-stone leading-relaxed mb-5">
                Rather than launching to thousands, this is being built with a
                smaller group, so the system gets refined, pressure-tested, and
                developed properly from the inside out.
              </p>
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-bronze mb-5">
                That means:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-sans text-bronze shrink-0">-</span>
                  <span className="font-sans text-base text-warm-stone">no noise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-sans text-bronze shrink-0">-</span>
                  <span className="font-sans text-base text-warm-stone">no generic advice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-sans text-bronze shrink-0">-</span>
                  <span className="font-sans text-base text-warm-stone">no watered-down frameworks</span>
                </li>
              </ul>
            </div>

            {/* Right */}
            <div className="border-t border-warm-stone/30 md:border-l border-warm-stone/30 mt-12 md:mt-0 pt-12 md:pt-10 md:pl-16 lg:pl-20">
              <h3 className="font-sans font-semibold text-lg md:text-xl text-ivory mb-6">
                What that means for you
              </h3>
              <div className="space-y-5">
                <p className="font-sans text-base text-warm-stone leading-relaxed">
                  You&apos;re accessing the full system before it&apos;s been
                  widely released.
                </p>
                <p className="font-sans text-base text-warm-stone leading-relaxed">
                  Pricing and positioning will shift as this grows.
                </p>
                <p className="font-sans text-base text-warm-stone leading-relaxed">
                  Right now, this is the entry point for founders who recognise
                  the gap and are ready to close it.
                </p>
              </div>
            </div>
          </div>

          {/* Statement */}
          <div className="max-w-2xl mb-12 md:mb-14">
            <p className="font-sans text-base md:text-lg text-warm-stone leading-relaxed mb-1">
              This is not for beginners.
            </p>
            <p className="font-sans text-base md:text-lg text-warm-stone leading-relaxed mb-8 md:mb-10">
              This is not for hobby businesses.
            </p>
            <p className="font-sans text-lg md:text-xl font-semibold text-ivory leading-snug">
              This is for founders already in motion, ready to build something
              that runs without them.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Button href="/courses" variant="primary">
              Explore the System
            </Button>
            <Button href="/diagnostic" variant="ghost">
              Take the Diagnostic
            </Button>
          </div>

        </Container>
      </section>

      {/* ── 7. HOW IT WORKS ─────────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-16 md:mb-20">
            <Eyebrow>The Process</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              How It Works
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              The path to a self-running business is clear. Most founders skip
              straight to tactics. This is the right order.
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
              <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
                Frequently Asked Questions
              </h2>
              <Button href="/faq" variant="secondary">
                View All FAQs
              </Button>
            </div>

            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </Container>
      </Section>

      {/* ── ARCHITECTURE VISUAL ──────────────────────────────────────────── */}
      <section className="bg-ivory py-20 md:py-36 border-t border-warm-stone">
        <Container>
          <div className="max-w-[1200px] mx-auto">
            <Image
              src="/images/frameworks/business-runs-itself-architecture.png"
              alt="The Self-Running Business Architecture — The Elevated Leader System"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>
        </Container>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────── */}
      <CTASection
        heading="Ready to lead differently?"
        subheading="Most founders don't need more information. They need clarity on what to fix next."
        body="Start with the diagnostic. Then build what actually matters."
        primaryLabel="Take the Diagnostic"
        primaryHref={CTA_LINKS.diagnostic}
        primaryExternal
        secondaryLabel="Explore the System"
        secondaryHref="/courses"
      />
    </>
  );
}
