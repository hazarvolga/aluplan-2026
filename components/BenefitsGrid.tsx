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
  variant?: "default" | "modern";
};

const BenefitsGrid = ({ items, className, gridClassName, variant = "default" }: BenefitsGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", gridClassName, className)}>
      {items.map((item, index) => {
        let content;

        if (variant === "modern") {
          content = (
            <div className={cn(
              "group relative p-6 pr-20 pb-10 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full",
              item.href && "cursor-pointer"
            )}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full -mr-4 -mt-4 transition-all group-hover:from-accent/20" />
              {item.image || item.icon ? (
                <div className="absolute top-4 right-4 z-10 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {item.image ? (
                    typeof item.image === "string" ? (
                      <Image src={item.image} alt={item.title} width={28} height={28} className="w-7 h-7 object-contain" />
                    ) : (
                      <Image src={item.image} alt={item.title} className="w-7 h-7 object-contain" />
                    )
                  ) : item.icon ? (
                    <span className="text-foreground">{item.icon}</span>
                  ) : null}
                </div>
              ) : null}

              <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>

              {item.description ? (
                typeof item.description === "string" || typeof item.description === "number" ? (
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                ) : (
                  <div className="text-muted-foreground text-sm leading-relaxed">{item.description}</div>
                )
              ) : null}
            </div>
          )
        } else {
          content = (
            <div
              className={cn(
                "flex gap-6 p-8 bg-background rounded-2xl border border-border/40 shadow-sm hover:shadow-lg transition-shadow h-full",
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
        }

        if (item.href) {
          return (
            <Link
              key={index}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="block h-full"
            >
              {content}
            </Link>
          );
        }

        return <div key={index} className="h-full">{content}</div>;
      })}
    </div>
  );
};

export default BenefitsGrid;
