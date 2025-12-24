import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface WorkflowLink {
    text: string;
    href: string;
    external?: boolean;
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
                className="absolute top-0 left-0 w-full h-[1px] bg-accent/50 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }} // Initial draw
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
            />
            {/* Hover Effect Line - Top */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-accent origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/section:scale-x-100" />

            {/* Animated Bottom Line - Right to Left */}
            <motion.div
                className="absolute bottom-0 right-0 w-full h-[1px] bg-accent/50 origin-right"
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
                    {links.map((link, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            size="lg"
                            asChild
                            className="h-auto py-4 px-6 text-base group hover:border-accent hover:bg-accent hover:text-white transition-all duration-300"
                        >
                            <Link href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                                {link.text}
                                {link.external && <ExternalLink className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100" />}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}
