"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";
import ImageGallery from "@/components/ImageGallery";
import VideoTwoColumn from "@/components/VideoTwoColumn";
import RegulaTabs from "@/components/RegulaTabs";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import iconProfilbauteile from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59af501ad.webp";
import iconProfilbauteilErzeugen from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59bc12245.webp";
import iconProfilblechErzeugen from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59c74042d.webp";
import iconSchraubverbindung from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59d3edb11.webp";
import iconLizenzAnzeigen1 from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59e0d5de5.webp";
import iconProfilbauteileAndern from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59ec29c54.webp";
import iconProfilbauteilPunkteModifizieren from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59fc465cf.webp";
import iconLizenzAnzeigen2 from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c5a0b2db57.webp";

// Static imports for gallery
// Models
import mod01 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-beam-connection-3d-model-01.webp";
import mod05 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-building-framework-3d-model-05.webp";
import mod03 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-column-beam-junction-3d-model-03.webp";
import mod02 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-frame-structure-3d-model-02.webp";
import mod06 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-industrial-structure-3d-model-06.webp";
import mod_1 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-1.webp";
import mod_10 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-10.webp";
import mod_11 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-11.webp";
import mod_12 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-12.webp";
import mod_2 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-2.webp";
import mod_3 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-3.webp";
import mod_4 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-4.webp";
import mod_5 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-5.webp";
import mod_6 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-6.webp";
import mod_7 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-7.webp";
import mod_8 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-8.webp";
import mod_9 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-model-9.webp";
import mod_st_01 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-01.webp";
import mod_st_02 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-02.webp";
import mod_st_03 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-03.webp";
import mod_st_04 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-04.webp";
import mod_st_05 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-05.webp";
import mod_st_06 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-06.webp";
import mod_st_07 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-07.webp";
import mod_st_08 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-08.webp";
import mod_st_09 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-09.webp";
import mod_st_10 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-10.webp";
import mod_st_11 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-11.webp";
import mod_st_12 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-12.webp";
import mod_st_13 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-13.webp";
import mod_st_14 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-14.webp";
import mod_st_15 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-structure-3d-model-15.webp";
import mod_truss_04 from "@/assets/solutions/cds/steel-components/gallery/models/allplan-steel-truss-system-3d-model-04.webp";

// Overview
import ov_01 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-01.webp";
import ov_02 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-02.webp";
import ov_03 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-03.webp";
import ov_04 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-04.webp";
import ov_05 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-05.webp";
import ov_06 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-06.webp";
import ov_07 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-07.webp";
import ov_08 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-08.webp";
import ov_09 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-09.webp";
import ov_10 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-10.webp";
import ov_11 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-11.webp";
import ov_12 from "@/assets/solutions/cds/steel-components/gallery/overview/steel-components-overview-plan-12.webp";

// Site
import site_01 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-01.webp";
import site_02 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-02.webp";
import site_03 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-03.webp";
import site_04 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-04.webp";
import site_05 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-05.webp";
import site_06 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-06.webp";
import site_07 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-07.webp";
import site_08 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-08.webp";
import site_09 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-09.webp";
import site_10 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-10.webp";
import site_11 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-11.webp";
import site_12 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-12.webp";
import site_13 from "@/assets/solutions/cds/steel-components/gallery/site/steel-construction-site-photo-13.webp";

// Array construction
const modelsList = [
  mod01, mod02, mod03, mod_truss_04, mod05, mod06,
  mod_1, mod_2, mod_3, mod_4, mod_5, mod_6,
  mod_7, mod_8, mod_9, mod_10, mod_11, mod_12,
  mod_st_01, mod_st_02, mod_st_03, mod_st_04, mod_st_05,
  mod_st_06, mod_st_07, mod_st_08, mod_st_09, mod_st_10,
  mod_st_11, mod_st_12, mod_st_13, mod_st_14, mod_st_15
];

const overviewList = [
  ov_01, ov_02, ov_03, ov_04, ov_05, ov_06,
  ov_07, ov_08, ov_09, ov_10, ov_11, ov_12
];

