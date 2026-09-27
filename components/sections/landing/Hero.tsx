"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/motion/RevealText";
import { RevealGroup, RevealBlock, RevealListItem } from "@/components/motion/RevealBlock";
import { useScrollParallax } from "@/hooks/useScrollParallax";

const bullets = [
  "Jede eingehende Anfrage wird innerhalb von 12 Stunden qualifiziert.",
  "Wir übernehmen das komplette Nachfassen deiner Angebote.",
  "Du wirst nur noch zu Kunden geschickt, die wirklich beauftragen wollen.",
];

export function Hero() {
  const { ref: photoRef, y: photoY } = useScrollParallax<HTMLDivElement>(14);

  return (
    <section className="relative overflow-hidden pb-8 pt-16 md:pb-10 md:pt-24">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <div className="flex flex-col items-start gap-8">
          <RevealBlock standalone>
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
              Vertriebsassistenz für Handwerksbetriebe
            </span>
          </RevealBlock>

          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-tannengruen md:text-6xl lg:text-7xl">
            <RevealText triggerOnMount delay={0.08}>
              Wir erobern deine Zeit zurück.
            </RevealText>
          </h1>

          <RevealGroup className="flex flex-col items-start gap-8" delayChildren={0.2}>
            <RevealBlock>
              <p className="max-w-2xl text-lg leading-relaxed text-text/80 md:text-xl">
                Du fokussierst dich auf deine wichtigsten Aufgaben — Mitarbeiter- und
                Baustellenmanagement —, ohne dass im Vertrieb eine einzige Anfrage liegen bleibt.
              </p>
            </RevealBlock>

            <RevealGroup className="flex flex-col gap-3" stagger={0.08}>
              <ul className="contents">
                {bullets.map((bullet) => (
                  <RevealListItem key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-akzent/15 text-sm font-bold text-tannengruen">
                      ✓
                    </span>
                    <span className="text-[15px] leading-relaxed text-text/85 md:text-base">
                      {bullet}
                    </span>
                  </RevealListItem>
                ))}
              </ul>
            </RevealGroup>

            <RevealBlock>
              <div className="flex items-center gap-2 text-tannengruen">
                <span className="text-lg">→</span>
                <p className="text-[15px] font-semibold md:text-base">
                  Kein unnötiger Termin. Kein Angebot, das im Sand verläuft.
                </p>
              </div>
            </RevealBlock>

            <RevealBlock>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="#kontakt" className="text-base">
                  Kostenloses Erstgespräch anfragen
                </Button>
                <a
                  href="#loesung"
                  className="text-[15px] font-semibold text-tannengruen underline decoration-akzent decoration-2 underline-offset-4"
                >
                  Wie das funktioniert →
                </a>
              </div>
            </RevealBlock>
          </RevealGroup>
        </div>

        <div
          ref={photoRef}
          className="relative mx-auto aspect-[1319/1192] w-full max-w-[420px] lg:mx-0 lg:aspect-auto lg:h-full lg:max-w-none"
        >
          <motion.div className="absolute inset-0" style={{ y: photoY }}>
            <Image
              src="/fotos/enver-cutout.png"
              alt="Enver Ilhan"
              fill
              sizes="(min-width: 1024px) 42vw, 90vw"
              priority
              className="object-contain lg:object-cover lg:object-center"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
