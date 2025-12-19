import React from "react";
import { cn } from "@/lib/utils";
type DividerProps = { className?: string; container?: boolean; };
const Divider = ({ className, container = true }: DividerProps) => {
  return (
    <section className={cn("h-16 bg-graphite-950 relative", className)}>
      <div className={cn(container && "container mx-auto px-4 sm:px-6 lg:px-8","h-full flex items-center group")}>
        <div className="w-full h-px bg-white/10 relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-accent/60 transition-all duration-700 group-hover:w-full" />
        </div>
      </div>
    </section>
  );
};
export default Divider;
