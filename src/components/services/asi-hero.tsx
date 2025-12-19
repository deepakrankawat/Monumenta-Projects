// This file is no longer used and can be removed. I am leaving it for now to avoid breaking imports, but it should be deleted in a future cleanup.
import Image from "next/image";
import { Container } from "../container";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AsiHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "scholar-in-library");

  return (
    <Container className="py-8 pt-28">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/70 to-primary/90"></div>
        <div className="flex flex-col gap-4 max-w-[800px] z-10">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-accent/20 text-accent border border-accent/40 text-xs font-bold font-sans uppercase tracking-widest mb-4 backdrop-blur-md self-center">
                <span className="material-symbols-outlined text-sm">account_balance</span>
                ASI & Government Collaboration
            </div>
          <h1 className="text-white text-4xl font-extrabold leading-tight tracking-[-0.033em] md:text-6xl font-display">
            Partnering to Preserve National Treasures
          </h1>
          <h2 className="text-primary-foreground text-base font-normal leading-relaxed md:text-xl max-w-3xl mx-auto">
            A trusted execution partner for the Archaeological Survey of India, State Archaeology Departments, and other government bodies.
          </h2>
        </div>
      </div>
    </Container>
  );
}
