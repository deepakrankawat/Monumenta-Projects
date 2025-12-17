import { ProcessHero } from "@/components/process/process-hero";
import { SafetyCommunitySection } from "@/components/process/safety-community-section";
import { StandardsEthicsSection } from "@/components/process/standards-ethics-section";
import { StepByStepSection } from "@/components/process/step-by-step-section";

export default function ProcessPage() {
  return (
    <>
      <ProcessHero />
      <StepByStepSection />
      <StandardsEthicsSection />
      <SafetyCommunitySection />
    </>
  );
}
