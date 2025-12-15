import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "../container";

export function ContactSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-sandstone-texture opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90"></div>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      <Container className="relative text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-medium text-primary-foreground mb-8 font-display">Ready to preserve history together?</h2>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto font-light">Whether it's a structural audit or a full-scale restoration, our team is ready to help you build a legacy.</p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-foreground text-lg font-bold py-5 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-black/20 font-sans">
          <Link href="/contact">Start a Conversation</Link>
        </Button>
      </Container>
    </section>
  );
}
