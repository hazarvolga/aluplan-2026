"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Map, Leaf, Moon, Eye, AlertTriangle,                 // Basic
    Database, Layers, Cloud, Globe, Box, CheckCircle2, Bot, Scissors, Link as LinkIcon, // Concept
    FileCode, Palette, Zap, Type, RefreshCw, Hash,         // Professional
    Component, Milestone, Construction, Upload, Ruler,     // Ultimate
    Workflow, Building2, Activity, Landmark,                 // Civil
    Merge, EyeOff, Calculator                            // Precast
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const packages = [
    { id: "basic", label: "ALLPLAN Basic", color: "bg-green-500/10 text-green-500 border-green-500/20" },
    { id: "concept", label: "ALLPLAN Concept", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { id: "professional", label: "ALLPLAN Professional", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { id: "ultimate", label: "ALLPLAN Ultimate", color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
    { id: "civil", label: "CIVIL", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    { id: "precast", label: "PRECAST", color: "bg-red-500/10 text-red-500 border-red-500/20" },
];

const innovationData = {
    basic: [
        {
            title: "Georeferans Konumlandırma",
            description: "Survey Point ve Base Point ile hassas proje koordinasyonu ve gerçek kuzey ayarları.",
            icon: Map,
            tag: "YENİ"
        },
        {
            title: "Preoptima Entegrasyonu",
            description: "Erken tasarım aşamasında karbon ayak izi değerlendirmesi ve sürdürülebilirlik analizi.",
            icon: Leaf,
            tag: "YENİ"
        },
        {
            title: "Karanlık Mod",
            description: "Göz yorgunluğunu azaltan ve pil ömrünü uzatan modern karanlık mod arayüzü.",
            icon: Moon,
            tag: "YENİ"
        },
        {
            title: "Model Görüntüleyici",
            description: "Tarayıcı tabanlı ücretsiz IFC model görüntüleyici ile anında erişim.",
            icon: Eye,
            tag: "BULUT"
        },
        {
            title: "Gelişmiş Çakışma Yönetimi",
            description: "Filtrelenebilir çakışma testleri ve detaylı raporlama ile hatasız koordinasyon.",
            icon: AlertTriangle,
            tag: "YENİ"
        }
    ],
    concept: [
        {
            title: "BSDD Entegrasyonu",
            description: "buildingSMART Data Dictionary ile standartlaştırılmış veri girişi.",
            icon: Database,
            tag: "YENİ"
        },
        {
            title: "AI Asistanı",
            description: "AEC süreçleri için özelleşmiş yapay zeka destekli rehberlik ve destek.",
            icon: Bot,
            tag: "YAPAY ZEKA"
        },
        {
            title: "Gelişmiş Bilgi Paleti",
            description: "Esnek gruplama, otomatik toplamlar ve daha sezgisel veri yönetimi.",
            icon: Layers,
            tag: "GELİŞTİRİLDİ"
        },
        {
            title: "Bulut Referansı (XRef)",
            description: "BIMPLUS üzerinden IFC, DWG ve PDF dosyalarını bulut referansı olarak ekleme.",
            icon: Cloud,
            tag: "YENİ"
        },
        {
            title: "Geopackage Desteği",
            description: "CBS verilerinin (Shapefile vb.) doğrudan içe aktarımı ve arazi uyumu.",
            icon: Globe,
            tag: "YENİ"
        },
        {
            title: "Serbest Merdiven",
            description: "Kurallara bağlı kalmadan özgür formda merdiven modelleme aracı.",
            icon: Box,
            tag: "GELİŞTİRİLDİ"
        },
        {
            title: "Çok Katmanlı Döşeme",
            description: "Döşeme katmanlarının hassas yönetimi ve birleşim detayları.",
            icon: Layers,
            tag: "GELİŞTİRİLDİ"
        },
        {
            title: "2D Belge Kırpma",
            description: "Bindirme (Overlay) yöneticisi ile 2D planların sadece ilgili kısımlarını gösterin.",
            icon: Scissors,
            tag: "YENİ"
        },
        {
            title: "Bluebeam Bağlantısı",
            description: "Bluebeam Studio ile doğrudan 2D/3D PDF iş akışı entegrasyonu.",
            icon: LinkIcon,
            tag: "YENİ"
        }
    ],
    professional: [
        {
            title: "IDS Tabanlı Veri",
            description: "Information Delivery Specification (IDS) ile otomatik nitelik kontrolü ve doğrulama.",
            icon: FileCode,
            tag: "YENİ"
        },
        {
            title: "Grafik Geçersiz Kılma",
            description: "Model görünümünü kurallara göre otomatik renklendirme ve stilize etme.",
            icon: Palette,
            tag: "YENİ"
        },
        {
            title: "Donatıdan Şantiyeye",
            description: "Kağıtsız, tamamen dijital model üzerinden donatı montaj iş akışı.",
            icon: Zap,
            tag: "DEVRİMSEL"
        },
        {
            title: "Otomatik Kolon Donatısı",
            description: "Farklı bölge ve kurallara göre kolon donatılarının otomatik yerleşimi.",
            icon: Box,
            tag: "OTOMASYON"
        },
        {
            title: "Strüktürel Çerçeveleme",
            description: "Çelik konstrüksiyon bağlantılarının otomatik güncellenmesi ve detaylandırılması.",
            icon: Construction,
            tag: "GELİŞTİRİLDİ"
        },
        {
            title: "Kural Bazlı Ölçülendirme",
            description: "Prefabrik elemanlar için otomatik, kural tabanlı ölçü çizgileri.",
            icon: Ruler,
            tag: "PREFAB"
        },
        {
            title: "Yerel Görünümler",
            description: "Ana modelden bağımsız, ölçeklenebilir ve detaylandırılabilir yerel görünümler.",
            icon: RefreshCw,
            tag: "PREFAB"
        },
        {
            title: "Parça Numaralandırma",
            description: "Prefabrik elemanların üretim sırası ve lojistiği için akıllı numaralandırma.",
            icon: Hash,
            tag: "PREFAB"
        }
    ],
    ultimate: [
        {
            title: "Birleşik Arazi Modeli",
            description: "Yüksek performanslı, hassas ve büyük ölçekli yeni dijital arazi motoru.",
            icon: Milestone,
            tag: "YENİ"
        },
        {
            title: "Parametrik Tünel",
            description: "Eksen ve kesit bazlı, tam parametrik tünel modelleme yetenekleri.",
            icon: Component,
            tag: "YENİ"
        },
        {
            title: "3B Yol Kavşağı",
            description: "Düşey profil kontrolü ile daha hassas ve akıcı yol kesişimleri.",
            icon: Activity,
            tag: "GELİŞTİRİLDİ"
        },
        {
            title: "BIMPLUS Model Aktarımı",
            description: "Altyapı modellerinin (yol, köprü) doğrudan buluta entegrasyonu.",
            icon: Upload,
            tag: "ENTEGRASYON"
        },
        {
            title: "Parametrik Kesitler",
            description: "Altyapı elemanları için esnek ve güçlü 2D/3D parametrik kesit editörü.",
            icon: Ruler,
            tag: "GELİŞTİRİLDİ"
        },
        {
            title: "Temel ve Kazı",
            description: "Karmaşık kazı çukurları ve iksa sistemleri için iyileştirilmiş araçlar.",
            icon: Construction,
            tag: "GELİŞTİRİLDİ"
        }
    ],
    civil: [
        {
            title: "Altyapı Yapı Strüktürü",
            description: "Köprü ve tünel projeleri için bina benzeri kat ve yapı yönetimi.",
            icon: Building2,
            tag: "YENİ"
        },
        {
            title: "3B Katman Yönetimi",
            description: "Altyapı modellerinde disiplinler arası katman ve görünürlük kontrolü.",
            icon: Layers,
            tag: "YENİ"
        },
        {
            title: "Hacimsel FEM",
            description: "Köprü ayakları ve temeller için 3D solid (hacim) sonlu elemanlar analizi.",
            icon: Activity,
            tag: "TEKNİK ÖNİZLEME"
        },
        {
            title: "Prefabrik Köprü",
            description: "Öngerilmeli kirişli köprüler için hızlandırılmış modelleme iş akışları.",
            icon: Landmark,
            tag: "GELİŞTİRİLDİ"
        }
    ],
    precast: [
        {
            title: "Filigran Döşeme Çözümü",
            description: "Yarı prefabrik döşemeler için donatı ve hasır otomasyonu.",
            icon: Merge,
            tag: "OTOMASYON"
        },
        {
            title: "Gizli Donatı Gösterimi",
            description: "Beton içinde kalan ve çıkan donatıların çizimlerde otomatik ayrımı.",
            icon: EyeOff,
            tag: "YENİ"
        },
        {
            title: "Özelleştirilebilir Metraj",
            description: "ERP sistemlerine uygun, esnek ve kural tabanlı metraj raporları.",
            icon: Calculator,
            tag: "VERİ"
        }
    ]
};

export default function ProductInnovations() {
    const [activeTab, setActiveTab] = useState("basic");

    return (
        <section className="py-24 bg-background border-t border-border/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary">Allplan 2026</Badge>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Ürün Ailesindeki Yenilikler
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Her paket için özel olarak geliştirilmiş yeni özellikler ve iyileştirmelerle, projelerinizde verimliliği ve kaliteyi artırın.
                    </p>
                </div>

                {/* Package Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {packages.map((pkg) => (
                        <button
                            key={pkg.id}
                            onClick={() => setActiveTab(pkg.id)}
                            className={`
                px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeTab === pkg.id
                                    ? `${pkg.color.replace('/10', '/20')} ring-2 ring-offset-2 ring-offset-background ring-${pkg.label.split(' ')[1]?.toLowerCase() || 'primary'}-500/50`
                                    : 'bg-background border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground'}
              `}
                        >
                            {pkg.label}
                        </button>
                    ))}
                </div>

                {/* Innovations Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {innovationData[activeTab as keyof typeof innovationData]?.map((item, index) => (
                            <Card
                                key={index}
                                className="group relative p-6 h-full bg-card hover:bg-accent/5 transition-all duration-300 border-border hover:border-accent/30 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <item.icon className="w-16 h-16 text-accent transform rotate-12 translate-x-4 -translate-y-4" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors text-accent">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        {item.tag && (
                                            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm border-border text-[10px]">
                                                {item.tag}
                                            </Badge>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Quick Access Buttons */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6">
                    <Button asChild size="lg" className="h-14 px-8 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-accent/20 transition-all">
                        <a href="/products/allplan-2026-yenilikler">
                            Yenilikleri İncele
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg border-2 border-foreground/10 hover:bg-foreground/5 hover:border-foreground/20 transition-all">
                        <a href="/products/allplan-2026">
                            ALLPLAN 2026 İncele
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all">
                        <a href="/solutions/allplan-bulut-hizmetleri">
                            ALLPLAN CLOUD
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
