"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ax3000Brosur from "@/assets/documents/AX3000_Brosur_V2022.pdf";
export default function ClientPage() {
  const sections = [
    <section key="main-content" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-8 rounded-xl mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Genel İmkanlar</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Kolay arayüz</li>
                <li>Hızlı ve verimli proje üretimi</li>
                <li>3B Planlama için kapsamlı kütüphane</li>
                <li>Fleks- ve Oval Boru, her türlü boru çapı</li>
                <li>Esnek metraj ve hesaplama yöntemleri</li>
              </ul>
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
  ];
  return (
    <AddonDetailTemplate
      title="AX3000 Konut Havalandırma"
      subtitle="Konut Havalandırma Sistemleri Hızlı Planlanamaz"
      description="DIN 1946-6 Konut Havalandırma modülü ve sistem boyutlandırması ile size yenilikçi ve entegre bir planlama aracı sunuyoruz. Kolay kullanımı ile villa projesi olsun, apartman binaları olsun, sistemi kolayca tasarlayabilirsiniz."
      sections={sections}
    />
  );
}
