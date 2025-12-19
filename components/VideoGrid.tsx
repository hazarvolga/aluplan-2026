type VideoItem = {
  youtubeId: string;
  title: string;
  description?: string;
};

type VideoGridProps = {
  items: VideoItem[];
};

export default function VideoGrid({ items }: VideoGridProps) {
  if (!items || items.length === 0) return null;
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-border/40 bg-background shadow-sm">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${item.youtubeId}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-8">
                <h3 className="font-display text-lg md:text-xl font-bold text-foreground">{item.title}</h3>
                {item.description && (
                  <p className="text-muted-foreground text-sm md:text-base mt-2 leading-relaxed">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
