"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import PostHeroSection from "@/components/PostHeroSection";
import WorkflowTabsTemplate from "@/components/WorkflowTabsTemplate";
import iconEnhancedProjectComm from "@/assets/solutions/architecture/reasons/enhanced_project_comm.png";
import iconPowerfulModeling from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-powerful_modeling.png";
import iconPlanableMultiMaterials from "@/assets/solutions/architecture/reasons/planable_multi_materials.png";
import iconSeamlessIntegration from "@/assets/products/allplan-ultimate/seamless-integration.png";
import iconPrecise3DReinf from "@/assets/products/allplan-professional/precise-3d-reinforcement.png";
import iconImprovedChangeManagement from "@/assets/solutions/architecture/reasons/improved_change_management.png";
import iconSuperiorQualityDeliverables from "@/assets/solutions/architecture/reasons/superior_quality_deliverables.png";
import iconWorkWayWant from "@/assets/solutions/architecture/reasons/work_way_want.png";
import iconBIM2Field from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-bim2field.png";
import iconProductiveCollab from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-productive_collab.png";
import iconInterdisciplinaryAEC from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-interdisciplinary_aec_design.png";
import iconReliableEarlierCost from "@/assets/solutions/architecture/reasons/realiable_earlier_cost_estimates.png";
import heroImage from "@/assets/solutions/mep-hero.jpg";
import imgProjeKoordinasyonu from "@/assets/solutions/mep/workflows/mep-proje-koordinasyonu.jpg";
import imgSihhiTesisat from "@/assets/solutions/mep/workflows/mep-sihhi-tesisat.jpg";
import imgSprinkler from "@/assets/solutions/mep/workflows/mep-sprinkler.jpg";
import imgElektrik from "@/assets/solutions/mep/workflows/mep-elektrik.jpg";
import imgKonutHavalandirma from "@/assets/solutions/mep/workflows/mep-konut-havalandirma.jpg";
import imgIsitma from "@/assets/solutions/mep/workflows/mep-isitma.jpg";
import imgVR from "@/assets/solutions/mep/workflows/mep-vr.jpg";
import imgEnerjiAnalizi from "@/assets/solutions/mep/workflows/mep-enerji-analizi.jpg";
import imgHavalandirmaSogutma from "@/assets/solutions/mep/workflows/mep-havalandirma-sogutma-yuku.jpg";
import imgIsiKaybi from "@/assets/solutions/mep/workflows/mep-isi-kaybi.jpg";
import imgSicaklikSimulasyonu from "@/assets/solutions/mep/workflows/mep-sicaklik-simulasyonu.jpg";

const stats = [
  { value: "50%", label: "DAHA KESİN", description: "Daha hızlı ve daha kesin tasarım çıktıları, görselleştirmeler ve ayrıntılı paftalar. * 3B olarak 2B ile karşılaştırıldığında" },
  { value: "70%", label: "DAHA VERİMLİ", description: "Güvenilir otomatik malzeme çıktısı ve metrajlar ile erken aşamalarda daha verimli ve hassas proje maliyeti. * Elden metrajla karşılaştırıldığında" },
  { value: "30%", label: "DAHA ÜRETKEN", description: "İşbirliğine dayalı planlamayı ve geliştirilmiş inşa edilebilirliği destekleyen verimli iş akışları ile tasarım üretkenliğinde artış. * 3B tasarım kullanarak" },
];

const challenges = [
  { text: "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri." },
  { text: "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri." },
  { text: "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri." },
];

