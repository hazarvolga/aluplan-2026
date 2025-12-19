"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import WorkflowTabsTemplate from "@/components/WorkflowTabsTemplate";
import PostHeroSection from "@/components/PostHeroSection";
import architectureHero from "@/assets/solutions/architecture-hero.jpg";
import imgDataExchange from "@/assets/solutions/structural/workflows/site-analysis/data-exchange.jpg";
import imgTerrainSurvey from "@/assets/solutions/structural/workflows/site-analysis/terrain-survey.jpg";
import imgBimCoordination from "@/assets/solutions/structural/workflows/site-analysis/bim-coordination.jpg";
import imgFreeFormModeling from "@/assets/solutions/structural/workflows/modeling/free-form-modeling.jpg";
import imgVisualization from "@/assets/solutions/structural/workflows/modeling/visualization.jpg";
import imgParametricModeling from "@/assets/solutions/structural/workflows/modeling/parametric-modeling.jpg";
import imgVariantStudies from "@/assets/solutions/structural/workflows/model-analysis/variant-studies.jpg";
import imgBuildingSiteEquipment from "@/assets/solutions/structural/workflows/model-analysis/building-site-equipment.jpg";
import imgChangeManagement from "@/assets/solutions/structural/workflows/model-analysis/change-management.jpg";
import detOverview from "@/assets/solutions/structural/workflows/detailing/general-arrangement.jpg";
import detStructuralDrawings from "@/assets/solutions/structural/workflows/detailing/structural-drawings.jpg";
import detReinforcementDrawings from "@/assets/solutions/structural/workflows/detailing/reinforcement-drawings.jpg";
import detSitePlans from "@/assets/solutions/structural/workflows/detailing/site-plans.jpg";
import detSteelLists from "@/assets/solutions/structural/workflows/detailing/steel-lists.jpg";
import detChangeManagementDelivery from "@/assets/solutions/structural/workflows/detailing/change-management-delivery.jpg";
import iconEnhancedProjectComm from "@/assets/solutions/architecture/reasons/enhanced_project_comm.png";
import iconPowerfulModeling from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-powerful_modeling.png";
import iconPlanableMultiMaterials from "@/assets/solutions/architecture/reasons/planable_multi_materials.png";
import iconSeamlessIntegration from "@/assets/products/allplan-ultimate/seamless-integration.png";
import iconPrecise3DReinf from "@/assets/products/allplan-professional/precise-3d-reinforcement.png";
import iconImprovedChangeManagement from "@/assets/solutions/architecture/reasons/improved_change_management.png";
import iconSuperiorQualityDeliverables from "@/assets/solutions/architecture/reasons/superior_quality_deliverables.png";
import iconWorkWayWant from "@/assets/solutions/architecture/reasons/work_way_want.png";
import iconBIM2Field from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-bim2field.png";
import iconProductiveCollab from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-productive_collab.png";
import iconReliableEarlierCost from "@/assets/solutions/architecture/reasons/realiable_earlier_cost_estimates.png";
import iconInterdisciplinaryAEC from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-interdisciplinary_aec_design.png";

const stats = [
  { value: "50%", label: "DAHA KESİN", description: "daha hızlı ve daha kesin tasarım çıktıları, görselleştirmeler ve ayrıntılı paftalar. * 3B olarak 2B ile karşılaştırıldığında" },
  { value: "70%", label: "DAHA VERİMLİ", description: "Güvenilir otomatik malzeme çıktısı ve metrajlar ile erken aşamalarda daha verimli ve hassas proje maliyeti. * Elden metrajla karşılaştırıldığında" },
  { value: "30%", label: "DAHA ÜRETKEN", description: "İşbirliğine dayalı planlamayı ve geliştirilmiş inşa edilebilirliği destekleyen verimli iş akışları ile tasarım üretkenliğinde artış. * 3B tasarım kullanarak" },
];

const challenges = [
  { text: "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri." },
  { text: "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri." },
  { text: "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri." },
];

