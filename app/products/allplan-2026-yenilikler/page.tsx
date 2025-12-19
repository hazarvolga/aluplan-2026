"use client";

import ProductPageTemplate from "@/components/ProductPageTemplate";
import RegulaTabs from "@/components/RegulaTabs";
import SideImageSection from "@/components/SideImageSection";
import heroImage from "@/assets/solutions/steel-hero.jpg"; // Using existing hero as placeholder
import freeformStair from "@/assets/products/allplan-2026/freeform-stair.jpg";
import slabFoundation from "@/assets/products/allplan-2026/slab-foundation.jpg";
import roomFinish from "@/assets/products/allplan-2026/room-finish.jpg";
import customComponents from "@/assets/products/allplan-2026/custom-components.jpg";

const ArchitectureContent = () => (
  <div className="space-y-0">
    <SideImageSection
      title="Geliştirilmiş Serbest Şekilli Merdiven Modelleyicisi"
      subtitle="Dahil Olduğu Paket: #Concept"
      description="Eşsiz, standartlara uygun merdivenleri benzersiz esneklik ve kolaylıkla tasarlayın"
      content="Öne çıkan tasarımlara artan talep ile birlikte, mimar ve planlamacıların özgün ve işlevsel merdivenler yaratmak için esnek araçlara ihtiyacı var. Serbest form merdivenler, sıradışı mekanlara mükemmel uyum sağlar ve her projeye daha fazla yaratıcı olasılık sunar. ALLPLAN 2026, özel ve alışılmışın dışında merdivenleri tasarlamayı kolaylaştıran esnek bir merdiven modelleyici sunar. Serbest Form Merdiven Modelleyici, ülke bazlı standartlara uygun olarak benzersiz veya karmaşık şekiller oluşturmanıza olanak tanır. Ayrıca merdivenin üst veya alt kısmında referans düzlemleri tanımlayarak, merdiven altına duvar veya oda eklemeyi daha hızlı hale getirebilirsiniz. Tek bir sezgisel araç içinde eşsiz esneklik ve verimlilikle, standartlara uygun ve dikkat çekici merdivenler tasarlayın."
      imageSrc={freeformStair}
      imageAlt="Geliştirilmiş Serbest Şekilli Merdiven Modelleyicisi"
      ctaButton={{
        text: "Videoyu İzle",
        href: "https://www.youtube.com/watch?v=HqhDQELnHms",
        external: true,
      }}
      imagePosition="right"
      className="bg-background"
    />
    <SideImageSection
      title="Gelişmiş Çok Katmanlı Döşeme Yönetimi"
      subtitle="Dahil Olduğu Paket: #Concept"
      description="Modern ve sürdürülebilir yapı tasarımı için daha fazla esneklik ve hassasiyet"
      content="AEC (Mimarlık-Mühendislik-İnşaat) sektörü, modern ve sürdürülebilir binalar için çok katmanlı bileşenleri tasarlayıp yönetmenin verimli yollarına ihtiyaç duyar ve proje standartlarını her aşamada karşılamalıdır. ALLPLAN 2025, döşemeler için çok katmanlı destek ve detaylandırma ile uygulama planlama araçlarını tanıttı. ALLPLAN 2026 ile çok katmanlı döşeme ve temel döşemelerini tasarlamak artık her zamankinden daha sezgisel ve verimli. Son güncellemeler, mimar ve mühendislerin döşeme katmanlarının uzatma yönünü hassas şekilde kontrol etmesini ve yeni etkileşimli önizleme ile değişiklikleri anında görmesini sağlar. Temel döşemeler, zemin katmanları veya alt tabaka katmanları gibi karmaşık bileşenlerin modellenmesi artık kolay ve son derece hassastır. Bu geliştirmeler, proje iş akışlarını hızlandırır, hata olasılığını azaltır ve planlamadan inşa aşamasına kadar tutarlı, detaylı sonuçlar elde edilmesini sağlar."
      imageSrc={slabFoundation}
      imageAlt="Gelişmiş Çok Katmanlı Döşeme Yönetimi"
      ctaButton={{
        text: "Videoyu İzle",
        href: "https://www.youtube.com/watch?v=WK8rojFmuiY",
        external: true,
      }}
      imagePosition="left"
      className="bg-muted"
    />
    <SideImageSection
      title="BIM'e Uyumlu Oda ve Kaplama Detaylandırması"
      subtitle="Dahil Olduğu Paket: #Concept"
      description="Daha doğru, hızlı ve kolay"
      content="ALLPLAN 2026, kaplama modelleme için esnek, doğru ve verimli bir iş akışı sunarak BIM planlamasını önemli ölçüde geliştirir. Öne çıkan özellikler şunlardır: kural tabanlı dağıtımla birlikte gerçekçi geometriye sahip çok katmanlı dikey kaplamalar, ilişkili oda kaplamalarını organize etmek veya alternatif tasarımları desteklemek için yeni oda filtreleri, duvar gibi dikey kaplamaların plan görünümü, 3B süpürgelik modelleme ve katman yönetimi için geliştirilmiş bir arayüz. Bu iyileştirmeler, mimarların doğru 2D ve 3D planlar oluşturmasına, kaplamaları yönetmenin basitleşmesine, hata oranının azalmasına ve çeşitli proje tiplerine uyum sağlamasına yardımcı olur. Ayrıca optimize edilmiş hesaplama süreci, tasarım değişiklikleri yaparken ve karmaşık projeleri güncellerken zamandan tasarruf sağlar."
      imageSrc={roomFinish}
      imageAlt="BIM'e Uyumlu Oda ve Kaplama Detaylandırması"
      imagePosition="right"
      className="bg-background"
    />
    <SideImageSection
      title="Özel Bileşenler: Hakimiyete Bağlı"
      subtitle="Dahil Olduğu Paket: #Concept"
      description="Daha akıllı ve kaliteli BIM modelleri için kesintisiz etkileşim ve otomasyon"
      content="ALLPLAN 2026, BIM modelinde öncelik tabanlı bağlantılara (PBC) sahip geliştirilmiş Özel Bileşen özelliğini tanıtır. Bu geliştirme, özel model öğeleri ile duvar, kolon, döşeme gibi yerel yapı bileşenleri veya diğer özel objeler arasında kesintisiz etkileşim sağlar. Planlamacılar artık karmaşık şekilleri daha doğru modelleyebilir, otomatik etkileşimler manuel çalışmayı azaltır ve hata riskini minimize eder. Bu geliştirmeler, iş akışlarını hızlandırır, daha kaliteli BIM modelleri sunar ve zorlu projelerde bile başarılı proje teslimini destekler."
      imageSrc={customComponents}
      imageAlt="Özel Bileşenler: Hakimiyete Bağlı"
      ctaButton={{
        text: "Videoyu İzle",
        href: "https://www.youtube.com/watch?v=pNlxIzyGVKc",
        external: true,
      }}
      imagePosition="left"
      className="bg-muted"
    />
    <SideImageSection
      title="Geliştirilmiş Strüktürel Çerçeveleme"
      subtitle="Dahil Olduğu Paket: #Professional"
      description="Çerçeve paftalarını hızla modelleyin ve güncelleyin"
      content="Yeni kiriş ve kiriş sistemlerini yerleştirme araçları, binaları daha hızlı modellemenizi ve çatı geometrisi değiştikçe çerçeve paftalarını uyarlamanızı sağlar. Geliştirilmiş yakalama seçenekleri, çelik elemanların ilk seferde doğru yerleştirilmesini sağlar ve bağlantı hatalarını azaltır."
      imageSrc={freeformStair} // Placeholder reusing an image as one is missing
      imageAlt="Geliştirilmiş Strüktürel Çerçeveleme"
      imagePosition="right"
      className="bg-background"
    />
    <SideImageSection
      title="Strüktürel Çerçeveleme Bağlantıları"
      subtitle="Dahil Olduğu Paket: #Professional"
      description="Bağlantıları doğru şekilde koruyun, otomatik olarak"
      content="Bağlantı hatalarını düzeltmek için zaman kaybetmeyin—ALLPLAN 2026'daki yeni işlevsellikle, bağlantılar otomatik olarak uygulanır ve güncellenir, böylece çelik montajlar tasarım değişikliklerinde bile doğru ve geçerli kalır."
      imageSrc={slabFoundation} // Placeholder
      imageAlt="Strüktürel Çerçeveleme Bağlantıları"
      imagePosition="left"
      className="bg-muted"
    />
    <SideImageSection
      title="Optimizasyonlu Duvar İş Akışları"
      subtitle="Dahil Olduğu Paket: #Concept"
      description="Modern, birleşik arayüz ile duvar tasarımını basitleştirin"
      content="ALLPLAN 2026, geometrik özellikler de dahil olmak üzere duvar oluşturma ve düzenleme için modern ve birleşik bir özellik paleti sunar. Bu tutarlı ve sezgisel arayüz, yeni kullanıcıların başlamasını kolaylaştırırken, deneyimli kullanıcılar farklı nesne türlerinde verimliliği artırır ve sorunsuz iş akışları sağlar. Sonuç, her proje için üretkenliği ve kullanıcı memnuniyetini artıran, düzenli bir duvar tasarım sürecidir."
      imageSrc={roomFinish} // Placeholder
      imageAlt="Optimizasyonlu Duvar İş Akışları"
      imagePosition="right"
      className="bg-background"
    />
  </div>
);

