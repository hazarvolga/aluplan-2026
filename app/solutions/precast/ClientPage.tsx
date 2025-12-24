"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import PostHeroSection from "@/components/PostHeroSection";
import heroImage from "@/assets/solutions/precast-hero.jpg";
import iconAutomatedWorkflows from "@/assets/products/precast/reasons/automated_workflows.png";
import iconHighDesignQuality from "@/assets/products/precast/reasons/high_design_quality.png";
import iconTerrainIntegration from "@/assets/products/precast/reasons/intuitive_terrain_integration-1.png";
import iconWorkWayWant from "@/assets/products/precast/reasons/work_way_want-1.png";
import iconProductiveCollab from "@/assets/products/precast/reasons/structural-engineering-allplan-turkey-productive_collab.png";
import iconSmartConverter from "@/assets/products/precast/reasons/smart_converter-1.png";
import iconConvincing from "@/assets/products/precast/reasons/convincing_visualizations.png";
import iconKeepOverview from "@/assets/products/precast/reasons/keep_overview-1.png";
import iconQualityAssured from "@/assets/products/precast/reasons/quality_assured_data-1.png";
import iconDigitalizationPlant from "@/assets/products/precast/reasons/digitalization_precast_plant-1-1.png";
import iconOptimizedDecisions from "@/assets/products/precast/reasons/optimized_decisions-1.png";
import iconMobileSolutions from "@/assets/products/precast/reasons/mobile_solutions-1.png";

