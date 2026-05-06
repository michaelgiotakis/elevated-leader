"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS, CTA_LINKS } from "@/lib/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="md:hidden flex items-center gap-2.5">
      {/* Compact utility CTA — short label, minimal footprint */}
      <a
        href={CTA_LINKS.diagnostic}
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans text-[10px] font-semibold tracking-widest uppercase bg-bronze text-ivory rounded px-3 py-1.5 hover:bg-rosewood transition-colors duration-200"
      >
        Diagnostic
      </a>

      {/* Hamburger / X toggle — cross-fade between two separate icon states */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="relative w-8 h-8 shrink-0"
      >
        {/* Hamburger — 3 lines, fades out when open */}
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
        {/* X — fades in when open, fades out when closed */}
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
       * z-[45] keeps it behind the sticky header (z-50) so the X button
       * remains clickable above the menu. Clicking the ivory backdrop
       * (outside the nav content) closes the menu via the outer onClick.
       */}
      <div
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[45] bg-ivory flex flex-col transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Clears the sticky header */}
        <div className="h-20 shrink-0" />

        {/* Stop propagation so tapping nav items doesn't bubble to backdrop */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="border-t border-warm-stone flex flex-col flex-1 overflow-hidden"
        >
          <nav className="flex-1 overflow-y-auto px-6 pt-8 pb-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between font-sans text-[26px] font-semibold text-obsidian/75 hover:text-obsidian py-5 border-b border-warm-stone/40 last:border-0 transition-colors duration-150"
              >
                {link.label}
                <span className="font-sans text-lg font-normal text-warm-stone">→</span>
              </Link>
            ))}
          </nav>

          <div className="px-6 py-8 border-t border-warm-stone shrink-0">
            <a
              href={CTA_LINKS.diagnostic}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
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
