import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface CTASectionProps {
  heading: string;
  subheading?: string;
  body?: string;
  primaryLabel: string;
  primaryHref: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  heading,
  subheading,
  body,
  primaryLabel,
  primaryHref,
  primaryExternal = false,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="bg-obsidian py-20 md:py-28">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-ivory mb-5 leading-snug">
            {heading}
          </h2>
          {subheading && (
            <p className="font-sans text-warm-stone text-lg mb-5 leading-relaxed">
              {subheading}
            </p>
          )}
          {body && (
            <p className="font-sans text-ivory/70 text-base mb-10 leading-relaxed">
              {body}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={primaryHref} variant="primary" external={primaryExternal}>
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
