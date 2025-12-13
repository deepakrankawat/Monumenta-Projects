import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../container";

export function IntroSection() {
  return (
    <section className="py-16 md:py-24">
      <Container className="text-center flex flex-col items-center">
        <h3 className="text-sm font-ui uppercase tracking-widest text-muted-foreground">Who we are</h3>
        <h2 className="mt-4 font-headline text-3xl md:text-4xl font-bold text-foreground max-w-3xl">
          Breathing new life into India’s architectural history.
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          We are a team of conservation architects, structural engineers, and master craftsmen working on cultural heritage and architectural conservation projects. We work on privately-funded as well as CSR-funded projects. We work on restoring the fabric of our monuments for the future of our generations.
        </p>
        <Link href="/about" className="mt-8 font-ui font-semibold text-primary inline-flex items-center gap-2 group">
          Know more about us
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Container>
    </section>
  );
}
