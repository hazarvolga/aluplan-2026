type VideoItem = {
  youtubeId: string;
  title: string;
  description?: string;
};

type VideoGridLegacyItem = {
  url: string;
  title?: string;
};

type VideoGridProps = {
  items?: VideoItem[];
  videos?: VideoGridLegacyItem[];
  columns?: { mobile?: number; tablet?: number; desktop?: number };
};

export default function VideoGrid({ items, videos, columns }: VideoGridProps) {
  // Normalize items/videos
  let finalItems: VideoItem[] = [];

  if (items && items.length > 0) {
    finalItems = items;
  } else if (videos && videos.length > 0) {
    finalItems = videos.map((v, i) => {
      // Extract ID from https://www.youtube.com/embed/ID
      // or other formats if needed, but assuming embed based on usage
      const parts = v.url.split('/');
      const id = parts[parts.length - 1];
      return {
        youtubeId: id,
        title: v.title || `Video ${i + 1}`,
        description: ""
      };
    });
  }

  if (finalItems.length === 0) return null;

  // grid-cols logic based on columns prop or default
  // Default: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
  let gridClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  if (columns) {
    // strict mapping might be complex with tailwind classes unless using style or safelist
    // Simplification: if desktop=2, use lg:grid-cols-2
    if (columns.desktop === 2) gridClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-2";
    if (columns.desktop === 4) gridClass = "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${gridClass} gap-12`}>
          {finalItems.map((item, idx) => (
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
