"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const FinalCTA = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-purple-900/20 to-graphite-950" />
            <div className="absolute inset-0 bg-graphite-950/80" />
            <div className="absolute inset-0 opacity-[0.02] bg-technical-grid pointer-events-none" />

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Title */}
                    <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Projelerinizi Bir Üst{" "}
                        <span className="text-accent">Seviyeye Taşıyın</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                        30 yıllık tecrübemizle yanınızdayız. ALLPLAN ile daha verimli, daha doğru, daha hızlı.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button
                            size="lg"
                            className="bg-accent hover:bg-accent/90 text-graphite-950 shadow-lg shadow-accent/30 hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
                            asChild
                        >
                            <a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">
                                Ücretsiz Demo Al
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 px-8 py-6 text-lg font-semibold"
                            asChild
                        >
                            <Link href="/contact">
                                Teklif Al
                            </Link>
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50">
                        <a
                            href="tel:+902124440000"
                            className="flex items-center gap-2 hover:text-accent transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            <span>+90 212 444 00 00</span>
                        </a>
                        <span className="hidden sm:block text-white/20">|</span>
                        <a
                            href="mailto:info@aluplan.com.tr"
                            className="flex items-center gap-2 hover:text-accent transition-colors"
                        >
                            <Mail className="h-4 w-4" />
                            <span>info@aluplan.com.tr</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
