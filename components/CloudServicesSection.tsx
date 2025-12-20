"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import VideoModal from "@/components/VideoModal";

// Bulut hizmetleri görselleri - allplan-professional'dan referans
import cloudResourcesImg from "@/assets/products/allplan-professional/cloud-resources.jpg";
import projectTeamworkImg from "@/assets/products/allplan-professional/project-teamwork.jpg";
import planDistributionImg from "@/assets/products/allplan-professional/plan-distribution.jpg";
import analyticalModelImg from "@/assets/products/allplan-professional/analytical-model.jpg";
import clashDetectionImg from "@/assets/products/allplan-professional/clash-detection.jpg";
import workgroupManagerImg from "@/assets/products/allplan-professional/workgroup-manager.jpg";
import modelViewerImg from "@/assets/products/allplan-professional/model-viewer.jpg";
import bimplusProImg from "@/assets/products/allplan-professional/bimplus-pro.jpg";
import cloudBasedCollabImg from "@/assets/products/allplan-concept/remote/cloud/cloud_based_collaboration.jpg";
import aiVisualizationImg from "@/assets/products/allplan-ultimate/ai-visualization.jpg";

interface CloudServiceItem {
    title: string;
    description: string;
    image?: string | StaticImageData;
    youtubeId?: string;
}

interface CloudServicesSectionProps {
    additionalServices?: CloudServiceItem[];
    variant?: 'default' | 'civil' | 'precast';
}

// Default cloud services (Professional, Ultimate, Concept)
const defaultCloudServices: CloudServiceItem[] = [
    { title: "Bulut Tabanlı İşbirliği", description: "Bimplus Pro, bulut tabanlı BIM işbirliği platformu.", youtubeId: "7xzpEhLQhEI", image: cloudBasedCollabImg },
    { title: "Proje Takım Çalışması", description: "ALLPLAN Share, bir şirket ağı üzerinden ekip çalışmasını sağlar; uzaktan çalışan ekip üyeleri için de idealdir.", image: projectTeamworkImg },
    { title: "Çizim ve Plan Dağıtımı", description: "Çeşitli plan formatlarının oluşturulmasını ve dağıtımını yönetmek için özel olarak tasarlanmış web tabanlı plan dağıtım aracı ALLPLAN Exchange, ayrıca e-posta grupları aracılığıyla otomatik değişiklik bildirimleri sağlar.", image: planDistributionImg },
    { title: "Analitik Model Üretimi", description: "AutoConverter aracılığıyla geometrik modellerin, Frilo Statics, Scia Engineer gibi yapısal analiz çözümleri tarafından doğrudan kullanılabilen analitik modellere akıllı bir şekilde dönüştürülmesi.", image: analyticalModelImg },
    { title: "Tasarım Kontrolü", description: "Solibri Inside, kullanıcı istediği zaman ALLPLAN modellerinde kontroller gerçekleştirebilir; bu, ALLPLAN içindeki BIM Explorer'dan palet benzeri bir işlevsellik kullanarak yapılır. (ALLPLAN Abonelik lisansı ile birlikte 12 aylık Solibri Inside aboneliği dahildir.)", youtubeId: "t4axrE0TWO4", image: clashDetectionImg },
    { title: "Ofis Ekip Çalışması", description: "ALLPLAN Çalışma Grubu Yöneticisi aracılığıyla yerel bir şirket ağı içinde verimli ekip çalışmasını kolaylaştırın.", image: workgroupManagerImg },
    { title: "Bulut Destekli Proje Kaynakları", description: "Bulut ofis kaynakları, ALLPLAN proje kaynaklarının tamamen bulut tabanlı dağıtımını sağlar.", image: cloudResourcesImg },
    { title: "ALLPLAN Model Viewer", description: "Yeni bir dosyayı hızlıca önizlemek, IFC modellerini görsel olarak görüntülemek ve tam olarak yüklemeden önce kontrol etmek için kullanılır. (Sadece ALLPLAN Aboneliği veya Bimplus Professional satın alımı ile kullanılabilir.)", image: modelViewerImg },
    { title: "ALLPLAN - Bluebeam Bağlantısı", description: "Geliştirilmiş iş akışları – dijital teslim sürecine yardımcı olmak için Bluebeam ile bağlantı kuracağız. Kullanıcılar, Bluebeam Studio Proje ortamından ALLPLAN iş akışlarına 2D belgeleri kolayca aktarabilecekler.", youtubeId: "u4GZUL7WdQU", image: bimplusProImg },
];

