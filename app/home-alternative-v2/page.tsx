import { Metadata } from 'next'
import HeroV2 from "@/components/homepage-v2/HeroV2";
import BentoGrid from "@/components/homepage-v2/BentoGrid";
import PathwaySelector from "@/components/homepage-v2/PathwaySelector";
import TechSpecsTable from "@/components/homepage-v2/TechSpecsTable";
import DeepFooter from "@/components/homepage-v2/DeepFooter";

export const metadata: Metadata = {
    title: 'ALLPLAN Türkiye | Sınırsız Tasarım (V2)',
    description: 'Geleceğin mühendislik çözümleri. Mimarlar, mühendisler ve üreticiler için tek platform.',
}

export default function HomeAlternativeV2() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#3B82F6] selection:text-white">
            {/* 
        Note: This page is designed to be isolated from the main theme.
        Ideally, it should live in a route group with a different layout,
        but for now we override styles locally.
      */}

            <HeroV2 />
            <BentoGrid />
            <PathwaySelector />
            <TechSpecsTable />
            <DeepFooter />
        </main>
    )
}
