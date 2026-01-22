'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
export const SponsorCard = ({ sponsor }: { sponsor: ImagePlaceholder }) => {
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
    <Card ref={ref}
    className={cn('group bg-card/50 hover:bg-card/80 rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-700 ease-out overflow-hidden', isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16')}>
    <CardContent className="p-4 sm:p-6 flex items-center justify-center aspect-video">
      <Image src={sponsor.imageUrl} alt={sponsor.description} width={200} height={100} className="object-contain transition-transform duration-500 group-hover:scale-110"data-ai-hint={sponsor.imageHint} />
      </CardContent>
    </Card>
  );
};