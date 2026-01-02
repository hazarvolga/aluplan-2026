import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface VideoItem {
    title: string;
    videoUrl: string;
}

interface VideoGridSectionProps {
    title: string;
    subtitle: string;
    items: VideoItem[];
}

const VideoGridSection = ({ title, subtitle, items }: VideoGridSectionProps) => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={title}
                    description={subtitle}
                    align="center"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {items.map((item, index) => (
                        <Card key={index} className="overflow-hidden border-border/50 hover:border-accent/50 transition-colors duration-300">
                            <div className="aspect-video w-full bg-black/5 relative group">
                                {item.videoUrl && (
                                    <iframe
                                        src={item.videoUrl}
                                        title={item.title}
                                        className="w-full h-full absolute inset-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                )}
                            </div>
                            <CardHeader className="p-6">
                                <CardTitle className="text-lg font-medium leading-snug">
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
