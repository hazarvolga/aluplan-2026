"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    GraduationCap,
    HeadphonesIcon,
    Award,
    Briefcase,
    ShoppingCart,
    Users,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        icon: GraduationCap,
        title: "Eğitim",
        description: "Online ve yüz yüze profesyonel ALLPLAN eğitimleri",
        status: "active",
        href: "/contact",
        cta: "Eğitim Al"
    },
    {
        icon: HeadphonesIcon,
        title: "Teknik Destek",
        description: "Uzman ekibimizle 7/24 teknik destek hizmeti",
        status: "coming",
        href: "#",
        cta: "Yakında"
    },
    {
        icon: Award,
        title: "Sertifika Programı",
        description: "ALLPLAN Uzman sertifikası ve kariyer gelişimi",
        status: "coming",
        href: "#",
        cta: "Yakında"
    },
    {
        icon: Briefcase,
        title: "Danışmanlık",
        description: "Proje bazlı BIM danışmanlık ve implementasyon",
        status: "active",
        href: "/contact",
        cta: "İletişim"
    },
    {
        icon: ShoppingCart,
        title: "E-Mağaza",
        description: "Online lisans satışı, yenileme ve upgrade",
        status: "coming",
        href: "#",
        cta: "Yakında"
    },
    {
        icon: Users,
        title: "Partner Programı",
        description: "Çözüm ortağı ve reseller ağımıza katılın",
        status: "active",
        href: "/contact",
        cta: "Başvur"
    }
];

const ServicesSection = () => {
    return (
        <section className="py-20 bg-graphite-950 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] bg-technical-grid pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 border-accent/30 text-accent font-mono">
                        Hizmetler
                    </Badge>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Yanınızda <span className="text-accent">Her Adımda</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Yazılım satışının ötesinde, kapsamlı destek ve gelişim hizmetleri
                    </p>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isActive = service.status === "active";

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className={`group h-full transition-all duration-500 border overflow-hidden ${isActive
                                        ? 'border-white/10 bg-graphite-900 hover:border-accent/30 cursor-pointer'
                                        : 'border-white/5 bg-graphite-900/50'
                                    }`}>
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`h-12 w-12 rounded-xl ${isActive ? 'bg-accent/10' : 'bg-white/5'} border ${isActive ? 'border-accent/20' : 'border-white/10'} flex items-center justify-center`}>
                                                <Icon className={`h-6 w-6 ${isActive ? 'text-accent' : 'text-white/40'}`} />
                                            </div>
                                            {!isActive && (
                                                <Badge variant="secondary" className="bg-white/5 text-white/40 border-white/10 text-xs">
                                                    Yakında
                                                </Badge>
                                            )}
                                        </div>

                                        <h3 className={`font-display font-semibold mb-2 ${isActive ? 'text-white group-hover:text-accent' : 'text-white/50'} transition-colors`}>
                                            {service.title}
                                        </h3>
                                        <p className={`text-sm flex-1 mb-4 ${isActive ? 'text-white/60' : 'text-white/30'}`}>
                                            {service.description}
                                        </p>

                                        {isActive ? (
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-between text-accent hover:bg-accent/5"
                                                asChild
                                            >
                                                <Link href={service.href}>
                                                    {service.cta}
                                                    <ArrowRight className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-center text-white/30 cursor-not-allowed"
                                                disabled
                                            >
                                                {service.cta}
                                            </Button>
                                        )}
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

export default ServicesSection;
