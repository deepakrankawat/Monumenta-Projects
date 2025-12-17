import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";

const points = [
    {
        icon: "gavel",
        title: "ASI Guidelines & Protocols",
        description: "Deep-seated knowledge of conservation charters, tender processes, and quality benchmarks."
    },
    {
        icon: "assignment",
        title: "Documentation & Reporting",
        description: "Proven track record in preparing detailed project reports (DPRs) and transparent progress updates."
    },
    {
        icon: "groups",
        title: "Stakeholder Management",
        description: "Expertise in coordinating between central, state, and local agencies for seamless project flow."
    }
]

export function ExperienceSection() {
  return (
    <section className="py-24 bg-background">
        <Container>
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                    Experience with Government Projects
                </h2>
                <p className="text-lg text-muted-foreground">
                    We speak your language. Our team is adept at navigating the complexities of government-led conservation projects, ensuring compliance, quality, and timely delivery.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {points.map(point => (
                    <Card key={point.title} className="p-8 bg-card border-border/50 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                         <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 border-2 border-primary/20">
                            <span className="material-symbols-outlined text-3xl">{point.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-foreground mb-3">{point.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                    </Card>
                ))}
            </div>
        </Container>
    </section>
  );
}
