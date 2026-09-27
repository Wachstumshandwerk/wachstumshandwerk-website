"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

const desktopItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const mobileItem: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedItem: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

/**
 * Blur/slide entrance. Nest RevealBlock/RevealListItem children inside a
 * RevealGroup to get the staggered-sibling behavior; the group drives
 * initial/whileInView, children just declare their variants.
 */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
  delayChildren = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const effectiveStagger = reduce ? 0 : isMobile ? Math.min(stagger, 0.05) : stagger;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px 120px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: effectiveStagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  );
}

function useItemVariants() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  return reduce ? reducedItem : isMobile ? mobileItem : desktopItem;
}

export function RevealBlock({
  children,
  className = "",
  once = true,
  standalone = false,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
  /** true = has its own scroll trigger (not nested in a RevealGroup) */
  standalone?: boolean;
}) {
  const variants = useItemVariants();
  const extra = standalone
    ? { initial: "hidden", whileInView: "visible", viewport: { once, margin: "0px 0px 120px 0px" } }
    : {};

  return (
    <motion.div className={className} variants={variants} {...extra}>
      {children}
    </motion.div>
  );
}

export function RevealListItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const variants = useItemVariants();
  return (
    <motion.li className={className} variants={variants}>
      {children}
    </motion.li>
  );
}
