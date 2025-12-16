import Image from "next/image";
import { Container } from "@/components/container";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Progress } from "../ui/progress";

const points = [
    {
        icon: "construction",
        title: "Traditional Techniques",
        description: "We employ generational artisans skilled in Araish plaster, stone carving, and Jali work, ensuring material authenticity."
    },
    {
        icon: "analytics",
        title: "Modern Project Management",
        description: "Deploying digital documentation, strict timelines, and transparent financial reporting for our CSR partners."
    },
    {
        icon: "policy",
        title: "ASI Compliance",
        description: "All interventions strictly adhere to Archaeological Survey of India guidelines and international conservation charters."
    }
]

export function ApproachSection() {
    const approachImage = PlaceHolderImages.find(p => p.id === 'about-approach');

    return (
        <section className="py-24 md:py-32 overflow-hidden bg-background">
            <Container>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                            Bridging Ancient Craft <br />
                            <span className="text-primary italic">with Modern Compliance</span>
                        </h2>
                        <div className="space-y-8">
                           {points.map(point => (
                             <div key={point.title} className="flex gap-6 p-4 hover:bg-card rounded-2xl transition-colors border border-transparent hover:border-border/30">
                                <div className="shrink-0 mt-1 size-12 rounded-full bg-accent/10 border border-accent flex items-center justify-center text-accent shadow-sm">
                                    <span className="material-symbols-outlined text-xl">{point.icon}</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-display font-bold text-primary mb-2">{point.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                                </div>
                            </div>
                           ))}
                        </div>
                    </div>
                    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-foreground shadow-2xl border-[6px] border-card">
                        {approachImage && (
                            <div className="absolute inset-0">
                                <Image
                                    src={approachImage.imageUrl}
                                    alt={approachImage.description}
                                    data-ai-hint={approachImage.imageHint}
                                    fill
                                    className="object-cover opacity-80 mix-blend-overlay"
                                />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent"></div>
                        <div className="absolute bottom-10 left-8 right-8 bg-card/95 backdrop-blur-xl border border-accent/30 p-8 rounded-2xl shadow-xl">
                            <div className="flex items-center justify-between mb-4 font-sans">
                                <span className="text-foreground font-bold text-lg">Material Analysis</span>
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-xs border border-primary/20">PASSED</span>
                            </div>
                            <Progress value={92} className="h-2 mb-6" />
                            <div className="flex gap-8 text-sm font-sans">
                                <div className="border-l-4 border-accent pl-3">
                                    <span className="block text-foreground font-bold">Lime Mortar</span>
                                    <span className="text-muted-foreground">Ratio 1:1:1</span>
                                </div>
                                <div className="border-l-4 border-primary pl-3">
                                    <span className="block text-foreground font-bold">Stone Type</span>
                                    <span className="text-muted-foreground">Red Sandstone</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
