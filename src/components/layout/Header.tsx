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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-obsidian/60 hover:text-obsidian tracking-wide transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
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
