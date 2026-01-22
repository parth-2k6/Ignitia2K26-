import { Calendar, Flame, LocateIcon } from 'lucide-react';
const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">Experience The Unforgettable</h2>
          <p className="mt-4 text-lg text-muted-foreground"> Ignitia is back, bigger and better than ever. Prepare for an explosive experience where technology, art and culture collide</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">3 Days of Fire</h3>
            <p className="mt-2 text-muted-foreground"> From dawn till dusk, a packed schedule of events, workshops and competitions</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <Flame className="h-8 w-8 text-accent animate-pulse" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Tech & Culture Fusion</h3>
            <p className="mt-2 text-muted-foreground">Witness a spectacle of fiery light and vibrant energy</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
              <LocateIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-headline text-xl font-semibold">Campus Wide Events</h3>
            <p className="mt-2 text-muted-foreground"> Explore every corner of the campus with events and attractions at every turn </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;