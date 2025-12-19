"use client"
import SolutionHero from "@/components/SolutionHero";
import VideoGrid from "@/components/VideoGrid";

export default function ClientPage() {
  const videoSections = [
    { title: "Scalypso [CONVERTER]", youtubeId: "1wU4GIILS-s" },
    { title: "Scalypso [PROJECT ORIENTATION]", youtubeId: "3Y6zSbIT_kw" },
    { title: "Scalypso [BASIC]", youtubeId: "Su8_5M_hJPI" },
    { title: "Scalypso [ORTHOMODULE]", youtubeId: "LbgxDf3Ovtg" },
    { title: "Scalypso [LASERSCANDATA ANALYSING]", youtubeId: "X4LYiQa4o4Q" },
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="SCALYPSO"
        title="Videolar"
        description="Scalypso modüllerinin kullanımını anlatan eğitim videoları"
        primaryButton={{
          text: "Deneme Lisansı İste",
          href: "https://forms.office.com/r/XLQm9JPTSR",
          external: true,
        }}
        secondaryButton={{
          text: "Scalypso Ana Sayfa",
          href: "/solutions/scalypso",
        }}
      />
      <div className="bg-background">
        <VideoGrid
          items={videoSections.map((section) => ({
            youtubeId: section.youtubeId,
            title: section.title,
          }))}
        />
      </div>
    </div>
  );
}
