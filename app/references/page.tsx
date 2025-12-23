"use client"
import React from "react";
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, GraduationCap, Building, School, HardHat, Landmark } from "lucide-react";

// References Data
const references = [
    { name: "Ağırman Mimarlık Mühendsilik", category: "architecture" },
    { name: "Ahmet Tahir Gül Mimarlık", category: "architecture" },
    { name: "Akyükselen İnşaat", category: "engineering" },
    { name: "Alpkon Yapı Tasarım", category: "engineering" },
    { name: "Altay ve Altay Müh. Mim.", category: "architecture" },
    { name: "Aluform Pekintaş A.Ş.", category: "architecture" },
    { name: "Anda Müşavirlik Mühendislik", category: "architecture" },
    { name: "Ankamim Mimarlık Mühendislik", category: "engineering" },
    { name: "Assan Yapı", category: "engineering" },
    { name: "Atak Mühendislik", category: "engineering" },
    { name: "Autograph Mimarlık Dekorasyon", category: "architecture" },
    { name: "Avinal Yazılım", category: "architecture" },
    { name: "Aydın Proje", category: "architecture" },
    { name: "Balcı Mühendislik", category: "engineering" },
    { name: "Baytec Mühendislik", category: "engineering" },
    { name: "Betis Mühendislik", category: "engineering" },
    { name: "Bimbir Mühendislik İnşaat", category: "architecture" },
    { name: "Blue Procekts Proje", category: "engineering" },
    { name: "Burhan Kılınç", category: "architecture" },
    { name: "C Group Mimarlık", category: "architecture" },
    { name: "Çalık Enerji", category: "engineering" },
    { name: "Cengiz Ulus Mimarlık", category: "architecture" },
    { name: "Cephe Mimarlık", category: "architecture" },
    { name: "Deça Mimarlık", category: "architecture" },
    { name: "Dergan Çarpar Mimarlık", category: "architecture" },
    { name: "DND Mimarlık", category: "architecture" },
    { name: "Ebru Çetin", category: "engineering" },
    { name: "EFK Mühendislik Proje İnşaat", category: "engineering" },
    { name: "Egim Grup Proje", category: "architecture" },
    { name: "Emay Uluslararası Mühendisik", category: "engineering" },
    { name: "Ena Mimarlık", category: "architecture" },
    { name: "Enka İnşaat ve Sanayi A.Ş.", category: "engineering" },
    { name: "Er-Nur Mimarlık", category: "architecture" },
    { name: "ESM Proje İnşaat", category: "architecture" }, // Truncated slightly for fit if needed, keeping original mostly
    { name: "ETE Beton", category: "prefabrik" },
    { name: "Fab Teknik", category: "engineering" },
    { name: "Ferhan Zana Çoban", category: "engineering" },
    { name: "Form Yapı Okay İnşaat", category: "architecture" },
    { name: "Freysaş Freyssinet", category: "engineering" },
    { name: "Gelişim Üniversitesi", category: "universite" },
    { name: "Genser Mühendislik", category: "engineering" },
    { name: "Gizil Enerji Türkiye", category: "engineering" },
    { name: "Gökmen Mimarlık", category: "architecture" },
    { name: "Güryapı Taahüt", category: "architecture" },
    { name: "Habaş A.Ş.", category: "engineering" },
    { name: "Hakan Sencan", category: "architecture" },
    { name: "Hasan Değerbilir", category: "architecture" },
    { name: "Helvacıoğlu Mimarlık", category: "architecture" },
    { name: "Hidro Dizayn", category: "engineering" },
    { name: "İdea Yapı Ürünleri", category: "architecture" },
    { name: "IMO Ankara", category: "egitim-merkezi" },
    { name: "IMO İzmir", category: "egitim-merkezi" },
    { name: "İskenderun Demir ve Çelik A.Ş.", category: "engineering" },
    { name: "İstinye Üniversitesi", category: "universite" },
    { name: "Kagir Ahşap Yapı", category: "architecture" },
    { name: "Kahramanmaraş BB", category: "kamu" },
    { name: "Karem Mimarlık", category: "architecture" },
    { name: "KÇS Kahramanmaraş Çimento", category: "architecture" },
    { name: "Kemikoğlu İnşaat", category: "architecture" },
    { name: "KHG Tekstil Mimarlık", category: "architecture" },
    { name: "Kibar Holding", category: "architecture" },
    { name: "Koray Sapmaz", category: "architecture" },
    { name: "Krea Mimarlık ve Tic. Ltd. Şti.", category: "architecture" },
    { name: "LA Mimarlik", category: "architecture" },
    { name: "Laborteks San. Tic.", category: "architecture" },
    { name: "Leyla Aktaş Mimarlık Bürosu", category: "architecture" },
    { name: "Lun Yapı İnşaat", category: "engineering" },
    { name: "Mazeron Mimarlık Dekorasyon", category: "architecture" },
    { name: "Mehmet Yıldırım", category: "architecture" },
    { name: "Meriç Çarpar", category: "architecture" },
    { name: "Mertun Mimarlık", category: "architecture" },
    { name: "Mesut Oğurlu", category: "architecture" },
    { name: "Mesut Tanyel", category: "architecture" },
    { name: "Mimarca Tasarım ve Uygulama", category: "architecture" },
    { name: "Modern Mühendislik", category: "engineering" },
    { name: "Murat Bayrak Engineers", category: "engineering" },
    { name: "Namık Kemal Üniversitesi", category: "universite" },
    { name: "Ninova Mühendislik Mimarlık", category: "engineering" },
    { name: "Oda Tasarım", category: "architecture" },
    { name: "ODTU İnşaat Mühendisliği Bölümü", category: "universite" },
    { name: "Oğuz Ergeç Mimar Mimarlık", category: "architecture" },
    { name: "Ömer Akyıldız Mühendislik A.Ş.", category: "engineering" },
    { name: "Ömer Melih Güveniş", category: "architecture" },
    { name: "On Dizayn Mimarlık", category: "architecture" },
    { name: "Orient Resaerch Mühendislik", category: "engineering" },
    { name: "Orion Ağır Çelik Yapı Müh.", category: "engineering" },
    { name: "Orion Müşavirlik Mühendislik ve Proje", category: "engineering" },
    { name: "Osmangazi Belediyesi", category: "kamu" },
    { name: "Özenart Mimarlık İnşaat", category: "architecture" },
    { name: "Penti Giyim Ticaret A.Ş.", category: "architecture" },
    { name: "Plan & Projektbau İstanbul", category: "engineering" },
    { name: "Promer Müşavirlik Mühendislik", category: "engineering" },
    { name: "Rec Uluslararası İnşaat", category: "architecture" },
    { name: "Şanlılar Mimarlık", category: "architecture" },
    { name: "Sayın Prefabrik İnşaat", category: "prefabrik" },
    { name: "Sertepe İnşaat", category: "architecture" },
    { name: "Seza Müh. Mimarlık", category: "engineering" },
    { name: "Su Yapı Mühendislik", category: "engineering" },
    { name: "Şule Uyar Mimarlık", category: "architecture" },
    { name: "Süleymanpaşa Belediyesi", category: "kamu" },
    { name: "Synergy Yapı", category: "engineering" },
    { name: "Tahir Koca", category: "architecture" },
    { name: "Temelsu Uluslararası Mühendislik", category: "engineering" },
    { name: "Tesem Yapı A.Ş.", category: "engineering" },
    { name: "Toki - Toplu Konut İdaresi", category: "kamu" },
    { name: "Tolkim Dış Ticaret", category: "architecture" },
    { name: "Tözün Mimarlık", category: "architecture" },
    { name: "Türk Teknik", category: "engineering" },
    { name: "Türk Ytong", category: "architecture" },
    { name: "Türkerler Gama", category: "architecture" },
    { name: "Werner Sobek İstanbul", category: "architecture" },
    { name: "Yıldız Teknik Üniversitesi İnşaat", category: "universite" },
    { name: "Yıldızkent Müh. Mimarlık", category: "architecture" },
    { name: "Yüksel Proje A.Ş.", category: "engineering" },
    { name: "Z-Dizayn Mühendislik", category: "engineering" }
];

