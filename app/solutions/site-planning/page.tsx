"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import WorkflowTabsTemplate from "@/components/WorkflowTabsTemplate";
import PostHeroSection from "@/components/PostHeroSection";
import iconAccurateVisualScheduling from "@/assets/solutions/site-planning/icons/accurate_visual_scheduling-2.png";
import iconDetailPrecast from "@/assets/solutions/site-planning/icons/detail_precast-2.png";
import iconInterdisciplinaryAecDesign from "@/assets/solutions/site-planning/icons/interdisciplinary_aec_design.png";
import iconPowerfulSiteModelling from "@/assets/solutions/site-planning/icons/powerful_site_modelling_tools-1.png";
import iconReliableTenderPreparation from "@/assets/solutions/site-planning/icons/reliable_tender_preparation-1.png";
import iconBim2Field from "@/assets/solutions/site-planning/icons/structural-engineering-allplan-turkey-bim2field.png";
import iconImprovedChangeManagement from "@/assets/solutions/site-planning/icons/structural-engineering-allplan-turkey-improved_change_management.png";
import iconPlanableMultiMaterials from "@/assets/solutions/site-planning/icons/structural-engineering-allplan-turkey-planable_multi_materials.png";
import iconProductiveCollab from "@/assets/solutions/site-planning/icons/structural-engineering-allplan-turkey-productive_collab.png";
import iconSuperiorQualityDeliverables from "@/assets/solutions/site-planning/icons/structural-engineering-allplan-turkey-superior_quality_deliverables.png";
import iconWorkWayWant from "@/assets/solutions/site-planning/icons/work_way_want-1.png";
import imgTerrain from "@/assets/solutions/site-planning/workflows/csm_01_Gelaendeaufnahme_1428675f69.jpg";
import imgDataExchange from "@/assets/solutions/site-planning/workflows/csm_02_Data-exchange_f148ca3a23.jpg";
import imgAccessRoads from "@/assets/solutions/site-planning/workflows/csm_03_Access-roads_1b4e7c78d3.jpg";
import imgUtilities from "@/assets/solutions/site-planning/workflows/csm_04_Utilities_ae62dd7ac2.jpg";
import imgFacilities from "@/assets/solutions/site-planning/workflows/csm_05_Construction-site-facilities_84fb5372dc.jpg";
import imgExcavation from "@/assets/solutions/site-planning/workflows/csm_06_Excavation-shoring_d856634a07.jpg";
import imgCrane from "@/assets/solutions/site-planning/workflows/csm_07_Crane-planning_11aef60805.jpg";
import imgChange from "@/assets/solutions/site-planning/workflows/csm_08_Change-management_8f3f1396d5.jpg";
import imgSequence from "@/assets/solutions/site-planning/workflows/csm_09_Sequence-planning__65df2c9512.jpg";
import imgProduction from "@/assets/solutions/site-planning/workflows/csm_10_Production-planning_471c27c238.jpg";
import imgAccounting from "@/assets/solutions/site-planning/workflows/csm_11_Accounting-data_4fd10cb3d3.jpg";
import imgCoordination from "@/assets/solutions/site-planning/workflows/csm_12_Coordination_Construction-site_674b4bed8f.jpg";

const stats = [
  { value: "50%", label: "DAHA KESİN", description: "daha hızlı ve daha kesin tasarım çıktıları, görselleştirmeler ve ayrıntılı paftalar. (* 3B olarak 2B ile karşılaştırıldığında)" },
  { value: "70%", label: "DAHA VERİMLİ", description: "Güvenilir otomatik malzeme çıktısı ve metrajlar ile erken aşamalarda daha verimli ve hassas proje maliyeti. (* Elden metrajla karşılaştırıldığında)" },
  { value: "30%", label: "DAHA ÜRETKEN", description: "İşbirliğine dayalı planlamayı ve geliştirilmiş inşa edilebilirliği destekleyen verimli iş akışları ile tasarım üretkenliğinde artış. (* 3B tasarım kullanarak)" },
];

const challenges = [
  { text: "Şantiye alanının verimli kullanımı ve lojistik planlaması zorlukları." },
  { text: "İş programı ve kaynak planlamasının koordinasyonu." },
  { text: "Güvenlik gereksinimlerinin karşılanması ve risk yönetimi." },
];

