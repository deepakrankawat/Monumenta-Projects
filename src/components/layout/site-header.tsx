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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const aboutLinks = [
  { href: "/about", title: "About Monumenta", description: "Our story, mission, and team." },
  { href: "/process", title: "Process & Methodology", description: "Our step-by-step methodology." },
];

const serviceLinks = [
    { href: "/services", title: "ASI & Government", description: "Collaboration with government bodies." },
    { href: "/csr", title: "CSR & Community", description: "Fulfilling your CSR goals with heritage." },
];

const projectsLinks = [
    { href: "/projects", title: "Projects & Case Studies", description: "Explore our portfolio of work." },
];

const resourcesLinks = [
    { href: "/insights", title: "Insights Home", description: "Articles, guides, and news." },
    { href: "/insights", title: "Blogs / Articles", description: "Thought leadership on conservation." },
    { href: "/insights", title: "Reports / Publications", description: "In-depth analysis and reports." },
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
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {aboutLinks.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                     <li className="md:col-span-2">
                        <ListItem title="ASI & Government Collaboration" href="/services">
                          A trusted execution partner for government bodies.
                        </ListItem>
                     </li>
                      <li className="md:col-span-2">
                        <ListItem title="CSR & Corporate Partnerships" href="/csr">
                          Create lasting social and cultural impact.
                        </ListItem>
                     </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[400px]">
                    <ListItem title="Our Services" href="/services">
                        Explore our comprehensive conservation and advisory services.
                    </ListItem>
                    {projectsLinks.map((link) => (
                         <ListItem key={link.title} title={link.title} href={link.href}>
                            {link.description}
                        </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/projects">Projects</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>

               <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {resourcesLinks.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/contact">Contact</Link>
                  </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
             <Button asChild className="hidden lg:inline-flex text-sm font-semibold py-3 px-7 rounded-full transition-all transform hover:shadow-lg shadow-primary/20 border border-transparent">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            
            {/* Mobile Navigation Trigger */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden text-foreground hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background text-foreground w-[85vw] max-w-sm p-4">
                <SheetHeader className="border-b border-border pb-4 mb-4 text-left">
                  <SheetTitle className="text-accent font-display text-lg">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-8 flex flex-col gap-2 font-sans">
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="about">
                      <AccordionTrigger className="text-xl font-medium text-foreground hover:no-underline hover:text-accent">About</AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {[...aboutLinks, { href: "/services", title: "ASI & Government", description: "" }, { href: "/csr", title: "CSR & Partnerships", description: "" }].map(link => (
                           <Link key={link.href} href={link.href} onClick={() => setIsSheetOpen(false)} className="block py-2.5 text-lg text-muted-foreground hover:text-primary">{link.title}</Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="services">
                      <AccordionTrigger className="text-xl font-medium text-foreground hover:no-underline hover:text-accent">Services</AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {[{href: "/services", title: "Our Services"}, ...projectsLinks].map(link => (
                           <Link key={link.href} href={link.href} onClick={() => setIsSheetOpen(false)} className="block py-2.5 text-lg text-muted-foreground hover:text-primary">{link.title}</Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                   <Link href="/projects" onClick={() => setIsSheetOpen(false)} className="py-4 text-xl font-medium text-foreground transition-colors hover:text-accent">Projects</Link>

                  <Accordion type="multiple" className="w-full">
                     <AccordionItem value="resources">
                      <AccordionTrigger className="text-xl font-medium text-foreground hover:no-underline hover:text-accent">Resources</AccordionTrigger>
                      <AccordionContent className="pl-4">
                        {resourcesLinks.map(link => (
                           <Link key={link.title} href={link.href} onClick={() => setIsSheetOpen(false)} className="block py-2.5 text-lg text-muted-foreground hover:text-primary">{link.title}</Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                   <Link href="/contact" onClick={() => setIsSheetOpen(false)} className="py-4 text-xl font-medium text-foreground transition-colors hover:text-accent">Contact</Link>

                  <Button asChild className="mt-6 text-base font-semibold py-3 px-7 rounded-full">
                      <Link href="/contact" onClick={() => setIsSheetOpen(false)}>Get in Touch</Link>
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


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href || ''}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";