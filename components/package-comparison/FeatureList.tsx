"use client"
import { Category, Package } from "@/data/PackageComparisonData";
import { CheckCircle2, ChevronDown } from "lucide-react";
import * as Icons from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureListProps {
    categories: Category[];
    activePackage: Package;
}

const FeatureList = ({ categories, activePackage }: FeatureListProps) => {
    const [expandedCategories, setExpandedCategories] = useState<string[]>(
        categories.map(c => c.id) // All expanded by default
    );

    const toggleCategory = (categoryId: string) => {
        setExpandedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const getIcon = (iconName: string) => {
        const IconComponent = (Icons as any)[iconName];
        return IconComponent ? <IconComponent className="h-5 w-5" /> : null;
    };

    return (
        <div className="space-y-4">
            {categories.map((category) => {
                const categoryFeatures = category.features.filter(f =>
                    f.packages.includes(activePackage.id)
                );

                if (categoryFeatures.length === 0) return null;

                const isExpanded = expandedCategories.includes(category.id);

                return (
                    <div
                        key={category.id}
                        className="bg-card border border-border/10 rounded-xl overflow-hidden"
                    >
                        {/* Category Header */}
                        <button
                            onClick={() => toggleCategory(category.id)}
                            className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className="p-2 rounded-lg"
                                    style={{ backgroundColor: `${activePackage.color}20` }}
                                >
                                    <div style={{ color: activePackage.color }}>
                                        {getIcon(category.icon)}
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-bold text-foreground">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {categoryFeatures.length} özellik
                                    </p>
                                </div>
                            </div>
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            </motion.div>
                        </button>

                        {/* Features List */}
                        <AnimatePresence initial={false}>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 space-y-4">
                                        {categoryFeatures.map((feature) => (
                                            <div
                                                key={feature.id}
                                                className="flex gap-3 p-4 rounded-lg bg-muted/30 border border-border/5"
                                            >
                                                <CheckCircle2
                                                    className="h-5 w-5 flex-shrink-0 mt-0.5"
                                                    style={{ color: activePackage.color }}
                                                />
                                                <div>
                                                    <h4 className="font-semibold text-foreground mb-1">
                                                        {feature.name}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

export default FeatureList;
