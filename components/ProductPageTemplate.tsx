import Image, { StaticImageData } from "next/image";
import InfoMediaTwoColumn from "@/components/InfoMediaTwoColumn";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChallengesSection from "@/components/ChallengesSection";
import WorkflowTabsTemplate from "@/components/WorkflowTabsTemplate";
import { ArrowRight, Check, Play } from "lucide-react";
import { ReactNode } from "react";

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface VideoSection {
  youtubeId: string;
  title?: string;
  description?: string;
}

interface SubTab {
  id: string;
  title: string;
  content: string;
  image?: string | StaticImageData;
}

interface TabFeature {
  id: string;
  label?: string;
  title: string;
  description?: string;
  image?: string | StaticImageData;
  subtabs?: SubTab[];
}

interface TabFeaturesSection {
  title?: string;
  subtitle?: string;
  tabs: TabFeature[];
}

interface ProgressItem {
  label: string;
  value?: number;
  percentage?: number;
  description?: string;
}

interface WhatIsSection {
  title: string;
  content: string | ReactNode;
}

interface ProductPageTemplateProps {
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  heroImage?: string | StaticImageData;
  features?: string[];
  packages?: Package[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  showCtaButton?: boolean;
  showDemoButton?: boolean;
  videoSection?: VideoSection;
  whatIsSection?: WhatIsSection;
  whatIsInfoMedia?: {
    title: string;
    subtitle?: string;
    description?: string;
    descriptions?: string[];
    imageSrc?: string | StaticImageData;
    videoUrl?: string;
    videoSrc?: string;
    secondVideoUrl?: string;
    secondVideoSrc?: string;
  };
  whatIsVideoSection?: VideoSection;
  tabFeatures?: TabFeature[] | TabFeaturesSection;
  progressItems?: ProgressItem[];
  challenges?: string[];
  benefitsItems?: { title: string; description: string; image?: string | StaticImageData }[];
  statsItems?: { label: string; value: string | number; description: string }[];
  statsVariant?: "default" | "animated";
  workflowCategories?: { key: string; label: string; items: { title: string; description: string; image?: string | StaticImageData; videoUrl?: string }[] }[];
  additionalButtons?: Array<{
    text: string;
    href: string;
    external?: boolean;
    variant?: "default" | "outline" | "accent";
  }>;
  children?: ReactNode;
  afterInfoChildren?: ReactNode;
}

const ProductPageTemplate = ({
  badge,
  title,
  subtitle,
  description,
  heroImage,
  features,
  packages,
  ctaTitle = "Hemen Başlayın",
  ctaDescription = "30 gün ücretsiz deneme ile keşfedin",
  ctaHref,
  ctaExternal,
  showCtaButton = true,
  showDemoButton = true,
  videoSection,
  whatIsSection,
  whatIsInfoMedia,
  whatIsVideoSection,
  tabFeatures,
  progressItems,
  challenges = [],
  benefitsItems = [],
  statsItems,
  statsVariant = "default",
  workflowCategories,
  additionalButtons,
  children,
  afterInfoChildren,
}: ProductPageTemplateProps) => {
  return (
    <div className="min-h-screen">
      <section className="py-24 gradient-primary relative">
        <div className="absolute inset-0 bg-technical-grid opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 bg-white/10 border-white/30 text-white">
                {badge}
              </Badge>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
                {title}
              </h1>
              {subtitle && (
                <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
                  {subtitle}
                </h2>
              )}
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {showCtaButton && (
                  <Button
                    variant="hero"
                    size="xl"
                    className="bg-white text-accent hover:bg-white/90"
                    asChild={Boolean(ctaHref) && Boolean(ctaExternal)}
                  >
                    {ctaHref ? (
                      ctaExternal ? (
                        <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                          {ctaTitle}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      ) : (
                        <a href={ctaHref}>
                          {ctaTitle}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      )
                    ) : (
                      <>
                        {ctaTitle}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                )}
                {showDemoButton && (
                  <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-accent">
                    <Play className="mr-2 h-5 w-5" />
                    Demo İzle
                  </Button>
                )}
              </div>
              {additionalButtons && additionalButtons.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  {additionalButtons.map((button, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-accent"
                      asChild={button.external}
                    >
                      {button.external ? (
                        <a href={button.href} target="_blank" rel="noopener noreferrer">
                          {button.text}
                        </a>
                      ) : (
                        <a href={button.href}>{button.text}</a>
                      )}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            {heroImage && (
              <div className="relative">
                {typeof heroImage === 'string' ? (
                   <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                     <Image src={heroImage.startsWith('http') ? '/placeholder.svg' : heroImage} alt={title} fill className="object-cover" />
                   </div>
                ) : (
                   <Image
                     src={heroImage}
                     alt={title}
                     className="rounded-2xl shadow-2xl w-full h-auto"
                   />
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      {children}
      {features && features.length > 0 && (
        <section className="py-16 bg-background" aria-label="Özellikler">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Öne Çıkan Özellikler
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                İhtiyacınız olan temel yetenekleri tek platformda toplayın.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-0">
                  <CardContent className="p-6 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-sm md:text-base text-foreground leading-relaxed">
                      {feature}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      {packages && packages.length > 0 && (
        <section className="py-16 bg-muted/30" aria-label="Paketler">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Paketler
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Ekibinizin ihtiyacına uygun paketi seçin.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={pkg.highlighted ? "border-accent shadow-technical" : undefined}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="font-display text-2xl">
                      {pkg.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {pkg.description}
                    </CardDescription>
                    <div className="pt-3">
                      <div className="text-3xl font-bold text-foreground">
                        {pkg.price}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={pkg.highlighted ? "default" : "outline"}
                      className={pkg.highlighted ? "w-full bg-accent hover:bg-accent/90 text-accent-foreground" : "w-full"}
                      asChild
                    >
                      <a href="/contact">Teklif Al</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      {whatIsInfoMedia ? (
        <InfoMediaTwoColumn {...whatIsInfoMedia} />
      ) : whatIsSection ? (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={whatIsVideoSection ? "grid grid-cols-1 md:grid-cols-2 gap-12 items-start" : "max-w-4xl mx-auto"}>
              <div>
                <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                  {whatIsSection.title}
                </h2>
                <div className="h-1 w-24 bg-accent mb-8" />
                <div className="text-lg text-muted-foreground leading-relaxed">
                  {typeof whatIsSection.content === "string" ? (
                    <div dangerouslySetInnerHTML={{ __html: whatIsSection.content }} />
                  ) : (
                    whatIsSection.content
                  )}
                </div>
              </div>
              {whatIsVideoSection && (
                <div>
                  {whatIsVideoSection.title && (
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      {whatIsVideoSection.title}
                    </h3>
                  )}
                  {whatIsVideoSection.description && (
                    <p className="text-muted-foreground mb-6">
                      {whatIsVideoSection.description}
                    </p>
                  )}
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${whatIsVideoSection.youtubeId}`}
                      title={whatIsVideoSection.title || "Video"}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : null}
      {statsItems && statsItems.length > 0 && (
        <StatsSection items={statsItems} variant={statsVariant} />
      )}
      {challenges && challenges.length > 0 && (
        <ChallengesSection items={challenges} />
      )}
      {benefitsItems && benefitsItems.length > 0 && (
        <section className="py-16 bg-muted" aria-label="Faydalar">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitsItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-card p-6 pr-20 pb-10 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-all group-hover:from-accent/20" />
                  {item.image && (
                    <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Image src={item.image} alt={item.title} width={28} height={28} className="w-7 h-7 object-contain" />
                    </div>
                  )}
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {workflowCategories && workflowCategories.length > 0 && (
        <WorkflowTabsTemplate
          title={!Array.isArray(tabFeatures) ? tabFeatures?.title : undefined}
          subtitle={!Array.isArray(tabFeatures) ? tabFeatures?.subtitle : undefined}
          categories={workflowCategories}
        />
      )}
      {afterInfoChildren}
    </div>
  );
};

export default ProductPageTemplate;
