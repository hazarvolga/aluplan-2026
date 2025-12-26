"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import PostHeroSection from "@/components/PostHeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import SectionHeader from "@/components/SectionHeader";
import heroImage from "@/assets/products/bimplus-hero.jpg";
import imgDisciplineGroups from "@/assets/products/bimplus/workflows/discipline-groups.png";
import imgMultipleModels from "@/assets/products/bimplus/workflows/multiple-models.png";
import imgBimExplorer from "@/assets/products/bimplus/workflows/bim-explorer.png";
import imgClashReporting from "@/assets/products/bimplus/workflows/clash-reporting.png";
import imgScheduleSimulation from "@/assets/products/bimplus/workflows/schedule-simulation.png";
import imgUploadModels from "@/assets/products/bimplus/workflows/upload-models.png";
import imgDocumentControl from "@/assets/products/bimplus/workflows/document-control.png";
import imgAutomaticRevisioning from "@/assets/products/bimplus/workflows/automatic-revisioning.png";
import imgIssueManagement from "@/assets/products/bimplus/workflows/issue-management.png";
import imgCreateTasks from "@/assets/products/bimplus/workflows/create-tasks.png";
import imgCreateSlideshows from "@/assets/products/bimplus/workflows/create-slideshows.png";
import imgExcelIntegration from "@/assets/products/bimplus/workflows/excel-integration.png";

