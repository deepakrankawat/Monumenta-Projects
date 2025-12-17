import { Container } from "../container";

const steps = [
  {
    step: "01",
    title: "Preliminary Assessment & Site Visit",
    description: "Initial reconnaissance to understand the site context, historical significance, and stakeholder objectives."
  },
  {
    step: "02",
    title: "Historical & Architectural Documentation",
    description: "Archival research, measured drawings, and photographic documentation to create a baseline record."
  },
  {
    step: "03",
    title: "Condition Mapping & Structural Evaluation",
    description: "Detailed mapping of defects, material testing, and non-destructive structural analysis to diagnose issues."
  },
  {
    step: "04",
    title: "Concept & Conservation Strategy",
    description: "Developing a conservation philosophy and strategy that respects the building's integrity and value."
  },
  {
    step: "05",
    title: "Detailed Project Report & Estimation",
    description: "Preparation of DPR with methodologies, BOQs, cost estimates, and project timelines for approval."
  },
  {
    step: "06",
    title: "Approvals (ASI / State / Local)",
    description: "Liaising with all relevant government bodies to secure necessary permits and ensure full compliance."
  },
  {
    step: "07",
    title: "Execution & Quality Control",
    description: "Meticulous execution by master artisans under expert supervision, with rigorous quality checks at every stage."
  },
  {
    step: "08",
    title: "Final Handover & Maintenance Guidance",
    description: "Project completion, final documentation, and providing a comprehensive guide for future upkeep."
  }
];

export function StepByStepSection() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Our Conservation Process
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic, eight-step methodology that ensures transparency, compliance, and excellence from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.title} className="p-6 bg-background rounded-xl border border-border/70 group flex flex-col items-start gap-4 hover:shadow-lg transition-shadow">
               <div className="flex items-center justify-between w-full">
                <span className="text-5xl font-display font-bold text-primary/20 transition-colors group-hover:text-primary/50">
                  {item.step}
                </span>
               </div>
              <h3 className="text-xl font-display font-bold text-foreground mt-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
