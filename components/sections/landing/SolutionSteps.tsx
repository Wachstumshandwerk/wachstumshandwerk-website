import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Schnelle Erstqualifizierung",
    description:
      "Jede eingehende Anfrage wird innerhalb von 12 Stunden kontaktiert — bevor dein Kunde beim Wettbewerb anruft.",
  },
  {
    number: "02",
    title: "Tiefenprüfung",
    description:
      "Wir prüfen, ob sich die Anfrage wirklich lohnt: Kaufbereitschaft, Umfang, Profitabilität. Kein Bauchgefühl, ein System.",
  },
  {
    number: "03",
    title: "Ausgebildetes Team führt Anrufe & Nachfassen",
    description:
      "Unser Team übernimmt Ansprache, Vorbereitung und das komplette Nachfassen deiner Angebote.",
  },
  {
    number: "04",
    title: "Nur Top-Chancen landen bei dir",
    description:
      "Du bekommst ausschließlich die Anfragen, bei denen sich das Rausfahren wirklich lohnt — fertig vorqualifiziert.",
  },
];

export function SolutionSteps() {
  return (
    <section id="loesung" className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Die Lösung"
          title="Du beauftragst uns mit deiner Anfragen-Bearbeitung. Den Rest übernehmen wir."
          subtitle="Stell dir einen eingespielten Vertriebsinnendienst vor — ohne ihn selbst aufbauen, einarbeiten oder führen zu müssen."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <span className="text-4xl font-extrabold text-akzent/50">{step.number}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-tannengruen">{step.title}</h3>
                <p className="text-[15px] leading-relaxed text-text/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 border-t border-tannengruen/10 pt-12 text-center">
          <span className="text-4xl font-extrabold text-akzent/50">05</span>
          <h3 className="text-lg font-bold text-tannengruen">
            Konsequentes Nachfassen bis zum Abschluss
          </h3>
          <p className="text-[15px] leading-relaxed text-text/80">
            Wir sorgen dafür, dass aus den Top-Chancen auch echte Aufträge werden — durch
            regelmäßiges Nachfassen. So schwärmen sowohl deine Kunden als auch jeder, der bei dir
            eine Anfrage stellt, von deinem Unternehmen, weil wir auf höchstem Niveau
            serviceorientiert sind.
          </p>
        </div>
      </Container>
    </section>
  );
}
