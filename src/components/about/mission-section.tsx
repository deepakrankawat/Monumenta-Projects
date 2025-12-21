import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
    {
        icon: "verified_user",
        title: "Our Mission",
        description: "To safeguard cultural identity through meticulous conservation, ensuring that every restoration respects the original craftsmanship."
    },
    {
        icon: "visibility",
        title: "Our Vision",
        description: "Creating a sustainable ecosystem for heritage tourism where local communities thrive alongside the monuments they protect."
    },
    {
        icon: "diversity_3",
        title: "Our Values",
        description: "Integrity in materials, Authenticity in technique, and deep Engagement with the communities that live around our sites."
    }
]

export function MissionSection() {
  return (
    <section className="py-24 bg-background/70 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <Container className="relative z-10">
            <div className="flex flex-col md:flex-row gap-12 md:items-end mb-16">
                <div className="flex-1">
                    <span className="text-accent font-sans font-bold tracking-wider uppercase text-sm mb-3 block">Our Core</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                        Mission, Vision <br /> and Values
                    </h2>
                </div>
                <div className="flex-1 pb-2">
                    <p className="text-lg text-muted-foreground font-medium max-w-xl">
                        Safeguarding cultural identity through sustainable heritage tourism and uncompromised community integrity.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map(item => (
                    <Card key={item.title} className="group p-10 rounded-3xl bg-card border-border/50 hover:border-accent shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="p-0 mb-8">
                            <div className="size-16 rounded-2xl bg-background/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-accent transition-colors">
                                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    </section>
  );
}
