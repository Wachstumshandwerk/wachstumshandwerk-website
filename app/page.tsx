import { Hero } from "@/components/sections/landing/Hero";
import { TrustStrip } from "@/components/sections/landing/TrustStrip";
import { ProblemSection } from "@/components/sections/landing/ProblemSection";
import { TruthSection } from "@/components/sections/landing/TruthSection";
import { SolutionSteps } from "@/components/sections/landing/SolutionSteps";
import { ProcessPhases } from "@/components/sections/landing/ProcessPhases";
import { CapacityNotice } from "@/components/sections/landing/CapacityNotice";
import { ProofSection } from "@/components/sections/landing/ProofSection";
import { IdealCustomer } from "@/components/sections/landing/IdealCustomer";
import { FounderBridge } from "@/components/sections/landing/FounderBridge";
import { CaptainMetaphor } from "@/components/sections/landing/CaptainMetaphor";
import { FAQSection } from "@/components/sections/landing/FAQSection";
import { ContactCTA } from "@/components/sections/landing/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <TruthSection />
      <SolutionSteps />
      <ProcessPhases />
      <CapacityNotice />
      <ProofSection />
      <IdealCustomer />
      <FounderBridge />
      <CaptainMetaphor />
      <ContactCTA />
      <FAQSection />
    </>
  );
}
