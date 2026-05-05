import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Method",
};

export default function MethodPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The Framework</Eyebrow>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.1] text-obsidian mb-6 tracking-tight">
              The Elevated Leader Method
            </h1>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed">
              A proven framework used by high-performing leaders to build
              businesses that operate with clarity, leverage, and freedom — without
              requiring their constant presence.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        heading="See the method in action."
        subheading="Take the diagnostic to find your starting point."
        primaryLabel="Take the Diagnostic"
        primaryHref={CTA_LINKS.diagnostic}
        primaryExternal
        secondaryLabel="Explore the Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
