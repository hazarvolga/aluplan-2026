"use client"
import SolutionHero from "@/components/SolutionHero";
import SectionHeader from "@/components/SectionHeader";
import Image, { StaticImageData } from "next/image";
import { CheckCircle2, Keyboard, Palette, Moon, AlertTriangle, Info, Box } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

// Placeholder images - will be replaced with actual images
const placeholderImg = "/placeholder.jpg";

export default function AllplanBulutContent() {
  const features = [
    {
      title: "Çok Harfli Klavye Kısayolları Desteği",
      desc: "Multi-letter Keyboard Shortcuts Support",
      subtitle: "Daha hızlı komutlar ve daha akıllı iş akışları parmaklarınızın ucunda",
      package: "#Concept",
      icon: Keyboard,
      img: placeholderImg,
      videoUrl: null, // Will be added later
      details: [
        "ALLPLAN 2026, son derece esnek ve özelleştirilebilir bir kısayol sistemi sunar; bu sistem, sektördeki standartlarla eşleşir veya onları aşar ve kullanıcıların kısayol odaklı, ultra verimli iş akışları oluşturmasını sağlar.",
        "Bu iyileştirmeler sayesinde, kullanıcılar herhangi bir araca veya komuta saniyeler içinde erişebilir, günlük üretkenlikte önemli bir artış sağlar."
      ]
    },
    {
      title: "Yeni Grafik Geçersiz Kılma",
      desc: "New Graphic Override",
      subtitle: "Daha hızlı ve yaratıcı BIM iş akışları için görsel kuralları zahmetsizce uygulayın",
      package: "#Professional",
      icon: Palette,
      img: placeholderImg,
      videoUrl: null,
      details: [
        "ALLPLAN 2026'daki Yeni Graphic Override özelliği, planlayıcılara çizim ve modellerin görünümünü anında kontrol etme olanağı sağlar.",
        "Renkler, dolgular, çizgi tipleri, desenler ve diğer özellikler için kurallar, bireysel eleman niteliklerini değiştirmeden Graphic Override Manager üzerinden kolayca tanımlanabilir.",
        "Grafik geçersiz kılma setleri, inşaat veya düzenleme modunda anında uygulanabilir, böylece tasarımınızı hızlıca görselleştirebilir, kontrol edebilir ve paylaşabilirsiniz.",
        "Bu esnek, kural tabanlı yaklaşım, plan üretimini hızlandırır, zamandan tasarruf sağlar ve daha verimli ve yaratıcı BIM iş akışlarına olanak tanır."
      ]
    },
    {
      title: "Introducing Dark Mode",
      desc: "Karanlık Mod",
      subtitle: "Effortless comfort and clarity—whatever the lighting",
      package: "#Basic",
      icon: Moon,
      img: placeholderImg,
      videoUrl: null,
      details: [
        "With rising expectations for a modern, comfortable workspace, users need flexible interface options to stay productive—day or night. ALLPLAN 2026 introduces a brand-new dark mode and a refreshed light mode, enhancing comfort and productivity, especially during intense or prolonged modeling sessions.",
        "Users can switch seamlessly between dark or light mode to reduce eye strain, boost accessibility, and even save battery on OLED screens, ensuring a customizable, future-ready ALLPLAN experience—all in one intuitive interface."
      ]
    },
    {
      title: "Geliştirilmiş Çakışma Yönetimi",
      desc: "Enhanced Clash Management",
      subtitle: "Daha iyi proje koordinasyonu için kolay çakışma tespiti ve hızlı çözüm",
      package: "#Basic",
      icon: AlertTriangle,
      img: placeholderImg,
      videoUrl: null,
      details: [
        "ALLPLAN 2026, 3B modeldeki farklı elemanlar arasındaki çakışmaları tespit etme ve çözme sürecini kolaylaştırır.",
        "Geliştirilmiş Çakışma Yönetimi ile ALLPLAN artık niteliklerle dolu bilgilendirici çakışma makroları, gelişmiş çakışma filtreleri ve mevcut çakışmaları güncelleme yeteneği sunar.",
        "Ekipler, koordinasyon üzerinde tam kontrol sahibi olabilir. Yenilikler ayrıca sert ve yumuşak çakışmaların (boşluklar dahil) hedeflenmiş filtrelerle kolayca kontrol edilmesini ve çakışma makrolarının bilgi paletine anında aktarılabilmesini sağlar.",
        "Sonuç: daha az maliyetli yeniden işleme, daha yüksek kaliteli yapılar ve daha uzun ömürlü projeler, tüm bunlar ALLPLAN'da daha akıcı inşaat süreçleri ile gerçekleştirilir."
      ]
    },
    {
      title: "Geliştirilmiş Bilgi Paleti",
      desc: "Enhanced Information Palette",
      subtitle: "Daha akıllı ve hızlı proje yönetimi için kolay organizasyon ve kontrol",
      package: "#Concept",
      icon: Info,
      img: placeholderImg,
      videoUrl: null,
      details: [
        "ALLPLAN 2026, tamamen yenilenmiş bir Bilgi Paleti sunar. Bu yeni sürüm, gelişmiş özellikler içerir:",
        "Esnek gruplama, Otomatik toplam hesaplama, IDS doğrulama, Katalog entegrasyonu",
        "İyileştirilmiş gezinme, Gelişmiş sıralama ve filtreleme",
        "Daha sezgisel bir kullanıcı deneyimi için yeniden tasarlanmış arayüz",
        "Akıcı iş akışları için performans optimizasyonları",
        "Bu güçlü araçlar sayesinde kullanıcılar, bilgileri hızlıca organize edebilir, bulabilir ve güncelleyebilir, böylece arama süresini azaltır ve verimliliği artırır. Sonuç: daha güvenilir planlama, daha hızlı proje teslimi ve yaratıcı işlere daha fazla zaman."
      ]
    },
    {
      title: "Geliştirilmiş Yapısal Çerçeveleme",
      desc: "Improved Structural Framing",
      subtitle: "Çerçeveleme düzenlerini hızlıca modelleyin ve güncelleyin",
      package: "#Professional",
      icon: Box,
      img: placeholderImg,
      videoUrl: null,
      details: [
        "Yeni kiriş ve çıta yerleştirme araçları, önceden tasarlanmış binaları daha hızlı modellemenizi ve çerçeveleme düzenlerini çatı geometrisi değiştikçe kolayca uyarlamanızı sağlar.",
        "Geliştirilmiş hizalama seçenekleri, çelik elemanların ilk seferde doğru yerleştirilmesini sağlayarak bağlantı hatalarını azaltır."
      ]
    },
    {
      title: "Yapısal Çerçeveleme Montajları",
      desc: "Structural Framing Assemblies",
      subtitle: "Bağlantıları otomatik olarak doğru tutun",
      package: "#Professional",
      icon: Box,
      img: placeholderImg,
      videoUrl: null,
      details: [
        "ALLPLAN 2026, bağlantı hatalarını düzeltmek için harcanan zamanı ortadan kaldırır.",
        "Yeni işlevsellik sayesinde bağlantılar otomatik olarak uygulanır ve güncellenir, böylece çelik montajlar tasarım değişiklikleri sırasında her zaman doğru ve geçerli kalır."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SolutionHero
        badge="ALLPLAN Cloud ve Genel Geliştirmeler"
        title="DAHA İYİ BİR GELECEK İNŞA ETMEK İÇİN TASARLANDI"
        subtitle="ALLPLAN 2026 ile Yeni Özellikler – ALLPLAN Cloud ve Genel Geliştirmeler"
        description=""
      />

      {/* General Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <SectionHeader
            title="Genel Ana Özellikler ve Tüm Kullanıcılar için Geliştirmeler"
          />

          <div className="mt-20 space-y-32">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-start`}>
                {/* Image Side */}
                <div className="flex-1 w-full group relative">
                  <div className="mb-4 flex items-center px-1">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${feature.package === '#Basic' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                        feature.package === '#Concept' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                          'bg-purple-500/10 text-purple-500 border-purple-500/20'
                      }`}>
                      Dahil Olduğu Paket: {feature.package}
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden border border-border/10 shadow-2xl bg-card aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-background flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Görsel yakında eklenecek</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Video Play Button Overlay */}
                    {feature.videoUrl && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="absolute inset-0 flex items-center justify-center group/play cursor-pointer z-10">
                            <div className="h-20 w-20 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover/play:scale-110 group-hover/play:bg-accent transition-all duration-300">
                              <Play className="h-8 w-8 text-white fill-white ml-1" />
                            </div>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[800px] border-border bg-card p-0 overflow-hidden text-foreground">
                          <div className="aspect-video w-full">
                            <iframe
                              src={feature.videoUrl}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-accent/10 text-accent">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <span className="text-muted-foreground font-medium tracking-widest text-sm uppercase">
                      {feature.desc}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  {feature.subtitle && (
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      {feature.subtitle}
                    </p>
                  )}

                  {feature.videoUrl && (
                    <div className="mb-8">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground gap-2 transition-all">
                            <Play className="h-4 w-4" />
                            Videoyu Görüntüle
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[800px] border-border bg-card p-0 overflow-hidden text-foreground">
                          <div className="aspect-video w-full">
                            <iframe
                              src={feature.videoUrl}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}

                  <ul className="space-y-4">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="text-muted-foreground text-lg leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
