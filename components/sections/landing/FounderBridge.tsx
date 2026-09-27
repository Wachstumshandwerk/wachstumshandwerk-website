"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { RevealBlock } from "@/components/motion/RevealBlock";

const rows = [
  {
    image: "/fotos/enver-buehne-neu.webp",
    alt: "Enver Ilhan auf der Bühne",
    text: "Handwerk braucht nicht noch mehr Anfragen — und auch keine „digitalen Unternehmensberater“, die dir erklären wollen, wie der Hase läuft.",
    flip: true,
  },
  {
    image: "/fotos/enver-headset.webp",
    alt: "Enver Ilhan im Kundengespräch",
    text: "Es braucht einen Partner, der versteht, wie der Alltag im Betrieb wirklich aussieht — und dich genau da entlastet, wo die Kernkompetenz fehlt: Vertriebsmanagement.",
  },
  {
    image: "/fotos/enver-telefon.webp",
    alt: "Enver Ilhan am Telefon",
    text: "So bekommst du deine Zeit zurück — und nur noch die Projekte, die sich wirklich lohnen.",
  },
];

function Row({
  image,
  alt,
  text,
  index,
  flip = false,
}: {
  image: string;
  alt: string;
  text: string;
  index: number;
  flip?: boolean;
}) {
  const reversed = index % 2 === 1;

  return (
    <RevealBlock
      standalone
      className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:w-1/2 lg:max-w-none">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          quality={90}
          className="object-cover"
          style={{
            filter: "grayscale(1) contrast(1.1) brightness(0.95)",
            transform: flip ? "scaleX(-1)" : undefined,
          }}
        />
        <div className="absolute inset-0 bg-tannengruen mix-blend-color" />
      </div>
      <p className="text-xl font-semibold leading-snug text-hintergrund md:text-2xl lg:w-1/2">
        {text}
      </p>
    </RevealBlock>
  );
}

function ArrowFinale() {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col items-center gap-10 pt-8 text-center md:gap-12 md:pt-12">
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
      >
        <svg width="67" height="98" viewBox="0 0 120 175" fill="none" className="md:h-[118px] md:w-[81px]">
          <defs>
            <linearGradient id="founderArrowGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-akzent)" />
              <stop offset="65%" stopColor="var(--color-akzent)" stopOpacity="0.75" />
              <stop offset="100%" stopColor="var(--color-hintergrund)" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="founderArrowShine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.85" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <clipPath id="founderArrowClip">
              <path d="M45 0 H75 V95 L112 95 L60 170 L8 95 L45 95 Z" />
            </clipPath>
          </defs>
          <path d="M45 0 H75 V95 L112 95 L60 170 L8 95 L45 95 Z" fill="url(#founderArrowGradient)" />
          {!reduce && (
            <g clipPath="url(#founderArrowClip)">
              <motion.rect
                x="0"
                width="120"
                height="70"
                fill="url(#founderArrowShine)"
                initial={{ y: -70 }}
                animate={{ y: 175 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2.4,
                  delay: 1.2,
                }}
              />
            </g>
          )}
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        className="flex flex-col items-center gap-7"
      >
        <p className="max-w-lg text-2xl font-semibold leading-snug text-hintergrund md:text-3xl">
          Genau deshalb habe ich Wachstumshandwerk gegründet.
        </p>
        <Image
          src="/brand/logo.svg"
          alt="Wachstumshandwerk"
          width={260}
          height={54}
          className="h-[77px] w-auto brightness-0 invert md:h-24"
        />
      </motion.div>
    </div>
  );
}

export function FounderBridge() {
  return (
    <section className="bg-tannengruen-black py-20 md:py-28">
      <Container className="flex flex-col gap-16 md:gap-20">
        {rows.map((row, i) => (
          <Row key={row.image} index={i} {...row} />
        ))}
        <ArrowFinale />
      </Container>
    </section>
  );
}
