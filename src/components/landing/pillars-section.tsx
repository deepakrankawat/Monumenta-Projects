import { Container } from "../container";
import Link from "next/link";

const pillars = [
  {
    icon: "account_balance",
    title: "ASI Heritage Conservation",
    points: [
        "Structural and material conservation",
        "Adherence to national/international charters",
        "Detailed documentation (3D scanning, H-BIM)",
    ],
  },
  {
    icon: "volunteer_activism",
    title: "CSR-Funded Heritage Projects",
    points: [
        "End-to-end project management",
        "Transparent fund utilization and reporting",
        "Community engagement and skill development",
    ],
  },
  {
    icon: "architecture",
    title: "Heritage-Sensitive Infrastructure",
    points: [
        "Adaptive re-use planning",
        "Visitor management and amenities",
        "Site interpretation and museum design",
    ],
  },
  {
    icon: "description",
    title: "Technical Documentation and Advisory",
    points: [
        "Condition assessment and feasibility reports",
        "Detailed Project Reports (DPRs)",
        "Conservation and management plans",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-sandstone-texture opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8 border-b border-border pb-8">
          <div>
            <h2 className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-medium text-foreground font-display">Key Pillars of Our Work</h3>
          </div>
          <Link href="/services" className="text-sm font-semibold text-primary font-sans border-b border-primary/30 pb-1 hover:text-primary-dark transition-colors inline-flex items-center gap-2 hover:gap-3 flex-shrink-0">
              See all services <span className="material-symbols-outlined text-lg text-accent">arrow_right_alt</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group p-8 rounded-lg bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500 border border-accent/20">
                  <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
              </div>
              <h4 className="text-xl md:text-2xl font-medium mb-6 text-foreground group-hover:text-primary transition-colors font-display">{pillar.title}</h4>
              <ul className="space-y-3 font-body text-muted-foreground text-sm">
                {pillar.points.map(point => (
                    <li key={point} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-sm text-accent mt-1">check_circle</span>
                        <span>{point}</span>
                    </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
