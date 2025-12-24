"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import terrainVideo from "@/assets/solutions/bridge/features/01_Terrain_visualization_with_parametric_referencing_Video.mp4";
import importSuperelevationImage from "@/assets/solutions/bridge/features/csm_02_Import_of_super-elevation_data_via_Allplan_Cloud_1c567fda80-768x431.jpg";
import parametricReinfVideo from "@/assets/solutions/bridge/features/03_Parametric_Reinforcement_Connection_Video.mp4";
import freeParamModelingImage from "@/assets/solutions/bridge/features/csm_04_Free_Parametric_modeling_2.0_a03a10dd38-768x431.jpg";
import cantileverVideo from "@/assets/solutions/bridge/features/05_Specialized_loads_for_cantilever_construction_method_Video.mp4";
import nationalStandardsImage from "@/assets/solutions/bridge/features/csm_06_Easily_design_to_key_national_standards_04aad0ab45-768x431.png";
import reportingToolImage from "@/assets/solutions/bridge/features/csm_07_Allplan_Bridge_Reporting_Tool_b57ea20487-768x431.jpg";
import summaryReportImage from "@/assets/solutions/bridge/features/csm_08_Automatic_summary_of_the_design_and_code_checking_4d3bcb9f58-768x431.png";
import compositeAnalysisVideo from "@/assets/solutions/bridge/features/09_Structural_analysis_of_Composite_bridges.mp4";
import designFeaturesImage from "@/assets/solutions/bridge/features/2D-Diagrams-768x432.jpg";
import furtherFeaturesVideo from "@/assets/solutions/bridge/features/11_Further_new_features_and_improvements.mp4";
import { StaticImageData } from "next/image";

type InfoBlock = {
  title: string;
  subtitle?: string;
  description?: string;
  descriptions?: string[];
  imageSrc?: string | StaticImageData;
  videoSrc?: string;
};

const title = "Allplan Bridge  Özellikleri";
const subtitle = "Daha üretken, güçlü ve otomatikleştirilmiş köprü tasarımı iş akışlarıve.";
const description = "Allplan Bridge ile daha hızlı olun:";

const heroDescriptionNode = (
  <>
    <p className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl font-light">Allplan Bridge ile daha hızlı olun:</p>
    <p className="text-lg md:text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl font-light">Artan üretkenlik sayesinde<br />Genişletilmiş yapısal analiz sayesinde<br />Üstün tasarım kalitesiyle</p>
  </>
);

