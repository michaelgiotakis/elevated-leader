import type { Metadata } from "next";
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
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-28 md:py-40">
        <Container>
          <div className="max-w-2xl">
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.06] text-ivory mb-8 tracking-tight">
              Build a Business That Runs Without You
            </h1>
            <p className="font-sans text-base md:text-lg text-warm-stone leading-relaxed mb-10">
              Choose where to start, or follow the full system based on your
              diagnostic.
            </p>
            <Button href={CTA_LINKS.diagnostic} variant="primary" external>
              Take the Diagnostic
            </Button>
          </div>
        </Container>
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
            <div className="text-center mb-16 md:mb-24">
              <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-bronze mb-5">
                The Full Operating System
              </p>
              <h2 className="font-heading text-[30px] md:text-[44px] leading-tight text-obsidian tracking-tight mb-5">
                Three Levers. Nine Modules.
              </h2>
              <p className="font-sans text-sm md:text-base text-obsidian/45 leading-relaxed max-w-sm mx-auto">
                One integrated architecture for removing yourself as the bottleneck.
              </p>
            </div>

            {/* ── Orbital arc — desktop only ── */}
            <div className="relative hidden md:block" aria-hidden="true">
              {/* Atmospheric bronze haze — centered on arc geometric peak */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 62% 100% at 50% 28%, rgba(184,134,76,0.055) 0%, transparent 68%)",
                }}
              />
              {/* viewBox 960×92 gives 2px clearance below arc endpoints at y=90 */}
              <svg viewBox="0 0 960 92" fill="none" className="w-full relative">
                {/* Arc runs edge-to-edge; endpoints land at y=90, 2px above grid border */}
                <path
                  d="M 0 90 C 170 10, 790 10, 960 90"
                  stroke="rgba(212,199,183,0.58)"
                  strokeWidth="1.6"
                  fill="none"
                />
                {/* Identity node — t≈0.22 on curve: (168, 49) */}
                <circle cx="168" cy="49" r="3.5" fill="rgba(201,140,140,0.82)" />
                {/* Structure node — t=0.50 on curve: (480, 30) */}
                <circle cx="480" cy="30" r="3.5" fill="rgba(50,56,71,0.68)" />
                {/* Leverage node — t≈0.78 on curve: (792, 49) */}
                <circle cx="792" cy="49" r="3.5" fill="rgba(62,95,82,0.80)" />
              </svg>
            </div>

            {/* ── Three lever territories ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-warm-stone/40">

              {/* Identity */}
              <div className="flex flex-col pt-10 md:pt-12 pb-12 md:pr-12 xl:pr-16 border-b border-warm-stone/40 md:border-b-0 md:border-r">
                <div className="w-6 h-0.5 bg-muted-rose mb-5" />
                <p className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-muted-rose mb-3">
                  Identity
                </p>
                <h3 className="font-sans font-bold text-[19px] md:text-[21px] text-obsidian leading-snug tracking-tight mb-8 min-h-[3.75rem]">
                  Elevate Your Self
                </h3>
                <ul className="space-y-5">
                  {[
                    { num: "01", code: "PERCEPTION",   fw: "The Evolution Model"     },
                    { num: "02", code: "PRESENCE",     fw: "The Optimisation Cycle"  },
                    { num: "03", code: "INTELLIGENCE", fw: "The Leadership Codes"    },
                  ].map(({ num, code, fw }) => (
                    <li key={num} className="flex items-start gap-3">
                      <span className="font-sans text-[10px] font-semibold text-warm-stone tabular-nums w-4 shrink-0 mt-0.5">{num}</span>
                      <div>
                        <p className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-obsidian/80 leading-tight">{code}</p>
                        <p className="font-sans text-[12px] text-obsidian/50 leading-snug mt-0.5">{fw}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7 border-t border-warm-stone/40">
                  <Link
                    href="/courses/elevate-your-self"
                    className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-muted-rose opacity-70 hover:opacity-100 transition-opacity duration-150"
                  >
                    View Lever →
                  </Link>
                </div>
              </div>

              {/* Structure */}
              <div className="flex flex-col pt-10 md:pt-12 pb-12 md:px-12 xl:px-16 border-b border-warm-stone/40 md:border-b-0 md:border-r">
                <div className="w-6 h-0.5 bg-slate mb-5" />
                <p className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-slate mb-3">
                  Structure
                </p>
                <h3 className="font-sans font-bold text-[19px] md:text-[21px] text-obsidian leading-snug tracking-tight mb-8 min-h-[3.75rem]">
                  Streamline Your Structure
                </h3>
                <ul className="space-y-5">
                  {[
                    { num: "04", code: "ALIGNMENT", fw: "The Vision Vehicle"   },
                    { num: "05", code: "PRECISION", fw: "The One Focus"         },
                    { num: "06", code: "AWARENESS", fw: "The Altitude System"   },
                  ].map(({ num, code, fw }) => (
                    <li key={num} className="flex items-start gap-3">
                      <span className="font-sans text-[10px] font-semibold text-warm-stone tabular-nums w-4 shrink-0 mt-0.5">{num}</span>
                      <div>
                        <p className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-obsidian/80 leading-tight">{code}</p>
                        <p className="font-sans text-[12px] text-obsidian/50 leading-snug mt-0.5">{fw}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7 border-t border-warm-stone/40">
                  <Link
                    href="/courses/streamline-your-structure"
                    className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-slate opacity-65 hover:opacity-100 transition-opacity duration-150"
                  >
                    View Lever →
                  </Link>
                </div>
              </div>

              {/* Leverage */}
              <div className="flex flex-col pt-10 md:pt-12 pb-12 md:pl-12 xl:pl-16">
                <div className="w-6 h-0.5 bg-eucalyptus mb-5" />
                <p className="font-sans text-[11px] font-semibold tracking-[0.35em] uppercase text-eucalyptus mb-3">
                  Leverage
                </p>
                <h3 className="font-sans font-bold text-[19px] md:text-[21px] text-obsidian leading-snug tracking-tight mb-8 min-h-[3.75rem]">
                  Unlock Your Leverage
                </h3>
                <ul className="space-y-5">
                  {[
                    { num: "07", code: "FLOW",      fw: "The Cruise Control"      },
                    { num: "08", code: "EMPOWER",   fw: "The Autonomy Blueprint"   },
                    { num: "09", code: "HARMONISE", fw: "The Progressive Edge"     },
                  ].map(({ num, code, fw }) => (
                    <li key={num} className="flex items-start gap-3">
                      <span className="font-sans text-[10px] font-semibold text-warm-stone tabular-nums w-4 shrink-0 mt-0.5">{num}</span>
                      <div>
                        <p className="font-sans text-[11px] font-bold tracking-[0.18em] uppercase text-obsidian/80 leading-tight">{code}</p>
                        <p className="font-sans text-[12px] text-obsidian/50 leading-snug mt-0.5">{fw}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-7 border-t border-warm-stone/40">
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
            <div className="pt-14 md:pt-16 border-t border-warm-stone/40">
              <div className="flex items-center gap-8">
                <span className="h-px flex-1" style={{ background: "rgba(212,199,183,0.40)" }} />
                <p className="font-sans text-[11px] font-semibold tracking-[0.5em] uppercase text-bronze shrink-0">
                  Freedom
                </p>
                <span className="h-px flex-1" style={{ background: "rgba(212,199,183,0.40)" }} />
              </div>
              <p className="font-sans text-[13px] text-obsidian/50 leading-snug text-center mt-4">
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
