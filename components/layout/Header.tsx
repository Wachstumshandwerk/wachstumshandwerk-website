"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Angebot", href: "/#loesung" },
  { label: "Für wen", href: "/#fuer-wen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "FAQ", href: "/#faq" },
  { label: "Karriere", href: "/karriere" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isCareerPage = pathname?.startsWith("/karriere");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 border-b border-tannengruen/10 bg-hintergrund/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-sm shadow-tannengruen/5" : ""
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.svg"
            alt="Wachstumshandwerk"
            width={240}
            height={50}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-bold text-tannengruen transition-colors hover:text-tannengruen-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={isCareerPage ? "/karriere#bewerbung" : "/#kontakt"} className="!px-5 !py-3 text-sm">
            {isCareerPage ? "Jetzt bewerben" : "Erstgespräch anfragen"}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Menü öffnen"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-tannengruen/20 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 bg-tannengruen" />
            <span className="h-0.5 w-5 bg-tannengruen" />
            <span className="h-0.5 w-5 bg-tannengruen" />
          </div>
        </button>
      </Container>

      {open && (
        <div className="border-t border-tannengruen/10 bg-hintergrund lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-bold text-tannengruen hover:bg-tannengruen/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <Button
                href={isCareerPage ? "/karriere#bewerbung" : "/#kontakt"}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {isCareerPage ? "Jetzt bewerben" : "Erstgespräch anfragen"}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </motion.header>
  );
}
