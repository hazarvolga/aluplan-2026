"use client"
import SolutionHero from "@/components/SolutionHero";
import { Button } from "@/components/ui/button";
import { ExternalLink, Check } from "lucide-react";

export default function ClientPage() {
  const features = [
    "Etkileşimli düzlemsel, küresel ve 3B nokta bulutu görünümleri",
    "Çokgenler, elipsler veya dikdörtgenler kullanarak tarama alanlarını işaretlemek için araçlar",
    "Metin yorumları eklemek veya düzenlemek için araçlar",
    "Farklı ölçüm araçları",
    "Küçük dosyalar aracılığıyla veri alışverişi işlevleri",
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="SCALYPSO MODÜLÜ"
        title="Viewer"
        description="3B lazer tarama verilerine kolayca erişin, keşfedin ve geliştirin. Ek lisans maliyeti olmadan müşterilerinizle paylaşın"
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
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl shadow-md p-8 md:p-12">
                <h4 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Scalypso Viewer
                </h4>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  <strong>Scalypso Viewer 2</strong>, siz ve müşterileriniz için ek lisans maliyeti olmadan 
                  3B lazer tarama verilerine kolayca erişmenizi, bunları keşfetmenizi ve geliştirmenizi sağlayan 
                  bir araçtır. Scalypso görüntüleyici kullanılarak, bir projenin ilk sonuçları, 3B ölçüm ve 
                  kayıttan hemen sonra müşterinize sunulabilir. Uygulama, belirli bölgeleri işaretlemek, 
                  boyutlandırma eklemek veya taramaları yorumlarla geliştirmek için etkileşimli araçlar sunar. 
                  Ek açıklamalar, örneğin e-posta yoluyla basit bir değişim iş akışına izin verecek şekilde 
                  ayrı dosyalara kaydedilebilir. Bu nedenle Scalypso Viewer, iş ortaklarınızla 3B lazer tarama 
                  verileri hakkında verimli iletişim kurmak için mükemmel bir araçtır.
                </p>
                <div className="bg-gradient-to-br from-accent/10 to-background rounded-xl p-8">
                  <h5 className="font-bold text-xl text-foreground mb-6">Özellikler:</h5>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
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
                  Scalypso Viewer&apos;ı denemek ve projelerinizde kullanmak için deneme lisansı talep edin.
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
