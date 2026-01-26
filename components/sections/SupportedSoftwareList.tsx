type SupportedSoftwareListProps = {
  title: string;
  subtitle?: string;
  software: string[];
  columns?: 2 | 3;
};

const SupportedSoftwareList = ({ 
  title, 
  subtitle, 
  software, 
  columns = 2 
}: SupportedSoftwareListProps) => {
  const gridColsClass = columns === 3 
    ? "md:grid-cols-2 lg:grid-cols-3" 
    : "md:grid-cols-2";

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className={`grid grid-cols-1 ${gridColsClass} gap-4 max-w-4xl mx-auto`}>
          {software.map((item, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg border border-border shadow-sm p-4 text-center hover:shadow-technical transition-shadow"
            >
              <span className="text-foreground font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedSoftwareList;
