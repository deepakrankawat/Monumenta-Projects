import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";
import { MapPin } from "lucide-react";

const projects = [
  {
    id: "project-1",
    title: "Mehrangarh Fort Restoration",
    location: "Jodhpur, Rajasthan",
    description: "ASI-protected fort, structural conservation & site development.",
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
  },
  {
    id: "project-2",
    title: "Agrasen ki Baoli Revival",
    location: "New Delhi",
    description: "Structural retrofitting and water body revival for an ancient stepwell.",
    image: PlaceHolderImages.find(p => p.id === 'hero-background'),
  },
  {
    id: "project-3",
    title: "Qutub Shahi Tombs Complex",
    location: "Hyderabad, Telangana",
    description: "Conservation and landscape restoration of a historic tomb complex.",
    image: PlaceHolderImages.find(p => p.id === 'project-3'),
  },
  {
    id: "project-4",
    title: "Patwon Ki Haveli Conservation",
    location: "Jaisalmer, Rajasthan",
    description: "Architectural conservation of five historic havelis.",
    image: PlaceHolderImages.find(p => p.id === 'project-2'),
  },
];

export function ProjectsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                Selected Conservation Projects
            </h2>
            <p className="mt-4 text-muted-foreground">Glimpses into our commitment to bringing heritage back to life.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Link href={`/projects/${project.id}`} className="group block">
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
                      </div>
                      <CardHeader>
                        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground pt-1">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{project.location}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-14" />
          <CarouselNext className="mr-14"/>
        </Carousel>
      </Container>
    </section>
  );
}
