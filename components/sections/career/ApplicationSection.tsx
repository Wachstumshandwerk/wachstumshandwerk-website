import { Container } from "@/components/ui/Container";
import { ApplicationForm } from "@/components/forms/ApplicationForm";
import { RevealText } from "@/components/motion/RevealText";
import { RevealBlock } from "@/components/motion/RevealBlock";

export function ApplicationSection() {
  return (
    <section id="bewerbung" className="scroll-mt-24 py-20 md:py-28">
      <Container className="mx-auto max-w-2xl">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <RevealBlock standalone className="items-center">
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
              Bewirb dich jetzt
            </span>
          </RevealBlock>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-tannengruen md:text-4xl">
            <RevealText>Starte deine eigene Erfolgsgeschichte</RevealText>
          </h2>
        </div>

        <RevealBlock
          standalone
          className="rounded-3xl border border-tannengruen/10 bg-white p-6 md:p-8"
        >
          <ApplicationForm />
        </RevealBlock>
      </Container>
    </section>
  );
}
