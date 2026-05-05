import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Flagship Programme",
};

export default function FlagshipPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Our Premier Offering</Eyebrow>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.1] text-obsidian mb-6 tracking-tight">
              Flagship Programme
            </h1>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed">
              Our most comprehensive engagement for leaders committed to total
              transformation. Access all nine courses, live coaching, and a
              structured accountability framework.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Enrol in the Flagship Programme."
        subheading="Limited spaces available. Built for leaders who are ready."
        primaryLabel="Enrol Now"
        primaryHref={CTA_LINKS.checkout}
        primaryExternal
        secondaryLabel="Take the Diagnostic First"
        secondaryHref={CTA_LINKS.diagnostic}
      />
    </>
  );
}
