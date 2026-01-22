'use client';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
const TechIcon = ({ name, children }: { name: string; children: React.ReactNode }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="cursor-pointer transition-all duration-300 group-hover:grayscale hover:!grayscale-0 hover:scale-110">{children}</div>
      </TooltipTrigger>
      <TooltipContent><p>{name}</p></TooltipContent>
    </Tooltip>
  );
};
const TechStack = () => {
  return (
    <section id="tech-stack" className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.2),hsl(var(--accent)/0.15),hsl(258_84%_60%/0.1),transparent_70%)] opacity-70"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary"> Tech Stack Used </h2>
          <div className="relative mt-4 h-px w-full">
            <div className="absolute -top-8 left-1/2 h-32 w-2/3 -translate-x-1/2 bg-gradient-to-b from-red-600/10 via-purple-600/10 to-transparent blur-3xl"></div>
            <div className="absolute top-0 left-1/2 h-[2px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-red-600 to-purple-600"></div>
          </div>
        </div>
        <TooltipProvider>
          <div className="group flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <TechIcon name="Next.js">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="h-16 w-16 text-white">
                <path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
               </svg>
            </TechIcon>
            <TechIcon name="React">
              <svg className="h-16 w-16 animate-[spin_8s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                  <g stroke="#61DAFB" strokeWidth="1" fill="none">
                      <ellipse rx="11" ry="4.2"/>  <ellipse rx="11" ry="4.2" transform="rotate(60)"/> <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
              </svg>
            </TechIcon>
            <TechIcon name="Tailwind CSS">
               <Image src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.96ee6a5a.svg" alt="Tailwind CSS logo" width={64} height={64} className="h-16 w-16" />
            </TechIcon>
            <TechIcon name="TypeScript">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="h-16 w-16 rounded-md"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/></svg>
            </TechIcon>
            <TechIcon name="ShadCN UI">
               <Image src="https://avatars.githubusercontent.com/u/139895814?s=280&v=4" alt="ShadCN UI logo" width={64} height={64} className="h-16 w-16 invert" />
            </TechIcon>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};
export default TechStack;