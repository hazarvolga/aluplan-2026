"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import PostHeroSection from "@/components/PostHeroSection";
import heroImage from "@/assets/solutions/steel-hero.jpg";

import iconSmartFabrication from "@/assets/solutions/steel/reasons/work_way_want-1.png";
import iconAutoConnections from "@/assets/solutions/steel/reasons/integrated_structural_analysis-2.png";
import iconBuildableDesigns from "@/assets/solutions/steel/reasons/convincing_visualizations.png";
import iconEfficientDesigns from "@/assets/solutions/steel/reasons/easyliy_modify_requirements-1.png";
import iconPowerfulCollab from "@/assets/solutions/steel/reasons/productive_collab-1.png";
import iconInteroperability from "@/assets/solutions/steel/reasons/complete_interoperability-1.png";
import iconQualityDeliverables from "@/assets/solutions/steel/reasons/superior_quality_deliverables.png";
import iconProjectComm from "@/assets/solutions/steel/reasons/structural-engineering-allplan-turkey-enhanced_project_comm.png";
import iconComplexModeling from "@/assets/solutions/steel/reasons/automated_workflows.png";

const stats = [
  { value: "93%", label: "ZAMAN TASARRUFU", description: "kullanıcıların projeleri ALLPLAN SDS2 ile en az %25 daha hızlı tamamladığını bildirmektedir. Kaynak: 2021'de SDS2 müşterileri arasında yapılan SDS2 ROI Anketi." },
  { value: "86%", label: "DAHA VERİMLİ", description: "kullanıcıların ALLPLAN SDS2'nin imalat verimliliğini artırmaya yardımcı olduğunu söylüyor. Kaynak: 2021'de SDS2 müşterileri arasında yapılan SDS2 ROI Anketi." },
  { value: "71%", label: "DAHA ÜRETKEN", description: "kullanıcıların benimsemeden sonraki bir yıl içinde üretkenlik artışı gördü. Kaynak: 2021'de SDS2 müşterileri arasında yapılan SDS2 ROI Anketi." },
];

const challenges = [
  { text: "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri." },
  { text: "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri." },
  { text: "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri." },
];

const reasons = [
  { title: "AKILLI İMALAT", description: "Özel tasarım otomasyonu, maksimum verimlilik ve karlılık için çelik üreticisinin güçlü yönlerine ve tercihlerine göre optimize edilmiştir.", image: iconSmartFabrication },
  { title: "OTOMATİK BAĞLANTILAR", description: "Tam olarak doğrulanmış bağlantılar, siz modelledikçe tasarlanır ve en sıkıcı detaylandırma görevlerinden birini hızlandırır.", image: iconAutoConnections },
  { title: "İNŞA EDİLEBİLİR TASARIMLAR", description: "Tasarım zekamız, üstün inşa edilebilirlik için imalata ve montaja hazır bağlantılar sağlar.", image: iconBuildableDesigns },
  { title: "İŞÇİ VERİMLİ TASARIMLAR", description: "Üretim tercihlerine göre otomatik olarak tasarlanan bağlantılarla proje süresini ve maliyetini azaltın ve karlılığı en üst düzeye çıkarın.", image: iconEfficientDesigns },
  { title: "GÜÇLÜ İŞBİRLİĞİ", description: "Entegre bulut teknolojisi, çakışmasız işbirliği için gerçek zamanlı çok kullanıcılı modellemeyi destekler.", image: iconPowerfulCollab },
  { title: "TAM BİRLİKTE ÇALIŞABİLİRLİK", description: "Tasarım, tahmin, üretim yönetimi ve otomatikleştirilmiş üretim iş akışlarınız için kolayca veri alışverişi yapın.", image: iconInteroperability },
  { title: "ÜSTÜN KALİTELİ TESLİMATLAR", description: "Doğru, yüksek kaliteli belgeler için 3B modelden otomatik olarak çizimler ve raporlar oluşturun.", image: iconQualityDeliverables },
  { title: "GELİŞTİRİLMİŞ PROJE İLETİŞİMİ", description: "Etkileşimli raporlar ve basit model inceleme iş akışlarıyla tasarım amacını kolayca iletin.", image: iconProjectComm },
  { title: "OTOMATİK KARMAŞIK MODELLEME GÖREVLERİ", description: "Merdivenleri, korkulukları, karmaşık geometriyi ve daha fazlasını modellemek için otomatik araçlarla çeşitli çeliği modellemede zamandan tasarruf edin.", image: iconComplexModeling },
];

import SteelHeroBackground from "@/components/SteelHeroBackground";

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="Çelik Ürüeticileri"
      title="ÇELİK DETAYLANDIRMA & İMALAT"
      subtitle="DAHA FAZLASINI İSTEYEN ÇELİK ÜRETİCİLERİ İÇİN"
      description="ALLPLAN'deki SDS2, pazarın tek hepsi bir arada çelik detaylandırma ve bağlantı tasarımı BIM çözümünü sunar, imalattan sahaya çalışan eksiksiz tasarımlar sunar ve çelik konstrüksiyon projelerinizin doğruluğunu ve verimliliğini artırır. Çelik detaylandırma yazılımınızdan daha fazlasını bekleyin."
      customHero={(
        <SolutionHero
          badge="Çelik Ürüeticileri"
          title="ÇELİK DETAYLANDIRMA & İMALAT"
          subtitle="DAHA FAZLASINI İSTEYEN ÇELİK ÜRETİCİLERİ İÇİN"
          description="ALLPLAN'deki SDS2, pazarın tek hepsi bir arada çelik detaylandırma ve bağlantı tasarımı BIM çözümünü sunar, imalattan sahaya çalışan eksiksiz tasarımlar sunar ve çelik konstrüksiyon projelerinizin doğruluğunu ve verimliliğini artırır. Çelik detaylandırma yazılımınızdan daha fazlasını bekleyin."
          customBackground={<SteelHeroBackground />}
        />
      )}
      stats={stats}
      postHeroSection={(
        <PostHeroSection
          title="ALLPLAN SDS2 – ÇELİK ÜRETİMİ İÇİN BIM ÇÖZÜMLERİ"
          paragraphs={[
            "Çarpıcı mimari yapılardan devasa endüstriyel tesislere kadar strüktürel çelik tasarımı, en üst düzeyde doğruluk, teknik uzmanlık ve hassas, birlikte çalışabilir araçlar gerektirir.",
            "ALLPLAN SDS2 ile, modelleme yaparken otomatik olarak akıllı bağlantılar tasarlayabilir, tasarımları imalathanenizin güçlü yönlerine göre uyarlayabilir ve her projede daha fazla verimlilik ve doğruluk için diğer BIM ve imalat yönetim sistemleriyle entegre edebilirsiniz.",
          ]}
        />
      )}
      challenges={challenges}
      reasons={reasons}
      reasonsVariant="benefits"
      reasonsBadgeText="9 GEREKÇE"
      reasonsTitleText="NEDEN ALLPLAN SDS2"
      statsVariant="animated"
      showCta={false}
    />
  );
}
