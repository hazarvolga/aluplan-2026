"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import WorkflowTabsTemplate from "@/components/WorkflowTabsTemplate";
import PostHeroSection from "@/components/PostHeroSection";
import heroBg from "@/assets/solutions/infrastructure-hero-bg.png";
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
import iconIntuitiveTerrainIntegration from "@/assets/solutions/architecture/reasons/intuitive_terrain_integration-1.png";
import infraDataExchange from "@/assets/solutions/infrastructure/workflows/site-analysis/data-exchange.jpg";
import infraTerrainSurvey from "@/assets/solutions/infrastructure/workflows/site-analysis/terrain-survey.jpg";
import infraBimCoordination from "@/assets/solutions/infrastructure/workflows/site-analysis/bim-coordination.jpg";
import infraFreeFormModeling from "@/assets/solutions/infrastructure/workflows/modeling/free-form-modeling.jpg";
import infraParametricModeling from "@/assets/solutions/infrastructure/workflows/modeling/parametric-modeling.jpg";
import infraVisualization from "@/assets/solutions/infrastructure/workflows/modeling/visualization.jpg";
import infraVariantStudies from "@/assets/solutions/infrastructure/workflows/model-analysis/variant-studies.jpg";
import infraBuildingSiteEquipment from "@/assets/solutions/infrastructure/workflows/model-analysis/building-site-equipment.jpg";
import infraChangeManagement from "@/assets/solutions/infrastructure/workflows/model-analysis/change-management.jpg";
import infraOverviewPlan from "@/assets/solutions/infrastructure/workflows/detailing/overview-plan.jpg";
import infraShutteringPlans from "@/assets/solutions/infrastructure/workflows/detailing/shuttering-plans.jpg";
import infraReinforcementDrawings from "@/assets/solutions/infrastructure/workflows/detailing/reinforcement-drawings.jpg";
import infraSitePlans2 from "@/assets/solutions/infrastructure/workflows/detailing/site-plans-2.jpg";
import infraSteelLists from "@/assets/solutions/infrastructure/workflows/detailing/steel-lists.jpg";
import infraChangeManagement2 from "@/assets/solutions/infrastructure/workflows/detailing/change-management-2.jpg";

const stats = [
  { value: "50%", label: "DAHA KESİN", description: "daha hızlı ve daha kesin tasarım çıktıları, görselleştirmeler ve ayrıntılı paftalar. * 3B olarak 2B ile karşılaştırıldığında" },
  { value: "70%", label: "DAHA VERİMLİ", description: "Güvenilir otomatik malzeme çıktısı ve metrajlar ile erken aşamalarda daha verimli ve hassas proje maliyeti. * Elden metrajla karşılaştırıldığında" },
  { value: "30%", label: "DAHA ÜRETKEN", description: "İşbirliğine dayalı planlamayı ve geliştirilmiş inşa edilebilirliği destekleyen verimli iş akışları ile tasarım üretkenliğinde artış. * 3B tasarım kullanarak" },
];

const challenges = [
  { text: "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri." },
  { text: "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri." },
  { text: "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri." },
];

