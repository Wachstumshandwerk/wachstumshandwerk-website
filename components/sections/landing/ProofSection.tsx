import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/motion/RevealText";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";
import { CountUp } from "@/components/motion/CountUp";

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
      <Container className="flex flex-col gap-16 md:gap-20">
        <RevealBlock standalone className="flex flex-col items-center gap-4 text-center">
          <span className="text-6xl font-extrabold leading-none tracking-tight text-hintergrund tabular-nums md:text-8xl lg:text-9xl">
            <CountUp value="3,4 Mio. €" duration={1.8} />
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            Vertriebsvolumen im Bau-Vertrieb (3 Jahre)
          </span>
        </RevealBlock>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <RevealBlock standalone>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
                Kein Versprechen ohne Beleg
              </span>
            </RevealBlock>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              <RevealText>Die Expertise dahinter</RevealText>
            </h2>
            <RevealBlock standalone>
              <p className="max-w-2xl text-lg leading-relaxed text-hintergrund/80">
                Wachstumshandwerk ist jung. Die Vertriebs-Expertise dahinter nicht. Enver verkauft
                praktisch sein gesamtes Berufsleben — vom Bau-Vertrieb über den Einkauf bis zum
                Aufbau seiner eigenen, bis heute aktiven Vertriebsagentur.
              </p>
            </RevealBlock>
          </div>

          <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3" stagger={0.08}>
            {stats.map((stat, i) => (
              <RevealBlock key={stat.label} className="flex flex-col gap-2">
                <span className="text-3xl font-extrabold text-akzent md:text-4xl">
                  <CountUp value={stat.value} delay={i * 0.05} />
                </span>
                <span className="text-sm leading-snug text-hintergrund/75">{stat.label}</span>
              </RevealBlock>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
