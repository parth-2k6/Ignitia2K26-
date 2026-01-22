'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import RegistrationDialog from './registration-dialog';
import LoginDialog from './login-dialog';
import { Button } from './ui/button';
import IgnitiaLogo from './ignitia-logo';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/about-dev', label: 'About Dev' },
  ];
  return (
    <header className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b border-white/10'
          : 'bg-transparent'
      )} >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 relative">
        <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center gap-2">
            <IgnitiaLogo className="h-9 w-6" />
            </Link>
        </div>
        <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground gradient-underline whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
        </div>
        <div className="hidden items-center gap-4 lg:flex flex-1 justify-end">
           <LoginDialog triggerText="Login" variant="link" className="font-medium text-foreground hover:no-underline hover:text-primary" />
           <RegistrationDialog triggerText="Register" className="rounded-full" />
        </div>
        <div className="lg:hidden flex-1 flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-card text-foreground p-0 border-l border-border w-[85vw] max-w-sm h-full flex flex-col" >
              <div className="flex justify-end items-center p-4 border-b border-border">
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <div className="p-6 flex-grow">
                <nav className="flex flex-col gap-4 text-lg font-headline text-center">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn('p-4 rounded-md uppercase transition-colors hover:bg-primary/10 hover:text-primary', isActive ? 'bg-primary/10 text-primary': 'text-foreground' )} >
                          {link.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>
              <div className="p-6 border-t border-border">
                <div className="flex items-center justify-around">
                  <LoginDialog
                    triggerText="Login"
                    variant="link"
                    className="font-headline text-lg uppercase"
                  />
  <RegistrationDialog triggerText="Register" variant="ghost" className="font-headline text-lg uppercase" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export default Header;