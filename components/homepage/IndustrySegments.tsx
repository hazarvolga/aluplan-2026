"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Import images
import architectureHero from "@/assets/solutions/architecture-hero.jpg";
import infrastructureHero from "@/assets/solutions/infrastructure-hero.jpg";
import precastHero from "@/assets/solutions/precast-hero.jpg";
import engineeringImg from "@/assets/product-engineering.jpg";
import mepImg from "@/assets/product-engineering.jpg";

const segments = [
    {
        title: "Mimari Tasarım",
        subtitle: "Architects",
        description: "3D modelleme, görselleştirme ve BIM dokümantasyonu",
        image: architectureHero,
        href: "/solutions/architecture",
        featured: true
    },
    {
        title: "Yapısal Mühendislik",
        subtitle: "Structural Engineers",
        description: "Betonarme, çelik detay ve donatı çizimleri",
        image: engineeringImg,
        href: "/solutions/structural",
        featured: true
    },
    {
        title: "Altyapı & Köprü",
        subtitle: "Civil Engineers",
        description: "Yol, demiryolu, köprü ve tünel tasarımı",
        image: infrastructureHero,
        href: "/solutions/infrastructure",
        featured: true
    },
    {
        title: "Prefabrik Üretim",
        subtitle: "Precast Manufacturers",
        description: "Prekast eleman tasarımı ve üretim planlaması",
        image: precastHero,
        href: "/products/precast",
        featured: false
    },
    {
        title: "Mekanik Tesisat",
        subtitle: "MEP Engineers",
        description: "HVAC, sıhhi tesisat ve yangın sistemleri",
        image: mepImg,
        href: "/solutions/mep",
        featured: false
    }
];

const IndustrySegments = () => {
    return (
        <section className="py-20 bg-graphite-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-technical-grid pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Sektörünüzü Seçin, <span className="text-accent">Çözümünüzü Bulun</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Her disiplin için özelleştirilmiş ALLPLAN yapılandırmaları
                    </p>
                </div>

                {/* Featured Segments - Large Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {segments.filter(s => s.featured).map((segment, index) => (
                        <motion.div
                            key={segment.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <Link href={segment.href}>
                                <Card className="group h-full hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-accent/30 overflow-hidden bg-graphite-950 cursor-pointer">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={segment.image}
                                            alt={segment.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/50 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <span className="text-xs font-mono text-accent/80 uppercase tracking-wider">
                                                {segment.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                            {segment.title}
                                        </h3>
                                        <p className="text-sm text-white/60 mb-4">
                                            {segment.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-accent text-sm font-medium">
                                            Keşfet
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Secondary Segments - Smaller Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {segments.filter(s => !s.featured).map((segment, index) => (
                        <motion.div
                            key={segment.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <Link href={segment.href}>
                                <Card className="group hover:shadow-xl transition-all duration-500 border border-white/10 hover:border-white/20 overflow-hidden bg-graphite-950 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                                            <Image
                                                src={segment.image}
                                                alt={segment.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-graphite-950" />
                                        </div>
                                        <CardContent className="p-4 flex-1">
                                            <span className="text-xs font-mono text-accent/60 uppercase tracking-wider">
                                                {segment.subtitle}
                                            </span>
                                            <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                                                {segment.title}
                                            </h3>
                                            <p className="text-sm text-white/50">
                                                {segment.description}
                                            </p>
                                        </CardContent>
                                        <div className="pr-4">
                                            <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySegments;
