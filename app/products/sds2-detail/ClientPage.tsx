"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/solutions/steel-hero.jpg";
export default function ClientPage() {
  const features = [
    "Tam çelik detaylandırma yetenekleri",
    "Otomatik bağlantı tasarımı algoritmaları",
    "CNC makine çıktıları (DSTV, NC)",
    "Profesyonel imalat çizimleri",
    "Detaylı parça ve kesim listeleri",
    "3D montaj planları ve diyagramları",
    "Kaynak sembolü ve detayları",
    "Malzeme optimizasyonu",
    "Uluslararası kod uyumluluğu",
    "BIM model entegrasyonu",
  ];
  const packages = [
    { name: "Detailing Standard", price: "Teklif alın", description: "Temel detaylandırma", features: ["Çelik modelleme", "Manuel bağlantılar", "İmalat çizimleri", "Parça listeleri"] },
    { name: "Detailing Pro", price: "Teklif alın", description: "Otomatik özellikler", features: ["Otomatik bağlantılar", "CNC çıktıları", "Malzeme optimizasyonu", "BIM entegrasyon"], highlighted: true },
  ];
  return (
    <ProductPageTemplate
      badge="İNŞAAT PLANLAMASI"
      title="SDS2 - Çelik Detaylandırma"
      description="Çelik yapı detaylandırma ve imalat çözümü. Tasarımdan CNC çıktısına kadar kesintisiz iş akışı ile çelik projelerinizi hızlandırın."
      heroImage={heroImage}
      features={features}
      packages={packages}
      ctaTitle="SDS2 Detailing'i Deneyin"
      ctaDescription="Çelik detaylandırmada verimlilik ve doğruluk"
    />
  );
}
