"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { Play, PlaySquare, ListVideo } from "lucide-react";
import Image from "next/image";
import { helloAllplan2024Data } from "../data/hello-allplan-2024";
import { roadDesignData, bridgeWorkflowsData, campusDeData, campusEnData, addonGeometryData, ax3000Data } from "../data/additional-playlists";

// This would typically be fetched based on the playlistId slug
const playlistMap: Record<string, { title: string; subtitle: string; videos: typeof helloAllplan2024Data }> = {
    "hello-allplan-2024": {
        title: "Hello Allplan! 2024",
        subtitle: "Allplan 2024 ile gelen tüm yeni özellikler ve geliştirmeler.",
        videos: helloAllplan2024Data
    },
    "road-design": {
        title: "Allplan Road Design Workflow",
        subtitle: "Yol tasarımı iş akışları ve yol modülü eğitim videoları.",
        videos: roadDesignData
    },
    "bridge-workflows": {
        title: "Allplan Bridge Workflows",
        subtitle: "Köprü tasarımı süreçleri ve BIM entegrasyonu.",
        videos: bridgeWorkflowsData
    },
    "campus-de": {
        title: "Campus Tutorials (Deutsch)",
        subtitle: "Öğrenciler için Almanca Allplan eğitim serisi.",
        videos: campusDeData
    },
    "campus-en": {
        title: "Campus Tutorials (English)",
        subtitle: "Öğrenciler için İngilizce Allplan eğitim serisi.",
        videos: campusEnData
    },
    "addon-geometry": {
        title: "Allplan Add On Geometry Tools",
        subtitle: "Topografik ve geometrik düzenleme araçları eğitimi.",
        videos: addonGeometryData
    },
    "ax3000": {
        title: "AX3000 - MEP & Enerji",
        subtitle: "Mekanik, Elektrik, Tesisat ve Enerji Kimlik Belgesi (EKB) eğitimleri.",
        videos: ax3000Data
    }
};

export default function PlaylistPage({ params }: { params: { playlistId: string } }) {
    const playlistId = params.playlistId;
    const playlist = playlistMap[playlistId] || playlistMap["hello-allplan-2024"]; // Fallback to our demo data
    const [currentVideo, setCurrentVideo] = useState(playlist.videos[0]);

    return (
        <PageWrapper>
            <HeroInternal
                category="VİDEO EĞİTİM SERİSİ"
                title={playlist.title}
                subtitle={playlist.subtitle}
            />

            <section className="py-12 px-6 md:px-12 lg:px-24 bg-[#050505] min-h-screen">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Video Player Area */}
                        <div className="lg:col-span-2">
                            <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
                                <div className="aspect-video w-full bg-black relative">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
                                        title={currentVideo.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="p-6 md:p-8">
                                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-start gap-4">
                                        <PlaySquare className="h-8 w-8 text-[#3B82F6] shrink-0 mt-1" />
                                        {currentVideo.title}
                                    </h1>
                                    <p className="text-gray-400 leading-relaxed">
                                        Bu eğitim videosunda {currentVideo.title} konusu detaylı olarak incelenmektedir.
                                        Allplan 2024&apos;ün sunduğu yenilikleri keşfedin.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Playlist Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[600px] lg:h-[800px] sticky top-8">
                                <div className="p-6 border-b border-white/5 bg-[#161616]">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <ListVideo className="h-5 w-5 text-[#3B82F6]" />
                                        Oynatma Listesi
                                        <span className="ml-auto text-xs bg-white/10 px-2 py-1 rounded text-gray-400">
                                            {playlist.videos.indexOf(currentVideo) + 1} / {playlist.videos.length}
                                        </span>
                                    </h3>
                                </div>

                                <div className="overflow-y-auto flex-grow p-2 custom-scrollbar">
                                    <div className="space-y-1">
                                        {playlist.videos.map((video, index) => (
                                            <button
                                                key={video.id}
                                                onClick={() => setCurrentVideo(video)}
                                                className={`w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-200 group ${currentVideo.id === video.id
                                                    ? "bg-[#3B82F6]/10 border border-[#3B82F6]/30"
                                                    : "hover:bg-white/5 border border-transparent"
                                                    }`}
                                            >
                                                <div className="relative w-32 aspect-video bg-black rounded-lg overflow-hidden shrink-0 mt-1">
                                                    <Image
                                                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                                        alt={video.title}
                                                        fill
                                                        className={`object-cover ${currentVideo.id === video.id ? "" : "opacity-70 group-hover:opacity-100"}`}
                                                    />
                                                    {currentVideo.id === video.id && (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                                            <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center animate-pulse">
                                                                <Play className="h-4 w-4 text-white ml-0.5" fill="currentColor" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <div className={`text-sm font-medium mb-1 line-clamp-2 ${currentVideo.id === video.id ? "text-[#3B82F6]" : "text-gray-300 group-hover:text-white"
                                                        }`}>
                                                        {index + 1}. {video.title}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        Video Ders
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PageWrapper>
    );
}