const EngineeringContent = () => (
  <div className="space-y-0">
    <SideImageSection
      title="Geliştirilmiş Donatı Detaylandırması"
      subtitle="Dahil Olduğu Paket: #Professional"
      description="Otomatik Kolon Donatısı Tasarımı"
      content={
        <div>
          <p className="mb-4">
            Donatı detaylandırmasında, farklı kolon yüzeylerine farklı donatı çapları atayabilmek veya donatıyı kolon köşelerinde yoğunlaştırabilmek kritik öneme sahiptir. ALLPLAN 2026 ile kullanıcılar artık tasarım kriterlerine çok daha yakın sonuçlar elde edebiliyor: kare veya dikdörtgen kolonlarda boyuna donatılara farklı çaplar atanabiliyor ve eksenel aralıklar tanımlanabiliyor — ister köşelerde yoğunlaştırılmış, ister kullanıcı tanımlı aralıklarla. Bu sayede otomatik kolon donatı tasarımından sonra manuel düzeltme ihtiyacı büyük ölçüde azalıyor, tasarım süreci hızlanıyor ve güvenilirliği artıyor.
          </p>
          <p className="mb-4">
            Ayrıca FRILO gibi analiz ve tasarım yazılımlarından donatı yerleşimlerinin aktarımı artık daha sorunsuz ve güvenilir. Bu da hatasız, kesintisiz iş akışlarını mümkün kılar.
          </p>
          <p>
            <strong>Sonuç:</strong> daha hızlı proje teslimi, daha az hata ve analizden uygulamaya kadar tutarlı, yüksek kaliteli yapısal detaylandırma.
          </p>
        </div>
      }
      imageSrc={customComponents} // Placeholder
      imageAlt="Geliştirilmiş Donatı Detaylandırması"
      ctaButton={{
        text: "Videoyu İzle",
        href: "https://www.youtube.com/watch?v=Lxg1Zej3tZc",
        external: true,
      }}
      imagePosition="right"
      className="bg-background"
    />
    <SideImageSection
      title="Otomatik Donatı Detaylandırması"
      subtitle="Dahil Olduğu Paket: #Professional"
      description="Duvar Donatısı İş Akışlarını Hızlandıran İyileştirmeler"
      content={
        <div>
          <p className="mb-4">
            Donatı detaylandırmasının otomatikleştirilmesi, kullanıcıların zamandan tasarruf etmesini, iş akışlarını hızlandırmasını ve daha güvenilir şekilde çalışmasını sağlar. ALLPLAN 2026, otomatik duvar donatı iş akışını daha akıcı, hatasız ve kullanıcı dostu hale getirir. Artık yatay veya dikey donatı önceliği tek tıkla belirlenebilir; her donatı tipi gerektiğinde kolayca aktif veya pasif hale getirilebilir.
          </p>
          <p>
            Bu sayede otomasyon, hem pratik hem de sezgisel bir deneyime dönüşür. Kullanıcılar ALLPLAN&apos;ın sunduğu hız, güvenilirlik ve kontrol avantajlarından tam anlamıyla faydalanabilir.
          </p>
        </div>
      }
      imageSrc={freeformStair} // Placeholder
      imageAlt="Otomatik Donatı Detaylandırması"
      ctaButton={{
        text: "Videoyu İzle",
        href: "https://www.youtube.com/watch?v=NZkei8GpQwA",
        external: true,
      }}
      imagePosition="left"
      className="bg-muted"
    />
    <SideImageSection
      title="Donatıdan Şantiyeye (Reinforcement to Field)"
      subtitle="Dahil Olduğu Paket: #Professional"
      description="Dijital Odaklı İnşaat Süreçleri"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN 2026, donatının modellenmesi ve yönetilmesinde devrim yaratan bir <strong>&quot;Reinforcement to Field&quot;</strong> (Donatıdan Şantiyeye) iş akışı sunar. Bu yeni sistem, donatılı beton yapıların tamamen dijital, çizimsiz iş akışlarıyla yönetilmesini sağlar.
          </p>
          <p className="mb-4">
            Detaylandırıcılar ve yükleniciler artık donatıyı izometrik görünümler üzerinde doğrudan yerleştirebilir, geliştirilmiş nitelik yönetiminden yararlanabilir ve yoğun donatı bulunan projelerde çakışmaları etkin şekilde yönetebilir.
          </p>
          <p>
            Bu yenilikler, detaylandırmadan sahaya kadar bilgi akışını sorunsuz hale getirir, hataları azaltır ve üretkenliği artırarak dijital inşaata geçişi hızlandırır.
          </p>
        </div>
      }
      imageSrc={slabFoundation} // Placeholder
      imageAlt="Donatıdan Şantiyeye (Reinforcement to Field)"
      ctaButton={{
        text: "Videoyu İzle",
        href: "https://www.youtube.com/watch?v=_3lo2jJ6xGM",
        external: true,
      }}
      imagePosition="right"
      className="bg-background"
    />
  </div>
);

