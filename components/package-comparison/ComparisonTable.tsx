"use client"
import React from "react";
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
        <div>
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
                                    // Show special header for SCIA Engineer category before first feature
                                    const showSciaHeader = category.id === 'scia' && index === 0;

                                    // Add thick separator after these features
                                    const needsSeparator = [
                                        'visualization',           // Görselleştirme
                                        'quantity-cost',          // Metraj ve Maliyet
                                        'site-planning',          // Şantiye Planlaması
                                        'prestressed-tendons',    // Parametrik Öngerilimli Tendonlar
                                        'bridge-design',          // Kod Bazlı Köprü Tasarımı
                                        'prefab-connectors',      // Prefabrik Konnektörler
                                        'all-languages'           // Diğer Tüm Diller
                                    ].includes(feature.id);

                                    return (
                                        <React.Fragment key={feature.id}>
                                            {/* SCIA Engineer Header */}
                                            {showSciaHeader && (
                                                <tr className="bg-muted/20">
                                                    <td
                                                        colSpan={2 + 1 + packages.length}
                                                        className="p-3 font-bold text-foreground text-sm"
                                                    >
                                                        YAPISAL ANALİZ VE TASARIM - SCIA ENGINEER • ¹
                                                    </td>
                                                </tr>
                                            )}

                                            {/* Cloud Services Header */}
                                            {category.id === 'cloud-services' && index === 0 && (
                                                <tr className="bg-muted/20">
                                                    <td
                                                        colSpan={2 + 1 + packages.length}
                                                        className="p-3 font-bold text-foreground text-sm"
                                                    >
                                                        ALLPLAN CLOUD SERVICES ²
                                                    </td>
                                                </tr>
                                            )}

                                            {/* Purchasable Options Header */}
                                            {category.id === 'purchasable' && index === 0 && (
                                                <tr className="bg-muted/20">
                                                    <td
                                                        colSpan={2 + 1 + packages.length}
                                                        className="p-3 font-bold text-foreground text-sm"
                                                    >
                                                        SATINALINABİLİR SEÇENEKLER
                                                    </td>
                                                </tr>
                                            )}

                                            {/* Feature Row */}
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

                                                    // Use starPackages array if defined, otherwise no stars
                                                    const useStarIcon = hasFeature &&
                                                        feature.starPackages?.includes(pkg.id);

                                                    // Check if this is a purchasable option (outline square)
                                                    const isPurchasable = category.id === 'purchasable' && hasFeature;

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
                                                                ) : isPurchasable ? (
                                                                    // Outline Square for Purchasable Options
                                                                    <svg
                                                                        className="h-4 w-4 mx-auto"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        strokeWidth="2"
                                                                        viewBox="0 0 24 24"
                                                                        style={{ color: pkg.color }}
                                                                    >
                                                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                                                    </svg>
                                                                ) : (
                                                                    // Filled Square for Standard Features
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
                                        </React.Fragment>
                                    );
                                })}
                            </>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Legend */}
            <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border/50 max-w-2xl text-sm">
                <div className="grid gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-6 flex justify-center">
                            <svg className="h-4 w-4 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                                <rect x="4" y="4" width="12" height="12" />
                            </svg>
                        </div>
                        <span>Kalıcı/Abonelik lisansına dahildir</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-6 flex justify-center">
                            <svg className="h-5 w-5 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <span>Yalnızca Abonelik lisansına dahildir</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-6 flex justify-center">
                            <svg className="h-4 w-4 text-foreground" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            </svg>
                        </div>
                        <span>Ücretli Seçenek Olarak Mevcuttur</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisonTable;
