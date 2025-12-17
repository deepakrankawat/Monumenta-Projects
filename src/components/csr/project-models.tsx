import Image from "next/image";
import { Button } from "../ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

const models = [
    {
        id: "csr-adopt",
        title: "Single-Site Flagship Project",
        description: "Comprehensive adoption of a standalone monument (Haveli, Stepwell, or Chhatri) for end-to-end restoration and maintenance.",
        budget: "₹50L - ₹5Cr",
        icon: "castle"
    },
    {
        id: "csr-skill",
        title: "Multi-Site Regional Programme",
        description: "A portfolio approach to restoring a cluster of smaller monuments in a specific geographical area or of a particular type.",
        budget: "₹1Cr+",
        icon: "handyman"
    },
    {
        id: "csr-amenities",
        title: "Heritage + Community Development",
        description: "A combo project linking monument restoration with local skill training, tourism livelihood programs, or school heritage clubs.",
        budget: "₹30L - ₹1.5Cr",
        icon: "deck"
    },
]

export function ProjectModels() {
    return (
    <section className="w-full py-24 px-4 md:px-10 bg-card">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border pb-6">
          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs font-sans mb-2 block">Our Offerings</span>
            <h2 className="text-primary text-4xl font-display font-bold">CSR Project Models</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" className="font-bold tracking-wide">All Models</Button>
            <Button size="sm" variant="outline" className="font-bold tracking-wide">Conservation</Button>
            <Button size="sm" variant="outline" className="font-bold tracking-wide">Community</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map(model => {
                const image = PlaceHolderImages.find(p => p.id === model.id);
                return (
                    <div key={model.id} className="flex flex-col rounded-lg overflow-hidden bg-background shadow-sm hover:shadow-xl border border-border transition-all duration-300 group">
                        <div className="h-56 relative overflow-hidden">
                           {image && <Image src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />}
                        </div>
                        <div className="p-8 flex flex-col gap-4 flex-1 bg-background relative z-10">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent text-2xl">{model.icon}</span>
                                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">{model.title}</h3>
                            </div>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed flex-1">{model.description}</p>
                            <div className="pt-5 mt-auto border-t border-border flex items-center justify-between">
                                <span className="text-xs font-bold text-primary uppercase font-sans tracking-wider">Budget: {model.budget}</span>
                                <span className="material-symbols-outlined text-border group-hover:text-accent transition-colors text-sm">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
      </Container>
    </section>
  );
}
