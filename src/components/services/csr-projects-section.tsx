import { Container } from "../container";

const services = [
    {
        icon: "analytics",
        title: "Impact Reporting",
        description: "Detailed metrics and storytelling to showcase the social, cultural, and economic impact of your CSR funds.",
    },
    {
        icon: "groups",
        title: "Community Engagement",
        description: "Involving local stakeholders and craftspeople to ensure long-term site stewardship and economic benefit.",
    },
    {
        icon: "nature_people",
        title: "Sustainable Tourism",
        description: "Developing heritage sites to support eco-friendly tourism that funds ongoing maintenance.",
    },
]

export function CsrProjectsSection() {
    return (
        <div className="w-full bg-background">
            <Container className="py-5">
                <div className="flex flex-col gap-10 px-4 py-8 md:py-12 border-t border-border">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-accent text-4xl">volunteer_activism</span>
                            <h1 className="text-primary text-2xl md:text-3xl font-bold leading-tight max-w-[720px] font-display">
                                CSR-Funded Heritage &amp; Community
                            </h1>
                        </div>
                        <p className="text-muted-foreground text-base font-normal leading-normal max-w-[720px] pl-[52px]">
                            Impactful restoration initiatives designed for corporate social responsibility portfolios, focusing on tangible social and cultural returns.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((service) => (
                             <div key={service.title} className="flex flex-1 gap-4 rounded-lg border border-border bg-card p-6 flex-col hover:border-accent hover:bg-white hover:shadow-lg transition-all duration-300 group">
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
