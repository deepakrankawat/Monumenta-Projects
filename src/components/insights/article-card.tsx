import Image from "next/image";
import Link from "next/link";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Button } from "../ui/button";

type Article = {
  id: string;
  title: string;
  category: string;
  image?: ImagePlaceholder;
  excerpt: string;
  date: string;
  author: string;
};

export function ArticleCard({ article }: { article: Article }) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-border/50">
      <Link href={`/insights/${article.id}`} className="relative block aspect-[16/10] overflow-hidden">
        <div className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 backdrop-blur-md shadow-sm border border-primary/10 text-primary">
          <span className="text-[10px] font-bold uppercase tracking-wider font-sans">
            {article.category}
          </span>
        </div>
        {article.image && (
          <Image
            src={article.image.imageUrl}
            alt={article.image.description}
            data-ai-hint={article.image.imageHint}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans mb-2">
            By {article.author} &bull; {formattedDate}
        </p>
        <h3 className="mb-3 text-lg font-bold leading-tight text-primary group-hover:text-accent transition-colors font-display">
          <Link href={`/insights/${article.id}`}>{article.title}</Link>
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-3 leading-relaxed font-body flex-1">
          {article.excerpt}
        </p>
        <div className="mt-4">
             <Button asChild variant="link" className="p-0 font-sans font-bold text-sm text-primary">
                <Link href={`/insights/${article.id}`}>Read More <span className="material-symbols-outlined text-sm ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span></Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
