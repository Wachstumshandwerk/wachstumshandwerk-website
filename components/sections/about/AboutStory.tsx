import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";

export function AboutStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <RevealGroup
          className="mx-auto flex max-w-2xl flex-col gap-8 text-lg leading-relaxed text-text/80 md:text-xl"
          stagger={0.1}
        >
          <RevealBlock>
            <p>
              Ich wollte immer im Handwerk bleiben — ich habe selbst sechs Jahre lang jede Rolle
              von unten gelernt: Hilfsarbeiter, Facharbeiter, Verkäufer im Baustoffhandel,
              Einkäufer. Als ich den Vertrieb für mich entdeckte, ging es zuletzt im Einkauf ums
              Ausschreibungsgeschäft — das klassische Anfragengeschäft hatte ich lange nicht mehr
              auf dem Schirm.
            </p>
          </RevealBlock>
          <RevealBlock>
            <p>
              Ich baute mit meinem Vertriebs-Skillset eine eigene Agentur auf, mehrb2bleads.de —
              bis ich einen Vertriebsexperten traf, der ausschließlich mit Handwerksunternehmen
              arbeitet und diese skaliert hat, von 2 auf 18 Mio. €, von 3 auf 12 Mio. €. Seine
              Aussage hat mir die Augen geöffnet: &bdquo;Der größte Engpass deiner Zielgruppe ist,
              dass sie nicht deine Fähigkeiten besitzen — sie wissen nicht, wie man einen Kunden
              im Vertrieb richtig abholt, vorbereitet, nachfasst.&ldquo;
            </p>
          </RevealBlock>
          <RevealBlock>
            <p className="text-2xl font-bold leading-snug text-tannengruen md:text-3xl">
              Handwerker sind das Fundament von allem, worauf wir gehen, stehen, leben und tun.
            </p>
          </RevealBlock>
          <RevealBlock>
            <p>
              Die Vorstellung, mein Können genau dort einzubringen, wo ich die Branche liebe und
              nie wirklich raus wollte, war die einzig logische Konsequenz. So entstand{" "}
              <span className="font-bold text-akzent">Wachstumshandwerk</span>. Die Agentur läuft
              heute selbstständig ohne mich — unsere Vision ist es, mit Wachstumshandwerk das
              Synonym für Vertrieb in der Baubranche zu werden. Wir wollen für unsere Kunden ein
              Segen sein und ihnen genau da unter die Arme greifen, wo sie es wirklich brauchen.
            </p>
          </RevealBlock>
        </RevealGroup>
      </Container>
    </section>
  );
}
