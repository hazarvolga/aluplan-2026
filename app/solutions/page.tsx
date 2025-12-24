import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Construction, HardHat, Puzzle, Package } from "lucide-react";

export const metadata: Metadata = {
    title: "ALLPLAN Çözümleri | Tüm Çözümler",
    description: "ALLPLAN'ın bina tasarımı, altyapı mühendisliği, inşaat planlaması ve eklentiler dahil tüm BIM çözümlerini keşfedin.",
};

const solutions = {
    building: {
        title: "BİNA TASARIMI",
        icon: Building2,
        items: [
            { title: "Mimari", href: "/solutions/architecture" },
            { title: "Strüktürel Mühendislik", href: "/solutions/structural" },
            { title: "MEP", href: "/solutions/mep" },
            { title: "ALLPLAN Endüstri Çözümleri", href: "/solutions/industry" },
        ],
    },
    infrastructure: {
        title: "ALTYAPI TASARIMI",
        icon: Construction,
        items: [
            { title: "Altyapı Mühendisliği", href: "/solutions/infrastructure" },
            { title: "Yol ve Demiryolu Tasarımı", href: "/solutions/road-railway" },
            { title: "Köprü Tasarımı", href: "/solutions/bridge-design" },
        ],
    },
    construction: {
        title: "İNŞAAT PLANLAMASI",
        icon: HardHat,
        items: [
            { title: "Prekast Üretimi", href: "/solutions/precast" },
            { title: "Çelik Detaylandırma & İmalat", href: "/solutions/steel" },
            { title: "Şantiye Planlaması", href: "/solutions/site-planning" },
        ],
    },
    addons: {
        title: "EKLENTİLER",
        icon: Puzzle,
        items: [
            { title: "CDS Add-On", href: "/solutions/cds-addon" },
            { title: "Allto PythonPart Generator", href: "https://allplantools.com/", external: true },
            { title: "Allto PythonPart", href: "/solutions/pythonpart" },
            { title: "AX3000 MEP", href: "/solutions/ax3000-mekanik-tesisat" },
            { title: "Scalypso", href: "/solutions/scalypso" },
            { title: "Add On Kanal", href: "/solutions/addon-channel" },
        ],
    },
    other: {
        title: "DİĞER ÜRÜNLER",
        icon: Package,
        items: [
            { title: "Allplan BIMPLUS", href: "/solutions/bimplus" },
            { title: "Donatı Mühendisliği", href: "/solutions/rebar-engineering" },
            { title: "İmar Yönetmeliği BIM Eklentisi", href: "/solutions/imar-yonetmeligi-bim-eklentisi" },
            { title: "Allplan Oska İşbirliği", href: "/solutions/oska" },
            { title: "Allplan Poz Kataloğu", href: "/solutions/poz-catalog" },
        ],
    },
};

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            ALLPLAN Çözümleri
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Bina tasarımından altyapı mühendisliğine, inşaat planlamasından eklentilere kadar tüm BIM çözümlerimizi keşfedin.
                        </p>
                    </div>
                </div>
            </section>

            {/* Solutions Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {Object.entries(solutions).map(([key, category]) => {
                            const Icon = category.icon;
                            return (
                                <div key={key}>
                                    <div className="flex items-center gap-3 mb-8">
                                        <Icon className="h-8 w-8 text-primary" />
                                        <h2 className="text-3xl font-bold">{category.title}</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {category.items.map((item, index) => (
                                            'external' in item && item.external ? (
                                                <a
                                                    key={index}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block"
                                                >
                                                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                                                        <CardHeader>
                                                            <CardTitle className="text-lg">{item.title}</CardTitle>
                                                        </CardHeader>
                                                    </Card>
                                                </a>
                                            ) : (
                                                <Link key={index} href={item.href}>
                                                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                                                        <CardHeader>
                                                            <CardTitle className="text-lg">{item.title}</CardTitle>
                                                        </CardHeader>
                                                    </Card>
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
