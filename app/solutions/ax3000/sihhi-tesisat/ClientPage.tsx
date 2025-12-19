"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { CircleDot, Columns, Droplet, Eye, GitMerge, Layers, Link2, Repeat2, Ruler, Scan, Tag, Wrench } from "lucide-react";
import Link from "next/link";
import ax3000Brosur from "@/assets/documents/AX3000_Brosur_V2022.pdf";
export default function ClientPage() {
  const youtubeUrl = "https://www.youtube.com/watch?v=EXVlk83zcIs&list=PL5ma0JNNoskbikv2hCg83KVa1pvQ4fvZW";
  const featuresLeft = [
    { Icon: Layers, text: "Akıllı Çizim Elemanları (2B/3B Boru Hattı Konstrüksiyonu)" },
    { Icon: Repeat2, text: "Gidiş-Dönüş Konstrüksiyonu" },
    { Icon: GitMerge, text: "İki Borulu Sistem ve Tichelmann-sistemi" },
    { Icon: Droplet, text: "Yoğunluk ve Akışganlığa göre Ortam Değişikliği" },
    { Icon: Wrench, text: "Otomatik Fitings İhtiyacı ve Seçimi" },
    { Icon: Scan, text: "İzometrik Şema" },
  ];
  const featuresRight = [
    { Icon: Columns, text: "Kolon Hattı İhtiyacının Belirlenmesi" },
    { Icon: Link2, text: "Kat Planına veya Kolon Hattına Otomatik Radyatör Bağlantısı" },
    { Icon: Ruler, text: "Sabit Direnç Metoduna göre Otomatik Boru Ölçülendirme" },
    { Icon: CircleDot, text: "Minimum Çap Tanımı" },
    { Icon: Tag, text: "Hat Etiketi Oluşturma" },
    { Icon: Eye, text: "Borulama Sistemi ve Radyatörlerin İzometrik Görünümleri" },
  ];
  const sections = [
    <section key="post-hero" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Genel İmkanlar</h2>
            <ul className="space-y-2">
              {[
                "Hazır Yapı Grubuna Göre Önceden Tanımlanmış Favoriler",
                "Karmaşık Sistemleri Kolayca Oluşturma İmkanı",
                "Sıhhi Tesisat Objeleri için Otomatik Bağlantı Fonksiyonları",
                "Güvenilir ve Hızlı Temel Hat Planlaması (Meyilli ve Meyilsiz)",
                "Kapsamlı 3B Kütüphane (Üretici Verileri)",
                "En zor bağlantılar için bile Easyline Modu",
                "Kapsamlı Hesaplama ve Görselleştirme",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <p className="text-muted-foreground">AX3000 Sıhhi Tesisat modülü kapsamlı 3B kütüphanesi sunuyor.</p>
              <p className="text-muted-foreground">İsterseniz kendi bileşkenleriniz ile de genişletebilirsiniz.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">AX3000 Youtube</h3>
            <p className="text-muted-foreground mb-6">AX3000 ile ilgili eğitim videoları için Youtube Kanalımızı ziyaret edebilirsiniz</p>
            <Button asChild size="lg" className="w-full">
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">İncele</a>
            </Button>
          </div>
        </div>
      </div>
    </section>,
    <section key="main-content" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-8 rounded-xl mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Sıhhi Tesisat ve Isıtma</h2>
              <p className="text-muted-foreground mb-4">AX-3000’ deki Isıtma ve Sıhhi Tesisat modüleriyle çok karmaşık ve büyük projelerin tesisat hesap ve planlamasını kolaylıkla yapabilirsiniz. AX-3000’ deki planlamanın temeli otomatik borulama hesabına dayanır ve şartnameye bağlı olarak otomatik gerçekleşir. Planlama sırasında AX-3000 bir çok farklı otomatik teknik özellikleri de kullanır.</p>
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
    <SectionHeader key="planlama-header" title="Sıhhi Tesisat için Borulama Hesabı" align="center" />,
    <section key="features" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {featuresLeft.map(({ Icon, text }, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div><h4 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">{text}</h4></div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {featuresRight.map(({ Icon, text }, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg">
                <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div><h4 className="font-display text-base md:text-lg font-bold text-foreground leading-snug">{text}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>,
  ];
  return (
    <AddonDetailTemplate
      title="AX3000 Sıhhi Tesisat"
      subtitle="Sıhhi Tesisat sistemleri 3 boyutlu tasarlanabilir mi?"
      description="AX3000 Sıhhi Tesisat modülü kapsamlı 3B kütüphanesi sunuyor. İsterseniz kendi bileşkenleriniz ile de genişletebilirsiniz. Isıtma ve Havalandırma modüllerinde de olduğu gibi, kolay CAD fonksiyonlarıyla çalışarak, otomatik Easyline ile boyutlandırma, metraj hesaplamaları ve görselleştirmeye erişirsiniz. Atık Su modülü ile yatay tasarlanmış 2 boyutlu sistemler, 3 boyutlu boru ağlarına dönüşür. Kapsamlı 3B Kütüphane ve üretici verileri ile gerçek görsellere ulaşırsınız."
      sections={sections}
    />
  );
}
