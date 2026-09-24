import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Wachstumshandwerk GmbH.",
};

export default function ImpressumPage() {
  return (
    <div className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-tannengruen md:text-4xl">
          Impressum
        </h1>

        <div className="mt-10 flex flex-col gap-10 text-[15px] leading-relaxed text-text">
          <section>
            <h2 className="mb-3 text-lg font-bold text-tannengruen">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Wachstumshandwerk GmbH (in Gründung)
              <br />
              Uferstraße 57
              <br />
              55116 Mainz
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-tannengruen">Vertreten durch</h2>
            <p>Geschäftsführer: Enver Ilhan</p>
            <p>Gesellschafter: Hamza Ilhan</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-tannengruen">Kontakt</h2>
            <p>Telefon: +49 176 24365593</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:office@wachstumshandwerk.de" className="text-akzent underline">
                office@wachstumshandwerk.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-tannengruen">
              Handelsregister &amp; Umsatzsteuer-ID
            </h2>
            <p>
              Die Wachstumshandwerk GmbH befindet sich aktuell in Gründung. Handelsregisternummer
              und Umsatzsteuer-Identifikationsnummer werden an dieser Stelle ergänzt, sobald die
              Eintragung bzw. Erteilung erfolgt ist.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-tannengruen">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Enver Ilhan
              <br />
              Uferstraße 57
              <br />
              55116 Mainz
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-tannengruen">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-akzent underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht verpflichtet
              und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-tannengruen">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-tannengruen">Haftung für Links</h2>
            <p>
              Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
              keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-tannengruen">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
