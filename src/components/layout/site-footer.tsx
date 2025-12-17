import Link from "next/link";
import { Container } from "../container";

const navLinks = [
  { href: "/projects", label: "Our Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/insights", label: "Insights" },
];

const serviceLinks = [
    { href: "/services#asi-projects", label: "ASI & Government" },
    { href: "/services#csr-projects", label: "CSR & Community" },
    { href: "/services#advisory", label: "Advisory & Documentation" },
];

const resourceLinks = [
    { href: "/csr", label: "CSR Partnerships" },
    { href: "/process", label: "Our Process" },
    { href: "#", label: "Download Profile" },
]

const socialLinks = [
  { href: "#", icon: "public", label: "Website" },
  { href: "#", icon: "mail", label: "Email" },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground pt-16 md:pt-24 pb-8 md:pb-12 font-sans">
      <Container as="div">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12 md:mb-20 border-b border-white/5 pb-12 md:pb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="size-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                <span className="material-symbols-outlined text-xl">temple_hindu</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary-foreground font-display">Monumenta.</span>
            </Link>
            <p className="text-secondary/70 text-sm leading-relaxed mb-8 font-body max-w-xs">
              Specializing in the conservation of India's built heritage through scientific analysis and traditional craftsmanship.
            </p>
            <div className="flex gap-5">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} aria-label={social.label} className="text-secondary/70 hover:text-accent transition-colors">
                    <span className="material-symbols-outlined text-xl">{social.icon}</span>
                  </Link>
                ))}
            </div>
          </div>
          
          <div className="col-span-1">
              <h4 className="text-base md:text-lg font-bold mb-6 md:mb-8 text-primary-foreground font-display">Quick Links</h4>
              <ul className="space-y-4 text-sm text-secondary/70">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
            
          <div className="col-span-1">
              <h4 className="text-base md:text-lg font-bold mb-6 md:mb-8 text-primary-foreground font-display">Services</h4>
              <ul className="space-y-4 text-sm text-secondary/70">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-base md:text-lg font-bold mb-6 md:mb-8 text-primary-foreground font-display">Resources</h4>
             <ul className="space-y-4 text-sm text-secondary/70">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-sm text-secondary/40">© {new Date().getFullYear()} Monumenta Projects. All rights reserved.</p>
          <div className="flex gap-4 md:gap-8 text-sm text-secondary/40">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
