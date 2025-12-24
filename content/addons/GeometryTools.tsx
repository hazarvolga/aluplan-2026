"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import VideoGrid from "@/components/VideoGrid";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
import imgLicense from "@/assets/solutions/cds/drive-curve/islevsel-genel-bakis/Lizenz-anzeigen.webp";
import { icons } from "@/assets/solutions/cds/geometry-tools/images";

const GeometryTools = () => {

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

    <section key="features" className="py-16 bg-gradient-to-br from-slate-50 to-accent/10">
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
              className="p-4 flex flex-col items-center text-center hover:shadow-technical transition-all"
            >
              {icons[idx] && (
                <img
                  src={icons[idx].src}
                  alt={feature.titleTr}
                  className="w-20 h-20 mb-3 object-contain"
                />
              )}
              <h3 className="text-xs font-semibold text-gray-800 leading-tight">
                {feature.titleTr}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>,

    <section key="versions" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Fonksiyonlara Genel Bakış"
          align="center"
          className="py-0 bg-transparent mb-12"
          compact
          titleSize="lg"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-accent/10 p-6 rounded-xl shadow-md">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Versiyon 1:</h3>
            <ul className="space-y-2">
              {version1Features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-accent/10 p-6 rounded-xl shadow-md">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Versiyon 2:</h3>
            <ul className="space-y-2">
              {version2Features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>,

    <VideoGrid
      key="demo-videos"
      videos={[
        { url: "https://www.youtube.com/embed/QOz-08Ujjno" },
        { url: "https://www.youtube.com/embed/UJ8pb5Mp72I" },
        { url: "https://www.youtube.com/embed/CMYuaD3e3rQ" },
        { url: "https://www.youtube.com/embed/SIFKuSZTdtc" },
        { url: "https://www.youtube.com/embed/IDvIZk1uGr4" },
        { url: "https://www.youtube.com/embed/_o-xyt2mDZU" },
        { url: "https://www.youtube.com/embed/WHPmmRcCdMQ" },
        { url: "https://www.youtube.com/embed/krrdOMuHAPo" },
        { url: "https://www.youtube.com/embed/S8XcI23U5_o" },
        { url: "https://www.youtube.com/embed/6XWh3npkMf0" },
        { url: "https://www.youtube.com/embed/n3XKpExBhMA" },
        { url: "https://www.youtube.com/embed/BS-GxwK5PMA" },
        { url: "https://www.youtube.com/embed/Fa9lAEVZo14" },
        { url: "https://www.youtube.com/embed/C0jVimKJvRQ" },
        { url: "https://www.youtube.com/embed/57E8rPcynUQ" },
      ]}
      columns={{ mobile: 1, tablet: 2, desktop: 2 }}
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
      links={
        [
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
        ]
      }
      quoteFormUrl="https://forms.office.com/r/XLQm9JPTSR"
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
};

export default GeometryTools;
