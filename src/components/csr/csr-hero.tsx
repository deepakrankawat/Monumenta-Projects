import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

export function CsrHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "indian-fort-wide");

  return (
    <section className="w-full flex justify-center py-6 px-4 md:px-10 pt-28">
      <Container>
        <div className="w-full rounded-2xl overflow-hidden relative min-h-[70vh] md:min-h-[600px] flex flex-col justify-center items-center text-center p-8 bg-cover bg-center shadow-xl border border-border">
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
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/70 to-foreground/90"></div>
          <div className="max-w-[900px] flex flex-col gap-6 items-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-md border border-accent/40 shadow-sm">
              <span className="material-symbols-outlined text-accent text-sm">temple_hindu</span>
              <span className="text-accent text-xs font-bold uppercase tracking-widest font-ui">Heritage Conservation</span>
            </div>
            <h1 className="text-primary-foreground text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight tracking-[-0.01em] drop-shadow-lg">
              Build a Legacy: <span className="italic text-accent">CSR</span> in Heritage Conservation
            </h1>
            <p className="text-primary-foreground/90 font-body text-base sm:text-lg md:text-xl max-w-[700px] leading-relaxed drop-shadow-md">
              Partner with us to bridge your corporate sustainability goals with India's rich architectural history. Create tangible impact that lasts centuries.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-4 md:mt-8">
              <Button asChild size="lg" className="h-12 md:h-14 px-8 md:px-10 rounded-full font-bold text-sm md:text-base hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
                <Link href="/contact">Schedule CSR Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 md:h-14 px-8 md:px-10 rounded-full font-bold text-sm md:text-base bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-foreground hover:-translate-y-0.5">
                <Link href="#">Download Brochure</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
