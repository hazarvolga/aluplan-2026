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
import iconProfilbauteile from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59af501ad.webp";
import iconProfilbauteilErzeugen from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59bc12245.webp";
import iconProfilblechErzeugen from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59c74042d.webp";
import iconSchraubverbindung from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59d3edb11.webp";
import iconLizenzAnzeigen1 from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59e0d5de5.webp";
import iconProfilbauteileAndern from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59ec29c54.webp";
import iconProfilbauteilPunkteModifizieren from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c59fc465cf.webp";
import iconLizenzAnzeigen2 from "@/assets/solutions/cds/steel-components/islevsel-genel-bakis/2000_657c5a0b2db57.webp";

 

const SteelComponents = () => {

  const sections = [
    <InfoMediaTwoColumn
      key="hero"
      title="Çelik Profil Bileşenler için Parametrik Allplan Eklentisi"
      subtitle="Çelik konstrüksiyon – Bağlantılar – Profil"
      descriptions={[]}
    />,

    <section key="playlist-cta" className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Button asChild>
          <a href="https://www.youtube.com/playlist?list=PLZeQ6A4Fw6kDcDfzyU82ZzWrNOwcb_Xch" target="_blank" rel="noopener noreferrer">
            Youtube Oynatma Listesi
          </a>
        </Button>
      </div>
    </section>,

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
    />,

    <section key="functional-overview" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="İşlevsel genel bakış" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { icon: iconProfilbauteile, title: "Profilbauteile" },
            { icon: iconProfilbauteilErzeugen, title: "Profilbauteil erzeugen" },
            { icon: iconProfilblechErzeugen, title: "Profilblech erzeugen" },
            { icon: iconSchraubverbindung, title: "Schraubverbindung erzeugen" },
            { icon: iconLizenzAnzeigen1, title: "Lizenz anzeigen" },
            { icon: iconProfilbauteileAndern, title: "Profilbauteile ändern" },
            { icon: iconProfilbauteilPunkteModifizieren, title: "Profilbauteil-Punkte modifizieren" },
            { icon: iconLizenzAnzeigen2, title: "Lizenz anzeigen" },
          ].map((item, idx) => (
            <Card key={idx} className="p-4 flex flex-col items-center text-center">
              <img src={item.icon} alt={item.title} className="w-20 h-20 mb-3 object-contain" />
              <h3 className="text-sm font-semibold text-gray-800 leading-tight">{item.title}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>,

    <VideoTwoColumn
      key="video-overview"
      title="Video Genel Bakış"
      columns={[
        { titleTR: "GENEL BAKIŞ V2", titleDE: "10 dakika içinde keşfedin.", videoUrl: "https://www.youtube.com/embed/Lfht6hJemew" },
        { titleTR: "GENEL BAKIŞ V2", titleDE: "14 dakika içinde yeni ‘Profil bileşenlerine dönüştür’ işlevine ilişkin ilk bilgileri edineceksiniz", videoUrl: "https://www.youtube.com/embed/YVyOOvxhCFQ" },
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
              <h3 className="font-display text-lg font-bold">Profil bileşenleri</h3>
              <ul className="columns-1 md:columns-2 gap-4">
                <li className="mb-2 break-inside-avoid text-gray-700">Dinamik profil tiplerine sahip profil veri tabanı</li>
                <li className="mb-2 break-inside-avoid text-gray-700">16.900’den fazla profil (I, U, Z, T, L, yuvarlak ve dikdörtgen profiller)</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Yerel ve uluslararası profiller (ör. HEA, IPE, UNP, ROR, FLA, HEBT ,.)</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Herhangi bir serbest formda profiller (örn. Larssen ve soğuk şekillendirilmiş enine kesitler)</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Profil dönüşü dahil boşlukta herhangi bir yön</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Dikdörtgen, N köşeli ve yuvarlak delikli</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Yatay ve dikey yönde serbest girintiler</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Takviyeler ve bağlantı flanşları</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Gerdirme kelepçeli veya kelepçeli sıkıştırma elemanı</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Vidalı geçişler baş veya çatal manşon</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Serbest açılı bağlantılar , yatay ve / veya dikey Kirişlerden ve 3 boyutlu elemanlardan bağlantı açılarının benimsenmesi</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Profilin başında ve sonunda herhangi bir kesim</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Sistem eksenindeki bağlantılar için mesafe</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Bağlantı ağları, sırtlar ve çentikler</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Genel bir 3 boyutlu gövde olarak isteğe bağlı açısal / yuvarlak gösterimi</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Hacim gövdeleri kullanılarak kat planı gösterimi (kesik kenarlar, görünür kenarlar, vb.)</li>
                <li className="mb-2 break-inside-avoid text-gray-700">Hacim, ağırlık, yüzey, profil türü, uzunluğu vb.</li>
              </ul>
            </div>
          ),
        },
        {
          value: "vida-baglantisi",
          labelTR: "Vida bağlantısı",
          content: (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold">Vida bağlantısı</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Vida seti, mil uzunluğu, pullar, kamalı pullar, sıkma uzunluğu somunu, …</li>
                <li>Dönme dahil boşlukta serbest yerleşim</li>
                <li>Kuvvet yönünde ve kuvvet yönüne dik delik ve kenar mesafesi</li>
                <li>Vidaları tek tek göster ve gizle</li>
                <li>Ek plakalar</li>
                <li>Vida ve somun ağ dahil taraf</li>
                <li>Vida sayısı, vida tipi, hacim ve bağlantı plakaları dahil ağırlık değerlendirmesi</li>
              </ul>
            </div>
          ),
        },
        {
          value: "sac-profil",
          labelTR: "Sac Profil",
          content: (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold">Sac Profil</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Trapez levhalar ve oluklu levhalar</li>
                <li>Yüzeylerde girintiler</li>
                <li>Duvarlar ve çatılar için sandviç elemanlar</li>
                <li>Farklı LOD ekranı</li>
              </ul>
            </div>
          ),
        },
        {
          value: "degisiklik",
          labelTR: "Değişiklik",
          content: (
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold">Değişiklik</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Kulplu ayarlamalar (eksenler, açılar, mesafeler, vb.)</li>
                <li>Farklı profil bileşenleri üzerinde tüm parametrelerin çoklu düzenlenmesi</li>
                <li>Birkaç bileşen üzerinde nokta değişikliği</li>
                <li>Sık kullanılanları kaydedin, yükleyin ve eşleştirin</li>
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
        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
          Statik hesaplamalar ve çelik konstrüksiyon iş planlarının otomatik olarak oluşturulması kapsama dahil değildir.
        </p>
      </div>
    </section>,

    <MasonryVideoGrid
      key="masonry-video"
      title="Video Galerisi"
      items={[
        { titleTR: "Video 1", videoUrl: "https://www.youtube.com/embed/VC-y4IZ8580" },
        { titleTR: "Video 2", videoUrl: "https://www.youtube.com/embed/hddDSLEviFI" },
        { titleTR: "Video 3", videoUrl: "https://www.youtube.com/embed/6Un1qXjEviI" },
        { titleTR: "Video 4", videoUrl: "https://www.youtube.com/embed/c9YiuninRIs" },
        { titleTR: "Video 5", videoUrl: "https://www.youtube.com/embed/LVEMciTGJvI" },
        { titleTR: "Video 6", videoUrl: "https://www.youtube.com/embed/fx3jTNe_jRM" },
        { titleTR: "Video 7", videoUrl: "https://www.youtube.com/embed/qXFoV3Xqkik" },
        { titleTR: "Video 8", videoUrl: "https://www.youtube.com/embed/iREJIfp1eoM" },
        { titleTR: "Video 9", videoUrl: "https://www.youtube.com/embed/qD_qbXu7Nuw" },
        { titleTR: "Video 10", videoUrl: "https://www.youtube.com/embed/glMc3oGNr7w" },
        { titleTR: "Video 11", videoUrl: "https://www.youtube.com/embed/-2NQD8PdDRc" },
        { titleTR: "Video 12", videoUrl: "https://www.youtube.com/embed/Wil-msep0P4" },
        { titleTR: "Video 13", videoUrl: "https://www.youtube.com/embed/LJYQYonAEhw" },
        { titleTR: "Video 14", videoUrl: "https://www.youtube.com/embed/_wo95it5KDk" },
        { titleTR: "Video 15", videoUrl: "https://www.youtube.com/embed/AlnXYXMSTUk" },
        { titleTR: "Video 16", videoUrl: "https://www.youtube.com/embed/vSwt-UVWaSw" },
        { titleTR: "Video 17", videoUrl: "https://www.youtube.com/embed/L6ycb2QyO0s" },
        { titleTR: "Video 18", videoUrl: "https://www.youtube.com/embed/oLdikDKUVwM" },
        { titleTR: "Video 19", videoUrl: "https://www.youtube.com/embed/A8SivUorKsM" },
        { titleTR: "Video 20", videoUrl: "https://www.youtube.com/embed/vb83HICWNjc" },
        { titleTR: "Video 21", videoUrl: "https://www.youtube.com/embed/O5gn01tJ7ic" },
        { titleTR: "Video 22", videoUrl: "https://www.youtube.com/embed/Lfht6hJemew" },
        { titleTR: "Video 23", videoUrl: "https://www.youtube.com/embed/n-lPIeedKyE" },
        { titleTR: "Video 24", videoUrl: "https://www.youtube.com/embed/tv_jGKrl2CQ" },
        { titleTR: "Video 25", videoUrl: "https://www.youtube.com/embed/YVyOOvxhCFQ" },
        { titleTR: "Video 26", videoUrl: "https://www.youtube.com/embed/7Cp16sh37MQ" },
      ]}
    />,

    <RegulaTabs
      key="image-tabs"
      title="Galeri"
      defaultValue="modeller"
      items={(() => {
        type ModuleImage = { default: string };
        const modelsModules = import.meta.glob<ModuleImage>(
          "@/assets/solutions/cds/steel-components/gallery/models/*.{webp,jpg,jpeg,png}",
          { eager: true }
        );
        const overviewModules = import.meta.glob<ModuleImage>(
          "@/assets/solutions/cds/steel-components/gallery/overview/*.{webp,jpg,jpeg,png}",
          { eager: true }
        );
        const siteModules = import.meta.glob<ModuleImage>(
          "@/assets/solutions/cds/steel-components/gallery/site/*.{webp,jpg,jpeg,png}",
          { eager: true }
        );
        const rootModules = import.meta.glob<ModuleImage>(
          "@/assets/solutions/cds/steel-components/gallery/*.{webp,jpg,jpeg,png}",
          { eager: true }
        );

        const isResizedVariant = (p: string) => /-[0-9]{2,4}x[0-9]{2,4}\.(webp|jpg|jpeg|png)$/i.test(p);
        const getPrefixIndex = (p: string) => {
          const m = p.match(/\/(\d{1,4})_/);
          return m ? parseInt(m[1], 10) : Number.POSITIVE_INFINITY;
        };
        const toItems = (entries: Record<string, { default: string }>) =>
          (Object.entries(entries) as [string, { default: string }][])
            .filter(([p]) => !isResizedVariant(p))
            .sort((a, b) => getPrefixIndex(a[0]) - getPrefixIndex(b[0]))
            .map(([, m], idx) => ({
              id: `img-${idx}`,
              src: m.default,
              alt: `img ${idx + 1}`,
              title: "",
              description: "",
              category: "",
            }));

        const toItemsByNamePrefix = (
          entries: Record<string, { default: string }>,
          namePrefix: string
        ) =>
          (Object.entries(entries) as [string, { default: string }][])
            .filter(([p]) => !isResizedVariant(p))
            .filter(([p]) => new RegExp(`/${namePrefix}-`, "i").test(p))
            .map(([, m], idx) => ({
              id: `img-root-${idx}`,
              src: m.default,
              alt: `img ${idx + 1}`,
              title: "",
              description: "",
              category: "",
            }));

        const dedupeBySrc = <T extends { src: string }>(arr: T[]) => {
          const seen = new Set<string>();
          const out: T[] = [];
          for (const item of arr) {
            if (seen.has(item.src)) continue;
            seen.add(item.src);
            out.push(item);
          }
          return out;
        };

        const overviewImages = dedupeBySrc([
          ...toItems(overviewModules),
          ...toItemsByNamePrefix(rootModules, "overview"),
        ]);
        const modelsImages = dedupeBySrc([
          ...toItems(modelsModules),
          ...toItemsByNamePrefix(rootModules, "allplan"),
        ]);
        const siteImages = dedupeBySrc([
          ...toItems(siteModules),
          ...toItemsByNamePrefix(rootModules, "site"),
        ]);

        return [
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
        ];
      })()}
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
      quoteFormUrl="https://forms.office.com/r/XLQm9JPTSR"
      quoteFormText="Teklif Talep Formu"
    />,
  ];

  return (
    <AddonDetailTemplate
      title="Çelik Profil Bileşenleri"
      subtitle="Çelik konstrüksiyon – Vidalar – Levhalar"
      description="Çelik yapılar için birleşim ve bileşen kütüphanesi ile hızlı detaylandırma"
      sections={sections}
    />
  );
};

export default SteelComponents;
