"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import WorkflowTabsTemplate from "@/components/WorkflowTabsTemplate";
import StatsTemplate from "@/components/StatsTemplate";
import PostHeroSection from "@/components/PostHeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import ResourceCardGrid from "@/components/ResourceCardGrid";
import resInfographic from "@/assets/products/precast/resources/infographic1.jpg";
import resWhitepaper from "@/assets/products/precast/resources/whitepaper1.jpg";
import resChecklist from "@/assets/products/precast/resources/checklist.jpg";
import iconAutomatedWorkflows from "@/assets/products/precast/icons/automated_workflows.png";
import iconWorkWayWant from "@/assets/products/precast/icons/work_way_want.png";
import iconSaveTime from "@/assets/products/precast/icons/save_time_1_click_reinforcement.png";
import iconPowerfulModeling from "@/assets/products/precast/icons/powerful_modeling.png";
import iconBim2Field from "@/assets/products/precast/icons/bim2field.png";
import iconProductionData from "@/assets/products/precast/icons/accurate_production_data.png";
import spAutoDesign from "@/assets/products/precast/features/structural-precast/automated-precast-design.jpg";
import spShopDrawings from "@/assets/products/precast/features/structural-precast/automated-shop-drawings.jpg";
import spEasyImport from "@/assets/products/precast/features/structural-precast/easy-import-bim-models.jpg";
import spParamOrFree from "@/assets/products/precast/features/structural-precast/parametric-or-free-modeling.jpg";
import spAutomatedFab from "@/assets/products/precast/features/structural-precast/highly-automated-fabrication.jpg";
import wallsAutomatedDesign from "@/assets/products/precast/features/precast-walls/highly-automated-wall-division.jpg";
import wallsAutomatedDivision from "@/assets/products/precast/features/precast-walls/automated-wall-division.jpg";
import wallsPlantSpecificRebar from "@/assets/products/precast/features/precast-walls/plant-specific-reinforcement-walls.jpg";
import wallsFixturesEasy from "@/assets/products/precast/features/precast-walls/fixtures-made-easy.jpg";
import slabsAutomatedDesign from "@/assets/products/precast/features/precast-slabs/highly-automated-slab-design.jpg";
import slabsAutomatedDivision from "@/assets/products/precast/features/precast-slabs/automated-slab-division.jpg";
import slabsPlantSpecificRebar from "@/assets/products/precast/features/precast-slabs/plant-specific-reinforcement-slabs.jpg";
import slabsFixturesMadeEasy from "@/assets/products/precast/features/precast-slabs/fixtures-made-easy.jpg";
import slabsReliableProduction from "@/assets/products/precast/features/precast-slabs/reliable-production-data.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import heroImage from "@/assets/solutions/precast-hero.jpg";
export default function ClientPage() {
  const postHeroTitle = "ALLPLAN PRECAST NEDİR?";
  const postHeroParagraphs = [
    "Allplan Bridge, köprü mühendisleri için güçlü bir parametrik BIM çözümüdür; ön germe tendonları dahil son derece ayrıntılı model oluşturma aşamasından, inşa sürecinin entegrasyonu, yönetmelik tabanlı yapısal analiz ve çizim üretimine kadar tüm köprü tasarım fazlarını tek bir çözümde birleştirir.",
    "> Etkileyici 3B tekliften, üretim verileri doğru şekilde üretilmiş hassas 3B prekast modele.",
    "> Maksimum üretkenliği sağlayan otomatik iş akışları.",
    "> Güvenilir veri ve en yüksek hassasiyeti garanti eden akıllı kalite güvencesi.",
  ];
  const postHeroVideoUrl = "https://www.youtube.com/embed/AaFWnMNTgVs";
  const benefitItems = [
    { title: "ÜRETİM PAFTALARINI OTOMATİK OLUŞTURUN", description: "Donatı, fikstür ve ölçülendirme dahil üretim paftalarını verimli ve yüksek düzeyde otomatik şekilde oluşturun.", image: iconAutomatedWorkflows },
    { title: "KENDİ ÇALIŞMA YÖNTEMİNİZİ SEÇİN", description: "Plan ve model her zaman tutarlı olduğundan 2B veya 3B'de rahatça çalışın.", image: iconWorkWayWant },
    { title: "TEK TIK DONATI İLE ZAMANDAN TASARRUF EDİN", description: "Tüm duvar ve döşeme tipleri için temel donatıyı tamamen otomatik olarak oluşturmanın avantajlarından yararlanın.", image: iconSaveTime },
    { title: "PARAMETRİK VEYA SERBEST MODELLEME", description: "Parametrik girdi ile yapısal prekast elemanları son derece verimli şekilde oluşturun veya benzersiz prekast elemanları tamamen serbestçe modelleyin.", image: iconPowerfulModeling },
    { title: "BIM MODELLERİNİ KOLAYCA İÇE AKTARIN", description: "Mimari modelleri ve MEP objelerini kolayca içe aktarın ve prekast tasarım için rahatlıkla yeniden kullanın.", image: iconBim2Field },
    { title: "ÜRETİM VERİLERİNİ HASSAS ŞEKİLDE ÜRETİN", description: "Tek tuşla güvenilir üretim verileri oluşturun.", image: iconProductionData },
  ];
  const challengeItems = [
    "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri.",
    "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri.",
    "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri.",
  ];
  const statsItems = [
    { value: 52, suffix: "%", label: "DAHA FAZLA ÜRETKENLİK", description: "Yüksek düzeyde otomatik iş akışları ile verimliliği artırın." },
    { value: 60, suffix: "%", label: "DAHA YÜKSEK KALİTE", description: "Doğrulama kuralları ve güvenlik kontrolleriyle tasarımdaki hata oranını en aza indirin." },
    { value: 75, suffix: "%", label: "DAHA HIZLI MEP TASARIMI", description: "Köprü tiplerine uyarlanmış modelleme teknikleri ve iş akışlarıyla (ör. prekast kirişli köprüler) daha hassas modelleme." },
    { value: 50, suffix: "%", label: "DAHA FAZLA PERFORMANS", description: "İçe aktarılan IFC objelerini doğrudan akıllı prekast elemanlara dönüştürün." },
  ];
  const workflowCategories = [
    {
      key: "structural-precast",
      label: "Structural Precast Elements",
      items: [
        { title: "Otomatik Prefabrik Tasarım", description: "Her türlü karmaşıklık ve geometrideki yapısal prefabrik elemanları hızlı ve kolay bir şekilde tasarlayın ve detaylandırın.", image: spAutoDesign },
        { title: "Otomatik Üretim Paftaları", description: "Donatı, fikstür ve ölçülendirme dahil olmak üzere yüksek düzeyde otomatikleştirilmiş üretim paftalarını hızlı bir şekilde oluşturun.", image: spShopDrawings },
        { title: "BIM Modellerinin Kolay İçe Aktarılması", description: "Mimari modellerin yanı sıra MEP objelerini de hızla içe aktarın ve bunları prefabrik tasarımınız için yeniden kullanın.", image: spEasyImport },
        { title: "Parametrik veya Serbest Modelleme", description: "Prefabrik elemanları parametrik girdiyle oluşturun veya bunları tamamen özgürce modelleyin.", image: spParamOrFree },
        { title: "Yüksek Düzeyde Otomatik Üretime Yönelik Araçlar", description: "Özel Allplan Prekast çözümümüz, duvarların ve döşemelerin yüksek düzeyde otomatik tasarım ve detaylandırılmasını sağlar.", image: spAutomatedFab },
      ],
    },
    {
      key: "precast-walls",
      label: "Precast Walls",
      items: [
        { title: "Yüksek Düzeyde Otomatik Duvar Tasarımı", description: "Katı, çift, sandviç, tuğla ve termal duvarları her zamankinden daha hızlı ve daha doğru bir şekilde modelleyin.", image: wallsAutomatedDesign },
        { title: "Otomatik Duvar Bölmeleri", description: "Allplan Prefabrik Duvarlar, bireysel üretim tesislerinize göre duvarları akıllıca üretilebilir ve teslim edilebilir duvar elemanlarına ayırır.", image: wallsAutomatedDivision },
        { title: "Üreticiye Özel Donatı", description: "Allplan Prefabrik Duvarlar, özel üretim yeteneklerinize mükemmel şekilde uyum sağlayan donatı verilerini otomatik olarak üretir.", image: wallsPlantSpecificRebar },
        { title: "Fikstürler Kolaylaştı", description: "Stok durumuna ve ağırlığa bağlı olarak eğimli destekler için kaldırma ankrajları veya manşonlar gibi fikstürleri otomatik olarak hesaplayın.", image: wallsFixturesEasy },
        { title: "Güvenilir Üretim Verileri", description: "Güvenilir ve doğru üretim verileri elde edin.", image: wallsFixturesEasy },
      ],
    },
    {
      key: "precast-slabs",
      label: "Precast Slabs",
      items: [
        { title: "Döşeme Tasarımı", description: "Allplan Prekast Döşemeler, eleman döşemeleri, masif döşemeler ve boşluklu döşemeler tasarlarken büyük miktarda zaman tasarrufu yapmanızı sağlar.", image: slabsAutomatedDesign },
        { title: "Otomatik Döşeme Bölmeleri", description: "Allplan Prefabrik Döşemeler, bireysel üretim tesislerinize göre döşemeleri akıllı bir şekilde üretilebilir ve teslim edilebilir döşeme elemanlarına ayırır.", image: slabsAutomatedDivision },
        { title: "Üretime Özel Donatı", description: "Allplan Prefabrik Döşemeler, özel üretim yeteneklerinize mükemmel şekilde uyum sağlayan donatı verilerini otomatik olarak üretir.", image: slabsPlantSpecificRebar },
        { title: "Fikstürler Kolaylaştı", description: "Fikstürler, stok durumuna ve ağırlığa bağlı olarak otomatik hesaplanır.", image: slabsFixturesMadeEasy },
        { title: "Güvenilir Üretim Verileri", description: "Güvenilir ve doğru üretim verileri elde edin.", image: slabsReliableProduction },
      ],
    },
  ];
  const resources = [
    { image: resInfographic, title: "Infographic", subtitle: "Prefabrik iş akışı", buttonText: "İndir", href: "#" },
    { image: resWhitepaper, title: "Whitepaper", subtitle: "Uygulama rehberi", buttonText: "İndir", href: "#" },
    { image: resChecklist, title: "Checklist", subtitle: "Kontrol listesi", buttonText: "İndir", href: "#" },
  ];
  return (
    <ProductPageTemplate
      badge="İNŞAAT PLANLAMASI"
      title="ALLPLAN PRECAST – Prefabrik Elemanlar"
      description="Prefabrik duvar ve döşeme elemanları için otomatik tasarım, detaylandırma ve üretim verisi oluşturma"
      heroImage={heroImage}
      features={[
        "Otomatik üretim paftaları",
        "Tek tık donatı",
        "Parametrik modelleme",
        "BIM import ve yeniden kullanım",
      ]}
      packages={[
        { name: "Precast Walls", price: "Teklif alın", description: "Duvar elemanları", features: ["Duvar tasarımı", "Bölme", "Donatı", "Üretim verisi"] },
        { name: "Precast Slabs", price: "Teklif alın", description: "Döşeme elemanları", features: ["Döşeme tasarımı", "Bölme", "Donatı", "Üretim verisi"], highlighted: true },
      ]}
      ctaTitle="ALLPLAN PRECAST'i Deneyin"
      ctaDescription="Prefabrik elemanlar için tam çözüm"
    >
      <PostHeroSection title={postHeroTitle} paragraphs={postHeroParagraphs} videoUrl={postHeroVideoUrl} />
      <ChallengesSection id="precast-challenges" items={challengeItems} />
      <StatsTemplate title="Sonuçlar" items={statsItems} />
      <WorkflowTabsTemplate categories={workflowCategories} />
      <BenefitsGrid items={benefitItems} />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
            <AlertCircle className="text-accent w-6 h-6 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display text-xl font-bold text-foreground mb-2">Not</h4>
              <p className="text-muted-foreground">Donatı modülü için ek lisans gerekebilir. Detaylar için satış ekibiyle iletişime geçin.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceCardGrid items={resources} />
        </div>
      </section>
    </ProductPageTemplate>
  );
}
