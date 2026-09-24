import { Container } from "@/components/ui/Container";

export function TruthSection() {
  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-8">
        <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
          Die Wahrheit, die kaum einer ausspricht
        </span>
        <h2 className="max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-tannengruen md:text-4xl">
          Handwerk hat kein Vertriebsproblem. Handwerk hat ein Verarbeitungsproblem.
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-tannengruen/10 bg-white p-7">
            <span className="text-sm font-bold uppercase tracking-wide text-muted">
              Was alle verkaufen
            </span>
            <p className="text-[15px] leading-relaxed text-text/80">
              Mehr Leads. Mehr Marketing. Noch eine Ads-Kampagne, noch ein Ranking-Trick. Als
              hätte ein Handwerksbetrieb mit 20+ Mitarbeitern und 2,5 Mio. € Umsatz zu wenig
              Anfragen.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border-2 border-akzent bg-white p-7">
            <span className="text-sm font-bold uppercase tracking-wide text-tannengruen">
              Was wirklich fehlt
            </span>
            <p className="text-[15px] leading-relaxed text-text/90">
              Handwerksbetriebe haben Anfragen ohne Ende. Was fehlt, ist die Kapazität, sie zu
              verarbeiten: laufende Projekte managen, Krankheitsstand abfedern, schwankende
              Auslastung ausgleichen — und trotzdem jeder Anfrage die volle Energie geben, ohne
              den eigenen Ruf zu riskieren.
            </p>
          </div>
        </div>

        <p className="max-w-2xl text-lg leading-relaxed text-text/80">
          Genau hier setzen wir an. Nicht bei der Anzahl deiner Anfragen — bei dem, was danach
          passiert.
        </p>
      </Container>
    </section>
  );
}
