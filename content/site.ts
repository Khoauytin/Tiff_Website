export const siteConfig = {
  name: "TIFF",
  fullName: "TIFF Wedding & Event",
  tagline: "Luxury Wedding Event Planner & Decor",
  phone: "0836 999 088",
  email: "planner@tiff.vn",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://tiff-website.vercel.app",
};

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Hotel Wedding Decor", href: "/hotel-wedding-decor" },
  { label: "Outdoor Wedding Decor", href: "/outdoor-wedding-decor" },
  { label: "Traditional Ceremony Decor", href: "/traditional-ceremony-decor" },
];

export const footerLinks: NavItem[] = [
  ...mainNav,
  { label: "Nhận tư vấn", href: "#tu-van" },
];
