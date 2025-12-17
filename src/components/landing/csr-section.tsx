import Link from "next/link";
import { Container } from "../container";
import { Button } from "../ui/button";

export function CsrSection() {
  return (
    <section className="py-20 bg-card border-y border-border overflow-hidden">
      <Container className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h2 className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs mb-3">
                For Corporate Partners
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium text-foreground font-display">
                Fulfill Your CSR Goals Through Heritage Preservation
            </h3>
            <p className="text-muted-foreground leading-relaxed font-body text-base md:text-lg">
                Partner with Monumenta to create a lasting social and cultural impact. We offer transparent, compliant, and high-impact heritage conservation projects perfect for your company's Corporate Social Responsibility portfolio. Help preserve India's legacy while strengthening your brand's commitment to community and culture.
            </p>
            <div className="pt-4">
                <Button asChild>
                    <Link href="/csr">
                        Explore CSR Partnerships <span className="transition-transform group-hover:translate-x-1 ml-2">→</span>
                    </Link>
                </Button>
            </div>
        </div>
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 opacity-70 grayscale-[50%] text-foreground p-8 rounded-lg bg-background border border-border">
          <div className="flex items-center gap-3" title="Archaeological Survey of India">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">account_balance</span>
            <span className="font-bold text-lg md:text-xl font-display">ASI India</span>
          </div>
          <div className="flex items-center gap-3" title="Rajasthan Tourism">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">travel_explore</span>
            <span className="font-bold text-lg md:text-xl font-display">Rajasthan Tourism</span>
          </div>
          <div className="flex items-center gap-3" title="Major Indian Conglomerate">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">corporate_fare</span>
            <span className="font-bold text-lg md:text-xl font-display">Corporate Foundations</span>
          </div>
           <div className="flex items-center gap-3" title="Global Heritage Funds">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">museum</span>
            <span className="font-bold text-lg md:text-xl font-display">Heritage Trusts</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
