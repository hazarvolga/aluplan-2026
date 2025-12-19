"use client"
import SolutionHero from "@/components/SolutionHero";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check } from "lucide-react";
import Image from "next/image";
import converterImg from "@/assets/solutions/scalypso/converter-202004-en.jpg";

export default function ClientPage() {
  const importFormats = [
    "ASCII Files (*.xyz, *.pts, …)",
    "Faro (*.fls, *.fws, *.lsproj)",
    "Leica (*.ptg, *.ptx, *.e57)",
    "Riegl (*.rxp, *.rsp)",
    "Topcon (*.cl3, *clr)",
    "Trimble (*.cmf, *.lms)",
    "Zoller & Fröhlich (*.zfs, *.zfproj)",
    "E57, ASTM (*.e57), 3D lazer tarama verileri için değişim formatı",
  ];

  const exportFormats = [
    "Scalypso (*.syo)",
    "ASCII Files (*.xyz, *.pts, …)",
    "E57, ASTM (*.e57), 3D lazer tarama verileri için değişim formatı",
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="SCALYPSO MODÜLÜ"
        title="Converter"
        description="Lazer tarama verilerini Scalypso formatına dönüştürün. Farklı tarayıcı markalarından gelen verileri tek bir formatta birleştirin"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-card border border-border rounded-xl shadow-md p-8">
                  <h4 className="font-display text-2xl font-bold text-foreground mb-4">
                    Birincil Hedef
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Scalypso&apos;nun birincil hedefi, çok çeşitli karasal 3B lazer tarama cihazlarını desteklemektir. 
                    Böylece her proje için en uygun cihazı seçebilir ve yine aynı yazılım iş akışını kullanabilirsiniz.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Her Scalypso projesinin ilk adımı olarak, Scalypso Converter, belirli bir satıcıdan gelen tarama 
                    verilerini, tüm yazılım uygulamalarımız tarafından kullanılabilen tek tip bir Scalypso nokta bulutu 
                    dosya formatına çevirir.
                  </p>
                  <div className="mt-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/1wU4GIILS-s"
                        title="Scalypso Converter"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl shadow-md p-8">
                  <Image
                    src={converterImg}
                    alt="Scalypso Converter Interface"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-xl shadow-md p-6">
                  <h4 className="font-display text-xl font-bold text-foreground mb-6">
                    Desteklenen İçe Aktarma Formatları
                  </h4>
                  <ul className="space-y-3">
                    {importFormats.map((format, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {format}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl shadow-md p-6">
                  <h4 className="font-display text-xl font-bold text-foreground mb-6">
                    Desteklenen Dışa Aktarma Formatları
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {exportFormats.map((format, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">
                          {format}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Desteklenen formatların ve cihazların sayısı sürekli artıyor, bu nedenle bu liste sürekli güncelleniyor. 
                    Belirli bir formatı veya cihazı kaçırıyorsanız, bizimle iletişime geçmekten çekinmeyin.
                  </p>
                </div>
              </div>
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
                  Scalypso Converter&apos;ı denemek ve projelerinizde kullanmak için deneme lisansı talep edin.
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
