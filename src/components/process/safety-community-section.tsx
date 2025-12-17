import { Container } from "../container";

const principles = [
    {
        icon: "health_and_safety",
        title: "Site Safety",
        description: "Implementing rigorous safety protocols for all workers and visitors, including structural supports, scaffolding checks, and personal protective equipment (PPE)."
    },
    {
        icon: "recycling",
        title: "Waste Management",
        description: "Responsible disposal and recycling of construction debris, with a focus on minimizing environmental impact and reusing materials wherever feasible."
    },
    {
        icon: "groups",
        title: "Community Engagement",
        description: "Engaging with local communities to minimize disruption, create employment opportunities, and build a sense of ownership and pride in the restored heritage."
    }
]

export function SafetyCommunitySection() {
    return (
        <section className="py-24 bg-card border-y border-border">
            <Container>
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                        Safety, Environment & Community
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        A holistic approach that extends beyond the monument itself, ensuring our work benefits the people and planet it touches.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map(item => (
                        <div key={item.title} className="p-8 bg-background rounded-2xl border border-border/70 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                            </div>
                            <h3 className="text-2xl font-bold font-display text-foreground mb-3">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
