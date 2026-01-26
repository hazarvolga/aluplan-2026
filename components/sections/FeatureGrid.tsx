import Image, { StaticImageData } from "next/image";

type Feature = {
  icon: string | StaticImageData;
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: Feature[];
  columns?: 2 | 3 | 4;
  getIconPath?: (iconName: any) => string;
};

const FeatureGrid = ({ features, columns = 3, getIconPath }: FeatureGridProps) => {
  const gridColsClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${gridColsClass} gap-6`}>
          {features.map((feature, index) => {
             const iconSrc = getIconPath ? getIconPath(feature.icon) : feature.icon;
             const isStaticImage = typeof iconSrc !== 'string';
             
             return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Image
                src={iconSrc as string | StaticImageData}
                alt={feature.title}
                width={64}
                height={64}
                className="w-16 h-16 flex-shrink-0 object-contain"
              />
              <div>
                <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
