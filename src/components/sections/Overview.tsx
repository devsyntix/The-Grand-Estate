import React from 'react';
import { Sparkles, Sun, ShieldCheck, Compass, Check, ArrowRight } from 'lucide-react';
import { PROJECT_STATISTICS } from '../../data/estateData';

interface OverviewProps {
  onOpenSiteVisit: () => void;
  onOpenBrochure: () => void;
}

export const Overview: React.FC<OverviewProps> = ({
  onOpenSiteVisit,
  onOpenBrochure,
}) => {
  const architecturalPillars = [
    {
      title: 'Tropical Modernist Architecture',
      description: 'Clean horizontal lines, cantilevered sunshades, and exposed natural stone designed to breathe with Bangalore’s temperate climate.',
    },
    {
      title: 'Double-Height Atriums & Natural Daylight',
      description: '22-foot high ceiling volumes engineered to maximize cross-ventilation, daylight harvesting, and dramatic spatial grandeur.',
    },
    {
      title: 'Autonomous Private Sanctuaries',
      description: 'Generous private garden setbacks, dedicated plunge pool decks, and private staff accommodations with independent ingress.',
    },
    {
      title: 'Pedestrian-First Biophilic Masterplan',
      description: 'Over 18 acres of uninterrupted nature canopy, perimeter vehicular loops, and tranquil reflection water channels.',
    },
  ];

  return (
    <section id="overview" className="py-20 sm:py-28 bg-[#FBF9F4] text-[#121614] relative overflow-hidden">
      {/* Decorative Gold Accent Flourish */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2B20]/10 border border-[#0B2B20]/20 text-[#0B2B20]">
            <Sparkles className="w-3.5 h-3.5 text-[#9F7E50]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0B2B20]">
              PROJECT OVERVIEW
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0B2B20] tracking-tight">
            A Lifestyle Beyond Expectations.
          </h2>

          <p className="text-base sm:text-lg text-[#4A5D54] font-light leading-relaxed">
            Where contemporary architectural grandeur harmonizes with the serenity of North Bangalore’s pristine green belt.
          </p>
        </div>

        {/* 2-Column Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Architectural Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85"
                alt="Contemporary Villa Architecture Overview"
                loading="lazy"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061D15]/80 via-transparent to-transparent" />
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-[#0B2B20]/90 backdrop-blur-md border border-[#C5A880]/40 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
                    MASTER CRAFTSMANSHIP
                  </span>
                  <div className="text-base font-serif font-bold">
                    Signature 4 & 5 BHK Enclave
                  </div>
                  <div className="text-xs text-[#E5DDD0]/80">
                    Custom Italian Marble & Sustainable Teak Cladding
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#16382A] border border-[#C5A880]/30 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-lg">
                  25A
                </div>
              </div>
            </div>

            {/* Background luxury border ornament */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-48 h-48 rounded-3xl border-2 border-[#C5A880]/40 -z-10" />
          </div>

          {/* Right Marketing Copy & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#9F7E50]">
                UNCOMPROMISED EXCELLENCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0B2B20] font-semibold leading-snug">
                Designed for those who view living as a fine art.
              </h3>
              <p className="text-sm sm:text-base text-[#4A5D54] leading-relaxed">
                Conceived as a low-density sanctuary across 25 rolling acres, The Grand Estate presents 150 limited-edition villas designed by globally celebrated architects. Every home provides an effortless continuum between expansive indoor entertainment zones and serene outdoor gardens.
              </p>
              <p className="text-sm sm:text-base text-[#4A5D54] leading-relaxed">
                Engineered with high acoustic-rated European fenestration, floor-to-ceiling glass expanses, and private elevators, each villa delivers uncompromising privacy, supreme security, and family-focused longevity.
              </p>
            </div>

            {/* Architectural Pillars Checklist */}
            <div className="space-y-3 pt-2">
              {architecturalPillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-[#C5A880]/20 hover:border-[#9F7E50] transition-colors shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#0B2B20] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0B2B20]">{pillar.title}</h4>
                    <p className="text-xs text-[#5C7066] mt-0.5 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenSiteVisit}
                className="px-6 py-3 rounded-xl bg-[#0B2B20] hover:bg-[#143E2F] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule Private Tour</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </button>

              <button
                onClick={onOpenBrochure}
                className="px-6 py-3 rounded-xl border border-[#0B2B20]/30 hover:bg-[#0B2B20]/5 text-[#0B2B20] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                Download Specifications
              </button>
            </div>
          </div>

        </div>

        {/* Statistics Metric Bar */}
        <div className="mt-20 pt-12 border-t border-[#C5A880]/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {PROJECT_STATISTICS.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl bg-white border border-[#C5A880]/30 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="text-3xl sm:text-5xl font-serif font-bold text-[#0B2B20] group-hover:text-[#9F7E50] transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#1A2520] mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#6B7D74] mt-0.5">
                  {stat.caption}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 text-[11px] text-[#6B7D74] italic">
            *All project metrics, measurements and landscape figures are illustrative demo values for the DevSyntix builder portfolio showcase.
          </div>
        </div>

      </div>
    </section>
  );
};
