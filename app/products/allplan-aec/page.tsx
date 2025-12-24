"use client"
import ProductPageTemplate from "@/components/ProductPageTemplate";
import reasonWorkWayWant from "@/assets/solutions/architecture/reasons/work_way_want.png";
import reasonPowerfulModeling from "@/assets/solutions/architecture/reasons/structural-engineering-allplan-turkey-powerful_modeling.png";
import reasonProductiveCollab from "@/assets/solutions/steel/reasons/productive_collab-1.png";
import reasonConvincingVisualizations from "@/assets/solutions/architecture/reasons/convincing_visualizations.png";
import reasonEasyModifyRequirements from "@/assets/solutions/steel/reasons/easyliy_modify_requirements-1.png";
import reasonAccurateDeliverables from "@/assets/solutions/bridge/reasons/more_accurate_deliverables-2.png";
import archAdvancedComponents from "@/assets/products/allplan-aec/features/architectural/csm_01_AdvancedBuildingComp_01bcb8c1e3.png";
import archFreeform from "@/assets/products/allplan-aec/features/architectural/csm_02_Freeform_c8aee8b2af.png";
import archQTO from "@/assets/products/allplan-aec/features/architectural/csm_03_QTO_e8d5e86c3b.png";
import archRenderer from "@/assets/products/allplan-aec/features/architectural/csm_04_Renderer_34b99cef7e.png";
import archLayouts from "@/assets/products/allplan-aec/features/architectural/csm_05_Layouts_25d5abaab1.png";
import str3DModeling from "@/assets/products/allplan-aec/features/structural/csm_06_3DModeling_e83f7b4832.png";
import strViewsSections from "@/assets/products/allplan-aec/features/structural/csm_07_ViewsAndSections_feb418a4ca.png";
import strReinforcement from "@/assets/products/allplan-aec/features/structural/csm_08_Reinforcement_cf8d04bb95.png";
import strPrecastDetailing from "@/assets/products/allplan-aec/features/structural/09_PrecastDetailing.jpg";
import strSteel from "@/assets/products/allplan-aec/features/structural/csm_10_Steel_c9b24a3093.png";
import infraFreeform from "@/assets/products/allplan-aec/features/infrastructure/csm_11_Unlimited_Freeform_9b03808098.png";
import infraTerrain from "@/assets/products/allplan-aec/features/infrastructure/csm_12_Terrain_f40a5044dc.png";
import infraParamRoad from "@/assets/products/allplan-aec/features/infrastructure/csm_13_Road_b54aff2f40.png";
import infraSiteTools from "@/assets/products/allplan-aec/features/infrastructure/csm_14_Utilities_378d4e11b9.png";
import infraComplexRebar from "@/assets/products/allplan-aec/features/infrastructure/15_Reinforcement.jpg";
import precastAutomated from "@/assets/products/precast/automated-precast-design.jpg";
import precastImportBIM from "@/assets/products/allplan-aec/features/precast/csm_2_automated-shop-drawings_ba890fa1a8.jpg";
import precastParamModel from "@/assets/products/precast/parametric-modeling.jpg";
import precastAutomatedFab from "@/assets/products/precast/highly-automated-fabrication.jpg";
import siteFast3D from "@/assets/products/allplan-aec/features/site-planning/16_2D3D.jpg";
import siteTenderModels from "@/assets/products/allplan-aec/features/site-planning/csm_17_Tender_f7b9b5db47.png";
import siteTools from "@/assets/products/allplan-aec/features/site-planning/18_Toolbox.jpg";
import siteModelPlanning from "@/assets/products/allplan-aec/features/site-planning/csm_19_Scheduling_895b368082.png";
import siteBIM2Site from "@/assets/products/allplan-aec/features/site-planning/csm_20_BIM2Site_86b23b21ec.png";
import collIssueMgmt from "@/assets/products/allplan-aec/features/collaboration/csm_21_Issue_fbaae16f74.png";
import collDocMgmt from "@/assets/products/allplan-aec/features/collaboration/csm_22_Document_a57ec305e5.png";
import collCoordination from "@/assets/products/allplan-aec/features/collaboration/csm_23_Coord_555eebf94b.png";
import collWorkAnywhere from "@/assets/products/allplan-aec/features/collaboration/csm_25_Together_5a2c578657.png";
import heroImg from "@/assets/products/allplan-aec/hero-new.jpg";

