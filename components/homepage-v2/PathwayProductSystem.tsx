"use client"
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Box, Layers, Building2, HardHat, Factory } from "lucide-react";

// --- Types ---
interface Role {
    id: string;
    label: string;
    title: string;
    description: string;
    color: string;
    features: string[];
    href: string;
}

interface Product {
    id: string;
    title: string;
    description: string;
    href: string;
    relatedRoles: string[]; // Role IDs that should highlight this product
}

// --- Data ---
const roles: Role[] = [
    {
        id: "architect",
        label: "MİMAR",
        title: "Özgür Tasarım",
        description: "Sınırsız modelleme yetenekleri ve entegre görselleştirme ile tasarım vizyonunuzu kısıtlamadan gerçeğe dönüştürün.",
        color: "#3B82F6", // Blue
        features: ["Parametrik Modelleme", "Entegre Rendering", "AI Görselleştirme", "Konsept Tasarım"],
        href: "/products/architecture"
    },
    {
        id: "engineer",
        label: "MÜHENDİS",
        title: "Hassas Analiz",
        description: "Tek model üzerinden yapısal analiz, donatı detaylandırma ve metraj. Hatasız projeler, optimize edilmiş maliyetler.",
        color: "#10B981", // Emerald
        features: ["Otomatik Donatı", "FEM Analizi", "Çakışma Kontrolü", "Maliyet Hesabı"],
        href: "/products/allplan-aec"
    },
    {
        id: "fabricator",
        label: "ÜRETİCİ",
        title: "Akıllı Üretim",
        description: "Modelden doğrudan fabrikaya veri aktarımı. Prekast ve çelik üretiminde maksimum verimlilik ve sıfır hata.",
        color: "#F59E0B", // Amber
        features: ["CAM Veri Çıktısı", "Lojistik Planlama", "Stok Yönetimi", "Montaj Planları"],
        href: "/products/precast"
    }
];

const products: Product[] = [
    {
        id: "basic",
        title: "ALLPLAN Basic",
        description: "Temel 2D/3D çizim ve modelleme çözümümüz.",
        href: "/products/allplan-basic",
        relatedRoles: ["architect"]
    },
    {
        id: "concept",
        title: "ALLPLAN Concept",
        description: "Konsept tasarım ve modelleme için ideal.",
        href: "/products/allplan-concept",
        relatedRoles: ["architect"]
    },
    {
        id: "professional",
        title: "ALLPLAN Professional",
        description: "Tam kapsamlı BIM modelleme ve dokümantasyon.",
        href: "/products/allplan-professional",
        relatedRoles: ["architect", "engineer"]
    },
    {
        id: "ultimate",
        title: "ALLPLAN Ultimate",
        description: "Tüm disiplinler için en kapsamlı paketimiz.",
        href: "/products/allplan-ultimate",
        relatedRoles: ["architect", "engineer", "fabricator"]
    },
    {
        id: "civil",
        title: "ALLPLAN Civil",
        description: "Altyapı, yol ve köprü projeleri için özel çözüm.",
        href: "/products/civil",
        relatedRoles: ["engineer"]
    },
    {
        id: "precast",
        title: "ALLPLAN Precast",
        description: "Prekast üretimi ve detaylandırma otomasyonu.",
        href: "/products/precast",
        relatedRoles: ["fabricator"]
    }
];

// --- Component ---
const PathwayProductSystem = () => {
    const [activeRole, setActiveRole] = useState<Role>(roles[0]);

    return (
        <section className="bg-[#050505] py-24 px-6 md:px-12 lg:px-24 border-y border-white/5 relative overflow-hidden">
            {/* Dynamic Background Glow based on Active Role */}
            <motion.div
                animate={{ backgroundColor: activeRole.color }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-[0.03] pointer-events-none transition-colors duration-700"
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        ROLÜNÜZÜ SEÇİN
                    </h2>
                    <p className="text-gray-400">
                        Size en uygun iş akışını ve ürün paketini keşfedin.
                    </p>
                </div>

                {/* Role Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            onClick={() => setActiveRole(role)}
                            className={`px-8 py-4 rounded-full text-sm font-bold tracking-widest transition-all duration-300 border ${activeRole.id === role.id
                                ? `bg-white text-black border-transparent scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]`
                                : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-600 hover:text-white"
                                }`}
                        >
                            {role.label}
                        </button>
                    ))}
                </div>

                {/* Active Role Content (Split View) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRole.id + "-text"}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h3 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: activeRole.color }}>
                                {activeRole.title}
                            </h3>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                {activeRole.description}
                            </p>
                            <Link href={activeRole.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all group">
                                Bu Akışı Detaylı İncele
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <AnimatePresence mode="wait">
                            {activeRole.features.map((feature, idx) => (
                                <motion.div
                                    key={activeRole.id + "-feature-" + idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-3 bg-[#111] p-4 rounded-xl border border-white/5"
                                >
                                    <CheckCircle2 className="h-5 w-5" style={{ color: activeRole.color }} />
                                    <span className="text-sm font-medium text-gray-200">{feature}</span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Product Cards Grid (The Trick) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => {
                        const isHighlighted = product.relatedRoles.includes(activeRole.id);

                        return (
                            <motion.div
                                key={product.id}
                                layout // Allow smooth layout transition if needed
                                animate={{
                                    opacity: isHighlighted ? 1 : 0.3,
                                    scale: isHighlighted ? 1 : 0.98,
                                    y: isHighlighted ? 0 : 0
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <Link
                                    href={product.href}
                                    className={`group block h-full p-8 rounded-2xl border transition-all duration-300 ${isHighlighted
                                            ? "bg-[#0a0a0a] border-white/10 hover:border-[#3B82F6]/50 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)] cursor-pointer"
                                            : "bg-[#050505] border-white/5 cursor-default grayscale"
                                        }`}
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`p-3 rounded-xl border transition-colors ${isHighlighted
                                                ? "bg-[#111] border-white/10 group-hover:bg-[#3B82F6]/10 group-hover:text-[#3B82F6] text-white"
                                                : "bg-[#0a0a0a] border-white/5 text-gray-600"
                                            }`}>
                                            <Box className="h-6 w-6" />
                                        </div>

                                        {isHighlighted && (
                                            <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: activeRole.color }} />
                                        )}
                                    </div>

                                    <h4 className={`text-xl font-bold mb-2 transition-colors ${isHighlighted ? "text-white group-hover:text-[#3B82F6]" : "text-gray-600"
                                        }`}>
                                        {product.title}
                                    </h4>

                                    <p className={`text-sm mb-6 transition-colors ${isHighlighted ? "text-gray-400 group-hover:text-gray-300" : "text-gray-700"
                                        }`}>
                                        {product.description}
                                    </p>

                                    {isHighlighted && (
                                        <span className="flex items-center gap-2 text-sm font-medium text-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                            İncele <ArrowRight className="h-4 w-4" />
                                        </span>
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PathwayProductSystem;
