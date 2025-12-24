"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RegulaTabs from "@/components/RegulaTabs";
import ImageGallery from "@/components/ImageGallery";

// Importing specific image for license if available
import imgLicense from "@/assets/solutions/cds/parametrik-arazi/license.jpg";
import imgUserReport from "@/assets/solutions/cds/parametrik-arazi/user-report.jpg";

// Static Imports - Planlar
import plan01 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_5beef35dd5854.webp";
import plan02 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_5beef35de228b.webp";
import plan03 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_5beef36057f56.webp";
import plan04 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_5beef3606263e.webp";
import plan05 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_5beef3606b73a.webp";
import plan06 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_5beef3606e218.webp";
import plan07 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_5beef36102468.webp";
import plan08 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d0716eff5.webp";
import plan09 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d0eadd6ff.webp";
import plan10 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d18e6480e.webp";
import plan11 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d2b110976.webp";
import plan12 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d2b111fa8.webp";
import plan13 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d2b251405.webp";
import plan14 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d34e72b85.webp";
import plan15 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d4e4a20cc.webp";
import plan16 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d4e4d2e89.webp";
import plan17 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d4e4e942b.webp";
import plan18 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d4e4ea5a4.webp";
import plan19 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d60b530a8.webp";
import plan20 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d60ea7648.webp";
import plan21 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d7d449e0c.webp";
import plan22 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2d8727da90.webp";
import plan23 from "@/assets/solutions/cds/parametrik-arazi/planlar/2000_65f2da4ad6117.webp";

// Static Imports - Ekran Görüntüleri
import ekran01 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4a5cfe1.webp";
import ekran02 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4a8852f.webp";
import ekran03 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4aafbfc.webp";
import ekran04 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4ad4102.webp";
import ekran05 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4b0b8ac.webp";
import ekran06 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4b20a2a.webp";
import ekran07 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4b47b68.webp";
import ekran08 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4b7cd01.webp";
import ekran09 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4ba63bb.webp";
import ekran10 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4bcf7e2.webp";
import ekran11 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4c4d932.webp";
import ekran12 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4c52338.webp";
import ekran13 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4c8c5a9.webp";
import ekran14 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4d32f82.webp";
import ekran15 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4d71dc5.webp";
import ekran16 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4d7777e.webp";
import ekran17 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4dace88.webp";
import ekran18 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_619f6f4dafaf8.webp";
import ekran19 from "@/assets/solutions/cds/parametrik-arazi/ekran-goruntuleri/2000_61e92dd5545fd.webp";

// Static Imports - Modeller
import model01 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef34776270.webp";
import model02 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef347a5223.webp";
import model03 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef347aa6fe.webp";
import model04 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef347e598c.webp";
import model05 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef347e9bb1.webp";
import model06 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef3480ee17.webp";
import model07 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef3486fe1f.webp";
import model08 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef348e4ea5.webp";
import model09 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef34921a74.webp";
import model10 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef3fb372d2.webp";
import model11 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5beef3fc2ecc2.webp";
import model12 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5bf2d64fbbe8a.webp";
import model13 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5f3a81055030e.webp";
import model14 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5f3a8106bc960.webp";
import model15 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_5f3a810779c89.webp";
import model16 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_60e7e69e001db.webp";
import model17 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_60e7e69e20ca8.webp";
import model18 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_60e7e69e2db31.webp";
import model19 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_61e92c8014559.webp";
import model20 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_61f0f856625bb.webp";
import model21 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_620cd40392593.webp";
import model22 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_6218e8ac1d0c5.webp";
import model23 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_6220c8a798856.webp";
import model24 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_6220c8a9c4696.webp";
import model25 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_649457ade5514.webp";
import model26 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_649457ae5d892.webp";
import model27 from "@/assets/solutions/cds/parametrik-arazi/modeller/2000_649457ae627e1.webp";

// Static Imports - Fotolar
import foto01 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_5beef3877c441.webp";
import foto02 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_5beef387ecf51.webp";
import foto03 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_5beef3882639a.webp";
import foto04 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_5beef38af2df8.webp";
import foto05 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_5beef38e5864a.webp";
import foto06 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_5beef38ea0204.webp";
import foto07 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_5beef3b90a835.webp";
import foto08 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_5beef3b9a1dc1.webp";
import foto09 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_61a49f201d4e9.webp";
import foto10 from "@/assets/solutions/cds/parametrik-arazi/fotolar/2000_61a49f2037b87.webp";

