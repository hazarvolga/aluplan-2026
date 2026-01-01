// Package Comparison Data - Extracted from V2026_Paket Karşılaştırma PDF

export interface Package {
    id: string;
    name: string;
    tagline: string;
    color: string;
    description: string;
}

export interface Feature {
    id: string;
    name: string;
    description: string;
    packages: string[]; // Package IDs that include this feature
    starPackages?: string[]; // Package IDs that should show star icon (others show square)
}

export interface Category {
    id: string;
    name: string;
    icon: string;
    features: Feature[];
}

export const packages: Package[] = [
    {
        id: "basic",
        name: "Basic",
        tagline: "Temel 2D/3D Çizim",
        color: "#3B82F6",
        description: "Temel çizim ve modelleme çözümümüz."
    },
    {
        id: "concept",
        name: "Concept",
        tagline: "Konsept Tasarım",
        color: "#8B5CF6",
        description: "Konsept tasarım ve modelleme için ideal."
    },
    {
        id: "professional",
        name: "Professional",
        tagline: "Tam Kapsamlı BIM",
        color: "#10B981",
        description: "Tam kapsamlı BIM modelleme ve dokümantasyon."
    },
    {
        id: "ultimate",
        name: "Ultimate",
        tagline: "En Kapsamlı Paket",
        color: "#F59E0B",
        description: "Tüm disiplinler için en kapsamlı paketimiz."
    },
    {
        id: "civil",
        name: "Civil",
        tagline: "Altyapı Özel Çözüm",
        color: "#F97316",
        description: "Altyapı, yol ve köprü projeleri için özel çözüm."
    },
    {
        id: "precast-slabs",
        name: "Precast Slabs",
        tagline: "Prekast Döşeme",
        color: "#EC4899",
        description: "Prekast döşeme üretimi için özel çözüm."
    },
    {
        id: "precast-walls",
        name: "Precast Walls",
        tagline: "Prekast Duvar",
        color: "#6366F1",
        description: "Prekast duvar üretimi için özel çözüm."
    },
    {
        id: "precast",
        name: "Precast",
        tagline: "Prekast Özel Çözüm",
        color: "#EF4444",
        description: "Prekast üretimi ve detaylandırma otomasyonu."
    }
];