const siteList = [
  site_01, site_02, site_03, site_04, site_05, site_06,
  site_07, site_08, site_09, site_10, site_11, site_12, site_13
];

const toGalleryItems = (list: any[], category: string) => list.map((src, idx) => ({
  id: `${category}-${idx}`,
  src,
  alt: `${category} ${idx + 1}`,
  title: "",
  description: "",
  category
}));

const modelsImages = toGalleryItems(modelsList, "modeller");
const overviewImages = toGalleryItems(overviewList, "genel-bakis");
const siteImages = toGalleryItems(siteList, "santiye");

export default function ClientPage() {

  const sections = [
    <InfoMediaTwoColumn
      key="post-hero"
      title="ALLPLAN’DE PARAMETRİK ÇELİK PLANLAMASI"
      subtitle="Allplan Eklenti Profil Bileşenleri V2, versiyon 2021 – 2024 için"
      descriptions={[
        "Bu Allplan eklentisinin fonksiyonları, mevcut temel fonksiyonların çok ötesindedir.",
        "Genel planlar, endüstriyel modeller, etkileyici kirişler için parametrik çözüm.",
        "Tüm parametrelerin basit bir şekilde değiştirilmesine büyük önem veriyoruz.",
        "Profil tipleri, çelik ağırlıkları, yüzeyler vb. Özellikler istenildiği zaman etiketlenebilir ve değerlendirilebilir.",
        "Tüm bunların sorunsuz ve sezgisel kullanımla birleştiğini düşünün.",
      ]}
      videoUrl="https://www.youtube.com/embed/VC-y4IZ8580"
    />,





    <section key="functional-overview" className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="İşlevsel genel bakış" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { icon: iconProfilbauteile, titleDE: "Profilbauteile", titleTR: "Profil Bileşenleri" },
            { icon: iconProfilbauteilErzeugen, titleDE: "Profilbauteil erzeugen", titleTR: "Profil Bileşeni Oluştur" },
            { icon: iconProfilblechErzeugen, titleDE: "Profilblech erzeugen", titleTR: "Profil Sacı Oluştur" },
            { icon: iconSchraubverbindung, titleDE: "Schraubverbindung erzeugen", titleTR: "Vida Bağlantısı Oluştur" },
            { icon: iconLizenzAnzeigen1, titleDE: "Lizenz anzeigen", titleTR: "Lisansı Göster" },
            { icon: iconProfilbauteileAndern, titleDE: "Profilbauteile ändern", titleTR: "Profil Bileşenlerini Değiştir" },
            { icon: iconProfilbauteilPunkteModifizieren, titleDE: "Profilbauteil-Punkte modifizieren", titleTR: "Profil Bileşen Noktalarını Değiştir" },
            { icon: iconLizenzAnzeigen2, titleDE: "Lizenz anzeigen", titleTR: "Lisansı Göster" },
          ].map((item, idx) => (
            <Card key={idx} className="p-4 flex flex-col items-center text-center bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <img src={item.icon.src} alt={item.titleTR} className="w-20 h-20 mb-3 object-contain" />
              <h3 className="text-base font-bold text-white leading-tight mb-1">{item.titleTR}</h3>
              <p className="text-xs text-gray-400 font-medium">{item.titleDE}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>,

    <VideoTwoColumn
      key="video-overview"
      title="Video Genel Bakış"
      columns={[
        { titleTR: "GENEL BAKIŞ V1", titleDE: "12 dakika içinde keşfedin.", videoUrl: "https://www.youtube.com/embed/Lfht6hJemew" },
        { titleTR: "GENEL BAKIŞ V2", titleDE: "10 dakika içinde keşfedin.", videoUrl: "https://www.youtube.com/embed/YVyOOvxhCFQ" },
        { titleTR: "GENEL BAKIŞ V2", titleDE: "14 dakika içinde yeni ‘Profil bileşenlerine dönüştür’ işlevine ilişkin ilk bilgileri edineceksiniz", videoUrl: "https://www.youtube.com/embed/YVyOOvxhCFQ" },
      ]}
    />,

    <section key="planning-header" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Allplan’da basit ve verimli çelik yapı planlaması"
          subtitle="Basit parametrik profil bileşenleri, 3B çelik yapı planlamanızı LOD 350’ye kadar kolaylaştırır."
          align="center"
          className="py-0 bg-transparent"
          compact
          titleSize="xl"
        />
      </div>
    </section>,

    <RegulaTabs
      key="features-tabs"
      title="ÖZELLİKLER"
      defaultValue="profil-bilesenleri"
      items={[
        {
          value: "profil-bilesenleri",
          labelTR: "Profil bileşenleri",
          content: (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-white">Profil bileşenleri</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Dinamik profil tiplerine sahip profil veri tabanı",
                  "16.900’den fazla profil (I, U, Z, T, L, yuvarlak ve dikdörtgen profiller)",
                  "Yerel ve uluslararası profiller (ör. HEA, IPE, UNP, ROR, FLA, HEBT ,.)",
                  "Herhangi bir serbest formda profiller (örn. Larssen ve soğuk şekillendirilmiş enine kesitler)",
                  "Profil dönüşü dahil boşlukta herhangi bir yön",
                  "Dikdörtgen, N köşeli ve yuvarlak delikli",
                  "Yatay ve dikey yönde serbest girintiler",
                  "Takviyeler ve bağlantı flanşları",
                  "Gerdirme kelepçeli veya kelepçeli sıkıştırma elemanı",
                  "Vidalı geçişler baş veya çatal manşon",
                  "Serbest açılı bağlantılar , yatay ve / veya dikey Kirişlerden ve 3 boyutlu elemanlardan bağlantı açılarının benimsenmesi",
                  "Profilin başında ve sonunda herhangi bir kesim",
                  "Sistem eksenindeki bağlantılar için mesafe",
                  "Bağlantı ağları, sırtlar ve çentikler",
                  "Genel bir 3 boyutlu gövde olarak isteğe bağlı açısal / yuvarlak gösterimi",
                  "Hacim gövdeleri kullanılarak kat planı gösterimi (kesik kenarlar, görünür kenarlar, vb.)",
                  "Hacim, ağırlık, yüzey, profil türü, uzunluğu vb."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-gray-300">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          value: "vida-baglantisi",
          labelTR: "Vida bağlantısı",
          content: (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-white">Vida bağlantısı</h3>
              <ul className="space-y-3">
                {[
                  "Vida seti, mil uzunluğu, pullar, kamalı pullar, sıkma uzunluğu somunu, …",
                  "Dönme dahil boşlukta serbest yerleşim",
                  "Kuvvet yönünde ve kuvvet yönüne dik delik ve kenar mesafesi",
                  "Vidaları tek tek göster ve gizle",
                  "Ek plakalar",
                  "Vida ve somun ağ dahil taraf",
                  "Vida sayısı, vida tipi, hacim ve bağlantı plakaları dahil ağırlık değerlendirmesi"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-gray-300">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          value: "sac-profil",
          labelTR: "Sac Profil",
          content: (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-white">Sac Profil</h3>
              <ul className="space-y-3">
                {[
                  "Trapez levhalar ve oluklu levhalar",
                  "Yüzeylerde girintiler",
                  "Duvarlar ve çatılar için sandviç elemanlar",
                  "Farklı LOD ekranı"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-gray-300">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          value: "degisiklik",
          labelTR: "Değişiklik",
          content: (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-white">Değişiklik</h3>
              <ul className="space-y-3">
                {[
                  "Kulplu ayarlamalar (eksenler, açılar, mesafeler, vb.)",
                  "Farklı profil bileşenleri üzerinde tüm parametrelerin çoklu düzenlenmesi",
                  "Birkaç bileşen üzerinde nokta değişikliği",
                  "Sık kullanılanları kaydedin, yükleyin ve eşleştirin"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-gray-300">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
      ]}
    />,

    <section key="bim-designed-info" className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="3B BIM planlaması için tasarlandı"
          subtitle="Profil bileşenleri eklentisi çok şey yapabilir, ancak her şeyi yapamaz."
          align="center"
          className="py-0 bg-transparent"
          compact
          titleSize="xl"
        />
        <p className="text-white text-center max-w-3xl mx-auto mt-4 font-medium">
          Statik hesaplamalar ve çelik konstrüksiyon iş planlarının otomatik olarak oluşturulması kapsama dahil değildir.
        </p>
      </div>
    </section>,

    <MasonryVideoGrid
      key="masonry-video"
      title="Video Galerisi"
      items={[
        { titleTR: "Sütunlar ve Kirişler - Bağlantılar - Profil Sacları - Sandviç Paneller", titleDE: "Stahlbau - Verbindungen - Profilbleche - Sandwichelemente", videoUrl: "https://www.youtube.com/embed/VC-y4IZ8580" },
        { titleTR: "Sütunlar ve Kirişler Temel Fonksiyonlar", titleDE: "Stützen und Träger Basisfunktionen", videoUrl: "https://www.youtube.com/embed/hddDSLEviFI" },
        { titleTR: "Sütunlar ve Kirişler Değerlendirme", titleDE: "Stützen und Träger Auswertung", videoUrl: "https://www.youtube.com/embed/6Un1qXjEviI" },
        { titleTR: "Freie Profilequerschnitte", titleDE: "Freie Profilequerschnitte", videoUrl: "https://www.youtube.com/embed/c9YiuninRIs" },
        { titleTR: "Bağlantı Flanşları ve Gergi Çubukları", titleDE: "Anschlussflansche und Zugstäbe", videoUrl: "https://www.youtube.com/embed/LVEMciTGJvI" },
        { titleTR: "Girintili Sütunlar ve Kirişler", titleDE: "Stützen und Träger mit Aussparungen", videoUrl: "https://www.youtube.com/embed/fx3jTNe_jRM" },
        { titleTR: "Vida Bağlantıları", titleDE: "Schraubverbindungen", videoUrl: "https://www.youtube.com/embed/qXFoV3Xqkik" },
        { titleTR: "Trapez Saclar ve Çatı Panelleri", titleDE: "Trapezbleche und Dachpaneelen", videoUrl: "https://www.youtube.com/embed/iREJIfp1eoM" },
        { titleTR: "Genel Nesne Raporu", titleDE: "Report Gesamtobjekt", videoUrl: "https://www.youtube.com/embed/qD_qbXu7Nuw" },
        { titleTR: "Çerçeve Köşesi", titleDE: "Rahmenecke", videoUrl: "https://www.youtube.com/embed/glMc3oGNr7w" },
        { titleTR: "Rahmenecke mit 3eck-Voute", titleDE: "Rahmenecke mit 3eck-Voute", videoUrl: "https://www.youtube.com/embed/-2NQD8PdDRc" },
        { titleTR: "Bağlantıyı Devral", titleDE: "Anschluss übernehmen", videoUrl: "https://www.youtube.com/embed/Wil-msep0P4" },
        { titleTR: "İşleme İçin Kesitler", titleDE: "Schnitte für die Bearbeitung", videoUrl: "https://www.youtube.com/embed/LJYQYonAEhw" },
        { titleTR: "Kesimli Sütunlar ve Kirişler", titleDE: "Stützen und Träger mit Zuschnitt", videoUrl: "https://www.youtube.com/embed/_wo95it5KDk" },
        { titleTR: "Malzemeler", titleDE: "Materialien", videoUrl: "https://www.youtube.com/embed/AlnXYXMSTUk" },
        { titleTR: "Arcelor Mittal Palplanş Duvarları", titleDE: "Arcelor Mittal Spundwände", videoUrl: "https://www.youtube.com/embed/vSwt-UVWaSw" },
        { titleTR: "Sertleştiriciler ve Bağlantı Flanşları", titleDE: "Steifen und Anschlussflansche", videoUrl: "https://www.youtube.com/embed/L6ycb2QyO0s" },
        { titleTR: "Serbest İçi Boş Profiller", titleDE: "Freie Hohlprofile", videoUrl: "https://www.youtube.com/embed/oLdikDKUVwM" },
        { titleTR: "Serbest Dikdörtgen ve Yuvarlak Profiller", titleDE: "Freie Rechteck  und Rundprofile", videoUrl: "https://www.youtube.com/embed/A8SivUorKsM" },
        { titleTR: "Yeni Vida Başları, Ankrajlar ve Ahşap Vidalar", titleDE: "Neue Schraubenköpfe, Anker und Holzbauschrauben", videoUrl: "https://www.youtube.com/embed/vb83HICWNjc" },
        { titleTR: "Bağlantı İyileştirmeleri", titleDE: "Verbesserungen Anschlüsse", videoUrl: "https://www.youtube.com/embed/O5gn01tJ7ic" },
        { titleTR: "Ekleri Ayır", titleDE: "Anbauteile Trennen", videoUrl: "https://www.youtube.com/embed/Lfht6hJemew" },
        { titleTR: "Yuvarlak ve Eliptik Plakalar", titleDE: "Runde und elliptische Platten", videoUrl: "https://www.youtube.com/embed/n-lPIeedKyE" },
        { titleTR: "Yeni Özellik Paleti", titleDE: "Neue Attributpalette", videoUrl: "https://www.youtube.com/embed/tv_jGKrl2CQ" },
        { titleTR: "Profil Bileşenlerine Dönüştür", titleDE: "In Profilbauteile konvertieren", videoUrl: "https://www.youtube.com/embed/YVyOOvxhCFQ" },
        { titleTR: "Cubus Statik IFC İçe Aktarımı", titleDE: "Cubus Statik IFC Import", videoUrl: "https://www.youtube.com/embed/7Cp16sh37MQ" },
      ]}
    />,

    <RegulaTabs
      key="image-tabs"
      title="Galeri"
      defaultValue="modeller"
      items={[
        {
          value: "modeller",
          labelTR: "Allplan modelleri",
          content: (
            <ImageGallery
              images={modelsImages}
              sectionTitle=""
              sectionDescription=""
              hideSectionHeader
              hideOverlayText
              hideCategoryBadge
              hideModalMeta
              hideCTA
              hideCategoryFilter
            />
          ),
        },
        {
          value: "genel-bakis",
          labelTR: "Genel bakış planları",
          content: (
            <ImageGallery
              images={overviewImages}
              sectionTitle=""
              sectionDescription=""
              hideSectionHeader
              hideOverlayText
              hideCategoryBadge
              hideModalMeta
              hideCTA
              hideCategoryFilter
            />
          ),
        },
        {
          value: "santiye",
          labelTR: "Şantiye resimleri",
          content: (
            <ImageGallery
              images={siteImages}
              sectionTitle=""
              sectionDescription=""
              hideSectionHeader
              hideOverlayText
              hideCategoryBadge
              hideModalMeta
              hideCTA
              hideCategoryFilter
            />
          ),
        },
      ]}
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
      title="Çelik Profil Bileşenler için Parametrik Allplan Eklentisi"
      subtitle="Çelik konstrüksiyon – Bağlantılar – Profilli Levhalar – Sandviç Paneller"
      description={
        <div className="flex flex-col items-start gap-6">
          <div>
            ALLPLAN’DE PARAMETRİK ÇELİK PLANLAMASI.
            <h4 className="mt-2 font-semibold text-white">Allplan Eklenti Profil Bileşenleri V2, versiyon 2021 – 2024 için</h4>
          </div>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-semibold">
            <a href="https://www.youtube.com/playlist?list=PLZeQ6A4Fw6kDcDfzyU82ZzWrNOwcb_Xch" target="_blank" rel="noopener noreferrer">
              Youtube Oynatma Listesi
            </a>
          </Button>
        </div>
      }
      sections={sections}
    />
  );
}
