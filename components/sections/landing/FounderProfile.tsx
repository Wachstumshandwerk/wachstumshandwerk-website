import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function FounderProfile() {
  return (
    <section id="gruender" className="scroll-mt-24 py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-[minmax(0,380px)_1fr]">
        <div
          className="relative aspect-[4/5] w-full"
          style={{
            maskImage:
              "radial-gradient(ellipse 78% 82% at center, black 55%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 82% at center, black 55%, transparent 100%)",
          }}
        >
          <Image
            src="/fotos/enver-portrait.jpg"
            alt="Enver Ilhan, Geschäftsführer Wachstumshandwerk"
            fill
            sizes="(min-width: 768px) 380px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            Wer dahinter steht
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-tannengruen md:text-4xl">
            Enver Ilhan
          </h2>

          <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-text/85">
            <p>
              Ich wollte immer im Handwerk bleiben — ich habe selbst sechs Jahre lang jede Rolle
              von unten gelernt: Hilfsarbeiter, Facharbeiter, Verkäufer im Baustoffhandel,
              Einkäufer. Als ich den Vertrieb für mich entdeckte, ging es zuletzt im Einkauf ums
              Ausschreibungsgeschäft — das klassische Anfragengeschäft hatte ich lange nicht mehr
              auf dem Schirm.
            </p>
            <p>
              Ich baute mit meinem Vertriebs-Skillset eine eigene Agentur auf, mehrb2bleads.de —
              bis ich einen Vertriebsexperten traf, der ausschließlich mit Handwerksunternehmen
              arbeitet und diese skaliert hat, von 2 auf 18 Mio. €, von 3 auf 12 Mio. €. Seine
              Aussage hat mir die Augen geöffnet: &bdquo;Der größte Engpass deiner Zielgruppe ist,
              dass sie nicht deine Fähigkeiten besitzen — sie wissen nicht, wie man einen Kunden
              im Vertrieb richtig abholt, vorbereitet, nachfasst.&ldquo;
            </p>
            <p>
              Handwerker sind das Fundament von allem, worauf wir gehen, stehen, leben und tun.
              Die Vorstellung, mein Können genau dort einzubringen, wo ich die Branche liebe und
              nie wirklich raus wollte, war die einzig logische Konsequenz. So entstand
              Wachstumshandwerk. Die Agentur läuft heute selbstständig ohne mich — unsere Vision
              ist es, mit Wachstumshandwerk das Synonym für Vertrieb in der Baubranche zu werden.
              Wir wollen für unsere Kunden ein Segen sein und ihnen genau da unter die Arme
              greifen, wo sie es wirklich brauchen.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
