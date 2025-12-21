"use client";

import React, { useState } from "react";
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Calendar, Clock, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { ContactModal } from "@/components/layout-v2/ContactModal";

interface Benefit {
    title: string;
    description: string;
}

interface Stat {
    value: string;
    label: string;
}

interface TrainingDetailTemplateProps {
    title: string;
    subtitle: string;
    heroCategory?: string;
    overview: string;
    benefits: Benefit[];
    audience: string[];
    stats?: Stat[];
    ctaText?: string;
    ctaSubject?: string; // Specific subject for the ContactModal
    ctaLink?: string; // External link for CTA
    children?: React.ReactNode;
}

export function TrainingDetailTemplate({
    title,
    subtitle,
    heroCategory = "EĞİTİM FORMATI",
    overview,
    benefits,
    audience,
    stats,
    ctaText = "Hemen Başvurun",
    ctaSubject,
    ctaLink,
    children
}: TrainingDetailTemplateProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCtaClick = () => {
        if (ctaLink) {
            window.open(ctaLink, "_blank", "noopener,noreferrer");
        } else {
            setIsModalOpen(true);
        }
    };

    return (
        <PageWrapper>
            <HeroInternal
                category={heroCategory}
                title={title}
                subtitle={subtitle}
            />

            {/* Overview Section */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050505] relative">
                <div className="max-w-[1000px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-8">Genel Bakış</h2>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {overview}
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    {stats && stats.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-white/10 pt-16">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl font-bold text-[#3B82F6] mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits & Audience Grid */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Benefits */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Zap className="h-6 w-6 text-[#3B82F6]" />
                            Kazanımlarınız
                        </h3>
                        <div className="grid gap-6">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-[#3B82F6]/30 transition-colors"
                                >
                                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-[#3B82F6]" />
                                        {benefit.title}
                                    </h4>
                                    <p className="text-gray-400 pl-7">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Audience & CTA */}
                    <div className="space-y-12">
                        <div className="bg-[#111] rounded-3xl p-8 border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Users className="h-6 w-6 text-purple-500" />
                                Kimler İçin Uygun?
                            </h3>
                            <ul className="space-y-4">
                                {audience.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 rounded-3xl p-8 border border-[#3B82F6]/30 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Hazır mısınız?</h3>
                            <p className="text-gray-300 mb-8">
                                Eğitim takvimini incelemek veya özel bir teklif almak için bizimle iletişime geçin.
                            </p>
                            <Button
                                size="lg"
                                onClick={handleCtaClick}
                                className="bg-[#3B82F6] hover:bg-[#2563eb] text-white rounded-full px-12 py-6 text-lg w-full md:w-auto"
                            >
                                {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {children}

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                defaultSubject={ctaSubject || `Bilgi Talebi: ${title}`}
                title={`${title} Hakkında İletişim`}
            />
        </PageWrapper>
    );
}
