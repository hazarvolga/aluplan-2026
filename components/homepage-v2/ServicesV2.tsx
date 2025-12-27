"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import {
    GraduationCap,
    HeadphonesIcon,
    Award,
    Briefcase,
    ShoppingCart,
    Users,
    ArrowRight,
    Clock,
    Download,
    HelpCircle,
    LogIn,
    Key,
    Newspaper,
    Video,
    Book,
    Globe,
    Monitor,
    FileText,
    List,
    LifeBuoy
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
    {
        icon: GraduationCap,
        title: "Eğitim",
        description: "Online ve yüz yüze profesyonel ALLPLAN eğitimleri ile uzmanlaşın.",
        status: "active",
        href: "/contact",
        cta: "Eğitim Takvimi"
    },
    {
        icon: HeadphonesIcon,
        title: "Teknik Destek",
        description: "Microsoft Teams üzerinden uzaktan bağlantı ile kesintisiz teknik destek sağlıyoruz.",
        status: "active", // Changed to active for better UX structure, usually support is active
        href: "https://teams.microsoft.com/meet/39783115346098?p=wIo7WWYLZwqoHtjq3Y",
        cta: "Destek Al"
    },
    {
        icon: Briefcase,
        title: "Danışmanlık",
        description: "Şirketinize özel BIM implementasyon ve süreç danışmanlığı.",
        status: "active",
        href: "/contact",
        cta: "İletişim"
    },
    {
        icon: Award,
        title: "Sertifika",
        description: "Uluslararası geçerliliği olan ALLPLAN Uzman sertifikası.",
        status: "coming",
        href: "#",
        cta: "Yakında"
    },
    {
        icon: LifeBuoy,
        title: "Destek Platformu",
        description: "Ticket sistemi üzerinden destek taleplerinizi oluşturun ve süreçlerinizi kolayca takip edin.",
        status: "active",
        href: "https://aluplan.net.tr",
        cta: "Talep Oluştur"
    },
    {
        icon: Users,
        title: "Partner",
        description: "ALLPLAN çözüm ortağı ağımıza katılın, birlikte büyüyelim.",
        status: "active",
        href: "https://www.allplan.com/allplan-partner-solutions/",
        cta: "Başvuru Yap"
    },
    {
        icon: Download,
        title: "Download",
        description: "Güncel yazılım sürümlerini ve deneme sürümlerini indirin.",
        status: "active",
        href: "https://connect2.allplan.com/",
        cta: "İndir"
    },
    {
        icon: HelpCircle,
        title: "ALLPLAN FAQ",
        description: "Sıkça sorulan sorular ve çözüm veri tabanı.",
        status: "active",
        href: "/solutions-v2/faq",
        cta: "İncele"
    },
    {
        icon: LogIn,
        title: "Connect: Giriş",
        description: "Allplan Connect portalına giriş yapın veya şifrenizi sıfırlayın.",
        status: "active",
        href: "/solutions-v2/connect-login",
        cta: "Giriş Yap"
    },
    {
        icon: Key,
        title: "Connect: Lisans",
        description: "Lisanslarınızı yönetin, transfer edin veya güncelleyin.",
        status: "active",
        href: "/solutions-v2/connect-license",
        cta: "Yönet"
    },
    {
        icon: Newspaper,
        title: "Blog Global",
        description: "En son ALLPLAN haberleri, başarı hikayeleri ve sektör trendleri.",
        status: "active",
        href: "https://www.allplan.com/blog/",
        cta: "Okumaya Başla"
    },
    {
        icon: Video,
        title: "Canlı Webinarlar",
        description: "Uzmanların sunumuyla canlı eğitimler ve ürün tanıtımları.",
        status: "active",
        href: "https://www.allplan.com/events/events/?",
        cta: "Kayıt Ol"
    },
    {
        icon: Book,
        title: "BIM Rehberi",
        description: "BIM süreçleri ve uygulamaları için kapsamlı rehberler.",
        status: "active",
        href: "https://www.allplan.com/bim/bim-guides/",
        cta: "İncele"
    },
    {
        icon: Globe,
        title: "OPENBIM",
        description: "Açık standartlarla işbirliği, IFC ve veri değişimi hakkında her şey.",
        status: "active",
        href: "https://www.allplan.com/us_en/bim/openbim/",
        cta: "Keşfet"
    },
    {
        icon: Monitor,
        title: "Sistem Gereksinimleri",
        description: "ALLPLAN performansı için önerilen donanım ve yazılım özellikleri.",
        status: "active",
        href: "https://www.allplan.com/us_en/system/system-requirements/",
        cta: "Kontrol Et"
    },
    {
        icon: List,
        title: "Tüm Gereksinimler",
        description: "Geçmişten günümüze tüm sürümler için detaylı sistem bilgileri.",
        status: "active",
        href: "https://connect.allplan.com/support/sysinfo/2025.html",
        cta: "Listele"
    },
    {
        icon: FileText,
        title: "Sürüm Notları",
        description: "Her yeni güncelleme ile gelen, iyileştirmeler ve düzeltmeler.",
        status: "active",
        href: "https://www.allplan.com/tr/system/releasenotes/?no_cache=1",
        cta: "Oku"
    }
];

