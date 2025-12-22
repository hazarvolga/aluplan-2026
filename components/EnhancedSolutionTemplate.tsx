"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Download, Play } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import StatsSection from "@/components/StatsSection";
import ChallengesSection from "@/components/ChallengesSection";

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface Reason {
  title: string;
  description: string;
  image?: string | StaticImageData;
}

interface WorkflowStep {
  title: string;
  description: string;
  image?: string | StaticImageData;
}

interface Challenge {
  text: string;
}

interface EnhancedSolutionTemplateProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string | StaticImageData;
  customHero?: React.ReactNode;
  stats?: Stat[];
  challenges?: Challenge[];
  reasons?: Reason[];
  workflowSteps?: WorkflowStep[];
  youtubeVideoId?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  showCta?: boolean;
  preWorkflowSection?: React.ReactNode;
  preChallengesSection?: React.ReactNode;
  reasonsVariant?: "default" | "benefits";
  reasonsBadgeText?: string;
  reasonsTitleText?: string;
  postHeroSection?: React.ReactNode;
  statsVariant?: "default" | "animated";
  heroBackgroundVideoUrl?: string;
  showHeroButtons?: boolean;
  theme?: "default" | "v2-dark";
}

const EnhancedSolutionTemplate = ({
  badge,
  title,
  subtitle,
  description,
  heroImage,
  customHero,
  stats = [],
  challenges = [],
  reasons = [],
  workflowSteps = [],
  youtubeVideoId,
  ctaTitle = "Hemen Başlayın",
  ctaDescription = "30 gün ücretsiz deneme ile keşfedin",
  showCta = true,
  preWorkflowSection,
  preChallengesSection,
  reasonsVariant = "default",
  reasonsBadgeText = "12 GEREKÇE",
  reasonsTitleText = "NEDEN ALLPLAN",
  postHeroSection,
  statsVariant = "default",
  heroBackgroundVideoUrl,
  showHeroButtons = true,
  theme = "default",
}: EnhancedSolutionTemplateProps) => {
  const isDark = theme === "v2-dark";
  const bgClass = isDark ? "bg-[#020202] text-white" : "bg-background";
  const mutedTextClass = isDark ? "text-gray-400" : "text-muted-foreground";
  const cardBgClass = isDark ? "bg-white/5 border-white/10" : "bg-card border-border";

  return (
    <div className={`min-h-screen ${bgClass}`}>

      {/* Hero Section */}
      {customHero ? (
        <>{customHero}</>
      ) : (
        <section className={`relative py-24 overflow-hidden ${isDark ? "bg-gradient-to-br from-[#0B1120] to-[#020202]" : "gradient-primary"}`}>
          <div className="absolute inset-0 bg-technical-grid opacity-30" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {title}
                </h1>
                <h2 className="text-xl md:text-2xl text-white/80 font-semibold mb-6">
                  {subtitle}
                </h2>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {description}
                </p>
                {showHeroButtons && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Play className="mr-2 h-5 w-5" />
                      İŞ AKIŞINI KEŞFEDİN
                    </Button>
                    <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                      Teklif Al
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                )}
              </div>

              {heroImage && (
                <div className="relative">
                  <Image
                    src={heroImage}
                    alt={title}
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {postHeroSection}

      {/* Stats Section */}
      {stats.length > 0 && (
        <div className={isDark ? "bg-[#020202]" : ""}>
          <StatsSection items={stats} variant={statsVariant} theme={theme} />
        </div>
      )}

      {preChallengesSection}

      {/* Challenges Section */}
      {challenges.length > 0 && (
        <div className={isDark ? "[&_section]:bg-white/5 [&_p]:text-gray-300 [&_div.bg-card]:bg-[#0B1120] [&_div.bg-card]:border-white/10" : ""}>
          <ChallengesSection items={challenges.map(c => c.text)} theme={theme} />
        </div>
      )}

      {/* 12 Reasons Section */}
      {reasons.length > 0 && (
        <section className={`py-20 ${bgClass}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 bg-accent/10 text-accent border-accent/30">
                {reasonsBadgeText}
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {reasonsTitleText}
              </h2>
            </div>
            {reasonsVariant === "benefits" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                  <div key={index} className={`group relative p-6 pr-20 pb-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${cardBgClass}`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-all group-hover:from-accent/20" />
                    {reason.image && (
                      <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <Image src={reason.image} alt={reason.title} width={28} height={28} className="w-7 h-7 object-contain" />
                      </div>
                    )}
                    <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {reason.title}
                    </h3>
                    <p className={`${mutedTextClass} text-sm leading-relaxed`}>
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                  <Card key={index} className={`relative overflow-hidden hover:shadow-technical transition-shadow ${cardBgClass}`}>
                    <CardContent className="p-6 pr-20 pb-10">
                      {reason.image && (
                        <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shadow-sm">
                          <Image src={reason.image} alt={reason.title} width={28} height={28} className="w-7 h-7 object-contain" />
                        </div>
                      )}
                      <h3 className="font-display text-lg font-bold text-foreground mb-2">
                        {reason.title}
                      </h3>
                      <p className={`${mutedTextClass} text-sm`}>
                        {reason.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {preWorkflowSection}

      {/* Workflow Section */}
      {workflowSteps.length > 0 && (
        <section className={`py-20 ${isDark ? "bg-white/5" : "bg-muted/30"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                İş Akışları
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className={`rounded-xl overflow-hidden shadow-sm ${cardBgClass}`}>
                  {step.image && (
                    <div className="relative w-full h-48">
                      <Image src={step.image} alt={step.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className={mutedTextClass}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* YouTube Video Section */}
      {youtubeVideoId && (
        <section className={`py-20 ${bgClass}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {showCta && (
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
                {ctaTitle}
              </h2>
              <p className="text-xl text-accent-foreground/80 mb-8">
                {ctaDescription}
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                <Download className="mr-2 h-5 w-5" />
                ÜCRETSİZ DENEME SÜRÜMÜNÜ İNDİRİN
              </Button>
            </div>
          </div>
        </section>
      )}


    </div>
  );
};

export default EnhancedSolutionTemplate;
