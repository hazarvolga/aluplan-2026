import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Construction, HardHat, Puzzle, Package, ArrowRight } from "lucide-react";

// Images
import imgArchitecture from "@/assets/solutions/architecture-hero.jpg";
import imgStructural from "@/assets/solutions/structural-hero.jpg";
import imgMep from "@/assets/solutions/mep-hero.jpg";
import imgIndustry from "@/assets/solutions/industry/hero.jpg"; // Assuming exists or fallback
import imgInfrastructure from "@/assets/solutions/infrastructure-hero.jpg";
import imgRoad from "@/assets/solutions/road-railway-hero.jpg";
import imgBridge from "@/assets/solutions/bridge-hero.jpg";
import imgPrecast from "@/assets/solutions/precast-hero.jpg";
import imgSteel from "@/assets/solutions/steel-hero.jpg";
import imgSite from "@/assets/solutions/site-planning-hero.jpg"; // Assuming exists or fallback
import imgPlanli from "@/assets/solutions/planli-alanlar/planla-hesapla.png";
import imgOska from "@/assets/solutions/oska/hero-banner.jpg";
import imgBimx5 from "@/assets/solutions/oska/bimx5-section.jpg"; // Using what was found

export const metadata: Metadata = {
    title: "ALLPLAN Çözümleri | Tüm Çözümler",
    description: "ALLPLAN'ın bina tasarımı, altyapı mühendisliği, inşaat planlaması ve eklentiler dahil tüm BIM çözümlerini keşfedin.",
};

