import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import FloatingLinkedinButton from '@/components/floating-linkedin-button';
export const metadata: Metadata = {
  title: 'Ignitia 2k26',
  description: 'From cultural chaos to technical brilliance experience the college fest that defines innovation, creativity and celebration',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body bg-background text-foreground antialiased min-h-screen")}>
        {children}
        <Toaster />
        <FloatingLinkedinButton />
      </body>
    </html>
  );
}