import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";
import { Button } from "../ui/button";

const projects = [
  {
    id: "project-amer-stepwell",
    title: "Amer Fort Stepwell",
    location: "Jaipur, Rajasthan",
    image: PlaceHolderImages.find(p => p.id === 'amer-stepwell-after'),
    description: "ASI-protected stepwell, structural conservation and site development."
  },
  {
    id: "project-taragarh-fort",
    title: "Taragarh Fort",
    location: "Bundi, Rajasthan",
    image: PlaceHolderImages.find(p => p.id === 'temple-ruins-survey'),
    description: "3D laser scanning and H-BIM for conservation planning."
  },
  {
    id: "project-city-palace",
    title: "Udaipur City Palace",
    location: "Udaipur, Rajasthan",
    image: PlaceHolderImages.find(p => p.id === 'jali-window-detail'),
    description: "Facade stabilization using traditional stone masonry techniques."
  },
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs mb-3">
                Project Gallery
            </h2>
            <h3 className="text-3xl md:text-5xl font-medium text-foreground font-display">
                Our Work with ASI and Government
            </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                  {project.image && (
                      <Image
                      src={project.image.imageUrl}
                      alt={project.description || project.title}
                      data-ai-hint={project.image.imageHint}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-foreground/30 to-transparent opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h4 className="font-medium text-white mb-2 font-display text-2xl">{project.title}</h4>
                    <p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{project.description}</p>
                  </div>
                </Link>
            ))}
        </div>
        <div className="mt-16 text-center font-sans">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold py-3 px-8 rounded-full transition-all tracking-wide">
                <Link href="/projects">
                    View All Government Projects
                </Link>
            </Button>
        </div>
      </Container>
    </section>
  );
}
