import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProjectCard } from "./project-card";
import { Filters } from "./filters";
import { Pagination } from "./pagination";
import { Container } from "../container";

const projects = [
  {
    id: "project-amer-stepwell",
    title: "Amer Fort Stepwell Restoration",
    location: "Jaipur, Rajasthan",
    category: "ASI Project",
    image: PlaceHolderImages.find((p) => p.id === "project-amer-stepwell"),
    description: "Comprehensive structural strengthening and lime plaster restoration of the historic stepwell complex.",
    tags: ["Conservation", "Documentation"],
  },
  {
    id: "project-mandawa-haveli",
    title: "Mandawa Haveli Fresco Revival",
    location: "Shekhawati, Rajasthan",
    category: "CSR Initiative",
    image: PlaceHolderImages.find((p) => p.id === "project-mandawa-haveli"),
    description: "Detailed chemical cleaning and preservation of 19th-century frescoes funded by corporate partners.",
    tags: ["Art Restoration", "CSR"],
  },
  {
    id: "project-jaisalmer-cenotaphs",
    title: "Royal Cenotaphs Landscape",
    location: "Jaisalmer, Rajasthan",
    category: "Community",
    image: PlaceHolderImages.find((p) => p.id === "project-jaisalmer-cenotaphs"),
    description: "Landscape development and visitor amenities integration for the royal cenotaph complex.",
    tags: ["Landscape", "Community"],
  },
  {
    id: "project-city-palace",
    title: "City Palace Facade Works",
    location: "Udaipur, Rajasthan",
    category: "ASI Project",
    image: PlaceHolderImages.find((p) => p.id === "project-city-palace"),
    description: "Structural stabilization of the southern wing facade using traditional lime mortar techniques.",
    tags: ["Structural", "ASI"],
  },
  {
    id: "project-blue-city",
    title: "Blue City Urban Renewal",
    location: "Jodhpur, Rajasthan",
    category: "CSR Initiative",
    image: PlaceHolderImages.find((p) => p.id === "project-blue-city"),
    description: "Adaptive reuse of three heritage homes into community cultural centers.",
    tags: ["Adaptive Reuse", "Urban"],
  },
  {
    id: "project-taragarh-fort",
    title: "Taragarh Fort Mapping",
    location: "Bundi, Rajasthan",
    category: "CSR Initiative",
    image: PlaceHolderImages.find((p) => p.id === "project-taragarh-fort"),
    description: "Comprehensive 3D laser scanning and documentation for future conservation planning.",
    tags: ["Survey", "Digital"],
  },
];

export function ProjectsGrid() {
  return (
    <main className="flex-1 w-full">
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
