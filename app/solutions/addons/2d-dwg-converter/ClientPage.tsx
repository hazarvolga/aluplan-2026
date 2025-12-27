"use client"
import dynamic from "next/dynamic";
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";


// Static Imports for Gallery
import img01 from "@/assets/solutions/cds/dwg-converter/elementor-convert221d4ae9.webp";
import img02 from "@/assets/solutions/cds/dwg-converter/elementor-convert23817fe2.webp";
import img03 from "@/assets/solutions/cds/dwg-converter/elementor-convert24c6cece.webp";
import img04 from "@/assets/solutions/cds/dwg-converter/elementor-convert25d96d15.webp";
import img05 from "@/assets/solutions/cds/dwg-converter/elementor-convert26b0d5cc.webp";
import img06 from "@/assets/solutions/cds/dwg-converter/elementor-convert277b21f6.webp";
import img07 from "@/assets/solutions/cds/dwg-converter/elementor-convert29c32719.webp";
import img08 from "@/assets/solutions/cds/dwg-converter/elementor-convert2a984c5b.webp";
import img09 from "@/assets/solutions/cds/dwg-converter/elementor-convert2b6cae5d.webp";
import img10 from "@/assets/solutions/cds/dwg-converter/elementor-convert2ce50265.webp";
import img11 from "@/assets/solutions/cds/dwg-converter/elementor-convert2db7966b.webp";
import img12 from "@/assets/solutions/cds/dwg-converter/elementor-convert2ea22f7e.webp";
import img13 from "@/assets/solutions/cds/dwg-converter/elementor-convert2fbcdc85.webp";
import img14 from "@/assets/solutions/cds/dwg-converter/elementor-convert309430ba.webp";
import img15 from "@/assets/solutions/cds/dwg-converter/elementor-convert315445c8.webp";
import img16 from "@/assets/solutions/cds/dwg-converter/elementor-convert3235b0dc.webp";
import img17 from "@/assets/solutions/cds/dwg-converter/elementor-convert32ff2b54.webp";
import img18 from "@/assets/solutions/cds/dwg-converter/elementor-convert33e6ba65.webp";
import img19 from "@/assets/solutions/cds/dwg-converter/elementor-convert35d20753.webp";
import img20 from "@/assets/solutions/cds/dwg-converter/elementor-convert370cd7cf.webp";
import img21 from "@/assets/solutions/cds/dwg-converter/elementor-convert380c5784.webp";
import img22 from "@/assets/solutions/cds/dwg-converter/elementor-convert38e21c40.webp";
import img23 from "@/assets/solutions/cds/dwg-converter/elementor-convert39c75988.webp";
import img24 from "@/assets/solutions/cds/dwg-converter/elementor-convert3b2e3a1e.webp";
import img25 from "@/assets/solutions/cds/dwg-converter/elementor-convert3d277ea9.webp";
import img26 from "@/assets/solutions/cds/dwg-converter/elementor-convert3e05d62b.webp";
import img27 from "@/assets/solutions/cds/dwg-converter/elementor-convert3f01e92c.webp";
import img28 from "@/assets/solutions/cds/dwg-converter/elementor-convert65854a64.webp";
import img29 from "@/assets/solutions/cds/dwg-converter/elementor-convert667b9e55.webp";
import img30 from "@/assets/solutions/cds/dwg-converter/elementor-convert6bcb4cac.webp";

const icons = [
  img01, img02, img03, img04, img05, img06,
  img07, img08, img09, img10, img11, img12,
  img13, img14, img15, img16, img17, img18,
  img19, img20, img21, img22, img23, img24,
  img25, img26, img27, img28, img29, img30
];

