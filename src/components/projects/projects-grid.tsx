import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProjectCard } from "./project-card";
import { Filters } from "./filters";
import { Pagination } from "./pagination";
import { Container } from "../container";

const projects = [];

export function ProjectsGrid() {
  return (
    <main className="flex-1 w-full py-12">
      <Container>
        <Filters />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Pagination />
      </Container>
    </main>
  );
}
