import Link from "next/link";
import { Container } from "../container";

const benefits = [
    {
        icon: "account_balance",
        title: "Enduring Brand Legacy",
        description: "Associate your brand with permanent monuments that stand the test of time, offering distinct visibility and association for decades. Heritage is a community asset and a driver for tourism and cultural identity."
    },
    {
        icon: "verified",
        title: "Tax Benefits & Compliance",
        description: "Our projects are fully compliant with Schedule VII (item v) of the Companies Act 2013, fitting within education, culture, and community development mandates."
    },
    {
        icon: "diversity_3",
        title: "Community Livelihoods",
        description: "Restoration is labor-intensive. We create skilled jobs for local artisans, reviving dying crafts and boosting the local tourism economy."
    }
]

export function WhyHeritageSection() {
  return (
    <section className="w-full flex justify-center py-16 md:py-20 px-4 md:px-10 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50"></div>
        <Container className="w-full flex flex-col gap-12 md:gap-14">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border/30 pb-8">
                <div className="flex flex-col gap-4 max-w-[650px]">
                    <h2 className="text-primary text-3xl md:text-5xl font-display font-bold tracking-tight">Why Heritage as CSR?</h2>
                    <p className="text-muted-foreground font-body text-lg md:text-xl italic">Investing in conservation offers unique advantages beyond traditional CSR avenues, creating lasting assets and community pride.</p>
                </div>
                <Link href="/services" className="text-accent font-bold font-sans flex items-center gap-2 hover:gap-3 transition-all hover:text-primary uppercase tracking-wider text-sm mb-2 flex-shrink-0">
                    Explore all benefits <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map(benefit => (
                    <div key={benefit.title} className="group flex flex-col gap-5 rounded-lg border border-border bg-card p-8 hover:border-accent hover:shadow-xl hover:shadow-border/20 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        <div className="size-14 rounded-full bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-primary text-xl md:text-2xl font-display font-bold">{benefit.title}</h3>
                            <p className="text-muted-foreground font-body leading-relaxed text-base">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
  );
}
