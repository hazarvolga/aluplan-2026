"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const packages = [
    {
        name: "Basic",
        subtitle: "Giriş Seviyesi",
        description: "Temel BIM yetenekleriyle güvenilir modelleme",
        features: ["2D Çizim", "3D Modelleme", "Temel Dokümantasyon", "IFC Desteği"],
        href: "/products/allplan-basic",
        highlighted: false
    },
    {
        name: "Concept",
        subtitle: "Konsept Tasarım",
        description: "Erken aşama görselleştirme ve hızlı iterasyon",
        features: ["Basic özellikleri", "Konsept Tasarım", "Hızlı Varyantlar", "Render Araçları"],
        href: "/products/allplan-concept",
        highlighted: false
    },
    {
        name: "Professional",
        subtitle: "En Popüler",
        description: "Profesyonel ekipler için kapsamlı çözüm",
        features: ["Concept özellikleri", "Tam BIM Desteği", "Üretim Çıktıları", "Bulut İşbirliği", "Teknik Destek"],
        href: "/products/allplan-professional",
        highlighted: true
    },
    {
        name: "Ultimate",
        subtitle: "En Kapsamlı",
        description: "Büyük projeler için maksimum yetenek",
        features: ["Professional özellikleri", "SCIA Engineer", "Frilo Entegrasyonu", "Python API", "Öncelikli Destek"],
        href: "/products/allplan-ultimate",
        highlighted: false
    }
];

const specialPackages = [
    { name: "CIVIL", description: "Altyapı uzmanları için", href: "/products/civil" },
    { name: "PRECAST", description: "Prekast üreticiler için", href: "/products/precast" }
];

const ProductShowcase = () => {
    return (
        <section className="py-20 bg-graphite-950 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-technical-grid pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-accent/30 text-accent font-mono">
                        Paket Seçenekleri
                    </Badge>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        İhtiyacınıza Uygun <span className="text-accent">Paketi Seçin</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Her ölçekte proje için esnek lisanslama seçenekleri
                    </p>
                </div>

                {/* Package Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {pkg.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                                    <Badge className="bg-accent text-graphite-950 flex items-center gap-1">
                                        <Star className="h-3 w-3" />
                                        ÖNERİLEN
                                    </Badge>
                                </div>
                            )}
                            <Card className={`h-full flex flex-col transition-all duration-500 overflow-hidden ${pkg.highlighted
                                    ? 'border-2 border-accent bg-accent/5 shadow-xl shadow-accent/10'
                                    : 'border border-white/10 bg-graphite-900 hover:border-white/20'
                                }`}>
                                <CardContent className="p-6 flex flex-col flex-1">
                                    <div className="mb-6">
                                        <span className="text-xs font-mono text-accent/60 uppercase tracking-wider">
                                            {pkg.subtitle}
                                        </span>
                                        <h3 className="font-display text-2xl font-bold text-white mt-1">
                                            ALLPLAN {pkg.name}
                                        </h3>
                                        <p className="text-sm text-white/50 mt-2">
                                            {pkg.description}
                                        </p>
                                    </div>

                                    <ul className="space-y-3 flex-1 mb-6">
                                        {pkg.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                                                <Check className="h-4 w-4 text-accent flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${pkg.highlighted
                                                ? 'bg-accent hover:bg-accent/90 text-graphite-950'
                                                : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                                            }`}
                                        asChild
                                    >
                                        <Link href={pkg.href}>
                                            İncele
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Special Packages */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <span className="text-white/50 text-sm">Özel Sektör Paketleri:</span>
                    {specialPackages.map((pkg) => (
                        <Link key={pkg.name} href={pkg.href}>
                            <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
                                + {pkg.name}
                                <span className="ml-2 text-white/50 text-xs hidden sm:inline">({pkg.description})</span>
                            </Button>
                        </Link>
                    ))}
                </div>

                {/* Compare CTA */}
                <div className="text-center mt-12">
                    <Button variant="ghost" className="text-white/60 hover:text-accent">
                        Tüm Özellikleri Karşılaştır
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
