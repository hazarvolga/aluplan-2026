"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ClientPage() {
  const contactInfo = [
    { icon: Phone, title: "Telefon", details: ["(+90) 216 225 84 41", "(+90) 549 499 73 79", "(+90) 543 211 94 42"] },
    { icon: Mail, title: "E-posta", details: ["info@aluplan.com.tr"] },
    { icon: MapPin, title: "Adres", details: ["Quick Tower – Workinton", "İçerenköy Mah. Topçu İbrahim Sok. No: 5, Ataşehir"] },
    { icon: Clock, title: "Çalışma Saatleri", details: ["Pazartesi - Cuma: 09:00 - 18:00"] },
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <section className="py-24 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Bizimle İletişime Geçin</h1>
            <p className="text-xl text-white/90">Sorularınız için buradayız. Size en uygun çözümü bulmak için yardımcı olalım.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="animate-slide-up hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="font-display text-2xl font-bold mb-4">Ücretsiz Deneme</h3>
                <p className="text-muted-foreground mb-6 flex-grow">30 gün boyunca Allplan&apos;ı ücretsiz deneyin. Kredi kartı bilgisi gerekmez.</p>
                <Button variant="accent" className="w-full" asChild>
                  <a href="https://www.allplan.com/trial-or-subscription/" target="_blank" rel="noopener noreferrer">
                    Deneme Başlat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="font-display text-2xl font-bold mb-4">Teklif Talep Formu</h3>
                <p className="text-muted-foreground mb-6 flex-grow">İhtiyaçlarınıza özel fiyat teklifi için satış ekibimizle görüşün.</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">
                    Teklif Talep Formu
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <h3 className="font-display text-2xl font-bold mb-4">Teknik Destek</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Mevcut müşterilerimiz için teknik destek hattımız aktif.</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://allplan.net.tr/" target="_blank" rel="noopener noreferrer">
                    Destek Merkezine Git
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.349796050269!2d29.100535700000005!3d40.973820700000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7f702b9b7cf%3A0x8c2c752cb2c61168!2sAluplan%20Program%20Sistemleri!5e0!3m2!1sen!2str!4v1766601003812!5m2!1sen!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Aluplan Office Location - Quick Tower Workinton, İçerenköy, Ataşehir"
        />
      </section>
    </div>
  );
}
