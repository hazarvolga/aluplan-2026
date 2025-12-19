import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import licenseImg from "@/assets/solutions/cds/ramp/lisans.jpg";

interface Link {
  text: string;
  url: string;
  variant?: "link" | "default" | "outline";
}

interface CDSLicenseInfoSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  systemRequirements?: string;
  languages?: string;
  imageUrl?: string | StaticImageData;
  imageAlt?: string;
  links?: Link[];
  quoteFormUrl?: string;
  quoteFormText?: string;
}

const CDSLicenseInfoSection = ({
  title = "Lisans ve Gereksinimler",
  subtitle = "Tek kullanıcı lisansı, mevcut Allplan lisansına bağlıdır ve bir PC'den diğerine kolayca aktarılabilir.",
  description = "Eklentiyi yükledikten sonra deneme sürümünü 14 gün ücretsiz olarak kullanabilirsiniz.",
  systemRequirements = "Allplan 2020 – 2023",
  languages = "Almanca, İngilizce ve İtalyanca",
  imageUrl = licenseImg,
  imageAlt = "Lisans",
  links = [],
  quoteFormUrl = "https://forms.office.com/r/XLQm9JPTSR",
  quoteFormText = "Teklif Talep Formu",
}: CDSLicenseInfoSectionProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {title}
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">{subtitle}</strong>
                  </p>
                  {description && (
                    <p>{description}</p>
                  )}
                </div>
              </div>

              {(systemRequirements || languages) && (
                <div className="border-t border-border pt-6 space-y-3">
                  {systemRequirements && (
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Sistem gereksinimleri:</strong> {systemRequirements}
                    </p>
                  )}
                  {languages && (
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Mevcut diller:</strong> {languages}
                    </p>
                  )}
                </div>
              )}

              {links.length > 0 && (
                <div className="border-t border-border pt-6 space-y-3">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Bağlantılar:</strong>
                  </p>
                  <div className="flex flex-col gap-2">
                    {links.map((link, idx) => (
                      <Button 
                        key={idx} 
                        asChild 
                        variant={link.variant || "link"} 
                        className={link.variant === "link" ? "p-0 h-auto justify-start" : "w-full sm:w-auto"}
                      >
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={link.variant === "link" ? "text-accent hover:opacity-80" : ""}
                        >
                          {link.text}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {quoteFormUrl && (
                <div className="border-t border-border pt-6">
                  <Button asChild variant="default" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-graphite-950 font-semibold">
                    <a 
                      href={quoteFormUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {quoteFormText}
                    </a>
                  </Button>
                </div>
              )}
            </div>

            {/* Right Column - Image */}
            {imageUrl && (
              <div className="flex items-center justify-center lg:justify-end">
                <Image 
                  src={imageUrl} 
                  alt={imageAlt}
                  {...(typeof imageUrl === 'string' ? { width: 512, height: 384 } : {})}
                  className="w-full max-w-lg rounded-lg shadow-lg h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CDSLicenseInfoSection;
