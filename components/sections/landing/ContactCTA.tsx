import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactCTA() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-white py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-5">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            Kostenloses Erstgespräch
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-tannengruen md:text-4xl">
            Lass uns besprechen, wie viel Zeit du zurückgewinnen kannst.
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-text/80">
            Trag dich ein — jemand aus unserem Team meldet sich bei dir, um einen Termin für ein
            unverbindliches Erstgespräch zu finden. Kein Preis, kein Druck, nur ein ehrliches
            Gespräch darüber, ob und wie wir dir helfen können.
          </p>
          <p className="text-sm text-muted">
            Nur 2–3 neue Betriebe pro Monat — wir melden uns zeitnah bei dir.
          </p>
        </div>

        <div className="rounded-3xl border border-tannengruen/10 bg-hintergrund p-6 md:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
