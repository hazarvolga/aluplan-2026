import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export interface QuickAction {
    text: string;
    href: string;
    external?: boolean;
    variant?: "default" | "outline" | "ghost" | "secondary" | "link";
    icon?: ReactNode;
}

interface QuickActionsSectionProps {
    actions: QuickAction[];
    className?: string;
}

const QuickActionsSection = ({ actions, className = "" }: QuickActionsSectionProps) => {
    if (!actions || actions.length === 0) return null;

    return (
        <section className={`py-6 bg-background border-b border-border ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center gap-4">
                    {actions.map((action, index) => {
                        const isExternal = action.external;
                        const linkProps = isExternal
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {};

                        return (
                            <Button
                                key={index}
                                variant={action.variant || "outline"}
                                size="lg"
                                asChild
                                className={action.variant === "default" ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}
                            >
                                {isExternal ? (
                                    <a href={action.href} {...linkProps} className="flex items-center gap-2">
                                        {action.text}
                                        {action.icon}
                                    </a>
                                ) : (
                                    <Link href={action.href} className="flex items-center gap-2">
                                        {action.text}
                                        {action.icon}
                                    </Link>
                                )}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default QuickActionsSection;
