import Image from "next/image";
import { Container } from "@/components/container";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const locations = [
    {
        name: "Jaipur",
        role: "Headquarters",
        position: "top-[40%] left-[35%]"
    },
    {
        name: "Udaipur",
        role: "Active Site",
        position: "top-[45%] left-[42%]"
    },
    {
        name: "Jodhpur",
        role: "Active Site",
        position: "top-[50%] left-[30%]"
    }
]

export function LocationsSection() {
    const mapImage = PlaceHolderImages.find(p => p.id === 'rajasthan-map');

    return (
        <section className="py-24 bg-background relative">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-8">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold font-sans uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Active Sites
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                            Deeply Rooted in Rajasthan, <br />
                            Expanding Across India
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                            While our heart beats in the arid landscapes of Rajasthan—restoring Havelis in Shekhawati and Forts in Mewar—our expertise is now revitalizing monuments in Madhya Pradesh and Gujarat.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4 font-sans">
                            {locations.map(loc => (
                                <Card key={loc.name} className="px-6 py-4 rounded-xl bg-card border-border shadow-sm flex items-center gap-3">
                                    <span className="material-symbols-outlined text-accent">location_on</span>
                                    <div>
                                        <span className="block text-primary font-bold">{loc.name}</span>
                                        <span className="text-xs text-muted-foreground font-bold uppercase">{loc.role}</span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center relative">
                        <TooltipProvider>
                            <div className="relative w-full aspect-square max-w-[500px] bg-background/30 rounded-full flex items-center justify-center p-8 border border-border">
                                <div className="absolute inset-4 border border-dashed border-accent/40 rounded-full opacity-50 animate-spin-slow"></div>
                                <div className="absolute inset-16 border border-primary/10 rounded-full"></div>
                                {mapImage && (
                                    <Image
                                        alt={mapImage.description}
                                        data-ai-hint={mapImage.imageHint}
                                        src={mapImage.imageUrl}
                                        width={375}
                                        height={375}
                                        className="object-contain opacity-80 sepia contrast-125"
                                        style={{filter: "sepia(1) hue-rotate(-20deg) saturate(2)"}}
                                    />
                                )}
                                <Tooltip>
                                    <TooltipTrigger className="absolute top-[40%] left-[35%] group cursor-pointer">
                                        <span className="absolute inline-flex h-6 w-6 rounded-full bg-primary opacity-30 animate-ping"></span>
                                        <span className="relative inline-flex items-center justify-center rounded-full h-4 w-4 bg-primary border-2 border-white text-white"></span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Jaipur (HQ)</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger className="absolute top-[45%] left-[42%] group cursor-pointer">
                                        <span className="absolute inline-flex h-4 w-4 rounded-full bg-accent opacity-50 animate-ping animation-delay-500"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent border-2 border-white"></span>
                                    </TooltipTrigger>
                                     <TooltipContent>
                                        <p>Udaipur</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger className="absolute top-[50%] left-[30%] group cursor-pointer">
                                        <span className="absolute inline-flex h-4 w-4 rounded-full bg-accent opacity-50 animate-ping animation-delay-1000"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent border-2 border-white"></span>
                                    </TooltipTrigger>
                                     <TooltipContent>
                                        <p>Jodhpur</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    </div>
                </div>
            </Container>
        </section>
    );
}