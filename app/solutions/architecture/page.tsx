"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import WorkflowTabsTemplate from "@/components/WorkflowTabsTemplate";
import heroImage from "@/assets/solutions/architecture-hero.jpg";

import icon1 from "@/assets/solutions/architecture/reasons/work_way_want.png";
import icon2 from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-powerful_modeling.png";
import icon3 from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-productive_collab.png";
import icon4 from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-interdisciplinary_aec_design.png";
import icon5 from "@/assets/solutions/architecture/reasons/excel_across_design_phases.png";
import icon6 from "@/assets/solutions/architecture/reasons/convincing_visualizations.png";
import icon7 from "@/assets/solutions/architecture/reasons/planable_multi_materials.png";
import icon8 from "@/assets/solutions/architecture/reasons/excel_across_design_phases.png";
import icon9 from "@/assets/solutions/architecture/reasons/realiable_earlier_cost_estimates.png";
import icon10 from "@/assets/solutions/architecture/reasons/improved_change_management.png";
import icon11 from "@/assets/solutions/architecture/reasons/superior_quality_deliverables.png";
import icon12 from "@/assets/solutions/architecture/reasons/enhanced_project_comm.png";

import wf1_1 from "@/assets/solutions/architecture/workflows/concept/concept-optimize-site-potential.png";
import wf1_2 from "@/assets/solutions/architecture/workflows/concept/concept-understand-site.png";
import wf1_3 from "@/assets/solutions/architecture/workflows/concept/quickly-get-started.png";
import wf1_4 from "@/assets/solutions/architecture/workflows/concept/concept-evolve-design.png";
import wf1_5 from "@/assets/solutions/architecture/workflows/concept/concept-reliable-structured-data.png";

import dev_transition from "@/assets/solutions/architecture/workflows/development/development-transition.png";
import dev_smoothly_evolve from "@/assets/solutions/architecture/workflows/development/development-smoothly-evolve.png";
import dev_easily_assess from "@/assets/solutions/architecture/workflows/development/development-easily-assess.png";
import dev_powerful_tools from "@/assets/solutions/architecture/workflows/development/development-powerful-tools.png";
import dev_present_visualize from "@/assets/solutions/architecture/workflows/development/development-present-visualize.png";

import det_evaluate from "@/assets/solutions/architecture/workflows/detail/detail-evaluate.png";
import det_easily_detail from "@/assets/solutions/architecture/workflows/detail/detail-easily-detail.png";
import det_design_manage from "@/assets/solutions/architecture/workflows/detail/detail-design-manage.png";
import det_create_realistic from "@/assets/solutions/architecture/workflows/detail/detail-create-realistic.png";
import det_manage_design_changes from "@/assets/solutions/architecture/workflows/detail/detail-manage-design-changes.png";
import det_manage_rooms_units from "@/assets/solutions/architecture/workflows/detail/detail-manage-rooms-units.png";
import det_verify from "@/assets/solutions/architecture/workflows/detail/detail-verify.png";
import det_compile from "@/assets/solutions/architecture/workflows/detail/detail-compile.png";

