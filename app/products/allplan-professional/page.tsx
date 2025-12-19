"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Check } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import PostHeroSection from "@/components/PostHeroSection";
import ReasonsSection from "@/components/ReasonsSection";

// Faydalar ikonları
import workWayWantIcon from "@/assets/products/allplan-basic/benefits/work-way-want.png";
import powerfulModelingIcon from "@/assets/products/allplan-basic/benefits/powerful-modeling.png";
import productiveCollabIcon from "@/assets/products/allplan-basic/benefits/productive-collab.png";
import easilyModifyIcon from "@/assets/products/allplan-professional/easily-modify-requirements.png";
import parametricRoadIcon from "@/assets/products/allplan-professional/parametric-road-modeling.png";
import multiMaterialsIcon from "@/assets/products/allplan-professional/multi-materials.png";
import preciseReinforcementIcon from "@/assets/products/allplan-professional/precise-3d-reinforcement.png";
import siteModellingIcon from "@/assets/products/allplan-professional/site-modelling-tools.png";

// Özellik görselleri
import reinforcementImg from "@/assets/products/allplan-professional/reinforcement.jpg";
import steelConnectionsImg from "@/assets/products/allplan-professional/steel-connections.jpg";
import roadsImg from "@/assets/products/allplan-professional/roads.jpg";
import constructionSiteImg from "@/assets/products/allplan-professional/construction-site.jpg";
import interfacesImg from "@/assets/products/allplan-professional/interfaces.jpg";
import externalDataSourcesImg from "@/assets/products/allplan-professional/external-data-sources.jpg";
import modeling3dImg from "@/assets/products/allplan-professional/3d-modeling.jpg";
import drafting2dImg from "@/assets/products/allplan-professional/2d-drafting.jpg";
import clashDetectionImg from "@/assets/products/allplan-professional/clash-detection.jpg";
import bimEasyImg from "@/assets/products/allplan-professional/bim-easy.jpg";
import buildingComponentsImg from "@/assets/products/allplan-professional/building-components.jpg";
import terrainModelImg from "@/assets/products/allplan-professional/terrain-model.jpg";
import urbanLandscapeImg from "@/assets/products/allplan-professional/urban-landscape.jpg";
import sewerageUtilitiesImg from "@/assets/products/allplan-professional/sewerage-utilities.jpg";
import quantityCostingImg from "@/assets/products/allplan-professional/quantity-costing.jpg";
import visualizationImg from "@/assets/products/allplan-professional/visualization.jpg";
import advancedVisualizationImg from "@/assets/products/allplan-professional/advanced-visualization.jpg";
import aiVisualizationImg from "@/assets/products/allplan-professional/ai-visualization.jpg";

// Satın alma seçenekleri
import licenseServerImg from "@/assets/products/allplan-professional/license-server.jpg";
import bimplusProImg from "@/assets/products/allplan-professional/bimplus-pro.jpg";
import cloudStorageImg from "@/assets/products/allplan-professional/cloud-storage.jpg";

// Bulut hizmetleri görselleri
import cloudResourcesImg from "@/assets/products/allplan-professional/cloud-resources.jpg";
import projectTeamworkImg from "@/assets/products/allplan-professional/project-teamwork.jpg";
import planDistributionImg from "@/assets/products/allplan-professional/plan-distribution.jpg";
import analyticalModelImg from "@/assets/products/allplan-professional/analytical-model.jpg";
import modelViewerImg from "@/assets/products/allplan-professional/model-viewer.jpg";
import workgroupManagerImg from "@/assets/products/allplan-professional/workgroup-manager.jpg";

interface FeatureItem {
  title: string;
  description: string;
  image?: string | StaticImageData;
  youtubeId?: string;
}

