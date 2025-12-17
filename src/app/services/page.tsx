import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import { CtaSection } from "@/components/services/cta-section";
import { FeaturedProjectsSection } from "@/components/services/featured-projects-section";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <FeaturedProjectsSection />
      <CtaSection />
    </>
  );
}
