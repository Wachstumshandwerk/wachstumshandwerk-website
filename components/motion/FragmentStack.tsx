"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

/**
 * Abstract editorial "information fragments" — thin bars of varying width,
 * not UI cards. `progress` is a 0→1 MotionValue: 0 = scattered/chaotic,
 * 1 = ordered/aligned into a clean stack.
 */
const fragments = [
  { width: 88, tone: "bg-tannengruen/60", scatter: { x: -18, y: -34, rotate: -14 } },
  { width: 56, tone: "bg-akzent", scatter: { x: 24, y: -12, rotate: 9 } },
  { width: 112, tone: "bg-tannengruen/35", scatter: { x: -8, y: 18, rotate: -6 } },
  { width: 64, tone: "bg-tannengruen/45", scatter: { x: 30, y: 40, rotate: 17 } },
  { width: 96, tone: "bg-akzent/80", scatter: { x: -26, y: 62, rotate: -11 } },
  { width: 72, tone: "bg-tannengruen/30", scatter: { x: 12, y: 86, rotate: 7 } },
];

const ROW_HEIGHT = 22;

function FragmentBar({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const f = fragments[index];
  const x = useTransform(progress, [0, 1], [f.scatter.x, 0]);
  const y = useTransform(progress, [0, 1], [f.scatter.y, index * ROW_HEIGHT]);
  const rotate = useTransform(progress, [0, 1], [f.scatter.rotate, 0]);
  const opacity = useTransform(progress, [0, 1], [0.55, 1]);

  return (
    <motion.span
      className={`absolute left-0 top-0 h-[3px] rounded-full ${f.tone}`}
      style={{ width: f.width, x, y, rotate, opacity }}
    />
  );
}

export function FragmentStack({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="relative h-[160px] w-[160px]">
      {fragments.map((_, i) => (
        <FragmentBar key={i} index={i} progress={progress} />
      ))}
    </div>
  );
}
