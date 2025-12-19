"use client"
import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import Image from "next/image";
import constructionSiteImg from "@/assets/products/allplan-professional/construction-site.jpg";

export default function Page() {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="outline" className="mb-4 bg-white/10 border-white/30 text-white">PROFESYONEL</Badge>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Allplan Professional</h1>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">Gelişmiş modelleme, donatı ve iş birliği ile profesyonel BIM üretkenliği.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-2">Şantiye Hazırlığı</h3>
              <Image src={constructionSiteImg} alt="Şantiye" className="rounded-lg" />
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-2">Tanıtım Videosu</h3>
              <VideoModal youtubeId="SB-ULI92gKY" title="Donatı Tanıtım Videosu" />
            </CardContent>
          </Card>
        </div>
        <a href="/products/allplan" className="inline-flex items-center gap-2 mt-8 text-accent">
          ALLPLAN ürüne git
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