import wf4_1 from "@/assets/solutions/architecture/workflows/execution/execution-reliably-extract-drawings.png";
import wf4_2 from "@/assets/solutions/architecture/workflows/execution/execution-organize.png";
import wf4_3 from "@/assets/solutions/architecture/workflows/execution/execution-design-various-materials.png";
import wf4_4 from "@/assets/solutions/architecture/workflows/execution/execution-collaborate-coordinate.png";
import wf4_5 from "@/assets/solutions/architecture/workflows/execution/execution-exchange-structural-engineers.png";

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
  { title: "İSTEDİĞİNİZ GİBİ ÇALIŞIN", description: "2B, 2.5B ve 3B'de esnek iş akışlarının yanı sıra tam obje yönelimli BIM çalışma metodolojisi.", image: icon1 },
  { title: "GÜÇLÜ ve SEZGİSEL MODELLEME", description: "Bina bileşenlerini hızla geliştirmek ve daha kısa sürede inşaat belgeleri oluşturmak için güçlü araçlarla desteklenen, herhangi bir şekli kolayca modelleme özgürlüğü.", image: icon2 },
  { title: "ÜRETKEN İŞBİRLİĞİ", description: "Çok kullanıcılı gerçek zamanlı çalışma için entegre bulut teknolojisinin yanı sıra iş ortaklarıyla model ve proje işbirliği.", image: icon3 },
  { title: "GERÇEK DİSİPLİNLER ARASI AEC TASARIMI", description: "Mimari tasarım, yapı mühendisliği ve MEP hizmetleri tasarımı ve detaylandırması için tek bir yazılım çözümü.", image: icon4 },
  { title: "ETKİN OPEN BIM", description: "Çoklu değişim formatları, IFC4 RV içe/dışa aktarma ve işbirliğine dayalı OPEN BIM veri platformu Bimplus ile kolayca veri alışverişi yapın.", image: icon5 },
  { title: "İKNA EDİCİ GÖRSELLEŞTİRMELER", description: "2B, 2.5B ve 3B'de esnek iş akışlarının yanı sıra tam obje yönelimli BIM çalışma metodolojisi.", image: icon6 },
  { title: "ÇOKLU MALZEMEYLE PLANLAMA", description: "Geliştirilmiş inşa edilebilirlik ve sürdürülebilirlik için yerinde dökme/prekast beton, çelik ve ahşap dahil malzemeleri ve inşaat yaklaşımlarını optimize edin.", image: icon7 },
  { title: "TÜM TASARIM AŞAMALARINDA EXCEL", description: "2B, 2.5B ve 3B'de esnek iş akışlarının yanı sıra tam obje yönelimli BIM çalışma metodolojisi.", image: icon8 },
  { title: "GÜVENİLİR ERKEN MALİYET TAHMİNLERİ", description: "Doğru teklifler için ayrıntılı listeleri kullanarak metrajları ve malzemeleri daha erken bir aşamada hızlı ve hassas bir şekilde hesaplayın.", image: icon9 },
  { title: "GELİŞTİRİLMİŞ DEĞİŞİM YÖNETİMİ", description: "Çizimlerde veya modelde yalnızca bir kez düzenleyerek çıktılar arasında otomatik olarak yapılan değişikliklerle zamandan tasarruf edin.", image: icon10 },
  { title: "ÜSTÜN KALİTELİ TESLİMATLAR", description: "Doğrudan 3B modelden hızlı ve doğru bir şekilde planlar, çizimler ve raporlar oluşturun ve yüksek kaliteli belgeler için bilgi alışverişini kontrol edin.", image: icon11 },
  { title: "GELİŞTİRİLMİŞ PROJE İLETİŞİMİ", description: "Bulut tabanlı platform kullanarak inşaat ekipleriyle ayrıntılı tasarımları koordine edin – Net ve şeffaf iletişim için Bimplus", image: icon12 },
];

