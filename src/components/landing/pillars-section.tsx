import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Handshake, Building, FileText, Brush, Square, ChevronRight } from "lucide-react";
import { Container } from "../container";
import Link from "next/link";
import { Button } from "../ui/button";

const pillars = [
  {
    icon: Brush,
    title: "Structural Conservation",
    description: "Full-scale structural retrofitting & restoration to bring back structures to their original state of glory.",
  },
  {
    icon: Square,
    title: "Art Conservation",
    description: "Restoration of murals, paintings, and other forms of art to restore them to their former glory.",
  },
  {
    icon: Building,
    title: "Heritage Tourism",
    description: "Developing our monuments to be centers of community, discovery, and learning.",
  },
  {
    icon: FileText,
    title: "CSR Advisory",
    description: "Helping corporations fulfill their CSR obligations and build a legacy by restoring our past.",
  },
];

export function PillarsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16">
          <div className="max-w-xl text-left">
              <h3 className="text-sm font-ui uppercase tracking-widest text-muted-foreground">Our Expertise</h3>
              <h2 className="mt-4 font-headline text-3xl md:text-4xl font-bold text-foreground">
                  Comprehensive Conservation
              </h2>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0 bg-transparent">
            <Link href="/services">
              View All Services <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="text-left flex flex-col bg-card">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full mb-4 w-fit">
                    <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
