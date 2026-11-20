import React, { useState } from 'react';
import { Sparkles, Users, Code, Award, CheckCircle2, ChevronUp, ChevronDown } from 'lucide-react';

interface DevSyntixShowcaseBarProps {
  onOpenLeadsDrawer: () => void;
  leadsCount: number;
}

export const DevSyntixShowcaseBar: React.FC<DevSyntixShowcaseBarProps> = ({
  onOpenLeadsDrawer,
  leadsCount,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed top-24 left-4 z-40 hidden md:block">
      <div className="rounded-2xl bg-[#091D16]/95 backdrop-blur-md border border-[#C5A880]/50 shadow-2xl overflow-hidden max-w-xs transition-all">
        {/* Toggle Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-3.5 py-2.5 flex items-center justify-between gap-3 text-left bg-gradient-to-r from-[#142D22] to-[#0A1B14] hover:bg-[#1A3A2C] transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-[#FBF9F4] font-serif uppercase">
              DevSyntix Builder Mode
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[#C5A880]">
            <span className="text-[10px] font-mono bg-black/40 px-1.5 py-0.5 rounded border border-[#C5A880]/30">
              Demo Active
            </span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </div>
        </button>

        {/* Expanded Panel */}
        {isExpanded && (
          <div className="p-4 space-y-3 text-xs text-[#B2C2BA] border-t border-[#C5A880]/20 animate-fadeIn">
            <p className="text-[11px] leading-relaxed">
              Showcase website built by <strong className="text-white">DevSyntix</strong> to present high-conversion digital experiences to Indian builders (Embassy, Prestige, Sobha, Brigade, Lodha).
            </p>

            <div className="space-y-1.5 pt-1 text-[11px]">
              <div className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>100% Real High-Res Photography</span>
              </div>
              <div className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>Integrated CAD Floor Plan Visualizer</span>
              </div>
              <div className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>Interactive Lightbox & 4K Video Tour</span>
              </div>
              <div className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                <span>Sub-Second Fast Performance & LCP</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={onOpenLeadsDrawer}
                className="w-full py-2 px-3 rounded-lg bg-[#C5A880] hover:bg-[#D4AF37] text-[#061D15] font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                <Users className="w-3.5 h-3.5" />
                <span>View Captured Leads ({leadsCount})</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
