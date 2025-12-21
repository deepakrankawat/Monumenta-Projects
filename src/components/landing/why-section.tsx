import { Container } from "../container";

const points = [
  {
    icon: "gavel",
    title: "ASI and Government Expertise",
    description: "Deep understanding of official procedures, standards, and compliance requirements for heritage projects in India.",
  },
  {
    icon: "spa",
    title: "Authentic Materials and Methods",
    description: "Commitment to using traditional materials like lime mortar (chuna) and time-tested artisanal techniques.",
  },
  {
    icon: "assignment",
    title: "Meticulous Documentation",
    description: "Rigorous documentation, from 3D laser scanning to H-BIM, ensures transparency and academic accuracy.",
  },
  {
    icon: "groups",
    title: "Community-Centric Approach",
    description: "Integrating local communities through skill development and sustainable tourism to create holistic value.",
  },
];

export function WhySection() {
  return (
    <section className="py-20 md:py-24 bg-background border-y border-border">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
            Why Monumenta?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine the precision of modern project management with a deep-seated respect for historical and cultural context.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
          {points.map((point) => (
            <div key={point.title} className="text-center flex flex-col items-center p-6 rounded-lg hover:bg-card transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6 border-2 border-primary/10">
                <span className="material-symbols-outlined text-3xl">{point.icon}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground font-display mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
