import Link from "next/link";
import { Sprout, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Container } from "../container";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/csr", label: "CSR Partnerships" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Linkedin, label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-secondary">
      <Container as="div" className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl text-foreground">
                Monumenta
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Preserving India’s Heritage. Building Tomorrow’s Legacy.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-ui font-semibold text-foreground mb-4">Navigate</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-ui text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-ui font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm font-ui text-muted-foreground">
                <li><a href="mailto:info@monumenta.com" className="hover:text-primary transition-colors">info@monumenta.com</a></li>
                <li>New Delhi, India</li>
              </ul>
            </div>
            <div>
              <h3 className="font-ui font-semibold text-foreground mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link key={social.label} href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Monumenta Projects. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