const reasons = [
  { title: "ALLPLAN'LE DAHA HIZLI BAŞLANGIÇ", description: "Allplan araç ipuçları ile fonksiyonlara daha hızlı alışabilir ve Allplan'ın gücünden daha erken yararlanmaya başlayabilirsiniz.", image: iconEnhancedProjectComm },
  { title: "GÜÇLÜ ve SEZGİSEL MODELLEME", description: "Bina bileşenlerini hızla geliştirmek ve daha kısa sürede inşaat belgeleri oluşturmak için güçlü araçlarla desteklenen, herhangi bir şekli kolayca modelleme özgürlüğü.", image: iconPowerfulModeling },
  { title: "ÇOKLU MALZEMEYLE PLANLAMA", description: "Geliştirilmiş inşa edilebilirlik ve sürdürülebilirlik için yerinde dökme/prekast beton, çelik ve ahşap dahil malzemeleri ve inşaat yaklaşımlarını optimize edin.", image: iconPlanableMultiMaterials },
  { title: "ANALİZ ÇÖZÜMLERİYLE KUSURSUZ ENTEGRASYON", description: "SAF aracılığıyla yapısal modelleri yapısal analiz çözümleriyle verimli bir şekilde değiştirmek için SCIA AutoConverter ile gelişmiş iş akışları.", image: iconSeamlessIntegration },
  { title: "HASSAS 3D DONATILANDIRMA", description: "Donatı gereksinimlerinin hızlı tasarımı ve detaylandırılması, önemli ölçüde zaman tasarrufu ve kalitenin sağlanması için otomatik çözümler.", image: iconPrecise3DReinf },
  { title: "GELİŞTİRİLMİŞ DEĞİŞİM YÖNETİMİ", description: "Çizimlerde veya modelde yalnızca bir kez düzenleyerek çıktılar arasında otomatik olarak yapılan değişikliklerle zamandan tasarruf edin.", image: iconImprovedChangeManagement },
  { title: "ÜSTÜN KALİTELİ TESLİMATLAR", description: "Doğrudan 3B modelden hızlı ve doğru bir şekilde planlar, çizimler ve raporlar oluşturun ve yüksek kaliteli belgeler için bilgi alışverişini kontrol edin.", image: iconSuperiorQualityDeliverables },
  { title: "İSTEDİĞİNİZ GİBİ ÇALIŞIN", description: "2B, 2.5B ve 3B'de esnek iş akışlarının yanı sıra tam obje yönelimli BIM çalışma metodolojisi.", image: iconWorkWayWant },
  { title: "ETKİN OPEN BIM", description: "Çoklu değişim formatları, IFC4 RV içe/dışa aktarma ve işbirliğine dayalı OPEN BIM veri platformu Bimplus ile kolayca veri alışverişi yapın.", image: iconBIM2Field },
  { title: "ÜRETKEN İŞBİRLİĞİ", description: "Çok kullanıcılı gerçek zamanlı çalışma için entegre bulut teknolojisinin yanı sıra iş ortaklarıyla model ve proje işbirliği.", image: iconProductiveCollab },
  { title: "GERÇEK DİSİPLİNLER ARASI AEC TASARIMI", description: "Mimari tasarım, yapı mühendisliği ve MEP hizmetleri tasarımı ve detaylandırması için tek bir yazılım çözümü.", image: iconInterdisciplinaryAEC },
  { title: "GÜVENİLİR ERKEN MALİYET TAHMİNLERİ", description: "Doğru teklifler için ayrıntılı listeleri kullanarak metrajları ve malzemeleri daha erken bir aşamada hızlı ve hassas bir şekilde hesaplayın.", image: iconReliableEarlierCost },
];

