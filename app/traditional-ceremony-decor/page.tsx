import type { Metadata } from "next";

import { traditionalCeremonyContent } from "@/content/pages/traditional-ceremony";
import { HeroSection } from "@/components/sections/hero-section";
import { InfoTableSection } from "@/components/sections/info-table-section";
import { PackageShowcaseSection } from "@/components/sections/package-showcase-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";

export const metadata: Metadata = {
  title: { absolute: traditionalCeremonyContent.seo.title },
  description: traditionalCeremonyContent.seo.description,
};

export default function TraditionalCeremonyDecorPage() {
  const c = traditionalCeremonyContent;

  return (
    <>
      <HeroSection content={c.hero} />
      <InfoTableSection content={c.fitTable} />
      <PackageShowcaseSection
        id="concept"
        comparisonTable={c.comparisonTable}
        matrixTable={c.matrixTable}
        ctaTable={c.ctaTable}
      />
      {c.extraTable ? <InfoTableSection content={c.extraTable} /> : null}
      <InfoTableSection content={c.advisoryTable} />
      <FaqSection content={c.faq} />
      <ConsultationFormSection content={c.consultationForm} />
    </>
  );
}
