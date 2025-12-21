"use client";

import Image from "next/image";
import { useState } from "react";
import { TrainingDetailTemplate } from "@/components/training/TrainingDetailTemplate";
// Use dynamic import for VideoModal to avoid hydration mismatch if needed, but standard import works here
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Import images
import imgBridge2022 from "@/assets/images/webinars/allplan-bridge-2022.png";
import imgEng2022 from "@/assets/images/webinars/allplan-engineering-2022.png";
import imgBridge2021 from "@/assets/images/webinars/allplan-bridge-2021.jpg";
import imgBimx5 from "@/assets/images/webinars/bimx5.jpg";
import imgQaSeminar from "@/assets/images/webinars/qa-seminar.jpg";
import imgBimx5Youtube from "@/assets/images/webinars/bimx5-youtube.jpeg";
import imgPrecast from "@/assets/images/webinars/allplan-precast.jpg";
import imgVisualScripting from "@/assets/images/webinars/visual-scripting.jpg";

export default function WebinarPage() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    return (
        <TrainingDetailTemplate
            title="Webinarlar"
            subtitle="Kısa, odaklanmış ve bilgi dolu çevrimiçi seminerler."
            overview="Webinarlarımız, belirli bir konu, yeni bir özellik veya sektörel bir gelişme hakkında hızlı ve yoğun bilgi aktarımı sağlar. Genellikle 45-60 dakika süren bu oturumlar, öğle molasında bile kendinizi geliştirmeniz için mükemmel bir fırsattır."
            heroCategory="BİLGİ PAYLAŞIMI"
            stats={[
                { value: "45-60", label: "Dakika Süre" },
                { value: "Ücretsiz", label: "Genellikle" },
                { value: "Uzman", label: "Konuşmacılar" },
                { value: "Soru", label: "Cevap Bölümü" }
            ]}
            benefits={[
                {
                    title: "Zaman Verimliliği",
                    description: "Kısa sürede, belirli bir konuda derinlemesine bilgi sahibi olun."
                },
                {
                    title: "Güncel Konular",
                    description: "Sektördeki en son trendleri, yönetmelik değişikliklerini ve yazılım yeniliklerini takip edin."
                },
                {
                    title: "Kolay Erişim",
                    description: "Kayıt olun ve linke tıklayın. Herhangi bir kurulum gerektirmez."
                },
                {
                    title: "Tekrar İzleme",
                    description: "Webinar kayıtlarına arşivimizden dilediğiniz zaman ulaşın."
                }
            ]}
            audience={[
                "Yenilikleri takip etmek isteyen yoğun profesyoneller",
                "Belirli bir özellik hakkında hızlı bilgi almak isteyen kullanıcılar",
                "Allplan potansiyelini keşfetmek isteyen yöneticiler",
                "Sürekli mesleki gelişimi hedefleyen öğrenciler ve akademisyenler"
            ]}
            ctaText="Webinar Takvimine Göz At"
            ctaSubject="Webinar Bilgi Talebi"
        >
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Kaydedilmiş Webinarlar</h2>
                        <p className="text-gray-400 max-w-2xl">
                            Kaçırdığınız veya tekrar izlemek istediğiniz webinarlarımıza buradan ulaşabilirsiniz.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recordedWebinars.map((webinar, index) => (
                            <div key={index} className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#3B82F6]/30 transition-all duration-300 flex flex-col">
                                <div className="aspect-video relative overflow-hidden bg-gray-900 group">
                                    <Image
                                        src={webinar.image}
                                        alt={webinar.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay for better readability */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

                                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded z-10 border border-white/10">
                                        {webinar.date}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                                        {webinar.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {webinar.description}
                                    </p>

                                    {webinar.youtubeId ? (
                                        <button
                                            onClick={() => setSelectedVideo(webinar.youtubeId)}
                                            className="inline-flex items-center text-[#3B82F6] font-medium text-sm hover:text-blue-400 transition-colors"
                                        >
                                            Hemen İzle
                                        </button>
                                    ) : (
                                        <span className="inline-flex items-center text-gray-500 font-medium text-sm cursor-not-allowed">
                                            Hemen İzle <code className="text-xs ml-2 opacity-50">(Arşivde)</code>
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Global Video Modal */}
                <Dialog open={!!selectedVideo} onOpenChange={(open) => !open && setSelectedVideo(null)}>
                    <DialogContent className="max-w-4xl w-[90vw] p-0 bg-black border-none ring-0 focus:ring-0 outline-none">
                        <div className="relative aspect-video w-full bg-black">
                            {selectedVideo && (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                    title="Webinar Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            )}
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </DialogContent>
                </Dialog>
            </section>
        </TrainingDetailTemplate>
    );
}

const recordedWebinars = [
    {
        title: "IMO / ALLPLAN BRIDGE 2022 WEBİNAR",
        date: "23 Kasım 2021",
        image: imgBridge2022,
        description: "Allplan Bridge eğitmeni Şaman Bayyurt yazılımın hangi ihtiyaçlara cevap verdiği, kimler için kullanışlı olduğu ve çalışma yöntemleri hakkında bilgiler verecektir.",
        youtubeId: "" // Add ID if available
    },
    {
        title: "IMO / ALLPLAN ENGINEERING 2022 WEBINAR",
        date: "16 Kasım 2021",
        image: imgEng2022,
        description: "Allplan ile her türlü gerçek 3B yapınızı modelleyip, donatıyı 3B olarak nasıl döşeyebileceğinizi ve bu yönteminin avantajlarını keşfedin.",
        youtubeId: ""
    },
    {
        title: "Allplan Bridge 2021",
        date: "6 Ağustos 2021",
        image: imgBridge2021,
        description: "Allplan Bridge 2021 sürümü ile gelen yenilikler ve köprü tasarımı süreçleri üzerine kapsamlı bir webinar.",
        youtubeId: ""
    },
    {
        title: "BIMX5 Online Webinar - İmar Yönetmeliği",
        date: "13 Temmuz 2021",
        image: imgBimx5,
        description: "BIMX5 ve İmar Yönetmeliği uyumluluğu üzerine detaylı inceleme.",
        youtubeId: ""
    },
    {
        title: "BIMX5 Online Webinar - Genel",
        date: "9 Temmuz 2021",
        image: imgBimx5,
        description: "BIMX5 araçlarının genel tanıtımı ve kullanım alanları.",
        youtubeId: ""
    },
    {
        title: "BIMX5 Online Webinar - 2B DWG Converter",
        date: "6 Temmuz 2021",
        image: imgBimx5,
        description: "2B DWG dosyalarını BIM modellerine dönüştürme süreçleri ve BIMX5 Converter özellikleri.",
        youtubeId: ""
    },
    {
        title: "Bimplus Online Webinar: BIM İşbirliği",
        date: "2 Temmuz 2021",
        image: imgQaSeminar,
        description: "Günlük openBIM iş akışınız için özel yenilikler ve BIM işbirliği çözümleri.",
        youtubeId: ""
    },
    {
        title: "Bimfili Youtube Kanalı: BIMX5 Nedir?",
        date: "10 Haziran 2021",
        image: imgBimx5Youtube,
        description: "Ahmet Melih Dinekli ve Ferdi Dinekli'nin anlatımı ile 'BIMX5 Nedir?' ve nasıl kullanılır?",
        youtubeId: "1623090584242" // Assumed video ID or needs verification, keeping placeholder logic for now
    },
    {
        title: "ALLPLAN PRECAST SEVİYENİZİ YÜKSELTİN",
        date: "8 Haziran 2021",
        image: imgPrecast,
        description: "Yapısal detaycılar ve yükleniciler için tüm süreçleri destekleyen üst düzey BIM yazılımı Allplan Precast.",
        youtubeId: ""
    },
    {
        title: "Soru Cevap Semineri",
        date: "15 Ocak 2021",
        image: imgQaSeminar,
        description: "Allplan Architecture ve Engineering ile ilgili teknik sorular ve kullanım ipuçları üzerine interaktif oturum.",
        youtubeId: ""
    },
    {
        title: "Allplan Engineering 2021 ve Yenilikler",
        date: "7 Ocak 2021",
        image: imgQaSeminar,
        description: "Parametrik tasarım, modelleme ve Allplan Engineering 2021 sürümünün getirdiği tüm yenilikler.",
        youtubeId: ""
    },
    {
        title: "Allplan 2018-2021: İpuçları",
        date: "30 Aralık 2020",
        image: imgQaSeminar,
        description: "Ayarlar, seçenekler ve verimlilik artırıcı ipuçları ile Allplan deneyiminizi iyileştirin.",
        youtubeId: ""
    },
    {
        title: "Görsel Komut Dosyalarına Giriş (Visual Scripting)",
        date: "19 Şubat 2020",
        image: imgVisualScripting,
        description: "Visual Scripting dünyasına giriş yapın ve parametrik tasarımın gücünü keşfedin.",
        youtubeId: ""
    }
];
