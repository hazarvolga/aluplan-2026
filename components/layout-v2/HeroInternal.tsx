"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface HeroInternalProps {
    title: string;
    subtitle: string;
    category: string;
}

export const HeroInternal = ({ title, subtitle, category }: HeroInternalProps) => {
    return (
        <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 border-b border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[#3B82F6] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8 group">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Ana Sayfaya Dön
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-[#3B82F6] text-sm font-bold uppercase tracking-widest mb-4 block">
                        {category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
