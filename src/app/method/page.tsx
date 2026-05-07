import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Method",
  description:
    "The Elevated Leader Method. Three levers — Identity, Structure, Leverage — that remove you as the bottleneck and build a business that runs on clarity, not heroics.",
};

const LEVERS = [
  {
    id: "identity",
    accentBar: "bg-muted-rose",
    labelColor: "text-muted-rose",
    label: "Identity",
    heading: "Elevate Your Self",
    href: "/courses/elevate-your-self",
    description:
      "Your business can only operate as clearly as you lead. This lever rebuilds how you think, decide, and show up — so the decisions, standards, and direction downstream become cleaner.",
    tagline: "Lead from clarity instead of pressure.",
  },
  {
    id: "structure",
    accentBar: "bg-slate",
    labelColor: "text-slate",
    label: "Structure",
    heading: "Streamline Your Structure",
    href: "/courses/streamline-your-structure",
    description:
      "Roles, workflows, and operational clarity define whether the business runs on its own or runs through you. This lever builds the operational spine that holds without your constant presence.",
    tagline: "Build the structure your business can finally run on.",
  },
  {
    id: "leverage",
    accentBar: "bg-eucalyptus",
    labelColor: "text-eucalyptus",
    label: "Leverage",
    heading: "Unlock Your Leverage",
    href: "/courses/unlock-your-leverage",
    description:
      "Delegation, ownership, and scale architecture determine whether growth creates freedom or dependency. This lever shifts you from involved operator to leveraged leader.",
    tagline: "Scale without becoming the bottleneck again.",
  },
];

const MODULES_GRID = [
  {
    lever: "Identity",
    labelColor: "text-muted-rose",
    accentBar: "bg-muted-rose",
    href: "/courses/elevate-your-self",
    modules: [
      { num: "01", codename: "PERCEPTION", framework: "The Evolution Model" },
      { num: "02", codename: "PRESENCE", framework: "The Optimisation Cycle" },
      { num: "03", codename: "INTELLIGENCE", framework: "The Leadership Codes" },
    ],
  },
  {
    lever: "Structure",
    labelColor: "text-slate",
    accentBar: "bg-slate",
    href: "/courses/streamline-your-structure",
    modules: [
      { num: "04", codename: "ALIGNMENT", framework: "The Vision Vehicle" },
      { num: "05", codename: "PRECISION", framework: "The One Focus" },
      { num: "06", codename: "AWARENESS", framework: "The Altitude System" },
    ],
  },
  {
    lever: "Leverage",
    labelColor: "text-eucalyptus",
    accentBar: "bg-eucalyptus",
    href: "/courses/unlock-your-leverage",
    modules: [
      { num: "07", codename: "FLOW", framework: "The Cruise Control" },
      { num: "08", codename: "EMPOWER", framework: "The Autonomy Blueprint" },
      { num: "09", codename: "HARMONISE", framework: "The Progressive Edge" },
    ],
  },
];

const STAGES = [
  {
    label: "Stage One",
    heading: "Reactive Founder",
    accent: "bg-warm-stone",
    items: [
      "Decisions made from urgency, not standards.",
      "The business organises around your pressure.",
      "Every system depends on your interpretation.",
      "Growth increases complexity faster than clarity.",
    ],
  },
  {
    label: "Stage Two",
    heading: "Grounded Leader",
    accent: "bg-bronze",
    items: [
      "Identity clear. Standards held consistently.",
      "Structure beginning to carry operational load.",
      "Focus protected, not donated to every urgency.",
      "Decisions faster, cleaner, less emotionally driven.",
    ],
  },
  {
    label: "Stage Three",
    heading: "Leveraged CEO",
    accent: "bg-eucalyptus",
    items: [
      "Business running on systems, not heroics.",
      "Team owning outcomes, not just tasks.",
      "Growth creates freedom rather than more dependency.",
      "You operate from leverage, not constant presence.",
    ],
  },
];

