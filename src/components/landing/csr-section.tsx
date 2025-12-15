import { Container } from "../container";

const partners = [
  {
    icon: "account_balance",
    name: "ASI India",
  },
  {
    icon: "museum",
    name: "Heritage Trust",
  },
  {
    icon: "travel_explore",
    name: "Tourism Dept.",
  },
  {
    icon: "corporate_fare",
    name: "Corp. Foundation",
  },
];

export function CsrSection() {
  return (
    <section className="py-20 bg-background border-t border-border overflow-hidden">
      <Container>
        <p className="text-center text-xs font-bold text-muted-foreground/60 uppercase tracking-[0.2em] mb-12 font-sans">Our Esteemed Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 text-foreground">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-3 hover:text-primary transition-colors cursor-default">
              <span className="material-symbols-outlined text-5xl">{partner.icon}</span>
              <span className="font-bold text-2xl font-display">{partner.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
