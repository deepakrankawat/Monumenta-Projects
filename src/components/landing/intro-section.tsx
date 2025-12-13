import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../container";

export function IntroSection() {
  return (
    <section className="py-16 md:py-24">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          Who We Are
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Monumenta Projects is a leading name in heritage conservation, bringing together a team of architects, engineers, and artisans. We are dedicated to the meticulous restoration and preservation of India's architectural treasures through our collaboration with the Archaeological Survey of India (ASI) and corporate partners.
        </p>
        <Link href="/about" className="mt-8 font-ui font-semibold text-primary inline-flex items-center gap-2 group">
          Know more about us
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Container>
    </section>
  );
}
