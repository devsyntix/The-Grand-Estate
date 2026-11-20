import React from 'react';
import { Play, Sparkles, Film, Clock, Volume2 } from 'lucide-react';

interface VideoTourProps {
  onOpenVideo: () => void;
  onOpenBrochure: () => void;
}

export const VideoTour: React.FC<VideoTourProps> = ({
  onOpenVideo,
  onOpenBrochure,
}) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#061812] text-white overflow-hidden">
      {/* Background Cinematic Architectural Poster */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80"
          alt="Cinematic Villa Walkthrough Preview"
          loading="lazy"
          className="w-full h-full object-cover object-center scale-105 opacity-40 hover:scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061812] via-[#061812]/70 to-[#061812]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#061812_85%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#152B20]/90 border border-[#C5A880]/40 backdrop-blur-md">
          <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#E4D2B8]">
            CINEMATIC PROPERTY REVEAL
          </span>
        </div>

        {/* Headings */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Experience The Grand Estate <br />
            <span className="gold-gradient-text italic font-serif">In Motion.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#C5D4CC] max-w-2xl mx-auto font-light leading-relaxed">
            Take a 4K drone flight across the 25-acre green masterplan, step into the 24-foot double height grand salon, and stroll through the bamboo-shaded yoga deck.
          </p>
        </div>

        {/* Pulsing Play Button */}
        <div className="py-4">
          <button
            onClick={onOpenVideo}
            className="group relative inline-flex items-center justify-center cursor-pointer focus:outline-none"
            aria-label="Play 4K Virtual Walkthrough"
          >
            {/* Outer Pulsing Rings */}
            <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#D4AF37]/20 animate-ping" />
            <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C5A880]/30 animate-pulse" />
            
            {/* Main Center Button */}
            <span className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#E4D2B8] via-[#D4AF37] to-[#9F7E50] border-2 border-white flex items-center justify-center text-[#061D15] shadow-2xl group-hover:scale-110 group-hover:brightness-110 transition-all duration-300">
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
            </span>
          </button>
        </div>

        {/* Video Metadata Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#A0AFA8] pt-2">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            Duration: 3 Min 45 Sec
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            Ultra HD 4K Resolution
          </span>
          <span className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-[#D4AF37]" />
            Spatial Acoustic Sound
          </span>
        </div>

      </div>
    </section>
  );
};
