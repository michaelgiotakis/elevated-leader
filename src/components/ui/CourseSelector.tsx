"use client";

import Link from "next/link";
import { useState } from "react";

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
    learnMoreHref: "/courses/elevate-your-self",
    courses: [
      {
        id: "01",
        title: "Leadership Identity",
        description: "Clarify how you think and lead so decisions become fast and clear.",
      },
      {
        id: "02",
        title: "Decision Standards",
        description: "Set the criteria that let you say yes or no with speed and certainty.",
      },
      {
        id: "03",
        title: "Personal Operating System",
        description: "Build the rhythms that protect your focus and keep you performing.",
      },
    ],
  },
  {
    id: "structure",
    accentBar: "bg-slate",
    labelColor: "text-slate",
    label: "Structure",
    heading: "Streamline Your Structure",
    learnMoreHref: "/courses/streamline-your-structure",
    courses: [
      {
        id: "04",
        title: "Roles & Responsibilities",
        description: "Make ownership clear so your team stops waiting for your input.",
      },
      {
        id: "05",
        title: "Systems & Workflows",
        description: "Document the processes that run the business without you.",
      },
      {
        id: "06",
        title: "Operational Clarity",
        description: "Remove ambiguity so nothing important gets missed or dropped.",
      },
    ],
  },
  {
    id: "leverage",
    accentBar: "bg-eucalyptus",
    labelColor: "text-eucalyptus",
    label: "Leverage",
    heading: "Unlock Your Leverage",
    learnMoreHref: "/courses/unlock-your-leverage",
    courses: [
      {
        id: "07",
        title: "Delegation & Ownership",
        description: "Hand off real accountability so you can step back without losing control.",
      },
      {
        id: "08",
        title: "Team Leverage",
        description: "Build a team that moves with autonomy and clear direction.",
      },
      {
        id: "09",
        title: "Scale Architecture",
        description: "Create the structure that grows revenue without growing complexity.",
      },
    ],
  },
];

function calculatePricing(
  selected: Set<string>,
  levers: Lever[]
): { total: number; label: string } {
  let total = 0;
  let fullLeverCount = 0;

  for (const lever of levers) {
    const inLever = lever.courses.filter((c) => selected.has(c.id)).length;
    if (inLever === 3) {
      total += 447;
      fullLeverCount++;
    } else {
      total += inLever * 147;
    }
  }

  const count = selected.size;
  const label =
    fullLeverCount === 1 && count === 3
      ? "Full lever selected"
      : count === 1
      ? "1 course selected"
      : `${count} courses selected`;

  return { total, label };
}

export function CourseSelector() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const count = selected.size;
  const { total, label } = calculatePricing(selected, LEVERS);

  return (
    <>
      {/* Course grid — pb-24 ensures sticky bar never obscures the last row */}
      <div className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {LEVERS.map((lever) => (
            <div key={lever.id}>
              <div className={`w-10 h-0.5 ${lever.accentBar} mb-6`} />
              <p
                className={`font-sans text-[10px] font-semibold tracking-[0.3em] uppercase ${lever.labelColor} mb-3`}
              >
                {lever.label}
              </p>
              <h3 className="font-sans font-bold text-[20px] md:text-[22px] text-obsidian mb-8 leading-snug">
                {lever.heading}
              </h3>

              <div className="space-y-5">
                {lever.courses.map((course) => {
                  const isSelected = selected.has(course.id);
                  return (
                    <div key={course.id}>
                      {/* Selection card — sole purpose is toggle */}
                      <button
                        onClick={() => toggle(course.id)}
                        aria-pressed={isSelected}
                        className={[
                          "w-full text-left rounded px-5 py-4 border-2 transition-all duration-150",
                          isSelected
                            ? "border-bronze bg-warm-stone/15"
                            : "border-warm-stone bg-ivory hover:shadow-sm",
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
                      </button>

                      {/* Description + inline Learn more — sibling to button, never nested */}
                      <p className="mt-2 pl-5 font-sans text-xs text-obsidian/55 leading-snug">
                        {course.description}{" "}
                        <Link
                          href={lever.learnMoreHref}
                          className="text-bronze opacity-70 hover:opacity-100 hover:underline underline-offset-2 transition-opacity duration-150 whitespace-nowrap"
                        >
                          Learn more →
                        </Link>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*
       * Sticky checkout bar.
       * Slides up from bottom when at least one course is selected.
       * Hidden (translated off-screen) when nothing is selected — no disabled clutter.
       * Uses a direct <Link> instead of Button so responsive padding is reliable
       * (cn() concatenates only — class conflicts are unpredictable without tailwind-merge).
       */}
      <div
        aria-live="polite"
        className={`fixed bottom-0 inset-x-0 z-50 bg-ivory border-t border-warm-stone transition-transform duration-200 ease-out ${
          count > 0 ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between gap-4">
          {/* Left — price + label */}
          <div>
            <p className="font-sans text-base font-semibold text-obsidian leading-tight">
              ${total}
            </p>
            <p className="font-sans text-xs text-obsidian/60 leading-tight">
              {label}
            </p>
          </div>

          {/* Right — checkout link styled as primary button */}
          <Link
            href="/checkout"
            className="shrink-0 font-sans font-semibold tracking-widest uppercase bg-bronze text-ivory hover:bg-rosewood transition-colors duration-200 text-[11px] px-5 py-3 sm:text-sm sm:px-8 sm:py-4"
          >
            <span className="sm:hidden">Checkout</span>
            <span className="hidden sm:inline">Continue to Checkout</span>
          </Link>
        </div>
      </div>
    </>
  );
}
