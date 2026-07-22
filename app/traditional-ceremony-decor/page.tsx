import type { Metadata } from "next";

import { traditionalCeremonyContent } from "@/content/pages/traditional-ceremony";
import { HeroSection } from "@/components/sections/hero-section";
import { InfoTableSection } from "@/components/sections/info-table-section";
import { ComparisonTableSection } from "@/components/sections/comparison-table-section";
import { MatrixTableSection } from "@/components/sections/matrix-table-section";
import { CtaTableSection } from "@/components/sections/cta-table-section";
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
      <ComparisonTableSection id="concept" content={c.comparisonTable} />
      <MatrixTableSection content={c.matrixTable} />
      {c.extraTable ? <InfoTableSection content={c.extraTable} /> : null}
      <InfoTableSection content={c.advisoryTable} />
      <CtaTableSection content={c.ctaTable} />
      <FaqSection content={c.faq} />
      <ConsultationFormSection content={c.consultationForm} />
    </>
  );
}
