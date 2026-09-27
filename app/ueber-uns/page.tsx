import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { MissionStatement } from "@/components/sections/about/MissionStatement";
import { PromiseCascade } from "@/components/sections/about/PromiseCascade";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { CompanyValues } from "@/components/sections/about/CompanyValues";
import { ContactCTA } from "@/components/sections/landing/ContactCTA";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Enver Ilhan, Gründer von Wachstumshandwerk — sechs Jahre im Handwerk gelernt, bevor er den Vertrieb für sich entdeckte.",
};

export default function UeberUnsPage() {
  return (
    <>
      <AboutHero />
      <MissionStatement />
      <PromiseCascade />
      <AboutStory />
      <CompanyValues />
      <ContactCTA />
    </>
  );
}
