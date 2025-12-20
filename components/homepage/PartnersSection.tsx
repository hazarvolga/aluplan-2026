"use client"
import { motion } from "framer-motion";

// Partner/integration logos - placeholders
const partners = [
    { name: "Autodesk", category: "CAD" },
    { name: "Tekla", category: "Structural" },
    { name: "SCIA", category: "Analysis" },
    { name: "Frilo", category: "Calculation" },
    { name: "Solibri", category: "Quality" },
    { name: "Lumion", category: "Render" },
    { name: "Enscape", category: "Visualization" },
    { name: "Twinmotion", category: "Visualization" },
    { name: "Bluebeam", category: "PDF" },
    { name: "Trimble", category: "Construction" },
];

const PartnersSection = () => {
    return (
        <section className="py-16 bg-graphite-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white/80 tracking-tight">
                        Güçlü Entegrasyonlar
                    </h2>
                    <p className="text-white/40 mt-2">
                        Sektörün önde gelen yazılımlarıyla sorunsuz çalışın
                    </p>
                </div>

                {/* Logo Grid */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="h-12 px-6 flex items-center justify-center border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default">
                                <span className="text-white/40 group-hover:text-white/80 text-sm font-medium transition-colors">
                                    {partner.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
