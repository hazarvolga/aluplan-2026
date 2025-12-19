"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";

export default function ClientPage() {
  const stats = [
    { value: "100%", label: "BULUT TABANLI", description: "Tüm proje verilerinize her yerden güvenli erişim." },
    { value: "50+", label: "FORMAT DESTEĞİ", description: "IFC, DWG ve birçok format ile tam uyumluluk." },
    { value: "24/7", label: "ERİŞİLEBİLİRLİK", description: "Kesintisiz bulut hizmeti ve mobil erişim." },
  ];
  const challenges = [
    { text: "Farklı yazılımlardan gelen BIM modellerinin koordinasyonu." },
    { text: "Proje paydaşları arasında veri paylaşımı zorlukları." },
    { text: "Çakışma kontrolü ve model birleştirme süreçlerinin karmaşıklığı." },
  ];
  const reasons = [
    { title: "BULUT TABANLI BIM PLATFORMU", description: "Tüm proje verilerinizi bulutta güvenle saklayın ve yönetin." },
    { title: "MODEL BİRLEŞTİRME", description: "Farklı disiplinlerden gelen modelleri tek bir koordinasyon modelinde birleştirin." },
    { title: "ÇAKIŞMA KONTROLÜ", description: "Otomatik çakışma tespiti ile sorunları erken aşamada belirleyin." },
    { title: "3D MODEL GÖRÜNTÜLEME", description: "BIM modellerini tarayıcıda görüntüleyin, hiçbir yazılım yüklemeye gerek yok." },
    { title: "PROJE YÖNETİMİ", description: "Görevleri, sorunları ve süreçleri tek platformdan yönetin." },
    { title: "GÖREV VE SORUN TAKİBİ", description: "BCF standardı ile sorunları takip edin ve çözün." },
    { title: "MOBİL ERİŞİM", description: "Şantiyede veya ofiste, her yerden projelere erişin." },
    { title: "API ENTEGRASYONU", description: "Diğer sistemlerle sorunsuz entegrasyon için açık API." },
    { title: "VERSİYON KONTROLÜ", description: "Model versiyonlarını takip edin ve karşılaştırın." },
  ];
  const workflowSteps = [
    { title: "Model Yükleme", description: "IFC veya yerel formatlardan BIM modellerini buluta yükleyin." },
    { title: "Model Koordinasyonu", description: "Farklı disiplinlerin modellerini birleştirin ve koordine edin." },
    { title: "Çakışma Analizi", description: "Otomatik çakışma kontrolü ile sorunları tespit edin." },
    { title: "İşbirliği ve Teslim", description: "Sorunları çözün, görevleri yönetin ve projeyi tamamlayın." },
  ];

  return (
    <EnhancedSolutionTemplate
      badge="DİĞER ÜRÜNLER"
      title="ALLPLAN BIMPLUS"
      subtitle="BULUT TABANLI BIM İŞBİRLİĞİ PLATFORMU"
      description="Bimplus, tüm proje paydaşlarını tek bir platformda buluşturan bulut tabanlı BIM çözümüdür. Model birleştirme, çakışma kontrolü ve proje yönetimi özelliklerini bir arada sunar."
      customHero={
        <SolutionHero
          badge="DİĞER ÜRÜNLER"
          title="ALLPLAN BIMPLUS"
          subtitle="BULUT TABANLI BIM İŞBİRLİĞİ PLATFORMU"
          description="Bimplus, tüm proje paydaşlarını tek bir platformda buluşturan bulut tabanlı BIM çözümüdür. Model birleştirme, çakışma kontrolü ve proje yönetimi özelliklerini bir arada sunar."
        />
      }
      stats={stats}
      statsVariant="animated"
      challenges={challenges}
      reasons={reasons}
      workflowSteps={workflowSteps}
      ctaTitle="Bimplus'ı ücretsiz deneyin"
      ctaDescription="Bulut tabanlı BIM işbirliği platformunu keşfedin ve projelerinizi daha verimli yönetin."
    />
  );
}
