import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CourseSelector } from "@/components/ui/CourseSelector";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses",
};

export default function CoursesPage() {
  return (
    <>
      {/* ── 1. CINEMATIC EDITORIAL HERO ──────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#1B1D22" }}>
        <div className="flex flex-col lg:flex-row lg:min-h-[820px] xl:min-h-[860px]">

          {/* Left — typography */}
          <div className="relative z-10 flex items-center lg:w-[46%] px-6 md:px-10 lg:px-16 pt-16 pb-12 lg:py-20">
            <div className="w-full max-w-[520px]">

              {/* Eyebrow */}
              <div className="mb-10">
                <div className="w-10 h-px bg-warm-stone/40 mb-5" />
                <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-warm-stone">
                  The Elevated Leader Ecosystem
                </p>
              </div>

              <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.06] text-ivory mb-8 tracking-tight">
                The Architecture Behind Designed Freedom
              </h1>

              <p className="font-sans text-lg md:text-xl text-warm-stone font-medium leading-snug mb-12">
                Three levers. Nine modules. One integrated system for building
                a business that runs without you.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button href={CTA_LINKS.diagnostic} variant="primary" external>
                  Take the Diagnostic
                </Button>
              </div>

            </div>
          </div>

          {/* Right — editorial atmosphere */}
          <div
            className="relative h-[64vw] md:h-[52vw] overflow-hidden lg:absolute lg:right-0 lg:inset-y-0 lg:h-auto lg:w-[60%]"
            style={{ backgroundColor: "#1B1D22" }}
          >
            <Image
              src="/images/editorial/courses-ecosystem-hero-editorial.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-[50%_20%] lg:object-top"
              priority
            />

            {/* Left atmospheric blend — hero bg dissolves into text column */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to right, #1B1D22 0%, transparent 24%)" }}
              aria-hidden="true"
            />

            {/* Mobile top dissolve — image emerges from atmosphere */}
            <div
              className="absolute top-0 left-0 right-0 h-20 pointer-events-none lg:hidden"
              style={{ background: "linear-gradient(to bottom, #1B1D22 0%, transparent 100%)" }}
              aria-hidden="true"
            />

            {/* Bottom dissolve — mobile only: image fades back into atmosphere */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none lg:hidden"
              style={{ background: "linear-gradient(to top, #1B1D22 0%, transparent 100%)" }}
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

      {/* ── 2. BUILD YOUR SYSTEM ─────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Build Your System</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-obsidian mb-8">
              Choose the Bottleneck You Want to Remove
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                You can start with a single module, go deep into one lever, or
                build the full system across all three.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Most founders don&apos;t need more information. They need
                clarity on what is slowing the business down.
              </p>
            </div>
            <p className="font-sans text-sm text-obsidian/50">
              Not sure where to start?{" "}
              <Link
                href="/diagnostic"
                className="text-bronze font-medium underline underline-offset-2 decoration-1 hover:text-obsidian transition-colors duration-150"
              >
                Take the diagnostic first →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* ── CINEMATIC INTERRUPTION — Ecosystem Atmosphere ────────────────── */}
      <section
        className="relative overflow-hidden h-[62vh] md:h-[75vh]"
        style={{ backgroundColor: "#1A1B1D" }}
      >
        {/* Full-bleed editorial image with ambient drift */}
        <div
          className="absolute inset-0"
          style={{ animation: "clarityDrift 36s ease-in-out infinite alternate" }}
        >
          <Image
            src="/images/editorial/courses-editorial-interruption.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Restrained editorial overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(10, 8, 7, 0.20)" }}
          aria-hidden="true"
        />

        {/* Soft edge vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 88% 68% at 50% 50%, transparent 42%, rgba(10, 8, 7, 0.12) 100%)" }}
          aria-hidden="true"
        />

        {/* Top blend — emerges softly from Build Your System section */}
        <div
          className="absolute top-0 left-0 right-0 h-12 md:h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(246,241,233,0.60) 0%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* Bottom blend — dissolves into course grid warm stone atmosphere */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 md:h-16 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(212,199,183,0.25) 0%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* Editorial statement — centered within bottom half, left-side composition */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1" />
          <div className="flex-1 flex items-center pl-8 sm:pl-12 md:pl-[10%] lg:pl-[12%]">
            <div className="max-w-[280px] md:max-w-[360px] lg:max-w-[440px]">
              <div className="w-8 h-px mb-5 md:mb-6" style={{ backgroundColor: "rgba(184,134,76,0.55)" }} aria-hidden="true" />
              <p className="font-heading text-[18px] md:text-[23px] lg:text-[27px] leading-[1.5] text-ivory text-left tracking-tight">
                Designed freedom is not about doing less. It&apos;s about building a business that creates more of what matters.
              </p>
              <div className="w-8 h-px mt-5 md:mt-6" style={{ backgroundColor: "rgba(184,134,76,0.55)" }} aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 + 4. COURSE GRID + PRICING PANEL ─────────────────────────── */}
      <Section className="border-t border-warm-stone bg-warm-stone/20">
        <Container>
          <CourseSelector />
        </Container>
      </Section>

      {/* ── COURSE ECOSYSTEM VISUAL ──────────────────────────────────────── */}
      <section className="bg-ivory py-24 md:py-40 border-t border-warm-stone">
        <Container>
          <div className="max-w-[960px] mx-auto">

            {/* ── Section header ── */}
            <div className="text-center mb-20 md:mb-28">
              <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-bronze mb-5">
                The Full Operating System
              </p>
              <h2 className="font-heading text-[30px] md:text-[44px] leading-tight text-obsidian tracking-tight mb-5">
                Three Levers. Nine Modules.
              </h2>
              <p className="font-sans text-sm md:text-base text-obsidian/60 leading-relaxed max-w-sm mx-auto">
                One integrated architecture for removing yourself as the bottleneck.
              </p>
            </div>

            {/* ── Orbital arc — desktop only ── */}
            <div className="relative hidden md:block" aria-hidden="true">
              {/* Atmospheric bronze haze — centered on arc geometric peak */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 62% 100% at 50% 28%, rgba(184,134,76,0.09) 0%, transparent 68%)",
                }}
              />
              {/* viewBox 960×92 gives 2px clearance below arc endpoints at y=90 */}
              <svg viewBox="0 0 960 92" fill="none" className="w-full relative">
                <path
                  d="M 0 90 C 170 10, 790 10, 960 90"
                  stroke="rgba(212,199,183,0.50)"
                  strokeWidth="1.6"
                  fill="none"
                />
                {/* Identity node */}
                <circle cx="168" cy="49" r="3.5" fill="rgba(201,140,140,0.75)" />
                {/* Structure node */}
                <circle cx="480" cy="30" r="3.5" fill="rgba(50,56,71,0.60)" />
                {/* Leverage node */}
                <circle cx="792" cy="49" r="3.5" fill="rgba(62,95,82,0.72)" />
              </svg>
            </div>

            {/* ── Three lever territories ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-warm-stone/30">

              {/* Identity */}
              <div className="flex flex-col pt-12 md:pt-14 pb-14 md:pr-12 xl:pr-16 border-b border-warm-stone/30 md:border-b-0 md:border-r">
                <div className="w-6 h-0.5 bg-muted-rose mb-5" />
                <p className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-muted-rose mb-3">
                  Identity
                </p>
                <h3 className="font-sans font-bold text-[19px] md:text-[21px] text-obsidian leading-snug tracking-tight mb-10 min-h-[3.75rem]">
                  Elevate Your Self
                </h3>
                <ul className="space-y-6">
                  {[
                    { num: "01", code: "PERCEPTION",   fw: "The Evolution Model"     },
                    { num: "02", code: "PRESENCE",     fw: "The Optimisation Cycle"  },
                    { num: "03", code: "INTELLIGENCE", fw: "The Leadership Codes"    },
                  ].map(({ num, code, fw }) => (
                    <li key={num} className="flex items-start gap-3">
                      <span className="font-sans text-[10px] font-semibold text-warm-stone/70 tabular-nums w-4 shrink-0 mt-0.5">{num}</span>
                      <div>
                        <p className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-obsidian/75 leading-tight">{code}</p>
                        <p className="font-sans text-[12px] text-obsidian/60 leading-snug mt-0.5">{fw}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8 border-t border-warm-stone/30">
                  <Link
                    href="/courses/elevate-your-self"
                    className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-rose opacity-70 hover:opacity-100 transition-opacity duration-150"
                  >
                    View Lever →
                  </Link>
                </div>
              </div>

              {/* Structure */}
              <div className="flex flex-col pt-12 md:pt-14 pb-14 md:px-12 xl:px-16 border-b border-warm-stone/30 md:border-b-0 md:border-r">
                <div className="w-6 h-0.5 bg-slate mb-5" />
                <p className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-slate mb-3">
                  Structure
                </p>
                <h3 className="font-sans font-bold text-[19px] md:text-[21px] text-obsidian leading-snug tracking-tight mb-10 min-h-[3.75rem]">
                  Streamline Your Structure
                </h3>
                <ul className="space-y-6">
                  {[
                    { num: "04", code: "ALIGNMENT", fw: "The Vision Vehicle"   },
                    { num: "05", code: "PRECISION", fw: "The One Focus"         },
                    { num: "06", code: "AWARENESS", fw: "The Altitude System"   },
                  ].map(({ num, code, fw }) => (
                    <li key={num} className="flex items-start gap-3">
                      <span className="font-sans text-[10px] font-semibold text-warm-stone/70 tabular-nums w-4 shrink-0 mt-0.5">{num}</span>
                      <div>
                        <p className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-obsidian/75 leading-tight">{code}</p>
                        <p className="font-sans text-[12px] text-obsidian/60 leading-snug mt-0.5">{fw}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8 border-t border-warm-stone/30">
                  <Link
                    href="/courses/streamline-your-structure"
                    className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-slate opacity-70 hover:opacity-100 transition-opacity duration-150"
                  >
                    View Lever →
                  </Link>
                </div>
              </div>

              {/* Leverage */}
              <div className="flex flex-col pt-12 md:pt-14 pb-14 md:pl-12 xl:pl-16">
                <div className="w-6 h-0.5 bg-eucalyptus mb-5" />
                <p className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-eucalyptus mb-3">
                  Leverage
                </p>
                <h3 className="font-sans font-bold text-[19px] md:text-[21px] text-obsidian leading-snug tracking-tight mb-10 min-h-[3.75rem]">
                  Unlock Your Leverage
                </h3>
                <ul className="space-y-6">
                  {[
                    { num: "07", code: "FLOW",      fw: "The Cruise Control"      },
                    { num: "08", code: "EMPOWER",   fw: "The Autonomy Blueprint"   },
                    { num: "09", code: "HARMONISE", fw: "The Progressive Edge"     },
                  ].map(({ num, code, fw }) => (
                    <li key={num} className="flex items-start gap-3">
                      <span className="font-sans text-[10px] font-semibold text-warm-stone/70 tabular-nums w-4 shrink-0 mt-0.5">{num}</span>
                      <div>
                        <p className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-obsidian/75 leading-tight">{code}</p>
                        <p className="font-sans text-[12px] text-obsidian/60 leading-snug mt-0.5">{fw}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8 border-t border-warm-stone/30">
                  <Link
                    href="/courses/unlock-your-leverage"
                    className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-eucalyptus opacity-70 hover:opacity-100 transition-opacity duration-150"
                  >
                    View Lever →
                  </Link>
                </div>
              </div>

            </div>

            {/* ── Closing footnote ── */}
            <div className="pt-14 md:pt-16 border-t border-warm-stone/30">
              <div className="flex items-center gap-8">
                <span className="h-px flex-1" style={{ background: "rgba(212,199,183,0.45)" }} />
                <p className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-bronze shrink-0">
                  Freedom
                </p>
                <span className="h-px flex-1" style={{ background: "rgba(212,199,183,0.45)" }} />
              </div>
              <p className="font-sans text-sm text-obsidian/65 leading-snug text-center mt-5">
                A business that runs without you.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 5. WHAT HAPPENS NEXT ────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl">
            <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-bronze mb-6">
              What Happens Next
            </p>
            <ul className="space-y-5">
              {[
                "Instant access to everything you've selected.",
                "Clear direction based on your diagnostic results.",
                "Build the system at your own pace.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-sans text-bronze shrink-0 mt-0.5">
                    -
                  </span>
                  <span className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </>
  );
}
