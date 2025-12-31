"use client"
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import type { Metadata } from "next";
import { useState } from "react";
import { packages, categories } from "@/data/PackageComparisonData";
import PackageSelector from "@/components/package-comparison/PackageSelector";
import FeatureList from "@/components/package-comparison/FeatureList";
import ComparisonTable from "@/components/package-comparison/ComparisonTable";
import CloudServicesSection from "@/components/package-comparison/CloudServicesSection";
import PurchasableOptionsSection from "@/components/package-comparison/PurchasableOptionsSection";
import { ArrowLeftRight, List } from "lucide-react";

export default function PaketKarsilastirmaPage() {
    const [activePackage, setActivePackage] = useState(packages[0]);
    const [viewMode, setViewMode] = useState<"single" | "comparison">("single");

    return (
        <PageWrapper>
            <HeroInternal
                category="ÜRÜNLER"
                title="Paket Karşılaştırması"
                subtitle="İhtiyacınıza en uygun ALLPLAN paketini keşfedin."
            />

            <div className="container mx-auto px-4 py-20">
                {/* Package Selector */}
                <PackageSelector
                    packages={packages}
                    activePackage={activePackage}
                    onSelectPackage={setActivePackage}
                />

                {/* Active Package Info */}
                <div
                    className="mb-8 p-6 rounded-2xl border-2"
                    style={{ borderColor: activePackage.color }}
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <h2
                                className="text-3xl font-bold mb-2"
                                style={{ color: activePackage.color }}
                            >
                                {activePackage.name}
                            </h2>
                            <p className="text-lg text-muted-foreground mb-1">
                                {activePackage.tagline}
                            </p>
                            <p className="text-foreground">{activePackage.description}</p>
                        </div>

                        {/* View Mode Toggle */}
                        <button
                            onClick={() => setViewMode(viewMode === "single" ? "comparison" : "single")}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/20 hover:border-border/50 transition-colors text-sm font-medium"
                        >
                            {viewMode === "single" ? (
                                <>
                                    <ArrowLeftRight className="h-4 w-4" />
                                    Tüm Paketleri Karşılaştır
                                </>
                            ) : (
                                <>
                                    <List className="h-4 w-4" />
                                    Tek Paket Görünümü
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Content: Single Package or Comparison Table */}
                {viewMode === "single" ? (
                    <FeatureList categories={categories} activePackage={activePackage} />
                ) : (
                    <div className="bg-card border border-border/10 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-foreground mb-6">
                            Tüm Paketler Karşılaştırması
                        </h3>
                        <ComparisonTable packages={packages} categories={categories} />
                    </div>
                )}

                {/* Cloud Services Section */}
                <div className="mt-16">
                    <CloudServicesSection />
                </div>

                {/* Purchasable Options Section */}
                <div className="mt-8">
                    <PurchasableOptionsSection />
                </div>

                {/* Footer Note */}
                <div className="mt-8 p-6 bg-muted/30 border border-border/10 rounded-xl">
                    <p className="text-sm text-muted-foreground">
                        <strong>Not:</strong> SCIA Engineer entegrasyonu hakkında detaylı bilgi için{" "}
                        <a
                            href="https://www.scia.net/en/scia-engineer/editions-comparison"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                        >
                            SCIA Engineer karşılaştırma sayfasını
                        </a>{" "}
                        ziyaret edebilirsiniz.
                    </p>
                </div>
            </div>
        </PageWrapper>
    );
}
