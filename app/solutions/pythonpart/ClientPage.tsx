"use client"
import SolutionHero from "@/components/SolutionHero";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const paidPythonParts = [
  {
    titleTr: "Duvar Donatısı",
    titleEn: "Wall Reinforcement",
    description: "ALLPLAN için geliştirdiğimiz PythonParts ile basit veya karmaşık duvar donatılarını, hatta eğimli duvarları bile kolayca oluşturabilir, güncelleyebilir ve düzenleyebilirsiniz. Duvar panelinin şeklini otomatik olarak tanır ve ana donatıları ile duvar boşlukları için ek donatıları dağıtır.",
    videoUrl: "https://www.youtube.com/embed/4HwnYYnZ_D0"
  },
  {
    titleTr: "Duvar Boşluğu Donatısı",
    titleEn: "Wall Opening Reinforcement",
    description: "Taşıyıcı duvarlarda kapı, pencere, boru ve havalandırma kanalları için çeşitli boyut ve şekillerde boşluklar açılması kaçınılmazdır. Donatının doğru yerleştirilmesi, boşluklar etrafındaki betonun yapısal yükler veya rötre nedeniyle çatlamasını önler.",
    videoUrl: "https://www.youtube.com/embed/LMjsurG742M"
  },
  {
    titleTr: "Duvar Kenar Donatısı",
    titleEn: "Wall Edge Reinforcement",
    description: "Kenar Donatısı python parçası, ALLPLAN'da iki duvarı birbirine bağlayarak duvarların detaylandırılması için kullanılır. Duvardan duvara bağlantı şekilleri: Doğrusal duvar birleşimi, L-şeklinde duvar birleşimi, T-şeklinde duvar birleşimi, Kesişen duvar birleşimi.",
    videoUrl: "https://www.youtube.com/embed/M0Qem-GkLEI"
  },
  {
    titleTr: "Döşeme Donatısı",
    titleEn: "Slab Reinforcement",
    description: "Döşeme donatısı detaylandırması, mesnet koşullarına göre yapılır. Döşeme duvarlar, kirişler veya kolonlar üzerinde mesnetlenebilir.",
    videoUrl: "https://www.youtube.com/embed/IOkyu5ab23w"
  },
  {
    titleTr: "Döşeme Boşluğu Donatısı",
    titleEn: "Slab Opening Reinforcement",
    description: "Her mühendis döşemelerdeki boşluklara aşinadır. Havalandırma kanalları ve klima gibi birçok farklı uygulama için döşemelerde boşluklar gereklidir. Artık yapı mühendisleri, ALLTO tarafından geliştirilen ALLPLAN PythonParts ile bu işi kolayca yapabilir.",
    videoUrl: "https://www.youtube.com/embed/70dz16RYs84"
  },
  {
    titleTr: "Tekil Temel Donatısı",
    titleEn: "Single Footings Reinforcement",
    description: "Tekil temeller, en basit ve yaygın temel türlerinden biridir. Binanın yükünün kolonlar tarafından taşındığı durumlarda kullanılır. Genellikle her kolonun kendi temeli vardır. Temel, kolonun üzerine oturduğu kare veya dikdörtgen bir beton bloğudur. Artık mühendisler, ALLTO tarafından geliştirilen ALLPLAN PythonParts ile bu işi kolayca yapabilir.",
    videoUrl: "https://www.youtube.com/embed/EjxMvMhFKj4"
  },
  {
    titleTr: "Kiriş Donatısı",
    titleEn: "Beam Reinforcement",
    description: "Donatı, betonarme kirişin temel bir parçasıdır. Çekme kuvvetlerine karşı koyar, basınç kapasitesini artırır, sünekliği geliştirir ve betondaki uzun vadeli sehimleri azaltır. Ayrıca donatı, kesme gerilmeleri, rötre ve sıcaklık gerilmeleri nedeniyle betonun çatlamasını önler.",
    videoUrl: "https://www.youtube.com/embed/cyOw-XGQ7c0"
  },
  {
    titleTr: "T-Kiriş Donatısı",
    titleEn: "T-Beam Reinforcement",
    description: "İnşaatta kullanılan T-kiriş, T-şeklinde bir kesit alanına sahip betonarme, ahşap veya metal yük taşıyıcı bir yapıdır. T-şeklindeki kesit alanının üst kısmı, basınç gerilmelerine karşı koymak için başlık veya basınç elemanı görevi görür.",
    videoUrl: "https://www.youtube.com/embed/yosKNaS5jew"
  },
  {
    titleTr: "Şerit Temel Donatısı",
    titleEn: "Strip Footings Reinforcement",
    description: "Şerit temeller, duvar gibi doğrusal bir yapıya veya merkezi olarak üzerine inşa edilmiş yakın aralıklı kolon sıralarına sürekli, düz (veya bazen basamaklı) bir destek şeridi sağlamak için kullanılan bir sığ temel türüdür. ALLTO kullanıcı dostu bir arayüz oluşturmuştur ve tek yapmanız gereken şerit temeli oluşturmak için verileri girmektir.",
    videoUrl: "https://www.youtube.com/embed/15aE6UyalJ4"
  },
  {
    titleTr: "Kolon Donatısı",
    titleEn: "Column Reinforcement",
    description: "ALLPLAN'da boşluklu duvarlardaki donatı modellemesini otomatikleştiren ALLPLAN Pythonparts'ı yayınladık. Bu ilk sürümde ana donatıları, etriyeleri ve daha fazlasını yerleştirebilirsiniz. ALLPLAN'da kolonların donatılandırılması iş akışını görün.",
    videoUrl: "https://www.youtube.com/embed/k76NIUdxs6o"
  },
  {
    titleTr: "Kolon Bindirme Donatısı",
    titleEn: "Column Dowels",
    description: "Bindirme donatıları genellikle kolonlar veya duvarlar ile temeller arasında ara donatı olarak kullanılır. Bindirmeler, temel betonu dökülmeden önce temele yerleştirilir ve daha sonra kolon veya duvardaki boyuna donatılara eklenir.",
    videoUrl: "https://www.youtube.com/embed/-0mJEDyXC7k"
  },
  {
    titleTr: "Kolon Manşon Donatısı",
    titleEn: "Column Coupler",
    description: "Mühendislerin iş akışını yönetmek için ALLPLAN PYTHONPARTS geliştiriyoruz. Bunun, görevlerini daha kolay, daha hızlı tamamlamalarına ve hataları azaltmalarına yardımcı olacağına inanıyoruz.",
    videoUrl: "https://www.youtube.com/embed/blho_BO-xp4"
  }
];

