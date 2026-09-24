import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const fits = [
  "Du führst einen Handwerksbetrieb (insbesondere SHK) mit 20+ Mitarbeitern und 2,5 Mio. €+ Jahresumsatz.",
  "Bei dir gehen pro Woche mehrere Anfragen ein, die niemand konsequent abarbeitet.",
  "Du willst dir die Perlen unter deinen Auftragschancen picken — statt jede Anfrage anzunehmen.",
  "Du willst Zeit gewinnen für deine eigentlichen Aufgaben als Geschäftsführer — oder auch für Familie, Freunde und die Dinge, die dir wichtig sind.",
  "Du bist bereit, in Vertrieb zu investieren, wenn es dir nachweislich mehr Geld bringt und du gleichzeitig mehr Zeit gewinnst.",
];

const noFits = [
  "Du bist ein Ein-Mann-Betrieb ohne laufende Neukundenanfragen.",
  "Du willst nur mal kurz \"ein paar Leads\" testen, ohne echten Prozess dahinter.",
  "Du suchst den schnellen Trick statt sauberes Vertriebshandwerk.",
  "Du siehst in jeder Herausforderung nur ein Problem — nicht die Chance dahinter.",
];

export function IdealCustomer() {
  return (
    <section id="fuer-wen" className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="Passt das zu dir?" title="Für wen Wachstumshandwerk gemacht ist" />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl border-2 border-akzent bg-akzent/5 p-7">
            <h3 className="text-lg font-bold text-tannengruen">Du bist hier richtig, wenn …</h3>
            <ul className="flex flex-col gap-4">
              {fits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-akzent text-sm font-bold text-tannengruen-dark">
                    ✓
                  </span>
                  <span className="text-[15px] leading-relaxed text-text/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-tannengruen/10 bg-hintergrund p-7">
            <h3 className="text-lg font-bold text-tannengruen">Eher nicht das Richtige, wenn …</h3>
            <ul className="flex flex-col gap-4">
              {noFits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tannengruen/10 text-sm font-bold text-tannengruen/60">
                    ✕
                  </span>
                  <span className="text-[15px] leading-relaxed text-text/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
