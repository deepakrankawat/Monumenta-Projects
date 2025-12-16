import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";
import { Button } from "../ui/button";

const projects = [
  {
    id: "project-1",
    title: "Shekhawati Haveli Project",
    location: "Mandawa, Rajasthan",
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
    tags: ["CSR Funded", "Ongoing"],
    span: "lg:col-span-2",
    description: "ASI-protected stepwell, structural conservation & site development"
  },
  {
    id: "project-2",
    title: "Amber Watchtower",
    location: "Jaipur, Rajasthan",
    image: PlaceHolderImages.find(p => p.id === 'project-2'),
    tags: ["Completed"],
    span: "",
    description: "Restoration of a historic watchtower overlooking Amber Palace."
  },
  {
    id: "project-3",
    title: "Bundi Stepwell",
    location: "Bundi, Rajasthan",
    image: PlaceHolderImages.find(p => p.id === 'hero-background'),
    tags: ["ASI Partnership"],
    span: "",
    description: "Meticulous cleaning and structural repair of a 16th-century stepwell."
  },
  {
    id: "project-4",
    title: "Jal Mahal Conservation",
    location: "Jaipur, Rajasthan",
    image: PlaceHolderImages.find(p => p.id === 'project-3'),
    tags: ["Award Winning"],
    span: "lg:col-span-2",
    description: "Facade restoration and structural analysis of the iconic water palace."
  },
];

export function ProjectsSection() {
  return (
    <section className="py-28 bg-background">
      <Container>
        <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs mb-3">Featured Projects</h2>
            <h3 className="text-4xl md:text-5xl font-medium text-foreground font-display">
                Restoring Greatness
            </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[450px]">
            {projects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className={`group relative rounded-sm overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${project.span}`}>
                  {project.image && (
                      <Image
                      src={project.image.imageUrl}
                      alt={project.description}
                      data-ai-hint={project.image.imageHint}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-foreground/40 to-transparent opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-3 font-sans">
                      {project.tags.map(tag => (
                        <span key={tag} className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm ${tag === 'CSR Funded' || tag === 'Award Winning' ? 'bg-accent text-foreground' : 'bg-white/20 text-white backdrop-blur-md border border-white/20'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className={`font-medium text-white mb-2 font-display ${project.span ? 'text-3xl' : 'text-2xl'}`}>{project.title}</h4>
                    <p className="text-secondary-light text-base flex items-center gap-2 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="material-symbols-outlined text-lg">location_on</span> {project.location}
                    </p>
                    <p className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">{project.description}</p>
                  </div>
                </Link>
            ))}
        </div>
        <div className="mt-16 text-center font-sans">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white text-sm font-bold py-3 px-8 rounded-full transition-all tracking-wide">
                <Link href="/projects">
                    View Project Archives
                </Link>
            </Button>
        </div>
      </Container>
    </section>
  );
}