const workflowCategories = [
  {
    key: "concept",
    label: "Ön ve Konsept Tasarım",
    items: [
      { title: "Hızlıca Başlayın", description: "Tasarımınızı optimize etmek için projenize tüm saha gereksinimleri açıkça entegre edilmiş şekilde başlayın. Planlama Yetkililerinden çeşitli formatları ve verileri içe aktarın, proje çerçeve koşullarını netleştirin ve hızla başlayın. Kolayca yapı elemanlarına dönüştürülen PDF dosyalarıyla zamandan tasarruf edin ve mükerrer çalışmalardan kaçının.", image: wf1_3 },
      { title: "Güvenilir Yapılandırılmış Veri", description: "Dijital eskiz kağıdının etkisi, Allplan'da verilerin çizim dosyaları halinde yapılandırılmasıyla elde edilir. As-built verileri planlama için temel olarak kullanılabilir ve alttaki zeminler takip edenler için başlangıç noktası olarak hizmet edebilir.", image: wf1_5 },
      { title: "Şantiyenizi Anlayın", description: "Mevcut şantiye özelliklerini zahmetsizce birleştirin. Konturlar veya noktalar biçimindeki saha bilgilerini hızla gerçekçi ve hassas dijital arazi modellerine dönüştürün. Daha iyi bir tasarım kalitesi için çevrenizi görselleştirin, anlayın ve şantiyedeki gerçek koşulları değerlendirin.", image: wf1_2 },
      { title: "Şantiye Planlarını ve Potansiyeli Optimize Edin", description: "2B planları kolayca görselleştirin, ayrı ayrı tasarlayın ve tasarımınızın şantiye planı içindeki temsilini optimize etmek için gölgeler gibi özellikleri hızla ekleyin. Tasarımınızın kalitesini artırmak için gerçekçi yönler sunarak saha planı çıktılarını geliştirin.", image: wf1_1 },
      { title: "Tasarımınızı Hacim Modeline Dönüştürün", description: "Tasarım fikirlerinizi ve vizyonunuzu hızla hayata geçirmek için güçlü ve esnek araçlarla konseptinizi hayata geçirin. 3B modelin aynı anda oluşturulacağı şekilde ayak iziniz üzerinde 2B olarak çalışmanın veya doğrudan 3B olarak çalışmanın avantajından yararlanın. 2B çalışma görünümlerinden yararlanırken 3B çalışmaya güvenle geçin.", image: wf1_4 },
    ],
  },
  {
    key: "design",
    label: "Tasarım Geliştirmek",
    items: [
      { title: "Hacimden Bileşen Modeline Geçiş", description: "Otomatik araçlarla konseptinizden gelişmiş bir tasarıma hızla geçin. Hacim konseptinden kolayca bileşen tabanlı bir model oluşturun. Tasarımınızı hızla geliştirebilmek için gerçekçi ve akıllı bileşenler kullanarak tasarım çalışmalarını hızlandırın.", image: dev_transition },
      { title: "Taslaktan Detaya Sorunsuz Bir Şekilde Geliştirin", description: "Allplan'da çalışırken mevcut veriler en iyi şekilde kullanılır; böylece inşa edilen model her proje aşamasında gelişmeye devam eder. Mevcut veriler, modelleme veya bilgi derinliği açısından rafine edilir ve zenginleştirilir.", image: dev_smoothly_evolve },
      { title: "Farklı Değişkenleri Kolayca Değerlendirin", description: "Farklı varyasyonlara ve bunların avantajlarına rahatça odaklanın; Çatı tasarım seçeneklerini kolayca değerlendirin ve standartlara uygunluğu sağlayın. Hızlı değişiklikler veya negatif eğimler gibi çeşitli çatı modelleme seçeneklerinden yararlanın.", image: dev_easily_assess },
      { title: "Görünümler ve Kesitler için Güçlü Araçlar", description: "Planlarınızı ve paftalarınızı doğru bir şekilde üretmek için ihtiyaç duyduğunuz görünümlere ve kesitlere kolayca erişin ve bunları hazırlayın. Tasarımlarınızı görselleştirin ve sunun, inşa edilebilirliğini kontrol edin ve kat planlarını dikey tasarım boyutunda bir araya getirin. Gerekli stil ve formatta çizimleri hızla üretmek için güçlü araçlardan yararlanın. Modelde yapılan değişiklikler görünümlerinizde ve kesitlerinizde otomatik olarak güncellendiğinden zamandan tasarruf edin.", image: dev_powerful_tools },
      { title: "Fikirleri ve Tasarımları Sunun ve Görselleştirin", description: "Allplan, ilk konseptlerden detaylı izlenecek yollara kadar fikirlerinizi sunmak ve görselleştirmek için çeşitli araçlar sunar. Müşterilerin binayı anlamasını sağlamak, Render araçlarıyla veya LUMION arayüzü aracılığıyla ikna edici görselleştirmeler oluşturmak ve Bimplus’taki inşaat toplantılarında projelerinizi koordine etmek ve tartışmak için modelleri kolayca erişilebilen bir 3B PDF’e aktarın.", image: dev_present_visualize },
    ],
  },
  {
    key: "detailed",
    label: "Detaylı Tasarım",
    items: [
      { title: "Başlangıç Maliyetlerini Değerlendirin", description: "Kapı listeleri, pencereler, kaplamalar, işçilikler, inşaat malzemeleri vb. raporlara dayalı olarak maliyet tahminlerini hızla modelleyin. Anında kullanabileceğiniz veya ihtiyacınız olan formata veya paftaya aktarabileceğiniz raporlardan yararlanın.", image: det_evaluate },
      { title: "Parametrik Boşluk Tasarımlarını Kolayca Detaylandırın", description: "Uygulamaları planlamak ve inşa edilebilirlik kontrolleri için ayrıntıları tasarımınıza uygulayın. Pencereleri, kapıları vb. tasarlamak için güçlü parametrik araçlardan yararlanın. Belirli standartlara göre bireysel tasarımlar oluşturun.", image: det_easily_detail },
      { title: "Akıllı Oda Kaplamalarını Tasarlayın ve Yönetin", description: "Sezgisel programlamanın avantajlarından yararlanın. Oda kaplamaları, odalara tek tek elemanlar olarak değil, bütünüyle akıllıca uygulanır. Bu, kaplama işlemlerinin merkezi olarak yönetilmesini sağlar.", image: det_design_manage },
      { title: "Gerçekçi İç Mekanlar Yaratın", description: "Tasarımlarınızı döşemek için gerçekçi unsurlar uygulayın. Oda iç mekanlarını hızlı bir şekilde tasarlamak, projeniz genelinde kolayca çoğaltmak ve her oda için anında envanter çıkarmak için kütüphane elemanlarını kolayca uygulayın.", image: det_create_realistic },
      { title: "Tasarım Değişikliklerini Yönet", description: "Objelerin akıllı parametrik ayarlamasıyla tasarımlarınızdaki değişiklikleri yönetin. Tasarım değişikliklerini saniyeler içinde uygulamak için değişiklikleri evrensel olarak uygulayın.", image: det_manage_design_changes },
      { title: "Odaları ve Birimleri Yönetin", description: "Kat alanını anında gözden geçirmek için tek tek odaları veya kat gibi oda gruplarını kolayca analiz edin. Yatırım amaçlı alanı veya odalara tahsis edilen envanter unsurlarını hesaplayın.", image: det_manage_rooms_units },
      { title: "Yasal Gereksinimleri Doğrulayın", description: "Bina uygulamanıza yönelik özel hesaplamaların otomatik olarak oluşturulması için, mümkün olduğunda, Alman DIN 277 gibi ilgili bölgesel normları uygulayın.", image: det_verify },
      { title: "Nihai Uygulama Çiziminin Derlenmesi", description: "Şematik tasarım, sunum çizimleri, inşaat veya uygulama planları gibi tüm ihtiyaçlara uygun sunum tarzında çizimlerinizi kolaylıkla üretin. Üstün gösterim sunmak için hızlı ve sezgisel araçlardan yararlanın.", image: det_compile },
    ],
  },
  {
    key: "execution",
    label: "Yürütme Planlaması",
    items: [
      { title: "Prefabrik Beton Gibi Çeşitli Malzemelerle Tasarım", description: "Prefabrik beton bireysel, canlı ve renkli olabilir; eğimli prekast duvarlar, yaratıcı cephe tasarımı için yapısal matrisler veya renkli beton, mimari vizyonların gerçekleştirilmesi için bol miktarda özgürlük sunar. Şimdi Allplan'daki entegre prefabrik fonksiyonları keşfedin.", image: wf4_3 },
      { title: "Gerekli Detaylara Sahip Çizimlerin Güvenilir Bir Şekilde Çıkarılması", description: "Allplan'da çizim oluşturmak, onları 3 boyutlu modelden çıkarmak kadar basittir. Bu, günlük iş akışını son derece kolaylaştırır. İlk yerleşimden sonra, modelin kendisinde veya özel çizim ekranında birçok değişiklik yapılabilir.", image: wf4_1 },
      { title: "Proje Verilerini Organize Edin, Zenginleştirin ve Analiz Edin", description: "Allplan'daki verilerin çizim dosyası sistemi aracılığıyla etkin ve mantıksal yönetimi, yalnızca uygulamadaki performansı artırmakla kalmaz, aynı zamanda kullanıcının bireysel model alanlarını düzenlerken kendi performansını da artırır.", image: wf4_2 },
      { title: "Proje Ortaklarıyla İşbirliği ve Koordinasyon Yapın", description: "Senkronize Allplan ve Bimplus Konu Yönetimi ile görevlerin koordinasyonu, özellikle BIM yönetimi ve BIM koordinasyonunda gerçek bir avantajdır. Model kontrolü ve kalite kontrolü için Bimplus'tan Solibri'ye bir arayüz geliştirildi.", image: wf4_4 },
      { title: "Yapı Mühendisi ile Değişim", description: "Bimplus, yapı mühendisleriyle çalışırken (SCIA) AutoConverter aracılığıyla avantaj sunar. Yapısal tasarımcılarla geliştirilmiş ve hızlandırılmış iletişim, daha hızlı inceleme ve karar üzerinde doğrudan etkiye sahiptir.", image: wf4_5 },
    ],
  },
];

