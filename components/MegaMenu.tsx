import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface MegaMenuSection {
  title: string;
  items: { name: string; href: string }[];
}

interface MegaMenuProps {
  sections: MegaMenuSection[];
  onClose: () => void;
}

const MegaMenu = ({ sections, onClose }: MegaMenuProps) => {
  return (
    <div className="absolute left-0 right-0 top-full w-full bg-background border-b border-border/40 shadow-xl z-[10002]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wide text-accent mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-sm text-foreground/80 hover:text-accent transition-colors flex items-center gap-1 group"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
