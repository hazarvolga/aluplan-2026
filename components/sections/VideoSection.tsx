type VideoSectionProps = {
  youtubeId: string;
  title?: string;
  description?: string;
};

const VideoSection = ({ youtubeId, title, description }: VideoSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {title && (
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">{title}</h3>
          )}
          {description && (
            <p className="text-muted-foreground mb-6">{description}</p>
          )}
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title || "Video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
