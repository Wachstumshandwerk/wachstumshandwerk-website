import { Container } from "@/components/ui/Container";

const stats = [
  { value: "3,4 Mio. €", label: "Vertriebsvolumen im Bau-Vertrieb (3 Jahre)" },
  { value: "12 Mio. €", label: "verantwortetes Einkaufsvolumen" },
  { value: "90 %", label: "der Preiserhöhungen in der Hochpreisphase vermieden" },
  { value: "86+", label: "betreute Kunden in der bisherigen Vertriebsarbeit" },
  { value: "100+", label: "umgesetzte Vertriebsprojekte" },
  { value: "Ø 6×+", label: "Return on Invest für Kunden" },
];

export function ProofSection() {
  return (
    <section className="bg-tannengruen py-20 text-hintergrund md:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            Kein Versprechen ohne Beleg
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            Die Expertise dahinter
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-hintergrund/80">
            Wachstumshandwerk ist jung. Die Vertriebs-Expertise dahinter nicht. Enver verkauft
            praktisch sein gesamtes Berufsleben — vom Bau-Vertrieb über den Einkauf bis zum Aufbau
            seiner eigenen, bis heute aktiven Vertriebsagentur.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-3xl font-extrabold text-akzent md:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm leading-snug text-hintergrund/75">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
