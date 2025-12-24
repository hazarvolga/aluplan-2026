"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import VideoModal from "@/components/VideoModal";
import CloudServicesSection from "@/components/CloudServicesSection";

import heroImg from "@/assets/products/allplan-ultimate/hero.jpg";

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

import connexisImg from "@/assets/products/allplan-ultimate/connexis.jpg";

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
    { title: "Arayüzler", description: "Sorunsuz veri alışverişi için tüm ilgili dosya arayüzleri, IFC, BCF, PDF, RVT, 3DM, SKP, OBJ, LandXML, DWG, DGN, C4D, STL, WRL, SAF ve daha fazlasını içerir. Yazılım arayüzleri (örn. Python API ve Görsel Betikleme) otomatik iş akışlarını sağlar.", image: interfacesImg },
    { title: "Harici Veri Kaynakları", description: "GIS bilgilerini, 3D içerik ve dokuları içe aktarmak için GIS Bağlayıcı ve İçerik Bağlayıcı.", youtubeId: "LF6p7dQASR8", thumbnailUrl: "/assets/allplan-ultimate/core/external-data-sources.jpg" },
    { title: "3D Modelleme", description: "Son derece karmaşık ve zorlu geometriler için yüksek performanslı 3D modelleme. Modelleme işlevselliği, Siemens Parasolid modelleme çekirdeği ile desteklenmektedir.", youtubeId: "kxDkWW01hRY", thumbnailUrl: "/assets/allplan-ultimate/core/3d-modeling.jpg" },
    { title: "2D Çizim", description: "Çekici, özlü ve detaylı çizimler için hassas 2D çizim için kapsamlı işlevsellik.", youtubeId: "_b6Z-1U8Ri4", thumbnailUrl: "/assets/allplan-ultimate/core/2d-drafting.jpg" },
    { title: "Çarpışma Tespiti", description: "Yumuşak ve sert çarpışmaları tanımlamak için araç.", youtubeId: "gZuNqBEX4GA", thumbnailUrl: "/assets/allplan-ultimate/core/clash-detection.jpg" },
    { title: "İçerik Paketi BIM EASY", description: "Önceden tanımlanmış ancak özelleştirilebilir şirket standardı. Modellerin ve çizimlerin oluşturulmasında tutarlı bir çalışma şekli sağlar. Başlangıçta kolaylık sağlar, verimliliği artırır ve özellikle openBIM projelerinde iyi yapılandırılmış veri alışverişini garanti eder.", youtubeId: "RyUl97kMQ88", thumbnailUrl: "/assets/allplan-ultimate/core/content-package-bim-easy.jpg" },
    { title: "Yapı Bileşenleri", description: "Duvarlar, döşemeler, kirişler, kolonlar, temeller, merdivenler, çatılar, pencereler, kapılar ve cepheler gibi esnek yapı bileşenleri.", youtubeId: "9lPGIYswwgE", thumbnailUrl: "/assets/allplan-ultimate/core/building-components.jpg" },
    { title: "Arazi Modeli", description: "Ölçüm noktaları veya nokta bulutlarına dayanan güçlü arazi modelleme.", image: terrainModelImg },
    { title: "Kentsel ve Peyzaj Tasarımı", description: "Kütle modelleri, kentsel ve yer tasarımı ile birlikte bitkilendirme planları için işlevler.", image: urbanLandscapeImg },
    { title: "Kanalizasyon ve Altyapı", description: "Su, atık su, elektrik, internet, doğalgaz veya merkezi ısıtma gibi hizmetlerin rotalanması.", image: sewerageUtilitiesImg },
    { title: "Miktar Hesaplaması ve Maliyetlendirme", description: "Modelleme yapılmış ve yapılmamış nesnelerin kesin, doğrulanabilir miktar hesaplaması ve maliyetlendirilmesi.", image: quantityCostingImg },
    { title: "Donatı", description: "Son derece güçlü donatı işlevselliği, çubuk donatısı, ağ donatısı ve BAMTEC halılarını içerir.", youtubeId: "SB-ULI92gKY", thumbnailUrl: "/assets/allplan-ultimate/core/reinforcement.jpg" },
    { title: "Çelik Bağlantılar", description: "Cıvatalı ve kaynaklı çelik bağlantılar için araçlar.", youtubeId: "JnxPHPvNG_M", thumbnailUrl: "/assets/allplan-ultimate/core/steel-connections.jpg" },
    { title: "Yollar", description: "Tam parametrik yol tasarımı, kesişmeler, trafik daireleri ve araç dönme yolu analizi dahil.", youtubeId: "PGTnLKV0OPE", thumbnailUrl: "/assets/allplan-ultimate/core/roads.jpg" },
    { title: "Şantiye Hazırlığı", description: "Vinçler, konteynerler, şantiye çitleri ve inşaat sahası yerleşimini planlamak için diğer ekipmanlar.", image: constructionSiteImg },
    { title: "Zemin Çalışmaları", description: "Akıllı kazı destekleme sistemleri, bored pile (delikli kazık), soldier pile duvarları ve zemin ankrajları gibi çözümleri içerir.", image: groundworksImg },
    { title: "Kazı", description: "Kazı alanlarını modellemek ve kazı çizimleri oluşturmak için kullanılan araçlar.", image: excavationImg },
    { title: "Prefabrik Tasarım ve Detaylandırma", description: "Akıllı prefabrik beton bileşenleri, örneğin kirişler, kolonlar, merdivenler vb.", image: precastDesignImg },
    { title: "Eleman Planı", description: "Tekil elemanların detaylı çizimlerinin otomatik, şablon bazlı olarak üretilmesi.", image: elementPlanImg },
    { title: "Görselleştirme", description: "Vulkan gibi en son teknolojilere dayanan geniş bir görselleştirme yelpazesi. Gerçek zamanlı Render ve CineWare'ı içerir, Lumion ve Twinmotion'a canlı bağlantılar.", youtubeId: "IqNuiMaveas", thumbnailUrl: "/assets/allplan-ultimate/core/visualization.jpg" },
    { title: "Gelişmiş Görselleştirme", description: "MAXON'dan yüksek performanslı GPU hızlandırmalı Redshift render.", image: advancedVisualizationImg },
    { title: "AI Tabanlı Görselleştirme", description: "İlham verici, ayrıntılı AI destekli görselleştirmeler oluşturmak için bağlantılar. Nemetschek AI Visualizer ve EvolveLab'ın Veras AI Visualizer ile entegrasyonu içerir.", image: aiVisualizationImg },
    { title: "Parametrik Modelleme", description: "Köprüler, tüneller, istinat duvarları, gürültü bariyerleri gibi sivil yapıların dört boyutlu parametrik modelleme ve detaylandırması için özel bir çözüm; ayrıca prefabrik kiriş köprüleri gibi özel köprü türlerini de içerir.", image: parametricModelingImg },
    { title: "Parametrik Ön Germe", description: "Ön germe tendonlarının modellenmesi.", image: parametricPrestressingImg },
  ];

  // Connexis - Ultimate'a özel ek hizmet
  const additionalCloudServices = [
    { title: "Bağlantı Tasarım Aracı - Connexis", description: "Çelik bağlantılar için bulut tabanlı görüntüleme ve iş birliği aracı.", image: connexisImg },
  ];

  const purchaseOptions = [
    { title: "BIM²form Eklentisi - Kalıp", description: "Kalıp yerleştirmek için araçlar.", youtubeId: "Ug-CNBbqIu4" },
    { title: "Lisans Server", description: "Mevcut lisansların birden fazla kullanıcı tarafından optimal şekilde kullanılmasını sağlar. Ofis dışında lisans kullanımı mümkündür.", image: licenseServerImg },
    { title: "BIMPLUS Pro", description: "Bulut iş birliği kapasitenizi artırmak için ek Bimplus Pro lisansları.", image: bimplusProImg },
    { title: "ALLPLAN Bulut Depolama", description: "Projelerinizin kesintisiz devam etmesini sağlamak için ek depolama alanı.", image: cloudStorageImg },
  ];

  const faqs = [
    { question: "ALLPLAN ULTIMATE, ALLPLAN AEC'YI MI DEĞİŞTİRİR?", answer: "Evet, ALLPLAN 2025 sürümünün piyasaya sürülmesiyle birlikte, ALLPLAN Ultimate edisyonu, abonelikli ALLPLAN AEC yapılandırmasını değiştirmiştir." },
    { question: "ALLPLAN AEC VE ALLPLAN ULTIMATE ARASINDAKİ FARKLAR NELERDİR?", answer: "ALLPLAN AEC ve ALLPLAN Ultimate abonelikleri arasında iki ana fark bulunmaktadır. ALLPLAN AEC'nin tüm işlevselliğine ek olarak, ALLPLAN Ultimate parametrik ve pre-stressing iş akışlarını, ayrıca SCIA Engineer Concept*'i de içermektedir." },
    { question: "ALLPLAN ULTIMATE TASARIM, MÜHENDİSLİK VE İNŞAAT İŞİ İÇİN MİDİR?", answer: "Evet, ALLPLAN Ultimate, mimarlık, mühendislik ve inşaat şirketleri için bir BIM çözümüdür. Tam tasarımdan inşaata iş akışlarını destekleyen, bina ve altyapı projelerinin çok malzemeli modellemesi, prefabrike ve inşaat iş akışları için araçlar içeren bir BIM çözümüdür." },
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Allplan Ultimate Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          <div className="absolute inset-0 opacity-[0.02] bg-technical-grid" />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ ALLPLAN ULTIMATE</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Tasarımdan inşaata kadar tam iş akışı için kapsamlı <span className="text-accent">BIM</span> çözümü.</h1>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90"><a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">Ücretsiz Dene<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button variant="outline" size="lg" asChild><a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">Teklif Talep Formu</a></Button>
              <Button variant="outline" size="lg" asChild><a href="/solutions-v2/faq"><ExternalLink className="mr-2 h-4 w-4" />Abonelik SSS</a></Button>
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
              <div key={index} className="group relative bg-card p-6 pr-20 pb-10 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-all group-hover:from-accent/20" />
                <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Image src={benefit.icon} alt={benefit.title || benefit.subtitle} width={28} height={28} className="w-7 h-7 object-contain" />
                </div>
                <span className="text-accent text-sm font-medium block mb-1">/ {benefit.subtitle}</span>
                {benefit.title && <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{benefit.title}</h3>}
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Button variant="outline" asChild><a href="https://www.allplan.com/subscription-faq/" target="_blank" rel="noopener noreferrer">Abonelik avantajlarını görün</a></Button>
            <Button asChild><a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">Teklif Talep Formu</a></Button>
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
          <div className="flex flex-wrap gap-4 justify-center mt-12"><Button variant="outline" asChild><a href="https://www.allplan.com/consulting-sale/consulting-sale-overview/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">Sorularınız mı var? İletişime Geçin<ExternalLink className="w-4 h-4" /></a></Button><Button asChild><a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">Teklif Talep Formu</a></Button></div>
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

      <CloudServicesSection additionalServices={additionalCloudServices} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Satın Alınabilir Seçenekler</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {purchaseOptions.map((option, index) => (
              <Card key={index} className="overflow-hidden group border border-white/10 hover:border-white/20 bg-graphite-950">
                <div className="aspect-video overflow-hidden relative">
                  {option.youtubeId ? (
                    <VideoModal youtubeId={option.youtubeId} title={option.title} className="w-full h-full" />
                  ) : (
                    <Image src={option.image!} alt={option.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
                  <p className="text-white/80 text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-muted/30"><div className="container mx-auto px-4"><div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">SSS - ALLPLAN Ultimate</h2></div><div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="w-full">{faqs.map((faq, index) => (<AccordionItem key={index} value={`faq-${index}`}><AccordionTrigger className="text-foreground text-base">{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>))}</Accordion></div></div></section>
    </div>
  );
}
