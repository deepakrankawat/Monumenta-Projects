import Image from "next/image";
import Link from "next/link";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  image?: ImagePlaceholder;
  description: string;
  tags: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-border/50 ring-1 ring-transparent hover:ring-border">
      <Link href={`/projects/${project.id}`} className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 backdrop-blur-md shadow-sm border border-primary/10 text-primary">
          <span className="text-[10px] font-bold uppercase tracking-wider font-sans">
            {project.category}
          </span>
        </div>
        {project.image && (
          <Image
            src={project.image.imageUrl}
            alt={project.image.description}
            data-ai-hint={project.image.imageHint}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
          <Button
            asChild
            className="scale-90 rounded-full bg-card px-5 py-2.5 text-sm font-bold text-primary shadow-lg transition-all duration-300 hover:bg-accent hover:text-accent-foreground group-hover:scale-100"
          >
            <span className="cursor-pointer">View Case Study</span>
          </Button>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-center gap-2 text-accent">
          <span className="material-symbols-outlined text-[18px]">
            location_on
          </span>
          <span className="text-xs font-bold uppercase tracking-wide font-sans">
            {project.location}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-bold leading-tight text-primary group-hover:text-accent transition-colors font-display">
          <Link href={`/projects/${project.id}`}>{project.title}</Link>
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed font-body">
          {project.description}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-4 border-t border-border font-sans">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-secondary/20 px-2 py-1 text-[10px] font-bold text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
