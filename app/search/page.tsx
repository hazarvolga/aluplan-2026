import { Metadata } from "next";
import SearchPageClient from "./SearchPageClient";

export const metadata: Metadata = {
    title: 'Arama Sonuçları | Aluplan',
    description: 'Site içi arama sonuçları',
    robots: {
        index: false,
        follow: false,
    },
};

export default function SearchPage() {
    return <SearchPageClient />;
}
