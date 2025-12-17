import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "../container";

export function CtaSection() {
    return (
        <div className="w-full bg-card py-20 border-t border-border">
            <Container>
                <div className="bg-primary rounded-2xl p-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-sandstone-texture opacity-10"></div>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10 text-center md:text-left">
                        <div className="flex flex-col gap-4 max-w-[600px]">
                            <h2 className="text-white text-3xl font-bold leading-tight font-display">Have a Project for Consideration?</h2>
                            <p className="text-primary-foreground/80 text-base font-normal">
                                We are actively seeking partnerships for heritage conservation projects across India. Contact us to discuss your requirements.
                            </p>
                        </div>
                        <Button asChild size="lg" className="h-14 px-10 text-base bg-accent hover:bg-accent/90 text-accent-foreground font-bold hover:scale-105 transition-all shadow-lg min-w-[200px] flex-shrink-0">
                            <Link href="/contact">Submit an Enquiry</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
