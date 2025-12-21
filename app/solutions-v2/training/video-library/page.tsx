"use client";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { Youtube, ExternalLink, PlaySquare } from "lucide-react";

export default function VideoLibraryPage() {
    return (
        <PageWrapper>
            <HeroInternal
                category="GÖRSEL EĞİTİM"
                title="Video Kütüphanesi"
                subtitle="İhtiyacınız olan bilgiye görsel olarak ulaşın."
            />

            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Önerilen Oynatma Listeleri ve Kanallar</h2>
                        <p className="text-gray-400 max-w-2xl">
                            Sizin için derlediğimiz en popüler ve faydalı video kaynak liste ve kanalları.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {playlists.map((item, index) => (
                            <a
                                key={index}
                                href={item.url || "#"}
                                target={item.url?.startsWith("http") ? "_blank" : "_self"}
                                rel={item.url?.startsWith("http") ? "noopener noreferrer" : ""}
                                className={`group relative bg-[#111] border rounded-2xl p-6 hover:bg-[#161616] hover:border-[#3B82F6]/30 transition-all duration-300 flex flex-col items-start ${item.url?.startsWith("/solutions-v2")
                                        ? "border-red-900"
                                        : "border-white/5"
                                    }`}
                            >
                                <div className="mb-6 p-4 rounded-xl bg-red-600/10 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                    <Youtube className="h-8 w-8" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 pr-8 group-hover:text-red-500 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                                    {item.description || "Allplan için hazırlanmış eğitici videolar ve içerikler."}
                                </p>

                                <div className="mt-auto flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                                    İzleme Listesini İncele <ExternalLink className="h-4 w-4" />
                                </div>

                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
                                    <PlaySquare className="h-12 w-12" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}

const playlists = [
    {
        title: "Youtube Allplan Türkiye",
        description: "Allplan Türkiye resmi Youtube kanalı. Türkçe webinar kayıtları, ipuçları ve yenilikler.",
        url: "https://www.youtube.com/@AllplanTurkiye"
    },
    {
        title: "Youtube Allplan English",
        description: "Allplan global İngilizce içerikleri, uluslararası örnekler ve eğitimler.",
        url: "https://www.youtube.com/@AllplanInternational"
    },
    {
        title: "Youtube Allplan Global",
        description: "Dünya genelinden Allplan kullanıcı hikayeleri ve küresel etkinlikler.",
        url: "https://www.youtube.com/allplan"
    },
    {
        title: "Youtube Allplan Precast",
        description: "Prekast beton tasarımı ve üretimi üzerine özelleşmiş Almanca/İngilizce içerikler.",
        url: "https://www.youtube.com/c/AllplanPrecast"
    },
    {
        title: "Hello Allplan 2024! – Türkçe",
        description: "Allplan 2024 sürümü ile gelen tüm yeniliklerin Türkçe anlatımı.",
        url: "/solutions-v2/training/video-library/hello-allplan-2024"
    },
    {
        title: "Allplan Add On Geometry Tools",
        description: "Topografik ve geometrik düzenleme araçları, arazi modelleme eğitimleri.",
        url: "/solutions-v2/training/video-library/addon-geometry"
    },
    {
        title: "AX3000 - MEP & Enerji",
        description: "Mekanik, Elektrik, Tesisat ve Enerji Kimlik Belgesi (EKB) eğitimleri.",
        url: "/solutions-v2/training/video-library/ax3000"
    },
    {
        title: "Hello Allplan 2023! – Türkçe",
        description: "2023 sürümü yenilikleri, ipuçları ve geçiş rehberleri.",
        url: "#"
    },
    {
        title: "Hello Allplan 2022! – Türkçe",
        description: "2022 versiyonu özellikleri ve kullanım teknikleri.",
        url: "#"
    },
    {
        title: "Youtube CDS Allplan Add-On",
        description: "CDS (Campus Delivery System) ve eklenti geliştirmeleri üzerine videolar.",
        url: "#"
    },
    {
        title: "Allplan Road Design Workflow",
        description: "Yol tasarımı iş akışları ve yol modülü eğitim videoları.",
        url: "/solutions-v2/training/video-library/road-design"
    },
    {
        title: "Allplan Bridge Workflows",
        description: "Köprü tasarımı süreçleri ve BIM entegrasyonu.",
        url: "/solutions-v2/training/video-library/bridge-workflows"
    },
    {
        title: "Campus Tutorials (Deutsch)",
        description: "Öğrenciler için detaylı Almanca eğitim serisi.",
        url: "/solutions-v2/training/video-library/campus-de"
    },
    {
        title: "Campus Tutorials (English)",
        description: "Öğrenciler için kapsamlı İngilizce eğitim serisi.",
        url: "/solutions-v2/training/video-library/campus-en"
    },
    {
        title: "Allplan Bridge",
        description: "Allplan Bridge modülünün genel tanıtımı ve özellikleri.",
        url: "#"
    },
    {
        title: "Allplan Bridge Tutorials",
        description: "Adım adım köprü modelleme ve analiz rehberleri.",
        url: "#"
    },
    {
        title: "ALLPLAN Pythonparts Youtube Kanalı",
        description: "PythonParts ile parametrik obje geliştirme ve script örnekleri.",
        url: "#"
    }
];
