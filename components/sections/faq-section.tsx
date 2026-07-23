import type { FaqContent } from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection({ content, id }: { content: FaqContent; id?: string }) {
  return (
    <section id={id} className="bg-secondary/30">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        <Accordion type="single" collapsible className="mt-8 gap-3">
          {content.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="not-last:border-b-0 rounded-2xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="py-4 text-left font-medium text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
