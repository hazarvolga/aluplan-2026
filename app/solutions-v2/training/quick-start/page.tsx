"use client";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { QuickStartNav } from "@/components/training/QuickStartNav";
import { GuideContent } from "@/components/training/GuideContent";
import { motion } from "framer-motion";

const navItems = [
    { id: "introduction", label: "Giriş" },
    { id: "pro-tips", label: "Profesyonel İpuçları" },
    { id: "interface", label: "Arayüz & Kurulum" },
    { id: "modules", label: "Modüller" },
    { id: "features-2026", label: "Allplan 2026" },
];

export default function QuickStartPage() {
    return (
        <PageWrapper>
            <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[#050505] min-h-screen">
                <div className="max-w-[1600px] mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
                        {/* Sticky Navigation */}
                        <aside className="shrink-0 relative">
                            <QuickStartNav items={navItems} />
                        </aside>

                        {/* Main Content */}
                        <main className="flex-1 min-w-0">
                            <GuideContent />
                        </main>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}
