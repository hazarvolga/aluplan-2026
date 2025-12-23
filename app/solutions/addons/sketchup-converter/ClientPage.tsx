"use client"
import AddonDetailTemplate from "@/components/AddonDetailTemplate";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import SectionHeader from "@/components/SectionHeader";
import CDSLicenseInfoSection from "@/components/CDSLicenseInfoSection";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MasonryVideoGrid from "@/components/MasonryVideoGrid";

// Static Import


export default function ClientPage() {


  const sections = [
    <InfoMediaTwoColumn
      key="hero"
      title="SketchUp dosyalarıyla optimize edilmiş veri alışverişi"
      subtitle=""
      descriptions={[
        "SketchUp Converter eklentisi ile, dokular dahil bir 3B modeli Allplan’a kolayca aktarabilirsiniz. Bu şekilde, örneğin SketchUp Deposundan tüm yüzeyleri içeren bitkileri, insanları, mobilyaları, araçları vb. Allplan’a aktarabilir ve bunları görselleştirmeniz için kullanabilirsiniz. Mevcut SketchUp sürümleri desteklenmektedir. SketchUp dışa aktarımı, Lumion görselleştirme yazılımıyla optimum bir iş akışı için uyarlanmıştır. Bu, örneğin basit Allplan makrolarını ayrıntılı Lumion nesneleriyle (ağaçlar, arabalar, ışıklar, vb.) Değiştirebileceğiniz anlamına gelir. Lumion’a nesnelerin oldukça zor yerleştirilmesi artık gerekli değildir.",
      ]}
      videoUrl="https://www.youtube.com/embed/dsFgV9-aAyI"
    />,

    <section key="tabs-info" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="export" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="export">SketchUp Export</TabsTrigger>
              <TabsTrigger value="import">SketchUp Import</TabsTrigger>
            </TabsList>
            <TabsContent value="export" className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Makro tanımları SketchUp bileşenleri olarak, makro yer değiştirmeleri SketchUp örnekleri olarak dışa aktarılır</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>SketchUp sürüm 2019’a kadar dışa aktarın (Allplan sadece 2017 / 2018’e kadar)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Önceden seçilmiş elemanların dışa aktarımı</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Dışa aktarılan skp dosyasının otomatik hata kontrolü ve düzeltilmesi; bu, Lumion’a anında aktarılabileceği anlamına gelir</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Allplan’dan 3B katılar isteğe bağlı olarak SketchUp grupları olarak birleştirilebilir</span>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="import" className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>SketchUp sürümlerinin 2016, 2017, 2018, 2019 içe aktarımı Allplan 2018, 2019’da da mümkündür</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Yüzeyler her zaman üçgenleştirilmez, üçgenleme isteğe bağlı olarak ayarlanabilir</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Gövdeler yüzey grupları olarak değil, katı gövdeler olarak içe aktarılır</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>Dokular, .surf dosyaları olarak içe aktarılır ve oluşturulur (UV koordinatlı olanlar dahil)</span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>,



    <MasonryVideoGrid
      key="videos"
      title="Tanıtım Videoları"
      items={[
        { titleTR: "ALLPLAN Add-On SketchUpConverter - Export Allplan zu Lumion", videoUrl: "https://www.youtube.com/embed/XcIPUX2nF4c" },
        { titleTR: "ALLPLAN Add-On SketchUpConverter - Import Allplan UV Texturen", videoUrl: "https://www.youtube.com/embed/xIDepYtmsIw" },
        { titleTR: "ALLPLAN Add-On SketchUpConverter - Import Allplan", videoUrl: "https://www.youtube.com/embed/QUTYgmyfu3o" },
      ]}
    />,

    <CDSLicenseInfoSection
      key="license"
      title="Lisans ve Gereksinimler"
      subtitle="Tek kullanıcı lisansı, mevcut Allplan lisansına bağlıdır."
      description="Eklentiyi yükledikten sonra deneme sürümünü 14 gün ücretsiz olarak kullanabilirsiniz."
      systemRequirements="Allplan 2020 – 2024"
      languages="Almanca, İngilizce"
      imageUrl="https://addon.aluplan.com.tr/wp-content/uploads/2023/02/Lisans.jpg"
      imageAlt="Lisans"
      links={[
        { text: "Kurulum Kılavuzu", url: "https://youtu.be/BWKDmZyIUo4", variant: "link" },
        { text: "Setup İndir", url: "https://cdssieber.sharepoint.com/:f:/g/Ev_G2db5WVVBvMEN-Adhz24Bk5f3rEvFCQu77iLTTCIynw?e=qkPdri", variant: "default" },
      ]}
      quoteFormUrl="https://forms.office.com/r/hXhnKAG912"
      quoteFormText="Teklif Talep Formu"
    />,
  ];

  return (
    <AddonDetailTemplate
      title="SketchUp Dönüştürücü"
      subtitle="Dokularla Allplan import, Lumion export, vb."
      description="SketchUp import ve görselleştirme export ile hızlı entegrasyon"
      sections={sections}
    />
  );
}
