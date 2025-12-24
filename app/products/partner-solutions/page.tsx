"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import heroImage from "@/assets/solutions/collaboration-hero.jpg";

const features = [
  "Sertifikalı ortak yazılımlar",
  "Allplan entegrasyon çözümleri",
  "Sektöre özel eklentiler",
  "Yerel yazılım ortakları",
  "Teknik destek ve eğitim",
  "Entegrasyon danışmanlığı",
  "API ve SDK desteği",
  "Özel geliştirme hizmetleri",
  "Pilot proje desteği",
  "Ortak pazarlama programları",
];

const packages = [
  { name: "Yapısal Analiz", price: "Çeşitli çözümler", description: "Statik ve dinamik analiz", features: ["SCIA Engineer", "RFEM / RSTAB", "SAP2000", "ETABS"] },
  { name: "Görselleştirme", price: "Çeşitli çözümler", description: "Render ve animasyon", features: ["Lumion", "Twinmotion", "Enscape", "V-Ray"], highlighted: true },
  { name: "Enerji & MEP", price: "Çeşitli çözümler", description: "Simülasyon ve hesaplama", features: ["AX3000", "Solar Computer", "PLANCAL nova", "liNear"] },
];

export default function Page() {
  return (
    <ProductPageTemplate
      badge="ORTAK ÇÖZÜMLER"
      title="Allplan Ortak Çözümleri"
      description="Allplan'ın sertifikalı yazılım ortaklarının sunduğu tamamlayıcı çözümler. Yapısal analiz, görselleştirme, enerji simülasyonu ve daha fazlası için entegre iş akışları."
      heroImage={heroImage}
      features={features}
      packages={packages}
      ctaTitle="Ücretsiz Dene"
      ctaHref="https://www.allplan.com/trial-or-subscription/"
      ctaExternal={true}
      showDemoButton={false}
      additionalButtons={[
        { text: "Teklif Talep Formu", href: "https://forms.office.com/r/hXhnKAG912", external: true },
        { text: "Abonelik SSS", href: "/solutions-v2/faq", external: false },
      ]}
      ctaDescription="İş akışınızı güçlendiren entegre çözümler"
    />
  );
}