const benefits = [
  { title: "İstediğiniz Gibi Çalışın", description: "2D, 2.5D ve 3D'de esnek iş akışları.", icon: workWayWantIcon },
  { title: "Güçlü & Sezgisel Modelleme", description: "Herhangi bir formu kolayca modelleme özgürlüğü, yapı bileşenlerini hızlıca geliştirmek için güçlü araçlarla desteklenir.", icon: powerfulModelingIcon },
  { title: "Verimli İş Birliği", description: "Optimized bulut tabanlı iş birliği, proje ve ofis ekip çalışması ile çizim ve plan dağıtımı için entegre ALLPLAN Cloud hizmetleri.", icon: productiveCollabIcon },
  { title: "Kolayca Gereksinimleri Değiştirin", description: "Planları yeniden modelleme yapmadan uyarlayıp değişiklikler yapın, böylece zaman kazanın ve değişikliklere daha hızlı ve kolay bir şekilde yanıt verin.", icon: easilyModifyIcon },
  { title: "Parametrik Yol Modelleme", description: "Bina ve altyapı projelerinize yol tasarımlarını entegre etmek için güçlü ve kullanımı kolay modelleme işlevleri.", icon: parametricRoadIcon },
  { title: "Birden Fazla Malzeme ile Planlama", description: "Malzemeleri ve inşaat yaklaşımlarını optimize edin; dökme yerinde/prekast beton, çelik ve ahşap dahil olmak üzere, yapım kolaylığını ve sürdürülebilirliği artırmak için.", icon: multiMaterialsIcon },
  { title: "Hassas 3D Donatı", description: "Donatı gereksinimlerinin hızlı tasarımı ve detaylandırılması için otomatik çözümler, önemli ölçüde zaman tasarrufu sağlar ve kaliteyi garanti eder.", icon: preciseReinforcementIcon },
  { title: "Analiz Çözümleri ile Sorunsuz Entegrasyon", description: "Yapısal modellerin SAF üzerinden yapısal analiz çözümleriyle verimli bir şekilde değişimini sağlamak için AutoConverter ile gelişmiş iş akışları.", icon: powerfulModelingIcon },
  { title: "Güçlü Şantiye Modelleme Araçları", description: "Arazi gereksinimlerini kolayca dahil edin, erişim yolları tasarlayın, altyapıyı modelleyin ve inşaat ekipmanlarının yerleşimini planlayın.", icon: siteModellingIcon },
];

