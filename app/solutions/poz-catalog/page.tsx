"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import heroImage from "@/assets/solutions/structural-hero.jpg";

export default function Page() {
  const stats = [
    { value: "10K+", label: "POZ", description: "Güncel Türkiye poz birim fiyatları." },
    { value: "100%", label: "DOĞRULUK", description: "Otomatik metraj hesabı." },
    { value: "2024", label: "GÜNCEL", description: "Yıllık fiyat güncellemeleri." },
  ];

  const challenges = [
    { text: "Güncel poz birim fiyatlarına erişim." },
    { text: "Manuel metraj ve maliyet hesaplamalarının hataya açıklığı." },
    { text: "Keşif ve hakediş belgelerinin hazırlanması." },
  ];

  const reasons = [
    { title: "GÜNCEL FİYATLAR", description: "Türkiye poz birim fiyatları." },
    { title: "OTOMATİK METRAJ", description: "BIM modelinden otomatik metraj." },
    { title: "MALİYET ANALİZİ", description: "Detaylı maliyet hesaplamaları." },
    { title: "KEŞİF ÖZETİ", description: "Otomatik keşif özeti oluşturma." },
    { title: "EXCEL EXPORT", description: "Raporları Excel'e aktarın." },
    { title: "ÖZELLEŞTİRİLEBİLİR POZLAR", description: "Kendi pozlarınızı tanımlayın." },
  ];

  const workflowSteps = [
    { title: "Model Hazırlama", description: "BIM modelini metraj için hazırlayın." },
    { title: "Poz Eşleştirme", description: "Model elemanlarını pozlarla eşleştirin." },
    { title: "Hesaplama", description: "Otomatik metraj ve maliyet hesabı." },
    { title: "Raporlama", description: "Keşif ve maliyet raporları oluşturun." },
  ];

  return (
    <EnhancedSolutionTemplate
      badge="DİĞER ÜRÜNLER"
      title="ALLPLAN POZ KATALOĞU"
      subtitle="TÜRKİYE POZ BİRİM FİYAT ENTEGRASYONU"
      description="Türkiye poz birim fiyat kataloğu entegrasyonu. Metraj ve maliyet hesaplamalarınızı otomatikleştirin, keşif belgelerinizi hızlıca hazırlayın."
      heroImage={heroImage}
      stats={stats}
      challenges={challenges}
      reasons={reasons}
      workflowSteps={workflowSteps}
      ctaTitle="Poz Kataloğunu deneyin"
      ctaDescription="Türkiye poz fiyatları ile maliyet hesaplama."
    />
  );
}
