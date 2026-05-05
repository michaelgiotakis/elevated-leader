import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FAQPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Common Questions</Eyebrow>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.1] text-obsidian mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed">
              Everything you need to know about The Elevated Leader system —
              from how the courses work to who this is designed for.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Still have questions?"
        subheading="Start with the diagnostic — it will point you in the right direction."
        primaryLabel="Take the Diagnostic"
        primaryHref={CTA_LINKS.diagnostic}
        primaryExternal
      />
    </>
  );
}
