import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

type ModuleCardProps = {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  link?: string;
  external?: boolean;
  buttonText?: string;
  videoUrl?: string;
};

const ModuleCard = ({ title, description, imageSrc, link, external, buttonText = "Detaylı Bilgi", videoUrl }: ModuleCardProps) => {

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/') + '?autoplay=1';
    }
    if (url.includes('youtu.be/')) {
      return url.replace('youtu.be/', 'www.youtube.com/embed/') + '?autoplay=1';
    }
    return url;
  };

  const content = (
    <div className="bg-card rounded-xl border border-border shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden relative">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover hover:scale-105 transition-transform duration-300"
          fill
        />
        {videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{description}</p>

        {videoUrl ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full gap-2 group">
                {buttonText} <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black border-none">
              <div className="aspect-video w-full relative">
                <iframe
                  width="100%"
                  height="100%"
                  src={getEmbedUrl(videoUrl)}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        ) : link ? (
          external ? (
            <Button variant="outline" className="w-full" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {buttonText}
              </a>
            </Button>
          ) : (
            <Button variant="outline" className="w-full" asChild>
              <Link href={link}>
                {buttonText}
              </Link>
            </Button>
          )
        ) : null}
      </div>
    </div>
  );

  // If it's a video card, the main click action is on the button (modal), but we shouldn't wrap the whole card in a link if videoUrl is present.
  // We return the content directly which handles the button-triggered modal.
  return content;
};

export default ModuleCard;
