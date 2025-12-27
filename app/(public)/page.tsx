import { Metadata } from 'next'
import HeroV2 from "@/components/homepage-v2/HeroV2";
import BentoGrid from "@/components/homepage-v2/BentoGrid";
import PathwayProductSystem from "@/components/homepage-v2/PathwayProductSystem";
import InnovationsTeaser from "@/components/homepage-v2/InnovationsTeaser";
import TechSpecsTable from "@/components/homepage-v2/TechSpecsTable";
import ServicesV2 from "@/components/homepage-v2/ServicesV2";

export const metadata: Metadata = {
    title: 'ALLPLAN Türkiye | Profesyonel BIM Yazılımları',
    description: 'Mimarlar, mühendisler ve müteahhitler için lider BIM çözümü. Tasarımdan üretime kesintisiz iş akışı.',
    alternates: {
        canonical: 'https://aluplan.com.tr',
    }
}

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
            <HeroV2 />
            <BentoGrid />
            <PathwayProductSystem />
            <InnovationsTeaser />
            <TechSpecsTable />
            <ServicesV2 />
        </main>
    )
}
