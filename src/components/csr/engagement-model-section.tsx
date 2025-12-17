const steps = [
    {
        icon: "share_location",
        title: "Identify",
        description: "We scout monuments that align with your geography and brand values."
    },
    {
        icon: "description",
        title: "Propose & Comply",
        description: "We create detailed DPRs and handle all ASI/State Archaeology permissions."
    },
    {
        icon: "construction",
        title: "Execute",
        description: "Scientific conservation led by specialized architects and master craftsmen."
    },
    {
        icon: "query_stats",
        title: "Document",
        description: "Quarterly impact reports, financial utilization certs, and PR content."
    }
]

export function EngagementModelSection() {
  return (
    <section className="w-full bg-card py-24 px-4 md:px-10 border-y border-border/50">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-5">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs font-sans">Our Engagement Model</span>
          <h2 className="text-foreground text-4xl md:text-5xl font-display font-bold">How Monumenta Helps Corporates</h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl">We handle the complexity of heritage laws, technical execution, and reporting, making it seamless for your organization.</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 mt-4">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-primary/20 border-t border-dashed border-primary/40 -z-10"></div>
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-6 group">
                <div className="size-16 rounded-full bg-background border-2 border-border shadow-md flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-accent group-hover:bg-white transition-all duration-300">
                    <span className="material-symbols-outlined text-primary text-3xl">{step.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-display font-bold text-primary">{index+1}. {step.title}</h3>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
