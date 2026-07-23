import type { Metadata } from "next";

import { hotelWeddingContent } from "@/content/pages/hotel-wedding";
import { HeroSection } from "@/components/sections/hero-section";
import { InfoTableSection } from "@/components/sections/info-table-section";
import { PackageShowcaseSection } from "@/components/sections/package-showcase-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ConsultationFormSection } from "@/components/sections/consultation-form-section";

export const metadata: Metadata = {
  title: { absolute: hotelWeddingContent.seo.title },
  description: hotelWeddingContent.seo.description,
};

export default function HotelWeddingDecorPage() {
  const c = hotelWeddingContent;

  return (
    <>
      <HeroSection content={c.hero} />
      <InfoTableSection content={c.fitTable} />
      <PackageShowcaseSection
        id="package"
        comparisonTable={c.comparisonTable}
        matrixTable={c.matrixTable}
        ctaTable={c.ctaTable}
      />
      <InfoTableSection content={c.advisoryTable} />
      <FaqSection content={c.faq} />
      <ConsultationFormSection content={c.consultationForm} />
    </>
  );
}
