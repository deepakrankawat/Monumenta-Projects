import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "../container";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <Container className="text-center flex flex-col items-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold max-w-2xl">
          Have a heritage site that needs conservation?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">Let's work together to protect our invaluable history.</p>
        <Button asChild size="lg" variant="secondary" className="mt-8 font-ui font-semibold text-primary hover:bg-primary-foreground/90">
          <Link href="/contact">Send Us Project Details</Link>
        </Button>
      </Container>
    </section>
  );
}
