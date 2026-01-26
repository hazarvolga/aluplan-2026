"use client";

import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import imgHero from "@/assets/products/allplan-cloud-services/hero.png";
import imgDistribution from "@/assets/products/allplan-cloud-services/distribution.png";
import imgTeamworking from "@/assets/products/allplan-cloud-services/teamworking.jpg";
import imgOffice from "@/assets/products/allplan-cloud-services/office.jpg";
import imgModelViewer from "@/assets/products/allplan-cloud-services/model-viewer.jpg";
import imgBluebeam from "@/assets/products/allplan-cloud-services/bluebeam.jpg";
import imgBimplus from "@/assets/products/allplan-cloud-services/bimplus.png";
import imgAutoconverter from "@/assets/products/allplan-cloud-services/autoconverter.jpg";
import imgAiViz from "@/assets/products/allplan-cloud-services/ai-viz.jpg";
import imgAiAssistant from "@/assets/products/allplan-cloud-services/ai-assistant.jpg";

import SideImageSection from "@/components/sections/SideImageSection";
import SectionHeader from "@/components/sections/SectionHeader";
import imgServiceMap from "@/assets/products/allplan-cloud-services/cloud-service-map.jpg";

const whatIsInfoMedia = {
    title: "ALLPLAN Cloud Nedir?",
    descriptions: [
        "ALLPLAN Cloud, tüm ALLPLAN aboneliklerine varsayılan olarak dahil edilen, verilerinizden en iyi şekilde yararlanmanızı sağlayan ve ALLPLAN masaüstü ile bulut uygulamalarını birbirine bağlayan entegre bir çözümdür.",
        "Güçlü bulut tabanlı BIM iş birliği platformu, ekip çalışması araçları, çizim/plan yönetimi ve dağıtım araçları ile verimli ofis içi ekip çalışması imkanlarından faydalanın.",
        "Tüm bunlara ek olarak, statik analiz çözümleriyle veri alışverişi, IFC dosyalarının hızlı görselleştirilmesi ve 2D dokümantasyon entegrasyonu için özel bulut uygulamaları.",
        "ALLPLAN Cloud, tasarımdan üretime iş akışlarınızı optimum verimlilik için geliştirir."
    ],
    videoUrl: "https://www.youtube.com/embed/DTSdM7tSBlU",
};

