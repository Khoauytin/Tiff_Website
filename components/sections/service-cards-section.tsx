import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ServiceCardsContent } from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import { PlaceholderImage } from "@/components/common/placeholder-image";

export function ServiceCardsSection({
  content,
  id,
}: {
  content: ServiceCardsContent;
  id?: string;
}) {
  return (
    <section id={id} className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          align="center"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {content.cards.map((card, i) => (
            <Link
              key={card.name}
              href={card.href}
              className="group flex flex-col gap-4"
            >
              <PlaceholderImage
                imageKey={card.imageKey}
                className={
                  i % 2 === 0
                    ? "rounded-tr-[3rem] rounded-bl-[3rem]"
                    : "rounded-tl-[3rem] rounded-br-[3rem]"
                }
              />
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {card.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Xem chi tiết
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
