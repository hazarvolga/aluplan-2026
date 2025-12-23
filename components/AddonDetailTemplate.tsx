import React from "react";


type AddonDetailTemplateProps = {
  title: string;
  subtitle?: string;
  description?: string;
  sections: React.ReactNode[];
  customHero?: React.ReactNode;

};

const AddonDetailTemplate: React.FC<AddonDetailTemplateProps> = ({
  title,
  subtitle,
  description,
  sections,
  customHero,
}) => {
  return (
    <div className="min-h-screen bg-[#020202] text-white dark">
      {customHero ? (
        <>{customHero}</>
      ) : (
        <section className="py-24 gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08] bg-technical-grid" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <h2 className="text-xl md:text-2xl text-white/80 font-semibold mb-3">
                  {subtitle}
                </h2>
              )}
              {description && (
                <p className="text-lg text-white/80 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
        </section>
      )}
      {sections.map((section, idx) => (
        <React.Fragment key={idx}>{section}</React.Fragment>
      ))}
    </div>
  );
};

export default AddonDetailTemplate;
