"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

interface CardV2Props {
    title: string;
    href: string;
    index: number;
}

export const CardV2 = ({ title, href, index }: CardV2Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <Link
                href={href}
                className="group relative block h-full p-8 rounded-2xl border bg-[#0a0a0a] border-white/5 hover:border-[#3B82F6]/30 hover:bg-[#0f0f0f] transition-all duration-300"
            >
                <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#111] border border-white/10 group-hover:text-[#3B82F6] text-gray-300 transition-colors">
                        <Box className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-[#3B82F6] transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-500">
                    Profesyonel çözüm paketi.
                </p>
            </Link>
        </motion.div>
    );
};
