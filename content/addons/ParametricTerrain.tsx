"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
import ImageGallery from "@/components/ImageGallery";

// Importing specific image for license if available
import imgLicense from "@/assets/solutions/cds/drive-curve/islevsel-genel-bakis/Lizenz-anzeigen.webp";

// Galleries from assets (typed)
type ModuleImage = { default: string };
type GalleryItem = { id: string; src: string; alt: string; title: string; description: string; category: string };

const planModules = import.meta.glob<ModuleImage>("@/assets/solutions/cds/parametrik-arazi/planlar/*.{webp,jpg,jpeg,png}", { eager: true });
const ekranModules = import.meta.glob<ModuleImage>("@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/*.{webp,jpg,jpeg,png}", { eager: true });
const modelModules = import.meta.glob<ModuleImage>("@/assets/solutions/cds/parametrik-arazi/modeller/*.{webp,jpg,jpeg,png}", { eager: true });
const fotoModules = import.meta.glob<ModuleImage>("@/assets/solutions/cds/parametrik-arazi/fotolar/*.{webp,jpg,jpeg,png}", { eager: true });

const toItems = (entries: Record<string, ModuleImage>, prefix: string): GalleryItem[] =>
  Object.values(entries).map((m, idx) => ({
    id: `${prefix}-${idx}`,
    src: m.default,
    alt: `${prefix} ${idx + 1}`,
    title: prefix,
    description: "",
    category: prefix,
  }));

const planImages: GalleryItem[] = toItems(planModules, "planlar");
const ekranImages: GalleryItem[] = toItems(ekranModules, "ekran");
const modelImages: GalleryItem[] = toItems(modelModules, "modeller");
const fotoImages: GalleryItem[] = toItems(fotoModules, "fotolar");

