"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import exchangeImg from "@/assets/solutions/allplan-bulut-hizmetleri/exchange.jpg";
import shareImg from "@/assets/solutions/allplan-bulut-hizmetleri/share.png";
import workgroupManagerImg from "@/assets/solutions/allplan-bulut-hizmetleri/workgroup_manager.png";
import bimplusImg from "@/assets/solutions/allplan-bulut-hizmetleri/bimplus.jpg";
import autoconverterImg from "@/assets/solutions/allplan-bulut-hizmetleri/autoconverter.jpg";
import solibriImg from "@/assets/solutions/allplan-bulut-hizmetleri/solibri.jpg";

type Service = {
  title: string;
  description: string;
  image: StaticImageData;
};

const services: Service[] = [
  {
    title: "Allplan Exchange",
    description:
      "Allplan Exchange ile Allplan, çeşitli plan formatlarının oluşturulmasını ve dağıtımını yönetmek ve e-posta grupları aracılığıyla otomatik değişiklik bildirimleri sağlamak için özel olarak tasarlanmış web tabanlı bir plan dağıtım aracı sunar. Platform, 2D çizim indirme ortamı sağlar ve bir denetim raporuna dahil edilmek üzere nakliye ve indirme faaliyetlerini izler.",
    image: exchangeImg,
  },
  {
    title: "Allplan Share",
    description:
      "Allplan Share ve Allplan'ın yanı sıra Allplan Bimplus hesabının birleşimi, dünya çapındaki planlama ortaklarıyla doğrudan tek ve aynı Allplan projesi üzerinde birlikte çalışmayı mümkün kılar. Allplan Share, BIM platformu Allplan Bimplus'ı temel alır ve size Model Görüntüleyici, görev yönetimi aracı: Görev Panosu veya denetim kontrolü ve çok daha fazlası gibi ek işlevler sunar.",
    image: shareImg,
  },
  {
    title: "Allplan Workgroup Manager",
    description:
      "Allplan Workgroup Manager CAD iş istasyonlarının yerel ağlarda (LAN) ve İnternet üzerinden organizasyonunu üstlenir. Orta ve büyük ölçekli planlama ve inşaat firmalarında belirgin sinerji etkileri yaratır. Bireysel bir ağ iş istasyonunda çalışmak, normal bir bireysel istasyonda çalışmak kadar basittir.",
    image: workgroupManagerImg,
  },
  {
    title: "Allplan Bimplus",
    description:
      "Bimplus by ALLPLAN, inşaat projelerinde yer alan tüm disiplinler için açık BIM modeli tabanlı veri ve proje işbirliği platformudur. Tasarımdan inşaya ve operasyona kadar tüm proje yaşam döngüleri boyunca bulut teknolojisini kullanarak birden fazla paydaşı birbirine bağlayın, etkinliği koordine edin ve proje bilgilerini kontrol edin.",
    image: bimplusImg,
  },
  {
    title: "Allplan Autoconverter",
    description:
      "Bimplus, yapı mühendisleriyle çalışırken (SCIA) AutoConverter aracılığıyla avantaj sunar. Yapısal tasarımcılarla geliştirilmiş ve hızlandırılmış iletişim, daha hızlı inceleme ve karar üzerinde doğrudan etkiye sahiptir. Revizyon karşılaştırması da dahil olmak üzere SAF dosyalarının dışa ve içe aktarılması, mimarların veya yapı mühendislerinin modellerini yeniden inşa etmelerine gerek kalmadığı için mimari ve yapısal analiz arasındaki işbirliğindeki engelleri ortadan kaldırıyor.",
    image: autoconverterImg,
  },
  {
    title: "Solibri Inside",
    description:
      "Tasarımcılar için bir çözüm olarak oluşturulan Solibri Inside, Allplan'daki BIM Explorer içinden, palet benzeri işlevsellik kullanarak Allplan modellerinde kontrolleri kullanıcının istediği zaman ve zamanda çalıştırabilir. Artık tasarımcının temel model kontrolünü gerçekleştirmek için başka bir yazılımı açmasına gerek yok. Solibri Inside, iş akışı içinde diğer ekip üyeleriyle paylaşılmadan önce her modelin önceden kontrol edilebilmesini sağlar.",
    image: solibriImg,
  },
];

export default function AllplanBulutContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              / ALLPLAN BULUT HİZMETLERİ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              İşbirliği ve Dağıtım için Modern Bulut Araçları
            </h1>
            <p className="text-muted-foreground text-lg">
              Proje ekipleri ve paydaşlar arasında verimli iş birliği sağlayan Allplan bulut hizmetleri ile
              planları paylaşın, modelleri kontrol edin ve verileri güvenle yönetin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-border">
                <div className="aspect-video relative overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/contact">İletişime Geçin</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

