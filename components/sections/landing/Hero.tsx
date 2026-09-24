import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrustBadge } from "@/components/ui/TrustBadge";

const bullets = [
  "Jede eingehende Anfrage wird innerhalb von 12 Stunden qualifiziert.",
  "Wir übernehmen das komplette Nachfassen deiner Angebote.",
  "Du wirst nur noch zu Kunden geschickt, die wirklich beauftragen wollen.",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <Container className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
        <div className="flex flex-col items-start gap-8">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            Vertriebsassistenz für Handwerksbetriebe
          </span>

          <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-tannengruen md:text-6xl lg:text-7xl">
            Wir erobern deine Zeit zurück.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-text/80 md:text-xl">
            Du fokussierst dich auf deine wichtigsten Aufgaben — Mitarbeiter- und
            Baustellenmanagement —, ohne dass im Vertrieb eine einzige Anfrage liegen bleibt.
          </p>

          <ul className="flex flex-col gap-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-akzent/15 text-sm font-bold text-tannengruen">
                  ✓
                </span>
                <span className="text-[15px] leading-relaxed text-text/85 md:text-base">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 text-tannengruen">
            <span className="text-lg">→</span>
            <p className="text-[15px] font-semibold md:text-base">
              Kein unnötiger Termin. Kein Angebot, das im Sand verläuft.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#kontakt" className="text-base">
              Kostenloses Erstgespräch anfragen
            </Button>
            <a
              href="#loesung"
              className="text-[15px] font-semibold text-tannengruen underline decoration-akzent decoration-2 underline-offset-4"
            >
              Wie das funktioniert →
            </a>
          </div>
        </div>

        <TrustBadge />
      </Container>
    </section>
  );
}
