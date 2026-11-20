import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';
import { GalleryImage } from '../../types';

interface LightboxModalProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  onEnquire: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
  onEnquire,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg animate-fadeIn select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery Lightbox"
    >
      {/* Top Bar Controls */}
      <div
        className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-b from-black/80 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#162D23] border border-[#C5A880]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
            <Tag className="w-3 h-3" />
            {current.categoryLabel}
          </span>
          <span className="text-white/60 text-xs tracking-widest font-mono">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onEnquire}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#C5A880] hover:bg-[#D4AF37] text-[#0B2B20] text-xs font-bold uppercase tracking-wider transition-all"
          >
            Enquire for this Unit
          </button>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-[#C5A880] text-white hover:text-[#0B2B20] border border-white/20 hover:border-[#C5A880] transition-all cursor-pointer group"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-[#C5A880] text-white hover:text-[#0B2B20] border border-white/20 hover:border-[#C5A880] transition-all cursor-pointer group"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Showcase Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] w-full mx-auto px-4 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-[#C5A880]/30 max-h-[70vh] flex items-center justify-center bg-black">
          <img
            src={current.url}
            alt={current.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption & Details Footer */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h4 className="text-white font-serif text-lg sm:text-xl font-medium tracking-wide">
            {current.title}
          </h4>
          <p className="text-[#A0AFA8] text-xs sm:text-sm mt-1 leading-relaxed">
            {current.caption}
          </p>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-white/40 tracking-widest uppercase hidden md:block">
        Use Arrow Keys ← → to navigate • ESC to close
      </div>
    </div>
  );
};
