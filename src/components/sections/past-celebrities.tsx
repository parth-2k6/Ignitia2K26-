import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CelebrityCard } from '@/components/celebrity-card';
const PastCelebrities = () => {
  const celebrities = PlaceHolderImages.filter(img => img.id.startsWith('celebrity-'));
  return (
    <section id="past-celebrities" className="py-20 md:py-32 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">Past Celebrities</h2>
      <p className="mt-4 text-lg text-muted-foreground"> The moments with the legends who graced our stage</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {celebrities.map((celebrity) => ( <CelebrityCard key={celebrity.id} celebrity={celebrity} />  ))}
        </div>
      </div>
    </section>
  );
};
export default PastCelebrities;