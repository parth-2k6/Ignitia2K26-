import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Button } from './ui/button';
const FloatingLinkedinButton = () => {
  return (
    <Link href="https://www.linkedin.com/in/itsparth-tiwari/"  target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
      <Button variant="ghost" size="icon" className="bg-card hover:bg-card/80 text-foreground h-14 w-14 rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300">
        <Linkedin className="h-7 w-7" />
        <span className="sr-only">LinkedIn</span>
      </Button>
    </Link>
  );
};
export default FloatingLinkedinButton;