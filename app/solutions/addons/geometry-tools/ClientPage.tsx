"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
// Importing specific image for license if available
import imgLicense from "@/assets/solutions/cds/geometry-tools/license.jpg";

// Static Imports for Geometry Tools
import img01 from "@/assets/solutions/cds/geometry-tools/2000_6543b9d8b381a.webp";
import img02 from "@/assets/solutions/cds/geometry-tools/2000_6543b9e866e33.webp";
import img03 from "@/assets/solutions/cds/geometry-tools/2000_6543b9f3aee14.webp";
import img04 from "@/assets/solutions/cds/geometry-tools/2000_6543ba044a531.webp";
import img05 from "@/assets/solutions/cds/geometry-tools/2000_6543ba10aa773.webp";
import img06 from "@/assets/solutions/cds/geometry-tools/2000_6543ba1f8183a.webp";
import img07 from "@/assets/solutions/cds/geometry-tools/2000_6543ba2c34545.webp";
import img08 from "@/assets/solutions/cds/geometry-tools/2000_6543ba3731850.webp";
import img09 from "@/assets/solutions/cds/geometry-tools/2000_6543ba42bb596.webp";
import img10 from "@/assets/solutions/cds/geometry-tools/2000_6543ba4f5d57a.webp";
import img11 from "@/assets/solutions/cds/geometry-tools/2000_6543ba5b0a119.webp";
import img12 from "@/assets/solutions/cds/geometry-tools/2000_6543ba6759cd2.webp";
import img13 from "@/assets/solutions/cds/geometry-tools/2000_6543ba73ef294.webp";
import img14 from "@/assets/solutions/cds/geometry-tools/2000_6543ba82360f0.webp";
import img15 from "@/assets/solutions/cds/geometry-tools/2000_6543ba8dbe7e5.webp";
import img16 from "@/assets/solutions/cds/geometry-tools/2000_6543ba9a60154.webp";
import img17 from "@/assets/solutions/cds/geometry-tools/2000_6543baa787f64.webp";
import img18 from "@/assets/solutions/cds/geometry-tools/2000_6543bab2dc002.webp";
import img19 from "@/assets/solutions/cds/geometry-tools/2000_6543babf086fa.webp";
import img20 from "@/assets/solutions/cds/geometry-tools/2000_6543bac9f223f.webp";
import img21 from "@/assets/solutions/cds/geometry-tools/2000_6543bad532aa8.webp";
import img22 from "@/assets/solutions/cds/geometry-tools/2000_6543badf132a7.webp";
import img23 from "@/assets/solutions/cds/geometry-tools/2000_6543bae93140c.webp";
import img24 from "@/assets/solutions/cds/geometry-tools/2000_6543baf362338.webp";
import img25 from "@/assets/solutions/cds/geometry-tools/2000_6543bb03b5a75.webp";
import img26 from "@/assets/solutions/cds/geometry-tools/2000_6543bb118a297.webp";
import img27 from "@/assets/solutions/cds/geometry-tools/2000_6543bb1c6bd33.webp";
import img28 from "@/assets/solutions/cds/geometry-tools/2000_6543bb2bca83a.webp";
import img29 from "@/assets/solutions/cds/geometry-tools/2000_6543bb3a3c858.webp";
import img30 from "@/assets/solutions/cds/geometry-tools/2000_6543bb4ca1dbd.webp";
import img31 from "@/assets/solutions/cds/geometry-tools/2000_6543bb5b08957.webp";
import img32 from "@/assets/solutions/cds/geometry-tools/2000_6543bb69399f3.webp";
import img33 from "@/assets/solutions/cds/geometry-tools/2000_6543bb74e18a5.webp";
import img34 from "@/assets/solutions/cds/geometry-tools/2000_6543bb825d1b0.webp";
import img35 from "@/assets/solutions/cds/geometry-tools/2000_6543bb95484c8.webp";
import img36 from "@/assets/solutions/cds/geometry-tools/2000_6543bba430b98.webp";

// Matches 2000_6543b*.webp
const icons = [
  img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36
];

