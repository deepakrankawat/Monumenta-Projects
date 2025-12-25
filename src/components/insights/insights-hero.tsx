import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

export function InsightsHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "scholar-in-library");

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
              <span className="material-symbols-outlined text-primary text-sm">menu_book</span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider font-sans">
                Thought Leadership
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-primary drop-shadow-sm font-display">
              Resources &amp; Insights
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl font-medium leading-relaxed font-body">
              Explore our articles and case stories on heritage conservation, traditional techniques, and the impact of CSR in preserving India’s legacy.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
