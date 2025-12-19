/* eslint-disable */
import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/product-architecture.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Allplan Architecture - Aluplan',
  description: 'Mimari projeler için kapsamlı BIM çözümü',
}

export default function Page() {
  const features = [
    "3D modelleme ve detay dokümantasyon",
    "Esnek 2D/2.5D/3D iş akışları",
    "Gelişmiş görselleştirme ve render",
    "Güvenilir metraj ve erken maliyet tahmini",
    "OPEN BIM ve IFC4 veri alışverişi",
    "Bulut tabanlı ekip çalışması (Allplan Cloud)",
  ];

  return (
    <ProductPageTemplate
      badge="BİNA TASARIMI"
      title="Allplan Architecture"
      description="Mimari projeler için kapsamlı BIM çözümü. Tasarımdan dokümantasyona kadar tüm süreçlerde yüksek üretkenlik ve kalite."
      heroImage={heroImage}
      features={features}
      ctaTitle="Allplan Architecture'ı deneyin"
      ctaDescription="14 gün ücretsiz deneme ile keşfedin veya satış ekibiyle iletişime geçin"
    />
  );
}
