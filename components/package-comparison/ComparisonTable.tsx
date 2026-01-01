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
                    {/* Watermark Background */}
                    <tr className="absolute inset-0 pointer-events-none overflow-hidden">
                        <th colSpan={100} className="relative">
                            <div
                                className="absolute inset-0 flex items-center justify-center opacity-[0.08] select-none"
                                style={{
                                    fontSize: '8rem',
                                    fontWeight: 900,
                                    letterSpacing: '0.5rem',
                                    color: '#000'
                                }}
                            >
                                ALLPLAN
                            </div>
                        </th>
                    </tr>

                    <tr className="relative z-10">
                        <th className="text-left p-4 border-b-2 border-border font-bold text-foreground w-[180px]">
                            Özellik
                        </th>
                        <th className="text-left p-4 border-b-2 border-border font-bold text-foreground min-w-[300px]">
                            Açıklama
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
                            {/* Category Header Row */}
                            <tr key={`cat-${category.id}`} className="bg-muted/30">
                                <td
                                    colSpan={2}
                                    className="p-4 font-bold text-foreground"
                                >
                                    <div className="flex items-center gap-2">
                                        {getIcon(category.icon)}
                                        {category.name}
                                    </div>
                                </td>
                                <td colSpan={packages.length} className="bg-muted/30"></td>
                            </tr>

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
                                        {packages.map((pkg) => {
                                            const hasFeature = feature.packages.includes(pkg.id);
                                            return (
                                                <td
                                                    key={`${feature.id}-${pkg.id}`}
                                                    className="p-4 text-center"
                                                >
                                                    {hasFeature ? (
                                                        <Check
                                                            className="h-5 w-5 mx-auto"
                                                            style={{ color: pkg.color }}
                                                        />
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
