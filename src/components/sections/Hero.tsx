import React, { useState } from 'react';
import { Sparkles, MapPin, Download, Play, CheckCircle, ShieldCheck, ArrowDown, ChevronRight } from 'lucide-react';
import { PROJECT_DETAILS } from '../../data/estateData';
import { LeadSubmission } from '../../types';

interface HeroProps {
  onOpenBrochure: () => void;
  onOpenVideo: () => void;
  onOpenSiteVisit: () => void;
  onSuccessLead: (lead: LeadSubmission) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBrochure,
  onOpenVideo,
  onOpenSiteVisit,
  onSuccessLead,
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [interestedIn, setInterestedIn] = useState('4 BHK Presidential Villa');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const clean = mobile.replace(/\D/g, '');
    if (!fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (clean.length < 10) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = 'HERO-' + Math.floor(100000 + Math.random() * 900000);
      const newLead: LeadSubmission = {
        id: generatedId,
        fullName,
        mobile: '+91 ' + clean.slice(-10),
        email: email || 'enquiry@grandestate.demo',
        configuration: interestedIn,
        budget: '₹2.5 Cr - ₹5.0 Cr',
        source: 'Floating Hero Section Card',
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      onSuccessLead(newLead);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="home" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic LCP Background Image with High Fetch Priority per Modern Web Guidance */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="The Grand Estate Luxury Villa Exterior at Twilight"
          // CRITICAL: fetchpriority="high" and no loading="lazy" per modern-web-guidance
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-105 animate-pulseSlow"
        />
        {/* Luxury Vignette & Dark Forest Green Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061D15]/95 via-[#061D15]/80 to-[#061D15]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061D15] via-transparent to-[#061D15]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#061D15]/40 to-[#061D15]/90" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Editorial Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Project Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#152B20]/90 border border-[#C5A880]/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#E4D2B8]">
                Bespoke Plotted & Row Villas
              </span>
            </div>

            {/* Main Luxury Headings */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08]">
                THE GRAND <br />
                <span className="gold-gradient-text font-serif italic">ESTATE</span>
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#E4D2B8] font-normal tracking-wide">
                A New Standard of Luxury Living.
              </p>
            </div>

            {/* Editorial Description */}
            <p className="text-sm sm:text-base text-[#D0DAD5] max-w-xl leading-relaxed font-light">
              Discover thoughtfully designed luxury villas where contemporary architecture meets nature. Set amidst 25 acres of lush foliage in North Bangalore, crafting an uncompromised sanctuary for discerning families.
            </p>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#C5A880] font-medium">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>North Bangalore, Karnataka • Near International Airport Corridor</span>
            </div>

            {/* Key Information Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-[#C5A880]/20 max-w-2xl">
              <div className="p-2.5 rounded-lg bg-black/30 backdrop-blur-sm border border-[#C5A880]/15">
                <span className="block text-[10px] uppercase tracking-wider text-[#A0AFA8]">Category</span>
                <span className="text-xs sm:text-sm font-semibold text-white">Luxury Villas</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 backdrop-blur-sm border border-[#C5A880]/15">
                <span className="block text-[10px] uppercase tracking-wider text-[#A0AFA8]">Typology</span>
                <span className="text-xs sm:text-sm font-semibold text-white">3, 4 & 5 BHK</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 backdrop-blur-sm border border-[#C5A880]/15">
                <span className="block text-[10px] uppercase tracking-wider text-[#A0AFA8]">Investment</span>
                <span className="text-xs sm:text-sm font-semibold text-[#D4AF37]">₹2.5 Cr* Onwards</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/30 backdrop-blur-sm border border-[#C5A880]/15">
                <span className="block text-[10px] uppercase tracking-wider text-[#A0AFA8]">Community</span>
                <span className="text-xs sm:text-sm font-semibold text-white">25+ Acres Gated</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#overview"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] hover:brightness-110 text-[#0B2B20] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xl shadow-[#D4AF37]/25 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Project</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenBrochure}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-[#C5A880]/50 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#D4AF37]" />
                <span>Download Brochure</span>
              </button>

              <button
                onClick={onOpenVideo}
                className="px-4 py-3 rounded-xl hover:bg-white/5 text-[#E4D2B8] text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span className="w-7 h-7 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch Virtual Tour</span>
              </button>
            </div>

            {/* RERA and Demo Note */}
            <div className="pt-2 text-[11px] text-[#A0AFA8]/80 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>RERA Reg: {PROJECT_DETAILS.reraNumber}</span>
            </div>
          </div>

          {/* Right Floating Glassmorphism Enquiry Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel-dark p-6 sm:p-8 shadow-2xl gold-border-glow">
              {/* Subtle top badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A880]/20 mb-5">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#D4AF37]">
                    VIP PRIORITY ACCESS
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    Request Pricing & Plans
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#152B20] border border-[#C5A880]/40 flex items-center justify-center text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleHeroFormSubmit} className="space-y-3.5 text-left">
                  {error && (
                    <div className="p-2.5 bg-red-950/70 border border-red-500/40 text-red-200 text-xs rounded-lg">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#091812]/90 border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                      Mobile Number * (+91)
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl bg-[#142A21] border border-r-0 border-[#C5A880]/30 text-[#C5A880] text-sm font-semibold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="98765 43210"
                        className="w-full px-4 py-2.5 rounded-r-xl bg-[#091812]/90 border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vikram@luxury.in"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#091812]/90 border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1 font-semibold">
                      Interested In
                    </label>
                    <select
                      value={interestedIn}
                      onChange={(e) => setInterestedIn(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#091812]/90 border border-[#C5A880]/30 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    >
                      <option value="3 BHK Signature Villa (₹2.5 Cr*)">3 BHK Signature Villa (₹2.5 Cr*)</option>
                      <option value="4 BHK Presidential Villa (₹3.5 Cr*)">4 BHK Presidential Villa (₹3.5 Cr*)</option>
                      <option value="5 BHK Royal Estate Villa (Bespoke)">5 BHK Royal Estate Villa (Bespoke)</option>
                      <option value="Masterplan & Plotted Inquiry">Masterplan & Plotted Inquiry</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] text-[#0B2B20] font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#D4AF37]/25 transition-all cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-[#0B2B20] border-t-transparent rounded-full animate-spin" />
                          Registering Request...
                        </span>
                      ) : (
                        'Submit VIP Enquiry'
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[#A0AFA8] pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
                      Zero spam • Direct builder concierge
                    </span>
                    <button
                      type="button"
                      onClick={onOpenSiteVisit}
                      className="text-[#D4AF37] hover:underline font-medium"
                    >
                      Book Site Tour →
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#163828] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-serif text-white mb-2">Request Received!</h4>
                  <p className="text-xs text-[#A0AFA8] mb-4">
                    Thank you {fullName}. Your priority inquiry for {interestedIn} has been logged in DevSyntix demo CRM.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-[#183327] hover:bg-[#204534] text-xs text-[#D4AF37] font-semibold transition-colors"
                  >
                    Submit Another Query
                  </button>
                </div>
              )}

              {/* Mandatory Demo Disclaimer */}
              <div className="mt-4 pt-3 border-t border-[#C5A880]/20 text-[10px] text-[#A0AFA8] leading-tight text-center">
                <span className="text-[#C5A880] font-semibold">Demo Notice: </span>
                This is a demonstration property project created by DevSyntix to showcase web capabilities for Indian real estate builders.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <a
        href="#overview"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#C5A880]/80 hover:text-[#D4AF37] transition-colors group cursor-pointer"
        aria-label="Scroll to Overview"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium hidden sm:block">Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-white" />
      </a>
    </section>
  );
};
