"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import WorkflowTabsTemplate from "@/components/WorkflowTabsTemplate";
import PostHeroSection from "@/components/PostHeroSection";
import heroBg from "@/assets/solutions/road-railway-hero-bg.png";
import imgModellingTools from "@/assets/solutions/road-railway/modelling-tools.png";
import imgReinforcement from "@/assets/solutions/road-railway/reinforcement.png";
import imgConstructionSeq from "@/assets/solutions/road-railway/construction-sequence.png";
import imgAutomatedWorkflows from "@/assets/solutions/road-railway/automated-workflows.png";
import imgProductiveCollab from "@/assets/solutions/road-railway/productive-collab.png";
import imgInterdisciplinary from "@/assets/solutions/road-railway/interdisciplinary.png";
import imgBim2Field from "@/assets/solutions/road-railway/bim2field.png";
import imgEnhancedComm from "@/assets/solutions/road-railway/enhanced-comm.png";
import imgCostEstimates from "@/assets/solutions/road-railway/cost-estimates.png";
import imgChangeMgmtReason from "@/assets/solutions/road-railway/change-management-reason.png";
import imgQualityDeliverables from "@/assets/solutions/road-railway/quality-deliverables.png";
import imgWorkflowSurvey from "@/assets/solutions/road-railway/workflow-survey.jpg";
import imgWorkflowGeodata from "@/assets/solutions/road-railway/workflow-geodata.jpg";
import imgWorkflowExchange from "@/assets/solutions/road-railway/workflow-exchange.jpg";
import imgWorkflowParametric from "@/assets/solutions/road-railway/workflow-parametric.jpg";
import imgWorkflowFreeform from "@/assets/solutions/road-railway/workflow-freeform.jpg";
import imgWorkflowVisualisation from "@/assets/solutions/road-railway/workflow-visualisation.jpg";
import imgWorkflowVariant from "@/assets/solutions/road-railway/workflow-variant.jpg";
import imgWorkflowChange from "@/assets/solutions/road-railway/workflow-change.jpg";
import imgWorkflowDrawings from "@/assets/solutions/road-railway/workflow-drawings.jpg";
import imgWorkflowReports from "@/assets/solutions/road-railway/workflow-reports.jpg";

const stats = [
  { value: "50%", label: "DAHA KESİN", description: "daha hızlı ve daha kesin tasarım çıktıları, görselleştirmeler ve ayrıntılı paftalar. * 3B olarak 2B ile karşılaştırıldığında" },
  { value: "70%", label: "DAHA VERİMLİ", description: "Güvenilir otomatik malzeme çıktısı ve metrajlar ile erken aşamalarda daha verimli ve hassas proje maliyeti. * Elden metrajla karşılaştırıldığında" },
  { value: "30%", label: "DAHA ÜRETKEN", description: "İşbirliğine dayalı planlamayı ve geliştirilmiş inşa edilebilirliği destekleyen verimli iş akışları ile tasarım üretkenliğinde artış. * 3B tasarım kullanarak" },
];

const challenges = [
  { text: "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri." },
  { text: "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri." },
  { text: "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri." },
  { text: "Farklı disiplinler arasındaki koordinasyon eksikliğinden kaynaklanan hatalar." },
  { text: "Yetersiz görselleştirme araçları nedeniyle paydaşlarla iletişim sorunları." },
];

const reasons = [
  { title: "GÜÇLÜ ŞANTİYE MODELLEME ARAÇLARI", description: "Arazi, erişim yolları, hizmetler ve ekipman yerleşimi.", image: imgModellingTools },
  { title: "PARAMETRİK YOL MODELLEME", description: "Yol tasarımlarını entegre etmek için güçlü fonksiyonlar.", image: imgReinforcement },
  { title: "PARAMETRİK KÖPRÜ MODELLEME", description: "Modelleme, inşa süreci ve analiz tek çözümde.", image: imgConstructionSeq },
  { title: "ÖZELLEŞTİRMEYLE PERFORMANS", description: "Otomasyon ve ısmarlama iş akışları ile hız kazanın.", image: imgAutomatedWorkflows },
  { title: "ÜRETKEN İŞBİRLİĞİ", description: "Gerçek zamanlı çok kullanıcılı çalışma ve işbirliği.", image: imgProductiveCollab },
  { title: "DİSİPLİNLER ARASI TASARIM", description: "Mimari, yapısal ve MEP için tek çözüm.", image: imgInterdisciplinary },
  { title: "ETKİN OPEN BIM", description: "IFC4 RV ve Bimplus ile veri alışverişi.", image: imgBim2Field },
  { title: "ALLPLAN'LE BAŞLANGIÇ", description: "Araç ipuçlarıyla fonksiyonlara hızlı alışın.", image: imgEnhancedComm },
  { title: "METRAJ VE TAHMİNLER", description: "Otomatik raporlarla hızlı ve hassas hesaplar.", image: imgCostEstimates },
  { title: "DEĞİŞİM YÖNETİMİ", description: "Tek düzenleme ile otomatik değişiklik senkronizasyonu.", image: imgChangeMgmtReason },
  { title: "ÜSTÜN TESLİMATLAR", description: "Modelden doğru planlar ve raporlar.", image: imgQualityDeliverables },
  { title: "BIM 2FIELD", description: "Bimplus ile sahada görsel koordinasyon.", image: imgBim2Field },
];

