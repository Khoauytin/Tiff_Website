import type { FooterCtaContent } from "@/content/types";
import { Button } from "@/components/ui/button";

export function FooterCtaSection({ content }: { content: FooterCtaContent }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
          {content.title}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href={content.ctaPrimary.href}>{content.ctaPrimary.label}</a>
          </Button>
          {content.ctaSecondary ? (
            <Button asChild size="lg" variant="outline">
              <a href={content.ctaSecondary.href}>
                {content.ctaSecondary.label}
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