const mepCategories = [
  {
    key: "tasarim-temeli", label: "1 / Tasarım Temeli", items: [
      { title: "Proje koordinasyonu", description: "Teknoloji ortağımız ESS AX3000’in çözümleri ile birlikte Allplan’daki tek bir 3 boyutlu bina modelinde havalandırma, ısıtma, sıhhi tesisat, elektrik, konut havalandırması ve sprinkler gibi farklı bina sistemlerini merkezi olarak planlayabilir ve yönetebilirsiniz. Allplan’daki çizim dosya sistemi çeşitli bina sistemlerinin incelenmesini basitleştirir ve hızlandırır, böylece çakışmalar ve hatalar önceden önlenebilir. Allplan ve Bimplus Konu Yöneticisi arasındaki senkronizasyon, ilgili tüm tarafların aynı düzeyde bilgiye erişimi olduğundan görevlerin koordine edilmesini kolaylaştırır. Bu, önemli kararları daha erken vermenize ve inşaat sürecinin daha hızlı ve sorunsuz ilerlemesine olanak tanır.", image: imgProjeKoordinasyonu },
    ]
  },
  {
    key: "modelleme", label: "2 / Modelleme", items: [
      { title: "Sıhhi Tesisat Tasarımı", description: "Allplan ve AX3000 – Sıhhi Tesisat modülü ile drenaj tasarımında değerli zaman kazanırsınız. Eksiksiz 3B kütüphaneler ve üretici veritabanları, sıhhi objeler için otomatik bağlantı fonksiyonları ve kapsamlı hesaplamalar ve çıktı seçenekleriyle boru ağlarının planlamasını 3B olarak optimize edin.", image: imgSihhiTesisat },
      { title: "Sprinkler Tasarımı", description: "AX3000’nin gelişmiş tasarım yardımları sayesinde sprinkler sistemlerini hızlı ve zahmetsizce planlayın. Mevcut Allplan CAD fonksiyonlarıyla rahatlıkla çalışabilirsiniz. Easyline’ı kullanarak sprinkler sistemini zorlu inşaat koşullarında bile güvenli ve hızlı bir şekilde boyutlandırabilirsiniz. Sürekli olarak güncellenen sprinkler bileşenleri kütüphanesi sayesinde, kaplinler ve kılavuz manşonlarıyla bile sistemi en başından itibaren hatasız ve mantıksal olarak tasarlayabilirsiniz. Elbette kendi sprinkler türlerinizi de oluşturabilir ve böylece bireysel bir çözüm geliştirebilirsiniz.", image: imgSprinkler },
      { title: "Elektrik Tasarımı", description: "Allplan ve AX3000’in Elektrik modülü ile, elektrik planlamasının tüm alanları için kullanımı rahat ve etkili bir araca sahip olursunuz: boş kablo kanalı ve güzergah planlamasından elektrik tabanının inşasına ve devrelerin kontrolüne, tamamlanmış değerlendirmelere ve Microsoft Excel listelerine kadar.", image: imgElektrik },
      { title: "Konut Havalandırma Tasarımı", description: "Konut havalandırma alanında Allplan ve AX3000 çözümleriyle gerçekleştirilebilecek görev yelpazesi, AX3000 Oda Kitabı kullanılarak havalandırma konseptinin oluşturulmasından, hava hacimlerinin belirlenmesine ve tüm bileşenlerle ve parça listeleriyle birlikte 3B olarak otomatik, ayrıntılı planlamaya kadar uzanır.", image: imgKonutHavalandirma },
      { title: "Isıtma Tasarımı", description: "AX3000’nin ısıtma modülü, ısıtma planlamasına yönelik en modern ve kapsamlı çözümlerden biridir. Allplan ve ısıtma modülünün birleşimiyle karmaşık ısıtma sistemlerini bile hızlı, hatasız ve az çalışmayla oluşturabilirsiniz. Bunun nedeni, yazılımın entegre malzeme veritabanları, çok sayıda otomasyon fonksiyonu ve etkileşimli çizim fonksiyonları sayesinde birçok işi elinizden almasıdır.", image: imgIsitma },
      { title: "AX3000 Sanal Gerçeklik", description: "AX3000 Sanal Gerçeklik eklentisi, mimarların, mühendislerin, müteahhitlerin ve inşaat sürecine dahil olan diğer kişilerin, temel atma töreninden önce bile bir binayı gerçekçi bir şekilde görüntülemelerine olanak tanır. Bunun önkoşulu, ALLPLAN’ın açık BIM platformu Bimplus’taki dijital bina modeli ve ideal olarak HTC VIVE® VR gözlükleridir. VR modeli oluşturulduktan sonra bina modeli, verilerin daha fazla hazırlanmasına gerek kalmadan hemen sanal olarak incelenebilir. Bina çevresel bir senaryo da dahil olmak üzere görselleştirilebilir. Dokuların ayarlanması gibi güneşin seyrinin simülasyonu da mümkündür. Binadaki hareket klavye veya isteğe bağlı bir gamepad aracılığıyla yapılır.", image: imgVR },
    ]
  },
  {
    key: "analizler", label: "3 / Analizler", items: [
      { title: "Enerji Analizi", description: "AX3000 Enerji Modülü ile bina geometrisine dayalı değişken karşılaştırmaları da dahil olmak üzere kapsamlı değerlendirmeler oluşturabilirsiniz. Enerji kazanç ve kayıplarının grafiksel gösterimine ek olarak, durum raporu, KfW çevrimiçi aracına aktarım ve DiBT’nin baskı uygulama modülüne aktarım yer alır. Böylece ilgili tüm standartların karşılandığından emin olursunuz.", image: imgEnerjiAnalizi },
      { title: "Havalandırma ve Soğutma Yükü Hesabı", description: "Allplan ve AX3000 Havalandırma modülü ile ayrıntılı uygulama ve kurulum planları oluşturmak için etkili bir araca sahip olursunuz. Hızlı Easyline boyutlandırmayla başlayın ve tanıdık Allplan çizim fonksiyonlarını kullanın. AX3000 otomatik etiketleme, otomatik kesit bağlantıları, ara uzunluk hesaplamaları ve isteğe göre kesit görünümleri ile net 3B gösterim sunar; basınç düşüşü, ses ve sıcaklık düşüşü gibi kapsamlı kanal sistemi hesaplamaları sağlar.", image: imgHavalandirmaSogutma },
      { title: "Isı Kaybı Hesabı", description: "Allplan bina modelinde ısıtma tasarımı yapıldıktan sonra AX3000 Oda Kitabı ile ısı kaybı hesaplaması yapılır.", image: imgIsiKaybi },
      { title: "Sıcaklık Simülasyonu", description: "AX3000 Sıcaklık Simülasyon modülü, bir binanın dinamik termal simülasyonu için ideal bir araçtır. Bölge ve sistem tanımları enerji sertifikasından otomatik olarak alınabilir veya serbestçe tanımlanabilir. İç ve dış etkileyici faktörleri belirleyin ve saatlik ısıtma ve soğutma yükünün seyrini otomatik olarak hesaplayın.", image: imgSicaklikSimulasyonu },
    ]
  },
];

