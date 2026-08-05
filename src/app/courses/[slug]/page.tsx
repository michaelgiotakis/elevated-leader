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
  previewIntro: string;
  previewThemes: string[];
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
    previewIntro:
      "The identity architecture underneath your leadership has never been formally examined. PERCEPTION maps what has been shaping your decisions, standards, and responses — and begins the deliberate recalibration toward who you are becoming.",
    previewThemes: [
      "Mapping the unconscious operating patterns that have been driving your leadership behaviour",
      "Separating your self-worth from your output, performance, and the approval of others",
      "Rebuilding the internal architecture that allows you to lead from clarity rather than urgency",
      "Understanding the adaptations that were once necessary and have now become a ceiling",
      "Beginning the shift from reactive leadership to sovereign, grounded command",
    ],
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
    previewIntro:
      "Most founders at this level have not simply become busy — they have become systematically depleted. The capacity to lead consistently from a clear, regulated state has been quietly eroded by the accumulated weight of constant decision-making, emotional labour, and operational responsibility. PRESENCE is the architecture that rebuilds it.",
    previewThemes: [
      "Understanding the relationship between your internal state and the quality of leadership you are able to deliver",
      "Identifying the depletion patterns accumulating invisibly across the business week — before they compound",
      "Building the internal regulation that allows consistent, high-standard output regardless of external pressure",
      "Protecting personal bandwidth as a strategic leadership asset — not a comfort to be restored after the work is done",
      "Creating the conditions in which your best leadership state becomes deliberate rather than accidental",
    ],
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
    previewIntro:
      "The quality of every decision inside the business traces back to the internal code operating beneath it. When that code is reactive, approval-seeking, or emotionally driven, the business inherits that instability — at every level, with every hire, inside every standard. INTELLIGENCE is the recalibration of that code.",
    previewThemes: [
      "Mapping the decision patterns that currently create drag, delay, and second-guessing inside your leadership",
      "Building an internal decision code that holds consistently — without requiring external validation to feel certain",
      "Developing the standards clarity that allows the team to operate without seeking your constant interpretation",
      "Making high-quality decisions at pace — with significantly less emotional overhead than the current architecture allows",
      "Creating the leadership intelligence that makes clarity the default state, not the exception",
    ],
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
    previewIntro:
      "Most teams are not misaligned because of poor communication. They are misaligned because the destination has never been made clear enough for independent navigation. Every week without structural alignment costs the business momentum, decision quality, and founder energy that should not be required. ALIGNMENT installs the shared direction the business has been operating without.",
    previewThemes: [
      "Mapping the gap between where you believe the business is heading and where it is actually going operationally",
      "Creating the strategic coherence that allows the team to make aligned decisions without needing founder interpretation",
      "Building the shared direction that makes coordination independent of your consistent presence and constant redirection",
      "Translating vision into the operational clarity teams can hold and act from, day to day",
      "Removing the course-correction load that accumulates when direction is held only inside the founder's head",
    ],
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
    previewIntro:
      "Most growth problems at this stage are not market problems. They are focus problems — businesses attempting to scale by expanding surface area rather than deepening what already works. Capacity spreads across too many competing priorities, output diminishes, and the founder carries the coordination weight of holding it all together. PRECISION removes that pattern.",
    previewThemes: [
      "Identifying the activities producing disproportionate results versus those consuming disproportionate capacity",
      "Removing the strategic dilution that fragments team energy across competing priorities and diminishing returns",
      "Building focus as an operational discipline — protected structurally, not merely hoped for",
      "Maximising output per unit of capacity without depleting the capacity that generates it",
      "Creating the clarity that allows the business to scale by going deeper rather than broader",
    ],
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
    previewIntro:
      "Founders who become operational bottlenecks rarely choose to. They descend into execution because the structural altitude system does not yet exist to replace their presence at the ground level. Over time, they lose access to strategic perspective — not from lack of intention, but from the accumulated pull of a business still organised around their direct involvement. AWARENESS rebuilds the operating altitude system.",
    previewThemes: [
      "Understanding which leadership altitude — strategic, operational, or tactical — is actually requiring your attention at each moment",
      "Building the capacity to move between levels fluidly without losing perspective at any of them",
      "Identifying the patterns that pull you permanently into the operational layer when strategy is where your leverage lives",
      "Protecting strategic capacity while maintaining the operational awareness required for clear direction",
      "Creating an operating rhythm that allows leadership at the right altitude, at the right moment, without collapse into the weeds",
    ],
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
    previewIntro:
      "If client delivery requires your attention at multiple touchpoints to maintain standard, the business has not yet been designed for leverage. It has been designed around you — and you have become the constraint on your own scale. FLOW removes the founder from the delivery architecture and replaces personal oversight with structural reliability.",
    previewThemes: [
      "Mapping where your direct involvement is still embedded as a requirement for delivery to hold its standard",
      "Building client journeys that produce consistent quality without your personal management at each stage",
      "Removing the founder dependency points that have been quietly embedded inside delivery over time",
      "Creating systems of consistency that allow the business to deliver at your standard without you holding it personally",
      "Designing the client experience architecture that sustains itself regardless of your direct presence",
    ],
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
    previewIntro:
      "Most teams execute. Very few own. The difference is not about talent or commitment — it is about whether the business has been deliberately structured to transfer real ownership, or only to delegate tasks. When accountability remains unclear and operating rhythm depends on the founder's presence, team capability becomes a resource that cannot be fully deployed. EMPOWER installs the autonomy architecture.",
    previewThemes: [
      "Clarifying the distinction between task completion and genuine accountability inside your current team structure",
      "Placing the right people in roles with real ownership — not responsibilities that route back to you for final authority",
      "Building the operating rhythm that allows the business to move forward without requiring your presence to sustain it",
      "Removing the default patterns that bring team decisions back to the founder when they should be held at the team level",
      "Creating the team architecture in which people lead toward outcomes independently — without needing to be managed toward them",
    ],
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
    previewIntro:
      "Technology should reduce the operational surface area the founder manages — not expand it. Most businesses at this stage have accumulated technology rather than integrated it. The result is fragility, operational noise, and new dependencies that route back to the founder because no one else fully understands the system. HARMONISE creates technology architecture that operates quietly in support of the business.",
    previewThemes: [
      "Auditing the current technology architecture for hidden founder dependencies and points of operational fragility",
      "Building integration that reduces operational noise rather than adding new complexity to manage",
      "Creating systems that scale alongside the business without generating new bottlenecks at each growth stage",
      "Removing the technology dependencies that route operational decisions back to the founder by default",
      "Designing the tech architecture that holds operational consistency without requiring your direct management to sustain it",
    ],
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

      {/* ── EDITORIAL PREVIEW — The Territory ───────────────────────────── */}
      {/*
       * EDITORIAL PREVIEW STATE
       * This section is a deliberate, temporary preview state — not a
       * placeholder. It will be replaced with full module content when
       * each module's framework content, exercises, and assets are complete.
       * See perception/page.tsx for the full module architecture benchmark.
       */}
      <section
        className="py-20 md:py-28 border-t border-warm-stone/20"
        style={{ backgroundColor: mod.heroBg }}
      >
        <Container>

          {/* Section header */}
          <div className="max-w-xl mb-14 md:mb-20">
            <Eyebrow>The Territory</Eyebrow>
            <h2 className="font-sans font-semibold text-[32px] md:text-[40px] leading-tight text-ivory mb-8">
              What {mod.codename} Addresses
            </h2>
            <p className="font-sans text-base md:text-lg text-ivory/60 leading-relaxed">
              {mod.previewIntro}
            </p>
          </div>

          {/* Preview themes */}
          <ul className="max-w-2xl mb-16 md:mb-20">
            {mod.previewThemes.map((theme, i) => (
              <li
                key={i}
                className="flex items-start gap-5 py-5 border-t border-warm-stone/15"
              >
                <span
                  className={`font-sans shrink-0 mt-1 select-none ${mod.accentText}`}
                  aria-hidden="true"
                >
                  —
                </span>
                <span className="font-sans text-base md:text-lg text-ivory/70 leading-relaxed">
                  {theme}
                </span>
              </li>
            ))}
          </ul>

          {/* Development note — restrained, editorial */}
          <div className="max-w-lg border-t border-warm-stone/15 pt-10">
            <div className={`w-6 h-px ${mod.accentBar} mb-5`} aria-hidden="true" />
            <p className="font-sans text-sm text-ivory/30 leading-relaxed">
              The full {mod.codename} experience — framework content, exercises, and
              integration assets — is currently being developed and will be available
              here when complete.
            </p>
          </div>

        </Container>
      </section>

      {/* ── LEVER BRIDGE ────────────────────────────────────────────────── */}
      <Section className="border-t border-warm-stone">
        <Container>
          <div className="max-w-xl">
            <Eyebrow>The Full Lever</Eyebrow>
            <h2 className="font-sans font-semibold text-[28px] md:text-[36px] leading-tight text-obsidian mb-6">
              {mod.codename} Is Part of {mod.leverName}
            </h2>
            <p className="font-sans text-base md:text-lg text-obsidian/60 leading-relaxed mb-10">
              This module sits within the {mod.lever} lever — one of three modules
              building toward {mod.leverName}. You can explore the full lever or add
              this module to your system now.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Button href="/courses" variant="primary">
                Add to System
              </Button>
              <Button href={mod.leverHref} variant="ghost">
                Explore {mod.lever} Lever
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
