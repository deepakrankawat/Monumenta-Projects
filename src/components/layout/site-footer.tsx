import Link from "next/link";
import { Container } from "../container";

const navLinks = [
  { href: "/projects", label: "Our Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/insights", label: "Insights" },
];

const serviceLinks = [
    { href: "/services", label: "Structural Conservation" },
    { href: "/services", label: "Art Restoration" },
    { href: "/csr", label: "Heritage Tourism" },
    { href: "/csr", label: "CSR Consulting" },
];

const socialLinks = [
  { href: "#", icon: "public", label: "Website" },
  { href: "#", icon: "mail", label: "Email" },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground pt-24 pb-12 font-sans">
      <Container as="div">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/5 pb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="size-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <span className="material-symbols-outlined text-xl">temple_hindu</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary-foreground font-display">Monumenta.</span>
            </Link>
            <p className="text-secondary/70 text-sm leading-relaxed mb-8 font-body">
              Specializing in the conservation of India's built heritage through scientific analysis and traditional craftsmanship.
            </p>
            <div className="flex gap-5">
                {socialLinks.map((social) => (
                  <Link key={social.label} href={social.href} aria-label={social.label} className="text-secondary/70 hover:text-accent transition-colors">
                    <span className="material-symbols-outlined text-xl">{social.icon}</span>
                  </Link>
                ))}
            </div>
          </div>
          
          <div>
              <h4 className="text-lg font-bold mb-8 text-primary-foreground font-display">Quick Links</h4>
              <ul className="space-y-4 text-sm text-secondary/70">
                {navLinks.map((link, index) => (
                  <li key={`${link.href}-${index}`}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
            
          <div>
              <h4 className="text-lg font-bold mb-8 text-primary-foreground font-display">Services</h4>
              <ul className="space-y-4 text-sm text-secondary/70">
                {serviceLinks.map((link, index) => (
                  <li key={`${link.href}-${index}`}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-primary-foreground font-display">Contact</h4>
            <ul className="space-y-5 text-sm text-secondary/70">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-accent mt-0.5">location_on</span>
                <span>123 Heritage Lane, C-Scheme,<br/>Jaipur, Rajasthan 302001</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-accent">call</span>
                <span>+91 141 123 4567</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-accent">email</span>
                <span>projects@monumenta.in</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-secondary/40">© {new Date().getFullYear()} Monumenta Projects. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-secondary/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