const reasons = [
  { title: "GÜÇLÜ SERBEST MODELLEME", description: "En karmaşık proje gereksinimleri için bile her şekilde obje oluşturmak ve doğru şekilde tasarlamak için güçlü araçlar.", image: iconPowerfulModeling },
  { title: "KOLAYCA TASARLA ve KARMAŞIK DONATILARI DETAYLANDIR", description: "Hızlı donatı tasarımı ve kavisli yapılar veya serbest biçimli objeler gibi karmaşık geometrilerin detaylandırılması için otomatik çözümler.", image: iconPrecise3DReinf },
  { title: "SEZGİSEL ARAZİ ENTEGRASYONU", description: "Tüm yaygın arazi biçimlerini hızla entegre edin, bunları dijital arazi modelleri olarak görüntüleyin ve uygun şekilde düzenleyin.", image: iconIntuitiveTerrainIntegration },
  { title: "İSTEDİĞİNİZ GİBİ ÇALIŞIN", description: "2B, 2.5B ve 3B'de esnek iş akışlarının yanı sıra tam obje yönelimli BIM çalışma metodolojisi.", image: iconWorkWayWant },
  { title: "ÇOKLU MALZEMEYLE PLANLAMA", description: "Geliştirilmiş inşa edilebilirlik ve sürdürülebilirlik için yerinde dökme/prekast beton, çelik ve ahşap dahil malzemeleri ve inşaat yaklaşımlarını optimize edin.", image: iconPlanableMultiMaterials },
  { title: "GERÇEK DİSİPLİNLER ARASI AEC TASARIMI", description: "Mimari tasarım, yapı mühendisliği ve MEP hizmetleri tasarımı ve detaylandırması için tek bir yazılım çözümü.", image: iconInterdisciplinaryAEC },
  { title: "ÜRETKEN İŞBİRLİĞİ", description: "Çok kullanıcılı gerçek zamanlı çalışma için entegre bulut teknolojisinin yanı sıra iş ortaklarıyla model ve proje işbirliği.", image: iconProductiveCollab },
  { title: "ETKİN OPEN BIM", description: "Çoklu değişim formatları, IFC4 RV içe/dışa aktarma ve işbirliğine dayalı OPEN BIM veri platformu Bimplus ile kolayca veri alışverişi yapın.", image: iconBIM2Field },
  { title: "GÜVENİLİR ERKEN MALİYET TAHMİNLERİ", description: "Doğru teklifler için ayrıntılı listeleri kullanarak metrajları ve malzemeleri daha erken bir aşamada hızlı ve hassas bir şekilde hesaplayın.", image: iconReliableEarlierCost },
  { title: "GELİŞTİRİLMİŞ DEĞİŞİM YÖNETİMİ", description: "Çizimlerde veya modelde yalnızca bir kez düzenleyerek çıktılar arasında otomatik olarak yapılan değişikliklerle zamandan tasarruf edin.", image: iconImprovedChangeManagement },
  { title: "ÜSTÜN KALİTELİ TESLİMATLAR", description: "Doğrudan 3B modelden hızlı ve doğru bir şekilde planlar, çizimler ve raporlar oluşturun ve yüksek kaliteli belgeler için bilgi alışverişini kontrol edin.", image: iconSuperiorQualityDeliverables },
  { title: "GELİŞTİRİLMİŞ PROJE İLETİŞİMİ", description: "Bulut tabanlı platform kullanarak inşaat ekipleriyle ayrıntılı tasarımları koordine edin – Net ve şeffaf iletişim için Bimplus", image: iconEnhancedProjectComm },
];

