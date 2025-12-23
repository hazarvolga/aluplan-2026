import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";

type InfoMediaTwoColumnProps = {
  title: string;
  subtitle?: string;
  description?: string;
  descriptions?: string[];
  imageSrc?: string | StaticImageData;
  videoUrl?: string;
  videoSrc?: string;
  secondVideoUrl?: string;
  secondVideoSrc?: string;
  className?: string;
  children?: ReactNode;
  leftContent?: ReactNode;
  reverse?: boolean;
};

const InfoMediaTwoColumn = ({
  title,
  subtitle,
  description,
  descriptions,
  imageSrc,
  videoUrl,
  videoSrc,
  secondVideoUrl,
  secondVideoSrc,
  className,
  children,
  leftContent,
  reverse,
}: InfoMediaTwoColumnProps) => {
  return (
    <section className={`py-16 ${className ?? 'bg-background'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className={`${reverse ? 'md:order-2' : ''}`}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 whitespace-pre-line">{title}</h2>
            {subtitle && (
              <h3 className="text-lg md:text-xl text-foreground font-semibold mb-3">{subtitle}</h3>
            )}
            {descriptions && descriptions.length > 0 ? (
              <div className="space-y-1">
                {descriptions.map((d, i) => (
                  <p key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">{d}</p>
                ))}
              </div>
            ) : description ? (
              <p className="text-muted-foreground text-base md:text-lg whitespace-pre-line">{description}</p>
            ) : null}
            {leftContent}
          </div>
          <div className={`space-y-4 ${reverse ? 'md:order-1' : ''}`}>
            {videoUrl ? (
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl shadow-xl"
                />
              </div>
            ) : videoSrc ? (
              <div className="aspect-video w-full">
                <video src={videoSrc} controls className="w-full h-full object-cover rounded-xl shadow-xl" />
              </div>
            ) : imageSrc ? (
              <div className="rounded-xl shadow-lg w-full relative h-auto">
                {typeof imageSrc === 'string' ? (
                  <div className="relative aspect-video">
                    <Image src={imageSrc.startsWith('http') ? '/placeholder.svg' : imageSrc} alt={title} fill className="object-cover rounded-xl" />
                  </div>
                ) : (
                  <Image src={imageSrc} alt={title} className="w-full h-auto rounded-xl" />
                )}
              </div>
            ) : null}
            {secondVideoUrl && (
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src={secondVideoUrl}
                  title={`${title} - Video 2`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl shadow-xl"
                />
              </div>
            )}
            {secondVideoSrc && (
              <div className="aspect-video w-full">
                <video src={secondVideoSrc} controls className="w-full h-full object-cover rounded-xl shadow-xl" />
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMediaTwoColumn;
