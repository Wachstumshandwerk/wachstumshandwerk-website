import { Container } from "@/components/ui/Container";
import { ApplicationForm } from "@/components/forms/ApplicationForm";

export function ApplicationSection() {
  return (
    <section id="bewerbung" className="scroll-mt-24 py-20 md:py-28">
      <Container className="mx-auto max-w-2xl">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            Bewirb dich jetzt
          </span>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-tannengruen md:text-4xl">
            Starte deine eigene Erfolgsgeschichte
          </h2>
        </div>

        <div className="rounded-3xl border border-tannengruen/10 bg-white p-6 md:p-8">
          <ApplicationForm />
        </div>
      </Container>
    </section>
  );
}
