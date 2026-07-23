export type ImageKey = string;

export type ImageEntry =
  | { placeholder: true; label: string; aspect: "video" | "square" | "portrait" | "wide" }
  | { placeholder: false; src: string; alt: string; aspect: "video" | "square" | "portrait" | "wide" };

export type CtaLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  body: string;
  ctaPrimary: CtaLink;
  ctaSecondary?: CtaLink;
  imageKey: ImageKey;
  secondaryImageKey?: ImageKey;
};

export type InfoTableRow = {
  left: string;
  right: string;
};

export type InfoTableContent = {
  eyebrow: string;
  title: string;
  note?: string;
  columns?: [string, string];
  rows: InfoTableRow[];
};

export type ComparisonRow = {
  name: string;
  cells: string[];
  imageKey?: ImageKey;
};

export type ComparisonTableContent = {
  eyebrow: string;
  title: string;
  note?: string;
  columns: string[];
  rows: ComparisonRow[];
};

export type MatrixRow = {
  category: string;
  values: string[];
};

export type MatrixTableContent = {
  eyebrow: string;
  title: string;
  note?: string;
  packageColumns: string[];
  rows: MatrixRow[];
};

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export type ProcessStepsContent = {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
};

export type CtaTableRow = {
  label: string;
  ctaText: string;
  href: string;
};

export type CtaTableContent = {
  eyebrow?: string;
  title?: string;
  rows: CtaTableRow[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  eyebrow: string;
  title: string;
  items: FaqItem[];
};

export type FormFieldType = "text" | "tel" | "date" | "textarea" | "select";

export type FormFieldConfig = {
  name: string;
  label: string;
  placeholder?: string;
  type: FormFieldType;
  options?: string[];
  required?: boolean;
};

export type ConsultationFormContent = {
  eyebrow: string;
  title: string;
  description?: string;
  fields: FormFieldConfig[];
  submitLabel: string;
  source: string;
};

export type PageSeo = {
  title: string;
  description: string;
};

/**
 * Shared shape for the 3 service pages (Hotel / Outdoor / Traditional), which
 * all follow the same flow per the brief's own "GỢI Ý CẤU TRÚC" table: Hero →
 * fit table → package/concept comparison → hạng mục matrix → advisory table
 * → CTA table → FAQ → form.
 */
export type ServicePageContent = {
  slug: string;
  seo: PageSeo;
  hero: HeroContent;
  fitTable: InfoTableContent;
  comparisonTable: ComparisonTableContent;
  matrixTable: MatrixTableContent;
  advisoryTable: InfoTableContent;
  extraTable?: InfoTableContent;
  ctaTable: CtaTableContent;
  faq: FaqContent;
  consultationForm: ConsultationFormContent;
};

export type ServiceCard = {
  name: string;
  description: string;
  imageKey: ImageKey;
  href: string;
};

export type ServiceCardsContent = {
  eyebrow: string;
  title: string;
  cards: ServiceCard[];
};

/**
 * The repeating alternating image/text block. `items` (when present) renders
 * as a compact tick-list next to the body copy instead of a table — used to
 * port existing InfoTableRow-shaped content (e.g. "TIFF hỗ trợ" / "Vì sao
 * chọn TIFF") into the template's narrative style without inventing new copy.
 */
export type FeatureContent = {
  eyebrow: string;
  title: string;
  body: string;
  items?: InfoTableRow[];
  imageKey: ImageKey;
  secondaryImageKey?: ImageKey;
  imageSide: "left" | "right";
};

export type GalleryImage = {
  imageKey: ImageKey;
  caption: string;
};

export type GalleryContent = {
  eyebrow: string;
  title: string;
  images: GalleryImage[];
  cta?: CtaLink;
};

export type FooterCtaContent = {
  title: string;
  ctaPrimary: CtaLink;
  ctaSecondary?: CtaLink;
};

/**
 * The overview page has its own distinct flow (no package comparison, no
 * matrix, no FAQ — instead a narrative hero → service cards → feature
 * highlights → gallery → fit table → process → form → closing CTA), so it
 * gets its own shape rather than being forced into ServicePageContent.
 */
export type OverviewPageContent = {
  slug: string;
  seo: PageSeo;
  hero: HeroContent;
  serviceCards: ServiceCardsContent;
  featureSupport: FeatureContent;
  gallery: GalleryContent;
  featureWhyChoose: FeatureContent;
  fitTable: InfoTableContent;
  processSteps: ProcessStepsContent;
  consultationForm: ConsultationFormContent;
  footerCta: FooterCtaContent;
};
