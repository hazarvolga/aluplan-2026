"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import ApplicationAreas from "@/components/ApplicationAreas";
import VideoTwoColumn from "@/components/VideoTwoColumn";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";
import SpecificationTables from "@/components/SpecificationTables";
import RegulaTabs from "@/components/RegulaTabs";
import { Car, Truck, GitFork, MoveHorizontal, Map, Route } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import SectionHeader from "@/components/SectionHeader";
import iconFahrspur from "@/assets/solutions/cds/drive-curve/islevsel-genel-bakis/Fahrspur.webp";
import iconFahrspurErzeugen from "@/assets/solutions/cds/drive-curve/islevsel-genel-bakis/Fahrspur-erzeugen.webp";
import iconFahrzeugEditor from "@/assets/solutions/cds/drive-curve/islevsel-genel-bakis/Fahrzeug-Editor.webp";
import iconFahrspurAndern from "@/assets/solutions/cds/drive-curve/islevsel-genel-bakis/Fahrspur-andern.webp";
import iconLizenzAnzeigen from "@/assets/solutions/cds/drive-curve/islevsel-genel-bakis/Lizenz-anzeigen.webp";
import imgAracOrnegi from "@/assets/solutions/cds/drive-curve/gallery/Arac-Ornegi.jpg";
import imgAracEditoru from "@/assets/solutions/cds/drive-curve/gallery/Arac-Editoru.webp";
import imgFgsv287 from "@/assets/solutions/cds/drive-curve/gallery/FGSV-287-2020.jpg";
import imgFgsv283 from "@/assets/solutions/cds/drive-curve/gallery/FGSV-283-2005.jpg";
import imgVss40198 from "@/assets/solutions/cds/drive-curve/gallery/VSS-40198a-2019.jpg";
import imgVssSn640271a from "@/assets/solutions/cds/drive-curve/gallery/VSS-SN-640271a-1990.jpg";

const galleryModules = import.meta.glob("@/assets/solutions/cds/drive-curve/gallery/*.{webp,jpg,jpeg,png}", { eager: true });
const galleryImages = (Object.values(galleryModules) as { default: string }[]).map((m, idx) => ({
  id: `dc-${idx}`,
  src: m.default,
  alt: `Sürüş Eğrisi ${idx + 1}`,
  title: "Sürüş Eğrisi",
  description: "",
  category: "galeri",
}));

