"use client"
import SolutionHero from "@/components/SolutionHero";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check } from "lucide-react";
import Image from "next/image";
import mobileImg from "@/assets/solutions/scalypso/industry_1900_600.jpg";

export default function ClientPage() {
  const supportedSystems = [
    "Matterport",
    "dotscene",
    "NavVis",
    "BLK2GO",
    "TIMMS",
    "GeoSLam HORIZON",
    "Drohne",
  ];

  const supportedFormats = ["E57", "LAS", "LAZ", "TXT", "ASC", "PTS", "PLY"];

  const capabilities = [
    "Mobil haritalama cihazları, dronlar veya dijital arazi modelleri tarafından oluşturulan nokta bulutlarıyla çalışın",
    "E57, LAS, LAZ, TXT, ASC, PTS ve PLY dosya biçimleri desteklenir ve veri kaybı olmadan doğrudan Scalypso Mobile&apos;a yüklenebilir",
    "Tek noktaların, basitleştirilmiş nokta bulutlarının veya çoklu çizgilerin CAD sisteminize gerçek zamanlı aktarımı",
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="SCALYPSO MODÜLÜ"
        title="Mobile"
        description="Mobil haritalama sistemleri ile verimli çalışma. Nokta bulutlarını CAD sisteminize gerçek zamanlı aktarın"
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <Image
                    src={mobileImg}
                    alt="Scalypso Mobile"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-background rounded-xl shadow-md p-6">
                  <h4 className="font-display text-xl font-bold text-foreground mb-4">
                    Scalypso Mobile aşağıdaki sistemleri destekler:
                  </h4>
                  <ul className="space-y-2">
                    {supportedSystems.map((system, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{system}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-xl shadow-md p-8">
                  <h4 className="font-display text-2xl font-bold text-foreground mb-4">
                    Scalypso Mobile
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Son yıllarda mobil haritalama sistemleri daha gelişmiş ve sahada ve farklı projelerin 
                    iş akışında kullanımı için giderek daha yaygın hale geldi.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Bu tür verilerle verimli bir şekilde çalışmak için geliştirildi: <strong>Scalypso Mobile</strong>
                  </p>
                  <h5 className="font-bold text-lg text-foreground mb-4">
                    Scalypso Mobile ile yapabilecekleriniz:
                  </h5>
                  <ul className="space-y-3 mb-6">
                    {capabilities.map((capability, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground">{capability}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    <strong>Scalypso Mobile&apos;ı</strong> kullanarak CAD Sisteminizdeki kaynakları biriktiriyorsunuz. 
                    İş akışınız için verilerinizin hangi bölümlerinin gerekli olacağına karar verdiğiniz ve yalnızca 
                    gerektiği kadar dışa aktardığınız için, verileri yakalayan işlemin nokta bulutu ile önceden 
                    yapacağı bir iş yoktur.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Scalypso Mobile</strong> bağımsız bir yazılımdır. Ücretsiz bir deneme sürümü arıyorsanız, 
                    Lisans Talep Et Sayfamızda bize bildirin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Desteklenen Dosya Formatları
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {supportedFormats.map((format, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow border border-border"
                  >
                    <span className="text-foreground font-bold text-lg">
                      {format}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-8 leading-relaxed">
                Tüm formatlar veri kaybı olmadan doğrudan Scalypso Mobile&apos;a yüklenebilir
              </p>
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
                  Scalypso Mobile&apos;ı denemek ve projelerinizde kullanmak için deneme lisansı talep edin.
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
