import { Button } from "@/components/ui/button";

export function Pagination() {
    return (
        <div className="mt-16 flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" className="size-10 rounded-full" disabled>
                <span className="material-symbols-outlined">chevron_left</span>
            </Button>
            <Button size="icon" className="size-10 rounded-full font-bold">1</Button>
            <Button variant="outline" size="icon" className="size-10 rounded-full font-bold">2</Button>
            <Button variant="outline" size="icon" className="size-10 rounded-full font-bold">3</Button>
            <span className="px-2 text-muted-foreground">...</span>
            <Button variant="outline" size="icon" className="size-10 rounded-full font-bold">8</Button>
            <Button variant="outline" size="icon" className="size-10 rounded-full">
                <span className="material-symbols-outlined">chevron_right</span>
            </Button>
        </div>
    )
}
