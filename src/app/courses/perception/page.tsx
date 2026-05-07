import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "PERCEPTION — The Evolution Model | Elevate Your Self | The Elevated Leader",
  description:
    "PERCEPTION is the identity recalibration module inside Elevate Your Self. Map the unconscious operating model shaping how you lead, carry pressure, and move through your business.",
};

const MODULE_PRICE = 147;
const LEVER_PRICE = 397;

const EVOLUTION_PAIRS = [
  { before: "Reactive", after: "Regulated" },
  { before: "Performing", after: "Embodied" },
  { before: "Over-functioning", after: "Structured" },
  { before: "Pressure-led", after: "Clarity-led" },
  { before: "Controlling", after: "Trusting" },
  { before: "Fragmented", after: "Sovereign" },
];

const CHANGES = [
  "Recognise the unconscious operating loops that have been driving your leadership",
  "Separate your sense of self-worth from your output, performance, and results",
  "Lead from grounded clarity rather than urgency, approval-seeking, or control",
  "Create internal spaciousness that was previously unavailable under constant pressure",
  "Regulate the internal pressure that has become a permanent background state",
  "Stop carrying the business psychologically outside of working hours",
  "Build the self-trust that allows you to hold standards without over-managing",
  "Shift from reactive leadership — shaped by circumstance — into intentional leadership",
];

const DELIVERABLES = [
  {
    title: "Video Lessons",
    description:
      "Deeply considered video content that moves at the pace of real understanding — not a content library to consume, but a guided recalibration process.",
  },
  {
    title: "The Evolution Model Framework",
    description:
      "A structured map of the identity layers driving your current leadership — and the precise architecture of who you are becoming.",
  },
  {
    title: "Identity Recalibration Exercises",
    description:
      "Practical, psychologically precise exercises designed to surface the unconscious patterns and begin replacing them with deliberate leadership identity.",
  },
  {
    title: "Leadership Integration Journal",
    description:
      "A guided reflection system that moves insights from intellectual understanding into lived experience — where they can actually change behaviour.",
  },
  {
    title: "Nervous System Awareness Practices",
    description:
      "Somatic and regulatory practices that support the internal environment in which lasting identity evolution becomes possible.",
  },
  {
    title: "Strategic Implementation Guide",
    description:
      "The bridge between inner recalibration and outer leadership — translating identity shifts into practical changes in how you operate and lead.",
  },
];

const FOR_WHOM = [
  "You appear highly capable externally — and are internally exhausted from sustaining it",
  "You carry the business psychologically even when you are not working",
  "You have built success without building spaciousness",
  "You feel emotionally responsible for everything that moves inside the business",
  "You struggle to switch off — not from lack of desire, but because the pressure feels constant",
  "You feel trapped inside the role you created, even though it was everything you worked toward",
  "You secretly sense that your internal operating system is no longer sustainable at this scale",
  "You have done the strategy work. Something deeper is still running the show.",
];

const RELATED = [
  {
    num: "02",
    codename: "PRESENCE",
    framework: "The Optimisation Cycle",
    descriptor: "Bandwidth & Regulation",
    slug: "presence",
    description:
      "Build the internal regulation and personal bandwidth that allows you to lead consistently from your best state — rather than from depletion, reactivity, or accumulated noise.",
  },
  {
    num: "03",
    codename: "INTELLIGENCE",
    framework: "The Leadership Codes",
    descriptor: "Clarity & Decision Intelligence",
    slug: "intelligence",
    description:
      "Develop the decision intelligence and leadership clarity that turns reactive choices into deliberate, high-quality standards — made fast, and held consistently.",
  },
];

