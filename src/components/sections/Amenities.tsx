import React, { useState } from 'react';
import {
  Sparkles,
  Waves,
  Building,
  Dumbbell,
  Flower2,
  Trees,
  Compass,
  CircleDot,
  Activity,
  Smile,
  Gamepad2,
  PartyPopper,
  HeartHandshake,
  Check,
} from 'lucide-react';
import { AMENITIES } from '../../data/estateData';
import { Amenity } from '../../types';

interface AmenitiesProps {
  onOpenEnquiry: (amenityTitle?: string) => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);

  const categories = [
    { id: 'all', label: 'All 30+ Amenities' },
    { id: 'wellness', label: 'Wellness & Fitness' },
    { id: 'recreation', label: 'Sports & Games' },
    { id: 'nature', label: 'Nature & Gardens' },
    { id: 'community', label: 'Club & Community' },
  ];

  const filteredAmenities =
    activeCategory === 'all'
      ? AMENITIES
      : AMENITIES.filter((a) => a.category === activeCategory);

  const renderIcon = (name: string) => {
    const props = { className: 'w-4 h-4 text-[#D4AF37]' };
    switch (name) {
      case 'Waves':
        return <Waves {...props} />;
      case 'Building':
        return <Building {...props} />;
      case 'Dumbbell':
        return <Dumbbell {...props} />;
      case 'Flower2':
        return <Flower2 {...props} />;
      case 'Trees':
        return <Trees {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'CircleDot':
        return <CircleDot {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Smile':
        return <Smile {...props} />;
      case 'Gamepad2':
        return <Gamepad2 {...props} />;
      case 'PartyPopper':
        return <PartyPopper {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-[#F5F0E6] text-[#121614] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2B20]/10 border border-[#0B2B20]/20 text-[#0B2B20]">
            <Sparkles className="w-3.5 h-3.5 text-[#9F7E50]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              RESORT-GRADE LIVING
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0B2B20] tracking-tight">
            Curated Lifestyle Amenities
          </h2>

          <p className="text-sm sm:text-base text-[#4A5D54] font-light leading-relaxed">
            From the 35,000 sq.ft private clubhouse to Olympic-grade sporting arenas, every leisure experience is crafted for resident privilege.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0B2B20] text-white shadow-md'
                    : 'bg-white/80 hover:bg-white text-[#4A5D54] border border-[#C5A880]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Photographic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              onClick={() => setSelectedAmenity(amenity)}
              className="group relative rounded-2xl bg-white border border-[#C5A880]/30 hover:border-[#9F7E50] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Large Image Header */}
              <div className="relative h-60 w-full overflow-hidden bg-black/10">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
                  {renderIcon(amenity.iconName)}
                  <span>{amenity.categoryLabel}</span>
                </div>

                {/* Specs pill at bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 text-xs text-[#E5DDD0] font-mono truncate">
                  {amenity.specs}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#0B2B20] group-hover:text-[#9F7E50] transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-[#5C7066] mt-2 leading-relaxed line-clamp-3">
                    {amenity.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C5A880]/20 flex items-center justify-between text-xs text-[#0B2B20]">
                  <span className="font-semibold text-[#9F7E50]">Included in Masterplan</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B2B20] group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Amenity Modal Popup */}
        {selectedAmenity && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedAmenity(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-2xl bg-[#0E1B15] text-white rounded-2xl border border-[#C5A880]/40 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80 w-full">
                <img
                  src={selectedAmenity.image}
                  alt={selectedAmenity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1B15] via-transparent to-transparent" />
                <button
                  onClick={() => setSelectedAmenity(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37]">
                  {renderIcon(selectedAmenity.iconName)}
                  <span>{selectedAmenity.categoryLabel}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {selectedAmenity.title}
                </h3>
                <p className="text-sm text-[#B2C2BA] leading-relaxed">
                  {selectedAmenity.description}
                </p>

                <div className="p-3 rounded-xl bg-[#152B20] border border-[#C5A880]/30 text-xs text-[#E5DDD0] font-mono">
                  Specification: {selectedAmenity.specs}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-[#A0AFA8]">Open 7 Days a Week for Residents</span>
                  <button
                    onClick={() => {
                      const title = selectedAmenity.title;
                      setSelectedAmenity(null);
                      onOpenEnquiry(title);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D4AF37] text-[#0B2B20] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Enquire About Clubhouse Membership
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
