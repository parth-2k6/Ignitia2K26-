import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
const SponsorShowcase = () => {
  const sponsors = PlaceHolderImages.filter(img => img.id.startsWith('sponsor-'));
  return (
    <section id="sponsors" className="py-20 md:py-32 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary"> Our Sponsors</h2>
          <p className="mt-4 text-lg text-muted-foreground"> A huge thank you to the partners who make Ignitia possible</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map(sponsor => (
            <Card key={sponsor.id} className="bg-card/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-center justify-center aspect-video">
                <Image src={sponsor.imageUrl} alt={sponsor.description} width={200}   height={100} className="object-contain transition-transform duration-300 group-hover:grayscale-0 grayscale invert-0 dark:invert" data-ai-hint={sponsor.imageHint} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SponsorShowcase;