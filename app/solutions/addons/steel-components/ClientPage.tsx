"use client"
import SolutionHero from "@/components/SolutionHero";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
export default function ClientPage() {
  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="ALLPLAN ADD-ON"
        title="Çelik Profil Bileşenleri"
        description="Çelik konstrüksiyon, vidalar ve levhalar için akıllı bileşenler"
        primaryButton={{ text: "İletişime Geçin", href: "/contact" }}
        secondaryButton={{ text: "Eklentiler", href: "/solutions/addons" }}
      />
      <div className="bg-background">
        <InfoMediaTwoColumn
          title="Çelik Bileşenleri"
          description="Geniş kütüphane ve parametrik seçeneklerle detaylandırmayı hızlandırın"
          videoUrl="https://www.youtube.com/embed/fHYDP36DcjA"
        />
      </div>
    </div>
  );
}
