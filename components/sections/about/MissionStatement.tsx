import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";

const pillars = [
  {
    title: "Zeit zurückgeben",
    text: "Damit du dich wieder auf dein Handwerk konzentrieren kannst, statt auf Anfragen zu warten.",
  },
  {
    title: "Anfragen in Aufträge verwandeln",
    text: "Damit aus jedem Kontakt auch wirklich ein Auftrag wird — statt liegen zu bleiben.",
  },
  {
    title: "Handwerksbetriebe stärken",
    text: "Damit der Mittelstand im Handwerk wächst, statt im Tagesgeschäft stehenzubleiben.",
  },
];

export function MissionStatement() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Unser Antrieb"
          title="Handwerksbetriebe sind das Rückgrat unseres Landes."
          subtitle="Ohne Handwerk kein Zuhause, keine Werkstatt, keine Infrastruktur. Trotzdem bleibt Vertrieb in den meisten Betrieben Nebensache — weil schlicht keine Zeit dafür da ist. Wir glauben: Das muss nicht so sein."
        />

        <RevealGroup className="grid gap-8 md:grid-cols-3" stagger={0.12}>
          {pillars.map((pillar) => (
            <RevealBlock
              key={pillar.title}
              className="flex flex-col gap-3 rounded-2xl border border-tannengruen/10 bg-hintergrund/40 p-7"
            >
              <h3 className="text-lg font-bold text-tannengruen">{pillar.title}</h3>
              <p className="text-[15px] leading-relaxed text-text/75">{pillar.text}</p>
            </RevealBlock>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
