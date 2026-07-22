"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Wraps a wide table in a horizontally-scrollable container and shows a
 * fading edge + "scroll to see more" hint on mobile, so wide comparison
 * tables never trigger accidental page-level horizontal scroll.
 */
export function ScrollableTable({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollMore, setCanScrollMore] = React.useState(false);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      setCanScrollMore(el.scrollWidth - el.clientWidth - el.scrollLeft > 8);
    };

    check();
    el.addEventListener("scroll", check, { passive: true });
    const resizeObserver = new ResizeObserver(check);
    resizeObserver.observe(el);

    return () => {
      el.removeEventListener("scroll", check);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={cn(
          "overflow-x-auto rounded-lg border border-border",
          className
        )}
      >
        {children}
      </div>
      {canScrollMore ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent"
        />
      ) : null}
    </div>
  );
}
