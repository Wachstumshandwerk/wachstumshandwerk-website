import { Hero } from "@/components/sections/landing/Hero";
import { ProblemSection } from "@/components/sections/landing/ProblemSection";
import { TruthSection } from "@/components/sections/landing/TruthSection";
import { SolutionSteps } from "@/components/sections/landing/SolutionSteps";
import { ProcessPhases } from "@/components/sections/landing/ProcessPhases";
import { CapacityNotice } from "@/components/sections/landing/CapacityNotice";
import { ProofSection } from "@/components/sections/landing/ProofSection";
import { IdealCustomer } from "@/components/sections/landing/IdealCustomer";
import { FounderProfile } from "@/components/sections/landing/FounderProfile";
import { CaptainMetaphor } from "@/components/sections/landing/CaptainMetaphor";
import { FAQSection } from "@/components/sections/landing/FAQSection";
import { ContactCTA } from "@/components/sections/landing/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <TruthSection />
      <SolutionSteps />
      <ProcessPhases />
      <CapacityNotice />
      <ProofSection />
      <IdealCustomer />
      <FounderProfile />
      <CaptainMetaphor />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
