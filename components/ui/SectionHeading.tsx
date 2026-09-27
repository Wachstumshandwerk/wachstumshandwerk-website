import { RevealText } from "@/components/motion/RevealText";
import { RevealBlock } from "@/components/motion/RevealBlock";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <RevealBlock standalone>
          <span className="text-sm font-bold uppercase tracking-[0.15em] text-akzent">
            {eyebrow}
          </span>
        </RevealBlock>
      )}
      <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight text-tannengruen md:text-4xl">
        <RevealText>{title}</RevealText>
      </h2>
      {subtitle && (
        <RevealBlock standalone>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
        </RevealBlock>
      )}
    </div>
  );
}
