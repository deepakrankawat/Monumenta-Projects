// This file is no longer used and can be removed. I am leaving it for now to avoid breaking imports, but it should be deleted in a future cleanup.
import { Container } from "../container";

const steps = [
  {
    step: "01",
    title: "Concept & Survey",
    description: "Joint site visits and preliminary surveys to align on project goals and scope."
  },
  {
    step: "02",
    title: "DPR & Approvals",
    description: "Preparation and submission of DPRs for formal approval from all concerned departments."
  },
  {
    step: "03",
    title: "Execution & Monitoring",
    description: "On-site execution with joint monitoring and transparent reporting protocols."
  },
  {
    step: "04",
    title: "Reporting & Handover",
    description: "Submission of final reports, utilisation certificates, and formal project handover."
  }
];

export function HowWeWorkSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            How We Work With Government Bodies
          </h2>
          <p className="text-lg text-muted-foreground">
            A streamlined and collaborative process designed for clarity and efficiency.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-border/80 border-t border-dashed border-border -z-0"></div>
          {steps.map((item, index) => (
            <div key={item.title} className="p-6 bg-card rounded-xl border border-border group flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow relative">
               <div className="size-16 rounded-full bg-background border-2 border-border shadow-sm flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                    <span className="font-display font-bold text-xl text-primary">{item.step}</span>
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
