import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";

const values = [
  {
    title: "Wir verstehen Handwerk",
    text: "Wir kommen selbst aus der Branche und wissen, wie der Alltag im Betrieb wirklich aussieht.",
  },
  {
    title: "Wir arbeiten ergebnisorientiert",
    text: "Nicht Prozesse zählen, sondern Aufträge, die wirklich ankommen.",
  },
  {
    title: "Wir sind erreichbar, wenn's drauf ankommt",
    text: "Anfragen werden innerhalb von 12 Stunden bearbeitet — nicht erst nächste Woche.",
  },
  {
    title: "Wir denken langfristig",
    text: "Wir wollen nicht der nächste Dienstleister sein, sondern ein Partner, auf den du dich Jahre lang verlassen kannst.",
  },
  {
    title: "Wir bleiben ehrlich",
    text: "Kein Sales-Bullshit, keine leeren Versprechen — nur das, was wir wirklich liefern können.",
  },
];

export function CompanyValues() {
  return (
    <section className="bg-tannengruen py-20 text-hintergrund md:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <RevealBlock standalone>
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
              Unsere Werte
            </span>
          </RevealBlock>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-4xl">
            Wofür wir stehen
          </h2>
        </div>

        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {values.map((value) => (
            <RevealBlock
              key={value.title}
              className="flex flex-col gap-2 rounded-2xl border border-hintergrund/10 bg-hintergrund/5 p-6"
            >
              <h3 className="text-base font-bold text-akzent">{value.title}</h3>
              <p className="text-[15px] leading-relaxed text-hintergrund/80">{value.text}</p>
            </RevealBlock>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
