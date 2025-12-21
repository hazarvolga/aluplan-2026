import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute left-0 right-0 top-full w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl z-[10002]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-10">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#3B82F6] mb-4 border-b border-white/5 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-sm font-medium text-gray-400 hover:text-white transition-all flex items-center gap-2 group"
                    >
                      <ChevronRight className="h-3 w-3 text-[#3B82F6] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
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
    </motion.div>
  );
};

export default MegaMenu;