const coreFeatures: FeatureItem[] = [
  { title: "Donatı", description: "Son derece güçlü donatı işlevselliği, çubuk donatısı, ağ donatısı ve BAMTEC halılarını içerir.", youtubeId: "SB-ULI92gKY", image: reinforcementImg },
  { title: "Çelik Bağlantılar", description: "Civatalı ve kaynaklı çelik bağlantılar için araçlar.", youtubeId: "JnxPHPvNG_M", image: steelConnectionsImg },
  { title: "Yollar", description: "Tam parametrik yol tasarımı, kesişmeler, trafik daireleri ve araç dönme yolu analizi dahil.", youtubeId: "PGTnLKV0OPE", image: roadsImg },
  { title: "Şantiye Hazırlığı", description: "Cranes, konteynerler, şantiye çitleri ve inşaat sahası yerleşimini planlamak için diğer ekipmanlar.", image: constructionSiteImg },
  { title: "Arayüzler", description: "Sorunsuz veri alışverişi için tüm ilgili dosya arayüzleri, ifc, bcf, pdf, rvt, 3dm, skp, obj, LandXML, dwg, dgn, c4d, stl, wrl, saf ve daha fazlasını içerir. Yazılım arayüzleri (örn. Python API ve Görsel Betikleme) otomatik iş akışlarını sağlar.", image: interfacesImg },
  { title: "Harici Veri Kaynakları", description: "GIS bilgilerini, 3D içerik ve dokuları içe aktarmak için GIS Bağlayıcı ve İçerik Bağlayıcı.", youtubeId: "V9T7HbnTz-I", image: externalDataSourcesImg },
  { title: "3D Modelleme", description: "Son derece karmaşık ve zorlu geometriler için yüksek performanslı 3D modelleme. Modelleme işlevselliği, Siemens Parasolid modelleme çekirdeği ile desteklenmektedir.", youtubeId: "BsTcwS6Chm0", image: modeling3dImg },
  { title: "2D Çizim", description: "Çekici, özlü ve detaylı çizimler için hassas 2D çizim için kapsamlı işlevsellik.", youtubeId: "_b6Z-1U8Ri4", image: drafting2dImg },
  { title: "Çarpışma Tespiti", description: "Yumuşak ve sert çarpışmaları tanımlamak için araç.", image: clashDetectionImg },
  { title: "İçerik Paketi BIM Easy", description: "Önceden tanımlanmış ancak özelleştirilebilir şirket standardı. Modellerin ve çizimlerin oluşturulmasında tutarlı bir çalışma şekli sağlar. Başlangıçta kolaylık sağlar, verimliliği artırır ve özellikle openBIM projelerinde iyi yapılandırılmış veri alışverişini garanti eder.", youtubeId: "RyUl97kMQ88", image: bimEasyImg },
  { title: "Yapı Bileşenleri", description: "Duvarlar, döşemeler, kirişler, kolonlar, temeller, merdivenler, çatılar, pencereler, kapılar ve cepheler gibi esnek yapı bileşenleri.", youtubeId: "9lPGIYswwgE", image: buildingComponentsImg },
  { title: "Arazi Modeli", description: "Ölçüm noktaları veya nokta bulutlarına dayanan güçlü arazi modelleme.", image: terrainModelImg },
  { title: "Kentsel ve Peyzaj Tasarımı", description: "Kütle modelleri, kentsel ve yer tasarımı ile birlikte bitkilendirme planları için işlevler.", image: urbanLandscapeImg },
  { title: "Kanalizasyon ve Altyapı", description: "Su, atık su, elektrik, internet, doğalgaz veya merkezi ısıtma gibi hizmetlerin rotalanması.", image: sewerageUtilitiesImg },
  { title: "Miktar Hesaplaması ve Maliyetlendirme", description: "Modelleme yapılmış ve yapılmamış nesnelerin kesin, doğrulanabilir miktar hesaplaması ve maliyetlendirilmesi.", image: quantityCostingImg },
  { title: "Görselleştirme", description: "Vulkan gibi en son teknolojilere dayanan geniş bir görselleştirme yelpazesi. Gerçek zamanlı Render ve CineWare'ı içerir, Lumion ve Twinmotion'a canlı bağlantılar.", youtubeId: "IqNuiMaveas", image: visualizationImg },
  { title: "Gelişmiş Görselleştirme", description: "MAXON'dan yüksek performanslı GPU hızlandırmalı Redshift render.", image: advancedVisualizationImg },
  { title: "AI Tabanlı Görselleştirme", description: "İlham verici, ayrıntılı AI destekli görselleştirmeler oluşturmak için bağlantılar. Nemetschek AI Visualizer ve EvolveLab'ın Veras AI Visualizer ile entegrasyonu içerir.", image: aiVisualizationImg },
];

const purchaseOptions: FeatureItem[] = [
  { title: "Lisans Server", description: "Mevcut lisansların birden fazla kullanıcı tarafından optimal şekilde kullanılmasını sağlar. Ofis dışında lisans kullanımı mümkündür.", image: licenseServerImg },
  { title: "BIMPLUS Pro", description: "Bulut iş birliği kapasitenizi artırmak için ek Bimplus Pro lisansları.", image: bimplusProImg },
  { title: "ALLPLAN Bulut Depolama", description: "Projelerinizin kesintisiz devam etmesini sağlamak için ek depolama alanı.", image: cloudStorageImg },
];

