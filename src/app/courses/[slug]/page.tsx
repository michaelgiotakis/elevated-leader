import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

function heroBlurDataURL(hex: string): string {
  return `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><rect width="8" height="8" fill="${hex}"/></svg>`)}`;
}

interface ModuleEntry {
  id: string;
  codename: string;
  framework: string;
  descriptor: string;
  lever: string;
  leverName: string;
  leverHref: string;
  accentBar: string;
  accentText: string;
  metaText: string;
  heroBg: string;
  heroImage: string;
  description?: string;
}

const MODULE_REGISTRY: Record<string, ModuleEntry> = {
  perception: {
    id: "01",
    codename: "PERCEPTION",
    framework: "The Evolution Model",
    descriptor: "Identity & Self-Concept",
    lever: "Identity",
    leverName: "Elevate Your Self",
    leverHref: "/courses/elevate-your-self",
    accentBar: "bg-warm-stone/40",
    accentText: "text-muted-rose",
    metaText: "text-warm-stone",
    heroBg: "#232937",
    heroImage: "/images/editorial-webp/homepage-editorial-hero.webp",
  },
  presence: {
    id: "02",
    codename: "PRESENCE",
    framework: "The Optimisation Cycle",
    descriptor: "Bandwidth & Regulation",
    lever: "Identity",
    leverName: "Elevate Your Self",
    leverHref: "/courses/elevate-your-self",
    accentBar: "bg-warm-stone/40",
    accentText: "text-muted-rose",
    metaText: "text-warm-stone",
    heroBg: "#232937",
    heroImage: "/images/editorial-webp/homepage-editorial-hero.webp",
    description:
      "The Optimisation Cycle builds the internal regulation and personal bandwidth that allows you to lead consistently from your best state — rather than from depletion, reactivity, or accumulated noise.",
  },
  intelligence: {
    id: "03",
    codename: "INTELLIGENCE",
    framework: "The Leadership Codes",
    descriptor: "Clarity & Decision Intelligence",
    lever: "Identity",
    leverName: "Elevate Your Self",
    leverHref: "/courses/elevate-your-self",
    accentBar: "bg-warm-stone/40",
    accentText: "text-muted-rose",
    metaText: "text-warm-stone",
    heroBg: "#232937",
    heroImage: "/images/editorial-webp/homepage-editorial-hero.webp",
    description:
      "The Leadership Codes develop the decision intelligence and leadership clarity that turns reactive choices into deliberate, high-quality standards — made fast, and held consistently across the business.",
  },
  alignment: {
    id: "04",
    codename: "ALIGNMENT",
    framework: "The Vision Vehicle",
    descriptor: "One Destination, One Business",
    lever: "Structure",
    leverName: "Streamline Your Structure",
    leverHref: "/courses/streamline-your-structure",
    accentBar: "bg-slate",
    accentText: "text-slate",
    metaText: "text-warm-stone",
    heroBg: "#1C1D21",
    heroImage: "/images/editorial-webp/streamline-hero-editorial.webp",
  },
  precision: {
    id: "05",
    codename: "PRECISION",
    framework: "The One Focus",
    descriptor: "Profit per Capacity Unit",
    lever: "Structure",
    leverName: "Streamline Your Structure",
    leverHref: "/courses/streamline-your-structure",
    accentBar: "bg-slate",
    accentText: "text-slate",
    metaText: "text-warm-stone",
    heroBg: "#1C1D21",
    heroImage: "/images/editorial-webp/streamline-hero-editorial.webp",
  },
  awareness: {
    id: "06",
    codename: "AWARENESS",
    framework: "The Altitude System",
    descriptor: "30k / 20k / 10k OS",
    lever: "Structure",
    leverName: "Streamline Your Structure",
    leverHref: "/courses/streamline-your-structure",
    accentBar: "bg-slate",
    accentText: "text-slate",
    metaText: "text-warm-stone",
    heroBg: "#1C1D21",
    heroImage: "/images/editorial-webp/streamline-hero-editorial.webp",
  },
  flow: {
    id: "07",
    codename: "FLOW",
    framework: "The Cruise Control",
    descriptor: "Self-Sustaining Client Journeys",
    lever: "Leverage",
    leverName: "Unlock Your Leverage",
    leverHref: "/courses/unlock-your-leverage",
    accentBar: "bg-warm-stone/40",
    accentText: "text-eucalyptus",
    metaText: "text-warm-stone",
    heroBg: "#111816",
    heroImage: "/images/editorial-webp/leverage-hero-editorial.webp",
  },
  empower: {
    id: "08",
    codename: "EMPOWER",
    framework: "The Autonomy Blueprint",
    descriptor: "Seats, Owners & Rhythm",
    lever: "Leverage",
    leverName: "Unlock Your Leverage",
    leverHref: "/courses/unlock-your-leverage",
    accentBar: "bg-warm-stone/40",
    accentText: "text-eucalyptus",
    metaText: "text-warm-stone",
    heroBg: "#111816",
    heroImage: "/images/editorial-webp/leverage-hero-editorial.webp",
  },
  harmonise: {
    id: "09",
    codename: "HARMONISE",
    framework: "The Progressive Edge",
    descriptor: "Calm, Integrated Tech",
    lever: "Leverage",
    leverName: "Unlock Your Leverage",
    leverHref: "/courses/unlock-your-leverage",
    accentBar: "bg-warm-stone/40",
    accentText: "text-eucalyptus",
    metaText: "text-warm-stone",
    heroBg: "#111816",
    heroImage: "/images/editorial-webp/leverage-hero-editorial.webp",
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
      {/* ── CINEMATIC EDITORIAL HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: mod.heroBg }}>
        <div className="flex flex-col lg:flex-row lg:min-h-[820px] xl:min-h-[860px]">

          {/* Left — typography */}
          <div className="relative z-10 flex items-center lg:w-[46%] px-6 md:px-10 lg:px-16 pt-16 pb-12 lg:py-20">
            <div className="w-full max-w-[520px]">

              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 mb-12" aria-label="Breadcrumb">
                <Link
                  href="/courses"
                  className="font-sans text-[10px] text-ivory/35 hover:text-ivory/65 transition-colors duration-150"
                >
                  Courses
                </Link>
                <span className="font-sans text-[10px] text-ivory/20" aria-hidden="true">→</span>
                <Link
                  href={mod.leverHref}
                  className={`font-sans text-[10px] opacity-65 hover:opacity-100 transition-opacity duration-150 ${mod.metaText}`}
                >
                  {mod.leverName}
                </Link>
                <span className="font-sans text-[10px] text-ivory/20" aria-hidden="true">→</span>
                <span className="font-sans text-[10px] text-ivory/45">{mod.codename}</span>
              </nav>

              {/* Module eyebrow */}
              <div className="mb-10">
                <div className={`w-10 h-px ${mod.accentBar} mb-5`} />
                <p className={`font-sans text-[10px] font-semibold tracking-[0.45em] uppercase ${mod.metaText}`}>
                  {mod.lever} Lever — Module {mod.id}
                </p>
              </div>

              <p className={`font-sans text-[11px] font-bold tracking-[0.3em] uppercase mb-4 ${mod.metaText}`}>
                {mod.codename}
              </p>

              <h1 className="font-heading text-[40px] md:text-[52px] lg:text-[54px] leading-[1.05] text-ivory mb-8 tracking-tight">
                {mod.framework}
              </h1>

              <p className={`font-sans text-lg md:text-xl text-warm-stone font-medium leading-snug ${mod.description ? "mb-5" : "mb-12"}`}>
                {mod.descriptor}
              </p>

              {mod.description && (
                <p className="font-sans text-base md:text-lg text-ivory/55 leading-relaxed mb-12">
                  {mod.description}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-start gap-5">
                <Button href="/courses" variant="primary">
                  Add to System
                </Button>
                <Button href={mod.leverHref} variant="ghost">
                  Explore {mod.lever} Lever
                </Button>
              </div>

            </div>
          </div>

          {/* Right — editorial atmosphere */}
          <div
            className="relative h-[64vw] md:h-[52vw] overflow-hidden lg:absolute lg:right-0 lg:inset-y-0 lg:h-auto lg:w-[60%]"
            style={{ backgroundColor: mod.heroBg }}
          >
            <Image
              src={mod.heroImage}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-[42%_12%] lg:object-top"
              priority
              unoptimized
              placeholder="blur"
              blurDataURL={heroBlurDataURL(mod.heroBg)}
            />

            {/* Left atmospheric blend — hero bg dissolves into text column */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `linear-gradient(to right, ${mod.heroBg} 0%, transparent 24%)` }}
              aria-hidden="true"
            />

            {/* Mobile top dissolve — image emerges from atmosphere */}
            <div
              className="absolute top-0 left-0 right-0 h-20 pointer-events-none lg:hidden"
              style={{ background: `linear-gradient(to bottom, ${mod.heroBg} 0%, transparent 100%)` }}
              aria-hidden="true"
            />

            {/* Bottom dissolve — mobile only: image fades back into atmosphere */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none lg:hidden"
              style={{ background: `linear-gradient(to top, ${mod.heroBg} 0%, transparent 100%)` }}
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
                ← Back to {mod.leverName}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
