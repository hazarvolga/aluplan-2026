"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Placeholder images
import architectureHero from "@/assets/solutions/architecture-hero.jpg";
import infrastructureHero from "@/assets/solutions/infrastructure-hero.jpg";
import precastHero from "@/assets/solutions/precast-hero.jpg";
import engineeringImg from "@/assets/product-engineering.jpg";

// New mapping based on Menu
const gridItems = [
    {
        title: "BİNA TASARIMI",
        subtitle: "Mimari & Mühendislik",
        description: "Tasarım, Strüktürel Analiz, MEP ve Endüstriyel çözümler.",
        image: architectureHero,
        cta: "Çözümleri İncele",
        href: "/solutions-v2/building-design",
        colSpan: "md:col-span-2 md:row-span-2", // Big (Top Left)
    },
    {
        title: "ALTYAPI TASARIMI",
        subtitle: "Yol & Köprü",
        description: "Köprü, Tünel ve Yol projeleri için parametrik modelleme.",
        image: infrastructureHero,
        cta: "Keşfet",
        href: "/solutions-v2/infrastructure",
        colSpan: "md:col-span-1 md:row-span-2", // Tall (Top Right)
    },
    {
        title: "İNŞAAT PLANLAMASI",
        subtitle: "Prekast & Çelik",
        description: "Üretimden şantiyeye kesintisiz veri akışı.",
        image: precastHero,
        cta: "Detaylar",
        href: "/solutions-v2/construction",
        colSpan: "md:col-span-1 md:row-span-1", // Small (Bottom)
    },
    {
        title: "EKLENTİLER",
        subtitle: "Add-ons & Tools",
        description: "Özelleştirilmiş eklentiler ve araçlar.",
        image: engineeringImg, // Using engineering as placeholder
        cta: "İncele",
        href: "/solutions-v2/addons",
        colSpan: "md:col-span-1 md:row-span-1", // Small (Bottom)
    },
    {
        title: "DİĞER ÇÖZÜMLERİMİZ",
        subtitle: "Bimplus & More",
        description: "İşbirliği ve tamamlayıcı ürünler.",
        image: architectureHero, // Placeholder
        cta: "Göz At",
        href: "/solutions-v2/other",
        colSpan: "md:col-span-1 md:row-span-1", // Small (Bottom)
    },
];

const BentoGrid = () => {
    return (
        <section className="bg-[#050505] py-24 px-6 md:px-12 lg:px-24 text-white" id="bento">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                            TEK PLATFORM.
                            <br />
                            <span className="text-gray-500">TÜM DİSİPLİNLER.</span>
                        </h2>
                        <p className="max-w-xl text-gray-400 text-lg">
                            AEC endüstrisinin en kapsamlı ekosistemi. İhtiyacınız olan çözümü seçin.
                        </p>
                    </div>
                </div>

                {/* The 5-Item Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
                    {gridItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-3xl bg-[#0f0f0f] border border-white/5 ${item.colSpan}`}
                        >
                            <Link href={item.href} className="block h-full w-full">
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>

                                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end items-start transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                    <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {item.subtitle}
                                    </span>

                                    <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-300 text-sm mb-4 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
                                        {item.description}
                                    </p>

                                    <button className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-medium hover:bg-white hover:text-black transition-all group-hover:block">
                                        {item.cta}
                                        <ArrowUpRight className="h-3 w-3" />
                                    </button>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
