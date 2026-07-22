import type { Metadata } from "next";

import { overviewContent } from "@/content/pages/overview";
import { HeroSection } from "@/components/sections/hero-section";
import { ComparisonTableSection } from "@/components/sections/comparison-table-section";
import { InfoTableSection } from "@/components/sections/info-table-section";
import { ProcessStepsSection } from "@/components/sections/process-steps-section";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";

export const metadata: Metadata = {
  title: { absolute: overviewContent.seo.title },
  description: overviewContent.seo.description,
};

export default function OverviewPage() {
  return (
    <>
      <HeroSection content={overviewContent.hero} />
      <ComparisonTableSection
        id="dich-vu"
        content={overviewContent.servicesTable}
      />
      <InfoTableSection content={overviewContent.supportTable} />
      <InfoTableSection id="phu-hop" content={overviewContent.fitTable} />
      <ProcessStepsSection content={overviewContent.processSteps} />
      <InfoTableSection content={overviewContent.whyChooseTable} />
      <ConsultationFormSection content={overviewContent.consultationForm} />
    </>
  );
}
