import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Wachstumshandwerk GmbH.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-tannengruen">{title}</h2>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

export default function DatenschutzPage() {
  return (
    <div className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-tannengruen md:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-sm text-muted">Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long" })}</p>

        <div className="mt-10 flex flex-col gap-10 text-[15px] leading-relaxed text-text">
          <Section title="1. Verantwortlicher">
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p>
              Wachstumshandwerk GmbH (i. G.)
              <br />
              Enver Ilhan (Geschäftsführer)
              <br />
              Uferstraße 57, 55116 Mainz
              <br />
              E-Mail:{" "}
              <a href="mailto:office@wachstumshandwerk.de" className="text-akzent underline">
                office@wachstumshandwerk.de
              </a>
              <br />
              Telefon: +49 176 24365593
            </p>
          </Section>

          <Section title="2. Allgemeines zur Datenverarbeitung">
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies
              zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
              Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt
              regelmäßig nur nach Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO), zur
              Erfüllung eines Vertrags bzw. vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b
              DSGVO) oder auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f
              DSGVO).
            </p>
          </Section>

          <Section title="3. Bereitstellung der Website und Hosting">
            <p>
              Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA,
              gehostet. Beim Aufruf unserer Website erhebt Vercel automatisiert
              server-technische Daten (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs,
              aufgerufene Seite, Browsertyp) in sogenannten Server-Logfiles. Dies dient der
              technischen Bereitstellung und Absicherung der Website (Art. 6 Abs. 1 lit. f DSGVO).
              Da Vercel Daten auch in den USA verarbeiten kann, wurde mit Vercel ein
              Auftragsverarbeitungsvertrag auf Basis der EU-Standardvertragsklauseln
              geschlossen, um ein angemessenes Datenschutzniveau sicherzustellen.
            </p>
          </Section>

          <Section title="4. Cookies und Einwilligungsverwaltung (Cookiebot)">
            <p>
              Unsere Website verwendet Cookies. Beim ersten Besuch wird über den Cookie-Consent-
              Dienst Cookiebot (Usercentrics A/S, Havnegade 39, 1058 Kopenhagen, Dänemark) Ihre
              Einwilligung zu nicht technisch notwendigen Cookies (z. B. für Statistik und
              Marketing) eingeholt. Erst nach erteilter Einwilligung werden entsprechende Dienste
              wie Google Analytics oder der Meta-Pixel geladen. Sie können Ihre Einwilligung
              jederzeit mit Wirkung für die Zukunft über den Cookie-Einstellungen-Link im
              Footer widerrufen oder anpassen.
            </p>
          </Section>

          <Section title="5. Kontaktformular">
            <p>
              Wenn Sie uns über das Kontaktformular ein kostenloses Erstgespräch anfragen,
              verarbeiten wir die von Ihnen angegebenen Daten (u. a. Name, Firma, Position,
              Telefonnummer, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage und zur
              Kontaktaufnahme auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen). Die Daten werden an unser CRM-System sowie intern per
              Slack zur Bearbeitung weitergeleitet (siehe Ziffer 7).
            </p>
          </Section>

          <Section title="6. Bewerbungsformular">
            <p>
              Bei einer Bewerbung über unsere Karriereseite (inkl. optionalem Upload eines
              Lebenslaufs im PDF-Format) verarbeiten wir Ihre Daten ausschließlich zum Zweck der
              Durchführung des Bewerbungsverfahrens auf Grundlage von § 26 BDSG i. V. m.
              Art. 6 Abs. 1 lit. b DSGVO. Ihre Bewerbungsunterlagen werden nach Abschluss des
              Verfahrens gelöscht, sofern keine gesetzliche Aufbewahrungspflicht oder Ihre
              ausdrückliche Einwilligung zur längeren Aufbewahrung (z. B. für einen
              Bewerber-Pool) entgegensteht.
            </p>
          </Section>

          <Section title="7. Weiterleitung an CRM und interne Benachrichtigung">
            <p>
              Anfragen über unsere Formulare werden automatisiert an unser CRM-System
              weitergeleitet und zusätzlich als kurze Information in einem internen Slack-Kanal
              angezeigt, damit wir schnellstmöglich reagieren können. Beide Dienste verarbeiten
              die Daten in unserem Auftrag auf Grundlage entsprechender
              Auftragsverarbeitungsverträge.
            </p>
          </Section>

          <Section title="8. Google Analytics">
            <p>
              Sofern Sie eingewilligt haben, setzen wir Google Analytics ein, einen
              Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
              Irland. Google Analytics verwendet Cookies, die eine Analyse der Benutzung unserer
              Website ermöglichen. Die IP-Adresse wird vor der Speicherung innerhalb der EU
              anonymisiert. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              Sie können diese jederzeit über die Cookie-Einstellungen widerrufen.
            </p>
          </Section>

          <Section title="9. Meta-Pixel">
            <p>
              Sofern Sie eingewilligt haben, setzen wir den Meta-Pixel der Meta Platforms Ireland
              Limited, 4 Grand Canal Square, Dublin 2, Irland, ein, um die Wirksamkeit unserer
              Werbeanzeigen zu messen. Meta kann die erhobenen Daten mit Ihrem Meta-Konto
              verknüpfen. Es besteht ggf. eine gemeinsame Verantwortlichkeit mit Meta gemäß
              Art. 26 DSGVO. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </Section>

          <Section title="10. Telefonie (Aircall)">
            <p>
              Für die telefonische Bearbeitung von Kundenanfragen setzen wir den
              Telefonie-Dienstleister Aircall ein. Im Rahmen von Telefonaten können Gespräche
              DSGVO-konform zu Qualitätssicherungszwecken aufgezeichnet werden; hierauf wird zu
              Beginn eines Gesprächs gesondert hingewiesen. Rechtsgrundlage ist unser berechtigtes
              Interesse an einer hohen Servicequalität (Art. 6 Abs. 1 lit. f DSGVO) bzw. Ihre
              Einwilligung.
            </p>
          </Section>

          <Section title="11. Speicherdauer">
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen
              Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach
              werden die Daten routinemäßig gelöscht.
            </p>
          </Section>

          <Section title="12. Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten, ein Recht auf
              Datenübertragbarkeit sowie ein Widerspruchsrecht gegen die Verarbeitung nach
              Art. 15–21 DSGVO. Wenden Sie sich hierzu gerne an die oben genannte
              Kontaktadresse.
            </p>
          </Section>

          <Section title="13. Beschwerderecht bei einer Aufsichtsbehörde">
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren, z. B. bei der
              Landesbeauftragten für den Datenschutz und die Informationsfreiheit
              Rheinland-Pfalz.
            </p>
          </Section>

          <Section title="14. Änderung dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
              aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer
              Leistungen umzusetzen.
            </p>
          </Section>
        </div>
      </Container>
    </div>
  );
}
