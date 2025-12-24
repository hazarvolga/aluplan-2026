"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowRight, ZoomIn, X, FileText, Layers, MousePointerClick, Box, Import, Database, ExternalLink } from "lucide-react";
import Link from "next/link";
import ChallengesSection from "@/components/ChallengesSection";
import StatsSection from "@/components/StatsSection";
import { WorkflowLinksSection } from "@/components/WorkflowLinksSection";
import heroImage from "@/assets/solutions/precast-hero.jpg";
import automatedPrecastImg from "@/assets/products/precast/automated-precast-design.jpg";
import automatedShopDrawingsImg from "@/assets/products/precast/automated-shop-drawings.jpg";
import highlyAutomatedFabImg from "@/assets/products/precast/highly-automated-fabrication.jpg";
import wallDesignImg from "@/assets/products/precast/wall-design.jpg";
import wallDivisionImg from "@/assets/products/precast/wall-division.jpg";
import wallReinforcementImg from "@/assets/products/precast/wall-reinforcement.jpg";
import wallFixturesImg from "@/assets/products/precast/wall-fixtures.jpg";
import wallProductionDataImg from "@/assets/products/precast/wall-production-data.jpg";
import slabDesignImg from "@/assets/products/precast/slab-design.jpg";
import slabDivisionImg from "@/assets/products/precast/slab-division.jpg";
import slabReinforcementImg from "@/assets/products/precast/slab-reinforcement.jpg";
import slabFixturesImg from "@/assets/products/precast/slab-fixtures.jpg";
import slabProductionDataImg from "@/assets/products/precast/slab-production-data.jpg";
import easyImportBimImg from "@/assets/products/precast/easy-import-bim.jpg";
import parametricModelingImg from "@/assets/products/precast/parametric-modeling.jpg";
import resourceInfographicImg from "@/assets/products/precast/resource-infographic.jpg";
import resourceWhitepaperImg from "@/assets/products/precast/resource-whitepaper.jpg";
import resourceChecklistImg from "@/assets/products/precast/resource-checklist.jpg";
import iconAutomatedWorkflows from "@/assets/products/precast/icons/automated_workflows.png";
import iconWorkWayWant from "@/assets/products/precast/icons/work_way_want.png";
import iconSaveTimeOneClick from "@/assets/products/precast/icons/save_time_1_click_reinforcement.png";
import iconPowerfulModeling from "@/assets/products/precast/icons/powerful_modeling.png";
import iconBim2Field from "@/assets/products/precast/icons/bim2field.png";
import iconAccurateProductionData from "@/assets/products/precast/icons/accurate_production_data.png";

