import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";
import { Button } from "../ui/button";

const projects = [
  {
    id: "project-1",
    title: "Shekhavati Haveli Project",
    category: "Conservation",
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
  },
  {
    id: "project-2",
    title: "Amer Viceregal Palace",
    category: "Restoration",
    image: PlaceHolderImages.find(p => p.id === 'project-2'),
  },
  {
    id: "project-3",
    title: "Amer Stepwell",
    category: "Revival",
    image: PlaceHolderImages.find(p => p.id === 'hero-background'),
  },
  {
    id: "project-4",
    title: "Jal Mahal Conservation",
    category: "Conservation",
    image: PlaceHolderImages.find(p => p.id === 'project-3'),
  },
];

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
            <h3 className="text-sm font-ui uppercase tracking-widest text-muted-foreground">Featured Projects</h3>
            <h2 className="mt-4 font-headline text-3xl md:text-4xl font-bold text-foreground">
                Restoring Greatness
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="group block">
                <Card className="overflow-hidden h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                    {project.image && (
                        <Image
                        src={project.image.imageUrl}
                        alt={project.image.description}
                        data-ai-hint={project.image.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                     <div className="absolute bottom-0 left-0 p-6">
                        <p className="font-ui text-xs uppercase tracking-wider text-primary-foreground/80">{project.category}</p>
                        <h3 className="font-headline text-2xl font-bold text-primary-foreground">{project.title}</h3>
                     </div>
                    </div>
                </Card>
                </Link>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild variant="outline" className="bg-transparent">
                <Link href="/projects">
                    View All Projects
                </Link>
            </Button>
        </div>
      </Container>
    </section>
  );
}
