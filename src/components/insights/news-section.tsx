import Link from "next/link";
import { Container } from "../container";
import { Button } from "../ui/button";

const newsItems = [
  {
    id: "news-workshop-delhi",
    title: "Monumenta to Host Workshop on Lime Mortar in Delhi",
    category: "Workshop",
    date: "2024-08-10",
  },
  {
    id: "news-media-coverage",
    title: "Our Work on the Bundi Stepwell Featured in 'Architectural Digest'",
    category: "Media",
    date: "2024-07-25",
  },
  {
    id: "news-asi-talk",
    title: "Founder Sarah Mehta to Speak at ASI Annual Conference",
    category: "Talk",
    date: "2024-09-05",
  },
];

export function NewsSection() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            News and Events
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with our latest workshops, talks, and media features.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {newsItems.map(item => {
              const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                year: 'numeric', month: 'long', day: 'numeric'
              });
              return (
                <li key={item.id}>
                  <Link href={`/insights/${item.id}`} className="group block p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-card transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex-1">
                        <span className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 font-sans ${
                          item.category === 'Workshop' ? 'bg-secondary/20 text-secondary-foreground' : 
                          item.category === 'Media' ? 'bg-accent/20 text-accent-foreground' : 
                          'bg-primary/10 text-primary'
                        }`}>{item.category}</span>
                        <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-8 text-left">
                        <p className="text-sm text-muted-foreground font-sans mb-2 sm:text-right">{formattedDate}</p>
                        <span className="flex items-center gap-1 text-primary text-sm font-bold font-sans opacity-0 group-hover:opacity-100 transition-opacity">Read More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