const whatIsInfoMedia = {
  title: "ALLPLAN NEDİR?",
  descriptions: [
    "Allplan, tüm proje aşamaları boyunca tasarım ve inşaat sürecini destekleyen ve entegre eden mimari, mühendislik ve inşaat için disiplinler arası BIM yazılım çözümüdür.",
    "Mimari ve iç mimariden yapısal ve MEP mühendisliğine, inşaat ve köprü mühendisliğine, donatılı betonarme ve prekast detaylandırmadan şantiye planlamasına kadar",
    "Konseptten ayrıntılı inşaat paftalarına kadar tüm disiplinlerde verimli iş akışlarını desteklemek için güçlü araçlar",
    "Verimli işbirliği ve daha başarılı teslimler için entegre bulut teknolojisi.",
  ],
  videoUrl: "https://www.youtube.com/embed/tFnwOyX7ncI",
};

const benefitsItems = [
  { title: "TEK YAZILIMLA TAM ÇÖZÜM", description: "Küçükten son derece karmaşık olana kadar her tür inşaat için uygundur, büyük model verilerini hızlı ve güvenli bir şekilde kayıp olmadan kolayca işler.", image: reasonWorkWayWant },
  { title: "İSTEDİĞİNİZ GİBİ ÇALIŞIN", description: "2B, 2.5B ve 3B'de esnek iş akışlarının yanı sıra tam obje yönelimli BIM çalışma metodolojisi.", image: reasonPowerfulModeling },
  { title: "ÜRETKEN İŞBİRLİĞİ", description: "Çok kullanıcılı gerçek zamanlı çalışma için entegre bulut teknolojisinin yanı sıra iş ortaklarıyla model ve proje işbirliği.", image: reasonProductiveCollab },
  { title: "İKNA EDİCİ GÖRSELLEŞTİRMELER", description: "Projelerin hızlı ve kaliteli sunumunu sağlayan araçlar; müşterileri ve paydaşları tasarıma anında ikna eder.", image: reasonConvincingVisualizations },
  { title: "GEREKSİNİMLERİ KOLAYCA DEĞİŞTİRİN", description: "Planları sıfırdan yeniden modellemek zorunda kalmadan uyarlayın ve değiştirin, zamandan tasarruf edin ve değişikliklere daha kolay ve hızlı yanıt verin.", image: reasonEasyModifyRequirements },
  { title: "ÜSTÜN KALİTELİ TESLİMATLAR", description: "Doğrudan 3B modelden hızlı ve doğru bir şekilde planlar, çizimler ve raporlar oluşturun ve yüksek kaliteli belgeler için bilgi alışverişini kontrol edin.", image: reasonAccurateDeliverables },
];

