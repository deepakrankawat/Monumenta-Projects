import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "../container";
import Link from "next/link";
import { Button } from "../ui/button";

const pillars = [
  {
    icon: "foundation",
    title: "Structural Conservation",
    description: "Stabilizing historic structures with heritage-sensitive engineering techniques.",
  },
  {
    icon: "brush",
    title: "Art Conservation",
    description: "Restoring frescoes, murals, and intricate stone carvings to their original glory.",
  },
  {
    icon: "map",
    title: "Heritage Tourism",
    description: "Developing sustainable, community-led tourism plans for heritage sites.",
  },
  {
    icon: "corporate_fare",
    title: "CSR Advisory",
    description: "Guiding corporations in impactful, compliant heritage CSR initiatives.",
  },
];

export function PillarsSection() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-sandstone-texture opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <Container className="relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-border pb-8">
          <div>
            <h2 className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-medium text-foreground font-display">Comprehensive Conservation</h3>
          </div>
          <Link href="/services" className="text-sm font-semibold text-primary font-sans border-b border-primary/30 pb-1 hover:text-primary-dark transition-colors inline-flex items-center gap-2 hover:gap-3">
              See all services <span className="material-symbols-outlined text-lg text-accent">arrow_right_alt</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group p-10 rounded-lg bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500 border border-accent/20">
                  <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
              </div>
              <h4 className="text-2xl font-medium mb-4 text-foreground group-hover:text-primary transition-colors font-display">{pillar.title}</h4>
              <p className="text-base text-muted-foreground leading-relaxed font-body">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
