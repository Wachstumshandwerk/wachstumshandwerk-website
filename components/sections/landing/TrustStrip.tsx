import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";
import { CountUp } from "@/components/motion/CountUp";

const stats = [
  { value: "3,4 Mio. €", label: "Vertriebsvolumen" },
  { value: "12 Mio. €", label: "Einkaufsvolumen" },
  { value: "90 %", label: "Preiserhöhungen vermieden" },
  { value: "86+", label: "betreute Kunden" },
  { value: "100+", label: "Vertriebsprojekte" },
  { value: "Ø 6×+", label: "Return on Invest" },
];

export function TrustStrip() {
  return (
    <section className="bg-tannengruen/[0.04] py-8 md:py-10">
      <Container>
        <RevealGroup
          className="flex flex-wrap justify-center gap-x-10 gap-y-6 md:flex-nowrap md:justify-between"
          stagger={0.1}
        >
          {stats.map((stat, i) => (
            <RevealBlock
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center md:items-start md:text-left"
            >
              <span className="h-0.5 w-6 rounded-full bg-akzent" />
              <span className="text-2xl font-extrabold tracking-tight text-tannengruen md:text-3xl">
                <CountUp value={stat.value} delay={i * 0.05} />
              </span>
              <span className="text-xs leading-snug text-muted md:text-[13px]">{stat.label}</span>
            </RevealBlock>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