const cloudServices: FeatureItem[] = [
  { title: "Bulut Tabanlı İşbirliği", description: "Bimplus Pro, bulut tabanlı BIM işbirliği platformu.", youtubeId: "7xzpEhLQhEI", image: cloudResourcesImg },
  { title: "Proje Takım Çalışması", description: "ALLPLAN Share, bir şirket ağı üzerinden ekip çalışmasını sağlar; uzaktan çalışan ekip üyeleri için de idealdir.", image: projectTeamworkImg },
  { title: "Çizim ve Plan Dağıtımı", description: "Çeşitli plan formatlarının oluşturulmasını ve dağıtımını yönetmek için özel olarak tasarlanmış web tabanlı plan dağıtım aracı ALLPLAN Exchange, ayrıca e-posta grupları aracılığıyla otomatik değişiklik bildirimleri sağlar.", image: planDistributionImg },
  { title: "Analitik Model Üretimi", description: "AutoConverter aracılığıyla geometrik modellerin, Frilo Statics, Scia Engineer gibi yapısal analiz çözümleri tarafından doğrudan kullanılabilen analitik modellere akıllı bir şekilde dönüştürülmesi.", image: analyticalModelImg },
  { title: "Tasarım Kontrolü", description: "Solibri Inside, kullanıcı istediği zaman ALLPLAN modellerinde kontroller gerçekleştirebilir; bu, ALLPLAN içindeki BIM Explorer'dan palet benzeri bir işlevsellik kullanarak yapılır. (ALLPLAN Abonelik lisansı ile birlikte 12 aylık Solibri Inside aboneliği dahildir.)", youtubeId: "t4axrE0TWO4", image: clashDetectionImg },
  { title: "Ofis Ekip Çalışması", description: "ALLPLAN Çalışma Grubu Yöneticisi aracılığıyla yerel bir şirket ağı içinde verimli ekip çalışmasını kolaylaştırın.", image: workgroupManagerImg },
  { title: "Bulut Destekli Proje Kaynakları", description: "Bulut ofis kaynakları, ALLPLAN proje kaynaklarının tamamen bulut tabanlı dağıtımını sağlar.", image: cloudResourcesImg },
  { title: "ALLPLAN Model Viewer", description: "Yeni bir dosyayı hızlıca önizlemek, IFC modellerini görsel olarak görüntülemek ve tam olarak yüklemeden önce kontrol etmek için kullanılır. (Sadece ALLPLAN Aboneliği veya Bimplus Professional satın alımı ile kullanılabilir.)", image: modelViewerImg },
  { title: "ALLPLAN - Bluebeam Bağlantısı", description: "Geliştirilmiş iş akışları – dijital teslim sürecine yardımcı olmak için Bluebeam ile bağlantı kuracağız. Kullanıcılar, Bluebeam Studio Proje ortamından ALLPLAN iş akışlarına 2D belgeleri kolayca aktarabilecekler.", youtubeId: "u4GZUL7WdQU", image: bimplusProImg },
];

const FeatureCard = ({ feature }: { feature: FeatureItem }) => (
  <Card className="overflow-hidden group border border-white/10 hover:border-white/20 bg-graphite-950">
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
  return (
    <div className="dark min-h-screen bg-graphite-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-[0.02] bg-technical-grid" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ ALLPLAN PROFESSIONAL</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Detaylandırma ve ileri düzey otomasyon için BIM çözümü</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ALLPLAN Professional, mimari ofislerde, çok disiplinli danışmanlıklarda, yapı mühendisliği/detaylandırma ofislerinde ve inşaat mühendisliği danışmanlıklarında tasarım sürecini destekleyen güçlü bir detaylandırma ve ileri düzey otomasyon için BIM çözümüdür.
            </p>
          </div>
        </div>
      </section>

      {/* PostHero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ ALLPLAN Professional Nedir?</span>
              <p className="text-lg text-muted-foreground mb-8">ALLPLAN Concept plus'in tüm özelliklerini içerir ve ek olarak:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Çoklu malzeme modelleme, detaylandırma ve raporlama</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Donatı modellemede olağanüstü performans</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Yol ve şantiye hazırlığı iş akışları</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Gelişmiş kontrol ve entegrasyonlar</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Gelişmiş render ve görselleştirme</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Çelik bağlantıların otomatik tasarımı</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">Parametrik yol modelleme</span></li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" /><span className="text-foreground">İnşaat Alanı Hazırlığı</span></li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild><Link href="/products/allplan">Sürümleri Görüntüle</Link></Button>
                <Button asChild><Link href="/solutions/structural">Yapısal İş Akışlarını İncele</Link></Button>
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SnuaHSL18e8"
                title="ALLPLAN Professional"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faydalar Section */}
      <ReasonsSection
        items={benefits.map((b) => ({ title: b.title, description: b.description, image: b.icon }))}
        variant="benefits"
        badgeText="9 FAYDA"
        titleText="ALLPLAN Professional'ın Faydaları"
      />

      {/* Özellikler Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ALLPLAN Professional Özellikleri</h2>
            <p className="text-xl text-muted-foreground">Fonksiyonellik Hızlı Bakış</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Bulut Hizmetleri Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ALLPLAN Bulut Hizmetleri</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudServices.map((service, index) => (
              <FeatureCard key={index} feature={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Satın Alınabilir Seçenekler */}
      <section className="py-20 bg-muted/30">
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
