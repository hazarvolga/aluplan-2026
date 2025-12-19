"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import PostHeroSection from "@/components/PostHeroSection";
import heroImage from "@/assets/solutions/precast-hero.jpg";
import iconAutomatedWorkflows from "@/assets/products/precast/reasons/automated_workflows.png";
import iconHighDesignQuality from "@/assets/products/precast/reasons/high_design_quality.png";
import iconTerrainIntegration from "@/assets/products/precast/reasons/intuitive_terrain_integration-1.png";
import iconWorkWayWant from "@/assets/products/precast/reasons/work_way_want-1.png";
import iconProductiveCollab from "@/assets/products/precast/reasons/structural-engineering-allplan-turkey-productive_collab.png";
import iconSmartConverter from "@/assets/products/precast/reasons/smart_converter-1.png";
import iconConvincing from "@/assets/products/precast/reasons/convincing_visualizations.png";
import iconKeepOverview from "@/assets/products/precast/reasons/keep_overview-1.png";
import iconQualityAssured from "@/assets/products/precast/reasons/quality_assured_data-1.png";
import iconDigitalizationPlant from "@/assets/products/precast/reasons/digitalization_precast_plant-1-1.png";
import iconOptimizedDecisions from "@/assets/products/precast/reasons/optimized_decisions-1.png";
import iconMobileSolutions from "@/assets/products/precast/reasons/mobile_solutions-1.png";

export default function ClientPage() {
  const stats = [
    { value: "52%", label: "DAHA FAZLA ZAMAN", description: "daha hızlı ve daha doğru tasarım çıktıları, görselleştirmeler ve detaylı inşaat çizimleri. * 3B ile 2B karşılaştırıldığında" },
    { value: "60%", label: "DAHA AZ HATA", description: "güvenilir otomatik miktar ve malzeme çıktısı ile erken aşamalarda daha verimli ve hassas proje maliyetlendirmesi. * Manuel metraj ile karşılaştırıldığında" },
    { value: "25%", label: "DAHA ÜRETKEN", description: "3B istifleme ile genel üretkenlikte artış." },
  ];
  const challenges = [
    { text: "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri." },
    { text: "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri." },
    { text: "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri." },
  ];
  const reasons = [
    { title: "CONSISTENT TIME AND COST PLANNING", description: "Powerful tools to create and accurately design objects of any shape for even the most complex of project requirements.", image: iconAutomatedWorkflows },
    { title: "EASILY DESIGN & DETAIL COMPLEX REINFORCEMENT", description: "Automated solutions for the rapid reinforcement design and detailing of complex geometry, such as curved structures or freeform objects.", image: iconHighDesignQuality },
    { title: "CONSISTENT TIME AND COST PLANNING", description: "Quickly integrate all common terrain formats, displaying and conveniently editing them as digital terrain models.", image: iconTerrainIntegration },
    { title: "INDIVIDUAL WAYS OF WORKING", description: "Flexible workflows in 2D, 2.5D and 3D as well as the full object-orientated BIM working methodology", image: iconWorkWayWant },
    { title: "SEAMLESS COLLABORATION", description: "Optimize materials and construction approaches including cast insitu/precast concrete, steel and timber for enhanced buildability and sustainability.", image: iconProductiveCollab },
    { title: "SMART CONVERTER", description: "A single software solution for architectural design, structural engineering, MEP services, and civil engineering design and detailing.", image: iconSmartConverter },
    { title: "CONVINCING VISUALIZATION", description: "Integrated cloud technology for multi-user working in real-time, plus model and project collaboration with partners", image: iconConvincing },
    { title: "COMPLETE OVERVIEW", description: "Easily exchange data with multiple exchange formats, IFC4 RV import/export, and the collaborative OPEN BIM data platform, Bimplus.", image: iconKeepOverview },
    { title: "QUALITY-ASSURED DATA FOR ERP AND MES", description: "Quickly and precisely calculate quantities and materials from an earlier stage using detailed lists for accurate tenders.", image: iconQualityAssured },
    { title: "DIGITALIZATION OF THE PRECAST PLANT", description: "Save time, with changes made automatically across deliverables, simply by editing once in either drawings or model.", image: iconDigitalizationPlant },
    { title: "OPTIMIZED DECISION MAKING", description: "Swiftly and accurately generate plans, drawings, and reports directly from the 3D model and control information exchange for high-quality documentation.", image: iconOptimizedDecisions },
    { title: "MOBILE SOLUTIONS", description: "Coordinate detailed designs with construction teams using cloud-based platform – Bimplus for clear and transparent communication", image: iconMobileSolutions },
  ];

  return (
    <EnhancedSolutionTemplate
      badge="İNŞAAT PLANLAMASI"
      title="PREKAST İMALATI"
      subtitle="DAHA FAZLASINI İSTEYEN PREKAST TASARIMCILARI İÇİN"
      description="Prekast, inşaat sektörünün en hızlı büyüyen segmentlerinden biridir. Bu nedenle ALLPLAN, prekast projelerinin tasarımı, detaylandırması ve uygulanması için benzersiz iş akışları sunar. Yüksek düzeyde otomatikleştirilmiş iş akışları maksimum üretkenlik ve hassasiyet sağlar. Allplan'daki entegre prekast fonksiyonları hakkında daha fazla bilgi edinin!"
      heroImage={heroImage}
      customHero={
        <SolutionHero
          badge="İNŞAAT PLANLAMASI"
          title="PREKAST İMALATI"
          subtitle="DAHA FAZLASINI İSTEYEN PREKAST TASARIMCILARI İÇİN"
          description="Prekast, inşaat sektörünün en hızlı büyüyen segmentlerinden biridir. Bu nedenle ALLPLAN, prekast projelerinin tasarımı, detaylandırması ve uygulanması için benzersiz iş akışları sunar. Yüksek düzeyde otomatikleştirilmiş iş akışları maksimum üretkenlik ve hassasiyet sağlar. Allplan'daki entegre prekast fonksiyonları hakkında daha fazla bilgi edinin!"
        />
      }
      postHeroSection={
        <PostHeroSection
          title="ALLPLAN – PREFABRİKASYON İÇİN BIM ÇÖZÜMLERİ"
          paragraphs={[
            "Başarılı prekast projelerini karakterize eden şey; kapsamlı bilgi, mutlak hassasiyete bağlılık ve doğru araçların mükemmel birleşimidir.",
            "ALLPLAN, etkileyici 3B teklif modelinden hassas 3B prekast modele; tam sıralama ve üretim planlamasından net 3B istifleme ve kesintisiz faturalandırma verilerine kadar tüm proje aşamalarında sizi destekler.",
          ]}
          videoUrl="https://www.youtube.com/embed/uS_xihYzWoA"
        />
      }
      stats={stats}
      statsVariant="animated"
      challenges={challenges}
      reasons={reasons}
      reasonsBadgeText="12 REASONS"
      reasonsTitleText="TO CHOOSE ALLPLAN"
      reasonsVariant="benefits"
      showCta={false}
    />
  );
}
