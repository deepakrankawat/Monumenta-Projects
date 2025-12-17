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
import { Container } from "../container";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/csr", label: "CSR" },
  { href: "/process", label: "Process" },
  { href: "/insights", label: "Insights" },
];

export function SiteHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-background/95 border-b border-border shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-10 md:size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary border border-primary/20">
              <span className="material-symbols-outlined text-2xl">temple_hindu</span>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground font-display">
              Monumenta<span className="text-accent">.</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-sans">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:inline-flex text-sm font-semibold py-3 px-7 rounded-full transition-all transform hover:shadow-lg shadow-primary/20 border border-transparent">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            
            {/* Mobile Navigation Trigger */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden text-foreground hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background text-foreground w-[80vw] max-w-sm">
                <SheetHeader className="border-b border-border pb-4 mb-4">
                  <SheetTitle className="text-accent font-display text-left text-lg">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-6 font-sans">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-xl font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-6 text-base font-semibold py-3 px-7 rounded-full">
                      <Link href="/contact">Get in Touch</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </Container>
    </header>
  );
}
