import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Footer from "@/components/footer";
import PastCelebrities from "@/components/sections/past-celebrities";
import About from "@/components/sections/about";
import TechStack from "@/components/sections/tech-stack";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <PastCelebrities />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}