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
  theme?: "default" | "v2-dark";
};

const StatsSection = ({ items, variant = "default", theme = "default" }: StatsSectionProps) => {
  const isDark = theme === "v2-dark";
  const bgClass = isDark ? "bg-[#020202] text-white" : "bg-background";
  const cardBg = isDark ? "bg-white/5 border-white/10" : "bg-card border-border";
  const mutedText = isDark ? "text-gray-400" : "text-muted-foreground";
  const textClass = isDark ? "text-white" : "text-foreground";

  if (!items || items.length === 0) return null;
  if (variant === "animated") {
    const mapped = items.map((s) => {
      const m = String(s.value).match(/^(\d+)(.*)$/);
      const v = m ? parseInt(m[1], 10) : Number(s.value) || 0;
      const suf = s.suffix || (m && m[2] ? m[2] : undefined);
      return { value: v, suffix: suf, label: s.label, description: s.description };
    });
    return (
      <div className={bgClass}>
        <StatsTemplate title="" items={mapped} className="bg-transparent" />
      </div>
    );
  }
  return (
    <section className={`py-16 ${bgClass}`} aria-label="İstatistikler">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((stat, index) => (
            <div key={index} className={`text-center p-6 rounded-xl shadow-sm ${cardBg}`}>
              <div className={`text-sm font-semibold uppercase tracking-wide mb-2 ${mutedText}`}>
                {stat.label}
              </div>
              <div className={`text-5xl font-bold mb-3 ${textClass}`}>
                {stat.value}
              </div>
              <p className={`text-sm ${mutedText}`}>
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
