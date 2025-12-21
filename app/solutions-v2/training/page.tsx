"use client"
import React, { useState } from "react";
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { motion } from "framer-motion";
import { CardV2 } from "@/components/layout-v2/CardV2";
import { Monitor, Video, Users, MapPin, User, Laptop, GraduationCap, Quote, ArrowRight, CheckCircle2, PlaySquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/layout-v2/ContactModal";

// Training Formats Data
const formats = [
    {
        title: "Online",
        description: "Mekandan bağımsız, web tabanlı, interaktif ve çok katılımcılı eğitimler.",
        icon: Monitor,
        href: "/solutions-v2/training/online"
    },
    {
        title: "Webinar",
        description: "Web tabanlı sunumlar, çoklu katılımcı dinleyici modunda ve chat fonksiyonu ile.",
        icon: Video,
        href: "/solutions-v2/training/webinar"
    },
    {
        title: "Yüz Yüze (Presence)",
        description: "Yerinde, interaktif ve çok katılımcılı pratik eğitimler.",
        icon: Users,
        href: "/solutions-v2/training/classroom"
    },
    {
        title: "Etkinlik / Fuar",
        description: "ALLPLAN ekibiyle kişisel iletişim imkanı sunan çeşitli formatlarda yerinde etkinlikler.",
        icon: MapPin,
        href: "/solutions-v2/training/events"
    },
    {
        title: "Bireysel",
        description: "Esnek planlanabilir birimler. İçeriği, yeri, zamanı ve kapsamı siz belirlersiniz.",
        icon: User,
        href: "/solutions-v2/training/individual"
    },
    {
        title: "E-Learning",
        description: "Mekandan bağımsız, web tabanlı, interaktif ve bireysel öğrenme.",
        icon: Laptop,
        href: "/solutions-v2/training/e-learning"
    }
];

// Training Categories for Tabs
const trainingCategories = [
    {
        value: "interest",
        label: "İlgi Duyanlar",
        title: "Herkes İçin ALLPLAN!",
        description: "Disipline özgü giriş eğitimlerimizle, ALLPLAN CAD programına, yazılımın temel konseptine ve çalışma alanınız için sunduğumuz araçlara genel bir bakış elde edin.",
        features: ["Genel Bakış", "Temel Konseptler", "Sektörel Araçlar"],
        link: "/solutions-v2/training/quick-start",
        cta: "Hızlı Başlangıç", // Kept as Link
        image: "/images/training-interest.jpg",
        icon: GraduationCap
    },
    {
        value: "video-library",
        label: "Video Kütüphanesi",
        title: "İzleyin ve Öğrenin!",
        description: "Geniş video arşivimizde Allplan özelliklerini, ipuçlarını, iş akışlarını ve 'Nasıl Yapılır?' rehberlerini bulabilirsiniz.",
        features: ["Youtube Oynatma Listeleri", "Özellik Tanıtımları", "Versiyon Yenilikleri"],
        link: "/solutions-v2/training/video-library",
        cta: "Videolara Göz Atın",
        action: "link",
        image: "/images/webinars/bimx5-youtube.jpeg", // Using an existing asset as placeholder
        icon: PlaySquare
    },
    {
        value: "basic",
        label: "Temel",
        title: "ALLPLAN Dünyasına Giriş!",
        description: "Birkaç gün süren temel eğitimlerimizde, mesleki alanınız ne olursa olsun, ALLPLAN ile etkili çalışmak ve programın tam potansiyelini kullanmak için gerekli tüm bilgi ve becerileri sağlıyoruz.",
        features: ["Kapsamlı Temel Bilgiler", "Etkili Çalışma Yöntemleri", "Program Potansiyeli"],
        link: "#",
        cta: "İletişim Formu", // Changed to Modal Trigger
        action: "modal",
        image: "/images/training-basic.jpg",
        icon: CheckCircle2
    },
    {
        value: "advanced",
        label: "İleri Seviye",
        title: "ALLPLAN Uzmanı Olma Yolunda!",
        description: "Temel eğitimlerin üzerine inşa edilen, alanınıza özel olarak tasarlanmış ileri seviye seminerlerle bilginizi derinleştirin ve yazılım fonksiyonlarını tam kapasiteyle kullanın.",
        features: ["İleri Modül Bilgisi", "Sektörel Derinleşme", "Uzmanlık Seviyesi"],
        link: "#",
        cta: "İletişim Formu",
        action: "modal",
        image: "/images/training-advanced.jpg",
        icon: CheckCircle2
    },
    {
        value: "special",
        label: "Özel",
        title: "Özel Konularda Derin Bilgi!",
        description: "Mevcut kapsamlı ALLPLAN bilginizin üzerine, özel eğitimlerimiz belirli bir program alanına veya özel bir konunun ALLPLAN ile uygulanmasına dair derinlemesine içgörü sağlar.",
        features: ["Spesifik Konular", "Derinlemesine İçgörü", "Uygulama Pratikleri"],
        link: "#",
        cta: "İletişim Formu",
        action: "modal",
        image: "/images/training-special.jpg",
        icon: CheckCircle2
    },
    {
        value: "bim",
        label: "BIM",
        title: "BIM Üzerine Uzmanlık!",
        description: "BIM odaklı eğitimlerimizde, Yapı Bilgi Modellemesi (BIM) konusunda yazılımlar arası teori veya pratik ALLPLAN uygulamalarını öğrenin. Sertifika alma imkanı sunar.",
        features: ["BIM Teorisi", "Pratik Uygulama", "Sertifikasyon İmkanı"],
        link: "#",
        cta: "İletişim Formu",
        action: "modal",
        image: "/images/training-bim.jpg",
        icon: CheckCircle2
    }
];

const testimonials = [
    {
        quote: "Çok karmaşık soyut konuları pratik ve basit bir şekilde iletme yeteneğine sahipsiniz. Eğitim bana ve ekibime büyük bir bilgi artışı sağladı.",
        author: "BIM Yöneticisi"
    },
    {
        quote: "Eğitim çok ilginç, yararlı ve eğlenceliydi.",
        author: "Proje Yöneticisi CAD"
    },
    {
        quote: "ALLPLAN'da özel sorunlar için bile her zaman destek alırsınız.",
        author: "BIM Yöneticisi"
    },
    {
        quote: "BIM konusunda uzmanlık benim için dokunulmaz. ALLPLAN'da özellikler (attributes) konusunda ne kadar çok şey olduğunu görmek beni şaşırttı.",
        author: "Genel Müdür"
    }
];

export default function TrainingPage() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [contactSubject, setContactSubject] = useState("");

    const handleOpenModal = (subject: string) => {
        setContactSubject(subject);
        setIsContactModalOpen(true);
    };

    return (
        <PageWrapper>
            <HeroInternal
                category="PROFESYONEL HİZMETLER"
                title="ALLPLAN Eğitimleri"
                subtitle="Uzmanlığınızdan faydalanın ve profesyonel bilgi ve becerilerinizi bir üst seviyeye taşıyın!"
            />

            {/* Main Tabs Section */}
            <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Genişletilmiş Eğitim ve <span className="text-[#3B82F6]">Webinar Teklifimizi Keşfedin</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Profesyonel gelişiminiz için teklifimiz.
                        </p>
                    </div>

                    <Tabs defaultValue="interest" className="w-full">
                        <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-12 h-auto p-0">
                            {trainingCategories.map((cat) => (
                                <TabsTrigger
                                    key={cat.value}
                                    value={cat.value}
                                    className="px-6 py-3 rounded-full border border-white/10 bg-[#111] text-gray-400 data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white data-[state=active]:border-[#3B82F6] transition-all duration-300"
                                >
                                    {cat.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {trainingCategories.map((cat) => (
                            <TabsContent key={cat.value} value={cat.value} className="focus:outline-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid lg:grid-cols-2 gap-12 items-center bg-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-white/5"
                                >
                                    <div className="order-2 lg:order-1">
                                        <div className="inline-flex items-center gap-2 text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-6 px-3 py-1 bg-[#3B82F6]/10 rounded-full">
                                            <cat.icon className="h-4 w-4" />
                                            {cat.label}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-6">{cat.title}</h3>
                                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                            {cat.description}
                                        </p>

                                        <ul className="space-y-4 mb-10">
                                            {cat.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                                    <div className="h-6 w-6 rounded-full bg-[#3B82F6]/20 flex items-center justify-center shrink-0">
                                                        <CheckCircle2 className="h-3.5 w-3.5 text-[#3B82F6]" />
                                                    </div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {cat.action === "modal" ? (
                                            <Button
                                                onClick={() => handleOpenModal(`Eğitim Teklifi: ${cat.title}`)}
                                                className="bg-[#3B82F6] hover:bg-[#2563eb] text-white px-8 py-6 text-lg rounded-full"
                                            >
                                                <span className="flex items-center gap-2">
                                                    {cat.cta}
                                                    <ArrowRight className="h-5 w-5" />
                                                </span>
                                            </Button>
                                        ) : (
                                            <Button asChild className="bg-[#3B82F6] hover:bg-[#2563eb] text-white px-8 py-6 text-lg rounded-full">
                                                <Link href={cat.link} className="flex items-center gap-2">
                                                    {cat.cta}
                                                    <ArrowRight className="h-5 w-5" />
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                    <div className="order-1 lg:order-2 relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-[#111]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#050505] flex items-center justify-center">
                                            <cat.icon className="h-24 w-24 text-white/5" />
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Formats Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-y border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Eğitim Formatlarımız</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Size en uygun öğrenme yöntemini seçin. İster online, ister yerinde, isterseniz bireysel.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {formats.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <a
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                                    className="group block h-full p-8 rounded-2xl border border-white/5 bg-[#050505] hover:border-[#3B82F6]/30 hover:bg-[#0f0f0f] transition-all duration-300"
                                >
                                    <div className="mb-6 p-4 rounded-xl bg-[#111] w-fit text-gray-400 group-hover:text-[#3B82F6] group-hover:bg-[#3B82F6]/10 transition-colors">
                                        <item.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>

                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-[#3B82F6] transition-colors">
                                        Detayları Gör <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Müşterilerimiz Ne Diyor?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 relative">
                                <Quote className="h-8 w-8 text-[#3B82F6]/20 mb-6" />
                                <p className="text-gray-300 mb-6 italic leading-relaxed min-h-[100px]">
                                    &quot;{t.quote}&quot;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#111] flex items-center justify-center border border-white/5 font-bold text-gray-500">
                                        {t.author.charAt(0)}
                                    </div>
                                    <span className="text-sm font-bold text-[#3B82F6]">{t.author}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0a0a0a] to-black border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="bg-[#111] rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 text-white/60 font-medium mb-6 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm border border-white/5">
                                    <GraduationCap className="h-5 w-5" />
                                    Öğrenciler ve Okullar İçin
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Okul, Öğretim ve Çalışmalar İçin <span className="text-[#3B82F6]">Teklifimiz</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Gelecek okul veya çalışma projeleri için genel temellerin yanı sıra, çalışan öğrenci olarak iş başvurusu gibi eğitimdeki özel durumlar için odaklanmış teklifler sunuyoruz.
                                </p>
                                <Button
                                    size="lg"
                                    onClick={() => handleOpenModal("Okul ve Öğrenciler İçin Teklif")}
                                    className="bg-white text-black hover:bg-gray-200 rounded-full px-8"
                                >
                                    <span className="flex items-center gap-2">
                                        İletişim Formu <ArrowRight className="h-5 w-5" />
                                    </span>
                                </Button>
                            </div>
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group">
                                <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                    {/* Simplified visual representation instead of missing image */}
                                    <div className="text-center">
                                        <GraduationCap className="h-24 w-24 text-white/10 mx-auto mb-4" />
                                        <span className="text-white/20 font-bold text-xl uppercase tracking-widest">Campus</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                defaultSubject={contactSubject}
            />
        </PageWrapper>
    );
}
