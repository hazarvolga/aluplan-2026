"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import PostHeroSection from "@/components/PostHeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import StatsSection from "@/components/StatsSection";
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
import iconCoordinateProjectData from "@/assets/products/bimplus/benefits/coordinate-project-data.png";
import iconManageInformation from "@/assets/products/bimplus/benefits/manage-information.png";
import iconChangeManagement from "@/assets/products/bimplus/benefits/change-management.png";
import iconOrganizeProjects from "@/assets/products/bimplus/benefits/organize-projects.png";
import iconCommunicate from "@/assets/products/bimplus/benefits/communicate.png";
import iconProductiveCollab from "@/assets/products/bimplus/benefits/productive-collab.png";

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
    { label: "100% Koordine ve Tutarlı", value: 100, description: "Disiplin ve yazılım ne olursa olsun, koordine edilmiş ve tutarlı model bazlı veri yaklaşımı kullanarak iş ortaklarıyla daha üretken ve etkili çalışın." },
    { label: "100% Güncel", value: 100, description: "Tüm veriler tek platformda entegre, merkezi ve koordine edilir - tüm paydaşlara her aşamada erişim ve güncel durum sağlayan tekil doğru kaynak." },
    { label: "100% Şeffaf ve Etkili", value: 100, description: "Güçlü görselleştirme araçları, sorun yönetimi ve görev takibi ile etkili ve şeffaf değişiklik süreçleri ve revizyon kontrolü sağlar." },
  ];
  const benefitsItems = [
    { title: "Proje Verilerini\nKoordine Edin", description: "Modelleri tarafsız ortamda merkezi olarak toplayın ve güçlü görüntüleyicide görselleştirin. Nitelik verilerini atayın ve çakışma kontrolü yapın. Koordine edilmemiş bilgilerden kaynaklanan hataları önleyin.", image: iconCoordinateProjectData },
    { title: "Bilgi\nYönetimi", description: "Birden fazla kaynaktan ve formattan daha fazla bilgiyi daha kısa sürede yönetin, erişin ve paylaşın. Doküman ve model geçmişi ile anlık durum erişilebilirliği.", image: iconManageInformation },
    { title: "Değişiklik\nYönetimi", description: "Herhangi bir modelin herhangi bir revizyonunu görselleştirin ve aynı modelin revizyonlarını karşılaştırın. Daha erken bilinçli kararlar alın, risk, hata ve çoklu revizyonların etkisini azaltın.", image: iconChangeManagement },
    { title: "Proje\nOrganizasyonu", description: "BIM projelerini tasarımdan inşaata tüm yaşam döngüsü boyunca verimli şekilde izleyin ve yönetin. Tüm alt modeller üzerinde tam kontrol sağlayın ve açık/kapalı görevleri takip edin.", image: iconOrganizeProjects },
    { title: "Kolay\nİletişim", description: "Tasarım aşamalarında uyumsuzlukları veya çakışmaları görsel olarak kolayca iletin ve tespit edin. Tasarım amacını inşaata aktarın.", image: iconCommunicate },
    { title: "Bulut Tabanlı\nVeri", description: "Proje verilerine her yerden, her zaman ve her cihazdan erişin ve güncelleyin. Tüm proje aşamalarında ekipleri, iş ortaklarını, tedarikçileri ve yüklenicileri bağlayın.", image: iconProductiveCollab },
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
    "BIMPLUS, inşaat projelerinde yer alan tüm disiplinler için açık BIM model bazlı veri ve proje işbirliği platformudur. Bulut teknolojisini kullanarak, tasarımdan inşaata, operasyona kadar tüm proje yaşam döngüsü boyunca birden fazla paydaşı bağlar, faaliyetleri koordine eder ve proje bilgilerini kontrol eder.",
    "Proje verilerine her yerden, her zaman erişin, tüm bilgi ihtiyaçlarınızı doğru kişilere verimli bir şekilde iletin ve proje ortaklarıyla gerçek zamanlı işbirliği yapın.",
    "Herhangi bir inşaat sektörü yazılımından proje verilerini kolayca dahil edin, birleştirin, koordine edin, inceleyin ve merkezi bir modelde etkili bir şekilde yönetin.",
    "Tüm aşamalarda BIM tabanlı projeleri yönetin ve kontrol edin, etkili sorun yönetimi ve güçlü görselleştirme araçlarını kullanarak revizyonları ve görevleri kolayca takip edin.",
  ];
  const challengeItems = [
    "Farklı taraflardan gelen farklı veri kaynakları ve formatlarından kaynaklanan tutarsız tasarım verileri.",
    "Tutarsızlıklara yol açan ve artan risklere neden olan çok sayıda zaman alan değişiklik.",
    "Hatalara, düşük kaliteye ve artan maliyetlere yol açan koordine edilmemiş bilgiler.",
  ];
  return (
    <ProductPageTemplate
      badge="İŞBİRLİĞİ"
      title="BIMPLUS projenizi işbirliği için paylaşın, koordine edin ve yönetin"
      description="Açık BIM’e dayalı bulut işbirliği: model veri koordinasyonu, değişiklik yönetimi ve merkezi bilgi kontrolü ile tüm disiplinleri bir araya getirin."
      heroImage={heroImage}
      benefitsItems={benefitsItems}
      tabFeatures={{ title: "Bimplus'ın Özellikleri", tabs: [] }}
      workflowCategories={workflowCategories}
      quickActions={[
        { text: "Kayıt Ol", href: "https://connect.allplan.com/en/bimplus-freemium.html", external: true, variant: "default" },
        { text: "Müşteri Girişi", href: "https://portal.bimplus.net/#/auth", external: true, variant: "default" },
      ]}
      ctaTitle="Bimplus'ı Ücretsiz Deneyin"
      ctaDescription="Bulut tabanlı BIM işbirliği ile projelerinizi koordine edin"
    >
      <PostHeroSection title={postHeroTitle} paragraphs={postHeroParagraphs} videoUrl={"https://www.youtube.com/embed/DTSdM7tSBlU"} />
      <StatsSection items={statsItems} variant="animated" />
      <ChallengesSection id="bimplus-challenges" items={challengeItems} />
    </ProductPageTemplate>
  );
}
