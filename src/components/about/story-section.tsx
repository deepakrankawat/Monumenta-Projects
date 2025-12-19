import Image from "next/image";
import { Container } from "@/components/container";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const timeline = [
  {
    icon: "history_edu",
    title: "Inception & Passion",
    description: "Founded by architects who saw history crumbling, Monumenta began as a small collective documenting forgotten Havelis in Jaipur.",
    style: "primary"
  },
  {
    icon: "account_balance",
    title: "First ASI Project",
    description: "Our meticulous documentation led to our first government commission: restoring a 16th-century stepwell compliant with ASI standards.",
    style: "accent"
  },
  {
    icon: "handshake",
    title: "CSR Partnerships",
    description: "Expanded operations to manage large-scale CSR funds, bringing corporate efficiency to artisanal restoration across Rajasthan.",
    style: "accent"
  }
];

export function StorySection() {
  const storyImage = PlaceHolderImages.find(p => p.id === 'artisan-carving-stone');

  return (
    <section className="py-24 relative bg-background">
      <Container className="max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative pl-4 md:pl-0">
            <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-border"></div>
            <div className="flex flex-col gap-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8 relative group">
                  <div className={`relative z-10 shrink-0 size-14 rounded-full flex items-center justify-center text-primary-foreground shadow-xl shadow-primary/20 border-4 border-background group-hover:scale-110 transition-all ${item.style === 'primary' ? 'bg-primary group-hover:bg-destructive' : 'bg-card border-2 border-accent text-primary group-hover:bg-primary'}`}>
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 h-[450px] md:h-[550px] rounded-t-full rounded-b-lg overflow-hidden relative group border-8 border-white shadow-2xl shadow-border/50">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                data-ai-hint={storyImage.imageHint}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-10 opacity-90">
              <p className="text-primary-foreground font-display text-2xl italic leading-relaxed">
                &quot;Every stone has a memory. We are just the listeners.&quot;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
