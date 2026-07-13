import autoSearchIndexData from './auto-search-index.json';

export type SearchItem = {
    title: string;
    description: string;
    url: string;
    category: "Ürün" | "Çözüm" | "Eğitim" | "Genel" | "Destek";
    tags?: string[];
    content?: string;
};

// Cast to SearchItem[] because JSON import might be inferred loosely
const autoSearchIndex = autoSearchIndexData as SearchItem[];

const manualSearchIndex: SearchItem[] = [
    // --- Ürünler ---
    {
        title: "ALLPLAN 2026 Yenilikler",
        description: "ALLPLAN 2026 sürümü ile gelen en yeni özellikler, geliştirilmiş iş akışları ve yapay zeka destekli araçlar.",
        url: "/products/allplan-2026-yenilikler",
        category: "Ürün",
        tags: ["2026", "new features", "yenilikler", "ai", "yapay zeka"]
    },
    {
        title: "ALLPLAN 2026",
        description: "ALLPLAN 2026 sürümü hakkında detaylı bilgi, özellikler ve yenilikler.",
        url: "/products/allplan-2026",
        category: "Ürün",
        tags: ["2026", "allplan", "bim"]
    },
    {
        title: "ALLPLAN Cloud Services",
        description: "Tüm aboneliklere dahil olan bulut tabanlı iş birliği platformu. Çizim dağıtımı, proje ekip çalışması, Model Görüntüleyici, Autoconverter, Bluebeam entegrasyonu ve yapay zeka destekli görselleştirme araçları.",
        url: "/products/allplan-cloud-services",
        category: "Ürün",
        tags: ["cloud", "bulut", "bimplus", "autoconverter", "share", "workgroup", "iş birliği", "collaboration", "yapay zeka", "ai"]
    },
    {
        title: "BIMPLUS",
        description: "İnşaat projeleri için açık model tabanlı veri ve bilgi yönetimi iş birliği platformu. Disiplinler arası koordinasyonu sağlar.",
        url: "/products/allplan-bimplus",
        category: "Ürün",
        tags: ["bim", "collaboration", "openbim", "işbirliği", "koordinasyon"]
    },
    {
        title: "ALLPLAN Ultimate",
        description: "Mimarlar, mühendisler ve müteahhitler için hepsi bir arada çözüm. Mimari, mühendislik ve detaylandırma araçlarının tamamını içerir.",
        url: "/products/allplan-ultimate",
        category: "Ürün",
        tags: ["ultimate", "mimari", "mühendislik", "statik", "inşaat"]
    },
    {
        title: "ALLPLAN Professional",
        description: "Profesyonel BIM projeleri için kapsamlı araç seti. Gelişmiş modelleme ve dokümantasyon özellikleri.",
        url: "/products/allplan-professional",
        category: "Ürün",
        tags: ["professional", "pro", "bim"]
    },
    {
        title: "ALLPLAN Concept",
        description: "Tasarım aşaması ve konsept modelleme için ideal çözüm. Hızlı kütle çalışması ve görselleştirme.",
        url: "/products/allplan-concept",
        category: "Ürün",
        tags: ["concept", "konsept", "tasarım"]
    },
    {
        title: "ALLPLAN Basic",
        description: "Temel 2D çizim ve basit 3D modelleme ihtiyaçları için giriş seviyesi çözüm.",
        url: "/products/allplan-basic",
        category: "Ürün",
        tags: ["basic", "temel", "2d", "çizim"]
    },
    {
        title: "ALLPLAN Civil",
        description: "İnşaat mühendisliği ve altyapı projeleri için özelleşmiş araçlar. Yol, köprü ve tünel tasarımı.",
        url: "/products/civil",
        category: "Ürün",
        tags: ["civil", "altyapı", "mühendislik", "yol"]
    },
    {
        title: "ALLPLAN Precast",
        description: "Prekast beton elemanların tasarımı, detaylandırılması ve üretimi için endüstri lideri çözüm.",
        url: "/products/precast",
        category: "Ürün",
        tags: ["precast", "prekast", "beton", "üretim"]
    },
    {
        title: "ALLPLAN Precast Detaylandırma",
        description: "Prekast elemanlar için detaylı modelleme ve üretim çizimleri.",
        url: "/products/precast-detail",
        category: "Ürün",
        tags: ["precast", "prekast", "detay", "üretim"]
    },
    {
        title: "AX3000",
        description: "Mekanik, elektrik ve tesisat (MEP) tasarımı için entegre çözüm. Enerji simülasyonu ve analiz araçları.",
        url: "/products/ax3000",
        category: "Ürün",
        tags: ["ax3000", "mep", "enerji", "tesisat", "mekanik"]
    },
    {
        title: "SDS2 Ana Sayfa",
        description: "Çelik yapı detaylandırma ve imalat yazılımı SDS2 hakkında genel bilgiler.",
        url: "/products/sds2-home",
        category: "Ürün",
        tags: ["sds2", "çelik", "steel", "detaylandırma"]
    },
    {
        title: "ALLPLAN AEC",
        description: "AEC (Architecture, Engineering, Construction) endüstrisi için BIM çözümleri.",
        url: "/products/allplan-aec",
        category: "Ürün",
        tags: ["aec", "bim", "architecture", "engineering"]
    },
    {
        title: "Mimari Ürünler",
        description: "Mimari tasarım için ALLPLAN ürün ailesi.",
        url: "/products/architecture",
        category: "Ürün",
        tags: ["mimari", "architecture", "tasarım"]
    },
    {
        title: "Paket Karşılaştırma",
        description: "ALLPLAN paketlerini (Basic, Concept, Professional, Ultimate) karşılaştırın ve size uygun olanı seçin.",
        url: "/paket-karsilastirma",
        category: "Ürün",
        tags: ["paket", "karşılaştırma", "fiyat", "özellikler"]
    },
    {
        title: "Paket Genel Bakış",
        description: "ALLPLAN ürün paketlerine genel bakış ve özellik karşılaştırması.",
        url: "/package-overview",
        category: "Ürün",
        tags: ["paket", "overview", "genel bakış"]
    },

    // --- Çözümler: Bina Tasarımı ---
    {
        title: "Bina Tasarımı Çözümleri",
        description: "Bina tasarımı için kapsamlı BIM çözümleri ve iş akışları.",
        url: "/solutions-v2/building-design",
        category: "Çözüm",
        tags: ["bina", "building", "tasarım", "mimari"]
    },
    {
        title: "Mimari Tasarım",
        description: "Konseptten uygulama projesine kadar kesintisiz mimari tasarım süreçleri için BIM çözümleri.",
        url: "/solutions/architecture",
        category: "Çözüm",
        tags: ["mimari", "tasarım", "architecture", "bina"]
    },
    {
        title: "Strüktürel Mühendislik",
        description: "Betonarme ve çelik yapılar için analiz, tasarım ve detaylandırma çözümleri.",
        url: "/solutions/structural",
        category: "Çözüm",
        tags: ["statik", "yapı", "mühendislik", "betonarme"]
    },
    {
        title: "MEP (Mekanik, Elektrik, Tesisat)",
        description: "Bina sistemlerinin entegre tasarımı ve koordinasyonu için MEP çözümleri.",
        url: "/solutions/mep",
        category: "Çözüm",
        tags: ["mep", "tesisat", "mekanik", "elektrik"]
    },
    {
        title: "ALLPLAN Endüstri Çözümleri",
        description: "Endüstriyel yapılar, fabrikalar ve özel yapılar için özelleştirilmiş BIM çözümleri.",
        url: "/solutions/allplan-industry",
        category: "Çözüm",
        tags: ["endüstri", "fabrika", "industry"]
    },
    {
        title: "Endüstri Çözümleri",
        description: "Endüstriyel projeler için özel BIM çözümleri.",
        url: "/solutions/industry",
        category: "Çözüm",
        tags: ["endüstri", "industry", "fabrika"]
    },

    // --- Çözümler: Altyapı ---
    {
        title: "Altyapı Tasarımı Çözümleri",
        description: "Altyapı projeleri için kapsamlı tasarım ve modelleme çözümleri.",
        url: "/solutions-v2/infrastructure",
        category: "Çözüm",
        tags: ["altyapı", "infrastructure", "civil"]
    },
    {
        title: "Altyapı Mühendisliği",
        description: "Altyapı projeleri için kapsamlı tasarım ve modelleme araçları.",
        url: "/solutions/infrastructure",
        category: "Çözüm",
        tags: ["altyapı", "infrastructure", "civil"]
    },
    {
        title: "Köprü Tasarımı (ALLPLAN Bridge)",
        description: "Parametrik modelleme ile dünyadaki en karmaşık köprü projelerini tasarlayın ve analiz edin.",
        url: "/solutions/bridge-design",
        category: "Çözüm",
        tags: ["köprü", "bridge", "viyadük"]
    },
    {
        title: "ALLPLAN Bridge Özellikleri",
        description: "ALLPLAN Bridge modülünün detaylı özellikleri ve yetenekleri.",
        url: "/solutions/features-allplan-bridge",
        category: "Çözüm",
        tags: ["bridge", "köprü", "özellikler", "features"]
    },
    {
        title: "Prekast Kiriş Köprü Modellemesi",
        description: "Prekast kiriş köprülerin modelleme iş akışları ve teknikleri.",
        url: "/solutions/modeling-of-precast-girder-bridges",
        category: "Çözüm",
        tags: ["köprü", "prekast", "kiriş", "modelleme"]
    },
    {
        title: "Yol ve Demiryolu Tasarımı",
        description: "Karayolu ve demiryolu projeleri için güzergah planlama ve arazi modelleme.",
        url: "/solutions/road-railway",
        category: "Çözüm",
        tags: ["yol", "road", "rail", "demiryolu"]
    },

    // --- Çözümler: İnşaat Planlaması ---
    {
        title: "İnşaat Planlaması Çözümleri",
        description: "İnşaat süreçleri için planlama ve yönetim çözümleri.",
        url: "/solutions-v2/construction",
        category: "Çözüm",
        tags: ["inşaat", "construction", "planlama"]
    },
    {
        title: "Prekast Üretimi",
        description: "Prekast beton elemanların tasarımı, üretimi ve montaj planlaması.",
        url: "/solutions/precast",
        category: "Çözüm",
        tags: ["prekast", "precast", "beton", "üretim"]
    },
    {
        title: "Çelik Detaylandırma (SDS2)",
        description: "Yüksek hassasiyetli çelik konstrüksiyon detaylandırma ve imalat çizimleri.",
        url: "/solutions/steel",
        category: "Çözüm",
        tags: ["çelik", "steel", "sds2", "konstrüksiyon"]
    },
    {
        title: "Şantiye Planlaması",
        description: "İnşaat sahası lojistiği, vinç yerleşimi ve iş güvenliği planlaması.",
        url: "/solutions/site-planning",
        category: "Çözüm",
        tags: ["şantiye", "site", "lojistik", "vinç"]
    },

    // --- Çözümler: Eklentiler (Add-ons) ---
    {
        title: "Eklentiler ve Add-Onlar",
        description: "ALLPLAN için geliştirilen eklentiler ve genişletme modülleri.",
        url: "/solutions-v2/addons",
        category: "Çözüm",
        tags: ["addon", "eklenti", "plugin"]
    },
    {
        title: "Add-On Çözümleri",
        description: "ALLPLAN'ı genişleten eklenti çözümleri.",
        url: "/solutions/addons",
        category: "Çözüm",
        tags: ["addon", "eklenti", "plugin"]
    },
    {
        title: "2D DWG Converter",
        description: "DWG dosyalarını ALLPLAN formatına dönüştürme eklentisi.",
        url: "/solutions/addons/2d-dwg-converter",
        category: "Çözüm",
        tags: ["dwg", "converter", "dönüştürücü", "autocad"]
    },
    {
        title: "Drive Curve (Sürüş Eğrisi)",
        description: "Yol ve rampa tasarımı için sürüş eğrisi oluşturma aracı.",
        url: "/solutions/addons/drive-curve",
        category: "Çözüm",
        tags: ["drive curve", "yol", "rampa"]
    },
    {
        title: "Geometry Tools (Geometri Araçları)",
        description: "Gelişmiş geometri düzenleme ve modelleme araçları.",
        url: "/solutions/addons/geometry-tools",
        category: "Çözüm",
        tags: ["geometry", "geometri", "araçlar"]
    },
    {
        title: "Graphical Text (Grafik Metin)",
        description: "Grafik metin oluşturma ve düzenleme eklentisi.",
        url: "/solutions/addons/graphical-text",
        category: "Çözüm",
        tags: ["text", "metin", "grafik"]
    },
    {
        title: "Parametric Terrain (Parametrik Arazi)",
        description: "Parametrik arazi modelleme ve düzenleme araçları.",
        url: "/solutions/addons/parametric-terrain",
        category: "Çözüm",
        tags: ["terrain", "arazi", "topografya"]
    },
    {
        title: "Ramp (Rampa)",
        description: "Otomatik rampa oluşturma ve tasarım aracı.",
        url: "/solutions/addons/ramp",
        category: "Çözüm",
        tags: ["ramp", "rampa", "eğim"]
    },
    {
        title: "SketchUp Converter",
        description: "SketchUp modellerini ALLPLAN'a aktarma eklentisi.",
        url: "/solutions/addons/sketchup-converter",
        category: "Çözüm",
        tags: ["sketchup", "converter", "dönüştürücü"]
    },
    {
        title: "Steel Components (Çelik Bileşenler)",
        description: "Hazır çelik profil ve bağlantı elemanları kütüphanesi.",
        url: "/solutions/addons/steel-components",
        category: "Çözüm",
        tags: ["steel", "çelik", "profil", "bileşen"]
    },
    {
        title: "3D Dimensioning (3D Ölçülendirme)",
        description: "3D modellerde gelişmiş ölçülendirme araçları.",
        url: "/solutions/addons/three-dimensioning",
        category: "Çözüm",
        tags: ["3d", "ölçü", "dimensioning"]
    },
    {
        title: "Scalypso (Nokta Bulutu)",
        description: "Lazer tarama verilerini ve nokta bulutlarını (Point Cloud) BIM modellerine dönüştürün.",
        url: "/solutions/scalypso",
        category: "Çözüm",
        tags: ["scalypso", "point cloud", "nokta bulutu", "scan"]
    },
    {
        title: "Scalypso Converter",
        description: "Nokta bulutu verilerini dönüştürme ve işleme modülü.",
        url: "/solutions/scalypso/converter",
        category: "Çözüm",
        tags: ["scalypso", "converter", "nokta bulutu"]
    },
    {
        title: "Scalypso Mobile",
        description: "Mobil cihazlarla nokta bulutu yakalama ve işleme.",
        url: "/solutions/scalypso/mobile",
        category: "Çözüm",
        tags: ["scalypso", "mobile", "mobil"]
    },
    {
        title: "Scalypso Modeler",
        description: "Nokta bulutundan BIM modeli oluşturma araçları.",
        url: "/solutions/scalypso/modeler",
        category: "Çözüm",
        tags: ["scalypso", "modeler", "modelleme"]
    },
    {
        title: "Scalypso Viewer",
        description: "Nokta bulutu görüntüleme ve analiz aracı.",
        url: "/solutions/scalypso/viewer",
        category: "Çözüm",
        tags: ["scalypso", "viewer", "görüntüleme"]
    },
    {
        title: "Scalypso Videolar",
        description: "Scalypso kullanım videoları ve eğitim içerikleri.",
        url: "/solutions/scalypso/videos",
        category: "Çözüm",
        tags: ["scalypso", "video", "eğitim"]
    },
    {
        title: "CDS Add-On",
        description: "ALLPLAN için gelişmiş tasarım ve detaylandırma eklentisi.",
        url: "/solutions/cds-addon",
        category: "Çözüm",
        tags: ["cds", "addon", "eklenti"]
    },
    {
        title: "PythonPart",
        description: "Python tabanlı parametrik nesne oluşturma ve otomasyon araçları.",
        url: "/solutions/pythonpart",
        category: "Çözüm",
        tags: ["python", "pythonpart", "parametrik", "otomasyon"]
    },
    {
        title: "Donatı Mühendisliği",
        description: "Betonarme yapılar için gelişmiş donatı modelleme ve detaylandırma araçları.",
        url: "/solutions/rebar-engineering",
        category: "Çözüm",
        tags: ["donatı", "rebar", "betonarme"]
    },
    {
        title: "İmar Yönetmeliği BIM Eklentisi",
        description: "Türkiye İmar Yönetmeliği'ne uygun otomatik kontrol ve raporlama.",
        url: "/solutions/imar-yonetmeligi-bim-eklentisi",
        category: "Çözüm",
        tags: ["imar", "yönetmelik", "mevzuat"]
    },
    {
        title: "BIMX5",
        description: "Mobil BIM görüntüleme ve koordinasyon platformu.",
        url: "/solutions/bimx5",
        category: "Çözüm",
        tags: ["bimx", "mobil", "görüntüleme"]
    },
    {
        title: "Allplan Oska İşbirliği",
        description: "Oska platformu ile ALLPLAN entegrasyonu.",
        url: "/solutions/oska",
        category: "Çözüm",
        tags: ["oska", "işbirliği", "entegrasyon"]
    },
    {
        title: "Allplan Poz Kataloğu",
        description: "Türkiye yapı poz katalogları entegrasyonu.",
        url: "/solutions/poz-catalog",
        category: "Çözüm",
        tags: ["poz", "katalog", "metraj"]
    },
    {
        title: "Diğer Çözümler",
        description: "ALLPLAN ekosistemindeki diğer özel çözümler ve eklentiler.",
        url: "/solutions-v2/other",
        category: "Çözüm",
        tags: ["diğer", "other", "çözümler"]
    },

    // --- AX3000 Alt Modülleri ---
    {
        title: "AX3000 - Elektrik",
        description: "Elektrik tesisatı tasarımı ve hesaplama modülü.",
        url: "/solutions/ax3000/elektrik",
        category: "Çözüm",
        tags: ["elektrik", "ax3000", "tesisat"]
    },
    {
        title: "AX3000 - Isıtma",
        description: "Isıtma sistemleri tasarımı ve hesaplama modülü.",
        url: "/solutions/ax3000/isitma",
        category: "Çözüm",
        tags: ["ısıtma", "ax3000", "tesisat"]
    },
    {
        title: "AX3000 - Havalandırma",
        description: "Havalandırma ve iklimlendirme sistemleri tasarımı.",
        url: "/solutions/ax3000/havalandirma",
        category: "Çözüm",
        tags: ["havalandırma", "iklimlendirme", "ax3000"]
    },
    {
        title: "AX3000 - Konut Havalandırma",
        description: "Konutlar için özel havalandırma sistemi tasarımı.",
        url: "/solutions/ax3000/konut-havalandirma",
        category: "Çözüm",
        tags: ["konut", "havalandırma", "ax3000"]
    },
    {
        title: "AX3000 - Sıhhi Tesisat",
        description: "Sıhhi tesisat ve su tesisatı tasarımı.",
        url: "/solutions/ax3000/sihhi-tesisat",
        category: "Çözüm",
        tags: ["sıhhi tesisat", "su", "ax3000"]
    },
    {
        title: "AX3000 - Sprinkler",
        description: "Yangın söndürme ve sprinkler sistemleri tasarımı.",
        url: "/solutions/ax3000/sprinkler",
        category: "Çözüm",
        tags: ["sprinkler", "yangın", "ax3000"]
    },
    {
        title: "AX3000 - Mekanik Tesisat",
        description: "Mekanik tesisat sistemleri tasarımı ve hesaplama.",
        url: "/solutions/ax3000-mekanik-tesisat",
        category: "Çözüm",
        tags: ["mekanik", "tesisat", "ax3000"]
    },
    {
        title: "AX3000 - Yapı Fiziği",
        description: "Bina yapı fiziği analizi ve enerji performans değerlendirmesi.",
        url: "/solutions/ax3000-yapi-fizigi",
        category: "Çözüm",
        tags: ["yapı fiziği", "enerji", "ax3000"]
    },
    {
        title: "AX3000 - Virtual Reality",
        description: "Sanal gerçeklik ile MEP sistemlerini görselleştirme.",
        url: "/solutions/ax3000-virtual-reality",
        category: "Çözüm",
        tags: ["vr", "virtual reality", "sanal gerçeklik"]
    },

    // --- Bulut Hizmetleri ---
    {
        title: "ALLPLAN Bulut Hizmetleri",
        description: "Bulut tabanlı iş birliği, veri paylaşımı ve proje yönetimi hizmetleri.",
        url: "/solutions/allplan-bulut-hizmetleri",
        category: "Çözüm",
        tags: ["bulut", "cloud", "işbirliği"]
    },
    {
        title: "10 Duke Yeni Lisanslama (Allplan Connect)",
        description: "ALLPLAN 2026 ile gelen yeni 10 Duke lisanslama sistemi ve Allplan Connect yönetimi hakkında bilgiler.",
        url: "/solutions-v2/connect-license",
        category: "Genel",
        tags: ["connect", "lisans", "license", "10 duke", "10duke", "bulut lisans", "yeni lisanslama", "2026"]
    },
    {
        title: "Ekip Üyelerine Lisans Atama Rehberi (10Duke)",
        description: "Allplan Connect üzerinden ekip üyelerine lisans atama, ALLPLAN ID oluşturma ve lisans iade işlemleri rehberi.",
        url: "/solutions-v2/connect-license/how-to-assign",
        category: "Destek",
        tags: ["lisans atama", "ekip", "team", "10duke", "allplan id", "lisans iadesi", "connect 2.0", "admin"]
    },
    {
        title: "Yeni Lisans Etkinleştirme",
        description: "Yeni Allplan lisansınızın etkinleştirilmesi için talep ve beyan formu.",
        url: "/solutions-v2/connect-license/activation",
        category: "Destek",
        tags: ["lisans", "etkinleştirme", "talep", "beyan", "form"]
    },
    {
        title: "Connect - Giriş",
        description: "ALLPLAN Connect platformuna giriş ve kullanım.",
        url: "/solutions-v2/connect-login",
        category: "Genel",
        tags: ["connect", "login", "giriş"]
    },

    // --- Eğitim ---
    {
        title: "ALLPLAN Eğitimleri",
        description: "Profesyonel ALLPLAN eğitimleri: Online, sınıf içi, webinar, bireysel ve e-learning formatlarında kapsamlı eğitim programları.",
        url: "/solutions-v2/training",
        category: "Eğitim",
        tags: ["eğitim", "training", "kurs", "öğrenme", "webinar"]
    },
    {
        title: "Online Eğitimler",
        description: "Mekandan bağımsız, etkileşimli ve profesyonel uzaktan eğitim deneyimi. Canlı oturumlar ve kayıtlı içerikler.",
        url: "/solutions-v2/training/online",
        category: "Eğitim",
        tags: ["online", "uzaktan eğitim", "webinar", "canlı eğitim"]
    },
    {
        title: "Sınıf İçi Eğitim (Yüz Yüze)",
        description: "Modern eğitim merkezlerimizde gerçekleştirilen yüz yüze, interaktif pratik eğitimler.",
        url: "/solutions-v2/training/classroom",
        category: "Eğitim",
        tags: ["sınıf", "yüz yüze", "classroom", "pratik eğitim"]
    },
    {
        title: "Webinar",
        description: "Canlı online seminerler ve eğitim oturumları.",
        url: "/solutions-v2/training/webinar",
        category: "Eğitim",
        tags: ["webinar", "online", "seminer"]
    },
    {
        title: "Bireysel & Kurumsal Özel Eğitim",
        description: "Tamamen size ve projenize özel, terzi işi eğitim programı. İhtiyaçlarınıza göre tasarlanmış özel müfredat.",
        url: "/solutions-v2/training/individual",
        category: "Eğitim",
        tags: ["özel eğitim", "kurumsal", "bireysel", "custom training"]
    },
    {
        title: "E-Learning & Video Eğitimler",
        description: "Yüzlerce video ders, adım adım rehberler ve sertifika programları. Her an erişebileceğiniz eğitim kütüphanesi.",
        url: "/solutions-v2/training/e-learning",
        category: "Eğitim",
        tags: ["e-learning", "video", "online kurs", "sertifika"]
    },
    {
        title: "Video Kütüphanesi",
        description: "ALLPLAN Türkiye YouTube kanalı: Eğitim videoları, webinar kayıtları, ipuçları ve sektörel gelişmeler.",
        url: "/solutions-v2/training/video-library",
        category: "Eğitim",
        tags: ["video", "youtube", "tutorial", "webinar kayıtları"]
    },
    {
        title: "Hızlı Başlangıç Rehberi",
        description: "ALLPLAN'a ilk adımlarınızı atın. Temel konseptler ve araçlarla tanışın.",
        url: "/solutions-v2/training/quick-start",
        category: "Eğitim",
        tags: ["başlangıç", "quick start", "giriş", "temel"]
    },
    {
        title: "Etkinlikler ve Seminerler",
        description: "ALLPLAN etkinlikleri, konferanslar ve özel seminerler.",
        url: "/solutions-v2/training/events",
        category: "Eğitim",
        tags: ["etkinlik", "event", "konferans", "seminer"]
    },

    // --- Genel ---
    {
        title: "Hakkımızda",
        description: "Aluplan ve ALLPLAN Türkiye hakkında kurumsal bilgiler.",
        url: "/about",
        category: "Genel",
        tags: ["kurumsal", "aluplan", "kimiz"]
    },
    {
        title: "İletişim",
        description: "Bize ulaşın. Satış, teknik destek ve genel bilgi için iletişim kanalları.",
        url: "/contact",
        category: "Genel",
        tags: ["iletişim", "adres", "telefon", "destek"]
    },
    {
        title: "Referanslar",
        description: "ALLPLAN ile başarıyla tamamlanmış projeler ve müşteri başarı hikayeleri.",
        url: "/references",
        category: "Genel",
        tags: ["referanslar", "projeler", "başarı hikayeleri"]
    },
    {
        title: "Sık Sorulan Sorular (FAQ)",
        description: "ALLPLAN ve hizmetlerimiz hakkında sık sorulan sorular ve cevapları.",
        url: "/solutions-v2/faq",
        category: "Genel",
        tags: ["faq", "sss", "sorular", "yardım"]
    },
    {
        title: "Gizlilik Politikası",
        description: "Kişisel verilerinizin korunması ve gizlilik politikamız.",
        url: "/gizlilik-politikasi",
        category: "Genel",
        tags: ["gizlilik", "kvkk", "veri"]
    },
    {
        title: "Kullanım Şartları",
        description: "Web sitesi kullanım şartları ve koşulları.",
        url: "/kullanim-sartlari",
        category: "Genel",
        tags: ["kullanım", "şartlar", "koşullar"]
    },
    {
        title: "KVKK",
        description: "Kişisel Verilerin Korunması Kanunu aydınlatma metni.",
        url: "/kvkk",
        category: "Genel",
        tags: ["kvkk", "kişisel veri", "gizlilik"]
    },
    {
        title: "Ücretsiz Deneme (Trial)",
        description: "ALLPLAN'ı 14 gün boyunca ücretsiz deneyin.",
        url: "https://www.allplan.com/trial-or-subscription/",
        category: "Genel",
        tags: ["deneme", "trial", "indir", "download"]
    },
    {
        title: "IFC Export El Kitabı",
        description: "buildingSMART Türkiye tarafından hazırlanan IFC Aktarım El Kitabı. Sektör paydaşlarının birlikte çalışabilme potansiyelini artırmak ve openBIM kültürünü yaygınlaştırmak amacıyla yayımlandı.",
        url: "/#professional-services",
        category: "Genel",
        tags: ["ifc", "ifc export", "ifc aktarım", "el kitabı", "openBIM", "buildingSMART", "open bim", "veri değişimi", "interoperability", "data exchange", "ifc el kitabı", "ifc aktarım el kitabı"]
    }
];

// Merge logic:
// 1. Create a map of auto-generated items for O(1) lookup
const autoIndexMap = new Map(autoSearchIndex.map(item => [item.url, item]));

// 2. Enhance manual items with content from auto-index (if available)
const enhancedManualIndex = manualSearchIndex.map(manualItem => {
    const autoItem = autoIndexMap.get(manualItem.url);
    if (autoItem && autoItem.content) {
        return {
            ...manualItem,
            content: autoItem.content
        };
    }
    return manualItem;
});

// 3. Filter out auto items that are already covered by manual index
const manualUrls = new Set(manualSearchIndex.map(item => item.url));
const uniqueAutoItems = autoSearchIndex.filter(item => !manualUrls.has(item.url));

export const searchIndex: SearchItem[] = [...enhancedManualIndex, ...uniqueAutoItems];
