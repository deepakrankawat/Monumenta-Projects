
"use client";

import Link from "next/link";
import { Menu, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/csr", label: "CSR" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex h-20 max-w-7xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sprout className="h-6 w-6 text-white" />
          <span className="font-bold font-headline text-lg text-white">
            Monumenta
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav className="hidden md:flex md:gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-white font-ui"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="outline" size="sm" className="ml-4 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </nav>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/10 hover:text-white"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-primary-foreground">
              <SheetHeader>
                <SheetTitle className="font-headline text-accent">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="text-lg font-medium text-primary-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild variant="outline" className="mt-4 bg-transparent border-accent text-accent hover:bg-accent hover:text-primary">
                    <Link href="/donate">Donate Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
