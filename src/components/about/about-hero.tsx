import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

export function AboutHero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === "about-hero");

  return (
    <header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80 z-10"></div>
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover animate-scale"
          />
        )}
      </div>
      <Container className="relative z-20 text-center max-w-5xl mt-10">
        <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-accent/20 text-accent border border-accent/40 text-xs font-bold font-sans uppercase tracking-widest mb-8 backdrop-blur-md">
          <span className="material-symbols-outlined text-sm">verified</span>
          ASI &amp; CSR Partner
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-medium text-primary-foreground leading-[1.05] mb-8 tracking-tight drop-shadow-2xl">
          Preserving India's Soul, <br />
          <span className="italic font-light">Stone by Stone</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed font-body">
          Specializing in heritage conservation projects across India, with a
          deep focus on Rajasthan's architectural legacy and community
          integrity.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center font-sans">
          <Button
            asChild
            size="lg"
            className="h-14 px-10 rounded-full font-bold text-base hover:bg-secondary hover:text-secondary-foreground transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] flex items-center justify-center gap-2 group"
          >
            <Link href="/projects">
              View Our Projects
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-10 rounded-full bg-white/10 text-white border-white/30 font-bold text-base hover:bg-background hover:text-foreground backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <Link href="#">
              <span className="material-symbols-outlined text-sm">download</span>
              Download CSR Deck
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
