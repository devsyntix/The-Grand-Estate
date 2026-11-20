import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { PROJECT_DETAILS } from '../../data/estateData';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenBrochure: () => void;
  onOpenSiteVisit: () => void;
  onOpenLeadsDrawer?: () => void;
  leadsCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiry,
  onOpenBrochure,
  onOpenSiteVisit,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const sections = ['home', 'overview', 'highlights', 'amenities', 'gallery', 'floorplans', 'pricing', 'location', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Overview', href: '#overview' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Floor Plans', href: '#floorplans' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1E17]/95 backdrop-blur-md shadow-xl py-2.5 sm:py-3 border-b border-[#C5A880]/25'
            : 'bg-[#0B1E17]/90 backdrop-blur-sm py-3 sm:py-3.5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1B3A2C] to-[#0A1A13] border border-[#C5A880]/50 flex items-center justify-center shadow-lg group-hover:border-[#D4AF37] transition-all shrink-0">
              <span className="font-serif font-bold text-base sm:text-lg text-[#D4AF37] tracking-tighter">DS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm sm:text-base text-white tracking-widest leading-none">
                DEVSYNTIX
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#C5A880] uppercase font-sans mt-0.5">
                THE GRAND ESTATE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-2 lg:gap-2.5 xl:gap-5 2xl:gap-6 mx-2 xl:mx-4 shrink min-w-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] xl:text-xs font-medium tracking-wider uppercase transition-colors relative py-1 whitespace-nowrap shrink-0 flex items-center h-8 ${
                    isActive
                      ? 'text-[#D4AF37] font-semibold'
                      : 'text-[#E5DDD0] hover:text-[#D4AF37]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] rounded-full animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={`tel:${PROJECT_DETAILS.phone}`}
              className="px-3 py-1.5 rounded-xl border border-[#C5A880]/40 text-[#FBF9F4] hover:bg-white/5 text-[11px] font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Now</span>
            </a>

            <button
              onClick={onOpenEnquiry}
              className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] hover:brightness-110 text-[#0B2B20] text-[11px] font-bold tracking-wider uppercase shadow-md shadow-[#D4AF37]/20 transition-all cursor-pointer whitespace-nowrap"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="px-3 py-1.5 rounded-lg bg-[#C5A880] text-[#0B2B20] text-[11px] font-bold uppercase tracking-wider whitespace-nowrap"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#E5DDD0] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#0B1E17] text-[#FBF9F4] border-l border-[#C5A880]/30 shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#162D23] border border-[#C5A880]/40 flex items-center justify-center font-serif text-[#D4AF37] font-bold">
                    DS
                  </div>
                  <div>
                    <div className="font-serif font-bold text-white text-sm">DEVSYNTIX</div>
                    <div className="text-[9px] text-[#C5A880] tracking-widest uppercase">The Grand Estate</div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#A0AFA8] hover:text-white rounded-full hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-[#E5DDD0] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C5A880]/60" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full py-2.5 rounded-xl border border-[#C5A880]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors"
              >
                Download Master Brochure
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSiteVisit();
                }}
                className="w-full py-2.5 rounded-xl bg-[#173327] border border-[#C5A880]/50 text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1f4233] transition-colors"
              >
                Schedule Site Visit
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] text-[#0B2B20] text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Enquire Now
              </button>

              <div className="pt-2 text-center text-[10px] text-[#A0AFA8]">
                The Grand Estate • North Bangalore
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
