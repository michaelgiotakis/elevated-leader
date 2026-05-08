import type { Metadata } from "next";
import Image from "next/image";
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
      {/* ── 1. CINEMATIC EDITORIAL HERO ──────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#161D29", backgroundImage: "radial-gradient(ellipse 35% 55% at 5% 100%, rgba(184,134,76,0.055) 0%, transparent 50%)" }}>
        <div className="flex flex-col lg:flex-row lg:min-h-[820px] xl:min-h-[900px]">

          {/* Left — typography */}
          <div className="relative z-10 flex items-center lg:w-[46%] px-6 md:px-10 lg:px-16 pt-16 pb-12 lg:py-20">
            <div className="w-full max-w-[520px]">

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
          </div>

          {/* Right — editorial atmosphere */}
          <div
            className="relative h-[64vw] md:h-[52vw] overflow-hidden lg:absolute lg:right-0 lg:inset-y-0 lg:w-[60%]"
            style={{ backgroundColor: "#161D29" }}
          >
            <Image
              src="/images/editorial/diagnostic-hero-editorial.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-[55%_15%] lg:object-contain lg:object-top"
              priority
            />

            {/* Left atmospheric blend — hero bg dissolves into text column */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to right, #161D29 0%, transparent 24%)" }}
              aria-hidden="true"
            />

            {/* Mobile top dissolve — image emerges from atmosphere */}
            <div
              className="absolute top-0 left-0 right-0 h-20 pointer-events-none lg:hidden"
              style={{ background: "linear-gradient(to bottom, #161D29 0%, transparent 100%)" }}
              aria-hidden="true"
            />

            {/* Bottom dissolve — atmospheric editorial continuity */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{ background: "linear-gradient(to top, #161D29 0%, transparent 100%)" }}
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

      {/* ── 2. THE REAL PROBLEM ──────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_540px] lg:gap-x-10 xl:gap-x-12">

            {/* Left — editorial copy */}
            <div className="lg:self-start">
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

            {/* Right — coded atmospheric pressure field */}
            <div className="relative mt-16 lg:mt-0 min-h-[560px]">

              {/* ── ATMOSPHERIC CORE ─────────────────────────────────── */}

              {/* Outer warmth field */}
              <div
                className="absolute pointer-events-none"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                aria-hidden="true"
              >
                <div style={{
                  width: "540px", height: "540px", borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(212,199,183,0.44) 0%, rgba(212,199,183,0.18) 45%, transparent 72%)",
                  animation: "pressureGlow 9s ease-in-out infinite",
                }} />
              </div>

              {/* Mid bronze haze */}
              <div
                className="absolute pointer-events-none"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                aria-hidden="true"
              >
                <div style={{
                  width: "420px", height: "420px", borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(184,134,76,0.26) 0%, rgba(212,199,183,0.32) 38%, transparent 70%)",
                  animation: "pressurePulse 7s ease-in-out infinite 0.8s",
                }} />
              </div>

              {/* Inner bronze core */}
              <div
                className="absolute pointer-events-none"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                aria-hidden="true"
              >
                <div style={{
                  width: "230px", height: "230px", borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(184,134,76,0.48) 0%, rgba(184,134,76,0.20) 50%, transparent 100%)",
                  filter: "blur(16px)",
                  animation: "pressurePulse 7s ease-in-out infinite 2s",
                }} />
              </div>

              {/* Center anchor dot */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "50%", left: "50%",
                  width: "7px", height: "7px",
                  marginTop: "-3.5px", marginLeft: "-3.5px",
                  borderRadius: "50%",
                  background: "rgba(184,134,76,0.82)",
                }}
                aria-hidden="true"
              />

              {/* ── SVG ORBITAL GEOMETRY ─────────────────────────────── */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 460 600"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {/* Dashed radial lines — center (230,300) to each node */}
                <line x1="230" y1="300" x2="22"  y2="74"  stroke="rgba(184,134,76,0.34)" strokeWidth="1.4" strokeDasharray="2,3" />
                <line x1="230" y1="300" x2="438" y2="86"  stroke="rgba(184,134,76,0.30)" strokeWidth="1.4" strokeDasharray="2,3" />
                <line x1="230" y1="300" x2="14"  y2="338" stroke="rgba(184,134,76,0.30)" strokeWidth="1.4" strokeDasharray="2,3" />
                <line x1="230" y1="300" x2="438" y2="470" stroke="rgba(184,134,76,0.30)" strokeWidth="1.4" strokeDasharray="2,3" />
                <line x1="230" y1="300" x2="230" y2="566" stroke="rgba(184,134,76,0.30)" strokeWidth="1.4" strokeDasharray="2,3" />
                {/* Outer orbit ellipse */}
                <ellipse cx="230" cy="300" rx="175" ry="145" fill="none" stroke="rgba(212,199,183,0.32)" strokeWidth="1.1" />
              </svg>

              {/* ── CENTER LABEL ─────────────────────────────────────── */}
              <div
                className="absolute z-10 text-center pointer-events-none"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                aria-hidden="true"
              >
                <p className="font-sans text-[13px] font-bold tracking-[0.5em] uppercase text-obsidian/75 whitespace-nowrap">
                  INVISIBLE
                </p>
                <div className="mx-auto my-2" style={{ width: "32px", height: "1px", background: "rgba(184,134,76,0.80)" }} />
                <p className="font-sans text-[13px] font-bold tracking-[0.5em] uppercase text-obsidian/75 whitespace-nowrap">
                  PRESSURE
                </p>
              </div>

              {/* ── PRESSURE NODES ───────────────────────────────────── */}

              {/* Decision Pressure — upper left */}
              <div
                className="absolute z-10"
                style={{ top: "12%", left: "4%", animation: "pressureDrift 10s ease-in-out infinite 0s" }}
              >
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 2L8 8L4 14 M8 8L12 14" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                <div style={{ width: "28px", height: "1px", background: "rgba(184,134,76,0.62)", margin: "8px 0 6px" }} />
                <p className="font-sans text-[13px] font-semibold tracking-[0.32em] uppercase leading-tight text-obsidian/80">Decision</p>
                <p className="font-sans text-[12px] tracking-[0.28em] uppercase leading-tight text-obsidian/62 mt-0.5">Pressure</p>
              </div>

              {/* Operational Pressure — upper right */}
              <div
                className="absolute z-10 text-right"
                style={{ top: "14%", right: "3%", animation: "pressureDrift 12s ease-in-out infinite 2s" }}
              >
                <div className="flex justify-end">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="5.5" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" />
                    <line x1="8" y1="2.5" x2="8" y2="13.5" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" />
                    <line x1="2.5" y1="8" x2="13.5" y2="8" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" />
                  </svg>
                </div>
                <div style={{ width: "28px", height: "1px", background: "rgba(184,134,76,0.62)", margin: "8px 0 6px", marginLeft: "auto" }} />
                <p className="font-sans text-[13px] font-semibold tracking-[0.32em] uppercase leading-tight text-obsidian/80">Operational</p>
                <p className="font-sans text-[12px] tracking-[0.28em] uppercase leading-tight text-obsidian/62 mt-0.5">Pressure</p>
              </div>

              {/* People Pressure — left middle */}
              <div
                className="absolute z-10"
                style={{ top: "56%", left: "2%", animation: "pressureDrift 11s ease-in-out infinite 1s" }}
              >
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="6" cy="5" r="2" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" />
                  <circle cx="10" cy="5" r="2" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" />
                  <path d="M2 14Q3 10.5 6 10.5Q8 10 10 10.5Q13 10.5 14 14" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
                <div style={{ width: "28px", height: "1px", background: "rgba(184,134,76,0.62)", margin: "8px 0 6px" }} />
                <p className="font-sans text-[13px] font-semibold tracking-[0.32em] uppercase leading-tight text-obsidian/80">People</p>
                <p className="font-sans text-[12px] tracking-[0.28em] uppercase leading-tight text-obsidian/62 mt-0.5">Pressure</p>
              </div>

              {/* Growth Pressure — lower right */}
              <div
                className="absolute z-10 text-right"
                style={{ bottom: "22%", right: "3%", animation: "pressureDrift 9s ease-in-out infinite 3s" }}
              >
                <div className="flex justify-end">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 12L6 7L9 9L14 3" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 3L14 3L14 6" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div style={{ width: "28px", height: "1px", background: "rgba(184,134,76,0.62)", margin: "8px 0 6px", marginLeft: "auto" }} />
                <p className="font-sans text-[13px] font-semibold tracking-[0.32em] uppercase leading-tight text-obsidian/80">Growth</p>
                <p className="font-sans text-[12px] tracking-[0.28em] uppercase leading-tight text-obsidian/62 mt-0.5">Pressure</p>
              </div>

              {/* Standard Pressure — bottom center */}
              {/* Outer wrapper handles centering; inner div takes the drift animation */}
              <div className="absolute z-10" style={{ bottom: "6%", left: "50%", transform: "translateX(-50%)" }}>
                <div className="text-center" style={{ animation: "pressureDrift 13s ease-in-out infinite 1.5s" }}>
                  <div className="flex justify-center">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <line x1="8" y1="2" x2="8" y2="14" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" strokeLinecap="round" />
                      <line x1="3" y1="5" x2="13" y2="5" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" strokeLinecap="round" />
                      <line x1="4" y1="9" x2="12" y2="9" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" strokeLinecap="round" />
                      <line x1="6" y1="13" x2="10" y2="13" stroke="rgba(184,134,76,0.85)" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div style={{ width: "28px", height: "1px", background: "rgba(184,134,76,0.62)", margin: "8px auto 6px" }} />
                  <p className="font-sans text-[13px] font-semibold tracking-[0.32em] uppercase leading-tight text-obsidian/80 whitespace-nowrap">Standard</p>
                  <p className="font-sans text-[12px] tracking-[0.28em] uppercase leading-tight text-obsidian/62 mt-0.5 whitespace-nowrap">Pressure</p>
                </div>
              </div>

            </div>

          </div>
        </Container>
      </Section>

      {/* ── 3. WHAT THE DIAGNOSTIC ACTUALLY REVEALS ─────────────────────── */}
      <section className="py-20 md:py-28 border-t border-warm-stone/30" style={{ backgroundColor: "#0D1219" }}>
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
      <section className="py-20 md:py-28 border-t border-warm-stone/30" style={{ backgroundColor: "#110F0D" }}>
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
          <div className="border border-warm-stone/60 bg-ivory p-10 md:p-16 text-center max-w-2xl">
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
      <section className="py-20 md:py-32 border-t border-warm-stone/30" style={{ backgroundColor: "#090D14", backgroundImage: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(184,134,76,0.055) 0%, transparent 55%)" }}>
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
