import SectionHeader from "@/components/SectionHeader";

interface VideoItem {
  titleTR?: string;
  titleDE?: string;
  videoUrl: string;
}

export default function MasonryVideoGrid({ title, items }: { title: string; items: VideoItem[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} align="center" className="py-0 bg-transparent mb-12" compact titleSize="lg" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((v, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-4">
              <div className="aspect-video rounded-lg overflow-hidden mb-3">
                <iframe
                  src={v.videoUrl}
                  title={v.titleTR || v.titleDE || `Video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{v.titleTR || v.titleDE}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

