"use client"
import SectionHeader from "@/components/SectionHeader";
import SideImageSection from "@/components/SideImageSection";
import Image from "next/image";
import heroBanner from "@/assets/solutions/oska/hero-banner.jpg";
import bimx5Section from "@/assets/solutions/oska/bimx5-section.jpg";
import bimx5Logo from "@/assets/solutions/oska/bimx5-logo.png";
import allplanSection from "@/assets/solutions/oska/allplan-section.jpg";

export default function ClientPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={heroBanner}
          alt="Oska Allplan"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>
      <div className="bg-background">
        <SectionHeader
          title="Allplan Bimplus ve OskaBulut"
          subtitle="Allplan ve e-Hakediş arasında metraj ve hakediş analizi entegrasyonu"
          description="Allplan ve e-Hakediş arasında metraj ve hakediş analizi entegrasyonunu gerçekleştiren çözüm ortağımız Oska Yazılım ile yeni başladığımız çalışmada Allplan Bimplus ve OskaBulut ile farklı bir entegrasyon süreci de başlamıştır. Bu konudaki gelişmeleri duyurmaya devam edeceğiz."
          align="center"
        />
        <SideImageSection
          imageSrc={bimx5Section}
          imageAlt="Oska BimX5"
          imagePosition="left"
          icon={bimx5Logo}
          title="İhale, Metraj, Hakediş"
          content={`
            <h2 class="text-2xl font-bold mb-4">Allplan'le BIM Modellemesi ve metraj…</h2>
            <p class="mb-4"><strong>Oska e-HakedişPro ve Kurum Rapor Eklentisi ile resmi İdarelerin kabul ettiği formatlarda Metraj ve Hakediş sayfalarınızı Excel, Word veya PDF formatında oluşturma…</strong></p>
            <p class="mb-4"><strong>2B dwg Converter ile dwg projenizin kolaylıkla 3B objeye dönüşümü…</strong></p>
            <p class="mb-4"><strong>İmar Yönetmeliği Akıllı BIM eklentisiyle kolay ruhsat…</strong></p>
            <p><strong>Kurum Rapor Eklentisi sadece Allplan 2020 ve Oska e-HakedişPro ile birlikte ve entegre çalışır.</strong></p>
          `}
          ctaButton={{
            text: "Ayrıntılı incele",
            href: "https://bimx5.aluplan.com.tr/",
            external: true,
          }}
        />
        <SideImageSection
          imageSrc={allplanSection}
          imageAlt="Allplan"
          imagePosition="right"
          title="ALLPLAN"
          content={`
            <h1 class="text-3xl font-bold mb-4">Performansın gücünün kilidi açılıyor</h1>
            <p class="mb-4">Allplan 2021, inşaat sektörünün zorluklarının üstesinden gelmek ve dijital dönüşümden yararlanmak için nihai BIM çözümüdür. BIM yazılımı ve ALLPLAN'in endüstri lideri işbirliği ve entegrasyon araçları ideal kombinasyonu oluşturur. Allplan 2021, optimum performans için çığır açan bir teknoloji sunar: Zorlu geometri, yüksek detay seviyeleri ve çok sayıda ilişkilendirme ile daha büyük ve daha karmaşık projeler üzerinde her zamankinden daha kolay, daha hızlı ve daha eğlenceli çalışabilirsiniz.</p>
            <p>ALLPLAN'ın bulut teknolojisi, tüm inşaat sektörüyle bağlantı kurmanıza, verimli iş akışlarını kullanmanıza ve BIM'den tam anlamıyla yararlanmanıza olanak tanır.</p>
          `}
          ctaButton={{
            text: "Yenilikleri incele",
            href: "https://aluplan.com.tr/allplan-2021-features/",
            external: true,
          }}
        />
      </div>
    </div>
  );
}
