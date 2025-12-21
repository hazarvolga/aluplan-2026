"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, Layers, Zap, PenTool, Box, CheckCircle2, ArrowRight, Database, Globe, Cpu, FileJson } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function GuideContent() {
    return (
        <div className="space-y-24 max-w-4xl pb-24">
            {/* Introduction */}
            <section id="introduction" className="space-y-6">
                <div className="bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-2xl p-8">
                    <h1 className="text-4xl font-bold text-white mb-4">Allplan 2026 Kapsamlı Başlangıç Rehberi</h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Bu kılavuz, Allplan BIM yazılımının profesyonel düzeydeki kullanımını, Open BIM iş akışlarını
                        ve Allplan 2026 yeniliklerini derinlemesine ele alır. Mimarlar, mühendisler ve inşaat
                        profesyonelleri için tasarımdan inşaya (Design to Build) bütünleşik bir süreç sunar.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <div className="flex items-center gap-2 text-sm text-blue-400">
                            <Globe className="w-4 h-4" />
                            <span>Open BIM Uyumlu</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-400">
                            <Cpu className="w-4 h-4" />
                            <span>AI Destekli</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modules Tabs (Expanded) */}
            <section id="modules" className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                        <Box className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Modüller ve Profesyonel İş Akışları</h2>
                        <p className="text-gray-400 mt-1">Disiplinlere özel yetenekler ve en iyi uygulama yöntemleri.</p>
                    </div>
                </div>

                <Tabs defaultValue="architecture" className="w-full">
                    <TabsList className="flex flex-wrap h-auto bg-[#111] p-1 rounded-xl mb-8 border border-white/5">
                        <TabsTrigger value="architecture" className="flex-1 min-w-[120px] rounded-lg py-3 data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white transition-all">Mimari</TabsTrigger>
                        <TabsTrigger value="engineering" className="flex-1 min-w-[120px] rounded-lg py-3 data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white transition-all">Mühendislik</TabsTrigger>
                        <TabsTrigger value="infrastructure" className="flex-1 min-w-[120px] rounded-lg py-3 data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white transition-all">Altyapı</TabsTrigger>
                        <TabsTrigger value="precast" className="flex-1 min-w-[120px] rounded-lg py-3 data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white transition-all">Prekast</TabsTrigger>
                    </TabsList>

                    {/* Architecture Content */}
                    <TabsContent value="architecture" className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                                    <PenTool className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Allplan Architecture</h3>
                                    <p className="text-gray-400">Tasarım özgürlüğü ve hassas dokümantasyon.</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-[#111] p-6 rounded-xl border border-white/5">
                                    <h4 className="text-lg font-bold text-white mb-3">Temel Özellikler</h4>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Üstün modelleme yetenekleri ile karmaşık geometrileri kolayca oluşturun.
                                        Tutarlı şablonlar ile projeleri hızla görselleştirin ve hataları en aza indirin.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-red-500" /> Çok katmanlı duvar ve bitiş modelleme</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-red-500" /> Akıllı oda filtreleri ve metraj</li>
                                    </ul>
                                </div>
                                <div className="bg-[#111] p-6 rounded-xl border border-white/5">
                                    <h4 className="text-lg font-bold text-white mb-3">Allplan 2026 ile Yeni</h4>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Çok katmanlı dikey bitişler, gerçekçi geometri ve kural tabanlı dağıtım sunar.
                                        3D süpürgelik modellemesi iç mekan tasarımını detaylandırır.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <h4 className="text-lg font-bold text-white mb-4">Profesyonel İş Akışları</h4>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="efficiency" className="border-white/10">
                                        <AccordionTrigger className="text-gray-200 hover:text-white">Verimlilik ve Doğruluk</AccordionTrigger>
                                        <AccordionContent className="text-gray-400">
                                            3D modelleme kullanarak tasarım teslimatlarında, görselleştirmelerde ve detaylı inşaat çizimlerinde
                                            %50 daha fazla doğruluk ve %30 daha fazla üretkenlik elde edilir. Manuel miktar keşfine kıyasla
                                            %70 daha verimli maliyetlendirme ve malzeme keşifleri yapılabilir.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="parametric" className="border-white/10">
                                        <AccordionTrigger className="text-gray-200 hover:text-white">Parametrik Tasarım</AccordionTrigger>
                                        <AccordionContent className="text-gray-400">
                                            Parametrik nesneler ve Visual Scripting ile tekrarlayan görevler otomatikleştirilir.
                                            Bu, tasarım değişikliklerine hızlı yanıt verilmesini ve hataların en aza indirilmesini sağlar.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="bim" className="border-white/10">
                                        <AccordionTrigger className="text-gray-200 hover:text-white">Open BIM Entegrasyonu</AccordionTrigger>
                                        <AccordionContent className="text-gray-400">
                                            IFC veri alışverişi ve BCF tabanlı çakışma yönetimi ile diğer disiplinlerle sorunsuz işbirliği sağlanır.
                                            Projenin tüm paydaşları arasında bilgi akışı optimize edilir.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Engineering Content */}
                    <TabsContent value="engineering" className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                                    <Zap className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Allplan Engineering</h3>
                                    <p className="text-gray-400">Yapısal analiz, donatı ve çelik detaylandırma.</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-[#111] p-6 rounded-xl border border-white/5">
                                    <h4 className="text-lg font-bold text-white mb-3">Çoklu Malzeme Planlama</h4>
                                    <p className="text-gray-400 text-sm">
                                        Dökme yerinde beton, prekast, çelik ve ahşap dahil olmak üzere tüm malzemeleri optimize edin.
                                        Donatı ve çelik yapıların hızlı tasarımı için otomatik çözümler kullanın.
                                    </p>
                                </div>
                                <div className="bg-[#111] p-6 rounded-xl border border-white/5">
                                    <h4 className="text-lg font-bold text-white mb-3">Otomatik Donatı</h4>
                                    <p className="text-gray-400 text-sm">
                                        Kolon donatı PythonPart&apos;ı gibi araçlarla tekrarlayan elemanları saniyeler içinde donatın.
                                        Çap, aralık ve bindirme boylarını parametrik olarak yönetin.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <h4 className="text-lg font-bold text-white mb-4">Mühendislik İş Akışları</h4>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="data-exchange" className="border-white/10">
                                        <AccordionTrigger className="text-gray-200 hover:text-white">Gelişmiş Veri Değişimi</AccordionTrigger>
                                        <AccordionContent className="text-gray-400">
                                            50&apos;den fazla dosya formatı desteği ile proje ortaklarından gelen verileri içe aktarın.
                                            SCIA AutoConverter ve SAF formatı ile yapısal modelleri analiz yazılımlarına kayıpsız aktarın.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="sds2" className="border-white/10">
                                        <AccordionTrigger className="text-gray-200 hover:text-white">Çelik Yapı Detaylandırma (SDS2)</AccordionTrigger>
                                        <AccordionContent className="text-gray-400">
                                            SDS2 entegrasyonu ile çelik yapıların modellemesinden imalatına uçtan uca iş akışı sağlayın.
                                            Akıllı ve otomatik bağlantı tasarımı ile manuel hataları önleyin.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Infrastructure Content */}
                    <TabsContent value="infrastructure" className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-500/10 rounded-lg text-green-500">
                                    <Layers className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Infrastructure & Civil</h3>
                                    <p className="text-gray-400">Yol, köprü ve tünel projeleri için parametrik modelleme.</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-[#111] p-6 rounded-xl border border-white/5">
                                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                        <FileJson className="w-4 h-4 text-green-500" />
                                        <span>Case Study: Porto Metro &quot;Ruby Line&quot;</span>
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-4">
                                        Karmaşık tünel kesitleri (NATM ve Aç-Kapa) için <strong>LandXML</strong> aks verileri Bimplus üzerinden içe aktarılarak modellendi.
                                        Tünel duvarlarındaki kazıklar (piles) <strong>PythonParts</strong> kullanılarak tek tek modellemek yerine otomatikleştirildi.
                                    </p>
                                    <div className="flex gap-2 text-xs text-green-400/80 bg-green-500/5 p-2 rounded border border-green-500/10">
                                        <span>&quot;Etkileşimleri 3D model olmadan görselleştirmek inanılmaz derecede zor olurdu.&quot; — QUADRANTE</span>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-6">
                                    <h4 className="text-lg font-bold text-white mb-4">Altyapı İş Akışları</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-[#111] rounded-xl border border-white/5">
                                            <h5 className="font-bold text-white mb-1">Arazi Etüdü & Point Cloud</h5>
                                            <p className="text-xs text-gray-400">
                                                Scalypso gibi entegre araçlarla saha nokta bulutu (Point Cloud) verilerini işleyin
                                                ve mevcut durumun hassas envanterini (As-built) oluşturun.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-[#111] rounded-xl border border-white/5">
                                            <h5 className="font-bold text-white mb-1">Şantiye Planlama</h5>
                                            <p className="text-xs text-gray-400">
                                                Kule vinç gibi şantiye ekipmanlarını yerleştirin, çarpışma tespiti yapın
                                                ve basit kaldırma analizleri gerçekleştirin.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Precast Content */}
                    <TabsContent value="precast" className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                        <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-orange-500/10 rounded-lg text-orange-500">
                                    <Box className="h-8 w-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Allplan Precast</h3>
                                    <p className="text-gray-400">Otomatik prekast detaylandırma ve üretim (CAM) verisi.</p>
                                </div>
                            </div>

                            <div className="mb-6 p-6 bg-[#111] rounded-xl border border-white/5">
                                <h4 className="text-lg font-bold text-white mb-3">Vaka Çalışması: BFU (Rütihof)</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    Önceden kağıt planlar (2D) ve manuel kontrollerle yürüyen süreç, <strong>Allplan IFC-Assistant</strong> ile tamamen dijitalleşti.
                                    BFU, sadece <strong>9 ayda 10.000m² döşeme ve 1.100m² duvar</strong> elemanını detaylandırıp üretti.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Hata oranında ciddi düşüş</li>
                                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-orange-500" /> Üretime hazır otomatik shop drawingler</li>
                                </ul>
                            </div>

                            <ul className="grid md:grid-cols-2 gap-4 mb-8">
                                <li className="bg-[#111] p-4 rounded-xl border border-white/5">
                                    <strong className="text-white block mb-1">Otomatik Atölye Çizimleri</strong>
                                    <span className="text-xs text-gray-400">Donatı, armatür ve boyutlandırma dahil yüksek düzeyde otomatik kalıp planları oluşturun.</span>
                                </li>
                                <li className="bg-[#111] p-4 rounded-xl border border-white/5">
                                    <strong className="text-white block mb-1">Üretim Entegrasyonu</strong>
                                    <span className="text-xs text-gray-400">Duvar ve döşemeleri fabrika kapasitesine göre otomatik bölün ve CAM verilerini gönderin.</span>
                                </li>
                            </ul>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>

            {/* Interoperability & Clash Workflow (NEW) */}
            <section id="interoperability" className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-indigo-500/20 p-3 rounded-xl">
                        <Globe className="h-6 w-6 text-indigo-500" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">Open BIM ve İşbirliği</h2>
                        <p className="text-gray-400 mt-1">Bimplus ve BCF ile merkezileştirilmiş proje yönetimi.</p>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-8">
                    <div className="mb-8 p-6 bg-[#111] rounded-xl border-l-4 border-l-indigo-500">
                        <h3 className="text-xl font-bold text-white mb-2">Adım Adım Çakışma Çözümü (Clash Resolution)</h3>
                        <p className="text-gray-400 mb-6">Proje paydaşları arasında verimsiz e-posta trafiği yerine, Bimplus entegrasyonu ile şu adımları izleyin:</p>

                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">1</div>
                                <div>
                                    <strong className="text-white">Çakışma Tespiti</strong>
                                    <p className="text-sm text-gray-400">Modelde <code>Check &gt; Clash Detection</code> komutunu çalıştırın ve raporu inceleyin.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">2</div>
                                <div>
                                    <strong className="text-white">BCF Sorunu Oluşturma (Issue Creation)</strong>
                                    <p className="text-sm text-gray-400">Tespit edilen çakışmayı seçin, <code>Issue Manager</code> üzerinden BCF sorunu oluşturun. Konum, ekran görüntüsü ve sorumluyu ekleyin.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">3</div>
                                <div>
                                    <strong className="text-white">Bimplus Senkronizasyonu</strong>
                                    <p className="text-sm text-gray-400">Sorunu buluta gönderin. Diğer disiplinler (ör: MEP mühendisi) kendi yazılımlarında bu sorunu anında görür.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">4</div>
                                <div>
                                    <strong className="text-white">Çözüm ve Doğrulama</strong>
                                    <p className="text-sm text-gray-400">Sorun çözüldüğünde Bimplus&apos;ta &quot;Resolved&quot; olarak işaretlenir. Allplan&apos;da durum güncellenir ve sorun kapatılır.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-white mb-3">IFC Veri Güvenliği</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-indigo-500 mt-0.5" />
                                    <span><strong>Nitelik Eşleme (Mapping):</strong> Veri kaybını önlemek için Allplan niteliklerini IFC Pset&apos;lerine doğru eşleyin.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-indigo-500 mt-0.5" />
                                    <span><strong>IDS Desteği:</strong> Proje bilgi gereksinimlerini (IDS) otomatik kontrol edin.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-3">Partner Entegrasyonları</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-[#151515] text-gray-300 text-xs rounded-full border border-white/10">SCIA Engineer</span>
                                <span className="px-3 py-1 bg-[#151515] text-gray-300 text-xs rounded-full border border-white/10">Frilo</span>
                                <span className="px-3 py-1 bg-[#151515] text-gray-300 text-xs rounded-full border border-white/10">Bluebeam</span>
                                <span className="px-3 py-1 bg-[#151515] text-gray-300 text-xs rounded-full border border-white/10">SDS2</span>
                                <span className="px-3 py-1 bg-[#151515] text-gray-300 text-xs rounded-full border border-white/10">Redshift</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pro Tips (Retained & Polished) */}
            <section id="pro-tips" className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-yellow-500/20 p-3 rounded-xl">
                        <Lightbulb className="h-6 w-6 text-yellow-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">5 Profesyonel İpucu</h2>
                </div>
                <div className="grid gap-4">
                    <div className="p-4 rounded-xl bg-[#111] border border-white/5 flex gap-4">
                        <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-black font-bold">1</span>
                        <div>
                            <h4 className="text-white font-bold">Veri Kaybını Önleyin</h4>
                            <p className="text-sm text-gray-400">IFC dışa aktarımda &quot;Attribute Mapping&quot; ve &quot;Yalnızca Atanan Nitelikleri Aktar&quot; seçeneklerini kullanın.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#111] border border-white/5 flex gap-4">
                        <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-black font-bold">2</span>
                        <div>
                            <h4 className="text-white font-bold">Otomasyon Kullanın</h4>
                            <p className="text-sm text-gray-400">Tekrarlayan işler için PythonParts veya Visual Scripting scriptlerini devreye sokun.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#111] border border-white/5 flex gap-4">
                        <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-black font-bold">3</span>
                        <div>
                            <h4 className="text-white font-bold">Parametrik Yönetim</h4>
                            <p className="text-sm text-gray-400">Revizyonları hızlandırmak için yol ve altyapı projelerinde parametrik modellemeyi tercih edin.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#111] border border-white/5 flex gap-4">
                        <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-black font-bold">4</span>
                        <div>
                            <h4 className="text-white font-bold">BCF ile Koordinasyon</h4>
                            <p className="text-sm text-gray-400">Bimplus entegrasyonu ile çakışmaları e-posta yerine BCF üzerinden yönetin.</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#111] border border-white/5 flex gap-4">
                        <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500 text-black font-bold">5</span>
                        <div>
                            <h4 className="text-white font-bold">Entegre Analiz</h4>
                            <p className="text-sm text-gray-400">SCIA AutoConverter kullanarak modelinizi analiz yazılımlarına tek tıkla aktarın.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories (Expanded) */}
            <section id="success-stories" className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-green-500/20 p-3 rounded-xl">
                        <Database className="h-6 w-6 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Gerçek Hayat Senaryoları</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-2">Zürih &quot;The Circle&quot;</h3>
                        <p className="text-xs text-gray-400 mb-4 line-clamp-4">
                            1 Milyar İsviçre frangı yatırım ve 180.000 m² alan. Allplan ile tamamen BIM olarak planlanan devasa kompleks.
                            Büyük model verilerinin yönetimi ve disiplinler arası koordinasyon başarısı.
                        </p>
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">Architecture</span>
                    </div>
                    <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-2">Porto Metro &quot;Ruby Line&quot;</h3>
                        <p className="text-xs text-gray-400 mb-4 line-clamp-4">
                            Tünel, viyadük ve istasyonların karmaşık etkileşimi.
                            <strong>LandXML</strong> entegrasyonu ve 3D görselleştirme sayesinde çakışmasız tasarım ve parametrik revizyon imkanı.
                        </p>
                        <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded">Infrastructure</span>
                    </div>
                    <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-2">Rütihof (BFU)</h3>
                        <p className="text-xs text-gray-400 mb-4 line-clamp-4">
                            Manuel 2D süreçlerden tam otomatik BIM&apos;e geçiş. <strong>10.000m² döşeme</strong> sadece 9 ayda üretildi.
                            Kağıt paftalar yerine dijital ve hatasız üretim.
                        </p>
                        <span className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded">Precast</span>
                    </div>
                </div>
            </section>

            {/* 2026 Features */}
            <section id="features-2026" className="space-y-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                        <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Allplan 2026 Yenilikleri</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-[#111] border border-white/5">
                        <h3 className="font-bold text-white mb-2">Öncelik Tabanlı Bağlantılar (PBC)</h3>
                        <p className="text-sm text-gray-400">Özel bileşenler ile yapı elemanları arasında otomatik ve akıllı birleşimler.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#111] border border-white/5">
                        <h3 className="font-bold text-white mb-2">Gelişmiş Bitiş Modellemesi</h3>
                        <p className="text-sm text-gray-400">Gerçekçi geometriye sahip çok katmanlı dikey bitişler ve süpürgelikler.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
