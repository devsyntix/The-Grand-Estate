import React from 'react';
import {
  Sparkles,
  Building2,
  ShieldCheck,
  Maximize2,
  Trees,
  Cpu,
  Home,
  Leaf,
  Lock,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECT_HIGHLIGHTS } from '../../data/estateData';

interface HighlightsProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const Highlights: React.FC<HighlightsProps> = ({ onOpenEnquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-[#D4AF37]" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-[#D4AF37]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#D4AF37]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#D4AF37]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#D4AF37]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="highlights" className="py-20 sm:py-28 bg-[#091D16] text-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16382A] border border-[#C5A880]/30 text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              BESPOKE DISTINCTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Curated Project Highlights
          </h2>

          <p className="text-sm sm:text-base text-[#B2C2BA] font-light leading-relaxed">
            Every square foot is engineered with thoughtful architectural precision, sustainable materials, and uncompromising build quality.
          </p>
        </div>

        {/* 8-Card Grid with Real High-Resolution Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PROJECT_HIGHLIGHTS.map((highlight, idx) => (
            <div
              key={idx}
              onClick={() => onOpenEnquiry(highlight.title)}
              className="group relative rounded-2xl bg-[#0E261D] border border-[#C5A880]/20 hover:border-[#D4AF37] overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer"
            >
              {/* Top Photo Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E261D] via-[#0E261D]/40 to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-[#091D16]/90 border border-[#C5A880]/40 backdrop-blur-sm">
                  {getIcon(highlight.icon)}
                </div>

                {/* Subtitle Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-black/60 text-[#D4AF37] border border-[#C5A880]/30">
                    {highlight.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#D4AF37] transition-colors flex items-center justify-between">
                    <span>{highlight.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A880]/40 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-xs text-[#A3B8AD] mt-2 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C5A880]">
                  <span>Specification Standard</span>
                  <span className="font-semibold group-hover:underline">Learn More →</span>
                </div>
              </div>

              {/* Gold Bottom Stripe on Hover */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
