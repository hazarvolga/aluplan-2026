import { motion } from "framer-motion";
import ModuleCard from "./ModuleCard";
import { StaticImageData } from "next/image";

type Module = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  link?: string;
  external?: boolean;
};

type PremiumModuleGridProps = {
  title: string;
  subtitle?: string;
  modules: Module[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const PremiumModuleGrid = ({ title, subtitle, modules }: PremiumModuleGridProps) => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-[15%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-[15%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            modules.length === 5 
              ? 'lg:grid-cols-5' 
              : modules.length === 4 
              ? 'lg:grid-cols-4' 
              : 'lg:grid-cols-3'
          }`}
        >
          {modules.map((module, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ModuleCard {...module} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumModuleGrid;
