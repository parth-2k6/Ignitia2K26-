import Header from "@/components/header";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section id="events" className="py-20 md:py-32 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-foreground [text-shadow:0_0_12px_hsl(var(--primary))]"> Schedule of Events </h2>
              <p className="mt-4 text-lg text-muted-foreground">Stay tuned!</p>
            </div>

            <div className="relative max-w-xl mx-auto mb-16">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input type="search" placeholder="Search for events" className="w-full rounded-full bg-card/80 border-2 border-primary/20 pl-14 pr-5 h-14 text-lg focus:ring-primary focus:border-primary transition-all duration-300" />
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