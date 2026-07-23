import type { ProcessStepsContent } from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function ProcessStepsSection({
  content,
  id,
}: {
  content: ProcessStepsContent;
  id?: string;
}) {
  return (
    <section id={id} className="border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <RevealGroup as="ol" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.steps.map((step) => (
            <RevealItem
              key={step.number}
              as="li"
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-primary font-display text-base font-semibold text-primary-foreground">
                {step.number}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