const solutions = {
    building: {
        title: "BİNA TASARIMI",
        icon: Building2,
        items: [
            {
                title: "Mimari",
                href: "/solutions/architecture",
                description: "Yaratıcı vizyonunuzu kusursuz bir şekilde gerçeğe dönüştüren, tasarım özgürlüğü ve hassasiyeti bir arada sunan kapsamlı BIM çözümü.",
                image: imgArchitecture
            },
            {
                title: "Strüktürel Mühendislik",
                href: "/solutions/structural",
                description: "Karmaşık yapısal analizlerden detaylandırmaya kadar, güvenli ve optimize edilmiş yapılar için güçlü mühendislik araçları.",
                image: imgStructural
            },
            {
                title: "MEP",
                href: "/solutions/mep",
                description: "Mekanik, elektrik ve sıhhi tesisat sistemlerinin entegre tasarımı ve koordinasyonu için gelişmiş modelleme yetenekleri.",
                image: imgMep
            },
            {
                title: "ALLPLAN Endüstri Çözümleri",
                href: "/solutions/industry",
                description: "Endüstriyel tesisler ve özel yapılar için özelleştirilmiş, yüksek performanslı tasarım ve detaylandırma çözümleri.",
                image: imgArchitecture // Fallback
            },
        ],
    },
    infrastructure: {
        title: "ALTYAPI TASARIMI",
        icon: Construction,
        items: [
            {
                title: "Altyapı Mühendisliği",
                href: "/solutions/infrastructure",
                description: "Karmaşık altyapı projeleri, tüneller ve yeraltı yapıları için hassas modelleme ve planlama araçları.",
                image: imgInfrastructure
            },
            {
                title: "Yol ve Demiryolu Tasarımı",
                href: "/solutions/road-railway",
                description: "Parametrik yol ve demiryolu tasarımı ile güzergah planlamasından detaylı kesitlere kadar eksiksiz çözüm.",
                image: imgRoad
            },
            {
                title: "Köprü Tasarımı",
                href: "/solutions/bridge-design",
                description: "Parametrik modelleme ile her türlü köprü tipini verimli bir şekilde tasarlayın, analiz edin ve detaylandırın.",
                image: imgBridge
            },
        ],
    },
    construction: {
        title: "İNŞAAT PLANLAMASI",
        icon: HardHat,
        items: [
            {
                title: "Prekast Üretimi",
                href: "/solutions/precast",
                description: "Otomatikleştirilmiş prekast tasarım ve üretim süreçleri ile verimliliği artırın ve hataları en aza indirin.",
                image: imgPrecast
            },
            {
                title: "Çelik Detaylandırma & İmalat",
                href: "/solutions/steel",
                description: "SDS2 entegrasyonu ile çelik yapıların detaylandırılması ve imalat verilerinin otomatik oluşturulması.",
                image: imgSteel
            },
            {
                title: "Şantiye Planlaması",
                href: "/solutions/site-planning",
                description: "Şantiye sahasını 3B olarak planlayın, vinç konumlarını optimize edin ve lojistik süreçlerini simüle edin.",
                image: imgSite
            },
        ],
    },
    addons: {
        title: "EKLENTİLER",
        icon: Puzzle,
        items: [
            {
                title: "CDS Add-On",
                href: "/solutions/cds-addon",
                description: "Kablo ve boru sistemleri için eklenti çözümü. Tesisat projelerinizde hız kazanın.",
                image: imgMep // Reuse MEP
            },
            {
                title: "Allto PythonPart Generator",
                href: "https://allplantools.com/",
                external: true,
                description: "Kod yazmadan kendi parametrik PythonPart nesnelerinizi oluşturun ve iş akışlarınızı otomatikleştirin.",
                image: imgArchitecture // Placeholder
            },
            {
                title: "Allto PythonPart",
                href: "/solutions/pythonpart",
                description: "Python tabanlı parametrik nesneler ile tekrarlayan görevleri otomatikleştirin ve tasarım hızınızı artırın.",
                image: imgArchitecture // Placeholder
            },
            {
                title: "AX3000 MEP",
                href: "/solutions/ax3000-mekanik-tesisat",
                description: "Entegre enerji analizi ve tesisat hesaplamaları ile sürdürülebilir bina sistemleri tasarlayın.",
                image: imgMep // Reuse MEP
            },
            {
                title: "Scalypso",
                href: "/solutions/scalypso",
                description: "Nokta bulutu verilerini işleyin ve mevcut yapıları hassas bir şekilde BIM modellerine dönüştürün.",
                image: imgSite // Contextually similar to site/survey
            },
        ],
    },
    other: {
        title: "DİĞER ÜRÜNLER",
        icon: Package,
        items: [
            {
                title: "Allplan BIMPLUS",
                href: "/solutions/bimplus",
                description: "Bulut tabanlı BIM işbirliği platformu ile tüm proje paydaşlarını tek bir merkezde buluşturun.",
                image: imgArchitecture // Placeholder
            },
            {
                title: "BIMX5",
                href: "/solutions/bimx5",
                description: "İhale, Metraj, Hakediş ve BIM modellemesi için nihai çözüm. Allplan ve 2b dwg Converter hızıyla.",
                image: imgBimx5
            },
            {
                title: "Donatı Mühendisliği",
                href: "/solutions/rebar-engineering",
                description: "Otomatik donatı detaylandırma ve metraj raporlama araçları ile betonarme projelerinde hız kazanın.",
                image: imgStructural // Reuse Structural
            },
            {
                title: "İmar Yönetmeliği BIM Eklentisi",
                href: "/solutions/imar-yonetmeligi-bim-eklentisi",
                description: "Projelerinizin Planlı Alanlar İmar Yönetmeliğine uygunluğunu otomatik olarak kontrol edin ve raporlayın.",
                image: imgPlanli
            },
            {
                title: "Allplan Oska İşbirliği",
                href: "/solutions/oska",
                description: "Allplan metraj verilerini Oska yaklaşık maliyet ve hakediş yazılımlarına doğrudan aktarın.",
                image: imgOska
            },
            {
                title: "Allplan Poz Kataloğu",
                href: "/solutions/poz-catalog",
                description: "Türkiye poz birim fiyat kataloğu entegrasyonu ile keşif ve maliyet hesaplamalarınızı otomatikleştirin.",
                image: imgArchitecture // Placeholder
            },
        ],
    },
};

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 text-accent font-medium text-sm">
                            TÜM ÇÖZÜMLERİMİZ
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
                            Geleceği <span className="text-accent">Tasarlayın</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                            Bina tasarımından altyapı mühendisliğine, inşaat planlamasından eklentilere kadar projenizin her aşaması için geliştirilmiş BIM çözümlerini keşfedin.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Categories */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {Object.entries(solutions).map(([key, category]) => {
                            const Icon = category.icon;
                            return (
                                <div key={key} id={key} className="scroll-mt-24">
                                    <div className="flex items-center gap-4 mb-10 border-b border-border pb-4">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <h2 className="text-3xl font-bold tracking-tight">{category.title}</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {category.items.map((item, index) => (
                                            'external' in item && item.external ? (
                                                <a
                                                    key={index}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block group h-full"
                                                >
                                                    <Card className="h-full overflow-hidden border-border/50 bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                                                        <div className="relative aspect-video overflow-hidden">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                                                placeholder="blur"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                                <span className="text-white font-medium flex items-center gap-2">
                                                                    Siteyi Ziyaret Et <ArrowRight className="w-4 h-4 ml-1" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <CardHeader className="flex-1 p-6">
                                                            <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                                {item.title}
                                                            </CardTitle>
                                                            {item.description && (
                                                                <p className="text-muted-foreground leading-relaxed text-sm">
                                                                    {item.description}
                                                                </p>
                                                            )}
                                                        </CardHeader>
                                                    </Card>
                                                </a>
                                            ) : (
                                                <Link key={index} href={item.href} className="block group h-full">
                                                    <Card className="h-full overflow-hidden border-border/50 bg-card hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                                                        <div className="relative aspect-video overflow-hidden">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                                                placeholder="blur"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                                                <span className="text-white font-medium flex items-center gap-2">
                                                                    Detayları İncele <ArrowRight className="w-4 h-4 ml-1" />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <CardHeader className="flex-1 p-6">
                                                            <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                                {item.title}
                                                            </CardTitle>
                                                            {item.description && (
                                                                <p className="text-muted-foreground leading-relaxed text-sm">
                                                                    {item.description}
                                                                </p>
                                                            )}
                                                        </CardHeader>
                                                    </Card>
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
