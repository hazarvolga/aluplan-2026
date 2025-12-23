"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import axBg1 from "@/assets/solutions/ax3000/ax-bg-1.jpg";
import simulason from "@/assets/solutions/ax3000/simulason.jpg";
import untitled3 from "@/assets/solutions/ax3000/Untitled-3.png";
import slideVr1 from "@/assets/solutions/ax3000/slide-vr-1.jpg";
import sanitation from "@/assets/solutions/ax3000/sanitation.jpg";
import ventilation from "@/assets/solutions/ax3000/ventilation.jpg";
import iconMarketing from "@/assets/solutions/ax3000/features/1470399662_Marketing.png";
import iconSeo from "@/assets/solutions/ax3000/features/1470399671_SEO-1.png";
import iconEcommerce from "@/assets/solutions/ax3000/features/1470399715_E-Commerce-1.png";
import iconAppDev from "@/assets/solutions/ax3000/features/1470399674_App_Development.png";
import iconNewsletter from "@/assets/solutions/ax3000/features/1470399667_Newsletter.png";
import iconBranding from "@/assets/solutions/ax3000/features/1470399656_Branding.png";
import iconSocial from "@/assets/solutions/ax3000/features/1470399614_Social_Media.png";

export default function ClientPage() {
  const features1 = [
    { icon: iconMarketing, title: "Çizim ve Bina Verisi", description: "Çizim ve bina verisi almak için gelişmiş çok seçenekli fonksiyonlar" },
    { icon: iconSeo, title: "İlişkili Pencereler", description: "İlişkili pencere görünümlerinde rahat çalışma imkânı" },
    { icon: iconEcommerce, title: "Belirli Fonksiyonlar", description: "Sıhhi tesisat, ısıtma, havalandırma ve elektrik tesisatı için rahat planlama ve konstrüksiyon" },
    { icon: iconAppDev, title: "Görünümler", description: "Kesit ve perspektif görünümler" },
    { icon: iconNewsletter, title: "Gelişmiş Konstrüksiyon Araçları", description: "Gelişmiş ürün kütüphanesi, akıllı semboller, otomatik tesisat algılama ve daha fazlası" },
    { icon: iconBranding, title: "Entegre Çözümler", description: "Tüm tesisat sistemleri için entegre ve uyumlu çalışan araçlar" },
  ];
  const features2 = [
    { icon: iconMarketing, title: "Plan Öngörünümü", description: "Projenizin tüm detaylarını önceden görüntüleyin ve kontrol edin" },
    { icon: iconSocial, title: "Veri Alışverişi", description: "Farklı CAD sistemleri arasında sorunsuz veri alışverişi" },
    { icon: iconAppDev, title: "Tesisat Düzeni", description: "Rahat tesisat düzeni ve işletme yönetimi" },
    { icon: iconNewsletter, title: "Tutarlı Veri Bilgisi", description: "Tutarlı veri bilgisi ve sabit yapı sayesinde tesisat çakışmasının ve çift iş yapılmasının önlenmesi" },
  ];
  const vrCards = [
    { image: slideVr1, title: "AX3000 Virtual Reality", description: "Şimdi hazır! Müşterileriniz çok daha memnun kalacaklar çünkü isteklerine daha iyi cevap verebilirsiniz.", link: "/solutions/ax3000-virtual-reality" },
    { image: sanitation, title: "AX3000 Yapı Fiziği", description: "Saatlik hava durumu verilerine dayanan dinamik simülasyonlar - dünya çapında!", link: "/solutions/ax3000-yapi-fizigi" },
    { image: ventilation, title: "AX3000 Mekanik Tesisat", description: "Tümleşik kullanım, akıllı çizim elemanları ve çok seçenekli otomatik hesaplama sayesinde planlama zamanınızı en verimli şekilde kullanmanızı sağlar", link: "/solutions/ax3000-mekanik-tesisat" },
  ];
  const getIconPath = (icon: any) => icon;
  const sections = [
    <section key="hero" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span className="text-muted-foreground">TS 825 Bileşen Arayüzü</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span className="text-muted-foreground">Isıtma Modülünde Kat, Yön ve İşletme Zamlarının Otomatik Hesabı</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span className="text-muted-foreground">Türkiye İklim Verileri</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span className="text-muted-foreground">EKB yazılımı BEP Yönetmeliğine göre</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span className="text-muted-foreground">Soğutma Hesabı Türkiye İklim Verilerine göre</span></li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-accent hover:bg-accent/90 text-graphite-950 font-semibold">
                <a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">Teklif Talep Formu<ExternalLink className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.youtube.com/watch?v=EXVlk83zcIs&list=PL5ma0JNNoskbikv2hCg83KVa1pvQ4fvZW" target="_blank" rel="noopener noreferrer">Youtube Kanalımız<ExternalLink className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://ax3000.aluplan.com.tr/wp-content/uploads/2022/01/AX3000_Brosur_V2022.pdf" target="_blank" rel="noopener noreferrer">AX3000 Broşür İndir<ExternalLink className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
          <div>
            <Image src={axBg1} alt="AX3000 MEP" className="rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>,
    <InfoMediaTwoColumn key="deneyim" title="Deneyİm Kazandırır" description="AX3000'in Bina Tesisatı çözümünde lider konuma gelmesi CAD pazarındaki 25 yıllık deneyimin sonucudur. AX-3000 Mekanik ve Tesisat ile ilgili ihtiyaçlarınız için geliştirilmiş ilk CAD yazılımıdır ve işinizde projelendirmeden konstrüksiyona ve uygulamaya kadar tüm ihtiyaçlarınızı karşılar." videoUrl="https://www.youtube.com/embed/fHYDP36DcjA" />,
    <section key="tumlesik" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-2 md:order-1"><Image src={simulason} alt="Simülasyon" className="rounded-xl shadow-md w-full" /></div>
          <div className="order-1 md:order-2">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Tümleşİk Kullanım</h2>
            <p className="text-muted-foreground text-base md:text-lg">AX3000&apos;deki modüler yapı sayesinde Sıhhi Tesisat , Isıtma, Havalandırma, Soğutma, EKB ve Elektrik tesisatı için çok seçenekli özel çözümler üretebilirsiniz. Siz bir kere yazılımda çalışmaya başlayın, tümleşik kullanım sayesinde ileri safhalara kolayca geleceksiniz.</p>
          </div>
        </div>
      </div>
    </section>,
    <SectionHeader key="fonk1-header" title="Belirli Fonksiyonlar" align="center" />,
    <FeatureGrid key="fonk1" features={features1} columns={3} getIconPath={getIconPath} />,
    <section key="optimum" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Optİmum Verİ Yönetİmİ</h2>
            <p className="text-muted-foreground text-base md:text-lg">AX-3000 yerleşim plan içindeki verileri en uygun ve anlaşılır şekilde sıralayarak projenizi yönetmenizi kolaylaştırır.</p>
          </div>
          <div><Image src={untitled3} alt="Veri Yönetimi" className="rounded-xl shadow-md w-full" /></div>
        </div>
      </div>
    </section>,
    <SectionHeader key="fonk2-header" title="Belirli Fonksiyonlar" align="center" />,
    <FeatureGrid key="fonk2" features={features2} columns={2} getIconPath={getIconPath} />,
    <section key="vr-cards" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vrCards.map((card, index) => (
            <div key={index} className="bg-card border border-border rounded-xl shadow-md overflow-hidden">
              <Image src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                <Button asChild variant="outline" className="w-full">
                  {card.link.startsWith("/") ? <Link href={card.link}>Devamını oku</Link> : <a href={card.link} target="_blank" rel="noopener noreferrer">Devamını oku</a>}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>,
    <section key="vr-cta" className="py-20 gradient-accent text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Virtual Reality: Tek bir tıklama ile sınırsız 3B-Gerçeği yaşayın</h2>
        <p className="text-xl mb-8 text-white/80">It has never been easier to create pages and websites on WordPress</p>
        <Button asChild size="lg" className="bg-white text-graphite-950 hover:bg-white/90">
          <a href="https://vr.ax3000-group.de/" target="_blank" rel="noopener noreferrer">VR Demo<ExternalLink className="ml-2 h-5 w-5" /></a>
        </Button>
      </div>
    </section>,
  ];
  return (
    <AddonDetailTemplate
      title="AX3000 MEP"
      subtitle="Bina Tesisatı Çözümü"
      description="ALLPLAN, AX3000 tüm modülleriyle Türkçe'dir ve Türk Standartlarına göre düzenlenmiştir."
      sections={sections}
    />
  );
}
