// This file is no longer used and can be removed. I am leaving it for now to avoid breaking imports, but it should be deleted in a future cleanup.
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

const standards = [
    {
        icon: "science",
        title: "Detailed Project Reports (DPRs)",
        description: "Comprehensive DPRs with condition assessments, BoQs, and conservation plans."
    },
    {
        icon: "architecture",
        title: "ASI-Standard Drawings",
        description: "Architectural and structural drawings that meet the rigorous standards of the ASI."
    },
    {
        icon: "spa",
        title: "Conservation Methodology",
        description: "Adherence to principles of minimal intervention, reversibility, and use of traditional materials."
    }
]

export function ExpertiseSection() {
    const expertiseImage = PlaceHolderImages.find(p => p.id === 'asi-expertise');
    
    return (
        <section className="py-24 bg-card border-y border-border">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                         <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                            Compliance & Technical Expertise
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Our in-house team of architects, engineers, and researchers ensures that every document and every action on-site is technically sound and compliant with conservation ethics.
                        </p>
                        <div className="space-y-6 pt-4">
                            {standards.map(item => (
                                <div key={item.title} className="flex gap-5 items-start p-4 rounded-lg hover:bg-background transition-colors">
                                    <div className="flex-shrink-0 size-12 mt-1 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
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
                     <div className="relative h-[550px] rounded-2xl overflow-hidden shadow-lg border-4 border-background">
                       {expertiseImage && <Image 
                            src={expertiseImage.imageUrl}
                            alt={expertiseImage.description}
                            data-ai-hint={expertiseImage.imageHint}
                            fill
                            className="object-cover"
                        />}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"></div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
