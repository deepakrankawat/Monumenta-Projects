import Link from "next/link";
import { Container } from "../container";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const guides = [
  {
    id: "guide-restoration-steps",
    title: "Basic Steps Before Starting a Heritage Restoration Project",
    icon: "checklist",
    description: "A foundational guide covering preliminary assessments, documentation, and legal considerations to ensure your project starts on the right foot."
  },
  {
    id: "guide-adopt-a-monument",
    title: "How a Corporate Can Adopt a Monument Under CSR",
    icon: "corporate_fare",
    description: "Navigate the process of aligning your corporate social responsibility goals with heritage conservation, from project identification to compliance."
  }
];

export function GuidesSection() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Practical Guides
          </h2>
          <p className="text-lg text-muted-foreground">
            Actionable insights and frameworks to help you navigate the complexities of heritage conservation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {guides.map(guide => (
            <Card key={guide.id} className="group p-8 rounded-2xl bg-background border-border/70 hover:shadow-xl hover:border-accent transition-all flex flex-col">
              <div className="flex-shrink-0 size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 border-2 border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{guide.icon}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3 flex-1">{guide.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{guide.description}</p>
              <div className="mt-auto">
                <Button asChild variant="link" className="p-0 font-sans font-bold text-sm text-primary">
                  <Link href={`/insights/${guide.id}`}>Read Guide <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span></Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
