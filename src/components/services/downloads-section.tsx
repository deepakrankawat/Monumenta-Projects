import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const downloads = [
  {
    icon: "apartment",
    title: "Company Profile",
    description: "Detailed overview of our firm, team, and capabilities.",
    href: "#"
  },
  {
    icon: "verified_user",
    title: "Empanelment Details",
    description: "Official empanelment documents with various government bodies.",
     href: "#"
  },
  {
    icon: "summarize",
    title: "Past Project Summaries",
    description: "Concise reports on successfully completed government projects.",
     href: "#"
  },
];

export function DownloadsSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Downloads & Resources
          </h2>
          <p className="text-lg text-muted-foreground">
            Access key documents to assist in your evaluation and decision-making process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {downloads.map(item => (
            <div key={item.title} className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-card transition-all duration-300 flex flex-col">
              <div className="flex-shrink-0 size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 border-2 border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold font-display text-foreground group-hover:text-primary transition-colors flex-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-6">{item.description}</p>
              <div className="mt-auto">
                <Button asChild variant="link" className="p-0 font-sans font-bold text-sm text-primary">
                  <Link href={item.href}>Download PDF <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">download</span></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
