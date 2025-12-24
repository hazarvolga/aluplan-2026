import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

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
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/section:scale-x-100" />

            {/* Animated Bottom Line - Right to Left */}
            <motion.div
                className="absolute bottom-0 right-0 w-full h-[1px] bg-border/50 origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }} // Initial draw
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
            />
            {/* Hover Effect Line - Bottom */}
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-accent origin-right scale-x-0 transition-transform duration-500 ease-out group-hover/section:scale-x-100" />

            <div className="container mx-auto px-4 relative z-10">
                {title && <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>}
                <div className="flex flex-wrap gap-4 justify-center">
                    {links.map((link, index) => {
                        // Use passed color or default to css variable --accent if not provided (though safely handle via style)
                        const hoverColor = link.color || "hsl(var(--accent))";

                        return (
                            <Button
                                key={index}
                                variant="outline"
                                size="lg"
                                asChild
                                className="h-auto py-4 px-6 text-base group hover:text-white transition-all duration-300 relative overflow-hidden border-input"
                                style={{
                                    "--hover-color": hoverColor,
                                } as React.CSSProperties}
                            >
                                <Link href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                                    <span className="absolute inset-0 bg-[var(--hover-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        {link.text}
                                        {link.external && <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100" />}
                                    </span>
                                    {/* Border color override on hover */}
                                    <span className="absolute inset-0 border border-[var(--hover-color)] opacity-0 group-hover:opacity-100 rounded-[inherit] pointer-events-none transition-opacity duration-300" />
                                </Link>
                            </Button>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
