import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ChallengesSectionProps = {
  items: string[];
  id?: string;
  theme?: "default" | "v2-dark";
};

const ChallengesSection = ({ items, id, theme = "default" }: ChallengesSectionProps) => {
  const isDark = theme === "v2-dark";
  const bgClass = isDark ? "bg-[#0B1120]" : "bg-muted/30";
  const cardBg = isDark ? "bg-white/5 border-white/10" : "bg-card border-border";
  const mutedText = isDark ? "text-gray-300" : "text-muted-foreground";
  const textClass = isDark ? "text-white" : "text-foreground";

  if (!items || items.length === 0) return null;
  return (
    <section id={id} className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 bg-accent/10 text-accent border-accent/30">
            ZORLU DURUMLAR
          </Badge>
          <h2 className={`font-display text-3xl md:text-4xl font-bold ${textClass}`}>
            AŞAĞIDAKİ ZORLUKLARLA SÜREKLİ MÜCADELE EDİYOR MUSUNUZ?
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {items.map((text, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <Card className={`${cardBg} h-full`}>
                    <CardContent className="p-6 flex items-center justify-center min-h-[120px]">
                      <p className={`${mutedText} text-center`}>{text}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
