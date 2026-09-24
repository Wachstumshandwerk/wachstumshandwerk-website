import { Container } from "@/components/ui/Container";

export function ProblemSection() {
  return (
    <section className="bg-tannengruen py-20 text-hintergrund md:py-28">
      <Container>
        <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
          Hand aufs Herz
        </span>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
          Dein Geschäft läuft. Aber dein Vertrieb frisst dir die Zeit, die du für dein
          eigentliches Handwerk brauchst.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border border-hintergrund/10 bg-hintergrund/5 p-7">
            <span className="text-sm font-bold uppercase tracking-wide text-akzent">
              Szenario A
            </span>
            <p className="text-[15px] leading-relaxed text-hintergrund/90">
              Du nimmst dir die Zeit und priorisierst Vertrieb — aber genau diese Zeit fehlt dir
              danach für deine eigentlichen Aufgaben als Geschäftsführer: Gespräche mit
              Auftraggebern, Baustellenmanagement, Planung, Personalbetreuung.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border-2 border-akzent bg-hintergrund/5 p-7">
            <span className="text-sm font-bold uppercase tracking-wide text-akzent">
              Szenario B — der häufigste Fall
            </span>
            <p className="text-[15px] leading-relaxed text-hintergrund/90">
              Vertrieb passiert nur, wenn gerade Luft ist — und dann werden nur die Perlen
              gepickt oder das, was auf den ersten Blick passt. Anfragen bleiben teils
              wochenlang liegen, werden nur phasenweise bearbeitet. Erst wenn draußen weniger
              los ist, wird wieder mehr für Vertrieb getan.
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-hintergrund/80">
          Dein Können liegt darin, deine Arbeit abzuliefern — nicht darin, jeden Tag zwischen
          Baustelle, Angebot und Rückruf zu jonglieren. Trotzdem hängt dein Wachstum genau daran.
        </p>
      </Container>
    </section>
  );
}