const freePythonParts = [
  {
    titleTr: "ALLPLAN Yedekleme Dosyaları - Çizim Kurtarma",
    titleEn: "ALLPLAN Backup Files - Drawing Recovery",
    description: "Hiç kaydetmeyi unuttuğunuz veya yazılım çökmesi nedeniyle kaydedemediğiniz bir çizim dosyasını kaybettiniz mi? ALLTO, ALLPLAN'da yedekleme dosyaları geliştirdi ve çizim verilerinizin güvenliğini sağlamaya yardımcı olur. Çalışmanızı sık sık kaydederek, sisteminiz herhangi bir nedenle arızalanursa minimum veri kaybı sağlayabilirsiniz.",
    videoUrl: "https://www.youtube.com/embed/LXwICpjeZpo"
  },
  {
    titleTr: "IFC Model Değişikliklerini Algılama",
    titleEn: "Detect IFC Model Changes",
    description: "Bu python parçası, Allplan Yazılımında iki IFC dosyası arasındaki geometrik farkları algılar ve yalnızca değişiklikleri (yeni, silinmiş ve değiştirilmiş elemanlar) mevcut çizim dosyasına birleştirir. Değişiklikler hem 2D hem de 3D görünümlerde görüntülenebilir ve yönetilebilir.",
    videoUrl: "https://www.youtube.com/embed/SYx4kZYsmzc"
  },
  {
    titleTr: "2D Çizgilerden Mimari Bileşenlere Dönüştürme",
    titleEn: "Converting from 2D lines/polylines to architecture components",
    description: "ALLPLAN, 3D tasarım alanında yenilikçi bir öncü olmuştur; 3D modellemeden bileşen odaklı, BIM tasarım yönteminin temeli olan dijital bina modellerine kadar. ALLTO PythonParts ile, doğru araçlarla sadece birkaç adımda 2D çizgilerden/poliçizgilerden mimari bileşenlere dönüştürmenin ne kadar kolay olduğunu görün.",
    videoUrl: "https://www.youtube.com/embed/AdsiUeBRwxM"
  }
];

