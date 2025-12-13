import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Container } from "../container";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Monumenta’s approach to heritage conservation is truly remarkable. Their meticulous attention to detail and respect for traditional craftsmanship sets a new standard for conservation in the country.",
    name: "Dr. A.K. Sharma",
    title: "Director General, National Archives",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-1'),
  },
  {
    quote: "We chose Monumenta for our CSR-funded project to restore the Jodhpur Stepwell. Their professional execution, and respect for community sentiments was exemplary.",
    name: "Priya Mathur",
    title: "Head of CSR, Bajaj Corp",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-2'),
  },
  {
    quote: "Collaborating with Monumenta was a masterclass in professional execution. They seamlessly blend modern engineering with traditional wisdom.",
    name: "Ratan Kumar",
    title: "Community Leader, Jodhpur",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-3'),
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
            <h3 className="text-sm font-ui uppercase tracking-widest text-muted-foreground">Testimonials</h3>
            <h2 className="mt-4 font-headline text-3xl md:text-4xl font-bold text-foreground">
                Trusted by Partners
            </h2>
        </div>
        <Carousel
          opts={{ align: "start", loop: true, }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <Card>
                    <CardContent className="p-8 flex flex-col items-center text-center">
                      <div className="flex gap-1 text-yellow-500 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                      </div>
                      <blockquote className="max-w-2xl text-lg font-medium text-foreground">
                        “{testimonial.quote}”
                      </blockquote>
                      <div className="mt-8 flex items-center gap-4">
                        {testimonial.avatar && (
                            <Avatar>
                                <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        )}
                        <div>
                            <p className="font-semibold text-foreground font-ui">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground font-ui">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-50px]" />
          <CarouselNext className="right-[-50px]" />
        </Carousel>
      </Container>
    </section>
  );
}
