"use client"
import { motion } from "framer-motion";
import Image from "next/image";

// Partner/integration logos
const partners = [
    { name: "Tekla", logo: "/images/partners/tekla.svg", hasLogo: true },
    { name: "SCIA", logo: "/images/partners/scia.png", hasLogo: true },
    { name: "Frilo", logo: "/images/partners/frilo.png", hasLogo: true },
    { name: "Solibri", logo: "/images/partners/solibri.png", hasLogo: true },
    { name: "Lumion", logo: "/images/partners/lumion.png", hasLogo: true },
    { name: "Enscape", logo: "/images/partners/enscape.png", hasLogo: true },
    { name: "Twinmotion", logo: "/images/partners/twinmotion.png", hasLogo: true },
    { name: "Bluebeam", logo: "/images/partners/bluebeam.jpg", hasLogo: true },
    { name: "Trimble", logo: "/images/partners/trimble.png", hasLogo: true },
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
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="h-14 px-6 flex items-center justify-center border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default min-w-[120px]">
                                {partner.hasLogo && partner.logo ? (
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={100}
                                        height={32}
                                        className="h-6 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                                        unoptimized
                                    />
                                ) : (
                                    <span className="text-white/50 group-hover:text-white/90 text-sm font-semibold tracking-wide transition-colors">
                                        {partner.name}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
