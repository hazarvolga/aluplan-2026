import Image, { StaticImageData } from "next/image";

interface PostHeroSectionProps {
  title: string;
  paragraphs: string[];
  rightParagraphs?: string[];
  videoUrl?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
}

export default function PostHeroSection({ title, paragraphs, rightParagraphs, videoUrl, imageSrc, imageAlt }: PostHeroSectionProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              {title}
            </h3>
            {paragraphs.map((p, i) => (
              <p key={i} className={i === paragraphs.length - 1 ? "text-muted-foreground" : "text-muted-foreground mb-4"}>
                {p}
              </p>
            ))}
          </div>
          {(videoUrl || imageSrc || (rightParagraphs && rightParagraphs.length > 0)) && (
            <div>
              {rightParagraphs && rightParagraphs.length > 0 ? (
                rightParagraphs.map((p, i) => (
                  <p key={i} className={i === rightParagraphs.length - 1 ? "text-muted-foreground" : "text-muted-foreground mb-4"}>
                    {p}
                  </p>
                ))
              ) : videoUrl ? (
                <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title={title}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden shadow-xl relative w-full h-auto">
                  {typeof imageSrc === 'string' ? (
                     <div className="relative aspect-video">
                        <Image src={imageSrc} alt={imageAlt || title} fill className="object-cover" />
                     </div>
                  ) : (
                     <Image src={imageSrc!} alt={imageAlt || title} className="w-full h-auto object-cover" />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
