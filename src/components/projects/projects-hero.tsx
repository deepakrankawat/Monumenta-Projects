import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

export function ProjectsHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "projects-hero");

  return (
    <section className="relative w-full pt-28 pb-8">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl shadow-border/40 border border-border/50">
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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent"></div>
          <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-12 lg:py-24 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-4 py-1.5 w-fit backdrop-blur-md shadow-sm">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider font-sans">
                Project Portfolio
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-primary drop-shadow-sm font-display">
              Restoring Heritage,
              <br />
              <span className="text-accent">Reviving History.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl font-medium leading-relaxed font-body">
              Explore our extensive portfolio of heritage conservation projects
              across Rajasthan and India, featuring collaborations with ASI and
              leading CSR initiatives.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
