"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/motion/RevealText";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["#F8F6F1", "#1B4332"]
  );
  const textColor = useTransform(scrollYProgress, [0, 0.3], ["#1B4332", "#F8F6F1"]);
  const mutedTextColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["rgba(27,67,50,0.8)", "rgba(248,246,241,0.9)"]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor }}
      className="py-20 md:py-28"
    >
      <Container>
        <RevealBlock standalone>
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            Hand aufs Herz
          </span>
        </RevealBlock>
        <motion.h2
          style={{ color: textColor }}
          className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
        >
          <RevealText delay={0}>Dein Geschäft läuft.</RevealText>
          <RevealText delay={0.5}>
            Aber dein Vertrieb <span className="text-akzent">frisst dir die Zeit,</span>
          </RevealText>
          <RevealText delay={0.9}>die du für dein eigentliches Handwerk brauchst.</RevealText>
        </motion.h2>

        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.15}>
          <RevealBlock className="flex flex-col gap-4 rounded-2xl border border-hintergrund/10 bg-hintergrund/5 p-7">
            <span className="text-sm font-bold uppercase tracking-wide text-akzent">
              Szenario A
            </span>
            <motion.p style={{ color: mutedTextColor }} className="text-[15px] leading-relaxed">
              Du nimmst dir die Zeit und priorisierst Vertrieb — aber genau diese Zeit fehlt dir
              danach für deine eigentlichen Aufgaben als Geschäftsführer: Gespräche mit
              Auftraggebern, Baustellenmanagement, Planung, Personalbetreuung.
            </motion.p>
          </RevealBlock>

          <RevealBlock className="flex flex-col gap-4 rounded-2xl border-2 border-akzent bg-hintergrund/5 p-7">
            <span className="text-sm font-bold uppercase tracking-wide text-akzent">
              Szenario B — der häufigste Fall
            </span>
            <motion.p style={{ color: mutedTextColor }} className="text-[15px] leading-relaxed">
              Vertrieb passiert nur, wenn gerade Luft ist — und dann werden nur die Perlen
              gepickt oder das, was auf den ersten Blick passt. Anfragen bleiben teils
              wochenlang liegen, werden nur phasenweise bearbeitet. Erst wenn draußen weniger
              los ist, wird wieder mehr für Vertrieb getan.
            </motion.p>
          </RevealBlock>
        </RevealGroup>

        <RevealBlock standalone>
          <motion.p
            style={{ color: mutedTextColor }}
            className="mt-10 max-w-2xl text-lg leading-relaxed"
          >
            Dein Können liegt darin, deine Arbeit abzuliefern — nicht darin, jeden Tag zwischen
            Baustelle, Angebot und Rückruf zu jonglieren. Trotzdem hängt dein Wachstum genau daran.
          </motion.p>
        </RevealBlock>
      </Container>
    </motion.section>
  );
}
