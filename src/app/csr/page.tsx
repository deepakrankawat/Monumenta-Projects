import { CsrHero } from "@/components/csr/csr-hero";
import { EngagementModelSection } from "@/components/csr/engagement-model-section";
import { FeaturedCaseStudy } from "@/components/csr/featured-case-study";
import { FinalCta } from "@/components/csr/final-cta";
import { ProjectModels } from "@/components/csr/project-models";
import { WhyHeritageSection } from "@/components/csr/why-heritage-section";

export default function CsrPage() {
  return (
    <>
      <CsrHero />
      <WhyHeritageSection />
      <EngagementModelSection />
      <ProjectModels />
      <FeaturedCaseStudy />
      <FinalCta />
    </>
  );
}
