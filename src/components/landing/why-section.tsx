import { Award, Feather, FileCheck2, Users } from "lucide-react";
import { Container } from "../container";

const differentiators = [
  {
    icon: Award,
    title: "ASI & Government Expertise",
    description: "Proven experience with ASI standards and navigating complex government procedures for seamless project execution.",
  },
  {
    icon: Feather,
    title: "Traditional Craftsmanship",
    description: "We prioritise the use of traditional materials and methods, like lime mortar and indigenous techniques, to ensure authenticity.",
  },
  {
    icon: FileCheck2,
    title: "Strong Technical Compliance",
    description: "Our meticulous approach to documentation and statutory compliance guarantees transparency and accountability.",
  },
  {
    icon: Users,
    title: "Community-Centric Approach",
    description: "We are deeply sensitive to local communities, ensuring our work respects and integrates with local culture and context.",
  },
];

export function WhySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                Why Monumenta?
            </h2>
            <p className="mt-4 text-muted-foreground">Our unique approach sets us apart in the field of heritage conservation.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                  <item.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