const InfrastructureContent = () => (
  <div className="space-y-0">
    <SideImageSection
      title="Birleşik DAM (Dijital Arazi Modeli) – Yeni Nesil Arazi Modellemesi"
      subtitle="Dahil Olduğu Paket: #Ultimate"
      description="Hassas düzenlemeler, gelişmiş şekillendirme ve büyük ölçekli hafriyatlar için tek motor"
      content={
        <div>
          <p className="mb-4">
            Yeni Birleşik DAM (Dijital Arazi Modeli), eski sistemi modern, yüksek performanslı bir motorla değiştirerek arazi modelleme iş akışlarını daha hassas, güvenilir ve detaylı hale getiriyor.
          </p>
          <p className="mb-4">
            Kullanıcılar artık tekil noktaları düzenleyebilir, kırık çizgileri (breakline) değiştirebilir ve mevcut DAM’lerden doğrudan arazi noktaları türetebilir.
          </p>
          <p className="mb-4">
            Gelişmiş şekillendirme araçları, teraslar, eğimler, hendekler ve bentler gibi arazi elemanlarının hassas oluşturulmasını sağlar. Polyhedron tabanlı görselleştirme ve iki DAM arasında katı model (solid) üretimi, hacim hesaplarını ve tasarım doğrulamasını daha güvenilir hale getirir.
          </p>
          <p>
            Bu birleşik yaklaşım, tekrarlamaları ortadan kaldırır, çakışmaları çözer ve projeler arası kararlılığı artırır. Böylece mühendisler ve mimarlar yerel düzenlemelerden büyük ölçekli zemin işlerine kadar kesintisiz çalışabilir.
          </p>
        </div>
      }
      imageSrc={slabFoundation} // Placeholder
      imageAlt="Birleşik DAM"
      ctaButton={{
        text: "Videoyu İzle",
        href: "#", // Placeholder
        external: true,
      }}
      verticalAlign="start"
      className="bg-background"
    />
    <SideImageSection
      title="Gelişmiş 3B Yol Kavşağı Detaylandırması"
      subtitle="Dahil Olduğu Paket: #Ultimate"
      description="Daha hassas düşey kontrol ve yumuşak geçişlerle düşük revizyonlu kavşak tasarımı"
      content={
        <div>
          <p className="mb-4">
            Yeni sürüm, parametrik yol kavşağı modellemesini daha fazla esneklik ve hassasiyetle geliştiriyor.
          </p>
          <p className="mb-4">
            Tasarımcılar artık kavşak kenarlarının düşey geometrisini teğet çokgen (tangent polygon) girişiyle tanımlayabiliyor; bu sayede sol ve sağ kenar profilleri bağımsız olarak ayarlanabiliyor ve karmaşık, akıcı geçişler oluşturulabiliyor.
          </p>
          <p>
            Bu geliştirmeler, manuel yeniden çalışmaları azaltırken daha doğru, gerçekçi kavşak modelleri üretir. Sonuç olarak, karmaşık altyapı projelerinde 3B tasarım ile 2B dokümantasyon tek bir parametrik iş akışında birleşir.
          </p>
        </div>
      }
      imageSrc={freeformStair} // Placeholder
      imageAlt="Gelişmiş 3B Yol Kavşağı Detaylandırması"
      imagePosition="left"
      verticalAlign="start"
      className="bg-muted"
    />
    <SideImageSection
      title="Tünel Modellemesi – Parametrik Hassasiyet"
      subtitle="Dahil Olduğu Paket: #Ultimate"
      description="Tünel projeleri için optimize edilmiş, verimli modelleme çözümü"
      content={
        <div>
          <p className="mb-4">
            Tünellerin üç boyutlu modellenmesi, yeraltı inşaatlarının ölçeği, karmaşıklığı ve riskleri nedeniyle modern altyapı projelerinin temel bileşenidir.
          </p>
          <p className="mb-4">
            3B tünel modeli, tüm proje paydaşlarının hizalanma (alignment), kesit (cross-section), inşa ve bakım aşamalarını planlamasını, görselleştirmesini ve optimize etmesini sağlar.
          </p>
          <p className="mb-4">
            Açık kazı (cut & cover) ve delme (bored) tüneller gibi farklı türler, hem yapım yöntemi hem de geometrik özellikleri açısından farklılık gösterir. Özellikle dairesel tüneller, özel bir tasarım süreci gerektirir. ALLPLAN bu ihtiyaca yönelik olarak, parametrik bir modelleme yaklaşımı sunuyor; bu sayede 2B kesit kuralları, tünel hattı (alignment) ve inşaat metodolojisi tek bir akışta entegre edilir.
          </p>
          <p>
            Yeni parametrik çizgiler ve otomatik sınır tanımlamaları sayesinde kullanıcılar performans artışının yanı sıra önemli ölçüde hassasiyet kazanır.
          </p>
        </div>
      }
      imageSrc={roomFinish} // Placeholder
      imageAlt="Tünel Modellemesi"
      ctaButton={{
        text: "Videoyu İzle",
        href: "#", // Placeholder
        external: true,
      }}
      verticalAlign="start"
      className="bg-background"
    />
    <SideImageSection
      title="Altyapı Projeleri için Yapı Strüktürü (Building Structure)"
      subtitle="Dahil Olduğu Paket: #Civil"
      description="Daha hızlı, doğru ve tam koordine openBIM teslimi için merkezi proje yönetimi"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN’ın Yapı Strüktürü sistemi artık yalnızca bina projelerinde değil, altyapı projelerinde de kullanılabiliyor.
          </p>
          <p className="mb-4">
            Tüm modeller, çizimler ve dokümantasyon tek bir sezgisel yapı altında organize ediliyor. Bu merkezi yaklaşım; ekip uyumunu korur, tüm çizimlerde otomatik güncellemeleri sağlar, hataları azaltır ve teslimat sürecini hızlandırır.
          </p>
          <p>
            Sonuç: Daha üretken ekipler, minimum risk, maksimum doğruluk ve gelişmiş openBIM iş akışları için sağlam bir temel.
          </p>
        </div>
      }
      imageSrc={customComponents} // Placeholder
      imageAlt="Altyapı Projeleri için Yapı Strüktürü"
      imagePosition="left"
      verticalAlign="start"
      className="bg-muted"
    />
    <SideImageSection
      title="BIMPLUS’a Model Aktarımı"
      subtitle="Dahil Olduğu Paket: #Ultimate"
      description="Disiplinler arası bulut tabanlı iş akışları için anında yükleme"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN Civil artık 3B geometrik modelleri doğrudan ALLPLAN Cloud’a yüklemeyi destekliyor.
          </p>
          <p className="mb-4">
            Bu sayede yol, demiryolu, köprü, tünel, arazi ve diğer altyapı verileri tek bir koordineli ortamda birleştirilebiliyor. BIMPLUS’un açıkBIM araçları (revizyon yönetimi, sorun takibi, inceleme ve görselleştirme) sayesinde tüm paydaşlar tek ve doğru veri kaynağı üzerinden çalışır.
          </p>
          <p className="mb-4">
            Bu entegrasyon, iletişimi sadeleştirir, hata oranını düşürür ve proje süreçlerini hızlandırır.
          </p>
          <p>
            Ayrıca Nevaris gibi Nemetschek çözümleriyle veri alışverişi sorunsuzdur — bu da her ölçekte projede üretkenliği ve işbirliğini artırır.
          </p>
        </div>
      }
      imageSrc={slabFoundation} // Placeholder
      imageAlt="BIMPLUS’a Model Aktarımı"
      ctaButton={{
        text: "Videoyu İzle",
        href: "#", // Placeholder
        external: true,
      }}
      verticalAlign="start"
      className="bg-background"
    />
    <SideImageSection
      title="3B Katman Yönetimi"
      subtitle="Dahil Olduğu Paket: #Civil"
      description="Karmaşık 3B modelleri üstün hassasiyetle düzenleyin, kontrol edin ve yönetin"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN Civil 2026, 3B modeller için gelişmiş katman yönetimi sunuyor. Bu sayede altyapı profesyonelleri, model organizasyonunu, görünürlüğü ve verimliliği çok daha etkin şekilde kontrol edebiliyor.
          </p>
          <p className="mb-4">
            Kullanıcılar; köprü, yol, tünel, arazi gibi model elemanlarını belirli katmanlara atayabilir, disiplin, proje aşaması veya sistem bazında düzenleme yapabilir.
          </p>
          <p className="mb-4">
            Katmanlar kolayca gösterilebilir, gizlenebilir veya izole edilerek odaklı düzenleme yapılabilir. Bu, hataları azaltır ve tasarım sürecini hızlandırır.
          </p>
          <p>
            Küresel özellik ayarları görsel tutarlılığı korur; çok disiplinli ekipler paralel olarak daha az çakışma ile çalışabilir. Bu güçlü özellik, karmaşık altyapı projelerinde yeni bir verimlilik ve doğruluk standardı getirir.
          </p>
        </div>
      }
      imageSrc={roomFinish} // Placeholder
      imageAlt="3B Katman Yönetimi"
      imagePosition="left"
      verticalAlign="start"
      className="bg-muted"
    />
    <SideImageSection
      title="Gelişmiş Parametrik Kesit Modellemesi"
      subtitle="Dahil Olduğu Paket: #Ultimate"
      description="Daha hızlı, daha doğru ve tam koordine altyapı tasarımı için geliştirilmiş araçlar"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN Civil’deki 2B parametrik kesitler, akıllı ve veri odaklı modellerin temelini oluşturur.
          </p>
          <p className="mb-4">
            Yeni sürüm, karmaşık altyapı bileşenlerinin oluşturulması ve düzenlenmesinde daha fazla esneklik ve verimlilik sağlar. Yapılan değişiklikler tüm modelde otomatik olarak güncellenir.
          </p>
          <p>
            Bu geliştirmeler, modelleme hızını artırır, doğruluğu güçlendirir ve tekrarlayan işleri azaltarak tasarımdan inşaata geçişi kolaylaştırır.
          </p>
        </div>
      }
      imageSrc={customComponents} // Placeholder
      imageAlt="Gelişmiş Parametrik Kesit Modellemesi"
      ctaButton={{
        text: "Videoyu İzle",
        href: "#", // Placeholder
        external: true,
      }}
      verticalAlign="start"
      className="bg-background"
    />
    <SideImageSection
      title="FEM – Hacim Elemanları – Teknik Önizleme"
      subtitle="Dahil Olduğu Paket: #Civil"
      description="Daha yüksek hassasiyet ve esneklik için 3B hacim elemanlarıyla genişletilmiş analiz"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN Civil’in entegre yapısal analiz modülü artık kiriş ve ızgara modellerinin ötesine geçerek hacim elemanlarını (volume elements) destekliyor.
          </p>
          <p className="mb-4">
            Bu teknik önizleme, karmaşık geometrilerin, yerel etkilerin ve ayrıntılı gerilme dağılımlarının simülasyonuna olanak tanır.
          </p>
          <p className="mb-4">
            Köprü ayakları, mesnetler ve temeller gibi alt yapı elemanlarının rijitliği, artık küresel model içinde dikkate alınabilir.
          </p>
          <p>
            Üstyapı–altyapı etkileşiminin daha doğru simülasyonu sayesinde analiz hassasiyeti ve modelleme esnekliği artar; gelecekteki sürümler için daha gelişmiş analizlerin yolunu açar.
          </p>
        </div>
      }
      imageSrc={slabFoundation} // Placeholder
      imageAlt="FEM – Hacim Elemanları"
      imagePosition="left"
      verticalAlign="start"
      className="bg-muted"
    />
    <SideImageSection
      title="Prefabrik Kirişli Köprü İş Akışının Genişletilmesi"
      subtitle="Dahil Olduğu Paket: #Civil"
      description="Parametrik köprü tasarımında daha fazla güvenlik, hassasiyet ve otomasyon"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN’ın prefabrik kirişli köprü çözümü, parametrik modelleme, gelişmiş yapısal analiz ve EN / AASHTO LRFD 9 standartlarına uygun detaylandırmayı birleştirerek tasarımdan inşaata kadar süreci %70’e varan oranda hızlandırır.
          </p>
          <p className="mb-4">
            Parametrik kiriş elemanları, modüler 3B şablonlar ve kesintisiz BIM işbirliği sayesinde mühendisler eksenleri, kesitleri ve bileşenleri esnek parametrelerle hızla tanımlayabilir.
          </p>
          <p className="mb-4">
            Yeni geliştirmeler şunları içerir:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Depolama ve taşıma sırasında öngerilmeli kirişlerin yanal stabilite analizi</li>
            <li>Enine donatı tasarımı için otomatik ızgara (grillage) üretiminde iyileştirmeler</li>
            <li>Geliştirilmiş kod kontrolü ve doğrulama araçları.</li>
          </ul>
          <p>
            Bu iyileştirmeler, modern prefabrik köprü projelerinde güvenliği, doğruluğu ve verimliliği önemli ölçüde artırır.
          </p>
        </div>
      }
      imageSrc={freeformStair} // Placeholder
      imageAlt="Prefabrik Kirişli Köprü"
      verticalAlign="start"
      className="bg-background"
    />
  </div>
);

