import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership Diagnostic",
};

export default function DiagnosticPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Free Assessment</Eyebrow>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.1] text-obsidian mb-6 tracking-tight">
              Take the Leadership Diagnostic
            </h1>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed">
              In under ten minutes, discover exactly where your business is
              leaking time, energy, and leverage — and get a clear picture of
              where to focus next.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Ready to find your leverage point?"
        subheading="The diagnostic is free. The clarity is priceless."
        primaryLabel="Start the Diagnostic"
        primaryHref={CTA_LINKS.diagnostic}
        primaryExternal
      />
    </>
  );
}
