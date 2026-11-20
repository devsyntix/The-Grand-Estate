import React, { useState } from 'react';
import { Sparkles, Maximize2, Tag, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../../data/estateData';

interface GalleryProps {
  onOpenLightbox: (index: number) => void;
  onOpenBrochure: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox, onOpenBrochure }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'exterior', label: 'Exterior Architecture' },
    { id: 'living', label: 'Living Spaces' },
    { id: 'interiors', label: 'Interiors & Kitchen' },
    { id: 'bedrooms', label: 'Bedrooms' },
    { id: 'amenities', label: 'Clubhouse & Pool' },
    { id: 'landscape', label: 'Landscape & Aerial' },
  ];

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#081812] text-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#152B20] border border-[#C5A880]/30 text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              IMMERSIVE VISUAL TOUR
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Architectural Image Gallery
          </h2>

          <p className="text-sm sm:text-base text-[#B2C2BA] font-light leading-relaxed">
            Witness the refined aesthetic harmony of raw concrete, Italian marble, warm Burmese teak, and biophilic garden sanctuaries.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C5A880] text-[#061D15] shadow-lg shadow-[#C5A880]/20 font-bold'
                    : 'bg-[#11231C] hover:bg-[#162D23] text-[#B2C2BA] border border-[#C5A880]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Gallery Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => {
            // Find global index in GALLERY_IMAGES for accurate lightbox indexing
            const globalIndex = GALLERY_IMAGES.findIndex((g) => g.id === image.id);
            const isTall = index % 5 === 0;

            return (
              <div
                key={image.id}
                onClick={() => onOpenLightbox(globalIndex >= 0 ? globalIndex : index)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-[#C5A880]/25 hover:border-[#D4AF37] shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  isTall ? 'sm:row-span-2 min-h-[380px] sm:min-h-[500px]' : 'min-h-[280px] sm:min-h-[320px]'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                
                {/* Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Category badge top right */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#D4AF37] text-[10px] font-semibold tracking-wider uppercase">
                  {image.categoryLabel}
                </div>

                {/* Bottom Title & Expand Icon */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                        {image.title}
                      </h4>
                      <p className="text-xs text-[#E5DDD0]/80 mt-1 line-clamp-2">
                        {image.caption}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#183528] border border-[#C5A880]/40 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#C5A880] group-hover:text-[#061D15] transition-all">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Action */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenLightbox(0)}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] hover:brightness-110 text-[#0B2B20] text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <span>Launch Full-Screen Gallery</span>
            <Maximize2 className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenBrochure}
            className="px-6 py-3 rounded-xl bg-[#11231C] hover:bg-[#162D23] text-white border border-[#C5A880]/30 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Request High-Res Architectural Folio
          </button>
        </div>

      </div>
    </section>
  );
};
