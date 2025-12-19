/* eslint-disable */
import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/allplan-hero.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Allplan - Aluplan',
  description: 'ALLPLAN ana ürün: AEC için entegre BIM platformu',
}

export default function Page() {
  const features = [
    "Kapsamlı BIM platformu - Mimarlık, mühendislik ve MEP",
    "Parametrik tasarım ve akıllı objeler",
    "IFC 4 standardı ile tam uyumluluk",
    "Gerçek zamanlı ekip işbirliği",
    "Bimplus bulut entegrasyonu",
    "Profesyonel render ve görselleştirme",
    "Otomatik metraj ve raporlama",
    "50+ dosya formatı desteği",
    "Python API ile özelleştirme",
    "7/24 teknik destek",
  ];

  const packages = [
    {
      name: "ALLPLAN Basic",
      price: "Teklif alın",
      description: "Küçük projeler için temel BIM araçları",
      features: ["2D/3D modelleme", "Temel çizim araçları", "Standart kütüphane", "DWG/DXF desteği", "Email destek"],
    },
    {
      name: "ALLPLAN Professional",
      price: "Teklif alın",
      description: "Profesyonel projeler için kapsamlı çözüm",
      features: ["Tüm Basic özellikleri", "Tam BIM modelleme", "IFC içe/dışa aktarma", "Gelişmiş dokümantasyon", "Render araçları", "Bulut entegrasyonu", "Öncelikli destek"],
      highlighted: true,
    },
    {
      name: "ALLPLAN Ultimate",
      price: "Teklif alın",
      description: "Kurumsal projeler için tam paket",
      features: ["Tüm Professional özellikleri", "Gelişmiş analiz araçları", "Özel kütüphaneler", "Python API erişimi", "7/24 premium destek", "Eğitim ve danışmanlık", "Özel entegrasyonlar"],
    },
  ];

  return (
    <ProductPageTemplate
      badge="ANA ÜRÜN"
      title="ALLPLAN"
      description="AEC endüstrisi için lider BIM platformu. Mimarlık, yapı mühendisliği ve MEP projeleriniz için tek entegre çözüm. Tasarımdan inşaata kadar tüm süreçlerinizi optimize edin."
      heroImage={heroImage}
      features={features}
      packages={packages}
      ctaTitle="ALLPLAN'ı Ücretsiz Deneyin"
      ctaDescription="30 gün ücretsiz deneme ile ALLPLAN'ın gücünü keşfedin"
    />
  );
}
