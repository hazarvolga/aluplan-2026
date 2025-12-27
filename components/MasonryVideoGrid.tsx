import SectionHeader from "@/components/SectionHeader";

interface VideoItem {
  titleTR?: string;
  titleDE?: string;
  videoUrl: string;
}

export default function MasonryVideoGrid({ title, items, columns = 3 }: { title: string; items: VideoItem[]; columns?: 2 | 3 }) {
  const gridClass = columns === 2
    ? "grid grid-cols-1 sm:grid-cols-2 gap-8"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className={gridClass}>
          {items.map((v, idx) => (
            <div key={idx} className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl shadow-sm p-4 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
              <div className="aspect-video rounded-lg overflow-hidden mb-3">
                <iframe
                  src={v.videoUrl}
                  title={v.titleTR || v.titleDE || `Video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-sm font-medium text-foreground">{v.titleTR}</h3>
              {v.titleDE && (
                <p className="text-xs text-muted-foreground mt-1">{v.titleDE}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

