import AnimatedCounter from "@/components/AnimatedCounter";
import { cn } from "@/lib/utils";

type StatItem = {
  value: number;
  suffix?: string;
  label: string;
  description: string;
};

type StatsTemplateProps = {
  title?: string;
  items?: StatItem[];
  className?: string;
};

const defaultItems: StatItem[] = [
  // ... (keep items)
  { value: 52, suffix: "%", label: "Verimlilik Artışı", description: "Yüksek düzeyde otomatik iş akışlarıyla verimliliği artırın." },
  { value: 60, suffix: "%", label: "Daha Yüksek Kalite", description: "Doğrulama kuralları ve güvenlik kontrolleri ile tasarımda hata oranını en aza indirin." },
  { value: 75, suffix: "%", label: "Daha Hızlı Tasarım", description: "Prefabrik elemanlar için özelleştirilmiş modelleme teknikleri ile hassas modelleme." },
  { value: 50, suffix: "%", label: "Daha Fazla Performans", description: "İçe aktarılan IFC nesnelerini doğrudan akıllı prefabrik elemanlara dönüştürün." },
];

const StatsTemplate = ({ title = "Öne Çıkan Göstergeler", items = defaultItems, className }: StatsTemplateProps) => {
  const lgCols = items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";

  return (
    <section className={cn("py-20 bg-accent/10", className)}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
          </div>
        )}
        <div className={cn("grid sm:grid-cols-2 gap-8", lgCols)}>
          {items.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsTemplate;
