"use client"
import React from "react";
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import SolutionHero from "@/components/SolutionHero";
import SideImageSection from "@/components/SideImageSection";
import ChallengesSection from "@/components/ChallengesSection";
import StatsSection from "@/components/StatsSection";
import { motion } from "framer-motion";
import Link from "next/link";
import productArch from "@/assets/product-architecture.jpg";
import productEng from "@/assets/product-engineering.jpg";
import productBridge from "@/assets/product-bridge.jpg";
import productPrecast from "@/assets/product-precast.jpg";
import Image from "next/image";
import { Layers, TrendingUp, Award, ArrowRight } from "lucide-react";

export default function AllplanIndustryPage() {
    return (
        <PageWrapper>
            <SolutionHero
                badge="ENDÜSTRİ ÇÖZÜMLERİ"
                title="ALLPLAN"
                subtitle="TASARIMDAN İNŞAATA KESİNTİSİZ İŞ AKIŞLARI İÇİN EN KAPSAMLI BIM ÇÖZÜMÜ"
                description=""
                primaryButton={{
                    text: "Hemen Başlayın",
                    href: "/contact"
                }}
            />

            {/* What is Allplan Section - Custom Video Section */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-6 px-3 py-1 bg-[#3B82F6]/10 rounded-full">
                            <Layers className="h-4 w-4" />
                            ALLPLAN NEDİR?
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Sektörün En Kapsamlı BIM Çözümü
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            ALLPLAN; mimarlar, mühendisler ve inşaat profesyonelleri için tasarım ve inşaat süreçlerini projenin her aşamasında destekleyen ve bütünleştiren disiplinler arası bir BIM yazılım çözümüdür.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Mimari ve iç mimariden, yapısal ve MEP mühendisliğine, altyapı ve köprü mühendisliğinden, betonarme ve prekast detaylandırmaya ve şantiye planlamasına kadar.",
                                "Konsept tasarımdan detaylı uygulama çıktılarına kadar tüm disiplinlerde verimli iş akışlarını destekleyen güçlü araçlar.",
                                "Daha başarılı projelerin teslimi, koordinasyonu ve verimli işbirliği için entegre bulut teknolojisi."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50">
                        <div className="aspect-video w-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/tFnwOyX7ncI"
                                title="ALLPLAN Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges Section - V1 Component */}
            <ChallengesSection
                theme="v2-dark"
                items={[
                    "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri.",
                    "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri.",
                    "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri."
                ]}
            />

            {/* Benefits Stats Section - V1 Component */}
            <StatsSection
                theme="v2-dark"
                variant="animated"
                items={[
                    { label: "YÜKSEK PERFORMANS", value: "45%", description: "Paydaş onayı ve zamanında inşaat için fikirlerden en yüksek ayrıntı seviyelerine daha hızlı geçiş." },
                    { label: "DAHA FAZLA HASSASİYET", value: "65%", description: "Daha erken bir aşamada daha hassas verilerin verimli üretimi, güvenilir maliyet kontrolü sağlar." },
                    { label: "DAHA FAZLA PROJE KAZAN", value: "35%", description: "Tasarım verimliliğini artırır, zamanında teslimatı destekler, daha yüksek kalitede, daha fazla proje." }
                ]}
            />

            {/* Explore Allplan Section - New Request */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">ALLPLAN'I KEŞFEDİN</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Yapısal analiz iş akışları, gelişmiş detaylandırma yetenekleri ve yerleşik şantiye planlama araçları ile donatılmış, tasarımdan inşaata süreçlerini sunan tek BIM çözümüdür. AEC firmalarının konseptten detaylı tasarıma ve projenin sahada tam olarak nasıl inşa edileceğinin planlanmasına kadar tüm süreci tek bir model üzerinden kesintisiz yönetmesini sağlar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* BİNA TASARIMI Card */}
                        <div className="bg-[#050505] rounded-2xl border border-white/10 overflow-hidden group hover:border-[#3B82F6]/50 transition-all">
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src="https://aluplan.com.tr/wp-content/uploads/2022/09/2023-solutions-building-Design-allplan-turkey-370x275.png"
                                    alt="BİNA TASARIMI"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white mb-6 pl-4 border-l-4 border-[#3B82F6]">BİNA TASARIMI</h3>
                                <ul className="space-y-3">
                                    {[
                                        { name: "Mimari", href: "/solutions/architecture" },
                                        { name: "Strüktürel Mühendislik", href: "/solutions/structural" },
                                        { name: "MEP", href: "/solutions/mep" },
                                        { name: "ALLPLAN ENDÜSTRİ ÇÖZÜMLERİ", href: "/solutions/allplan-industry" },
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <a href={item.href} className="flex items-center text-gray-400 hover:text-[#3B82F6] transition-colors group/link">
                                                <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* ALTYAPI TASARIMI Card */}
                        <div className="bg-[#050505] rounded-2xl border border-white/10 overflow-hidden group hover:border-[#3B82F6]/50 transition-all">
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src="https://aluplan.com.tr/wp-content/uploads/2022/09/solutions-Infrastructure-Design-370x275.png"
                                    alt="ALTYAPI TASARIMI"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white mb-6 pl-4 border-l-4 border-[#3B82F6]">ALTYAPI TASARIMI</h3>
                                <ul className="space-y-3">
                                    {[
                                        { name: "Altyapı Mühendisliği", href: "/solutions/infrastructure" },
                                        { name: "Yol ve Demiryolu Tasarımı", href: "/solutions/road-railway" },
                                        { name: "Köprü Tasarımı", href: "/solutions/bridge-design" },
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <a href={item.href} className="flex items-center text-gray-400 hover:text-[#3B82F6] transition-colors group/link">
                                                <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* İNŞAAT PLANLAMASI Card */}
                        <div className="bg-[#050505] rounded-2xl border border-white/10 overflow-hidden group hover:border-[#3B82F6]/50 transition-all">
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src="https://aluplan.com.tr/wp-content/uploads/2022/09/2023-prefabrication-product-allplan-turkey-370x270.png"
                                    alt="İNŞAAT PLANLAMASI"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white mb-6 pl-4 border-l-4 border-[#3B82F6]">İNŞAAT PLANLAMASI</h3>
                                <ul className="space-y-3">
                                    {[
                                        { name: "Prekast Üretimi", href: "/solutions/precast" },
                                        { name: "Çelik Detaylandırma & İmalat", href: "/solutions/steel" },
                                        { name: "Şantiye Planlaması", href: "/solutions/site-planning" },
                                    ].map((item, i) => (
                                        <li key={i}>
                                            <a href={item.href} className="flex items-center text-gray-400 hover:text-[#3B82F6] transition-colors group/link">
                                                <ArrowRight className="h-4 w-4 mr-2 opacity-0 -ml-6 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Key Features - Standardized "Benefits" Grid Style */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B1120]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">ÖZELLİKLER</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">ÖNE ÇIKAN ÖZELLİKLER</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "TEK YAZILIMLA TAM ÇÖZÜM",
                                desc: "Küçükten son derece karmaşık olana kadar her tür inşaat için uygundur, büyük model verilerini hızlı ve güvenli işler.",
                                img: "https://aluplan.com.tr/wp-content/uploads/2022/10/structural-engineering-allplan-turkey-work_way_want.png"
                            },
                            {
                                title: "İSTEDİĞİNİZ GİBİ ÇALIŞIN",
                                desc: "2B, 2.5B ve 3B'de esnek iş akışlarının yanı sıra tam obje yönelimli BIM çalışma metodolojisi.",
                                img: "https://aluplan.com.tr/wp-content/uploads/2022/10/structural-engineering-allplan-turkey-powerful_modeling.png"
                            },
                            {
                                title: "ÜRETKEN İŞBİRLİĞİ",
                                desc: "Çok kullanıcılı gerçek zamanlı çalışma için entegre bulut teknolojisinin yanı sıra iş ortaklarıyla model ve proje işbirliği.",
                                img: "https://aluplan.com.tr/wp-content/uploads/2022/10/productive_collab-1.png"
                            },
                            {
                                title: "İKNA EDİCİ GÖRSELLEŞTİRMELER",
                                desc: "Rapid high-quality presentation explaining designs instantly to clients and stakeholders.",
                                img: "https://aluplan.com.tr/wp-content/uploads/2022/10/convincing_visualizations.png"
                            },
                            {
                                title: "GEREKSİNİMLERİ KOLAYCA DEĞİŞTİRİN",
                                desc: "Planları sıfırdan yeniden modellemek zorunda kalmadan uyarlayın ve değiştirin, zamandan tasarruf edin.",
                                img: "https://aluplan.com.tr/wp-content/uploads/2022/10/easyliy_modify_requirements-1.png"
                            },
                            {
                                title: "ÜSTÜN KALİTELİ TESLİMATLAR",
                                desc: "Doğrudan 3B modelden hızlı ve doğru planlar, çizimler ve raporlar oluşturun.",
                                img: "https://aluplan.com.tr/wp-content/uploads/2022/10/more_accurate_deliverables-2.png"
                            }
                        ].map((feat, i) => (
                            <div key={i} className="group relative p-6 pr-20 pb-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-white/5 border-white/10 border">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-all group-hover:from-blue-500/20" />
                                <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm overflow-hidden">
                                    <Image
                                        src={feat.img}
                                        alt={feat.title}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-3 group-hover:text-blue-500 transition-colors text-white">
                                    {feat.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-400">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design to Build Section - New Request */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] border-t border-white/5">
                <div className="max-w-[1000px] mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        ALLPLAN İLE TASARIMDAN İNŞAATA<br />
                        <span className="text-gray-500">AEC PROFESYONELLERİ İÇİN</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
                        ALLPLAN, mimarlar, inşaat ve altyapı mühendisleri, imalatçılar ve inşaat profesyonelleri için üretkenliği artıran ve yüksek kaliteli projeler sunmalarını sağlayan yenilikçi "Tasarımdan İnşaata" (Design to Build) iş akışları ve gerçek zamanlı işbirliği sunar. Yapay zeka tabanlı görselleştirme, bina ve altyapı modelleme gereksinimleri için hızlandırılmış ve otomatikleştirilmiş tasarım fonksiyonları sayesinde önemli ölçüde zaman tasarrufu sağlanır. Bağlantılı yapısal analiz süreçleri, üstün birlikte çalışabilirlik (interoperability), farklı malzemeler ve inşaat yöntemleri için gelişmiş detaylandırma yetenekleri ve güçlü bulut teknolojisi ile ekipler güçlenir ve performans artar.
                    </p>

                    <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-8 md:p-12 mb-12">
                        <h3 className="text-xl font-bold text-white mb-8">ALLPLAN Avantajlarınız:</h3>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            {[
                                "Yapay zeka tabanlı görselleştirme ve otomatik tasarım.",
                                "Bağlantılı yapısal mühendislik iş akışları.",
                                "Üstün imalat ve inşaat koordinasyonu.",
                                "Güçlü bulut tabanlı disiplinler arası işbirliği."
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-[#3B82F6]/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <ArrowRight className="h-3.5 w-3.5 text-[#3B82F6]" />
                                    </div>
                                    <span className="text-gray-300 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <a
                            href="/products/allplan-2026-yenilikler"
                            className="inline-flex items-center gap-2 text-[#3B82F6] font-bold uppercase tracking-wider hover:gap-4 transition-all"
                        >
                            TÜM ALLPLAN ÖZELLİKLERİNİ İNCELE
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Product Editions Grid - New Request */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">ALLPLAN ÜRÜN PAKETLERİ</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Projenizin ölçeğine ve disiplinine uygun en doğru çözümü seçin.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "ALLPLAN Basic",
                                img: productArch,
                                desc: "Temel 2B/3B tasarım ve detaylandırma.",
                                href: "/products/allplan-basic"
                            },
                            {
                                title: "ALLPLAN Concept",
                                img: productEng,
                                desc: "Konsept tasarım ve modelleme için ideal çözüm.",
                                href: "/products/allplan-concept"
                            },
                            {
                                title: "ALLPLAN Professional",
                                img: productArch,
                                desc: "Mimarlar ve mühendisler için tam kapsamlı BIM çözümü.",
                                href: "/products/allplan-professional"
                            },
                            {
                                title: "ALLPLAN Ultimate",
                                img: productEng,
                                desc: "En üst düzey tüm disiplinleri kapsayan BIM paketi.",
                                href: "/products/allplan-ultimate"
                            },
                            {
                                title: "CIVIL",
                                img: productBridge,
                                desc: "Altyapı, yol ve köprü projeleri için özel araçlar.",
                                href: "/products/civil"
                            },
                            {
                                title: "PRECAST",
                                img: productPrecast,
                                desc: "Prekast üretim ve detaylandırma süreçleri için.",
                                href: "/products/precast"
                            }
                        ].map((item, i) => (
                            <div key={i} className="group relative bg-[#050505] rounded-2xl border border-white/10 overflow-hidden hover:border-[#3B82F6]/50 transition-all">
                                <div className="aspect-[16/9] relative overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
                                    <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white group-hover:text-[#3B82F6] transition-colors">{item.title}</h3>
                                </div>
                                <div className="p-6 pt-2">
                                    <p className="text-gray-400 text-sm mb-6 h-10">{item.desc}</p>
                                    <a href={item.href} className="flex items-center text-sm font-bold text-white hover:text-[#3B82F6] transition-colors gap-2">
                                        ÜRÜNÜ İNCELE
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Removed Smart Processes Section as requested */}
        </PageWrapper>
    );
}
