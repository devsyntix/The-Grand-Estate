import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Heart,
  X,
} from 'lucide-react';
import { PROJECT_DETAILS } from '../../data/estateData';

export const Footer: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Project Overview', href: '#overview' },
    { name: 'Architectural Highlights', href: '#highlights' },
    { name: 'Lifestyle Amenities', href: '#amenities' },
    { name: 'Image Gallery', href: '#gallery' },
    { name: 'Villa Floor Plans', href: '#floorplans' },
    { name: 'Pricing & Configurations', href: '#pricing' },
    { name: 'Location Advantages', href: '#location' },
    { name: 'Contact Concierge', href: '#contact' },
  ];

  const villaTypes = [
    { name: '3 BHK Signature Villa (2,850 sq.ft)', href: '#pricing' },
    { name: '4 BHK Presidential Villa (3,900 sq.ft)', href: '#pricing' },
    { name: '5 BHK Royal Estate Villa (5,400 sq.ft)', href: '#pricing' },
    { name: 'Plotted Masterplan Enclave', href: '#overview' },
    { name: '35,000 sq.ft Grand Clubhouse', href: '#amenities' },
  ];

  return (
    <>
      <footer className="bg-[#040E0A] text-[#E5DDD0] pt-16 pb-12 border-t border-[#C5A880]/30 relative overflow-hidden">
        {/* Top Gold Ribbon Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#9F7E50] via-[#D4AF37] to-[#C5A880]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Col 1: Brand & Bio (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B3A2C] to-[#0A1A13] border border-[#C5A880]/50 flex items-center justify-center shadow-lg">
                  <span className="font-serif font-bold text-lg text-[#D4AF37] tracking-tighter">DS</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-lg text-white tracking-widest">
                      DEV SYNTIX
                    </span>
                    <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#C5A880] text-[#061D15] font-bold">
                      BUILDER
                    </span>
                  </div>
                  <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-sans">
                    Premium Real Estate Website Solutions
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#A0AFA8] leading-relaxed">
                DevSyntix partners with India’s leading property developers and luxury home builders to architect world-class, conversion-engineered digital launch experiences that captivate high-net-worth buyers globally.
              </p>

              <div className="p-3.5 rounded-xl bg-[#091812] border border-[#C5A880]/20 text-xs space-y-1">
                <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  DEMONSTRATION PORTFOLIO
                </div>
                <div className="text-white text-xs font-serif">
                  The Grand Estate — North Bangalore
                </div>
                <div className="text-[11px] text-[#A0AFA8]">
                  Built to demonstrate benchmark UI/UX standards for Indian real estate brands.
                </div>
              </div>
            </div>

            {/* Col 2: Navigation Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#B2C2BA] hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 group"
                    >
                      <ChevronRight className="w-3 h-3 text-[#C5A880]/50 group-hover:translate-x-1 group-hover:text-[#D4AF37] transition-all" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Residences & Features (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                Residences
              </h4>
              <ul className="space-y-2 text-xs">
                {villaTypes.map((type) => (
                  <li key={type.name}>
                    <a
                      href={type.href}
                      className="text-[#B2C2BA] hover:text-[#D4AF37] transition-colors block leading-relaxed"
                    >
                      {type.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Corporate Office & Concierge (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37]">
                Contact & Legal
              </h4>
              <div className="space-y-2.5 text-xs text-[#A0AFA8]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>North Bangalore & Indiranagar, Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <a href={`tel:${PROJECT_DETAILS.phone}`} className="text-white hover:text-[#D4AF37] font-mono">
                    {PROJECT_DETAILS.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <a href={`mailto:${PROJECT_DETAILS.email}`} className="text-white hover:text-[#D4AF37]">
                    {PROJECT_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 text-[11px] text-[#C5A880]">
                <button
                  onClick={() => setActiveLegalModal('privacy')}
                  className="hover:underline cursor-pointer"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <button
                  onClick={() => setActiveLegalModal('terms')}
                  className="hover:underline cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </div>
            </div>

          </div>

          {/* Mandatory Demo Disclaimer Box */}
          <div className="p-5 rounded-2xl bg-[#081812] border border-[#C5A880]/30 text-xs text-[#A0AFA8] leading-relaxed space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-serif">Official Demonstration & Portfolio Disclaimer:</span>
            </div>
            <p>
              "This website is a demonstration project developed by DevSyntix. The Grand Estate, its specifications, pricing, amenities, location information, and availability are illustrative and do not represent an actual property offering."
            </p>
          </div>

          {/* Bottom Copyright & Credits */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A0AFA8]">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} DevSyntix Builder. All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-[#D4AF37] font-medium">
              <span>Website Designed & Developed by</span>
              <strong className="text-white font-serif tracking-wider">DevSyntix</strong>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy Policy / Terms Modal */}
      {activeLegalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveLegalModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-[#0E1B15] text-white rounded-2xl border border-[#C5A880]/40 p-6 sm:p-8 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-serif font-bold text-white">
                {activeLegalModal === 'privacy' ? 'Privacy Commitment' : 'Terms & Demonstration Usage'}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="p-1 rounded-full hover:bg-white/10 text-[#A0AFA8]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-[#A0AFA8] space-y-3 leading-relaxed max-h-72 overflow-y-auto pr-2">
              <p>
                This demonstration application respects user data integrity. Any mock enquiries, telephone numbers, or email addresses submitted during tests are stored locally in browser session storage for review purposes and are never transmitted to unauthorized commercial spam lists.
              </p>
              <p>
                All imagery featured on this website has been curated from independent licensed architectural archives on Unsplash. No copyrighted images of Embassy Group or other property developers have been hotlinked or infringed.
              </p>
              <p>
                For custom website development inquiries, commercial licensing, or real estate CRM integrations, please contact <strong className="text-white">business@devsyntix.com</strong>.
              </p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 rounded-lg bg-[#C5A880] text-[#061D15] text-xs font-bold uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
