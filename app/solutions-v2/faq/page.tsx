"use client";

import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Cloud, RefreshCw, Users } from "lucide-react";

export default function FAQPage() {
    return (
        <PageWrapper>
            <HeroInternal
                category="YARDIM MERKEZİ"
                title="Sıkça Sorulan Sorular"
                subtitle="Allplan lisanslama, teknik özellikler ve abonelik modelleri hakkında merak ettikleriniz."
            />

            <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#050505] min-h-screen">
                <div className="max-w-[1000px] mx-auto">
                    <Tabs defaultValue="subscription" className="w-full">
                        <TabsList className="flex flex-wrap h-auto bg-[#111] p-2 rounded-2xl mb-12 border border-white/10 gap-2">
                            <TabsTrigger
                                value="subscription"
                                className="flex-1 min-w-[150px] py-4 rounded-xl data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white transition-all gap-2"
                            >
                                <HelpCircle className="h-4 w-4" /> Genel & Abonelik
                            </TabsTrigger>
                            <TabsTrigger
                                value="cloud"
                                className="flex-1 min-w-[150px] py-4 rounded-xl data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white transition-all gap-2"
                            >
                                <Cloud className="h-4 w-4" /> Cloud Hizmetleri
                            </TabsTrigger>
                            <TabsTrigger
                                value="conversion"
                                className="flex-1 min-w-[150px] py-4 rounded-xl data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white transition-all gap-2"
                            >
                                <RefreshCw className="h-4 w-4" /> Lisans Dönüşümü
                            </TabsTrigger>
                            <TabsTrigger
                                value="workgroup"
                                className="flex-1 min-w-[150px] py-4 rounded-xl data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white transition-all gap-2"
                            >
                                <Users className="h-4 w-4" /> Workgroup & İşbirliği
                            </TabsTrigger>
                            <TabsTrigger
                                value="lifecycle"
                                className="flex-1 min-w-[150px] py-4 rounded-xl data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white transition-all gap-2"
                            >
                                <RefreshCw className="h-4 w-4" /> Ürün Yaşam Döngüsü
                            </TabsTrigger>
                        </TabsList>

                        {/* SECTION 1: SUBSCRIPTION */}
                        <TabsContent value="subscription" className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2">Genel Abonelik (Subscription) SSS</h2>
                                <p className="text-gray-400">Allplan abonelik sistemi, ödeme seçenekleri ve iptal koşulları hakkında bilgiler.</p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-1" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Abonelik (Subscription) nedir?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        Abonelik, yazılım ve hizmetlere belirli bir süre için (aylık, yıllık veya 3 yıllık) erişim sağladığınız bir sözleşme türüdür.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Abonelik ile neleri elde ederim?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-2">
                                        <p>Abonelik süresince aşağıdakilere erişim sağlarsınız:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Satın alınan süre boyunca seçilen yazılım sürümüne erişim</li>
                                            <li>BIMPLUS dahil ALLPLAN Cloud hizmetleri</li>
                                            <li>Verimli ofis içi takım çalışması araçları</li>
                                            <li>Ağ ve şirket sınırları ötesinde takım çalışması</li>
                                            <li>Çizim ve planların yönetimi ve dağıtımı</li>
                                            <li>Pazar lideri ürün entegrasyonları (Solibri Inside, AutoConverter)</li>
                                            <li>Teknik Destek ekiplerine erişim</li>
                                            <li>Online eğitim kaynakları</li>
                                            <li>Yeni yazılım sürümlerine anında erişim</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Abonelik süresi ne kadardır ve yenilemek istemezsem ne olur?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-4">
                                        <div>
                                            <strong>Abonelik Süreleri:</strong>
                                            <ul className="list-disc pl-5 mt-1">
                                                <li>Aylık abonelik</li>
                                                <li>Yıllık abonelik</li>
                                                <li>3 Yıllık abonelik</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <strong>İptal Bildirim Süreleri:</strong>
                                            <ul className="list-disc pl-5 mt-1">
                                                <li>Aylık: 1 ay önceden bildirim</li>
                                                <li>Yıllık/3 Yıllık: 3 ay önceden bildirim</li>
                                                <li>Tüm abonelikler, başlangıç süresine göre otomatik olarak yenilenir.</li>
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Ödemeyi nasıl yapabilirim?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        Ödemeler 1 aylık, 1 yıllık veya 3 yıllık dönemler halinde yapılabilir. Ödeme yöntemleri ülkeye göre değişmekle birlikte genellikle Kredi Kartı veya Havale/EFT (SEPA) şeklindedir. Ödeme, tüm abonelik süresi için peşin alınır.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Aboneliğimi iptal edersem ne olur?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        Aboneliğiniz iptal edilene kadar devam eder. Süre sonunda, yazılıma ve hizmetlere erişiminiz otomatik olarak sona erer.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Yazılıma erişmek için başka seçeneğim var mı?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-2">
                                        <p>Evet, belirli ürünler için Kalıcı Lisans (Perpetual License) seçeneği mevcuttur:</p>
                                        <ul className="list-disc pl-5">
                                            <li>ALLPLAN Ultimate</li>
                                            <li>ALLPLAN Civil</li>
                                            <li>ALLPLAN Precast</li>
                                        </ul>
                                        <p className="mt-2 text-sm italic">Not: İlk yıl zorunlu Serviceplus sözleşmesi gereklidir. Bu lisanslar ALLPLAN Cloud erişimini içermez.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Aboneliğin temel avantajları nelerdir?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Esneklik</li>
                                            <li>Düşük başlangıç maliyeti</li>
                                            <li>Her zaman en son yazılım sürümüne erişim</li>
                                            <li>ALLPLAN Cloud hizmetlerinin dahil olması</li>
                                            <li>Teknik destek uzmanlığına erişim</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>

                        {/* SECTION 2: CLOUD */}
                        <TabsContent value="cloud" className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2">ALLPLAN Cloud SSS</h2>
                                <p className="text-gray-400">Bulut depolama, Bimplus ve entegre hizmetler hakkında detaylar.</p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="cloud-1" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Abonelikle birlikte ne kadar Cloud depolama alanı alırım?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        ALLPLAN Cloud ile birlikte <strong>10 GB</strong> depolama alanı dahildir. İsterseniz ek 100 GB depolama alanı satın alabilirsiniz.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="cloud-2" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Hangi ALLPLAN Cloud hizmetleri dahildir?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-2">
                                        <strong>Temel Hizmetler:</strong>
                                        <ul className="list-disc pl-5">
                                            <li>BIMPLUS ile model görüntüleme/yönetimi</li>
                                            <li>ALLPLAN Workgroup Manager (ofis içi takım çalışması)</li>
                                            <li>ALLPLAN Share (ağlar arası/şirketler arası takım çalışması)</li>
                                            <li>ALLPLAN Exchange (çizim/plan yönetimi ve dağıtımı)</li>
                                        </ul>
                                        <strong>Entegrasyonlar:</strong>
                                        <ul className="list-disc pl-5">
                                            <li>Solibri Inside (model kontrolü)</li>
                                            <li>AutoConverter (yapısal analiz araçları entegrasyonu)</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="cloud-3" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Cloud hizmetlerini kullanmak zorunda mıyım?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        Hayır. Cloud hizmetleri abonelikle birlikte sunulur ancak kullanımı tamamen isteğe bağlıdır.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="cloud-4" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Workgroup Manager, Allplan Cloud hizmetlerine dahil mi?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        Evet, dahildir.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="cloud-5" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">BIMPLUS aboneliğe nasıl uygulanır?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        BIMPLUS, abonelik lisansınıza zaten dahildir. Ayrıca bağımsız bir ürün olarak da kullanılmaya devam edecektir.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>

                        {/* SECTION 3: CONVERSION */}
                        <TabsContent value="conversion" className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2">Serviceplus&apos;tan Aboneliğe Geçiş</h2>
                                <p className="text-gray-400">Mevcut kalıcı lisansınızı abonelik modeline dönüştürme süreci.</p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="conv-1" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">ALLPLAN Aboneliğine geçtiğimde ne olur?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-2">
                                        <ul className="list-disc pl-5">
                                            <li>Mevcut lisansınız ALLPLAN Abonelik lisansına dönüştürülür.</li>
                                            <li>Tüm ALLPLAN Cloud Hizmetlerine tam erişim kazanırsınız.</li>
                                            <li>Teknik Destek ve Online Eğitim kaynaklarına erişiminiz devam eder.</li>
                                            <li>Yeni sürümlere anında erişirsiniz.</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="conv-2" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Kalıcı lisansımı kaybeder miyim?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        Evet. ALLPLAN Aboneliğine geçtiğinizde, kalıcı lisans üzerindeki haklarınız ve erişiminiz sona erer; bunun yerine güncel ve kapsamlı abonelik avantajlarına sahip olursunuz.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="conv-3" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Abonelik taahhüt süresi nedir?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-2">
                                        <p>Mevcut Serviceplus müşterileri için 12 aylık abonelik sözleşmesi yapılır. Ayrıca, abonelik yenileme fiyatınız 2 yıl boyunca sabitlenir.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="conv-4" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Desteklenmeyen eski sürümleri kullanmanın riskleri nelerdir?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-2">
                                        <p>Teknik olarak mümkün olsa da, desteklenmeyen yazılım kullanmak şu riskleri taşır:</p>
                                        <ul className="list-disc pl-5">
                                            <li>Güvenlik açıkları</li>
                                            <li>Stabilite sorunları</li>
                                            <li>Performans problemleri</li>
                                            <li>Veri uyumluluğu sorunları</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>

                        {/* SECTION 4: WORKGROUP */}
                        <TabsContent value="workgroup" className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2">Workgroup Manager & Gelecek</h2>
                                <p className="text-gray-400">İşbirliği araçlarının geleceği ve uyumluluk süreçleri.</p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="wg-1" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Workgroup Manager, Share ve Exchange yeni lisanslar için nasıl sunulacak?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        1 Ekim 2023 itibariyle, bu hizmetler <strong>sadece Abonelik</strong> (Subscription) ile sunulmaktadır. Yeni kalıcı lisanslarda bu özellikler mevcut değildir.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="wg-2" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Kalıcı lisansım ile mevcut Workgroup Manager&apos;ı kullanmaya devam edebilir miyim?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-2">
                                        <p><strong>Workgroup Manager:</strong> ALLPLAN 2027 sürümüne kadar uyumludur. Ekim 2027&apos;de bakımı ve desteği sona erecektir.</p>
                                        <p><strong>Exchange & Share:</strong> Ekim 2026&apos;da bakımı ve desteği sona erecektir.</p>
                                        <p className="mt-2 text-sm text-yellow-500">Not: Gelecek özellikler ve entegrasyonlar sadece Abonelik modelinde geliştirilmeye devam edecektir.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="wg-3" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Mevcut Workgroup Manager iş akışlarımızın geleceği ne olacak?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed text-sm space-y-2">
                                        <p>İşbirliği, proje teslimi için hayati önem taşır. Yerel (LAN) ve global (WAN) işbirliği çözümleri gelişmeye devam edecektir:</p>
                                        <ul className="list-disc pl-5">
                                            <li>Workgroup Manager 2027&apos;ye kadar bağımsız ürün olarak kalacaktır.</li>
                                            <li>LAN çözümünün sürekli iyileştirilmesi devam edecektir.</li>
                                            <li>Share (WAN) ve BIMPLUS entegrasyonları ile &quot;Allplan Cloud&quot; çatısı altında daha kapsamlı ve güvenli bir işbirliği platformu hedeflenmektedir.</li>
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </TabsContent>

                        {/* SECTION 5: LIFECYCLE */}
                        <TabsContent value="lifecycle" className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2">Ürün Yaşam Döngüsü (Product Lifecycle)</h2>
                                <p className="text-gray-400">Versiyon onayı, bakım aşamaları ve teknik destek kapsamı politikaları. (13 Ocak 2025&apos;ten itibaren geçerlidir)</p>
                            </div>

                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="lc-1" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Bu ürün yaşam döngüsü politikasının kapsamı nedir?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        Bu politika <strong>13 Ocak 2025</strong> tarihi itibariyle geçerlidir ve ALLPLAN&apos;ın masaüstü ürünlerini (ALLPLAN, FRILO, DC-Software), SCIA ve SDS2 ürünlerinin şimdiki ve gelecek versiyonlarını kapsar. ALLPLAN 2024 ve önceki sürümleri kapsayan eski politikaların yerini alır.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="lc-2" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Ürün Bakımı (Product Maintenance) ve Sürüm Desteği (Version Support) arasındaki fark nedir?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-3">
                                        <p><strong>Ürün Bakımı:</strong> Belirli bir sürümün bulunduğu bakım aşamasına bağlı olarak kullanıcının bekleyebileceği yazılım güncelleme türlerini tanımlar.</p>
                                        <p><strong>Sürüm Desteği:</strong> Teknik Destek ile iletişim kurma yollarını ve sağlanan hizmetleri tanımlar.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="lc-3" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Hangi bakım hizmetleri hangi aşamaya dahildir?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-center border-collapse">
                                                <thead>
                                                    <tr className="border-b border-white/10 text-gray-300">
                                                        <th className="p-3 text-left">Ürün Bakım Hizmetleri</th>
                                                        <th className="p-3">Current<br />(Güncel)</th>
                                                        <th className="p-3">Supported<br />(Desteklenen)</th>
                                                        <th className="p-3">Retired<br />(Emekli)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-400">
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-3 text-left">Yeni özellikler</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-3 text-left">İyileştirmeler</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-3 text-left">Bakım düzeltmeleri*</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-3 text-left">Yeni ortamları sertifikalandırma</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 text-left">ALLPLAN Cloud Bağlantısı (Direct Interface)</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mt-3 text-xs text-gray-500">* ALLPLAN, hataların ve eksikliklerin düzeltilmesini, kullanıcılar üzerindeki etkilerini ve diğer kriterleri göz önünde bulundurarak kendi takdirine bağlı olarak önceliklendirir.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="lc-4" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Hangi teknik destek hizmetleri hangi aşamaya dahildir?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed">
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-center border-collapse">
                                                <thead>
                                                    <tr className="border-b border-white/10 text-gray-300">
                                                        <th className="p-3 text-left">Teknik Destek Hizmetleri</th>
                                                        <th className="p-3">Current<br />(Güncel)</th>
                                                        <th className="p-3">Supported<br />(Desteklenen)</th>
                                                        <th className="p-3">Retired<br />(Emekli)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-400">
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-3 text-left">Destek kaynakları (online)</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-3 text-left">Eğitim materyalleri (online)</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-3 text-left">Olay bildirimi (Telefon, mail, ticket)</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-3 text-left">Hizmet talepleri (Service requests)</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="p-3 text-left">İndirmeler (Downloads)</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-green-500">✓</td>
                                                        <td className="p-3 text-red-500">-</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="lc-5" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Ana Sürüm (Major Version) nedir? Ne sıklıkla yayınlanır?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-2">
                                        <p><strong>Nedir?</strong> Yeni (büyük) özellikler, geliştirmeler veya değişiklikler içeren sürümdür. Sürüm numarasının en solundaki rakam değiştiğinde anlaşılır (Örn. ALLPLAN 2025&apos;ten ALLPLAN 2026&apos;ya geçiş).</p>
                                        <p><strong>Yayınlanma Sıklığı:</strong> Genellikle yılda bir kez.</p>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="lc-6" className="border border-white/10 rounded-xl bg-[#111] px-4">
                                    <AccordionTrigger className="text-white hover:text-[#3B82F6] text-left uppercase tracking-wide">Ara Sürüm (Minor Version) nedir? Ne sıklıkla yayınlanır?</AccordionTrigger>
                                    <AccordionContent className="text-gray-400 leading-relaxed space-y-2">
                                        <p><strong>Nedir?</strong> Küçük özellikler, stabilite, performans veya güvenlik iyileştirmeleri içeren sürümdür. Sürüm numarasının sağındaki rakamlar değiştiğinde anlaşılır (Örn. 2025-0-1 veya 2025-1-0).</p>
                                        <p><strong>Yayınlanma Sıklığı:</strong> Genellikle yılda birkaç kez (ürün hattına göre değişir).</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="mt-8 flex justify-center">
                                <a
                                    href="https://www.allplan.com/product-lifecycle/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3B82F6] hover:bg-blue-700 transition-colors duration-200"
                                >
                                    Learn more: ALLPLAN product lifecycle policy
                                </a>
                            </div>
                        </TabsContent>

                    </Tabs>
                </div>
            </section>
        </PageWrapper>
    );
}
