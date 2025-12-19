import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Shield, Users, Cloud, Wrench } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "2024 Yeni Özellikleri",
    description: "En son teknolojilerle güçlendirilmiş BIM araçları",
    badge: "Yeni",
  },
  {
    icon: Zap,
    title: "Hızlı Performans",
    description: "Büyük projelerde bile akıcı çalışma deneyimi",
  },
  {
    icon: Shield,
    title: "Veri Güvenliği",
    description: "Proje verileriniz için maksimum güvenlik",
  },
  {
    icon: Users,
    title: "Ekip Çalışması",
    description: "Gerçek zamanlı işbirliği ve paylaşım",
  },
  {
    icon: Cloud,
    title: "Bulut Entegrasyonu",
    description: "Her yerden erişim ve senkronizasyon",
  },
  {
    icon: Wrench,
    title: "Kolay Özelleştirme",
    description: "İhtiyaçlarınıza göre uyarlanabilir araçlar",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-technical-grid" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent font-mono">Allplan 2024</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-accent mb-4 tracking-tight">
            Modern BIM&apos;in Gücü
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sektör lideri özellikler ve sürekli güncellenen teknoloji
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="relative group hover:shadow-technical transition-all duration-500 border border-white/10 hover:border-white/20 bg-graphite-950 overflow-hidden"
              >
              <div className="pointer-events-none absolute top-0 left-0 h-px w-0 group-hover:w-full bg-accent/60 transition-all duration-500" />
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all flex-shrink-0">
                      <Icon className="h-6 w-6 text-accent" />
                      </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display font-semibold text-white group-hover:text-accent transition-colors">
                          {feature.title}
                        </h3>
                        {feature.badge && (
                          <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/20">
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
