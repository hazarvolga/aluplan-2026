"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";
import imgLicense from "@/assets/solutions/cds/drive-curve/islevsel-genel-bakis/Lizenz-anzeigen.webp";

import { icons } from "@/assets/solutions/cds/dwg-converter/images";

const DWG2DConverter = () => {
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
      ]}
      videoUrl="https://www.youtube.com/embed/JZI8p0aX7Kg"
    />,

    <section key="posthero" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            2B ve 3B elemanların hız kazandıran dönüşümü
          </p>
          <p className="mt-4 text-gray-700">
            Bu eklenti, farklı sayıda değerli fonksiyon sayesinde çok zaman kazandırır. Örneğin, basit bir içe aktarma işlemi için, tüm evleri ve sokakları sadece birkaç tıklama ile yüzey öğeleriyle doldurabilirsiniz. 5 saniyede 500 yüzey? Sorun değil! Ve ilk kullanımdan sonra diğer işlevlerden de vazgeçmek istemeyeceksiniz.
          </p>
        </div>
      </div>
    </section>,



    <section key="features" className="py-16 bg-gradient-to-br from-slate-50 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="İşlevsel Genel Bakış" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-5 flex flex-col items-center text-center">
              {icons[idx] && (
                <img src={icons[idx].src} alt={feature} className="w-20 h-20 mb-3 object-contain" />
              )}
              <h3 className="text-sm font-semibold text-gray-800 leading-tight">{feature}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>,

    <MasonryVideoGrid
      key="video-grid"
      title="Video Galerisi"
      items={[
        { titleTR: "Video 1", videoUrl: "https://www.youtube.com/embed/JZI8p0aX7Kg" },
        { titleTR: "Video 2", videoUrl: "https://www.youtube.com/embed/M83xHLG27og" },
        { titleTR: "Video 3", videoUrl: "https://www.youtube.com/embed/SPEzRSiqUh4" },
        { titleTR: "Video 4", videoUrl: "https://www.youtube.com/embed/BNMnaQ3dnxM" },
        { titleTR: "Video 5", videoUrl: "https://www.youtube.com/embed/PPoCPiL8cB4" },
        { titleTR: "Video 6", videoUrl: "https://www.youtube.com/embed/lSiSphI7I3o" },
      ]}
    />,



    <CDSLicenseInfoSection
      key="license"
      title="Lisans ve Gereksinimler"
      subtitle="Tek kullanıcı lisansı, mevcut Allplan lisansına bağlıdır."
      description="Eklentiyi yükledikten sonra deneme sürümünü 14 gün ücretsiz olarak kullanabilirsiniz."
      systemRequirements="Allplan 2020 – 2024"
      languages="Almanca, İngilizce"
      imageUrl={imgLicense}
      imageAlt="Lisans"
      links={[
        { text: "Kurulum Kılavuzu", url: "https://youtu.be/BWKDmZyIUo4", variant: "link" },
        { text: "Setup İndir", url: "https://cdssieber.sharepoint.com/:f:/g/Ev_G2db5WVVBvMEN-Adhz24Bk5f3rEvFCQu77iLTTCIynw?e=qkPdri", variant: "default" },
      ]}
      quoteFormUrl="https://forms.office.com/r/XLQm9JPTSR"
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
};

export default DWG2DConverter;
