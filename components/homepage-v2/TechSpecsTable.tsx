"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, Layers, Zap, Crown } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
    {
        icon: <Box className="w-6 h-6 text-blue-400" />,
        title: "BASIC",
        description: "Temel 2D/3D tasarım ve çizim araçları.",
        color: "bg-blue-500/10 border-blue-500/20 text-blue-400"
    },
    {
        icon: <Layers className="w-6 h-6 text-purple-400" />,
        title: "CONCEPT",
        description: "Konsept tasarım, modelleme ve görselleştirme.",
        color: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
        icon: <Zap className="w-6 h-6 text-amber-400" />,
        title: "PROFESSIONAL",
        description: "Tam kapsamlı BIM, metraj ve işbirliği.",
        color: "bg-amber-500/10 border-amber-500/20 text-amber-400"
    },
    {
        icon: <Crown className="w-6 h-6 text-emerald-400" />,
        title: "ULTIMATE",
        description: "Tüm disiplinler ve ileri seviye mühendislik.",
        color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
    }
];

export default function TechSpecsTable() {
    return (
        <section className="py-24 bg-background relative overflow-hidden border-t border-border/10">
            {/* Background Gradients */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 px-3 py-1">
                            DETAYLI ANALİZ
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                            TEKNİK <span className="text-muted-foreground">ÖZELLİKLER</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Hangi ALLPLAN paketi sizin için uygun? Paketler arasındaki farkları ve teknik özellikleri detaylı tablomuzda karşılaştırın.
                        </p>
                    </div>

                    <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 shrink-0">
                        <Link href="/paket-karsilastirma">
                            Karşılaştırma Tablosuna Git <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/paket-karsilastirma">
                                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/40 transition-colors p-6 group cursor-pointer hover:shadow-lg hover:shadow-accent/5">
                                    <div className={`w-12 h-12 rounded-lg ${pkg.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {pkg.icon}
                                    </div>

                                    <h3 className="font-bold text-xl text-foreground mb-2">{pkg.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {pkg.description}
                                    </p>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
