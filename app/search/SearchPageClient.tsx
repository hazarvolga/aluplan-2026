"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { searchIndex, SearchItem } from "@/data/searchIndex";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, ArrowRight, FileText, Sparkles, Building } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/sections/SectionHeader";

function SearchPageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialQuery = searchParams.get("q") || "";
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState<SearchItem[]>([]);

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
            return;
        }

        const normalizeString = (str: string) => {
            return str
                .replace(/Ğ/g, "g")
                .replace(/Ü/g, "u")
                .replace(/Ş/g, "s")
                .replace(/I/g, "i")
                .replace(/İ/g, "i")
                .replace(/Ö/g, "o")
                .replace(/Ç/g, "c")
                .replace(/ğ/g, "g")
                .replace(/ü/g, "u")
                .replace(/ş/g, "s")
                .replace(/ı/g, "i")
                .replace(/ö/g, "o")
                .replace(/ç/g, "c")
                .toLowerCase();
        };

        const normalizedQuery = normalizeString(query);
        const queryTokens = normalizedQuery.split(" ").filter(t => t.length > 0);

        const filtered = searchIndex.filter((item) => {
            const normTitle = normalizeString(item.title);
            const normDesc = normalizeString(item.description);
            const normContent = item.content ? normalizeString(item.content) : "";
            const normTags = item.tags?.map(t => normalizeString(t)) || [];

            // Check if ALL tokens match at least one field (AND logic for tokens)
            // Or use OR logic depending on preference. Usually users expect ALL words to be present.
            // But for "harf harf" input, we usually want to search the whole phrase or parts.
            // Let's stick to: If the query is "geo ref", both parts must exist somewhere.

            return queryTokens.every(token => {
                return (
                    normTitle.includes(token) ||
                    normDesc.includes(token) ||
                    normContent.includes(token) ||
                    normTags.some(t => t.includes(token))
                );
            });
        });

        setResults(filtered);
    }, [query]);

    // Sync input with URL param changes (e.g. back button)
    useEffect(() => {
        setQuery(searchParams.get("q") || "");
    }, [searchParams]);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/search?q=${encodeURIComponent(query)}`);
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

                {/* Search Bar Section */}
                <div className="mb-12">
                    <h1 className="text-3xl font-bold mb-6 text-foreground">Arama Sonuçları</h1>
                    <form onSubmit={handleSearchSubmit} className="flex gap-4">
                        <div className="relative flex-1">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Ne aramıştınız? (Örn: BIM, Köprü, Mimari...)"
                                className="pl-10 h-12 text-lg bg-card/50 border-input shadow-sm"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <Button type="submit" size="lg" className="h-12 px-8">
                            Ara
                        </Button>
                    </form>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    {query.trim() === "" ? (
                        <div className="text-center py-20 opacity-50">
                            <SearchIcon className="h-16 w-16 mx-auto mb-4 stroke-1" />
                            <p className="text-xl">Aramaya başlamak için bir kelime yazın.</p>
                        </div>
                    ) : results.length > 0 ? (
                        <>
                            <p className="text-muted-foreground mb-4 font-mono text-sm">
                                &quot;{query}&quot; için <span className="font-bold text-foreground">{results.length}</span> sonuç bulundu.
                            </p>
                            <div className="grid gap-4">
                                {results.map((item, idx) => (
                                    <Link key={idx} href={item.url} className="group block">
                                        <div className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                            <div className="flex justify-between items-start gap-4 relative z-10">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.category === 'Ürün' ? 'bg-blue-500/10 text-blue-500' :
                                                            item.category === 'Çözüm' ? 'bg-orange-500/10 text-orange-500' :
                                                                item.category === 'Eğitim' ? 'bg-emerald-500/10 text-emerald-500' :
                                                                    item.category === 'Destek' ? 'bg-teal-500/10 text-teal-500' :
                                                                        'bg-gray-500/10 text-gray-500'
                                                            }`}>
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                                        {item.description}
                                                    </p>

                                                    {item.tags && item.tags.length > 0 && (
                                                        <div className="flex flex-wrap gap-2 mt-4">
                                                            {item.tags.slice(0, 4).map(tag => (
                                                                <span key={tag} className="text-xs text-muted-foreground/60 bg-muted/30 px-2 py-1 rounded">
                                                                    #{tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-full bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                                                    <ArrowRight className="h-5 w-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-12 bg-card/30 rounded-xl border border-border/50 border-dashed">
                            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                            <h3 className="text-lg font-medium mb-2">Sonuç bulunamadı</h3>
                            <p className="text-muted-foreground">
                                &quot;{query}&quot; ile ilgili bir içerik bulamadık. Daha genel kelimeler denemeyi veya anahtar kelimeleri kontrol etmeyi deneyin.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="min-h-screen pt-24 text-center">Yükleniyor...</div>}>
            <SearchPageContent />
        </Suspense>
    );
}
