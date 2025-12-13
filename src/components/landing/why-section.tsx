import { Container } from "../container";

const stats = [
  {
    value: "15+",
    label: "Years of Experience"
  },
  {
    value: "50+",
    label: "Projects Completed"
  },
  {
    value: "100%",
    label: "Compliance"
  },
  {
    value: "08",
    label: "States Covered"
  }
];

export function WhySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-headline text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm md:text-base text-muted-foreground font-ui">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
