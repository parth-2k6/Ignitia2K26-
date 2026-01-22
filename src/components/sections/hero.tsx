import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_40%_40%_at_50%_20%,rgba(255,255,255,0.1),transparent)]" />
      <div className="relative z-10 flex flex-col items-center text-center p-4">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[200%] max-w-4xl h-32 bg-gradient-to-r from-yellow-300/50 via-pink-500/50 to-red-500/50 blur-3xl opacity-30" />
          <div className="relative">
            <h1 className="absolute inset-0 font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent blur-lg opacity-70">IGNITIA 2K26  </h1>
            <h1 className="relative font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"> IGNITIA 2K26 </h1>
          </div>
          <p className="mt-6 max-w-2xl text-md md:text-lg text-slate-300 font-body"> From cultural chaos to technical brilliance experience the college fest that defines innovation, creativity and celebration</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
             <Link href="/about">
                <Button variant="outline" size="lg" className="border-2 border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 w-48 rounded-full">Know More</Button>
             </Link>
             <Link href="/events">
                <Button variant="default" size="lg" className="w-48 rounded-full">View Events</Button>
             </Link>
          </div>
      </div>
    </section>
  );
};
export default Hero;