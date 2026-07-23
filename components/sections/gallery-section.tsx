import type { GalleryContent } from "@/content/types";
import { SectionHeading } from "@/components/common/section-heading";
import { PlaceholderImage } from "@/components/common/placeholder-image";
import { Button } from "@/components/ui/button";

const cornerClasses = [
  "rounded-tr-[3rem] rounded-bl-[3rem]",
  "rounded-tl-[3rem] rounded-br-[3rem]",
  "rounded-t-[3rem]",
];

export function GallerySection({
  content,
  id,
}: {
  content: GalleryContent;
  id?: string;
}) {
  return (
    <section id={id} className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {content.images.map((image, i) => (
            <figure key={image.imageKey} className="flex flex-col gap-3">
              <PlaceholderImage
                imageKey={image.imageKey}
                className={cornerClasses[i % cornerClasses.length]}
              />
              <figcaption className="text-center text-sm text-muted-foreground">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        {content.cta ? (
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <a href={content.cta.href}>{content.cta.label}</a>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
