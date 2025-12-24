"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

interface TabItem {
  value: string;
  labelTR: string;
  content: React.ReactNode;
}

export default function RegulaTabs({ title, defaultValue, items }: { title: string; defaultValue: string; items: TabItem[] }) {
  const [active, setActive] = useState<string>(defaultValue);
  const current = items.find((i) => i.value === active) || items[0];
  return (
    <section className="section bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} align="center" className="py-0 bg-transparent mb-8" compact titleSize="lg" />
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {items.map((i) => (
            <button
              key={i.value}
              onClick={() => setActive(i.value)}
              className={`px-4 py-2 rounded-xl border transition-colors ${active === i.value
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-background text-muted-foreground border-border hover:bg-card hover:text-foreground"
                }`}
            >
              {i.labelTR}
            </button>
          ))}
        </div>
        <div className="bg-background rounded-xl shadow-sm p-4 border border-border">
          {current?.content}
        </div>
      </div>
    </section>
  );
}
