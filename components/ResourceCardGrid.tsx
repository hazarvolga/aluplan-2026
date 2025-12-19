import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ResourceItem = {
  image: string | StaticImageData;
  title: string;
  subtitle?: string;
  buttonText: string;
  href: string;
  external?: boolean;
};

type ResourceCardGridProps = {
  items: ResourceItem[];
  imageContainerClassName?: string;
};

export default function ResourceCardGrid({ items, imageContainerClassName }: ResourceCardGridProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, idx) => {
             const isStaticImage = typeof item.image !== 'string';
             
             return (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className={`aspect-[4/3] w-full p-4 flex items-center justify-center border-b border-border relative ${imageContainerClassName ?? 'bg-card'}`}>
                <Image
                  src={item.image as string | StaticImageData}
                  alt={item.title}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={typeof item.image === 'string' && (item.image as string).startsWith('http')}
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {item.subtitle}
                  </p>
                )}
                <div>
                  <Button
                    variant="outline"
                    className="border-accent/30 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.buttonText}
                      </a>
                    ) : (
                      <Link href={item.href}>
                        {item.buttonText}
                      </Link>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