const infoBlocks: InfoBlock[] = [
  {
    title: "Parametrik referanslama ile arazi görselleştirmesi", descriptions: [
      "Yeni bir köprüyü bir ortama yerleştirirken büyük dikkat gerektiren başlıca hususlar köprünün işlevselliği, güvenliği ve estetik çekiciliğidir.",
      "Tasarım sürecinde yerel topoğrafya, su, toprak bileşimi, doğal ve insan yapımı engellerin varlığı gibi birçok faktörün araştırılması gerekmektedir. Doğrudan Allplan Bridge'de arazi görselleştirmesi ile tasarım süreci artık önemli ölçüde daha akıcı hale geldi.",
      "Yalnızca görselleştirme amacıyla değil, arazi aynı zamanda modelleme ve açıklıkların kontrol edilmesi için de kullanılabilir. Örneğin, otomatik olarak oluşturulan bir arazi aksını kullanarak bir iskele veya kazık gibi altyapıyı araziye göre referans almak mümkündür. Bu sadece modelleme için değil, aynı zamanda değişiklikler uygulandığında da kullanışlıdır - çünkü tam tanım parametrik olduğundan, örneğin kiriş yüksekliği gibi bir değişiklik uygulandığında iskele yüksekliği otomatik olarak ayarlanır.",
    ], videoSrc: terrainVideo
  },
  {
    title: "Allplan Cloud aracılığıyla dever verilerinin içe aktarılması", subtitle: "Daha verimli tasarım çalışması", descriptions: [
      "Aks ve kaplama geometrisi (kesit) normalde yol mühendisi tarafından tanımlanır. Aks, plan ve yükseklik geometrisi tarafından tanımlanır ve kaplama, bir veya daha fazla çapraz eğim ve aks boyunca değişen karşılık gelen genişlikler tarafından tanımlanır. Köprüleri modellerken tüm bunların dikkate alınması gerekir. Bu verinin tekrar girilmesini atlamak olmasa da en aza indirmek için, Allplan Bridge'de artık yalnızca aks geometrisini değil, aynı zamanda çapraz eğimin karşılık gelen tanımını/tanımlarını da içe aktarmak mümkün.",
    ], imageSrc: importSuperelevationImage
  },
  {
    title: "Parametrik Donatı Bağlantısı", subtitle: "Daha hızlı ve daha verimli detaylandırma", descriptions: [
      "Tatmin edici bir marjı korurken, makul bir zaman dilimi içinde gerekli kalite standartlarında BIM donatılandırma modellerini ve detay çizimlerini üretmek her zaman bir zorluktur. Üretkenliğe ve kârlılığa zarar vermeden kaliteyi sağlamak, proje türü ve konumu ne olursa olsun, her donatılandırma projesi için mühendislik ve detaylandırma şirketleri için sürekli bir zorluktur. ALLPLAN bunu anlıyor ve bu nedenle Allplan, yaygın donatı detaylandırma sorunlarının üstesinden gelmek için özel olarak geliştirildi.",
      "Allplan Bridge ile bir sonraki büyük adım atılıyor. İki parametrik teknoloji, parametrik tasarımdan inşaya çözüm sağlamak için birleştirildi; Allplan Bridge ve Allplan'daki PythonParts'ın parametrik modelleme çözümü. Allplan Köprü donatı setleri öncelikle donatı tasarımı ve kod kontrolü için tanımlanır ve bu donatı setleri artık Allplan'daki PythonPart teknolojisine parametrik olarak bağlanmıştır. Sadece boyuna, kesme ve burulma donatısının geometrisi değil, aynı zamanda çubukların konumu, çubuk sayısı ve çubuk çapları gibi diğer tüm bilgiler de Allplan'a aktarılır. Sonuç olarak, tasarımdan üretime tamamen parametrik bir iş akışı mümkün oluyor; bu da işin daha hızlı ve daha az hataya açık olmasını sağlıyor ve aynı zamanda daha yüksek kalite, üretkenlik ve karlılık sağlıyor.",
    ], videoSrc: parametricReinfVideo
  },
  {
    title: "Serbest Parametrik modelleme 2.0", subtitle: "Güçlü, esnek ve zaman kazandıran modelleme", descriptions: [
      "Allplan Bridge'de üç ana modelleme yöntemi vardır. İlk yaklaşım, tam bir geometri oluşturmak amacıyla bir kesitin ekstrüzyonu için aksın 3 boyutlu formunu kullanır. Bununla birlikte, köprü yapılarında, prefabrik kirişler gibi aksı takip etmeyen elemanların sıklıkla bulunması nedeniyle, bu köprü elemanları için özel olarak uyarlanmış başka bir modelleme yaklaşımı gerekliydi ve önceki versiyonlardan birinde uygulandı.",
      "2023 sürümünde üçüncü bir modelleme yaklaşımı yayınlandı: Serbest Parametrik modelleme. Versiyon 2024 ile bu modelleme yaklaşımı önemli ölçüde geliştirildi ve daha da güçlü hale geliyor çünkü Allplan Bridge'deki kiriş, iskele, bağlantı kirişi veya tabliye gibi herhangi bir modelleme elemanı bir 3B gövdeye dönüştürülür ve serbestçe kullanılır. Çıkarılan gövde herhangi bir değişikliğe kusursuz bir şekilde uyum sağladığı için model tamamen parametrik kalıyor. Ayrıca, çıkarılan gövde Boolean işlemleri için kullanılabilir, şablon olarak kullanılabilir ve modelleme alanı içinde serbestçe hareket ettirilebilir.",
      "Serbest parametrik modellemeye ilişkin bir başka gelişme, bir prizma şablonunda daha fazla prizma elemanının kullanılması ve bunların Boolean işlemleri kullanılarak birleştirilmesidir. Bu, bir köprü modeline birden çok kez kolayca yerleştirilip konumlandırılabilen ve kolaylıkla dışa aktarılıp diğer projelerde kullanılabilen şablonlar gibi abutmentler gibi daha karmaşık objelerin oluşturulmasına olanak sağlar.",
      "Gövde Konteynerleri bir başka güçlü gelişmedir. Kendi yerel koordinat sistemi içerisinde çalışan yeni bir obje türüdür. Bu sistem içerisinde kullanıcılar, 3B gövdelerin yerleştirilmesine olanak tanıyan konteyner orijini ile değişen ilişkilere sahip 3B yerleştirme noktalarını konumlandırabilirler. Gövde Konteynerleri, birden fazla gövde grubunu barındırma kapasitesine sahip olup, modelleme iş akışını daha da geliştirir ve daha karmaşık objelerin dahil edilmesini kolaylaştırır.",
    ], imageSrc: freeParamModelingImage
  },
  {
    title: "Otomatik olarak türetilen hesaplama eylemleri", subtitle: "Konsol yapım yöntemi için özel yükler", descriptions: [
      "Dengeli konsol yapım yöntemi, köprü yapımında sıklıkla kullanılan bir tekniktir. Bir iskeleden başlayarak, bireysel bölümler (prefabrik veya yerinde dökülmüş), simetrik veya simetrik olmayan bir sırayla her iki tarafta adım adım monte edilir. Form gezginleri, segmentleri oluşturmak için kullanılır ve aşamadan aşamaya ilerletilir. Bu döngü sırasında, köprüye, doğru yapısal ve zamana bağlı davranışı yansıtabilmek için uygun konum ve zaman noktasında dikkate alınması gereken çeşitli tipte yükler etkimektedir.",
      "Allplan Bridge'teki yeni dengeli konsol görevi, yalnızca form gezgininin geometrik verilerinin obje odaklı girdisini ve ayrıca belirli inşaat adımlarının zaman çizelgesini gerektirir. Tüm bu veriler net bir şekilde düzenlenmiş tek bir giriş penceresinde sağlanırken, kopçanın uygulanması/hareket ettirilmesi, segmentin dökülmesi/montajı, kendi ağırlığının uygulanması, tendonların ön gerilmesi gibi çok sayıda hesaplama işleminin otomatik olarak gerçekleştirilmesiyle sonuçlanacaktır. ve değişen tüm yük uygulamaları sırasında sünme ve büzülmenin uygun şekilde dikkate alınması.",
    ], videoSrc: cantileverVideo
  },
  {
    title: "EN'nin diğer ulusal ekleri", subtitle: "Temel ulusal standartlara göre kolayca tasarlayın", descriptions: [
      "Allplan Bridge'in kod tabanlı tasarım modülündeki en son versiyonunun geliştirilmesi, üç yeni ulusal ekin ve bunların özelliklerinin tanıtılmasına odaklandı. Ulusal eklerin en son geçerli versiyonunun uygulanması artık Almanya (DIN EN), Fransa (NF EN), İspanya (UNE EN), Birleşik Krallık (BS EN), Avusturya (ÖNORM EN) ve Polonya (PN EN) için mevcuttur. ). Tüm sınır durumları artık eke özgü sınır değerleri veya yöntemleri kapsamındadır ve raporlarda da bunlara atıfta bulunulmaktadır.",
    ], imageSrc: nationalStandardsImage
  },
  {
    title: "Allplan Bridge Raporlama Aracı", subtitle: "Raporlama sürecinde devrim yaratın", descriptions: [
      "Allplan Bridge iki dünyayı tek bir dünyada birleştiriyor ve bu sayede verimliliği, doğruluğu ve görsel etkiyi artıran bir dizi güçlü özellik sunarak raporlama sürecinde devrim yaratıyor. Tablolar, görüntüler, 2B ve 3B diyagramlar ve çok daha fazlası biçimindeki köprü tasarımı ve analiz verileri, kolayca bağlantılandırılabilir ve doğrudan MS Word belgelerine yerleştirilebilir. Bu, manuel veri girişi ve güncelleme ihtiyacını ortadan kaldırarak zamandan tasarruf sağlar ve hata riskini azaltır.",
      "Sürükle ve bırak sistemi, verilerin kullanıcı tanımlı raporlara kusursuz şekilde entegre edilmesini sağlar. Kurulan bağlantı tüm verilerin güncel olmasını sağlar. Bir Allplan Bridge projesinde yapılan, tasarım elemanlarında, hesaplamalarda, diyagramlarda, resimlerde, tablolarda ve tasarım parçalarında yapılan değişiklikler gibi değişiklikler otomatik olarak yapısal rapora yansıtılır. Bu gerçek zamanlı güncelleme özelliği, manuel güncelleme ihtiyacını ortadan kaldırarak doğruluk sağlar ve değerli zamandan tasarruf sağlar. Ayrıca, kullanıcıların ilgili sonuçları saklamasına ve filtrelemesine olanak tanıyan bir gönderi veritabanı da sağlanmaktadır. Bu, önemli verilere hızlı erişim ve analiz yapılmasına olanak tanır. Özel sorgular oluşturmak, filtreler uygulamak ve özel tablolar oluşturmak için kapsamlı verileri sıralamak mümkündür.",
      "Raporlama Aracının temel avantajları:",
      "MS Word AddIn - herkesin çalışmaya alışık olduğu aracı kullanma Dinamik Veri Bağlantısı (Parametrik) Gerçek Zamanlı Güncelleme Veritabanı sonrası kullanılarak özelleştirilebilir tablolar Görseller için kapsamlı destek",
    ], imageSrc: reportingToolImage
  },
  {
    title: "Özet raporu", subtitle: "Tasarımın otomatik özeti ve kod kontrolü", descriptions: [
      "Donatı tasarımı ve kod kontrol prosedürlerinin kapsamlı çıktı yetenekleri, yeni bir türle genişletildi. \"Özet Rapor\" olarak adlandırılan rapor, kod tasarımı ve kontrollerin ana sonuçlarına genel bir bakış sunar. Allplan Bridge kod kontrollerini uygun sonuç adlarıyla çalıştırır. Her bölüm için sonuçlar kaydedilir ve ardından, yönetim sonuçları, tüm sonuç adları ve tüm bölümler için bir döngüde filtrelenir. Daha sonra yönetim bölümleri ve sonuçları sıralanır, uç noktalar bulunur, genel bakış tabloları oluşturulur ve ayrıntılı sonuçlar özet rapora yerleştirilir.",
    ], imageSrc: summaryReportImage
  },
  {
    title: "Kompozit köprülerin yapısal analizi", subtitle: "Teknik önizleme: Kompozit köprüler için yeni analiz yetenekleri", descriptions: [
      "Kompozit yapılar, köprüler için tipik olarak çelik kirişler ve beton tabliye gibi farklı malzeme türlerinin yanı sıra, yerinde dökme betonarme tabliyeli prefabrik beton kirişler gibi farklı zamanlarda birleştirilen aynı türdeki malzemeleri birleştiren gelişmiş mühendislik çözümleridir. Ayrıca bu çözüm köprü rehabilitasyonunun hesaplanmasında da kullanılabilir.",
      "Allplan Bridge'in küresel yapısal analiz yetenekleri, kompozit yapıların davranışını doğru şekilde dikkate alacak şekilde geliştirildi. Örneğin, inşaat sırası hesaplaması yalnızca yeni eklenen yapısal bileşenleri değil aynı zamanda halihazırda etkinleştirilmiş kesit bileşenlerini de dikkate alır. Bu, sertlikte temel bir değişikliğe neden olur. Kompozit kesitler için, kompozit ünite için tipik ideal malzeme kullanılarak dönüştürülmüş kesit değerlerinin hesaplanmasına dayanmaktadır. Ayrıca çözüm, farklı kısmi elemanların sünme ve büzülme davranışlarındaki farklılığı doğru bir şekilde dikkate alır ve bu da kısmi elemanlarda fazla mesai içsel kuvvetlere (gerilmelere) neden olur. Çözüm, tüm kalıcı yüklerin yanı sıra kullanıcıların trafik veya deprem gibi tüm değişken yükleri de dikkate almasına olanak tanır. Bu yükler için kompozit elemanlar yüklenir ve hesaplanan kuvvetler otomatik olarak bölünür ve tasarım fonksiyonları için uygun şekilde kısmi elemanlara atanır.",
    ], videoSrc: compositeAnalysisVideo
  },
  {
    title: "Yeni kod tabanlı tasarım özellikleri", subtitle: "Kompozit bölümler için Tasarım ve Kontrol prosedürlerinin genişletilmesi", descriptions: [
      "Kompozit yapıların genel analizine ek olarak tasarım modülü, kompozit betondan betona kesitlerin kod değerlendirmesiyle de geliştirildi. Kesit, sonradan gerilmiş bir yapısal ünite ve inşaatın daha sonraki bir aşamasında dökülen bir beton levhadan oluşabilir. Enine kesitin herhangi bir gerilim durumu, inşaat ve hizmet aşamalarında analiz edilebilir. Bunun üzerinde nihai ve kullanılabilirlik durumlarının kontrolleri geçerli standartlara uygun olarak yapılabilir. Değerlendirme aynı zamanda eski ve yeni beton arasındaki arayüzdeki gerilimlerin değerlendirilmesini ve derzdeki donatı kapasitesinin kontrolünü de içerir.",
    ], imageSrc: designFeaturesImage
  },
  {
    title: "Daha fazla yeni özellik ve iyileştirme", descriptions: [
      "Bir dizi yeni özellik ve iyileştirme daha mevcuttur. Örneğin, eşlik eden çokgen aks, gürültü bariyerleri veya Jersey benzeri beton bariyerler gibi uzunlamasına doğrusal altyapı objelerinin modellenmesine olanak tanır. Aks geometrisinin çıktısının iyileştirilmesi veya yapısal bir elemana atanmış bir kesitte tanımlanan referans noktalarının kullanıldığı aplikasyon raporu gibi birçok yeni raporlama ve çıktı işlevselliği ilavesi yapılmıştır.",
      "İki parametrik inşaat çizgisinin kesişimine bir dış sınır referansı verilmesi, modelleme sürecini iyileştirecek ve inşaat sırası tanımındaki yük görselleştirmesi, yapısal analiz iş akışını iyileştirecek ve 2024 sürümü için bir başka ürün iyileştirmesini temsil edecektir.",
    ], videoSrc: furtherFeaturesVideo
  },
];


