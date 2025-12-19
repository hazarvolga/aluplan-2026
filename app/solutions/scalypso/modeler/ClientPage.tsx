"use client"
import SolutionHero from "@/components/SolutionHero";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import modelerImg from "@/assets/solutions/scalypso/modeler_color_01.jpg";

export default function ClientPage() {
  const cadSystems = [
    "ALLPLAN (Nemetschek)",
    "AutoCAD (Autodesk)",
    "BricsCAD (Bricsys)",
    "HiCAD (ISD Group)",
    "MicroStation/AECOsim/Open Building(s) Designer V8i (Bentley)",
    "Inventor (Autodesk)",
    "Revit (Autodesk)",
    "Solidworks (Dassault)",
    "Solid Edge (Siemens)",
    "ZWCAD+ (ZWSOFT)",
  ];

  const modules = [
    {
      title: "Pipe Module",
      description: "Karmaşık boru hatlarının yeniden inşası için",
      link: "https://www.scalypso.com/en/pipe-module/",
    },
    {
      title: "BIM Module",
      description: "Odaların veya tüm binaların geometrisini yeniden oluşturmak için",
      link: "https://www.scalypso.com/en/bim-module/",
    },
    {
      title: "Steel Module",
      description:
        "2000'den fazla eleman içeren bir kütüphaneye dayalı olarak çelik veya ahşap kirişlerin yeniden oluşturulması için",
      link: "https://www.scalypso.com/en/steel-module/",
    },
    {
      title: "Ortho Module",
      description:
        "2B planlar için arka plan katmanı olarak veya sunum amacıyla kullanılabilen, çarpıtılmamış projeksiyon görüntülerinin hesaplanması için",
      link: "https://www.scalypso.com/en/ortho-module/",
    },
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="SCALYPSO MODÜLÜ"
        title="Modeler"
        description="Lazer tarama nokta bulutlarından 3B geometrinin analizi ve yeniden oluşturulması için kullanımı kolay bir uygulama"
        primaryButton={{
          text: "Deneme Lisansı İste",
          href: "https://forms.office.com/r/XLQm9JPTSR",
          external: true,
        }}
        secondaryButton={{
          text: "Scalypso Ana Sayfa",
          href: "/solutions/scalypso",
        }}
      />
      <div className="bg-background">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <Image
                  src={modelerImg}
                  alt="Scalypso Modeler"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">
                  3B lazer veri tarama
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Bir lazer tarama cihazı ile gerçekliğin yakalanması, binaların veya endüstriyel alanların 
                  karmaşık yapılarının verimli bir şekilde sayısallaştırılmasına olanak tanır. Scalypso Modeler, 
                  lazer tarama nokta bulutlarından 3B geometrinin analizi ve yeniden oluşturulması için kullanımı 
                  kolay bir uygulamadır. Dijitalleştirme iş akışınızı hızlandırır, ayrıntı düzeyini kontrol 
                  etmenize olanak tanır ve farklı uygulamalar için uygun maliyetli bir çözüm sunar.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-6">
                  <span className="text-6xl font-bold text-muted-foreground">01</span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Geometrik elemanların yeniden yapılandırılması, akıllı nokta seçimi veya obje ayarlama 
                  algoritmalarına dayanır. Yazılım, birkaç yüksek çözünürlüklü taramayla aynı anda çalışmanıza 
                  izin verir ve taramanın 2.5B görüntüsünü temel alan basit bir arayüz sağlar. Çoklu CAD ve 3B 
                  modelleme uygulamalarına yönelik gerçek zamanlı bir arayüz, geometri öğelerini herhangi bir 
                  dönüştürme kaybı olmadan aktarır. Şu anda aşağıdaki sistemler desteklenmektedir:
                </p>
                <ul className="space-y-2">
                  {cadSystems.map((system, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">{system}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Scalypso Modeler, ihtiyaçlarınıza göre genişletilebilen modüler bir uygulama olarak 
                  tasarlanmıştır. Şu anda aşağıdaki modüller mevcuttur:
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-6"></div>
                <ul className="space-y-4">
                  {modules.map((module, index) => (
                    <li key={index}>
                      <a
                        href={module.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors flex items-start gap-2"
                      >
                        <span className="text-accent mt-1">•</span>
                        <span>
                          <strong>{module.title}</strong> {module.description}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {modules.map((module, index) => (
                <a
                  key={index}
                  href={module.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-technical transition-all duration-300 p-8 bg-card border border-border"
                >
                  <h4 className="font-display text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                    {module.title}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-accent rounded-2xl shadow-xl p-8 md:p-12 text-accent-foreground text-center">
                <h3 className="font-display text-3xl font-bold mb-4">
                  Deneme Lisansı İste
                </h3>
                <p className="text-accent-foreground/90 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                  Scalypso Modeler&apos;ı denemek ve projelerinizde kullanmak için deneme lisansı talep edin.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-card text-foreground hover:bg-muted"
                >
                  <a
                    href="https://forms.office.com/r/XLQm9JPTSR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Başvuru Formu İçin Tıklayın
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
