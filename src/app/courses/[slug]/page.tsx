import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

interface ModuleEntry {
  id: string;
  codename: string;
  framework: string;
  descriptor: string;
  lever: string;
  leverHref: string;
  accentBar: string;
  accentText: string;
}

const MODULE_REGISTRY: Record<string, ModuleEntry> = {
  perception: {
    id: "01",
    codename: "PERCEPTION",
    framework: "The Evolution Model",
    descriptor: "Identity & Self-Concept",
    lever: "Identity",
    leverHref: "/courses/elevate-your-self",
    accentBar: "bg-muted-rose",
    accentText: "text-muted-rose",
  },
  presence: {
    id: "02",
    codename: "PRESENCE",
    framework: "The Optimisation Cycle",
    descriptor: "Bandwidth & Regulation",
    lever: "Identity",
    leverHref: "/courses/elevate-your-self",
    accentBar: "bg-muted-rose",
    accentText: "text-muted-rose",
  },
  intelligence: {
    id: "03",
    codename: "INTELLIGENCE",
    framework: "The Leadership Codes",
    descriptor: "Clarity & Decision Intelligence",
    lever: "Identity",
    leverHref: "/courses/elevate-your-self",
    accentBar: "bg-muted-rose",
    accentText: "text-muted-rose",
  },
  alignment: {
    id: "04",
    codename: "ALIGNMENT",
    framework: "The Vision Vehicle",
    descriptor: "One Destination, One Business",
    lever: "Structure",
    leverHref: "/courses/streamline-your-structure",
    accentBar: "bg-slate",
    accentText: "text-slate",
  },
  precision: {
    id: "05",
    codename: "PRECISION",
    framework: "The One Focus",
    descriptor: "Profit per Capacity Unit",
    lever: "Structure",
    leverHref: "/courses/streamline-your-structure",
    accentBar: "bg-slate",
    accentText: "text-slate",
  },
  awareness: {
    id: "06",
    codename: "AWARENESS",
    framework: "The Altitude System",
    descriptor: "30k / 20k / 10k OS",
    lever: "Structure",
    leverHref: "/courses/streamline-your-structure",
    accentBar: "bg-slate",
    accentText: "text-slate",
  },
  flow: {
    id: "07",
    codename: "FLOW",
    framework: "The Cruise Control",
    descriptor: "Self-Sustaining Client Journeys",
    lever: "Leverage",
    leverHref: "/courses/unlock-your-leverage",
    accentBar: "bg-eucalyptus",
    accentText: "text-eucalyptus",
  },
  empower: {
    id: "08",
    codename: "EMPOWER",
    framework: "The Autonomy Blueprint",
    descriptor: "Seats, Owners & Rhythm",
    lever: "Leverage",
    leverHref: "/courses/unlock-your-leverage",
    accentBar: "bg-eucalyptus",
    accentText: "text-eucalyptus",
  },
  harmonise: {
    id: "09",
    codename: "HARMONISE",
    framework: "The Progressive Edge",
    descriptor: "Calm, Integrated Tech",
    lever: "Leverage",
    leverHref: "/courses/unlock-your-leverage",
    accentBar: "bg-eucalyptus",
    accentText: "text-eucalyptus",
  },
};

export function generateStaticParams() {
  return Object.keys(MODULE_REGISTRY).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mod = MODULE_REGISTRY[slug];
  if (!mod) return { title: "Module Not Found" };
  return {
    title: `${mod.framework} — ${mod.lever} | The Elevated Leader`,
    description: `${mod.codename}: ${mod.descriptor}. Part of the ${mod.lever} lever — The Elevated Leader.`,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = MODULE_REGISTRY[slug];
  if (!mod) notFound();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-obsidian py-28 md:py-40">
        <Container>
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-10">
              <Link
                href="/courses"
                className="font-sans text-[10px] text-ivory/30 hover:text-ivory/60 transition-colors duration-150"
              >
                Courses
              </Link>
              <span className="font-sans text-[10px] text-ivory/20">→</span>
              <Link
                href={mod.leverHref}
                className={`font-sans text-[10px] hover:opacity-100 transition-opacity duration-150 opacity-60 ${mod.accentText}`}
              >
                {mod.lever}
              </Link>
              <span className="font-sans text-[10px] text-ivory/20">→</span>
              <span className="font-sans text-[10px] text-ivory/40">
                {mod.codename}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="mb-8">
              <div className={`w-10 h-px ${mod.accentBar} mb-5`} />
              <p
                className={`font-sans text-[10px] font-semibold tracking-[0.45em] uppercase ${mod.accentText}`}
              >
                {mod.lever} Lever — Module {mod.id}
              </p>
            </div>

            <p
              className={`font-sans text-[10px] font-bold tracking-[0.25em] uppercase mb-3 ${mod.accentText}`}
            >
              {mod.codename}
            </p>
            <h1 className="font-heading text-[44px] md:text-[60px] leading-[1.06] text-ivory mb-5 tracking-tight">
              {mod.framework}
            </h1>
            <p className="font-sans text-lg md:text-xl text-warm-stone font-medium mb-12 leading-snug">
              {mod.descriptor}
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button href="/courses" variant="primary">
                Add to System
              </Button>
              <Button href={mod.leverHref} variant="ghost">
                Explore {mod.lever} Lever
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PLACEHOLDER BODY ─────────────────────────────────────────────── */}
      {/*
       * MODULE DETAIL CONTENT PLACEHOLDER
       * Replace this section with full module content when ready.
       * Suggested sections:
       *   1. What This Module Covers
       *   2. The Framework Explained
       *   3. What You'll Build / Walk Away With
       *   4. Who This Module Is For
       *   5. Module CTA (Add to System)
       */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl">
            <Eyebrow>Module Detail</Eyebrow>
            <h2 className="font-sans font-semibold text-[28px] md:text-[36px] leading-tight text-obsidian mb-6">
              Full module detail coming soon.
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/60 leading-relaxed mb-10">
              This page will contain the complete breakdown of{" "}
              <span className="font-semibold text-obsidian">{mod.framework}</span>{" "}
              — what it covers, what you will build, and why it matters at this
              stage of your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button href="/courses" variant="primary">
                Add to System
              </Button>
              <Link
                href={mod.leverHref}
                className="font-sans text-sm font-semibold text-bronze underline underline-offset-4 decoration-1 hover:text-obsidian transition-colors duration-150 self-center"
              >
                ← Back to {mod.lever} Lever
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
