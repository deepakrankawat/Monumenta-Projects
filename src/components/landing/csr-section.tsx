import { Award, Feather, FileCheck2, Users } from "lucide-react";
import { Container } from "../container";

const partners = [
  {
    icon: Award,
    name: "ASI India",
  },
  {
    icon: Feather,
    name: "Heritage Trust",
  },
  {
    icon: FileCheck2,
    name: "Tourism Dept.",
  },
  {
    icon: Users,
    name: "Corp. Foundation",
  },
];

export function CsrSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <Container className="text-center">
        <h3 className="text-sm font-ui uppercase tracking-widest text-muted-foreground">Our Partners</h3>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center items-center gap-3 text-muted-foreground font-ui">
              <partner.icon className="h-6 w-6" />
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
