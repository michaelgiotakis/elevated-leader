import React from "react";
import Link from "next/link";
import { NAV_LINKS, SITE_NAME, CTA_LINKS } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="bg-ivory border-b border-warm-stone sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="font-heading text-xl text-obsidian tracking-tight"
          >
            {SITE_NAME}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                /* ── Dropdown item ── */
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="font-sans text-sm font-medium text-obsidian/60 hover:text-obsidian tracking-wide transition-colors duration-150 flex items-center gap-1.5"
                  >
                    {link.label}
                    {/* Chevron — rotates on hover via group */}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-150 group-hover:rotate-180"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>

                  {/*
                   * Dropdown panel.
                   * pt-2 creates a small invisible bridge inside the group div so
                   * moving the mouse down from the trigger into the panel doesn't
                   * lose the hover state. The panel itself starts after that padding.
                   */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-150 z-40 w-64">
                    <div className="bg-ivory border border-warm-stone/60 shadow-sm py-1.5">
                      {link.dropdown.map((item, i) => (
                        <React.Fragment key={item.href}>
                          {/* Divider before lever items */}
                          {i === 1 && (
                            <div className="h-px bg-warm-stone/40 my-1" />
                          )}
                          <Link
                            href={item.href}
                            className={[
                              "block font-sans text-sm px-4 py-2.5 transition-colors duration-150 hover:bg-warm-stone/10",
                              i === 0
                                ? "text-obsidian/60 hover:text-obsidian"
                                : "text-obsidian/70 hover:text-obsidian",
                            ].join(" ")}
                          >
                            {item.label}
                          </Link>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Regular nav item ── */
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm font-medium text-obsidian/60 hover:text-obsidian tracking-wide transition-colors duration-150"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:block">
            <Button href={CTA_LINKS.diagnostic} variant="primary" external>
              Take the Diagnostic
            </Button>
          </div>

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
