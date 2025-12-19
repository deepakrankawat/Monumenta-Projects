import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

const standards = [
    {
        icon: "spa",
        title: "Material Authenticity",
        description: "We prioritize the use of traditional, locally-sourced materials like lime mortar (chuna surkhi), sandstone, and natural pigments to ensure chemical compatibility and historical accuracy."
    },
    {
        icon: "construction",
        title: "Traditional Craftsmanship",
        description: "Our projects employ master artisans skilled in age-old techniques such as araish (lime plaster), stone carving, and fresco work, preserving intangible cultural heritage."
    },
    {
        icon: "gavel",
        title: "Ethical Charters",
        description: "All our interventions are guided by the principles of national and international conservation charters, including those by ASI, ICOMOS, and UNESCO."
    }
]

export function StandardsEthicsSection() {
    const standardsImage = PlaceHolderImages.find(p => p.id === 'lime-plaster-texture');
    
    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[550px] rounded-2xl overflow-hidden shadow-lg border-4 border-card">
                       {standardsImage && <Image 
                            src={standardsImage.imageUrl}
                            alt={standardsImage.description}
                            data-ai-hint={standardsImage.imageHint}
                            fill
                            className="object-cover"
                        />}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    </div>
                    <div className="space-y-8">
                         <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                            Technical Standards & Ethics
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Our work is founded on a bedrock of scientific principles and ethical guidelines. We believe in minimal intervention, reversibility, and absolute respect for the monument's historical integrity.
                        </p>
                        <div className="space-y-6 pt-4">
                            {standards.map(item => (
                                <div key={item.title} className="flex gap-5 items-start p-4 rounded-lg hover:bg-card transition-colors">
                                    <div className="flex-shrink-0 size-12 mt-1 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-foreground font-display">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
