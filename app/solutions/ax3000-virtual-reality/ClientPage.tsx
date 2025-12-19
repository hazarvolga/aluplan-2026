"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import ImageGallery from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import Image from "next/image";
import bannerVr from "@/assets/solutions/ax3000/virtual-reality/banner_vr.jpg";
import vrSlide1 from "@/assets/solutions/ax3000/virtual-reality/vr_slide1.jpg";
import vrSlide2 from "@/assets/solutions/ax3000/virtual-reality/vr_slide2.jpg";
import vrSlide3 from "@/assets/solutions/ax3000/virtual-reality/vr_slide3.jpg";
import vrSlide4 from "@/assets/solutions/ax3000/virtual-reality/vr_slide4.jpg";
import vrSlide5 from "@/assets/solutions/ax3000/virtual-reality/vr_slide5.jpg";
import vrSlide6 from "@/assets/solutions/ax3000/virtual-reality/vr_slide6.jpg";
export default function ClientPage() {
  const vrGalleryImages = [vrSlide1, vrSlide2, vrSlide3, vrSlide4, vrSlide5, vrSlide6].map((img, index) => ({
    id: `vr-${index}`,
    src: img,
    alt: `VR Slide ${index + 1}`,
    title: `VR Slide ${index + 1}`,
    description: "",
    category: "galeri",
  }));
  const sections = [
    <InfoMediaTwoColumn
      key="hero-vr"
      title={"Virtual Reality: Tek bir tıklama ile sınırsız \n3B-Gerçeği yaşayın"}
      description={"Bunu kullanırken teknolojinin desteklediği bir 3B-Gözlük. Örneğin: Oculus Rift, VIVE VR), Game-Engin ve AX3000 Plugin Planlama -Araçtan verileri okumakta tır. Bu yöntem ile müşteriniz resmen planladığını z yapıların etrafında içinde serbest gezinebilir kendi istediği gibi. Avantajınız: Sadece bu yöntem ile gerçek mekanların izlenimi orantıyı aydınlatma durumu ve renk malzeme seçimlerinizi sunmuş olacaksınız. Hemde farklı yıllık ve günlük saat dilimlerine göre veya hava koşullara göre.\n\nBricsCAD ve Archicad tek tıklama planlama yazılımınızda ve başlayın!\n\nDaha kolay olamaz! Çalışma tarzınız değiş meye çek. Sadece müşteriniz ile iletişim daha iyi olacak. AX3000 VR normal planlama yazılımınız için bir Plugin dir. İstediğiniz zaman şu anki planlama durumundan sadece tek bir tıklama ile gerçek zaman VR çevresini yükleyebilirsiniz. Müşteriniz hızlı her değişikliği hemen sunabilirsiniz. Örneğin bir duvarın taşınması veya pencerenin büyümesi gibi…..\n\nBimplus: Virtual‐Reality‐Çözümü Tüm Planlama Yazılımlar İçin.\n\nEğer herhangi başka bir planlama yazılım ile mi çalışıyormusunuz? Sorun değil AX3000 VR Bimplus platformunda da size bir zarif çözüm sunabiliyoruz. Bu merkezi Open-Bim-Platformu ile yapılarınız ve planlarınız her planlama yazılım ile sanal gezinti hazırlaya bilirsiniz ve müşterilerinize suna bilirsiniz."}
      videoUrl="https://www.youtube.com/embed/fHYDP36DcjA"
    >
      <ImageGallery images={vrGalleryImages} sectionTitle="Galeri" sectionDescription="" hideCategoryFilter />
    </InfoMediaTwoColumn>,
    <section key="divider" className="py-8 bg-background"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="flex items-center justify-center"><div className="flex-1 h-px bg-gray-300"></div><div className="mx-4"><Building2 className="w-8 h-8 text-accent" /></div><div className="flex-1 h-px bg-gray-300"></div></div></div></section>,
    <section key="main-content" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div><h3 className="font-display text-2xl font-bold text-foreground mb-4">Virtual Reality: Tek bir tıklama ile sınırsız<br />3B-Gerçeği yaşayın</h3><p className="text-muted-foreground leading-relaxed">Şimdi hazır! Müşterileriniz çok daha memnun kalacaklar çünkü isteklerine daha iyi cevap verebilirsiniz. Bunu nasıl başaracaksınız? Çok kolay! Ofisinizde Toplantı esnasında planladığınız yapının etrafında içinde gezindirebileceksiniz. Serbest hareket edebilecek her yöne baka bilecek ilerde yapı bitiğinde bina nasıl olacağını görecek.</p></div>
            <div><h3 className="font-display text-2xl font-bold text-foreground mb-4">Virtuelle Realität – 3B-Videodan Fazlası</h3><p className="text-muted-foreground leading-relaxed">Bunu kullanırken teknolojinin desteklediği bir 3B-Gözlük. Örneğin: Oculus Rift, VIVE VR), Game-Engin ve AX3000 Plugin Planlama -Araçtan verileri okumakta tır. Bu yöntem ile müşteriniz resmen planladığını z yapıların etrafında içinde serbest gezinebilir kendi istediği gibi. Avantajınız: Sadece bu yöntem ile gerçek mekanların izlenimi orantıyı aydınlatma durumu ve renk malzeme seçimlerinizi sunmuş olacaksınız. Hemde farklı yıllık ve günlük saat dilimlerine göre veya hava koşullara göre.</p><p className="text-muted-foreground leading-relaxed mt-4">BricsCAD ve Archicad tek tıklama planlama yazılımınızda ve başlayın!</p></div>
            <div><p className="text-muted-foreground leading-relaxed">Daha kolay olamaz! Çalışma tarzınız değiş meye çek. Sadece müşteriniz ile iletişim daha iyi olacak. AX3000 VR normal planlama yazılımınız için bir Plugin dir. İstediğiniz zaman şu anki planlama durumundan sadece tek bir tıklama ile gerçek zaman VR çevresini yükleyebilirsiniz. Müşteriniz hızlı her değişikliği hemen sunabilirsiniz. Örneğin bir duvarın taşınması veya pencerenin büyümesi gibi…..</p></div>
            <div><h3 className="font-display text-xl font-bold text-foreground mb-4">Bimplus: Virtual‐Reality‐Çözümü Tüm Planlama Yazılımlar İçin.</h3><p className="text-muted-foreground leading-relaxed">Eğer herhangi başka bir planlama yazılım ile mi çalışıyormusunuz? Sorun değil AX3000 VR Bimplus platformunda da size bir zarif çözüm sunabiliyoruz. Bu merkezi Open-Bim-Platformu ile yapılarınız ve planlarınız her planlama yazılım ile sanal gezinti hazırlaya bilirsiniz ve müşterilerinize suna bilirsiniz.</p></div>
          </div>
          <div className="space-y-6">
            <div><Image src={bannerVr} alt="VR Banner" className="w-full rounded-lg shadow-md" /></div>
            <div className="bg-card border border-border p-6 rounded-lg shadow-sm">
              <p className="font-bold text-foreground mb-4">VR-Teknoloji Planlayıcı ve mal sahibi arası komünikasyon devrimi.</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Firma ESS Bimplus platformu için geliştirdiği bir merkezi, OPEN BIM – Platformu mal sahipleri için, bir Allplan servisidir.</li>
                <li>Sistem bağımsız platform olduğundan bina modeli hangi yazılım ürettiğinizi fark etmiyor.</li>
                <li>Virtual Reality de 3B-Model de karmaşık yapılar daha iyi anlaşılır.</li>
                <li>Planlama hatalar bina uygulamadan önce belli olur.</li>
                <li>Planlama aşamalarınızı mal sahibi ile iletişimi yeni bir seviyeye yükseltin ve rekabet avantaşından faydalanın.</li>
              </ul>
            </div>
            <div className="flex justify-center"><Button asChild size="lg" className="bg-accent hover:bg-accent/90"><a href="https://vr.ax3000-group.de/" target="_blank" rel="noopener noreferrer">Demo Test</a></Button></div>
          </div>
        </div>
      </div>
    </section>,
  ];
  return (
    <AddonDetailTemplate
      title="AX3000 VIRTUAL REALITY"
      subtitle="Tek bir tıklama ile sınırsız 3B-Gerçeği yaşayın"
      description="Şimdi hazır! Müşterileriniz çok daha memnun kalacaklar çünkü isteklerine daha iyi cevap verebilirsiniz. Bunu nasıl başaracaksınız? Çok kolay! Ofisinizde Toplantı esnasında planladığınız yapının etrafında içinde gezindirebileceksiniz. Serbest hareket edebilecek her yöne baka bilecek ilerde yapı bitiğinde bina nasıl olacağını görecek."
      sections={sections}
    />
  );
}
