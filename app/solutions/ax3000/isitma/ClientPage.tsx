"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import BenefitsGrid from "@/components/BenefitsGrid";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Calculator, CircleDot, Droplet, Eye, GitMerge, Layers, Link2, Repeat2, Ruler, Scan, Tag, Wrench } from "lucide-react";
import Link from "next/link";
import ax3000Brosur from "@/assets/documents/AX3000_Brosur_V2022.pdf";
export default function ClientPage() {
  const featuresLeft = [
    { Icon: Layers, text: "Akıllı Çizim Elemanları (2B/3B Boru Hattı Konstrüksiyonu)" },
    { Icon: Repeat2, text: "Gidiş-Dönüş Konstrüksiyonu" },
    { Icon: GitMerge, text: "İki Borulu Sistem ve Tichelmann-sistemi" },
    { Icon: Droplet, text: "Yoğunluk ve Akışganlığa göre Ortam Değişikliği" },
    { Icon: Wrench, text: "Otomatik Fitings İhtiyacı ve Seçimi" },
    { Icon: Scan, text: "İzometrik Şema" },
  ];
  const featuresRight = [
    { Icon: Calculator, text: "Kontrol Edilebilir Hesaplama Özelliği" },
    { Icon: Link2, text: "Kat Planına veya Kolon Hattına Otomatik Radyatör Bağlantısı" },
    { Icon: Ruler, text: "Sabit Direnç Metoduna göre Otomatik Boru Ölçülendirme" },
    { Icon: CircleDot, text: "Minimum Çap Tanımı" },
    { Icon: Tag, text: "Hat Etiketi Oluşturma" },
    { Icon: Eye, text: "Borulama Sistemi ve Radyatörlerin İzometrik Görünümleri" },
  ];
  const benefitCards = [
    {
      title: "Kazan-/Santral",
      description: (
        <ul className="space-y-1">
          <li>Konstrüksiyon</li>
          <li>3B-Boru Konstrüksiyon</li>
          <li>Kazan çap hesaplaması ve farklı çaplardaki Zon Dağıtıcısının çap hesaplaması</li>
          <li>Flanş tablosuna otomatik erişim</li>
          <li>Önceden tanımlı yapı grupları</li>
        </ul>
      ),
    },
    {
      title: "Isıkaybı Hesabı ve Isı Konforu",
      description: (
        <ul className="space-y-1">
          <li>Isı Yükü TS825 ve EN 12831</li>
          <li>Isı Konforu VDI 6030 – Otomatik Radyatör Yerleştirme ve Hesaplama EN 442</li>
          <li>Radyatör VDI 3805</li>
        </ul>
      ),
    },
    {
      title: "Isıtma Modüllü",
      description: (
        <ul className="space-y-1">
          <li>Çift Boru- ve Tişel Sistemi</li>
          <li>Alan Isıtma EN 1264 ve EN 15377</li>
          <li>Easyline ve Konstrüksiyon</li>
          <li>Otomatik Radyatör Bağlantısı</li>
          <li>Otomatik Ayar Listesi</li>
          <li>Yoğunluk – Vizkosite ve Isı Kapasite Ayarları</li>
          <li>Kolon Hat Etiketlemesi (Otomatik veya Manuel)</li>
          <li>Kolon Hat Şeması 2B veya 3B</li>
          <li>Kapsamlı metraj ve hesaplama yöntemleri</li>
        </ul>
      ),
    },
  ];
  const sections = [
    <section key="main-content" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-8 rounded-xl mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Isıtma Temel ve Otomatik Hesaplar</h2>
              <p className="text-muted-foreground mb-4">Isıtma modülü ile çok karmaşık sistemleri dahi kolayca tasarlayın. Planlamanın temeli, ön tanımlı parametrelerle AX3000’in otomatik olarak tamamladığı, boru ağı hesaplamasıdır.</p>
              <p className="text-muted-foreground mb-6">Konstrüksiyon fonksiyonları ve otomatik hesaplar sayesinde gerekli proje belgeleri hızlıca oluşturulur.</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Isı İhtiyacı, Optimum Isı</li>
                <li>Mahal Listesi ve Metraj</li>
                <li>Radyatör hesabı ve yerleştirme</li>
                <li>Borulama Tesisatı ve Kritik Devre Hesabı</li>
              </ul>
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
    <section key="benefit-cards" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BenefitsGrid items={benefitCards} />
      </div>
    </section>,
    <SectionHeader key="planlama-header" title="IsıtmaTesisatı için Borulama Hesabı" align="center" />,
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
    <SectionHeader key="ana-dagitim-header" title="Ana Dağıtım Merkezi" align="center" />,
    <section key="ana-dagitim-cards" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "3B-Borulama Tesisatı",
            "Kollektör Çap Hesabı",
            "Flanş Tablolarına Otomatik Giriş",
            "Belirtilen Yüksekliğe göre Armatür Gruplarının Yerleşimi",
            "Kollektör Yapılandırması",
            "Farklı Ölçülendirmeye göre Bağlantı Parçaları Yerleşimi",
            "Malzeme Tablolarına Otomatik Giriş",
            "Otomatik veya Serbest Etiketleme",
          ].map((text) => (
            <div key={text} className="p-6 bg-card border border-border rounded-lg">
              <h4 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">
                {text}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>,
  ];
  return (
    <AddonDetailTemplate
      title="Isıtma Sistemleri Şantiyede Düzenlenir"
      subtitle="Tüm Tesisat için Tek Yazılım"
      description="AX-3000’ deki Isıtma ve Sıhhi Tesisat modüleriyle çok karmaşık ve büyük projelerin tesisat hesap ve planlamasını kolaylıkla yapabilirsiniz. AX-3000’ deki planlamanın temeli otomatik borulama hesabına dayanır ve şartnameye bağlı olarak otomatik gerçekleşir. Planlama sırasında AX-3000 bir çok farklı otomatik teknik özellikleri de kullanır."
      sections={sections}
    />
  );
}
