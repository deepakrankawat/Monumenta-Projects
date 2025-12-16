import { Container } from "../container";

const services = [
  {
    icon: "foundation",
    title: "Structural Conservation & Restoration",
    description: "Meticulous repair and strengthening of historic structures using authentic materials and techniques.",
  },
  {
    icon: "assignment",
    title: "Documentation & DPRs",
    description: "Condition assessments, detailed project reports (DPRs), and 3D laser scanning for precise planning.",
  },
  {
    icon: "landscape",
    title: "Site Development & Landscaping",
    description: "Creating visitor-friendly pathways, signage, lighting, and heritage-sensitive landscaping.",
  },
]

export function AsiProjectsSection() {
  return (
    <Container className="py-5">
      <div className="flex flex-col gap-10 px-4 py-8 md:py-12 @container">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-accent text-4xl">account_balance</span>
            <h1 className="text-primary text-2xl md:text-3xl font-bold leading-tight max-w-[720px] font-display">
              ASI &amp; Government Heritage Projects
            </h1>
          </div>
          <p className="text-muted-foreground text-base font-normal leading-normal max-w-[720px] pl-[52px]">
            Comprehensive conservation strategies aligned with Archaeological Survey of India (ASI) guidelines, ensuring historical integrity and regulatory compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="flex flex-1 gap-4 rounded-lg border border-border bg-white p-6 flex-col hover:border-accent hover:shadow-lg transition-all duration-300 group">
              <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-foreground text-lg font-bold leading-tight font-display">{service.title}</h2>
                <p className="text-muted-foreground text-sm font-normal leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
