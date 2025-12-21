"use client"
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { useRef } from "react";

// Data Particles Configuration
const floatingTags = [
    { word: "CLOUD NATIVE", top: "15%", left: "10%", size: "text-4xl", delay: 0, duration: 8, maxOpacity: 0.5 },
    { word: "BIM LEVEL 3", top: "25%", left: "85%", size: "text-2xl", delay: 2, duration: 10, maxOpacity: 0.4 },
    { word: "PARAMETRIC", top: "60%", left: "5%", size: "text-6xl", delay: 1, duration: 12, maxOpacity: 0.2 },
    { word: "AUTOMATION", top: "75%", left: "70%", size: "text-3xl", delay: 4, duration: 9, maxOpacity: 0.5 },
    { word: "INTEROPERABILITY", top: "10%", left: "60%", size: "text-sm", delay: 3, duration: 11, maxOpacity: 0.7 },
    { word: "AX3000", top: "85%", left: "15%", size: "text-5xl", delay: 5, duration: 7, maxOpacity: 0.3 },
    { word: "PYTHONPARTS", top: "40%", left: "90%", size: "text-xs", delay: 1.5, duration: 8, maxOpacity: 0.8 },
    { word: "OPENBIM", top: "50%", left: "50%", size: "text-9xl", delay: 0.5, duration: 15, maxOpacity: 0.15 }, // Big subtle one in center
    { word: "REAL-TIME", top: "30%", left: "20%", size: "text-lg", delay: 6, duration: 10, maxOpacity: 0.6 },
    { word: "PRECAST", top: "70%", left: "40%", size: "text-xl", delay: 2.5, duration: 9, maxOpacity: 0.4 },
    { word: "CIVIL", top: "5%", left: "40%", size: "text-2xl", delay: 3.5, duration: 11, maxOpacity: 0.4 },
    { word: "BRIDGE", top: "90%", left: "80%", size: "text-3xl", delay: 4.5, duration: 8, maxOpacity: 0.4 },
    { word: "@CONNECTION", top: "45%", left: "5%", size: "text-xs", delay: 0, duration: 5, maxOpacity: 0.9 },
    { word: "DATA_NODE", top: "15%", left: "95%", size: "text-xs", delay: 2, duration: 6, maxOpacity: 0.9 },
];

const HeroV2 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#050505] text-white selection:bg-[#3B82F6] selection:text-white">
            {/* Background Video Layer */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover scale-105"
                    poster="/images/hero-poster.jpg"
                >
                    <source src="/videos/hero-bim.mp4" type="video/mp4" />
                    {/* Fallback color if video fails */}
                    <div className="h-full w-full bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]" />
                </video>
                {/* Cinematic Overlay - Enhanced for Cloud/Structure feel */}
                {/* 1. Base Dark Layer */}
                <div className="absolute inset-0 bg-[#020617]/40" />

                {/* 2. Technical Dot Grid (Engineering feel) */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "radial-gradient(circle, #3B82F6 1px, transparent 1px)",
                        backgroundSize: "42px 42px"
                    }}
                />

                {/* 3. Cloud/Atmosphere Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#020617]/50 to-[#050505]" />

                {/* 4. Floating Data Particles (Living Cloud) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
                    {floatingTags.map((tag, i) => (
                        <motion.div
                            key={i}
                            className={`absolute font-mono text-blue-400/40 font-bold tracking-widest ${tag.size}`}
                            style={{
                                top: tag.top,
                                left: tag.left,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, tag.maxOpacity, 0] }}
                            transition={{
                                duration: tag.duration,
                                repeat: Infinity,
                                delay: tag.delay,
                                ease: "easeInOut"
                            }}
                        >
                            {tag.word}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="max-w-[1400px]"
                >
                    {/* Eyebrow */}
                    <div className="mb-6 flex items-center gap-2 text-[#3B82F6] font-mono text-lg tracking-widest uppercase">
                        / ALLPLAN 2026
                    </div>

                    {/* Super Big Typography */}
                    <h1 className="font-[900] text-[7vw] leading-[0.9] tracking-tighter mix-blend-screen md:text-[5vw] max-w-5xl">
                        DAHA İYİ BİR GELECEK
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                            İNŞA ETMEK İÇİN TASARLANDI
                        </span>
                    </h1>

                    {/* Subtitle & CTA */}
                    <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <p className="max-w-2xl text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                            Yenilikçi AEC iş akışları, otomasyon ve bulut tabanlı iş birliği ile daha başarılı projeler.
                        </p>

                        <div className="flex gap-4">
                            <Link href="/contact" className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-black transition-transform hover:scale-105">
                                <span className="relative z-10 flex items-center gap-2 font-bold tracking-tight">
                                    ALLPLAN 2026 ÇIKTI
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 -z-10 translate-y-full bg-[#3B82F6] transition-transform duration-300 group-hover:translate-y-0" />
                            </Link>

                            <Link href="/products/allplan" className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 backdrop-blur-md transition-colors hover:bg-white/10">
                                <Play className="h-5 w-5 fill-current" />
                                <span className="font-medium">Filmi İzle</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Keşfet</span>
                    <ChevronDown className="h-6 w-6 animate-bounce text-gray-500" />
                </motion.div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="h-full w-full border-x border-white/5 mx-auto max-w-[1400px]" />
            </div>
        </div>
    );
};

export default HeroV2;
