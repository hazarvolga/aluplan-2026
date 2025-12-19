"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import ImageGallery from "@/components/ImageGallery";
import RegulaTabs from "@/components/RegulaTabs";
import SpecificationTables from "@/components/SpecificationTables";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";
import ApplicationAreas from "@/components/ApplicationAreas";
import { Car, Truck, GitFork, MoveHorizontal, Map, Route } from "lucide-react";
import Image from "next/image";
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
import gal1 from "@/assets/solutions/cds/drive-curve/gallery/1-1024x576.webp";
import gal2 from "@/assets/solutions/cds/drive-curve/gallery/2-1024x576.webp";
import gal3 from "@/assets/solutions/cds/drive-curve/gallery/3-1024x576.webp";
import gal4 from "@/assets/solutions/cds/drive-curve/gallery/4-1024x576.webp";
import gal5 from "@/assets/solutions/cds/drive-curve/gallery/5-1024x576.webp";
import gal7 from "@/assets/solutions/cds/drive-curve/gallery/7-1024x576.webp";
import gal8 from "@/assets/solutions/cds/drive-curve/gallery/8-1024x576.webp";
import gal9 from "@/assets/solutions/cds/drive-curve/gallery/9-1024x576.webp";
import gal10 from "@/assets/solutions/cds/drive-curve/gallery/10-1024x576.webp";
import gal11 from "@/assets/solutions/cds/drive-curve/gallery/11-1024x576.webp";
import gal12 from "@/assets/solutions/cds/drive-curve/gallery/12-1024x576.webp";
import gal13 from "@/assets/solutions/cds/drive-curve/gallery/13-1024x576.webp";
import gal14 from "@/assets/solutions/cds/drive-curve/gallery/14-1024x576.webp";
import gal15 from "@/assets/solutions/cds/drive-curve/gallery/15-1024x576.webp";
import gal16 from "@/assets/solutions/cds/drive-curve/gallery/16-1024x576.webp";
import gal17 from "@/assets/solutions/cds/drive-curve/gallery/17-1024x576.webp";
import gal19 from "@/assets/solutions/cds/drive-curve/gallery/19-1024x576.webp";
import gal20 from "@/assets/solutions/cds/drive-curve/gallery/20-1024x576.webp";
const galleryModules = [gal1, gal2, gal3, gal4, gal5, gal7, gal8, gal9, gal10, gal11, gal12, gal13, gal14, gal15, gal16, gal17, gal19, gal20, imgAracOrnegi, imgAracEditoru, imgFgsv287, imgFgsv283, imgVss40198, imgVssSn640271a];
const galleryImages = galleryModules.map((m, idx) => ({ id: `dc-${idx}`, src: m, alt: `Sürüş Eğrisi ${idx + 1}`, title: "Sürüş Eğrisi", description: "", category: "galeri" }));
export default function ClientPage() {
  const description = "Allplan Sürüş Eğrisi eklentisi ile sürüş eğrilerini ve dönüş manevralarını kolaylıkla kontrol edebilirsiniz. Bir mimar, altyapı planlayıcısı, şehir plancısı, mühendis ve teknik ressam olarak sezgisel kullanımdan ve örneğin rotanın her an ayarlanabilmesinden yararlanabilirsiniz. İleriye ve geriye doğru sürerek, gerekli araç kaplama eğrilerini ve dolayısıyla gerekli alanı kolayca belirleyebilirsiniz. Trafiklenebilirliğin doğrulanması böylece doğrudan Allplan’da yapılabilir.";
  const sections = [
    <InfoMediaTwoColumn key="info" title="Sürüş Eğrisi" descriptions={["Bir mimar, altyapı planlayıcısı, şehir plancısı, mühendis ve teknik ressam olarak sezgisel kullanımdan ve örneğin rotanın her an ayarlanabilmesinden yararlanabilirsiniz.","İleriye ve geriye doğru sürerek, gerekli araç kaplama eğrilerini ve dolayısıyla gerekli alanı kolayca belirleyebilirsiniz.","Trafiklenebilirliğin doğrulanması böylece doğrudan Allplan’da yapılabilir."]} videoUrl="https://www.youtube.com/embed/IKXIq1So8jU" />,
    <ApplicationAreas key="areas" items={[{ icon: <Car className="w-12 h-12 text-accent" />, title: "Garajlar ve Otoparklar", description: "Boyutlandırma ve Doğrulama" },{ icon: <Truck className="w-12 h-12 text-accent" />, title: "Olağandışı Nakliyeler", description: "Geçilebilirlik Kontrolü" },{ icon: <GitFork className="w-12 h-12 text-accent" />, title: "Olağandışı Yollar", description: "Özel düğüm geometrileri" },{ icon: <MoveHorizontal className="w-12 h-12 text-accent" />, title: "Dar Sokaklar", description: "Darboğaz Konsepti" },{ icon: <Map className="w-12 h-12 text-accent" />, title: "Şehir Bölge Planlaması", description: "Danışmanlık" },{ icon: <Route className="w-12 h-12 text-accent" />, title: "Alternatif Trafik Yönlendirme", description: "Geçici Trafik Yönlendirme" }]} />,
    <ApplicationAreas key="areas-functional" title="İşlevsel genel bakış" items={[{ icon: iconFahrspur, title: "Fahrspur", description: "Fahrspur" },{ icon: iconFahrspurErzeugen, title: "Fahrspur erzeugen", description: "Fahrspur erzeugen" },{ icon: iconFahrzeugEditor, title: "Fahrzeug-Editor", description: "Fahrzeug-Editor" },{ icon: iconFahrspurAndern, title: "Fahrspur ändern", description: "Fahrspur ändern" },{ icon: iconLizenzAnzeigen, title: "Lizenz anzeigen", description: "Lizenz anzeigen" }]} />,
    <MasonryVideoGrid key="masonry-video" title="Video Galerisi" items={[{ titleTR: "Versiyon 1 için İlk Genel Bakış", titleDE: "ALLPLAN Add-On Fahrspur - Erster Grobüberblick Version 1", videoUrl: "https://www.youtube.com/embed/IKXIq1So8jU" },{ titleTR: "ALLPLAN Eklentileri – Çoklu Kurulum", titleDE: "ALLPLAN Add Ons Multi Setup", videoUrl: "https://www.youtube.com/embed/BWKDmZyIUo4" },{ titleTR: "Endüstriyel Uygulama Örneği", titleDE: "ALLPLAN Add-On Fahrspur - Praxisbeispiel Industrie", videoUrl: "https://www.youtube.com/embed/AFmEuRCJ72c" },{ titleTR: "Rampa Üzerinde Kaplama Eğrisi Doğrulaması", titleDE: "ALLPLAN Add-On Fahrspur - Rampe mit Schleppkurve prüfen", videoUrl: "https://www.youtube.com/embed/c_4xJ0SVEfw" },{ titleTR: "Ön Sürüm (Geliştirme Aşaması)", titleDE: "ALLPLAN Add-On Fahrspur - Vorab Version", videoUrl: "https://www.youtube.com/embed/k_3Rfi_RfCw" },{ titleTR: "EuroCombi | BOKraft Dönme Dairesi", titleDE: "ALLPLAN Add-On Fahrspur - EuroCombi | BOKraft-Kreis", videoUrl: "https://www.youtube.com/embed/pq0I8dIF254" },{ titleTR: "Kaplama Eğrisi Şeması", titleDE: "ALLPLAN Add-On Fahrspur - Schleppkurven Schema", videoUrl: "https://www.youtube.com/embed/xRhXqRkB6mk" }]} />,
    <SpecificationTables key="spec-tables" title="Öne Çıkan Özellikler" tables={[{ rows: [{ keyTR: "Araç kütüphane" },{ keyTR: "Araç türleri: araba, kamyon, yarı römork ve körüklü otobüs" },{ keyTR: "Çift körüklü tren ve çift körüklü otobüs" },{ keyTR: "Römorklu mafsallı kamyon ve dolly ve yarı römorklu kamyon" },{ keyTR: "Direksiyon arabalı ve yarı römorklu kamyon" },{ keyTR: "İnşaat araçları: Çimento karıştırıcıları ve damperli kamyonlar" },{ keyTR: "Düzenlenebilir kulplu dinamik araba yolu" },{ keyTR: "Etkileşimli önizleme ile rota hesaplama" }]} ,{ rows: [{ keyTR: "Önceden tanımlanmış bir eksen/yol boyunca sürüş" },{ keyTR: "Direksiyon kontrolü dahil ileri ve geri sürüş" },{ keyTR: "Araç ana hatları, lastikler ve zarflar" },{ keyTR: "Araç önü ve araç arkası için eğriler" },{ keyTR: "Ön ve arka aks için eğriler" },{ keyTR: "Araca olan mesafe için eğriler" },{ keyTR: "Dingil mesafesi eğrileri" },{ keyTR: "Özel araçlar için araç editörü" }]} ]} />,
    <RegulaTabs key="regula-tabs" title="Araç Kataloğu" defaultValue="arac-editoru" items={[{ value: "arac-editoru", labelTR: "Araç Editörü", content: (<Image src={imgAracEditoru} alt="Araç Editörü" className="w-full rounded-xl shadow" />)}, { value: "arac-ornegi", labelTR: "Araç Örneği", content: (<Image src={imgAracOrnegi} alt="Araç Örneği" className="w-full rounded-xl shadow" />)}, { value: "fgsv-287-2020", labelTR: "FGSV 287 2020", content: (<Image src={imgFgsv287} alt="FGSV 287 2020" className="w-full rounded-xl shadow" />)}, { value: "fgsv-283-2005", labelTR: "FGSV 283 2005", content: (<Image src={imgFgsv283} alt="FGSV 283 2005" className="w-full rounded-xl shadow" />)}, { value: "vss-40198a-2019", labelTR: "VSS 40198a 2019", content: (<Image src={imgVss40198} alt="VSS 40198a 2019" className="w-full rounded-xl shadow" />)}, { value: "vss-sn-640271a-1990", labelTR: "VSS SN 640271a 1990", content: (<Image src={imgVssSn640271a} alt="VSS SN 640271a 1990" className="w-full rounded-xl shadow" />)}]} />,
    <section key="gallery" className="py-16 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><ImageGallery images={galleryImages} sectionTitle="Galeri" sectionDescription="" /></div></section>
  ];
  return <AddonDetailTemplate title="Add On Sürüş Eğrisi" subtitle="Sürüş eğrisini Allplan’da kontrol edin." description={description} sections={sections} />;
}
