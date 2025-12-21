import { Button } from "@/components/ui/button";

export function Filters() {
  return (
    <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sticky top-24 z-30 bg-background/95 py-4 backdrop-blur-sm -mx-4 px-4 sm:static sm:bg-transparent sm:p-0 sm:backdrop-blur-none border-b sm:border-none border-border/50">
      <div className="flex flex-wrap gap-3">
        <Button size="sm" className="h-10 px-6 rounded-full shadow-lg shadow-primary/20 hover:-translate-y-0.5">
            All Projects
        </Button>
        <Button size="sm" variant="outline" className="h-10 px-6 rounded-full hover:bg-primary/5">
            ASI Projects
        </Button>
        <Button size="sm" variant="outline" className="h-10 px-6 rounded-full hover:bg-primary/5">
            CSR Initiatives
        </Button>
        <Button size="sm" variant="outline" className="h-10 px-6 rounded-full hover:bg-primary/5">
            Community and Others
        </Button>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="material-symbols-outlined text-[20px] text-accent">sort</span>
        <span className="font-medium font-sans">Sort by: Newest First</span>
      </div>
    </div>
  );
}
