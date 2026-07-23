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
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <RevealGroup as="dl" className="mt-10 divide-y divide-border">
          {content.rows.map((row) => (
            <RevealItem
              key={row.left}
              className="grid gap-1.5 py-5 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-8 sm:py-6"
            >
              <dt className="font-display text-lg text-foreground">
                {row.left}
              </dt>
              <dd className="leading-relaxed text-muted-foreground">
                {row.right}
              </dd>
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
