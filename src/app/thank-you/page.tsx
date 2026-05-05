import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Enrolment Confirmed</Eyebrow>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.1] text-obsidian mb-6 tracking-tight">
              Thank You
            </h1>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed">
              Your journey begins now. Check your inbox for access details and
              your onboarding materials. We look forward to supporting your
              transformation.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        heading="While you wait — explore the method."
        subheading="Familiarise yourself with the framework before you begin."
        primaryLabel="Explore the Method"
        primaryHref="/method"
        secondaryLabel="View Your Courses"
        secondaryHref="/courses"
      />
    </>
  );
}
