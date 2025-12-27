"use client"
import { HeroInternal } from "@/components/layout-v2/HeroInternal";

export default function AllplanBulutContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroInternal
        topTitle="ALLPLAN Cloud ve Genel Geliştirmeler"
        title="DAHA İYİ BİR GELECEK İNŞA ETMEK İÇİN TASARLANDI"
        subtitle="ALLPLAN 2026 ile Yeni Özellikler – ALLPLAN Cloud ve Genel Geliştirmeler"
      />

      {/* Content sections will be added here */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground text-lg">
              İçerik yakında eklenecek...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
