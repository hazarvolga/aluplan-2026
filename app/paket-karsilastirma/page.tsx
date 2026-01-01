"use client"
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { packages, categories } from "@/data/PackageComparisonData";
import ComparisonTable from "@/components/package-comparison/ComparisonTable";

export default function PaketKarsilastirmaPage() {
    return (
        <PageWrapper>
            <HeroInternal
                category="ÜRÜNLER"
                title="Paket Karşılaştırması"
                subtitle="İhtiyacınıza en uygun ALLPLAN paketini keşfedin."
            />

            <div className="container mx-auto px-4 py-12">
                {/* Main Comparison Table - PDF Style */}
                <div className="bg-card border border-border/10 rounded-2xl p-6 mb-12">
                    <ComparisonTable packages={packages} categories={categories} />
                </div>

            </div>
        </PageWrapper>
    );
}