const DriveCurve = () => {
  const description =
    "Allplan Sürüş Eğrisi eklentisi ile sürüş eğrilerini ve dönüş manevralarını kolaylıkla kontrol edebilirsiniz. Bir mimar, altyapı planlayıcısı, şehir plancısı, mühendis ve teknik ressam olarak sezgisel kullanımdan ve örneğin rotanın her an ayarlanabilmesinden yararlanabilirsiniz. İleriye ve geriye doğru sürerek, gerekli araç kaplama eğrilerini ve dolayısıyla gerekli alanı kolayca belirleyebilirsiniz. Trafiklenebilirliğin doğrulanması böylece doğrudan Allplan’da yapılabilir.";

  const applicationAreas = [
    { title: "Garajlar ve Otoparklar", subtitle: "Boyutlandırma ve Doğrulama" },
    { title: "Olağandışı Nakliyeler", subtitle: "Geçilebilirlik Kontrolü" },
    { title: "Olağandışı Yollar", subtitle: "Özel düğüm geometrileri" },
    { title: "Dar Sokaklar", subtitle: "Darboğaz Konsepti" },
    { title: "Şehir Bölge Planlaması", subtitle: "Danışmanlık" },
    { title: "Alternatif Trafik Yönlendirme", subtitle: "Geçici Trafik Yönlendirme" },
  ];

  const featureOverview = [
    "Fahrspur",
    "Fahrspur erzeugen",
    "Fahrzeug-Editor",
    "Fahrspur ändern",
    "Lizenz anzeigen",
    "Genel bakış",
    "Versiyon",
    "Ön Bilgi",
  ];

  const sections = [
    <InfoMediaTwoColumn
      key="info"
      title="Sürüş Eğrisi"
      descriptions={[
        "Bir mimar, altyapı planlayıcısı, şehir plancısı, mühendis ve teknik ressam olarak sezgisel kullanımdan ve örneğin rotanın her an ayarlanabilmesinden yararlanabilirsiniz.",
        "İleriye ve geriye doğru sürerek, gerekli araç kaplama eğrilerini ve dolayısıyla gerekli alanı kolayca belirleyebilirsiniz.",
        "Trafiklenebilirliğin doğrulanması böylece doğrudan Allplan’da yapılabilir.",
      ]}
      videoUrl={`https://www.youtube.com/embed/IKXIq1So8jU`}
    />,
    <ApplicationAreas
      key="areas"
      items={[
        { icon: <Car className="w-12 h-12 text-accent" />, title: "Garajlar ve Otoparklar", description: "Boyutlandırma ve Doğrulama" },
        { icon: <Truck className="w-12 h-12 text-accent" />, title: "Olağandışı Nakliyeler", description: "Geçilebilirlik Kontrolü" },
        { icon: <GitFork className="w-12 h-12 text-accent" />, title: "Olağandışı Yollar", description: "Özel düğüm geometrileri" },
        { icon: <MoveHorizontal className="w-12 h-12 text-accent" />, title: "Dar Sokaklar", description: "Darboğaz Konsepti" },
        { icon: <Map className="w-12 h-12 text-accent" />, title: "Şehir Bölge Planlaması", description: "Danışmanlık" },
        { icon: <Route className="w-12 h-12 text-accent" />, title: "Alternatif Trafik Yönlendirme", description: "Geçici Trafik Yönlendirme" },
      ]}
    />,
    <ApplicationAreas
      key="areas-functional"
      title="İşlevsel genel bakış"
      items={[
        { icon: iconFahrspur, title: "Fahrspur", description: "Fahrspur" },
        { icon: iconFahrspurErzeugen, title: "Fahrspur erzeugen", description: "Fahrspur erzeugen" },
        { icon: iconFahrzeugEditor, title: "Fahrzeug-Editor", description: "Fahrzeug-Editor" },
        { icon: iconFahrspurAndern, title: "Fahrspur ändern", description: "Fahrspur ändern" },
        { icon: iconLizenzAnzeigen, title: "Lizenz anzeigen", description: "Lizenz anzeigen" },
      ]}
    />,
    <VideoTwoColumn
      key="video-two"
      title="genel bakış"
      columns={[
        { titleTR: "Versiyon", titleDE: "Video gelecek", note: "Video gelecek" },
        { titleTR: "Ön Bilgi", titleDE: "Vorabversion", videoUrl: "https://www.youtube.com/embed/k_3Rfi_RfCw" },
      ]}
    />,
    <MasonryVideoGrid
      key="masonry-video"
      title="Video Galerisi"
      items={[
        { titleTR: "Versiyon 1 için İlk Genel Bakış", titleDE: "ALLPLAN Add-On Fahrspur - Erster Grobüberblick Version 1", videoUrl: "https://www.youtube.com/embed/IKXIq1So8jU" },
        { titleTR: "ALLPLAN Eklentileri – Çoklu Kurulum", titleDE: "ALLPLAN Add Ons Multi Setup", videoUrl: "https://www.youtube.com/embed/BWKDmZyIUo4" },
        { titleTR: "Endüstriyel Uygulama Örneği", titleDE: "ALLPLAN Add-On Fahrspur - Praxisbeispiel Industrie", videoUrl: "https://www.youtube.com/embed/AFmEuRCJ72c" },
        { titleTR: "Rampa Üzerinde Kaplama Eğrisi Doğrulaması", titleDE: "ALLPLAN Add-On Fahrspur - Rampe mit Schleppkurve prüfen", videoUrl: "https://www.youtube.com/embed/c_4xJ0SVEfw" },
        { titleTR: "Ön Sürüm (Geliştirme Aşaması)", titleDE: "ALLPLAN Add-On Fahrspur - Vorab Version", videoUrl: "https://www.youtube.com/embed/k_3Rfi_RfCw" },
        { titleTR: "EuroCombi | BOKraft Dönme Dairesi", titleDE: "ALLPLAN Add-On Fahrspur - EuroCombi | BOKraft-Kreis", videoUrl: "https://www.youtube.com/embed/pq0I8dIF254" },
        { titleTR: "Kaplama Eğrisi Şeması", titleDE: "ALLPLAN Add-On Fahrspur - Schleppkurven Schema", videoUrl: "https://www.youtube.com/embed/xRhXqRkB6mk" },
      ]}
    />,
    <SpecificationTables
      key="spec-tables"
      title="Öne Çıkan Özellikler"
      tables={[
        { rows: [
          { keyTR: "Araç kütüphane" },
          { keyTR: "Araç türleri: araba, kamyon, yarı römork ve körüklü otobüs" },
          { keyTR: "Çift körüklü tren ve çift körüklü otobüs" },
          { keyTR: "Römorklu mafsallı kamyon ve dolly ve yarı römorklu kamyon" },
          { keyTR: "Direksiyon arabalı ve yarı römorklu kamyon" },
          { keyTR: "İnşaat araçları: Çimento karıştırıcıları ve damperli kamyonlar" },
          { keyTR: "Düzenlenebilir kulplu dinamik araba yolu" },
          { keyTR: "Etkileşimli önizleme ile rota hesaplama" },
        ]},
        { rows: [
          { keyTR: "Önceden tanımlanmış bir eksen/yol boyunca sürüş" },
          { keyTR: "Direksiyon kontrolü dahil ileri ve geri sürüş" },
          { keyTR: "Araç ana hatları, lastikler ve zarflar" },
          { keyTR: "Araç önü ve araç arkası için eğriler" },
          { keyTR: "Ön ve arka aks için eğriler" },
          { keyTR: "Araca olan mesafe için eğriler" },
          { keyTR: "Dingil mesafesi eğrileri" },
          { keyTR: "Özel araçlar için araç editörü" },
        ]},
      ]}
    />,
    <RegulaTabs
      key="regula-tabs"
      title="Araç Kataloğu"
      defaultValue="arac-editoru"
      items={[
        {
          value: "arac-editoru",
          labelTR: "Araç Editörü",
          content: (
            <img src={imgAracEditoru} alt="Araç Editörü" className="w-full rounded-xl shadow" />
          ),
        },
        {
          value: "arac-ornegi",
          labelTR: "Araç Örneği",
          content: (
            <img src={imgAracOrnegi} alt="Araç Örneği" className="w-full rounded-xl shadow" />
          ),
        },
        {
          value: "fgsv-287-2020",
          labelTR: "FGSV 287 2020",
          content: (
            <img src={imgFgsv287} alt="FGSV 287 2020" className="w-full rounded-xl shadow" />
          ),
        },
        {
          value: "fgsv-283-2005",
          labelTR: "FGSV 283 2005",
          content: (
            <img src={imgFgsv283} alt="FGSV 283 2005" className="w-full rounded-xl shadow" />
          ),
        },
        {
          value: "vss-40198a-2019",
          labelTR: "VSS 40198a 2019",
          content: (
            <img src={imgVss40198} alt="VSS 40198a 2019" className="w-full rounded-xl shadow" />
          ),
        },
        {
          value: "vss-sn-640271a-1990",
          labelTR: "VSS SN 640271a 1990",
          content: (
            <img src={imgVssSn640271a} alt="VSS SN 640271a 1990" className="w-full rounded-xl shadow" />
          ),
        },
      ]}
    />,
    <section key="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ImageGallery images={galleryImages} sectionTitle="Galeri" sectionDescription="" />
      </div>
    </section>,
  ];

  return (
    <AddonDetailTemplate
      title="Add On Sürüş Eğrisi"
      subtitle="Sürüş eğrisini Allplan’da kontrol edin."
      description={description}
      sections={sections}
    />
  );
};

export default DriveCurve;
