 "use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Framer Motion Variants - Premium Cinematic
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      ease: "easeOut"
    }
  }
};

const fadeUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowPulseVariants: Variants = {
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const EngineeringHero = () => {

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-graphite-950 pt-16 md:pt-20">
      <div className="absolute inset-0 opacity-[0.02] bg-technical-grid pointer-events-none" />

      {/* Content Container - Full Width */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial={false}
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content (8 cols on desktop) */}
            <div className="lg:col-span-8 space-y-5 md:space-y-6">
              <motion.div variants={fadeUpVariants} className="mb-4">
                <span className="text-sm md:text-base font-medium text-white/80 tracking-wide">
                  / ALLPLAN 2026
                </span>
              </motion.div>

              {/* Title - Bold & Expressive */}
              <motion.h1
                variants={fadeUpVariants}
                className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-white"
              >
                ALLPLAN 2026 ÇIKTI
              </motion.h1>

              <motion.p
                variants={fadeUpVariants}
                className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl font-semibold tracking-tight"
              >
                DAHA İYİ BİR GELECEK İNŞA ETMEK İÇİN TASARLANDI
              </motion.p>

              {/* Description */}
              <motion.p 
                variants={fadeUpVariants}
                className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl font-light"
              >
                Yenilikçi AEC iş akışları, otomasyon ve bulut tabanlı iş birliği ile daha başarılı projeler.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={fadeUpVariants}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="group relative bg-accent hover:bg-accent/90 text-graphite-950 shadow-lg shadow-accent/30 hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold"
                  >
                    Yenilikleri İncele
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 px-8 py-6 text-base font-semibold"
                  >
                    ALLPLAN 2026 İncele
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats - Mobile Optimized */}
              <motion.div 
                variants={fadeUpVariants}
                className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6"
              >
                {[
                  { value: "29", label: "Yıllık", sublabel: "Tecrübe" },
                  { value: "500+", label: "Aktif", sublabel: "Müşteri" },
                  { value: "24/7", label: "Teknik", sublabel: "Destek" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10"
                  >
                    <div className="flex flex-col">
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {stat.value}
                      </span>
                      <span className="text-xs text-white/50 uppercase tracking-wider">
                        {stat.sublabel}
                      </span>
                    </div>
                    <div className="h-8 w-px bg-white/20" />
                    <span className="text-sm font-medium text-white/70">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column removed for flat design */}
          </div>
        </motion.div>
      </div>

      {/* Flat design: no bottom fade */}
    </section>
  );
};

export default EngineeringHero;
