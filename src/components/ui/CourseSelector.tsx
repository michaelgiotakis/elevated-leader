"use client";

import Link from "next/link";
import { useState } from "react";

const MODULE_PRICE = 147;
const LEVER_BUNDLE_PRICE = 397;
const FULL_SYSTEM_PRICE = 997;
// 9 × $147 = $1,323 → full system saves $326.
// 3 × $147 = $441 → lever bundle saves $44.

interface Course {
  id: string;
  codename: string;
  framework: string;
  descriptor: string;
  slug: string;
}

interface Lever {
  id: string;
  accentBar: string;
  labelColor: string;
  label: string;
  heading: string;
  tagline: string;
  learnMoreHref: string;
  courses: Course[];
}

const LEVERS: Lever[] = [
  {
    id: "identity",
    accentBar: "bg-muted-rose",
    labelColor: "text-muted-rose",
    label: "Identity",
    heading: "Elevate Your Self",
    tagline: "Lead from clarity instead of pressure.",
    learnMoreHref: "/courses/elevate-your-self",
    courses: [
      {
        id: "01",
        codename: "PERCEPTION",
        framework: "The Evolution Model",
        descriptor: "Identity & Self-Concept",
        slug: "perception",
      },
      {
        id: "02",
        codename: "PRESENCE",
        framework: "The Optimisation Cycle",
        descriptor: "Bandwidth & Regulation",
        slug: "presence",
      },
      {
        id: "03",
        codename: "INTELLIGENCE",
        framework: "The Leadership Codes",
        descriptor: "Clarity & Decision Intelligence",
        slug: "intelligence",
      },
    ],
  },
  {
    id: "structure",
    accentBar: "bg-slate",
    labelColor: "text-slate",
    label: "Structure",
    heading: "Streamline Your Structure",
    tagline: "Build the structure your business can finally run on.",
    learnMoreHref: "/courses/streamline-your-structure",
    courses: [
      {
        id: "04",
        codename: "ALIGNMENT",
        framework: "The Vision Vehicle",
        descriptor: "One Destination, One Business",
        slug: "alignment",
      },
      {
        id: "05",
        codename: "PRECISION",
        framework: "The One Focus",
        descriptor: "Profit per Capacity Unit",
        slug: "precision",
      },
      {
        id: "06",
        codename: "AWARENESS",
        framework: "The Altitude System",
        descriptor: "30k / 20k / 10k OS",
        slug: "awareness",
      },
    ],
  },
  {
    id: "leverage",
    accentBar: "bg-eucalyptus",
    labelColor: "text-eucalyptus",
    label: "Leverage",
    heading: "Unlock Your Leverage",
    tagline: "Scale without becoming the bottleneck again.",
    learnMoreHref: "/courses/unlock-your-leverage",
    courses: [
      {
        id: "07",
        codename: "FLOW",
        framework: "The Cruise Control",
        descriptor: "Self-Sustaining Client Journeys",
        slug: "flow",
      },
      {
        id: "08",
        codename: "EMPOWER",
        framework: "The Autonomy Blueprint",
        descriptor: "Seats, Owners & Rhythm",
        slug: "empower",
      },
      {
        id: "09",
        codename: "HARMONISE",
        framework: "The Progressive Edge",
        descriptor: "Calm, Integrated Tech",
        slug: "harmonise",
      },
    ],
  },
];

const ALL_MODULE_IDS = LEVERS.flatMap((l) => l.courses.map((c) => c.id));

interface PricingResult {
  total: number;
  label: string;
  savings: number;
}

function calculatePricing(selected: Set<string>): PricingResult {
  const count = selected.size;
  if (count === 0) return { total: 0, label: "", savings: 0 };

  if (ALL_MODULE_IDS.every((id) => selected.has(id))) {
    return {
      total: FULL_SYSTEM_PRICE,
      label: "Full system — all 9 modules",
      savings: ALL_MODULE_IDS.length * MODULE_PRICE - FULL_SYSTEM_PRICE,
    };
  }

  let total = 0;
  let savings = 0;
  let bundleCount = 0;
  let completedLeverLabel = "";

  for (const lever of LEVERS) {
    const inLever = lever.courses.filter((c) => selected.has(c.id)).length;
    if (inLever === 3) {
      total += LEVER_BUNDLE_PRICE;
      savings += MODULE_PRICE * 3 - LEVER_BUNDLE_PRICE;
      bundleCount++;
      completedLeverLabel = lever.label;
    } else {
      total += inLever * MODULE_PRICE;
    }
  }

  let label: string;
  if (bundleCount === 1 && count === 3) {
    label = `${completedLeverLabel} lever bundle`;
  } else if (count === 1) {
    label = "1 module selected";
  } else {
    label = `${count} modules selected`;
  }

  return { total, label, savings };
}

