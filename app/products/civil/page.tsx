"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import VideoModal from "@/components/VideoModal";
import PostHeroSection from "@/components/PostHeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import StatsTemplate from "@/components/StatsTemplate";
import CloudServicesSection, { CloudServiceItem } from "@/components/CloudServicesSection";

// Fayda ikonları - Ultimate'dan
import parametricRoadIcon from "@/assets/products/allplan-ultimate/parametric-road-modeling.png";
import precise3dReinforcementIcon from "@/assets/products/allplan-ultimate/precise-3d-reinforcement.png";
import interdisciplinaryIcon from "@/assets/products/allplan-ultimate/interdisciplinary-aec-design.png";
import seamlessIntegrationIcon from "@/assets/products/allplan-ultimate/seamless-integration.png";
import detailPrecastIcon from "@/assets/products/allplan-ultimate/detail-precast.png";
import visualSchedulingIcon from "@/assets/products/allplan-ultimate/visual-scheduling.png";
import siteModellingIcon from "@/assets/products/allplan-ultimate/site-modelling-tools.png";
import bim2fieldIcon from "@/assets/products/allplan-ultimate/bim-2field.png";

// Civil özel görseller
import civilParametricModelingImg from "@/assets/products/civil/parametric-modeling.jpg";
import civilParametricPrestressingImg from "@/assets/products/civil/parametric-prestressing.jpg";
import bridgeStructuralAnalysisImg from "@/assets/products/civil/bridge-structural-analysis.jpg";
import workflowParametricModelingImg from "@/assets/products/civil/workflow-parametric-modeling.jpg";
import workflowBridgeAnalysisImg from "@/assets/products/civil/workflow-bridge-analysis.png";
import workflowSciaCivilImg from "@/assets/products/civil/workflow-scia-civil.jpg";
import connexisImg from "@/assets/products/civil/connexis.jpg";
import civilExternalDataImg from "@/assets/products/civil/external-data-sources.jpg";
import civil3dModelingImg from "@/assets/products/civil/3d-modeling.jpg";
import bridgeCodeDesignImg from "@/assets/products/civil/bridge-code-based-design.jpg";
import bim2formFormworkImg from "@/assets/products/civil/bim2form-formwork.jpg";

// Ultimate/Professional'dan ortak görseller
import interfacesImg from "@/assets/products/allplan-ultimate/interfaces.jpg";
import terrainModelImg from "@/assets/products/allplan-ultimate/terrain-model.jpg";
import urbanLandscapeImg from "@/assets/products/allplan-ultimate/urban-landscape.jpg";
import sewerageUtilitiesImg from "@/assets/products/allplan-ultimate/sewerage-utilities.jpg";
import quantityCostingImg from "@/assets/products/allplan-ultimate/quantity-costing.jpg";
import constructionSiteImg from "@/assets/products/allplan-ultimate/construction-site.jpg";
import groundworksImg from "@/assets/products/allplan-ultimate/groundworks.jpg";
import excavationImg from "@/assets/products/allplan-ultimate/excavation.jpg";
import precastDesignImg from "@/assets/products/allplan-ultimate/precast-design.jpg";
import elementPlanImg from "@/assets/products/allplan-ultimate/element-plan.jpg";
import visualizationImg from "@/assets/products/allplan-ultimate/visualization.jpg";
import advancedVisualizationImg from "@/assets/products/allplan-ultimate/advanced-visualization.jpg";
import aiVisualizationImg from "@/assets/products/allplan-ultimate/ai-visualization.jpg";
import sciaUltimateImg from "@/assets/products/allplan-ultimate/scia-concept.jpg";
import licenseServerImg from "@/assets/products/allplan-ultimate/license-server.jpg";
import bimplusProImg from "@/assets/products/allplan-ultimate/bimplus-pro.jpg";
import cloudStorageImg from "@/assets/products/allplan-ultimate/cloud-storage.jpg";

