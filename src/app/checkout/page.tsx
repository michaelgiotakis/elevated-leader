import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { CTA_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Secure Enrolment</Eyebrow>
            <h1 className="font-heading text-[48px] md:text-[60px] leading-[1.1] text-obsidian mb-6 tracking-tight">
              Complete Your Enrolment
            </h1>
            <p className="font-sans text-lg text-obsidian/60 leading-relaxed">
              You are one step away from building a business that runs itself.
              Complete your enrolment below to get immediate access.
            </p>
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Ready to begin?"
        subheading="Secure your place in the programme."
        primaryLabel="Complete Enrolment"
        primaryHref={CTA_LINKS.checkout}
        primaryExternal
      />
    </>
  );
}
