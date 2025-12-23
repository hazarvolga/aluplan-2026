"use client"
import React from "react";
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import SolutionHero from "@/components/SolutionHero";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Globe, Database, FileCode, Layers, Cloud, Map, Leaf, Play } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Import downloaded assets
import imgGeoref from "@/assets/products/allplan-2026/georeferencing.jpg";
import imgBsdd from "@/assets/products/allplan-2026/bsdd-import.jpg";
import imgIds from "@/assets/products/allplan-2026/ids-import.jpg";
import imgInfoPalette from "@/assets/products/allplan-2026/info-palette.jpg";
import imgXref from "@/assets/products/allplan-2026/xref-manager.jpg";
import imgGeopackage from "@/assets/products/allplan-2026/geopackage.jpg";
import imgPreoptima from "@/assets/products/allplan-2026/preoptima.jpg";

export default function Allplan2026Page() {
    const groups = [
        {
            title: "BİLGİ MODELLEME VE YÖNETİMİ",
            features: [
                {
                    title: "Georeferans Noktaları ile Kesin Konumlandırma",
                    desc: "Coğrafi Referans Desteği (Georeferencing Support)",
                    package: "#Basic",
                    icon: Map,
                    img: imgGeoref,
                    videoUrl: "https://www.youtube.com/embed/L84OwVTOQFE",
                    details: [
                        "BIM’de doğru georeferanslama, projenin doğru yerleştirilmesi, gerçek kuzey yönü ve hassas konum verileri için kritik öneme sahiptir.",
                        "ALLPLAN 2026, yeni georeferans ayar seçenekleri sunar: Survey Point (Arazi Referanslı Koordinatlar) ve Base Point (Yerel orijin ve proje kaydırması için).",
                        "Bu sayede IFC gibi formatlarla sorunsuz iş birliği sağlanır ve veri alışverişi sırasında model dönüşümlerinin önüne geçilir.",
                        "Georeferans noktaları görsel olarak temsil edilir, böylece kolayca yerleştirilebilir ve ayarlanabilir.",
                        "Gerçek kuzey yönü ayrı bir ayar olarak tanımlanabildiğinden, ALLPLAN’in georeferans araçları kullanıcıların projeyi gerçek dünya koordinatlarında doğru konumlandırmasına, disiplinler arası iş birliğini geliştirmesine ve tüm BIM bileşenlerinin doğru hizalanmasını sağlamasına olanak tanır."
                    ]
                },
                {
                    title: "Standartlaştırılmış verilerle sorunsuz BIM entegrasyonu",
                    desc: "Import buildingSMART Data Dictionary (BSDD) İçe Aktarma",
                    package: "#Concept",
                    icon: Database,
                    img: imgBsdd,
                    videoUrl: "https://www.youtube.com/embed/Rn_dGLfVLf4",
                    details: [
                        "ALLPLAN 2026, 300’den fazla uzman sözlüğe entegre bSDD erişimi sunarak BIM iş akışlarını basitleştirir. Bu sözlükler arasında sürdürülebilirlik standartları ve ülkeye özel düzenlemeler de bulunur.",
                        "Kullanıcılar, uzman nitelik setlerini nesnelere hızlıca aktarabilir, böylece projelere daha hızlı başlanabilir, karar alma süreçleri iyileşir ve openBIM veri alışverişi sorunsuz şekilde sağlanır — manuel kurulum gerekmez.",
                        "Sonuç: denetime hazır dokümantasyon ve yüksek veri kalitesi ile daha akıllı projeler inşa edin."
                    ]
                },
                {
                    title: "BIM uyumluluğunu otomatikleştirin ve IDS kurallarıyla veri entegrasyonunu kolaylaştırın",
                    desc: "IDS Tabanlı Nitelik İçe Aktarma (IDS-Based Attribute Import)",
                    package: "#Professional",
                    icon: FileCode,
                    img: imgIds,
                    videoUrl: "https://www.youtube.com/embed/cv3BngfF0_o",
                    details: [
                        "BIM planlama süreçlerinde, bilgilerin kolay ve doğru bir şekilde entegre edilmesi kritik öneme sahiptir.",
                        "IDS (Information Delivery Specification), buildingSMART tarafından geliştirilen standart bir formattır ve BIM projeleri için gerekli bilgi gereksinimlerini net ve otomatik bir şekilde tanımlar, böylece BIM modelleri tüm gerekli verileri içerir.",
                        "ALLPLAN 2026, IDS dosyalarını ekstra ve genişletilmiş destekle sunar; model niteliklerini otomatik olarak kontrol eder ve BIM gereksinimlerini karşılayacak şekilde uyumlar.",
                        "Bu sayede, veri düzeltmeye harcanan süre azalır, tasarım, koordinasyon ve uyumlu model teslimi için daha fazla zaman kazanılır."
                    ]
                },
                {
                    title: "Daha akıllı ve hızlı proje yönetimi için kolay organizasyon ve kontrol",
                    desc: "Geliştirilmiş Bilgi Paleti (Enhanced Information Palette)",
                    package: "#Concept",
                    icon: Layers,
                    img: imgInfoPalette,
                    videoUrl: null,
                    details: [
                        "ALLPLAN 2026, tamamen yenilenmiş bir Bilgi Paleti sunar. Bu yeni sürüm, gelişmiş özellikler içerir:",
                        "Esnek gruplama ve Otomatik toplam hesaplama",
                        "IDS doğrulama ve Katalog entegrasyonu",
                        "İyileştirilmiş gezinme, Gelişmiş sıralama ve filtreleme",
                        "Daha sezgisel bir kullanıcı deneyimi için yeniden tasarlanmış arayüz",
                        "Akıcı iş akışları için performans optimizasyonları",
                        "Bu güçlü araçlar sayesinde kullanıcılar, bilgileri hızlıca organize edebilir, bulabilir ve güncelleyebilir, böylece arama süresini azaltır ve verimliliği artırır. Sonuç: daha güvenilir planlama, daha hızlı proje teslimi ve yaratıcı işlere daha fazla zaman."
                    ]
                }
            ]
        },
        {
            title: "BİRLİKTE ÇALIŞABİLİRLİK VE İŞ BİRLİĞİ İŞ AKIŞLARI",
            features: [
                {
                    title: "Gelişmiş IFC ve Bulut Referanslama - Daha fazla esneklik, bulut entegrasyonu ve kolaylaştırılmış iş birliği",
                    desc: "Geliştirilmiş XRef Yöneticisi",
                    package: "#Concept",
                    icon: Cloud,
                    img: imgXref,
                    videoUrl: "https://www.youtube.com/embed/4dalyviypDk",
                    details: [
                        "ALLPLAN 2026, önemli ölçüde geliştirilmiş bir XRef Yöneticisi sunar ve özellikle IFC dosyaları ile çalışırken daha sezgisel ve verimli bir iş akışı sağlar.",
                        "Yeni yöneticide öne çıkan özellikler:",
                        "Referans verilen IFC dosyalarının arayüz içinde 3B önizlemesi",
                        "XRef’in ALLPLAN proje klasörlerinde mi yoksa harici bir konumda mı saklandığını gösteren görsel simgeler",
                        "Değiştir, filtrele ve dosya seçimi gibi gelişmiş dosya yönetimi araçları",
                        "Bulut Referansı (Cloud Reference) yeniliği ile BIMPLUS üzerinden IFC dosyalarını doğrudan XRef olarak ekleyebilirsiniz. Bu yöntem, dosyaları yerel olarak indirmenize gerek bırakmaz, depolama gereksinimlerini azaltır ve ekibin her zaman en güncel proje verisiyle çalışmasını sağlar.",
                        "IFC kaynak dosyaları bulutta saklandığında: Yetkili kullanıcılar doğrudan ALLPLAN içinde önizleme yapabilir, IFC XRef yeteneklerini model alanında tam olarak kullanabilir ve XRef Yöneticisi’ndeki tüm ilgili bilgi yönetimi araçlarına erişebilir.",
                        "Ek iyileştirmeler: Göreli dosya yollarının otomatik korunması, kaydetme sorunlarını önler ve farklı sistemlerde referans bağlantılarının tutarlılığını sağlar.",
                        "Harici XRef’ler kaynaklarıyla birlikte dışa aktarılabilir ve içe aktarılabilir.",
                        "Proje klasörlerinde saklanan XRef’ler, .ZIP veya .APN dosyası olarak paketlenip kolayca taşınabilir.",
                        "Bu geliştirmeler, mimarlık ve mühendislik ekiplerine: Tüm proje referanslarını net ve birleşik bir görünümle sunar, veri yönetimini sadeleştirir, hem yerel hem bulut tabanlı ortamda iş birliğini güçlendirir ve proje teslimlerini daha hızlı ve güvenilir hale getirir."
                    ]
                },
                {
                    title: "Kentsel planlama için kolay ve standartlara uygun CBS veri entegrasyonu",
                    desc: "Geopackage Veri Alışverişi (Geopackage DataExchange)",
                    package: "#Concept",
                    icon: Globe,
                    img: imgGeopackage,
                    videoUrl: "https://www.youtube.com/embed/REjtplFsT10",
                    details: [
                        "Mimarlık, mühendislik ve kentsel planlama süreçlerinde coğrafi veriler, bilinçli kararlar alabilmek için kritik öneme sahiptir.",
                        "ALLPLAN, kentsel planlama ve peyzaj tasarımı için özel modüller sunar; XPlan desteği şu anda yalnızca Almanya için geçerlidir.",
                        "ALLPLAN 2026 ile GeoPackage entegrasyonu sayesinde, CBS verileri artık tüm AB ülkeleri ve ötesinde kullanılabilir.",
                        "GeoPackage ile: Coğrafi verilerin (geometri, nitelikler ve .xls dosyaları dahil) kolayca içe ve dışa aktarımı sağlanır.",
                        "Ulusal standartlara esnek biçimde uyum sağlar.",
                        "Mimarlara, planlamacılara ve yetkililere, alan bağlamını hızlı ve doğru şekilde görme olanağı sunar.",
                        "İmar, altyapı ve çevresel etki kararlarını destekler ve iyileştirir."
                    ]
                },
                {
                    title: "Daha akıllı ve sürdürülebilir tasarım kararları için erken aşama karbon değerlendirmesi",
                    desc: "Preoptima ile Entegrasyon",
                    package: "#Basic",
                    icon: Leaf,
                    img: imgPreoptima,
                    videoUrl: "https://www.youtube.com/embed/QDaM_0OYpUY",
                    details: [
                        "Sürdürülebilir tasarımlar oluşturmak için, mimarlar ve mühendislerin karbon etkilerini tasarım sürecinin erken aşamalarında değerlendirmesi gerekir.",
                        "ALLPLAN 2026, Preoptima CONCEPT ile sorunsuz bir iş akışı sunarak erken aşama sürdürülebilirlik desteği sağlar. Kullanıcılar, detaylı bir BIM modeline gerek duymadan, konsept kütle modellerini ALLPLAN’dan Preoptima CONCEPT’e erken karbon değerlendirmesi ve doğrulama amacıyla aktarabilir.",
                        "Preoptima CONCEPT, yalnızca gömülü karbon (embodied carbon) hesaplamaları yapmakla kalmaz, aynı zamanda: İşletme kaynaklı karbon (operational carbon), Tüm yaşam döngüsü karbonu (Whole Life Cycle Carbon – WLC) ve Tasarım seçeneklerini karşılaştırma (optioneering) gibi analizleri de sağlar.",
                        "Böylece kullanıcılar farklı tasarım varyantlarını karbon optimizasyonu açısından karşılaştırabilir.",
                        "Preoptima’nın çeşitli kural setlerinden yararlanarak, kullanıcılar otomatik geometri kontrolleri ve uyumluluk desteği alırken, tasarım esnekliğini korurlar. Bu iş akışı, mimarların ekonomik ve çevresel faktörleri dengeleyerek bilinçli, bütünsel kararlar almasını ve ilerleyen aşamalarda maliyetli değişiklik riskini azaltmasını sağlar.",
                        "ALLPLAN 2026 ve Preoptima CONCEPT’in entegre yetenekleri, proje ekiplerinin en iyi sürdürülebilir seçimleri yapmasını garanti ederek, en başından itibaren daha akıllı ve çevre dostu yapılar ortaya çıkarmalarını sağlar."
                    ]
                }
            ]
        },
    ];

    return (
        <PageWrapper>
            <SolutionHero
                badge="ALLPLAN 2026"
                title="DAHA İYİ BİR GELECEK İNŞA ETMEK İÇİN TASARLANDI"
                subtitle="Bilgi Modelleme, Yönetim, Birlikte Çalışabilirlik ve İş Birliği İş Akışları için Yeni Özellikler"
                description=""
                primaryButton={{
                    text: "Ücretsiz Deneyin",
                    href: "/try-free"
                }}
            />

            <section className="py-24 bg-[#0a0a0a]">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">YENİ ÖZELLİKLER</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            ALLPLAN 2026, BIM iş akışlarını optimize etmek ve disiplinler arası işbirliğini güçlendirmek için tasarlandı.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {groups.map((group, groupIdx) => (
                            <div key={groupIdx}>
                                <div className="flex items-center gap-4 mb-16">
                                    <div className="h-px flex-1 bg-white/10" />
                                    <h3 className="text-2xl font-bold text-[#3B82F6] tracking-wider uppercase text-center border px-6 py-2 rounded-full border-[#3B82F6]/30 bg-[#3B82F6]/5">
                                        {group.title}
                                    </h3>
                                    <div className="h-px flex-1 bg-white/10" />
                                </div>
                                <div className="space-y-32">
                                    {group.features.map((feature, idx) => (
                                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-start`}>
                                            {/* Image Info */}
                                            <div className="flex-1 w-full group relative">
                                                <div className="mb-4 flex items-center px-1">
                                                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${feature.package === '#Basic' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                        feature.package === '#Concept' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                                                            'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                                        }`}>
                                                        Dahil Olduğu Paket: {feature.package}
                                                    </span>
                                                </div>

                                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 aspect-video">
                                                    <Image
                                                        src={feature.img}
                                                        alt={feature.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                    {/* Video Play Button Overlay */}
                                                    {feature.videoUrl && (
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <button className="absolute inset-0 flex items-center justify-center group/play cursor-pointer z-10">
                                                                    <div className="h-20 w-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/play:scale-110 group-hover/play:bg-[#3B82F6] transition-all duration-300">
                                                                        <Play className="h-8 w-8 text-white fill-white ml-1" />
                                                                    </div>
                                                                </button>
                                                            </DialogTrigger>
                                                            <DialogContent className="max-w-[800px] border-white/10 bg-[#0a0a0a] p-0 overflow-hidden">
                                                                <div className="aspect-video w-full">
                                                                    <iframe
                                                                        src={feature.videoUrl}
                                                                        className="w-full h-full"
                                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowFullScreen
                                                                    />
                                                                </div>
                                                            </DialogContent>
                                                        </Dialog>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Text Info */}
                                            <div className="flex-1 w-full">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-3 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6]">
                                                        <feature.icon className="h-6 w-6" />
                                                    </div>
                                                    <span className="text-gray-500 font-medium tracking-widest text-sm uppercase">
                                                        {feature.desc}
                                                    </span>
                                                </div>

                                                <h3 className="text-3xl font-bold text-white mb-8 leading-tight">
                                                    {feature.title}
                                                </h3>

                                                {feature.videoUrl && (
                                                    <div className="mb-8">
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <Button variant="outline" className="border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white gap-2 transition-all">
                                                                    <Play className="h-4 w-4" />
                                                                    Videoyu Görüntüle
                                                                </Button>
                                                            </DialogTrigger>
                                                            <DialogContent className="max-w-[800px] border-white/10 bg-[#0a0a0a] p-0 overflow-hidden">
                                                                <div className="aspect-video w-full">
                                                                    <iframe
                                                                        src={feature.videoUrl}
                                                                        className="w-full h-full"
                                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                                        allowFullScreen
                                                                    />
                                                                </div>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </div>
                                                )}

                                                <ul className="space-y-4">
                                                    {feature.details.map((detail, i) => (
                                                        <li key={i} className="flex items-start gap-4 group/item">
                                                            <CheckCircle2 className="h-6 w-6 text-[#3B82F6] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                                                            <span className="text-gray-300 text-lg leading-relaxed">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </PageWrapper>
    );
}