const ParametricTerrain = () => {
  const features = [
    "Parametrik arazi yüzeyi",
    "Kazı/Dolgu hesapları",
    "Platform ve eğim tasarımı",
    "Kesit ve kot çizgileri",
    "LandXML/OBJ/XYZ içe/dışa aktarım",
  ];

  const sections = [
    <InfoMediaTwoColumn
      key="hero"
      title="Parametrik Arazi"
      subtitle="Kazıdan fazlası"
      descriptions={[
        "Parametrik arazi modeli ile platformlar, eğimler ve kesitleri esnek şekilde üretin.",
        "Kazı/dolgu hacimlerini hesaplayın ve saha düzenini güvenle tasarlayın.",
      ]}
      videoUrl="https://www.youtube.com/embed/WHPmmRcCdMQ"
    />,

    <section key="intro" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
          <p>
            Bu parametrik Allplan eklentisinin işlevi, arazi kazısı oluşturmanın çok ötesine geçer. Kazı planı, arazi modeli ve sunum için etkileyici katman modellerine hızla ulaşın. Değişikliklerin basitçe tamamlanmasına büyük önem veriyoruz.
          </p>
          <p>
            Tüm bunlar sorunsuz ve sezgisel kullanımla birleştiğinde eklentinin gücü ortaya çıkıyor.
          </p>
        </div>
      </div>
    </section>,

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

    <section key="versions" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Versiyonlar" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-accent/10 p-6 rounded-xl shadow-sm">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Versiyon 3 (Allplan 2021–2024)</h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Allplan 2023 onayı",
                "Yeni işlem kesme katmanı",
                "Mimari bileşenler için referans yüzeyi",
                "Yeni dolgu işlemi",
                "Küresel Sınır",
                "Optimizasyon alanı değiştirici",
                "Üçgen ağları kapat",
                "Çoklu değiştirici sıralama özelleştirme",
                "Desen/tarama için iyileştirilmiş 2B renk gösterimi",
                "Yüzeyler için renk ataması / kaydet ve yükle",
                "Eğimli ve yatay yüzeyler için efsaneler ve özellikler",
                "Kenarlık çokgenlerini sil / çoklu çizgiyi çıkar",
                "Yan ve alt yüzeyleri ekleyin",
                "Tarama ile kesit görünüm",
              ].map((f, i) => (
                <li key={i} className="flex items-start"><span className="mr-2">•</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-accent/10 p-6 rounded-xl shadow-sm">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Versiyon 2</h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Noktaları araziye yansıtın",
                "Katı model olmadan 3B kazı verisi aktarımı",
                "GPS tarama sistemleri için üçgen kazı çukurları",
                "Değişiklikleri sıralama (tamamen yukarı/tamamen aşağı)",
                "Boru çukuru için eğimli çoklu çizgi girişi",
                "Alan değiştirici ile daha fazla esneklik",
                "Alt yüzeyleri çıkarma imkanı",
                "Kontur çizgileri arası mesafe ≥ 0.01m",
                "Arazi modeli için kesit rengi",
                "Çoklu düzenlemede iyileştirme",
                "Sınıra kadar serbest eğim (V2.0.0.5)",
                "Allplan 2020-1’de kesitlerde/görünümlerde optimize edilmiş görünüm",
              ].map((f, i) => (
                <li key={i} className="flex items-start"><span className="mr-2">•</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-accent/10 p-6 rounded-xl shadow-sm">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Versiyon 1</h3>
            <ul className="space-y-2 text-gray-700">
              {[
                "Sezgisel kullanım; 4+ saat eğitim videoları",
                "Dinamik yükseklik, uygulama/kaldırma, hacim ve değerlendirmeler",
                "Erken planlama aşamalarında basit maliyet analizi",
                "Eğimli kazı zeminleri, banketler, hendekler, barajlar",
                "Görselleştirme için vardiya (katman) modelleri",
                "Çok katmanlı arazi (yüzey, buzultaşı, kaya, …)",
                "Biçim özellikleri ve yüzey renkleri ayarları",
                "Bina altı kazılmış zemin kabulü",
                "Etkileşimli hacimler, alanlar ve nitelikler",
                "Allplan Raporları ve Excel ile kullanılabilir",
                "Lisans, Allplan lisans aktarımıyla birlikte aktarılır",
              ].map((f, i) => (
                <li key={i} className="flex items-start"><span className="mr-2">•</span><span>{f}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>,

    <section key="user-report" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Kullanıcı Raporu" align="center" className="py-0 bg-transparent mb-6" compact titleSize="lg" />
        <p className="text-gray-700 max-w-3xl mx-auto">
          Rivage Bottighofen projesinde (TG) 9 blok ve yeraltı otoparkı içeren kapsamlı çalışma, makine verilerinin işlenmesinde yüksek verimlilik sağlamıştır. Şantiyede kontrol, kolay ve verimli şekilde gerçekleştirildi.
        </p>
      </div>
    </section>,

    <section key="gallery-plan" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Plan Örnekleri" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <ImageGallery images={planImages} sectionTitle="Planlar" sectionDescription="Parametrik arazi plan örnekleri" />
      </div>
    </section>,

    <section key="gallery-ekran" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Ekran Görüntüleri" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <ImageGallery images={ekranImages} sectionTitle="Ekran Görüntüleri" sectionDescription="Ara yüz ve fonksiyon ekranları" />
      </div>
    </section>,

    <section key="gallery-model" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Model Örnekleri" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <ImageGallery images={modelImages} sectionTitle="Modeller" sectionDescription="3B modeller ve yüzeyler" />
      </div>
    </section>,

    <section key="gallery-photo" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ImageGallery 
          images={fotoImages} 
          sectionTitle="Fotolar" 
          sectionDescription="Saha ve referans görselleri" 
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
      title="Parametrik Arazi"
      subtitle="Kazıdan fazlası"
      description="Parametrik arazi modeli ile platform, eğim ve hacim hesapları"
      sections={sections}
    />
  );
};

export default ParametricTerrain;
