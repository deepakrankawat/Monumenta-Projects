import { Container } from "../container";

const services = [
  {
    icon: "assignment",
    title: "Heritage Audits & Surveys",
    description: "Detailed evaluation of heritage assets to inform conservation strategies and priorities.",
  },
  {
    icon: "gavel",
    title: "Legal & Administrative Guidance",
    description: "Expert assistance with navigating ASI/NOC procedures and other regulatory requirements.",
  },
  {
    icon: "draw",
    title: "Technical Reports & Tenders",
    description: "Preparation of detailed drawings, BOQs, tenders, and technical reports for project execution.",
  },
]

export function AdvisorySection() {
  return (
    <div className="w-full bg-off-white">
      <Container className="py-5">
        <div className="flex flex-col gap-10 px-4 py-8 md:py-12 border-t border-border">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent text-4xl">library_books</span>
              <h1 className="text-primary text-2xl md:text-3xl font-bold leading-tight max-w-[720px] font-display">
                Advisory &amp; Documentation
              </h1>
            </div>
            <p className="text-muted-foreground text-base font-normal leading-normal max-w-[720px] pl-[52px]">
              The foundation of every successful conservation project. We provide meticulous research and planning documents that ensure clarity, compliance, and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="flex flex-1 gap-4 rounded-lg border border-border bg-background p-6 flex-col hover:border-accent hover:shadow-lg transition-all duration-300 group">
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
    </div>
  )
}
