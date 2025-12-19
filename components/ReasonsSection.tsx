import BenefitsGrid from "@/components/BenefitsGrid";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ReasonItem = {
  title: string;
  description: string;
  image?: string | StaticImageData;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
};

type ReasonsSectionProps = {
  items: ReasonItem[];
  variant?: "default" | "benefits";
  badgeText?: string;
  titleText?: string;
};

const ReasonsSection = ({ items, variant = "default", badgeText = "12 GEREKÇE", titleText = "NEDEN ALLPLAN" }: ReasonsSectionProps) => {
  if (!items || items.length === 0) return null;
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-accent/10 text-accent border-accent/30">
            {badgeText}
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {titleText}
          </h2>
        </div>
        {variant === "benefits" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((reason, index) => (
              <div key={index} className="group relative bg-card p-6 pr-20 pb-10 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-all group-hover:from-accent/20" />
                {reason.image && (
                  <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {typeof reason.image === 'string' ? (
                      <Image src={reason.image} alt={reason.title} width={28} height={28} className="w-7 h-7 object-contain" />
                    ) : (
                      <Image src={reason.image} alt={reason.title} width={28} height={28} className="w-7 h-7 object-contain" />
                    )}
                  </div>
                )}
                <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((reason, index) => (
              <Card key={index} className="border-border hover:shadow-technical transition-shadow">
                <CardContent className="p-6">
                  {reason.image && (
                    <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-white/10 border border-white/20 flex items-center justify-center relative">
                      {typeof reason.image === 'string' ? (
                        <Image
                          src={reason.image}
                          alt={reason.title}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      ) : (
                        <Image
                          src={reason.image}
                          alt={reason.title}
                          className="w-12 h-12 object-contain"
                        />
                      )}
                    </div>
                  )}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReasonsSection;
