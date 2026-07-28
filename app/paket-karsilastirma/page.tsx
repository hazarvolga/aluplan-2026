import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout-v2/PageWrapper";
import { HeroInternal } from "@/components/layout-v2/HeroInternal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, ExternalLink, CheckCircle2, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ALLPLAN Paket Karşılaştırma Rehberi (2026 Q3 PDF) | ALUPLAN",
  description: "ALLPLAN Basic, Concept, Professional, Ultimate, Civil ve Precast paketlerinin en güncel teknik özellik karşılaştırma tablosunu PDF formatında indirin.",
};

export default function PaketKarsilastirmaPage() {
  const pdfUrl = "/docs/V2026_paket-karsilastirme-Q3-2026_R01.pdf";
  const pdfFileName = "V2026_paket-karsilastirme-Q3-2026_R01.pdf";

  const packageSummaries = [
    {
      title: "ALLPLAN Basic",
      desc: "Temel 2D/3D tasarım ve çizim araçları.",
      link: "/products/allplan-basic",
      badge: "Giriş Seviye",
    },
    {
      title: "ALLPLAN Concept",
      desc: "Konsept tasarım, modelleme ve görselleştirme.",
      link: "/products/allplan-concept",
      badge: "Mimari Konsept",
    },
    {
      title: "ALLPLAN Professional",
      desc: "Tam kapsamlı BIM, metraj ve disiplinlerarası işbirliği.",
      link: "/products/allplan-professional",
      badge: "Popüler BIM",
    },
    {
      title: "ALLPLAN Ultimate",
      desc: "Tüm disiplinler, gelişmiş donatı ve ileri seviye mühendislik.",
      link: "/products/allplan-ultimate",
      badge: "Eksiksiz Çözüm",
    },
    {
      title: "ALLPLAN Civil",
      desc: "Altyapı, yol, köprü ve harita mühendisliği çözümleri.",
      link: "/products/civil",
      badge: "Altyapı & Köprü",
    },
    {
      title: "ALLPLAN Precast",
      desc: "Prefabrik eleman üretimi, planlama ve otomatik detaylandırma.",
      link: "/products/precast",
      badge: "Prefabrik",
    },
  ];

  const highlights = [
    "2026 Q3 Güncel Versiyon Modül Matrisi",
    "Mimari, Statik, Donatı ve Altyapı Özellik Farkları",
    "BIMPLUS ve Bulut Servisleri Dahili Yetenekleri",
    "İthalat / İhracat (IFC4.3, DWG, SAF vb.) Format Destekleri",
    "Metraj, Maliyet ve Raporlama Yetenekleri",
    "Yazdırılabilir ve Paylaşılabilir Resmi PDF Yapısı",
  ];

  return (
    <PageWrapper>
      <HeroInternal
        category="ÜRÜNLER & ÇÖZÜMLER"
        title="ALLPLAN Paket Karşılaştırması"
        subtitle="En güncel teknik özellik karşılaştırma tablosunu resmi PDF dokümanı olarak indirin."
      />

      <div className="container mx-auto px-4 py-16">
        {/* Main PDF Download Card */}
        <div className="max-w-4xl mx-auto bg-card border border-accent/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-accent text-accent-foreground px-3 py-1 font-semibold">
                  2026 Q3 RESMİ DOKÜMAN
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Güncel Veriler
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                ALLPLAN 2026 Detaylı Paket Karşılaştırma Dokümanı
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Tüm ALLPLAN paketlerinin (Basic, Concept, Professional, Ultimate, Civil, Precast) teknik detaylarını, modül farklarını ve fonksiyon matrisini içeren güncel PDF dosyamızı bilgisayarınıza indirebilirsiniz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl font-semibold gap-2">
                  <a href={pdfUrl} download={pdfFileName} target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5" />
                    Paket Karşılaştırma PDF'ini İndir
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="border-border hover:bg-accent/10 gap-2">
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Tarayıcıda Görüntüle
                  </a>
                </Button>
              </div>
            </div>

            <div className="w-full md:w-64 flex flex-col items-center justify-center p-6 bg-background/60 rounded-2xl border border-border/50 text-center shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-foreground mb-1">ALLPLAN Q3-2026</h3>
              <p className="text-xs text-muted-foreground mb-4">Resmi Karşılaştırma Matrisi (PDF)</p>
              <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                PDF Dokümanı
              </Badge>
            </div>
          </div>
        </div>

        {/* Individual Packages Summary Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
              ALLPLAN Ürün Paketleri
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Detaylı ürün sayfalarımızı ziyaret edebilir veya tüm paketleri tek dokümanda kıyaslamak için PDF dosyamızı indirebilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packageSummaries.map((pkg, idx) => (
              <Card key={idx} className="p-6 bg-card/60 backdrop-blur-sm border-border/50 hover:border-accent/40 transition-all hover:shadow-lg flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {pkg.badge}
                    </Badge>
                    <Sparkles className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {pkg.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <Link href={pkg.link} className="text-xs font-semibold text-accent hover:underline flex items-center gap-1">
                    İncele <ArrowRight className="w-3 h-3" />
                  </Link>
                  <a href={pdfUrl} download={pdfFileName} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                    <Download className="w-3 h-3" /> PDF
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
