import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";

const phases = [
  {
    number: "1",
    title: "Setup & Kennenlernen",
    description:
      "Wir richten das gesamte Setup ein und führen dich Schritt für Schritt durch den Prozess. Wir lernen alle Besonderheiten deines Angebots kennen — welche Kunden du willst und welche nicht — und legen gemeinsam ein Ranking fest.",
  },
  {
    number: "2",
    title: "Integration ins Tagesgeschäft",
    description:
      "Wir docken an dein bestehendes Betriebssystem an — ohne Zusatzaufwand für dich und ohne dass du irgendetwas umstellen musst.",
  },
  {
    number: "3",
    title: "Laufender Betrieb",
    description:
      "Ab sofort qualifizieren wir jede Anfrage binnen 12 Stunden und fassen konsequent nach. Du bekommst monatlich ein unaufgefordertes Reporting: wo wir stehen, was wir für dich geleistet haben und welche Ergebnisse wir erzielt haben.",
  },
];

export function ProcessPhases() {
  const [phase1, phase2, phase3] = phases;

  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="So läuft es ab"
          title="In drei Phasen zu planbarem Vertrieb"
          align="center"
        />

        <RevealGroup className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:grid-rows-2" stagger={0.15}>
          <RevealBlock className="flex flex-col justify-center gap-5 rounded-2xl border border-tannengruen/10 bg-tannengruen/[0.04] p-9 transition-all duration-300 ease-out hover:border-akzent/40 hover:shadow-lg hover:shadow-tannengruen/5 lg:row-span-2 lg:p-12">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tannengruen text-lg font-bold text-hintergrund">
              {phase1.number}
            </span>
            <h3 className="text-2xl font-bold text-tannengruen md:text-3xl">{phase1.title}</h3>
            <p className="max-w-md text-base leading-relaxed text-text/80">
              {phase1.description}
            </p>
          </RevealBlock>

          <RevealBlock className="flex flex-col gap-3 rounded-2xl border border-tannengruen/10 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-akzent/40 hover:shadow-lg hover:shadow-tannengruen/5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tannengruen text-sm font-bold text-hintergrund">
              {phase2.number}
            </span>
            <h3 className="text-lg font-bold text-tannengruen">{phase2.title}</h3>
            <p className="text-[15px] leading-relaxed text-text/80">{phase2.description}</p>
          </RevealBlock>

          <RevealBlock className="flex flex-col gap-3 rounded-2xl border border-tannengruen/10 bg-white p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-akzent/40 hover:shadow-lg hover:shadow-tannengruen/5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tannengruen text-sm font-bold text-hintergrund">
              {phase3.number}
            </span>
            <h3 className="text-lg font-bold text-tannengruen">{phase3.title}</h3>
            <p className="text-[15px] leading-relaxed text-text/80">{phase3.description}</p>
          </RevealBlock>
        </RevealGroup>
      </Container>
    </section>
  );
}
