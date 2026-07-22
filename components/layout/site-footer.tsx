import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { mainNav, siteConfig } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-semibold tracking-wide text-foreground">
              TIFF
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}. TIFF đồng hành cùng cô dâu chú rể trong
              việc định hình concept, tối ưu ngân sách, thiết kế và thi công
              không gian cưới.
            </p>
          </div>

          <div>
            <h3 className="eyebrow">Dịch vụ</h3>
            <ul className="mt-4 space-y-2.5">
              {mainNav.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Liên hệ</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-foreground"
                >
                  <Mail className="size-4" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.fullName}. Bản quyền thuộc về TIFF.
          </p>
        </div>
      </div>
    </footer>
  );
}