const tabFeatures = {
  title: "Allplan AEC'nin Özellikleri",
  subtitle: "Mimari ve Yapısal Mühendislik için güçlü araçlar",
  tabs: [
    {
      id: "mimari", title: "Mimari", subtabs: [
        { id: "gelismis-yapi-bilesenleri", title: "Gelişmiş Yapı Bileşenleri", content: "Kullanıma hazır sihirbazlar aracılığıyla, 2.5D’de bile bileşenleri kullanarak projenizi hızla oluşturun.", image: archAdvancedComponents },
        { id: "serbest-bicim-modelleme", title: "Sınırsız 3B Serbest Biçim Modellemesi", content: "Kolayca herhangi bir şekle sahip objeler oluşturun ve yaratıcılığınızı ve hayal gücünüzü özgürce ifade edin.", image: archFreeform },
        { id: "metraj-raporlar", title: "Hassas Metrajlar ve Raporlar", content: "Modelinizi güvenilir bir şekilde hesaplayın, proje gelişiminizi belgeleyin, satış sunumları oluşturun ve ayrıntılı listeleri kullanarak ihaleye hazırlanın.", image: archQTO },
        { id: "gorsellestirme-araclari", title: "Entegre Görselleştirme Araçları", content: "Gerçek Zamanlı Render, 3B PDF’ler, Lumion Live-Sync ve eskizler ile planlanan projeyi daha iyi anlamak için görselleştirin.", image: archRenderer },
        { id: "mukemmel-paftalar", title: "Mükemmel Paftalar", content: "Müşteriler ve yükleniciler için hızlı ve kolay bir şekilde planlar, çizimler ve sunumlar oluşturun.", image: archLayouts },
      ]
    },
    {
      id: "yapisal", title: "Yapısal Mühendislik", subtabs: [
        { id: "kapsamli-3b-modelleme", title: "Kapsamlı 3B Modelleme", content: "Duvarlar, döşemeler ve kolonlar gibi parametrik standart elemanlarla zahmetsizce modelleyin.", image: str3DModeling },
        { id: "gorunumler-kesitler", title: "Ölçülü Görünümler ve Kesitler", content: "Tüm teslimatlar genelinde otomatik değişikliklerle zamandan tasarruf edin; modelde veya teknik resimlerde düzenleyin.", image: strViewsSections },
        { id: "hassas-3b-donatilandirma", title: "Hassas 3B Donatılandırma", content: "Yapı elemanlarına yönelik otomatik çözümlerle donatılandırma gereksinimlerini kolay ve hızlı şekilde detaylandırın.", image: strReinforcement },
        { id: "hizli-prekast-detaylandirma", title: "Hızlı Prekast Detaylandırma", content: "Prekast elemanlar için üretime hazır detaylandırmayı hızla oluşturun.", image: strPrecastDetailing },
        { id: "str-celik-araclari", title: "Strüktürel Çelik Araçları", content: "Merdivenler, korkuluklar ve karmaşık geometri dahil olmak üzere çeşitli çelik elemanları hızlı ve doğru bir şekilde modellemek için otomatik araçlar.", image: strSteel },
      ]
    },
  ],
};

const workflowCategories = [
  { key: "mimari", label: "Mimari", items: tabFeatures.tabs[0].subtabs.map((s) => ({ title: s.title, description: s.content, image: s.image })) },
  { key: "str", label: "Strüktürel Mühendislik", items: tabFeatures.tabs[1].subtabs.map((s) => ({ title: s.title, description: s.content, image: s.image })) },
  {
    key: "alt-yapi", label: "Altyapı Mühendisliği", items: [
      { title: "Sınırsız 3B Serbest Biçim Modellemesi", description: "Her tür karmaşık obje için güçlü serbest biçimli modelleme araçları.", image: infraFreeform },
      { title: "Güçlü Arazi Modellemesi", description: "Arazileri doğru ve hızlı şekilde modelleyin, sahayı güvenilir şekilde tasarlayın.", image: infraTerrain },
      { title: "Parametrik Yol Modellemesi", description: "Yol elemanlarını tamamen parametrik yerleştirin ve uyarlayın.", image: infraParamRoad },
      { title: "Gelişmiş Yardımcı Araçlar", description: "Şantiye ve altyapı planlamasını destekleyen kapsamlı yardımcı araçlar.", image: infraSiteTools },
      { title: "Karmaşık Donatı Detaylandırma", description: "Zor geometri ve değişken kesitlerde donatı detaylandırmayı hassas ve hızlı yapın.", image: infraComplexRebar },
    ]
  },
  {
    key: "prekast", label: "Prefabrik Üretim", items: [
      { title: "Otomatik Prefabrik Tasarım", description: "Prekast elemanları otomatik ve doğru şekilde tasarlayın.", image: precastAutomated },
      { title: "BIM Modellerini İçe Aktar", description: "Harici BIM modellerini kolayca içe aktarın ve entegre edin.", image: precastImportBIM },
      { title: "Parametrik Giriş ve Serbest Biçimli Modelleme", description: "Parametrik tanımlar ve serbest biçimli modellemeyi birlikte kullanın.", image: precastParamModel },
      { title: "Yüksek Düzeyde Otomatik Üretime Yönelik Araçlar", description: "Üretim için yüksek otomasyon düzeyine sahip araçlarla verimi arttırın.", image: precastAutomatedFab },
    ]
  },
  {
    key: "santiye", label: "Şantiye Planlaması", items: [
      { title: "Hızla 2B’den 3B’ye", description: "2B’den 3B’ye hızlı geçiş ile planları model tabanına taşıyın.", image: siteFast3D },
      { title: "İhale Modellerinin Hazırlanması", description: "İhale süreçleri için model tabanlı hazırlık ve planlama.", image: siteTenderModels },
      { title: "Şantiye Araçları", description: "Şantiye yerleşimi ve ekipman planlaması için araçlar.", image: siteTools },
      { title: "Model Tabanlı Planlama", description: "Model tabanlı zaman planlama ve görsel akış.", image: siteModelPlanning },
      { title: "BIM2Site", description: "Sahada modelle bağlantılı çalışma.", image: siteBIM2Site },
    ]
  },
  {
    key: "isbirligi", label: "İşbirliği", items: [
      { title: "Üstün Konu (Sorun) Yönetimi", description: "Projelerde görev ve konu yönetimiyle koordinasyon sağlayın.", image: collIssueMgmt },
      { title: "Düzgün Belge Yönetimi", description: "Plan dağıtımı ve belge yönetimini merkezileştirin.", image: collDocMgmt },
      { title: "Modellerin Koordinasyonu", description: "Seamless entegrasyon ile model koordinasyonu gerçekleştirin.", image: collCoordination },
      { title: "Birlikte Çalışın – Her Yerde, Her Zaman", description: "Bulut depolama ve kaynaklarla her zaman beraber çalışın.", image: collWorkAnywhere },
    ]
  },
];

