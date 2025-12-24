"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  const turkishStandards = [
    "TS 825 Bileşen Arayüzü",
    "Isıtma Modülünde Kat, Yön ve İşletme Zamlarının Otomatik Hesabı",
    "Türkiye İklim Verileri",
    "EKB yazılımı BEP Yönetmeliğine göre",
    "Soğutma Hesabı Türkiye İklim Verilerine göre",
  ];

  const specificFunctions = [
    { icon: iconMarketing, title: "Çizim ve Bina Verisi", description: "Çizim ve bina verisi almak için gelişmiş çok seçenekli fonksiyonlar" },
    { icon: iconSeo, title: "İlişkili Pencereler", description: "İlişkili pencere görünümlerinde rahat çalışma imkânı" },
    { icon: iconEcommerce, title: "Belirli Fonksiyonlar", description: "Sıhhi tesisat, ısıtma, havalandırma ve elektrik tesisatı için rahat planlama ve konstrüksiyon" },
    { icon: iconAppDev, title: "Planlama ve Konstrüksiyon", description: "Sıhhi tesisat, ısıtma, havalandırma ve elektrik tesisatı için rahat planlama ve konstrüksiyon" },
    { icon: iconNewsletter, title: "Görünümler", description: "Kesit ve perspektif görünümler" },
    { icon: iconBranding, title: "Gelişmiş Konstrüksiyon Araçları", description: "Gelişmiş ürün kütüphanesi, akıllı semboller, otomatik tesisat algılama ve daha fazlası" },
  ];

  const additionalFunctions = [
    { icon: iconMarketing, title: "Plan Öngörünümü", description: "" },
    { icon: iconSocial, title: "Veri Alışverişi", description: "Değişik CAD sistemleri arasında veri alışverişi" },
    { icon: iconAppDev, title: "Tesisat Düzeni", description: "Rahat tesisat düzeni ve işletme yönetimi" },
    { icon: iconNewsletter, title: "Tutarlı Veri Bilgisi", description: "Tutarlı veri bilgisi ve sabit strüktür sayesinde tesisat çakışmasının ve çift iş yapılmasının önlenmesi" },
  ];

  const specialModules = [
    { image: slideVr1, title: "AX3000 Virtual Reality", description: "Şimdi hazır! Müşterileriniz çok daha memnun kalacaklar çünkü isteklerine daha iyi cevap verebilirsiniz.", link: "/solutions/ax3000-virtual-reality" },
    { image: sanitation, title: "AX3000 Yapı Fiziği", description: "Saatlik hava durumu verilerine dayanan dinamik simülasyonlar - dünya çapında!", link: "/solutions/ax3000-yapi-fizigi" },
    { image: ventilation, title: "AX3000 Mekanik Tesisat", description: "Tümleşik kullanım, akıllı çizim elemanları ve çok seçenekli otomatik hesaplama sayesinde planlama zamanınızı en verimli şekilde kullanmanızı sağlar", link: "/solutions/ax3000-mekanik-tesisat" },
  ];

  const getIconPath = (icon: any) => icon;

  return (
    <ProductPageTemplate
      badge="BİNA TESİSATI"
      title="AX3000 MEP"
      subtitle="Bina Tesisatı Çözümü"
      description="ALLPLAN, AX3000 tüm modülleriyle Türkçe'dir ve Türk Standartlarına göre düzenlenmiştir."
      heroImage={axBg1}
      ctaTitle="Teklif Talep Formu"
      ctaDescription="AX3000 için teklif talep edin"
      ctaHref="https://forms.office.com/r/hXhnKAG912"
      ctaExternal
      showDemoButton={false}
      additionalButtons={[
        {
          text: "Youtube Kanalımız",
          href: "https://www.youtube.com/watch?v=EXVlk83zcIs&list=PL5ma0JNNoskbikv2hCg83KVa1pvQ4fvZW",
          external: true,
        },
        {
          text: "AX3000 Broşür İndir",
          href: "https://ax3000.aluplan.com.tr/wp-content/uploads/2022/01/AX3000_Brosur_V2022.pdf",
          external: true,
        },
      ]}
    >
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Türk Standartları</h2>
            <ul className="space-y-2">
              {turkishStandards.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <InfoMediaTwoColumn
        title="Deneyim Kazandırır"
        description="AX3000'in Bina Tesisatı çözümünde lider konuma gelmesi CAD pazarındaki 25 yıllık deneyimin sonucudur. AX-3000 Mekanik ve Tesisat ile ilgili ihtiyaçlarınız için geliştirilmiş ilk CAD yazılımıdır ve işinizde projelendirmeden konstrüksiyona ve uygulamaya kadar tüm ihtiyaçlarınızı karşılar."
        imageSrc={axBg1}
      />

      <InfoMediaTwoColumn
        title="Tümleşik Kullanım"
        description="AX3000'deki modüler yapı sayesinde Sıhhi Tesisat , Isıtma, Havalandırma, Soğutma, EKB ve Elektrik tesisatı için çok seçenekli özel çözümler üretebilirsiniz. Siz bir kere yazılımda çalışmaya başlayın, tümleşik kullanım sayesinde ileri safhalara kolayca geleceksiniz."
        imageSrc={simulason}
        className="bg-muted/30"
      />

      <SectionHeader title="Belirli Fonksiyonlar" align="center" />
      <FeatureGrid features={specificFunctions} columns={3} getIconPath={getIconPath} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Optimum Veri Yönetimi</h2>
              <p className="text-muted-foreground text-base md:text-lg">AX-3000 yerleşim plan içindeki verileri en uygun ve anlaşılır şekilde sıralayarak projenizi yönetmenizi kolaylaştırır.</p>
            </div>
            <div>
              <Image src={untitled3} alt="Optimum Veri Yönetimi" className="rounded-xl shadow-md w-full" />
            </div>
          </div>
        </div>
      </section>

      <SectionHeader title="Ek Fonksiyonlar" align="center" />
      <FeatureGrid features={additionalFunctions} columns={2} getIconPath={getIconPath} />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Özel Modüller" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {specialModules.map((card) => (
              <div key={card.title} className="bg-card border border-border rounded-xl shadow-md overflow-hidden">
                <Image src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    {card.link.startsWith("/") ? (
                      <Link href={card.link}>Devamını oku</Link>
                    ) : (
                      <a href={card.link} target="_blank" rel="noopener noreferrer">
                        Devamını oku
                      </a>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Virtual Reality: Tek bir tıklama ile sınırsız 3B-Gerçeği yaşayın</h2>
          <p className="text-xl mb-8 text-white/80">It has never been easier to create pages and websites on WordPress</p>
          <Button asChild size="lg" className="bg-white text-graphite-950 hover:bg-white/90">
            <a href="https://vr.ax3000-group.de/" target="_blank" rel="noopener noreferrer">
              VR Demo
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </ProductPageTemplate>
  );
}