type GalleryItem = { id: string; src: any; alt: string; title: string; description: string; category: string };

const toItems = (modules: any[], prefix: string): GalleryItem[] =>
  modules.map((m, idx) => ({
    id: `${prefix}-${idx}`,
    src: m,
    alt: `${prefix} ${idx + 1}`,
    title: prefix,
    description: "",
    category: prefix,
  }));

const planImagesList = [plan01, plan02, plan03, plan04, plan05, plan06, plan07, plan08, plan09, plan10, plan11, plan12, plan13, plan14, plan15, plan16, plan17, plan18, plan19, plan20, plan21, plan22, plan23];
const ekranImagesList = [ekran01, ekran02, ekran03, ekran04, ekran05, ekran06, ekran07, ekran08, ekran09, ekran10, ekran11, ekran12, ekran13, ekran14, ekran15, ekran16, ekran17, ekran18, ekran19];
const modelImagesList = [model01, model02, model03, model04, model05, model06, model07, model08, model09, model10, model11, model12, model13, model14, model15, model16, model17, model18, model19, model20, model21, model22, model23, model24, model25, model26, model27];
const fotoImagesList = [foto01, foto02, foto03, foto04, foto05, foto06, foto07, foto08, foto09, foto10];

const planImages: GalleryItem[] = toItems(planImagesList, "planlar");
const ekranImages: GalleryItem[] = toItems(ekranImagesList, "ekran");
const modelImages: GalleryItem[] = toItems(modelImagesList, "modeller");
const fotoImages: GalleryItem[] = toItems(fotoImagesList, "fotolar");

