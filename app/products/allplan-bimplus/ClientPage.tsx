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
    { key: "project-management", label: "Project Management", items: [
      { title: "Create Discipline Groups", description: "Organize your projects logically in the cloud-based workspace, choose participants, assign rights and roles and invite to your project.", image: imgDisciplineGroups },
      { title: "Manage Multiple Models", description: "Coordinate, view, and manage models from different disciplines, providing complete transparency.", image: imgMultipleModels },
    ]},
    { key: "coordination", label: "Coordination", items: [
      { title: "BIM Explorer", description: "Aggregate models from different construction products in a neutral environment and visualize in a powerful viewer.", image: imgBimExplorer },
      { title: "Clash reporting", description: "Assign attributes and other object information, using models to run clash checks.", image: imgClashReporting },
      { title: "Schedule Simulation", description: "Use models to run simulations based on object information.", image: imgScheduleSimulation },
    ]},
    { key: "information-management", label: "Information Management", items: [
      { title: "Easily Upload Models", description: "Manage information from multiple sources in various formats in a common exchange environment.", image: imgUploadModels },
      { title: "Document Control", description: "Store and manage multiple revisions of documents and models.", image: imgDocumentControl },
    ]},
    { key: "change-management", label: "Change Management", items: [
      { title: "Automatic Revisioning", description: "Visualize any revision of any model.", image: imgAutomaticRevisioning },
      { title: "Issue Management", description: "Communicate tasks, manage and document changes centrally and more effectively within project teams.", image: imgIssueManagement },
    ]},
    { key: "collaboration", label: "Collaboration", items: [
      { title: "Create Tasks", description: "Create, visualize, assign, view, manage and sign off tasks directly in BIMPLUS and/or in authoring tools.", image: imgCreateTasks },
      { title: "Create Slideshow", description: "Create slide shows for project presentations, add slides to help manage tasks.", image: imgCreateSlideshows },
      { title: "Model Data in MS Excel", description: "Synchronize BIMPLUS directly with MS Excel, edit in MS Excel and synchronize back to BIMPLUS.", image: imgExcelIntegration },
    ]},
  ];
  const postHeroTitle = "What is BIMPLUS?";
  const postHeroParagraphs = [
    "BIMPLUS is the open BIM model-based data and project collaboration platform for all disciplines involved in construction projects. Using cloud technology, across entire project lifecycles from design to build, into operation, connect multiple stakeholders, coordinate activity and control project information.",
    "Access project data anywhere, at any time, efficiently communicate all your information needs to the right people and collaborate with project partners in real time.",
    "Easily incorporate project data from any construction industry software, merge, coordinate, review and manage effectively in a centralized model.",
    "Manage and control BIM based projects across all phases, easily tracking revisions and tasks, using effective issue management and powerful visualization tools.",
  ];
  const challengeItems = [
    "Inconsistent design data from different data sources and formats from different parties involved.",
    "Numerous time-consuming changes leading to inconsistencies and incurring increasing risks.",
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
      benefitsItems={benefitsItems}
      workflowCategories={workflowCategories}
      ctaTitle="Bimplus'ı Ücretsiz Deneyin"
      ctaDescription="Bulut tabanlı BIM işbirliği ile projelerinizi koordine edin"
    >
      <PostHeroSection title={postHeroTitle} paragraphs={postHeroParagraphs} videoUrl={"https://www.youtube.com/embed/DTSdM7tSBlU"} />
      <ChallengesSection id="bimplus-challenges" items={challengeItems} />
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="HOW BIMPLUS BENEFITS YOUR BUSINESS" align="center" compact className="py-0 bg-transparent" />
        </div>
      </section>
    </ProductPageTemplate>
  );
}
