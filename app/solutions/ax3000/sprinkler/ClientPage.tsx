"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ax3000Brosur from "@/assets/documents/AX3000_Brosur_V2022.pdf";
export default function ClientPage() {
  const features = [
    "Soğuk Yükü Hesabı",
    "Türkiye İklim Verileri",
    "Akıllı Elemanlar ve Etiketleme",
    "Parça Listeleri ve Metraj",
  ];
  const sections = [
    <section key="main-content" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-8 rounded-xl mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Sprinkler (Fıskiye) Sistemleri</h2>
              <p className="text-muted-foreground mb-4">Soğuk yükü hesabı ve Türkiye iklim verilerine göre tasarım.</p>
            </div>
          </div>
          <div className="space-y-3">
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/elektrik">Elektrik Temel</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/havalandirma">Havalandırma</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/isitma">Isıtma</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/konut-havalandirma">Konut Havalandırma</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/sprinkler">Sprinkler (Fıskiye)</Link></Button>
            <Button asChild variant="outline" className="w-full"><Link href="/solutions/ax3000/sihhi-tesisat">Sıhhi Tesisat</Link></Button>
            <div className="border-t border-border my-4"></div>
            <Button asChild variant="default" className="w-full"><a href={ax3000Brosur} download="AX3000_Brosur_V2022.pdf">AX3000 PDF İndir</a></Button>
          </div>
        </div>
      </div>
    </section>,
    <SectionHeader key="features-header" title="Özellikler" align="center" />,
    <section key="features" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div><h3 className="font-display text-lg font-bold text-foreground mb-1">-</h3><p className="text-muted-foreground text-sm">{feature}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>,
    <section key="download" className="py-12 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"><Button asChild size="lg" className="bg-accent hover:bg-accent/90"><a href={ax3000Brosur} download="AX3000_Brosur_V2022.pdf">AX3000 PDF İndir</a></Button></div></section>,
  ];
  return (
    <AddonDetailTemplate
      title="AX3000 Sprinkler"
      subtitle="Tüm Tesisat için Tek Yazılım"
      description="Soğuk Yükü Hesabı  Türkiye İklim Verileri ile tasarım"
      sections={sections}
    />
  );
}
