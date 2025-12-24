"use client"
import SolutionHero from "@/components/SolutionHero";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const paidPythonParts = [
  {
    title: "Wall Reinforcement",
    description: "Wall Reinforcement is a feature of our PythonParts in ALLPLAN that lets you create, update and modify reinforcement for wall reinforcement from simple to complicated one in ALLPLAN, even the slope Wall. It recognizes the shape of the wall panel and distributes the main reinforcement and additional reinforcement for wall openings",
    videoUrl: "https://www.youtube.com/embed/4HwnYYnZ_D0"
  },
  {
    title: "Wall Opening Reinforcement",
    description: "Inevitably, openings of various sizes and shapes for doors, windows, conduit, piping, and ductwork will need to be made in structural walls. Correct placement of the rebar helps prevent the concrete around openings from cracking from structural loads or shrinkage.",
    videoUrl: "https://www.youtube.com/embed/LMjsurG742M"
  },
  {
    title: "Wall Edge Reinforcement",
    description: "The Edge Reinforcement python part is used for detailing walls by connecting two walls to each other in ALLPLAN. Wall to wall connection – Edge shape included: Joining Collinear Walls; Joining L-shaped Walls; Joining T-shaped Walls; Joining intersect-shaped Walls.",
    videoUrl: "https://www.youtube.com/embed/M0Qem-GkLEI"
  },
  {
    title: "Slab Reinforcement",
    description: "Reinforcement detailing of a slab is done based on its support conditions. Slab may be supported on walls or beams or columns."
  },
  {
    title: "Slab Opening Reinforcement",
    description: "Every engineer is familiar with the openings in a slab. Openings in slabs are usually required for many different applications such as aeration ducts and air conditioning. Now, structural engineers can easily get it done by ALLPLAN PythonParts developed by ALLTO",
    videoUrl: "https://www.youtube.com/embed/70dz16RYs84"
  },
  {
    title: "Single Footings Reinforcement",
    description: "Individual footings are one of the most simple and common types of foundations. These are used when the load of the building is carried by columns. Usually, each column will have its own footing. The footing is just a square or rectangular pad of concrete on which the column sits. Now, engineers can easily get it done by ALLPLAN PythonParts developed by ALLTO",
    videoUrl: "https://www.youtube.com/embed/EjxMvMhFKj4"
  },
  {
    title: "Beam Reinforcement",
    description: "Reinforcement are essential part of a concrete beam. It resists tension forces, increase the compression capacity, enhance ductility and reduce long-term deflections in the concrete. Additionally, reinforcement prevent cracking of concrete due to shear stresses, shrinkage and temperature stresses.",
    videoUrl: "https://www.youtube.com/embed/cyOw-XGQ7c0"
  },
  {
    title: "T-Beam Reinforcement",
    description: "T-beam (tee beam), used in construction, is a load-bearing structure of reinforced concrete, wood or metal, with a T-shaped cross section. The top of the T-shaped cross section serves as a flange or compression member in resisting compressive stresses",
    videoUrl: "https://www.youtube.com/embed/yosKNaS5jew"
  },
  {
    title: "Strip Footings Reinforcement",
    description: "Strip foundations (or strip footings) are a type of shallow foundation that are used to provide a continuous, level (or sometimes stepped) strip of support to a linear structure such as a wall or closely-spaced rows of columns built centrally above them. ALLTO set up a friendly interface and all you need to do is input the data to create the strip foundation.",
    videoUrl: "https://www.youtube.com/embed/15aE6UyalJ4"
  },
  {
    title: "Column Reinforcement",
    description: "We've released ALLPLAN Pythonparts that automate the modeling of reinforcement in opening walls in #ALLPLAN.In this initial release, you can use it to place main rebar, stirrups, and more. See the workflow for reinforcing columns in ALLPLAN.",
    videoUrl: "https://www.youtube.com/embed/k76NIUdxs6o"
  },
  {
    title: "Column Dowels",
    description: "Dowels are commonly used as interface reinforcement between columns or walls and footings. The dowels are set in the footing prior to casting the footing concrete and are subsequently spliced to the longitudinal bars in the column or wall.",
    videoUrl: "https://www.youtube.com/embed/-0mJEDyXC7k"
  },
  {
    title: "Column Coupler",
    description: "Developing ALLPLAN PYTHONPARTS to manage the workflow of engineers which we believe will help them complete their tasks much easier, faster and reduce errors.",
    videoUrl: "https://www.youtube.com/embed/blho_BO-xp4"
  }
];

