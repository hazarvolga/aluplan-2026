import React from "react";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  badgeVariant?: "accent" | "info" | "success" | "warning" | "danger" | "primary";
  align?: "center" | "left";
  titleSize?: "sm" | "md" | "lg" | "xl";
  compact?: boolean;
  className?: string;
};

const SectionHeader = ({ title, subtitle, description, badge, badgeVariant = "accent", align = "center", titleSize = "md", compact = false, className }: SectionHeaderProps) => {
  const alignClasses = align === "center" ? "text-center max-w-3xl mx-auto" : "text-left";
  const badgeClass = "text-accent";
  const titleSizeClasses =
    titleSize === "sm"
      ? "text-2xl md:text-3xl"
      : titleSize === "lg"
      ? "text-4xl md:text-5xl"
      : titleSize === "xl"
      ? "text-5xl md:text-6xl"
      : "text-3xl md:text-4xl";
  const sectionClass = className ? className : compact ? "py-6 bg-background" : "py-12 bg-background";
  const subtitleMargin = compact ? "mt-3" : "mt-4";
  const descriptionMargin = compact ? "mt-1" : "mt-2";
  return (
    <section className={sectionClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={align === "center" ? alignClasses : "text-left"}>
          {badge && <div className={`text-xs font-semibold uppercase tracking-wide ${badgeClass} mb-2`}>{badge}</div>}
          <h2 className={`font-display ${titleSizeClasses} font-bold text-foreground`}>{title}</h2>
          {subtitle && <p className={`text-muted-foreground ${subtitleMargin}`}>{subtitle}</p>}
          {description && <p className={`text-muted-foreground ${descriptionMargin}`}>{description}</p>}
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
