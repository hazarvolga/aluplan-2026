"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
import ImageGallery from "@/components/ImageGallery";
import imgSketchUp from "@/assets/solutions/cds/sketchup-converter.jpg";

const SketchUpConverter = () => {
  const features = [
    "SketchUp import (dokularla)",
    "Lumion/BIMPLUS export",
    "Malzeme ve doku eşleme",
    "Katman ve grup koruma",
    "BIM sürecine uyumlu çıktı",
  ];

  const sections = [
    <InfoMediaTwoColumn
      key="hero"
      title="SketchUp Dönüştürücü"
      subtitle="Dokularla Allplan import, Lumion export, vb."
      descriptions={[
        "SketchUp modellerini dokularıyla birlikte Allplan'a aktarın.",
        "Görselleştirme araçları için uyumlu export ile süreçlerinizi hızlandırın.",
      ]}
      videoUrl="https://www.youtube.com/embed/krrdOMuHAPo"
    />,

    <section key="features" className="py-16 bg-gradient-to-br from-slate-50 to-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="İşlevsel Genel Bakış" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-5">
              <h3 className="text-sm font-semibold text-gray-800">{feature}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>,

    <section key="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Galeri" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <ImageGallery
          images={[{
            id: "sku-1",
            src: imgSketchUp.src,
            alt: "SketchUp Dönüştürücü",
            title: "SketchUp Dönüştürücü",
            description: "",
            category: "sketchup",
          }]}
          sectionTitle="SketchUp Galerisi"
          sectionDescription="Import/export ve dokularla görselleştirme örnekleri"
        />
      </div>
    </section>,

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
      quoteFormUrl="https://forms.office.com/r/XLQm9JPTSR"
      quoteFormText="Teklif Talep Formu"
    />,
  ];

  return (
    <AddonDetailTemplate
      title="SketchUp Dönüştürücü"
      subtitle="Dokularla Allplan import, Lumion export, vb."
      description="SketchUp import ve görselleştirme export ile hızlı entegrasyon"
      sections={sections}
    />
  );
};

export default SketchUpConverter;
