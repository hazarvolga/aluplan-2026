"use client"
import { Category, Package } from "@/data/PackageComparisonData";
import { Check, X } from "lucide-react";
import * as Icons from "lucide-react";

interface ComparisonTableProps {
    packages: Package[];
    categories: Category[];
}

const ComparisonTable = ({ packages, categories }: ComparisonTableProps) => {
    const getIcon = (iconName: string) => {
        const IconComponent = (Icons as any)[iconName];
        return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                {/* Header */}
                <thead className="sticky top-0 bg-background z-10 relative">

                    <tr className="relative z-10">
                        <th colSpan={2} className="p-4 border-b-2 border-border font-bold text-foreground align-bottom">
                            <div className="h-32 flex items-end">
                                FONKSİYONLAR
                            </div>
                        </th>
                        {/* EDITIONS Column */}
                        <th className="p-2 border-b-2 border-border text-center font-bold min-w-[60px] relative">
                            <div className="flex items-end justify-center h-32">
                                <div
                                    className="whitespace-nowrap font-black text-muted-foreground/30"
                                    style={{
                                        writingMode: 'vertical-rl',
                                        transform: 'rotate(180deg)',
                                        fontSize: '1.5rem',
                                        letterSpacing: '0.05rem'
                                    }}
                                >
                                    EDITIONS
                                </div>
                            </div>
                        </th>
                        {packages.map((pkg) => (
                            <th
                                key={pkg.id}
                                className="p-2 border-b-2 text-center font-bold min-w-[50px] relative"
                                style={{ borderColor: pkg.color }}
                            >
                                <div className="flex items-end justify-center h-32">
                                    <div
                                        className="whitespace-nowrap text-sm font-bold"
                                        style={{
                                            writingMode: 'vertical-rl',
                                            transform: 'rotate(180deg)',
                                            color: pkg.color
                                        }}
                                    >
                                        {pkg.name}
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Body */}
                <tbody>
                    {categories.map((category) => (
                        <>
                            {/* Feature Rows */}
                            {category.features.map((feature, index) => {
                                // Add thick separator after these features
                                const needsSeparator = [
                                    'visualization',           // Görselleştirme
                                    'quantity-cost',          // Metraj ve Maliyet
                                    'site-planning',          // Şantiye Planlaması
                                    'prestressed-tendons',    // Parametrik Öngerilimli Tendonlar
                                    'bridge-design',          // Kod Bazlı Köprü Tasarımı
                                    'prefab-connectors'       // Prefabrik Konnektörler
                                ].includes(feature.id);

                                return (
                                    <tr
                                        key={feature.id}
                                        className={`hover:bg-muted/20 transition-colors ${needsSeparator
                                            ? 'border-b-2 border-border'
                                            : 'border-b border-border/10'
                                            }`}
                                    >
                                        <td className="p-4 font-medium text-foreground">
                                            {feature.name}
                                        </td>
                                        <td className="p-4 text-sm text-muted-foreground">
                                            {feature.description}
                                        </td>
                                        <td className="bg-muted/10"></td>
                                        {packages.map((pkg) => {
                                            const hasFeature = feature.packages.includes(pkg.id);

                                            // First 6 features use star for Basic, Concept, Professional
                                            const isFirstSixFeatures = [
                                                'interface', '3d-modeling', '2d-drawing',
                                                'clash-detection', 'bim-easy', 'visualization'
                                            ].includes(feature.id);

                                            // Concept and Professional ALWAYS use star
                                            // Basic uses star only for first 6 features
                                            const useStarIcon = ['concept', 'professional'].includes(pkg.id) ||
                                                (isFirstSixFeatures && pkg.id === 'basic');

                                            return (
                                                <td
                                                    key={`${feature.id}-${pkg.id}`}
                                                    className="p-4 text-center"
                                                >
                                                    {hasFeature ? (
                                                        useStarIcon ? (
                                                            <svg
                                                                className="h-5 w-5 mx-auto"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                style={{ color: pkg.color }}
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                className="h-4 w-4 mx-auto"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                                style={{ color: pkg.color }}
                                                            >
                                                                <rect x="4" y="4" width="12" height="12" />
                                                            </svg>
                                                        )
                                                    ) : (
                                                        <X className="h-5 w-5 mx-auto text-muted-foreground/30" />
                                                    )}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;
