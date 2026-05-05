import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

// ─── Placeholder data ────────────────────────────────────────────────────────

const PILLARS = [
  {
    id: "identity",
    label: "Identity",
    eyebrowColor: "text-muted-rose",
    heading: "Pillar One: Identity",
    body: "Placeholder copy describing the Identity pillar — who the leader is becoming and how clarity of identity drives every decision.",
  },
  {
    id: "leverage",
    label: "Leverage",
    eyebrowColor: "text-bronze",
    heading: "Pillar Two: Leverage",
    body: "Placeholder copy describing the Leverage pillar — how to build systems, delegate effectively, and stop being the bottleneck.",
  },
  {
    id: "structure",
    label: "Structure",
    eyebrowColor: "text-slate",
    heading: "Pillar Three: Structure",
    body: "Placeholder copy describing the Structure pillar — the operational architecture that allows a business to run without constant input.",
  },
];

const COURSES = [
  { number: "01", title: "Course Title Placeholder" },
  { number: "02", title: "Course Title Placeholder" },
  { number: "03", title: "Course Title Placeholder" },
  { number: "04", title: "Course Title Placeholder" },
  { number: "05", title: "Course Title Placeholder" },
  { number: "06", title: "Course Title Placeholder" },
  { number: "07", title: "Course Title Placeholder" },
  { number: "08", title: "Course Title Placeholder" },
  { number: "09", title: "Course Title Placeholder" },
];

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
      <Section className="bg-warm-stone/20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Eyebrow>Free Assessment</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              Start With the Leadership Diagnostic
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/60 mb-10 leading-relaxed">
              Placeholder description of the diagnostic — what it measures, how
              long it takes, and what the leader will know at the end of it.
            </p>
            <Button href={CTA_LINKS.diagnostic} variant="primary" external>
              Take the Free Diagnostic
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── 4. THREE PILLARS ────────────────────────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-xl mb-14">
            <Eyebrow>The Framework</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              Three Pillars of Elevated Leadership
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/60 leading-relaxed">
              Placeholder intro — the three pillars and how they form a complete
              framework for building a business that operates without the leader
              as a bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => (
              <Card key={pillar.id}>
                <p className={`font-sans text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${pillar.eyebrowColor}`}>
                  {pillar.label}
                </p>
                <h3 className="font-sans font-semibold text-xl md:text-[22px] text-obsidian mb-4 leading-snug">
                  {pillar.heading}
                </h3>
                <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed">
                  {pillar.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 5. COURSES / SYSTEM ─────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-14">
            <Eyebrow>The Complete System</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              Nine Courses. One Complete Transformation.
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/60 leading-relaxed">
              Placeholder intro — each course is a focused module inside a
              coherent system, designed to be taken in sequence or guided by
              your diagnostic results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course) => (
              <Card key={course.number} className="flex gap-5 items-start">
                <span className="font-sans text-xs font-semibold tracking-widest text-bronze shrink-0 pt-1">
                  {course.number}
                </span>
                <div>
                  <h3 className="font-sans font-semibold text-base text-obsidian mb-2">
                    {course.title}
                  </h3>
                  <p className="font-sans text-sm text-obsidian/50 leading-relaxed">
                    Placeholder one-line description of this course.
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/courses" variant="secondary">
              View All Courses
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── 6. FOUNDING COHORT ──────────────────────────────────────────── */}
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
