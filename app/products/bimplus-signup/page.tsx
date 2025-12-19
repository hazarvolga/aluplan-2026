"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/products/bimplus-hero.jpg";

const features = [
  "Ücretsiz başlangıç paketi",
  "Hızlı ve kolay kayıt süreci",
  "Anında bulut erişimi",
  "Web tabanlı model görüntüleme",
  "Temel işbirliği özellikleri",
  "5 GB ücretsiz depolama",
  "Mobil uygulama erişimi",
  "Yükseltme seçenekleri",
  "Topluluk destek forumu",
  "Online eğitim kaynakları",
];

const packages = [
  { name: "Free", price: "Ücretsiz", description: "Başlangıç için ideal", features: ["5 GB depolama", "3 kullanıcı", "Model görüntüleme", "Temel paylaşım"] },
  { name: "Professional", price: "Teklif alın", description: "Profesyonel ekipler", features: ["100 GB depolama", "Sınırsız kullanıcı", "Çakışma kontrolü", "BCF görev yönetimi"], highlighted: true },
  { name: "Enterprise", price: "Özel fiyat", description: "Kurumsal ihtiyaçlar", features: ["Özel depolama", "SSO entegrasyonu", "API erişimi", "Özel destek"] },
];

export default function Page() {
  return (
    <ProductPageTemplate
      badge="İŞBİRLİĞİ"
      title="Bimplus Hesabı Oluşturun"
      description="Bimplus hesabınızı oluşturun ve bulut tabanlı BIM işbirliği platformuna hemen erişin. Ücretsiz başlayın, ihtiyacınıza göre yükseltin."
      heroImage={heroImage}
      features={features}
      packages={packages}
      ctaTitle="Hemen Kaydolun"
      ctaDescription="Ücretsiz Bimplus hesabınızı şimdi oluşturun"
    />
  );
}
