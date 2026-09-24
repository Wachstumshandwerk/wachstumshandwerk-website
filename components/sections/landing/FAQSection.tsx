"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    q: "Ihr wart vorher in einem ganz anderen Markt — was wisst ihr über meine Branche?",
    a: "Wir haben in deutlich schwierigeren Märkten unter Beweis gestellt, dass wir verkaufen können — jahrelang hochpreisige Weiterbildungen, Seminare und Führungskräfteentwicklung für zigtausende Euro. Das kann in Deutschland kaum jemand. Im Vergleich dazu ist die Verarbeitung eurer eingehenden Anfragen für uns ein Kinderspiel.",
  },
  {
    q: "Was, wenn eure Leute am Telefon unprofessionell rüberkommen und meinen Kunden vergraulen?",
    a: "Unsere Telefonate laufen nach System und einer klar vorgegebenen, von Enver selbst entwickelten Tonalität. Du bekommst den Leitfaden vorab und gibst ihn frei. Telefonate werden DSGVO-konform aufgezeichnet und regelmäßig ausgewertet — Ziel ist, dass jede Interaktion mit deinem Kunden positiv im Gedächtnis bleibt.",
  },
  {
    q: "Ist das nicht einfach ein Callcenter?",
    a: "Nein. Ein Callcenter besteht aus Personal mit rein basaler Qualifikation, ohne echte Vertriebsfähigkeit, ohne Marktverständnis, ohne Handwerkserfahrung — die können nur ablesen. Wir bringen echtes Vertriebshandwerk und echtes Handwerksverständnis mit und können jede Situation einschätzen.",
  },
  {
    q: "Muss ich mein Betriebssystem oder meine Prozesse umstellen?",
    a: "Nein. Wir docken vollständig in dein bestehendes Betriebssystem an, ohne Zusatzaufwand oder Zugriff auf deine internen Dateien. Wir bekommen nur die tatsächlichen Anfragen zugespielt, bearbeiten sie, und die Ergebnisse werden automatisiert zurückgespielt. Du siehst jederzeit transparent, wo jede Anfrage steht.",
  },
  {
    q: "Wie sicher sind meine Kundendaten?",
    a: "Die Verarbeitung erfolgt DSGVO-konform, und wir haben keinen Zugriff über die konkret zugespielten Anfragen hinaus.",
  },
  {
    q: "Was kostet das?",
    a: "Das hängt vom Umfang deiner Anfragen und deinem Betrieb ab. Wir besprechen das gemeinsam im kostenlosen Erstgespräch, damit du ein Angebot bekommst, das wirklich zu dir passt.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading eyebrow="Häufige Fragen" title="Was Geschäftsführer uns am häufigsten fragen" />

        <div className="mx-auto flex w-full max-w-3xl flex-col divide-y divide-tannengruen/10 border-t border-b border-tannengruen/10">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-tannengruen md:text-base">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tannengruen/5 text-tannengruen transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-[15px] leading-relaxed text-text/80">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
