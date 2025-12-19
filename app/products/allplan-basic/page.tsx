"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Check } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import ReasonsSection from "@/components/ReasonsSection";

import interfacesImg from "@/assets/products/allplan-basic/interfaces.jpg";
import clashDetectionImg from "@/assets/products/allplan-basic/clash-detection.jpg";
import layoutingImg from "@/assets/products/allplan-basic/layouting.png";
import projectTeamworkImg from "@/assets/products/allplan-basic/project-teamwork.jpg";
import planDistributionImg from "@/assets/products/allplan-basic/plan-distribution.jpg";
import analyticalModelImg from "@/assets/products/allplan-basic/analytical-model.jpg";
import workgroupManagerImg from "@/assets/products/allplan-basic/workgroup-manager.jpg";
import cloudResourcesImg from "@/assets/products/allplan-basic/cloud-resources.jpg";
import modelViewerImg from "@/assets/products/allplan-basic/model-viewer.jpg";
import licenseServerImg from "@/assets/products/allplan-basic/license-server.jpg";
import bimplusProPurchaseImg from "@/assets/products/allplan-basic/bimplus-pro-purchase.jpg";
import cloudStorageImg from "@/assets/products/allplan-basic/cloud-storage.jpg";

import workWayWantIcon from "@/assets/products/allplan-basic/benefits/work-way-want.png";
import powerfulModelingIcon from "@/assets/products/allplan-basic/benefits/powerful-modeling.png";
import productiveCollabIcon from "@/assets/products/allplan-basic/benefits/productive-collab.png";

interface FeatureItem {
  title: string;
  description: string;
  image?: string | StaticImageData;
  youtubeId?: string;
}

const benefits = [
  { title: "İstediğiniz Gibi Çalışın", description: "2D, 2.5D ve 3D'de esnek iş akışları.", icon: workWayWantIcon },
  { title: "Güçlü & Sezgisel Modelleme", description: "Herhangi bir şekli kolayca modellemek için tam özgürlük.", icon: powerfulModelingIcon },
  { title: "Verimli İş Birliği", description: "Bulut tabanlı iş birliği ve plan dağıtımı için entegre hizmetler.", icon: productiveCollabIcon },
];

const coreFeatures: FeatureItem[] = [
  { title: "Arayüzler", description: "IFC, BCF, PDF, RVT, 3DM, SKP, OBJ, LandXML, DWG, DGN, C4D, STL, WRL, SAF ve daha fazlası.", image: interfacesImg },
  { title: "3D Modelleme", description: "Siemens Parasolid çekirdeğiyle yüksek performanslı 3D modelleme.", youtubeId: "kxDkWW01hRY" },
  { title: "2D Çizim", description: "Hassas 2D çizim için kapsamlı işlevsellik.", youtubeId: "_b6Z-1U8Ri4" },
  { title: "Görselleştirme", description: "Gerçek zamanlı Render, CineWare ve Lumion/Twinmotion canlı bağlantılar.", youtubeId: "IqNuiMaveas" },
  { title: "Çarpışma Tespiti", description: "Yumuşak ve sert çakışmalar için araçlar.", image: clashDetectionImg },
  { title: "Düzenleme", description: "Güçlü düzenleme araçları ile profesyonel plan üretimi.", image: layoutingImg },
];

const cloudServices: FeatureItem[] = [
  { title: "Bulut Tabanlı İşbirliği", description: "Bimplus Pro, bulut tabanlı BIM işbirliği platformu.", youtubeId: "7xzpEhLQhEI" },
  { title: "Proje Takım Çalışması", description: "ALLPLAN Share ile ekip çalışması.", image: projectTeamworkImg },
  { title: "Çizim ve Plan Dağıtımı", description: "ALLPLAN Exchange ile plan dağıtımı ve otomatik bildirimler.", image: planDistributionImg },
  { title: "Analitik Model Üretimi", description: "AutoConverter ile yapısal analize hazır modeller.", image: analyticalModelImg },
  { title: "Tasarım Kontrolü", description: "Solibri Inside ile model kontrolleri.", youtubeId: "t4axrE0TWO4" },
  { title: "Ofis Ekip Çalışması", description: "Çalışma Grubu Yöneticisi ile verimli ekip çalışması.", image: workgroupManagerImg },
  { title: "Bulut Destekli Proje Kaynakları", description: "Tamamen bulut tabanlı kaynak dağıtımı.", image: cloudResourcesImg },
  { title: "ALLPLAN Model Viewer", description: "IFC ve dosya önizlemeleri.", image: modelViewerImg },
  { title: "Bluebeam Bağlantısı", description: "Dijital teslim süreçleri için entegrasyon.", youtubeId: "u4GZUL7WdQU" },
];

const purchaseOptions: FeatureItem[] = [
  { title: "Lisans Server", description: "Lisansların çok kullanıcıyla optimal kullanımı.", image: licenseServerImg },
  { title: "BIMPLUS Pro", description: "Ek Bimplus Pro lisansları.", image: bimplusProPurchaseImg },
  { title: "ALLPLAN Bulut Depolama", description: "Ek depolama alanı.", image: cloudStorageImg },
];

const FeatureCard = ({ feature }: { feature: FeatureItem }) => (
  <Card className="relative group hover:shadow-technical transition-all duration-500 border border-white/10 hover:border-white/20 bg-graphite-950 overflow-hidden">
    <div className="pointer-events-none absolute top-0 left-0 h-px w-0 group-hover:w-full bg-accent/60 transition-all duration-500" />
    <div className="aspect-video overflow-hidden relative">
      {feature.youtubeId ? (
        <VideoModal youtubeId={feature.youtubeId!} title={feature.title} className="w-full h-full" />
      ) : (
        <Image src={feature.image!} alt={feature.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
      )}
    </div>
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
      <p className="text-white/80 text-sm">{feature.description}</p>
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
    <div className="dark min-h-screen bg-graphite-950">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-[0.02] bg-technical-grid" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ ALLPLAN BASIC</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Tasarım, Görüntüleme ve İş Birliği için Temel Çözüm</h1>
          </div>
        </div>
      </section>

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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ALLPLAN Bulut Hizmetleri</h2>
            <p className="text-xl text-muted-foreground">Bulut Tabanlı İşbirliği</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudServices.map((service, index) => (
              <FeatureCard key={index} feature={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">İşbirliğinizi bir üst seviyeye taşıyan araçlara anında erişim imkanı sağlayın.</p>
            <Button asChild>
              <Link href="/solutions/bimplus">ALLPLAN Bulut Hizmetleri</Link>
            </Button>
          </div>
        </div>
      </section>

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
