"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface VideoModalProps {
  youtubeId: string;
  thumbnailUrl?: string | StaticImageData;
  title: string;
  className?: string;
}

export const VideoModal = ({ youtubeId, thumbnailUrl, title, className = "" }: VideoModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultThumbnail: string | StaticImageData = thumbnailUrl || "/placeholder.svg";
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(defaultThumbnail);

  useEffect(() => {
    setImgSrc(thumbnailUrl || "/placeholder.svg");
  }, [thumbnailUrl]);

  return (
    <>
      <div 
        className={`relative cursor-pointer group ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src={imgSrc} 
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-all group-hover:scale-110">
            <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-black border-none">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VideoModal;
