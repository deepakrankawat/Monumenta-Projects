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

const testimonials = [
  {
    quote: "Monumenta's work is a benchmark in heritage conservation. Their attention to detail and respect for original craftsmanship is unparalleled.",
    name: "Dr. Arun Sharma",
    title: "Director, National Heritage Board",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-1'),
  },
  {
    quote: "Collaborating with Monumenta was a masterclass in professional execution. They seamlessly blend modern engineering with traditional wisdom.",
    name: "Priya Singh",
    title: "Principal Architect, Heritage Designs",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-2'),
  },
  {
    quote: "They didn't just restore a monument; they revived our community's heart. We are grateful for their sensitive and inclusive approach.",
    name: "Ratan Kumar",
    title: "Community Leader, Jodhpur",
    avatar: PlaceHolderImages.find(p => p.id === 'avatar-3'),
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
                Endorsements
            </h2>
            <p className="mt-4 text-muted-foreground">What our partners and stakeholders say about us.</p>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  );
}
