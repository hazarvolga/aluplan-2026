import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface VideoItem {
    title: string;
    videoUrl: string;
}

interface VideoGridSectionProps {
    title: string;
    subtitle: string;
    description?: string;
    items: VideoItem[];
    features?: string[];
}

const VideoGridSection = ({ title, subtitle, description, items, features }: VideoGridSectionProps) => {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={title}
                    description={subtitle}
                    align="center"
                />

                {(description || (features && features.length > 0)) && (
                    <div className="max-w-3xl mx-auto mt-12 text-center">
                        {description && (
                            <p className="text-xl md:text-2xl font-bold text-foreground mb-8">
                                {description}
                            </p>
                        )}

                        {features && features.length > 0 && (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 shadow-[0_0_8px_rgba(var(--accent),0.5)]" />
                                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {items.map((item, index) => (
                        <Card key={index} className="overflow-hidden bg-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group">
                            <div className="aspect-video w-full bg-black/5 relative">
                                {item.videoUrl && (
                                    <iframe
                                        src={item.videoUrl}
                                        title={item.title}
                                        className="w-full h-full absolute inset-0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                )}
                            </div>
                            <CardHeader className="p-6">
                                <CardTitle className="text-lg font-medium leading-snug group-hover:text-accent transition-colors">
                                    {item.title}
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoGridSection;