const reasons = [
  { title: "ALLPLAN'LE DAHA HIZLI BAŞLANGIÇ", description: "Allplan araç ipuçları ile fonksiyonlara hızlı alışın ve gücünden erken yararlanın.", image: iconEnhancedProjectComm },
  { title: "GÜÇLÜ ve SEZGİSEL MODELLEME", description: "Bileşenleri hızla geliştirmek ve belgeleri kısa sürede üretmek için güçlü araçlarla serbest modelleme.", image: iconPowerfulModeling },
  { title: "ÇOKLU MALZEMEYLE PLANLAMA", description: "Yerinde/prekast beton, çelik ve ahşap dahil malzemeleri optimize edin.", image: iconPlanableMultiMaterials },
  { title: "ANALİZ ÇÖZÜMLERİYLE ENTEGRASYON", description: "SCIA AutoConverter ile SAF tabanlı ileri iş akışları.", image: iconSeamlessIntegration },
  { title: "HASSAS 3D DONATILANDIRMA", description: "Otomatik çözümlerle hızlı donatı tasarımı ve detaylandırma.", image: iconPrecise3DReinf },
  { title: "DEĞİŞİM YÖNETİMİ", description: "Tek düzenleme ile çıktılar arası otomatik güncellemeler.", image: iconImprovedChangeManagement },
  { title: "ÜSTÜN TESLİMATLAR", description: "Modelden hızlı ve doğru planlar, çizimler ve raporlar.", image: iconSuperiorQualityDeliverables },
  { title: "İSTEDİĞİNİZ GİBİ ÇALIŞIN", description: "2B/2.5B/3B esnek iş akışları ve obje yönelimli BIM.", image: iconWorkWayWant },
  { title: "ETKİN OPEN BIM", description: "IFC4 RV ve Bimplus ile kolay veri alışverişi.", image: iconBIM2Field },
  { title: "ÜRETKEN İŞBİRLİĞİ", description: "Gerçek zamanlı çok kullanıcılı modelleme ve iş ortaklarıyla işbirliği.", image: iconProductiveCollab },
  { title: "DİSİPLİNLER ARASI TASARIM", description: "Mimari, yapısal ve MEP için tek çözüm.", image: iconInterdisciplinaryAEC },
  { title: "ERKEN MALİYET TAHMİNİ", description: "Ayrıntılı listelerle metraj ve malzemeleri erken hesaplayın.", image: iconReliableEarlierCost },
];

const postHeroSection = (
  <PostHeroSection
    title="STRÜKTÜREL MÜHENDİSLİK İÇİN ALLPLAN - BIM ÇÖZÜMLERİ"
    paragraphs={[
      "Konut geliştirmelerinden büyük ticari binalara kadar, inşaat ve imalat için doğru yapısal detaylandırma bilgi, esneklik ve hassas araçlar gerektirir.",
      "Allplan ile tasarımları kolayca oluşturabilir, otomasyonla detaylandırabilir, değişiklikleri hızlı yönetebilir ve doğru paftalar üretebilirsiniz.",
    ]}
    imageSrc={architectureHero}
    imageAlt="Allplan Architecture"
  />
);

