import type { Metadata } from "next";

import { overviewContent } from "@/content/pages/overview";
import { HeroSection } from "@/components/sections/hero-section";
import { ServiceCardsSection } from "@/components/sections/service-cards-section";
import { FeatureSplitSection } from "@/components/sections/feature-split-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { InfoTableSection } from "@/components/sections/info-table-section";
import { ProcessStepsSection } from "@/components/sections/process-steps-section";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";
import { FooterCtaSection } from "@/components/sections/footer-cta-section";

export const metadata: Metadata = {
  title: { absolute: overviewContent.seo.title },
  description: overviewContent.seo.description,
};

export default function OverviewPage() {
  return (
    <>
      <HeroSection content={overviewContent.hero} />
      <ServiceCardsSection id="dich-vu" content={overviewContent.serviceCards} />
      <FeatureSplitSection content={overviewContent.featureSupport} />
      <GallerySection content={overviewContent.gallery} />
      <FeatureSplitSection content={overviewContent.featureWhyChoose} />
      <InfoTableSection id="phu-hop" content={overviewContent.fitTable} />
      <ProcessStepsSection content={overviewContent.processSteps} />
      <ConsultationFormSection content={overviewContent.consultationForm} />
      <FooterCtaSection content={overviewContent.footerCta} />
    </>
  );
}
