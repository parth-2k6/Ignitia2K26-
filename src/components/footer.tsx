import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import IgnitiaLogo from './ignitia-logo';
const Footer = () => {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <IgnitiaLogo className="h-8 w-5" />
            <span className="font-body text-xl font-bold">Ignitia 2k26</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Made with ❤️ By Parth Tiwari
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="https://github.com/parth-2k6" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/itsparth-tiwari/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;