const PrefabricationContent = () => (
  <div className="space-y-0">
    <SideImageSection
      title="Temel İşleri İyileştirmeleri"
      subtitle="Dahil Olduğu Paket: #Ultimate"
      description="Karmaşık inşaat modelleri için daha akıllı yönetim"
      content={
        <div>
          <p className="mb-4">
            Planlamadan teslimata kadar, karmaşık inşaat modellerinin yönetimi her proje aşamasında kritik öneme sahiptir. Kazı çukuru modelleri ve istinat duvarları gibi temel unsurlar doğruluk ve güvenilir sonuçlar açısından hayati rol oynar. Ancak projeler büyüdükçe, manuel iş akışları ilerlemeyi yavaşlatabilir ve hata riskini artırabilir.
          </p>
          <p className="mb-4">
            ALLPLAN 2026, bu temel süreçlerde önemli geliştirmeler sunuyor. Geliştirilmiş operator management özelliği sayesinde ekipler kazı çukuru operatörlerini verimli bir şekilde etkinleştirebilir veya devre dışı bırakabilir, operatör hacimlerini palet üzerinden görselleştirebilir ve modelleme süreci boyunca tam kontrol sağlayabilir.
          </p>
          <p className="mb-4">
            İyileştirilmiş çelik kazık duvar (sheet pile wall) iş akışı, köşe tanımlamasını kolaylaştırarak karmaşık geometrilerde daha yüksek hassasiyet sağlar. Ayrıca, istinat duvarı önizlemelerindeki performans iyileştirmeleri modellemeyi daha hızlı ve sezgisel hale getirir.
          </p>
          <p>
            Bu geliştirmeler, karmaşık inşaat modeli yönetimini sadeleştirir, hataları azaltır ve proje teslimatını hızlandırır — böylece ekibiniz zorlu projelerde bile üstün sonuçlar elde eder.
          </p>
        </div>
      }
      imageSrc={customComponents} // Placeholder
      imageAlt="Temel İşleri İyileştirmeleri"
      ctaButton={{
        text: "Videoyu İzle",
        href: "#", // Placeholder
        external: true,
      }}
      verticalAlign="start"
      className="bg-background"
    />
    <SideImageSection
      title="Kural Tabanlı Ölçülendirme (Rule-based Dimensioning)"
      subtitle="Dahil Olduğu Paket: #Professional"
      description="Kural tabanlı ölçülerle daha hızlı çizim üretimi"
      content={
        <div>
          <p className="mb-4">
            Her görünümü tek tek elle ölçülendirmekten sıkıldınız mı?
            ALLPLAN 2026 artık üretim standartlarına dayalı ölçülendirmeyi otomatikleştiriyor — böylece her prefabrik eleman tam olarak gereken ölçülere anında ve tutarlı biçimde sahip oluyor.
          </p>
          <p className="mb-4">
            Kural tabanlı ölçülendirme, kullanıcıların üretim ihtiyaçlarına göre belirli görünüm veya kesitlerde özel ölçülendirmeler oluşturmasına olanak tanır. Planlamacılar, makro verisine sahip herhangi bir 3B obje için herhangi bir görünüm veya kesitte geçerli olacak kurallar tanımlayabilir.
          </p>
          <p>
            Bu esneklik, iş akışlarını optimize etmeyi ve ölçülendirmeyi üretim sürecinin tam gereksinimlerine uyarlamayı mümkün kılar.
          </p>
        </div>
      }
      imageSrc={slabFoundation} // Placeholder
      imageAlt="Kural Tabanlı Ölçülendirme"
      ctaButton={{
        text: "Videoyu İzle",
        href: "#", // Placeholder
        external: true,
      }}
      imagePosition="left"
      verticalAlign="start"
      className="bg-muted"
    />
    <SideImageSection
      title="Yerel Görünümler için Otomatik Ölçülendirme (Automated Dimensioning for Local Views)"
      subtitle="Dahil Olduğu Paket: #Professional"
      description="Yerel görünümler için mükemmel netlik ve kararlılık"
      content={
        <div>
          <p className="mb-4">
            Doğru temsil, değişikliklere rağmen tutarlılık ve otomatik ya da kullanıcı kontrollü referanslama kabiliyeti — bunlar dokümantasyon ve görselleştirmede netlik ve hassasiyet için esastır.
            Bu özellikler hataları azaltırken esnekliği ve kontrolü korur.
          </p>
          <p>
            ALLPLAN’daki yerel görünümler, modele yaptığınız değişiklikler ne olursa olsun elemanlarınıza sabitlenmiş şekilde kalır. Böylece atölye çizimleriniz her zaman doğru, hizalı ve net olur — kaç düzenleme veya bölünme yaparsanız yapın.
          </p>
        </div>
      }
      imageSrc={freeformStair} // Placeholder
      imageAlt="Yerel Görünümler için Otomatik Ölçülendirme"
      ctaButton={{
        text: "Videoyu İzle",
        href: "#", // Placeholder
        external: true,
      }}
      verticalAlign="start"
      className="bg-background"
    />
    <SideImageSection
      title="Yeni Bağlantı Paleti Güncellemesi (New Connection Palette Update)"
      subtitle="Dahil Olduğu Paket: #Professional"
      description="Daha hızlı ve hassas prefabrik iş akışları için üretime hazır, sadeleştirilmiş araç"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN 2026’daki güncellenmiş Bağlantı Paleti (Connection Palette), prefabrik üretim süreçlerini önemli ölçüde hızlandırır.
            ALLPLAN’in özellik yönetim altyapısı (property framework) ile tam entegrasyon sayesinde, tüm prefabrik bileşenlerde daha yüksek performans ve tutarlı bir kullanıcı deneyimi sunar.
            Duvar elemanlarından ayrıştırılması sayesinde gereksiz gezinme adımları ortadan kalkar, bağlantı ayarlarına erişim ve düzenleme işlemleri çok daha kolay hale gelir.
          </p>
          <p className="mb-4">
            Artık bağımsız bir araç olan Bağlantı Paleti, kullanıcıların çift duvarlar, masif duvarlar gibi farklı duvar tipleri arasındaki birleşimleri verimli biçimde oluşturmasına, düzenlemesine ve hizalamasına imkân tanır.
            Model içinde doğrudan nesne düzenleme (direct object modification) desteği, bağlantıların model üzerinde anında ve görsel geri bildirimle değiştirilmesini sağlar; bu da daha hızlı ve hassas düzenlemeler yapılmasına olanak verir.
          </p>
          <p>
            Sistem ayrıca otomatik duvar yüksekliği ayarlamalarını destekler ve kalıp ayırma (formwork release) ile bağlantı halkaları (connection loops) gibi üretim detaylarını sorunsuz biçimde entegre eder.
            Sonuç olarak, üretim ihtiyaçlarına tam uyumlu, optimize edilmiş bir prefabrik tasarım ve üretim süreci elde edilir.
          </p>
        </div>
      }
      imageSrc={roomFinish} // Placeholder
      imageAlt="Yeni Bağlantı Paleti Güncellemesi"
      imagePosition="left"
      verticalAlign="start"
      className="bg-muted"
    />
    <SideImageSection
      title="Filigran Döşemeler için Ortak Çözüm (Common Solution for Filigree Slabs)"
      subtitle="Dahil Olduğu Paket: #Precast"
      description="Üretime optimize edilmiş döşeme tasarımlarını otomatikleştirin"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN artık filigran (yarı prefabrik) döşemelerdeki donatı ve bağlantı elemanlarını otomatik olarak yerleştirir ve günceller — böylece tasarımınızda her değişiklik yaptığınızda düzeni baştan oluşturmanız gerekmez.
          </p>
          <p>
            Bu yenilik sayesinde üretim planlaması çok daha hızlı, verimli ve zahmetsiz hale gelir.
          </p>
        </div>
      }
      imageSrc={customComponents} // Placeholder
      imageAlt="Filigran Döşemeler için Ortak Çözüm"
      ctaButton={{
        text: "Videoyu İzle",
        href: "#", // Placeholder
        external: true,
      }}
      verticalAlign="start"
      className="bg-background"
    />
    <SideImageSection
      title="Gizli Donatıda Görselleştirme (Reinforcement in Hidden)"
      subtitle="Dahil Olduğu Paket: #Precast"
      description="Son derece net donatı planları oluşturun"
      content={
        <div>
          <p className="mb-4">
            ALLPLAN 2026, plan oluşturma sırasında gizli donatı kategorilerini tamamen devre dışı bırakmaya olanak tanıyan yeni bir otomatik işlev sunar.
          </p>
          <p className="mb-4">
            Bu sayede mühendisler ve mimarlar, çizimlerde görünür ve gömülü donatıları açıkça ayırt edebilir. Böylece saha ekiplerinin planları anlaması kolaylaşır, denetçiler onay süreçlerini hızla tamamlar ve ekipleriniz sahada maliyetli hatalardan kaçınır.
          </p>
          <p>
            Bu yenilik, taşan (çıkan) donatıları gömülü donatılardan etkin biçimde ayırarak yapısal elemanlarda çok daha net bir görselleştirme sağlar.
          </p>
        </div>
      }
      imageSrc={slabFoundation} // Placeholder
      imageAlt="Gizli Donatıda Görselleştirme"
      imagePosition="left"
      verticalAlign="start"
      className="bg-muted"
    />
    <SideImageSection
      title="Özelleştirilebilir Metraj (Customizable Quantity Take-off)"
      subtitle="Dahil Olduğu Paket: #Precast"
      description="Doğru malzeme metrajlarını anında oluşturun"
      content={
        <div>
          <p>
            İhtiyacınız olan verileri, ERP sisteminizin veya müşterinizin istediği formatta tam olarak dışa aktarın. Kurallarınızı bir kez tanımlayın ve her projede tutarlı, güvenilir miktar verileri elde edin — artık çift veri girişi ya da karmaşık geçici çözümler gerekmez.
          </p>
        </div>
      }
      imageSrc={roomFinish} // Placeholder
      imageAlt="Özelleştirilebilir Metraj"
      ctaButton={{
        text: "Videoyu İzle",
        href: "#", // Placeholder
        external: true,
      }}
      verticalAlign="start"
      className="bg-background"
    />
    <SideImageSection
      title="Parça Numaralandırma (Mark Numbering)"
      subtitle="Dahil Olduğu Paket: #Professional"
      description="Parça numaralarını anında atayın, doğrulayın ve toplu olarak yönetin"
      content={
        <div>
          <p>
            Tek bir entegre sistemle, geometri, donatı veya bağlantı elemanları açısından eşleşen elemanları hızla tanımlayın. Bu hassasiyet, daha verimli gruplama, kalıp israfının azaltılması ve tüm prefabrik üretim sürecinizin daha akıcı hale gelmesi için büyük kolaylık sağlar.
          </p>
        </div>
      }
      imageSrc={freeformStair} // Placeholder
      imageAlt="Parça Numaralandırma"
      imagePosition="left"
      verticalAlign="start"
      className="bg-muted"
    />
  </div>
);

