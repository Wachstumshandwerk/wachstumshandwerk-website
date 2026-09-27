import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/motion/RevealText";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";

export function CareerHero() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col items-start gap-8">
        <RevealBlock standalone>
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            Karriere bei Wachstumshandwerk
          </span>
        </RevealBlock>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-tannengruen md:text-6xl">
          <RevealText triggerOnMount delay={0.08}>
            Werde Teil eines Teams, das Handwerksbetrieben wirklich weiterhilft.
          </RevealText>
        </h1>
        <RevealGroup className="flex flex-col items-start gap-8" delayChildren={0.2}>
          <RevealBlock>
            <p className="max-w-2xl text-lg leading-relaxed text-text/80 md:text-xl">
              Wir sind ein junges, wachstumsorientiertes Team mit einer klaren Mission: echtes
              Vertriebshandwerk für die Branche, die das Fundament von allem ist. Wenn du Vertrieb
              liebst und mit uns wachsen willst, bist du hier richtig.
            </p>
          </RevealBlock>
          <RevealBlock>
            <Button href="#stellen">Offene Stellen ansehen</Button>
          </RevealBlock>
        </RevealGroup>
      </Container>
    </section>
  );
}