const categories = [
    { id: "all", label: "Tümü", icon: null },
    { id: "engineering", label: "Mühendislik", icon: HardHat },
    { id: "architecture", label: "Mimari", icon: Building },
    { id: "universite", label: "Üniversite", icon: GraduationCap },
    { id: "prefabrik", label: "Prefabrik", icon: Building2 },
    { id: "kamu", label: "Kamu / Kurum", icon: Landmark },
    { id: "egitim-merkezi", label: "Eğitim Merkezi", icon: School }
];

export default function ReferencesPage() {
    return (
        <PageWrapper>
            <HeroInternal
                category="REFERANSLAR"
                title="İş Ortaklarımız"
                subtitle="Bizi tercih eden ve birlikte başarılı projelere imza attığımız değerli müşterilerimizden bazıları."
            />

            <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#050505] min-h-screen">
                <div className="max-w-[1400px] mx-auto">
                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-16 h-auto p-0 sticky top-24 z-30 py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 w-full">
                            {categories.map((cat) => (
                                <TabsTrigger
                                    key={cat.id}
                                    value={cat.id}
                                    className="px-6 py-3 rounded-full border border-white/10 bg-[#111] text-gray-400 data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white data-[state=active]:border-[#3B82F6] transition-all duration-300 flex items-center gap-2"
                                >
                                    {cat.icon && <cat.icon className="h-4 w-4" />}
                                    {cat.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <TabsContent value="all" className="focus:outline-none">
                            <ReferenceGrid items={references} />
                        </TabsContent>

                        {categories.filter(c => c.id !== "all").map((cat) => (
                            <TabsContent key={cat.id} value={cat.id} className="focus:outline-none">
                                <ReferenceGrid items={references.filter(r => r.category === cat.id)} />
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>
        </PageWrapper>
    );
}

const ReferenceGrid = ({ items }: { items: typeof references }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="p-6 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-[#3B82F6]/30 hover:bg-[#0f0f0f] transition-all duration-300 group flex items-center gap-4"
                >
                    <div className="h-10 w-10 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#3B82F6]/10 group-hover:text-[#3B82F6] transition-colors">
                        <ReferenceIcon category={item.category} />
                    </div>
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
                        {item.name}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

const ReferenceIcon = ({ category }: { category: string }) => {
    switch (category) {
        case "architecture": return <Building className="h-5 w-5" />;
        case "engineering": return <HardHat className="h-5 w-5" />;
        case "universite": return <GraduationCap className="h-5 w-5" />;
        case "prefabrik": return <Building2 className="h-5 w-5" />;
        case "kamu": return <Landmark className="h-5 w-5" />;
        case "egitim-merkezi": return <School className="h-5 w-5" />;
        default: return <Building className="h-5 w-5" />;
    }
};
