import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "../container";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold max-w-2xl">
          Ready to preserve history together?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl">
          Whether it’s a CSR-funded project or a full-scale conservation, our team is ready to help you build a legacy.
        </p>
        <Button asChild size="lg" className="mt-8 font-ui font-semibold bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">Make a Contribution</Link>
        </Button>
      </Container>
    </section>
  );
}
