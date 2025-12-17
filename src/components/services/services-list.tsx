import { Container } from "../container";
import { Card } from "../ui/card";

const serviceClusters = [
  {
    title: "ASI & Government Heritage Projects",
    icon: "account_balance",
    services: [
      "Structural conservation & restoration",
      "Architectural documentation, condition assessment, DPRs",
      "Site development (pathways, visitor facilities, signage, lighting)",
      "Heritage landscaping & urban design around monuments",
    ],
    benefits: [
      "Ensures full compliance with government charters and standards.",
      "Reduces administrative burden through expert liaison.",
      "Guarantees quality and authenticity in execution."
    ]
  },
  {
    title: "CSR-Funded Heritage & Community Projects",
    icon: "volunteer_activism",
    services: [
      "Identifying suitable heritage projects for CSR alignment",
      "Preparation of project proposals & DPRs for corporate approval",
      "Execution of restoration works with transparent reporting",
      "Impact assessment and documentation for CSR compliance",
    ],
    benefits: [
        "Creates a lasting, tangible brand legacy.",
        "Generates powerful stories for stakeholder engagement.",
        "Empowers local communities and revives traditional skills."
    ]
  },
  {
    title: "Heritage-Sensitive Infrastructure",
    icon: "architecture",
    services: [
      "Conservation-friendly repairs for historic schools, libraries, town halls",
      "Adaptive reuse of old buildings (museums, cultural centres, hotels)",
      "Streetscape improvement and facade restoration in old city areas",
      "Integration of modern amenities with minimal historic impact",
    ],
    benefits: [
        "Protects the unique character of historic urban areas.",
        "Extends the life of valuable community assets.",
        "Balances modern needs with cultural preservation."
    ]
  },
  {
    title: "Advisory & Documentation",
    icon: "description",
    services: [
      "Heritage audits, structural surveys, and feasibility studies",
      "Guidance on legal/administrative processes (ASI/NOCs)",
      "Preparation of drawings, BOQs, tenders, and technical reports",
      "Third-party quality monitoring and project peer review",
    ],
    benefits: [
        "Provides clarity and reduces risk for project owners.",
        "Ensures technical accuracy from project inception.",
        "Offers independent verification for project stakeholders."
    ]
  },
];

export function ServicesList() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8">
            {serviceClusters.map((cluster) => (
                <Card key={cluster.title} className="p-8 bg-card rounded-2xl shadow-sm border border-border/50 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-3xl">{cluster.icon}</span>
                        </div>
                        <h2 className="text-2xl font-bold font-display text-primary flex-1">{cluster.title}</h2>
                    </div>
                    
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">What's Included:</h3>
                    <ul className="space-y-2.5 text-muted-foreground list-none pl-0 font-body text-sm mb-8 flex-1">
                        {cluster.services.map(service => (
                            <li key={service} className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-sm text-accent mt-0.5">arrow_circle_right</span>
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-border">
                        <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">Key Benefits:</h3>
                        <ul className="space-y-2.5 text-muted-foreground list-none pl-0 font-body text-sm">
                            {cluster.benefits.map(benefit => (
                                <li key={benefit} className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-sm text-green-700 mt-0.5">check_circle</span>
                                    <span className="font-medium text-foreground/80">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            ))}
        </div>
      </Container>
    </section>
  );
}
