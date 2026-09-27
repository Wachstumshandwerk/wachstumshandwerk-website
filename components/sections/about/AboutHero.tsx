"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/motion/RevealText";
import { RevealGroup, RevealBlock } from "@/components/motion/RevealBlock";
import { useScrollParallax } from "@/hooks/useScrollParallax";

const IMAGE_EDGE_FADE = "linear-gradient(to right, transparent 0%, black 38%, black 100%)";

export function AboutHero() {
  const { ref: parallaxRef, y: photoY } = useScrollParallax<HTMLDivElement>(16);

  return (
    <section className="relative overflow-hidden bg-tannengruen-black py-24 md:py-32">
      <div
        ref={parallaxRef}
        className="absolute inset-y-0 right-0 aspect-[1060/1313] h-full overflow-hidden"
      >
        <motion.div className="absolute -inset-y-5 inset-x-0" style={{ y: photoY }}>
          <Image
            src="/fotos/enver-studio.webp"
            alt="Enver Ilhan, Geschäftsführer von Wachstumshandwerk"
            fill
            sizes="800px"
            quality={90}
            className="object-cover"
            style={{
              maskImage: IMAGE_EDGE_FADE,
              WebkitMaskImage: IMAGE_EDGE_FADE,
              filter: "grayscale(1) contrast(1.05) brightness(0.95)",
            }}
            priority
          />
          <div
            className="absolute inset-0 bg-tannengruen mix-blend-color"
            style={{ maskImage: IMAGE_EDGE_FADE, WebkitMaskImage: IMAGE_EDGE_FADE }}
          />
          <div
            className="absolute inset-0 bg-tannengruen-black/35 mix-blend-multiply"
            style={{ maskImage: IMAGE_EDGE_FADE, WebkitMaskImage: IMAGE_EDGE_FADE }}
          />
        </motion.div>
      </div>

      <Container className="relative z-10">
        <RevealGroup className="flex max-w-xl flex-col gap-6 lg:-ml-10" delayChildren={0.1}>
          <RevealBlock>
            <span className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-akzent">
              <span className="h-px w-8 bg-akzent" />
              Wer dahinter steht
            </span>
          </RevealBlock>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-hintergrund md:text-5xl">
            <RevealText triggerOnMount delay={0.08}>
              Enver Ilhan
            </RevealText>
          </h1>
          <RevealBlock>
            <p className="text-lg leading-relaxed text-hintergrund/80 md:text-xl">
              Geschäftsführer von Wachstumshandwerk — sechs Jahre im Handwerk von der Pike auf gelernt,
              bevor er den Vertrieb für sich entdeckte.
            </p>
          </RevealBlock>
        </RevealGroup>
      </Container>
    </section>
  );
}