const structuralCategories = [
  { key: "site-analysis", label: "Şantiye Analizi", items: [
    { title: "Veri Değişimi", description: "Proje ortaklarının verilerini içe aktararak tasarım aşamasında önemli zaman kazanın; 50+ format desteklenir.", image: imgDataExchange },
    { title: "Arazi Araştırması", description: "PDF ve görüntü tabanlı planlar ile temel oluşturun; nokta bulutları Scalypso ile Allplan’a aktarılır.", image: imgTerrainSurvey },
    { title: "BIM Koordinasyonu", description: "Allplan ve Bimplus Konu Yönetimi ile senkronizasyon; IFC/BCF desteği ve net karar süreçleri.", image: imgBimCoordination, videoUrl: "https://youtu.be/l66_2h40YdM" },
  ]},
  { key: "modeling", label: "Modelleme", items: [
    { title: "Serbest Biçimli Modelleme", description: "Her türlü 3D eleman; obje olarak tanıma ve metraj uyumu.", image: imgFreeFormModeling },
    { title: "Parametrik Modelleme", description: "Yol gövdesi yardımcı unsurlar parametrik yerleşim ve uyarlama.", image: imgParametricModeling },
    { title: "Görselleştirme", description: "Disiplinler arası analiz ve geri bildirim için yüksek kalite görselleştirme.", image: imgVisualization },
  ]},
  { key: "model-analysis", label: "Model Analizi", items: [
    { title: "Varyant Çalışmaları", description: "Çizim dosyası sistemi ile performans ve düzen artırımı; büyük projelere uygun yapılandırma.", image: imgVariantStudies },
    { title: "Şantiye Ekipmanları", description: "Vinç ve ekipman objeleri ile yerleşim; çakışma algılama ve hızlı varyant detaylandırma.", image: imgBuildingSiteEquipment },
    { title: "Değişim Yönetimi", description: "Bimplus ile varyant ve revizyon karşılaştırma; toplantılarda karar desteği.", image: imgChangeManagement, videoUrl: "https://youtu.be/b9M3-bwTR_s" },
  ]},
  { key: "detailing-deliverables", label: "Detaylandırma Teslimatlar", items: [
    { title: "Genel Düzenleme Çizimleri", description: "İlişkili görünüm ve kesitlerle hızlı plan üretimi; değişikliklerin anlaşılabilirliği.", image: detOverview },
    { title: "Yapısal Çizimler", description: "Beton/çelik elemanların hassas çizimleri; gösterimlere hızlı uyarlama.", image: detStructuralDrawings, videoUrl: "https://youtu.be/VAx83Oykijc" },
    { title: "Donatı Çizimleri", description: "3B donatı ve otomatik kesit uyarlama; çakışma kontrolü ve çelik listeleri.", image: detReinforcementDrawings, videoUrl: "https://youtu.be/py14a-iJZws" },
    { title: "Şantiye Çizimleri", description: "Elemanlar ve kesitlerin bağlanması ile otomatik değişiklik benimseme.", image: detSitePlans },
    { title: "Çelik Listeleri", description: "Hataları minimize eden 3B donatılandırma ve hızlı liste üretimi.", image: detSteelLists, videoUrl: "https://youtu.be/p0ZC4YUAxfY" },
    { title: "Değişim Yönetimi", description: "Şantiye değişikliklerinin modele hızla uyarlanması.", image: detChangeManagementDelivery },
  ]},
];

const preWorkflowSection = (
  <WorkflowTabsTemplate title="İnşaat Mühendisliği İş Akışları" categories={structuralCategories} />
);

const preChallengesSection = <></>;

const customHero = (
  <SolutionHero
    badge="BİNA TASARIMI"
    title="STRÜKTÜREL MÜHENDİSLİK"
    subtitle="DAHA FAZLASINI İSTEYEN MÜHENDİSLER VE TEKNİKERLER İÇİN."
    description="ALLPLAN'in strüktürel mühendisliğe yönelik BIM çözümleri, tasarımdan inşa sürecine kadar tüm süreci kapsar. Allplan'in sağladığı gelişmiş hassasiyet ve işbirliğine dayalı iş akışları, proje tasarımı ve teslimi için yeni verimlilik seviyeleri ve daha fazla üretkenlik sağlar. Strüktürel mühendislik ve detaylandırma yazılımınızdan daha fazlasını bekleyin!"
  />
);

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="BİNA TASARIMI"
      title="STRÜKTÜREL MÜHENDİSLİK"
      subtitle="DAHA FAZLASINI İSTEYEN MÜHENDİSLER VE TEKNİKERLER İÇİN."
      description="ALLPLAN'in strüktürel mühendisliğe yönelik BIM çözümleri, tasarımdan inşa sürecine kadar tüm süreci kapsar. Allplan'in sağladığı gelişmiş hassasiyet ve işbirliğine dayalı iş akışları, proje tasarımı ve teslimi için yeni verimlilik seviyeleri ve daha fazla üretkenlik sağlar. Strüktürel mühendislik ve detaylandırma yazılımınızdan daha fazlasını bekleyin!"
      customHero={customHero}
      stats={stats}
      postHeroSection={postHeroSection}
      preWorkflowSection={preWorkflowSection}
      preChallengesSection={preChallengesSection}
      challenges={challenges}
      reasons={reasons}
      reasonsVariant="benefits"
      statsVariant="animated"
      showCta={false}
    />
  );
}
