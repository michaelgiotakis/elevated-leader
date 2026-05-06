import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Diagnostic — Find Your Bottleneck | The Elevated Leader",
  description:
    "Discover exactly where pressure, complexity, and operational dependency are accumulating in your business. The Elevated Leader Diagnostic reveals the invisible bottleneck keeping your business heavy.",
};

const REVEALS = [
  "Identity bottlenecks and reactive leadership patterns",
  "Structural friction slowing the operating rhythm",
  "Delegation gaps creating hidden founder dependency",
  "Decision fatigue and the source generating it",
  "Operational load accumulating around the founder",
  "Leverage breakdowns that prevent clean scale",
  "Emotional load patterns and leadership depletion",
  "Systems pressure across all three business levers",
  "Clarity gaps preventing independent team execution",
  "The primary bottleneck creating the most drag",
];

const DELIVERABLES = [
  {
    title: "Your Primary Bottleneck Score",
    description:
      "A clear view of where the heaviest drag is accumulating — not a vague overview, but a precise read on the layer creating the most resistance.",
  },
  {
    title: "Identity / Structure / Leverage Breakdown",
    description:
      "A scored breakdown across all three business levers so you know exactly which layer is most fractured and where to focus first.",
  },
  {
    title: "Pressure Pattern Analysis",
    description:
      "Visibility into where complexity, emotional load, and operational weight are concentrating inside the business.",
  },
  {
    title: "Leadership Blind Spot Insights",
    description:
      "The patterns that are often invisible to the founder but visible in how the business behaves — and how to address them directly.",
  },
  {
    title: "Strategic Focus Recommendations",
    description:
      "Where your energy actually needs to go — not where urgency is currently directing it.",
  },
  {
    title: "Module & Lever Recommendations",
    description:
      "Which specific lever and modules will create the most meaningful shift, in the shortest time, given your exact profile.",
  },
  {
    title: "Operational Dependency Signals",
    description:
      "Where the business is still routing decisions, rescues, and direction back through you — even when it should not need to.",
  },
  {
    title: "Clarity on Your Next Move",
    description:
      "Not a list of everything that needs fixing. A clear starting point that creates the most relief, the fastest.",
  },
];

const LEVERS = [
  {
    accentBar: "bg-muted-rose",
    labelColor: "text-muted-rose",
    label: "Identity",
    heading: "Elevate Your Self",
    tagline: "Lead from clarity instead of pressure.",
    description:
      "How you think, decide, regulate, and show up as a leader. If identity is the bottleneck, the business organises itself around your pressure instead of your standards.",
    href: "/courses/elevate-your-self",
  },
  {
    accentBar: "bg-slate",
    labelColor: "text-slate",
    label: "Structure",
    heading: "Streamline Your Structure",
    tagline: "Build the structure your business can finally run on.",
    description:
      "Roles, responsibilities, workflows, and operating rhythm. If structure is the bottleneck, decisions keep routing back to you and execution stays fragile.",
    href: "/courses/streamline-your-structure",
  },
  {
    accentBar: "bg-eucalyptus",
    labelColor: "text-eucalyptus",
    label: "Leverage",
    heading: "Unlock Your Leverage",
    tagline: "Scale without becoming the bottleneck again.",
    description:
      "Delegation, ownership, and scale architecture. If leverage is the bottleneck, growth keeps increasing pressure instead of increasing your freedom.",
    href: "/courses/unlock-your-leverage",
  },
];

const REALISATIONS = [
  {
    quote: "I wasn't disorganised. I was overloaded.",
    insight:
      "The problem was never your capability. It was the invisible weight the business was placing on you.",
  },
  {
    quote: "The business wasn't broken. The operating system was.",
    insight:
      "Most founders spend years fixing symptoms. The diagnostic shows you the source.",
  },
  {
    quote:
      "I finally understood why growth kept creating more pressure instead of more freedom.",
    insight:
      "Growth layered on unclear foundations does not compound results. It compounds complexity.",
  },
  {
    quote:
      "I could finally see what was actually draining my energy — not just feel it.",
    insight:
      "Naming the invisible bottleneck is the first step toward removing it permanently.",
  },
  {
    quote: "It gave me language for problems I could feel but couldn't explain.",
    insight:
      "When you can see the problem clearly, you can finally address the right thing.",
  },
];

