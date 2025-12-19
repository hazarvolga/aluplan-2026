"use client"
import SolutionHero from "@/components/SolutionHero";
import SectionHeader from "@/components/SectionHeader";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import { Check } from "lucide-react";
import Image from "next/image";

import planlaHesaplaImg from "@/assets/solutions/planli-alanlar/planla-hesapla.png";
import metrekareCetveliImg from "@/assets/solutions/planli-alanlar/metrekare-cetveli.jpg";
import emsalHesabiImg from "@/assets/solutions/planli-alanlar/emsal-hesabi.jpg";

const ImarYonetmeligiClient = () => {
  // Video listesi
  const videos = [
    {
      title: "Allplan ile Metrekare Cetveli Hazırlama",
      youtubeId: "LkYK3_zHd_0"
    },
    {
      title: "Allplan ile Emsal Taks Kaks Hesabı",
      youtubeId: "TBgIVllmBJc"
    },
    {
      title: "Allplan ile %30 Emsal Harici Alan ve Otopark Hesabı",
      youtubeId: "0d2aHi-vsW4"
    },
    {
      title: "Allplan Su Deposu Hesabı",
      youtubeId: "fmdPz60pMAg"
    },
    {
      title: "Allplan ile Merdiven Kontrolü",
      youtubeId: "NQX_mNJgu4s"
    },
    {
      title: "Allplan ile Mahal Kontrolü",
      youtubeId: "_xcCl7_EoDk"
    },
    {
      title: "Allplan ile Pencere Kontrolü",
      youtubeId: "A2xBskDp45A"
    }
  ];

  // Kontrol özellikleri
  const features = [
    "Su deposu hesabı ve kontrolü",
    "Emsal, TAKS/KAKS hesapları",
    "Emsal harici %30 alan hesapları",
    "Minimum ve maksimum oda/mahal ölçüleri",
    "Pencere ve kapı genişlikleri kontrolü",
    "Merdiven rıht yükseklik ve genişlik kontrolü",
    "Otopark hesabı",
    "Bağımsız bölüm nitelikleri ve sayıları"
  ];

  return (
    <div className="dark min-h-screen bg-graphite-950">
      
      <SolutionHero
        title="DENGELERİ DEĞİŞTİRİN"
        subtitle="Akıllı BIM Eklentisi ile Alanları Tanımla, Hemen Raporunu Al..."
        description="2018'de yürürlüğe giren Planlı Alanlar İmar Yönetmeliğini Allplan tanıyor, projenizi kolayca denetleyin, ruhsatınızı alın."
        primaryButton={{
          text: "İletişime Geçin",
          href: "/contact",
        }}
        secondaryButton={{
          text: "Çözümler",
          href: "/solutions",
        }}
      />

      <div className="bg-background">
        {/* Section Header */}
        <SectionHeader
          title="İmar Yönetmeliğine Allplan'den BIM Eklentisi!"
          subtitle="2018'de yürürlüğe giren Planlı Alanlar İmar Yönetmeliğini Allplan tanıyor, projenizi kolayca denetleyin, ruhsatınızı alın."
          align="center"
          className="py-16 bg-background"
        />

        {/* InfoMediaTwoColumn - Planla ve Hesapla */}
        <InfoMediaTwoColumn
          title="Planla ve Hesapla"
          subtitle="Allplan ile projelerinizi doğrudan 2018'de yürürlüğe giren Planlı Alanlar İmar Yönetmeliğine uyumlu üreteceksiniz."
          descriptions={[
            "Saatlerinizi ve hatta günlerinizi vererek yaptığınız hesaplar Allplan'e entegre akıllı yönetmelik eklentisi ile kolayca yapılabiliyor.",
            "Çizimin her aşamasında yönetmeliğe uygunluğu raporlamanız mümkün. Metrekare cetvellerinizi otomatik oluşturabilir, projenizde değişiklik yaptığınızda bu hesabı anında güncelleyebilirsiniz.",
            "Taks/kaks hesabı, Emsal hesabı, Otopark hesabı, Su deposu hesabı, Mahallerin minimum ölçüleri, Sığınak hesabı, vb., birçok hesabı kolayca raporlayarak projenizin imar yönetmeliğinin gerekliliklerini karşıladığını kontrol eder, sorunlu bölümleri tespit edip kolayca gerekli düzeltmeleri yaparsınız.",
            "İmar yönetmeliğinin bir BIM yazılımı kapsımında ilk kez kullanıldığı çalışmamızda, yönetmeliğe göre blok, kat, daire bazında brüt alan, toplam brüt alan, ortak alanlar, toplam inşaat alanı ve dairelerin net alanını doğru ve hızlı şekilde hesaplayabileceğiniz bir yazılım Allplan'e entegre edilmiştir."
          ]}
          imageSrc={planlaHesaplaImg}
        />

        {/* Stats Section */}
        <section className="py-16 gradient-accent text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stat 1 */}
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    100%
                  </div>
                  <div className="text-xl text-white/80 font-semibold">
                    Zamandan Tasarruf
                  </div>
                </div>
                
                {/* Stat 2 */}
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    100%
                  </div>
                  <div className="text-xl text-white/80 font-semibold">
                    Hatasız Hesaplama
                  </div>
                </div>
                
                {/* Stat 3 */}
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    100%
                  </div>
                  <div className="text-xl text-white/80 font-semibold">
                    Hızlı Kontrol ve Onay
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrekare Listesi Hazırlamak */}
        <InfoMediaTwoColumn
          title="Metrekare Listesi Hazırlamak"
          description="Allplan ile çizimini yaptığınız projelerin metrekare listesini planlı alanlar imar yönetmeliğine uygun bir formatta kolayca oluşturmanız mümkündür. Çok katlı ve bağımsız bölüm sayısı fazla olan projelerde hızlı ve çabuk bir şekilde listenizi oluşturabilirsiniz. Üstelik projenizde yaptığınız değişikliklerden sonra listenizi kolayca yeni duruma göre güncelleyebilirsiniz."
          imageSrc={metrekareCetveliImg}
        />

        {/* Modelleyin ve Raporlayın */}
        <InfoMediaTwoColumn
          title="Modelleyin ve Raporlayın"
          description="Projelerinizin yönetmelik esasları doğrultusunda gerekli kısasları sağlayıp sağlamadığı veya eksik kalmış, unutulan, gözden kaçan kısımlarını kolayca tespit edebilir; gerekli düzeltmeleri yapabilirsiniz. Örneğin Allplan size projenizdeki bağımsız bölümlerin nitelikleri ve sayısına göre yönetmelikte öngörülen hesaba uygun şekilde gerekli su deposu hesabını söyler ve yaptığınız depo miktarının yeterli olup olmadığının kontrolünü sağlar. Ayrıca emsal,taks /kaks ve emsal harici %30 alan hesaplarının kontrolü, min. ve maks. oda mahal ölçüleri, pencere ve kapı genişlikleri-uygunlukları, merdiven rıht yükseklik ve genişliklerinin kontrolü, otopark hesabı gibi birçok yönetmelik maddesinin kontrolünü sağlayabilirsiniz. Böylece BIM kapsamında üretmiş olduğunuz projenizin hem sizin tarafınızdan hem de ilgili kurum tarafından BIM modeliniz üzerinden kontrol edilebilmesi hızlı ve kolay bir şekilde gerçekleşir, onay aşamalarınızı kolaylaştırır. Projelerinizde revizyon olması durumunda ise tüm bu raporları hızla güncelleyebilirsiniz."
          imageSrc={emsalHesabiImg}
        />

        {/* Destekleyenler Bölümü */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Destekleyenler
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-xl shadow-md p-8 flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center md:text-left">
                  <a
                    href="https://cdn-ildjmbl.nitrocdn.com/GRFqhZNXqvDZUqSaMXEMUaHzZalKDvEu/assets/images/optimized/rev-73bf7de/planlialanlar.aluplan.com.tr/wp-content/uploads/2023/05/logo-aydin.png"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <p className="text-xl font-semibold text-foreground">Aydın Proje</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Videolar Bölümü */}
        <section className="py-16" id="videos">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Videolar
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Allplan ile imar yönetmeliğine uyumlu proje oluşturulması ile ilgili filmleri izleyin.
              </p>
            </div>

            {/* Ana Video - Tam Genişlik */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/0W6k7W5KtzE"
                    title="Allplan ile İmar Yönetmeliği"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="border-t border-border"></div>
            </div>

            {/* Video Grid - 2/3 Video + 1/3 Başlık */}
            <div className="space-y-12 max-w-5xl mx-auto">
              {videos.map((video, index) => (
                <div key={index}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    {/* Video - 2/3 */}
                    <div className="lg:col-span-2">
                      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                    {/* Başlık - 1/3 */}
                    <div className="lg:col-span-1">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Bölümü */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="gradient-accent rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
                <h3 className="font-display text-3xl font-bold mb-4">
                  Projelerinizi Yönetmeliğe Uygun Hale Getirin
                </h3>
                <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                  Allplan ile BIM tabanlı projelerinizi imar yönetmeliğine uygun şekilde kontrol edin ve raporlayın. Detaylı bilgi için bizimle iletişime geçin.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-graphite-950 font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300 shadow-lg"
                >
                  İletişime Geçin
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default ImarYonetmeligiClient;
