import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hawa-mahal-facade-alt');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
            quality={100}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <Container className="relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background/10 backdrop-blur-md border border-background/30 mb-8 animate-fade-in-up font-sans">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground">ISO 9001 Certified Conservation</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-medium text-primary-foreground leading-[1.1] mb-6 max-w-6xl drop-shadow-lg animate-fade-in-up font-display">
            Preserving India’s Heritage.<br/>
            <span className="text-gradient-gold italic">Building Tomorrow’s Legacy.</span>
        </h1>
        <p className="text-base md:text-xl text-primary-foreground/90 mb-12 max-w-3xl font-light leading-relaxed animate-fade-in-up delay-100 font-body">
            A specialised heritage infrastructure firm working on ASI and CSR-funded conservation projects across India.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto font-sans animate-fade-in-up delay-200">
          <Button asChild size="lg" className="text-base font-semibold py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20 flex items-center justify-center gap-2 min-w-[200px]">
            <Link href="/projects">
              <span>View Our Work</span>
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-white/10 backdrop-blur-sm border-primary-foreground/40 text-primary-foreground text-base font-semibold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2 min-w-[200px] hover:text-primary-foreground">
            <Link href="/contact">
              <span>Discuss a Project</span>
              <span className="material-symbols-outlined text-sm text-accent">arrow_forward</span>
            </Link>
          </Button>
        </div>
      </Container>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-primary-foreground/50">
        <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
      </div>
    </section>
  );
}
