"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Check } from "lucide-react";
import VideoModal from "@/components/VideoModal";

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
import projectTeamworkingRemote from "@/assets/products/allplan-concept/remote/cloud/15_project_teamworking.jpg";
import drawingPlanDistributionRemote from "@/assets/products/allplan-concept/remote/cloud/16_drawing_plan_distribution.jpg";
import analyticalModelGenerationRemote from "@/assets/products/allplan-concept/remote/cloud/17_analytical_model_generation.jpg";
import workgroupManagerRemote from "@/assets/products/allplan-concept/remote/cloud/workgroup_manager.jpg";
import cloudEnabledProjectResourcesRemote from "@/assets/products/allplan-concept/remote/cloud/cloud_enabled_project_resources.jpg";
import allplanModelViewerRemote from "@/assets/products/allplan-concept/remote/cloud/allplan_model_viewer.jpg";
import cloudBasedCollaborationOverlay from "@/assets/products/allplan-concept/remote/cloud/cloud_based_collaboration.jpg";
import designCheckingOverlay from "@/assets/products/allplan-concept/remote/cloud/design_checking.jpg";
import bluebeamConnectionOverlay from "@/assets/products/allplan-concept/remote/cloud/bluebeam_connection.jpg";

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
  { title: "Arayüzler", description: "IFC, BCF, PDF, RVT, 3DM, SKP, OBJ, LandXML, DWG, DGN, C4D, STL, WRL, SAF ve daha fazlası.", image: interfacesRemote },
  { title: "Dış Veri Kaynakları", description: "GIS Bağlayıcı ve İçerik Bağlayıcı.", youtubeId: "LF6p7dQASR8", image: externalDataSourcesRemote },
  { title: "3D Modelleme", description: "Parasolid çekirdeği ile yüksek performanslı 3D modelleme.", youtubeId: "kxDkWW01hRY", image: threeDModelingRemote },
  { title: "2D Çizim", description: "Hassas 2D çizim işlevleri.", youtubeId: "_b6Z-1U8Ri4", image: twoDDraftingRemote },
  { title: "Çarpışma Tespiti", description: "Yumuşak/sert çakışmalar için araçlar.", image: clashDetectionRemote },
  { title: "BIM EASY", description: "Ön tanımlı, özelleştirilebilir şirket standardı.", youtubeId: "RyUl97kMQ88", image: bimEasyRemote },
  { title: "Yapı Bileşenleri", description: "Duvar, döşeme, kiriş, kolon, temel, merdiven, çatı, pencere, kapı, cephe.", youtubeId: "DX7oODCOgeI", image: buildingComponentsRemote },
  { title: "Arazi Modeli", description: "Anket veya nokta bulutlarına dayalı arazi.", image: terrainModelRemote },
  { title: "Kentsel/Peyzaj", description: "Kütle modelleri ve bitkilendirme planları.", image: urbanLandscapeRemote },
  { title: "Kanalizasyon/Altyapı", description: "Su, atık su, elektrik, internet, doğalgaz, merkezi ısıtma.", image: sewerageUtilitiesRemote },
  { title: "Miktar/Maliyet", description: "Doğrulanabilir metraj ve maliyetlendirme.", youtubeId: "toZosw6NtMQ", image: quantityTakeoffRemote },
  { title: "Görselleştirme", description: "Gerçek zamanlı Render, CineWare, Lumion/Twinmotion.", youtubeId: "IqNuiMaveas", image: visualizationRemote },
];

const cloudServices: FeatureItem[] = [
  { title: "Bulut Tabanlı İşbirliği", description: "Bimplus Pro.", youtubeId: "7xzpEhLQhEI", image: cloudBasedCollaborationOverlay },
  { title: "Proje Takım Çalışması", description: "ALLPLAN Share.", image: projectTeamworkingRemote },
  { title: "Çizim/Plan Dağıtımı", description: "ALLPLAN Exchange.", image: drawingPlanDistributionRemote },
  { title: "Analitik Model", description: "AutoConverter.", image: analyticalModelGenerationRemote },
  { title: "Tasarım Kontrolü", description: "Solibri Inside.", youtubeId: "t4axrE0TWO4", image: designCheckingOverlay },
  { title: "Ofis Ekip Çalışması", description: "Çalışma Grubu Yöneticisi.", image: workgroupManagerRemote },
  { title: "Bulut Proje Kaynakları", description: "Tam bulut kaynak dağıtımı.", image: cloudEnabledProjectResourcesRemote },
  { title: "Model Viewer", description: "IFC önizleme.", image: allplanModelViewerRemote },
  { title: "Bluebeam Bağlantısı", description: "Dijital teslim entegrasyonu.", youtubeId: "u4GZUL7WdQU", image: bluebeamConnectionOverlay },
];

const purchaseOptions: FeatureItem[] = [
  { title: "Lisans Server", description: "Çok kullanıcı optimal lisans kullanımı.", image: licenseServerImg },
  { title: "BIMPLUS Pro", description: "Ek Bimplus Pro lisansları.", image: bimplusProImg },
  { title: "ALLPLAN Bulut Depolama", description: "Ek depolama alanı.", image: cloudStorageImg },
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ ALLPLAN Concept Nedir?</span>
            <p className="text-lg text-muted-foreground mb-8">Modelleme ve tasarım dokümantasyonu için BIM çözümüdür. Mimarlık ofisleri, çok disiplinli danışmanlık firmaları, konut geliştiricileri ve kamu kurumları tarafından kullanılır. Bina modelleme, görselleştirme, değerlendirme ve dokümantasyon hazırlığı için gerekli tüm araçları içerir. ALLPLAN Concept, her türlü mimari gereksinim için evrensel bir BIM çözümüdür.</p>
            <ul className="space-y-4 mb-8">
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
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">ALLPLAN Concept&apos;in Faydaları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex-shrink-0 mb-4"><Image src={benefit.icon} alt={benefit.title} width={64} height={64} className="w-16 h-16 object-contain" /></div>
                  <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ {benefit.title}</span>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
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

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ALLPLAN Bulut Hizmetleri</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{cloudServices.map((service, index) => (<FeatureCard key={index} feature={service} />))}</div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">İşbirliğinizi bir üst seviyeye taşıyan araçlara anında erişim imkanı sağlayın.</p>
            <Button asChild><Link href="/solutions/allplan-bulut-hizmetleri">ALLPLAN Bulut Hizmetleri</Link></Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Satın Alınabilir Seçenekler</h2></div>
          <div className="grid md:grid-cols-3 gap-8">{purchaseOptions.map((option, index) => (<FeatureCard key={index} feature={option} />))}</div>
        </div>
      </section>
    </div>
  );
}
