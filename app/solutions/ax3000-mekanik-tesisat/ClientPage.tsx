"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import iklimImage from "@/assets/solutions/ax3000/mekanik-tesisat/iklim.png";
import uygunImage from "@/assets/solutions/ax3000/mekanik-tesisat/uygun.jpg";
import ax3000Brosur from "@/assets/documents/AX3000_Brosur_V2022.pdf";
import marketingIcon from "@/assets/solutions/ax3000/mekanik-tesisat/icons/marketing.png";
import seoIcon from "@/assets/solutions/ax3000/mekanik-tesisat/icons/seo.png";
import ecommerceIcon from "@/assets/solutions/ax3000/mekanik-tesisat/icons/ecommerce.png";
import ecommerce2Icon from "@/assets/solutions/ax3000/mekanik-tesisat/icons/ecommerce2.png";
import appDevIcon from "@/assets/solutions/ax3000/mekanik-tesisat/icons/app-dev.png";
import newsletterIcon from "@/assets/solutions/ax3000/mekanik-tesisat/icons/newsletter.png";
import brandingIcon from "@/assets/solutions/ax3000/mekanik-tesisat/icons/branding.png";
export default function ClientPage() {
  const features1Left = [
    { icon: marketingIcon, title: "Akıllı Çizim Elemanları", description: "Belirli Özellik içeren Akıllı Çizim Elemanları" },
    { icon: seoIcon, title: "Kontrol Edilebilirlik", description: "Kontrol Edilebilir Hesaplama Özelliği" },
    { icon: ecommerceIcon, title: "Parça Listeleri", description: "Grafik Görünümlü Parça Listesi" },
    { icon: appDevIcon, title: "Otomatik Hesaplamalar", description: "Otomatik Metraj ve Hacim Hesapları – Hakediş Yazılımı Allplan Allright ile" },
    { icon: ecommerceIcon, title: "Parça Listeleri", description: "Normlara göre Parça Listesi" },
  ];
  const features1Right = [
    { icon: ecommerce2Icon, title: "Merkezi Değiştirme Özelliği", description: "Merkezi Değiştirme Özelliği Sayesinde Değişikliklerin Hızlı Elde Edilmesi" },
    { icon: newsletterIcon, title: "Adet Listesi", description: "Otomatik Adet Listesi Oluşturma" },
    { icon: brandingIcon, title: "Gelişmiş Konstrüksiyon Araçları", description: "Değişik Liste Tipleri Ör. Kesim listesi" },
    { icon: brandingIcon, title: "Şartname Uyumluluğu", description: "Hesapların Şartname ile Otomatik Bağlantısı-VOB'a göre (Ör. Meyil Hesabı, Özel Parçalar)" },
    { icon: brandingIcon, title: "Basınç Kaybı Hesabı", description: "Yan ve Parçalı Kanallar için Denkleştirme Hesabı ile Basınç Kaybı Hesabı" },
  ];
  const features1Rows = Math.max(features1Left.length, features1Right.length);
  const features2 = [
    { icon: marketingIcon, title: "Veri Transferi", description: "Gelişmiş veri arayüzü sayesinde AX-3000 farklı bürolar arasında sorunsuz veri alışverişi sağlar." },
    { icon: seoIcon, title: "Üretici Firma Arayüzü", description: "VDI 3805 ve EN 442'e göre Isıtma ve Sıhhi Tesisat için Üretici Firma Arayüzü" },
    { icon: ecommerceIcon, title: "Lockformer, Klimax", description: "Lockformer, Klimax,...ile Üretici Firma Arayüzü" },
    { icon: ecommerce2Icon, title: "Akıllı ve Verimli Arayüz", description: "Akıllı ve Verimli Arayüz DXF/DWG/DGN" },
    { icon: newsletterIcon, title: "Uyumluluk", description: "Nemetschek Ürünleriyle en uygun Veri Alışverişi" },
  ];
  const modules = [
    { title: "Sıhhi Tesisat", description: "Borulama Tesisat ve Kritik Devre Hesabı, Merkezi Basınçlandırma ve Ana Dağıtım Hattı, Sonuçları Değerlendirme İmkanı, vb.", link: "/solutions/ax3000/sihhi-tesisat" },
    { title: "Isıtma", description: "Borulama Tesisatı ve Kritik Devre Hesabı, Isı İhtiyacı, Optimum Isı, Mahal Listesi ve metraj, Radyatör hesabı ve yerleştirme, vb.", link: "/solutions/ax3000/isitma" },
    { title: "Havalandırma", description: "Havalandırma Hesap, Planlama ve Konstrüksiyonu, Kanal Kesit Hesabı, Sonuçları Değerlendirme İmkanı, vb.", link: "/solutions/ax3000/havalandirma" },
    { title: "Elektrik", description: "Kablo Hattı Konstrüksiyonu, Akıllı Elektrik Elemanları ve Armatür Yerleştirme, vb.", link: "/solutions/ax3000/elektrik" },
    { title: "Konut Havalandırma", description: "Konut havalandırma sistemleri için profesyonel çözümler", link: "/solutions/ax3000/konut-havalandirma" },
    { title: "Sprinkler / Fıskiye", description: "Türkiye İklim Verileriyle Soğuk Yükü Hesabı", link: "/solutions/ax3000/sprinkler" },
  ];
  const sections = [
    <section key="allplan-turkce" className="py-16 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-accent-foreground">ALLPLAN, AX3000 tüm modülleriyle Türkçe&apos;dir ve Türk Standartlarına göre düzenlenmiştir.</h2>
            <ul className="space-y-3">
              <li className="flex items-start"><span className="text-accent-foreground/80 mr-2">•</span><span>TS 825 Bileşen Arayüzü</span></li>
              <li className="flex items-start"><span className="text-accent-foreground/80 mr-2">•</span><span>Isıtma Modülünde Kat, Yön ve İşletme Zamlarının Otomatik Hesabı</span></li>
              <li className="flex items-start"><span className="text-accent-foreground/80 mr-2">•</span><span>Türkiye İklim Verileri</span></li>
              <li className="flex items-start"><span className="text-accent-foreground/80 mr-2">•</span><span>EKB yazılımı BEP Yönetmeliğine göre</span></li>
              <li className="flex items-start"><span className="text-accent-foreground/80 mr-2">•</span><span>Soğutma Hesabı Türkiye İklim Verilerine göre</span></li>
            </ul>
          </div>
          <div><Image src={iklimImage} alt="Türkiye İklim Verileri" className="rounded-xl shadow-2xl" /></div>
        </div>
      </div>
    </section>,
    <InfoMediaTwoColumn key="akilli-cizim" title="Akıllı Çizim Elemanları Sayesinde Hızlı Hesaplama" description="Çizim sırasında her tesisat için gerekli interaktif özellikler otomatik olararak atanır. Böylece tesisattaki tüm elemanlar tanımlanmış olur ve tüm değerlendirme ve hesaplar otomatik olarak kolayca alınır. Bu da adet listesi oluşturmak vb. gibi rutin angaryalardan kurtarır." imageSrc={uygunImage} />,
    <SectionHeader key="fonk1-header" title="Belirli Fonksiyonlar" align="center" />,
    <section key="features1" className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:grid-flow-col md:[grid-template-rows:repeat(var(--features1-rows),auto)]"
          style={{ ["--features1-rows" as any]: features1Rows } as any}
        >
          {[...features1Left, ...features1Right].map((feature, index) => (
            <div key={index} className="flex h-full items-start space-x-4 p-4 bg-card border border-border rounded-lg">
              <Image src={feature.icon} alt={feature.title} className="w-16 h-16 flex-shrink-0" />
              <div><h3 className="font-display text-lg font-bold text-foreground mb-2">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>,
    <section key="veri-arayuzu" className="py-12 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><h4 className="font-display text-xl font-bold text-foreground mb-4">Gelişmiş Veri Arayüzü</h4><p className="text-muted-foreground max-w-3xl mx-auto"><strong>Gelişmiş veri arayüzü sayesinde AX-3000 farklı bürolar arasında sorunsuz veri alışverişi sağlar.</strong></p></div></section>,
    <SectionHeader key="fonk2-header" title="Belirli Fonksiyonlar" align="center" />,
    <section key="features2" className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features2.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
              <Image src={feature.icon} alt={feature.title} className="w-16 h-16 flex-shrink-0" />
              <div><h3 className="font-display text-lg font-bold text-foreground mb-2">{feature.title}</h3><p className="text-muted-foreground text-sm">{feature.description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>,
    <section key="modules" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{module.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
              <Button asChild variant="outline" className="w-full"><Link href={module.link}>Devamını Oku</Link></Button>
            </div>
          ))}
        </div>
      </div>
    </section>,
    <section key="ekb" className="py-16 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Enerji Kimlik Belgesi</h3><p className="text-muted-foreground mb-6 max-w-2xl mx-auto">BEP Yönetmeliğine göre çizimden hesap yapan tek çözüm</p><Button asChild size="lg"><Link href="/solutions/ax3000-yapi-fizigi">Devamını Oku</Link></Button></div></section>,
    <section key="brosur" className="py-12 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><Button asChild size="lg" className="bg-accent hover:bg-accent/90"><a href={ax3000Brosur} download="AX3000_Brosur_V2022.pdf">AX3000 Broşür İndir</a></Button></div></section>,
    <section key="download" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">AX3000 Download</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="space-y-4">
            <Button asChild variant="outline" className="w-full bg-card text-foreground hover:bg-muted"><a href="https://aluplan-my.sharepoint.com/:f:/g/personal/melih_aluplan_com_tr/ElgDJKYY5EVBrY2pHMToyhUBYEEzBn_AG5f0w8SCCQm9fA?e=EVV4CZ" target="_blank" rel="noopener noreferrer">Download AX3000</a></Button>
            <Button asChild variant="outline" className="w-full bg-card text-foreground hover:bg-muted"><a href="https://aluplan-my.sharepoint.com/:f:/g/personal/melih_aluplan_com_tr/Eq5wXLCQwDFBp588TW4C0yoBp2uvUNrhGmseafJkoXwWvA?e=cWEqN3" target="_blank" rel="noopener noreferrer">Araçlar</a></Button>
          </div>
          <div className="space-y-4">
            <Button asChild variant="outline" className="w-full bg-card text-foreground hover:bg-muted"><a href="https://aluplan-my.sharepoint.com/:f:/g/personal/melih_aluplan_com_tr/ElPxUBlhESBAuSP9lKIa0lABXJFx9lzngcSPJEdzRtWJ7Q?e=OUMpiG" target="_blank" rel="noopener noreferrer">Dökümanlar AX3000</a></Button>
            <Button asChild variant="outline" className="w-full bg-card text-foreground hover:bg-muted"><a href="https://aluplan-my.sharepoint.com/:f:/g/personal/melih_aluplan_com_tr/EqEVBfMIy4tKs8ETfRVao1wBWVS5qZdREQ806SImJJQ91Q?e=UmDTIZ" target="_blank" rel="noopener noreferrer">Video</a></Button>
          </div>
        </div>
      </div>
    </section>,
  ];
  return (
    <AddonDetailTemplate
      title="AX3000 Mekanik Tesisat"
      subtitle="Tüm Tesisat için Tek Yazılım"
      description="Tümleşik kullanım, akıllı çizim elemanları ve çok seçenekli otomatik hesaplama sayesinde planlama zamanınızı en verimli şekilde kullanmanızı sağlar"
      sections={sections}
    />
  );
}
