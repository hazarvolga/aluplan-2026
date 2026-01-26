"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type WorkflowItem = {
  title: string;
  description: string;
  image?: string | StaticImageData;
  videoUrl?: string;
};

type WorkflowCategory = {
  key: string;
  label: string;
  items: WorkflowItem[];
};

type WorkflowTabsTemplateProps = {
  title?: string;
  subtitle?: string;
  categories: WorkflowCategory[];
  theme?: "default" | "v2-dark";
};

const WorkflowTabsTemplate = ({
  title = "İş Akışları Şablon",
  subtitle,
  categories,
  theme = "default",
}: WorkflowTabsTemplateProps) => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string | StaticImageData; title: string } | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const defaultCategory = categories[0]?.key ?? "cat-0";

  const bgClass = "bg-gradient-to-b from-muted/20 to-background";
  const textClass = "text-foreground";
  const mutedText = "text-muted-foreground";

  const tabsListClass = "bg-muted/30 border-border/50 border";

  const tabTriggerClass = "data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=inactive]:hover:bg-muted/50 data-[state=inactive]:text-muted-foreground";

  const subTabListClass = "bg-card/30 border-border/50 border";

  const subTabTriggerClass = "data-[state=active]:bg-accent/10 data-[state=active]:text-accent data-[state=active]:border-accent/20 data-[state=inactive]:hover:bg-muted/30 data-[state=inactive]:text-muted-foreground";

  const cardClass = "bg-card/50 border-border/50 text-foreground";

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider uppercase mb-2 block">ÖZELLİKLER</span>
          <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${textClass}`}>{title}</h2>
          {subtitle && (
            <p className={`${mutedText} max-w-2xl mx-auto`}>{subtitle}</p>
          )}
        </div>

        <Tabs defaultValue={defaultCategory} className="w-full">
          <div className="flex justify-start mb-12">
            <TabsList className={`inline-flex h-auto p-1 backdrop-blur-sm rounded-lg border flex-wrap justify-start gap-1 ${tabsListClass}`}>
              {categories.map((cat, i) => (
                <TabsTrigger
                  key={cat.key}
                  value={cat.key}
                  className={`relative px-5 py-3 text-sm font-medium rounded-md transition-all duration-200 data-[state=active]:shadow-sm ${tabTriggerClass}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="hidden sm:inline opacity-60 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                    <span>{cat.label}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.key} value={cat.key} className="animate-fade-in">
              <Tabs defaultValue={`${cat.key}-0`} orientation="vertical" className="flex flex-col lg:flex-row lg:items-start gap-8">
                <TabsList className={`flex lg:flex-col h-auto backdrop-blur-sm p-2 rounded-lg border lg:w-[450px] flex-shrink-0 gap-1 overflow-x-auto lg:overflow-visible ${subTabListClass}`}>
                  {cat.items.map((item, index) => (
                    <TabsTrigger
                      key={`${cat.key}-${index}`}
                      value={`${cat.key}-${index}`}
                      className={`group relative justify-start text-left w-full min-w-[200px] lg:min-w-0 py-3 px-4 rounded-md transition-all duration-200 border border-transparent whitespace-normal h-auto ${subTabTriggerClass}`}
                    >
                      <span className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded flex-shrink-0 flex items-center justify-center text-[10px] font-mono border border-current opacity-60 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium leading-tight">{item.title}</span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <div className="flex-1 min-w-0">
                  {cat.items.map((item, index) => (
                    <TabsContent key={`${cat.key}-content-${index}`} value={`${cat.key}-${index}`} className="mt-0 animate-fade-in">
                      <Card className={`backdrop-blur-sm overflow-hidden rounded-lg shadow-sm ${cardClass}`}>
                        {item.image && (
                          <div
                            className="relative overflow-hidden cursor-pointer group aspect-video bg-muted"
                            onClick={() => setLightboxImage({ src: item.image!, title: item.title })}
                          >
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg">
                                <ZoomIn className="w-4 h-4 text-foreground" />
                              </div>
                            </div>
                          </div>
                        )}
                        <CardContent className="p-6">
                          <h3 className={`text-xl font-bold mb-3 ${textClass}`}>{item.title}</h3>
                          <p className={`${mutedText} leading-relaxed`}>{item.description}</p>
                          {item.videoUrl && (
                            <div className="mt-6">
                              <Button variant="outline" className="gap-2 border-border hover:bg-muted/50" onClick={() => setVideoUrl(item.videoUrl!)}>
                                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                Videoyu İzle
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </div>
              </Tabs>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black/95 border-none">
          {lightboxImage && (
            <div className="relative">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-lg font-medium">{lightboxImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={!!videoUrl} onOpenChange={() => setVideoUrl(null)}>
        <DialogContent className="max-w-3xl w-[95vw] bg-black border-none p-0">
          {videoUrl && (
            <div className="aspect-video w-full">
              <iframe
                src={videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? `https://www.youtube.com/embed/${videoUrl.split("/").pop()}` : videoUrl}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WorkflowTabsTemplate;