const otherTools = [
  {
    titleTr: "ALLPLAN'da IFC Dosyalarını Daha Hızlı Dışa Aktarma",
    titleEn: "Exporting IFC files in ALLPLAN faster with ALLTO PythonParts",
    description: "Bu araç, birden fazla çizim dosyasını aynı anda dışa aktarabilir. IFC sürümünü, çizim dosyalarını, dosya yolunu seçebilirsiniz. Ayrıca tüm çizimleri tek bir IFC dosyasına da aktarabilirsiniz.",
    videoUrl: "https://www.youtube.com/embed/J-N5gEba5P0"
  },
  {
    titleTr: "ALLPLAN Duvar Boşluğu Donatısı",
    titleEn: "ALLPLAN Wall Opening Reinforcement PythonParts",
    description: "Duvarlardaki boşluk türleri, parçaları ve duvarın stabilitesi ve mukavemeti açısından boşluklar için lento ve kemer türleri tartışılır. Boşluk başlığı ve söveleri gibi duvar boşluklarının farklı kısımları ve duvarın stabilitesini ve mukavemetini korumak için sınırlamaları... ALLPLAN'daki PythonParts'ımız duvar panelinin şeklini tanır ve duvar boşlukları için ana donatı ve ek donatıyı dağıtır.",
    videoUrl: "https://www.youtube.com/embed/LMjsurG742M"
  },
  {
    titleTr: "ALLPLAN Yedekleme Dosyaları - Çizim Kurtarma",
    titleEn: "ALLPLAN Backup Files - Drawing Recovery",
    description: "Hiç kaydetmeyi unuttuğunuz veya yazılım çökmesi nedeniyle kaydedemediğiniz bir çizim dosyasını kaybettiniz mi? ALLTO, ALLPLAN'da yedekleme dosyaları geliştirdi ve çizim verilerinizin güvenliğini sağlamaya yardımcı olur. Çalışmanızı sık sık kaydederek, sisteminiz herhangi bir nedenle arızalanursa minimum veri kaybı sağlayabilirsiniz. Bir sorun oluşursa, bir çizim yedekleme dosyasını geri yükleyebilirsiniz.",
    videoUrl: "https://www.youtube.com/embed/LXwICpjeZpo"
  },
  {
    titleTr: "ALLPLAN'da Özel Öznitelik Ekleme",
    titleEn: "Add custom attribute in ALLPLAN",
    description: "ALLTO PythonParts, yeni bir özel özniteliği kolayca tanımlamanıza veya değiştirmenize yardımcı olacak araçlar geliştirdi. Bir seferde 5 özniteliğe kadar ekleyebilirsiniz.",
    videoUrl: "https://www.youtube.com/embed/wEo1vleU7JM"
  },
  {
    titleTr: "2D Çizgilerden Mimari Bileşenlere Dönüştürme",
    titleEn: "Converting from 2D lines/polylines to architecture components",
    description: "ALLPLAN, 3D tasarım alanında yenilikçi bir öncü olmuştur; 3D modellemeden bileşen odaklı, BIM tasarım yönteminin temeli olan dijital bina modellerine kadar. 3D tasarım hata riskini azaltır ve daha fazla verimlilik sağlar. ALLTO PythonParts ile, doğru araçlarla sadece birkaç adımda 2D çizgilerden/poliçizgilerden mimari bileşenlere dönüştürmenin ne kadar kolay olduğunu görün.",
    videoUrl: "https://www.youtube.com/embed/AdsiUeBRwxM"
  }
];

const turkishTools = [
  {
    titleTr: "Allto Kiriş PythonPart Eklentisi",
    titleEn: "Allto Beam PythonPart Plugin",
    description: "Allto Kiriş PythonPart Eklentisi ile Türkiye Deprem Yönetmeliği'ne uygun betonarme kiriş donatılarınızı parametrik olarak hızlı ve kolay bir şekilde modelleyebilirsiniz. Mesnet ve açıklık bindirme şartlarından, etriye sarılma bölgesi ayarlarına kadar tüm düzenlemelerinizi yapabilir, ilave donatılar ekleyebilirsiniz. Kiriş boy ve en kesitlerini otomatik alarak tek tuşla metraj tablosu oluşturabilirsiniz. Allto Kiriş PythonPart Eklentisi size daha az zamanda daha çok iş yapma imkanının yanında güvenilir kiriş donatı metrajı almanızı da sağlar.",
    videoUrl: "https://www.youtube.com/embed/hONolEqk24Y"
  },
  {
    titleTr: "Allto Kiriş PythonPart Eklentisi - Çok Açıklıklı Kirişler",
    titleEn: "Allto Beam PythonPart Plugin - Multi-Span Beams",
    description: "Allto Kiriş PythonPart Eklentisi kullanarak sadece birkaç tıklama ile ister tek açıklıklı ister çok açıklıklı kirişlerinizin donatılarını hızlı bir şekilde oluşturabilir, kesitlerinizi alabilir ve metrajınızı oluşturabilirsiniz.",
    videoUrl: "https://www.youtube.com/embed/I0wD7ksE7r4"
  },
  {
    titleTr: "Otomatik Kolon-Kiriş-Duvar Modelleme",
    titleEn: "Automatic Column-Beam-Wall Modeling",
    description: "Ücretsiz olan Otomatik Kolon-Kiriş-Duvar Modelleme eklentisini kullanarak daha önce CAD ortamında yapılmış olan iki boyutlu çizimlerinizi sadece birkaç tıklama ile üç boyutlu BIM modeline dönüştürebilirsiniz. Ürettiğiniz BIM modelinizin güvenilir Kalıp ve Donatı metrajını alabilirisiniz.",
    videoUrl: "https://www.youtube.com/embed/ieZb81IM8Qc"
  }
];

