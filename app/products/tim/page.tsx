"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/solutions/precast-hero.jpg";

export default function Page() {
  const features = [
    "Prekast üretim planlaması",
    "Kaynak ve kapasite yönetimi",
    "Detaylı iş programı oluşturma",
    "Üretim hattı optimizasyonu",
    "Gerçek zamanlı maliyet takibi",
    "Malzeme ve stok yönetimi",
    "Kalite kontrol entegrasyonu",
    "Nakliye ve montaj planlaması",
    "Performans raporları",
    "ERP sistem entegrasyonu",
  ];

  const packages = [
    { name: "Tim Standard", price: "Teklif alın", description: "Tek tesis için", features: ["Üretim planlaması", "Kaynak yönetimi", "Temel raporlama", "Email destek"] },
    { name: "Tim Enterprise", price: "Teklif alın", description: "Çoklu tesis için", features: ["Çoklu tesis yönetimi", "ERP entegrasyonu", "Gelişmiş analitik", "Premium destek"], highlighted: true },
  ];

  return (
    <ProductPageTemplate
      badge="İNŞAAT PLANLAMASI"
      title="TIM - Prekast İş Planlaması"
      description="Prekast üretim tesisleri için kapsamlı planlama ve yönetim çözümü. Üretim süreçlerinizi optimize edin, kaynaklarınızı verimli kullanın."
      heroImage={heroImage}
      features={features}
      packages={packages}
      ctaTitle="Tim'i Deneyin"
      ctaDescription="Prekast üretim planlaması için akıllı çözüm"
    />
  );
}