export default function Page() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string | StaticImageData; title: string } | null>(null);

  const stats = [
    { value: 52, suffix: "%", label: "Verimlilik Artışı", description: "Yüksek düzeyde otomatik iş akışlarıyla verimliliği artırın." },
    { value: 60, suffix: "%", label: "Daha Yüksek Kalite", description: "Doğrulama kuralları ve kontrollerle hata oranını azaltın." },
    { value: 75, suffix: "%", label: "Daha Hızlı Tasarım", description: "Özelleştirilmiş tekniklerle hassas modelleme." },
    { value: 50, suffix: "%", label: "Daha Fazla Performans", description: "IFC nesnelerini akıllı prefabrik elemanlara dönüştürün." },
  ];

  const structuralFeatures = [
    { title: "Otomatik Prefabrik Tasarım", description: "Her türlü karmaşıklık ve geometrideki yapısal prefabrik elemanları hızlı ve kolay bir şekilde tasarlayın ve detaylandırın.", image: automatedPrecastImg },
    { title: "Otomatik Üretim Paftaları", description: "Donatı, fikstür ve ölçülendirme dahil olmak üzere yüksek düzeyde otomatikleştirilmiş üretim paftalarını hızlı bir şekilde oluşturun.", image: automatedShopDrawingsImg },
    { title: "BIM Modellerinin Kolay İçe Aktarılması", description: "Mimari modellerin yanı sıra MEP objelerini de hızla içe aktarın ve bunları prefabrik tasarımınız için yeniden kullanın.", image: easyImportBimImg },
    { title: "Parametrik veya Serbest Modelleme", description: "Prefabrik elemanları parametrik girdiyle oluşturun veya bunları tamamen özgürce modelleyin.", image: parametricModelingImg },
    { title: "Yüksek Düzeyde Otomatik Üretime Yönelik Araçlar", description: "Özel Allplan Prekast çözümümüz, duvarların ve döşemelerin yüksek düzeyde otomatik tasarım ve detaylandırılmasını sağlar.", image: highlyAutomatedFabImg },
  ];

  const wallFeatures = [
    { title: "Yüksek Düzeyde Otomatik Duvar Tasarımı", description: "Katı, çift, sandviç, tuğla ve termal duvarları her zamankinden daha hızlı ve daha doğru bir şekilde modelleyin.", image: wallDesignImg },
    { title: "Otomatik Duvar Bölmeleri", description: "Allplan Prefabrik Duvarlar, bireysel üretim tesislerinize göre duvarları akıllıca üretilebilir ve teslim edilebilir duvar elemanlarına ayırır.", image: wallDivisionImg },
    { title: "Üreticiye Özel Donatı", description: "Allplan Prefabrik Duvarlar, özel üretim yeteneklerinize mükemmel şekilde uyum sağlayan donatı verilerini otomatik olarak üretir.", image: wallReinforcementImg },
    { title: "Fikstürler Kolaylaştı", description: "Stok durumuna ve ağırlığa bağlı olarak eğimli destekler için kaldırma ankrajları veya manşonlar gibi fikstürleri otomatik olarak hesaplayın.", image: wallFixturesImg },
    { title: "Güvenilir Üretim Verileri", description: "Ticari ve üretimle ilgili verilerin sağlanmasında mutlak hassasiyete güvenin.", image: wallProductionDataImg },
  ];

  const slabFeatures = [
    { title: "Yüksek Düzeyde Otomatik Döşeme Tasarımı", description: "Allplan Prekast Döşemeler, eleman döşemeleri, masif döşemeler ve boşluklu döşemeler tasarlarken büyük miktarda zaman tasarrufu yapmanızı sağlar.", image: slabDesignImg },
    { title: "Otomatik Döşeme Bölmeleri", description: "Allplan Prefabrik Döşemeler, bireysel üretim tesislerinize göre döşemeleri akıllı bir şekilde üretilebilir ve teslim edilebilir döşeme elemanlarına ayırır.", image: slabDivisionImg },
    { title: "Üretime Özel Donatı", description: "Allplan Prefabrik Döşemeler, özel üretim yeteneklerinize mükemmel şekilde uyum sağlayan donatı verilerini otomatik olarak üretir.", image: slabReinforcementImg },
    { title: "Otomatik İş Akışları", description: "Allplan Prefabrik Döşemeler kompozit girintileri otomatik olarak yerleştirir ve birleşimli sistemler için maksimum esneklik sunar. Yazılım, filigran döşemeler için kesme kuvveti ve bağ kontrolü gerçekleştirir ve gerekirse gerekli kafes kirişlerini kurar.", image: slabFixturesImg },
    { title: "Güvenilir Üretim Verileri", description: "Ticari ve üretimle ilgili verilerin sağlanmasında mutlak hassasiyete güvenin.", image: slabProductionDataImg },
  ];

  const challenges = [
    "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri.",
    "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri.",
    "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri.",
  ];

  const benefits = [
    { title: "Üretim Çizimlerini Otomatik Oluşturun", description: "Donatı, fikstür ve ölçülendirme dahil verimli üretim çizimleri.", image: iconAutomatedWorkflows, icon: FileText },
    { title: "Çalışma Yönteminizi Seçin", description: "Plan ve model tutarlı; 2D veya 3D’de rahat çalışın.", image: iconWorkWayWant, icon: Layers },
    { title: "1-Tıklama Donatı", description: "Duvar ve döşeme için temel donatıları otomatik oluşturun.", image: iconSaveTimeOneClick, icon: MousePointerClick },
    { title: "Parametrik veya Serbest", description: "Parametrik girdiyle verimli veya tamamen özgür modelleme.", image: iconPowerfulModeling, icon: Box },
    { title: "BIM İçeriğini İçe Aktarın", description: "Mimari ve MEP nesnelerini içe aktarın ve yeniden kullanın.", image: iconBim2Field, icon: Import },
    { title: "Doğru Üretim Verileri", description: "Tek tıklamayla güvenilir üretim verileri.", image: iconAccurateProductionData, icon: Database },
  ];

  const resources = [
    { title: "Infographic #1 \"Why Prefab\"", subtitle: "Growth rates and advantages", image: resourceInfographicImg, link: "https://info.allplan.com/en/gc/precast-infographic.html" },
    { title: "Precast Whitepaper #1", subtitle: "The prefab revolution", image: resourceWhitepaperImg, link: "https://info.allplan.com/en/precast/construction-trend.html" },
    { title: "Checklist \"Precast Software\"", subtitle: "35 success factors", image: resourceChecklistImg, link: "https://info.allplan.com/en/gc/precast-checklist.html" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Allplan Precast Hero"
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
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">/ ALLPLAN PRECAST</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">PREKAST TASARIMI İÇİN <span className="text-accent">EŞSİZ BIM ÇÖZÜMÜ</span></h1>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90" asChild><a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">Ücretsiz Dene<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button size="lg" variant="outline" asChild><a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">Teklif Talep Formu</a></Button>
              <Button size="lg" variant="outline" asChild><a href="/solutions-v2/faq"><ExternalLink className="mr-2 h-4 w-4" />Abonelik SSS</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">ALLPLAN PREKAST NEDİR?</Badge>
              <p className="text-lg text-muted-foreground mb-6">Allplan Precast, yapısal prefabrik elemanların, prefabrik duvarların ve döşemelerin yüksek düzeyde otomatik ve hassas tasarımını sağlar. Çözümümüz, prefabrik beton projenizin tüm aşamalarında sizi en iyi şekilde destekler.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><span className="h-5 w-5 text-accent mt-0.5 flex-shrink-0">•</span><span className="text-muted-foreground">Etkileyici 3B tekliften, doğru üretim verilerini içeren hassas 3B modele.</span></li>
                <li className="flex items-start gap-3"><span className="h-5 w-5 text-accent mt-0.5 flex-shrink-0">•</span><span className="text-muted-foreground">Maksimum üretkenliğe olanak tanıyan otomatik iş akışları.</span></li>
                <li className="flex items-start gap-3"><span className="h-5 w-5 text-accent mt-0.5 flex-shrink-0">•</span><span className="text-muted-foreground">Akıllı kalite güvencesi ile güvenilir veri ve en yüksek hassasiyet.</span></li>
              </ul>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden"><iframe className="w-full h-full" src="https://www.youtube.com/embed/AaFWnMNTgVs" title="Accelerated Precast Design with Allplan" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          </div>
        </div>
      </section>

      <WorkflowLinksSection
        links={[
          { text: "Sürümleri Görüntüle", href: "/package-overview", external: true, color: "#8B5CF6" },
          { text: "Tasarım için İş Akışları", href: "/solutions/architecture#mimari-is-akislari", external: false, color: "#3B82F6" },
          { text: "İnşaat Mühendisliği için İş Akışları", href: "/solutions/structural#insaat-muhendisligi-is-akislari", external: false, color: "#10B981" },
          { text: "Altyapı Mühendisliği için İş Akışları", href: "/solutions/infrastructure#altyapi-muhendisligi-is-akislari", external: false, color: "#F59E0B" },
        ]}
      />

      <ChallengesSection items={challenges} />
      <StatsSection items={stats} variant="animated" />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">Allplan Precast&apos;ın Faydaları</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon as any; return (
                <Card key={index} className="overflow-hidden"><CardContent className="p-6 flex gap-4 items-start"><div className="flex-shrink-0"><div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center"><IconComponent className="w-6 h-6 text-accent" /></div></div><div><span className="text-accent text-sm font-medium">/ {benefit.title}</span><p className="text-muted-foreground text-sm mt-2">{benefit.description}</p></div></CardContent></Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><Badge className="mb-4 bg-accent/10 text-accent border-accent/20">ÖZELLİKLER</Badge><h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Allplan Precast&apos;ın Özellikleri</h2><p className="text-muted-foreground max-w-2xl mx-auto">Prefabrik tasarım sürecinizi hızlandıran güçlü özellikler</p></div>
          <Tabs defaultValue="structural" className="w-full">
            <div className="flex justify-start mb-12">
              <TabsList className="inline-flex h-auto p-1.5 bg-muted rounded-2xl border border-border flex-wrap justify-start gap-2">
                <TabsTrigger value="structural" className="relative px-6 py-4 text-sm md:text-base font-medium rounded-xl transition-all duration-300 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"><span className="flex items-center gap-2"><span className="hidden sm:inline text-accent/70">1 \</span><span>Structural Precast</span></span></TabsTrigger>
                <TabsTrigger value="walls" className="relative px-6 py-4 text-sm md:text-base font-medium rounded-xl transition-all duration-300 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"><span className="flex items-center gap-2"><span className="hidden sm:inline text-accent/70">2 \</span><span>Precast Walls</span></span></TabsTrigger>
                <TabsTrigger value="slabs" className="relative px-6 py-4 text-sm md:text-base font-medium rounded-xl transition-all duration-300 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"><span className="flex items-center gap-2"><span className="hidden sm:inline text-accent/70">3 \</span><span>Precast Slabs</span></span></TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="structural" className="animate-fade-in">
              <Tabs defaultValue="structural-0" orientation="vertical" className="flex flex-col lg:flex-row lg:items-start gap-8">
                <TabsList className="flex lg:flex-col h-auto bg-background p-3 rounded-2xl border border-border lg:w-[409px] flex-shrink-0 gap-2 overflow-x-auto lg:overflow-visible">
                  {structuralFeatures.map((feature, index) => (
                    <TabsTrigger key={index} value={`structural-${index}`} className="group relative justify-start text-left w-full min-w-[200px] lg:min-w-0 py-4 px-5 rounded-xl transition-all duration-300 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold">{index + 1}</span><span className="text-sm font-medium leading-tight">{feature.title}</span></span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="flex-1 min-w-0">
                  {structuralFeatures.map((feature, index) => (
                    <TabsContent key={index} value={`structural-${index}`} className="mt-0 animate-fade-in">
                      <Card className="bg-card border border-border overflow-hidden rounded-xl">
                        <div className="relative overflow-hidden aspect-video">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                        <CardContent className="p-5">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </TabsContent>
            <TabsContent value="walls" className="animate-fade-in">
              <Tabs defaultValue="walls-0" orientation="vertical" className="flex flex-col lg:flex-row lg:items-start gap-8">
                <TabsList className="flex lg:flex-col h-auto bg-background p-3 rounded-2xl border border-border lg:w-[409px] flex-shrink-0 gap-2 overflow-x-auto lg:overflow-visible">
                  {wallFeatures.map((feature, index) => (
                    <TabsTrigger key={index} value={`walls-${index}`} className="group relative justify-start text-left w-full min-w-[200px] lg:min-w-0 py-4 px-5 rounded-xl transition-all duration-300 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold">{index + 1}</span><span className="text-sm font-medium leading-tight">{feature.title}</span></span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="flex-1 min-w-0">
                  {wallFeatures.map((feature, index) => (
                    <TabsContent key={index} value={`walls-${index}`} className="mt-0 animate-fade-in">
                      <Card className="bg-card border border-border overflow-hidden rounded-xl">
                        <div className="relative overflow-hidden aspect-video">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                        <CardContent className="p-5">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </TabsContent>
            <TabsContent value="slabs" className="animate-fade-in">
              <Tabs defaultValue="slabs-0" orientation="vertical" className="flex flex-col lg:flex-row lg:items-start gap-8">
                <TabsList className="flex lg:flex-col h-auto bg-background p-3 rounded-2xl border border-border lg:w-[409px] flex-shrink-0 gap-2 overflow-x-auto lg:overflow-visible">
                  {slabFeatures.map((feature, index) => (
                    <TabsTrigger key={index} value={`slabs-${index}`} className="group relative justify-start text-left w-full min-w-[200px] lg:min-w-0 py-4 px-5 rounded-xl transition-all duration-300 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      <span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold">{index + 1}</span><span className="text-sm font-medium leading-tight">{feature.title}</span></span>
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="flex-1 min-w-0">
                  {slabFeatures.map((feature, index) => (
                    <TabsContent key={index} value={`slabs-${index}`} className="mt-0 animate-fade-in">
                      <Card className="bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden rounded-2xl shadow-xl">
                        <div className="relative overflow-hidden cursor-pointer group aspect-video" onClick={() => setLightboxImage({ src: feature.image, title: feature.title })}>
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                              <ZoomIn className="w-5 h-5 text-foreground" />
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-5">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}><DialogContent className="max-w-5xl p-0 bg-transparent border-none">{lightboxImage && (<div className="relative"><Image src={lightboxImage.src} alt={lightboxImage.title} width={1200} height={800} className="w-full h-auto rounded-lg shadow-2xl" /><button onClick={() => setLightboxImage(null)} className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"><X className="h-8 w-8" /></button></div>)}</DialogContent></Dialog>

      <section className="py-20 bg-background"><div className="container mx-auto px-4"><h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Kaynaklar</h2><div className="grid md:grid-cols-3 gap-6">{resources.map((resource, index) => (<Card key={index} className="overflow-hidden group"><a href={resource.link} target="_blank" rel="noopener noreferrer"><div className="aspect-[4/3] overflow-hidden relative"><Image src={resource.image} alt={resource.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div><CardContent className="p-5"><h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3><p className="text-muted-foreground text-sm">{resource.subtitle}</p></CardContent></a></Card>))}</div></div></section>


      {/* CTA Section - Temporarily disabled */}
      {false && <section className="py-20 bg-accent/10"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">ALLPLAN Precast&apos;i Keşfedin</h2><p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Prefabrik beton projeleriniz için kapsamlı BIM çözümü.</p><div className="flex flex-wrap gap-4 justify-center"><Button size="lg" className="bg-accent hover:bg-accent/90" asChild><a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">Ücretsiz Dene<ArrowRight className="ml-2 h-5 w-5" /></a></Button><Button size="lg" variant="outline" asChild><a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">Teklif Talep Formu</a></Button></div></div></section>}
    </div>
  );
}