const workflowCategories = [
  {
    key: "site-analysis", label: "1 / Şantiye Analizi", items: [
      { title: "Arazi Ölçümü", description: "Büyük nokta bulutları ile yüksek çözünürlüklü arazi modelleri.", image: imgWorkflowSurvey },
      { title: "Coğrafi Veri İşleme (SHP)", description: "Parsel sınırları, taşkın alanları, yol ağları ve kritik zonlar.", image: imgWorkflowGeodata },
      { title: "Veri Alışverişi", description: "IFC 4.3'e uygun yol elemanları ve mantıksal bölümler.", image: imgWorkflowExchange },
    ]
  },
  {
    key: "modeling", label: "2 / Modelleme", items: [
      { title: "Parametrik Modelleme", description: "Tutarlı parametrik kavramla her zaman geometrik uyarlamalar.", image: imgWorkflowParametric },
      { title: "Serbest Form Modelleme", description: "Serbest profillerin ekstrüzyonu ile ray, bariyer ve destekler.", image: imgWorkflowFreeform },
      { title: "Görselleştirme", description: "Disiplinler arası analiz ve iletişimi kolaylaştırır.", image: imgWorkflowVisualisation },
    ]
  },
  {
    key: "model-analysis", label: "3 / Model Analizi", items: [
      { title: "Varyant Karşılaştırma", description: "Farklı hizalamaları hızla kaydedin ve karşılaştırın.", image: imgWorkflowVariant },
      { title: "Değişim Yönetimi", description: "Drone verisiyle saha durumunu modele karşılaştırın.", image: imgWorkflowChange },
    ]
  },
  {
    key: "deliverables", label: "4 / Teslimatlar", items: [
      { title: "Çizimler", description: "Kesit, boyuna kesit ve saha planı; modelle senkron.", image: imgWorkflowDrawings },
      { title: "Raporlar", description: "Kazık noktaları, mesafeler, hacimler ve veri aktarımı.", image: imgWorkflowReports },
    ]
  },
];

const postHeroSection = (
  <PostHeroSection
    title="YOL VE DEMİRYOLU İÇİN ALLPLAN - BIM ÇÖZÜMLERİ"
    paragraphs={[
      "Erişimden otoyollara, demiryolu etkileşimlerinden yeni hatlara kadar entegre altyapı tasarımı bilgi ve hassas araçlar gerektirir.",
      "Allplan ile arazi modellerini dahil edin, hizalamaları içe aktarın, yol ve yardımcı programları parametrik modelleyin, ekipman yerleşimini planlayın ve tüneller için köprü araçlarıyla gelişmiş iş akışları kullanın.",
    ]}
    videoUrl="https://www.youtube.com/embed/B3hXx3LL-q4"
  />
);

const preWorkflowSection = (
  <WorkflowTabsTemplate categories={workflowCategories} title="Yol ve Altyapı Tasarımı İçin Allplan İş Akışları" subtitle="Allplan ile altyapı projelerinizde verimliliği artırın" />
);

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="KARAYOLU VE DEMİRYOLU ALTYAPISI"
      title="KARAYOLU VE DEMİRYOLU ALTYAPISI"
      subtitle="DAHA FAZLASINI İSTEYEN ALTYAPI TASARIMCILARI İÇİN."
      description={`ALLPLAN’in karayolu, demiryolu ve altyapı tasarımına yönelik BIM çözümleri, tasarımdan inşa sürecine kadar tüm süreci kapsar. Allplan, proje tasarımı ve teslimatı için daha fazla üretkenliği destekleyen işbirlikçi iş akışlarıyla köprüler dahil olmak üzere diğer inşaat mühendisliği disiplini tasarım gereksinimleriyle sorunsuz entegrasyon sağlar. Karayolu, demiryolu ve altyapı planlama yazılımınızdan daha fazlasını bekleyin!
ÜSTÜN İNŞAAT İÇİN ÇOK MALZEMELİ ÇÖZÜM`}
      customHero={(
        <SolutionHero badge="KARAYOLU VE DEMİRYOLU ALTYAPISI" title="KARAYOLU VE DEMİRYOLU ALTYAPISI" subtitle="DAHA FAZLASINI İSTEYEN ALTYAPI TASARIMCILARI İÇİN." description={`ALLPLAN’in karayolu, demiryolu ve altyapı tasarımına yönelik BIM çözümleri, tasarımdan inşa sürecine kadar tüm süreci kapsar. Allplan, proje tasarımı ve teslimatı için daha fazla üretkenliği destekleyen işbirlikçi iş akışlarıyla köprüler dahil olmak üzere diğer inşaat mühendisliği disiplini tasarım gereksinimleriyle sorunsuz entegrasyon sağlar. Karayolu, demiryolu ve altyapı planlama yazılımınızdan daha fazlasını bekleyin!
ÜSTÜN İNŞAAT İÇİN ÇOK MALZEMELİ ÇÖZÜM`}
          backgroundImage={heroBg}
        />
      )}
      stats={stats}
      challenges={challenges}
      reasons={reasons}
      reasonsVariant="benefits"
      statsVariant="animated"
      postHeroSection={postHeroSection}
      preWorkflowSection={preWorkflowSection}
      showCta={false}
    />
  );
}
