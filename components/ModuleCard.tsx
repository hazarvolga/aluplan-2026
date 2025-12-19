import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

type ModuleCardProps = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  link?: string;
  external?: boolean;
};

const ModuleCard = ({ title, description, imageSrc, link, external }: ModuleCardProps) => {
  const content = (
    <div className="bg-card rounded-xl border border-border shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden relative">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover hover:scale-105 transition-transform duration-300"
          fill
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{description}</p>
        {link && (
          <Button variant="outline" className="w-full">
            Detaylı Bilgi
          </Button>
        )}
      </div>
    </div>
  );

  if (!link) return content;

  if (external) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return (
    <Link href={link} className="block h-full">
      {content}
    </Link>
  );
};

export default ModuleCard;
