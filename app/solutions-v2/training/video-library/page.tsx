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

                    {/* YouTube Subscribe Banner */}
                    <div className="mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-900/40 to-[#050505] border border-red-900/30">
                        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                            <Youtube className="w-64 h-64 text-red-600" />
                        </div>
                        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-red-600/20 p-2 rounded-lg text-red-500">
                                        <Youtube className="w-6 h-6" />
                                    </div>
                                    <span className="text-red-500 font-bold uppercase tracking-wider text-sm">Resmi Kanal</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Allplan Türkiye YouTube Kanalına Abone Olun</h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    En yeni eğitim videoları, ipuçları, webinar kayıtları ve sektörel gelişmelerden anında haberdar olmak için kanalımıza abone olmayı unutmayın.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <a
                                    href="https://www.youtube.com/@AllplanTurkey?sub_confirmation=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-red-900/20 transform hover:-translate-y-1"
                                >
                                    <Youtube className="w-6 h-6" />
                                    ABONE OL
                                </a>
                            </div>
                        </div>
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
        title: "SDS2 Detaylandırma",
        description: "SDS2 ürün tanıtımı ve lansman videoları.",
        url: "/solutions-v2/training/video-library/sds2-intro"
    },
    {
        title: "Konut İnşaatı İş Akışları",
        description: "Konut proje teslimi, tasarım ve şantiye planlama süreçleri.",
        url: "/solutions-v2/training/video-library/konut-insaati"
    },
    {
        title: "Bridge Workflow 2022",
        description: "2022 Köprü tasarımı ve iş akışları eğitim serisi.",
        url: "/solutions-v2/training/video-library/bridge-workflow-2022"
    },
    {
        title: "Otomatik Donatı (PythonPart)",
        description: "Otomatik donatılandırma ve PythonPart araçları kullanımı.",
        url: "/solutions-v2/training/video-library/otomatik-donati"
    },
    {
        title: "ALLPLAN QuickStart: Buildings",
        description: "Allplan ile bina modellemeye hızlı başlangıç rehberi (9 Ders).",
        url: "/solutions-v2/training/video-library/quickstart-buildings"
    },
    {
        title: "ALLPLAN for Reinforcement",
        description: "Betonarme detaylandırma, donatı modelleme ve raporlama eğitimleri (18 Video).",
        url: "/solutions-v2/training/video-library/allplan-reinforcement"
    },
    {
        title: "Allplan Campus Tutorials 2019-2022",
        description: "Öğrenciler için kapsamlı Almanca eğitim serisi (2019-2022).",
        url: "/solutions-v2/training/video-library/campus-tutorials-2019-2022"
    },
    {
        title: "ALLPLAN Pythonparts Youtube Kanalı",
        description: "PythonParts ile parametrik obje geliştirme ve script örnekleri.",
        url: "#"
    }
];
