import { AsiHero } from "@/components/services/asi-hero";
import { ExperienceSection } from "@/components/services/experience-section";
import { ExpertiseSection } from "@/components/services/expertise-section";
import { HowWeWorkSection } from "@/components/services/how-we-work-section";
import { FeaturedProjectsSection } from "@/components/services/featured-projects-section";
import { DownloadsSection } from "@/components/services/downloads-section";
import { CtaSection } from "@/components/services/cta-section";

export default function AsiAndGovernmentPage() {
  return (
    <>
      <AsiHero />
      <ExperienceSection />
      <ExpertiseSection />
      <HowWeWorkSection />
      <FeaturedProjectsSection />
      <DownloadsSection />
      <CtaSection />
    </>
  );
}
