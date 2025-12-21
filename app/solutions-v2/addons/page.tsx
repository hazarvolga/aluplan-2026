import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { CardV2 } from "@/components/layout-v2/CardV2";
import DeepFooter from "@/components/homepage-v2/DeepFooter";
import { solutionsMenu } from "@/data/solutionsMenu";

export default function AddonsPage() {
    const category = solutionsMenu.find(s => s.title === "EKLENTİLER");
    const items = category ? category.items : [];

    return (
        <PageWrapper>
            <HeroInternal
                category="ÇÖZÜMLER"
                title="EKLENTİLER"
                subtitle="Projenize güç katan özel modüller ve araçlar."
            />

            <section className="py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, idx) => (
                        <CardV2 key={idx} title={item.name} href={item.href} index={idx} />
                    ))}
                </div>
            </section>

            <DeepFooter />
        </PageWrapper>
    );
}