const postHeroSection = (
  <>
    <InfoMediaTwoColumn
      title="Allplan Bridge – Genel Bakış"
      description={"Yeni Allplan Bridge versiyonu parametrik köprü tasarımını tamamen yeni bir seviyeye çıkarıyor. Güçlü ve otomatikleştirilmiş modelleme ve detaylandırma araçlarını, genişletilmiş yapısal analiz yeteneklerini ve kolaylaştırılmış dijital tasarım iş akışlarını kullanarak görevleri daha önce hiç bu kadar hızlı tamamlayamamıştınız. Köprü mühendislerine tasarımlarını optimize etme, projeleri daha erken teslim etme, müşterileri için değeri en üst düzeye çıkarma ve daha iyi köprüler inşa etme fırsatı vermek."}
      videoUrl="https://www.youtube.com/embed/q9r0WUmNZEA"
    />
    {infoBlocks.map((b, idx) => (
      <InfoMediaTwoColumn key={idx} title={b.title} subtitle={b.subtitle} description={b.description} descriptions={b.descriptions} imageSrc={b.imageSrc} videoSrc={b.videoSrc} />
    ))}
  </>
);

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="ALLPLAN BRIDGE"
      title={title}
      subtitle={subtitle}
      description={description}
      customHero={(
        <SolutionHero badge="ALLPLAN BRIDGE" title={title} subtitle={subtitle} description={heroDescriptionNode} />
      )}
      showCta={false}
      postHeroSection={postHeroSection}
      showHeroButtons={false}
    />
  );
}
