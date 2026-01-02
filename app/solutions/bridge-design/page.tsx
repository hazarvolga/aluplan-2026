"use client"
import EnhancedSolutionTemplate from "@/components/EnhancedSolutionTemplate";
import SolutionHero from "@/components/SolutionHero";
import PostHeroSection from "@/components/PostHeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import iconReinforcement from "@/assets/solutions/bridge/reasons/structural-engineering-allplan-turkey-powerful_modeling.png";
import iconConstructionSeq from "@/assets/solutions/bridge/reasons/intelligent_construction_sequence_analysis-1.png";
import iconAutomatedWorkflows from "@/assets/solutions/bridge/reasons/automated-workflows.png";
import iconProductiveCollab from "@/assets/solutions/bridge/reasons/productive-collab.png";
import iconTerrain from "@/assets/solutions/bridge/reasons/intuitive_terrain_integration-1.png";
import iconInterdisciplinaryAEC from "@/assets/solutions/bridge/reasons/structural-engineering-allplan-turkey-interdisciplinary_aec_design.png";
import iconVariantsTemplates from "@/assets/solutions/bridge/reasons/quickly_create_model_variants_templates-1.png";
import iconAccurateTendon from "@/assets/solutions/bridge/reasons/accurate_tendon_design-1.png";
import iconIntegratedStructuralAnalysis from "@/assets/solutions/bridge/reasons/integrated_structural_analysis-2.png";
import iconReinfCode from "@/assets/solutions/bridge/reasons/reinforcement_design_code_checking-2.png";
import iconChangesEasy from "@/assets/solutions/bridge/reasons/easily_implement_changes-1.png";
import iconBim2Field from "@/assets/solutions/bridge/reasons/complete_interoperability-1.png";
import iconEnhancedComm from "@/assets/solutions/bridge/reasons/technical_support-1.png";
import iconQualityDeliverables from "@/assets/solutions/bridge/reasons/more_accurate_deliverables-2.png";

const stats = [
  { value: "100%", label: "TUTARLI VERİ", description: "Ortak veri ortamı, çözümler arasında yeniden veri girişini en aza indirir." },
  { value: "63%", label: "DAHA FAZLA ZAMAN", description: "Şablonlar ve kolay parametrik değişiklikler zamandan tasarruf sağlar." },
  { value: "100%", label: "DAHA HASSAS", description: "Köprüye özel modelleme teknikleri ve iş akışları." },
  { value: "100%", label: "DAHA VERİMLİ", description: "Şablonlar aracılığıyla parametrik elemanların yeniden kullanımı." },
];

const challenges = [
  { text: "Tasarım, planlama ve inşaat için artan karmaşıklık ve işbirliği gereksinimleri." },
  { text: "Çok fazla zaman alan, kaliteyi etkileyen ve risk oluşturan sürekli proje değişiklikleri." },
  { text: "Proje maliyetleriniz hakkında devam eden endişeler ve kontrolden çıkan zaman gecikmeleri." },
];

const reasons = [
  { title: "ARAZİ KOŞULLARINI BAŞTAN HESABA KATIN", description: "Arazi modellerini hızla entegre edin ve düzenleyin.", image: iconTerrain },
  { title: "TEK ÇÖZÜM", description: "Parametrik modelleme, inşa süreci, analiz ve donatı.", image: iconInterdisciplinaryAEC },
  { title: "MODEL VARYANTLARI VE ŞABLONLAR", description: "Yol paftası, hizalama ve kesitlere göre hızlı varyantlar.", image: iconVariantsTemplates },
  { title: "DOĞRU TENDON TASARIMI", description: "Ön germe ve art germe tendon tiplerini parametrik oluşturun.", image: iconAccurateTendon },
  { title: "ENTEGRE STRÜKTÜREL ANALİZ", description: "Geometrik modelden analiz modeli otomatik türetilir.", image: iconIntegratedStructuralAnalysis },
  { title: "AKILLI YAPI SIRALAMA ANALİZİ", description: "Programları tanımlayın ve karşılaştırın; zaman 4. boyut.", image: iconConstructionSeq },
  { title: "DONATI TASARIMI VE KOD KONTROLÜ", description: "Yük zarfı ile donatı tasarımı ve kod kontrolü.", image: iconReinfCode },
  { title: "DEĞİŞİKLİKLERİN KOLAY UYGULANMASI", description: "Hizalama değişirse tüm köprü modeli ayarlanır.", image: iconChangesEasy },
  { title: "GELİŞMİŞ DONATI MODELLEMESİ", description: "Çift eğrili ve değişen kesitlerde hızlı donatı.", image: iconReinforcement },
  { title: "ÜSTÜN KALİTELİ TESLİMATLAR", description: "Modelden çizimler ve raporlar doğru ve hızlı.", image: iconQualityDeliverables },
  { title: "ÜSTÜN BİRLİKTE ÇALIŞABİLİRLİK", description: "IFC ve analitik model paylaşımı ile OPEN BIM.", image: iconBim2Field },
  { title: "KALİTELİ TEKNİK DESTEK", description: "30+ yıl köprü uzmanlığı ve kapsamlı destek.", image: iconEnhancedComm },
];

