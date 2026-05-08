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

const ARCHITECTURAL_OUTCOMES = [
  {
    title: "Clear Leadership",
    description: "Lead from clarity instead of carrying constant emotional pressure.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <polygon points="11,2 20,11 11,20 2,11" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Self-Running Operations",
    description: "Systems maintain consistency without your constant involvement.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M18 11a7 7 0 1 1-2.1-5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <polyline points="16,3 16,8 11,8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Team Accountability",
    description: "Ownership becomes distributed instead of flowing back through you.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="4" r="2" stroke="currentColor" strokeWidth="1" />
        <circle cx="4" cy="17" r="2" stroke="currentColor" strokeWidth="1" />
        <circle cx="18" cy="17" r="2" stroke="currentColor" strokeWidth="1" />
        <line x1="11" y1="6" x2="5.2" y2="15.3" stroke="currentColor" strokeWidth="1" />
        <line x1="11" y1="6" x2="16.8" y2="15.3" stroke="currentColor" strokeWidth="1" />
        <line x1="6" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Sustainable Growth",
    description: "Revenue scales without complexity consuming the business.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <polyline points="2,18 8,12 13,15 20,6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="15,6 20,6 20,11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Spacious Leadership",
    description: "Success no longer depends entirely on your nervous system.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M7,2 L2,2 L2,7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15,2 L20,2 L20,7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7,20 L2,20 L2,15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15,20 L20,20 L20,15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const STAGES = [
  {
    num: "01",
    title: "See the Bottleneck",
    body: "You stop treating overwhelm as a time problem and finally see the operating pattern creating it.",
  },
  {
    num: "02",
    title: "Rebuild the Foundation",
    body: "Identity, structure, and leverage begin operating together instead of against each other.",
  },
  {
    num: "03",
    title: "Remove Founder Dependency",
    body: "The business stops routing everything back through you.",
  },
  {
    num: "04",
    title: "Scale with Spaciousness",
    body: "Growth no longer increases pressure, complexity, and emotional weight.",
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
      <section className="relative overflow-hidden" style={{ backgroundColor: "#1A1618" }}>
        <div className="flex flex-col lg:flex-row lg:min-h-[820px] xl:min-h-[880px]">

          {/* Copy — z-10 floats above the background image on desktop */}
          <div className="relative z-10 flex items-center lg:w-[44%] px-6 md:px-10 lg:px-16 py-24 md:py-28 lg:py-20">
            <div className="w-full max-w-[560px]">
              {/* Eyebrow */}
              <div className="mb-9">
                <div className="w-10 h-px bg-warm-stone/40 mb-5" />
                <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-warm-stone">
                  For $1–5M Female Founders
                </p>
              </div>

              <h1 className="font-heading text-[48px] md:text-[56px] lg:text-[60px] leading-[1.02] text-ivory mb-8 tracking-[-0.02em]">
                How Elevated Is Your Leadership for a $1–5M Business?
              </h1>
              <p className="font-sans text-base md:text-lg text-ivory/75 mb-5 leading-relaxed max-w-[480px]">
                In just 7 minutes, the Elevated Leader Diagnostic scores your
                identity, structure, and leverage across 9 dimensions. You&apos;ll
                see exactly what&apos;s stopping your business from running
                without you.
              </p>
              <p className="font-sans text-base md:text-lg text-warm-stone mb-5 leading-relaxed max-w-[480px]">
                Most businesses at this level don&apos;t break because of
                strategy. They break because the founder becomes the bottleneck.
              </p>
              <p className="font-sans text-sm text-warm-stone mb-12 leading-relaxed max-w-[440px]">
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
          </div>

          {/* Right — editorial atmosphere */}
          <div
            className="relative h-[64vw] md:h-[52vw] overflow-hidden lg:absolute lg:right-0 lg:inset-y-0 lg:w-[62%]"
            style={{ backgroundColor: "#1A1618" }}
          >
            <Image
              src="/images/editorial/homepage-editorial-hero.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover object-[center_20%] lg:object-contain lg:object-top"
              priority
            />

            {/* Left atmospheric blend — warm dark into text column */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to right, #1A1618 0%, transparent 22%)" }}
              aria-hidden="true"
            />

            {/* Mobile top dissolve — image emerges from atmosphere */}
            <div
              className="absolute top-0 left-0 right-0 h-20 pointer-events-none lg:hidden"
              style={{ background: "linear-gradient(to bottom, #1A1618 0%, transparent 100%)" }}
              aria-hidden="true"
            />

            {/* Bottom dissolve — atmospheric editorial continuity */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{ background: "linear-gradient(to top, #1A1618 0%, transparent 100%)" }}
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
            <Card className="bg-warm-stone/15 p-12 md:p-14">
              <div className="w-10 h-0.5 bg-bronze mb-8" />
              <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                You&apos;ve outgrown &ldquo;hustle harder&rdquo; and vague
                &ldquo;CEO mindset&rdquo; platitudes.
              </p>
            </Card>
            <Card className="bg-warm-stone/15 p-12 md:p-14">
              <div className="w-10 h-0.5 bg-bronze mb-8" />
              <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                You&apos;ve hired a team… but you&apos;re still the brain,
                bottleneck, and safety net.
              </p>
            </Card>
            <Card className="bg-warm-stone/15 p-12 md:p-14">
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

      {/* ── CINEMATIC INTERRUPTION — Clarity Atmosphere ─────────────────── */}
      <section
        className="relative overflow-hidden h-[65vh] md:h-[78vh]"
        style={{ backgroundColor: "#1A1618" }}
      >
        {/* Full-bleed cinematic image — ambient drift */}
        <div
          className="absolute inset-0"
          style={{ animation: "clarityDrift 28s ease-in-out infinite alternate" }}
        >
          <Image
            src="/images/editorial/editorial-interruption-clarity.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Light atmospheric overlay — just enough for text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(12, 10, 9, 0.30)" }}
          aria-hidden="true"
        />

        {/* Edge vignette — subtle framing only */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, rgba(10, 8, 7, 0.18) 100%)" }}
          aria-hidden="true"
        />

        {/* Top atmospheric blend — soft ivory dissolve */}
        <div
          className="absolute top-0 left-0 right-0 h-8 md:h-12 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(246,241,233,0.45) 0%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* Bottom atmospheric blend — soft ivory dissolve */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 md:h-12 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(246,241,233,0.45) 0%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* Editorial statement — slightly left of center */}
        <div className="relative z-10 h-full flex items-center pl-6 sm:pl-12 md:pl-[15%] lg:pl-[18%]">
          <div>
            <div
              className="w-8 h-px mb-5 md:mb-6"
              style={{ backgroundColor: "rgba(184,134,76,0.55)" }}
              aria-hidden="true"
            />
            <p className="font-heading text-[22px] md:text-[30px] lg:text-[36px] leading-[1.2] text-ivory text-left max-w-[240px] md:max-w-[280px] lg:max-w-[360px] tracking-tight">
              Clarity changes the emotional temperature of a business.
            </p>
            <div
              className="w-8 h-px mt-5 md:mt-6"
              style={{ backgroundColor: "rgba(184,134,76,0.55)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

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
            <Card className="p-12 md:p-14 flex flex-col">
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

            <Card className="p-12 md:p-14 flex flex-col">
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

            <Card className="p-12 md:p-14 flex flex-col">
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
      <section className="relative py-24 md:py-36" style={{ backgroundColor: "#1F2633" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(184,134,76,0.052) 0%, transparent 68%)",
          }}
          aria-hidden="true"
        />
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

      {/* ── 7. THE PATHWAY ──────────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>

          {/* Header */}
          <div className="max-w-2xl mb-20 md:mb-28">
            <Eyebrow>The Pathway</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-6">
              From Founder Dependence to Operational Freedom
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/60 leading-relaxed max-w-xl">
              The Elevated Leader method is designed to remove you as the centre
              of the business — without sacrificing growth, standards, or control.
            </p>
          </div>

          {/* Transformation progression */}
          <div className="relative">

            {/* Desktop horizontal connector — sits behind the node markers */}
            <div
              className="hidden md:block absolute left-0 right-0 h-px bg-bronze/20"
              style={{ top: "7px" }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-8 lg:gap-10">
              {STAGES.map((stage) => (
                <div key={stage.num}>

                  {/* Node marker */}
                  <div className="relative z-10 w-3.5 h-3.5 rounded-full border border-bronze/50 bg-ivory flex items-center justify-center mb-10 md:mb-12">
                    <div className="w-[5px] h-[5px] rounded-full bg-bronze/60" />
                  </div>

                  {/* Stage number */}
                  <p className="font-sans text-[9px] font-semibold tracking-[0.4em] uppercase text-bronze/55 mb-5">
                    {stage.num}
                  </p>

                  {/* Stage title */}
                  <h3 className="font-sans font-semibold text-[17px] md:text-[18px] text-obsidian leading-snug tracking-tight mb-5">
                    {stage.title}
                  </h3>

                  {/* Body */}
                  <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
                    {stage.body}
                  </p>

                </div>
              ))}
            </div>

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

      {/* ── THE RESULT ───────────────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl mb-16 md:mb-20">
            <Eyebrow>The Result</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              A Business That Runs Itself<br className="hidden md:block" />
              Is Built Intentionally
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              When identity, structure, and leverage align, the business develops
              its own momentum. Clarity replaces urgency. Ownership distributes
              across the team. Systems sustain results without your presence.
              Growth becomes something the business does — not something you carry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {ARCHITECTURAL_OUTCOMES.map((outcome) => (
              <div
                key={outcome.title}
                className="group border border-warm-stone p-7 xl:p-8 hover:border-bronze/50 transition-colors duration-300"
              >
                <div className="text-obsidian/40 group-hover:text-obsidian/60 transition-colors duration-300 mb-6">
                  {outcome.icon}
                </div>
                <div className="w-4 h-px bg-bronze mb-5" />
                <h3 className="font-sans font-semibold text-[14px] md:text-[15px] text-obsidian leading-snug mb-3 tracking-wide">
                  {outcome.title}
                </h3>
                <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

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
