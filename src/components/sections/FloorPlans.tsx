import React, { useState } from 'react';
import { Sparkles, Download, Layers, Compass, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { FLOOR_PLANS } from '../../data/estateData';
import { ArchitecturalFloorPlanSvg } from '../common/ArchitecturalFloorPlanSvg';

interface FloorPlansProps {
  onOpenBrochure: () => void;
  onOpenEnquiry: (config?: string) => void;
}

export const FloorPlans: React.FC<FloorPlansProps> = ({
  onOpenBrochure,
  onOpenEnquiry,
}) => {
  const [selectedBhk, setSelectedBhk] = useState<string>('4 BHK');
  const [selectedLevel, setSelectedLevel] = useState<'ground' | 'first' | 'terrace'>('ground');

  const currentPlan =
    FLOOR_PLANS.find((fp) => fp.bhk === selectedBhk) || FLOOR_PLANS[1];

  return (
    <section id="floorplans" className="py-20 sm:py-28 bg-[#071711] text-[#FBF9F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#152B20] border border-[#C5A880]/30 text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
              ARCHITECTURAL MASTER DRAFT
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Interactive Floor Plans
          </h2>

          <p className="text-sm sm:text-base text-[#B2C2BA] font-light leading-relaxed">
            Thoughtfully planned spatial hierarchies balancing private sanctuaries, expansive family entertainment halls, and landscaped outdoor continuity.
          </p>

          {/* Configuration Selector */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 pt-6">
            {['3 BHK', '4 BHK', '5 BHK'].map((bhk) => (
              <button
                key={bhk}
                onClick={() => {
                  setSelectedBhk(bhk);
                  setSelectedLevel('ground');
                }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  selectedBhk === bhk
                    ? 'bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-[#061D15] font-bold shadow-lg shadow-[#D4AF37]/20'
                    : 'bg-[#10241C] text-[#B2C2BA] hover:bg-[#163327] border border-[#C5A880]/20'
                }`}
              >
                {bhk} Villa Layout
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Floor Plan Viewer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Blueprint Visualizer & Level Switcher */}
          <div className="lg:col-span-7 space-y-4">
            {/* Level Switcher Pill */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-[#0F221A] border border-[#C5A880]/25">
              <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider pl-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Floor Level:
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setSelectedLevel('ground')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedLevel === 'ground'
                      ? 'bg-[#C5A880] text-[#061D15] font-bold shadow-sm'
                      : 'text-[#A0AFA8] hover:text-white'
                  }`}
                >
                  Ground Level
                </button>
                <button
                  onClick={() => setSelectedLevel('first')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedLevel === 'first'
                      ? 'bg-[#C5A880] text-[#061D15] font-bold shadow-sm'
                      : 'text-[#A0AFA8] hover:text-white'
                  }`}
                >
                  First Floor
                </button>
                <button
                  onClick={() => setSelectedLevel('terrace')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedLevel === 'terrace'
                      ? 'bg-[#C5A880] text-[#061D15] font-bold shadow-sm'
                      : 'text-[#A0AFA8] hover:text-white'
                  }`}
                >
                  Terrace Deck
                </button>
              </div>
            </div>

            {/* Custom Interactive Architectural Blueprint SVG */}
            <ArchitecturalFloorPlanSvg bhk={selectedBhk} level={selectedLevel} />
          </div>

          {/* Right Column: Architectural Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E211A] border border-[#C5A880]/30 shadow-xl space-y-5">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
                  CAD BLUEPRINT SPECIFICATION
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  {currentPlan.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-mono text-[#C5A880]">
                  <span>{currentPlan.area}</span>
                  <span>•</span>
                  <span>{currentPlan.plotSize}</span>
                </div>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 text-xs">
                <div>
                  <span className="text-[#A0AFA8] block text-[10px] uppercase">Levels</span>
                  <span className="text-white font-semibold">{currentPlan.levels}</span>
                </div>
                <div>
                  <span className="text-[#A0AFA8] block text-[10px] uppercase">Vastu & Facing</span>
                  <span className="text-[#6EE7B7] font-semibold">{currentPlan.facing}</span>
                </div>
              </div>

              {/* Room Dimensions & Layout Highlights */}
              <div className="space-y-2.5">
                <span className="text-xs uppercase tracking-wider text-[#C5A880] font-semibold block">
                  Detailed Room Dimensions & Features:
                </span>
                {currentPlan.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D0DAD5]">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-3">
                <button
                  onClick={onOpenBrochure}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] hover:brightness-110 text-[#0B2B20] text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Architectural CAD PDF</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(`${currentPlan.bhk} Villa Floor Plan`)}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#C5A880]/30 hover:bg-white/5 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Custom Wall Layout Modifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
              </div>
            </div>

            <div className="text-[11px] text-[#A0AFA8] flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Full scale 1:100 architectural schematics available upon NDA / booking.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
