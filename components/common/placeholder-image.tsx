import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { images } from "@/content/images";
import { cn } from "@/lib/utils";

const aspectClass: Record<string, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/10] sm:aspect-[21/9]",
};

type PlaceholderImageProps = {
  imageKey: string;
  className?: string;
  priority?: boolean;
};

export function PlaceholderImage({
  imageKey,
  className,
  priority,
}: PlaceholderImageProps) {
  const entry = images[imageKey];

  if (!entry) {
    return null;
  }

  if (!entry.placeholder) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-lg",
          aspectClass[entry.aspect],
          className
        )}
      >
        <Image
          src={entry.src}
          alt={entry.alt}
          fill
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 overflow-hidden rounded-lg border border-dashed border-border bg-gradient-to-br from-secondary to-muted p-6 text-center",
        aspectClass[entry.aspect],
        className
      )}
      role="img"
      aria-label={entry.label}
    >
      <ImageIcon className="size-8 text-brand-gold" strokeWidth={1.5} />
      <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
        {entry.label}
      </p>
    </div>
  );
}
