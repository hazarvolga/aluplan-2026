"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import { contactService } from "@/services/contact";

export default function ClientPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await contactService.sendMessage(formData);
      toast({ title: "Mesajınız alındı!", description: "En kısa sürede size geri dönüş yapacağız." });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      toast({ variant: "destructive", title: "Hata oluştu", description: "Mesajınız gönderilemedi. Lütfen tekrar deneyin." });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    { icon: Phone, title: "Telefon", details: ["+90 (216) 123 45 67", "+90 (216) 123 45 68"] },
    { icon: Mail, title: "E-posta", details: ["info@aluplan.com.tr", "destek@aluplan.com.tr"] },
    { icon: MapPin, title: "Adres", details: ["Quick Tower - Workinton", "Ataşehir, İstanbul"] },
    { icon: Clock, title: "Çalışma Saatleri", details: ["Pazartesi - Cuma: 09:00 - 18:00", "7/24 Acil Destek"] },
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
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4"><Icon className="h-6 w-6 text-accent" /></div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (<p key={i} className="text-sm text-muted-foreground">{detail}</p>))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">Bize Mesaj Gönderin</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div><Label htmlFor="name">Ad Soyad *</Label><Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="mt-2" /></div>
                  <div><Label htmlFor="email">E-posta *</Label><Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="mt-2" /></div>
                  <div><Label htmlFor="phone">Telefon</Label><Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-2" /></div>
                  <div><Label htmlFor="company">Firma Adı</Label><Input id="company" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="mt-2" /></div>
                  <div><Label htmlFor="message">Mesajınız *</Label><Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5} className="mt-2" /></div>
                  <Button type="submit" size="lg" variant="accent" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Gönderiliyor..." : "Gönder"}</Button>
                </form>
              </div>
              <div className="lg:pl-8">
                <Card className="mb-8">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl font-bold mb-4">Ücretsiz Deneme</h3>
                    <p className="text-muted-foreground mb-6">30 gün boyunca Allplan&apos;ı ücretsiz deneyin. Kredi kartı bilgisi gerekmez.</p>
                    <Button variant="accent" className="w-full">Deneme Başlat</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl font-bold mb-4">Fiyat Teklifi Alın</h3>
                    <p className="text-muted-foreground mb-6">İhtiyaçlarınıza özel fiyat teklifi için satış ekibimizle görüşün.</p>
                    <Button variant="outline" className="w-full">Teklif İste</Button>
                  </CardContent>
                </Card>
                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <h4 className="font-semibold mb-2">Acil Destek mi Gerekiyor?</h4>
                  <p className="text-sm text-muted-foreground mb-4">Mevcut müşterilerimiz için 7/24 teknik destek hattımız aktif.</p>
                  <Button variant="outline" size="sm">Destek Merkezine Git</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-96 bg-muted"><div className="h-full flex items-center justify-center"><p className="text-muted-foreground">Google Maps Entegrasyonu</p></div></section>
      <Footer />
    </div>
  );
}