const infrastructureCategories = [
  {
    key: "site-analysis", label: "1 / Şantiye Analizi", items: [
      { title: "Veri Değişimi", description: "Allplan ile, hangi yazılım çözümünü kullanırlarsa kullansınlar, proje ortakları tarafından sağlanan çeşitli formatlardaki verileri içe aktararak tasarım aşamasında önemli ölçüde zaman kazanacaksınız. Bu veri sorunlarını azaltır. Model, IFC formatında ana model olarak sunulacak. Elbette modeller bağımsız olarak da oluşturulabilir, tamamlanabilir veya değiştirilebilir. Allplan 50’den fazla dosya formatını destekler, böylece Revit, Rhino, SketchUp vb.’den proje verileri kullanılabilir. Otomatik iş akışları, malzemeler, donatı spesifikasyonları veya yerleşik bina bileşenleri gibi prefabrik tasarım için gerekli olan nitelikleri ekler.", image: infraDataExchange },
      { title: "Arazi Araştırması", description: "Herhangi bir proje planlamasına başlamadan önce kesin bir envanter önemlidir. Kat planları veya kadastral planlar gibi nihai belgeler, PDF veya görüntü dosyaları olarak Allplan içerisinde dönüşümlerin veya yeni binaların planlanması için bir temel olarak kullanılabilir. Hızlı değerlendirme sürelerini mümkün kılmak için Scalypso, saha nokta bulutu araştırmaları için bir dizi araç sağlar ve yeniden oluşturulan 3B elemanların gerçek zamanlı bir arayüz aracılığıyla Allplan’a aktarılmasına olanak tanır.", image: infraTerrainSurvey },
      { title: "BIM Koordinasyonu", description: "Görevlerin senkronize Allplan ve Bimplus Konu Yönetimi ile koordinasyonu gerçek bir avantajdır. Allplan’ın yerel arayüzünde veri aktarımı verimli bir şekilde çalışır. Bimplus Konu Yönetimi açıktır ve IFC ve BCF’yi (her ikisi de OPEN BIM standardı) yönetebilir. İlgili tüm taraflar aynı düzeyde bilgiye erişir. Önemli kararlar daha erken alınabilir. İnşaat süreci daha hızlı ve sorunsuz ilerler.", image: infraBimCoordination },
    ]
  },
  {
    key: "modeling", label: "2 / Modelleme", items: [
      { title: "Serbest Biçimli Modelleme", description: "Proje ne kadar karmaşık olursa olsun, Allplan ile her türlü 3D eleman oluşturulabilir. Herhangi bir serbest biçimli geometri, Allplan’ın bunları bileşen olarak tanıyacağı ve örneğin metraj alımında dikkate alacağı şekilde modellenebilir ve dönüştürülebilir. Serbest biçimli modelleyici, çok çeşitli karmaşık şekiller oluşturmayı kolaylaştırır. En karmaşık şekiller için bile hassas uygulama planlaması mümkündür.", image: infraFreeFormModeling },
      { title: "Parametrik Modelleme", description: "Rögarlar, kanalizasyon ve servis hatları gibi yol gövdesinin yardımcı unsurları duruma tamamen parametrik olarak yerleştirilebilir ve yolun gidişatına göre uyarlanabilir. Hat ve rögar profilleri bir kütüphaneden seçilir ve daha sonra kolayca uyarlanabilir.", image: infraParametricModeling },
      { title: "Görselleştirme", description: "Görselleştirme, proje katılımcıları arasındaki işbirliğini ve iletişimi kolaylaştırır. Ayrıntılar, iyileştirmeler vb. için tüm disiplinler modeli birlikte analiz edebilir. Yapısal elemanların görsel temsili aynı zamanda geri bildirimi de kolaylaştırır. Allplan’ın mükemmel görselleştirme kalitesi sayesinde, donatı detay seviyesi gibi yapısal özellikler gerçek zamanlı olarak kontrol edilebilir ve farklılıklar hızlı bir şekilde çözülebilir.", image: infraVisualization },
    ]
  },
  {
    key: "model-analysis", label: "3 / Model Analizi", items: [
      { title: "Varyant Çalışmaları", description: "Çizim dosyası sistemi sayesinde farklı model varyasyonlarının incelenmesi özellikle kolaydır. Bireysel model alanlarını düzenlerken programdaki performansın yanı sıra kullanıcı performansı da çizim dosyası sistemi tarafından büyük ölçüde iyileştirilir. Allplan, verilerin anlaşılır şekilde yapılandırılması nedeniyle özellikle büyük, karmaşık projeler için uygundur.", image: infraVariantStudies },
      { title: "Şantiye Ekipmanları", description: "Allplan ile şantiye yerleşimini de planlayabilirsiniz. Her şantiye farklıdır ve bu nedenle bireysel, hassas planlama gerektirir. Bu zorlu mücadelede sizi desteklemek için Allplan, çakışma algılamalı ve basit kaldırma değerlendirmeli kule vinci gibi objeler sunar. Bunların özelleştirilmesi özellikle kolaydır ve ayrıca belirli üretici verilerine de bağlanabilir. İşbirliği işlevselliği ve güçlü araçlar, varyantların hızlı bir şekilde detaylandırılmasına olanak tanıyarak değişikliklerin etkili bir şekilde yönetilmesine ve doğru saha ve bina gereksinimlerinin hızlı bir şekilde oluşturulmasına olanak tanır.", image: infraBuildingSiteEquipment },
      { title: "Değişim Yönetimi", description: "Varyant çalışması ve yapısal analiz sonrasında modelde değişikliklerin olması oldukça normaldir. Bimplus sayesinde bu değişiklikler rahatlıkla belgelenebilir, bu da inşaat projesinin baştan sona sorunsuz ilerlemesini kolaylaştırır. Bimplus ile modelleri kolaylıkla karşılaştırılabilen, ayarlanabilen ve yönetilebilen varyantlar ve revizyonlar olarak temsil edebilirsiniz. Oluşturulması kolay slayt gösterilerinin yardımıyla sunumlar ve inşaat toplantılarında karar verme için mükemmel bir temele sahip olursunuz.", image: infraChangeManagement },
    ]
  },
  {
    key: "detailing-deliverables", label: "4 / Detaylandırma / Teslimatlar", items: [
      { title: "Genel Düzenleme Çizimleri", description: "Genel düzenleme çizimleri yapının tek bir planda tam bir temsilini sağlar. İlk adım, 3B modeli ve içerdiği bilgileri uygun araçları kullanarak analiz etmektir. Allplan’ın kullanımı kolay ilişkili görünümleri ve kesitleri ile böyle bir planı hızlı bir şekilde oluşturabilir ve böylece tüm yapıyı kapsamlı bir şekilde görselleştirebilirsiniz. Daha sonra modelde yapılan değişiklikler kolaylıkla anlaşılabilecek ve müteakip proje aşamalarında bireysel elemanların konumu daha net bir şekilde tanınabilecektir.", image: infraOverviewPlan },
      { title: "Yapısal Çizimler", description: "İlk adımda, yapısal çizimler beton elemanların veya yapısal çelik elemanların tam geometrisi ve boyutları hakkında genel bir bakış sağlamalıdır. Bu temelde, bireysel elemanların şekli belirlenecek şekilde yapısal çizim gerçekleştirilir. İnşaat aşamasında her şeyin sorunsuz ilerlemesi için burada en yüksek hassasiyet gereklidir. Allplan ile betonarme yapılar için detaylı yapısal çizimler oluşturabilirsiniz. Kesitler ve görünümler gösterimlerine hızlı ve kolay bir şekilde uyarlanabilir. Bu, çizim oluşturma işlemini büyük ölçüde hızlandırır.", image: infraShutteringPlans },
      { title: "Donatı Çizimleri", description: "Allplan’da donatı 3 boyutlu model olarak oluşturulur. Sonuç olarak zamandan tasarruf edersiniz ve tasarım dökümanları için güvenilir bir temel oluşturursunuz. Konumlandırma yalnızca bir kez oluşturulur ve ondan türetilen tüm kesitlere otomatik olarak uyarlanır. Bu, çakışmaların görsel olarak tespit edilmesini veya çakışma kontrolü yoluyla otomatik olarak tanımlanmasını özellikle kolaylaştırır. Son olarak, akıllı Allplan raporları aracılığıyla tek bir düğmeye basılarak hassas çelik listeleri elde edilir. Allplan’daki kesitler aynı zamanda donatı yerleştirmede özellikle yararlı bir araçtır.", image: infraReinforcementDrawings },
      { title: "Şantiye Çizimleri", description: "Şantiye yerleşim planı Allplan ile çok kolay bir şekilde görüntülenebilmektedir. 3B elemanlar ve kesitlerin ve kat planlarının birbirine bağlanması sayesinde değişiklikler otomatik olarak benimsendiği için artık önemli bir çaba gerektirmiyor.", image: infraSitePlans2 },
      { title: "Çelik Listeleri", description: "Allplan mümkün olan en kısa sürede hassas donatı planlamasına olanak sağlar. 3B donatılandırma sayesinde planlama sürecindeki hatalar en aza indirilebilir. Yalnızca birkaç tıklamayla modelinizde çakışma olup olmadığını kontrol edebilir ve ardından belirli prefabrik elemanlarla ilgili üretim günleri için bile çelik listeleri oluşturabilirsiniz.", image: infraSteelLists },
      { title: "Değişim Yönetimi", description: "Bimplus sayesinde şantiyede meydana gelen öngörülemeyen değişiklikler çok kısa sürede Allplan modeline uyarlanıp dahil edilebilmektedir.", image: infraChangeManagement2 },
    ]
  },
];

