import { Container } from "@/components/ui/Container";
import { RevealBlock } from "@/components/motion/RevealBlock";

export function CaptainMetaphor() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <RevealBlock
          standalone
          className="mx-auto flex max-w-3xl flex-col gap-6 rounded-3xl border border-tannengruen/10 bg-hintergrund p-8 text-center md:p-12"
        >
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            Du denkst dir vielleicht
          </span>
          <p className="text-xl font-bold leading-relaxed text-tannengruen md:text-2xl">
            „Warum sollte ich einem Externen meine Anfragen überlassen?“
          </p>
          <p className="text-lg leading-relaxed text-text/80">
            Stell dir vor, du gehst auf eine Bootstour. Du könntest selbst steuern. Aber es gibt
            einen Kapitän mit über zehn Jahren Erfahrung, der die unterschiedlichsten Schiffe
            durch die unterschiedlichsten Gewässer gesteuert hat.
          </p>
          <p className="text-lg leading-relaxed text-text/80">
            Bei uns bekommst du beides: <strong className="text-tannengruen">100 % Transparenz</strong> über jede
            einzelne Anfrage — und die fähigsten Köpfe für den Job, die dein Gewässer nachweislich
            beherrschen. Kein Kontrollverlust. Die bessere Fahrt.
          </p>
        </RevealBlock>
      </Container>
    </section>
  );
}
