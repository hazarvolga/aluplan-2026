"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import SectionHeader from "@/components/SectionHeader";
import VideoGrid from "@/components/VideoGrid";



const postHeroBlock = (
  <>
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Otomatik Donatı Tanıtım Videoları" align="center" compact />
      </div>
    </section>
    <VideoGrid
      items={[
        { youtubeId: "DIL1xbeFgO8", title: "V2021-1-0: Otomatik Kiriş" },
        { youtubeId: "zIGjAqKPrqU", title: "V2021-1-0: Otomatik Kolon" },
        { youtubeId: "5fQG72LZE2Q", title: "V2021-1-0: Otomatik Zımbalama" },
        { youtubeId: "0g8oo8XBcZQ", title: "V2021-1-0: Otomatik Perde Duvar" },
      ]}
    />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Otomatik Donatı Eğitim Videoları" align="center" compact />
      </div>
    </section>
    <VideoGrid
      items={[
        { youtubeId: "pbrLQHEgmbE", title: "V2021-1-0: Otomatik Donatı Kolon" },
        { youtubeId: "EjmED4ZgU8s", title: "V2021-1-0: Otomatik Donatı Kiriş" },
        { youtubeId: "QRmoL3mZHTU", title: "V2021-1-0: Otomatik Donatı Perde Duvar" },
        { youtubeId: "B5d0xQT_Qzc", title: "V2021-1-0: Otomatik Zımbalama Profili" },
      ]}
    />
  </>
);

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="DİĞER ÇÖZÜMLER"
      title="Bu inovasyona inanamayacaksınız…"
      subtitle="Duvar, kolon, döşeme ve zımbalama profili için otomatik donatılandırma"
      description="Üstelik kesitler ve etiketler de otomatik oluşuyor. Metraj raporları ve lejantlar da otomatik ve gerçek... Birden çok duvar, kolon döşeme de artık anınında donatılandırılabiliyor…"
      customHero={(
        <SolutionHero
          badge="DİĞER ÇÖZÜMLER"
          title="Bu inovasyona inanamayacaksınız…"
          subtitle="Duvar, kolon, döşeme ve zımbalama profili için otomatik donatılandırma"
          description="Üstelik kesitler ve etiketler de otomatik oluşuyor. Metraj raporları ve lejantlar da otomatik ve gerçek... Birden çok duvar, kolon döşeme de artık anınında donatılandırılabiliyor…"
        />
      )}
      showHeroButtons={false}
      showCta={false}
      postHeroSection={postHeroBlock}
    />
  );
}
