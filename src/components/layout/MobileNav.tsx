"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, CTA_LINKS } from "@/lib/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function closeAll() {
    setIsOpen(false);
    setCoursesOpen(false);
  }

  return (
    <div className="md:hidden flex items-center gap-2.5">
      {/* Compact utility CTA */}
      <a
        href={CTA_LINKS.diagnostic}
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans text-[10px] font-semibold tracking-widest uppercase bg-bronze text-ivory rounded px-3 py-1.5 hover:bg-rosewood transition-colors duration-200"
      >
        Diagnostic
      </a>

      {/* Hamburger / X toggle */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="relative w-8 h-8 shrink-0"
      >
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex flex-col justify-center items-center gap-[6px] transition-opacity duration-200 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="block w-5 h-px bg-obsidian" />
          <span className="block w-5 h-px bg-obsidian" />
          <span className="block w-5 h-px bg-obsidian" />
        </span>
        <span
          aria-hidden="true"
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="#060708"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/*
       * Full-viewport overlay.
       * z-[45] keeps it behind the sticky header (z-50) so the X remains
       * clickable. Tapping the ivory backdrop closes the menu.
       */}
      <div
        aria-hidden={!isOpen}
        onClick={closeAll}
        className={`fixed inset-0 z-[45] bg-ivory flex flex-col transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Clears the sticky header */}
        <div className="h-20 shrink-0" />

        <div
          onClick={(e) => e.stopPropagation()}
          className="border-t border-warm-stone flex flex-col flex-1 overflow-hidden"
        >
          <nav className="flex-1 overflow-y-auto px-6 pt-8 pb-6">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                /* ── Courses accordion ── */
                <div key={link.href} className="border-b border-warm-stone/40">
                  <button
                    onClick={() => setCoursesOpen((v) => !v)}
                    className="w-full flex items-center justify-between font-sans text-[26px] font-semibold text-obsidian/75 hover:text-obsidian py-5 transition-colors duration-150"
                  >
                    {link.label}
                    <span
                      className={`font-sans text-lg font-normal text-warm-stone transition-transform duration-200 ${
                        coursesOpen ? "rotate-90" : ""
                      }`}
                    >
                      →
                    </span>
                  </button>

                  {/* Sub-items slide in when open */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      coursesOpen ? "max-h-64 pb-4" : "max-h-0"
                    }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeAll}
                        className={[
                          "flex items-center font-sans font-medium text-obsidian/55 hover:text-obsidian py-2.5 pl-4 transition-colors duration-150",
                          i === 0 ? "text-[16px]" : "text-[18px]",
                        ].join(" ")}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                /* ── Regular nav item ── */
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className="flex items-center justify-between font-sans text-[26px] font-semibold text-obsidian/75 hover:text-obsidian py-5 border-b border-warm-stone/40 last:border-0 transition-colors duration-150"
                >
                  {link.label}
                  <span className="font-sans text-lg font-normal text-warm-stone">
                    →
                  </span>
                </Link>
              )
            )}
          </nav>

          <div className="px-6 py-8 border-t border-warm-stone shrink-0">
            <a
              href={CTA_LINKS.diagnostic}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAll}
              className="block w-full font-sans text-sm font-semibold tracking-widest uppercase bg-bronze text-ivory hover:bg-rosewood transition-colors duration-200 text-center py-5"
            >
              Take the Diagnostic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
