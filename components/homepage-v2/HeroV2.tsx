"use client"
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { useRef } from "react";

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
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#050505]" />
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="max-w-[1200px]"
                >
                    {/* Super Big Typography */}
                    <h1 className="font-[900] text-[12vw] leading-[0.85] tracking-tighter mix-blend-screen md:text-[8vw]">
                        DESIGN
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                            TO BUILD
                        </span>
                    </h1>

                    {/* Subtitle & CTA */}
                    <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <p className="max-w-md text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                            Türkiye'nin mühendislik gücünü <span className="text-[#3B82F6] font-medium">30 yıldır</span> geleceğe taşıyoruz.
                            Sınırları kaldırın.
                        </p>

                        <div className="flex gap-4">
                            <Link href="/contact" className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-black transition-transform hover:scale-105">
                                <span className="relative z-10 flex items-center gap-2 font-bold tracking-tight">
                                    Ücretsiz Başla
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
