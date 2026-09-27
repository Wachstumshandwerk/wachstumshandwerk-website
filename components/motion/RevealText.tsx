"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useState } from "react";

/**
 * Mask-reveal wrapper for headlines. Wraps content in an overflow-hidden
 * band and slides it up into view — used inside h1/h2 elements, which stay
 * the actual semantic heading tag around this.
 *
 * The outer span owns the viewport trigger (via `onViewportEnter`, not
 * `whileInView`) — it is never itself transformed, so it stays fully
 * intersectable. It flips React state, which the inner span's `animate`
 * reads. If the inner span carried its own whileInView trigger instead,
 * its translateY(110%) start position would sit clipped outside the
 * overflow-hidden band, so IntersectionObserver would always see zero
 * intersection and the animation would never fire.
 */
export function RevealText({
  children,
  className = "",
  delay = 0,
  once = true,
  triggerOnMount = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  /** true = animate immediately on mount (Hero H1), false = animate on scroll into view */
  triggerOnMount?: boolean;
}) {
  const reduce = useReducedMotion();
  const [inView, setInView] = useState(triggerOnMount);

  if (reduce) {
    return <span className={`block ${className}`}>{children}</span>;
  }

  const viewportProps = triggerOnMount
    ? {}
    : {
        onViewportEnter: () => setInView(true),
        viewport: { once, margin: "0px 0px 120px 0px" },
      };

  return (
    <motion.span className="block overflow-hidden" {...viewportProps}>
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%", opacity: 0 }}
        animate={inView ? { y: "0%", opacity: 1 } : undefined}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
