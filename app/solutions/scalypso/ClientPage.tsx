"use client"
import Footer from "@/components/Footer";
import SolutionHero from "@/components/SolutionHero";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import PremiumFeatureSection from "@/components/PremiumFeatureSection";
import PremiumModuleGrid from "@/components/PremiumModuleGrid";
import SupportedSoftwareList from "@/components/SupportedSoftwareList";
import SystemRequirementsCard from "@/components/SystemRequirementsCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Layers, Zap, Link2 } from "lucide-react";
import Image from "next/image";

import architectureImg from "@/assets/solutions/scalypso/architecture_1900_600.jpg";
import bridgeImg from "@/assets/solutions/scalypso/bridge_1900x600.jpg";
import industryImg from "@/assets/solutions/scalypso/industry_1900_600.jpg";
import industry2Img from "@/assets/solutions/scalypso/industry2_1900_600.jpg";
import shipImg from "@/assets/solutions/scalypso/ship_1900_600.jpg";
import modelerImg from "@/assets/solutions/scalypso/modeler_color_01.jpg";
import converterImg from "@/assets/solutions/scalypso/converter-202004-en.jpg";

export default function ClientPage() {
  const features = [
    {
      icon: <Layers className="w-12 h-12 text-accent" />,
      title: "Modüler ve Genişletilebilir",
      description:
        "Scalypso farklı uygulama ve modüllerden oluşmaktadır. İlk projeleriniz için temel bir sürümle başlayabilir ve onu adım adım geliştirerek bir Scalypso uzmanı olabilirsiniz.",
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Sanattan Bilime",
      description:
        "Gerçek dünyadan bir model oluşturmanın zorluğu farklı ortamlarda ortaya çıkıyor. Scalypso, endüstride, robotikte, gemi inşasında, BIM'de veya mimaride çalışıyor olmanız fark etmeksizin size gerekli araçları sağlar.",
    },
    {
      icon: <Link2 className="w-12 h-12 text-accent" />,
      title: "İki Dünya Arasında Köprü",
      description:
        "Scalypso yazılım araçları bir köprü gibi çalışır. Şu anda kullanmakta olduğunuz 3B araçlarla farklı lazer tarama donanımı satıcılarının dünyasını birbirine bağlarlar.",
    },
  ];

  const scannerSupport = [
    "ASCII formats",
    "Faro",
    "Leica",
    "Riegl",
    "Topcon",
    "Trimble",
    "Zoller & Fröhlich",
    "E57 formats",
  ];

  const cadSoftware = [
    "ALLPLAN (Nemetschek)",
    "Advance Steel (Autodesk)",
    "AutoCAD (Autodesk)",
    "BricsCAD (Bricsys)",
    "HiCAD (ISD Group)",
    "Inventor (Autodesk)",
    "MicroStation/AECOsim/Open Building(s) Designer V8i (Bentley)",
    "Revit (Autodesk)",
    "Solidworks (Dassault)",
    "Solid Edge (Siemens)",
    "Tekla Structures (Trimble)",
    "ZWCAD+ (ZWSOFT)",
  ];

  const systemRequirements = [
    "Son güncellemelerin yüklü olduğu Windows 10 (64 Bit), Windows 11",
    "Gerçek sistem donanımı (istek üzerine sanal makine ortamı desteklenir)",
    "AutoCAD, Allplan, Microstation, HiCAD, ZWCAD gibi bir uygulama",
  ];

  const modules = [
    {
      title: "CONVERTER",
      description:
        "Lazer tarama verilerini Scalypso formatına dönüştürün. Farklı tarayıcı markalarından gelen verileri tek bir formatta birleştirin.",
      imageSrc: converterImg,
      link: "/solutions/scalypso/converter",
    },
    {
      title: "MODELER",
      description:
        "3D lazer tarama verilerinden BIM modelleri oluşturun. BIM, Pipe, Ortho ve Steel modülleri ile genişletilebilir.",
      imageSrc: modelerImg,
      link: "/solutions/scalypso/modeler",
    },
    {
      title: "MOBILE",
      description:
        "Mobil cihazlardan lazer tarama verilerinize erişin ve sahada çalışın.",
      imageSrc: industryImg,
      link: "/solutions/scalypso/mobile",
    },
    {
      title: "VIEWER",
      description:
        "Nokta bulutu verilerini görüntüleyin, analiz edin ve ölçümler yapın.",
      imageSrc: bridgeImg,
      link: "/solutions/scalypso/viewer",
    },
    {
      title: "VİDEOLAR",
      description:
        "Scalypso modüllerinin kullanımını anlatan eğitim videoları ve demo kayıtları.",
      imageSrc: shipImg,
      link: "/solutions/scalypso/videos",
    },
  ];

  const applicationAreas = [
    {
      title: "Mimarlık",
      imageSrc: architectureImg,
    },
    {
      title: "Köprü ve Altyapı",
      imageSrc: bridgeImg,
    },
    {
      title: "Endüstri",
      imageSrc: industryImg,
    },
    {
      title: "Gemi İnşası",
      imageSrc: shipImg,
    },
    {
      title: "Robotik",
      imageSrc: industry2Img,
    },
  ];

  const sections = [
    <InfoMediaTwoColumn
      key="about"
      title="Hakkında"
      description="Scalypso, karasal ve mobil 3B lazer tarama verilerini kullanarak analiz ve yeniden oluşturma görevleri için bir yazılım paketidir. Uygulamalı olarak 3B lazer tarama cihazları ve 3B modelleme araçları ile çalışarak 20 yıllık tecrübe ile geliştirilmiştir. Scalypso'da 3B elemanların modellenmesi, ek yansıma veya renk bilgisi kullanılarak oluşturulabilen etkileşimli 2.5B aralık görüntü görünümlerine (düzlemsel veya küresel) dayalıdır. Yeniden yapılandırma sürelerini hızlandırmak için Scalypso, yeniden yapılandırılmış 3B elemanları gerçek zamanlı olarak 3B CAD uygulamalarına aktarmak için arabirimler sağlar."
      imageSrc={modelerImg}
    />,
    <PremiumFeatureSection
      key="features"
      title="Dijital Avantaj Kazanın"
      subtitle="20 yıllık tecrübe ile geliştirilmiş profesyonel araçlar"
      features={features}
      darkMode={false}
    />,
    <section key="scanner-support" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Desteklenen Tarayıcılar
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Scalypso, çok çeşitli farklı tarama cihazlarını destekleyerek her projeye özel uygun tarayıcı cihazlarının seçilmesine olanak tanır
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {scannerSupport.map((scanner, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg shadow-sm p-4 text-center hover:shadow-technical transition-shadow"
            >
              <span className="text-foreground font-semibold text-sm">
                {scanner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>,
    <PremiumModuleGrid
      key="modules"
      title="Scalypso Modülleri"
      subtitle="Lazer tarama verilerini Scalypso formatına dönüştürdükten sonra, verileri farklı uygulamalarda kullanabilirsiniz"
      modules={modules}
    />,
    <section key="applications" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Uygulamalar Her Yerde
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Gerçek dünyadan bir model oluşturmanın zorluğu farklı ortamlarda ortaya çıkıyor
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {applicationAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video w-full relative">
                <Image
                  src={area.imageSrc}
                  alt={area.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold text-lg">{area.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>,
    <SupportedSoftwareList
      key="cad-software"
      title="Desteklenen CAD Yazılımları"
      subtitle="Scalypso, yeniden yapılandırılmış 3B elemanları gerçek zamanlı olarak 3B CAD uygulamalarına aktarmak için arabirimler sağlar"
      software={cadSoftware}
      columns={2}
    />,
    <section key="requirements" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <SystemRequirementsCard
            title="Gereksinimler"
            requirements={systemRequirements}
          />
          <div className="gradient-accent rounded-xl shadow-md p-8 text-white">
            <h3 className="font-display text-2xl font-bold mb-4">
              Deneme Lisansı İste
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Bir deneme lisansı talep etmek için lütfen Başvuru Formunu doldurunuz.
            </p>
            <Button
              size="lg"
              className="w-full bg-white text-graphite-950 hover:bg-white/90"
            >
              <a
                href="https://forms.office.com/r/XLQm9JPTSR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full"
              >
                Başvuru Formu İçin Tıklayın
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>,
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="3D LAZER TARAMA VERİLERİ"
        title="Scalypso"
        description="Karasal ve mobil 3B lazer tarama verilerini kullanarak analiz ve yeniden oluşturma görevleri için bir yazılım paketi"
        primaryButton={{
          text: "Deneme Lisansı İste",
          href: "https://forms.office.com/r/XLQm9JPTSR",
          external: true,
        }}
        secondaryButton={{
          text: "Videoları İzle",
          href: "/solutions/scalypso/videos",
        }}
        stats={[
          { value: "20+", label: "Tecrübe", sublabel: "Yıllık" },
          { value: "12+", label: "CAD Yazılımı", sublabel: "Entegrasyon" },
          { value: "8+", label: "Tarayıcı", sublabel: "Destek" },
        ]}
      />
      <div className="bg-background">
        {sections.map((section, index) => (
          <div key={index}>{section}</div>
        ))}
      </div>
    </div>
  );
}
