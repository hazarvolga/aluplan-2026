"use client"
import SolutionHero from "@/components/SolutionHero";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
export default function ClientPage() {
  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="ALLPLAN ADD-ON"
        title="PythonPart Generator"
        description="PythonParts üretimi için görsel ve hızlı bir geliştirme aracı"
        primaryButton={{ text: "İletişime Geçin", href: "/contact" }}
        secondaryButton={{ text: "Videolar", href: "/solutions/scalypso/videos" }}
      />
      <div className="bg-background">
        <InfoMediaTwoColumn
          title="Generator ile Hız"
          description="Çok kısa sürede parametrik objeler üretin ve ekip içinde paylaşın"
          videoUrl="https://www.youtube.com/embed/fHYDP36DcjA"
        />
        <SectionHeader title="Örnekler ve Kaynaklar" align="center" />
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <a href="https://www.allplan.com" target="_blank" rel="noopener noreferrer">Daha Fazla Bilgi</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
