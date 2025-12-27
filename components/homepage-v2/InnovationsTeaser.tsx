"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Layers } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Homepage Teaser for ALLPLAN 2026 Innovations
const features = [
    {
        icon: <Sparkles className="w-6 h-6 text-purple-400" />,
        title: "AI Görselleştirme",
        description: "Yapay zeka destekli render araçları ile tasarımlarınızı saniyeler içinde hayata geçirin.",
        badge: "ALLPLAN CONCEPT",
        color: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
        icon: <Zap className="w-6 h-6 text-amber-400" />,
        title: "Donatıdan Şantiyeye",
        description: "Tamamen dijital, çizimsiz şantiye iş akışları ile hatasız üretim ve montaj.",
        badge: "ALLPLAN PROFESSIONAL",
        color: "bg-amber-500/10 border-amber-500/20 text-amber-400"
    },
    {
        icon: <Layers className="w-6 h-6 text-emerald-400" />,
        title: "Birleşik Arazi Modeli",
        description: "Büyük ölçekli altyapı projeleri için yeni nesil hassas arazi modelleme motoru.",
        badge: "ALLPLAN ULTIMATE",
        color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
    }
];

export default function InnovationsTeaser() {
    return (
        <section className="py-24 bg-background relative overflow-hidden border-t border-border/10">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 px-3 py-1">
                            YENİ SÜRÜM
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                            ALLPLAN 2026 <span className="text-muted-foreground">Yenilikleri</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Her disiplin için geliştirilen devrim niteliğindeki özellikleri keşfedin. Yapay zekadan dijital şantiye süreçlerine kadar en yeni teknolojiler.
                        </p>
                    </div>

                    <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 shrink-0">
                        <Link href="/products">
                            Tüm Yenilikleri İncele <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/40 transition-colors p-6 group cursor-default">
                                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {feature.icon}
                                </div>

                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-bold text-xl text-foreground">{feature.title}</h3>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${feature.color} bg-background`}>
                                        {feature.badge}
                                    </span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
