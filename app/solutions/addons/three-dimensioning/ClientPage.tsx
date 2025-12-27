"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import ImageGallery from "@/components/ImageGallery";
import { Card } from "@/components/ui/card";


// Feature Icons
import icon01 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe45eef64a.webp";
import icon02 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe469ce9c8.webp";
import icon03 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe47aac073.webp";
import icon04 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe4877d960.webp";
import icon05 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe4927f31b.webp";
import icon06 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe49e2393a.webp";
import icon07 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe4a901f53.webp";
import icon08 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe4b334de6.webp";
import icon09 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe4bd36cf3.webp";
import icon10 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe4d4f1bbd.webp";
import icon11 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe4e04d054.webp";
import icon12 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe4ebeb9e4.webp";
import icon13 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe4f91f064.webp";
import icon14 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe5038f02b.webp";
import icon15 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe50e5014f.webp";
import icon16 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe52022a45.webp";
import icon17 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe52a9766b.webp";
import icon18 from "@/assets/solutions/cds/3d-dimensioning/2000_657fe5349e15b.webp";

const icons = [
  icon01, icon02, icon03, icon04, icon05, icon06,
  icon07, icon08, icon09, icon10, icon11, icon12,
  icon13, icon14, icon15, icon16, icon17, icon18
];

// Gallery Images
import gal01 from "@/assets/solutions/cds/3d-dimensioning/gallery/2000_5be1a5b8e7638.jpeg";
import gal02 from "@/assets/solutions/cds/3d-dimensioning/gallery/2000_5be1a5cbd6d53.jpeg";
import gal03 from "@/assets/solutions/cds/3d-dimensioning/gallery/3.jpg";
import gal04 from "@/assets/solutions/cds/3d-dimensioning/gallery/4-jpg.jpg";
import gal05 from "@/assets/solutions/cds/3d-dimensioning/gallery/5.jpg";
import gal06 from "@/assets/solutions/cds/3d-dimensioning/gallery/ezgif.com-webp-to-2.jpg";
import gal07 from "@/assets/solutions/cds/3d-dimensioning/gallery/ezgif.com-webp-to-jpg.jpg";

const galleryImagesRaw = [gal01, gal02, gal03, gal04, gal05, gal06, gal07];

const galleryImages = galleryImagesRaw.map((src, idx) => ({
  id: `ex-${idx}`,
  src,
  alt: `Müşteri örneği ${idx + 1}`,
  title: "Müşteri örneği",
  description: "",
  category: "örnek",
}));

