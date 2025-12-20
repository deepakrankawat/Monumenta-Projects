import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Toaster } from "@/components/ui/toaster"
import { Playfair_Display, Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "Monumenta Projects - Preserving India's Heritage",
  description: 'Expert conservation strategies for ASI monuments and CSR-led restoration initiatives across Rajasthan and beyond.',
  openGraph: {
    title: "Monumenta Projects - Preserving India's Heritage",
    description: 'Expert conservation strategies for ASI monuments and CSR-led restoration initiatives across Rajasthan and beyond.',
    type: 'website',
  }
};

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(playfairDisplay.variable, poppins.variable, 'scroll-smooth')}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className={cn("min-h-screen bg-background font-body text-foreground antialiased selection:bg-primary selection:text-white")}>
        <div className="relative flex min-h-dvh flex-col">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
