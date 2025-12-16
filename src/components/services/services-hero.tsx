import Image from "next/image";
import { Container } from "../container";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ServicesHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "services-hero");

  return (
    <Container className="py-8">
      <div className="flex min-h-[450px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center relative overflow-hidden group shadow-xl">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/80 to-primary/90"></div>
        <div className="flex flex-col gap-4 max-w-[700px] z-10">
          <h1 className="text-white text-4xl font-extrabold leading-tight tracking-[-0.033em] md:text-6xl font-display">
            Expert Heritage Services
          </h1>
          <h2 className="text-primary-foreground text-base font-normal leading-relaxed md:text-xl max-w-2xl mx-auto">
            From ASI-compliant restoration to community-driven CSR initiatives, we offer specialized conservation services that honor the past while building for the future.
          </h2>
        </div>
      </div>
    </Container>
  );
}
