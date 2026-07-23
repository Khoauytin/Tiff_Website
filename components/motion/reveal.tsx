"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Fades + rises a block into place the first time it scrolls into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

type MotionTag = "div" | "ul" | "ol" | "dl";

/** Wraps a grid/list; each direct `<RevealItem>` child staggers in ~80ms apart. */
export function RevealGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: MotionTag;
}) {
  const Comp = motion[as];
  return (
    <Comp
      data-reveal
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      {children}
    </Comp>
  );
}

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type ItemTag = "div" | "li" | "figure";

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ItemTag;
}) {
  const Comp = motion[as];
  return (
    <Comp data-reveal className={className} variants={itemFadeUp}>
      {children}
    </Comp>
  );
}
