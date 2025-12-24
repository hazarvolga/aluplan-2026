"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface WorkflowLink {
    text: string;
    href: string;
    external?: boolean;
    color?: string; // Hex color code
}

interface WorkflowLinksSectionProps {
    links: WorkflowLink[];
    title?: string;
}

export function WorkflowLinksSection({ links, title }: WorkflowLinksSectionProps) {
    const [hoveredColor, setHoveredColor] = useState<string | null>(null);

    return (
        <section className="py-12 bg-background relative overflow-hidden group/section">
            {/* Animated Top Line - Left to Right */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[1px] bg-border/50 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }} // Initial draw
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
            />
            {/* Hover Effect Line - Top */}
            <div
                className="absolute top-0 left-0 w-full h-[1px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/section:scale-x-100"
                style={{ backgroundColor: hoveredColor || "hsl(var(--accent))", transition: "background-color 0.3s ease, transform 0.5s ease-out" }}
            />

            {/* Animated Bottom Line - Right to Left */}
            <motion.div
                className="absolute bottom-0 right-0 w-full h-[1px] bg-border/50 origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }} // Initial draw
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
            />
            {/* Hover Effect Line - Bottom */}
            <div
                className="absolute bottom-0 right-0 w-full h-[1px] origin-right scale-x-0 transition-transform duration-500 ease-out group-hover/section:scale-x-100"
                style={{ backgroundColor: hoveredColor || "hsl(var(--accent))", transition: "background-color 0.3s ease, transform 0.5s ease-out" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {title && <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>}
                <div className="flex flex-wrap gap-4 justify-center">
                    {links.map((link, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            size="lg"
                            asChild
                            className="h-auto py-4 px-6 text-base group hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 relative overflow-hidden"
                            onMouseEnter={() => setHoveredColor(link.color || null)}
                            onMouseLeave={() => setHoveredColor(null)}
                        >
                            <Link href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                                <span className="relative z-10 flex items-center gap-2">
                                    {link.text}
                                    {link.external && <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />}
                                </span>
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}