export default function Allplan2026YeniliklerPage() {
  const features = [
    "Akıllı bulut tabanlı iş birliği ile tüm proje yaşam döngüsü boyunca koordinasyon",
    "Disiplinler arası üstün birlikte çalışabilirlik, tasarımdan mühendislik iş akışlarına kesintisiz entegrasyon",
    "Gelişmiş otomasyon ve doğruluk ile sağlam modelleme süreçleri",
    "Yenilikçi ve sürdürülebilir projeler, daha düşük çevresel etki",
    "Ölçeklenebilirlik ve esneklik, ekiplerin çevik ve hızlı yanıt verebilmesini garanti eder",
  ];

  const tabs = [
    {
      value: "architecture",
      labelTR: "Architecture",
      content: <ArchitectureContent />,
    },
    {
      value: "engineering",
      labelTR: "Engineering",
      content: <EngineeringContent />,
    },
    {
      value: "infrastructure",
      labelTR: "Infrastructure",
      content: <InfrastructureContent />,
    },
    {
      value: "prefabrication",
      labelTR: "Prefabrication & Construction",
      content: <PrefabricationContent />,
    },
  ];

  return (
    <ProductPageTemplate
      badge="/ ALLPLAN 2026"
      title="DAHA İYİ BİR GELECEK İNŞA ETMEK İÇİN TASARLANDI"
      description="Mimarlar, mühendisler, üreticiler ve inşaat profesyonelleri için verimlilik ve iş birliğini yeniden tanımlıyor. ALLPLAN 2026 ürün sürümleri, modernizasyon, otomasyon ve entegrasyon odaklı yaklaşımıyla, AEC (Mimarlık, Mühendislik ve İnşaat) sektörünün değişen ihtiyaçlarına güçlü yanıtlar veriyor."
      heroImage={heroImage}
      features={features}
      showCtaButton={false}
      showDemoButton={false}
      whatIsInfoMedia={{
        title: "/ GENEL BAKIŞ",
        subtitle: "NEDEN ALLPLAN 2026?",
        description:
          "ALLPLAN çözümleri, bina ve altyapı modelleme, tasarım, detaylandırma ve üretimden inşaata kadar uçtan uca iş birliğine dayalı bir çalışma akışı sağlıyor. Yeni geliştirmeler; projelerinizi hızlandırır, doğruluğu artırır, yenilik ve sürdürülebilirliği teşvik eder ve ekiplerin tüm proje yaşam döngüsü boyunca çevik ve uyumlu çalışmasını güvence altına alır.",
        // Using one of the videos as the main intro video, or placeholder
        videoUrl: "https://www.youtube.com/embed/HqhDQELnHms", 
      }}
      afterInfoChildren={
        <RegulaTabs
          title="ALLPLAN 2026 – ANA ÖZELLİKLER VE GELİŞTİRMELER"
          defaultValue="architecture"
          items={tabs}
        />
      }
    />
  );
}
