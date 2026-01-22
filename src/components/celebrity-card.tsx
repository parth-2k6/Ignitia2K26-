'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
export const CelebrityCard = ({ celebrity }: { celebrity: ImagePlaceholder }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
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
  const isActuallyMobile = isMobile === true;
  const showText = (isActuallyMobile && isIntersecting) || (!isActuallyMobile && isHovered);

  return (
    <Card
      ref={ref}
      onMouseEnter={() => {
        if (!isActuallyMobile) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!isActuallyMobile) {
          setIsHovered(false);
        }
      }}
      className={cn('relative group aspect-[4/5] overflow-hidden rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-700 ease-out', isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      )}
    >
      <Image src={celebrity.imageUrl} alt={celebrity.name || 'Celebrity'}  fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top w-full h-full transition-transform duration-500 group-hover:scale-110" data-ai-hint={celebrity.imageHint} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3
          className={cn(
            'font-headline text-2xl md:text-3xl lg:text-4xl text-white leading-tight transition-all duration-700 delay-100',
            showText
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          {celebrity.name}
        </h3>
        <div
          className={cn(
            'w-16 h-1 bg-primary my-3 transition-all duration-700 delay-200',
            showText
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        />
        <p
          className={cn(
            'text-muted-foreground font-body text-base transition-all duration-700 delay-300',
            showText
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          {celebrity.talent}
        </p>
        <p
          className={cn(
            'text-primary font-bold text-lg mt-1 transition-all duration-700 delay-400',
            showText
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          )}
        >
          {celebrity.year}
        </p>
      </div>
    </Card>
  );
};