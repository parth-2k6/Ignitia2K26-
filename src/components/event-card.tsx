'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
export type Event = {
  title: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};
export const EventCard = ({ event }: { event: Event }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <div ref={ref} className="h-full">
      <Card
        className={cn(
          "bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl overflow-hidden group transition-all duration-700 ease-out h-full flex flex-col",
          "hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2",
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        )}
      >
        <div className="p-4 pb-0">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={event.imageHint}
            />
          </div>
        </div>
        <CardContent className="p-6 flex-grow flex flex-col text-center">
          <h3
            className={cn( "font-headline text-lg text-primary transition-all duration-700 delay-200 group-hover:text-accent",
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {event.title}
          </h3>
           <div className={cn( "space-y-1 text-sm my-3 transition-all duration-700 delay-300", isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">{event.time}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-muted-foreground">{event.location}</span>
            </div>
          </div>
          <p
            className={cn( "text-sm text-foreground/70 leading-relaxed flex-grow transition-all duration-700 delay-400",  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {event.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};