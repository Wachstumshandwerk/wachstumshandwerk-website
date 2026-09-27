"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

/** Subtle scroll-tied parallax; disabled on mobile and for prefers-reduced-motion. */
export function useScrollParallax<T extends HTMLElement = HTMLDivElement>(distance = 12) {
  const ref = useRef<T>(null);
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const disabled = reduce || isMobile;
  const y = useTransform(scrollYProgress, [0, 1], disabled ? [0, 0] : [-distance, distance]);

  return { ref, y };
}
