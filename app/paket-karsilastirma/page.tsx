"use client"
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { packages, categories } from "@/data/PackageComparisonData";
import ComparisonTable from "@/components/package-comparison/ComparisonTable";
import CloudServicesSection from "@/components/package-comparison/CloudServicesSection";
import PurchasableOptionsSection from "@/components/package-comparison/PurchasableOptionsSection";

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

                {/* Cloud Services Section */}
                <CloudServicesSection />

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
