import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "../container";

export function FinalCta() {
  return (
    <section className="w-full py-24 px-4 md:px-10 flex justify-center bg-card border-t border-border/30">
      <Container className="max-w-[800px] flex flex-col items-center text-center gap-8">
        <h2 className="text-primary text-4xl md:text-6xl font-display font-bold tracking-tight">Ready to make history?</h2>
        <p className="text-muted-foreground font-body text-xl max-w-[600px] leading-relaxed">
          Let's discuss how your organization can contribute to preserving India's heritage while meeting your CSR goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center mt-4">
          <Button asChild size="lg" className="h-14 px-10 rounded-full text-base font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 w-full sm:w-auto">
            <Link href="/contact">Schedule a CSR Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-10 rounded-full text-base font-bold hover:bg-primary hover:text-white w-full sm:w-auto">
            <Link href="/projects">View More Projects</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
