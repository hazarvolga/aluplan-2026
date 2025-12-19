"use client"
import SolutionHero from "@/components/SolutionHero";
import ResourceCardGrid from "@/components/ResourceCardGrid";
import imgDriveCurve from "@/assets/solutions/cds/surus-egirisi.webp";
import imgSteelComponents from "@/assets/solutions/cds/celik-profil-bilesenleri.webp";
import imgParametricTerrain from "@/assets/solutions/cds/parametrik-arazi.webp";
import imgRamp from "@/assets/solutions/cds/rampa.webp";
import imgGeometryTools from "@/assets/solutions/cds/geometri-araclari.webp";
import imgDWGConverter from "@/assets/solutions/cds/2b-dwg-converter.webp";
import imgThreeDimensioning from "@/assets/solutions/cds/3d-dimensioning.jpeg";
import imgGraphicalText from "@/assets/solutions/cds/graphic-text.jpeg";
import imgSketchupConverter from "@/assets/solutions/cds/sketchup-converter.jpg";

export default function ClientPage() {
  const items = [
    { image: imgDriveCurve, title: "Sürüş Eğrisi", subtitle: "Drive Curve", buttonText: "İncele", href: "/solutions/addons/drive-curve" },
    { image: imgSteelComponents, title: "Çelik Profil Bileşenleri", subtitle: "Çelik konstrüksiyon – Vidalar – Levhalar", buttonText: "İncele", href: "/solutions/addons/steel-components" },
    { image: imgParametricTerrain, title: "Parametrik Arazi", subtitle: "Kazıdan fazlası", buttonText: "İncele", href: "/solutions/addons/parametric-terrain" },
    { image: imgRamp, title: "Rampa", subtitle: "Ramp", buttonText: "İncele", href: "/solutions/addons/ramp" },
    { image: imgGeometryTools, title: "Geometri Araçları", subtitle: "Geometry Tools", buttonText: "İncele", href: "/solutions/addons/geometry-tools" },
    { image: imgDWGConverter, title: "2B DWG Converter", subtitle: "2B elemanların hızlı dönüşümü", buttonText: "İncele", href: "/solutions/addons/2d-dwg-converter" },
    { image: imgThreeDimensioning, title: "3B Ölçülendirme", subtitle: "Serbest 3B Ölçülendirme", buttonText: "İncele", href: "/solutions/addons/three-dimensioning" },
    { image: imgGraphicalText, title: "Grafiksel Yazı", subtitle: "Vektörleştirilmiş ve 3B metinler", buttonText: "İncele", href: "/solutions/addons/graphical-text" },
    { image: imgSketchupConverter, title: "SketchUp Dönüştürücü", subtitle: "Dokularla Allplan import, Lumion export, vb.", buttonText: "İncele", href: "/solutions/addons/sketchup-converter" },
  ];
  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="ALLPLAN ADD-ON"
        title="CDS Eklentiler"
        description="Allplan CDS ek eklenti ailesi: üretkenliği artıran pratik araçlar ve dönüştürücüler."
        primaryButton={{ text: "İletişime Geçin", href: "/contact" }}
        secondaryButton={{ text: "Çözümler", href: "/solutions" }}
      />
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ResourceCardGrid items={items} />
        </div>
      </section>
    </div>
  );
}