export default function ClientPage() {
  const features = [
    "2B DWG CONVERTER",
    "Polyline > Boyama",
    "Yüzey Elemanı > Polyline",
    "Polyline > Oda",
    "Yüzey Elemanı > 3B Yüzey",
    "Elemangrubu ( Çizgi / Yay ) > Boyama",
    "3B Polyline > 2B Polyline",
    "2B Polyline > 2B Yay",
    "Elemangrubu (3B Yüzey)  > 3B-Obje",
    "3B – Obje > 3B – Yüzey",
    "3B – Polyline > 3B – Yüzey",
    "Duvarları Yuvarla",
    "3B – Yüzey > 3B – Obje",
    "3B – Obje > Duvar",
    "3B – Obje > Kolon",
    "3B – Obje > Döşeme",
    "Akıllı Sembol > 3B – Obje",
    "Kiriş > Duvar",
    "Duvar > Kiriş",
    "3B – Obje > Boşluk (Kapı -Pencere)",
    "3B – Obje > Döşeme Boşluğu",
    "Pencere > Kapı",
    "Kapı > Pencere",
    "İnce Yapı Alanları > Metraj Objesi",
    "Boyama > Döşeme",
    "Eşit Elemanlar > Akıllı Sembol",
    "Boşluklar > Metraj Objesi",
    "Sembol Nokta > Akıllı Sembol",
    "Duvar > Kolon",
    "Lisans Göster / Etkinleştir",
  ];

  const sections = [
    <InfoMediaTwoColumn
      key="hero"
      title="2B DWG Converter"
      subtitle="2B elemanların hızlı dönüşümü"
      descriptions={[
        "2B DWG/DXF içeriklerini Allplan standartlarına uyumlu hale getirin.",
        "Katman ve stil eşleme, çizgi/metin tipleri uyarlama ve toplu dönüşüm olanakları ile hız kazanın.",
        "2B ve 3B elemanların hız kazandıran dönüşümü.",
        "Bu eklenti, farklı sayıda değerli fonksiyon sayesinde çok zaman kazandırır. Örneğin, basit bir içe aktarma işlemi için, tüm evleri ve sokakları sadece birkaç tıklama ile yüzey öğeleriyle doldurabilirsiniz. 5 saniyede 500 yüzey? Sorun değil! Ve ilk kullanımdan sonra diğer işlevlerden de vazgeçmek istemeyeceksiniz."
      ]}
      videoUrl="https://www.youtube.com/embed/JZI8p0aX7Kg"
    />,



    <section key="features" className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="İşlevsel Genel Bakış" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-5 flex flex-col items-center text-center bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
              {icons[idx] && (
                <img src={icons[idx].src} alt={feature} className="w-20 h-20 mb-3 object-contain" />
              )}
              <h3 className="text-sm font-semibold text-foreground leading-tight">{feature}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>,

    <MasonryVideoGrid
      key="video-grid"
      title="Video Galerisi"
      items={[
        { titleTR: "ALLPLAN Add-On ElementConverter - 2B Veriler", titleDE: "ALLPLAN Add-On ElementConverter - 2D Daten", videoUrl: "https://www.youtube.com/embed/JZI8p0aX7Kg" },
        { titleTR: "ALLPLAN Add-On ElementConverter - 3B Gövdeden Duvar veya Döşeme Boşluğuna", titleDE: "ALLPLAN Add-On ElementConverter - 3D Körper in Wand- oder Deckenöffnung", videoUrl: "https://www.youtube.com/embed/M83xHLG27og" },
        { titleTR: "ALLPLAN Add-On ElementConverter - 3B Gövde ve Bileşenler", titleDE: "ALLPLAN Add-On ElementConverter - 3D Körper und Bauteile", videoUrl: "https://www.youtube.com/embed/SPEzRSiqUh4" },
        { titleTR: "ALLPLAN Add-On ElementConverter - İnce Yapı Alanlarından Metraj Objesine", titleDE: "ALLPLAN Add-On ElementConverter - Ausbauflächen in Mengenkörper", videoUrl: "https://www.youtube.com/embed/BNMnaQ3dnxM" },
        { titleTR: "ALLPLAN Add-On ElementConverter - Eşit Elemanlardan Makrolara", titleDE: "ALLPLAN Add-On ElementConverter - Gleiche Elemente in Makros", videoUrl: "https://www.youtube.com/embed/PPoCPiL8cB4" },
        { titleTR: "ALLPLAN Add-On ElementConverter - Sembol Noktalarını Makrolara Dönüştürme", titleDE: "ALLPLAN Add-On ElementConverter - Symbolpunkte in Makros wandeln", videoUrl: "https://www.youtube.com/embed/lSiSphI7I3o" },
      ]}
    />,

    <CDSLicenseInfoSection
      key="license"
      title="Lisans ve Gereksinimler"
      subtitle="Tek kullanıcı lisansı, mevcut Allplan lisansına bağlıdır."
      description="Eklentiyi yükledikten sonra deneme sürümünü 14 gün ücretsiz olarak kullanabilirsiniz."
      systemRequirements="Allplan 2020 – 2024"
      languages="Almanca, İngilizce"
      imageUrl="https://cdn-ildjmdd.nitrocdn.com/tcdVFlIBFQtnSTNLgsIOcKKpRMOOdqtW/assets/images/optimized/rev-0504ba4/addon.aluplan.com.tr/wp-content/uploads/2023/02/Lisans.jpg"
      imageAlt="Lisans"
      links={[
        { text: "Kurulum Kılavuzu", url: "https://youtu.be/BWKDmZyIUo4", variant: "link" },
        { text: "Setup İndir", url: "https://cdssieber.sharepoint.com/:f:/g/Ev_G2db5WVVBvMEN-Adhz24Bk5f3rEvFCQu77iLTTCIynw?e=qkPdri", variant: "default" },
      ]}
      quoteFormUrl="https://forms.office.com/r/hXhnKAG912"
      quoteFormText="Teklif Talep Formu"
    />,
  ];

  return (
    <AddonDetailTemplate
      title="2B DWG Converter"
      subtitle="2B elemanların hızlı dönüşümü"
      description="DWG/DXF 2B içerikleri için hızlı ve uyumlu dönüştürme"
      sections={sections}
    />
  );
}
