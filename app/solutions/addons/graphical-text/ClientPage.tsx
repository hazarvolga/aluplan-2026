"use client"
import dynamic from "next/dynamic";
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
const ImageGallery = dynamic(() => import("@/components/ImageGallery"), { ssr: false });
import licenseLocal from "@/assets/solutions/cds/license.jpg";
import graphicTextImg from "@/assets/solutions/cds/graphic-text.jpeg";
export default function ClientPage() {
  const features = ["Metin vektörleştirme","3B metin nesneleri","Font ve stil eşleme","Etiket ve işaretleme araçları","Görselleştirme ile uyumlu çıktı"];
  const sections = [
    <InfoMediaTwoColumn key="hero" title="Grafiksel Yazı" subtitle="Vektörleştirilmiş ve 3B metinler" descriptions={["Metinleri vektörleyin ve 3B metin nesneleri ile projelerinize modern etiketleme ekleyin.","Görselleştirme için dokular ve font eşlemeleriyle tutarlı çıktılar alın."]} videoUrl="https://www.youtube.com/embed/CMYuaD3e3rQ" />,
    <section key="features" className="py-16 bg-gradient-to-br from-slate-50 to-accent/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><SectionHeader title="İşlevsel Genel Bakış" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" /><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">{features.map((feature, idx) => (<Card key={idx} className="p-5"><h3 className="text-sm font-semibold text-gray-800">{feature}</h3></Card>))}</div></div></section>,
    <section key="gallery" className="py-16 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><SectionHeader title="Galeri" align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />{(() => {const images = [graphicTextImg].map((img, idx) => ({ id: `gfx-${idx}`, src: img, alt: `Grafiksel Yazı ${idx + 1}`, title: "Grafiksel Yazı", description: "", category: "grafik" }));return <ImageGallery images={images} sectionTitle="Grafiksel Yazı Galerisi" sectionDescription="Vektörleştirme ve 3B metin örnekleri" />;})()}</div></section>,
    <CDSLicenseInfoSection key="license" title="Lisans ve Gereksinimler" subtitle="Tek kullanıcı lisansı, mevcut Allplan lisansına bağlıdır." description="Eklentiyi yükledikten sonra deneme sürümünü 14 gün ücretsiz olarak kullanabilirsiniz." systemRequirements="Allplan 2020 – 2024" languages="Almanca, İngilizce" imageUrl={licenseLocal} imageAlt="Lisans" links={[{ text: "Kurulum Kılavuzu", url: "https://youtu.be/BWKDmZyIUo4", variant: "link" },{ text: "Setup İndir", url: "https://cdssieber.sharepoint.com/:f:/g/Ev_G2db5WVVBvMEN-Adhz24Bk5f3rEvFCQu77iLTTCIynw?e=qkPdri", variant: "default" }]} quoteFormUrl="https://forms.office.com/r/XLQm9JPTSR" quoteFormText="Teklif Talep Formu" />,
  ];
  return <AddonDetailTemplate title="Grafiksel Yazı" subtitle="Vektörleştirilmiş ve 3B metinler" description="Metin vektörleştirme ve 3B metinlerle modern etiketleme" sections={sections} />;
}