const preWorkflowSection = (
  <WorkflowTabsTemplate title="MEP Mühendisliği İş akışları" categories={mepCategories} />
);

const postHeroSection = (
  <PostHeroSection
    title="ALLPLAN – MEP MÜHENDİSLİĞİ İÇİN BIM ÇÖZÜMLERİ"
    paragraphs={[
      "Konut projelerinden büyük ölçekli ticari yapılara ve kamu binalarına kadar; MEP mühendisliği de dahil olmak üzere tüm bina tesisatlarına yönelik hassas detaylandırma, uzmanlık, esneklik ve doğru araçlar gerektirir.",
      "ESS tarafından geliştirilen Allplan ve AX3000 sayesinde; yapısal tasarımlarınıza MEP ve HVAC verilerini kolayca entegre edebilir, otomasyon araçlarıyla varyantları hızla detaylandırabilir, revizyonları hızlı biçimde yönetebilir, ekip üyeleriyle zahmetsizce koordinasyon sağlayabilir ve projelerin daha başarılı bir şekilde hayata geçirilmesini sağlayacak doğru ve eksiksiz uygulama çıktıları üretirsiniz.",
    ]}
    videoUrl="https://www.youtube.com/embed/H5bY4jisklI?si=obcmnlddfsNmdCDS"
  />
);

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="ALLPLAN"
      title="MEP ENGINEERING"
      subtitle="DAHA FAZLASINI İSTEYEN MÜHENDİSLER İÇİN."
      description="ALLPLAN'ın MEP ve bina hizmetleri mühendisliği için BIM çözümleri, tasarımdan inşaata kadar tüm süreci kapsar. Allplan, mimari ve yapı mühendisliği disiplinleriyle entegre çalışmayı ve proje tasarımı ve teslimatı için daha fazla üretkenliği destekleyen işbirlikçi iş akışlarını mümkün kılar. Allplan ve AX3000 ile MEP tasarım yazılımınızdan daha fazlasını bekleyin!"
      customHero={(
        <SolutionHero
          badge="ALLPLAN"
          title="MEP ENGINEERING"
          subtitle="DAHA FAZLASINI İSTEYEN MÜHENDİSLER İÇİN."
          description="ALLPLAN'ın MEP ve bina hizmetleri mühendisliği için BIM çözümleri, tasarımdan inşaata kadar tüm süreci kapsar. Allplan, mimari ve yapı mühendisliği disiplinleriyle entegre çalışmayı ve proje tasarımı ve teslimatı için daha fazla üretkenliği destekleyen işbirlikçi iş akışlarını mümkün kılar. Allplan ve AX3000 ile MEP tasarım yazılımınızdan daha fazlasını bekleyin!"
        />
      )}
      postHeroSection={postHeroSection}
      stats={stats}
      challenges={challenges}
      reasonsVariant="benefits"
      reasons={reasons}
      statsVariant="animated"
      preWorkflowSection={preWorkflowSection}
      showCta={false}
    />
  );
}
