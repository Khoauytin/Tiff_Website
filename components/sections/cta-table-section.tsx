import { ArrowRight } from "lucide-react";

import type { CtaTableContent } from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function CtaTableSection({
  content,
  id,
}: {
  content: CtaTableContent;
  id?: string;
}) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {content.eyebrow || content.title ? (
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title ?? ""}
          />
        ) : null}
        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.rows.map((row) => (
            <RevealItem
              key={row.label}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">
                {row.label}
              </p>
              <Button asChild variant="outline" className="w-full justify-between">
                <a href={row.href}>
                  {row.ctaText}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
