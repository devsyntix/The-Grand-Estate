import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoId = 'LXb3EKWsInQ',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B1713] rounded-2xl border border-[#C5A880]/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#12221B] border-b border-[#C5A880]/20">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <h4 id="video-modal-title" className="text-white font-serif text-base sm:text-lg font-semibold tracking-wide">
              The Grand Estate — 4K Architectural Walkthrough Experience
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#A0AFA8] hover:text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed Frame */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title="The Grand Estate 4K Video Tour"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Video Footer Info */}
        <div className="p-4 bg-[#0F1D17] border-t border-[#C5A880]/20 flex flex-wrap items-center justify-between gap-3 text-xs text-[#A0AFA8]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Cinematic 4K UHD Ultra-Luxury Estate Tour • Bangalore North</span>
          </div>
          <div className="text-[#C5A880]">
            Model Residence & Masterplan Drone Perspective
          </div>
        </div>
      </div>
    </div>
  );
};
