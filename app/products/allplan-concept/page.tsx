"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Check } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import CloudServicesSection from "@/components/CloudServicesSection";

import workWayWantIcon from "@/assets/products/allplan-concept/work-way-want.png";
import powerfulModelingIcon from "@/assets/products/allplan-concept/powerful-modeling.png";
import productiveCollabIcon from "@/assets/products/allplan-concept/productive-collab.png";
import convincingVisualizationsIcon from "@/assets/products/allplan-concept/convincing-visualizations.png";
import reliableCostEstimatesIcon from "@/assets/products/allplan-concept/reliable-cost-estimates.png";
import superiorDeliverablesIcon from "@/assets/products/allplan-concept/superior-deliverables.png";

import licenseServerImg from "@/assets/products/allplan-concept/license-server.jpg";
import bimplusProImg from "@/assets/products/allplan-concept/bimplus-pro.jpg";
import cloudStorageImg from "@/assets/products/allplan-concept/cloud-storage.jpg";
import interfacesRemote from "@/assets/products/allplan-concept/remote/01_interfaces.jpg";
import externalDataSourcesRemote from "@/assets/products/allplan-concept/remote/02_external_data_sources.jpg";
import threeDModelingRemote from "@/assets/products/allplan-concept/remote/03_3d_modeling.jpg";
import twoDDraftingRemote from "@/assets/products/allplan-concept/remote/04_2d_drafting.jpg";
import clashDetectionRemote from "@/assets/products/allplan-concept/remote/06_clash_detection.jpg";
import bimEasyRemote from "@/assets/products/allplan-concept/remote/07_bim_easy.jpg";
import buildingComponentsRemote from "@/assets/products/allplan-concept/remote/08_building_components.jpg";
import terrainModelRemote from "@/assets/products/allplan-concept/remote/09_terrain_model.jpg";
import urbanLandscapeRemote from "@/assets/products/allplan-concept/remote/10_urban_landscape.jpg";
import sewerageUtilitiesRemote from "@/assets/products/allplan-concept/remote/11_sewerage_utilities.jpg";
import quantityTakeoffRemote from "@/assets/products/allplan-concept/remote/12_quantity_takeoff_costing.jpg";
import visualizationRemote from "@/assets/products/allplan-concept/remote/visualization.jpg";

interface FeatureItem {
  title: string;
  description: string;
  image?: string | StaticImageData;
  youtubeId?: string;
}

const benefits = [
  { title: "İstediğiniz Gibi Çalışın", description: "2D, 2.5D ve 3D'de esnek iş akışları.", icon: workWayWantIcon },
  { title: "Güçlü & Sezgisel Modelleme", description: "Herhangi bir formu kolayca modelleme özgürlüğü.", icon: powerfulModelingIcon },
  { title: "Verimli İş Birliği", description: "Bulut tabanlı iş birliği ve plan dağıtımı.", icon: productiveCollabIcon },
  { title: "İkna Edici Görselleştirmeler", description: "Sunumlar için entegre render araçları.", icon: convincingVisualizationsIcon },
  { title: "Güvenilir Erken Maliyet Tahminleri", description: "Erken aşamada hızlı ve doğru metrajlar.", icon: reliableCostEstimatesIcon },
  { title: "Üstün Kalitede Çıktılar", description: "Modelden plan, çizim ve raporları doğru üretin.", icon: superiorDeliverablesIcon },
];

const coreFeatures: FeatureItem[] = [
  { title: "Arayüzler", description: "Veri alışverişinin sorunsuz bir şekilde gerçekleşmesi için tüm ilgili dosya arayüzleri, bunlar arasında IFC, BCF, PDF, RVT, 3DM, SKP, OBJ, LandXML, DWG, DGN, C4D, STL, WRL, SAF ve daha birçok format bulunmaktadır. Yazılım arayüzleri (örn. Python API ve Görsel Script) otomatik iş akışlarını mümkün kılar.", image: interfacesRemote },
  { title: "Dış Veri Kaynakları", description: "GIS bilgilerini, 3D içerikleri ve dokuları içe aktarmak için GIS Bağlayıcı ve İçerik Bağlayıcı.", youtubeId: "LF6p7dQASR8", image: externalDataSourcesRemote },
  { title: "3D Modelleme", description: "En karmaşık ve zor geometriler için bile yüksek performanslı 3D modelleme. Modelleme işlevselliği, Siemens Parasolid modelleme çekirdeği ile desteklenmektedir.", youtubeId: "kxDkWW01hRY", image: threeDModelingRemote },
  { title: "2D Çizim", description: "Çekici, özlü ve detaylı çizimler için hassas 2D çizim için kapsamlı işlevsellik.", youtubeId: "_b6Z-1U8Ri4", image: twoDDraftingRemote },
  { title: "Çarpışma Tespiti", description: "Yumuşak ve sert çarpışmaları tanımlamak için kullanılan araç.", image: clashDetectionRemote },
  { title: "Content Package BIM Easy", description: "Önceden tanımlanmış ancak özelleştirilebilir şirket standartları. Kapsamlı sihirbazlar aracılığıyla modeller ve çizimler oluştururken tutarlı bir çalışma biçimi sağlar. Başlangıcı kolaylaştırır, verimliliği artırır ve özellikle açık BIM projelerinde iyi yapılandırılmış veri alışverişini garanti eder.", youtubeId: "RyUl97kMQ88", image: bimEasyRemote },
  { title: "Yapı Bileşenleri", description: "Duvarlar, döşemeler, kirişler, kolonlar, temeller, merdivenler, çatılar, pencereler, kapılar ve cepheler gibi esnek yapı bileşenleri.", youtubeId: "DX7oODCOgeI", image: buildingComponentsRemote },
  { title: "Arazi Modeli", description: "Anket noktaları veya nokta bulutlarına dayalı güçlü arazi modelleme.", image: terrainModelRemote },
  { title: "Kentsel ve Peyzaj Tasarımı", description: "Kütle modelleri, kentsel ve alan tasarımı ile bitkilendirme planları için fonksiyonlar.", image: urbanLandscapeRemote },
  { title: "Kanalizasyon ve Altyapı", description: "Su, atık su, elektrik, internet, doğalgaz veya merkezi ısıtma gibi hizmetlerin yönlendirilmesi.", image: sewerageUtilitiesRemote },
  { title: "Miktar Hesaplama ve Maliyetlendirme", description: "Modelleme yapılmış ve yapılmamış nesnelerin hassas ve doğrulanabilir miktar hesaplaması ile maliyetlendirilmesi.", youtubeId: "toZosw6NtMQ", image: quantityTakeoffRemote },
  { title: "Görselleştirme", description: "Vulkan gibi en son teknolojilere dayanan geniş bir görselleştirme yetenekleri yelpazesi. Gerçek zamanlı render ve CineWare'ı içerir, ayrıca Lumion ve Twinmotion ile canlı bağlantılar sunar.", youtubeId: "IqNuiMaveas", image: visualizationRemote },
];

