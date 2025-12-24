import PageWrapper from "@/components/layout-v2/PageWrapper";
import HeroInternal from "@/components/layout-v2/HeroInternal";

export default function PackageOverviewPage() {
    return (
        <PageWrapper>
            <HeroInternal
                category="GENEL BAKIŞ"
                title="Paket Karşılaştırması"
                subtitle="İhtiyacınıza en uygun Allplan paketini keşfedin."
            />
            <div className="container mx-auto px-4 py-20">
                <div className="p-8 text-center border border-dashed border-gray-700 rounded-lg">
                    <p className="text-muted-foreground">İçerik hazırlanıyor...</p>
                </div>
            </div>
        </PageWrapper>
    );
}