// Video thumbnail görselleri
import drafting2dImg from "@/assets/products/allplan-professional/2d-drafting.jpg";
import modeling3dImg from "@/assets/products/allplan-professional/3d-modeling.jpg";
import clashDetectionImg from "@/assets/products/allplan-professional/clash-detection.jpg";
import bimEasyImg from "@/assets/products/allplan-professional/bim-easy.jpg";
import buildingComponentsImg from "@/assets/products/allplan-professional/building-components.jpg";
import reinforcementImg from "@/assets/products/allplan-professional/reinforcement.jpg";
import steelConnectionsImg from "@/assets/products/allplan-professional/steel-connections.jpg";
import roadsImg from "@/assets/products/allplan-professional/roads.jpg";
import externalDataImg from "@/assets/products/allplan-professional/external-data-sources.jpg";

interface FeatureItem {
  title: string;
  description: string;
  image?: string | StaticImageData;
  youtubeId?: string;
  thumbnailUrl?: string | StaticImageData;
}

export default function Page() {
  const challenges = [
    "Proje maliyetlerinizin ve zaman gecikmelerinin kontrolden çıkmasıyla ilgili sürekli endişeler.",
    "Paydaşlardan proje aşamalarını kabul etmek için onayların gecikmesi, bu da gecikmelere yol açıyor.",
    "Sürekli proje değişiklikleri çok fazla zaman alıyor, bu da kaliteyi etkiliyor ve risk oluşturuyor.",
    "Mevcut proje teslimatları çok uzun sürüyor, bu nedenle potansiyel yeni projelere taahhüt veremiyorsunuz.",
  ];

  const stats = [
    { value: 100, suffix: "%", label: "TUTARLI VERİ", description: "Her şey tek bir yazılım çözümü ile gerçekleştirildiği için ortak veri ortamı, farklı çözümler arasında gereksiz veri alışverişini ve yeniden veri girişini en aza indirir." },
    { value: 63, suffix: "%", label: "DAHA FAZLA ZAMAN", description: "Proje şablonlarının adapte edilmesi ve tasarım aşaması boyunca hızlı, kolay ve güvenilir bir şekilde gerçekleştirilen model değişiklikleri sayesinde zaman tasarrufu." },
    { value: 100, suffix: "%", label: "DAHA KESİN", description: "Özellikle köprüler için uyarlanmış modelleme teknikleri ve prefabrik kiriş köprüleri gibi farklı köprü türlerine yönelik iş akışları sayesinde hassas modelleme." },
    { value: 100, suffix: "%", label: "DAHA VERİMLİ", description: "Parametrik model tanımının bir sonucu olarak verilerin yeniden kullanılması; örneğin, bir ayak gibi modellenmiş köprü elemanları, şablon olarak kaydedilip sonraki projelerde tekrar kullanılabilir." },
  ];

  const benefits = [
    { icon: parametricRoadIcon, subtitle: "Parametrik", title: "Yol Modelleme", description: "Bina ve altyapı projelerinize yol tasarımlarını entegre etmek için güçlü ve kullanımı kolay modelleme işlevleri." },
    { icon: precise3dReinforcementIcon, subtitle: "Kesin", title: "3D Donatı", description: "Donatı gereksinimlerinin hızlı tasarımı ve detaylandırılması için otomatik çözümler, önemli ölçüde zaman tasarrufu sağlar ve kaliteyi garanti eder." },
    { icon: interdisciplinaryIcon, subtitle: "Tek Yazılım", title: "Çözümü", description: "Tüm inşaat türleri için uygun, küçükten büyük ve karmaşık modellere kadar geniş model verilerini hızlı ve güvenli bir şekilde kayıpsız işleyebilen tek yazılım çözümü." },
    { icon: detailPrecastIcon, subtitle: "Varyantlar ve", title: "Şablonlar Hızla Oluşturun", description: "Yol planını, köprü hizalamasını ve gerekli en kesitleri dikkate alan 3D parametrik model tanımı, model yapılandırmasını ve varyasyonlarını hızlı ve kolay hale getirir." },
    { icon: seamlessIntegrationIcon, subtitle: "Entegre", title: "Yapısal Analiz", description: "ALLPLAN, geometrik modelden analiz modelini ve tanımlı inşaat sırasına göre tüm hesaplama adımlarını otomatik olarak oluşturur. Bu, iş yükünü büyük ölçüde azaltır ve hata olasılığını minimuma indirir." },
    { icon: visualSchedulingIcon, subtitle: "Kod Tabanlı", title: "Tasarım", description: "Tüm kalıcı ve değişken yükler birbiriyle birleştirilerek nihai bir zarf oluşturulur. Bu zarf, donatı tasarımı ve yönetmelik kontrollerinin gerçekleştirilmesinde kullanılır." },
    { icon: siteModellingIcon, subtitle: "Değişiklikleri", title: "Kolayca Uygulayın", description: "Herhangi bir değişiklik durumunda, örneğin hizalamayla ilgili, tüm 4D model otomatik olarak uyarlanır. Dolayısıyla, eksen geometrisi değişirse köprü modeli de otomatik olarak güncellenir." },
    { icon: bim2fieldIcon, subtitle: "Daha Doğru", title: "Teslimatlar", description: "İlk planlardan malzeme ve miktarlara, genel yerleşim ve donatı çizimlerine kadar her aşamada güvenilir kalite ve doğruluk sağlar." },
  ];

  const workflowCards = [
    {
      title: "Altyapı Modelleme için ALLPLAN Ultimate",
      description: "Öngerilmeli tendonları içeren parametrik modelleme, parametrik yol tasarımı, hafriyat ve kazı araçları, parametrik donatı tasarımı.",
      image: workflowParametricModelingImg,
      buttons: [{ label: "ALLPLAN Ultimate", href: "/products/allplan-ultimate", external: false }]
    },
    {
      title: "Köprü Analizi ve Tasarımı için İş Akışları",
      description: "Köprü Analizi ve Tasarımı. Donatı tasarımı ve yönetmelik kontrolleri ile entegre köprü yapısal analizi.",
      image: workflowBridgeAnalysisImg,
      buttons: [
        { label: "Köprü İş Akışlarını Görün", href: "/solutions/bridge-design", external: false },
        { label: "Kirişli Köprü İş Akışını Görün", href: "/solutions/modeling-of-precast-girder-bridges", external: false }
      ]
    },
    {
      title: "Yapısal Analiz için İş Akışları",
      description: "Tüm bina, endüstriyel ve inşaat yapıları için SCIA Engineer Ultimate. Her türlü yapı için çok malzemeli yapısal analiz yazılımı ve tasarım aracı.",
      image: workflowSciaCivilImg,
      buttons: [{ label: "Daha Fazla Bilgi Edinin (SCIA Web Sitesi)", href: "https://www.scia.net/en", external: true }]
    },
  ];

  const coreFeatures: FeatureItem[] = [
    { title: "Parametrik Modelleme", description: "Köprüler, tüneller, istinat duvarları, gürültü bariyerleri gibi sivil yapıların dört boyutlu parametrik modelleme ve detaylandırması için özel bir çözüm; ayrıca prefabrik kiriş köprüleri gibi özel köprü türlerini de içerir.", image: civilParametricModelingImg },
    { title: "Parametrik Ön Germe", description: "Ön germe tendonlarının modellenmesi.", image: civilParametricPrestressingImg },
    { title: "Köprü Yapısal Analizi", description: "Köprülerin yapısal analizi için özel bir çözüm.", image: bridgeStructuralAnalysisImg },
    { title: "Köprü Kod Tabanlı Tasarım", description: "Eurocode'a ve ulusal eklerine, ayrıca AASHTO LRFD'ye göre tasarım ve kontroller.", image: bridgeCodeDesignImg },
    { title: "Arayüzler", description: "Sorunsuz veri alışverişi için tüm ilgili dosya arayüzleri, IFC, BCF, PDF, RVT, 3DM, SKP, OBJ, LandXML, DWG, DGN, C4D, STL, WRL, SAF ve daha fazlasını içerir. Yazılım arayüzleri (örn. Python API ve Görsel Betikleme) otomatik iş akışlarını sağlar.", image: interfacesImg },
    { title: "Harici Veri Kaynakları", description: "GIS bilgilerini, 3D içerik ve dokuları içe aktarmak için GIS Bağlayıcı ve İçerik Bağlayıcı.", youtubeId: "LF6p7dQASR8", thumbnailUrl: civilExternalDataImg },
    { title: "3D Modelleme", description: "Son derece karmaşık ve zorlu geometriler için yüksek performanslı 3D modelleme. Modelleme işlevselliği, Siemens Parasolid modelleme çekirdeği ile desteklenmektedir.", youtubeId: "kxDkWW01hRY", thumbnailUrl: civil3dModelingImg },
    { title: "2D Çizim", description: "Çekici, özlü ve detaylı çizimler için hassas 2D çizim için kapsamlı işlevsellik.", youtubeId: "_b6Z-1U8Ri4", thumbnailUrl: drafting2dImg },
    { title: "Görselleştirme", description: "Vulkan gibi en son teknolojilere dayanan geniş bir görselleştirme yelpazesi. Gerçek zamanlı Render ve CineWare'ı içerir, Lumion ve Twinmotion'a canlı bağlantılar.", youtubeId: "IqNuiMaveas", thumbnailUrl: visualizationImg },
    { title: "Gelişmiş Görselleştirme", description: "MAXON'dan yüksek performanslı GPU hızlandırmalı Redshift render.", image: advancedVisualizationImg },
    { title: "Çarpışma Tespiti", description: "Yumuşak ve sert çarpışmaları tanımlamak için araç.", youtubeId: "gZuNqBEX4GA", thumbnailUrl: clashDetectionImg },
    { title: "İçerik Paketi BIM EASY", description: "Önceden tanımlanmış ancak özelleştirilebilir şirket standardı. Modellerin ve çizimlerin oluşturulmasında tutarlı bir çalışma şekli sağlar. Başlangıçta kolaylık sağlar, verimliliği artırır ve özellikle openBIM projelerinde iyi yapılandırılmış veri alışverişini garanti eder.", youtubeId: "RyUl97kMQ88", thumbnailUrl: bimEasyImg },
    { title: "Yapı Bileşenleri", description: "Duvarlar, döşemeler, kirişler, kolonlar, temeller, merdivenler, çatılar, pencereler, kapılar ve cepheler gibi esnek yapı bileşenleri.", youtubeId: "DX7oODCOgeI", thumbnailUrl: buildingComponentsImg },
    { title: "Arazi Modeli", description: "Ölçüm noktaları veya nokta bulutlarına dayanan güçlü arazi modelleme.", image: terrainModelImg },
    { title: "Kentsel ve Peyzaj Tasarımı", description: "Kütle modelleri, kentsel ve yer tasarımı ile birlikte bitkilendirme planları için işlevler.", image: urbanLandscapeImg },
    { title: "Kanalizasyon ve Altyapı", description: "Su, atık su, elektrik, internet, doğalgaz veya merkezi ısıtma gibi hizmetlerin rotalanması.", image: sewerageUtilitiesImg },
    { title: "Miktar Hesaplaması ve Maliyetlendirme", description: "Modelleme yapılmış ve yapılmamış nesnelerin kesin, doğrulanabilir miktar hesaplaması ve maliyetlendirilmesi.", youtubeId: "toZosw6NtMQ", thumbnailUrl: quantityCostingImg },
    { title: "Donatı", description: "Son derece güçlü donatı işlevselliği, çubuk donatısı, ağ donatısı ve BAMTEC halılarını içerir.", youtubeId: "SB-ULI92gKY", thumbnailUrl: reinforcementImg },
    { title: "Çelik Bağlantılar", description: "Cıvatalı ve kaynaklı çelik bağlantılar için araçlar.", youtubeId: "JnxPHPvNG_M", thumbnailUrl: steelConnectionsImg },
    { title: "Yollar", description: "Tam parametrik yol tasarımı, kesişmeler, trafik daireleri ve araç dönme yolu analizi dahil.", youtubeId: "PGTnLKV0OPE", thumbnailUrl: roadsImg },
    { title: "Şantiye Hazırlığı", description: "Vinçler, konteynerler, şantiye çitleri ve inşaat sahası yerleşimini planlamak için diğer ekipmanlar.", image: constructionSiteImg },
    { title: "Zemin Çalışmaları", description: "Akıllı kazı destekleme sistemleri, bored pile (delikli kazık), soldier pile duvarları ve zemin ankrajları gibi çözümleri içerir.", image: groundworksImg },
    { title: "Kazı", description: "Kazı alanlarını modellemek ve kazı çizimleri oluşturmak için kullanılan araçlar.", youtubeId: "YYC94jU_pvg", thumbnailUrl: excavationImg },
    { title: "Prefabrik Tasarım ve Detaylandırma", description: "Akıllı prefabrik beton bileşenleri, örneğin kirişler, kolonlar, merdivenler vb.", youtubeId: "jECn0KjKgmY", thumbnailUrl: precastDesignImg },
    { title: "Eleman Planı", description: "Tekil elemanların detaylı çizimlerinin otomatik, şablon bazlı olarak üretilmesi.", image: elementPlanImg },
  ];

  // Civil için ek bulut hizmetleri (şu an boş)
  const additionalCloudServices: CloudServiceItem[] = [];

  const purchaseOptions = [
    { title: "BIM²form Eklentisi - Kalıp", description: "Kalıp yerleştirmek için araçlar.", youtubeId: "s-NKwOU0XAw", thumbnailUrl: bim2formFormworkImg },
    { title: "Lisans Server", description: "Mevcut lisansların birden fazla kullanıcı tarafından optimal şekilde kullanılmasını sağlar. Ofis dışında lisans kullanımı mümkündür.", image: licenseServerImg },
    { title: "BIMPLUS Pro", description: "Bulut iş birliği kapasitenizi artırmak için ek Bimplus Pro lisansları.", image: bimplusProImg },
    { title: "ALLPLAN Bulut Depolama", description: "Projelerinizin kesintisiz devam etmesini sağlamak için ek depolama alanı.", image: cloudStorageImg },
  ];

  const faqs = [
    { question: "ALLPLAN CIVIL, ALLPLAN BRIDGE'İ Mİ DEĞİŞTİRİR?", answer: "Evet, ALLPLAN 2025 sürümünün yayımlanmasıyla birlikte, ALLPLAN Civil sürümü abonelik tabanlı ALLPLAN Bridge yapılandırmasını değiştirmektedir." },
    { question: "ALLPLAN BRIDGE VE ALLPLAN CIVIL ARASINDAKİ FARKLAR NELERDİR?", answer: "ALLPLAN Bridge ve ALLPLAN Civil abonelikleri arasındaki temel fark, ALLPLAN Civil'in ALLPLAN Ultimate'ın tüm işlevselliğinin yanı sıra SCIA Engineer Ultimate'ı da içermesidir." },
    { question: "ALLPLAN CIVIL ALTYAPI TASARIMI VE İNŞAAT ŞİRKETLERİ İÇİN MİDİR?", answer: "Evet, ALLPLAN Civil, altyapı tasarımı ve inşaat şirketleri için en iyi çözümümüzdür. Tasarım ve inşaat sürecinin tamamını destekleyen gelişmiş altyapı tasarımı için bir çözümdür ve köprüler ile altyapı yapıları, prefabrikasyon ve inşaat iş akışları için özel araçlar içerir." },
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-black/80 to-black/40">
        <div className="absolute inset-0 opacity-[0.02] bg-technical-grid" />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">/ ALLPLAN Civil</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">İleri Düzey Altyapı Tasarımından <span className="text-accent">İnşa Akışlarına</span> yönelik Çözüm.</h1>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90"><a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">Ücretsiz Dene<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button variant="outline" size="lg" asChild><a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">Teklif Talep Formu</a></Button>
              <Button variant="outline" size="lg" asChild><a href="https://www.allplan.com/subscription-faq/" target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4" />Abonelik SSS</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Post Hero - ALLPLAN Civil Nedir? */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium mb-4 block">/ ALLPLAN Civil Nedir?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">ALLPLAN Civil, çok disiplinli ve inşaat mühendisliği danışmanlıkları için gelişmiş altyapı tasarımından inşa süreçlerine yönelik nihai çözümdür.</h2>
              <p className="text-muted-foreground mb-6 font-semibold">ALLPLAN Ultimate&apos;ın tüm özelliklerine ek olarak:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-accent">&gt;</span><span>Entegre köprü yapısal analizi</span></li>
                <li className="flex items-start gap-2"><span className="text-accent">&gt;</span><span>Donatı tasarımı ve kod kontrolü</span></li>
                <li className="flex items-start gap-2"><span className="text-accent">&gt;</span><span>SCIA Ultimate ile yapısal analiz ve tasarım</span></li>
              </ul>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/tFnwOyX7ncI" title="ALLPLAN Civil Tanıtım" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <StatsTemplate title="" items={stats} />

      {/* Zorluklar Bölümü */}
      <ChallengesSection items={challenges} />

      {/* Faydalar Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">ALLPLAN Civil&apos;in Faydaları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* ALLPLAN'ın Neler Yapabileceğini Görün */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">ALLPLAN&apos;ın Neler Yapabileceğini Görün</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {workflowCards.map((card, index) => (
              <Card key={index} className="overflow-hidden group border border-white/10 hover:border-white/20 bg-graphite-950">
                <div className="aspect-video overflow-hidden relative">
                  <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.buttons.map((btn, btnIndex) => (
                      btn.external ? (
                        <Button key={btnIndex} variant="outline" size="sm" asChild>
                          <a href={btn.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            {btn.label}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      ) : (
                        <Button key={btnIndex} variant="outline" size="sm" asChild>
                          <Link href={btn.href}>{btn.label}</Link>
                        </Button>
                      )
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fonksiyonellik Hızlı Bakış */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium">ALLPLAN Civil Özellikleri</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">Fonksiyonellik Hızlı Bakış</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="overflow-hidden group border border-white/10 hover:border-white/20 bg-graphite-950">
                <div className="aspect-video overflow-hidden relative">
                  {feature.youtubeId ? (
                    <VideoModal youtubeId={feature.youtubeId} title={feature.title} thumbnailUrl={feature.thumbnailUrl} className="w-full h-full" />
                  ) : (
                    <Image src={feature.image!} alt={feature.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SCIA Ultimate Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-medium mb-4 block">ALLPLAN Civil Aboneliğine Dahil Olarak: SCIA Ultimate</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Yapısal Analiz ve Tasarım – SCIA Engineer</h2>
              <p className="text-muted-foreground mb-6"><strong>SCIA Engineer:</strong> Tüm projeleriniz için yüksek performanslı, güvenilir çok malzemeli yapısal analiz ve tasarım yazılımı.</p>
              <h3 className="text-xl font-bold text-foreground mb-4">SCIA Engineer – Ultimate Sürümü</h3>
              <p className="text-muted-foreground mb-6">Ultimate Sürüm, yüksek katlı veya karmaşık binalar, köprüler ve altyapı yapıları gibi en zorlu yapıları tasarlayan yapı mühendisleri için uygundur. Zemin-yapı etkileşimi, beton için malzeme doğrusal olmayan analizi, inşaat aşamaları analizi ve öngerilmeli beton tasarımı gibi ileri düzey analiz türlerini içerir.</p>
              <Button variant="outline" asChild><a href="https://www.scia.net/en/scia-engineer/editions-comparison" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">SCIA Engineer karşılaştırmasına erişin<ExternalLink className="w-4 h-4" /></a></Button>
            </div>
            <div className="rounded-xl overflow-hidden"><Image src={sciaUltimateImg} alt="SCIA Ultimate" className="w-full h-auto" /></div>
          </div>
        </div>
      </section>

      {/* ALLPLAN Bulut Hizmetleri */}
      <CloudServicesSection variant="civil" additionalServices={additionalCloudServices} />

      {/* Satın Alınabilir Seçenekler */}
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
                    <VideoModal youtubeId={option.youtubeId} title={option.title} thumbnailUrl={option.thumbnailUrl} className="w-full h-full" />
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

      {/* SSS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">SSS - ALLPLAN Civil</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-foreground text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
