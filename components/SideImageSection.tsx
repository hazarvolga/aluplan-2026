import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type SideImageSectionProps = {
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  title: string;
  subtitle?: string;
  description?: string;
  content?: string | ReactNode;
  icon?: string | StaticImageData;
  ctaButton?: {
    text: string;
    href: string;
    external?: boolean;
  };
  backgroundColor?: string;
  className?: string;
  theme?: "light" | "dark";
  verticalAlign?: "start" | "center" | "end";
};

const SideImageSection = ({
  imageSrc,
  imageAlt = "",
  imagePosition = "left",
  title,
  subtitle,
  description,
  content,
  icon,
  ctaButton,
  backgroundColor,
  className,
  theme = "light",
  verticalAlign = "center",
}: SideImageSectionProps) => {
  const isLeft = imagePosition === "left";
  const textColorClass = theme === "dark" ? "text-white" : "text-foreground";
  const subtitleColorClass = theme === "dark" ? "text-white/80" : "text-muted-foreground";
  const contentColorClass = theme === "dark" ? "text-white/70" : "text-muted-foreground";

  // Use design tokens for background if no specific color is provided
  // Default to bg-muted for light theme if no background specified (replacing old #ebebeb hardcode)
  const defaultBgClass = !backgroundColor ? (theme === "dark" ? "bg-background" : "bg-muted") : "";

  // Map verticalAlign to tailwind classes
  const alignmentClass = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
  }[verticalAlign];

  // Helper to check if link is video
  const isVideoLink = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com');
  };

  const isVideo = ctaButton ? (ctaButton.text === "Videoyu İzle" || isVideoLink(ctaButton.href)) : false;

  // Helper to get embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/') + '?autoplay=1';
    }
    if (url.includes('youtu.be/')) {
      return url.replace('youtu.be/', 'www.youtube.com/embed/') + '?autoplay=1';
    }
    return url;
  };

  return (
    <section
      className={cn(
        "section", // Standard padding from globals.css
        defaultBgClass,
        className
      )}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${imageSrc ? "lg:grid-cols-2" : ""} gap-8 lg:gap-12 ${alignmentClass} ${!isLeft ? "lg:grid-flow-dense" : ""}`}>
          {/* Image Column */}
          {imageSrc && (
            <div className={`${!isLeft ? "lg:col-start-2" : ""}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64 md:h-80 lg:h-96 w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          )}

          {/* Content Column */}
          <div className={`space-y-6 ${!isLeft && imageSrc ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            {icon && (
              <div className="mb-6 relative h-16 md:h-20 w-auto inline-block">
                <Image
                  src={icon}
                  alt="Icon"
                  className="h-16 md:h-20 w-auto object-contain"
                  width={200}
                  height={80}
                  style={{ width: "auto" }}
                />
              </div>
            )}

            {subtitle && (
              <p className={`text-sm md:text-base font-semibold uppercase tracking-wider ${subtitleColorClass}`}>
                {subtitle}
              </p>
            )}

            <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${textColorClass}`}>
              {title}
            </h2>

            {description && (
              <h3 className={`font-display text-xl md:text-2xl font-medium mt-2 ${textColorClass}`}>
                {description}
              </h3>
            )}

            <div className={`text-base md:text-lg leading-relaxed ${contentColorClass}`}>
              {typeof content === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              ) : (
                content
              )}
            </div>

            {ctaButton && (
              <div className="pt-4">
                {isVideo ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="lg"
                        className="group bg-accent hover:bg-accent/90 text-graphite-950 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {ctaButton.text}
                        <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black border-none">
                      <div className="aspect-video w-full relative">
                        <iframe
                          width="100%"
                          height="100%"
                          src={getEmbedUrl(ctaButton.href)}
                          title="Video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        ></iframe>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button
                    size="lg"
                    className="group bg-accent hover:bg-accent/90 text-graphite-950 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild={ctaButton.external}
                  >
                    {ctaButton.external ? (
                      <a
                        href={ctaButton.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        {ctaButton.text}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <a href={ctaButton.href} className="flex items-center">
                        {ctaButton.text}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideImageSection;