export default function ClientPage() {
  const features = [
    "Open BIM proje işbirliği",
    "Veritabanı odaklı",
    "Modelleri gerçek zamanlı olarak birleştirin, koordine edin ve analiz edin",
    "Optimum erişilebilirlik için bulut tabanlı",
    "Her zaman her yerden erişim",
  ];
  const packages = [
    { name: "Bimplus Starter", price: "Ücretsiz", description: "Küçük projeler için", features: ["5 GB depolama", "3 kullanıcı", "Model görüntüleme", "Temel işbirliği"] },
    { name: "Bimplus Professional", price: "Teklif alın", description: "Profesyonel ekipler için", features: ["100 GB depolama", "Sınırsız kullanıcı", "Çakışma kontrolü", "BCF desteği"], highlighted: true },
    { name: "Bimplus Enterprise", price: "Özel fiyat", description: "Kurumsal çözüm", features: ["Özel depolama", "SSO entegrasyonu", "API erişimi", "Premium destek"] },
  ];
  const statsItems = [
    { label: "100% Coordinated and Consistent", value: 100, description: "Work with partners, whatever their discipline and software tool, more productively and effectively using a coordinated and consistent model data-based approach." },
    { label: "100% Up To Date", value: 100, description: "All data is integrated, centralized, and coordinated on one platform – a single source of truth giving access and up to date status to all stakeholders at any stage." },
    { label: "100% Transparent and Effective", value: 100, description: "Powerful visualization tools, issue management and task tracking enable effective and transparent change processes and revision control." },
  ];
  const benefitsItems = [
    { title: "Coordinate\nProject Data", description: "Centrally aggregate models in a neutral environment and visualize in a powerful viewer. Assign attribute data and run clash checks. Avoid uncoordinated information leading to errors." },
    { title: "Manage\nInformation", description: "Manage, access, and exchange more information in shorter timeframes, from multiple sources in multiple formats. Instant status availability, together with documents and models history." },
    { title: "Change\nManagement", description: "Visualize any revision of any model and compare revisions of the same model. Make informed decisions sooner, reduce risk, errors, and the impact of multiple revisions and change." },
    { title: "Organize\nProjects", description: "Monitor and manage BIM projects efficiently over entire design to build lifecycles. Maintain full control over all sub-models and track all open and closed tasks." },
    { title: "Easy\nCommunication", description: "Visually communicate and establish discrepancies or collisions easily in design stages. Convey design intent into construction." },
    { title: "Cloud-based\nData", description: "Conveniently access and update project data anywhere, at any time and on any device. Connect teams, partners, suppliers and contractors across all project stages." },
  ];
  const workflowCategories = [
    {
      key: "project-management", label: "Proje Yönetimi", items: [
        { title: "Disiplin Grupları Oluşturun", description: "Projelerinizi bulut tabanlı çalışma alanında mantıksal olarak düzenleyin, katılımcıları seçin, hak ve roller atayın ve projenize davet edin.", image: imgDisciplineGroups },
        { title: "Birden Fazla Modeli Yönetin", description: "Farklı disiplinlerden modelleri koordine edin, görüntüleyin ve yönetin, tam şeffaflık sağlayın.", image: imgMultipleModels },
      ]
    },
    {
      key: "coordination", label: "Koordinasyon", items: [
        { title: "BIM Gezgini", description: "Farklı inşaat ürünlerinden modelleri tarafsız bir ortamda toplayın ve güçlü bir görüntüleyicide görselleştirin.", image: imgBimExplorer },
        { title: "Çakışma Raporlama", description: "Çakışma kontrolleri yapmak için modelleri kullanarak nitelikler ve diğer nesne bilgilerini atayın.", image: imgClashReporting },
        { title: "Program Simülasyonu", description: "Nesne bilgilerine dayalı simülasyonlar çalıştırmak için modelleri kullanın.", image: imgScheduleSimulation },
      ]
    },
    {
      key: "information-management", label: "Bilgi Yönetimi", items: [
        { title: "Modelleri Kolayca Yükleyin", description: "Ortak bir değişim ortamında çeşitli formatlardaki birden fazla kaynaktan bilgileri yönetin.", image: imgUploadModels },
        { title: "Doküman Kontrolü", description: "Dokümanların ve modellerin birden fazla revizyonunu saklayın ve yönetin.", image: imgDocumentControl },
      ]
    },
    {
      key: "change-management", label: "Değişiklik Yönetimi", items: [
        { title: "Otomatik Revizyon", description: "Herhangi bir modelin herhangi bir revizyonunu görselleştirin.", image: imgAutomaticRevisioning },
        { title: "Sorun Yönetimi", description: "Görevleri iletin, değişiklikleri merkezi olarak ve proje ekipleri içinde daha etkili bir şekilde yönetin ve belgeleyin.", image: imgIssueManagement },
      ]
    },
    {
      key: "collaboration", label: "İşbirliği", items: [
        { title: "Görev Oluşturun", description: "BIMPLUS'ta ve/veya yazma araçlarında doğrudan görevler oluşturun, görselleştirin, atayın, görüntüleyin, yönetin ve onaylayın.", image: imgCreateTasks },
        { title: "Slayt Gösterisi Oluşturun", description: "Proje sunumları için slayt gösterileri oluşturun, görevleri yönetmeye yardımcı olmak için slaytlar ekleyin.", image: imgCreateSlideshows },
        { title: "MS Excel'de Model Verileri", description: "BIMPLUS'ı doğrudan MS Excel ile senkronize edin, MS Excel'de düzenleyin ve BIMPLUS'a geri senkronize edin.", image: imgExcelIntegration },
      ]
    },
  ];
  const postHeroTitle = "BIMPLUS Nedir?";
  const postHeroParagraphs = [
    "BIMPLUS, inşaat projelerinde yer alan tüm disiplinler için açık BIM model tabanlı veri ve proje işbirliği platformudur. Bulut teknolojisini kullanarak, tasarımdan inşaata, operasyona kadar tüm proje yaşam döngüleri boyunca birden fazla paydaşı bağlar, faaliyetleri koordine eder ve proje bilgilerini kontrol eder.",
    "Proje verilerine her yerden, her zaman erişin, tüm bilgi ihtiyaçlarınızı doğru kişilere verimli bir şekilde iletin ve proje ortaklarıyla gerçek zamanlı işbirliği yapın.",
    "Herhangi bir inşaat sektörü yazılımından proje verilerini kolayca dahil edin, birleştirin, koordine edin, inceleyin ve merkezi bir modelde etkili bir şekilde yönetin.",
    "Tüm aşamalarda BIM tabanlı projeleri yönetin ve kontrol edin, etkili sorun yönetimi ve güçlü görselleştirme araçlarını kullanarak revizyonları ve görevleri kolayca takip edin.",
  ];
  const challengeItems = [
    "Farklı taraflardan gelen farklı veri kaynaklarından ve formatlarından tutarsız tasarım verileri.",
    "Tutarsızlıklara yol açan ve artan risklere neden olan çok sayıda zaman alan değişiklik.",
    "Hatalara, düşük kaliteye ve artan maliyetlere yol açan koordine edilmemiş bilgiler.",
  ];
  return (
    <ProductPageTemplate
      badge="İŞBİRLİĞİ"
      title="BIMPLUS projenizi işbirliği için paylaşın, koordine edin ve yönetin"
      description="Açık BIM’e dayalı bulut işbirliği: model veri koordinasyonu, değişiklik yönetimi ve merkezi bilgi kontrolü ile tüm disiplinleri bir araya getirin."
      heroImage={heroImage}
      features={features}
      packages={packages}
      statsItems={statsItems}
      statsVariant="animated"
      workflowCategories={workflowCategories}
      ctaTitle="Bimplus'ı Ücretsiz Deneyin"
      ctaDescription="Bulut tabanlı BIM işbirliği ile projelerinizi koordine edin"
    >
      <PostHeroSection title={postHeroTitle} paragraphs={postHeroParagraphs} videoUrl={"https://www.youtube.com/embed/DTSdM7tSBlU"} />
      <ChallengesSection id="bimplus-challenges" items={challengeItems} />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsItems.map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-4 whitespace-pre-line">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductPageTemplate>
  );
}
