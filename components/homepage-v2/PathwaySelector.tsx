"use client"
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface Path {
    id: string;
    role: string;
    title: string;
    color: string;
    description: string;
    features: string[];
    href: string;
}

const paths: Path[] = [
    {
        id: "architect",
        role: "MİMAR",
        title: "Özgür Tasarım",
        color: "#3B82F6", // Blue
        description: "Sınırsız modelleme yetenekleri ve entegre görselleştirme ile tasarım vizyonunuzu kısıtlamadan gerçeğe dönüştürün.",
        features: ["Parametrik Modelleme", "Entegre Rendering", "AI Görselleştirme", "Konsept Tasarım"],
        href: "/products/architecture"
    },
    {
        id: "engineer",
        role: "MÜHENDİS",
        title: "Hassas Analiz",
        color: "#10B981", // Emerald
        description: "Tek model üzerinden yapısal analiz, donatı detaylandırma ve metraj. Hatasız projeler, optimize edilmiş maliyetler.",
        features: ["Otomatik Donatı", "FEM Analizi", "Çakışma Kontrolü", "Maliyet Hesabı"],
        href: "/products/allplan-aec"
    },
    {
        id: "fabricator",
        role: "ÜRETİCİ",
        title: "Akıllı Üretim",
        color: "#F59E0B", // Amber
        description: "Modelden doğrudan fabrikaya veri aktarımı. Prekast ve çelik üretiminde maksimum verimlilik ve sıfır hata.",
        features: ["CAM Veri Çıktısı", "Lojistik Planlama", "Stok Yönetimi", "Montaj Planları"],
        href: "/products/precast"
    },
];

const PathwaySelector = () => {
    const [activePath, setActivePath] = useState<Path>(paths[0]);

    return (
        <section className="bg-[#050505] py-24 px-6 md:px-12 lg:px-24 border-y border-white/5">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        ROLÜNÜZÜ SEÇİN
                    </h2>
                    <p className="text-gray-400">
                        Sizin için özelleştirilmiş iş akışlarını keşfedin.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {paths.map((path) => (
                        <button
                            key={path.id}
                            onClick={() => setActivePath(path)}
                            className={`px-8 py-4 rounded-full text-sm font-bold tracking-widest transition-all duration-300 border ${activePath.id === path.id
                                    ? `bg-white text-black border-transparent scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]`
                                    : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-600 hover:text-white"
                                }`}
                        >
                            {path.role}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="relative h-[400px] md:h-[300px] overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10 p-8 md:p-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePath.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center"
                        >
                            {/* Text Side */}
                            <div>
                                <h3
                                    className="text-4xl md:text-5xl font-bold mb-6"
                                    style={{ color: activePath.color }}
                                >
                                    {activePath.title}
                                </h3>
                                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                    {activePath.description}
                                </p>
                                <Link href={activePath.href} className="group flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors">
                                    Bu Akışı İncele
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            {/* Features Side */}
                            <div className="grid grid-cols-2 gap-4">
                                {activePath.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="flex items-center gap-3 bg-[#111] p-4 rounded-xl border border-white/5"
                                    >
                                        <CheckCircle2 className="h-5 w-5" style={{ color: activePath.color }} />
                                        <span className="text-sm font-medium text-gray-200">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Background Glow */}
                    <motion.div
                        key={activePath.id + "-bg"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-[50%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none"
                        style={{ backgroundColor: activePath.color }}
                    />
                </div>
            </div>
        </section>
    );
};

export default PathwaySelector;
