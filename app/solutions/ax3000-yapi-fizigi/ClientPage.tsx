"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import ImageGallery from "@/components/ImageGallery";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import axBg1 from "@/assets/solutions/ax3000/yapi-fizigi/ax-bg-1.jpg";
import ekbImage from "@/assets/solutions/ax3000/yapi-fizigi/ekb.jpg";
import simulation1 from "@/assets/solutions/ax3000/yapi-fizigi/simulation1.png";
import simulation2 from "@/assets/solutions/ax3000/yapi-fizigi/simulation2.png";
import simulation3 from "@/assets/solutions/ax3000/yapi-fizigi/simulation3.png";
import simulation4 from "@/assets/solutions/ax3000/yapi-fizigi/simulation4.png";
import ekbEBlok from "@/assets/solutions/ax3000/yapi-fizigi/ekb-e_blok.jpg";
import onerilenSayfa from "@/assets/solutions/ax3000/yapi-fizigi/onerilen_sayfa.jpg";
import zonen from "@/assets/solutions/ax3000/yapi-fizigi/zonen.png";
export default function ClientPage() {
  const simulationImages = [simulation1, simulation2, simulation3, simulation4].map((src, idx) => ({
    id: `sim-${idx}`,
    src,
    alt: `Simülasyon ${idx + 1}`,
    title: "Simülasyon",
    description: "",
    category: "simülasyon",
  }));
  const ekbImages = [ekbEBlok, onerilenSayfa, zonen].map((src, idx) => ({
    id: `ekb-${idx}`,
    src,
    alt: `EKB ${idx + 1}`,
    title: "EKB",
    description: "",
    category: "ekb",
  }));
  const sections = [
    <InfoMediaTwoColumn key="hero-desc" title="AX3000 Yapı Fiziği" description="AX-3000, Sıhhi Tesisat, Isıtma, Havalandırma, Soğutma, Elektrik Tesisatı ve Bina Enerji Tasarımı (EKB) ile ilgili tüm hesap ve planlama ihtiyaçları için zaman kazandıran entegre bir çözümdür. Tümleşik kullanım, akıllı çizim elemanları ve çok seçenekli otomatik hesaplama sayesinde planlama zamanınızı en verimli şekilde kullanmanızı sağlar." imageSrc={axBg1} />,
    <InfoMediaTwoColumn key="simulasyon" title="Simülasyon Uzun Süreli ve Maliyetlidir" description="Saatlik Dinamik Simülasyon – Otomatik Zon ve Sistem Tanımlaması - Enerji Kimlik Belgesinden Zon ve Sistem Tanımlaması" imageSrc={ekbImage} />,
    <section key="ekb-section" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div><Image src={ekbImage} alt="AX3000 Enerji Kimlik Belgesi" className="rounded-xl shadow-md w-full" /></div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">AX3000 Enerji Kimlik Belgesi</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>DWG&apos;den otomatik geometri algılaması</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Optimizasyon için değişkenlerin karşılaştırması</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Kolay zonlama imkânı</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>BEP yönetmeliğine göre konut ve konut dışı hesaplama yöntemi</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Esnek raporlar ve belgeler: Word, Excel, PDF, XML</span></li>
              <li className="flex items-start"><span className="text-accent mr-2">•</span><span>Ülkeye bağlı elektronik veri aktarımı</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>,
    <section key="galleries" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ImageGallery images={simulationImages} sectionTitle="Simülasyon Görselleri" sectionDescription="Saatlik dinamik simülasyon örnek görselleri" hideSectionHeader hideCategoryFilter hideOverlayText hideCardFooter />
          </div>
          <div>
            <ImageGallery images={ekbImages} sectionTitle="EKB Görselleri" sectionDescription="Enerji Kimlik Belgesi süreç ekran görüntüleri" hideSectionHeader hideCategoryFilter hideOverlayText hideCardFooter />
          </div>
        </div>
      </div>
    </section>,
    <SectionHeader key="section-header" title="Bina Enerji Tasarımı ve Enerji Kimlik Belgesi EKB" subtitle="AX3000 EKB BEP yönetmeliğine göre uyarlanmış çizimden hesap yapan tek çözümdür." align="center" titleSize="lg" />,
    <InfoMediaTwoColumn key="cad-cizimi" title="CAD çizimi, CAD'de bileşenlerin tanımlanması – TS 825" description="Bina modelinden yapı elemanı oluşturma ve mahal listesi • U-değeri girişi, odalara göre alan • CAD'de bileşenlerin ve alanların grafiksel kontrolü • Kısa zamanda ZON tanımlaması • Zon değişikliği 10 saniyede • Bileşen değişikliği dinamik olarak algılanır (alan ve hacim için) • Hesaplamayı sonlandırma, Sistemlerin Atanması Isıtma – Soğutma – Sıhhi Sıcak Su – Havalandırma – Aydınlatma • Otomatik zon planlaması, Tek tıkla Referans Binanın oluşturulması • Tadilat seçeneği, değişkenlerin karşılaştırılması • Ekonomik verimlilik değerlendirmesi" videoUrl="https://www.youtube.com/embed/fHYDP36DcjA" />,
  ];
  return (
    <AddonDetailTemplate
      title="AX3000 Yapı Fiziği"
      subtitle="Bina Enerji Simülasyonu"
      description="Saatlik hava durumu verilerine dayanan dinamik simülasyonlar - dünya çapında!"
      sections={sections}
    />
  );
}
