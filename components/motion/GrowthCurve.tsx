"use client";

import { motion } from "framer-motion";

const milestones = [
  { x: 44, y: 436, label: "Einstieg" },
  { x: 168, y: 308, label: "Erste Erfolge" },
  { x: 268, y: 196, label: "Verantwortung" },
  { x: 356, y: 64, label: "Führung" },
];

const curvePath =
  "M 44 436 C 104 424, 148 356, 168 308 C 196 240, 232 224, 268 196 C 308 164, 320 108, 356 64";

/** Abstract growth curve — represents the personal development path of every team member. */
export function GrowthCurve() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-hintergrund/10 bg-tannengruen-dark/60 p-7">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
          Deine Entwicklung
        </span>
        <p className="text-[15px] leading-relaxed text-hintergrund/75">
          Jeder bei uns durchläuft seinen eigenen Weg — konsequent nach oben.
        </p>
      </div>

      <svg viewBox="0 0 400 480" className="w-full" aria-hidden>
        <line x1="44" y1="452" x2="44" y2="40" stroke="currentColor" className="text-hintergrund/15" strokeWidth="1.5" />
        <line x1="44" y1="452" x2="380" y2="452" stroke="currentColor" className="text-hintergrund/15" strokeWidth="1.5" />

        <motion.path
          d={curvePath}
          fill="none"
          stroke="var(--color-akzent)"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "0px 0px 120px 0px" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {milestones.map((m, i) => (
          <g key={m.label}>
            <motion.circle
              cx={m.x}
              cy={m.y}
              r="7"
              fill="var(--color-tannengruen-black)"
              stroke="var(--color-akzent)"
              strokeWidth="3"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px 120px 0px" }}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.32, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: `${m.x}px ${m.y}px` }}
            />
            <motion.text
              x={i === milestones.length - 1 ? m.x - 6 : m.x}
              y={m.y - 18}
              textAnchor={i === milestones.length - 1 ? "end" : "middle"}
              fontSize="15"
              fontWeight="700"
              fill="var(--color-hintergrund)"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px 120px 0px" }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {m.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
