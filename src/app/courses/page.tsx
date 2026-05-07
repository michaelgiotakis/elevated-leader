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
      <section className="bg-ivory py-20 md:py-28 border-t border-warm-stone">
        <Container>
          <div className="max-w-[1000px] mx-auto">
            <Image
              src="/images/frameworks/course-ecosystem-visual.png"
              alt="The Elevated Leader Course Ecosystem — Three Levers, Nine Modules"
              width={1000}
              height={625}
              className="w-full h-auto"
            />
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