const preWorkflowSection = (
  <section id="altyapi-muhendisligi-is-akislari">
    <WorkflowTabsTemplate title="Altyapı Mühendisliği İş Akışları" categories={infrastructureCategories} />
  </section>
);

const postHeroSection = (
  <PostHeroSection
    title="ALTYAPI MÜHENDİSLİĞİ İÇİN ALLPLAN - BIM ÇÖZÜMLERİ"
    paragraphs={[
      "Limanlar ve barajlardan yollara, tünellere ve köprülere kadar altyapı projeleri için doğru tasarım ve detaylandırma bilgi, esneklik ve hassas araçlar gerektirir.",
      "Allplan ile serbest biçimli şekilleri kolayca modelleyebilir, otomasyon araçlarıyla varyantları hızlıca detaylandırabilir, değişiklikleri hızla yönetebilir, ekiplerle zahmetsizce işbirliği yapabilir ve doğru paftaları hızlı şekilde üretebilirsiniz.",
    ]}
    videoUrl="https://www.youtube.com/embed/B3hXx3LL-q4"
  />
);

const customHero = (
  <SolutionHero
    badge="ALTYAPI TASARIMI"
    title="ALT YAPI MÜHENDİSLİĞİ"
    subtitle="DAHA FAZLASINI İSTEYEN MÜHENDİSLER VE TEKNİKERLER İÇİN."
    description="ALLPLAN'in altyapı mühendisliği için BIM çözümleri, tasarımdan inşa sürecine kadar tüm süreci kapsar. Allplan'ın sağladığı gelişmiş hassasiyet ve işbirliğine dayalı iş akışları, proje tasarımı ve teslimi için yeni verimlilik seviyeleri ve daha fazla üretkenlik sağlar. Altyapı mühendisliği ve detaylandırma yazılımınızdan daha fazlasını bekleyin!"
    backgroundImage={heroBg}
  />
);

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="ALTYAPI TASARIMI"
      title="ALT YAPI MÜHENDİSLİĞİ"
      subtitle="DAHA FAZLASINI İSTEYEN MÜHENDİSLER VE TEKNİKERLER İÇİN."
      description="ALLPLAN'in altyapı mühendisliği için BIM çözümleri, tasarımdan inşa sürecine kadar tüm süreci kapsar. Allplan'ın sağladığı gelişmiş hassasiyet ve işbirliğine dayalı iş akışları, proje tasarımı ve teslimi için yeni verimlilik seviyeleri ve daha fazla üretkenlik sağlar. Altyapı mühendisliği ve detaylandırma yazılımınızdan daha fazlasını bekleyin!"
      customHero={customHero}
      stats={stats}
      challenges={challenges}
      reasons={reasons}
      reasonsVariant="benefits"
      statsVariant="animated"
      postHeroSection={postHeroSection}
      preWorkflowSection={preWorkflowSection}
      ctaTitle="Allplan'ı ücretsiz deneyin"
      ctaDescription="Limanlar ve barajlardan yollara, tünellere ve köprülere kadar inşaat mühendisliği ve altyapı projeleri için doğru tasarım ve detaylandırma bilgi, esneklik ve hassas araçlar gerektirir."
    />
  );
}
