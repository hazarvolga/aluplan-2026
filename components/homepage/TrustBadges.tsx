import Image from "next/image";

const badges = [
    { name: "Nemetschek Group", logo: "/images/partners/nemetschek.svg" },
    { name: "buildingSMART", logo: "/images/partners/buildingsmart.svg" },
    { name: "IFC Certified", logo: "/images/partners/ifc.svg" },
    { name: "ISO 27001", logo: "/images/partners/iso27001.svg" },
];

const TrustBadges = () => {
    return (
        <section className="py-8 bg-graphite-900 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Badges */}
                    <div className="flex items-center gap-8 md:gap-12 overflow-x-auto pb-2 md:pb-0">
                        {badges.map((badge) => (
                            <div
                                key={badge.name}
                                className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                            >
                                {/* Placeholder for logos - use text for now */}
                                <div className="h-8 px-4 flex items-center justify-center border border-white/10 rounded text-white/60 text-sm font-medium">
                                    {badge.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tagline */}
                    <p className="text-white/50 text-sm text-center md:text-right max-w-md">
                        Nemetschek Group bünyesinde, dünya çapında <span className="text-white/80">1 milyondan fazla profesyonel</span> tarafından tercih edilmektedir.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
