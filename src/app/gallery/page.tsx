import Header from "@/components/header";
import Footer from "@/components/footer";
export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-headline text-2xl md:text-4xl font-bold text-primary">Gallery</h2>
              <p className="mt-4 text-lg text-muted-foreground">A glimpse into the electrifying moments from past Ignitia fests </p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">Stay tuned!</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}