import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/sonner";
import { MotionProvider } from "@/components/motion/motion-provider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wedding Decor by TIFF",
    template: "%s | TIFF",
  },
  description:
    "TIFF cung cấp dịch vụ Wedding Decor cho tiệc cưới khách sạn, lễ cưới ngoài trời và lễ gia tiên. Tư vấn concept, tối ưu ngân sách, setup và giám sát hiện trường.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/*
          Safety net: scroll-reveal content starts at opacity:0 in the static
          HTML and only animates to visible once framer-motion hydrates. If
          JS fails to load/run for any reason, this keeps content visible
          instead of permanently hidden.
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <Toaster />
        </MotionProvider>
      </body>
    </html>
  );
}