import QuickActionsSection from "@/components/QuickActionsSection";
import { ArrowRight, FileText, Layers, Activity } from "lucide-react";

const quickActions = [
  {
    text: "Ücretsiz Dene",
    href: "https://www.allplan.com/trial-or-subscription/",
    external: true,
    variant: "default" as const,
    icon: <ArrowRight className="h-4 w-4" />
  },
  {
    text: "Teklif Talep Formu",
    href: "https://forms.office.com/r/hXhnKAG912",
    external: true,
    variant: "outline" as const,
    icon: <FileText className="h-4 w-4" />
  },
  {
    text: "Öngermeli Kirişli Köprü",
    href: "/solutions/modeling-of-precast-girder-bridges",
    variant: "outline" as const,
    icon: <Layers className="h-4 w-4" />
  },
  {
    text: "Özellikler",
    href: "/solutions/features-allplan-bridge",
    variant: "outline" as const,
    icon: <Activity className="h-4 w-4" />
  },
];

const postHeroSection = (
  <>
    <QuickActionsSection actions={quickActions} />
    <PostHeroSection
      title="ALLPLAN – KÖPRÜ MÜHENDİSLİĞİ İÇİN BIM ÇÖZÜMLERİ"
      paragraphs={[
        "Çekici ve güvenli köprüler, güçlü araçlar, şeffaflık ve net koordinasyon gerektirir.",
        "Allplan Bridge ile köprüleri modelleyin, analiz edin, tasarlayın ve detaylandırın; ön germe ve inşa süreci dahil.",
      ]}
      videoUrl="https://www.youtube.com/embed/SeA6ncaqUhY"
    />
  </>
);

import BridgeHeroBackground from "@/components/BridgeHeroBackground";
import heroBg from "@/assets/solutions/kopru-bg.png";

export default function Page() {
  return (
    <EnhancedSolutionTemplate
      badge="KÖPRÜ MÜHENDİSLİĞİ"
      title="Köprü Mühendisliği"
      subtitle="DAHA FAZLASINI TALEP EDEN KÖPRÜ MÜHENDİSLERİ İÇİN."
      description="ALLPLAN'ın köprü mühendisliğine yönelik BIM çözümü ile herhangi bir köprü tipinin disiplinler arası 4D modelini üretin; aynı modelden çizim ve analiz için yararlanın."
      customHero={(
        <SolutionHero
          badge="KÖPRÜ MÜHENDİSLİĞİ"
          title="Köprü Mühendisliği"
          subtitle="DAHA FAZLASINI TALEP EDEN KÖPRÜ MÜHENDİSLERİ İÇİN."
          description="ALLPLAN'ın köprü mühendisliğine yönelik BIM çözümü ile herhangi bir köprü tipinin disiplinler arası 4D modelini üretin; aynı modelden çizim ve analiz için yararlanın."
          customBackground={<BridgeHeroBackground />}
          backgroundImage={heroBg}
        />
      )}
      stats={stats}
      challenges={challenges}
      reasons={reasons}
      reasonsVariant="benefits"
      statsVariant="animated"
      postHeroSection={postHeroSection}
      showCta={false}
    />
  );
}