export default function MethodPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-28 md:py-40">
        <Container>
          <div className="max-w-3xl">
            <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-bronze mb-8">
              The Elevated Leader Method
            </p>
            <h1 className="font-heading text-[48px] md:text-[64px] leading-[1.04] text-ivory mb-8 tracking-tight">
              Build a Business That Runs With Clarity, Structure, and Leverage
            </h1>
            <p className="font-sans text-lg md:text-xl text-warm-stone font-medium leading-snug mb-6">
              Most businesses do not fail because of lack of ambition.
              <br className="hidden sm:block" />
              They fail because the founder becomes the operating system.
            </p>
            <p className="font-sans text-base md:text-lg text-ivory/60 leading-relaxed mb-14 max-w-2xl">
              High-performing founders hit a threshold where intelligence and
              effort are no longer the constraint. The real constraint is an
              operating model that was never designed to run without them.
              This method changes that.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button href={CTA_LINKS.diagnostic} variant="primary" external>
                Take the Diagnostic
              </Button>
              <Button href="/courses" variant="ghost">
                Explore the System
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. THE REAL PROBLEM ──────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The Real Problem</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-10">
              Why Smart Founders Still Become the Bottleneck
            </h2>
            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                The founders who come to this work are not lacking ambition,
                intelligence, or drive. They have already built something real.
                Most are past seven figures. Many are respected leaders in their
                industries.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                And yet — urgency has replaced importance. Decisions are made
                reactively rather than from a clear internal standard. The team
                executes, but still routes everything back to the founder for
                interpretation, validation, or rescue.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                This is not a team problem. It is not a strategy problem. It is
                a leadership architecture problem. The business has been scaling
                complexity faster than it has been building clarity — and at the
                centre of that complexity is a founder who never built a system
                that could run without them.
              </p>
              <p className="font-sans text-base md:text-lg font-semibold text-obsidian leading-snug border-l-2 border-bronze pl-5">
                The bottleneck is rarely the business. It is the operating model
                the founder is sitting inside without realising it.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Invisible operational dependency compounds over time. The higher
                the revenue, the more the business needs the founder to hold it
                together — until something breaks, or they do. The work of The
                Elevated Leader is to dismantle that dependency deliberately and
                replace it with a self-running architecture.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3. THE THREE LEVER SYSTEM ────────────────────────────────────── */}
      <Section className="bg-warm-stone/20 border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl mb-14">
            <Eyebrow>The System</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              The Three Levers Behind a Self-Running Business
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/65 leading-relaxed">
              Every founder bottleneck traces back to one of three root causes.
              Identity, Structure, or Leverage — and most businesses are missing
              all three working in concert.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {LEVERS.map((lever) => (
              <div
                key={lever.id}
                className="bg-ivory border border-warm-stone p-10 md:p-12 flex flex-col"
              >
                <div className={`w-10 h-0.5 ${lever.accentBar} mb-6`} />
                <p
                  className={`font-sans text-[10px] font-semibold tracking-[0.35em] uppercase ${lever.labelColor} mb-3`}
                >
                  {lever.label}
                </p>
                <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian leading-snug tracking-tight mb-4">
                  {lever.heading}
                </h3>
                <p className="font-sans text-sm md:text-base text-obsidian/65 leading-relaxed mb-4 flex-1">
                  {lever.description}
                </p>
                <p className={`font-sans text-sm font-semibold ${lever.labelColor} leading-snug mb-8`}>
                  {lever.tagline}
                </p>
                <div className="border-t border-warm-stone/60 pt-5">
                  <Link
                    href={lever.href}
                    className={`font-sans text-sm font-semibold ${lever.labelColor} opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-1 transition-opacity duration-150`}
                  >
                    Explore {lever.label} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── BUSINESS OPERATING SYSTEM VISUAL ────────────────────────────── */}
      <section className="bg-ivory py-20 md:py-28 border-t border-warm-stone">
        <Container>
          <div className="max-w-[1100px] mx-auto">
            <Image
              src="/images/frameworks/business-operating-system.png"
              alt="The Three-Lever Business Operating System — Identity, Structure, Leverage"
              width={1100}
              height={688}
              className="w-full h-auto"
            />
          </div>
        </Container>
      </section>

      {/* ── 4. WHY MOST PROGRAMS FAIL ────────────────────────────────────── */}
      <section className="bg-obsidian py-20 md:py-28">
        <Container>
          <div className="max-w-xl mb-14">
            <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-bronze mb-4">
              Why Most Programs Fail
            </p>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-ivory mb-5">
              Most Founders Do Not Need More Information
            </h2>
            <p className="font-sans text-base md:text-lg text-ivory/60 leading-relaxed">
              They need integration. Strategy without identity reverts under
              pressure. Tactics without structure collapse when the founder steps
              back. Growth without leverage creates chaos at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left — without */}
            <div className="p-10 md:p-14 border border-warm-stone/20">
              <p className="font-sans text-[10px] font-semibold tracking-[0.35em] uppercase text-warm-stone/40 mb-8">
                Typical Business Advice
              </p>
              <ul className="space-y-5">
                {[
                  "Strategy built on urgency, not standards.",
                  "Tactics that work until the founder steps back.",
                  "Growth layered on top of unresolved operational debt.",
                  "Teams that execute but do not own outcomes.",
                  "More information consumed. Nothing fundamentally changed.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-sans text-warm-stone/30 shrink-0 mt-0.5 select-none">
                      —
                    </span>
                    <span className="font-sans text-sm md:text-base text-ivory/45 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — with */}
            <div className="p-10 md:p-14 border border-warm-stone/20 border-t-0 md:border-t md:border-l-0">
              <p className="font-sans text-[10px] font-semibold tracking-[0.35em] uppercase text-bronze mb-8">
                The Elevated Leader Method
              </p>
              <ul className="space-y-5">
                {[
                  "Identity that holds under pressure and scaling complexity.",
                  "Structure that carries the business without constant interpretation.",
                  "Leverage that allows revenue to grow without growing dependency.",
                  "Teams with real ownership and clear accountability.",
                  "Integration that changes how you lead — not just what you know.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-sans text-bronze shrink-0 mt-0.5 select-none">
                      —
                    </span>
                    <span className="font-sans text-sm md:text-base text-ivory/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. TRANSFORMATION ARC ────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-14">
            <Eyebrow>The Arc</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian">
              From Reactive Founder to Leveraged CEO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {STAGES.map((stage, i) => (
              <div
                key={stage.heading}
                className={[
                  "p-10 md:p-12",
                  i < STAGES.length - 1
                    ? "border-b border-warm-stone md:border-b-0 md:border-r md:border-warm-stone"
                    : "",
                ].join(" ")}
              >
                <div className={`w-8 h-0.5 ${stage.accent} mb-5`} />
                <p className="font-sans text-[9px] font-semibold tracking-[0.35em] uppercase text-obsidian/35 mb-3">
                  {stage.label}
                </p>
                <h3 className="font-sans font-bold text-[22px] md:text-[24px] text-obsidian leading-snug tracking-tight mb-7">
                  {stage.heading}
                </h3>
                <ul className="space-y-3">
                  {stage.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="font-sans text-warm-stone shrink-0 mt-0.5 select-none text-sm">
                        —
                      </span>
                      <span className="font-sans text-sm text-obsidian/65 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 6. DIAGNOSTIC ────────────────────────────────────────────────── */}
      <Section className="bg-warm-stone/20 border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Where to Start</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              You Cannot Fix What You Cannot See
            </h2>
            <div className="space-y-5 mb-12">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Most founders know something is wrong. They can feel the drag,
                the reactivity, the weight of holding everything together. What
                they cannot always see is exactly where the bottleneck lives.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                The diagnostic identifies where your real constraint is sitting —
                across Identity, Structure, and Leverage — so you know exactly
                which lever to pull first rather than guessing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href={CTA_LINKS.diagnostic} variant="primary" external>
                Take the Diagnostic
              </Button>
              <Link
                href="/courses"
                className="font-sans text-sm font-semibold text-obsidian/55 hover:text-obsidian underline underline-offset-4 decoration-1 transition-colors duration-150"
              >
                Explore the courses instead →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 7. THE 9-MODULE SYSTEM ───────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-14">
            <Eyebrow>The Full System</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              The 9-Module Operating System
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/65 leading-relaxed">
              Three levers. Three modules inside each. One integrated operating
              system designed to remove you as the bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-14">
            {MODULES_GRID.map((lever) => (
              <div key={lever.lever}>
                <div className={`w-10 h-0.5 ${lever.accentBar} mb-4`} />
                <p
                  className={`font-sans text-[10px] font-semibold tracking-[0.35em] uppercase ${lever.labelColor} mb-6`}
                >
                  {lever.lever}
                </p>
                <ul className="mb-8">
                  {lever.modules.map((mod, i) => (
                    <li
                      key={mod.num}
                      className={`flex items-baseline gap-4 py-4 ${
                        i < lever.modules.length - 1
                          ? "border-b border-warm-stone/50"
                          : ""
                      }`}
                    >
                      <span className="font-sans text-[9px] font-semibold tabular-nums text-warm-stone shrink-0 w-4">
                        {mod.num}
                      </span>
                      <div>
                        <p className="font-sans text-[10px] font-bold tracking-[0.18em] uppercase text-obsidian leading-tight">
                          {mod.codename}
                        </p>
                        <p className="font-sans text-xs text-obsidian/60 leading-snug">
                          {mod.framework}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link
                  href={lever.href}
                  className={`font-sans text-sm font-semibold ${lever.labelColor} opacity-75 hover:opacity-100 hover:underline underline-offset-4 decoration-1 transition-opacity duration-150`}
                >
                  Explore {lever.lever} →
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 md:mt-20 pt-10 border-t border-warm-stone">
            <Button href="/courses" variant="primary">
              View All Courses
            </Button>
          </div>
        </Container>
      </Section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────────── */}
      <CTASection
        heading="Build a Business That No Longer Depends on You"
        subheading="Lead with clarity. Scale with structure. Operate with leverage."
        primaryLabel="Take the Diagnostic"
        primaryHref={CTA_LINKS.diagnostic}
        primaryExternal
        secondaryLabel="Explore Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
