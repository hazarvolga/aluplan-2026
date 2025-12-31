"use client"
import { useState } from "react";
import { Package } from "@/data/PackageComparisonData";
import { motion } from "framer-motion";

interface PackageSelectorProps {
    packages: Package[];
    activePackage: Package;
    onSelectPackage: (pkg: Package) => void;
}

const PackageSelector = ({ packages, activePackage, onSelectPackage }: PackageSelectorProps) => {
    return (
        <div className="mb-12">
            {/* Desktop: Horizontal Tabs */}
            <div className="hidden md:flex flex-wrap justify-center gap-3">
                {packages.map((pkg) => (
                    <button
                        key={pkg.id}
                        onClick={() => onSelectPackage(pkg)}
                        className={`relative px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${activePackage.id === pkg.id
                                ? "text-background scale-105 shadow-lg"
                                : "text-muted-foreground bg-card border border-border/20 hover:border-border/50 hover:text-foreground"
                            }`}
                        style={{
                            backgroundColor: activePackage.id === pkg.id ? pkg.color : undefined,
                        }}
                    >
                        {pkg.name}
                        {activePackage.id === pkg.id && (
                            <motion.div
                                layoutId="activePackageIndicator"
                                className="absolute inset-0 rounded-xl"
                                style={{ backgroundColor: pkg.color }}
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10">{pkg.name}</span>
                    </button>
                ))}
            </div>

            {/* Mobile: Dropdown */}
            <div className="md:hidden">
                <select
                    value={activePackage.id}
                    onChange={(e) => {
                        const selected = packages.find(p => p.id === e.target.value);
                        if (selected) onSelectPackage(selected);
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border/20 text-foreground font-medium"
                    style={{ borderColor: activePackage.color }}
                >
                    {packages.map((pkg) => (
                        <option key={pkg.id} value={pkg.id}>
                            {pkg.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default PackageSelector;
