import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

export function ProcessHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "architectural-blueprints");

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
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-transparent"></div>
          <div className="relative z-10 p-8 md:p-12 max-w-3xl text-primary-foreground">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/20 px-4 py-1.5 w-fit backdrop-blur-md shadow-sm">
              <span className="material-symbols-outlined text-accent text-sm">science</span>
              <span className="text-xs font-bold text-accent uppercase tracking-wider font-sans">
                Our Methodology
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white drop-shadow-lg font-display">
              Systematic Approach. <br />
              Authentic Results.
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-xl font-medium leading-relaxed font-body">
              Our process combines meticulous scientific analysis with a deep respect for traditional craftsmanship, ensuring every project is managed with precision, transparency, and integrity.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
