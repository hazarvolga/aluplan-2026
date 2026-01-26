import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

type Feature = {
  icon: string | ReactNode | StaticImageData;
  title: string;
  description: string;
};

type PremiumFeatureSectionProps = {
  title: string;
  subtitle?: string;
  features: Feature[];
  darkMode?: boolean;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const PremiumFeatureSection = ({
  title,
  subtitle,
  features,
  darkMode = false,
}: PremiumFeatureSectionProps) => {
  const bgClass = darkMode ? "gradient-hero" : "bg-background";
  const textClass = darkMode ? "text-foreground" : "text-foreground";
  const subtitleClass = darkMode ? "text-muted-foreground" : "text-muted-foreground";
  const cardBgClass = darkMode
    ? "bg-card backdrop-blur-xl border-border"
    : "bg-card backdrop-blur-xl border-border";
  const cardTextClass = darkMode ? "text-foreground" : "text-foreground";
  const cardDescClass = darkMode ? "text-muted-foreground" : "text-muted-foreground";

  return (
    <section className={`py-20 relative overflow-hidden ${bgClass}`}>
      {/* Ambient Background */}
      {darkMode && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute bottom-20 left-[10%] w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px]" />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${textClass} mb-4`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`text-lg md:text-xl ${subtitleClass} max-w-3xl mx-auto`}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-2xl border ${cardBgClass} shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Icon */}
              <div className="mb-6">
                {(typeof feature.icon === "string" || (feature.icon && typeof feature.icon === "object" && "src" in feature.icon)) ? (
                   <Image 
                     src={feature.icon as string | StaticImageData} 
                     alt={feature.title} 
                     className="w-16 h-16 object-contain" 
                     width={64} 
                     height={64} 
                   />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center">
                    {feature.icon as ReactNode}
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className={`font-display text-xl font-bold ${cardTextClass} mb-3 group-hover:text-accent transition-colors`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${cardDescClass}`}>
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumFeatureSection;
