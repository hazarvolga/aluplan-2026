"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import ReasonsSection from "@/components/ReasonsSection";
import heroImage from "@/assets/solutions/steel-hero.jpg";
import {
  Home,
  PlayCircle,
  Rocket,
  KeyRound,
  Lightbulb,
  Cuboid,
  AlignStartVertical,
  Download,
  ArrowRightLeft
} from "lucide-react";

export default function ClientPage() {
  const features = [
    "Hepsi bir arada çelik detaylandırma",
    "Otomatik bağlantı tasarımı",
    "İmalat çizimleri oluşturma",
    "CNC makine entegrasyonu",
    "Gerçek zamanlı çoklu kullanıcı",
    "BIM model entegrasyonu",
    "Malzeme optimizasyonu",
    "Montaj diyagramları",
    "Kaynak detayları",
    "Uluslararası standartlar",
  ];
  const packages = [
    { name: "SDS2 Detailer", price: "Teklif alın", description: "Detaylandırma odaklı", features: ["Çelik modelleme", "Bağlantı tasarımı", "İmalat çizimleri", "Temel raporlar"] },
    { name: "SDS2 Professional", price: "Teklif alın", description: "Tam çözüm", features: ["Tüm Detailer özellikleri", "CNC entegrasyonu", "BIM iş akışı", "Çoklu kullanıcı"], highlighted: true },
    { name: "SDS2 Enterprise", price: "Teklif alın", description: "Kurumsal", features: ["Tüm Professional", "Sınırsız lisans", "API erişimi", "Premium destek"] },
  ];
  const benefitCategories = [
    {
      title: "/ MODELING",
      items: [
        "3D Review and Markup",
        "Design and Engineering Calculations",
        "3D Model Input",
        "Automated connection design",
      ],
    },
    {
      title: "/ PLANNING",
      items: [
        "Crane placement coordination",
        "Model coordination and visualization",
        "Material takeoffs",
        "Load and delivery planning",
      ],
    },
    {
      title: "/ INTEROPERABILITY",
      items: ["Import reference drawings and models", "SDS2 Toolbox"],
    },
    {
      title: "/ DELIVERABLES",
      items: [
        "View drawings",
        "Report Generation",
        "MRP/CNC Integrations",
        "Shop drawing creation",
        "Erection drawing creation",
      ],
    },
    {
      title: "/ ADD-ONS",
      items: ["Bimplus by ALLPLAN-"],
    },
  ];
  const reasonsItems = [
    {
      title: "SDS2 Anasayfa",
      description: "",
      icon: <Home className="w-6 h-6" />,
      href: "https://sds2.com/",
      external: true
    },
    {
      title: "Video Tutorial",
      description: "",
      icon: <PlayCircle className="w-6 h-6" />,
      href: "https://techsupport.sds2.com/main/video-library.htm",
      external: true
    },
    {
      title: "Getting Started",
      description: "",
      icon: <Rocket className="w-6 h-6" />,
      href: "https://techsupport.sds2.com/main/getting-started.htm",
      external: true
    },
    {
      title: "Lisanslama",
      description: "",
      icon: <KeyRound className="w-6 h-6" />,
      href: "https://techsupport.sds2.com/main/Video-Library/licensing.htm",
      external: true
    },
    {
      title: "Tip and Tricks",
      description: "",
      icon: <Lightbulb className="w-6 h-6" />,
      href: "https://go.sds2.com/webinar/recorded/sds2-masterclass-expert-tips-and-tricks-for-advanced-users",
      external: true
    },
    {
      title: "Çelik Profil Eklentisi",
      description: "",
      icon: <Cuboid className="w-6 h-6" />,
      href: "https://sds2.com/sds2-toolbox-details/allplan-profile-catalog/",
      external: true
    },
    {
      title: "Aligment Tools",
      description: "",
      icon: <AlignStartVertical className="w-6 h-6" />,
      href: "https://sds2.com/sds2-toolbox-details/model-alignment-tools/",
      external: true
    },
    {
      title: "Download Center",
      description: "",
      icon: <Download className="w-6 h-6" />,
      href: "https://techsupport.sds2.com/main/download-center.htm",
      external: true
    },
    {
      title: "Data Exchange",
      description: "",
      icon: <ArrowRightLeft className="w-6 h-6" />,
      href: "https://aluplan.com.tr/wp-content/uploads/Data_exchange_formats_Allplan_2025_EN_GmbH.pdf",
      external: true
    },
  ];

  return (
    <ProductPageTemplate
      badge="/ SDS2 ULTIMATE"
      title="Sizin İçin Tasarlanmış Detaylandırma Yazılımı"
      description="Detaylandırma sürecinizi bir üst seviyeye taşıyın. SDS2 Ultimate ile bağlantı otomasyonu, CNC entegrasyonu ve güçlü 3D modelleme gibi sınıfının en iyisi özelliklere sahip olun — böylece her gün sahada çalışan detaylandırıcılar daha hızlı, daha akıllı ve daha doğru sonuçlar elde eder."
      heroImage={heroImage}
      ctaTitle="Ücretsiz Dene"
      ctaDescription="Çelik detaylandırma ve imalat için tek çözüm"
      ctaHref="https://www.allplan.com/trial-or-subscription/"
      ctaExternal={true}
      showDemoButton={false}
      additionalButtons={[
        { text: "Teklif Talep Formu", href: "https://forms.office.com/r/hXhnKAG912", external: true },
        { text: "Abonelik SSS", href: "/solutions-v2/faq", external: false },
      ]}
      whatIsInfoMedia={{
        title: "/ SDS2 ULTIMATE",
        subtitle: "SDS2 ULTIMATE NEDİR?",
        description:
          "SDS2 Ultimate, ister küçük bir atölyede ister büyük bir firmada çalışın, günlük projelerinde hassasiyet ve verimlilik arayan detaylandırıcılar için geliştirilen, sektör lideri çelik detaylandırma yazılımıdır. Otomatik bağlantı tasarımı, kapsamlı 3D modelleme ve BIM ile CNC sistemleriyle sorunsuz entegrasyon gibi gelişmiş özelliklerle, detaylandırıcıların iş akışlarını optimize etmelerini, maliyetli hataları azaltmalarını ve üretime hazır, doğru çizimler sunmalarını sağlar.",
        videoUrl: "https://www.youtube.com/embed/oKqf6wjm9tg",
      }}
      quickActions={[
        { text: "SDS2 Ultimate'ın Faydaları Detaylı İncele", href: "https://sds2.com/sds2-ultimate/", external: true, variant: "outline" }
      ]}
      afterInfoChildren={
        <>
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Fonksiyonellik Hızlı Bakış</h2>
                <p className="text-xl text-muted-foreground">SDS2 Ultimate yetenekleri kategorilere göre özet</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {benefitCategories.map((cat, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-xl shadow-sm p-6">
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-4">{cat.title}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((it, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <span className="text-accent mr-2">•</span>
                          <span className="text-sm md:text-base">{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">SDS2 Hızlı Erişim</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {reasonsItems.slice(0, 7).map((item, index) => (
                  <Button key={index} variant="outline" size="lg" asChild>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
