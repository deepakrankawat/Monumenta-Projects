import Link from "next/link";
import { Container } from "../container";
import { Logo } from "./logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const mainLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Our Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
    { href: "/services", label: "ASI and Government" },
    { href: "/csr", label: "CSR and Community" },
    { href: "/process", label: "Our Process" },
];

const resourceLinks = [
    { href: "/csr", label: "CSR Partnerships" },
    { href: "/process", label: "Our Process" },
    { href: "#", label: "Download Profile" },
]

const socialLinks = [
    { href: "#", iconName: "LinkedIn", label: "LinkedIn" },
    { href: "#", iconName: "Twitter", label: "X (Twitter)" },
    { href: "#", iconName: "Instagram", label: "Instagram" },
];

function SocialIcon({ iconName }: { iconName: string }) {
    const svgPath = {
        LinkedIn: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z",
        Twitter: "M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4-1.4-2.8-1.4c-1.4 0-2.8 1.4-2.8 1.4s-1.4-2.8-4.2-2.8c-2.8 0-4.2 2.8-4.2 2.8s-1.4-1.4-2.8-1.4c-1.4 0-2.8 1.4-2.8 1.4s1.4-3.5 2.8-4.2c-1.4-.7-2.1-2.1-2.1-2.1s2.1.7 4.2.7c2.1 0 4.2-2.1 4.2-2.1s.7 1.4 2.1 2.1c1.4.7 2.8-1.4 2.8-1.4z",
        Instagram: "M9 12c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2zm0-2a12 12 0 1 0 12 12A12 12 0 0 0 12 0z"
    }[iconName];

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            {iconName === "LinkedIn" && <><path d={svgPath}></path><circle cx="4" cy="4" r="2"></circle></>}
            {iconName === "Twitter" && <path d={svgPath}></path>}
            {iconName === "Instagram" && <><path d={svgPath}></path><path d="M18.5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></>}
        </svg>
    )
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground pt-16 md:pt-24 pb-8 md:pb-12 font-sans">
      <Container as="div">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 md:mb-20 border-b border-white/5 pb-12 md:pb-16 px-4">
          <div className="md:col-span-4 lg:col-span-4">
            <Logo className="mb-6 -ml-8"/>
            <p className="text-secondary/70 text-sm leading-relaxed mb-8 font-body max-w-xs">
              Specializing in the conservation of India's built heritage through scientific analysis and traditional craftsmanship.
            </p>
             <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label} className="text-secondary/70 hover:text-accent transition-colors">
                    <SocialIcon iconName={social.iconName} />
                  </a>
                ))}
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-2">
              <h4 className="text-base md:text-lg font-bold mb-6 md:mb-8 text-primary-foreground font-display">About</h4>
              <ul className="space-y-4 text-sm text-secondary/70">
                {mainLinks.slice(0, 2).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
            
          <div className="md:col-span-2 lg:col-span-2">
              <h4 className="text-base md:text-lg font-bold mb-6 md:mb-8 text-primary-foreground font-display">Services</h4>
              <ul className="space-y-4 text-sm text-secondary/70">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-base md:text-lg font-bold mb-6 md:mb-8 text-primary-foreground font-display">Stay Updated</h4>
             <p className="text-secondary/70 text-sm leading-relaxed mb-4 font-body max-w-xs">
              Subscribe to our newsletter for the latest on our projects and insights into heritage conservation.
            </p>
            <form className="flex gap-2">
                <Input type="email" placeholder="Your email address" className="bg-foreground/10 border-white/20 text-white placeholder:text-secondary/50 focus-visible:ring-accent" />
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </form>
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
