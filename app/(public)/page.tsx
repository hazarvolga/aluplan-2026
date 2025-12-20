import { Metadata } from 'next'
import HeroV2 from "@/components/homepage-v2/HeroV2";
import BentoGrid from "@/components/homepage-v2/BentoGrid";
import PathwaySelector from "@/components/homepage-v2/PathwaySelector";
import TechSpecsTable from "@/components/homepage-v2/TechSpecsTable";
import DeepFooter from "@/components/homepage-v2/DeepFooter";

export const metadata: Metadata = {
    title: 'ALLPLAN Türkiye | Profesyonel BIM Yazılımları',
    description: 'Mimarlar, mühendisler ve müteahhitler için lider BIM çözümü. Tasarımdan üretime kesintisiz iş akışı.',
    alternates: {
        canonical: 'https://aluplan.com.tr',
    }
}

export default function Home() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#3B82F6] selection:text-white">
            <HeroV2 />
            <BentoGrid />
            <PathwaySelector />
            <TechSpecsTable />
            <DeepFooter />
        </main>
    )
}
