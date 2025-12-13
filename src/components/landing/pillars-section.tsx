import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Handshake, Building, FileText } from "lucide-react";
import { Container } from "../container";

const pillars = [
  {
    icon: Landmark,
    title: "ASI Heritage Conservation",
    points: [
      "Structural retrofitting & restoration",
      "Site development & landscaping",
      "Compliance with ASI guidelines",
    ],
  },
  {
    icon: Handshake,
    title: "CSR-Funded Heritage Projects",
    points: [
      "End-to-end project management",
      "Community engagement programs",
      "Transparent reporting & documentation",
    ],
  },
  {
    icon: Building,
    title: "Heritage-Sensitive Infrastructure",
    points: [
      "Modern amenities with traditional aesthetics",
      "Visitor centers & interpretation zones",
      "Accessibility & universal design integration",
    ],
  },
  {
    icon: FileText,
    title: "Technical Documentation & Advisory",
    points: [
      "Detailed Project Reports (DPRs)",
      "Conservation management plans",
      "Condition assessment & surveys",
    ],
  },
];

export function PillarsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                Our Core Expertise
            </h2>
            <p className="mt-4 text-muted-foreground">Four key pillars that define our work in preserving national heritage.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="text-center flex flex-col">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
