import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className="relative w-45 h-45">
        <Image 
          src="/images/logo.png" 
          alt="Monumenta Projects Logo" 
          fill
          className="object-contain"
          sizes="(max-width: 1000px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </Link>
  );
}
