import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import { Container } from "../container";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative h-[80vh] min-h-[400px] md:h-[calc(100vh-4rem)] flex items-center justify-center text-center text-primary-foreground">
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
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative z-10 flex flex-col items-center">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-md max-w-4xl">
          Preserving India’s Heritage. Building Tomorrow’s Legacy.
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl font-light text-primary-foreground/90 drop-shadow-sm">
          A specialised heritage infrastructure firm working on ASI and CSR-funded conservation projects across India.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button asChild size="lg" className="font-ui font-semibold">
            <Link href="/projects">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-ui bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link href="/contact">Discuss a Project</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
