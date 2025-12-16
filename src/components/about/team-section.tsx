import Image from "next/image";
import { Container } from "@/components/container";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

const team = [
  {
    id: "team-1",
    name: "Sarah Mehta",
    title: "Principal Architect",
    description: "Over 15 years restoring Mughal-era structures with ASI.",
  },
  {
    id: "team-2",
    name: "Vikram Singh",
    title: "Director of Operations",
    description: "Expert in CSR fund management and community liaison.",
  },
  {
    id: "team-3",
    name: "Ananya Rao",
    title: "Head of Research",
    description: "Specializing in archival research and historical accuracy.",
  },
  {
    id: "team-4",
    name: "Rahul Desai",
    title: "Structural Engineer",
    description: "Ensuring structural integrity in seismic zones.",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-classic-gradient">
      <Container>
        <div className="text-center mb-16">
          <span className="text-accent font-sans font-bold tracking-wider uppercase text-sm mb-2 block">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
            Meet the Custodians
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member) => {
            const image = PlaceHolderImages.find((p) => p.id === member.id);
            return (
              <Card
                key={member.name}
                className="flex flex-col items-center text-center group p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border-border/20"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-background group-hover:border-accent transition-all duration-300 relative">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      data-ai-hint={image.imageHint}
                      fill
                      className="w-full h-full object-cover sepia-[.25]"
                    />
                  )}
                </div>
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-secondary font-sans text-xs font-bold uppercase tracking-wide mb-3">
                  {member.title}
                </p>
                <p className="text-muted-foreground text-sm px-2">
                  {member.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
