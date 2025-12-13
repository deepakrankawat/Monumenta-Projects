import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Monumenta Projects | Heritage Conservation & ASI Expertise',
  description: 'A specialised heritage infrastructure firm working on ASI and CSR-funded conservation projects across India, focusing on preserving India’s heritage for future generations.',
  openGraph: {
    title: 'Monumenta Projects | Heritage Conservation & ASI Expertise',
    description: 'Specialised in ASI and CSR-funded heritage conservation projects across India.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;600&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("min-h-screen bg-background font-body antialiased")}>
        <div className="relative flex min-h-dvh flex-col">
          {/* <SiteHeader /> */}
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
