import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { solutionsMenu } from "@/data/solutionsMenu";
import Image from "next/image";
import architectureImg from "@/assets/product-architecture.jpg";
import architectureHero from "@/assets/solutions/architecture-hero.jpg";
import infrastructureHero from "@/assets/solutions/infrastructure-hero.jpg";
import bridgeImg from "@/assets/product-bridge.jpg";
import engineeringImg from "@/assets/product-engineering.jpg";
import precastImg from "@/assets/product-precast.jpg";
import bimplusHero from "@/assets/products/bimplus-hero.jpg";
import basicImage from "@/assets/products/allplan-basic/project-teamwork.jpg";
import conceptImage from "@/assets/products/allplan-concept/model-viewer.jpg";
import professionalImage from "@/assets/products/allplan-professional/advanced-visualization.jpg";
import ultimateImage from "@/assets/products/allplan-ultimate/parametric-modeling.jpg";
import civilImage from "@/assets/products/civil/workflow-infrastructure.jpg";
import precastImage from "@/assets/products/precast/automated-precast-design.jpg";
import Divider from "@/components/ui/Divider";

 

const Products = () => {
  return (
    <section id="products" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-technical-grid" />

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mt-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4 tracking-tight">
            Ürünlerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            { title: "ALLPLAN Basic", href: "/products/allplan-basic", image: basicImage, description: "Temel BIM yetenekleriyle güvenilir modelleme ve dokümantasyon. Küçük ve orta ölçekli projeler için ideal giriş seviyesi paket." },
            { title: "ALLPLAN Concept", href: "/products/allplan-concept", image: conceptImage, description: "Konsept tasarımda hızlı iterasyon ve esnek iş akışları. Erken aşama görselleştirme ve varyant çalışmaları için optimize edilmiştir." },
            { title: "ALLPLAN Professional", href: "/products/allplan-professional", image: professionalImage, description: "Gelişmiş üretim çıktıları ve kapsamlı dokümantasyon. Profesyonel ekipler için üretkenlik odaklı araç seti." },
            { title: "ALLPLAN Ultimate", href: "/products/allplan-ultimate", image: ultimateImage, description: "En kapsamlı modül ve entegrasyonlar, üst seviye işbirliği ve otomasyon. Büyük ve kompleks projeler için maksimum yetenek." },
            { title: "CIVIL", href: "/products/civil", image: civilImage, description: "Altyapı, yol ve köprü tasarımlarında parametrik modelleme ve analiz. Disiplinler arası koordinasyon için güçlü araçlar." },
            { title: "PRECAST", href: "/products/precast", image: precastImage, description: "Prekast eleman tasarımı ve üretim planlamasında uçtan uca otomasyon. Çizim, metraj ve iş planı süreçlerinde hız ve doğruluk." },
          ].map((product) => (
            <Card
              key={product.title}
              className="relative group hover:shadow-technical transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden bg-graphite-900"
            >
              <div className="pointer-events-none absolute top-0 left-0 h-px w-0 group-hover:w-full bg-accent/60 transition-all duration-500" />
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/40 to-transparent" />
              </div>
              <CardContent className="p-6 bg-graphite-900 border-t border-white/10">
                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  {product.description}
                </p>
                <Link href={product.href}>
                  <Button variant="ghost" className="w-full group/btn justify-between hover:bg-accent/5 hover:text-accent">
                    Ürünü İncele
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <Divider />

        <div className="text-center mt-16 mb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4 tracking-tight">
            Profesyonel BIM Çözümleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Her disiplin için özelleştirilmiş Allplan yazılımlarıyla projelerinizi bir üst seviyeye taşıyın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {solutionsMenu.map((section) => {
            const getImageForSection = (title: string) => {
              switch (title) {
                case "BİNA TASARIMI":
                  return architectureHero || architectureImg;
                case "ALTYAPI TASARIMI":
                  return infrastructureHero || bridgeImg;
                case "İNŞAAT PLANLAMASI":
                  return precastImg;
                case "EKLENTİLER":
                  return engineeringImg;
                case "DİĞER ÜRÜNLER":
                  return bimplusHero;
                default:
                  return engineeringImg;
              }
            };

            const imageSrc = getImageForSection(section.title);

            return (
              <Card
                key={section.title}
                className="relative group hover:shadow-technical transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden bg-graphite-900"
              >
                <div className="pointer-events-none absolute top-0 left-0 h-px w-0 group-hover:w-full bg-accent/60 transition-all duration-500" />
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={section.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/40 to-transparent" />
                </div>
                <CardContent className="p-6 bg-graphite-900 border-t border-white/10">
                <h3 className="font-display text-lg font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {section.title}
                </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-white/80 hover:text-accent transition-colors flex items-center gap-2 group/item"
                        >
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover/item:opacity-100 -ml-4 group-hover/item:ml-0 transition-all" />
                          <span className="group-hover/item:translate-x-1 transition-transform">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-accent/30 hover:bg-accent/5 hover:text-accent hover:border-accent">
            Tüm Ürünleri Karşılaştır
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
