import { InsightsHero } from "@/components/insights/insights-hero";
import { InsightsGrid } from "@/components/insights/insights-grid";
import { GuidesSection } from "@/components/insights/guides-section";
import { NewsSection } from "@/components/insights/news-section";

export default function InsightsPage() {
  return (
    <>
      <InsightsHero />
      <InsightsGrid />
      <GuidesSection />
      <NewsSection />
    </>
  );
}
