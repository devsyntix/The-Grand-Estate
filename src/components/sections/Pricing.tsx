import React from 'react';
import { Sparkles, Check, Download, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { VILLA_CONFIGURATIONS } from '../../data/estateData';

interface PricingProps {
  onOpenEnquiry: (configTitle?: string) => void;
  onOpenBrochure: () => void;
  onOpenSiteVisit: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
  onOpenSiteVisit,
}) => {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#FBF9F4] text-[#121614] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2B20]/10 border border-[#0B2B20]/20 text-[#0B2B20]">
            <Sparkles className="w-3.5 h-3.5 text-[#9F7E50]" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              TRANSPARENT VALUE PROPOSITION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0B2B20] tracking-tight">
            Villa Configurations & Pricing
          </h2>

          <p className="text-sm sm:text-base text-[#4A5D54] font-light leading-relaxed">
            Tailored bespoke layouts with private gardens, expansive double-height salons, and dedicated EV parking docks.
          </p>
        </div>

        {/* 3 Luxury Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {VILLA_CONFIGURATIONS.map((villa) => (
            <div
              key={villa.id}
              className={`relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                villa.popular
                  ? 'bg-[#0B2319] text-[#FBF9F4] shadow-2xl border-2 border-[#D4AF37] lg:-translate-y-3'
                  : 'bg-white text-[#121614] shadow-lg border border-[#C5A880]/30 hover:border-[#9F7E50]'
              }`}
            >
              {/* Popular Badge */}
              {villa.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-[#D4AF37] to-[#C5A880] text-[#0B2B20] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-md">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Top Image Preview */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={villa.image}
                  alt={villa.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 ${
                    villa.popular
                      ? 'bg-gradient-to-t from-[#0B2319] via-transparent to-transparent'
                      : 'bg-gradient-to-t from-white via-transparent to-transparent'
                  }`}
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[#D4AF37] border border-white/20 text-xs font-semibold tracking-wider">
                  {villa.bhk}
                </div>
              </div>

              {/* Card Header & Price */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3
                    className={`text-2xl font-serif font-bold ${
                      villa.popular ? 'text-white' : 'text-[#0B2B20]'
                    }`}
                  >
                    {villa.name}
                  </h3>
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      villa.popular ? 'text-[#B2C2BA]' : 'text-[#5C7066]'
                    }`}
                  >
                    {villa.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="mt-5 pb-5 border-b border-[#C5A880]/30 space-y-1">
                    <span
                      className={`text-xs uppercase tracking-wider ${
                        villa.popular ? 'text-[#C5A880]' : 'text-[#9F7E50]'
                      }`}
                    >
                      Indicative Starting Price
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-3xl sm:text-4xl font-serif font-bold ${
                          villa.popular ? 'text-[#D4AF37]' : 'text-[#0B2B20]'
                        }`}
                      >
                        {villa.price}
                      </span>
                    </div>
                    <div
                      className={`text-xs font-mono ${
                        villa.popular ? 'text-[#8EA89C]' : 'text-[#7B8F84]'
                      }`}
                    >
                      Built-Up: {villa.builtUpArea} • Plot: {villa.plotArea}
                    </div>
                  </div>

                  {/* Key Specs Breakdown */}
                  <div
                    className={`grid grid-cols-3 gap-2 py-3 text-center rounded-xl my-4 text-xs ${
                      villa.popular ? 'bg-[#122E22]' : 'bg-[#F4EFE6]'
                    }`}
                  >
                    <div>
                      <span className="block font-bold">{villa.bedrooms}</span>
                      <span className="text-[10px] text-gray-500 uppercase">Beds</span>
                    </div>
                    <div>
                      <span className="block font-bold">{villa.bathrooms}</span>
                      <span className="text-[10px] text-gray-500 uppercase">Baths</span>
                    </div>
                    <div>
                      <span className="block font-bold">{villa.carParks}</span>
                      <span className="text-[10px] text-gray-500 uppercase">Cars</span>
                    </div>
                  </div>

                  {/* Included Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <span
                      className={`text-xs uppercase tracking-wider font-semibold ${
                        villa.popular ? 'text-[#C5A880]' : 'text-[#9F7E50]'
                      }`}
                    >
                      Key Villa Specifications:
                    </span>
                    {villa.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                            villa.popular ? 'text-[#D4AF37]' : 'text-[#0B2B20]'
                          }`}
                        />
                        <span
                          className={
                            villa.popular ? 'text-[#D0DAD5]' : 'text-[#4A5D54]'
                          }
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="space-y-2.5 pt-6 border-t border-[#C5A880]/30">
                  <button
                    onClick={() => onOpenEnquiry(villa.name)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      villa.popular
                        ? 'bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] text-[#0B2B20] hover:brightness-110 shadow-lg shadow-[#D4AF37]/30'
                        : 'bg-[#0B2B20] text-white hover:bg-[#143E2F]'
                    }`}
                  >
                    <span>Enquire for {villa.bhk}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenSiteVisit}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      villa.popular
                        ? 'bg-white/10 hover:bg-white/15 text-white'
                        : 'border border-[#0B2B20]/30 text-[#0B2B20] hover:bg-[#0B2B20]/5'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Schedule Model Visit</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Demo Disclaimer for Pricing */}
        <div className="mt-12 p-4 rounded-2xl bg-amber-500/10 border border-amber-600/30 text-center max-w-3xl mx-auto space-y-1">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>Important Illustrative Notice</span>
          </div>
          <p className="text-xs text-amber-900/90 leading-relaxed">
            All prices, built-up areas, and plot specifications displayed here are illustrative demonstration figures designed by DevSyntix to showcase digital real estate presentation and do not constitute an actual property offering.
          </p>
        </div>

      </div>
    </section>
  );
};
