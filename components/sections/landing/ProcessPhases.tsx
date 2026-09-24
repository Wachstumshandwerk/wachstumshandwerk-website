import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

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
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="So läuft es ab" title="In drei Phasen zu planbarem Vertrieb" />

        <div className="grid gap-8 md:grid-cols-3">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="flex flex-col gap-4 rounded-2xl border border-tannengruen/10 bg-white p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tannengruen text-sm font-bold text-hintergrund">
                {phase.number}
              </span>
              <h3 className="text-lg font-bold text-tannengruen">{phase.title}</h3>
              <p className="text-[15px] leading-relaxed text-text/80">{phase.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
