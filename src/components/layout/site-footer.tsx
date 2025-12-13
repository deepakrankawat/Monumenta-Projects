import Link from "next/link";
import { Sprout, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Container } from "../container";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/csr", label: "CSR" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
    { href: "/services/conservation", label: "Structural Conservation" },
    { href: "/services/art-conservation", label: "Art Conservation" },
    { href: "/services/tourism", label: "Heritage Tourism" },
    { href: "/services/advisory", label: "CSR Advisory" },
];

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-primary text-primary-foreground">
      <Container as="div" className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col items-start col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sprout className="h-8 w-8 text-accent" />
              <span className="font-bold font-headline text-2xl">
                Monumenta
              </span>
            </Link>
            <p className="text-primary-foreground/80 text-sm max-w-xs">
              Preserving India’s Heritage. Building Tomorrow’s Legacy.
            </p>
            <div className="flex space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <Link key={social.label} href={social.href} aria-label={social.label} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
          </div>
          
          <div>
              <h3 className="font-ui font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-ui text-primary-foreground/80 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-ui font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-ui text-primary-foreground/80 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Monumenta Projects. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
