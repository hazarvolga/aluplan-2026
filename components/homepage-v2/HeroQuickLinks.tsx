import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function HeroQuickLinks() {
    return (
        <section aria-label="ALLPLAN ürün ve eğitim bağlantıları" className="border-y border-border bg-muted/30 px-6 py-4 md:px-12 md:py-5 lg:px-24">
            <div className="mx-auto max-w-[1400px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                            <Link href="/products/allplan-2026-yenilikler" className="group flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2.5 text-xs sm:text-sm text-center transition-colors hover:bg-foreground/90">
                                <span className="font-medium">
                                    Yenilikleri İncele
                                </span>
                                <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link href="/products/allplan-2026" className="group flex items-center justify-center gap-2 border border-foreground/20 bg-foreground/5 px-4 py-2.5 text-xs sm:text-sm text-center backdrop-blur-md transition-all hover:bg-foreground/10 text-foreground">
                                <Play className="h-3.5 w-3.5 shrink-0 fill-current" />
                                <span className="font-medium">ALLPLAN 2026 İncele</span>
                            </Link>

                            <Link href="/solutions/allplan-bulut-hizmetleri" className="group flex items-center justify-center gap-2 border border-foreground/20 bg-foreground/5 px-4 py-2.5 text-xs sm:text-sm text-center backdrop-blur-md transition-all hover:bg-foreground/10 text-foreground">
                                <span className="font-medium">ALLPLAN CLOUD VE Genel Geliştirmeler</span>
                            </Link>

                            <Link href="/products/allplan-cloud-services" className="group flex items-center justify-center gap-2 border border-foreground/20 bg-foreground/5 px-4 py-2.5 text-xs sm:text-sm text-center backdrop-blur-md transition-all hover:bg-foreground/10 text-foreground">
                                <span className="font-medium">ALLPLAN CLOUD Hizmetleri</span>
                            </Link>
                        </div>
                        <div className="mt-2">
                            <Link href="/solutions-v2/training/video-library" className="group flex items-center justify-center gap-2 border border-foreground/20 bg-foreground/5 px-4 py-2.5 text-xs sm:text-sm text-center backdrop-blur-md transition-all hover:bg-foreground/10 text-foreground text-center">
                                <Play className="h-3.5 w-3.5 shrink-0 fill-current" />
                                <span className="font-medium">Eğitim Videoları</span>
                            </Link>
                        </div>
            </div>
        </section>
    );
}
