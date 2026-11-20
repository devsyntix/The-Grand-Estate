import React, { useState } from 'react';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../../data/estateData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#091D16] text-[#FBF9F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#152B20] border border-[#C5A880]/30 text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              RESIDENT VOICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Client Impressions & Experiences
          </h2>

          <p className="text-sm sm:text-base text-[#B2C2BA] font-light leading-relaxed">
            What esteemed homebuyers and industry leaders say about the architecture, community masterplan, and living experience.
          </p>
        </div>

        {/* Testimonial Showcase Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#0E261D] border border-[#C5A880]/30 p-8 sm:p-12 shadow-2xl">
            {/* Top Quote Icon */}
            <div className="absolute -top-6 left-10 p-3 rounded-2xl bg-[#C5A880] text-[#061D15] shadow-lg">
              <Quote className="w-6 h-6 fill-current" />
            </div>

            {/* Content */}
            <div className="space-y-6 pt-2">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5 text-[#D4AF37]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-xs font-mono text-[#C5A880] font-semibold">
                  5.0 / 5.0 RATED
                </span>
              </div>

              {/* Quote text */}
              <p className="text-base sm:text-xl font-serif text-[#FBF9F4] italic leading-relaxed">
                "{current.quote}"
              </p>

              {/* Author Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#C5A880]/60 shadow-md"
                  />
                  <div>
                    <h4 className="text-base font-serif font-bold text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs text-[#C5A880]">
                      {current.role} • {current.company}
                    </p>
                    <span className="text-[11px] text-[#7A9185] block mt-0.5 font-mono">
                      {current.villaType}
                    </span>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-2.5 rounded-full bg-[#153327] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#061D15] border border-[#C5A880]/30 transition-all cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2.5 rounded-full bg-[#153327] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#061D15] border border-[#C5A880]/30 transition-all cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Identification as Demo Testimonials */}
          <div className="text-center mt-6 flex items-center justify-center gap-2 text-xs text-[#8FA59B] italic">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span>*Illustrative client personas created for DevSyntix builder portfolio showcase demonstration.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
