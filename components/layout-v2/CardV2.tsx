"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";

interface CardV2Props {
    title: string;
    href: string;
    index: number;
}

export const CardV2 = ({ title, href, index }: CardV2Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <Link
                href={href}
                className="group relative block h-full p-8 rounded-2xl border bg-card border-border/10 hover:border-accent/30 hover:bg-card/80 transition-all duration-300 shadow-sm"
            >
                <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-xl bg-muted border border-border/10 group-hover:text-accent text-muted-foreground transition-colors">
                        <Box className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground">
                    Profesyonel çözüm paketi.
                </p>
            </Link>
        </motion.div>
    );
};
