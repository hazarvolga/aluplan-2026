"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";

import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";
import ImageGallery from "@/components/ImageGallery";
import SectionHeader from "@/components/SectionHeader";

// Importing specific image for license if available
import imgLicense from "@/assets/solutions/cds/drive-curve/islevsel-genel-bakis/Lizenz-anzeigen.webp";
import { galleryImages as rampImages } from "@/assets/solutions/cds/ramp/images";

const Ramp = () => {


  const sections = [

    <InfoMediaTwoColumn
      key="intro-1"
      title="Add On - Rampa"
      subtitle="Herhangi bir parametreli rampanın kolay oluşturulması"
      descriptions={[
        "Allplan Rampa Eklentisi ile herhangi bir rampa oluşturabilirsiniz.",
        "Bir eksen, uzunluk profili ve sol ve sağ kenar için herhangi bir enine eğim kullanılarak dinamik bir referans yüzeyi oluşturulur.",
        "Daha sonra döşeme ve duvarlar gibi mimari bileşenleri bu referans yüzeyine bağlayabilirsiniz.",
      ]}
      videoUrl="https://www.youtube.com/embed/cfGmLbqXBJo"
      className="bg-background"
    />,

    <InfoMediaTwoColumn
      key="intro-2"
      title="Fonksiyonların Genel Bakışı"
      subtitle="Özellikler"
      descriptions={[
        "Çizgiler, daireler ve klotoidler ekseni ile eşleştirin",
        "Herhangi bir uzunluk profili",
        "Sol ve sağ için ayrı yatış dereceleri ve şerit genişlikleri",
        "Rampanın sol ve sağ kenarı için sınır eksenleri",
        "Rampa başlangıcı ve bitişi için eksendeki öteleme",
        "Yükseklikler, enine eğimler ve yerleştirme ile kat planı gösterimi",
        "Brep ve 3B yüzeyler olarak 3B temsil",
        "Mimari bileşenler için otomatik referans yüzeyi",
        "Referans alanının eşit dağılımı",
      ]}
      videoUrl="https://www.youtube.com/embed/8PQ6jX3SrUo"
      className="bg-background"
    />,



    <section key="video-masonry" className="relative">
      <MasonryVideoGrid
        title="Video Galerisi"
        items={[
          { titleTR: "Video 1", videoUrl: "https://www.youtube.com/embed/0fbk-egB7bg" },
          { titleTR: "Video 2", videoUrl: "https://www.youtube.com/embed/yTniFVJEZpE" },
          { titleTR: "Video 3", videoUrl: "https://www.youtube.com/embed/8PQ6jX3SrUo" },
        ]}
      />
    </section>,

    <section key="gallery" className="py-16 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Galeri" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <ImageGallery
          images={rampImages.map((img, idx) => ({
            id: `ramp-${idx}`,
            src: img.src,
            alt: `Rampa ${idx + 1}`,
            title: "Rampa",
            description: "",
            category: "rampa",
          }))}
          sectionTitle="Rampa Galerisi"
          sectionDescription="Rampa geometrisi ve ekran görüntüleri"
        />
      </div>
    </section>,

    <section key="license" className="relative">
      <CDSLicenseInfoSection
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
      />
    </section>,
  ];

  return (
    <AddonDetailTemplate
      title="Rampa"
      subtitle="Ramp"
      description="Otopark ve saha düzenlerinde rampa geometrisini hızlıca tanımlayın. Eğim/kot kontrolü ve kesit üretimi ile projelerinizi güvenle teslim edin."
      sections={sections}
    />
  );
};

export default Ramp;
