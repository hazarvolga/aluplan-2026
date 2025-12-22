"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Award, TrendingUp } from "lucide-react";


export default function ClientPage() {
  const stats = [
    { number: "29+", label: "Yıllık Tecrübe" },
    { number: "500+", label: "Aktif Müşteri" },
    { number: "50+", label: "Uzman Kadro" },
    { number: "10K+", label: "Tamamlanan Proje" },
  ];
  const values = [
    { icon: Target, title: "Misyonumuz", description: "Türkiye'de BIM teknolojilerinin yaygınlaşması ve mimari/mühendislik projelerinin dijital dönüşümüne öncülük etmek." },
    { icon: Users, title: "Müşteri Odaklılık", description: "Müşterilerimizin başarısı bizim başarımızdır. 7/24 destek ve danışmanlık hizmetimizle her zaman yanınızdayız." },
    { icon: Award, title: "Kalite ve Uzmanlık", description: "Sertifikalı uzman kadromuz ve sürekli eğitimlerimizle sektörün en kaliteli hizmetini sunuyoruz." },
    { icon: TrendingUp, title: "Sürekli İnovasyon", description: "Teknolojinin nabzını tutarak, en güncel çözümleri müşterilerimize sunmak için çalışıyoruz." },
  ];
  return (
    <div className="dark min-h-screen bg-graphite-950">
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 bg-white/10 border-white/30 text-white">1995&apos;ten Beri</Badge>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Türkiye&apos;nin Güvenilir<br /><span className="text-accent">BIM Çözüm Ortağı</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Aluplan olarak, 1995 yılından bu yana Türkiye&apos;de Allplan yazılımlarının distribütörlüğünü yapıyor, mimarlık ve mühendislik sektörüne profesyonel BIM çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-8 text-center">Hikayemiz</h2>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>Aluplan Program Sistemleri, 1995 yılında mimarlık ve mühendislik sektörüne profesyonel yazılım çözümleri sunmak amacıyla kuruldu. Kurulduğumuz günden bu yana Allplan&apos;ın Türkiye distribütörü olarak, sektörün dijital dönüşümüne öncülük ediyoruz.</p>
              <p>Allplan Architecture, Allplan Engineering, Allplan Bridge ve Allplan Precast ürünleriyle mimarlık, inşaat mühendisliği, köprü tasarımı ve prekast beton üretimi alanlarında çözümler sunuyoruz. BIM (Building Information Modeling) teknolojilerinin Türkiye&apos;de yaygınlaşması için eğitim, danışmanlık ve teknik destek hizmetleri veriyoruz.</p>
              <p>İstanbul Ataşehir&apos;deki ofisimizden Türkiye geneline hizmet veren 50&apos;den fazla uzman kadromuz, müşterilerimizin projelerinde başarılı olmalarını sağlamak için 7/24 çalışmaktadır. Belediyeler, üniversiteler, özel mimarlık ve mühendislik ofisleri ile büyük ölçekli inşaat firmalarına hizmet vermekteyiz.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">Değerlerimiz</h2>
            <p className="text-xl text-muted-foreground">Çalışmalarımızı şekillendiren temel ilkelerimiz</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><Icon className="h-7 w-7 text-accent" /></div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">Ofisimiz</h2>
            <p className="text-xl text-muted-foreground">İstanbul Ataşehir&apos;deki modern ofisimizden Türkiye geneline hizmet veriyoruz</p>
          </div>
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center"><p className="text-muted-foreground">Google Maps Entegrasyonu</p></div>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Adres</h3>
                  <p className="text-muted-foreground">Quick Tower – Workinton<br />İçerenköy Mah. Topçu İbrahim Sok.<br />8/10D No: 5, 34752 Ataşehir / İstanbul</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">İletişim</h3>
                  <p className="text-muted-foreground"><strong>Telefon:</strong> (+90) 216 225 84 41<br /><strong>Email:</strong> info@aluplan.com.tr<br /><strong>Çalışma Saatleri:</strong><br />Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}
