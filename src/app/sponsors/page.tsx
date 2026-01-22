import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section id="sponsors" className="py-20 md:py-32 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-foreground [text-shadow:0_0_12px_hsl(var(--primary))]">Our Sponsors</h2>
              <p className="mt-4 text-lg text-muted-foreground">A huge thank you to the partners who make Ignitia possible</p>
            </div>
            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap">
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                </div>
                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                    <span className="font-headline text-4xl mx-4 text-primary">Coming Soon!</span>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}