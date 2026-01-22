import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
export default function AboutPage() {
  const psitImage = PlaceHolderImages.find(img => img.id === 'about-psit');
  const ignitiaImage = PlaceHolderImages.find(img => img.id === 'about-ignitia');
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="font-headline text-2xl md:text-4xl font-bold text-foreground [text-shadow:0_0_12px_hsl(var(--primary))]"> About PSIT </h2>
                <p className="text-lg text-muted-foreground"> Pranveer Singh Institute of Technology (PSIT) is a premier engineering institution located in Kanpur, Uttar Pradesh. Established with a vision to provide quality technical education, PSIT has consistently produced industry-ready professionals who excel in their respective fields </p>
                <p className="text-lg text-muted-foreground"> With state-of-the-art infrastructure, experienced faculty and a vibrant campus life, PSIT offers undergraduate and postgraduate programs in various engineering disciplines. The institute emphasizes holistic development through academic excellence, research opportunities and extracurricular activities </p>
              </div>
              <div>
                {psitImage && (
                  <Image  src={psitImage.imageUrl}  alt={psitImage.description} width={600} height={400} className="rounded-lg shadow-lg object-cover" data-ai-hint={psitImage.imageHint} />
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
              <div className="order-2 md:order-1">
                {ignitiaImage && (
                  <Image src={ignitiaImage.imageUrl}  alt={ignitiaImage.description}  width={600} height={400} className="rounded-lg shadow-lg object-cover" data-ai-hint={ignitiaImage.imageHint}
                  />
                )}
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <h2 className="font-headline text-2xl md:text-4xl font-bold text-foreground [text-shadow:0_0_12px_hsl(var(--primary))]"> About Ignitia</h2>
                <p className="text-lg text-muted-foreground">Ignitia is the flagship annual fest of PSIT that brings together students from across the country to celebrate technology, creativity and culture. It's a vibrant platform for showcasing talent, competing in exciting events and learning from industry experts </p>
                 <p className="text-lg text-muted-foreground"> From coding marathons and robotics competitions to electrifying concerts and cultural performances, Ignitia offers something for everyone. It's more than just a fest; it's an experience that ignites passion and forges lifelong memories</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}