import React, { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Plane,
  Briefcase,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Clock,
  Navigation,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { LOCATION_LANDMARKS, PROJECT_DETAILS } from '../../data/estateData';

interface LocationProps {
  onOpenSiteVisit: () => void;
}

export const Location: React.FC<LocationProps> = ({ onOpenSiteVisit }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    const props = { className: 'w-4 h-4' };
    switch (iconName) {
      case 'Plane':
        return <Plane {...props} />;
      case 'Briefcase':
        return <Briefcase {...props} />;
      case 'GraduationCap':
        return <GraduationCap {...props} />;
      case 'Stethoscope':
        return <Stethoscope {...props} />;
      case 'ShoppingBag':
        return <ShoppingBag {...props} />;
      default:
        return <MapPin {...props} />;
    }
  };

  const activeCategory = LOCATION_LANDMARKS[activeCategoryIndex];

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F5F0E6] text-[#121614] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2B20]/10 border border-[#0B2B20]/20 text-[#0B2B20]">
            <Sparkles className="w-3.5 h-3.5 text-[#9F7E50]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              STRATEGIC GEOGRAPHY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0B2B20] tracking-tight">
            Location Advantages — North Bangalore
          </h2>

          <p className="text-sm sm:text-base text-[#4A5D54] font-light leading-relaxed">
            Positioned along the high-appreciation International Airport growth corridor, effortlessly connected to corporate hubs, world-class schools, and healthcare.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {LOCATION_LANDMARKS.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeCategoryIndex === idx
                    ? 'bg-[#0B2B20] text-white shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#4A5D54] border border-[#C5A880]/30'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column: Left Landmark Cards + Right Embedded Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Landmark List */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#C5A880]/30">
                <span className="text-xs uppercase tracking-wider text-[#9F7E50] font-semibold flex items-center gap-1.5">
                  {getCategoryIcon(activeCategory.icon)}
                  {activeCategory.category}
                </span>
                <span className="text-xs text-[#5C7066]">Distance & Drive Time</span>
              </div>

              {activeCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-[#C5A880]/30 hover:border-[#9F7E50] shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4 group"
                >
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-semibold text-[#0B2B20] group-hover:text-[#9F7E50] transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-xs text-[#6B7D74] block">{item.type}</span>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-sm font-mono font-bold text-[#0B2B20] flex items-center justify-end gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9F7E50]" />
                      <span>{item.time}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#6B7D74]">{item.distance}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Chauffeur CTA */}
            <div className="p-5 rounded-2xl bg-[#0B2B20] text-white shadow-xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  CHAUFFEURED TRANSIT
                </span>
                <div className="text-sm font-serif font-bold">
                  Complimentary Pickup Across Bangalore
                </div>
                <div className="text-xs text-[#E5DDD0]/80">
                  Private BMW/Mercedes transport for scheduled site visits
                </div>
              </div>
              <button
                onClick={onOpenSiteVisit}
                className="px-4 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D4AF37] text-[#0B2B20] text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer"
              >
                Book Pickup
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Google Map Section */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl h-[420px] sm:h-[460px] w-full bg-slate-200">
              <iframe
                title="The Grand Estate Location Map - North Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124335.79727581788!2d77.53488219502932!3d13.13110298816782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18ad65a07409%3A0xe54d6fa7c6dcf6a5!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Address Overlay Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-[#0B2B20]/95 backdrop-blur-md text-white border border-[#C5A880]/30 shadow-2xl text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>The Grand Estate Experience Pavilion</span>
                </div>
                <div className="text-[#E5DDD0] text-[11px] leading-relaxed">
                  Bellary Road (NH 44), Near Yelahanka Air Force Station & Airport Expressway, Bengaluru 562157
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#5C7066] flex items-center justify-between">
              <span>*Travel times calculated via signal-free Bellary Road elevated expressway during normal traffic hours.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
