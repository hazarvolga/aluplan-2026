import Link from "next/link";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

type BenefitItem = {
  title: string;
  description?: React.ReactNode;
  image?: string | StaticImageData;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
};

type BenefitsGridProps = {
  items: BenefitItem[];
  className?: string;
  gridClassName?: string;
};

const BenefitsGrid = ({ items, className, gridClassName }: BenefitsGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12", gridClassName, className)}>
      {items.map((item, index) => {
        const content = (
          <div
            className={cn(
              "flex gap-6 p-8 bg-background rounded-2xl border border-border/40 shadow-sm hover:shadow-lg transition-shadow",
              item.href && "cursor-pointer"
            )}
          >
            {item.image || item.icon ? (
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-border/40 inline-flex items-center justify-center relative overflow-hidden">
                {item.image ? (
                  typeof item.image === "string" ? (
                    <Image src={item.image} alt={item.title} width={32} height={32} className="w-8 h-8 object-contain" />
                  ) : (
                    <Image src={item.image} alt={item.title} className="w-8 h-8 object-contain" />
                  )
                ) : item.icon ? (
                  <span className="text-foreground">{item.icon}</span>
                ) : null}
              </span>
            ) : null}
            <div>
              <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-1.5">{item.title}</h3>
              {item.description ? (
                typeof item.description === "string" || typeof item.description === "number" ? (
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.description}</p>
                ) : (
                  <div className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.description}</div>
                )
              ) : null}
            </div>
          </div>
        );

        if (item.href) {
          return (
            <Link 
              key={index} 
              href={item.href} 
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {content}
            </Link>
          );
        }

        return <div key={index}>{content}</div>;
      })}
    </div>
  );
};

export default BenefitsGrid;
