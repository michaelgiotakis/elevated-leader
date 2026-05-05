import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CourseSelector } from "@/components/ui/CourseSelector";
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

      {/* ── 2. HOW TO USE ───────────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl">
            <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-bronze mb-6">
              How to Use This
            </p>
            <div className="space-y-4">
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Start with the diagnostic. It shows you where your business is
                breaking.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                Then choose the course or courses that fix that area.
              </p>
              <p className="font-sans text-base md:text-lg text-obsidian/70 leading-relaxed">
                You can go deep in one lever or build across all three.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── 3 + 4. COURSE GRID + PRICING PANEL ─────────────────────────── */}
      <Section className="border-t border-warm-stone bg-warm-stone/20">
        <Container>
          <CourseSelector />
        </Container>
      </Section>

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
