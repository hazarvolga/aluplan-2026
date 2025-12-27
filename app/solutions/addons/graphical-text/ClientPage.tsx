"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";


// Static Import


export default function ClientPage() {


  const sections = [
    <InfoMediaTwoColumn
      key="hero"
      title="Vektörleştirilmiş metinlerin, 3 boyutlu metinlerin ve blok setlerinin oluşturulması."
      subtitle=""
      descriptions={[
        "Tüm metinleri gerekçelendirilmiş cümleler olarak ayarlayın ve akıllı cümle ve hece ayrımı da dahil olmak üzere istediğiniz gibi çarpıtın. Veya vektör öğeleri (çizgiler, daireler, alanlar) olarak kenarlıklar, dolgular ve gölgeler içeren metinler oluşturabilir ve hatta bunları 3B olarak oluşturabilirsiniz.",
      ]}
      videoUrl="https://www.youtube.com/embed/CMYuaD3e3rQ"
      className="bg-transparent"
    />,

    <MasonryVideoGrid
      key="videos"
      title="Tanıtım Videoları"
      items={[
        { titleTR: "ALLPLAN Add-On GraphicText - Vektorisierte 2D/3D Texte", videoUrl: "https://www.youtube.com/embed/fs7Lfx9odB4" },
        { titleTR: "ALLPLAN Add-On Graphic Text | Text an Kurve ausrichten", videoUrl: "https://www.youtube.com/embed/0rpJEH-JCvE" },
      ]}
      columns={2}
    />,



    <CDSLicenseInfoSection
      key="license"
      title="Lisans ve Gereksinimler"
      subtitle="Tek kullanıcı lisansı, mevcut Allplan lisansına bağlıdır."
      description="Eklentiyi yükledikten sonra deneme sürümünü 14 gün ücretsiz olarak kullanabilirsiniz."
      systemRequirements="Allplan 2020 – 2024"
      languages="Almanca, İngilizce"
      imageUrl="https://addon.aluplan.com.tr/wp-content/uploads/2023/02/Lisans.jpg"
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
      title="Grafiksel Yazı"
      subtitle="Vektörleştirilmiş ve 3B metinler"
      description="Metin vektörleştirme ve 3B metinlerle modern etiketleme"
      sections={sections}
    />
  );
}
