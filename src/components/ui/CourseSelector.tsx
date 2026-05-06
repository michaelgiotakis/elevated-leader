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
  title: string;
  description: string;
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
        title: "Leadership Identity",
        description:
          "Clarify how you think and lead so decisions become fast and clear.",
      },
      {
        id: "02",
        title: "Decision Standards",
        description:
          "Set the criteria that let you say yes or no with speed and certainty.",
      },
      {
        id: "03",
        title: "Personal Operating System",
        description:
          "Build the rhythms that protect your focus and keep you performing.",
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
        title: "Roles & Responsibilities",
        description:
          "Make ownership clear so your team stops waiting for your input.",
      },
      {
        id: "05",
        title: "Systems & Workflows",
        description: "Document the processes that run the business without you.",
      },
      {
        id: "06",
        title: "Operational Clarity",
        description:
          "Remove ambiguity so nothing important gets missed or dropped.",
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
        title: "Delegation & Ownership",
        description:
          "Hand off real accountability so you can step back without losing control.",
      },
      {
        id: "08",
        title: "Team Leverage",
        description:
          "Build a team that moves with autonomy and clear direction.",
      },
      {
        id: "09",
        title: "Scale Architecture",
        description:
          "Create the structure that grows revenue without growing complexity.",
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

        {/* Lever columns — natural block flow, compact consistent margins */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10 lg:gap-12">
          {LEVERS.map((lever) => {
            const isLeverComplete = lever.courses.every((c) =>
              selected.has(c.id)
            );
            return (
              <div
                key={lever.id}
                className={[
                  "rounded transition-all duration-300",
                  isLeverComplete ? "ring-1 ring-inset ring-warm-stone/50" : "",
                ].join(" ")}
              >
                {/* Accent line */}
                <div className={`w-10 h-0.5 ${lever.accentBar} mb-3`} />

                {/* Lever label */}
                <p
                  className={`font-sans text-[10px] font-semibold tracking-[0.3em] uppercase ${lever.labelColor} mb-1`}
                >
                  {lever.label}
                </p>

                {/* Lever heading */}
                <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-obsidian leading-snug mb-2">
                  {lever.heading}
                </h3>

                {/* Tagline — md:h-[3rem] reserves consistent 2-line height so the
                    first module card aligns across all three columns regardless
                    of how the tagline wraps. Mobile uses natural height. */}
                <p className="font-sans text-sm text-obsidian/55 leading-relaxed mb-5 md:h-[3rem] md:overflow-hidden">
                  {lever.tagline}
                </p>

                {/* Module cards */}
                <div className="space-y-2 mb-3">
                  {lever.courses.map((course) => {
                    const isSelected = selected.has(course.id);
                    return (
                      <div key={course.id}>
                        <button
                          onClick={() => toggle(course.id)}
                          aria-pressed={isSelected}
                          className={[
                            "w-full text-left rounded px-5 py-4 border-2 transition-all duration-150 cursor-pointer",
                            isSelected
                              ? "border-bronze bg-warm-stone/15 shadow-sm"
                              : "border-warm-stone bg-ivory hover:border-warm-stone/80 hover:shadow-sm",
                          ].join(" ")}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <span className="font-sans text-[9px] tabular-nums text-warm-stone shrink-0 w-4">
                                {course.id}
                              </span>
                              <span
                                className={`font-sans text-sm leading-snug ${
                                  isSelected
                                    ? "font-semibold text-obsidian"
                                    : "font-medium text-obsidian/70"
                                }`}
                              >
                                {course.title}
                              </span>
                            </div>
                            <span
                              aria-hidden="true"
                              className={`shrink-0 transition-opacity duration-150 ${
                                isSelected ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              <svg
                                width="13"
                                height="10"
                                viewBox="0 0 13 10"
                                fill="none"
                              >
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
                        </button>
                        <p className="mt-1.5 pl-5 font-sans text-xs text-obsidian/50 leading-snug line-clamp-2">
                          {course.description}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Bundle button */}
                <button
                  onClick={() => toggleLever(lever)}
                  className={[
                    "w-full text-left rounded px-5 py-4 border-2 transition-all duration-150 mb-4",
                    isLeverComplete
                      ? "border-bronze/70 bg-warm-stone/15"
                      : "border-warm-stone/50 bg-ivory/50 hover:border-warm-stone hover:shadow-sm",
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
                      <p className="font-sans text-[10px] text-obsidian/35 line-through">
                        ${MODULE_PRICE * 3}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Explore link */}
                <div className="border-t border-warm-stone/40 pt-3">
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
        className={`fixed bottom-0 inset-x-0 z-50 bg-ivory border-t border-warm-stone transition-transform duration-200 ease-out ${
          count > 0 ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between gap-4">
          {/* Left — price summary */}
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
            <p className="font-sans text-xs text-obsidian/60 leading-tight mt-0.5">
              {label}
            </p>
          </div>

          {/* Right — checkout CTA */}
          <div className="flex flex-col items-end gap-1 shrink-0">
            <Link
              href="/checkout"
              className="font-sans font-semibold tracking-widest uppercase bg-bronze text-ivory hover:bg-rosewood transition-colors duration-200 text-[11px] px-5 py-3 sm:text-sm sm:px-8 sm:py-4"
            >
              <span className="sm:hidden">Checkout</span>
              <span className="hidden sm:inline">Continue to Checkout</span>
            </Link>
            <p className="font-sans text-[10px] text-obsidian/40 hidden sm:block leading-tight">
              Instant access after purchase.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
