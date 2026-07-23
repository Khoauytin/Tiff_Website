import { PlaceholderImage } from "@/components/common/placeholder-image";
import { cn } from "@/lib/utils";

type PhotoCollageProps = {
  primaryKey: string;
  secondaryKey?: string;
  reverse?: boolean;
  priority?: boolean;
  className?: string;
};

/**
 * Two offset, organically-rounded photos approximating the reference
 * template's layered-photo sections. Falls back to a single image when no
 * secondaryKey is given.
 */
export function PhotoCollage({
  primaryKey,
  secondaryKey,
  reverse = false,
  priority,
  className,
}: PhotoCollageProps) {
  if (!secondaryKey) {
    return (
      <PlaceholderImage
        imageKey={primaryKey}
        priority={priority}
        className={cn("rounded-tr-[4rem] rounded-bl-[4rem]", className)}
      />
    );
  }

  return (
    <div className={cn("relative pb-10", reverse ? "pl-10" : "pr-10", className)}>
      <PlaceholderImage
        imageKey={primaryKey}
        priority={priority}
        className="rounded-tr-[4rem] rounded-bl-[4rem]"
      />
      <div
        className={cn(
          "absolute bottom-0 w-[45%] rounded-tl-[2.5rem] rounded-br-[2.5rem] ring-4 ring-background",
          reverse ? "left-0" : "right-0"
        )}
      >
        <PlaceholderImage imageKey={secondaryKey} className="shadow-xl" />
      </div>
    </div>
  );
}
