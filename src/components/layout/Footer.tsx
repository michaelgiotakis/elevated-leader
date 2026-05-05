import Link from "next/link";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-obsidian text-ivory pt-16 pb-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <p className="font-heading text-xl mb-3">{SITE_NAME}</p>
            <p className="font-sans text-warm-stone text-sm leading-relaxed">
              Build a business that runs itself. Lead with clarity, leverage,
              and lasting impact.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-10 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-warm-stone hover:text-ivory transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="font-sans text-xs text-warm-stone/50">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
