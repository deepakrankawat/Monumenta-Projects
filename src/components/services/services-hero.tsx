import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

export function ServicesHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "services-hero");

  return (
    <section className="relative w-full pt-40 pb-16 bg-background">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl shadow-border/40 border border-border/50 min-h-[450px] flex items-center">
          {heroImage && (
            <div className="absolute inset-0">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent"></div>
            </div>
          )}
          <div className="relative z-10 p-8 md:p-12 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-4 py-1.5 w-fit backdrop-blur-md shadow-sm">
              <span className="material-symbols-outlined text-primary text-sm">construction</span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider font-sans">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-primary drop-shadow-sm font-display">
              End-to-End Heritage Solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl font-medium leading-relaxed font-body">
              From initial surveys and documentation to full-scale restoration and community engagement, we provide a comprehensive suite of services for all heritage conservation needs.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
