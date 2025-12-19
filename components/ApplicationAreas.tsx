import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface AreaItem {
  icon?: React.ReactNode | string | StaticImageData;
  title: string;
  description?: string;
}

export default function ApplicationAreas({ title, items }: { title?: string; items: AreaItem[] }) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <SectionHeader title={title} align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <Card key={idx} className="p-6 flex items-start gap-4">
              {item.icon ? (
                (typeof item.icon === "string" || (typeof item.icon === "object" && "src" in item.icon)) ? (
                   <Image 
                     src={item.icon as string | StaticImageData} 
                     alt={item.title} 
                     className="w-12 h-12 object-contain" 
                     width={48} 
                     height={48} 
                   />
                ) : (
                   <div className="w-12 h-12 flex items-center justify-center">{item.icon as React.ReactNode}</div>
                )
              ) : null}
              <div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                {item.description && <p className="text-sm text-muted-foreground mt-1">{item.description}</p>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
