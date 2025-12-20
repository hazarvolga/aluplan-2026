"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Placeholder news items - these would come from CMS/blog
const newsItems = [
    {
        title: "ALLPLAN 2026 Yenilikleri",
        excerpt: "Daha iyi bir gelecek inşa etmek için tasarlanan ALLPLAN 2026 özellikleri.",
        date: "20 Aralık 2024",
        category: "Ürün",
        image: null,
        href: "/products/allplan-2026-yenilikler"
    },
    {
        title: "BIM Türkiye Konferansı 2025",
        excerpt: "Sektörün öncüleriyle bir araya gelin. ALUPLAN standını ziyaret edin.",
        date: "15 Ocak 2025",
        category: "Etkinlik",
        image: null,
        href: "#"
    },
    {
        title: "Prefabrik Otomasyonu Webinarı",
        excerpt: "ALLPLAN Precast ile üretim verimliliğini artırmanın yolları.",
        date: "10 Ocak 2025",
        category: "Webinar",
        image: null,
        href: "#"
    }
];

const LatestNews = () => {
    return (
        <section className="py-20 bg-graphite-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-technical-grid pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <Badge variant="outline" className="mb-4 border-accent/30 text-accent font-mono">
                            Blog & Haberler
                        </Badge>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Güncel Haberler
                        </h2>
                    </div>
                    <Button variant="ghost" className="text-accent hover:bg-accent/5 mt-4 md:mt-0" asChild>
                        <Link href="#">
                            Tüm Haberler
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={item.href}>
                                <Card className="group h-full hover:shadow-xl transition-all duration-500 border border-white/10 hover:border-accent/30 overflow-hidden bg-graphite-950 cursor-pointer">
                                    {/* Image Placeholder */}
                                    <div className="relative h-48 bg-gradient-to-br from-accent/10 to-graphite-900 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-white/10 text-6xl font-bold">
                                                {item.category.charAt(0)}
                                            </span>
                                        </div>
                                        <Badge className="absolute top-4 left-4 bg-accent/90 text-graphite-950">
                                            {item.category}
                                        </Badge>
                                    </div>

                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                                            <Calendar className="h-4 w-4" />
                                            {item.date}
                                        </div>
                                        <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-white/50 line-clamp-2">
                                            {item.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-accent text-sm font-medium mt-4">
                                            Devamını Oku
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