export default function ClientPage() {
  const stats = [
    { value: "52%", label: "DAHA FAZLA ZAMAN", description: "daha hızlı ve daha doğru tasarım çıktıları, görselleştirmeler ve detaylı inşaat çizimleri. * 3B ile 2B karşılaştırıldığında" },
    { value: "60%", label: "DAHA AZ HATA", description: "güvenilir otomatik miktar ve malzeme çıktısı ile erken aşamalarda daha verimli ve hassas proje maliyetlendirmesi. * Manuel metraj ile karşılaştırıldığında" },
    { value: "25%", label: "DAHA ÜRETKEN", description: "3B istifleme ile genel üretkenlikte artış." },
  ];
  const challenges = [
    { text: "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri." },
    { text: "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri." },
    { text: "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri." },
  ];
  const reasons = [
    { title: "TUTARLI ZAMAN VE MALİYET PLANLAMASI", description: "En karmaşık proje gereksinimlerinde bile her şekilde nesne oluşturmak ve doğru tasarlamak için güçlü araçlar.", image: iconAutomatedWorkflows },
    { title: "KARMAŞIK DONATIYI KOLAYCA TASARLAYIN VE DETAYLANDIRIN", description: "Kavisli yapılar veya serbest biçimli nesneler gibi karmaşık geometrilerin hızlı donatı tasarımı ve detaylandırması için otomatik çözümler.", image: iconHighDesignQuality },
    { title: "SEZGISEL ARAZİ ENTEGRASYONU", description: "Tüm yaygın arazi formatlarını hızla entegre edin, dijital arazi modelleri olarak görüntüleyin ve kolayca düzenleyin.", image: iconTerrainIntegration },
    { title: "BİREYSEL ÇALIŞMA YÖNTEMLERİ", description: "2D, 2.5D ve 3D'de esnek iş akışları ve tam nesne yönelimli BIM çalışma metodolojisi", image: iconWorkWayWant },
    { title: "KUSURSUZ İŞBİRLİĞİ", description: "Gelişmiş inşa edilebilirlik ve sürdürülebilirlik için yerinde dökme/prekast beton, çelik ve ahşap dahil malzeme ve inşaat yaklaşımlarını optimize edin.", image: iconProductiveCollab },
    { title: "AKILLI DÖNÜŞTÜRÜCÜ", description: "Mimari tasarım, yapı mühendisliği, MEP hizmetleri ve inşaat mühendisliği tasarımı ve detaylandırması için tek yazılım çözümü.", image: iconSmartConverter },
    { title: "İKNA EDICI GÖRSELLEŞTİRME", description: "Gerçek zamanlı çok kullanıcılı çalışma için entegre bulut teknolojisi ve ortaklarla model ve proje işbirliği", image: iconConvincing },
    { title: "EKSIKSIZ GENEL BAKIŞ", description: "Birden fazla değişim formatı, IFC4 RV içe/dışa aktarma ve işbirlikçi OPEN BIM veri platformu Bimplus ile kolayca veri alışverişi.", image: iconKeepOverview },
    { title: "ERP VE MES İÇİN KALİTE GÜVENCELİ VERİ", description: "Doğru teklifler için detaylı listeler kullanarak erken aşamadan itibaren miktarları ve malzemeleri hızlı ve hassas hesaplayın.", image: iconQualityAssured },
    { title: "PREKAST TESİSİNİN DİJİTALLEŞMESİ", description: "Çizimlerde veya modelde bir kez düzenleyerek değişikliklerin teslimatlar arasında otomatik yapılmasıyla zaman kazanın.", image: iconDigitalizationPlant },
    { title: "OPTİMİZE KARAR VERME", description: "3D modelden doğrudan planları, çizimleri ve raporları hızlı ve doğru şekilde oluşturun ve yüksek kaliteli dokümantasyon için bilgi alışverişini kontrol edin.", image: iconOptimizedDecisions },
    { title: "MOBİL ÇÖZÜMLER", description: "Net ve şeffaf iletişim için bulut tabanlı platform Bimplus kullanarak inşaat ekipleriyle detaylı tasarımları koordine edin", image: iconMobileSolutions },
  ];

  return (
    <EnhancedSolutionTemplate
      badge="İNŞAAT PLANLAMASI"
      title="PREKAST İMALATI"
      subtitle="DAHA FAZLASINI İSTEYEN PREKAST TASARIMCILARI İÇİN"
      description="Prekast, inşaat sektörünün en hızlı büyüyen segmentlerinden biridir. Bu nedenle ALLPLAN, prekast projelerinin tasarımı, detaylandırması ve uygulanması için benzersiz iş akışları sunar. Yüksek düzeyde otomatikleştirilmiş iş akışları maksimum üretkenlik ve hassasiyet sağlar. Allplan'daki entegre prekast fonksiyonları hakkında daha fazla bilgi edinin!"
      heroImage={heroImage}
      customHero={
        <SolutionHero
          badge="İNŞAAT PLANLAMASI"
          title="PREKAST İMALATI"
          subtitle="DAHA FAZLASINI İSTEYEN PREKAST TASARIMCILARI İÇİN"
          description="Prekast, inşaat sektörünün en hızlı büyüyen segmentlerinden biridir. Bu nedenle ALLPLAN, prekast projelerinin tasarımı, detaylandırması ve uygulanması için benzersiz iş akışları sunar. Yüksek düzeyde otomatikleştirilmiş iş akışları maksimum üretkenlik ve hassasiyet sağlar. Allplan'daki entegre prekast fonksiyonları hakkında daha fazla bilgi edinin!"
        />
      }
      postHeroSection={
        <PostHeroSection
          title="ALLPLAN – PREFABRİKASYON İÇİN BIM ÇÖZÜMLERİ"
          paragraphs={[
            "Başarılı prekast projelerini karakterize eden şey; kapsamlı bilgi, mutlak hassasiyete bağlılık ve doğru araçların mükemmel birleşimidir.",
            "ALLPLAN, etkileyici 3B teklif modelinden hassas 3B prekast modele; tam sıralama ve üretim planlamasından net 3B istifleme ve kesintisiz faturalandırma verilerine kadar tüm proje aşamalarında sizi destekler.",
          ]}
          videoUrl="https://www.youtube.com/embed/uS_xihYzWoA"
        />
      }
      stats={stats}
      statsVariant="animated"
      challenges={challenges}
      reasons={reasons}
      reasonsBadgeText="12 NEDEN"
      reasonsTitleText="ALLPLAN'I SEÇMELİSİNİZ"
      reasonsVariant="benefits"
      showCta={false}
    />
  );
}
