"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Box, Cable, Copy, Eye, LayoutGrid, Library, Lightbulb, MoveRight, RotateCw, Ruler, Sparkles, Tags } from "lucide-react";
import Link from "next/link";
import ax3000Brosur from "@/assets/documents/AX3000_Brosur_V2022.pdf";
export default function ClientPage() {
  const featuresLeft = [
    { Icon: LayoutGrid, text: "Entegre Çizim Elemanları" },
    { Icon: RotateCw, text: "Duvara Doğru Otomatik Sembol Çevirme" },
    { Icon: Sparkles, text: "Fazladan Nitelik Ekleme İmkanı Olan Akıllı Semboller" },
    { Icon: Library, text: "Ürün Veri Kütüphanesine Otomatik Erişim" },
    { Icon: Tags, text: "Serbest veya Bağlantılı Etiketleme" },
  ];
  const featuresRight = [
    { Icon: Lightbulb, text: "Elektrik Armatürlerinin Kolay Yerleşimi" },
    { Icon: MoveRight, text: "Otomatik Öteleme Fonksiyonu" },
    { Icon: Copy, text: "Değiştirme ve Kopyalama Fonksiyonları" },
    { Icon: Box, text: "2B/3B Görünüm" },
    { Icon: Lightbulb, text: "DIALUX ile Işık Aydınlatma" },
  ];
  const kabloHattiFeatures = [
    { Icon: Cable, text: "Malzeme Tablolarına Göre Otomatik Kablolama" },
    { Icon: Ruler, text: "Sistemdeki Tablolardan Ölçülere Ulaşma İmkanı" },
    { Icon: Eye, text: "Kablo Hattının İzometrik Görünümü" },
  ];
  const sections = [
    <section key="main-content" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-8 rounded-xl mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">3B Elektrik Planlamaya Ne Dersiniz?</h2>
              <p className="text-muted-foreground mb-4">Modül Elektrik Temel tipik elektrik planlama ve diğer işçiliklerle koordineli işbirliği için gerekli fonksiyonları içerir.</p>
              <p className="text-muted-foreground mb-4">Elektrik Modülü size karmaşık elektrik tesisatı ihtiyaçlarınız ile ilgili hızlı planlama ve hesaplama imkanı sunar. Ayrıca otomatik olarak oluşturulmuş akım devresi ve bağlantılı akım devre listesi, kablo ve yapı elemanları ile sistemdeki kablo hat hesabını elde edersiniz.</p>
            </div>
            <div className="bg-accent text-accent-foreground p-8 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-4xl"><i className="fab fa-youtube"></i></div>
                <div><h3 className="font-display text-2xl font-bold mb-2">AX3000 Youtube</h3><p className="text-accent-foreground/90">AX3000 ile ilgili eğitim videoları için Youtube Kanalımızı ziyaret edebilirsiniz</p></div>
              </div>
              <Button asChild variant="outline" className="bg-card text-foreground hover:bg-muted"><a href="https://www.youtube.com/channel/UC6JuTlCdaIb3Hvkj4JNMl7A/videos" target="_blank" rel="noopener noreferrer">İncele</a></Button>
            </div>
          </div>
          <div className="space-y-3">
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/elektrik">Elektrik Temel</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/havalandirma">Havalandırma</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/isitma">Isıtma</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/konut-havalandirma">Konut Havalandırma</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/sprinkler">Sprinkler (Fıskiye)</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/sihhi-tesisat">Sıhhi Tesisat</Link></Button>
            <div className="border-t border-border my-4"></div>
            <Button asChild variant="default" className="w-full"><a href={ax3000Brosur} download="AX3000_Brosur_V2022.pdf">AX3000 PDF İndir</a></Button>
          </div>
        </div>
      </div>
    </section>,
    <SectionHeader key="kutuphane-header" title="Elektrik Elemanları Kütüphane Yönetimi" align="center" />,
    <section key="features" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {featuresLeft.map(({ Icon, text }, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div><h4 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">{text}</h4></div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {featuresRight.map(({ Icon, text }, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div><h4 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">{text}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>,
    <SectionHeader key="kablo-hatti-header" title="Kablo Hattı Konstrüksiyonu" align="center" />,
    <section key="kablo-hatti-features" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kabloHattiFeatures.map(({ Icon, text }, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
              <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div><h4 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">{text}</h4></div>
            </div>
          ))}
        </div>
      </div>
    </section>,
  ];
  return (
    <AddonDetailTemplate
      title="AX3000 Elektrik Temel"
      subtitle="3B Elektrik Planlamaya Ne Dersiniz?"
      description="Modül Elektrik Temel tipik elektrik planlama ve diğer işçiliklerle koordineli işbirliği için gerekli fonksiyonları içerir."
      sections={sections}
    />
  );
}
