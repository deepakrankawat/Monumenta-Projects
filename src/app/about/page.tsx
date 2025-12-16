import { AboutHero } from "@/components/about/about-hero";
import { ApproachSection } from "@/components/about/approach-section";
import { LocationsSection } from "@/components/about/locations-section";
import { MissionSection } from "@/components/about/mission-section";
import { StorySection } from "@/components/about/story-section";
import { TeamSection } from "@/components/about/team-section";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <MissionSection />
      <ApproachSection />
      <TeamSection />
      <LocationsSection />
    </>
  );
}
