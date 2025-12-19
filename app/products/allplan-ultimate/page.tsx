"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import VideoModal from "@/components/VideoModal";

import workWayWantIcon from "@/assets/products/allplan-ultimate/work-way-want.png";
import powerfulModelingIcon from "@/assets/products/allplan-ultimate/powerful-modeling.png";
import productiveCollabIcon from "@/assets/products/allplan-ultimate/productive-collab.png";
import interdisciplinaryIcon from "@/assets/products/allplan-ultimate/interdisciplinary-aec-design.png";
import multiMaterialsIcon from "@/assets/products/allplan-ultimate/planable-multi-materials.png";
import parametricRoadIcon from "@/assets/products/allplan-ultimate/parametric-road-modeling.png";
import precise3dReinforcementIcon from "@/assets/products/allplan-ultimate/precise-3d-reinforcement.png";
import seamlessIntegrationIcon from "@/assets/products/allplan-ultimate/seamless-integration.png";
import siteModellingIcon from "@/assets/products/allplan-ultimate/site-modelling-tools.png";
import detailPrecastIcon from "@/assets/products/allplan-ultimate/detail-precast.png";
import visualSchedulingIcon from "@/assets/products/allplan-ultimate/visual-scheduling.png";
import bim2fieldIcon from "@/assets/products/allplan-ultimate/bim-2field.png";

import interfacesImg from "@/assets/products/allplan-ultimate/interfaces.jpg";
import groundworksImg from "@/assets/products/allplan-ultimate/groundworks.jpg";
import excavationImg from "@/assets/products/allplan-ultimate/excavation.jpg";
import precastDesignImg from "@/assets/products/allplan-ultimate/precast-design.jpg";
import elementPlanImg from "@/assets/products/allplan-ultimate/element-plan.jpg";
import parametricModelingImg from "@/assets/products/allplan-ultimate/parametric-modeling.jpg";
import parametricPrestressingImg from "@/assets/products/allplan-ultimate/parametric-prestressing.jpg";
import terrainModelImg from "@/assets/products/allplan-ultimate/terrain-model.jpg";
import urbanLandscapeImg from "@/assets/products/allplan-ultimate/urban-landscape.jpg";
import sewerageUtilitiesImg from "@/assets/products/allplan-ultimate/sewerage-utilities.jpg";
import quantityCostingImg from "@/assets/products/allplan-ultimate/quantity-costing.jpg";
import constructionSiteImg from "@/assets/products/allplan-ultimate/construction-site.jpg";
import visualizationImg from "@/assets/products/allplan-ultimate/visualization.jpg";
import advancedVisualizationImg from "@/assets/products/allplan-ultimate/advanced-visualization.jpg";
import aiVisualizationImg from "@/assets/products/allplan-ultimate/ai-visualization.jpg";

import projectTeamworkImg from "@/assets/products/allplan-ultimate/project-teamwork.jpg";
import planDistributionImg from "@/assets/products/allplan-ultimate/plan-distribution.jpg";
import analyticalModelImg from "@/assets/products/allplan-ultimate/analytical-model.jpg";
import workgroupManagerImg from "@/assets/products/allplan-ultimate/workgroup-manager.jpg";
import cloudResourcesImg from "@/assets/products/allplan-ultimate/cloud-resources.jpg";
import modelViewerImg from "@/assets/products/allplan-ultimate/model-viewer.jpg";
import connexisImg from "@/assets/products/allplan-ultimate/connexis.jpg";
import cloudBasedCollabOverlay from "@/assets/products/allplan-concept/remote/cloud/cloud_based_collaboration.jpg";
import designCheckingOverlay from "@/assets/products/allplan-concept/remote/cloud/design_checking.jpg";
import bluebeamConnectionOverlay from "@/assets/products/allplan-concept/remote/cloud/bluebeam_connection.jpg";

import licenseServerImg from "@/assets/products/allplan-ultimate/license-server.jpg";
import bimplusProImg from "@/assets/products/allplan-ultimate/bimplus-pro.jpg";
import cloudStorageImg from "@/assets/products/allplan-ultimate/cloud-storage.jpg";
import sciaConceptImg from "@/assets/products/allplan-ultimate/scia-concept.jpg";

