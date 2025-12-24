"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
            ease: "easeOut"
        }
    }
};

const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
        opacity: 1, y: 0, filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

const stats = [
    { value: "30", suffix: "+", label: "Yıl", sublabel: "Tecrübe" },
    { value: "500", suffix: "+", label: "Aktif", sublabel: "Müşteri" },
    { value: "24/7", suffix: "", label: "Teknik", sublabel: "Destek" },
    { value: "%99", suffix: "", label: "Müşteri", sublabel: "Memnuniyeti" }
];

const HeroAlternative = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-graphite-950">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                    poster="/images/hero-poster.jpg"
                >
                    <source src="/videos/hero-bim.webm" type="video/webm" />
                    <source src="/videos/hero-bim.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-graphite-950 via-graphite-950/90 to-graphite-950/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.02] bg-technical-grid pointer-events-none" />

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl"
                >
                    {/* Badge */}
                    <motion.div variants={fadeUpVariants} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            ALLPLAN TÜRKİYE RESMİ DİSTRİBÜTÖRÜ
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        variants={fadeUpVariants}
                        className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6"
                    >
                        30 Yıldır Türkiye&apos;nin{" "}
                        <span className="text-accent">BIM Çözüm Ortağı</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUpVariants}
                        className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mb-8"
                    >
                        Mimarlık, mühendislik ve inşaat projelerinizi tasarımdan üretime tek platformda yönetin.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        <Button
                            size="lg"
                            className="group bg-accent hover:bg-accent/90 text-graphite-950 shadow-lg shadow-accent/30 hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold"
                            asChild
                        >
                            <a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">
                                Ücretsiz Demo Al
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 px-8 py-6 text-base font-semibold"
                            asChild
                        >
                            <a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">
                                Teklif Talep Formu
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="ghost"
                            className="text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 px-8 py-6 text-base font-semibold"
                            asChild
                        >
                            <Link href="/products/allplan-2026-yenilikler">
                                <Play className="mr-2 h-5 w-5" />
                                ALLPLAN 2026 İzle
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={fadeUpVariants}
                        className="flex flex-wrap gap-4 md:gap-6"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors"
                            >
                                <div className="flex flex-col">
                                    <span className="text-3xl md:text-4xl font-bold text-white">
                                        {stat.value}<span className="text-accent">{stat.suffix}</span>
                                    </span>
                                    <span className="text-xs text-white/50 uppercase tracking-wider">
                                        {stat.sublabel}
                                    </span>
                                </div>
                                <div className="h-10 w-px bg-white/20" />
                                <span className="text-sm font-medium text-white/70">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-white/40">
                    <span className="text-xs uppercase tracking-wider">Aşağı Kaydır</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                    >
                        <div className="w-1 h-2 rounded-full bg-white/40" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroAlternative;
