'use client'

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// This is a placeholder for your actual data fetching logic
const getProjectData = (id: string) => {
  const allProjects = [
      {
        id: "project-amer-stepwell",
        title: "Amer Fort Stepwell Restoration",
        location: "Jaipur, Rajasthan",
        category: "ASI Project",
        client: "ASI, Jaipur Circle",
        scope: [
            "Structural strengthening of stepwell walls",
            "Lime plaster restoration (Araish)",
            "Site development and landscaping",
            "Visitor accessibility improvements"
        ],
        timeframe: "2021-2023",
        challenges: "Working within a high-traffic tourist zone, sourcing authentic lime mortar, and ensuring structural stability during restoration.",
        solutions: "Phased work schedule, establishing a local lime kiln, and continuous 3D monitoring of the structure.",
        techniques: ["Lime Mortar (Chuna Surkhi)", "Araish Plaster", "Stone Masonry"],
        beforeImage: PlaceHolderImages.find((p) => p.id === "amer-stepwell-before"),
        afterImage: PlaceHolderImages.find((p) => p.id === "amer-stepwell-after"),
        impact: "The project has successfully stabilized the structure, revived traditional crafts, and enhanced the visitor experience at this key heritage site.",
      },
      {
        id: "project-mandawa-haveli",
        title: "Shekhawati Haveli Project",
        location: "Mandawa, Rajasthan",
        category: "CSR Funded",
        client: "Mandawa Heritage Foundation",
        scope: [
          "Facade restoration",
          "Fresco and mural conservation",
          "Adaptive reuse planning for a boutique hotel"
        ],
        timeframe: "Ongoing",
        challenges: "Dealing with extensive water damage and finding artisans skilled in traditional Shekhawati painting styles.",
        solutions: "Advanced damp-proofing measures and collaboration with the last remaining fresco artist families in the region.",
        techniques: ["Fresco Secco", "Lime Plaster", "Natural Pigments"],
        beforeImage: PlaceHolderImages.find(p => p.id === 'shekhawati-haveli-before'),
        afterImage: PlaceHolderImages.find(p => p.id === 'shekhawati-haveli-after'),
        impact: "The project is set to revive a significant cultural landmark, creating local employment and promoting heritage tourism.",
      }
  ];
  
  const project = allProjects.find(p => p.id === id);

  if (project) return project;
  
  // Placeholder for other projects
  if (id === 'project-1' || id === 'project-2' || id === 'project-3' || id === 'project-4' || id === 'project-jaisalmer-cenotaphs' || id === 'project-city-palace' || id === 'project-blue-city' || id === 'project-taragarh-fort' ) {
      const p = allProjects.find(p => p.id === 'project-amer-stepwell');
      if (p) return {...p, id: id};
  }

  return undefined;
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background pt-24">
      <Container>
        {/* Header */}
        <div className="py-12 text-center border-b border-border">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-bold font-sans uppercase tracking-wider mb-4">
              {project.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-accent">location_on</span>
            {project.location}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 py-12">
          {/* Left Column (Details) */}
          <div className="lg:col-span-1 space-y-8 sticky top-28 self-start">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-display text-primary text-xl font-bold mb-4">Project Details</h3>
              <ul className="space-y-3 font-sans text-sm">
                <li className="flex justify-between items-center"><span className="text-muted-foreground">Client:</span> <strong className="text-foreground">{project.client}</strong></li>
                <li className="flex justify-between items-center"><span className="text-muted-foreground">Timeframe:</span> <strong className="text-foreground">{project.timeframe}</strong></li>
                <li className="flex justify-between items-center"><span className="text-muted-foreground">Category:</span> <strong className="text-foreground">{project.category}</strong></li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-display text-primary text-xl font-bold mb-4">Techniques Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techniques.map(tech => (
                   <span key={tech} className="rounded bg-secondary/20 px-2.5 py-1 text-[11px] font-bold text-secondary-foreground font-sans">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="lg:col-span-2 space-y-12">
            <div>
                <h2 className="font-display text-2xl text-accent font-bold mb-4">Scope of Work</h2>
                <ul className="space-y-3 text-muted-foreground list-disc pl-5 leading-relaxed">
                    {project.scope.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
             <div>
                <h2 className="font-display text-2xl text-accent font-bold mb-4">Challenges & Solutions</h2>
                <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
                 <p className="mt-4 text-muted-foreground leading-relaxed"><strong className="text-foreground">Solution: </strong>{project.solutions}</p>
            </div>

            {project.beforeImage && project.afterImage && (
                <div>
                    <h2 className="font-display text-2xl text-accent font-bold mb-4">Before & After</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Image src={project.beforeImage.imageUrl} alt="Before restoration" width={600} height={400} className="rounded-lg object-cover border-4 border-card"/>
                            <p className="text-center text-sm text-muted-foreground font-sans font-semibold">Before</p>
                        </div>
                        <div className="space-y-2">
                            <Image src={project.afterImage.imageUrl} alt="After restoration" width={600} height={400} className="rounded-lg object-cover border-4 border-card"/>
                             <p className="text-center text-sm text-muted-foreground font-sans font-semibold">After</p>
                        </div>
                    </div>
                </div>
            )}
            
             <div>
                <h2 className="font-display text-2xl text-accent font-bold mb-4">Impact</h2>
                <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
            </div>

            <div className="text-center pt-8 border-t border-border">
                <Button asChild>
                    <Link href="/projects">
                        <span className="material-symbols-outlined">arrow_back</span>
                        Back to All Projects
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
