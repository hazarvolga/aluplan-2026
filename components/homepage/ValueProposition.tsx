"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Building2,
    Link2,
    Cloud,
    GraduationCap,
    Shield,
    MapPin
} from "lucide-react";
import { motion } from "framer-motion";

const values = [
    {
        icon: Building2,
        title: "Design to Build",
        description: "Tasarımdan üretime kesintisiz iş akışı. Tek model, tüm çıktılar.",
        accent: true
    },
    {
        icon: Link2,
        title: "Tek Platform, Tüm Disiplinler",
        description: "Mimari, yapısal, altyapı ve MEP tek yerde entegre.",
        accent: false
    },
    {
        icon: Cloud,
        title: "Bulut Tabanlı İşbirliği",
        description: "Bimplus ile her yerden eşzamanlı çalışma ve veri paylaşımı.",
        accent: false
    },
    {
        icon: GraduationCap,
        title: "Eğitim & Sertifika",
        description: "Kapsamlı eğitim programları ve ALLPLAN uzman sertifikası.",
        accent: false
    },
    {
        icon: Shield,
        title: "Veri Güvenliği",
        description: "ISO 27001 standartlarında veri koruma ve yedekleme.",
        accent: false
    },
    {
        icon: MapPin,
        title: "Yerel Destek",
        description: "Türkçe teknik destek, yerel eğitimler ve danışmanlık.",
        accent: false
    }
];

const ValueProposition = () => {
    return (
        <section className="py-20 bg-graphite-950 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-technical-grid pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-accent/30 text-accent font-mono">
                        Neden ALLPLAN?
                    </Badge>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Profesyonellerin Tercihi
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        AEC sektörünün ihtiyaçlarına özel tasarlanmış, kanıtlanmış çözümler
                    </p>
                </div>

                {/* Value Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className={`group h-full hover:shadow-xl transition-all duration-500 border ${value.accent ? 'border-accent/30 bg-accent/5' : 'border-white/10 bg-graphite-900'} hover:border-white/20 overflow-hidden`}>
                                    <div className="pointer-events-none absolute top-0 left-0 h-px w-0 group-hover:w-full bg-accent/60 transition-all duration-500" />
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className={`h-12 w-12 rounded-xl ${value.accent ? 'bg-accent/20' : 'bg-white/5'} border ${value.accent ? 'border-accent/30' : 'border-white/10'} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                                                <Icon className={`h-6 w-6 ${value.accent ? 'text-accent' : 'text-white/80'}`} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-display font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                                                    {value.title}
                                                </h3>
                                                <p className="text-sm text-white/60 leading-relaxed">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
