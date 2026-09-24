import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CapacityNotice() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-akzent/30 bg-akzent/10 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-tannengruen">
              Begrenzte Kapazität
            </span>
            <p className="max-w-xl text-lg font-medium leading-relaxed text-text">
              Damit wir jeden Kunden mit voller Qualität betreuen können, nehmen wir monatlich nur
              2–3 neue Betriebe auf.
            </p>
          </div>
          <Button href="#kontakt" className="shrink-0">
            Platz sichern
          </Button>
        </div>
      </Container>
    </section>
  );
}
