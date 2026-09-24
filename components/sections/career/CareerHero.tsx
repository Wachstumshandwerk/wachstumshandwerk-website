import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CareerHero() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col items-start gap-8">
        <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
          Karriere bei Wachstumshandwerk
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-tannengruen md:text-6xl">
          Werde Teil eines Teams, das Handwerksbetrieben wirklich weiterhilft.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-text/80 md:text-xl">
          Wir sind ein junges, wachstumsorientiertes Team mit einer klaren Mission: echtes
          Vertriebshandwerk für die Branche, die das Fundament von allem ist. Wenn du Vertrieb
          liebst und mit uns wachsen willst, bist du hier richtig.
        </p>
        <Button href="#stellen">Offene Stellen ansehen</Button>
      </Container>
    </section>
  );
}