export default function ClientPage() {
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
      title="Bu parametrik Allplan eklentisinin işlevi, arazi kazısı oluşturmanın çok ötesine geçer."
      subtitle=""
      descriptions={[
        "Kazı planı, arazi modeli ve sunum için etkileyici katman modellerine hızla ulaşın. Değişikliklerin basitçe tamamlanmasına büyük önem veriyoruz.",
        "Tüm bunlar sorunsuz ve sezgisel kullanımla birleştiğinde eklentinin gücü ortaya çıkıyor.",
      ]}
      videoUrl="https://www.youtube.com/embed/WHPmmRcCdMQ"
    />,

    <InfoMediaTwoColumn
      key="version-3-info"
      title="Versiyon 3 | Allplan 2021 – 2024"
      subtitle="Kazı – Dolgu – Şantiye Planlaması"
      descriptions={[]}
      videoUrl="https://www.youtube.com/embed/bTB43HH45uU"
      leftContent={
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm text-gray-300">
          {[
            "Allplan 2023 onayı",
            "Yeni işlem kesme katmanı",
            "Mimari bileşenler için referans yüzeyi",
            "Yeni dolgu işlemi",
            "Küresel Sınır",
            "Optimizasyon alanı değiştirici",
            "Üçgen ağları kapat",
            "Aynı anda birden çok değiştiricinin sıralamasını özelleştirin",
            "Desenler ve taramalar için iyileştirilmiş 2B renk gösterimi",
            "Yüzeyler için renk ataması / kaydet ve yükle",
            "Eğimli ve yatay yüzeyler için efsaneler",
            "Eğimli ve yatay yüzeyler için özellikler",
            "Kenarlık çokgenlerini sil",
            "Kenarlık çoklu çizgisini çıkar",
            "Yan ve alt yüzeyleri ekleyin",
            "Tarama ile kesit görünüm"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      }
    />,

    <InfoMediaTwoColumn
      key="version-2-info"
      title="VERSİYON 2"
      subtitle="İkinci versiyonu on dakikada keşfedin…"
      descriptions={[]}
      videoUrl="https://www.youtube.com/embed/UvORTOvHy-g"
      leftContent={
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm text-gray-300">
          {[
            "Noktaları araziye yansıtın",
            "Katı model olmadan 3B kazı verisi aktarımı",
            "GPS tarama sistemleri için üçgen kazı çukurları",
            "Değişiklikleri sıralama (tamamen yukarı / tamamen aşağı)",
            "Boru çukuru için eğimli bir çoklu çizginin girişi",
            "Alan değiştirici ile daha fazla esneklik",
            "Alt yüzeyleri çıkarma imkanı",
            "Kontur çizgileri arasındaki mesafe en az 0.01m",
            "Arazi modeli için kesit rengi",
            "Çoklu düzenlemede iyileştirme",
            "Sınıra kadar serbest eğim (V 2.0.0.5’te yeni)",
            "Allplan 2020-1’de kesitlerde ve görünümlerde optimize edilmiş görünüm"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      }
    />,

    <InfoMediaTwoColumn
      key="version-1-info"
      title="VERSİYON 1"
      subtitle="Birinci versiyonu on dakikada keşfedin…"
      descriptions={[]}
      videoUrl="https://www.youtube.com/embed/t59MHn23Eic"
      leftContent={
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm text-gray-300">
          {[
            "Sezgisel kullanım ve 4 saatten fazla video ile öğrenmesi kolay",
            "Dinamik yükseklik, uygulama ve kaldırma, hacim ve değerlendirmeler oluşturma",
            "Erken planlama aşamalarında bile basit maliyet analizi",
            "Eğimli kazı zeminleri, banketler, boru hattı hendekleri, barajlar vb.",
            "Görselleştirmeler için vardiya modellerinin oluşturulması",
            "Çok katmanlı arazi (yüzey katmanı, buzultaşı, kaya, …)",
            "Biçim özellikleri, yüzey renkleri vb. ayarlar.",
            "Bina altı kazılmış zemin kabulü",
            "Etkileşimli hacimler, alanlar ve nitelikler (katmanlar dahil)",
            "Allplan Raporları ve Excel ile kullanılabilir",
            "Allplan lisansı bir bilgisayardan diğerine aktarılınca eklenti lisansı da aktarılır"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-emerald-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      }
    />,





    <InfoMediaTwoColumn
      key="user-report"
      title="Kullanıcı Raporu"
      description="Rivage Bottighofen projesinde (TG) 9 blok ve yeraltı otoparkı içeren kapsamlı çalışma, makine verilerinin işlenmesinde yüksek verimlilik sağlamıştır. Şantiyede kontrol, kolay ve verimli şekilde gerçekleştirildi."
      imageSrc={imgUserReport}
      reverse
    />,

    <RegulaTabs
      key="galleries"
      title="Galeri"
      defaultValue="modeller"
      items={[
        {
          value: "modeller",
          labelTR: "Modeller",
          content: (
            <ImageGallery
              images={modelImages}
              sectionTitle=""
              sectionDescription="3B modeller ve yüzeyler"
              hideSectionHeader
              hideCategoryFilter
            />
          ),
        },
        {
          value: "fotolar",
          labelTR: "Fotolar",
          content: (
            <ImageGallery
              images={fotoImages}
              sectionTitle=""
              sectionDescription="Saha ve referans görselleri"
              hideSectionHeader
              hideCategoryFilter
            />
          ),
        },
        {
          value: "ekran-goruntuleri",
          labelTR: "Ekran Görüntüleri",
          content: (
            <ImageGallery
              images={ekranImages}
              sectionTitle=""
              sectionDescription="Ara yüz ve fonksiyon ekranları"
              hideSectionHeader
              hideCategoryFilter
            />
          ),
        },
        {
          value: "planlar",
          labelTR: "Planlar",
          content: (
            <ImageGallery
              images={planImages}
              sectionTitle=""
              sectionDescription="Parametrik arazi plan örnekleri"
              hideSectionHeader
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
      imageUrl={imgLicense}
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
      title="Parametrik Arazi"
      subtitle="Kazıdan fazlası"
      description={
        <div className="flex flex-col gap-6">
          <p className="text-lg text-white/80 leading-relaxed">
            Parametrik arazi modeli ile platform, eğim ve hacim hesapları
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-semibold">
              <a href="https://www.youtube.com/playlist?list=PLZeQ6A4Fw6kDT_0iSHSocEo9eBkoZwD_B" target="_blank" rel="noopener noreferrer">
                Mühendislik Film Oynatma Listesi
              </a>
            </Button>
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-semibold">
              <a href="https://www.youtube.com/playlist?list=PLZeQ6A4Fw6kBI4CnRNhG50rrGhUDGfDHw" target="_blank" rel="noopener noreferrer">
                Mimari Film Oynatma Listesi
              </a>
            </Button>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">55 çalışma ve demo filmi</p>
            <p className="text-sm text-gray-400 mt-1 max-w-lg">
              4 saatin üzerinde film malzemesi, inovatif arazi kazı planlama dönemine mümkün olan en hızlı girişi sağlar.
            </p>
          </div>
        </div>
      }
      sections={sections}
    />
  );
}
