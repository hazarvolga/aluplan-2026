"use client"
import SolutionHero from "@/components/SolutionHero";
import SectionHeader from "@/components/SectionHeader";

export default function AllplanBulutContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SolutionHero
        badge="ALLPLAN Cloud ve Genel Geliştirmeler"
        title="DAHA İYİ BİR GELECEK İNŞA ETMEK İÇİN TASARLANDI"
        subtitle="ALLPLAN 2026 ile Yeni Özellikler – ALLPLAN Cloud ve Genel Geliştirmeler"
        description=""
      />

      {/* General Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Genel Ana Özellikler ve Tüm Kullanıcılar için Geliştirmeler"
          />

          {/* Content will be added here */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg">
              Özellikler yakında eklenecek...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
