"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import {
    GraduationCap,
    HeadphonesIcon,
    Award,
    Briefcase,
    ShoppingCart,
    Users,
    ArrowRight,
    Clock
} from "lucide-react";

const services = [
    {
        icon: GraduationCap,
        title: "Eğitim",
        description: "Online ve yüz yüze profesyonel ALLPLAN eğitimleri ile uzmanlaşın.",
        status: "active",
        href: "/contact",
        cta: "Eğitim Takvimi"
    },
    {
        icon: HeadphonesIcon,
        title: "Teknik Destek",
        description: "Projeleriniz aksamasın. Uzman ekibimizle 7/24 teknik destek.",
        status: "active", // Changed to active for better UX structure, usually support is active
        href: "/contact",
        cta: "Destek Al"
    },
    {
        icon: Briefcase,
        title: "Danışmanlık",
        description: "Şirketinize özel BIM implementasyon ve süreç danışmanlığı.",
        status: "active",
        href: "/contact",
        cta: "İletişim"
    },
    {
        icon: Award,
        title: "Sertifika",
        description: "Uluslararası geçerliliği olan ALLPLAN Uzman sertifikası.",
        status: "coming",
        href: "#",
        cta: "Yakında"
    },
    {
        icon: ShoppingCart,
        title: "E-Mağaza",
        description: "Online lisans yönetimi, shop ve abonelik işlemleri.",
        status: "coming",
        href: "#",
        cta: "Yakında"
    },
    {
        icon: Users,
        title: "Partner",
        description: "ALLPLAN çözüm ortağı ağımıza katılın, birlikte büyüyelim.",
        status: "active",
        href: "/contact",
        cta: "Başvuru Yap"
    }
];

const ServicesV2 = () => {
    return (
        <section className="bg-[#050505] py-24 px-6 md:px-12 lg:px-24 border-b border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[#3B82F6] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-16 md:text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        PROFESYONEL <span className="text-[#3B82F6]">HİZMETLER</span>
                    </h2>
                    <p className="text-gray-400">
                        Sadece yazılım değil, başarınız için kapsamlı bir ekosistem sunuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isActive = service.status === "active";

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={isActive ? service.href : "#"}
                                    className={`group relative block h-full p-8 rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                                            ? "bg-[#0a0a0a] border-white/5 hover:border-[#3B82F6]/30 hover:bg-[#0f0f0f] cursor-pointer"
                                            : "bg-[#0a0a0a]/50 border-white/5 cursor-not-allowed opacity-60"
                                        }`}
                                >
                                    {/* Hosting Hover Effect */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    )}

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`p-3 rounded-xl border ${isActive
                                                    ? "bg-[#111] border-white/10 group-hover:text-[#3B82F6] text-gray-300"
                                                    : "bg-[#111]/50 border-white/5 text-gray-600"
                                                } transition-colors`}>
                                                <Icon className="h-6 w-6" />
                                            </div>

                                            {!isActive && (
                                                <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider font-medium text-gray-500 bg-[#111] px-2 py-1 rounded border border-white/5">
                                                    <Clock className="h-3 w-3" /> Yakında
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                            {service.description}
                                        </p>

                                        <div className={`flex items-center gap-2 text-sm font-medium ${isActive
                                                ? "text-white group-hover:text-[#3B82F6]"
                                                : "text-gray-600"
                                            } transition-colors`}>
                                            {service.cta}
                                            {isActive && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesV2;
