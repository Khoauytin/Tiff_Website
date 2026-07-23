import { Check } from "lucide-react";

import type { FeatureContent } from "@/content/types";
import { PhotoCollage } from "@/components/common/photo-collage";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function FeatureSplitSection({
  content,
  id,
}: {
  content: FeatureContent;
  id?: string;
}) {
  const imageFirst = content.imageSide === "left";

  return (
    <section id={id} className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-20 lg:px-8">
        <Reveal className={cn(imageFirst ? "lg:order-1" : "lg:order-2")}>
          <PhotoCollage
            primaryKey={content.imageKey}
            secondaryKey={content.secondaryImageKey}
            reverse={!imageFirst}
            className="w-full"
          />
        </Reveal>
        <Reveal
          delay={0.1}
          className={cn(
            "flex flex-col gap-6",
            imageFirst ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="gold-rule" />
            <span className="eyebrow">{content.eyebrow}</span>
          </div>
          <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {content.title}
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            {content.body}
          </p>
          {content.items ? (
            <RevealGroup as="ul" className="mt-2 grid gap-3 sm:grid-cols-2">
              {content.items.map((item) => (
                <RevealItem
                  key={item.left}
                  as="li"
                  className="flex items-start gap-2.5"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">
                    <span className="font-medium">{item.left}</span>
                    {" — "}
                    <span className="text-muted-foreground">{item.right}</span>
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
