import { Container } from "@/components/container";

export function ContactHeader() {
  return (
    <div className="bg-card py-16 border-b border-border">
      <Container className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary font-display">Get In Touch</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Whether you have a specific project in mind or wish to explore partnership opportunities, we&apos;re here to help you make a lasting impact.
        </p>
      </Container>
    </div>
  );
}
