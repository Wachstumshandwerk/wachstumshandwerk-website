import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/motion/RevealText";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";
import { GrowthCurve } from "@/components/motion/GrowthCurve";

const benefits = [
  {
    title: "Ungedeckelte Provisionen",
    description: "Dein Einsatz entscheidet über dein Einkommen — nach oben gibt es kein Limit.",
  },
  {
    title: "Top-Weiterbildung, kostenlos",
    description:
      "Schulungen von den renommiertesten Experten im gesamten DACH-Raum zu Vertrieb, Management, Führung und KI — abhängig von deiner Rolle.",
  },
  {
    title: "Moderner Arbeitsplatz",
    description: "Alle Getränke inklusive, ein Umfeld, in dem du gerne arbeitest.",
  },
  {
    title: "Wachstumsorientierte Kultur",
    description:
      "Ein Team, in dem jeder den anderen gewinnen sehen will — und das gemeinsam wächst.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-tannengruen py-20 text-hintergrund md:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_380px] lg:items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <RevealBlock standalone>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
                Warum Wachstumshandwerk
              </span>
            </RevealBlock>
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              <RevealText>Was uns als Arbeitgeber ausmacht</RevealText>
            </h2>
          </div>

          <RevealGroup className="grid gap-6 sm:grid-cols-2" stagger={0.1}>
            {benefits.map((benefit) => (
              <RevealBlock
                key={benefit.title}
                className="flex flex-col gap-2 rounded-2xl border border-hintergrund/10 bg-hintergrund/5 p-6"
              >
                <h3 className="text-base font-bold text-akzent">{benefit.title}</h3>
                <p className="text-[15px] leading-relaxed text-hintergrund/80">
                  {benefit.description}
                </p>
              </RevealBlock>
            ))}
          </RevealGroup>
        </div>

        <RevealBlock standalone className="hidden lg:block">
          <GrowthCurve />
        </RevealBlock>
      </Container>
    </section>
  );
}
