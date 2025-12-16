import Link from "next/link";
import { Button } from "../ui/button";
import { Container } from "../container";

export function CtaSection() {
    return (
        <div className="w-full bg-background py-12">
            <Container>
                <div className="bg-card rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-border">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-white/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
                        <div className="flex flex-col gap-4 max-w-[500px]">
                            <h2 className="text-primary text-3xl font-bold leading-tight font-display">Ready to restore history?</h2>
                            <p className="text-muted-foreground text-base font-normal">
                                Whether you are a government body, a corporate entity, or a private owner, Monumenta Projects is your partner in heritage conservation across Rajasthan and India.
                            </p>
                            <div className="flex gap-6 mt-2">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-primary text-sm font-medium">Rajasthan Experts</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-primary text-sm font-medium">ASI Compliant</span>
                                </div>
                            </div>
                        </div>
                        <Button asChild className="h-12 px-8 text-base font-bold hover:scale-105 transition-all shadow-lg min-w-[160px]">
                            <Link href="/contact">Start a Project</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
