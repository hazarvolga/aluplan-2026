import { Metadata } from 'next'
import HeroAlternative from "@/components/homepage/HeroAlternative";
import TrustBadges from "@/components/homepage/TrustBadges";
import ValueProposition from "@/components/homepage/ValueProposition";
import IndustrySegments from "@/components/homepage/IndustrySegments";
import ProductShowcase from "@/components/homepage/ProductShowcase";
import SuccessStories from "@/components/homepage/SuccessStories";
import ServicesSection from "@/components/homepage/ServicesSection";
import LatestNews from "@/components/homepage/LatestNews";
import PartnersSection from "@/components/homepage/PartnersSection";
import FinalCTA from "@/components/homepage/FinalCTA";

export const metadata: Metadata = {
    title: 'ALUPLAN - ALLPLAN Türkiye Resmi Distribütörü | 30 Yıllık BIM Çözüm Ortağı',
    description: 'Mimarlık, mühendislik ve inşaat için profesyonel BIM yazılımları. 30 yıldır Türkiye\'de ALLPLAN ile tasarımdan üretime kesintisiz iş akışları.',
    keywords: 'ALLPLAN, BIM, CAD, mimarlık yazılımı, yapısal mühendislik, altyapı tasarımı, preceast, Türkiye',
    openGraph: {
        title: 'ALUPLAN - ALLPLAN Türkiye Resmi Distribütörü',
        description: '30 yıldır Türkiye\'nin BIM çözüm ortağı. Tasarımdan üretime tek platform.',
        type: 'website',
    },
}

export default function AlternativeHomePage() {
    return (
        <div className="dark min-h-screen bg-graphite-950">
            {/* 1. Hero Section - 30 Yıl, Video, CTA */}
            <HeroAlternative />

            {/* 2. Trust Badges - Nemetschek, OpenBIM, ISO */}
            <TrustBadges />

            {/* 3. Value Proposition - Neden ALLPLAN? */}
            <ValueProposition />

            {/* 4. Industry Segments - Sektör Seçimi */}
            <IndustrySegments />

            {/* 5. Product Showcase - Paket Karşılaştırma */}
            <ProductShowcase />

            {/* 6. Success Stories - Müşteri Referansları */}
            <SuccessStories />

            {/* 7. Services Section - Hizmetler */}
            <ServicesSection />

            {/* 8. Latest News - Blog/Haberler */}
            <LatestNews />

            {/* 9. Partners Section - Entegrasyonlar */}
            <PartnersSection />

            {/* 10. Final CTA - Dönüşüm */}
            <FinalCTA />
        </div>
    )
}
