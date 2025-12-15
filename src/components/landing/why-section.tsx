import { Container } from "../container";

const stats = [
  {
    value: "15+",
    label: "Years Experience"
  },
  {
    value: "50+",
    label: "Monuments Restored"
  },
  {
    value: "100%",
    label: "CSR Compliant"
  },
  {
    value: "08",
    label: "State Awards"
  }
];

export function WhySection() {
  return (
    <section className="py-24 bg-background border-y border-border">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-border">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-medium text-primary mb-3 font-display">{stat.value}</div>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] font-sans">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
