import { HeroSection } from "@/components/landing/hero-section";
import { IntroSection } from "@/components/landing/intro-section";
import { PillarsSection } from "@/components/landing/pillars-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { WhySection } from "@/components/landing/why-section";
import { CsrSection } from "@/components/landing/csr-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ContactSection } from "@/components/landing/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <PillarsSection />
      <ProjectsSection />
      <WhySection />
      <CsrSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
