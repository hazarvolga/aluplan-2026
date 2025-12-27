"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import ResourceCardGrid from "@/components/ResourceCardGrid";
import heroImage from "@/assets/solutions/structural-hero.jpg";
import imgDriveCurve from "@/assets/solutions/cds/surus-egirisi.webp";
import imgSteelComponents from "@/assets/solutions/cds/celik-profil-bilesenleri.webp";
import imgParametricTerrain from "@/assets/solutions/cds/parametrik-arazi.webp";
import imgRamp from "@/assets/solutions/cds/rampa.webp";
import imgGeometryTools from "@/assets/solutions/cds/geometry-tools.jpeg";
import imgDwgConverter from "@/assets/solutions/cds/dwg-converter.jpeg";
import img3DDimensioning from "@/assets/solutions/cds/3d-dimensioning.jpeg";
import imgGraphicText from "@/assets/solutions/cds/graphic-text.jpeg";
import imgSketchup from "@/assets/solutions/cds/sketchup-converter.jpg";

export default function ClientPage() {
  const addonsCards = [
    { image: imgDriveCurve, title: "Sürüş Eğrisi", subtitle: "Drive Curve", buttonText: "İncele", href: "/solutions/addons/drive-curve" },
    { image: imgSteelComponents, title: "Çelik Profil Bileşenleri", subtitle: "Çelik konstrüksiyon – Vidalar – Levhalar", buttonText: "İncele", href: "/solutions/addons/steel-components" },
    { image: imgParametricTerrain, title: "Parametrik Arazi", subtitle: "Kazıdan fazlası", buttonText: "İncele", href: "/solutions/addons/parametric-terrain" },
    { image: imgRamp, title: "Rampa", subtitle: "Ramp", buttonText: "İncele", href: "/solutions/addons/ramp" },
    { image: imgGeometryTools, title: "Geometri Araçları", subtitle: "Geometry Tools", buttonText: "İncele", href: "/solutions/addons/geometry-tools" },
    { image: imgDwgConverter, title: "2B DWG Converter", subtitle: "2B elemanların hızlı dönüşümü", buttonText: "İncele", href: "/solutions/addons/2d-dwg-converter" },
    { image: img3DDimensioning, title: "3B Ölçülendirme", subtitle: "Serbest 3B Ölçülendirme", buttonText: "İncele", href: "/solutions/addons/three-dimensioning" },
    { image: imgGraphicText, title: "Grafiksel Yazı", subtitle: "Vektörleştirilmiş ve 3B metinler", buttonText: "İncele", href: "/solutions/addons/graphical-text" },
    { image: imgSketchup, title: "SketchUp Dönüştürücü", subtitle: "Dokularla Allplan import, Lumion export, vb.", buttonText: "İncele", href: "/solutions/addons/sketchup-converter" },
  ];

  return (
    <EnhancedSolutionTemplate
      badge="EKLENTİLER"
      title="CDS ADD-ON"
      subtitle="TÜRKİYE'YE ÖZEL BETONARME TASARIM EKLENTİSİ"
      description="Türkiye Bina Deprem Yönetmeliği'ne (TBDY 2018) uyumlu betonarme tasarım eklentisi. Yerel standartlara göre yapısal tasarım yapın ve onay süreçlerini hızlandırın."
      heroImage={heroImage}
      showHeroButtons={false}
      showCta={false}
      ctaTitle="CDS Add-On'u deneyin"
      ctaDescription="Türkiye deprem yönetmeliğine uygun yapısal tasarım için en güçlü araç."
      postHeroSection={
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ResourceCardGrid items={addonsCards} imageContainerClassName="bg-white" />
          </div>
        </section>
      }
    />
  );
}
