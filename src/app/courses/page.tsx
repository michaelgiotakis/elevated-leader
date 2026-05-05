import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "The 9-Course System",
};

export default function CoursesPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The Complete System</Eyebrow>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.1] text-obsidian mb-6 tracking-tight">
              The 9-Course Leadership System
            </h1>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed">
              A complete framework for building clarity, leverage, and lasting
              leadership in your business. Nine focused courses. One cohesive
              transformation.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Start with the Diagnostic."
        subheading="Know exactly which course to begin with."
        primaryLabel="Take the Diagnostic"
        primaryHref={CTA_LINKS.diagnostic}
        primaryExternal
        secondaryLabel="View Flagship Programme"
        secondaryHref="/flagship"
      />
    </>
  );
}
