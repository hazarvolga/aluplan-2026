import StatsTemplate from "@/components/StatsTemplate";

type StatItem = {
  label: string;
  value: string | number;
  description: string;
  suffix?: string;
};

type StatsSectionProps = {
  items: StatItem[];
  variant?: "default" | "animated";
};

const StatsSection = ({ items, variant = "default" }: StatsSectionProps) => {
  if (!items || items.length === 0) return null;
  if (variant === "animated") {
    const mapped = items.map((s) => {
      const m = String(s.value).match(/^(\d+)(.*)$/);
      const v = m ? parseInt(m[1], 10) : Number(s.value) || 0;
      const suf = s.suffix || (m && m[2] ? m[2] : undefined);
      return { value: v, suffix: suf, label: s.label, description: s.description };
    });
    return <StatsTemplate title="" items={mapped} />;
  }
  return (
    <section className="py-16 bg-background" aria-label="İstatistikler">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card border border-border shadow-sm">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                {stat.label}
              </div>
              <div className="text-5xl font-bold text-foreground mb-3">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
