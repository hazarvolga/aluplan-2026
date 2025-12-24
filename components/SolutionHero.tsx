"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

type SolutionHeroProps = {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string;
  description: string | ReactNode;
  primaryButton?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  stats?: Array<{
    value: string;
    label: string;
    sublabel?: string;
  }>;
};

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

const mulberry32 = (seed: number) => {
  return () => {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const SolutionHero = ({
  badge,
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  stats,
}: SolutionHeroProps) => {
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showBackgroundMotion = isMounted && !prefersReducedMotion;
  const particles = useMemo(() => {
    const rand = mulberry32(42);
    return Array.from({ length: 30 }, () => {
      const left = rand() * 100;
      const top = rand() * 100;
      const x = rand() * 100 - 50;
      const y = rand() * 100 - 50;
      const duration = 3 + rand() * 2;
      const delay = rand() * 2;
      return { left, top, x, y, duration, delay };
    });
  }, []);

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-midnight-950 via-midnight-800 to-midnight-900 pt-16 md:pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
        {showBackgroundMotion && (
          <>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-accent/20 to-accent/10 blur-[120px]"
            />
            <motion.div
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: "2s" }}
              className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-accent/15 to-accent/5 blur-[100px]"
            />
          </>
        )}
        <div className="absolute inset-0 opacity-10">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                x: particle.x,
                y: particle.y
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 opacity-[0.03] bg-technical-grid" />
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
        <motion.div variants={containerVariants} initial={false} animate="visible" className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-8 space-y-5 md:space-y-6">
              {badge && (
                <motion.div variants={fadeUpVariants}>
                  <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                    / {badge}
                  </span>
                </motion.div>
              )}
              {subtitle && (
                <motion.p variants={fadeUpVariants} className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                  {subtitle}
                </motion.p>
              )}
              <motion.h1 variants={fadeUpVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {title}
              </motion.h1>
              {typeof description === 'string' ? (
                <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {description}
                </motion.p>
              ) : (
                <motion.div variants={fadeUpVariants} className="text-muted-foreground max-w-2xl space-y-2">
                  {description}
                </motion.div>
              )}
              {(primaryButton || secondaryButton) && (
                <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
                  {primaryButton && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="lg"
                        className="group relative bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-base font-semibold"
                        asChild={primaryButton.external}
                      >
                        {primaryButton.external ? (
                          <a href={primaryButton.href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            {primaryButton.text}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <a href={primaryButton.href} className="flex items-center">
                            {primaryButton.text}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </a>
                        )}
                      </Button>
                    </motion.div>
                  )}
                  {secondaryButton && (
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 px-8 py-6 text-base font-semibold"
                        onClick={secondaryButton.onClick}
                        asChild={!!secondaryButton.href}
                      >
                        {secondaryButton.href ? (
                          <a href={secondaryButton.href} className="flex items-center">
                            <Play className="mr-2 h-5 w-5" />
                            {secondaryButton.text}
                          </a>
                        ) : (
                          <>
                            <Play className="mr-2 h-5 w-5" />
                            {secondaryButton.text}
                          </>
                        )}
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              )}
              {stats && stats.length > 0 && (
                <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
                      <div className="flex flex-col">
                        <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                        <span className="text-xs text-white/50 uppercase tracking-wider">{stat.sublabel}</span>
                      </div>
                      <div className="h-8 w-px bg-white/20" />
                      <span className="text-sm font-medium text-white/70">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
            <motion.div variants={fadeUpVariants} className="lg:col-span-4 hidden lg:block">
              <motion.div variants={glowPulseVariants} animate="animate" className="relative aspect-square">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-2xl p-8">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl blur-2xl" />
                    <div className="relative grid grid-cols-3 gap-4">
                      {[...Array(9)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/50 to-accent shadow-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default SolutionHero;
