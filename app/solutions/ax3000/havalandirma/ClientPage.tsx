"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { BarChart3, Calculator, CircleDot, Copy, Gauge, LayoutGrid, Layers, Library, List, Ruler, Scan, Send, Snowflake, Table, Tag, Thermometer, Wind, Wrench } from "lucide-react";
import Link from "next/link";
import ax3000Brosur from "@/assets/documents/AX3000_Brosur_V2022.pdf";
export default function ClientPage() {
  const featuresLeft = [
    { Icon: LayoutGrid, text: "Akıllı Çizim Elemanları (2B/3B Çizgi Konsepti)" },
    { Icon: Calculator, text: "Değişkenler Hesabı ile Projelendirme" },
    { Icon: Library, text: "Ürün Veri Kütüphanesine Otomatik Erişim" },
  ];
  const featuresRight = [
    { Icon: Wind, text: "Hava Çıkışlarına Kolay Bağlantı" },
    { Icon: Copy, text: "Değiştirme ve Kopyalama Fonksiyonları" },
  ];
  const havalandirmaKilmaYapilandirmaFeatures = [
    { Icon: Layers, text: "2B/3B Görünüm" },
    { Icon: CircleDot, text: "Dairesel Kesit ve Yapı Elemanları Tablolarına Otomatik Erişim" },
    { Icon: Ruler, text: "Otomatik Ara Uzunluk Hesabı" },
    { Icon: Tag, text: "Otomatik Pozisyon, Uzunluk ve Boyut Etiketleme" },
    { Icon: Wrench, text: "Ortadan veya Dışkenardan Tesisat Konstrüksiyonu" },
    { Icon: Scan, text: "Otomatik Görsel Çakışma Kontrolü" },
  ];
  const degerlendirmeMetrajFeatures = [
    { Icon: Ruler, text: "DIN 18379 ve ÖNORM H6015’ e göre Ölçülendirme ve Kütle Hesabı" },
    { Icon: Table, text: "Allright için Hakediş Tablosu" },
    { Icon: Calculator, text: "Otomatik Ara Uzunluk Hesabı" },
    { Icon: List, text: "Toplam Malzeme Listesi, Üretim Listesi, Profil Listesi" },
    { Icon: BarChart3, text: "Adet Listesi: Grafik Görünümlü" },
    { Icon: Send, text: "Üretim için Veri Gönderme" },
  ];
  const kanalHesabiFeatures = [
    { Icon: Gauge, text: "Otomatik Basınç Kaybı Hesabı (Kritik Devre)" },
    { Icon: Thermometer, text: "(dinamik Soğuk ve Sıcak Yükü)" },
    { Icon: Snowflake, text: "Opsiyonel: VDI 2078’ e göre Soğuk Yükü Hesabı" },
  ];
  const sections = [
    <section key="main-content" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-8 rounded-xl mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Havalandırma Kolay Koordine Edilemez</h2>
              <p className="text-muted-foreground mb-4">Havalandırma modülü detaylı uygulama ve planlarını hazırlamak için rahat bir araçtır.</p>
              <p className="text-muted-foreground mb-4">Konstrüksiyon fonksiyonları hariç hızlı planlama &#39;Easyline-Sistem&#39;inde mevcuttur. Bu fonksiyon ile basit çizgi konsepti ile karmaşık 3 boyutlu sistemleri planlayabilirsiniz.</p>
              <p className="text-muted-foreground mb-6">Her iki sistemi de birleştirebilirsiniz! Çakışma kontrolü ile en zor durumların altından kalkabilirsiniz. Entegre edilmiş basınç kaybı hesabı ve görselleştirme ile basınç kontrolü tamamen sizde! Sıcaklık düşüşü ve akustik hesabını da yapabilirsiniz.</p>
              <div className="text-right">
                <h4 className="font-display text-xl font-bold text-foreground mb-4">Avantajlar</h4>
                <ul className="space-y-2 text-muted-foreground text-right">
                  <li>Kolay ve detaylı uygulama ve montaj planlaması</li>
                  <li>Değişken Hesaplama</li>
                  <li>Gelişmiş 3B Kütüphane ve üretici verileri</li>
                  <li>Karmaşık uygulama planları için farklı konstrüksiyon yöntemleri</li>
                  <li>Otomatik Kesit, 2B-Görünümler ve İzometriler</li>
                  <li>Gelişmiş Metraj Hesaplaması</li>
                </ul>
              </div>
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
    <SectionHeader key="planlama-header" title="Havalandırma-Klima Planlaması" align="center" />,
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
    <SectionHeader key="footer-havalandirma-kilma-header" title="Havalandırma-Kilma Yapılandırması" align="center" />,
    <section key="footer-havalandirma-kilma-features" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {havalandirmaKilmaYapilandirmaFeatures.map(({ Icon, text }, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
              <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div><h4 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">{text}</h4></div>
            </div>
          ))}
        </div>
      </div>
    </section>,
    <SectionHeader key="footer-degerlendirme-metraj-header" title="Değerlendirme / Metraj" align="center" />,
    <section key="footer-degerlendirme-metraj-features" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {degerlendirmeMetrajFeatures.map(({ Icon, text }, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
              <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              <div><h4 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">{text}</h4></div>
            </div>
          ))}
        </div>
      </div>
    </section>,
    <SectionHeader key="footer-kanal-hesabi-header" title="Kanal Hesabı" align="center" />,
    <section key="footer-kanal-hesabi-features" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kanalHesabiFeatures.map(({ Icon, text }, index) => (
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
      title="AX3000 Havalandırma"
      subtitle="Tüm Tesisat için Tek Yazılım"
      description="Havalandırma Hesap, Planlama ve Konstrüksiyonu, Kanal Kesit Hesabı, Sonuçları Değerlendirme İmkanı"
      sections={sections}
    />
  );
}
