import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Calendar, FileText, Sparkles } from 'lucide-react';
import { PROJECT_DETAILS } from '../../data/estateData';

interface ConversionWidgetsProps {
  onOpenEnquiry: () => void;
  onOpenBrochure: () => void;
  onOpenSiteVisit: () => void;
}

export const ConversionWidgets: React.FC<ConversionWidgetsProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
  onOpenSiteVisit,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Desktop & Tablet (Bottom Right) */}
      <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Scroll-to-Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#0B2B20] text-[#D4AF37] border border-[#C5A880]/40 shadow-xl hover:bg-[#154232] hover:scale-110 transition-all pointer-events-auto cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${PROJECT_DETAILS.phone}`}
          className="group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#0B2B20] text-white border border-[#C5A880]/50 shadow-xl hover:bg-[#16382A] hover:scale-105 transition-all pointer-events-auto cursor-pointer"
          aria-label="Call Sales Concierge"
        >
          <div className="w-5 h-5 rounded-full bg-[#C5A880] text-[#061D15] flex items-center justify-center">
            <Phone className="w-3 h-3" />
          </div>
          <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-[#FBF9F4]">
            Call Concierge
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=Hi%20DevSyntix%20Builder%2C%20I%20am%20interested%20in%20The%20Grand%20Estate%20luxury%20villas%20in%20North%20Bangalore.`}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-[#061D15] font-bold text-xs uppercase tracking-wider shadow-2xl hover:bg-[#20ba5a] hover:scale-105 transition-all pointer-events-auto cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline-block">WhatsApp Enquiry</span>
        </a>
      </div>

      {/* Sticky Bottom Action Bar on Mobile */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#071711]/95 backdrop-blur-md border-t border-[#C5A880]/30 p-2 sm:hidden flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${PROJECT_DETAILS.phone}`}
          className="flex-1 py-3 px-3 rounded-xl bg-[#142A21] border border-[#C5A880]/30 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenSiteVisit}
          className="p-3 rounded-xl bg-[#142A21] border border-[#C5A880]/30 text-[#D4AF37]"
          title="Site Visit"
        >
          <Calendar className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenEnquiry}
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] text-[#061D15] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 shadow-md shadow-[#D4AF37]/30"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Enquire Now</span>
        </button>
      </div>
    </>
  );
};
