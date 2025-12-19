import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";

export function FeaturedCaseStudy() {
  const caseStudyImage = PlaceHolderImages.find((p) => p.id === "indian-stepwell-symmetric");

  return (
    <section className="w-full py-16 px-4 md:px-10 bg-background">
      <Container>
        <div className="bg-foreground rounded-2xl overflow-hidden border border-border relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center gap-8 z-10 text-background">
              <div className="inline-flex items-center gap-3 text-accent font-bold text-xs uppercase tracking-[0.15em] font-ui">
                <span className="w-8 h-[1px] bg-accent"></span>
                Featured Case Study
              </div>
              <h2 className="text-primary-foreground text-3xl md:text-5xl font-display font-bold leading-tight">Revitalizing the Amber Stepwell</h2>
              <p className="text-primary-foreground/80 font-body text-lg leading-relaxed">
                An 18th-century stepwell in Jaipur, abandoned for decades, was restored to its former glory. The project not only conserved the structure but recharged the local groundwater table.
              </p>
              <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 mt-2">
                <div>
                  <div className="text-3xl font-display font-bold text-white">120+</div>
                  <div className="text-xs text-accent uppercase font-bold mt-2 font-ui">Artisans Employed</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white">14 M</div>
                  <div className="text-xs text-accent uppercase font-bold mt-2 font-ui">Project Duration</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-white">3 Cr</div>
                  <div className="text-xs text-accent uppercase font-bold mt-2 font-ui">Fund Utilization</div>
                </div>
              </div>
              <div className="pt-4">
                <Button asChild variant="link" className="text-white hover:text-accent font-bold font-ui text-sm uppercase tracking-wider p-0">
                  <Link href="/projects/project-amer-stepwell">
                    Read full impact report <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative min-h-[400px] lg:min-h-auto">
              {caseStudyImage && (
                <Image
                  src={caseStudyImage.imageUrl}
                  alt={caseStudyImage.description}
                  data-ai-hint={caseStudyImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent lg:bg-gradient-to-r lg:from-foreground lg:to-transparent opacity-90"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