export default function ClientPage() {
  return (
    <div className="dark min-h-screen bg-graphite-950">
      <SolutionHero
        badge="ALLPLAN ADD-ON"
        title="ALLTO PythonParts"
        description="Allplan Ortak Çözümü olarak ALLTO, ALLPLAN yazılımıyla uyumlu profesyonel eklentiler geliştirir. Kullanıcılar ayrıca uzmanlığımızı ve bireysel ihtiyaçlarını karşılamak için onlarla yakın çalışma isteğimizi takdir ediyor."
        primaryButton={{ text: "İletişime Geçin", href: "/contact" }}
        secondaryButton={{ text: "Daha Fazla Bilgi", href: "https://allplantools.com/" }}
      />

      <div className="bg-background">
        {/* PostHero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Allplan Ortak Çözümü olarak ALLTO, ALLPLAN yazılımıyla uyumlu profesyonel eklentiler geliştirir.
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Kullanıcılar ayrıca uzmanlığımızı ve bireysel ihtiyaçlarını karşılamak için onlarla yakın çalışma isteğimizi takdir ediyor.
                </p>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Bina PythonPartları şunları içerir:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Wall Reinforcement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Wall Opening and Wall Edge Reinforcement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Beam Reinforcement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Column Reinforcement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Single Footing Reinforcement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Strip Footing Reinforcement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Detecting IFC Model Changes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Slab With Opening</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Slab Main Rebar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Column dowels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Layout Service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>2D Axis Grid in ALLPLAN Engineering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Converting from 2D lines/polylines to architecture components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>ALLPLAN Backup Files – Drawing Recovery</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-accent">•</span>
                      <span>Add custom attribute in ALLPLAN</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Video */}
              <div className="lg:sticky lg:top-24">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/GaRVQHkXf4o"
                    title="ALLTO PythonParts Overview"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Title Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              ALLTO PYTHONPARTS Sürüm 4.1 – Yeni Sürüm
            </h2>
            <p className="text-xl text-center mt-4 text-muted-foreground">
              Daha kolay. Daha hızlı ve hataları azaltın.
            </p>
          </div>
        </section>

        {/* Paid PythonParts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Ücretli PythonParts"
              description="Profesyonel donatı ve modelleme araçları"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {paidPythonParts.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
                  {item.videoUrl && (
                    <div className="aspect-video w-full">
                      <iframe
                        src={item.videoUrl}
                        title={item.titleTr}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{item.titleTr}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{item.titleEn}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Free PythonParts Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="ALLTO Ücretsiz PythonParts"
              description="ALLTO tarafından mühendislerin görevleri daha kolay, daha hızlı tamamlamalarına ve hataları azaltmalarına yardımcı olmak için geliştirilen ücretsiz Allplan python parçaları."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {freePythonParts.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-accent/50 flex flex-col overflow-hidden">
                  {item.videoUrl && (
                    <div className="aspect-video w-full">
                      <iframe
                        src={item.videoUrl}
                        title={item.titleTr}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{item.titleTr}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{item.titleEn}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Tools Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Diğer Araçlar"
              description="ALLPLAN için ek araçlar ve özellikler"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {otherTools.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
                  {item.videoUrl && (
                    <div className="aspect-video w-full">
                      <iframe
                        src={item.videoUrl}
                        title={item.titleTr}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{item.titleTr}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{item.titleEn}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Turkish-Specific Tools Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Türkiye'ye Özel Araçlar"
              description="Türkiye Deprem Yönetmeliği ve yerel standartlara uygun çözümler"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {turkishTools.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-primary/50 flex flex-col overflow-hidden">
                  {item.videoUrl && (
                    <div className="aspect-video w-full">
                      <iframe
                        src={item.videoUrl}
                        title={item.titleTr}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{item.titleTr}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{item.titleEn}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">ALLTO PythonParts ile Daha Verimli Çalışın</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Profesyonel eklentilerimiz hakkında daha fazla bilgi almak ve ihtiyaçlarınıza özel çözümler için bizimle iletişime geçin.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://forms.office.com/r/hXhnKAG912" target="_blank" rel="noopener noreferrer">Teklif Talep Formu</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://alltosoftware.com/#plugin" target="_blank" rel="noopener noreferrer">
                  Tüm Eklentileri İncele
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
