import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
export default function AboutDeveloperPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <Image src="https://avatars.githubusercontent.com/u/192633494?v=4" alt="Parth Tiwari"width={250}  height={250}  className="rounded-full shadow-lg border-4 border-primary" data-ai-hint="developer avatar"/>
                </div>
                <div className="md:col-span-2 space-y-4 text-left">
                  <h1 className="font-headline text-3xl md:text-5xl font-bold text-foreground [text-shadow:0_0_12px_hsl(var(--primary))]"> Parth Tiwari </h1>
                  <h2 className="text-xl md:text-2xl font-body font-medium text-primary">Full Stack Developer </h2>
                  <p className="text-lg text-muted-foreground">i am passionate developer who loves turning ideas into reality with code</p>
                  <div className="flex items-center justify-start gap-6 pt-4">
                    <Link href="https://github.com/parth-2k6" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      <Github className="h-8 w-8" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/itsparth-tiwari/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                      <Linkedin className="h-8 w-8" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}