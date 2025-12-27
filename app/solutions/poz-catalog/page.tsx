"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import heroImage from "@/assets/solutions/structural-hero.jpg";

export default function Page() {
  const postHeroSection = (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Türkiye poz birim fiyat kataloğu entegrasyonu. Metraj ve maliyet hesaplamalarınızı otomatikleştirin, keşif belgelerinizi hızlıca hazırlayın.
            </p>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nRntReFS1jY"
              title="ALLPLAN POZ Kataloğu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <EnhancedSolutionTemplate
      badge="DİĞER ÜRÜNLER"
      title="ALLPLAN POZ KATALOĞU"
      subtitle="TÜRKİYE POZ BİRİM FİYAT ENTEGRASYONU"
      description="Türkiye poz birim fiyat kataloğu entegrasyonu. Metraj ve maliyet hesaplamalarınızı otomatikleştirin, keşif belgelerinizi hızlıca hazırlayın."
      heroImage={heroImage}
      postHeroSection={postHeroSection}
      showCta={false}
    />
  );
}