export function CourseSelector() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const count = selected.size;
  const { total, label, savings } = calculatePricing(selected);
  const isFullSystem = ALL_MODULE_IDS.every((id) => selected.has(id));

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleLever(lever: Lever) {
    setSelected((prev) => {
      const next = new Set(prev);
      const allSelected = lever.courses.every((c) => next.has(c.id));
      if (allSelected) {
        lever.courses.forEach((c) => next.delete(c.id));
      } else {
        lever.courses.forEach((c) => next.add(c.id));
      }
      return next;
    });
  }

  function toggleFullSystem() {
    setSelected((prev) => {
      const isAll = ALL_MODULE_IDS.every((id) => prev.has(id));
      return isAll ? new Set<string>() : new Set(ALL_MODULE_IDS);
    });
  }

  return (
    <>
      {/* pb-28 ensures sticky bar never obscures the full-system card */}
      <div className="pb-28">

        {/* Lever columns — editorial breathing room, ecosystem orientation rhythm */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-16 lg:gap-20">
          {LEVERS.map((lever) => {
            const isLeverComplete = lever.courses.every((c) =>
              selected.has(c.id)
            );
            return (
              <div
                key={lever.id}
                className={[
                  "transition-all duration-300",
                  isLeverComplete ? "ring-1 ring-inset ring-warm-stone/30" : "",
                ].join(" ")}
              >
                {/* Accent line */}
                <div className={`w-10 h-0.5 ${lever.accentBar} mb-4`} />

                {/* Lever label */}
                <p
                  className={`font-sans text-[10px] font-semibold tracking-[0.3em] uppercase ${lever.labelColor} mb-2`}
                >
                  {lever.label}
                </p>

                {/* Lever heading */}
                <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-obsidian leading-snug mb-3">
                  {lever.heading}
                </h3>

                {/* Tagline — md:h-[3rem] reserves consistent 2-line height so the
                    first module row aligns across all three columns regardless
                    of how the tagline wraps. Mobile uses natural height. */}
                <p className="font-sans text-sm text-obsidian/55 leading-relaxed mb-6 md:h-[3rem] md:overflow-hidden">
                  {lever.tagline}
                </p>

                {/* Module rows */}
                <div className="space-y-3 mb-5">
                  {lever.courses.map((course) => {
                    const isSelected = selected.has(course.id);
                    return (
                      <div
                        key={course.id}
                        className={[
                          "border transition-all duration-150",
                          isSelected
                            ? "border-bronze/65 bg-warm-stone/10"
                            : "border-warm-stone/60 bg-ivory",
                        ].join(" ")}
                      >
                        {/* ── Info area ── */}
                        <div className="px-5 pt-5 pb-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-3">
                              <span className="font-sans text-[9px] tabular-nums text-warm-stone/70 shrink-0 mt-0.5">
                                {course.id}
                              </span>
                              <div>
                                <p
                                  className={`font-sans text-[10px] font-semibold tracking-[0.18em] uppercase leading-tight mb-1.5 ${
                                    isSelected ? "text-obsidian" : "text-obsidian/65"
                                  }`}
                                >
                                  {course.codename}
                                </p>
                                <p
                                  className={`font-sans text-xs leading-snug mb-1 ${
                                    isSelected ? "text-obsidian/70" : "text-obsidian/50"
                                  }`}
                                >
                                  {course.framework}
                                </p>
                                <p
                                  className={`font-sans text-[10px] leading-snug ${
                                    isSelected ? "text-obsidian/45" : "text-obsidian/30"
                                  }`}
                                >
                                  {course.descriptor}
                                </p>
                              </div>
                            </div>
                            {/* Selected check */}
                            <span
                              aria-hidden="true"
                              className={`shrink-0 transition-opacity duration-150 mt-0.5 ${
                                isSelected ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                                <path
                                  d="M1 5L4.5 9L12 1"
                                  stroke="#B8864C"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>

                        {/* ── Action row ── */}
                        <div className="px-5 pb-3.5 pt-3 border-t border-warm-stone/25 flex items-center justify-between gap-3">
                          {/* Primary: View Module */}
                          <Link
                            href={`/courses/${course.slug}`}
                            className="font-sans text-[11px] font-semibold text-obsidian hover:text-bronze transition-colors duration-150 flex items-center gap-1.5"
                          >
                            View Module
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                              <path d="M1 4H9M6.5 1.5L9 4L6.5 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>

                          {/* Secondary: Add to path */}
                          <button
                            onClick={() => toggle(course.id)}
                            aria-pressed={isSelected}
                            className={[
                              "flex items-center gap-1.5 font-sans text-[10px] transition-colors duration-150 cursor-pointer",
                              isSelected
                                ? "text-bronze"
                                : "text-obsidian/35 hover:text-obsidian/60",
                            ].join(" ")}
                          >
                            {isSelected ? (
                              <>
                                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                                  <path d="M1 4.5L3.8 7.5L10 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Selected</span>
                              </>
                            ) : (
                              <>
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                                  <path d="M1 1H3L4.68 8.39A1 1 0 0 0 5.66 9H11A1 1 0 0 0 11.97 8.27L13 4H4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                  <circle cx="5.5" cy="11.5" r="0.75" fill="currentColor" />
                                  <circle cx="10.5" cy="11.5" r="0.75" fill="currentColor" />
                                </svg>
                                <span>Add</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bundle option */}
                <button
                  onClick={() => toggleLever(lever)}
                  className={[
                    "w-full text-left px-5 py-4 border transition-all duration-150 mb-5",
                    isLeverComplete
                      ? "border-bronze/70 bg-warm-stone/15"
                      : "border-warm-stone/40 bg-ivory/40 hover:border-warm-stone/70",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-sans text-[11px] font-semibold text-obsidian/80 leading-tight">
                        Complete {lever.label} Lever
                      </p>
                      <p className="font-sans text-[10px] text-obsidian/45 mt-0.5">
                        All 3 modules — save $44
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-sans text-sm font-semibold text-obsidian">
                        ${LEVER_BUNDLE_PRICE}
                      </p>
                      <p className="font-sans text-[10px] text-obsidian/25 line-through">
                        ${MODULE_PRICE * 3}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Explore link */}
                <div className="border-t border-warm-stone/25 pt-4">
                  <Link
                    href={lever.learnMoreHref}
                    className={`font-sans text-sm font-medium ${lever.labelColor} opacity-70 hover:opacity-100 hover:underline underline-offset-2 decoration-1 transition-opacity duration-150`}
                  >
                    Explore {lever.label} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── FULL SYSTEM OFFER ──────────────────────────────────────────── */}
        <div
          className={[
            "mt-14 md:mt-16 bg-obsidian rounded p-10 md:p-14 transition-all duration-300",
            isFullSystem ? "ring-2 ring-bronze/50" : "",
          ].join(" ")}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16">
            {/* Left — copy */}
            <div className="max-w-lg">
              <p className="font-sans text-[10px] font-semibold tracking-[0.45em] uppercase text-bronze mb-4">
                Full System
              </p>
              <h3 className="font-sans font-bold text-[22px] md:text-[26px] text-ivory leading-snug mb-4">
                Build the Business That Runs Without You
              </h3>
              <p className="font-sans text-sm md:text-base text-ivory/65 leading-relaxed">
                The full system combines Identity, Structure, and Leverage into
                one operating model designed to remove you as the bottleneck
                across the entire business.
              </p>
            </div>

            {/* Right — price + CTA */}
            <div className="shrink-0 md:text-right">
              <p className="font-sans text-[12px] text-ivory/30 line-through mb-1">
                $1,323
              </p>
              <p className="font-sans font-bold text-4xl md:text-5xl text-ivory leading-none mb-1">
                $997
              </p>
              <p className="font-sans text-xs text-bronze font-semibold mb-6 md:mb-8">
                Save $326
              </p>
              <button
                onClick={toggleFullSystem}
                className={[
                  "font-sans font-semibold tracking-widest uppercase transition-colors duration-200 text-[11px] px-6 py-3 sm:text-sm sm:px-8 sm:py-4 w-full md:w-auto",
                  isFullSystem
                    ? "bg-rosewood text-ivory"
                    : "bg-bronze text-ivory hover:bg-rosewood",
                ].join(" ")}
              >
                {isFullSystem ? "Full System Selected" : "Select Full System"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*
       * Sticky checkout bar.
       * Slides up when at least one module is selected.
       * Left: total + savings badge + selection label.
       * Right: primary CTA + "instant access" reassurance line.
       */}
      <div
        aria-live="polite"
        className={`fixed bottom-0 inset-x-0 z-50 border-t border-warm-stone/30 transition-transform duration-300 ease-out ${
          count > 0 ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ backgroundColor: "rgba(246,241,233,0.95)", backdropFilter: "blur(12px)" }}
      >
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between gap-4">
          {/* Left — selection summary */}
          <div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <p className="font-sans text-base font-semibold text-obsidian leading-tight">
                ${total.toLocaleString()}
              </p>
              {savings > 0 && (
                <p className="font-sans text-xs font-semibold text-eucalyptus leading-tight">
                  Save ${savings}
                </p>
              )}
            </div>
            <p className="font-sans text-xs text-obsidian/50 leading-tight mt-0.5">
              {label}
            </p>
          </div>

          {/* Right — proceed CTA */}
          <div className="flex flex-col items-end gap-1 shrink-0">
            <Link
              href="/checkout"
              className="font-sans font-semibold tracking-[0.14em] uppercase bg-bronze text-ivory hover:bg-rosewood transition-colors duration-200 text-[11px] px-5 py-2.5 sm:px-7 sm:py-3"
            >
              <span className="sm:hidden">Proceed</span>
              <span className="hidden sm:inline">Continue to Checkout</span>
            </Link>
            <p className="font-sans text-[10px] text-obsidian/35 hidden sm:block leading-tight">
              Instant access after purchase.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
