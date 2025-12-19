/* eslint-disable */
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VideoModal from "@/components/VideoModal";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChallengesSection from "@/components/ChallengesSection";
import StatsSection from "@/components/StatsSection";
import heroImage from "@/assets/solutions/infrastructure-hero.jpg";
import civilParametricModelingImg from "@/assets/products/civil/parametric-modeling.jpg";
import civilParametricPrestressingImg from "@/assets/products/civil/parametric-prestressing.jpg";
import bridgeStructuralAnalysisImg from "@/assets/products/civil/bridge-structural-analysis.jpg";
import drafting2dImg from "@/assets/products/allplan-professional/2d-drafting.jpg";
import interfacesImg from "@/assets/products/allplan-ultimate/interfaces.jpg";
import externalDataImg from "@/assets/products/allplan-professional/external-data-sources.jpg";
import modeling3dImg from "@/assets/products/allplan-professional/3d-modeling.jpg";
import visualizationImg from "@/assets/products/allplan-ultimate/visualization.jpg";
import advancedVisualizationImg from "@/assets/products/allplan-ultimate/advanced-visualization.jpg";
import aiVisualizationImg from "@/assets/products/allplan-ultimate/ai-visualization.jpg";
import clashDetectionImg from "@/assets/products/allplan-professional/clash-detection.jpg";
import bimEasyImg from "@/assets/products/allplan-professional/bim-easy.jpg";
import buildingComponentsImg from "@/assets/products/allplan-professional/building-components.jpg";
import terrainModelImg from "@/assets/products/allplan-ultimate/terrain-model.jpg";
import urbanLandscapeImg from "@/assets/products/allplan-ultimate/urban-landscape.jpg";
import sewerageImg from "@/assets/products/allplan-ultimate/sewerage-utilities.jpg";
import quantityCostingImg from "@/assets/products/allplan-ultimate/quantity-costing.jpg";
import reinforcementImg from "@/assets/products/allplan-professional/reinforcement.jpg";
import steelConnectionsImg from "@/assets/products/allplan-professional/steel-connections.jpg";
import roadsImg from "@/assets/products/allplan-professional/roads.jpg";
import constructionSiteImg from "@/assets/products/allplan-ultimate/construction-site.jpg";
import groundworksImg from "@/assets/products/allplan-ultimate/groundworks.jpg";
import excavationImg from "@/assets/products/allplan-ultimate/excavation.jpg";
import precastDesignImg from "@/assets/products/allplan-ultimate/precast-design.jpg";
import elementPlanImg from "@/assets/products/allplan-ultimate/element-plan.jpg";
import sciaUltimateImg from "@/assets/products/allplan-ultimate/scia-concept.jpg";
import projectTeamworkImg from "@/assets/products/civil/project-teamworking.jpg";
import planDistributionImg from "@/assets/products/civil/plan-distribution.jpg";
import analyticalModelImg from "@/assets/products/civil/analytical-model.jpg";
import workgroupManagerImg from "@/assets/products/civil/workgroup-manager.jpg";
import cloudResourcesImg from "@/assets/products/civil/cloud-resources.jpg";
import modelViewerImg from "@/assets/products/civil/model-viewer.jpg";
import connexisImg from "@/assets/products/civil/connexis.jpg";
import cloudBasedCollaborationOverlay from "@/assets/products/allplan-concept/remote/cloud/cloud_based_collaboration.jpg";
import designCheckingOverlay from "@/assets/products/allplan-concept/remote/cloud/design_checking.jpg";
import bluebeamConnectionOverlay from "@/assets/products/allplan-concept/remote/cloud/bluebeam_connection.jpg";

export const metadata: Metadata = {
  title: 'Allplan Civil - Aluplan',
  description: 'Advanced civil engineering solutions',
}

export default function Page() {
  return (
    <section className="min-h-screen"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="outline" className="mb-4 bg-white/10 border-white/30 text-white">SİVİL MÜHENDİSLİK</Badge>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Allplan Civil</h1>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Köprü ve altyapı projeleri için parametrik modelleme, entegre analiz ve üstün teslimatlar.
        </p>
      </div>
      <Image src={heroImage} alt="Allplan Civil" className="w-full h-auto rounded-2xl shadow-2xl" />
      {/* İçerik: detaylar src/pages/products/Civil.tsx'den taşındı */}
    </section>
  )
}
