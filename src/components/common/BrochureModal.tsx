import React, { useState } from 'react';
import { X, Download, CheckCircle, FileText, Sparkles, ShieldCheck } from 'lucide-react';
import { PROJECT_DETAILS } from '../../data/estateData';
import { LeadSubmission } from '../../types';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (lead: LeadSubmission) => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Indian phone number validation
    const cleanPhone = mobile.replace(/\D/g, '');
    if (!fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit Indian mobile number (+91).');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newLead: LeadSubmission = {
        id: 'TGE-' + Math.floor(100000 + Math.random() * 900000),
        fullName,
        mobile: '+91 ' + cleanPhone.slice(-10),
        email,
        configuration: 'Brochure Request (All BHKs)',
        budget: '₹2.5 Cr - ₹5.0 Cr+',
        source: 'Brochure Download Modal',
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      onSuccess(newLead);
      setIsSubmitting(false);
      setIsDownloaded(true);

      // Trigger a simulated browser download of an architectural e-brochure file
      const blob = new Blob(
        [
          `THE GRAND ESTATE - NORTH BANGALORE
Official Architectural E-Brochure & Specification Dossier
Crafted by DevSyntix Builder Showcase

Project Name: THE GRAND ESTATE
Location: Bellary Road, North Bangalore, Karnataka
Total Land Area: 25+ Acres Gated Sanctuary
Residences: 150 Luxury Villas (3, 4 & 5 BHK)
Starting Price: ₹2.50 Cr*
RERA: PRM/KA/RERA/1251/309/PR/240226/006689 (Demo)

Lead Reference ID: ${newLead.id}
Applicant: ${fullName}
Mobile: ${newLead.mobile}
Date Generated: ${new Date().toLocaleDateString('en-IN')}

Thank you for exploring DevSyntix Builder digital demo portfolio.`,
        ],
        { type: 'text/plain;charset=utf-8' }
      );
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'The_Grand_Estate_Executive_Brochure.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 900);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#0E1B15] text-[#FBF9F4] rounded-2xl border border-[#C5A880]/40 shadow-2xl overflow-hidden overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Border Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#9F7E50] via-[#D4AF37] to-[#C5A880]" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A0AFA8] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!isDownloaded ? (
            <>
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2.5 rounded-xl bg-[#162D23] text-[#D4AF37] border border-[#C5A880]/30">
                  <FileText className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#C5A880] font-semibold">
                    OFFICIAL DOSSIER
                  </span>
                  <h3 id="brochure-modal-title" className="text-xl sm:text-2xl font-serif text-white">
                    Download Master Brochure
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#A0AFA8] mb-6 leading-relaxed">
                Receive the high-resolution 48-page architectural lookbook, masterplan layouts, detailed floor plans, and unit-level price sheets.
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full px-4 py-3 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                    Mobile Number * (+91)
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl bg-[#182E25] border border-r-0 border-[#C5A880]/30 text-[#C5A880] text-sm font-semibold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="98765 43210"
                      maxLength={14}
                      className="w-full px-4 py-3 rounded-r-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vikram@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#B89868] text-[#0B2B20] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0B2B20] border-t-transparent rounded-full animate-spin" />
                        Generating Dossier...
                      </span>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Download Brochure (PDF)
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#A0AFA8] pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Confidential. No spam guarantee.</span>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#163828] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                DOWNLOAD INITIATED
              </span>
              <h3 className="text-2xl font-serif text-white mt-1 mb-3">
                Thank You, {fullName.split(' ')[0]}!
              </h3>
              <p className="text-sm text-[#A0AFA8] mb-6 max-w-sm mx-auto">
                Your dossier download has started. Our relationship manager has also forwarded the copy to <strong className="text-white">{email}</strong> and your WhatsApp number.
              </p>

              <div className="p-4 rounded-xl bg-[#14261E] border border-[#C5A880]/30 text-left mb-6">
                <div className="flex items-center justify-between text-xs text-[#C5A880] mb-1">
                  <span>DOCUMENT</span>
                  <span className="text-[#6EE7B7]">READY (32.4 MB)</span>
                </div>
                <div className="text-sm text-white font-medium">The_Grand_Estate_Master_Lookbook.pdf</div>
                <div className="text-xs text-[#A0AFA8] mt-1">Includes 3 BHK, 4 BHK & 5 BHK floor plans & payment schedules</div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-[#1C3227] hover:bg-[#254234] text-white text-xs tracking-wider uppercase font-semibold transition-colors"
                >
                  Close Window
                </button>
                <a
                  href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=Hi%20DevSyntix%2C%20I%20downloaded%20The%20Grand%20Estate%20brochure%20and%20would%20like%20to%20discuss%20pricing.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs tracking-wider uppercase font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
