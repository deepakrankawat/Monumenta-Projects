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
    image: PlaceHolderImages.find((p) => p.id === "amer-stepwell-after"),
    description: "Structural strengthening and lime plaster restoration.",
    tags: ["Conservation", "ASI"],
  },
  {
    id: "project-mandawa-haveli",
    title: "Mandawa Haveli Fresco Revival",
    location: "Shekhawati, Rajasthan",
    category: "CSR Initiative",
    image: PlaceHolderImages.find((p) => p.id === "haveli-frescoes"),
    description: "Chemical cleaning and preservation of 19th-century frescoes.",
    tags: ["Art Restoration", "CSR"],
  },
  {
    id: "project-jaisalmer-cenotaphs",
    title: "Royal Cenotaphs Landscape",
    location: "Jaisalmer, Rajasthan",
    category: "Community",
    image: PlaceHolderImages.find((p) => p.id === "jaisalmer-cenotaph"),
    description: "Landscape development and visitor amenities integration.",
    tags: ["Landscape", "Community"],
  },
  {
    id: "project-city-palace",
    title: "City Palace Facade Works",
    location: "Udaipur, Rajasthan",
    category: "ASI Project",
    image: PlaceHolderImages.find((p) => p.id === "jali-window-detail"),
    description: "Stabilization of the southern wing facade using traditional techniques.",
    tags: ["Structural", "ASI"],
  },
  {
    id: "project-blue-city",
    title: "Blue City Urban Renewal",
    location: "Jodhpur, Rajasthan",
    category: "CSR Initiative",
    image: PlaceHolderImages.find((p) => p.id === "heritage-courtyard-restored"),
    description: "Adaptive reuse of heritage homes into community cultural centers.",
    tags: ["Adaptive Reuse", "CSR"],
  },
  {
    id: "project-taragarh-fort",
    title: "Taragarh Fort Documentation",
    location: "Bundi, Rajasthan",
    category: "ASI Project",
    image: PlaceHolderImages.find((p) => p.id === "temple-ruins-survey"),
    description: "3D laser scanning and H-BIM for conservation planning.",
    tags: ["Documentation", "ASI"],
  },
];

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
