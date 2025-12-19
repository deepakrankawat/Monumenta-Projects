import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArticleCard } from "./article-card";
import { Container } from "../container";

const articles = [
  {
    id: "importance-of-heritage",
    title: "Why Heritage Conservation Matters More Than Ever",
    category: "Conservation",
    image: PlaceHolderImages.find((p) => p.id === "restored-heritage-facade"),
    excerpt: "In a rapidly modernizing world, our built heritage is a vital link to our past and a source of identity. We explore the cultural, social, and economic importance of preserving these architectural treasures.",
    date: "2024-07-15",
    author: "Dr. Ananya Rao",
  },
  {
    id: "rajasthan-case-study",
    title: "Case Story: Reviving a Forgotten Stepwell in Bundi",
    category: "Case Study",
    image: PlaceHolderImages.find((p) => p.id === "bundi-stepwell-restored"),
    excerpt: "A deep dive into our work on a 16th-century stepwell in Rajasthan, detailing the challenges of structural decay and the traditional techniques used to restore it.",
    date: "2024-06-28",
    author: "Sarah Mehta",
  },
  {
    id: "csr-impact",
    title: "The Powerful Synergy of CSR and Heritage",
    category: "CSR",
    image: PlaceHolderImages.find((p) => p.id === "corporate-meeting-discussion"),
    excerpt: "Corporate Social Responsibility is not just about planting trees. Investing in heritage creates a lasting legacy that strengthens brand identity and empowers local communities.",
    date: "2024-06-10",
    author: "Vikram Singh",
  },
  {
    id: "lime-mortar-magic",
    title: "The Magic of Lime Mortar: A Return to Tradition",
    category: "Techniques",
    image: PlaceHolderImages.find((p) => p.id === "lime-mortar-application"),
    excerpt: "Unlike modern cement, traditional lime mortar 'breathes,' making it essential for the long-term health of historic structures. We explore the science behind this ancient material.",
    date: "2024-05-22",
    author: "Rahul Desai",
  },
  {
    id: "jali-work",
    title: "Jali: The Art of Perforated Stone Screens",
    category: "Techniques",
    image: PlaceHolderImages.find((p) => p.id === "jali-window-detail"),
    excerpt: "Discover the history and craftsmanship behind Jali work, the intricately carved stone screens that are a hallmark of Rajasthani architecture, and our approach to their restoration.",
     date: "2024-05-05",
    author: "Dr. Ananya Rao",
  },
  {
    id: "adaptive-reuse",
    title: "Giving New Life to Old Buildings: The Art of Adaptive Reuse",
    category: "Conservation",
    image: PlaceHolderImages.find((p) => p.id === "heritage-courtyard-restored"),
    excerpt: "How can we make heritage buildings relevant for today? Adaptive reuse is the key, turning dilapidated havelis and forts into vibrant community centers and hotels.",
    date: "2024-04-18",
    author: "Sarah Mehta",
  },
];

export function InsightsGrid() {
  return (
    <main className="flex-1 w-full py-12">
      <Container>
        <div className="mb-10 flex flex-wrap gap-3">
            <button className="h-10 px-6 rounded-full text-sm font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:-translate-y-0.5">All Posts</button>
            <button className="h-10 px-6 rounded-full text-sm font-medium border border-input bg-background hover:bg-primary/5 hover:text-primary">Conservation</button>
            <button className="h-10 px-6 rounded-full text-sm font-medium border border-input bg-background hover:bg-primary/5 hover:text-primary">CSR</button>
            <button className="h-10 px-6 rounded-full text-sm font-medium border border-input bg-background hover:bg-primary/5 hover:text-primary">Techniques</button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </main>
  );
}
