"use client"
import { purchasableOptions } from "@/data/PackageComparisonData";
import { ShoppingCart, Check } from "lucide-react";

const PurchasableOptionsSection = () => {
    return (
        <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-border/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-amber-500/10">
                    <ShoppingCart className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-foreground">Satın Alınabilir Seçenekler</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        Ücretli eklentiler ve genişletmeler
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {purchasableOptions.map((option) => (
                    <div
                        key={option.id}
                        className="bg-card border border-border/10 rounded-xl p-6 hover:border-amber-500/30 transition-colors"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <h3 className="font-bold text-foreground">{option.name}</h3>
                            {option.allPackages && (
                                <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full">
                                    Tüm Paketler
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                            {option.description}
                        </p>
                        {option.packages && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Check className="h-3 w-3 text-green-500" />
                                Uyumlu: {option.packages.length} paket
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurchasableOptionsSection;