const purchaseOptions: FeatureItem[] = [
  { title: "Lisans Server", description: "Mevcut lisansların birden fazla kullanıcı tarafından optimal şekilde kullanılmasını sağlar. Ofis dışında lisans kullanımı mümkündür.", image: licenseServerImg },
  { title: "BIMPLUS Pro", description: "Bulut iş birliği kapasitenizi artırmak için ek Bimplus Pro lisansları.", image: bimplusProImg },
  { title: "ALLPLAN Bulut Depolama", description: "Projelerinizin kesintisiz devam etmesini sağlamak için ek depolama alanı.", image: cloudStorageImg },
];

const FeatureCard = ({ feature }: { feature: FeatureItem }) => (
  <Card className="overflow-hidden group">
    <div className="aspect-video overflow-hidden relative">
      {feature.youtubeId ? (
        <VideoModal youtubeId={feature.youtubeId} title={feature.title} thumbnailUrl={feature.image} className="w-full h-full" />
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
    "Konsept tasarımlarınızı müşteriye anlatmakta zorlanıyor musunuz?",
    "Farklı modelleme araçları arasında veri kaybı mı yaşıyorsunuz?",
    "Tasarım değişikliklerini hızlıca sunuma yansıtmak zaman mı alıyor?",
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-[0.02] bg-technical-grid" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ ALLPLAN CONCEPT</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Modelleme ve tasarım dokümantasyonu için BIM çözümü</h1>
            <Button asChild size="lg" className="mt-4"><Link href="/contact">Ücretsiz Dene</Link></Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ ALLPLAN Concept Nedir?</span>
              <p className="text-lg text-muted-foreground mb-8">Modelleme ve tasarım dokümantasyonu için BIM çözümüdür. Mimarlık ofisleri, çok disiplinli danışmanlık firmaları, konut geliştiricileri ve kamu kurumları tarafından kullanılır. Bina modelleme, görselleştirme, değerlendirme ve dokümantasyon hazırlığı için gerekli tüm araçları içerir.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">BIM modelleme için verimli araçlar</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Tasarım ve çıktı üretiminde otomasyon</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Miktar hesaplamalarında güvenilirlik</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Render ve görselleştirme iş akışları</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Veri alışverişi için sorunsuz arayüzler</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Bulut tabanlı model koordinasyonu ve iş birliği</span></li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild><Link href="/products/allplan">Sürümleri Görüntüle</Link></Button>
                <Button asChild><Link href="/solutions/architecture">Tasarım İş Akışlarını İncele</Link></Button>
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SnuaHSL18e8"
                title="ALLPLAN Concept"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">ALLPLAN Concept&apos;in Faydaları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative bg-card p-6 pr-20 pb-10 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-all group-hover:from-accent/20" />
                <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Image src={benefit.icon} alt={benefit.title} width={28} height={28} className="w-7 h-7 object-contain" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Button variant="outline" asChild><a href="https://www.allplan.com/subscription-faq/" target="_blank" rel="noopener noreferrer">Abonelik avantajlarını görün</a></Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ALLPLAN Concept Özellikleri</h2>
            <p className="text-xl text-muted-foreground">Fonksiyonellik Hızlı Bakış</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (<FeatureCard key={index} feature={feature} />))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Button variant="outline" asChild><Link href="/contact">Sorularınız mı var? İletişime Geçin</Link></Button>
            <Button asChild><Link href="/contact">Teklif alın</Link></Button>
          </div>
        </div>
      </section>

      <CloudServicesSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Satın Alınabilir Seçenekler</h2></div>
          <div className="grid md:grid-cols-3 gap-8">{purchaseOptions.map((option, index) => (<FeatureCard key={index} feature={option} />))}</div>
        </div>
      </section>
    </div>
  );
}