export default function ClientPage() {

  const features = [
    { titleTr: "Ölçü Çizgisi Oluştur", titleDe: "Masslinie erzeugen" },
    { titleTr: "Kot Ölçülendirme Oluştur", titleDe: "Kotenbemassung erzeugen" },
    { titleTr: "Açı Ölçülendirme Oluştur", titleDe: "Winkelbemassung erzeugen" },
    { titleTr: "Eğim Ölçülendirme Oluştur", titleDe: "Gefällebemassung erzeugen" },
    { titleTr: "Yükseklik Kotu Oluştur", titleDe: "Höhenkote erzeugen" },
    { titleTr: "Daire Ölçülendirme Oluştur", titleDe: "Kreisbemassung erzeugen" },
    { titleTr: "Metin Göstergesi Oluştur", titleDe: "Textzeiger erzeugen" },
    { titleTr: "Referans Noktası Ekle", titleDe: "Referenz-Punkt hinzufügen" },
    { titleTr: "Referans Noktası Sil", titleDe: "Referenz-Punkt löschen" },
    { titleTr: "Referans Noktası Taşı", titleDe: "Referenz-Punkt verschieben" },
    { titleTr: "Ölçü Çizgisi Taşı", titleDe: "Masslinie verschieben" },
    { titleTr: "Metni Taşı", titleDe: "Text verschieben" },
    { titleTr: "Metin Konumunu Sıfırla", titleDe: "Textposition zurücksetzen" },
    { titleTr: "Sembolü Düzenle", titleDe: "Symbol modifizieren" },
    { titleTr: "Ölçü Çizgisini Güncelle", titleDe: "Masslinie aktualisieren" },
    { titleTr: "Özellikleri Aktar", titleDe: "Eigenschaften übertragen" },
    { titleTr: "Ölçü Çizgisini Düzenle", titleDe: "Masslinie modifizieren" },
    { titleTr: "Ölçülendirmeyi Sil", titleDe: "Bemassung löschen" },
  ];

  const sections = [
    <InfoMediaTwoColumn
      key="hero"
      title="3B Ölçülendirme"
      subtitle="3D Bemassung"
      descriptions={[
        "Allplan için 3B ölçülendirme eklentisi, modellerinizi veya perspektiflerinizi sunmak için ideal bir eklentidir. Objelerinizi doğrudan boş alanda ölçün.",
        "",
        "3D ölçülendirme ile modeliniz hassasiyet ve netlik kazanır. Örneğin, gerçek uzunlukları, eğimleri, yükseklikleri, açıları veya koordinatları ölçülendirebilirsiniz. Bu, planlamanızı herkes için anlaşılır kılar ve aynı zamanda yanlış anlamaları önler.",
      ]}
      videoUrl="https://www.youtube.com/embed/GlkCJ9hmqho"
    />,

    <section key="features" className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Fonksiyona genel bakış:"
          align="center"
          className="py-0 bg-transparent mb-12"
          compact
          titleSize="lg"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="p-4 flex flex-col items-center text-center bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors hover:shadow-technical"
            >
              {icons[idx] && (
                <img
                  src={icons[idx].src}
                  alt={feature.titleTr}
                  className="w-24 h-24 mb-3 object-contain"
                />
              )}
              <h3 className="text-sm font-semibold text-foreground leading-tight">
                {feature.titleTr}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {feature.titleDe}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>,

    <section key="properties" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            <span>Özellikler</span>
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Sezgisel olarak öğrenilebilir</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Uzayda 3B boyutlar</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Dinamik önizlemeler</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Favorileri kaydedin ve yükleyin</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Ölçü çizgileri, seviyeler, açı, koordinat ve eğim boyutları</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Yarıçap, çap ve yay boyutlarıyla daire boyutları</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Koordinat listeleri oluşturun</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Boyutlarla kesitler, görünümler ve perspektifler elde edin</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>BIM süreci için ek özellikler</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>3B PDF / IFC / BIMPLUS&apos;u ölçülerle dışa aktarın</span>
            </li>
          </ul>
        </div>
      </div>
    </section>,

    <MasonryVideoGrid
      key="demo-videos"
      title="Video Galerisi"
      items={[
        { titleTR: "Video 1", videoUrl: "https://www.youtube.com/embed/GlkCJ9hmqho" },
        { titleTR: "Video 2", videoUrl: "https://www.youtube.com/embed/IR6TsiCpPJI" },
        { titleTR: "Video 3", videoUrl: "https://www.youtube.com/embed/Z8-aMd_TGBY" },
      ]}
    />,

    <section key="customer-examples" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Müşteri örnekleri"
          align="center"
          className="py-0 bg-transparent mb-12"
          compact
          titleSize="lg"
        />
        <InfoMediaTwoColumn
          title=""
          subtitle=""
          descriptions={[
            "3B ölçülendirme eklentisi şu anda 300 Allplan kullanıcısı tarafından kullanılmaktadır ve 10 dilde mevcuttur. Uygulama alanları, ofislerin farklı görevleri kadar çeşitlidir.",
          ]}
          videoUrl="https://www.youtube.com/embed/Z8-aMd_TGBY"
        />

        <ImageGallery
          images={galleryImages}
          sectionTitle="Müşteri örnekleri"
          sectionDescription="Gerçek projelerden 3B ölçülendirme örnekleri"
          hideCategoryFilter={true}
        />
      </div>
    </section>,

    <CDSLicenseInfoSection
      key="license-info"
      title="Lisans ve Gereksinimler"
      subtitle="Tek kullanıcı lisansı, mevcut Allplan lisansına bağlıdır ve bir PC'den diğerine kolayca aktarılabilir."
      description="Eklentiyi yükledikten sonra deneme sürümünü 14 gün ücretsiz olarak kullanabilirsiniz."
      systemRequirements="Allplan 2020 – 2023"
      languages="Almanca, İngilizce ve İtalyanca"
      imageUrl="https://cdn-ildjmdd.nitrocdn.com/tcdVFlIBFQtnSTNLgsIOcKKpRMOOdqtW/assets/images/optimized/rev-0504ba4/addon.aluplan.com.tr/wp-content/uploads/2023/02/Lisans.jpg"
      imageAlt="Lisans"
      links={[
        {
          text: "Çoklu Kurulum ile Kurulum Kılavuzu",
          url: "https://youtu.be/BWKDmZyIUo4",
          variant: "link"
        },
        {
          text: "Link zum Download Bereich (Setup)",
          url: "https://cdssieber.sharepoint.com/:f:/g/Ev_G2db5WVVBvMEN-Adhz24Bk5f3rEvFCQu77iLTTCIynw?e=qkPdri",
          variant: "default"
        }
      ]}
      quoteFormUrl="https://forms.office.com/r/hXhnKAG912"
      quoteFormText="Teklif Talep Formu"
    />,
  ];

  return (
    <AddonDetailTemplate
      title="3B Ölçülendirme"
      subtitle="3D Bemassung"
      description="3B modellerinizi hassas ölçülerle sunun - Uzayda doğrudan ölçülendirme"
      sections={sections}
    />
  );
}
