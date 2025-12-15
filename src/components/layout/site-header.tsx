"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/csr", label: "CSR" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-background/95 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
              <span className="material-symbols-outlined text-2xl">temple_hindu</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground font-display">
              Monumenta<span className="text-accent">.</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-10 font-sans">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex font-sans">
            <Button asChild className="text-sm font-semibold py-3 px-7 rounded-full transition-all transform hover:shadow-lg shadow-primary/20 border border-transparent">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-foreground hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-foreground">
              <SheetHeader>
                <SheetTitle className="text-accent font-display">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4 font-sans">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
                 <Button asChild className="mt-4 text-sm font-semibold py-3 px-7 rounded-full">
                    <Link href="/contact">Get in Touch</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