export default function Page() {
  const benefits = [
    { icon: workWayWantIcon, subtitle: "İstediğiniz Gibi", title: "Çalışın", description: "2D, 2.5D ve 3D'de esnek iş akışları." },
    { icon: powerfulModelingIcon, subtitle: "Güçlü &", title: "Sezgisel modelleme.", description: "Herhangi bir formu kolayca modelleme özgürlüğü, yapı bileşenlerini hızlıca geliştirmek için güçlü araçlarla desteklenir." },
    { icon: productiveCollabIcon, subtitle: "Verimli İş Birliği", title: "", description: "Bulut tabanlı iş birliği ve plan dağıtımı için entegre hizmetler." },
    { icon: interdisciplinaryIcon, subtitle: "Gerçek Disiplinlerarası", title: "AEC Tasarımı", description: "Mimari, yapısal ve MEP tasarımı için tek çözüm." },
    { icon: multiMaterialsIcon, subtitle: "Birden Fazla Malzeme", title: "ile Planlama", description: "Dökme yerinde/prekast beton, çelik ve ahşap için optimizasyon." },
    { icon: parametricRoadIcon, subtitle: "Parametrik", title: "Yol Modelleme", description: "Yol tasarımlarını entegre etmek için güçlü modelleme." },
    { icon: precise3dReinforcementIcon, subtitle: "Kesin", title: "3D Donatı", description: "Donatı tasarımını hızlandıran otomatik çözümler." },
    { icon: seamlessIntegrationIcon, subtitle: "Analiz Çözümleri ile", title: "Sorunsuz Entegrasyon", description: "AutoConverter ile SAF tabanlı entegrasyon." },
    { icon: siteModellingIcon, subtitle: "Güçlü Alan Modelleme ve", title: "Zemin Çalışmaları Araçları", description: "Saha gereksinimlerini entegre edin, erişim ve ekipman planlayın." },
    { icon: detailPrecastIcon, subtitle: "Prefabrik İçin", title: "Detaylandırma", description: "Üretim ve inşaat için hızlı prefabrik planlama." },
    { icon: visualSchedulingIcon, subtitle: "Kesin", title: "Görsel Planlama", description: "Model verileriyle görsel inşaat planlama." },
    { icon: bim2fieldIcon, subtitle: "BIM", title: "2Field", description: "Bimplus ile sahada koordine edin ve iletişim kurun." },
  ];

  const coreFeatures = [
    { title: "Arayüzler", description: "IFC, BCF, PDF, RVT, 3DM, SKP, OBJ, LandXML, DWG, DGN, C4D, STL, WRL, SAF ve daha fazlası.", image: interfacesImg },
    { title: "Harici Veri Kaynakları", description: "GIS Bağlayıcı ve İçerik Bağlayıcı.", youtubeId: "LF6p7dQASR8", thumbnailUrl: "/assets/allplan-ultimate/core/external-data-sources.jpg" },
    { title: "3D Modelleme", description: "Parasolid çekirdeğiyle yüksek performanslı 3D.", youtubeId: "kxDkWW01hRY", thumbnailUrl: "/assets/allplan-ultimate/core/3d-modeling.jpg" },
    { title: "2D Çizim", description: "Hassas 2D çizim işlevleri.", youtubeId: "_b6Z-1U8Ri4", thumbnailUrl: "/assets/allplan-ultimate/core/2d-drafting.jpg" },
    { title: "Çarpışma Tespiti", description: "Yumuşak/sert çakışmalar için araçlar.", youtubeId: "gZuNqBEX4GA", thumbnailUrl: "/assets/allplan-ultimate/core/clash-detection.jpg" },
    { title: "BIM EASY", description: "Özelleştirilebilir şirket standardı.", youtubeId: "RyUl97kMQ88", thumbnailUrl: "/assets/allplan-ultimate/core/content-package-bim-easy.jpg" },
    { title: "Yapı Bileşenleri", description: "Duvar, döşeme, kiriş, kolon, temel, merdiven, çatı, pencere, kapı, cephe.", youtubeId: "9lPGIYswwgE", thumbnailUrl: "/assets/allplan-ultimate/core/building-components.jpg" },
    { title: "Arazi Modeli", description: "Ölçüm veya nokta bulutuna dayalı arazi.", image: terrainModelImg },
    { title: "Kentsel/Peyzaj", description: "Kütle modelleri ve bitkilendirme planları.", image: urbanLandscapeImg },
    { title: "Kanalizasyon/Altyapı", description: "Su, atık su, elektrik, internet, doğalgaz, merkezi ısıtma.", image: sewerageUtilitiesImg },
    { title: "Miktar/Maliyet", description: "Doğrulanabilir metraj ve maliyetlendirme.", image: quantityCostingImg },
    { title: "Donatı", description: "Çubuk, ağ, BAMTEC halıları.", youtubeId: "SB-ULI92gKY", thumbnailUrl: "/assets/allplan-ultimate/core/reinforcement.jpg" },
    { title: "Çelik Bağlantılar", description: "Cıvatalı ve kaynaklı bağlantılar.", youtubeId: "JnxPHPvNG_M", thumbnailUrl: "/assets/allplan-ultimate/core/steel-connections.jpg" },
    { title: "Yollar", description: "Parametrik yol, kavşak ve dönüş yolu analizi.", youtubeId: "PGTnLKV0OPE", thumbnailUrl: "/assets/allplan-ultimate/core/roads.jpg" },
    { title: "Şantiye Hazırlığı", description: "Vinç, konteyner, çit ve ekipman yerleşimi.", image: constructionSiteImg },
    { title: "Zemin Çalışmaları", description: "Kazık ve ankraj çözümleri.", image: groundworksImg },
    { title: "Kazı", description: "Kazı modelleme ve çizimleri.", image: excavationImg },
    { title: "Prefabrik Tasarım", description: "Akıllı prefabrik bileşenler.", image: precastDesignImg },
    { title: "Eleman Planı", description: "Tekil eleman çizimleri – şablon bazlı.", image: elementPlanImg },
    { title: "Görselleştirme", description: "Vulkan tabanlı görselleştirme; Lumion/Twinmotion.", youtubeId: "IqNuiMaveas", thumbnailUrl: "/assets/allplan-ultimate/core/visualization.jpg" },
    { title: "Gelişmiş Görselleştirme", description: "Redshift GPU hızlandırma.", image: advancedVisualizationImg },
    { title: "AI Görselleştirme", description: "Nemetschek ve Veras AI Visualizer entegrasyonu.", image: aiVisualizationImg },
    { title: "Parametrik Modelleme", description: "Köprü, tünel, istinat, bariyer ve prekast kiriş köprüleri.", image: parametricModelingImg },
    { title: "Parametrik Ön Germe", description: "Tendon modelleme.", image: parametricPrestressingImg },
  ];

  const cloudServices = [
    { title: "Bulut Tabanlı İşbirliği", description: "Bimplus Pro.", youtubeId: "7xzpEhLQhEI", thumbnailUrl: cloudBasedCollabOverlay },
    { title: "Proje Takım Çalışması", description: "ALLPLAN Share.", image: projectTeamworkImg },
    { title: "Çizim/Plan Dağıtımı", description: "ALLPLAN Exchange.", image: planDistributionImg },
    { title: "Analitik Model Üretimi", description: "AutoConverter.", image: analyticalModelImg },
    { title: "Tasarım Kontrolü", description: "Solibri Inside.", youtubeId: "t4axrE0TWO4", thumbnailUrl: designCheckingOverlay },
    { title: "Ofis Ekip Çalışması", description: "Çalışma Grubu Yöneticisi.", image: workgroupManagerImg },
    { title: "Bulut Proje Kaynakları", description: "Tam bulut kaynak dağıtımı.", image: cloudResourcesImg },
    { title: "Model Viewer", description: "IFC önizleme.", image: modelViewerImg },
    { title: "Bluebeam Bağlantısı", description: "Dijital teslim entegrasyonu.", youtubeId: "u4GZUL7WdQU", thumbnailUrl: bluebeamConnectionOverlay },
    { title: "Connexis", description: "Çelik bağlantılar için bulut görüntüleme/işbirliği.", image: connexisImg },
  ];

  const purchaseOptions = [
    { title: "BIM²form – Kalıp", description: "Kalıp yerleştirme araçları.", youtubeId: "Ug-CNBbqIu4" },
    { title: "Lisans Server", description: "Lisansların çok kullanıcıyla optimal kullanımı.", image: licenseServerImg },
    { title: "BIMPLUS Pro", description: "Ek Bimplus Pro lisansları.", image: bimplusProImg },
    { title: "ALLPLAN Bulut Depolama", description: "Ek depolama alanı.", image: cloudStorageImg },
  ];

  const faqs = [
    { question: "ALLPLAN ULTIMATE, ALLPLAN AEC'Yİ Mİ DEĞİŞTİRİR?", answer: "Evet, ALLPLAN 2025 sürümünün piyasaya sürülmesiyle birlikte, ALLPLAN Ultimate edisyonu, abonelikli ALLPLAN AEC yapılandırmasını değiştirmiştir." },
    { question: "ALLPLAN AEC VE ALLPLAN ULTIMATE ARASINDAKİ FARKLAR NELERDİR?", answer: "ALLPLAN AEC ve ALLPLAN Ultimate arasında iki ana fark vardır: parametrik ve ön germe iş akışları ve SCIA Engineer Concept." },
    { question: "ALLPLAN ULTIMATE TASARIM, MÜHENDİSLİK VE İNŞAAT İŞİ İÇİN MİDİR?", answer: "Evet, ALLPLAN Ultimate, AEC şirketleri için tam tasarımdan inşaata iş akışlarını kapsayan bir BIM çözümüdür." },
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-black/80 to-black/40">
        <div className="absolute inset-0 opacity-[0.02] bg-technical-grid" />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">/ ALLPLAN Ultimate</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Tasarımdan inşaata kadar tam iş akışı için kapsamlı <span className="text-accent">BIM</span> çözümü.</h1>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90"><a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">Ücretsiz Dene<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button variant="outline" size="lg" asChild><Link href="/contact">Teklif Alın</Link></Button>
              <Button variant="outline" size="lg" asChild><a href="https://www.allplan.com/subscription-faq/" target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4" />Abonelik SSS</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium mb-4 block">/ ALLPLAN Ultimate Nedir?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Allplan Ultimate, tasarımdan inşaata kadar tüm süreçleri destekleyen kapsamlı iş akışı için Allplan&apos;ın nihai BIM çözümüdür.</h2>
              <p className="text-muted-foreground mb-6 font-semibold">Allplan Professional&apos;ın tüm özelliklerine ek olarak:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-accent">&gt;</span><span>Gelişmiş parametrik modelleme ve ön gerilme</span></li>
                <li className="flex items-start gap-2"><span className="text-accent">&gt;</span><span>Prefabrikasyon iş akışları</span></li>
                <li className="flex items-start gap-2"><span className="text-accent">&gt;</span><span>İnşaat iş akışları, hafriyat ve kazı araçları</span></li>
                <li className="flex items-start gap-2"><span className="text-accent">&gt;</span><span>SCIA Concept ile yapısal analiz*</span></li>
              </ul>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/tFnwOyX7ncI" title="ALLPLAN Ultimate Tanıtım" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Button variant="outline" asChild><Link href="/package-overview-2025" target="_blank">Sürümleri Görüntüle</Link></Button>
            <Button variant="outline" asChild><Link href="/2024-architecture" target="_blank">Tasarım için İş Akışları</Link></Button>
            <Button variant="outline" asChild><Link href="/2024-structural-engineering" target="_blank">İnşaat Mühendisliği için İş Akışları</Link></Button>
            <Button variant="outline" asChild><Link href="/2024-civil-engineering" target="_blank">Yapı Mühendisliği için İş Akışları</Link></Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">ALLPLAN Ultimate&apos;in Faydaları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="overflow-hidden"><CardContent className="p-6 flex gap-4 items-start"><div className="flex-shrink-0"><Image src={benefit.icon} alt={benefit.title} width={48} height={48} className="w-12 h-12 object-contain" /></div><div><span className="text-accent text-sm font-medium">/ {benefit.subtitle}</span>{benefit.title && <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>}<p className="text-muted-foreground text-sm mt-2">{benefit.description}</p></div></CardContent></Card>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Button variant="outline" asChild><a href="https://www.allplan.com/subscription-faq/" target="_blank" rel="noopener noreferrer">Abonelik avantajlarını görün</a></Button>
            <Button asChild><a href="https://aluplan.com.tr/basvuru-formlari/" target="_blank" rel="noopener noreferrer">Teklif alın</a></Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><span className="text-accent font-medium">ALLPLAN Ultimate Özellikleri</span><h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">Fonksiyonellik Hızlı Bakış</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="overflow-hidden group"><div className="aspect-video overflow-hidden relative">{feature.youtubeId ? (<VideoModal youtubeId={feature.youtubeId} title={feature.title} thumbnailUrl={feature.thumbnailUrl} className="w-full h-full" />) : (<Image src={feature.image!} alt={feature.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />)}</div><CardContent className="p-6"><h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></CardContent></Card>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-12"><Button variant="outline" asChild><a href="https://www.allplan.com/consulting-sale/consulting-sale-overview/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Sorularınız mı var? İletişime Geçin<ExternalLink className="w-4 h-4" /></a></Button><Button asChild><a href="https://aluplan.com.tr/basvuru-formlari/" target="_blank" rel="noopener noreferrer">Teklif alın</a></Button></div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div><span className="text-accent font-medium mb-4 block">ALLPLAN Ultimate Aboneliğine Dahil Olarak: Scia Concept</span><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Yapısal Analiz ve Tasarım – SCIA Engineer</h2><p className="text-muted-foreground mb-6"><strong>SCIA Engineer:</strong> Tüm projeleriniz için yüksek performanslı, güvenilir çok malzemeli yapısal analiz ve tasarım yazılımı.</p><h3 className="text-xl font-bold text-foreground mb-4">SCIA Engineer – Concept Sürümü</h3><p className="text-muted-foreground mb-6">Bu sürüm, esas olarak beton ve ahşaptan yapılmış yaygın yapıları modelleyen ve tasarlayan mühendisler için tasarlanmıştır. Ancak, temel çelik kontrolleri de desteklenmektedir. Temel doğrusal olmayan hesaplamalar, stabilite ve dinamik analiz ile birlikte gerçekleştirilebilir. Bu sürüm, konut binalarını tasarlayan mühendisler için özellikle uygundur.</p><Button variant="outline" asChild><a href="https://www.scia.net/en/scia-engineer/editions-comparison" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">SCIA Engineer karşılaştırmasına erişin<ExternalLink className="w-4 h-4" /></a></Button></div>
            <div className="rounded-xl overflow-hidden"><Image src={sciaConceptImg} alt="SCIA Concept" className="w-full h-auto" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">ALLPLAN Bulut Hizmetleri</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow"><div className="aspect-video relative">{service.youtubeId ? (<VideoModal youtubeId={service.youtubeId} title={service.title} thumbnailUrl={service.thumbnailUrl} className="w-full h-full" />) : (<Image src={service.image!} alt={service.title} fill className="object-cover" />)}</div><CardContent className="p-6"><h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3><p className="text-muted-foreground text-sm">{service.description}</p></CardContent></Card>
            ))}
          </div>
          <div className="mt-12 text-center"><h3 className="text-xl font-semibold text-foreground mb-4">Daha fazla bilgi edin</h3><p className="text-muted-foreground mb-6">İşbirliğinizi bir üst seviyeye taşıyan araçlara anında erişim imkanı sağlayın.</p><Button asChild><a href="https://aluplan.com.tr/allplan-bulut-hizmetleri-sunlari-icerir/">ALLPLAN Bulut Hizmetleri</a></Button></div>
        </div>
      </section>

      <section className="py-20 bg-background"><div className="container mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">SSS - ALLPLAN Ultimate</h2></div><div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="w-full">{faqs.map((faq, index) => (<AccordionItem key={index} value={`faq-${index}`}><AccordionTrigger className="text-foreground text-base">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>))}</Accordion></div></div></section>
    </div>
  );
}