const ServicesV2 = () => {
    // Categorize services
    const servicesList = services.filter(s => ["Eğitim", "Teknik Destek", "Danışmanlık", "Sertifika", "Destek Platformu", "Partner"].includes(s.title));
    const connectList = services.filter(s => ["Connect: Giriş", "Connect: Lisans", "Download", "Tüm Gereksinimler"].includes(s.title));
    const resourcesList = services.filter(s => ["ALLPLAN FAQ", "Blog Global", "Canlı Webinarlar", "BIM Rehberi", "OPENBIM", "Sistem Gereksinimleri", "Sürüm Notları"].includes(s.title));

    const renderGrid = (items: typeof services) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {items.map((service, index) => {
                const Icon = service.icon;
                const isActive = service.status === "active";

                return (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Link
                            href={service.title === "Eğitim" ? "/solutions-v2/training" : (isActive ? service.href : "#")}
                            className={`group relative block h-full p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                                ? "bg-card border-border/10 hover:border-accent/30 hover:bg-card/80 cursor-pointer shadow-sm"
                                : "bg-muted/20 border-border/5 cursor-not-allowed opacity-60"
                                }`}
                        >
                            {/* Hosting Hover Effect */}
                            {isActive && (
                                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            )}

                            <div className="relative z-10 flex flex-col h-full pt-4">
                                {/* Icon - Moved to Top Right - 2px as requested */}
                                <div className={`absolute top-[2px] right-[2px] p-3 rounded-xl border ${isActive
                                    ? "bg-muted border-border/10 group-hover:text-accent text-muted-foreground"
                                    : "bg-muted/50 border-border/5 text-muted-foreground/60"
                                    } transition-colors`}>
                                    <Icon className="h-6 w-6" />
                                </div>

                                {/* Badge - Stays relative/left if exists */}
                                {!isActive && (
                                    <div className="mb-6">
                                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-medium text-muted-foreground bg-muted px-2 py-1 rounded border border-border/10">
                                            <Clock className="h-3 w-3" /> Yakında
                                        </span>
                                    </div>
                                )}

                                {/* Spacer if active to aligning text consistently or just let it flow since button is gone */}
                                {isActive && <div className="h-4" />}

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors pr-16">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                                    {service.description}
                                </p>

                                <div className={`flex items-center gap-2 text-sm font-medium ${isActive
                                    ? "text-foreground group-hover:text-accent"
                                    : "text-muted-foreground"
                                    } transition-colors`}>
                                    {service.cta}
                                    {isActive && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );

    return (
        <section id="professional-services" className="bg-background py-24 px-6 md:px-12 lg:px-24 border-b border-border/10 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-accent rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-16 md:text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                        PROFESYONEL <span className="text-accent">HİZMETLER</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Sadece yazılım değil, başarınız için kapsamlı bir ekosistem sunuyoruz.
                    </p>
                </div>

                <Tabs defaultValue="services" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-muted border border-border/20 p-1 h-auto rounded-xl">
                            <TabsTrigger
                                value="services"
                                className="px-6 py-2 rounded-lg text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                            >
                                Hizmetler
                            </TabsTrigger>
                            <TabsTrigger
                                value="connect"
                                className="px-6 py-2 rounded-lg text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                            >
                                Allplan Connect
                            </TabsTrigger>
                            <TabsTrigger
                                value="resources"
                                className="px-6 py-2 rounded-lg text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
                            >
                                Bilgi Merkezi
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="services" className="mt-0">
                        {renderGrid(servicesList)}
                    </TabsContent>

                    <TabsContent value="connect" className="mt-0">
                        {renderGrid(connectList)}
                    </TabsContent>

                    <TabsContent value="resources" className="mt-0">
                        {renderGrid(resourcesList)}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default ServicesV2;
