import React from "react";

interface VideoColumn {
    titleTR: string;
    titleDE?: string;
    videoUrl?: string;
    note?: string;
}

interface VideoTwoColumnProps {
    title: string;
    columns: VideoColumn[];
}

const VideoTwoColumn: React.FC<VideoTwoColumnProps> = ({ title, columns }) => {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center uppercase">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {columns.map((col, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black/5 relative">
                                {col.videoUrl ? (
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={col.videoUrl}
                                        title={col.titleTR}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute inset-0 w-full h-full"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-muted-foreground">
                                        {col.note || "Video hazırlanıyor"}
                                    </div>
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-foreground">{col.titleTR}</h3>
                                {col.titleDE && (
                                    <p className="text-sm text-muted-foreground">{col.titleDE}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoTwoColumn;