const reasons = [
  { title: "İSTEDİĞİNİZ GİBİ ÇALIŞIN", description: "2B, 2.5B ve 3B'de esnek iş akışları ve obje yönelimli BIM.", image: iconWorkWayWant },
  { title: "GÜVENİLİR İHALE HAZIRLIĞI", description: "Ayrıntılı listelerle erken metraj ve malzeme çıkarımı.", image: iconReliableTenderPreparation },
  { title: "GÜÇLÜ ŞANTİYE MODELLEME", description: "Arazi planlama, erişim yolları ve ekipman yerleşimi.", image: iconPowerfulSiteModelling },
  { title: "PREKAST DETAYI", description: "Üretim ve inşaat için hızlı prekast planlama.", image: iconDetailPrecast },
  { title: "DOĞRU GÖRSEL PROGRAMLAMA", description: "Model verilerini planlama araçlarıyla bağlayarak görsel simülasyon.", image: iconAccurateVisualScheduling },
  { title: "ÇOKLU MALZEME", description: "Yerinde/prekast beton, çelik ve ahşap optimizasyonu.", image: iconPlanableMultiMaterials },
  { title: "ÜRETKEN İŞBİRLİĞİ", description: "Gerçek zamanlı çok kullanıcılı modelleme ve işbirliği.", image: iconProductiveCollab },
  { title: "DİSİPLİNLER ARASI TASARIM", description: "Mimari, yapısal ve MEP için tek çözüm.", image: iconInterdisciplinaryAecDesign },
  { title: "ETKİN OPEN BIM", description: "IFC4 RV ve Bimplus ile veri alışverişi.", image: iconBim2Field },
  { title: "DEĞİŞİM YÖNETİMİ", description: "Tek düzenleme ile çıktılar arası otomatik değişiklik.", image: iconImprovedChangeManagement },
  { title: "ÜSTÜN TESLİMATLAR", description: "Modelden doğru planlar, çizimler ve raporlar.", image: iconSuperiorQualityDeliverables },
  { title: "BIMPLUS", description: "Detay tasarım amacını sahada görsel koordine edin ve iletin.", image: iconBim2Field },
];

const workflowCategories = [
  {
    key: "analysis", label: "Şantiye Analizi", items: [
      { title: "Arazi Etüdü", description: "Planlamadan önce kesin envanter; Scalypso ile nokta bulutu aktarımı.", image: imgTerrain },
      { title: "Veri Değişimi", description: "Basit 3B model ve çok formatlı içe aktarım; 50+ format desteği.", image: imgDataExchange },
    ]
  },
  {
    key: "modeling", label: "Modelleme", items: [
      { title: "Erişim Yolları", description: "Parametrik yatay/dikey aks tanımı; plan ve rapor üretimi.", image: imgAccessRoads },
      { title: "Altyapı Tesisatı", description: "Rögar ve hatların parametrik yerleşimi; kolay uyarlama.", image: imgUtilities },
      { title: "Şantiye Tesisleri", description: "Vinç, çit, ofis ve konteyner objeleri esnek uyarlama.", image: imgFacilities },
      { title: "Kazı İksası", description: "Fore kazık, palplanş ve ankraj fonksiyonları parametrik.", image: imgExcavation },
    ]
  },
  {
    key: "model-analysis", label: "Model Analizi", items: [
      { title: "Vinç Planlaması", description: "Çakışmaları önleyerek en uygun vinç konumu ve kapasite kontrolü.", image: imgCrane },
      { title: "Değişim Yönetimi", description: "Bimplus ile varyant ve revizyon yönetimi; karar desteği.", image: imgChange },
    ]
  },
];

const preWorkflowSection = (
  <WorkflowTabsTemplate title="Şantiye Planlaması İçin Allplan İş Akışları" categories={workflowCategories} />
);

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="İNŞAAT PLANLAMASI"
      title="ŞANTİYE PLANLAMASI"
      subtitle="DAHA FAZLASINI İSTEYEN MÜTEAHHİTLER İÇİN"
      description="ALLPLAN’in şantiye planlama ve inşaat yönetimine yönelik BIM çözümleri, verimli ve sorunsuz proje yürütme için tüm tasarımdan inşa sürecini kapsar. İşbirliğine dayalı iş akışları, daha iyi inşa edilebilirlik ve daha başarılı bina sonuçları için tüm aşamalarda artan doğruluk sağlar. Şantiye ve inşaat planlama yazılımınızdan daha fazlasını bekleyin!"
      customHero={(
        <SolutionHero badge="İNŞAAT PLANLAMASI" title="ŞANTİYE PLANLAMASI" subtitle="DAHA FAZLASINI İSTEYEN MÜTEAHHİTLER İÇİN" description="ALLPLAN’in şantiye planlama ve inşaat yönetimine yönelik BIM çözümleri, verimli ve sorunsuz proje yürütme için tüm tasarımdan inşa sürecini kapsar. İşbirliğine dayalı iş akışları, daha iyi inşa edilebilirlik ve daha başarılı bina sonuçları için tüm aşamalarda artan doğruluk sağlar. Şantiye ve inşaat planlama yazılımınızdan daha fazlasını bekleyin!" />
      )}
      postHeroSection={(
        <PostHeroSection
          title="ŞANTİYE PLANLAMASI İÇİN ALLPLAN – BIM ÇÖZÜMLERİ"
          paragraphs={["Etkili şantiye planlaması ve yönetimi geniş bilgi ve hassas araçlar gerektirir."]}
          rightParagraphs={["Allplan ile doğru arazi modelleri, erişim ve yardımcı program planlaması, çakışma kontrolü ve görsel program geliştirme; ekipman yerleşimi ve işbirliği ile birleşir."]}
        />
      )}
      stats={stats}
      statsVariant="animated"
      challenges={challenges}
      reasons={reasons}
      reasonsBadgeText="12 GEREKÇE"
      reasonsTitleText="NEDEN ALLPLAN"
      preWorkflowSection={preWorkflowSection}
      showCta={false}
    />
  );
}
