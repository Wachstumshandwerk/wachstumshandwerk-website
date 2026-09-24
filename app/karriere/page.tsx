import type { Metadata } from "next";
import { CareerHero } from "@/components/sections/career/CareerHero";
import { WhyUs } from "@/components/sections/career/WhyUs";
import { OpenPositions } from "@/components/sections/career/OpenPositions";
import { ApplicationSection } from "@/components/sections/career/ApplicationSection";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Werde Teil von Wachstumshandwerk — offene Stellen im Vertrieb für Handwerksbetriebe, ungedeckelte Provisionen und Top-Weiterbildung.",
};

export default function KarrierePage() {
  return (
    <>
      <CareerHero />
      <WhyUs />
      <OpenPositions />
      <ApplicationSection />
    </>
  );
}