export default function ClientPage() {

  const features = [
    { titleTr: "Üçgen-Ağ Girişi" },
    { titleTr: "Poligon Girişi" },
    { titleTr: "Ara Obje Oluştur" },
    { titleTr: "Voroni Oluştur" },
    { titleTr: "Delaunay Oluştur" },
    { titleTr: "Düz İskelet Oluştur" },
    { titleTr: "OBJ İçeriye Aktar" },
    { titleTr: "OBJ Dışarıya Aktar" },
    { titleTr: "LandXML İçeriye Aktar" },
    { titleTr: "LandXML Dışarıya Aktar" },
    { titleTr: "XYZ Noktaları İçeriye Aktar" },
    { titleTr: "ESRI-Grid İçeriye Aktar" },
    { titleTr: "Obje Değiştir" },
    { titleTr: "Obje İyileştir" },
    { titleTr: "Obje Kes" },
    { titleTr: "Objeyi Kapat" },
    { titleTr: "Çaprazları Değiştir" },
    { titleTr: "Noktaları Değiştir/Sil" },
    { titleTr: "3B-Çizgileri Birleştir" },
    { titleTr: "3B-Çizgileri Böl" },
    { titleTr: "3B-Çizgileri İyileştir" },
    { titleTr: "Üçgenleştir" },
    { titleTr: "Noktaları Yüzeye Yansıt" },
    { titleTr: "Düşey ve Zemin Yüzeyler Ekle" },
    { titleTr: "Yüzeyleri Böl" },
    { titleTr: "Üçgen-Ağı Basitleştir" },
    { titleTr: "Yüzey Sil" },
    { titleTr: "3B-Yüzey Değiştir" },
    { titleTr: "Sivri Üçgenleri Sil" },
    { titleTr: "Akslar ve Enine Kesitler" },
    { titleTr: "Plan Özellikleri" },
    { titleTr: "Parselleme" },
    { titleTr: "Kontur Çizgileri" },
    { titleTr: "Arazi Modeli" },
    { titleTr: "Hacim Hesaplama" },
    { titleTr: "Alan Hesaplama" },
  ];

  const version1Features = [
    "Üçgen-Ağ Girişi",
    "Poligon Girişi",
    "Ara Obje Oluştur",
    "Voroni Oluştur",
    "Delaunay Oluştur",
    "Düz İskelet Oluştur",
    "Obje Değiştir",
    "Obje İyileştir",
    "Obje Kes",
    "Objeyi Kapat",
    "Çaprazları Değiştir",
    "Noktaları Değiştir/Sil",
    "3B-Çizgileri Birleştir",
    "3B-Çizgileri Böl",
    "3B-Çizgileri İyileştir",
    "Üçgenleştir",
    "Noktaları Yüzeye Yansıt",
    "Düşey ve Zemin Yüzeyler Ekle",
    "Yüzeyleri Böl",
  ];

  const version2Features = [
    "Üçgen-Ağı Basitleştir",
    "Yüzey Sil (UV Dokular Silinmez)",
    "OBJ İçeriye Aktar",
    "OBJ Dışarıya Aktar",
    "3B-Yüzey Değiştir",
    "XYZ İçeriye Aktar (Arazi Noktaları)",
    "ESRI-Grid İçeriye Aktar (Arazi Noktalar / Izgara)",
    "LandXML 1.2 ve 2.0 İçeriye Aktar (Arazi Noktalar / Kırık Kenarlar, Dış kenar / Arazi alanlar (TIN) / Dokular)",
    "LandXML 1.2 ve 2.0 Dışarıya Aktar (dito Import / BIM2Feld)",
    "LandXML 1.2 und 2.0 İçeriye Aktar (V 1.0.0.25)",
    "Yatay ve Düşey Akslar Gerçek 3B Eğri Olarak - 2D çoklu çizgiler veya kapalı çoklu çizgiler olarak çeşitli istasyonlarda kesitler",
    "Dikey akslar ve enine kesitler, etiketli bir ızgaraya gömülüdür - Plan özellikleri (herhangi bir 2B veya 3B çizgi ve yay, örn. kontur çizgileri)",
    "DAM'nin altında 2B geometriler olarak parselleme",
    "Sivri Üçgenleri Sil",
  ];

  const sections = [
    <InfoMediaTwoColumn
      key="hero"
      title="Gelişmiş 3B Fonksiyonlar"
      subtitle="Geometri Araçları"
      descriptions={[
        "Örneğin, arazi noktalarına dayalı 3B yüzeyler oluşturun ve ardından bunları Allplan'da düzlem olarak kullanın.",
        "",
        "Yalnızca bunlar ve diğer işlevler, Eklenti Geometri Tools BIM sisteminizin değerli bir sistem haline getirir.",
        "",
        "Ocak 2021'den itibaren Versiyon 2, 'Üçgen Ağı Basitleştirme' ve OBJ, XYZ, ESRI-Grid ve LandXML 2.0 formatları için birçok yeni arayüzle birlikte sunulacak.",
        "",
        "Bu, Swisstopo'dan arazi verilerini içe aktarmayı ve 'BIM2Field' ölçme cihazları için yerleşim dosyaları oluşturmayı kolaylaştırır.",
      ]}
      videoUrl="https://www.youtube.com/embed/WHPmmRcCdMQ"
    />,

    <section key="features" className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="İşlevsel Genel Bakış"
          align="center"
          className="py-0 bg-transparent mb-12"
          compact
          titleSize="lg"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="p-4 flex flex-col items-center text-center bg-white/5 border-white/10 hover:bg-white/10 transition-colors hover:shadow-technical"
            >
              {icons[idx] && (
                <img
                  src={icons[idx].src}
                  alt={feature.titleTr}
                  className="w-20 h-20 mb-3 object-contain"
                />
              )}
              <h3 className="text-xs font-semibold text-gray-300 leading-tight">
                {feature.titleTr}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>,

    <section key="versions" className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Fonksiyonlara Genel Bakış"
          align="center"
          className="py-0 bg-transparent mb-12"
          compact
          titleSize="lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-md">
            <h3 className="font-display text-xl font-bold text-white mb-4">Versiyon 1:</h3>
            <ul className="space-y-2">
              {version1Features.map((feature, idx) => (
                <li key={idx} className="text-gray-300 flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-md">
            <h3 className="font-display text-xl font-bold text-white mb-4">Versiyon 2:</h3>
            <ul className="space-y-2">
              {version2Features.map((feature, idx) => (
                <li key={idx} className="text-gray-300 flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>,

    <MasonryVideoGrid
      key="demo-videos"
      title="Video Galerisi"
      items={[
        { titleTR: "Eğim Planlama", titleDE: "Gefälle Planen", videoUrl: "https://www.youtube.com/embed/WHPmmRcCdMQ" },
        { titleTR: "Yeraltı Otoparkı", titleDE: "Tiefgarage", videoUrl: "https://www.youtube.com/embed/QOz-08Ujjno" },
        { titleTR: "3B Noktaları Yansıtma", titleDE: "3D Punkte projizieren", videoUrl: "https://www.youtube.com/embed/UJ8pb5Mp72I" },
        { titleTR: "3B Çizgileri Basitleştirme", titleDE: "3D Linien vereinfachen", videoUrl: "https://www.youtube.com/embed/CMYuaD3e3rQ" },
        { titleTR: "Üçgen Ağı Basitleştirme", titleDE: "Dreiecks-Netz vereinfachen", videoUrl: "https://www.youtube.com/embed/SIFKuSZTdtc" },
        { titleTR: "Poligon Azaltma Galerisi", titleDE: "Polygon Reduktion Galerie", videoUrl: "https://www.youtube.com/embed/IDvIZk1uGr4" },
        { titleTR: "OBJ İçe Aktarma - İlk Adımlar", titleDE: "OBJ Import erste Schritte", videoUrl: "https://www.youtube.com/embed/_o-xyt2mDZU" },
        { titleTR: "OBJ İçe Aktarma - Drone Uçuşu", titleDE: "OBJ Import Drohnenflug", videoUrl: "https://www.youtube.com/embed/krrdOMuHAPo" },
        { titleTR: "3B Gövde Değiştirme", titleDE: "3D-Körper modifizieren", videoUrl: "https://www.youtube.com/embed/S8XcI23U5_o" },
        { titleTR: "LandXML İçe / Dışa Aktarma", titleDE: "LandXML Import / Export", videoUrl: "https://www.youtube.com/embed/6XWh3npkMf0" },
        { titleTR: "XYZ Noktaları İçe Aktarma", titleDE: "XYZ-Punkte Import", videoUrl: "https://www.youtube.com/embed/n3XKpExBhMA" },
        { titleTR: "Yüzeyleri Kesme", titleDE: "Flächen zerschneiden", videoUrl: "https://www.youtube.com/embed/BS-GxwK5PMA" },
        { titleTR: "Voronoi Diyagramı Oluşturma", titleDE: "Voronoi Diagramm erzeugen", videoUrl: "https://www.youtube.com/embed/Fa9lAEVZo14" },
        { titleTR: "Delaunay Üçgenlemesi", titleDE: "Delaunay Triangulierung", videoUrl: "https://www.youtube.com/embed/C0jVimKJvRQ" },
        { titleTR: "Düz İskelet (Straight Skeleton)", titleDE: "Straight Skeleton", videoUrl: "https://www.youtube.com/embed/57E8rPcynUQ" },
        { titleTR: "Ara Gövde Oluşturma", titleDE: "Zwischen-Körper erzeugen", videoUrl: "https://www.youtube.com/embed/omnrciLvkLg" },
        { titleTR: "Çoklu Kurulum ile Kurulum Kılavuzu", videoUrl: "https://www.youtube.com/embed/BWKDmZyIUo4" },
      ]}
    />,

    <CDSLicenseInfoSection
      key="license-info"
      title="Lisans ve Gereksinimler"
      subtitle="Tek kullanıcı lisansı, mevcut Allplan lisansına bağlıdır ve bir PC'den diğerine kolayca aktarılabilir."
      description="Eklentiyi yükledikten sonra deneme sürümünü 14 gün ücretsiz olarak kullanabilirsiniz."
      systemRequirements="Allplan 2020 – 2023"
      languages="Almanca, İngilizce ve İtalyanca"
      imageUrl={imgLicense}
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
      title="Geometri Araçları"
      subtitle="Gelişmiş 3B Fonksiyonlar"
      description="Arazi noktalarına dayalı 3B yüzeyler oluşturun ve Allplan'da düzlem olarak kullanın. OBJ, XYZ, ESRI-Grid ve LandXML 2.0 formatları için arayüzler."
      sections={sections}
    />
  );
}
