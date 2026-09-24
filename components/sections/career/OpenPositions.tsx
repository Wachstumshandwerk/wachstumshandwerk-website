import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const positions = [
  {
    title: "Telesales Mitarbeiter (m/w/d)",
    description: "Du qualifizierst eingehende Anfragen und führst die ersten Gespräche mit Entscheidern.",
  },
  {
    title: "Mitarbeiter im Vertriebsinnendienst (m/w/d)",
    description: "Du hältst den gesamten Vertriebsprozess unserer Kunden organisiert und am Laufen.",
  },
  {
    title: "Telefonverkäufer (m/w/d)",
    description: "Du führst Verkaufsgespräche und bringst Anfragen zum Abschluss.",
  },
  {
    title: "Closer (m/w/d)",
    description: "Du übernimmst die finalen Gespräche und holst die Zusage rein.",
  },
];

export function OpenPositions() {
  return (
    <section id="stellen" className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Offene Stellen"
          title="Jobs für dich"
          subtitle="Ist gerade nichts Passendes dabei? Wir freuen uns trotzdem über deine Initiativbewerbung."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {positions.map((position) => (
            <div
              key={position.title}
              className="flex flex-col gap-2 rounded-2xl border border-tannengruen/10 bg-hintergrund p-6"
            >
              <h3 className="text-lg font-bold text-tannengruen">{position.title}</h3>
              <p className="text-[15px] leading-relaxed text-text/80">{position.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="#bewerbung">Jetzt bewerben</Button>
        </div>
      </Container>
    </section>
  );
}