export default function PerceptionPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-28 md:py-44">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-12" aria-label="Breadcrumb">
            <Link
              href="/courses"
              className="font-sans text-[10px] text-ivory/30 hover:text-ivory/60 transition-colors duration-150"
            >
              Courses
            </Link>
            <span className="font-sans text-[10px] text-ivory/20" aria-hidden="true">→</span>
            <Link
              href="/courses/elevate-your-self"
              className="font-sans text-[10px] text-muted-rose/60 hover:text-muted-rose transition-colors duration-150"
            >
              Elevate Your Self
            </Link>
            <span className="font-sans text-[10px] text-ivory/20" aria-hidden="true">→</span>
            <span className="font-sans text-[10px] text-ivory/40">PERCEPTION</span>
          </nav>

          <div className="max-w-3xl">
            {/* Module label */}
            <div className="mb-10">
              <div className="w-10 h-px bg-muted-rose mb-5" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-muted-rose">
                Identity Lever — Module 01
              </p>
            </div>

            <p className="font-sans text-[11px] font-bold tracking-[0.3em] uppercase text-muted-rose mb-4">
              PERCEPTION
            </p>

            <h1 className="font-heading text-[42px] md:text-[62px] leading-[1.05] text-ivory mb-8 tracking-tight">
              The Leader You Present and the Self You Inhabit Are Not the Same
              Woman.
            </h1>

            <p className="font-sans text-lg md:text-xl text-warm-stone font-medium mb-5 leading-snug max-w-2xl">
              Most leadership work addresses behaviour. PERCEPTION goes beneath
              it.
            </p>

            <p className="font-sans text-base md:text-lg text-ivory/60 leading-relaxed mb-12 max-w-xl">
              This is the recalibration of the identity architecture shaping how
              you lead, carry pressure, make decisions, and move through your
              business — at the level where sustainable transformation actually
              begins.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5 mb-8">
              {/* Primary CTA — scrolls to pricing */}
              <a
                href="#purchase"
                className="font-sans font-semibold tracking-widest uppercase bg-bronze text-ivory hover:bg-rosewood transition-colors duration-200 text-[11px] px-6 py-3 sm:text-sm sm:px-8 sm:py-4 inline-block"
              >
                Enrol in PERCEPTION
              </a>
              <Button href="/courses/elevate-your-self" variant="ghost">
                Explore The Lever
              </Button>
            </div>

            <p className="font-sans text-xs text-ivory/30 leading-relaxed">
              ${MODULE_PRICE} for this module &nbsp;·&nbsp; or complete Elevate
              Your Self from ${LEVER_PRICE}
            </p>
          </div>
        </Container>
      </section>

      {/* ── EDITORIAL VISUAL ─────────────────────────────────────────────── */}
      <div className="bg-obsidian overflow-hidden">
        <Image
          src="/images/editorial/perception-editorial.png"
          alt="PERCEPTION — The Evolution Model"
          width={1400}
          height={875}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* ── 2. THE REAL PROBLEM ──────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The Real Problem</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-10">
              The Problem Was Never Your Capability
            </h2>

            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Most women at this stage do not have a time problem, a
                discipline problem, or a strategy problem. They have an identity
                problem — not in the way that phrase is typically used, but at a
                far deeper and more consequential level.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                The mental load that never fully empties. The inability to
                switch off. The pressure that has become so familiar it no
                longer registers as pressure — only as normal. The
                over-responsibility that feels like commitment. The
                hyper-vigilance that reads as care.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                These are not personality traits. They are adaptations — once
                necessary, now deeply embedded in how the business runs and how
                you lead it.
              </p>
            </div>

            <div className="my-10 border-l-2 border-muted-rose pl-6 py-1">
              <p className="font-sans text-base md:text-lg font-semibold text-obsidian leading-snug">
                The business organises itself around your psychological
                architecture. If that architecture was built on proving,
                rescuing, and hyper-independence, the business will reflect that
                — regardless of how sophisticated your strategy becomes.
              </p>
            </div>

            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Achievement dependency. Over-functioning as a default. Leading
                from urgency instead of clarity. Emotional hyper-vigilance
                dressed as attention to detail. Carrying the psychological
                weight of every person, every outcome, every decision —
                because the identity underneath has not yet learned that it
                does not have to.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                This is the work that most leadership development never
                reaches. And it is precisely why most leadership development
                produces temporary change rather than permanent evolution.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. THE EVOLUTION MODEL ───────────────────────────────────────── */}
      <section className="bg-obsidian py-20 md:py-28 border-t border-warm-stone/30">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>The Framework</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-ivory mb-5">
              The Evolution Model
            </h2>
            <p className="font-sans text-base md:text-lg text-ivory/60 leading-relaxed">
              A framework for mapping the unconscious identity layers driving
              leadership behaviour — and the precise architecture of who you are
              in the process of becoming.
            </p>
          </div>

          <div className="mb-10 max-w-2xl">
            <p className="font-sans text-base md:text-lg text-ivory/60 leading-relaxed mb-5">
              Most women have built their businesses through adaptations that
              were once necessary — survival responses that became strategies,
              then habits, then identity. Proving. Rescuing. Perfectionism.
              Urgency. Control. Validation-seeking. Hyper-independence.
            </p>
            <p className="font-sans text-base md:text-lg text-ivory/60 leading-relaxed">
              These patterns are not weaknesses. They were intelligence. They
              are also, at this stage, a ceiling — because you cannot build a
              sovereign business from a survival identity.
            </p>
          </div>

          {/* Evolution pairs grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EVOLUTION_PAIRS.map((pair) => (
              <div
                key={pair.before}
                className="bg-ivory/5 border border-warm-stone/20 px-6 py-7"
              >
                <div className="flex items-center gap-4">
                  {/* Before */}
                  <div className="flex-1">
                    <p className="font-sans text-[9px] font-semibold tracking-[0.25em] uppercase text-ivory/25 mb-2">
                      Before
                    </p>
                    <p className="font-sans text-base font-medium text-ivory/35 leading-tight">
                      {pair.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    width="20"
                    height="8"
                    viewBox="0 0 20 8"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 text-muted-rose/50"
                  >
                    <path
                      d="M1 4H18M14 1L18 4L14 7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* After */}
                  <div className="flex-1 text-right">
                    <p className="font-sans text-[9px] font-semibold tracking-[0.25em] uppercase text-muted-rose mb-2">
                      After
                    </p>
                    <p className="font-sans text-base font-semibold text-ivory leading-tight">
                      {pair.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-lg">
            <p className="font-sans text-sm text-ivory/40 leading-relaxed">
              These are not aspirational labels. They are the natural result of
              identity architecture that has been deliberately mapped, examined,
              and rebuilt from its foundations.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 4. WHAT THIS MODULE CHANGES ──────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>The Shift</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              What PERCEPTION Changes
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              By the end of this module, you begin to:
            </p>
          </div>

          <ul className="max-w-2xl space-y-5">
            {CHANGES.map((item, i) => (
              <li key={i} className="flex items-start gap-5">
                <span
                  className="font-sans text-muted-rose shrink-0 mt-1 select-none"
                  aria-hidden="true"
                >
                  —
                </span>
                <span className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-14 md:mt-16 max-w-xl">
            <p className="font-sans text-base md:text-lg font-semibold text-obsidian leading-snug border-l-2 border-muted-rose pl-5">
              This is not a module about thinking differently. It is a module
              about becoming someone for whom different thinking is natural.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 5. WHAT'S INCLUDED ───────────────────────────────────────────── */}
      <Section className="bg-warm-stone/20 border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>What&apos;s Inside</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              The Assets Inside PERCEPTION
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              Every element is designed as a transformation asset — not content
              to consume, but a process to move through.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DELIVERABLES.map((item) => (
              <Card key={item.title} className="p-8 md:p-10">
                <div className="w-5 h-px bg-muted-rose mb-5" />
                <h3 className="font-sans font-semibold text-[15px] text-obsidian leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 6. WHO THIS IS FOR ───────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>Is This for You?</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian">
              This Module Is For You If&hellip;
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {FOR_WHOM.map((item, i) => (
              <Card key={i} className="p-8 md:p-10">
                <div className="w-6 h-0.5 bg-muted-rose mb-5" />
                <p className="font-sans text-base md:text-lg text-obsidian/80 leading-relaxed">
                  {item}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 7. THE COST OF STAYING ───────────────────────────────────────── */}
      <section className="bg-obsidian py-20 md:py-28 border-t border-warm-stone/30">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>A Calm Truth</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-ivory">
              What Continues If Nothing Changes
            </h2>
          </div>

          <div className="max-w-2xl space-y-6">
            <p className="font-sans text-base md:text-lg text-ivory/65 leading-relaxed">
              The identity architecture underneath does not self-correct with
              time, success, or scale. In the absence of deliberate
              recalibration, it compounds.
            </p>
            <p className="font-sans text-base md:text-lg text-ivory/65 leading-relaxed">
              Growth amplifies the pattern, not the freedom. Each new level of
              success requires more from the same internal architecture —
              producing more pressure, more emotional load, more of the feeling
              that something is permanently, quietly wrong.
            </p>
            <p className="font-sans text-base md:text-lg text-ivory/65 leading-relaxed">
              The team grows more dependent on your presence. The business
              requires more of your nervous system to hold. The emotional
              exhaustion becomes so normal it no longer registers as exhaustion
              — only as the cost of doing what you do.
            </p>
            <p className="font-sans text-base md:text-lg text-ivory/65 leading-relaxed">
              Success arrives. The internal experience of success does not. And
              over time, the gap between external achievement and internal
              spaciousness becomes the defining feature of a life built on
              survival rather than sovereignty.
            </p>

            <div className="pt-4 border-t border-warm-stone/20">
              <p className="font-sans text-base md:text-lg font-semibold text-ivory/80 leading-snug">
                This is not inevitable. It is addressable. PERCEPTION is where
                that work begins.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 8. PURCHASE OPTIONS ──────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone" id="purchase">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>Begin the Recalibration</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              Choose Your Entry Point
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              Start with PERCEPTION alone, or go deeper with the complete
              Identity lever — the integrated path through all three modules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {/* Option 1 — Module only */}
            <div className="bg-ivory border border-warm-stone p-8 md:p-10 flex flex-col">
              <div className="w-5 h-px bg-muted-rose mb-6" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-rose mb-3">
                Single Module
              </p>
              <h3 className="font-sans font-bold text-[22px] text-obsidian leading-snug mb-3">
                PERCEPTION
              </h3>
              <p className="font-sans text-sm text-obsidian/60 leading-relaxed mb-6 flex-1">
                The Evolution Model — Identity & Self-Concept. The full
                PERCEPTION module, including all frameworks, exercises, and
                integration assets.
              </p>
              <div className="border-t border-warm-stone pt-6">
                <p className="font-sans text-[12px] text-obsidian/35 mb-1">
                  Module price
                </p>
                <p className="font-sans font-bold text-3xl text-obsidian leading-none mb-6">
                  ${MODULE_PRICE}
                </p>
                {/* TODO: Replace href with module-specific Stripe checkout link */}
                <Link
                  href="/courses"
                  className="block w-full font-sans font-semibold tracking-widest uppercase bg-obsidian text-ivory hover:bg-rosewood transition-colors duration-200 text-[11px] sm:text-sm py-4 text-center"
                >
                  Enrol in PERCEPTION
                </Link>
              </div>
            </div>

            {/* Option 2 — Lever bundle (featured) */}
            <div className="bg-obsidian border-2 border-muted-rose/30 p-8 md:p-10 flex flex-col relative">
              <div className="w-5 h-px bg-muted-rose mb-6" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-rose mb-3">
                Complete Lever
              </p>
              <h3 className="font-sans font-bold text-[22px] text-ivory leading-snug mb-3">
                Elevate Your Self
              </h3>
              <p className="font-sans text-sm text-ivory/60 leading-relaxed mb-4 flex-1">
                All three Identity modules — PERCEPTION, PRESENCE, and
                INTELLIGENCE — as one integrated transformation pathway.
              </p>
              <ul className="space-y-1.5 mb-6">
                {["PERCEPTION — The Evolution Model", "PRESENCE — The Optimisation Cycle", "INTELLIGENCE — The Leadership Codes"].map((mod) => (
                  <li key={mod} className="flex items-center gap-2.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#C98C8C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-sans text-[11px] text-ivory/60 leading-snug">{mod}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-warm-stone/20 pt-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <p className="font-sans text-[12px] text-ivory/25 line-through">
                    ${MODULE_PRICE * 3}
                  </p>
                  <p className="font-sans text-[11px] font-semibold text-muted-rose">
                    Save $44
                  </p>
                </div>
                <p className="font-sans font-bold text-3xl text-ivory leading-none mb-6">
                  ${LEVER_PRICE}
                </p>
                {/* TODO: Replace href with lever-specific Stripe checkout link */}
                <Link
                  href="/courses"
                  className="block w-full font-sans font-semibold tracking-widest uppercase bg-muted-rose text-ivory hover:bg-rosewood transition-colors duration-200 text-[11px] sm:text-sm py-4 text-center"
                >
                  Complete the Lever
                </Link>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs text-obsidian/35 mt-8 max-w-sm leading-relaxed">
            Instant access after purchase. Build at your own pace. Each module
            is a permanent asset in your leadership library.
          </p>
        </Container>
      </Section>

      {/* ── 9. RELATED MODULES ───────────────────────────────────────────── */}
      <Section className="bg-warm-stone/20 border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>The Full Lever</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian">
              The Rest of Elevate Your Self
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed mt-5">
              PERCEPTION is the foundation. These two modules complete the
              identity transformation into a fully integrated leadership
              operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {RELATED.map((mod) => (
              <Card key={mod.num} className="p-8 md:p-10 flex flex-col">
                <div className="w-6 h-0.5 bg-muted-rose mb-4" />
                <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-muted-rose mb-3">
                  {mod.num} — {mod.codename}
                </p>
                <h3 className="font-sans font-bold text-[18px] md:text-[20px] text-obsidian leading-snug mb-1.5">
                  {mod.framework}
                </h3>
                <p className="font-sans text-[11px] text-obsidian/50 mb-4 leading-snug">
                  {mod.descriptor}
                </p>
                <p className="font-sans text-sm text-obsidian/60 leading-relaxed mb-6 flex-1">
                  {mod.description}
                </p>

                {/* Actions */}
                <div className="border-t border-warm-stone pt-4 flex items-center justify-between gap-3">
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
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/courses/elevate-your-self"
              className="font-sans text-sm font-semibold text-muted-rose underline underline-offset-4 decoration-1 hover:text-obsidian transition-colors duration-150"
            >
              View the complete Elevate Your Self lever →
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── 10. FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-20 md:py-36 border-t border-warm-stone/30">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-muted-rose mb-8">
              Begin Here
            </p>
            <h2 className="font-heading text-[36px] md:text-[50px] text-ivory leading-[1.08] mb-7 tracking-tight">
              The Architecture Beneath Your Leadership Has Never Been Examined.
            </h2>
            <p className="font-sans text-base md:text-lg text-warm-stone leading-relaxed mb-4 max-w-md mx-auto">
              PERCEPTION is not the beginning of another self-improvement
              project.
            </p>
            <p className="font-sans text-base md:text-lg text-ivory/50 leading-relaxed mb-12 max-w-md mx-auto">
              It is the beginning of leading from who you actually are —
              instead of the identity the pressure built.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="#purchase"
                className="font-sans font-semibold tracking-widest uppercase bg-bronze text-ivory hover:bg-rosewood transition-colors duration-200 text-[11px] px-6 py-3 sm:text-sm sm:px-8 sm:py-4"
              >
                Enrol in PERCEPTION
              </a>
              <Button href="/courses/elevate-your-self" variant="ghost">
                Explore The Lever
              </Button>
            </div>

            <Link
              href="/diagnostic"
              className="font-sans text-sm text-ivory/35 hover:text-ivory/60 transition-colors duration-150 underline underline-offset-4 decoration-1"
            >
              Not sure where to start? Take the Diagnostic →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
