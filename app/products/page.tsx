"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Images
import imgAec from "@/assets/products/allplan-hero.jpg";
import imgUltimate from "@/assets/products/allplan-ultimate/hero.jpg";
import imgCivil from "@/assets/products/civil/hero.jpg";
import imgProfessional from "@/assets/products/allplan-professional/hero.jpg";
import imgConcept from "@/assets/products/allplan-concept/hero.jpg";
import imgBasic from "@/assets/products/allplan-basic/hero.jpg";
import imgPrecast from "@/assets/solutions/precast-hero.jpg";
import ProductInnovations from "@/components/ProductInnovations";

export default function ProductsPage() {
    const products = [
        {
            title: "ALLPLAN AEC",
            description: "Mimarlar, mühendisler ve yükleniciler için tasarım ve inşa sürecinin tamamını kapsayan nihai BIM çözümü.",
            href: "/products/allplan-aec",
            image: imgAec,
            badge: "AMİRAL GEMİSİ",
        },
        {
            title: "ALLPLAN Ultimate",
            description: "Tüm disiplinler için en kapsamlı araç seti. Modelleme, analiz ve detaylandırma için sınırsız yetenekler.",
            href: "/products/allplan-ultimate",
            image: imgUltimate,
            badge: "EN KAPSAMLI",
        },
        {
            title: "ALLPLAN Civil",
            description: "İleri düzey altyapı tasarımı ve inşaat süreçleri için özel çözüm. Köprüler ve tüneller için güçlü araçlar.",
            href: "/products/civil",
            image: imgCivil,
            badge: "ALTYAPI",
        },
        {
            title: "ALLPLAN Professional",
            description: "Profesyonel modelleme ve dokümantasyon için güçlü araçlar. Karmaşık projeleri kolayca yönetin.",
            href: "/products/allplan-professional",
            image: imgProfessional,
            badge: "PROFESYONEL",
        },
        {
            title: "ALLPLAN Concept",
            description: "Hızlı konsept tasarımı ve kütle çalışmaları için ideal. Tasarım fikirlerinizi hızla görselleştirin.",
            href: "/products/allplan-concept",
            image: imgConcept,
            badge: "KONSEPT",
        },
        {
            title: "ALLPLAN Precast",
            description: "Prefabrik elemanların tasarımı, detaylandırılması ve üretimi için dünya lideri çözüm.",
            href: "/products/precast-detail",
            image: imgPrecast,
            badge: "PRECAST",
        },
        {
            title: "ALLPLAN Basic",
            description: "Güçlü 2B çizim ve temel 3B modelleme yetenekleri ile projelerinize sağlam bir başlangıç yapın.",
            href: "/products/allplan-basic",
            image: imgBasic,
            badge: "TEMEL",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-background border-b border-border/40">
                <div className="absolute inset-0 bg-technical-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background/50 pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 text-accent mb-6">
                            <Package className="w-8 h-8" />
                            <span className="font-mono text-sm tracking-widest uppercase">/ ÜRÜNLER</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
                            ALLPLAN Ürün Ailesi
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            Projenizin ölçeği ne olursa olsun, ihtiyaçlarınıza uygun mükemmel ALLPLAN çözümünü keşfedin. Tasarımdan inşaata kesintisiz iş akışı.
                        </p>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <Link key={index} href={product.href} className="group h-full">
                                <Card className="h-full overflow-hidden border-border/50 bg-card hover:border-accent/50 hover:shadow-2xl transition-all duration-300 relative group-hover:-translate-y-1">

                                    {/* Image Container */}
                                    <div className="relative aspect-video overflow-hidden bg-muted">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-100 group-hover:brightness-110"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="inline-flex items-center gap-2 text-white font-bold bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                İncele <ArrowRight className="w-4 h-4 ml-1" />
                                            </span>
                                        </div>

                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-foreground border border-border shadow-sm">
                                            {product.badge}
                                        </div>
                                    </div>

                                    <CardContent className="p-6 md:p-8">
                                        <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
                                            {product.description}
                                        </p>

                                        <div className="flex items-center text-accent text-sm font-semibold group/link">
                                            Detayları Görüntüle
                                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovations Section */}
            <ProductInnovations />
        </div>
    );
}
