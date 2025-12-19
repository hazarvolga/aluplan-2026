"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/solutions/steel-hero.jpg";
export default function ClientPage() {
  const features = [
    "Akıllı yük planlaması",
    "Nakliye optimizasyonu algoritmaları",
    "Montaj sırası belirleme",
    "Vinç ve kaldırma planlaması",
    "Güvenlik kontrolü ve analizi",
    "Lojistik koordinasyonu",
    "Araç kapasite optimizasyonu",
    "3D istifleme görselleştirme",
    "Ağırlık merkezi hesaplama",
    "Saha montaj planları",
  ];
  const packages = [
    { name: "Load Planning", price: "Teklif alın", description: "Yük planlaması odaklı", features: ["Araç yükleme planı", "Ağırlık optimizasyonu", "3D görselleştirme", "Raporlama"] },
    { name: "Load & Erection", price: "Teklif alın", description: "Tam montaj çözümü", features: ["Yük planlaması", "Montaj sıralaması", "Vinç planlaması", "Güvenlik analizi"], highlighted: true },
  ];
  return (
    <ProductPageTemplate
      badge="İNŞAAT PLANLAMASI"
      title="SDS2 - Çelik Yük Planlaması"
      description="Çelik yapı elemanlarının nakliye ve montaj planlaması. Lojistik süreçlerinizi optimize edin, montaj güvenliğini artırın."
      heroImage={heroImage}
      features={features}
      packages={packages}
      ctaTitle="Yük Planlamasını Deneyin"
      ctaDescription="Çelik lojistiğinde verimlilik ve güvenlik"
    />
  );
}
