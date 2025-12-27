"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import heroImage from "@/assets/solutions/structural-hero.jpg";

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="DİĞER ÜRÜNLER"
      title="ALLPLAN POZ KATALOĞU"
      subtitle="TÜRKİYE POZ BİRİM FİYAT ENTEGRASYONU"
      description="Türkiye poz birim fiyat kataloğu entegrasyonu. Metraj ve maliyet hesaplamalarınızı otomatikleştirin, keşif belgelerinizi hızlıca hazırlayın."
      heroImage={heroImage}
    />
  );
}
