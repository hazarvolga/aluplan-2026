import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Check } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import ReasonsSection from "@/components/ReasonsSection";
import CloudServicesSection from "@/components/CloudServicesSection";
import PostHeroSection from "@/components/PostHeroSection";

// Statik görseller
import heroImg from "@/assets/products/allplan-basic/hero.jpg";
import { WorkflowLinksSection } from "@/components/WorkflowLinksSection";
import interfacesImg from "@/assets/products/allplan-basic/interfaces.jpg";
import clashDetectionImg from "@/assets/products/allplan-basic/clash-detection.jpg";
import layoutingImg from "@/assets/products/allplan-basic/layouting.png";
import licenseServerImg from "@/assets/products/allplan-basic/license-server.jpg";
import bimplusProPurchaseImg from "@/assets/products/allplan-basic/bimplus-pro-purchase.jpg";
import cloudStorageImg from "@/assets/products/allplan-basic/cloud-storage.jpg";

// Video thumbnail görselleri
import modeling3dImg from "@/assets/products/allplan-basic/3d-modeling.jpg";
import drafting2dImg from "@/assets/products/allplan-basic/2d-drafting.jpg";

// Faydalar ikonları
import workWayWantIcon from "@/assets/products/allplan-basic/benefits/work-way-want.png";
import powerfulModelingIcon from "@/assets/products/allplan-basic/benefits/powerful-modeling.png";
import productiveCollabIcon from "@/assets/products/allplan-basic/benefits/productive-collab.png";

interface FeatureItem {
  title: string;
  description: string;
  image?: string | StaticImageData;
  youtubeId?: string;
  thumbnailUrl?: string | StaticImageData;
}

const benefits = [
  { title: "İstediğiniz Gibi Çalışın", description: "2D, 2.5D ve 3D'de esnek iş akışları.", icon: workWayWantIcon },
  { title: "Güçlü & Sezgisel Modelleme", description: "Herhangi bir şekli kolayca modellemek için tam özgürlük.", icon: powerfulModelingIcon },
  { title: "Verimli İş Birliği", description: "Bulut tabanlı iş birliği ve plan dağıtımı için entegre hizmetler.", icon: productiveCollabIcon },
];

const coreFeatures: FeatureItem[] = [
  { title: "Arayüzler", description: "IFC, BCF, PDF, RVT, 3DM, SKP, OBJ, LandXML, DWG, DGN, C4D, STL, WRL, SAF ve daha fazlası.", image: interfacesImg },
  { title: "3D Modelleme", description: "Siemens Parasolid çekirdeğiyle yüksek performanslı 3D modelleme.", youtubeId: "kxDkWW01hRY", thumbnailUrl: modeling3dImg },
  { title: "2D Çizim", description: "Hassas 2D çizim için kapsamlı işlevsellik.", youtubeId: "_b6Z-1U8Ri4", thumbnailUrl: drafting2dImg },
  { title: "Görselleştirme", description: "Gerçek zamanlı Render, CineWare ve Lumion/Twinmotion canlı bağlantılar.", youtubeId: "IqNuiMaveas", thumbnailUrl: modeling3dImg },
  { title: "Çarpışma Tespiti", description: "Yumuşak ve sert çakışmalar için araçlar.", image: clashDetectionImg },
  { title: "Düzenleme", description: "Güçlü düzenleme araçları ile profesyonel plan üretimi.", image: layoutingImg },
];

const purchaseOptions: FeatureItem[] = [
  { title: "Lisans Server", description: "Mevcut lisansların birden fazla kullanıcı tarafından optimal şekilde kullanılmasını sağlar. Ofis dışında lisans kullanımı mümkündür.", image: licenseServerImg },
  { title: "BIMPLUS Pro", description: "Bulut iş birliği kapasitenizi artırmak için ek Bimplus Pro lisansları.", image: bimplusProPurchaseImg },
  { title: "ALLPLAN Bulut Depolama", description: "Projelerinizin kesintisiz devam etmesini sağlamak için ek depolama alanı.", image: cloudStorageImg },
];

const FeatureCard = ({ feature }: { feature: FeatureItem }) => (
  <Card className="relative group hover:shadow-technical transition-all duration-500 border border-border hover:border-accent/50 bg-card overflow-hidden">
    <div className="pointer-events-none absolute top-0 left-0 h-px w-0 group-hover:w-full bg-accent/60 transition-all duration-500" />
    <div className="aspect-video overflow-hidden relative">
      {feature.youtubeId ? (
        <VideoModal
          youtubeId={feature.youtubeId}
          title={feature.title}
          thumbnailUrl={feature.thumbnailUrl}
          className="w-full h-full"
        />
      ) : (
        <Image src={feature.image!} alt={feature.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      )}
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
      <p className="text-muted-foreground text-sm">{feature.description}</p>
    </CardContent>
  </Card>
);

export default function Page() {
  const challenges = [
    "Karmaşık 2D çizimlerin koordinasyonunda zorluklar mı yaşıyorsunuz?",
    "Farklı disiplinler arası veri kaybı ve uyumsuzluk sorunları mı var?",
    "Proje değişikliklerini yönetmekte ve revizyonları takip etmekte zorlanıyor musunuz?",
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Allplan Basic Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 opacity-[0.02] bg-technical-grid" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ ALLPLAN BASIC</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">TASARIM, GÖRÜNTÜLEME VE İŞ BİRLİĞİ İÇİN <span className="text-accent">TEMEL ÇÖZÜM</span></h1>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild><a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">Ücretsiz Dene<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button size="lg" variant="outline" asChild><a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">Teklif Talep Formu</a></Button>
              <Button size="lg" variant="outline" asChild><a href="/solutions-v2/faq"><ExternalLink className="mr-2 h-4 w-4" />Abonelik SSS</a></Button>
            </div>
          </div>
        </div>
      </section>

      <PostHeroSection
        title="ALLPLAN Basic nedir?"
        paragraphs={[
          "• Geniş kapsamlı 2D CAD ve temel 3D fonksiyonları",
          "• Detaylandırma ve teslimat üretim iş akışları",
          "• Temel bulut işlevselliği (Bimplus)"
        ]}
        videoUrl="https://www.youtube.com/embed/SnuaHSL18e8"
      />

      <WorkflowLinksSection
        links={[
          { text: "Sürümleri Görüntüle", href: "/package-overview", external: true, color: "#8B5CF6" },
          { text: "Tasarım için İş Akışları", href: "/solutions/architecture#mimari-is-akislari", external: false, color: "#3B82F6" },
          { text: "İnşaat Mühendisliği için İş Akışları", href: "/solutions/structural#insaat-muhendisligi-is-akislari", external: false, color: "#10B981" },
          { text: "Altyapı Mühendisliği için İş Akışları", href: "/solutions/infrastructure#altyapi-muhendisligi-is-akislari", external: false, color: "#F59E0B" },
        ]}
      />

      <ReasonsSection
        items={benefits.map((b) => ({ title: b.title, description: b.description, image: b.icon }))}
        variant="benefits"
        badgeText="FAYDALAR"
        titleText="ALLPLAN Basic'in Faydaları"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ALLPLAN Basic Özellikleri</h2>
            <p className="text-xl text-muted-foreground">Fonksiyonellik Hızlı Bakış</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <CloudServicesSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Satın Alınabilir Seçenekler</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {purchaseOptions.map((option, index) => (
              <FeatureCard key={index} feature={option} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
