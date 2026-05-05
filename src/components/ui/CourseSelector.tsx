"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface Course {
  id: string;
  title: string;
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
      { id: "01", title: "Leadership Identity" },
      { id: "02", title: "Decision Standards" },
      { id: "03", title: "Personal Operating System" },
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
      { id: "04", title: "Roles & Responsibilities" },
      { id: "05", title: "Systems & Workflows" },
      { id: "06", title: "Operational Clarity" },
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
      { id: "07", title: "Delegation & Ownership" },
      { id: "08", title: "Team Leverage" },
      { id: "09", title: "Scale Architecture" },
    ],
  },
];

function getPrice(count: number): string | null {
  if (count === 1) return "$147";
  if (count === 2) return "$250";
  if (count >= 3) return "$450";
  return null;
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
  const price = getPrice(count);

  return (
    <div>
      {/* Course grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mb-16 md:mb-20">
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
                              isSelected ? "font-semibold text-obsidian" : "font-medium text-obsidian/70"
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

                    {/* Learn more — outside the card, no interaction with selection */}
                    <div className="mt-1 pl-5">
                      <Link
                        href={lever.learnMoreHref}
                        className="font-sans text-[11px] text-bronze opacity-70 hover:opacity-100 hover:underline underline-offset-2 transition-opacity duration-150"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Selection + pricing panel */}
      <div className="border-t border-warm-stone pt-12 md:pt-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.3em] uppercase text-bronze mb-4">
              Your Selection
            </p>
            {count === 0 ? (
              <p className="font-sans text-base text-obsidian/40 leading-relaxed">
                Select one or more courses above.
              </p>
            ) : (
              <>
                <p className="font-sans text-sm text-obsidian/60 mb-3">
                  {count === 1 ? "1 course selected" : `${count} courses selected`}
                </p>
                <p className="font-heading text-[44px] leading-none text-obsidian">
                  {price}
                </p>
              </>
            )}
          </div>
          <Button
            href="/checkout"
            variant="primary"
            className={count === 0 ? "pointer-events-none opacity-30" : ""}
          >
            Continue to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
