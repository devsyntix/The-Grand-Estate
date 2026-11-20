import React from 'react';

interface ArchitecturalFloorPlanSvgProps {
  bhk: string;
  level: 'ground' | 'first' | 'terrace';
}

export const ArchitecturalFloorPlanSvg: React.FC<ArchitecturalFloorPlanSvgProps> = ({
  bhk,
  level,
}) => {
  return (
    <div className="relative w-full aspect-[4/3] max-h-[500px] bg-[#0E1613] rounded-2xl p-4 sm:p-8 flex flex-col justify-between border border-[#C5A880]/30 shadow-2xl overflow-hidden font-sans">
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #C5A880 1px, transparent 1px), linear-gradient(to bottom, #C5A880 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Blueprint Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#C5A880]/20 pb-3">
        <div>
          <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-semibold">
            ARCHITECTURAL SPECIFICATION • {level.toUpperCase()} LEVEL
          </span>
          <h4 className="text-white text-lg font-serif font-semibold tracking-wide">
            THE GRAND ESTATE — {bhk} VILLA RESIDENCE
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[#C5A880]/40 flex flex-col items-center justify-center text-[9px] text-[#C5A880]">
            <span className="font-bold text-[11px] leading-none text-[#FBF9F4]">N</span>
            <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[6px] border-b-[#C5A880]" />
          </div>
          <span className="text-[11px] text-[#C5A880]/80 bg-[#162B22] px-2.5 py-1 rounded border border-[#C5A880]/30 hidden sm:inline-block">
            SCALE: 1:100 CM
          </span>
        </div>
      </div>

      {/* SVG Blueprint Body */}
      <div className="relative z-10 my-auto w-full flex items-center justify-center">
        {bhk === '3 BHK' && level === 'ground' && (
          <svg viewBox="0 0 800 500" className="w-full h-auto max-h-[360px] drop-shadow-lg">
            {/* Outer Perimeter */}
            <rect x="50" y="30" width="700" height="440" fill="#121D18" stroke="#C5A880" strokeWidth="2.5" />
            
            {/* Front Porch & Car Park */}
            <rect x="70" y="50" width="220" height="150" fill="#182720" stroke="#7A8D84" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="180" y="115" fill="#E5DDD0" fontSize="13" fontWeight="600" textAnchor="middle">DUAL CAR PORT</text>
            <text x="180" y="135" fill="#C5A880" fontSize="11" textAnchor="middle">18’0” x 16’6” (EV READY)</text>

            {/* Entrance Foyer */}
            <rect x="310" y="50" width="130" height="150" fill="#15241D" stroke="#C5A880" strokeWidth="1.5" />
            <text x="375" y="120" fill="#FFFFFF" fontSize="13" fontWeight="600" textAnchor="middle">FOYER</text>
            <text x="375" y="140" fill="#C5A880" fontSize="11" textAnchor="middle">8’6” x 12’0”</text>

            {/* Living & Dining Grand Hall */}
            <rect x="460" y="50" width="270" height="240" fill="#1A2D24" stroke="#C5A880" strokeWidth="2" />
            <text x="595" y="150" fill="#FFFFFF" fontSize="15" fontWeight="700" textAnchor="middle">DOUBLE HEIGHT LIVING & DINING</text>
            <text x="595" y="175" fill="#D4AF37" fontSize="12" textAnchor="middle">26’0” x 16’0”</text>
            <text x="595" y="195" fill="#7A8D84" fontSize="10" textAnchor="middle">(ITALIAN MARBLE FLOOR)</text>

            {/* Open Italian Kitchen */}
            <rect x="70" y="220" width="220" height="150" fill="#162720" stroke="#C5A880" strokeWidth="1.5" />
            <text x="180" y="290" fill="#FFFFFF" fontSize="13" fontWeight="600" textAnchor="middle">GOURMET KITCHEN</text>
            <text x="180" y="310" fill="#C5A880" fontSize="11" textAnchor="middle">14’0” x 12’0”</text>

            {/* Ground Floor Guest Suite */}
            <rect x="310" y="220" width="130" height="150" fill="#182922" stroke="#7A8D84" strokeWidth="1.5" />
            <text x="375" y="285" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">GUEST / PARENT</text>
            <text x="375" y="305" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">BEDROOM</text>
            <text x="375" y="325" fill="#C5A880" fontSize="11" textAnchor="middle">13’0” x 12’6”</text>

            {/* Private Rear Garden */}
            <rect x="70" y="390" width="660" height="60" fill="#0C2016" stroke="#2D5A43" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="400" y="425" fill="#6EE7B7" fontSize="13" fontWeight="600" textAnchor="middle">PRIVATE REAR BOTANICAL GARDEN & SUNDECK (450 SQ.FT)</text>
          </svg>
        )}

        {bhk === '3 BHK' && (level === 'first' || level === 'terrace') && (
          <svg viewBox="0 0 800 500" className="w-full h-auto max-h-[360px] drop-shadow-lg">
            <rect x="50" y="30" width="700" height="440" fill="#121D18" stroke="#C5A880" strokeWidth="2.5" />
            
            {/* Master Bedroom Suite */}
            <rect x="70" y="50" width="370" height="230" fill="#1B2E25" stroke="#C5A880" strokeWidth="2" />
            <text x="255" y="150" fill="#FFFFFF" fontSize="15" fontWeight="700" textAnchor="middle">MASTER SUITE WITH WALK-IN CLOSET</text>
            <text x="255" y="175" fill="#D4AF37" fontSize="12" textAnchor="middle">18’6” x 14’6”</text>
            <text x="255" y="195" fill="#7A8D84" fontSize="10" textAnchor="middle">PRIVATE ATTACHED 5-FIXTURE SPA BATH</text>

            {/* Void Over Living Room */}
            <rect x="460" y="50" width="270" height="230" fill="#101A16" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="6 6" />
            <text x="595" y="160" fill="#C5A880" fontSize="14" fontWeight="600" textAnchor="middle">CUT-OUT / VOID OVER</text>
            <text x="595" y="180" fill="#C5A880" fontSize="13" textAnchor="middle">DOUBLE HEIGHT LIVING</text>

            {/* Children Suite */}
            <rect x="70" y="300" width="370" height="150" fill="#172820" stroke="#7A8D84" strokeWidth="1.5" />
            <text x="255" y="370" fill="#FFFFFF" fontSize="13" fontWeight="600" textAnchor="middle">BEDROOM 02 (KIDS SUITE)</text>
            <text x="255" y="390" fill="#C5A880" fontSize="11" textAnchor="middle">15’0” x 12’6” + EN-SUITE</text>

            {/* Family Lounge & Open Terrace */}
            <rect x="460" y="300" width="270" height="150" fill="#182A22" stroke="#C5A880" strokeWidth="1.5" />
            <text x="595" y="365" fill="#FFFFFF" fontSize="13" fontWeight="600" textAnchor="middle">FAMILY SITTING LOUNGE</text>
            <text x="595" y="385" fill="#C5A880" fontSize="11" textAnchor="middle">16’0” x 12’0” (OPENS TO BALCONY)</text>
          </svg>
        )}

        {bhk === '4 BHK' && level === 'ground' && (
          <svg viewBox="0 0 800 500" className="w-full h-auto max-h-[360px] drop-shadow-lg">
            <rect x="50" y="30" width="700" height="440" fill="#121D18" stroke="#C5A880" strokeWidth="2.5" />
            
            {/* 3-Car Parking Port */}
            <rect x="70" y="50" width="260" height="140" fill="#172820" stroke="#7A8D84" strokeWidth="1.5" strokeDasharray="4 4" />
            <text x="200" y="115" fill="#E5DDD0" fontSize="13" fontWeight="600" textAnchor="middle">3-VEHICLE PARKING BAY</text>
            <text x="200" y="135" fill="#C5A880" fontSize="11" textAnchor="middle">24’0” x 18’0” • EV DOCK</text>

            {/* Foyer & Water Body */}
            <rect x="350" y="50" width="110" height="140" fill="#13241C" stroke="#C5A880" strokeWidth="1.5" />
            <text x="405" y="110" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">ENTRANCE</text>
            <text x="405" y="130" fill="#6EE7B7" fontSize="10" textAnchor="middle">WATER CASCADE</text>

            {/* Double Height Living Room */}
            <rect x="480" y="50" width="250" height="230" fill="#1B2E25" stroke="#C5A880" strokeWidth="2" />
            <text x="605" y="145" fill="#FFFFFF" fontSize="15" fontWeight="700" textAnchor="middle">DOUBLE HEIGHT LIVING</text>
            <text x="605" y="170" fill="#D4AF37" fontSize="12" textAnchor="middle">28’0” x 16’0”</text>

            {/* Private Plunge Pool & Deck */}
            <rect x="70" y="210" width="260" height="120" fill="#0C2B24" stroke="#38BDF8" strokeWidth="2" />
            <text x="200" y="265" fill="#38BDF8" fontSize="14" fontWeight="700" textAnchor="middle">PRIVATE HEATED PLUNGE POOL</text>
            <text x="200" y="285" fill="#FBF9F4" fontSize="11" textAnchor="middle">18’0” x 10’0” • TEAK SUNDECK</text>

            {/* Dining & Show Kitchen */}
            <rect x="350" y="210" width="220" height="120" fill="#172820" stroke="#C5A880" strokeWidth="1.5" />
            <text x="460" y="265" fill="#FFFFFF" fontSize="13" fontWeight="600" textAnchor="middle">ISLAND DINING & KITCHEN</text>
            <text x="460" y="285" fill="#C5A880" fontSize="11" textAnchor="middle">18’0” x 12’6”</text>

            {/* Ground Suite & Staff */}
            <rect x="70" y="350" width="370" height="100" fill="#162720" stroke="#7A8D84" strokeWidth="1.5" />
            <text x="255" y="405" fill="#FFFFFF" fontSize="12" fontWeight="600" textAnchor="middle">GUEST MASTER SUITE (16’0” x 13’6”) + MAID’S QUARTER</text>

            {/* Rear Zen Garden */}
            <rect x="460" y="350" width="270" height="100" fill="#0E2319" stroke="#2D5A43" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="595" y="405" fill="#6EE7B7" fontSize="12" fontWeight="600" textAnchor="middle">PRIVATE WALLED LAWN (600 SQ.FT)</text>
          </svg>
        )}

        {bhk === '4 BHK' && (level === 'first' || level === 'terrace') && (
          <svg viewBox="0 0 800 500" className="w-full h-auto max-h-[360px] drop-shadow-lg">
            <rect x="50" y="30" width="700" height="440" fill="#121D18" stroke="#C5A880" strokeWidth="2.5" />
            
            <rect x="70" y="50" width="390" height="230" fill="#1C3026" stroke="#C5A880" strokeWidth="2" />
            <text x="265" y="145" fill="#FFFFFF" fontSize="15" fontWeight="700" textAnchor="middle">ROYAL MASTER SUITE (21’0” x 16’0”)</text>
            <text x="265" y="170" fill="#D4AF37" fontSize="12" textAnchor="middle">WALK-IN DRESSING & JACUZZI SPA</text>

            <rect x="480" y="50" width="250" height="230" fill="#101A16" stroke="#C5A880" strokeWidth="1.5" strokeDasharray="6 6" />
            <text x="605" y="160" fill="#C5A880" fontSize="14" fontWeight="600" textAnchor="middle">ATRIUM VIEW DOWN TO LIVING</text>

            <rect x="70" y="300" width="320" height="150" fill="#172820" stroke="#7A8D84" strokeWidth="1.5" />
            <text x="230" y="375" fill="#FFFFFF" fontSize="13" fontWeight="600" textAnchor="middle">BEDROOM 03 (JUNIOR SUITE)</text>
            <text x="230" y="395" fill="#C5A880" fontSize="11" textAnchor="middle">16’0” x 14’0”</text>

            <rect x="410" y="300" width="320" height="150" fill="#182A22" stroke="#C5A880" strokeWidth="1.5" />
            <text x="570" y="365" fill="#FFFFFF" fontSize="13" fontWeight="600" textAnchor="middle">HOME CINEMA & MEDIA LOUNGE</text>
            <text x="570" y="385" fill="#C5A880" fontSize="11" textAnchor="middle">18’0” x 13’6” (ACOUSTIC TREATED)</text>
          </svg>
        )}

        {bhk === '5 BHK' && (
          <svg viewBox="0 0 800 500" className="w-full h-auto max-h-[360px] drop-shadow-lg">
            <rect x="50" y="30" width="700" height="440" fill="#121D18" stroke="#C5A880" strokeWidth="2.5" />
            
            <rect x="70" y="50" width="300" height="150" fill="#182A22" stroke="#C5A880" strokeWidth="2" />
            <text x="220" y="115" fill="#FFFFFF" fontSize="14" fontWeight="700" textAnchor="middle">4-BAY GRAND MOTOR COURT</text>
            <text x="220" y="135" fill="#C5A880" fontSize="11" textAnchor="middle">32’0” x 20’0” • ELEVATOR SHAFT</text>

            <rect x="390" y="50" width="340" height="240" fill="#1C3228" stroke="#C5A880" strokeWidth="2" />
            <text x="560" y="150" fill="#FFFFFF" fontSize="15" fontWeight="700" textAnchor="middle">PALATIAL BANQUET SALON</text>
            <text x="560" y="175" fill="#D4AF37" fontSize="12" textAnchor="middle">34’0” x 18’6” • 24’ TRIPLE ATRIUM</text>

            <rect x="70" y="220" width="300" height="120" fill="#0B2B24" stroke="#38BDF8" strokeWidth="2" />
            <text x="220" y="275" fill="#38BDF8" fontSize="14" fontWeight="700" textAnchor="middle">PRIVATE RESIDENCE LAP POOL</text>
            <text x="220" y="295" fill="#FBF9F4" fontSize="11" textAnchor="middle">24’0” x 12’0” WITH OUTDOOR GAZEBO</text>

            <rect x="70" y="360" width="660" height="90" fill="#0B2217" stroke="#2D5A43" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="400" y="410" fill="#6EE7B7" fontSize="13" fontWeight="600" textAnchor="middle">BOTANICAL GARDEN COURTYARD & DUAL STAFF SUITES (1,200 SQ.FT)</text>
          </svg>
        )}
      </div>

      {/* Blueprint Legend / Footer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-[#C5A880]/20 pt-3 text-[11px] text-[#C5A880]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
            Carpet & Living Spaces
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8]" />
            Water Body / Pool
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6EE7B7]" />
            Private Garden / Greenery
          </span>
        </div>
        <span className="text-[#A0AFA8] italic">
          *Illustrative CAD representation for demonstration
        </span>
      </div>
    </div>
  );
};
