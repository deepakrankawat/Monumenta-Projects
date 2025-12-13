import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Container } from "../container";

export function CsrSection() {
  return (
    <section className="py-16 md:py-24">
      <Container className="text-center bg-card p-8 md:p-16 rounded-lg shadow-sm">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            Partner with us for Corporate Social Responsibility
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Help preserve India's cultural assets while fulfilling your CSR obligations. Monumenta Projects provides a credible, impactful, and transparent platform for corporates to invest in our shared heritage.
          </p>
          <Button asChild size="lg" className="mt-8 font-ui font-semibold">
            <Link href="/csr">
              Explore CSR Partnerships
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