const additionalButtons = [
  { text: "PAKET KARŞILAŞTIRMASI", href: "https://aluplan.com.tr/wp-content/uploads/_Paket%20Kars%CC%A7%C4%B1las%CC%A7t%C4%B1rma-Q1-2025_R01.pdf", external: true, variant: "outline" as const },
  { text: "DENEME SÜRÜMÜ", href: "https://info.allplan.com/en/demo-download/cad-software-v2.html", external: true, variant: "outline" as const },
];

export default function Page() {
  return (
    <ProductPageTemplate
      badge="BİNA VE ALTYAPI"
      title="ALLPLAN 2025"
      subtitle="THE ULTIMATE BIM SOLUTION FOR AEC PROFESSIONALS FROM DESIGN TO BUILD"
      description="ALLPLAN'in mimariye yönelik BIM çözümleri, verimli tasarım ve sorunsuz proje yönetimi için tüm tasarımı inşa sürecine de taşır. İşbirliğine dayalı iş akışları, tüm proje yaşam döngüsü boyunca artan hassasiyet ve daha fazla üretkenlik sağlar. Mimari tasarım yazılımınızdan daha fazlasını bekleyin!"
      heroImage={heroImg}
      ctaTitle="Ücretsiz Dene"
      ctaHref="https://www.allplan.com/trial-or-subscription/"
      ctaExternal={true}
      additionalButtons={[
        { text: "Teklif Talep Formu", href: "https://forms.office.com/r/hXhnKAG912", external: true, variant: "outline" },
        { text: "Abonelik SSS", href: "/solutions-v2/faq", external: false, variant: "outline" }
      ]}
      whatIsInfoMedia={whatIsInfoMedia}
      benefitsItems={benefitsItems}
      workflowCategories={workflowCategories}
      statsItems={[
        { label: "YÜKSEK PERFORMANS", value: "45%", description: "Paydaş onayı ve zamanında inşaat için fikirlerden en yüksek ayrıntı seviyelerine daha hızlı geçiş." },
        { label: "DAHA FAZLA HASSASİYET", value: "65%", description: "Daha erken bir aşamada daha hassas verilerin verimli bir şekilde üretilmesi, tüm proje yaşam döngüsü boyunca güvenilir maliyet kontrolü sağlar." },
        { label: "DAHA FAZLA PROJE KAZAN", value: "35%", description: "Tasarım verimliliğini artırır, zamanında teslimatı destekler, daha yüksek kalitede, daha fazla proje üzerinde çalışılmasını sağlar." },
      ]}
      statsVariant="animated"
      challenges={[
        "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri.",
        "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri.",
        "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri.",
      ]}
      tabFeatures={tabFeatures}
    />
  );
}
