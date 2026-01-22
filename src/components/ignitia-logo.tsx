import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';
const IgnitiaLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative', className)}>
      <Image src="https://www.ignitia.in/_next/image?url=%2Fassets%2Ficon.png&w=640&q=75" alt="Ignitia Logo" fill sizes="48px" className="object-contain"/>
    </div>
  );
};
export default IgnitiaLogo;