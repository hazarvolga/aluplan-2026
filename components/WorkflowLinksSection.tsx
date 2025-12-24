import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

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
        <section className="py-12 bg-background border-y border-border/10">
            <div className="container mx-auto px-4">
                {title && <h3 className="text-2xl font-bold text-center mb-8">{title}</h3>}
                <div className="flex flex-wrap gap-4 justify-center">
                    {links.map((link, index) => (
                        <Button key={index} variant="outline" size="lg" asChild className="h-auto py-4 px-6 text-base group hover:border-accent hover:text-accent transition-all">
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
