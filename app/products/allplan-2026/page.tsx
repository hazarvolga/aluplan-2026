import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import DeepFooter from "@/components/homepage-v2/DeepFooter";

export default function Allplan2026Page() {
    return (
        <PageWrapper>
            <HeroInternal
                category="ÜRÜNLER"
                title="ALLPLAN 2026"
                subtitle="DAHA İYİ BİR GELECEK İNŞA ETMEK İÇİN TASARLANDI"
            />

            <section className="py-24 px-6">
                <div className="max-w-[1400px] mx-auto text-center">
                    <p className="text-xl text-muted-foreground">İçerik yakında eklenecektir...</p>
                </div>
            </section>

            <DeepFooter />
        </PageWrapper>
    );
}
