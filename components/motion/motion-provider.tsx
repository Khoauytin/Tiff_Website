"use client";

import { MotionConfig } from "framer-motion";

/**
 * `reducedMotion="user"` makes every animation in the tree respect the
 * visitor's OS-level "reduce motion" preference automatically — transforms
 * are disabled, only opacity fades still play.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
