import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";

const steps = [
  {
    title: "Für dich",
    text: "Wenn wir dir deine Zeit zurückgeben, geht es auch deinem Unternehmen besser.",
    highlighted: true,
  },
  {
    title: "Für deinen Betrieb",
    text: "Wenn dein Betrieb wächst, profitieren auch deine Mitarbeiter und deine Kunden davon.",
    highlighted: false,
  },
  {
    title: "Für das Handwerk",
    text: "Und wenn immer mehr Handwerksbetriebe wachsen, stärkt das die Branche, die unser Land trägt.",
    highlighted: false,
  },
];

export function PromiseCascade() {
  return (
    <section className="bg-hintergrund py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Unser Versprechen"
          title="Wir sind mehr als ein Dienstleister"
        />

        <RevealGroup className="flex flex-col gap-5" stagger={0.12}>
          {steps.map((step) => (
            <RevealBlock
              key={step.title}
              className={`flex flex-col gap-2 rounded-2xl p-7 ${
                step.highlighted
                  ? "border-l-4 border-akzent bg-white shadow-sm shadow-tannengruen/5"
                  : "pl-8"
              }`}
            >
              <h3 className="text-xl font-bold text-tannengruen">{step.title}</h3>
              <p className="max-w-2xl text-[15px] leading-relaxed text-text/75">{step.text}</p>
            </RevealBlock>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
