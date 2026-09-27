"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function parseValue(raw: string) {
  const match = raw.match(/\d+(?:[.,]\d+)?/);
  if (!match || match.index === undefined) return null;

  const numStr = match[0];
  const num = parseFloat(numStr.replace(",", "."));
  const usesComma = numStr.includes(",");
  const decimals = usesComma || numStr.includes(".") ? numStr.split(/[.,]/)[1].length : 0;
  const prefix = raw.slice(0, match.index);
  const suffix = raw.slice(match.index + numStr.length);

  return { num, decimals, prefix, suffix, usesComma };
}

function format(latest: number, parsed: NonNullable<ReturnType<typeof parseValue>>) {
  const formatted =
    parsed.decimals > 0 ? latest.toFixed(parsed.decimals) : Math.round(latest).toString();
  const withComma = parsed.usesComma ? formatted.replace(".", ",") : formatted;
  return `${parsed.prefix}${withComma}${parsed.suffix}`;
}

/** Animates the numeric portion of a stat string (e.g. "3,4 Mio. €", "86+", "Ø 6×+") from 0 to its value, once. */
export function CountUp({
  value,
  duration = 1.4,
  delay = 0,
}: {
  value: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px 120px 0px" });
  const reduce = useReducedMotion();
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(() => (parsed ? format(0, parsed) : value));

  useEffect(() => {
    if (!inView || !parsed) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, parsed.num, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(format(latest, parsed));
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!parsed) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>{display}</span>;
}