const benefitsItems = [
    {
        title: "Çizim ve Plan Dağıtımı",
        description: "ALLPLAN, çeşitli plan formatlarının oluşturulmasını ve dağıtımını yönetmek ve e-posta grupları aracılığıyla otomatik değişiklik bildirimleri sağlamak için özel olarak tasarlanmış web tabanlı bir plan dağıtım aracı sunar. Platform, 2D çizim indirme ortamı sağlar ve denetim raporuna dahil edilmek üzere sevkiyat ve indirme faaliyetlerini takip eder.",
        image: imgDistribution
    },
    {
        title: "Proje Ekip Çalışması",
        description: "ALLPLAN ve BIMPLUS hesabının birleşimi, dünyanın her yerindeki planlama ortaklarıyla doğrudan aynı ALLPLAN projesi üzerinde birlikte çalışmayı mümkün kılar. Proje ekip çalışması, size Model Görüntüleyici, görev yönetim aracı Task Board, denetim kontrolü ve çok daha fazlası gibi ek işlevler sunan BIM platformu BIMPLUS'a dayanmaktadır.",
        image: imgTeamworking
    },
    {
        title: "Ofis İçi Ekip Çalışması",
        description: "ALLPLAN, CAD iş istasyonlarının yerel ağlarda (LAN) ve İnternet üzerinden organize edilmesini sağlar. Orta ve büyük ölçekli planlama ve inşaat firmalarında net sinerji etkileri yaratır. Bireysel ağ iş istasyonunda çalışmak, normal bireysel istasyonda çalışmak kadar basittir.",
        image: imgOffice
    },
    {
        title: "ALLPLAN Model Görüntüleyici",
        description: "ALLPLAN Model Görüntüleyici, kullanıcıların bir IFC dosyasını hızla görselleştirmesine olanak tanıyan son teknoloji içerir. Büyük IFC dosyalarını yükleyip beklemek yerine, kullanıcılar artık yeni bir dosyayı hızlıca önizleyebilir, IFC modellerini görsel olarak görüntüleyebilir ve Bimplus'ta tam olarak yükleyip revizyon oluşturmadan önce kontrol edebilir.",
        image: imgModelViewer
    },
    {
        title: "ALLPLAN - Bluebeam Bağlantısı",
        description: "Gelişmiş tasarımdan üretime iş akışları ve dijital teslimat sürecine yardımcı olmak için artık Bluebeam ile bir bağlantı bulunmaktadır. Kullanıcılar, Bluebeam Studio Project ortamı içinden ALLPLAN iş akışlarına 2D dokümantasyon getirebilecekler.",
        image: imgBluebeam
    },
    {
        title: "BIMPLUS",
        description: "BIMPLUS, inşaat projelerinde yer alan tüm disiplinler için açık model tabanlı veri ve bilgi yönetimi iş birliği platformudur. ALLPLAN bulut teknolojisi, tasarımdan üretime, işletmeye kadar tüm proje yaşam döngüsü boyunca çeşitli yazılım araçları arasında birlikte çalışabilirliği sağlayarak tüm proje paydaşları arasında verimli iş birliğini teşvik eder.",
        image: imgBimplus,
        link: "/products/allplan-bimplus",
        buttonText: "Devamını oku"
    },
    {
        title: "Autoconverter (Otomatik Dönüştürücü)",
        description: "Statik mühendisleriyle çalışırken, BIMPLUS, AutoConverter aracılığıyla bir avantaj sunar. Statik tasarımcılarla geliştirilmiş ve hızlandırılmış iletişim, daha hızlı inceleme ve karar üzerinde doğrudan etkiye sahiptir. Revizyon karşılaştırması dahil SAF dosyalarının dışa ve içe aktarımı, mimarlık ve statik analiz arasındaki iş birliğindeki engelleri ortadan kaldırır, çünkü ne mimarların ne de statik mühendislerin modellerini yeniden oluşturması gerekmez.",
        image: imgAutoconverter,
        videoUrl: "https://youtu.be/twQPsbxq3QY",
        buttonText: "Videoyu İzle"
    },
    {
        title: "Yapay Zeka Tabanlı Görselleştirme",
        description: "İlham verici, detaylı yapay zeka destekli görselleştirmeler oluşturmak için bağlantılar. Nemetschek AI Visualizer ve EvolveLab'in Veras AI Visualizer entegrasyonunu içerir.",
        image: imgAiViz,
        videoUrl: "https://youtu.be/ldc4IjJDlwc",
        buttonText: "Videoyu İzle"
    },
    {
        title: "Yapay Zeka Asistanı",
        description: "Connect platformu aracılığıyla kullanılabilen Yapay Zeka Asistanı, ALLPLAN yazılım çözümleriyle (ALLPLAN, SCIA, FRILO, SDS2 ve BIMPLUS) çalışma şeklinizi dönüştürmek için tasarlanmış çığır açan bir araçtır. Mimarlık, mühendislik, imalat ve iş birliği konularında uzmanlığa sahip olan bu akıllı asistan, platformun tüm alanlarında kapsamlı destek sağlar. ALLPLAN'a özgü konulardaki derin bilgisinin ötesinde, daha geniş AEC endüstrisi standartları ve en iyi uygulamalar için de değerli bir kaynak olarak hizmet eder.\n\nHindistan'da doğru ve uyumlu köprü planlaması için IRC standardı desteği.",
        image: imgAiAssistant,
        link: "https://www.allplan.com/ai-assistant/",
        external: true,
        buttonText: "Daha fazla bilgi"
    }
];

export default function AllplanCloudServicesPage() {
    return (
        <ProductPageTemplate
            badge="BULUT HİZMETLERİ"
            heroVariant="background"
            title="ALLPLAN Bulut Hizmetleri"
            subtitle="İş birliğinizi bir üst seviyeye taşıyan araçlara anında erişimin keyfini çıkarın."
            description="Bağlantılı iş akışlarının gücünü keşfedin. ALLPLAN Cloud, ekiplerinizi, verilerinizi ve iş akışlarınızı tek bir birleşik ortamda bir araya getirir."
            heroImage={imgHero}
            quickActions={[
                { text: "Paketleri Görüntüle", href: "https://www.allplan.com/package-overview/", external: true, variant: "outline" }
            ]}
            whatIsInfoMedia={whatIsInfoMedia}
            benefitsItems={benefitsItems}
            benefitsVariant="cards"
        >
            <SideImageSection
                imageSrc={imgServiceMap}
                imageAlt="ALLPLAN Bulut Hizmetleri Süreç Haritası"
                imagePosition="left"
                title="Her tasarım aşamasında ALLPLAN Bulut Hizmetleri"
                content="ALLPLAN Cloud, BIMPLUS'ın işlevselliğini ve ALLPLAN Share, ALLPLAN Exchange ve ALLPLAN Workgroup Manager gibi eski bağımsız ürünleri içerir. Ayrıca statik analiz çözümleriyle entegrasyon için Autoconverter, hızlı IFC model görüntüleme için ALLPLAN Model Viewer, ALLPLAN iş akışlarına 2D dokümantasyon entegre etmek için Bluebeam Bağlantısı gibi ek uygulamalar da dahildir. Konsept tasarımdan, geliştirilmiş ve detaylı tasarıma, imalat ve inşaat uygulamasına kadar, ALLPLAN Cloud projelerinizin yaşam döngüsü boyunca üstün ve iş birliğine dayalı iş akışlarını destekler."
                backgroundColor="transparent"
                theme="dark"
            />
            <SectionHeader
                title="ALLPLAN Bulut Hizmetleri şunları içerir:"
                align="center"
                className="pb-0"
            />
        </ProductPageTemplate>
    );
}
