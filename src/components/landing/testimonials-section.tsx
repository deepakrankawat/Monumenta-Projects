import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";
import { Button } from "../ui/button";

const testimonials = [
  {
    quote: "Monumenta's approach to the Jaisalmer conservation was nothing short of extraordinary. Their technical expertise matched their passion for history.",
    name: "Dr. A. Sharma",
    title: "Director, Rajasthan Tourism Board",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-1'),
  },
  {
    quote: "We entrusted our CSR funds for the Baori restoration to Monumenta, and the transparency and impact were exemplary.",
    name: "Priya Mehta",
    title: "CSR Head, Tata Steel",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-2'),
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
          <div>
            <h2 className="text-accent font-sans font-bold tracking-[0.2em] uppercase text-xs mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-foreground font-display">Trusted by Partners</h3>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0 font-sans">
            <Button variant="outline" size="icon" className="size-12 rounded-full border-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Button>
            <Button size="icon" className="size-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">arrow_forward</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 md:p-10 rounded-lg bg-card border border-border/50 shadow-sm relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-6xl text-primary">format_quote</span>
              </div>
              <div className="flex text-accent mb-6">
                {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-xl">star</span>)}
              </div>
              <p className="text-lg md:text-xl text-muted-foreground italic mb-8 leading-relaxed font-body">"{testimonial.quote}"</p>
              <div className="flex items-center gap-5 border-t border-border pt-6">
                {testimonial.avatar && (
                  <Avatar className="size-14 ring-2 ring-white shadow-md">
                      <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <div className="font-bold text-foreground font-sans">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground font-sans">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
