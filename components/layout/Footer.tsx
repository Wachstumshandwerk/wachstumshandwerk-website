import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-tannengruen/10 bg-tannengruen text-hintergrund">
      <RevealGroup stagger={0.1}>
        <Container className="grid gap-10 py-16 md:grid-cols-3">
          <RevealBlock className="flex flex-col justify-center">
            <Image
              src="/brand/logo.svg"
              alt="Wachstumshandwerk"
              width={280}
              height={58}
              className="h-14 w-auto brightness-0 invert"
            />
          </RevealBlock>

          <RevealBlock className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-akzent">
              Kontakt
            </span>
            <a
              href="mailto:office@wachstumshandwerk.de"
              className="text-hintergrund/80 transition-colors duration-200 hover:text-hintergrund"
            >
              office@wachstumshandwerk.de
            </a>
            <a
              href="tel:+4917624365593"
              className="text-hintergrund/80 transition-colors duration-200 hover:text-hintergrund"
            >
              +49 176 24365593
            </a>
            <address className="not-italic text-hintergrund/80">
              Uferstraße 57
              <br />
              55116 Mainz
            </address>
          </RevealBlock>

          <RevealBlock className="flex flex-col gap-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-akzent">
              Unternehmen
            </span>
            <Link
              href="/ueber-uns"
              className="text-hintergrund/80 transition-colors duration-200 hover:text-hintergrund"
            >
              Über uns
            </Link>
            <Link
              href="/karriere"
              className="text-hintergrund/80 transition-colors duration-200 hover:text-hintergrund"
            >
              Karriere
            </Link>
            <Link
              href="/impressum"
              className="text-hintergrund/80 transition-colors duration-200 hover:text-hintergrund"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-hintergrund/80 transition-colors duration-200 hover:text-hintergrund"
            >
              Datenschutz
            </Link>
          </RevealBlock>
        </Container>
      </RevealGroup>

      <div className="border-t border-hintergrund/10 py-6">
        <Container>
          <p className="text-xs text-hintergrund/60">
            © {year} Wachstumshandwerk GmbH. Alle Rechte vorbehalten.
          </p>
        </Container>
      </div>
    </footer>
  );
}
