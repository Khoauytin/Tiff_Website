import { ArrowRight } from "lucide-react";

import type { HeroContent } from "@/content/types";
import { Button } from "@/components/ui/button";
import { PhotoCollage } from "@/components/common/photo-collage";

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="gold-rule" />
            <span className="eyebrow">{content.eyebrow}</span>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl">
            {content.title}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            {content.body}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild size="lg">
              <a href={content.ctaPrimary.href}>
                {content.ctaPrimary.label}
                <ArrowRight className="size-4" />
              </a>
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
        <PhotoCollage
          primaryKey={content.imageKey}
          secondaryKey={content.secondaryImageKey}
          priority
          className="w-full"
        />
      </div>
    </section>
  );
}
