import { AdvisorySection } from "@/components/services/advisory-section";
import { AsiProjectsSection } from "@/components/services/asi-projects-section";
import { CsrProjectsSection } from "@/components/services/csr-projects-section";
import { CtaSection } from "@/components/services/cta-section";
import { ExpertiseSection } from "@/components/services/expertise-section";
import { InfrastructureSection } from "@/components/services/infrastructure-section";
import { ServicesHero } from "@/components/services/services-hero";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ExpertiseSection />
      <div className="bg-sandstone-light">
        <AsiProjectsSection />
      </div>
      <CsrProjectsSection />
      <div className="bg-sandstone-light">
        <InfrastructureSection />
      </div>
      <AdvisorySection />
      <CtaSection />
    </>
  );
}
