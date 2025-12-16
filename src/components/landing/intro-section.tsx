import Link from "next/link";
import { Container } from "../container";

export function IntroSection() {
  return (
    <section className="py-28 bg-background relative">
      <Container className="max-w-4xl mx-auto text-center">
        <h2 className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs mb-4">Who We Are</h2>
        <h3 className="text-4xl md:text-5xl font-medium mb-8 text-primary leading-tight font-display">
            Breathing new life into <br className="hidden md:block"/>India's architectural history.
        </h3>
        <p className="text-xl text-muted-foreground leading-loose font-body">
            We are a heritage conservation firm dedicated to blending traditional craftsmanship with modern engineering. Specializing in ASI and CSR-funded projects, we work meticulously to honor the past while securing the future of our monuments.
        </p>
        <div className="mt-12">
            <Link href="/about" className="font-sans font-semibold text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors">
                Know more about us <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
        </div>
      </Container>
    </section>
  );
}