export const categories: Category[] = [
    {
        id: "core",
        name: "Temel Özellikler",
        icon: "Layers",
        features: [
            {
                id: "interface",
                name: "Arayüz",
                description: "IFC, BCF, PDF, RVT, 3DM, SKP, OBJ, LandXML, DWG, DGN, C4D, STL, WRL, SAF ve diğerleri dahil olmak üzere sorunsuz veri alışverişi için tüm ilgili dosya arayüzleri. Yazılım arayüzleri (örn. Python API ve Visual Scripting) otomatik iş akışlarını mümkün kılar.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional"]
            },
            {
                id: "3d-modeling",
                name: "3B Modelleme",
                description: "En karmaşık ve zorlu geometri için bile yüksek performanslı 3B modelleme. Modelleme işlevi, Siemens Parasolid modelleme çekirdeği tarafından desteklenmektedir.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional"]
            },
            {
                id: "2d-drawing",
                name: "2B Çizim",
                description: "Çekici, özlü ve ayrıntılı çizimler için hassas 2B çizim için kapsamlı işlevsellik.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional"]
            },
            {
                id: "clash-detection",
                name: "Çakışma Kontrolü",
                description: "Yumuşak ve sert çakışmaları tespit eden araç.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional"]
            },
            {
                id: "bim-easy",
                name: "İçerik Paketi BIM Easy",
                description: "Önceden tanımlanmış ancak özelleştirilebilir şirket standardı. Kapsamlı sihirbazlar aracılığıyla modeller ve çizimler oluştururken tutarlı bir çalışma şekli sağlar. Başlamayı kolaylaştırır, üretkenliği artırır ve özellikle openBIM projelerinde iyi yapılandırılmış veri alışverişi sağlar.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional"]
            },
            {
                id: "visualization",
                name: "Görselleştirme",
                description: "Vulkan gibi en son teknolojilere dayalı geniş çeşitlilikte görselleştirme yetenekleri. Real-time Render ve CineWare, Lumion ve Twinmotion'a canlı bağlantılar içerir.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional"]
            },
            {
                id: "external-data",
                name: "Dış Veri Kaynakları",
                description: "GIS (Coğrafi Bilgi Sistemi) bilgilerini, 3B içeriği ve dokuları içe aktarmak için GIS Konnektörü ve İçerik Bağlayıcısı.",
                packages: ["concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["concept", "professional"]
            },
            {
                id: "building-components",
                name: "Yapı Bileşenleri",
                description: "Duvarlar, döşemeler, kirişler, kolonlar, temeller, merdivenler, çatılar, pencereler, kapılar ve cepheler gibi esnek yapı bileşenleri.",
                packages: ["concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["concept", "professional"]
            },
            {
                id: "info-management",
                name: "Gelişmiş Bilgi Modellemesi ve Yönetimi",
                description: "Gelişmiş araçlar, Dijitalleştirilmiş modellerin etkili bilgi modellemesi ve yönetimi için Bilgi paleti ve referanslı belgelerin yönetimi için Xref Yöneticisi.",
                packages: ["concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["concept", "professional"]
            }
        ]
    },
    {
        id: "terrain",
        name: "Arazi ve Peyzaj",
        icon: "Mountain",
        features: [
            {
                id: "terrain-model",
                name: "Arazi Modeli",
                description: "Koordinat noktalarına veya nokta bulutlarına dayalı güçlü arazi modellemesi.",
                packages: ["concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["concept", "professional"]
            },
            {
                id: "urban-landscape",
                name: "Şehir Bölge Planlaması ve Peyzaj Tasarımı",
                description: "Kitle modelleri, kentsel ve peysaj tasarımı ve ayrıca dikim planları için işlevler.",
                packages: ["concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["concept", "professional"]
            },
            {
                id: "utilities",
                name: "Kanalizasyon ve Tesisler",
                description: "Su, kanalizasyon, elektrik, internet, doğal gaz veya bölgesel ısıtma gibi hizmetlerin yönlendirilmesi.",
                packages: ["concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["concept", "professional"]
            }
        ]
    },
    {
        id: "analysis",
        name: "Analiz ve Metraj",
        icon: "Calculator",
        features: [
            {
                id: "quantity-cost",
                name: "Metraj ve Maliyet",
                description: "Modellenmiş ve modellenmemiş objelerin kesin, doğrulanabilir metrajı ve maliyeti.",
                packages: ["concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["concept", "professional"]
            },
            {
                id: "advanced-viz",
                name: "Gelişmiş Görseleştirme",
                description: "MAXON'dan yüksek performanslı GPU hızlandırmalı Redshift renderer.",
                packages: ["professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["professional"]
            }
        ]
    },
    {
        id: "structural",
        name: "Yapısal Mühendislik",
        icon: "HardHat",
        features: [
            {
                id: "reinforcement",
                name: "Donatı",
                description: "Çubuk donatısı, hasır donatısı ve BAMTEC hasırları dahil olmak üzere son derece güçlü donatılandırma işlevi.",
                packages: ["professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["professional"]
            },
            {
                id: "steel-connections",
                name: "Çelik Bağlantılar",
                description: "Kaynaklı ve Bolded çelik bağlantıları için araçlar.",
                packages: ["professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["professional"]
            }
        ]
    },
    {
        id: "infrastructure",
        name: "Altyapı ve Yol",
        icon: "Route",
        features: [
            {
                id: "road",
                name: "Yol (Road)",
                description: "Yollar, Trafik ringleri ve süpürülmüş yol analizi dahil olmak üzere tamamen parametrik yol tasarımı.",
                packages: ["professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["professional"]
            },
            {
                id: "site-planning",
                name: "Şantiye Planlaması",
                description: "İnşaat alanı yerleşimini planlamak için vinçler, konteynerler, şantiye çitleri ve diğer ekipmanlar.",
                packages: ["professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["professional"]
            },
            {
                id: "foundation-works",
                name: "Temel İşleri",
                description: "Fore kazık ve palplanş duvarları ve zemin ankrajları gibi akıllı kazı iksaları.",
                packages: ["ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "excavation",
                name: "Arazi Kazılar",
                description: "Kazıları modellemek ve kazı çizimleri oluşturmak için araçlar.",
                packages: ["ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            }
        ]
    },
    {
        id: "precast-design",
        name: "Prekast Tasarım",
        icon: "Box",
        features: [
            {
                id: "precast-components",
                name: "Prekast Tasarım ve Detaylandırma",
                description: "Kirişler, kolonlar, merdivenler vb. gibi akıllı prefabrik beton bileşenler.",
                packages: ["ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "production-drawings",
                name: "Eleman Planı (Üretim Paftası)",
                description: "Bireysel elemanların ayrıntılı üretim paftalarını otomatik, şablon tabanlı oluşturulması.",
                packages: ["ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "parametric-modeling",
                name: "Parametrik Modelleme",
                description: "Köprüler, tüneller, istinat duvarları, ses bariyerleri ve prekast kirişli köprüler gibi özel köprü tipleri de dahil olmak üzere altyapıların dört boyutlu parametrik modellemesi ve detaylandırılması için özel çözüm.",
                packages: ["ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            }
        ]
    },
    {
        id: "bridge",
        name: "Köprü ve Öngerilme",
        icon: "Bridge",
        features: [
            {
                id: "prestressed-tendons",
                name: "Parametrik Öngerilimli Tendonlar",
                description: "Öngerilme tendonlarının modellenmesi ve analizi.",
                packages: ["ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "bridge-analysis",
                name: "Yapısal Köprü Analizi",
                description: "Köprülerin doğrusal yapısal analizi için özel çözüm.",
                packages: ["civil"]
            },
            {
                id: "bridge-design",
                name: "Kod Bazlı Köprü Tasarımı",
                description: "Ulusal ekler ve AASHTO LRFD ile Eurocode'a göre tasarım ve kontroller.",
                packages: ["civil"]
            }
        ]
    },
    {
        id: "precast-manufacturing",
        name: "Prekast İmalat",
        icon: "Factory",
        features: [
            {
                id: "precast-slabs-manufacturing",
                name: "Prekast Döşeme İmalatı",
                description: "Prekast döşemelerin otomatik elementasyonu, bağlantısı, detaylandırılması ve imalatı için özel çözüm.",
                packages: ["precast-slabs", "precast"]
            },
            {
                id: "precast-walls-manufacturing",
                name: "Prekast Duvar İmalatı",
                description: "Prekast duvarların otomatik elementasyonu, bağlantısı, detaylandırılması ve imalatı için özel çözüm.",
                packages: ["precast-walls", "precast"]
            },
            {
                id: "prefab-connectors",
                name: "Prefabrik Konnektörler",
                description: "Kurumsal Kaynak Planlama (ERP), Üretim Yürütme Sistemleri (MES) ve Hasır Kaynak Sistemlerine (MWS) optimum bağlantılar, otomatik, tamamen dijital üretime olanak tanır.",
                packages: ["precast"],
                starPackages: ["precast"]
            }
        ]
    },
    {
        id: "language",
        name: "Dil Desteği",
        icon: "Languages",
        features: [
            {
                id: "tr-en",
                name: "İngilizce, Türkçe Dil ve Ülke Ayarları",
                description: "İngilizce artı aşağıdaki dillerden biri Bulgarca, Çince, Hırvatça, Çekçe, Felemenkçe, İngilizce, Fransızca, Almanca, Yunanca, Macarca, İtalyanca, Japonca, Litvanyaca, Lehçe, Portekizce, Rumence, Rusça, Sırpça, Slovakça, Slovence, İspanyolca, Türkçe, Vietnamca ve ilgili ülke ayarları.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional"]
            },
            {
                id: "all-languages",
                name: "Diğer Tüm Diller ve Ülke Ayarları",
                description: "23 Allplan dilinin tümü, yani Bulgarca, Çince, Hırvatça, Çekçe, Felemenkce, İngilizce, Fransızca, Almanca, Yunanca, Macarca, İtalyanca, Japonca, Litince, Lehçe, Portekizce, Romence, Rusça, Sırpça, Slovakça, Slovence, İspanyolca, Türkçe, Vietnamca ve ilgili ülke ayarları.",
                packages: ["ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            }
        ]
    },
    {
        id: "scia",
        name: "Yapısal Analiz ve Tasarım - SCIA Engineer",
        icon: "Calculator",
        features: [
            {
                id: "scia-concept",
                name: "SCIA Engineer - Concept Edition",
                description: "Bu sürüm, öncelikle beton ve keresteden yapılmış yaygın yapıları modelleyen ve tasarlayan mühendisleri hedeflemektedir. Ancak, temel çelik kontrolleri de desteklenmektedir. Temel doğrusal olmayan hesaplamalar, stabilite ve dinamik analizle birlikte gerçekleştirilebilir. Bu sürüm, öncelikle konut binaları tasarlayan mühendislere uygun olacaktır.",
                packages: ["ultimate", "precast"],
                starPackages: ["ultimate"]
            },
            {
                id: "scia-ultimate",
                name: "SCIA Engineer Ultimate Edition",
                description: "Ultimate Edition, yüksek katlı veya karmaşık binalar, köprüler ve sivil yapılar gibi en zorlu yapıları tasarlayan yapı mühendislerine uygundur. Toprak-yapı etkileşimi, beton için malzeme doğrusal olmayan analizi, inşaat aşamaları analizi ve ön gerilimli beton tasarımı gibi gelişmiş analiz türlerini içerir.",
                packages: ["civil"]
            }
        ]
    },
    {
        id: "cloud-services",
        name: "ALLPLAN Cloud Services",
        icon: "Cloud",
        features: [
            {
                id: "bimplus",
                name: "Bulut tabanlı işbirliği",
                description: "Bimplus Pro 10 GB bulut tabanlı BIM işbirliği platformu.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "share",
                name: "Proje Ekip Çalışması",
                description: "Allplan Share, uzaktan çalışan ekip üyeleri için de ideal olan bir şirket ağı üzerinden ekip çalışmasına olanak sağlar.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "workgroup",
                name: "Ofis Ekip Çalışması (Workgroup)",
                description: "Allplan Workgroup Yöneticisi aracılığıyla yerel bir şirket ağı içerisinde verimli ekip çalışmasını kolaylaştırın.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "exchange",
                name: "Çizim ve Plan Dağıtımı",
                description: "Web tabanlı plan dağıtım aracı Allplan Exchange, çeşitli plan formatlarının oluşturulmasını ve dağıtımını yönetmek ve e-posta grupları aracılığıyla otomatik değişiklik bildirimleri sağlamak için özel olarak tasarlanmıştır.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "cloud-resources",
                name: "Bulut Destekli Proje Kaynakları",
                description: "Bulut ofis kaynakları, ALLPLAN proje kaynaklarının tam bulut tabanlı dağıtımına olanak tanır.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "autoconverter",
                name: "Analitik Model Oluşturma",
                description: "AutoConverter aracılığıyla geometrik modellerin, Frilo Statics, Scia Engineer ve diğerleri gibi yapısal analiz çözümleri tarafından doğrudan kullanılabilecek analitik modellere akıllı dönüşümü.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "bluebeam",
                name: "ALLPLAN - Bluebeam Bağlantısı",
                description: "Gelişmiş iş akışları – Dijital teslimat sürecini desteklemek için Bluebeam ile bağlantı, kullanıcıların 2B dokümantasyonu Bluebeam Studio Proje ortamından ALLPLAN iş akışlarına getirmelerine olanak tanır.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "model-viewer",
                name: "ALLPLAN Model Görüntüleyici",
                description: "BIMPLUS'a gömülü IFC dosya görüntüleyicisi, kullanıcıların proje verilerini hızla görselleştirmesine olanak tanır. Yüklemek ve işlemeyi beklemek yerine, kullanıcılar artık BIMPLUS'ta bir revizyon oluşturmadan ve tam olarak yüklemeden önce modelleri görsel olarak hızlı bir şekilde önizleyebilir ve kontrol edebilir.",
                packages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["basic", "concept", "professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            },
            {
                id: "ai-viz",
                name: "AI-Destekli Görseleştirme (yeni)",
                description: "İlham verici, ayrıntılı AI destekli görselleştirmeler oluşturmak için bağlantılar. Nemetschek AI Visualizer'ı ve EvolveLab'ın Veras AI Visualizer'ına entegrasyonu içerir ³.",
                packages: ["professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"],
                starPackages: ["professional", "ultimate", "civil", "precast", "precast-slabs", "precast-walls"]
            }
        ]
    },
    {
        id: "purchasable",
        name: "Satınalınabilir Seçenekler",
        icon: "ShoppingCart",
        features: [
            {
                id: "license-server",
                name: "License Server/Yüzer Lisans",
                description: "Lisans Server, etkin yönetim ve lisansların optimum kullanımını sağlar. Lisans Server, aşağıdakilere güvenli erişim sağlar: şirket ağındaki lisanslar, ofis dışındaki lisanslar için esnek kullanım sunar.",
                packages: []
            },
            {
                id: "bimplus-extra",
                name: "BIMPLUS",
                description: "Bulut işbirliği kapasitenizi genişletmek için 10 GB depolama alanına sahip ek BIMPLUS lisansı.",
                packages: []
            },
            {
                id: "cloud-storage",
                name: "Allplan Cloud Storage",
                description: "Projelerinizin kesintiye uğramadan devam edebilmesi için ek 100 GB depolama alanı.",
                packages: []
            },
            {
                id: "bim2form",
                name: "BIM²form Add On - Kalıp",
                description: "Kalıp yerleştirme, atama ve yönetme araçları.",
                packages: []
            }
        ]
    }
];

export const sciaEngineer = [
    {
        id: "scia-concept",
        name: "SCIA Engineer - Concept Edition",
        description: "Beton ve keresteden yapılmış yaygın yapıları modelleyen ve tasarlayan mühendisleri hedefler. Temel çelik kontrolleri, doğrusal olmayan hesaplamalar, stabilite ve dinamik analiz. Konut binaları için ideal.",
        packages: []
    },
    {
        id: "scia-ultimate",
        name: "SCIA Engineer - Ultimate Edition",
        description: "Yüksek katlı veya karmaşık binalar, köprüler ve sivil yapılar için. Toprak-yapı etkileşimi, malzeme doğrusal olmayan analizi, inşaat aşamaları analizi ve ön gerilimli beton tasarımı.",
        packages: []
    }
];

export const cloudServices = [
    {
        id: "bimplus",
        name: "Bulut tabanlı işbirliği",
        description: "Bimplus Pro 10 GB bulut tabanlı BIM işbirliği platformu.",
        note: "Yalnızca Abonelik lisanslarına dahildir"
    },
    {
        id: "share",
        name: "Proje Ekip Çalışması",
        description: "Allplan Share, uzaktan çalışan ekip üyeleri için de ideal olan bir şirket ağı üzerinden ekip çalışmasına olanak sağlar.",
        note: "Yalnızca Abonelik lisanslarına dahildir"
    },
    {
        id: "workgroup",
        name: "Ofis Ekip Çalışması (Workgroup)",
        description: "Allplan Workgroup Yöneticisi aracılığıyla yerel bir şirket ağı içerisinde verimli ekip çalışmasını kolaylaştırın.",
        note: "Yalnızca Abonelik lisanslarına dahildir"
    },
    {
        id: "exchange",
        name: "Çizim ve Plan Dağıtımı",
        description: "Web tabanlı plan dağıtım aracı Allplan Exchange, çeşitli plan formatlarının oluşturulmasını ve dağıtımını yönetir.",
        note: "Yalnızca Abonelik lisanslarına dahildir"
    },
    {
        id: "cloud-resources",
        name: "Bulut Destekli Proje Kaynakları",
        description: "Bulut ofis kaynakları, ALLPLAN proje kaynaklarının tam bulut tabanlı dağıtımına olanak tanır.",
        note: "Yalnızca Abonelik lisanslarına dahildir"
    },
    {
        id: "autoconverter",
        name: "Analitik Model Oluşturma",
        description: "AutoConverter aracılığıyla geometrik modellerin, Frilo Statics, Scia Engineer ve diğerleri gibi yapısal analiz çözümlerine akıllı dönüşümü.",
        note: "Yalnızca Abonelik lisanslarına dahildir"
    },
    {
        id: "bluebeam",
        name: "ALLPLAN - Bluebeam Bağlantısı",
        description: "Dijital teslimat sürecini desteklemek için Bluebeam ile bağlantı, 2B dokümantasyonu Bluebeam Studio'dan ALLPLAN'a getirme.",
        note: "Yalnızca Abonelik lisanslarına dahildir"
    },
    {
        id: "model-viewer",
        name: "ALLPLAN Model Görüntüleyici",
        description: "BIMPLUS'a gömülü IFC dosya görüntüleyicisi, kullanıcıların proje verilerini hızla görselleştirmesine olanak tanır.",
        note: "Yalnızca Abonelik lisanslarına dahildir"
    },
    {
        id: "ai-viz",
        name: "AI-Destekli Görselleştirme (YENİ)",
        description: "İlham verici AI destekli görselleştirmeler. Nemetschek AI Visualizer ve EvolveLab Veras AI Visualizer entegrasyonu.",
        note: "Veras lisansları ayrı olarak Evolvelab'dan satın alınmalıdır"
    }
];

export const purchasableOptions = [
    {
        id: "license-server",
        name: "License Server/Yüzer Lisans",
        description: "Etkin yönetim ve lisansların optimum kullanımını sağlar. Şirket ağındaki lisanslar, ofis dışındaki lisanslar için esnek kullanım.",
        allPackages: true
    },
    {
        id: "bimplus-extra",
        name: "BIMPLUS",
        description: "Bulut işbirliği kapasitenizi genişletmek için 10 GB depolama alanına sahip ek BIMPLUS lisansı.",
        allPackages: true
    },
    {
        id: "cloud-storage",
        name: "Allplan Cloud Storage",
        description: "Projelerinizin kesintiye uğramadan devam edebilmesi için ek 100 GB depolama alanı.",
        allPackages: true
    },
    {
        id: "bim2form",
        name: "BIM²form Add On - Kalıp",
        description: "Kalıp yerleştirme, atama ve yönetme araçları.",
        packages: []
    }
];