const preWorkflowSection = (
  <WorkflowTabsTemplate
    title="Mimari İş Akışları"
    subtitle="Fikir aşamasından teslimata kadar kesintisiz ve verimli süreçler."
    categories={workflowCategories}
    theme="v2-dark"
  />
);

const postHeroSection = (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">MİMARİ İÇİN ALLPLAN – BIM ÇÖZÜMLERİ</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">Müstakil evlerden olağanüstü önemli projelere kadar, çarpıcı mimari tasarım ve güvenilir proje teslimi için bilgi, yaratıcılık ve hassas araçlar gerekir.</p>
          <p className="text-muted-foreground leading-relaxed">Allplan ile konseptlerinizi kolayca oluşturabilir ve görselleştirebilir, değişkenleri hızlı bir şekilde detaylandırabilir, zahmetsizce işbirliği yapabilir, değişiklikleri verimli bir şekilde yönetebilir ve tasarımlarınızın daha başarılı bir şekilde gerçekleştirilmesini sağlamak için kesin metrajlarla hızlı bir şekilde doğru raporlar oluşturabilirsiniz.</p>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SnuaHSL18e8"
            title="Allplan Architecture"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

const customHero = (
  <SolutionHero
    badge="BİNA TASARIMI"
    title="MİMARİ"
    subtitle="DAHA FAZLASINI İSTEYEN MİMARLAR İÇİN."
    description="ALLPLAN'in mimariye yönelik BIM çözümleri, verimli tasarım ve sorunsuz proje yönetimi için tüm tasarımı inşa sürecine de taşır. İşbirliğine dayalı iş akışları, tüm proje yaşam döngüsü boyunca artan hassasiyet ve daha fazla üretkenlik sağlar. Mimari tasarım yazılımınızdan daha fazlasını bekleyin!"
  />
);

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="BİNA TASARIMI"
      title="MİMARİ"
      subtitle="DAHA FAZLASINI İSTEYEN MİMARLAR İÇİN."
      description="ALLPLAN'in mimariye yönelik BIM çözümleri, verimli tasarım ve sorunsuz proje yönetimi için tüm tasarımı inşa sürecine de taşır. İşbirliğine dayalı iş akışları, tüm proje yaşam döngüsü boyunca artan hassasiyet ve daha fazla üretkenlik sağlar. Mimari tasarım yazılımınızdan daha fazlasını bekleyin!"
      customHero={customHero}
      stats={stats}
      statsVariant="animated"
      challenges={challenges}
      reasons={reasons}
      reasonsVariant="benefits"
      postHeroSection={postHeroSection}
      preWorkflowSection={preWorkflowSection}
      showCta={false}
      theme="v2-dark"
    />
  )
}
