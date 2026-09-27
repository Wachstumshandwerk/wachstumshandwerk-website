"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";
import { FragmentStack } from "@/components/motion/FragmentStack";

const steps = [
  {
    number: "01",
    title: "Schnelle Erstqualifizierung",
    description:
      "Jede eingehende Anfrage wird innerhalb von 12 Stunden kontaktiert — bevor dein Kunde beim Wettbewerb anruft.",
  },
  {
    number: "02",
    title: "Tiefenprüfung",
    description:
      "Wir prüfen, ob sich die Anfrage wirklich lohnt: Kaufbereitschaft, Umfang, Profitabilität. Kein Bauchgefühl, ein System.",
  },
  {
    number: "03",
    title: "Ausgebildetes Team führt Anrufe & Nachfassen",
    description:
      "Unser Team übernimmt Ansprache, Vorbereitung und das komplette Nachfassen deiner Angebote.",
  },
  {
    number: "04",
    title: "Nur Top-Chancen landen bei dir",
    description:
      "Du bekommst ausschließlich die Anfragen, bei denen sich das Rausfahren wirklich lohnt — fertig vorqualifiziert.",
  },
  {
    number: "05",
    title: "Konsequentes Nachfassen bis zum Abschluss",
    description:
      "Wir sorgen dafür, dass aus den Top-Chancen auch echte Aufträge werden — durch regelmäßiges Nachfassen, auf höchstem Niveau serviceorientiert.",
  },
];

export function SolutionSteps() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.4"],
  });

  return (
    <section id="loesung" className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Die Lösung"
          title="Du beauftragst uns mit deiner Anfragen-Bearbeitung. Den Rest übernehmen wir."
          subtitle="Stell dir einen eingespielten Vertriebsinnendienst vor — ohne ihn selbst aufbauen, einarbeiten oder führen zu müssen."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-20">
          <div ref={listRef}>
            <RevealGroup className="flex flex-col" stagger={0.12}>
              {steps.map((step, i) => (
                <RevealBlock
                  key={step.number}
                  className={`relative flex gap-6 pb-10 pl-2 last:pb-0 ${
                    i !== steps.length - 1
                      ? "border-l-2 border-akzent/25 md:border-l-[3px]"
                      : "border-l-2 border-transparent md:border-l-[3px]"
                  }`}
                >
                  <span className="absolute left-0 top-1 h-2.5 w-2.5 -translate-x-[calc(50%+1px)] rounded-full bg-akzent md:h-3 md:w-3" />
                  <div className="pl-6 md:pl-8">
                    <span className="text-4xl font-extrabold text-akzent/40 md:text-5xl">
                      {step.number}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold leading-snug text-tannengruen md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-base leading-relaxed text-text/80 md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </RevealBlock>
              ))}
            </RevealGroup>
          </div>

          <div className="hidden lg:sticky lg:top-32 lg:block lg:self-start">
            <FragmentStack progress={scrollYProgress} />
          </div>
        </div>
      </Container>
    </section>
  );
}
