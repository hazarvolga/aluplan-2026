"use client"
import { cloudServices } from "@/data/PackageComparisonData";
import { Cloud, Info } from "lucide-react";

const CloudServicesSection = () => {
    return (
        <div className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-border/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10">
                    <Cloud className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-foreground">ALLPLAN Cloud Services</h2>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <Info className="h-4 w-4" />
                        Yalnızca Abonelik lisanslarına dahildir
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cloudServices.map((service) => (
                    <div
                        key={service.id}
                        className="bg-card border border-border/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors"
                    >
                        <h3 className="font-bold text-foreground mb-2">{service.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                        </p>
                        {service.note && service.note !== "Yalnızca Abonelik lisanslarına dahildir" && (
                            <p className="text-xs text-amber-500 mt-3 flex items-start gap-1">
                                <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                                {service.note}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CloudServicesSection;
