"use client";

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface GalleryImage {
  id: string;
  src: string | StaticImageData;
  alt: string;
  title: string;
  description: string;
  category: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  sectionTitle: string;
  sectionDescription: string;
  hideSectionHeader?: boolean;
  hideOverlayText?: boolean;
  hideCategoryBadge?: boolean;
  hideCardFooter?: boolean;
  hideModalMeta?: boolean;
  hideCTA?: boolean;
  hideCategoryFilter?: boolean;
}

export default function ImageGallery({ images, sectionTitle, sectionDescription, hideSectionHeader = false, hideOverlayText = false, hideCategoryBadge = false, hideCardFooter = false, hideModalMeta = false, hideCTA = false, hideCategoryFilter = false }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  const filteredImages = activeCategory === 'all' ? images : images.filter(img => img.category === activeCategory);
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!hideSectionHeader && (
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{sectionTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{sectionDescription}</p>
          </div>
        )}
        {!hideCategoryFilter && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 border ${
                  activeCategory === category ? 'bg-accent text-accent-foreground border-accent shadow-md' : 'bg-background text-foreground border-border hover:bg-accent/10 hover:border-accent/40'
                }`}
              >
                {category === 'all' ? 'Tümü' : (category ? category.charAt(0).toUpperCase() + category.slice(1) : '')}
              </button>
            ))}
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                {!hideOverlayText && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                )}
              </div>
              {!hideCardFooter && (
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    {!hideCategoryBadge && image.category && image.category !== 'galeri' && (
                      <span className="text-sm text-accent font-semibold">
                        {image.category}
                      </span>
                    )}
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 0 1 6 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="max-w-4xl w-full bg-background border border-border rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                {typeof selectedImage.src === 'object' && (selectedImage.src as StaticImageData).width ? (
                  <Image src={selectedImage.src as StaticImageData} alt={selectedImage.alt} width={(selectedImage.src as StaticImageData).width} height={(selectedImage.src as StaticImageData).height} className="w-full h-auto" />
                ) : (
                  <div className="relative aspect-video">
                    <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-contain" />
                  </div>
                )}
                <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {!hideModalMeta && (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{selectedImage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedImage.description}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