const freePythonParts = [
  {
    title: "ALLPLAN Backup Files - Drawing Recovery",
    description: "Have ever lost a drawing file just because you forgot to save it or you couldn't save it (due to software crash)? ALLTO has developed Backup files in ALLPLAN help ensure the safety of your drawing data. By saving your work frequently, you can ensure a minimum of lost data.",
    videoUrl: "https://www.youtube.com/embed/LXwICpjeZpo"
  },
  {
    title: "Detect IFC Model Changes",
    description: "This python part in Allplan Software detects the geometric differences between two IFC files and merges only the modifications (new, deleted and modified elements) into the currently drawing file (that project can also be an empty one). Modifications can be viewed and managed in both 2D and 3D views.",
    videoUrl: "https://www.youtube.com/embed/SYx4kZYsmzc"
  },
  {
    title: "Converting from 2D lines/polylines to architecture components",
    description: "ALLPLAN has been an innovative pioneer in the area of 3D design, from 3D modeling to component-oriented, digital building models as the basis for the BIM design method. With ALLTO PythonParts, it can be – see how easy it is to convert from 2D lines/polylines to architecture components in just some steps with the right tool.",
    videoUrl: "https://www.youtube.com/embed/AdsiUeBRwxM"
  },
  {
    title: "Exporting IFC files in ALLPLAN faster with ALLTO PythonParts",
    description: "This tool can export multiple drawing files at once. You can choose IFC version, drawing files, file path. And you can also export all drawings into 1 IFC files."
  },
  {
    title: "Add custom attribute in ALLPLAN",
    description: "ALLTO PythonParts developed the tools to help you define or modify a new custom attribute easily. You can add up to 5 attributes per time use."
  }
];

const turkishTools = [
  {
    title: "Allto Kiriş PythonPart Eklentisi",
    description: "Allto Kiriş PythonPart Eklentisi ile Türkiye Deprem Yönetmeliği'ne uygun betonarme kiriş donatılarınızı parametrik olarak hızlı ve kolay bir şekilde modelleyebilirsiniz. Mesnet ve açıklık bindirme şartlarından, etriye sarılma bölgesi ayarlarına kadar tüm düzenlemelerinizi yapabilir, ilave donatılar ekleyebilirsiniz. Kiriş boy ve en kesitlerini otomatik alarak tek tuşla metraj tablosu oluşturabilirsiniz. Allto Kiriş PythonPart Eklentisi size daha az zamanda daha çok iş yapma imkanının yanında güvenilir kiriş donatı metrajı almanızı da sağlar."
  },
  {
    title: "Otomatik Kolon-Kiriş-Duvar Modelleme",
    description: "Ücretsiz olan Otomatik Kolon-Kiriş-Duvar Modelleme eklentisini kullanarak daha önce CAD ortamında yapılmış olan iki boyutlu çizimlerinizi sadece birkaç tıklama ile üç boyutlu BIM modeline dönüştürebilirsiniz. Ürettiğiniz BIM modelinizin güvenilir Kalıp ve Donatı metrajını alabilirisiniz."
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
            <div className="max-w-4xl mx-auto">
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
                <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    {item.videoUrl && (
                      <div className="aspect-video w-full rounded-lg overflow-hidden">
                        <iframe
                          src={item.videoUrl}
                          title={item.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
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
                <Card key={index} className="hover:shadow-lg transition-shadow border-accent/50 flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-4">
                    {item.videoUrl && (
                      <div className="aspect-video w-full rounded-lg overflow-hidden">
                        <iframe
                          src={item.videoUrl}
                          title={item.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {turkishTools.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-primary/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                <a href="/contact">İletişime Geçin</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://allplantools.com/" target="_blank" rel="noopener noreferrer">
                  ALLTO Web Sitesi
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