export default function DiagnosticPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        className="bg-obsidian py-28 md:py-44 relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(246,241,233,0.035) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      >
        <Container>
          <div className="max-w-2xl relative z-10">
            {/* Eyebrow */}
            <div className="mb-10">
              <div className="w-10 h-px bg-bronze mb-5" />
              <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-bronze">
                The Elevated Leader Diagnostic
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-[44px] md:text-[62px] leading-[1.06] text-ivory mb-7 tracking-tight">
              Find the Bottleneck That&apos;s Keeping Your Business Heavy
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg md:text-xl text-warm-stone font-medium mb-5 leading-snug">
              You do not need more pressure, more information, or more effort.
            </p>
            <p className="font-sans text-lg md:text-xl text-warm-stone font-medium mb-8 leading-snug">
              You need clarity on what is actually slowing the business down.
            </p>

            {/* Supporting copy */}
            <p className="font-sans text-base md:text-lg text-ivory/65 leading-relaxed mb-12">
              This diagnostic reveals where pressure, complexity, emotional
              load, and operational dependency are accumulating across your
              business — so you know exactly where to focus next.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <Button href={CTA_LINKS.diagnostic} variant="primary" external>
                Start The Diagnostic
              </Button>
              <p className="font-sans text-sm text-ivory/40 leading-tight">
                Takes approximately 15–20 minutes.
              </p>
            </div>

            {/* Reassurance */}
            <div className="flex flex-col gap-2.5">
              {[
                "No fluff.",
                "No generic advice.",
                "No surface-level scoring.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-3 h-px bg-bronze/60 shrink-0" />
                  <p className="font-sans text-xs text-ivory/35 tracking-wide">
                    {item}
                  </p>
                </div>
              ))}
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
              Most Founders Are Solving the Wrong Problem
            </h2>

            <div className="space-y-6">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                At $1M–$5M, the business is working. But it is working in a way
                that still requires you to carry too much of it.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                You are present in decisions that should not need you. You are
                rescuing work that should not break. You are holding the
                standard because the system does not hold it for you.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                So you push harder. You try more strategy, more information,
                more effort. But the harder you push, the heavier everything
                feels. Scale creates new dependencies where the old ones barely
                existed. Growth increases complexity faster than it increases
                freedom.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                The problem is rarely the offer, the team, or the market.
              </p>
            </div>

            {/* Callout block */}
            <div className="my-10 border-l-2 border-bronze pl-6 py-1">
              <p className="font-sans text-base md:text-lg font-semibold text-obsidian leading-snug">
                Most high-performing founders at this stage are not struggling
                because they lack capability. They are leading businesses built
                on invisible dependency — where the founder is the linchpin of
                too many moving parts, without ever choosing to be.
              </p>
            </div>

            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              The operating system underneath the business has never been
              clearly mapped, diagnosed, or addressed. And no one has ever shown
              you exactly where to look.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 3. WHAT THE DIAGNOSTIC ACTUALLY REVEALS ─────────────────────── */}
      <section className="bg-obsidian py-20 md:py-28 border-t border-warm-stone/30">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>What It Measures</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-ivory mb-6">
              This Is Not a Personality Quiz
            </h2>
            <p className="font-sans text-base md:text-lg text-ivory/60 leading-relaxed">
              The diagnostic is a precision instrument. It maps where specific
              types of pressure, friction, and dependency are accumulating
              across the three levers that determine whether a business can
              operate without its founder.
            </p>
          </div>

          {/* Reveals grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0">
            {REVEALS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-5 border-b border-warm-stone/20"
              >
                <span className="font-sans text-[10px] tabular-nums font-semibold text-bronze/60 shrink-0 w-4 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-sm md:text-base text-ivory/75 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 pt-10 border-t border-warm-stone/20">
            <p className="font-sans text-sm text-ivory/40 max-w-lg leading-relaxed">
              Each dimension is weighted and cross-referenced to surface the
              specific layer — identity, structure, or leverage — creating the
              most drag on how the business runs.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 4. WHAT YOU RECEIVE ──────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>What You&apos;ll Walk Away With</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              Clarity. Direction. Relief.
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              The goal is not more information. The goal is precision — knowing
              exactly where to focus so the business starts getting lighter,
              not heavier.
            </p>
          </div>

          {/* Deliverables grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DELIVERABLES.map((item) => (
              <Card key={item.title} className="p-8 md:p-10">
                <div className="w-5 h-px bg-bronze mb-5" />
                <h3 className="font-sans font-semibold text-[15px] text-obsidian leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-obsidian/60 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Supporting emotional copy */}
          <div className="mt-14 md:mt-16 max-w-xl">
            <p className="font-sans text-base md:text-lg font-semibold text-obsidian leading-snug border-l-2 border-bronze pl-5">
              The fastest path to a lighter business is finally seeing what is
              actually making it heavy.
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 5. THE THREE LEVERS ──────────────────────────────────────────── */}
      <Section className="bg-warm-stone/20 border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl mb-12 md:mb-16">
            <Eyebrow>The Framework</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian">
              The Diagnostic Measures the Three Areas That Determine Whether a
              Business Can Run Without You
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {LEVERS.map((lever) => (
              <Card key={lever.label} className="p-8 md:p-10 flex flex-col">
                <div className={`w-6 h-0.5 ${lever.accentBar} mb-4`} />
                <p
                  className={`font-sans text-[10px] font-semibold tracking-[0.3em] uppercase ${lever.labelColor} mb-3`}
                >
                  {lever.label}
                </p>
                <h3 className="font-sans font-bold text-[18px] md:text-[20px] text-obsidian leading-snug mb-2">
                  {lever.heading}
                </h3>
                <p className="font-sans text-xs text-obsidian/50 mb-5 leading-snug">
                  {lever.tagline}
                </p>
                <p className="font-sans text-sm text-obsidian/65 leading-relaxed mb-6 flex-1">
                  {lever.description}
                </p>
                <div className="border-t border-warm-stone pt-4">
                  <Link
                    href={lever.href}
                    className={`font-sans text-sm font-semibold ${lever.labelColor} opacity-70 hover:opacity-100 hover:underline underline-offset-2 decoration-1 transition-opacity duration-150`}
                  >
                    Explore {lever.label} →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── 6. EMOTIONAL RECOGNITION ─────────────────────────────────────── */}
      <section className="bg-obsidian py-20 md:py-28 border-t border-warm-stone/30">
        <Container>
          <div className="max-w-xl mb-12 md:mb-16">
            <Eyebrow>What Founders Realise</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-ivory">
              What Founders Often Realise After Taking the Diagnostic
            </h2>
          </div>

          <div className="max-w-2xl space-y-0">
            {REALISATIONS.map((item, i) => (
              <div
                key={i}
                className="py-8 border-t border-warm-stone/20 first:border-t-0"
              >
                <p className="font-heading text-[22px] md:text-[26px] text-ivory leading-snug mb-4 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="font-sans text-sm md:text-base text-ivory/50 leading-relaxed">
                  {item.insight}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 7. DIAGNOSTIC EMBED PLACEHOLDER ─────────────────────────────── */}
      {/*
       * INTEGRATION NOTE:
       * This section is reserved for the diagnostic embed.
       * Replace the placeholder content with one of:
       *   A) A ScoreApp iframe: <iframe src="https://your-scoreapp-url.com/..." />
       *   B) A custom Next.js diagnostic component: <DiagnosticFlow />
       * The outer Section and Container structure should remain unchanged.
       */}
      <Section className="border-t border-warm-stone" id="take-the-diagnostic">
        <Container>
          <div className="max-w-xl mb-10">
            <Eyebrow>Take the Diagnostic</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-5">
              Find Your Bottleneck
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
              Takes approximately 15–20 minutes. Your results are delivered
              immediately upon completion.
            </p>
          </div>

          {/* ── DIAGNOSTIC_EMBED_SLOT ── */}
          <div className="border border-warm-stone/60 bg-ivory rounded p-10 md:p-16 text-center max-w-2xl">
            <div className="w-8 h-px bg-bronze/40 mx-auto mb-6" />
            <p className="font-sans text-[10px] font-semibold tracking-[0.4em] uppercase text-bronze/60 mb-4">
              Coming Soon
            </p>
            <p className="font-sans text-base text-obsidian/50 leading-relaxed mb-8 max-w-sm mx-auto">
              The full diagnostic experience is being finalised. In the
              meantime, take the diagnostic directly.
            </p>
            <Button href={CTA_LINKS.diagnostic} variant="primary" external>
              Start The Diagnostic
            </Button>
          </div>
          {/* ── END DIAGNOSTIC_EMBED_SLOT ── */}
        </Container>
      </Section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-20 md:py-32 border-t border-warm-stone/30">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-heading text-[36px] md:text-[46px] text-ivory leading-[1.1] mb-6 tracking-tight">
              Stop Guessing Where Your Energy Should Go
            </h2>
            <p className="font-sans text-base md:text-lg text-warm-stone leading-relaxed mb-4">
              The fastest way to create relief inside the business is to finally
              understand what is actually creating the pressure.
            </p>
            <p className="font-sans text-sm text-ivory/40 leading-relaxed mb-10">
              Not more effort. Not more strategy. Clarity on the right thing —
              precisely identified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={CTA_LINKS.diagnostic} variant="primary" external>
                Start The Diagnostic
              </Button>
              <Button href="/method" variant="ghost">
                Explore The Method
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
