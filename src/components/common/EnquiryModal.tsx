import React, { useState } from 'react';
import { X, Send, CheckCircle, ShieldCheck, Sparkles, Building, PhoneCall } from 'lucide-react';
import { PROJECT_DETAILS } from '../../data/estateData';
import { LeadSubmission } from '../../types';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (lead: LeadSubmission) => void;
  defaultConfig?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  defaultConfig = '4 BHK Presidential Villa (₹3.5 Cr*)',
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [configuration, setConfiguration] = useState(defaultConfig);
  const [budget, setBudget] = useState('₹2.5 Cr - ₹3.5 Cr');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadId, setLeadId] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanPhone = mobile.replace(/\D/g, '');
    if (!fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit Indian phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = 'VIP-' + Math.floor(100000 + Math.random() * 900000);
      setLeadId(generatedId);

      const newLead: LeadSubmission = {
        id: generatedId,
        fullName,
        mobile: '+91 ' + cleanPhone.slice(-10),
        email: email || 'vip-client@luxury.in',
        configuration,
        budget,
        message: message || 'Interested in price sheet & payment plans.',
        source: 'Quick VIP Enquiry Modal',
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      onSuccess(newLead);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 750);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-heading"
    >
      <div
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0E1B15] text-[#FBF9F4] rounded-2xl border border-[#C5A880]/40 shadow-2xl overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#9F7E50] via-[#D4AF37] to-[#C5A880]" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A0AFA8] hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!isSuccess ? (
            <>
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2.5 rounded-xl bg-[#162D23] text-[#D4AF37] border border-[#C5A880]/30">
                  <Building className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#C5A880] font-semibold">
                    VIP CONCIERGE ASSISTANCE
                  </span>
                  <h3 id="enquiry-modal-heading" className="text-xl sm:text-2xl font-serif text-white">
                    Request Priority Pricing & Details
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#A0AFA8] mb-5 leading-relaxed">
                Connect with our senior residential portfolio director for confidential pricing, plot selection, and bespoke construction customizations.
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-950/60 border border-red-500/40 text-red-200 text-xs rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anand Mahindra"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37]"
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
                        className="w-full px-4 py-2.5 rounded-r-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="anand@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                      Preferred Configuration
                    </label>
                    <select
                      value={configuration}
                      onChange={(e) => setConfiguration(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="3 BHK Signature Villa (₹2.5 Cr*)">3 BHK Signature Villa (₹2.5 Cr*)</option>
                      <option value="4 BHK Presidential Villa (₹3.5 Cr*)">4 BHK Presidential Villa (₹3.5 Cr*)</option>
                      <option value="5 BHK Royal Estate Villa (Bespoke)">5 BHK Royal Estate Villa (Bespoke)</option>
                      <option value="Undecided / Open to options">Undecided / Exploring Options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                    Estimated Investment Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white text-sm focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="₹2.5 Cr - ₹3.5 Cr">₹2.5 Cr - ₹3.5 Cr</option>
                    <option value="₹3.5 Cr - ₹5.0 Cr">₹3.5 Cr - ₹5.0 Cr</option>
                    <option value="₹5.0 Cr - ₹8.0 Cr">₹5.0 Cr - ₹8.0 Cr</option>
                    <option value="₹8.0 Cr+ (Ultra-Luxury Trophy)">₹8.0 Cr+ (Trophy Estate)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#C5A880] mb-1 font-medium">
                    Custom Requirements / Questions
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Specific questions about plot facing, vastu, payment plans, or handover schedules..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#13251D] border border-[#C5A880]/30 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#D4AF37]"
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
                        Transmitting VIP Request...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit VIP Enquiry
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#A0AFA8] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Strict confidentiality assured. Direct developer representation.</span>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#163828] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">
                ENQUIRY REGISTERED
              </span>
              <h3 className="text-2xl font-serif text-white mt-1 mb-2">
                Thank You, {fullName}!
              </h3>
              <p className="text-sm text-[#A0AFA8] mb-5 max-w-sm mx-auto">
                Your priority enquiry has been routed to our Senior Relationship Manager. We will connect with your bespoke cost sheet within 15 minutes.
              </p>

              <div className="p-4 rounded-xl bg-[#14261E] border border-[#C5A880]/30 text-left mb-6 space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#A0AFA8]">VIP Reference:</span>
                  <span className="font-mono text-[#D4AF37] font-semibold">{leadId}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#A0AFA8]">Villa Selected:</span>
                  <span className="text-white font-medium">{configuration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0AFA8]">Budget Band:</span>
                  <span className="text-[#6EE7B7] font-medium">{budget}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-[#1C3227] hover:bg-[#254234] text-white text-xs tracking-wider uppercase font-semibold transition-colors"
                >
                  Done
                </button>
                <a
                  href={`https://wa.me/${PROJECT_DETAILS.whatsappNumber}?text=Hi%20DevSyntix%2C%20my%20VIP%20reference%20is%20${leadId}.%20I%20am%20interested%20in%20The%20Grand%20Estate%20villas.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs tracking-wider uppercase font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