// Civil-specific cloud services (no Solibri/Tasarım Kontrolü, has AI Visualization, Model Viewer has video)
const civilCloudServices: CloudServiceItem[] = [
    { title: "Bulut Tabanlı İşbirliği", description: "Bimplus Pro, bulut tabanlı BIM işbirliği platformu.", youtubeId: "7xzpEhLQhEI", image: cloudBasedCollabImg },
    { title: "Proje Takım Çalışması", description: "ALLPLAN Share, bir şirket ağı üzerinden ekip çalışmasını sağlar; uzaktan çalışan ekip üyeleri için de idealdir.", image: projectTeamworkImg },
    { title: "Çizim ve Plan Dağıtımı", description: "Çeşitli plan formatlarının oluşturulmasını ve dağıtımını yönetmek için özel olarak tasarlanmış web tabanlı plan dağıtım aracı ALLPLAN Exchange, ayrıca e-posta grupları aracılığıyla otomatik değişiklik bildirimleri sağlar.", image: planDistributionImg },
    { title: "Analitik Model Üretimi", description: "AutoConverter aracılığıyla geometrik modellerin, Frilo Statics, Scia Engineer gibi yapısal analiz çözümleri tarafından doğrudan kullanılabilen analitik modellere akıllı bir şekilde dönüştürülmesi.", image: analyticalModelImg },
    { title: "Ofis Ekip Çalışması", description: "ALLPLAN Çalışma Grubu Yöneticisi aracılığıyla yerel bir şirket ağı içinde verimli ekip çalışmasını kolaylaştırın.", image: workgroupManagerImg },
    { title: "Bulut Destekli Proje Kaynakları", description: "Bulut ofis kaynakları, ALLPLAN proje kaynaklarının tamamen bulut tabanlı dağıtımını sağlar.", image: cloudResourcesImg },
    { title: "ALLPLAN Model Viewer", description: "Yeni bir dosyayı hızlıca önizlemek, IFC modellerini görsel olarak görüntülemek ve tam olarak yüklemeden önce kontrol etmek için kullanılır. (Sadece ALLPLAN Aboneliği veya Bimplus Professional satın alımı ile kullanılabilir.)", image: modelViewerImg },
    { title: "ALLPLAN - Bluebeam Bağlantısı", description: "Geliştirilmiş iş akışları – dijital teslim sürecine yardımcı olmak için Bluebeam ile bağlantı kuracağız. Kullanıcılar, Bluebeam Studio Proje ortamından ALLPLAN iş akışlarına 2D belgeleri kolayca aktarabilecekler.", youtubeId: "u4GZUL7WdQU", image: bimplusProImg },
    { title: "AI Tabanlı Görselleştirme", description: "İlham verici, ayrıntılı AI destekli görselleştirmeler oluşturmak için bağlantılar. Nemetschek AI Visualizer ve EvolveLab'ın Veras AI Visualizer ile entegrasyonu içerir.", youtubeId: "ldc4IjJDlwc", image: aiVisualizationImg },
];

const CloudServiceCard = ({ service }: { service: CloudServiceItem }) => (
    <Card className="overflow-hidden group border border-white/10 hover:border-white/20 bg-graphite-950">
        <div className="aspect-video overflow-hidden relative">
            {service.youtubeId ? (
                <VideoModal youtubeId={service.youtubeId} title={service.title} thumbnailUrl={service.image} className="w-full h-full" />
            ) : (
                <Image src={service.image!} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            )}
        </div>
        <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.description}</p>
        </CardContent>
    </Card>
);

export default function CloudServicesSection({ additionalServices = [], variant = 'default' }: CloudServicesSectionProps) {
    // Select base services based on variant
    const baseServices = variant === 'civil' ? civilCloudServices : defaultCloudServices;
    const allServices = [...baseServices, ...additionalServices];

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">ALLPLAN Bulut Hizmetleri</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allServices.map((service, index) => (
                        <CloudServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Export the type for pages that need additional services
export type { CloudServiceItem };
