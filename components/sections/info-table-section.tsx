import { Sparkle } from "lucide-react";

import type { InfoTableContent } from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function InfoTableSection({
  content,
  id,
}: {
  content: InfoTableContent;
  id?: string;
}) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2">
          {content.rows.map((row) => (
            <RevealItem
              key={row.left}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Sparkle className="size-4" />
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-display text-lg leading-snug text-foreground">
                  {row.left}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {row.right}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        {content.note ? (
          <p className="mt-6 text-sm italic text-muted-foreground">
            {content.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
