"use client";

import { usePathname } from "next/navigation";
import TrialCTA from "@/components/TrialCTA";

const GlobalTrialCTA = () => {
    const pathname = usePathname();

    // Excluded paths
    const excludedPaths = [
        "/", // Homepage
        "/gizlilik-politikasi",
        "/kullanim-sartlari",
        "/kvkk"
    ];

    if (excludedPaths.includes(pathname)) {
        return null;
    }

    return <TrialCTA />;
};

export default GlobalTrialCTA;
